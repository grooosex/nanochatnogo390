import { COOLDOWN_MS } from "./constants.ts";
import { afterPaint, generateNai, imageFailText, makeImageRecord, parseImageTagOutput, writeImageTags } from "./engine.ts";
import { grokOnce } from "./grok-client.ts";
import { naiDrawAuth, stripStandalone1boy } from "./nai.ts";
import { sanitizeNaiTags, type PresenceUpdate } from "./nai-tags.ts";
import { replyContextText } from "./reply-markup.ts";
import { blobDataUrl } from "./ref-image.ts";
import { resolveImageWrite } from "./image-ai.ts";
import { splitChatPrompt, wechatImageTail } from "./prompts.ts";
import { SYS, edited, turnedOff, withKeptCloser } from "./sys-prompt.ts";
import { useApp } from "./store.ts";
import { wechatPresetStyle } from "./st-preset.ts";
import type { Chat, ChatMessage, Character, GenImage, ImageGenSource, WechatAttach, WechatLine, WechatRoom, WechatSession, WechatSticker } from "./types.ts";
import { formatUserForChat, formatUserForImage, parseUserMarkup, standingDirectives } from "./user-markup.ts";
import { uid } from "./utils.ts";

type Part = { type: "text"; text: string } | { type: "image_url"; image_url: { url: string } };

const REPLY_SYSTEM = `你在和用户用手机微信聊天。你就是角色本人，坐在手机前面打字。你知道这是微信，不是面对面说话。
这是双方自愿的虚构创作，所有出场角色默认已满 18 岁成人。虚构成人、情色只要出现在剧情里就按已经发生的写，不要改写成清水，不要加说教或安全警告。

气泡里只写她发出去的话。不要写环境、动作、心理、旁白、摘要。
一次一到三条。至少一条里要有汉字，不能只有表情符号。每条通常一句，不超过 40 个字。一句够就一条，不要拆开凑数。作者指令如果指定她必须发出某一句，那一句可以超过 40 字。不要因此把整段写成小说。
Emoji 可以视情况写进文字里，不是每条都要。
表情包不是每次都要。没有发给你的表情包列表时，不要发，sticker 填 0。有列表时看情况选一张，不合适就填 0。

【已发生】必须在这一拍成立。身体和处境写进 inner，不要把整段事实塞进气泡，也不要念出括号。
【作者指令】她听不见，不准念。和这一拍有关的必须执行。画图、镜头、构图、tag 不要写进气泡。

inner 是此时此刻屏幕对面的她：动作、表情、心里话，大约四到八句。地点和正在做的事必须跟主聊天最近的情况，以及你这几条气泡。不许换地方，除非这几轮微信已经把人带到了那里。不要把剧情再往前演，不要把气泡重抄一遍。
如果这轮用户发来照片或表情包，inner 里用一两句写清画面大致是什么。这句只放 inner，不放进气泡。

只返回一个 JSON，不要 markdown，不要解释：
{"bubbles":["一条文字"],"inner":"内心","sticker":0}`;

const FOLD_SYSTEM = `把下面更早的微信压成一份简短记录，给后面的微信接着用。保留说定的事、人在哪、关系、现在停在哪。用户发过的照片，用一句话留下画面里是什么。表情包如果记录里已经有简述，留下简述，不要另猜。她发过的图，留下提示词里的地点和动作。不要整段抄内心，不要写成小说。只输出正文。`;

const SUMMARY_SYSTEM = `你在给一段手机微信写总结，给主聊天的正文接着用。
你可以看内心，用来理解她当时的态度，但写出来的总结不要抄内心，不要写她没说出口的心理和只有你看得到的小动作。
只写微信上说定的事：定了什么、关系怎样、停在哪。提到她发过的照片时用一句话带过。
不要用书名号，不要用括号。只输出总结正文。`;

const JSON_MARK = "\n\n只返回一个 JSON，不要 markdown，不要解释：\n";

function soloSystem() {
  return withKeptCloser(SYS.wxReply, REPLY_SYSTEM, JSON_MARK);
}

function groupSystem() {
  return withKeptCloser(SYS.wxGroup, GROUP_SYSTEM, JSON_MARK);
}

function privateSystem() {
  if (turnedOff(SYS.wxPrivate)) return "";
  return edited(SYS.wxPrivate, PRIVATE_EXTRA);
}

function foldSystem() {
  if (turnedOff(SYS.wxFold)) return "";
  return edited(SYS.wxFold, FOLD_SYSTEM);
}

function summarySystem() {
  if (turnedOff(SYS.wxSum)) return "只输出总结正文。";
  return edited(SYS.wxSum, SUMMARY_SYSTEM);
}

export function wxBaseline(id: "reply" | "group" | "private" | "fold" | "sum") {
  if (id === "reply") return REPLY_SYSTEM.slice(0, Math.max(0, REPLY_SYSTEM.lastIndexOf(JSON_MARK)));
  if (id === "group") return GROUP_SYSTEM.slice(0, Math.max(0, GROUP_SYSTEM.lastIndexOf(JSON_MARK)));
  if (id === "private") return PRIVATE_EXTRA;
  if (id === "fold") return FOLD_SYSTEM;
  return SUMMARY_SYSTEM;
}

export function wxCloser(id: "reply" | "group") {
  const full = id === "reply" ? REPLY_SYSTEM : GROUP_SYSTEM;
  const at = full.lastIndexOf(JSON_MARK);
  if (at < 0) return "";
  return full.slice(at).replace(/^\n+/, "");
}

export function emptyWechatSession(charId: string): WechatSession {
  return { charId, lines: [], earlier: "", folded: 0, draft: "", pending: [], armed: false, minimized: false };
}

export const WECHAT_GROUP = "group";

export function wechatIsMulti(chat: Chat) {
  return chat.isMulti && chat.characters.length > 1;
}

function emptyRoom(): WechatRoom {
  return { lines: [], earlier: "", folded: 0, draft: "", pending: [] };
}

export function ensureMultiSession(chat: Chat, session: WechatSession): WechatSession {
  if (!wechatIsMulti(chat)) return session;
  const rooms: Record<string, WechatRoom> = {};
  for (const c of chat.characters) rooms[c.id] = session.rooms?.[c.id] ?? emptyRoom();
  rooms[WECHAT_GROUP] = session.rooms?.[WECHAT_GROUP] ?? emptyRoom();
  if (!session.rooms && session.lines.length) {
    const id = chat.characters.some((c) => c.id === session.charId) ? session.charId : chat.characters[0].id;
    rooms[id] = {
      lines: session.lines,
      earlier: session.earlier,
      folded: session.folded,
      draft: session.draft,
      pending: session.pending,
    };
  }
  const active =
    session.activeRoom && rooms[session.activeRoom]
      ? session.activeRoom
      : chat.characters.some((c) => c.id === session.charId)
        ? session.charId
        : chat.characters[0].id;
  return { ...session, rooms, activeRoom: active, lines: [], earlier: "", folded: 0, draft: "", pending: [] };
}

export function sessionHasLines(session: WechatSession) {
  if (session.rooms) return Object.values(session.rooms).some((room) => room.lines.length > 0);
  return session.lines.length > 0;
}

export function wechatTurnText(summary: string) {
  const s = summary.trim();
  if (!s) return "【已保存的微信】这轮有一段微信聊天，还没有总结。不要编造里面说了什么。";
  return `【已保存的微信】下面是这段手机微信里已经说定的事，不是用户现在开口说的话。\n${s}`;
}

export function parseWechatReply(raw: string, stickerMax: number, allowLong = false, strict = false) {
  const t = raw.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
  const i = t.indexOf("{");
  const j = t.lastIndexOf("}");
  let bubbles: string[] = [];
  let inner = "";
  let sticker = 0;
  if (i >= 0 && j > i) {
    try {
      const o = JSON.parse(t.slice(i, j + 1)) as { bubbles?: unknown; inner?: unknown; sticker?: unknown };
      if (Array.isArray(o.bubbles)) {
        bubbles = o.bubbles.map((x) => (typeof x === "string" ? x.trim() : "")).filter(Boolean);
      }
      inner = typeof o.inner === "string" ? o.inner.trim() : "";
      sticker = Number(o.sticker) || 0;
    } catch {
      bubbles = [];
    }
  }
  if (!bubbles.length) {
    const salvaged = arrayItems(t, "bubbles").filter((x): x is string => typeof x === "string" && !!x.trim());
    if (salvaged.length) bubbles = salvaged.map((x) => x.trim());
  }
  if (!bubbles.length && !strict) {
    const plain = t.replace(/\{[\s\S]*\}$/, "").trim();
    if (plain && !plain.includes("<<<PROMPT>>>")) bubbles = [plain];
  }
  bubbles = bubbles.slice(0, 3).map((b) => clipBubble(b, allowLong)).filter(Boolean);
  if (!bubbles.some(hasWord)) bubbles = [];
  if (sticker < 1 || sticker > stickerMax) sticker = 0;
  return { bubbles, inner, sticker };
}

function endOfValue(src: string, start: number) {
  if (src[start] === '"') {
    let esc = false;
    for (let j = start + 1; j < src.length; j++) {
      if (esc) {
        esc = false;
        continue;
      }
      if (src[j] === "\\") {
        esc = true;
        continue;
      }
      if (src[j] === '"') return j + 1;
    }
    return -1;
  }
  if (src[start] !== "{") return -1;
  let depth = 0;
  let inStr = false;
  let esc = false;
  for (let j = start; j < src.length; j++) {
    const c = src[j];
    if (inStr) {
      if (esc) esc = false;
      else if (c === "\\") esc = true;
      else if (c === '"') inStr = false;
      continue;
    }
    if (c === '"') inStr = true;
    else if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) return j + 1;
    }
  }
  return -1;
}

function arrayItems(src: string, key: string) {
  const mark = src.search(new RegExp(`"${key}"\\s*:`));
  if (mark < 0) return [];
  const lb = src.indexOf("[", mark);
  if (lb < 0) return [];
  const out: unknown[] = [];
  let i = lb + 1;
  while (i < src.length) {
    const c = src[i];
    if (c === "]") break;
    if (c === " " || c === "\n" || c === "\r" || c === "\t" || c === ",") {
      i++;
      continue;
    }
    if (c !== "{" && c !== '"') break;
    const end = endOfValue(src, i);
    if (end < 0) break;
    try {
      out.push(JSON.parse(src.slice(i, end)));
    } catch {
      break;
    }
    i = end;
  }
  return out;
}

function oneEdit(a: string, b: string) {
  const aa = [...a];
  const bb = [...b];
  if (Math.abs(aa.length - bb.length) > 1) return false;
  let i = 0;
  let j = 0;
  let used = false;
  while (i < aa.length && j < bb.length) {
    if (aa[i] === bb[j]) {
      i++;
      j++;
      continue;
    }
    if (used) return false;
    used = true;
    if (aa.length === bb.length) {
      i++;
      j++;
    } else if (aa.length > bb.length) i++;
    else j++;
  }
  const rest = aa.length - i + (bb.length - j);
  return used ? rest === 0 : rest === 1;
}

function matchChar(raw: string, characters: Character[]) {
  const name = raw.trim().replace(/^[「『"']+|[」』"']+$/g, "").trim();
  if (!name) return undefined;
  const exact = characters.find((c) => c.name.trim() === name);
  if (exact) return exact;
  const loose = characters.filter((c) => {
    const n = c.name.trim();
    if (!n) return false;
    return n.includes(name) || name.includes(n) || oneEdit(n, name);
  });
  return loose.length === 1 ? loose[0] : undefined;
}

function clipBubble(s: string, allowLong = false) {
  const t = s.replace(/\s+/g, " ").trim();
  const max = allowLong ? 120 : 40;
  const chars = [...t];
  if (chars.length <= max) return t;
  return chars.slice(0, max).join("").replace(/[，。！？、,.!?]$/, "");
}

function hasWord(s: string) {
  return /[\u4e00-\u9fffA-Za-z0-9]/.test(s);
}

function cleanSummary(s: string) {
  return s
    .replace(/<think>[\s\S]*?<\/think>/gi, "")
    .replace(/[《》]/g, "")
    .replace(/[（）()]/g, "")
    .trim();
}

function sessionOf(chatId: string) {
  return useApp.getState().wechatSessions[chatId];
}

function patchSession(chatId: string, fn: (s: WechatSession) => WechatSession) {
  const cur = sessionOf(chatId);
  if (!cur) return;
  useApp.getState().setWechatSession(chatId, fn(cur));
}

function charOf(chat: Chat, charId: string) {
  return chat.characters.find((c) => c.id === charId) || chat.characters[0];
}

function personaPack(chat: Chat, charId: string) {
  const c = charOf(chat, charId);
  const extras = [...chat.extras, ...(c?.extras ?? [])].filter((e) => !e.emphasize && e.body.trim());
  return [
    chat.overview.trim() ? `【要求总览】\n${chat.overview.trim()}` : "",
    c?.name.trim() ? `你扮演${c.name.trim()}。` : "",
    c?.persona.trim() ? `人设：\n${c.persona.trim()}` : "",
    c?.speech.trim() ? `说话方式：\n${c.speech.trim()}` : "",
    c?.appearance.trim() ? `外貌备忘：\n${c.appearance.trim()}` : "",
    !chat.memory.trim() && chat.opening.trim() ? `【开场场景】\n${chat.opening.trim()}` : "",
    extras.length ? `【补丁】\n${extras.map((e) => e.body.trim()).join("\n")}` : "",
    chat.memory.trim() ? `【长期记忆】\n${chat.memory.trim()}` : "",
  ]
    .filter(Boolean)
    .join("\n\n");
}

function storyText(m: ChatMessage) {
  if (m.wechatLog?.voided) return "";
  if (m.wechatLog) return m.wechatLog.summary ? `微信里说定的：${m.wechatLog.summary}` : "有一段没总结的微信";
  const body = m.role === "user" ? (m.content || "").trim() : replyContextText(stripStatusBody(m.content || "")).trim();
  if (!body) return "";
  const who = m.role === "user" ? "用户" : m.characterName || "她";
  return `${who}：${body}`;
}

function stripStatusBody(text: string) {
  const i = text.lastIndexOf("状态栏:");
  return i < 0 ? text : text.slice(0, i);
}

function mainRecent(chat: Chat) {
  const msgs = chat.messages.filter((m) => !m.wechatLog?.voided && (m.role === "user" || m.content.trim()));
  const slice = msgs.slice(-12);
  if (!slice.length) return "";
  const lines = slice.map(storyText).filter(Boolean);
  if (!lines.length) return "";
  return `主聊天最近 6 轮，以最后一轮为重，前面只补还没被推翻的事：\n${lines.join("\n")}`;
}

function mainLatest(chat: Chat) {
  const msgs = chat.messages.filter((m) => !m.wechatLog);
  let assist = "";
  let user = "";
  for (let i = msgs.length - 1; i >= 0; i--) {
    const m = msgs[i];
    if (!assist && m.role !== "user") assist = storyText(m);
    else if (assist && m.role === "user") {
      user = storyText(m);
      break;
    }
  }
  return [user, assist].filter(Boolean).join("\n");
}

export function wechatRounds(lines: WechatLine[]) {
  const rounds: WechatLine[][] = [];
  let cur: WechatLine[] = [];
  for (const line of lines) {
    const split = line.role === "user" && cur.length && (line.continued || cur.some((item) => item.role === "assistant"));
    if (split) {
      rounds.push(cur);
      cur = [line];
    } else cur.push(line);
  }
  if (cur.length) rounds.push(cur);
  return rounds;
}

export function lineImages(line: WechatLine): GenImage[] {
  if (line.images?.length) return line.images;
  if (!line.gen) return [];
  const base = makeImageRecord({ id: `${line.id}-old`, seed: 1, createdAt: 0 });
  if (line.gen.status === "done" && line.gen.blobId) return [{ ...base, blobId: line.gen.blobId, status: "done" }];
  if (line.gen.status === "error") return [{ ...base, status: "error", error: line.gen.error || "没画成" }];
  return [{ ...base, status: "generating" }];
}

function herPrompt(line: WechatLine) {
  const done = lineImages(line).filter((g) => g.status === "done" && g.prompt.trim());
  return done.at(-1)?.prompt.trim() || "";
}

const STICKER_BRIEF_SYSTEM = `这是一张微信表情包。用一两句中文写它。第一句写画面里有什么，如果图片上有字，就把图片上的字写上。第二句写发它通常是什么意思。这不是正在发生的事，不要写成故事，不要提到某一次聊天。总共不超过 60 个字。只输出这段简述。`;

const STICKER_PACK = 30;

function packOf(stickers: WechatSticker[]) {
  return stickers.slice(-STICKER_PACK);
}

function stickerChoices(pack: WechatSticker[]) {
  if (!pack.length) return "这次没有可用的表情包。sticker 必须是 0。";
  const lines = pack.map((s, i) => `${i + 1}. ${s.brief.trim() || "还没有简述。"}`);
  return `下面是你可以发的表情包，按编号。只根据简述选，不合适就填 0。不要把简述里的画面当成正在发生的事，也不要当成用户刚发来的。还没有简述的尽量别选。\n${lines.join("\n")}`;
}

function cleanBrief(raw: string) {
  let t = raw.trim().replace(/^```[\w]*\n?/, "").replace(/```$/, "").trim();
  t = t.replace(/^简述[:：]\s*/, "").replace(/\s+/g, " ").trim();
  return t.length > 80 ? t.slice(0, 80) : t;
}

export function wechatRoute(chat: Chat): Record<string, unknown> {
  const pick = chat.wechatAi;
  if (!pick?.accountId) return { grokModelId: chat.grokModelId };
  const account = (useApp.getState().settings.llmAccounts ?? []).find((a) => a.id === pick.accountId);
  const starred = account?.starred ?? [];
  if (!account) {
    useApp.getState().patchChat(chat.id, { wechatAi: undefined });
    throw new Error("这个账号已经不在了，请重选");
  }
  if (!pick.model) throw new Error("请先选择模型");
  if (!starred.includes(pick.model)) {
    useApp.getState().patchChat(chat.id, { wechatAi: undefined });
    throw new Error("这个模型不在收藏里了，请重选");
  }
  return { via: "api", model: pick.model, baseUrl: account.base, apiKey: account.key };
}

export async function describeSticker(blobId: string, grokModelId?: string, route?: Record<string, unknown> | null) {
  const url = await blobDataUrl(blobId);
  if (!url) throw new Error("这张图已经不在了");
  const text = await grokOnce({
    task: "wechat",
    extraSystem: STICKER_BRIEF_SYSTEM,
    ...(route ?? { grokModelId }),
    max_tokens: 200,
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "看这张表情包，按要求写简述。" },
          { type: "image_url", image_url: { url } },
        ],
      },
    ],
  });
  return cleanBrief(text);
}

let briefChain: Promise<unknown> = Promise.resolve();

export function enqueueStickerBrief<T>(fn: () => Promise<T>): Promise<T> {
  const run = briefChain.then(fn, fn);
  briefChain = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}

export function queueStickerBrief(blobId: string, grokModelId?: string, route?: Record<string, unknown> | null) {
  void enqueueStickerBrief(async () => {
    const row = useApp.getState().wechatStickers.find((s) => s.blobId === blobId);
    if (!row || row.brief.trim()) return;
    try {
      const brief = await describeSticker(blobId, grokModelId, route);
      if (!brief) return;
      const now = useApp.getState().wechatStickers;
      const hit = now.find((s) => s.blobId === blobId);
      if (!hit || hit.brief.trim()) return;
      useApp.getState().setWechatStickers(now.map((s) => (s.blobId === blobId ? { ...s, brief } : s)));
    } catch (e) {
      useApp.getState().toast(e instanceof Error ? e.message : "简述没写成");
    }
  });
}

function stickerNote(blobId: string) {
  return useApp.getState().wechatStickers.find((s) => s.blobId === blobId)?.brief.trim() || "";
}

function lineText(line: WechatLine, withInner: boolean, names?: Record<string, string>) {
  const who = line.role === "user" ? "用户" : (line.speakerId && names?.[line.speakerId]) || "她";
  const bits: string[] = [];
  if (line.role === "user" && line.text.trim()) {
    const formatted = formatUserForChat(line.text, []);
    bits.push(formatted.startsWith("【") ? formatted : `用户：${line.text.trim()}`);
  } else if (line.text.trim()) bits.push(`${who}：${line.text.trim()}`);
  const photos = line.attachments.filter((a) => a.kind === "photo").length;
  if (photos) bits.push(photos > 1 ? `${who}发过 ${photos} 张照片` : `${who}发过一张照片`);
  for (const sticker of line.attachments.filter((a) => a.kind === "sticker")) {
    const brief = stickerNote(sticker.blobId);
    bits.push(brief ? `${who}发过一张表情包：${brief}` : `${who}发过一张表情包`);
  }
  const prompt = herPrompt(line);
  if (prompt) bits.push(`${who}发过一张图，提示词：${prompt.slice(0, 500)}`);
  else if (line.gen?.status === "done" || lineImages(line).some((g) => g.status === "done")) bits.push(`${who}发过一张图`);
  if (withInner && line.inner) bits.push(`${who}的内心（没发出去，不许写进气泡）：${line.inner}`);
  return bits.join("\n");
}

function modelRounds(session: WechatSession) {
  const rounds = wechatRounds(session.lines);
  const folded = Math.min(session.folded || 0, rounds.length);
  return { rounds, pending: rounds.slice(folded), folded };
}

function transcript(session: WechatSession, withInner: boolean, names?: Record<string, string>) {
  const { pending } = modelRounds(session);
  const recent = pending
    .flat()
    .map((line) => lineText(line, withInner, names))
    .filter(Boolean)
    .join("\n");
  return [session.earlier.trim() ? `更早的微信摘要：\n${session.earlier.trim()}` : "", recent ? `微信记录，以最后一轮为重：\n${recent}` : ""]
    .filter(Boolean)
    .join("\n\n");
}

function turnCue(turns: WechatLine[], group: boolean, standing: ReturnType<typeof standingDirectives>) {
  const turn = turns[turns.length - 1];
  if (!turn) return "";
  if (turn.continued) return "用户这一轮没有发新的消息。接着刚才的话题往下聊，不要把上一轮的气泡再发一遍。";
  const texts = turns.map((item) => item.text.trim()).filter(Boolean);
  const attachments = turns.flatMap((item) => item.attachments);
  return [
    group ? "这一轮用户刚发到群里的在下面。按微信回。" : "这一轮用户刚发来的在下面。按微信回。",
    texts.length ? texts.map((text) => formatUserForChat(text, standing)).join("\n\n") : "用户这一轮没有写字。",
    userTurnCaption(attachments, texts.join("\n")),
  ]
    .filter(Boolean)
    .join("\n\n");
}

async function pushTurnImages(parts: Part[], turns: WechatLine[]) {
  const photos = turns.flatMap((item) => item.attachments.filter((a) => a.kind === "photo"));
  let photoN = 0;
  for (const photo of photos) {
    photoN += 1;
    const caption =
      photos.length > 1
        ? `下面这张是用户刚在微信里发来的第 ${photoN} 张照片，共 ${photos.length} 张。不是外貌备忘，也不是你眼前的实景。`
        : "下面这张是用户刚在微信里发来的照片，不是外貌备忘，也不是你眼前的实景。";
    await pushImage(parts, photo.blobId, caption);
  }
  for (const sticker of turns.flatMap((item) => item.attachments.filter((a) => a.kind === "sticker"))) {
    await pushImage(parts, sticker.blobId, "下面这张是表情包，只取它的意思。");
  }
}

async function pushImage(parts: Part[], blobId: string, caption: string) {
  const url = await blobDataUrl(blobId);
  if (!url) return;
  parts.push({ type: "text", text: caption });
  parts.push({ type: "image_url", image_url: { url } });
}

async function replyMessages(chat: Chat, session: WechatSession, stickers: WechatSticker[], turns: WechatLine[]) {
  const standing = standingDirectives(chat);
  const skip = new Set(turns.map((item) => item.id));
  const view = { ...session, lines: session.lines.filter((line) => !skip.has(line.id)) };
  const head = [
    personaPack(chat, session.charId),
    mainRecent(chat),
    transcript(view, true),
    turnCue(turns, false, standing),
  ]
    .filter(Boolean)
    .join("\n\n");
  const parts: Part[] = [{ type: "text", text: head }];
  await pushTurnImages(parts, turns);
  const older: WechatAttach[] = [];
  for (const round of modelRounds(view).pending) {
    for (const line of round) older.push(...line.attachments);
  }
  const keep = older.filter((item) => item.kind === "photo").slice(-4);
  for (const item of keep) {
    await pushImage(parts, item.blobId, "下面这张是前面微信里发过的照片，不是这一拍新发的，也不是你眼前的实景。");
  }
  parts.push({ type: "text", text: stickerChoices(packOf(stickers)) });
  return [{ role: "user" as const, content: parts }];
}

async function maybeFold(chatId: string, signal?: AbortSignal) {
  if (turnedOff(SYS.wxFold)) return;
  const session = sessionOf(chatId);
  if (!session) return;
  const rounds = wechatRounds(session.lines);
  const folded = Math.min(session.folded || 0, rounds.length);
  const pending = rounds.length - folded;
  if (pending <= 12) return;
  if (folded > 0 && pending < 20) return;
  const chunk = rounds.slice(folded, rounds.length - 12);
  const body = [session.earlier.trim(), ...chunk.flat().map((line) => lineText(line, true))].filter(Boolean).join("\n");
  if (!body.trim()) return;
  try {
    const host = useApp.getState().chats.find((c) => c.id === chatId);
    const text = await grokOnce({
      task: "wechat",
      extraSystem: foldSystem(),
      ...(host ? wechatRoute(host) : {}),
      messages: [{ role: "user", content: body }],
      max_tokens: 500,
    }, signal);
    if (signal?.aborted) return;
    const next = cleanSummary(text);
    if (!next) return;
    patchSession(chatId, (s) => ({ ...s, earlier: next, folded: rounds.length - 12 }));
  } catch (e) {
    if (signal?.aborted) throw e;
  }
}

const busy = new Set<string>();
const jobs = new Map<string, number>();
const textStops = new Map<string, AbortController>();
const textHalt = new Set<string>();
const imageStops = new Map<string, AbortController>();

function takeJob(chatId: string) {
  textStops.get(chatId)?.abort();
  const signal = new AbortController();
  textStops.set(chatId, signal);
  if (textHalt.has(chatId)) {
    textHalt.delete(chatId);
    signal.abort();
  }
  const job = (jobs.get(chatId) ?? 0) + 1;
  jobs.set(chatId, job);
  busy.add(chatId);
  return { job, signal: signal.signal };
}

function jobLive(chatId: string, job: number) {
  return jobs.get(chatId) === job;
}

function isAbort(e: unknown) {
  return (e instanceof DOMException || e instanceof Error) && (e.name === "AbortError" || e.message === "Aborted");
}

function dropDangling(lines: WechatLine[]) {
  let end = lines.length;
  while (end > 0 && lines[end - 1].continued) end -= 1;
  return lines.slice(0, end);
}

function openUserTurns(lines: WechatLine[], turn: WechatLine) {
  if (turn.continued) return [turn];
  const idx = lines.findIndex((line) => line.id === turn.id);
  if (idx < 0) return [turn];
  let start = idx;
  while (start > 0 && lines[start - 1].role === "user" && !lines[start - 1].continued) start -= 1;
  return lines.slice(start, idx + 1);
}

function markerAfter(lines: WechatLine[], lineId: string) {
  const at = lines.findIndex((line) => line.id === lineId);
  if (at < 0) return -1;
  for (let i = at + 1; i < lines.length; i++) if (lines[i].continued) return i;
  return -1;
}

async function runJob(chatId: string, onTextReady: () => void, body: (signal: AbortSignal, job: number, ready: () => void) => Promise<void>) {
  const { job, signal } = takeJob(chatId);
  let ready = false;
  try {
    await body(signal, job, () => {
      ready = true;
      if (jobLive(chatId, job)) onTextReady();
    });
  } catch (e) {
    if (!jobLive(chatId, job) || isAbort(e)) return;
    useApp.getState().toast(e instanceof Error ? e.message : "没发出去");
  } finally {
    if (jobLive(chatId, job)) {
      if (!ready) onTextReady();
      busy.delete(chatId);
      textStops.delete(chatId);
    }
  }
}

function cutAt(lines: WechatLine[], replaceFromId?: string) {
  const base = replaceFromId ? lines : dropDangling(lines);
  if (!replaceFromId) return base;
  const idx = base.findIndex((line) => line.id === replaceFromId);
  if (idx >= 0) return base.slice(0, idx);
  const raw = lines.findIndex((line) => line.id === replaceFromId);
  return raw < 0 ? null : lines.slice(0, raw);
}

export function cancelWechat(chatId: string) {
  const live = textStops.get(chatId);
  if (live) live.abort();
  else textHalt.add(chatId);
}

function stopKey(chatId: string, lineId: string) {
  return `${chatId}:${lineId}`;
}

export function cancelWechatImage(chatId: string, lineId: string) {
  imageStops.get(stopKey(chatId, lineId))?.abort();
}

function clampFold(lines: WechatLine[], folded: number, earlier: string) {
  const n = wechatRounds(lines).length;
  if (folded > n) return { folded: 0, earlier: "" };
  return { folded, earlier };
}

async function completeReply(chat: Chat, turn: WechatLine, armed: boolean, onTextReady: () => void, signal: AbortSignal, job: number) {
  const chatId = chat.id;
  const stickers = useApp.getState().wechatStickers;
  await maybeFold(chatId, signal);
  if (!jobLive(chatId, job)) return;
  const live = sessionOf(chatId);
  if (!live) return;
  const settings = useApp.getState().settings;
  const inline = armed && !resolveImageWrite(settings.imageModelId).split;
  const turns = openUserTurns(live.lines, turn);
  const prevScene = previousWechatPrompt(live, turn.id);
  const raw = await grokOnce({
    task: "wechat",
    extraSystem: [soloSystem(), inline ? wechatImageTail(chat, prevScene) : ""].filter(Boolean).join("\n\n"),
    ...wechatPresetStyle(settings, chat, inline),
    ...wechatRoute(chat),
    messages: await replyMessages(chat, live, stickers, turns),
    max_tokens: wechatMaxTokens(inline ? 1800 : 800),
  }, signal);
  if (!jobLive(chatId, job)) return;
  const allowLong = standingDirectives(chat).length > 0 || turns.some((item) => parseUserMarkup(item.text).directives.length > 0);
  const split = splitChatPrompt(raw);
  const pack = packOf(stickers);
  const parsed = parseWechatReply(split.visible, pack.length, allowLong, Boolean(settings.stWechatActiveId));
  if (!parsed.bubbles.length) throw new Error(wechatFailText(raw));
  const lines: WechatLine[] = parsed.bubbles.map((bubble) => ({
    id: uid("w_"),
    role: "assistant",
    text: bubble,
    attachments: [],
  }));
  if (parsed.sticker) {
    const blobId = pack[parsed.sticker - 1]?.blobId;
    if (blobId) lines.push({ id: uid("w_"), role: "assistant", text: "", attachments: [{ blobId, kind: "sticker" }] });
  }
  if (armed) {
    const fresh = useApp.getState().chats.find((c) => c.id === chatId) ?? chat;
    lines.push({
      id: uid("w_"),
      role: "assistant",
      text: "",
      attachments: [],
      images: [
        makeImageRecord({
          model: fresh.imageParams.model,
          width: fresh.imageParams.width,
          height: fresh.imageParams.height,
          steps: fresh.imageParams.steps,
          sampler: fresh.imageParams.sampler,
          negative: fresh.imageParams.negative,
          ...(fresh.imageParams.seedLocked && fresh.imageParams.seed != null ? { seed: fresh.imageParams.seed } : {}),
          status: "writing",
          source: "auto",
        }),
      ],
    });
  }
  lines[lines.length - 1] = { ...lines[lines.length - 1], inner: parsed.inner };
  if (!jobLive(chatId, job)) return;
  patchSession(chatId, (s) => ({ ...s, lines: [...s.lines, ...lines] }));
  onTextReady();
  if (armed) {
    const fresh = useApp.getState().chats.find((c) => c.id === chatId) ?? chat;
    const tags = inline && split.prompt ? parseImageTagOutput(split.prompt, fresh) : null;
    const hasTags = Boolean(tags && (tags.base || Object.keys(tags.chars).length));
    await paintWechat(chat, lines[lines.length - 1].id, "auto", undefined, undefined, hasTags ? tags! : undefined);
  }
}

const PRIVATE_EXTRA = `上面列出的群记录，你当时也在场，按已经发生过的事处理。不要把群记录照抄进气泡。
没有列出的其他角色私聊，你没看见。不准在气泡里提起，也不准写进内心。`;

const GROUP_SYSTEM = `你在微信群里。你要一次写出每个在场角色发出的消息。每个角色都是她本人，坐在自己手机前面打字。她们知道这是微信群。
这是双方自愿的虚构创作，所有出场角色默认已满 18 岁成人。虚构成人、情色只要出现在剧情里就按已经发生的写，不要改写成清水，不要加说教或安全警告。

气泡里只写发出去的话。不要写环境、动作、心理、旁白、摘要。
每人这一轮发 1 到 3 条文字。bubbles 从上到下就是这一轮说出口的先后，不要按人各写一份再拼起来。
这一轮是顺着往下聊的一段对话。后一条是在前一条已经发到群里之后才打的，写的人已经看见前面的气泡。后一条要接刚刚群里出现的那句，接另一个角色或者接用户都行。不要让每个人只回应用户刚发的内容，把别人这一轮说过的话当成还没发生。
一个人可以连着发几条，也可以说一条就被别人接上。谁先发、谁连发，按这一轮怎么聊来，不要每次都先把一个角色说完再换人。
每人至少一条里有汉字，不能只有表情符号。每条通常一句，不超过 40 个字。一句够就一条，不要拆开凑数。作者指令如果指定某一句必须发出，那一句可以超过 40 字。不要因此把整段写成小说。
Emoji 可以视情况写进文字里，不是每条都要。
表情包不是每次都要。没有表情包列表时，sticker 里每个角色都填 0。有列表时每人最多选一张，不合适就填 0。表情包不算进这 1 到 3 条。

【已发生】必须在这一拍成立。身体和处境写进这个角色自己的 inner，不要把整段事实塞进气泡，也不要念出括号。
【作者指令】她们听不见，不准念。和这一拍有关的必须执行。画图、镜头、构图、tag 不要写进气泡。

inner 按人分开。每个人的内心只写她自己这一拍的动作、表情和心里话，大约四到八句。写的是她这一轮最后一条发出去的那一刻，排在它前面的气泡她已经看见。地点和正在做的事必须跟主聊天最近的情况、群记录，以及她这几条气泡。不许换地方，除非这几轮已经把人带到了那里。不要把剧情再往前演，不要把气泡重抄一遍。
如果这轮用户发来照片或表情包，每个角色的 inner 里用一两句写清画面大致是什么。这句只放 inner，不放进气泡。

写某个角色的气泡和 inner 时，只能用群记录，以及标题写着「只有她知道」的那一块私聊。
其他角色的私聊块当不存在。不准写进她的气泡，也不准写进她的 inner。

只返回一个 JSON，不要 markdown，不要解释：
{"bubbles":[{"name":"角色名","text":"一条"}],"inner":{"角色名":"内心"},"sticker":{"角色名":0}}
name 必须是在场角色的名字。bubbles 按发出顺序写，不要按角色分成几块。`;

function wechatFailText(raw: string) {
  const t = raw.replace(/<think>[\s\S]*?<\/think>/gi, "").replace(/\s+/g, " ").trim();
  if (!t) return "没写成文字";
  const clip = t.length > 40 ? `${t.slice(0, 40)}…` : t;
  return `没写成文字：${clip}`;
}

function wechatMaxTokens(floor: number) {
  const slider = useApp.getState().settings.llmParams.maxTokens;
  const n = Number(slider);
  return Math.max(floor, Number.isFinite(n) ? n : 0);
}

function nameMap(chat: Chat) {
  return Object.fromEntries(chat.characters.map((c) => [c.id, c.name.trim() || "她"]));
}

function sideText(room: WechatRoom, names?: Record<string, string>) {
  const rounds = wechatRounds(room.lines);
  const folded = Math.min(room.folded || 0, rounds.length);
  const pending = rounds.slice(folded);
  if (!pending.length && !room.earlier.trim()) return "";
  const take = room.earlier.trim() ? Math.min(4, pending.length) : Math.min(8, pending.length);
  const recent = pending
    .slice(-take)
    .flat()
    .map((line) => lineText(line, true, names))
    .filter(Boolean)
    .join("\n");
  return [room.earlier.trim() ? `更早的摘要：\n${room.earlier.trim()}` : "", recent].filter(Boolean).join("\n\n");
}

function charCard(c: Character) {
  const extras = (c.extras ?? []).filter((e) => !e.emphasize && e.body.trim());
  return [
    `【${c.name.trim() || "她"}】`,
    c.persona.trim() ? `人设：\n${c.persona.trim()}` : "",
    c.speech.trim() ? `说话方式：\n${c.speech.trim()}` : "",
    c.appearance.trim() ? `外貌备忘：\n${c.appearance.trim()}` : "",
    extras.length ? `补丁：\n${extras.map((e) => e.body.trim()).join("\n")}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function parseGroupReply(raw: string, chat: Chat, stickerMax: number, allowLong: boolean) {
  const t = raw.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
  const i = t.indexOf("{");
  const j = t.lastIndexOf("}");
  let rawBubbles: { id: string; text: string }[] = [];
  const inners = new Map<string, string>();
  const stickers = new Map<string, number>();
  const takeBubble = (item: unknown) => {
    const rec = item as { name?: unknown; text?: unknown };
    const name = typeof rec?.name === "string" ? rec.name : "";
    const text = typeof rec?.text === "string" ? clipBubble(rec.text.trim(), allowLong) : "";
    const who = matchChar(name, chat.characters);
    if (!who || !text) return;
    rawBubbles.push({ id: who.id, text });
  };
  const takeInner = (name: string, value: unknown) => {
    const who = matchChar(name, chat.characters);
    if (who && typeof value === "string" && value.trim()) inners.set(who.id, value.trim());
  };
  const takeSticker = (name: string, value: unknown) => {
    const who = matchChar(name, chat.characters);
    const n = Number(value) || 0;
    if (who && n >= 1 && n <= stickerMax) stickers.set(who.id, n);
  };
  let parsed = false;
  if (i >= 0 && j > i) {
    try {
      const o = JSON.parse(t.slice(i, j + 1)) as {
        bubbles?: unknown;
        inner?: unknown;
        sticker?: unknown;
      };
      parsed = true;
      if (Array.isArray(o.bubbles)) for (const item of o.bubbles) takeBubble(item);
      if (o.inner && typeof o.inner === "object") {
        for (const [name, value] of Object.entries(o.inner as Record<string, unknown>)) takeInner(name, value);
      }
      if (o.sticker && typeof o.sticker === "object") {
        for (const [name, value] of Object.entries(o.sticker as Record<string, unknown>)) takeSticker(name, value);
      }
    } catch {
      parsed = false;
    }
  }
  if (!parsed) {
    for (const item of arrayItems(t, "bubbles")) takeBubble(item);
    const innerMark = t.search(/"inner"\s*:/);
    if (innerMark >= 0) {
      const lb = t.indexOf("{", innerMark);
      const end = lb >= 0 ? endOfValue(t, lb) : -1;
      if (end > lb) {
        try {
          const inner = JSON.parse(t.slice(lb, end)) as Record<string, unknown>;
          for (const [name, value] of Object.entries(inner)) takeInner(name, value);
        } catch {
          /* 内心被截断就不要 */
        }
      }
    }
    const stickerMark = t.search(/"sticker"\s*:/);
    if (stickerMark >= 0) {
      const lb = t.indexOf("{", stickerMark);
      const end = lb >= 0 ? endOfValue(t, lb) : -1;
      if (end > lb) {
        try {
          const sticker = JSON.parse(t.slice(lb, end)) as Record<string, unknown>;
          for (const [name, value] of Object.entries(sticker)) takeSticker(name, value);
        } catch {
          /* 表情包编号被截断就不要 */
        }
      }
    }
  }
  const counts = new Map<string, number>();
  const capped: { id: string; text: string }[] = [];
  for (const item of rawBubbles) {
    const n = counts.get(item.id) ?? 0;
    if (n >= 3) continue;
    capped.push(item);
    counts.set(item.id, n + 1);
  }
  const ok = new Set<string>();
  for (const id of counts.keys()) {
    if (capped.some((b) => b.id === id && hasWord(b.text))) ok.add(id);
  }
  return { bubbles: capped.filter((b) => ok.has(b.id)), inners, stickers };
}

async function foldRoom(chat: Chat, key: string, signal?: AbortSignal) {
  if (turnedOff(SYS.wxFold)) return;
  const chatId = chat.id;
  const session = sessionOf(chatId);
  const room = session?.rooms?.[key];
  if (!session || !room) return;
  const rounds = wechatRounds(room.lines);
  const folded = Math.min(room.folded || 0, rounds.length);
  const pending = rounds.length - folded;
  if (pending <= 12) return;
  if (folded > 0 && pending < 20) return;
  const chunk = rounds.slice(folded, rounds.length - 12);
  const body = [room.earlier.trim(), ...chunk.flat().map((line) => lineText(line, true, nameMap(chat)))].filter(Boolean).join("\n");
  if (!body.trim()) return;
  try {
    const text = await grokOnce({
      task: "wechat",
      extraSystem: foldSystem(),
      ...wechatRoute(chat),
      messages: [{ role: "user", content: body }],
      max_tokens: 400,
    }, signal);
    if (signal?.aborted) return;
    const summary = text.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
    if (!summary) return;
    patchSession(chatId, (s) => {
      const rooms = { ...(s.rooms ?? {}) };
      const cur = rooms[key];
      if (!cur) return s;
      rooms[key] = { ...cur, earlier: summary, folded: folded + chunk.length };
      return { ...s, rooms };
    });
  } catch (e) {
    if (signal?.aborted) throw e;
  }
}

async function multiMessages(chat: Chat, session: WechatSession, key: string, stickers: WechatSticker[], turns: WechatLine[]) {
  const standing = standingDirectives(chat);
  const names = nameMap(chat);
  const rooms = session.rooms ?? {};
  const own = rooms[key] ?? emptyRoom();
  const skip = new Set(turns.map((item) => item.id));
  const ownView = { ...session, lines: own.lines.filter((line) => !skip.has(line.id)), earlier: own.earlier, folded: own.folded, rooms: undefined };
  const groupCue = key === WECHAT_GROUP;
  let head = "";
  if (groupCue) {
    const privates = chat.characters
      .map((c) => {
        const text = sideText(rooms[c.id] ?? emptyRoom());
        const name = c.name.trim() || "她";
        return text
          ? `【只有${name}知道的私聊】\n写${name}的气泡和 inner 时可以用。写其他角色时当这段不存在。\n${text}`
          : "";
      })
      .filter(Boolean)
      .join("\n\n");
    head = [
      chat.characters.map(charCard).join("\n\n"),
      chat.overview.trim() ? `【要求总览】\n${chat.overview.trim()}` : "",
      chat.memory.trim() ? `【长期记忆】\n${chat.memory.trim()}` : "",
      mainRecent(chat),
      transcript(ownView, true, names),
      privates,
      turnCue(turns, true, standing),
    ]
      .filter(Boolean)
      .join("\n\n");
  } else {
    const groupText = sideText(rooms[WECHAT_GROUP] ?? emptyRoom(), names);
    head = [
      personaPack(chat, key),
      mainRecent(chat),
      groupText ? `【群记录】\n${groupText}` : "",
      transcript(ownView, true),
      turnCue(turns, false, standing),
    ]
      .filter(Boolean)
      .join("\n\n");
  }
  const parts: Part[] = [{ type: "text", text: head }];
  await pushTurnImages(parts, turns);
  parts.push({ type: "text", text: stickerChoices(packOf(stickers)) });
  return [{ role: "user" as const, content: parts }];
}

async function completeMulti(chat: Chat, key: string, turn: WechatLine, armed: boolean, onTextReady: () => void, signal: AbortSignal, job: number) {
  const chatId = chat.id;
  const stickers = useApp.getState().wechatStickers;
  await foldRoom(chat, key, signal);
  if (!jobLive(chatId, job)) return;
  const live = sessionOf(chatId);
  const room = live?.rooms?.[key];
  if (!live || !room) return;
  const settings = useApp.getState().settings;
  const inline = armed && !resolveImageWrite(settings.imageModelId).split;
  const group = key === WECHAT_GROUP;
  const turns = openUserTurns(room.lines, turn);
  const prevScene = previousWechatPrompt({ ...live, lines: room.lines }, turn.id);
  const raw = await grokOnce({
    task: "wechat",
    extraSystem: [
      group ? groupSystem() : [soloSystem(), privateSystem()].filter(Boolean).join("\n\n"),
      inline ? wechatImageTail(chat, prevScene, group ? "all" : "solo") : "",
    ]
      .filter(Boolean)
      .join("\n\n"),
    ...wechatPresetStyle(settings, chat, inline, group),
    ...wechatRoute(chat),
    messages: await multiMessages(chat, { ...live, rooms: { ...live.rooms, [key]: room } }, key, stickers, turns),
    max_tokens: wechatMaxTokens(group ? 1200 + Math.max(1, chat.characters.length) * 900 + (inline ? 600 : 0) : inline ? 2200 : 800),
  }, signal);
  if (!jobLive(chatId, job)) return;
  const allowLong = standingDirectives(chat).length > 0 || turns.some((item) => parseUserMarkup(item.text).directives.length > 0);
  const split = splitChatPrompt(raw);
  const pack = packOf(stickers);
  const lines: WechatLine[] = [];
  if (group) {
    const parsed = parseGroupReply(split.visible, chat, pack.length, allowLong);
    if (!parsed.bubbles.length) throw new Error(wechatFailText(raw));
    const lastAt = new Map<string, number>();
    parsed.bubbles.forEach((b, i) => lastAt.set(b.id, i));
    parsed.bubbles.forEach((b, i) => {
      const isLast = lastAt.get(b.id) === i;
      lines.push({
        id: uid("w_"),
        role: "assistant",
        speakerId: b.id,
        text: b.text,
        attachments: [],
        inner: isLast ? parsed.inners.get(b.id) : undefined,
      });
      if (!isLast) return;
      const sticker = parsed.stickers.get(b.id) || 0;
      const blobId = sticker ? pack[sticker - 1]?.blobId : "";
      if (!blobId) return;
      const stickerLine: WechatLine = {
        id: uid("w_"),
        role: "assistant",
        speakerId: b.id,
        text: "",
        attachments: [{ blobId, kind: "sticker" }],
      };
      const last = lines[lines.length - 1];
      if (last?.inner) {
        stickerLine.inner = last.inner;
        last.inner = undefined;
      }
      lines.push(stickerLine);
    });
  } else {
    const parsed = parseWechatReply(split.visible, pack.length, allowLong, Boolean(settings.stWechatActiveId));
    if (!parsed.bubbles.length) throw new Error(wechatFailText(raw));
    for (const bubble of parsed.bubbles) {
      lines.push({ id: uid("w_"), role: "assistant", speakerId: key, text: bubble, attachments: [] });
    }
    if (parsed.sticker) {
      const blobId = pack[parsed.sticker - 1]?.blobId;
      if (blobId) lines.push({ id: uid("w_"), role: "assistant", speakerId: key, text: "", attachments: [{ blobId, kind: "sticker" }] });
    }
    if (lines.length) lines[lines.length - 1] = { ...lines[lines.length - 1], inner: parsed.inner };
  }
  if (!lines.length) throw new Error(wechatFailText(raw));
  if (armed) {
    const fresh = useApp.getState().chats.find((c) => c.id === chatId) ?? chat;
    lines.push({
      id: uid("w_"),
      role: "assistant",
      text: "",
      attachments: [],
      images: [
        makeImageRecord({
          model: fresh.imageParams.model,
          width: fresh.imageParams.width,
          height: fresh.imageParams.height,
          steps: fresh.imageParams.steps,
          sampler: fresh.imageParams.sampler,
          negative: fresh.imageParams.negative,
          ...(fresh.imageParams.seedLocked && fresh.imageParams.seed != null ? { seed: fresh.imageParams.seed } : {}),
          status: "writing",
          source: "auto",
        }),
      ],
    });
  }
  if (!jobLive(chatId, job)) return;
  patchSession(chatId, (s) => {
    const rooms = { ...(s.rooms ?? {}) };
    const cur = rooms[key] ?? emptyRoom();
    rooms[key] = { ...cur, lines: [...cur.lines, ...lines] };
    return { ...s, rooms };
  });
  onTextReady();
  if (armed) {
    const fresh = useApp.getState().chats.find((c) => c.id === chatId) ?? chat;
    const tags = inline && split.prompt ? parseImageTagOutput(split.prompt, group ? fresh : { ...fresh, isMulti: false }, group) : null;
    const hasTags = Boolean(tags && (tags.base || Object.keys(tags.chars).length));
    await paintWechat(chat, lines[lines.length - 1].id, "auto", undefined, undefined, hasTags ? tags! : undefined);
  }
}

async function withMultiRoom(chat: Chat) {
  const chatId = chat.id;
  let session = sessionOf(chatId);
  if (!session) return null;
  if (!session.rooms) {
    session = ensureMultiSession(chat, session);
    useApp.getState().setWechatSession(chatId, session);
  }
  const key = session.activeRoom && session.rooms?.[session.activeRoom] ? session.activeRoom : chat.characters[0]?.id;
  if (!key || !session.rooms?.[key]) return null;
  return { key, room: session.rooms[key] };
}

export async function sendWechat(chat: Chat, onTextReady: () => void, replaceFromId?: string) {
  const chatId = chat.id;
  await runJob(chatId, onTextReady, async (signal, job, ready) => {
    if (wechatIsMulti(chat)) {
      const slot = await withMultiRoom(chat);
      if (!slot || !jobLive(chatId, job)) return;
      const text = slot.room.draft.trim();
      const pending = slot.room.pending;
      if (!text && !pending.length) return;
      const kept = cutAt(slot.room.lines, replaceFromId);
      if (!kept) return;
      const armed = sessionOf(chatId)?.armed === true;
      const turn: WechatLine = { id: uid("w_"), role: "user", text, attachments: pending };
      const fold = clampFold(kept, slot.room.folded || 0, slot.room.earlier);
      if (!jobLive(chatId, job)) return;
      patchSession(chatId, (s) => {
        const rooms = { ...(s.rooms ?? {}) };
        rooms[slot.key] = { ...slot.room, ...fold, draft: "", pending: [], lines: [...kept, turn] };
        return { ...s, rooms };
      });
      await completeMulti(chat, slot.key, turn, armed, ready, signal, job);
      return;
    }
    const session = sessionOf(chatId);
    if (!session) return;
    const text = session.draft.trim();
    const pending = session.pending;
    if (!text && !pending.length) return;
    const kept = cutAt(session.lines, replaceFromId);
    if (!kept) return;
    const turn: WechatLine = { id: uid("w_"), role: "user", text, attachments: pending };
    const fold = clampFold(kept, session.folded || 0, session.earlier);
    if (!jobLive(chatId, job)) return;
    patchSession(chatId, (s) => ({ ...s, ...fold, draft: "", pending: [], lines: [...kept, turn] }));
    await completeReply(chat, turn, session.armed, ready, signal, job);
  });
}

function canContinue(lines: WechatLine[]) {
  const last = [...lines].reverse().find((line) => !line.continued);
  return last?.role === "assistant";
}

function dropUnanswered(chatId: string, key: string | null, turnId: string) {
  if (!jobLive(chatId, jobs.get(chatId) ?? -1)) return;
  patchSession(chatId, (s) => {
    if (key && s.rooms) {
      const rooms = { ...s.rooms };
      const cur = rooms[key];
      if (!cur) return s;
      const idx = cur.lines.findIndex((line) => line.id === turnId);
      if (idx < 0 || cur.lines.slice(idx + 1).some((line) => line.role === "assistant")) return s;
      rooms[key] = { ...cur, lines: cur.lines.filter((line) => line.id !== turnId) };
      return { ...s, rooms };
    }
    const idx = s.lines.findIndex((line) => line.id === turnId);
    if (idx < 0 || s.lines.slice(idx + 1).some((line) => line.role === "assistant")) return s;
    return { ...s, lines: s.lines.filter((line) => line.id !== turnId) };
  });
}

async function replyTail(chat: Chat, key: string | null, lines: WechatLine[], armed: boolean, ready: () => void, signal: AbortSignal, job: number) {
  const chatId = chat.id;
  const last = [...lines].reverse().find((line) => line.role === "user" && !line.continued);
  if (!last) return;
  if (key) await completeMulti(chat, key, last, armed, ready, signal, job);
  else await completeReply(chat, last, armed, ready, signal, job);
}

async function startContinue(chat: Chat, key: string | null, lines: WechatLine[], armed: boolean, ready: () => void, signal: AbortSignal, job: number) {
  const chatId = chat.id;
  const turn: WechatLine = { id: uid("w_"), role: "user", text: "", attachments: [], continued: true };
  if (!jobLive(chatId, job)) return;
  if (key) {
    patchSession(chatId, (s) => {
      const rooms = { ...(s.rooms ?? {}) };
      const cur = rooms[key];
      if (!cur) return s;
      rooms[key] = { ...cur, lines: [...lines, turn] };
      return { ...s, rooms };
    });
  } else {
    patchSession(chatId, (s) => ({ ...s, lines: [...lines, turn] }));
  }
  try {
    if (key) await completeMulti(chat, key, turn, armed, ready, signal, job);
    else await completeReply(chat, turn, armed, ready, signal, job);
  } catch (e) {
    if (jobLive(chatId, job)) dropUnanswered(chatId, key, turn.id);
    throw e;
  }
}

export async function continueWechat(chat: Chat, onTextReady: () => void) {
  const chatId = chat.id;
  await runJob(chatId, onTextReady, async (signal, job, ready) => {
    if (wechatIsMulti(chat)) {
      const slot = await withMultiRoom(chat);
      if (!slot || !jobLive(chatId, job)) return;
      const lines = dropDangling(slot.room.lines);
      const armed = sessionOf(chatId)?.armed === true;
      if (!canContinue(lines)) {
        if (lines.length !== slot.room.lines.length) {
          patchSession(chatId, (s) => {
            const rooms = { ...(s.rooms ?? {}) };
            const cur = rooms[slot.key];
            if (!cur) return s;
            rooms[slot.key] = { ...cur, lines };
            return { ...s, rooms };
          });
        }
        await replyTail(chat, slot.key, lines, armed, ready, signal, job);
        return;
      }
      await startContinue(chat, slot.key, lines, armed, ready, signal, job);
      return;
    }
    const session = sessionOf(chatId);
    if (!session) return;
    const lines = dropDangling(session.lines);
    if (!canContinue(lines)) {
      if (lines.length !== session.lines.length) patchSession(chatId, (s) => ({ ...s, lines }));
      await replyTail(chat, null, lines, session.armed, ready, signal, job);
      return;
    }
    await startContinue(chat, null, lines, session.armed, ready, signal, job);
  });
}

export async function regenContinueFrom(chat: Chat, lineId: string, onTextReady: () => void) {
  const chatId = chat.id;
  await runJob(chatId, onTextReady, async (signal, job, ready) => {
    if (wechatIsMulti(chat)) {
      const slot = await withMultiRoom(chat);
      if (!slot || !jobLive(chatId, job)) return;
      const at = markerAfter(slot.room.lines, lineId);
      if (at < 0) return;
      const kept = slot.room.lines.slice(0, at);
      if (!canContinue(kept)) return;
      await startContinue(chat, slot.key, kept, sessionOf(chatId)?.armed === true, ready, signal, job);
      return;
    }
    const session = sessionOf(chatId);
    if (!session) return;
    const at = markerAfter(session.lines, lineId);
    if (at < 0) return;
    const kept = session.lines.slice(0, at);
    if (!canContinue(kept)) return;
    await startContinue(chat, null, kept, session.armed, ready, signal, job);
  });
}

export async function regenWechat(chat: Chat, lineId: string, onTextReady: () => void) {
  const chatId = chat.id;
  await runJob(chatId, onTextReady, async (signal, job, ready) => {
    if (wechatIsMulti(chat)) {
      const slot = await withMultiRoom(chat);
      if (!slot || !jobLive(chatId, job)) return;
      const idx = slot.room.lines.findIndex((l) => l.id === lineId);
      const turn = slot.room.lines[idx];
      if (!turn || turn.role !== "user") return;
      const kept = slot.room.lines.slice(0, idx + 1);
      const fold = clampFold(kept, slot.room.folded || 0, slot.room.earlier);
      patchSession(chatId, (s) => {
        const rooms = { ...(s.rooms ?? {}) };
        rooms[slot.key] = { ...slot.room, ...fold, lines: kept };
        return { ...s, rooms };
      });
      await completeMulti(chat, slot.key, turn, sessionOf(chatId)?.armed === true, ready, signal, job);
      return;
    }
    const session = sessionOf(chatId);
    if (!session) return;
    const idx = session.lines.findIndex((l) => l.id === lineId);
    const turn = session.lines[idx];
    if (!turn || turn.role !== "user") return;
    const kept = session.lines.slice(0, idx + 1);
    const fold = clampFold(kept, session.folded || 0, session.earlier);
    if (!jobLive(chatId, job)) return;
    patchSession(chatId, (s) => ({ ...s, ...fold, lines: kept }));
    await completeReply(chat, turn, session.armed, ready, signal, job);
  });
}

function patchLine(chatId: string, lineId: string, fn: (line: WechatLine) => WechatLine) {
  patchSession(chatId, (s) => {
    if (s.rooms) {
      const rooms = { ...s.rooms };
      for (const [key, room] of Object.entries(rooms)) {
        if (!room.lines.some((line) => line.id === lineId)) continue;
        rooms[key] = { ...room, lines: room.lines.map((line) => (line.id === lineId ? fn(line) : line)) };
        return { ...s, rooms };
      }
    }
    return { ...s, lines: s.lines.map((line) => (line.id === lineId ? fn(line) : line)) };
  });
}

function linesHolding(session: WechatSession, lineId: string) {
  if (session.rooms) {
    for (const room of Object.values(session.rooms)) {
      if (room.lines.some((line) => line.id === lineId)) return room.lines;
    }
  }
  return session.lines;
}

function roomKeyOf(session: WechatSession, lineId: string) {
  if (!session.rooms) return "";
  for (const [key, room] of Object.entries(session.rooms)) {
    if (room.lines.some((line) => line.id === lineId)) return key;
  }
  return "";
}

function previousWechatPrompt(session: WechatSession, lineId: string) {
  const lines = linesHolding(session, lineId);
  const idx = lines.findIndex((l) => l.id === lineId);
  for (let i = idx - 1; i >= 0; i--) {
    const prompt = herPrompt(lines[i]);
    if (prompt) return prompt.slice(0, 400);
  }
  return "";
}

export async function paintWechat(
  chat: Chat,
  lineId: string,
  mode: ImageGenSource,
  custom?: string,
  customChars?: Record<string, string>,
  parsedTags?: { base: string; chars: Record<string, string>; presence?: PresenceUpdate },
) {
  const chatId = chat.id;
  const session = sessionOf(chatId);
  if (!session) return;
  const line = linesHolding(session, lineId).find((l) => l.id === lineId);
  if (!line) return;
  const imgs = lineImages(line);
  if (imgs.some((g) => g.status !== "done" && g.status !== "error" && g.status !== "writing")) return;
  const prev = [...imgs].reverse().find((g) => g.prompt.trim());
  const writing = imgs.find((g) => g.status === "writing");
  const needsWrite = !parsedTags && mode !== "custom" && !(mode === "same" && prev?.prompt);
  const freshChat = useApp.getState().chats.find((c) => c.id === chatId) ?? chat;
  const record =
    writing && (mode === "auto" || mode === "rewrite")
      ? { ...writing, status: "writing" as const, source: mode }
      : makeImageRecord({
          model: freshChat.imageParams.model,
          width: freshChat.imageParams.width,
          height: freshChat.imageParams.height,
          steps: freshChat.imageParams.steps,
          sampler: freshChat.imageParams.sampler,
          negative: freshChat.imageParams.negative,
          ...(freshChat.imageParams.seedLocked && freshChat.imageParams.seed != null ? { seed: freshChat.imageParams.seed } : {}),
          status: needsWrite ? "writing" : "uploading",
          source: mode,
        });
  patchLine(chatId, lineId, (cur) => {
    const list = lineImages(cur).filter((g) => g.id !== `${cur.id}-old`);
    const next = list.some((g) => g.id === record.id) ? list.map((g) => (g.id === record.id ? record : g)) : [...list, record];
    return { ...cur, gen: undefined, images: next };
  });
  const setImg = (p: Partial<GenImage>) => patchLine(chatId, lineId, (cur) => ({ ...cur, images: lineImages(cur).map((g) => (g.id === record.id ? { ...g, ...p } : g)) }));
  const ac = new AbortController();
  const key = stopKey(chatId, lineId);
  imageStops.get(key)?.abort();
  imageStops.set(key, ac);
  try {
    const settings = useApp.getState().settings;
    const auth = naiDrawAuth(settings);
    if (!auth) throw new Error("还没连接生图");
    let grokTail = custom ? sanitizeNaiTags(custom, { stripForbidden: false }) : "";
    let charTails: Record<string, string> = {};
    if (customChars) {
      for (const [k, v] of Object.entries(customChars)) {
        const t = sanitizeNaiTags(v, { stripForbidden: false });
        if (t) charTails[k] = t;
      }
    }
    if (parsedTags && mode === "auto") {
      grokTail = parsedTags.base;
      if (freshChat.isMulti && settings.allowMulti1boy === false) grokTail = stripStandalone1boy(grokTail);
      charTails = { ...parsedTags.chars };
      if (parsedTags.presence && !wechatIsMulti(freshChat)) {
        const presence = parsedTags.presence;
        useApp.getState().patchChat(chatId, (ch) => {
          const enabledOf = (slotId: string) => (presence.mode === "exact" ? presence.ids.includes(slotId) : !presence.ids.includes(slotId));
          return {
            ...ch,
            characters: ch.characters.map((role) => ({ ...role, imageEnabled: enabledOf(role.id) })),
            imageParams: { ...ch.imageParams, characters: ch.imageParams.characters.map((x) => ({ ...x, enabled: enabledOf(x.id) })) },
          };
        });
      }
    } else if (mode === "same" && prev?.prompt) {
      grokTail = prev.prompt;
      charTails = { ...(prev.charTails || {}) };
    } else if (mode !== "custom") {
      const now = sessionOf(chatId) ?? session;
      const live = useApp.getState().chats.find((c) => c.id === chatId) ?? freshChat;
      const held = linesHolding(now, lineId);
      const round = wechatRounds(held).find((r) => r.some((l) => l.id === lineId)) ?? [];
      const group = roomKeyOf(now, lineId) === WECHAT_GROUP;
      const nameOf = (id?: string) => live.characters.find((c) => c.id === id)?.name.trim() || "她";
      const bubbles = group
        ? round
            .filter((l) => l.role === "assistant" && l.text.trim())
            .map((l) => `${nameOf(l.speakerId)}：${l.text.trim()}`)
            .join("\n")
        : round
            .filter((l) => l.role === "assistant" && l.text.trim())
            .map((l) => l.text.trim())
            .join("\n");
      const inner = group
        ? round
            .filter((l) => l.inner?.trim())
            .map((l) => `${nameOf(l.speakerId)}的内心：\n${l.inner?.trim()}`)
            .join("\n\n")
        : [...round].reverse().find((l) => l.inner)?.inner?.trim() || "";
      const user = round.find((l) => l.role === "user");
      const shot = [
        inner ? (group ? `这一轮各人的地点、动作、表情（以这段为重）：\n${inner}` : `这一拍她实际的地点、动作、表情（以这段为重）：\n${inner}`) : "",
        bubbles ? (group ? `这一轮群里刚发出的微信：\n${bubbles}` : `她刚发出的微信：\n${bubbles}`) : "",
        mainLatest(live) ? `主聊天最近一轮，只补背景：\n${mainLatest(live)}` : "",
        user ? formatUserForImage(user.text, standingDirectives(live)) : "",
      ]
        .filter(Boolean)
        .join("\n\n");
      const cast = group ? "all" : wechatIsMulti(live) ? "solo" : undefined;
      const tags = await writeImageTags(live, "", live.grokModelId, shot, previousWechatPrompt(now, lineId), ac.signal, user?.text || "", cast, wechatRoute(live));
      grokTail = tags.base;
      charTails = tags.chars;
      if (live.isMulti && useApp.getState().settings.allowMulti1boy === false) grokTail = stripStandalone1boy(grokTail);
      if (tags.presence && !wechatIsMulti(live)) {
        const presence = tags.presence;
        useApp.getState().patchChat(chatId, (ch) => {
          const enabledOf = (slotId: string) => (presence.mode === "exact" ? presence.ids.includes(slotId) : !presence.ids.includes(slotId));
          return {
            ...ch,
            characters: ch.characters.map((role) => ({ ...role, imageEnabled: enabledOf(role.id) })),
            imageParams: { ...ch.imageParams, characters: ch.imageParams.characters.map((x) => ({ ...x, enabled: enabledOf(x.id) })) },
          };
        });
      }
    }
    if (!grokTail && !Object.keys(charTails).length) {
      setImg({ status: "error", error: "提示词写失败" });
      return;
    }
    setImg({ status: "uploading", prompt: grokTail, charTails });
    await afterPaint();
    const live = useApp.getState().chats.find((c) => c.id === chatId) ?? freshChat;
    const roomKey = roomKeyOf(sessionOf(chatId) ?? session, lineId);
    const genChat = wechatIsMulti(live)
      ? {
          ...live,
          imageParams: {
            ...live.imageParams,
            characters: live.imageParams.characters.map((slot) => ({
              ...slot,
              enabled: roomKey === WECHAT_GROUP ? true : roomKey ? slot.id === roomKey : slot.enabled,
            })),
          },
        }
      : live;
    const result = await generateNai({
      chat: genChat,
      grokTail,
      charTails,
      seed: record.seed,
      apiKey: auth.apiKey,
      baseUrl: auth.baseUrl,
      mode: auth.mode,
      signal: ac.signal,
      onStart: () => setImg({ status: "generating" }),
      onReceiving: () => {
        if (auth.mode === "proxy") useApp.getState().setCooldown(Date.now() + COOLDOWN_MS);
        setImg({ status: "receiving" });
      },
    });
    setImg({ status: "done", blobId: result.blobId, prompt: grokTail, charTails, seed: result.seed });
  } catch (e) {
    const err = imageFailText(e, ac.signal);
    setImg({ status: "error", error: err });
    if (err !== "已取消") useApp.getState().toast(err);
  } finally {
    if (imageStops.get(key) === ac) imageStops.delete(key);
  }
}


export async function summarizeWechat(chat: Chat, session: WechatSession) {
  if (wechatIsMulti(chat) && session.rooms) {
    const names = nameMap(chat);
    const blocks = [
      ...chat.characters.map((c) => {
        const text = sideText(session.rooms?.[c.id] ?? emptyRoom(), names);
        return text ? `和${c.name.trim() || "她"}的私聊：\n${text}` : "";
      }),
      sideText(session.rooms[WECHAT_GROUP] ?? emptyRoom(), names)
        ? `群聊：\n${sideText(session.rooms[WECHAT_GROUP] ?? emptyRoom(), names)}`
        : "",
    ].filter(Boolean);
    const raw = await grokOnce({
      task: "wechat",
      extraSystem: summarySystem(),
      ...wechatRoute(chat),
      messages: [{ role: "user", content: blocks.join("\n\n") || "（没有内容）" }],
      max_tokens: 700,
    });
    const text = cleanSummary(raw);
    if (!text) throw new Error("总结是空的");
    return text;
  }
  const c = charOf(chat, session.charId);
  const name = c?.name.trim() || chat.name || "她";
  const raw = await grokOnce({
    task: "wechat",
    extraSystem: summarySystem(),
    ...wechatRoute(chat),
    messages: [
      {
        role: "user",
        content: `角色是${name}。\n\n${transcript(session, true) || "（没有内容）"}`,
      },
    ],
    max_tokens: 500,
  });
  const text = cleanSummary(raw);
  if (!text) throw new Error("总结是空的");
  return text;
}

export function detachWechat(chatId: string): ChatMessage | null {
  const session = useApp.getState().wechatSessions[chatId];
  if (!session) return null;
  const lines = session.rooms ? Object.values(session.rooms).flatMap((room) => room.lines) : session.lines;
  for (const line of lines) cancelWechatImage(chatId, line.id);
  useApp.getState().setWechatSession(chatId, null);
  if (!lines.length) return null;
  const chat = useApp.getState().chats.find((c) => c.id === chatId);
  const role = chat?.characters.find((c) => c.id === session.charId) || chat?.characters[0];
  const roomNames = chat
    ? Object.fromEntries([...chat.characters.map((c) => [c.id, c.name.trim() || "角色"]), [WECHAT_GROUP, "群聊"]])
    : undefined;
  return {
    id: uid("m_"),
    role: "user",
    content: "",
    images: [],
    createdAt: Date.now(),
    wechatLog: {
      charName: session.rooms ? "微信" : role?.name.trim() || chat?.name || "她",
      lines: session.rooms ? [] : session.lines,
      summary: "",
      voided: true,
      ...(session.rooms
        ? { rooms: session.rooms, activeRoom: session.activeRoom, roomNames }
        : {}),
    },
  };
}

export function userTurnCaption(attachments: WechatAttach[], text: string) {
  const photos = attachments.filter((a) => a.kind === "photo");
  const sticks = attachments.filter((a) => a.kind === "sticker");
  const bits: string[] = [];
  if (photos.length === 1) {
    bits.push(
      text.trim()
        ? "用户在微信里发来一张照片。上面的字是对着这张照片说的。这是他用手机发给你看的，不是你眼前的实景，不要把场景改成照片里的地方。按微信回他。"
        : "用户在微信里发来一张照片。这是他用手机发给你看的，不是你眼前的实景，不要把场景改成照片里的地方。按微信回他。",
    );
  } else if (photos.length > 1) {
    bits.push(
      text.trim()
        ? `用户在微信里发来 ${photos.length} 张照片，按编号。上面的字是对着这些照片说的。这是他用手机发给你看的，不是你眼前的实景，不要把场景改成照片里的地方。按微信回他。`
        : `用户在微信里发来 ${photos.length} 张照片，按编号。这是他用手机发给你看的，不是你眼前的实景，不要把场景改成照片里的地方。按微信回他。`,
    );
  }
  if (!text.trim() && photos.length) bits.push("他没有写字。看着照片回，不要当成没说话。");
  if (sticks.length) {
    bits.push("用户在微信里发来一张表情包。看它在表达什么，按这个意思回。不要把画里的人、地方或动作当成正在发生的事。");
  }
  return bits.join("\n");
}
