import { i as __toESM, n as __exportAll } from "../_runtime.mjs";
import { d as require_react_dom, q as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as zipSync, n as strToU8, r as unzipSync, t as strFromU8 } from "../_libs/fflate.mjs";
import { A as FolderPlus, B as ChevronRight, C as Menu, D as Image, E as LoaderCircle, F as Download, G as ArrowUp, H as ChevronDown, I as Dices, K as ArrowDown, L as Copy, M as FileUp, N as Eye, O as GitBranch, P as Ellipsis, R as Clock, S as MessageCircle, T as Lock, U as Check, V as ChevronLeft, W as Bookmark, _ as Plus, a as Trash2, b as Minus, c as SquareArrowUp, d as SlidersHorizontal, f as Settings, g as RefreshCw, h as RotateCcw, j as FolderInput, k as Folder, l as Sparkles, m as ScanSearch, n as WandSparkles, o as Sun, p as Send, q as AlignJustify, r as Upload, s as Star, t as X, u as Smile, v as Pencil, w as Maximize2, x as Minimize2, y as Moon, z as ChevronUp } from "../_libs/lucide-react.mjs";
import { $ as DEFAULT_STATUS_BAR, A as openingHint, B as edited, C as fieldPolishHint, Ct as shortModelLabel, D as imageLengthRules, E as imageApplyRules, F as wechatGroupCastFormat, G as togglePair, H as pairOn, I as wechatImageTail, J as withKeptCloser, K as toggleSysOff, L as SYS, M as sceneTail, N as splitChatPrompt, O as imageWriteMaxTokens, P as voicePolishExtra, Q as DEFAULT_NAI_BASE, R as bindSysApp, S as chatImageSystem, St as normalizePureParams, T as groupHintRaw, U as resetSys, V as pairNote, W as saveSysText, X as DEFAULT_GROK, Y as COOLDOWN_MS, Z as DEFAULT_LLM_PARAMS, _ as STATUS_RULE_TEXT, _t as emptyCharacter, a as FIELD_SYSTEM, at as NAI_HOP_TIMEOUT_MS, b as WX_IMAGE_ORDER, bt as mergeLlmParams, c as IMAGE_SHOT_RULES, ct as NOISE_SCHEDULES, d as MEMORY_CLOSER, dt as SAMPLERS, et as FULLBODY_TAG, f as MEMORY_SYSTEM, ft as SENSITIVE_PREFIX, g as RP_SYSTEM, gt as defaultPureParams, h as RP_STRUCTURE, ht as defaultImageParams, i as FIELD_LABELS, it as IMAGE_GEN_TIMEOUT_MS, j as roleSnapshot, k as multiInsertInstruction, l as IMAGE_SYSTEM, lt as PLACEHOLDERS, m as POLISH_SYSTEM, mt as UNCENSORED_TAG, n as CHAT_IMAGE_ORDER, nt as GROK_MODELS, o as IMAGE_BG_RULES, ot as NAI_MODELS, p as PERSONA_VOICE_RULES, pt as UC, q as turnedOff, r as CHAT_OPENING_LINE, rt as IMAGE_DRAW_TIMEOUT_MS, s as IMAGE_MULTI_RULES, st as NAI_POLL_MS, tt as FURRY_TAG, u as LOVE_RULE_TEXT, ut as RESOLUTIONS, v as TASK_CLOSER, vt as isLegacyStatusBar, w as groupFormatHint, wt as __exportAll$1, x as chatContextBlock, xt as migrateGrokId, y as WX_IMAGE_HERE, yt as joinPromptParts, z as customText } from "./router-D4w7uiEq.mjs";
import { t as Dexie } from "../_libs/dexie.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/idb-CU5rm5P7.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function uid$1(prefix = "") {
	return `${prefix}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}
function sortHistoryNewestFirst(items) {
	return [...items].sort((a, b) => {
		const dt = (b.createdAt || 0) - (a.createdAt || 0);
		if (dt) return dt;
		return String(b.id || "").localeCompare(String(a.id || ""));
	});
}
function uniqueNumberedName(desired, taken) {
	const base = desired.trim();
	const set = new Set(taken);
	if (!set.has(base)) return base;
	let n = 2;
	while (set.has(`${base}${n}`)) n++;
	return `${base}${n}`;
}
function downloadBlob(blob, filename) {
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	a.remove();
	setTimeout(() => URL.revokeObjectURL(url), 1500);
}
function randomSeed() {
	return Math.floor(Math.random() * 2 ** 32);
}
function moveId(ids, id, to) {
	const from = ids.indexOf(id);
	if (from < 0) return ids;
	const next = ids.slice();
	next.splice(from, 1);
	next.splice(Math.max(0, Math.min(next.length, to)), 0, id);
	return next;
}
function indexFromY(rows, y) {
	if (!rows.length) return 0;
	for (let i = 0; i < rows.length; i++) {
		const box = rows[i].getBoundingClientRect();
		if (y < box.top + box.height / 2) return i;
	}
	return rows.length - 1;
}
function nearestScroller(el) {
	let n = el;
	while (n && n !== document.body) {
		const oy = getComputedStyle(n).overflowY;
		if (oy === "auto" || oy === "scroll" || oy === "overlay") return n;
		n = n.parentElement;
	}
	return null;
}
function autoScrollNearEdge(scroller, clientY, edge = 52) {
	const box = scroller.getBoundingClientRect();
	const max = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
	if (max <= 0) return 0;
	let dy = 0;
	if (clientY < box.top + edge) dy = -Math.min(28, Math.max(3, (box.top + edge - clientY) * .4));
	else if (clientY > box.bottom - edge) dy = Math.min(28, Math.max(3, (clientY - (box.bottom - edge)) * .4));
	if (!dy) return 0;
	const next = Math.max(0, Math.min(max, scroller.scrollTop + dy));
	const applied = next - scroller.scrollTop;
	scroller.scrollTop = next;
	return applied;
}
var PLACEHOLDER_IDS = /* @__PURE__ */ new Set([
	"worldInfoBefore",
	"worldInfoAfter",
	"charDescription",
	"charPersonality",
	"scenario",
	"personaDescription",
	"dialogueExamples",
	"chatHistory",
	"charDepthPrompt",
	"personalityFormat",
	"scenarioFormat"
]);
function rec$1(v) {
	return v && typeof v === "object" && !Array.isArray(v) ? v : null;
}
function num$1(v) {
	if (typeof v === "number" && Number.isFinite(v)) return v;
	if (typeof v === "string" && v.trim() !== "") {
		const n = Number(v);
		if (Number.isFinite(n)) return n;
	}
}
function str$1(v) {
	return typeof v === "string" ? v : "";
}
function parseItems(raw) {
	if (!Array.isArray(raw)) return void 0;
	const out = [];
	for (const row of raw) {
		const o = rec$1(row);
		if (!o || typeof o.id !== "string" || typeof o.name !== "string") continue;
		out.push({
			id: o.id,
			name: o.name,
			content: str$1(o.content),
			enabled: o.enabled === true,
			place: o.place === "after" ? "after" : "before",
			usable: o.usable !== false,
			...typeof o.original === "string" ? { original: o.original } : {},
			...typeof o.originalEnabled === "boolean" ? { originalEnabled: o.originalEnabled } : {}
		});
	}
	return out;
}
function parseStPresets(raw) {
	if (!Array.isArray(raw)) return [];
	const out = [];
	for (const row of raw) {
		const o = rec$1(row);
		if (!o) continue;
		if (typeof o.id !== "string" || typeof o.name !== "string") continue;
		const items = parseItems(o.items);
		out.push({
			id: o.id,
			name: o.name,
			systemPrompt: str$1(o.systemPrompt),
			postHistory: str$1(o.postHistory),
			params: {
				temperature: num$1(o.params && rec$1(o.params)?.temperature),
				topP: num$1(o.params && rec$1(o.params)?.topP),
				frequencyPenalty: num$1(o.params && rec$1(o.params)?.frequencyPenalty),
				presencePenalty: num$1(o.params && rec$1(o.params)?.presencePenalty),
				maxTokens: num$1(o.params && rec$1(o.params)?.maxTokens)
			},
			...typeof o.legacySystemPrompt === "string" ? { legacySystemPrompt: o.legacySystemPrompt } : {},
			...typeof o.legacyPostHistory === "string" ? { legacyPostHistory: o.legacyPostHistory } : {},
			...items ? { items } : {}
		});
	}
	return out;
}
function isTextCompletion(raw) {
	return typeof raw.input_sequence === "string" || typeof raw.output_sequence === "string" || typeof raw.system_prompt === "string" || Array.isArray(raw.seq);
}
function isCharacterCard(raw) {
	return str$1(raw.spec).startsWith("chara_card") || Boolean(rec$1(raw.data)?.character_book) || Boolean(raw.first_mes);
}
function readPrompt(v) {
	const o = rec$1(v);
	if (!o) return null;
	const identifier = str$1(o.identifier) || str$1(o.name) || uid$1("p_");
	const content = str$1(o.content) || str$1(o.prompt);
	return {
		identifier,
		name: str$1(o.name) || identifier,
		content,
		marker: o.marker === true,
		role: str$1(o.role).toLowerCase() || "system",
		injectionPosition: num$1(o.injection_position) ?? 0,
		enabled: o.enabled !== false
	};
}
function pickOrder(raw) {
	const orders = Array.isArray(raw.prompt_order) ? raw.prompt_order : [];
	let global = null;
	let best = [];
	for (const entry of orders) {
		const o = rec$1(entry);
		if (!o || !Array.isArray(o.order)) continue;
		const rows = o.order.map((row) => {
			const r = rec$1(row);
			if (!r) return null;
			const identifier = str$1(r.identifier);
			if (!identifier) return null;
			return {
				identifier,
				enabled: r.enabled !== false
			};
		}).filter((row) => Boolean(row));
		if (o.character_id === 1e5 || o.character_id === "100000") global = rows;
		if (rows.length > best.length) best = rows;
	}
	if (global && global.length) return global;
	return best;
}
function isHistoryMarker(p) {
	return p.identifier === "chatHistory" || p.name.trim().toLowerCase() === "chat history";
}
function isSlot(p) {
	if (p.marker) return true;
	if (PLACEHOLDER_IDS.has(p.identifier)) return true;
	return false;
}
function asksForTool(p) {
	if (/game_content/i.test(p.content)) return true;
	if (/function\s*call|tool_call/i.test(p.content)) return true;
	return /调用[\s\S]{0,24}(函数|工具)/.test(p.content);
}
function isUnusable(p) {
	if (isSlot(p)) return true;
	if (asksForTool(p)) return true;
	if (p.name === "SPreset配置" || p.content.length > 2e4) return true;
	return false;
}
function isAfter(p, passedHistory) {
	if (p.injectionPosition === 1) return true;
	const id = p.identifier.toLowerCase();
	const name = p.name.toLowerCase();
	if (id === "jailbreak" || name.includes("post-history") || name.includes("post history")) return true;
	return passedHistory;
}
function presetTexts(preset, mode = "new") {
	if (mode === "old" && (typeof preset.legacySystemPrompt === "string" || typeof preset.legacyPostHistory === "string")) return {
		systemPrompt: preset.legacySystemPrompt ?? "",
		postHistory: preset.legacyPostHistory ?? ""
	};
	if (!preset.items?.length) return {
		systemPrompt: preset.systemPrompt,
		postHistory: preset.postHistory
	};
	const on = preset.items.filter((item) => item.enabled && item.usable && item.content.trim());
	return {
		systemPrompt: on.filter((item) => item.place !== "after").map((item) => item.content.trim()).join("\n\n"),
		postHistory: on.filter((item) => item.place === "after").map((item) => item.content.trim()).join("\n\n")
	};
}
function sealPreset(preset) {
	const texts = presetTexts(preset);
	return {
		...preset,
		systemPrompt: texts.systemPrompt,
		postHistory: texts.postHistory
	};
}
function isLegacyPost(p) {
	const id = p.identifier.toLowerCase();
	const name = p.name.toLowerCase();
	return id === "jailbreak" || name.includes("post-history") || name.includes("post history") || p.injectionPosition === 1;
}
/** 旧版：全局顺序为空就整份都要；不看条目自己的开关。导入时封存，之后不跟着新版改。 */
function legacyTexts(raw, prompts) {
	const byId = new Map(prompts.map((p) => [p.identifier, p]));
	const orders = Array.isArray(raw.prompt_order) ? raw.prompt_order : [];
	let order = [];
	for (const entry of orders) {
		const o = rec$1(entry);
		if (!o || !Array.isArray(o.order)) continue;
		if (o.character_id === 1e5 || o.character_id === "100000" || !order.length) order = o.order;
		if (o.character_id === 1e5 || o.character_id === "100000") break;
	}
	let listed = prompts;
	if (order.length) {
		const out = [];
		const seen = /* @__PURE__ */ new Set();
		for (const row of order) {
			const o = rec$1(row);
			if (!o || o.enabled === false) continue;
			const id = str$1(o.identifier);
			const p = byId.get(id);
			if (!p || seen.has(id)) continue;
			seen.add(id);
			out.push(p);
		}
		listed = out;
	}
	const kept = listed.filter((p) => !isSlot(p) && p.content.trim());
	return {
		systemPrompt: kept.filter((p) => !isLegacyPost(p)).map((p) => p.content.trim()).join("\n\n"),
		postHistory: kept.filter((p) => isLegacyPost(p)).map((p) => p.content.trim()).join("\n\n")
	};
}
function parseChatCompletionPreset(raw, fileName) {
	const o = rec$1(raw);
	if (!o) throw new Error("这不是对话补全预设");
	if (isCharacterCard(o)) throw new Error("这是角色卡，不是对话补全预设");
	if (!Array.isArray(o.prompts)) {
		if (isTextCompletion(o)) throw new Error("这不是对话补全预设");
		throw new Error("这不是对话补全预设");
	}
	const prompts = o.prompts.map(readPrompt).filter((p) => Boolean(p));
	const byId = new Map(prompts.map((p) => [p.identifier, p]));
	const order = pickOrder(o);
	const listed = order.length ? order.map((row) => {
		const p = byId.get(row.identifier);
		return p ? {
			...p,
			enabled: row.enabled
		} : null;
	}).filter((p) => Boolean(p)) : prompts;
	let passedHistory = false;
	const items = [];
	for (const p of listed) {
		const history = isHistoryMarker(p);
		const place = isAfter(p, passedHistory) ? "after" : "before";
		if (history) passedHistory = true;
		items.push({
			id: p.identifier,
			name: p.name,
			content: p.content,
			original: p.content,
			enabled: p.enabled,
			originalEnabled: p.enabled,
			place: history ? "before" : place,
			usable: !isUnusable(p)
		});
	}
	if (!items.some((item) => item.usable && item.content.trim())) throw new Error("这份预设没有可导入的提示词");
	const stem = fileName.replace(/\.json$/i, "").trim() || "未命名预设";
	const legacy = legacyTexts(o, prompts);
	return sealPreset({
		id: uid$1("st_"),
		name: stem,
		systemPrompt: "",
		postHistory: "",
		legacySystemPrompt: legacy.systemPrompt,
		legacyPostHistory: legacy.postHistory,
		items,
		params: {
			temperature: num$1(o.temperature),
			topP: num$1(o.top_p) ?? num$1(o.topP),
			frequencyPenalty: num$1(o.frequency_penalty) ?? num$1(o.frequencyPenalty),
			presencePenalty: num$1(o.presence_penalty) ?? num$1(o.presencePenalty),
			maxTokens: num$1(o.openai_max_tokens) ?? num$1(o.max_tokens) ?? num$1(o.maxTokens)
		}
	});
}
function uniquePresetName(desired, existing) {
	return uniqueNumberedName(desired, existing);
}
function macroContext(chat) {
	const chars = chat?.characters ?? [];
	const names = chars.map((c) => c.name.trim()).filter(Boolean);
	const personas = chars.map((c) => c.persona.trim()).filter(Boolean);
	return {
		char: names.join("、"),
		isMulti: Boolean(chat?.isMulti && chars.length > 1),
		scenario: chat?.opening?.trim() ?? "",
		personality: personas.join("\n\n")
	};
}
function substituteMacros(text, ctx) {
	if (!text) return "";
	return text.replace(/\{\{\s*([^}]+?)\s*\}\}/g, (_full, rawKey) => {
		const key = rawKey.trim().toLowerCase().split(":")[0]?.trim() ?? "";
		if (key === "user" || key === "username") return "你";
		if (key === "char" || key === "bot" || key === "character") return ctx.char;
		if (key === "charifnotgroup") return ctx.isMulti ? "" : ctx.char;
		if (key === "scenario") return ctx.scenario;
		if (key === "personality") return ctx.personality;
		return "";
	});
}
function readMode(settings) {
	return settings.stPresetMode === "old" ? "old" : "new";
}
function activePreset(settings) {
	const id = settings.stActiveId;
	if (!id) return null;
	return (settings.stPresets ?? []).find((p) => p.id === id) ?? null;
}
function activeImagePreset(settings) {
	const id = settings.stImageActiveId;
	if (!id) return null;
	return (settings.stPresets ?? []).find((p) => p.id === id) ?? null;
}
/** 只给单独写提示词。没选预设时返回空，调用处和以前一样。 */
function imagePresetStyle(settings, chat) {
	const preset = activeImagePreset(settings);
	if (!preset) return {};
	const ctx = macroContext(chat);
	const texts = presetTexts(preset, readMode(settings));
	const sys = substituteMacros(texts.systemPrompt, ctx).trim();
	const post = substituteMacros(texts.postHistory, ctx).trim();
	return {
		styleExtra: sys || void 0,
		postHistory: [post, "上面的预设只影响怎么理解这一镜。最终输出仍只能是生图标签或规定的 JSON。思考过程不要写进标签。"].filter(Boolean).join("\n\n")
	};
}
function activeWechatPreset(settings) {
	const id = settings.stWechatActiveId;
	if (!id) return null;
	return (settings.stPresets ?? []).find((p) => p.id === id) ?? null;
}
/** 只给写微信回复。没选预设时返回空。预设不能改 JSON 格式。 */
function wechatPresetStyle(settings, chat, inlineImage = false, group = false) {
	const preset = activeWechatPreset(settings);
	if (!preset) return {};
	const ctx = macroContext(chat);
	const texts = presetTexts(preset, readMode(settings));
	const sys = substituteMacros(texts.systemPrompt, ctx).trim();
	const post = substituteMacros(texts.postHistory, ctx).trim();
	return {
		styleExtra: sys || void 0,
		postHistory: [post, (group ? "上面的预设只影响她们怎么说、什么态度，不能改输出形式。最终只能返回一个 JSON，不要 markdown，不要小说，不要状态栏，不要预设自己的消息格式。bubbles 是数组，每项是 {name, text}。inner 和 sticker 按角色名分开。思考不要写进 text 或 inner。bubbles 的先后就是发出顺序。后一条已经看见前一条，不要把每个人写成同时只回用户。" + (inlineImage ? "JSON 结束后另起一行写 <<<PROMPT>>>，里面只许英文 tag，然后 <<<END>>>。" : "") : inlineImage ? "上面的预设只影响她怎么说、什么态度，不能改输出形式。先只输出一个微信 JSON，不要 markdown，不要小说，不要状态栏，不要预设自己的消息格式。思考不要写进 bubbles 或 inner。JSON 结束后另起一行写 <<<PROMPT>>>，里面只许英文 tag，然后 <<<END>>>。" : "上面的预设只影响她怎么说、什么态度，不能改输出形式。最终只能返回一个 JSON，不要 markdown，不要解释，不要小说，不要状态栏，不要预设自己的消息格式：{\"bubbles\":[\"一条文字\"],\"inner\":\"内心\",\"sticker\":0}。思考过程不要写进 bubbles 或 inner。") + "预设里的最低字数不要用在微信上。气泡仍是一句，通常不超过 40 个字。内心四到八句就停。"].filter(Boolean).join("\n\n")
	};
}
function keepLocked(current, next) {
	return {
		...next,
		temperature: current.temperatureLocked ? current.temperature : next.temperature,
		topP: current.topPLocked ? current.topP : next.topP,
		frequencyPenalty: current.frequencyPenaltyLocked ? current.frequencyPenalty : next.frequencyPenalty,
		presencePenalty: current.presencePenaltyLocked ? current.presencePenalty : next.presencePenalty,
		maxTokens: current.maxTokensLocked ? current.maxTokens : next.maxTokens,
		contextTurns: current.contextTurnsLocked ? current.contextTurns : next.contextTurns,
		temperatureLocked: current.temperatureLocked,
		topPLocked: current.topPLocked,
		frequencyPenaltyLocked: current.frequencyPenaltyLocked,
		presencePenaltyLocked: current.presencePenaltyLocked,
		maxTokensLocked: current.maxTokensLocked,
		contextTurnsLocked: current.contextTurnsLocked
	};
}
function samplerPatch(params, current) {
	return keepLocked(current, {
		...current,
		temperature: params.temperature ?? current.temperature,
		topP: params.topP ?? current.topP,
		frequencyPenalty: params.frequencyPenalty ?? current.frequencyPenalty,
		presencePenalty: params.presencePenalty ?? current.presencePenalty,
		maxTokens: params.maxTokens ?? current.maxTokens
	});
}
function restoreSampler(snapshot, current) {
	if (!snapshot) return current;
	return keepLocked(current, {
		...current,
		temperature: snapshot.temperature,
		topP: snapshot.topP,
		frequencyPenalty: snapshot.frequencyPenalty,
		presencePenalty: snapshot.presencePenalty,
		maxTokens: snapshot.maxTokens
	});
}
function defaultSampler(current) {
	return keepLocked(current, { ...DEFAULT_LLM_PARAMS });
}
function presetStyle(settings, task, chat) {
	if (task === "image" || task === "rewrite") return {};
	const preset = activePreset(settings);
	if (!preset) return {};
	const ctx = macroContext(chat);
	const texts = presetTexts(preset, readMode(settings));
	const sys = substituteMacros(texts.systemPrompt, ctx).trim();
	const post = substituteMacros(texts.postHistory, ctx).trim();
	if (task === "chat") return {
		styleExtra: sys || void 0,
		postHistory: post || void 0
	};
	return { styleExtra: [sys, post].filter(Boolean).join("\n\n") || void 0 };
}
var APPEARANCE_MODULE_NAME = "角色";
function uid(prefix = "") {
	return `${prefix}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}
var TAG_SRC = String.raw`<ran_id="([^"]+)"((?:&"[^"]+")*)>`;
function emptyBank() {
	return {
		enabled: false,
		modules: [],
		comboLast: {}
	};
}
function moduleTag(names) {
	return `<ran_id=${names.map((n) => `"${n}"`).join("&")}>`;
}
function appendPrompt(mid, piece) {
	const t = mid.replace(/\s+$/, "");
	if (!t) return piece;
	if (t.endsWith(",")) return `${t}${piece}`;
	return `${t},${piece}`;
}
function badModuleName(name, modules, exceptId) {
	const n = name.trim();
	if (!n) return "先写模块名";
	if (/["&<>]/.test(n)) return "名字里不能有引号和 &";
	if (modules.some((m) => m.id !== exceptId && m.name === n)) return "已经有同名模块";
	return "";
}
function bankSwitch(bank, enabled) {
	if (enabled) return {
		...bank,
		enabled: true
	};
	return {
		...bank,
		enabled: false,
		modules: bank.modules.map((m) => ({
			...m,
			nextId: null,
			hold: null
		})),
		comboLast: {},
		comboHold: {}
	};
}
function moduleRounds(mod) {
	const n = Math.floor(Number(mod.rounds));
	return Number.isFinite(n) && n >= 1 ? n : 1;
}
/** 顺序模式下，下一张会用到的那一项。轮数还没用完时是正在复用的项。 */
function seqTurnItem(mod) {
	const pool = mod.items.filter((item) => item.enabled);
	if (!pool.length) return null;
	const rounds = moduleRounds(mod);
	if (mod.hold && mod.hold.used < rounds) {
		const held = pool.find((item) => item.id === mod.hold?.itemId);
		if (held) return held;
	}
	if (mod.nextId) {
		const at = pool.find((item) => item.id === mod.nextId);
		if (at) return at;
	}
	return pool[0];
}
/** 手动指定下一次从这一项开始，并清掉还没走完的轮数。 */
function jumpSeq(mod, itemId) {
	return {
		...mod,
		nextId: itemId,
		hold: null
	};
}
function setModuleRounds(bank, id, rounds) {
	const n = Math.max(1, Math.floor(rounds) || 1);
	return {
		...bank,
		modules: bank.modules.map((m) => {
			if (m.id !== id) return m;
			if (n <= 1) {
				const next = { ...m };
				delete next.rounds;
				return next;
			}
			return {
				...m,
				rounds: n
			};
		})
	};
}
/** 换随机或顺序时丢掉正在复用的那一项，下一张按新方式重抽。轮数保留。 */
function setModulePick(bank, id, pick) {
	const mod = bank.modules.find((m) => m.id === id);
	if (!mod || mod.pick === pick) return bank;
	const comboHold = { ...bank.comboHold ?? {} };
	for (const key of Object.keys(comboHold)) if (key.split("&").includes(mod.name)) delete comboHold[key];
	return {
		...bank,
		comboHold,
		modules: bank.modules.map((m) => m.id === id ? {
			...m,
			pick,
			hold: null
		} : m)
	};
}
function tagRe() {
	return new RegExp(TAG_SRC, "g");
}
function namesOf(first, rest) {
	const names = [first];
	for (const m of rest.matchAll(/&"([^"]+)"/g)) names.push(m[1]);
	return names;
}
function tagKeys(text) {
	const keys = /* @__PURE__ */ new Set();
	for (const m of text.matchAll(tagRe())) {
		const names = namesOf(m[1], m[2] || "");
		keys.add(names.length > 1 ? `&${names.join("&")}` : names[0]);
	}
	return keys;
}
function blob(p) {
	return [
		p.promptFront || "",
		p.promptMid || "",
		p.promptBack || "",
		p.negative || ""
	].join("\n");
}
/** 符号从这份提示词里消失，就忘掉它的顺序位置和轮数进度。没变化时返回 null。 */
function forgetIfPrompt(bank, prev, next) {
	const before = tagKeys(blob(prev));
	const after = tagKeys(blob(next));
	let modules = bank.modules;
	const combo = { ...bank.comboLast ?? {} };
	const comboHold = { ...bank.comboHold ?? {} };
	let changed = false;
	for (const key of before) {
		if (after.has(key)) continue;
		changed = true;
		if (key.startsWith("&")) {
			delete combo[key.slice(1)];
			delete comboHold[key.slice(1)];
		} else modules = modules.map((m) => m.name === key ? {
			...m,
			nextId: null,
			hold: null
		} : m);
	}
	if (!changed) return null;
	return {
		...bank,
		modules,
		comboLast: combo,
		comboHold
	};
}
function enabledItems(mod) {
	return mod.items.filter((item) => item.enabled);
}
function indexOfNext(pool, nextId) {
	if (!nextId) return 0;
	const i = pool.findIndex((item) => item.id === nextId);
	return i >= 0 ? i : 0;
}
function readHold(bank, names) {
	if (names.length === 1) return bank.modules.find((m) => m.name === names[0])?.hold ?? null;
	return bank.comboHold?.[names.join("&")] ?? null;
}
function writeHold(bank, names, hold) {
	if (names.length === 1) {
		const name = names[0];
		return {
			...bank,
			modules: bank.modules.map((m) => m.name === name ? {
				...m,
				hold
			} : m)
		};
	}
	const key = names.join("&");
	return {
		...bank,
		comboHold: {
			...bank.comboHold ?? {},
			[key]: hold
		}
	};
}
function pickFresh(names, unique, pool, bank, rng) {
	if (!unique.every((mod) => mod.pick === "seq")) {
		const item = pool[Math.min(pool.length - 1, Math.floor(rng() * pool.length))];
		return {
			value: item.content.trim(),
			itemId: item.id,
			bank
		};
	}
	if (names.length === 1) {
		const mod = unique[0];
		const idx = indexOfNext(pool, mod.nextId);
		const item = pool[idx];
		const next = pool[(idx + 1) % pool.length];
		return {
			value: item.content.trim(),
			itemId: item.id,
			bank: {
				...bank,
				modules: bank.modules.map((m) => m.id === mod.id ? {
					...m,
					nextId: next.id
				} : m)
			}
		};
	}
	const key = names.join("&");
	const idx = indexOfNext(pool, bank.comboLast?.[key]);
	const item = pool[idx];
	const next = pool[(idx + 1) % pool.length];
	return {
		value: item.content.trim(),
		itemId: item.id,
		bank: {
			...bank,
			comboLast: {
				...bank.comboLast ?? {},
				[key]: next.id
			}
		}
	};
}
function resolve(names, bank, rng) {
	const unique = [];
	const missing = [];
	for (const name of names) {
		const mod = bank.modules.find((m) => m.name === name);
		if (!mod) missing.push(name);
		else if (!unique.includes(mod)) unique.push(mod);
	}
	const pool = unique.flatMap((mod) => enabledItems(mod));
	if (!pool.length) {
		for (const mod of unique) if (!missing.includes(mod.name)) missing.push(mod.name);
		return {
			value: "",
			bank,
			missing
		};
	}
	const rounds = Math.min(...unique.map(moduleRounds));
	const hold = readHold(bank, names);
	const held = hold ? pool.find((item) => item.id === hold.itemId) : void 0;
	if (hold && held && hold.used < rounds) return {
		value: held.content.trim(),
		bank: writeHold(bank, names, {
			itemId: held.id,
			used: hold.used + 1
		}),
		missing
	};
	const picked = pickFresh(names, unique, pool, bank, rng);
	return {
		value: picked.value,
		bank: writeHold(picked.bank, names, {
			itemId: picked.itemId,
			used: 1
		}),
		missing
	};
}
function expandField(text, bank, rng, missing, seen) {
	let next = bank;
	return {
		text: text.replace(tagRe(), (_full, first, rest) => {
			const names = namesOf(first, rest || "");
			const key = names.length > 1 ? names.join("&") : names[0];
			const cached = seen.get(key);
			if (cached !== void 0) return cached;
			const got = resolve(names, next, rng);
			next = got.bank;
			missing.push(...got.missing);
			seen.set(key, got.value);
			return got.value;
		}),
		bank: next
	};
}
/** 开关关着时原样返回，符号当普通字。开着时换成选中的内容，并推进顺序和轮数。同一张图里同一个符号只算一轮。 */
function expandParams(params, bank, rng = Math.random) {
	if (!bank?.enabled) return {
		params,
		bank,
		missing: []
	};
	const missing = [];
	const seen = /* @__PURE__ */ new Map();
	let next = bank;
	const apply = (text) => {
		const got = expandField(text || "", next, rng, missing, seen);
		next = got.bank;
		return got.text;
	};
	return {
		params: {
			...params,
			promptFront: apply(params.promptFront),
			promptMid: apply(params.promptMid),
			promptBack: apply(params.promptBack),
			negative: apply(params.negative)
		},
		bank: next,
		missing: [...new Set(missing)]
	};
}
function parseItem(raw) {
	if (!raw || typeof raw !== "object") return null;
	const row = raw;
	if (typeof row.id !== "string" || typeof row.name !== "string") return null;
	const item = {
		id: row.id,
		name: row.name,
		content: typeof row.content === "string" ? row.content : "",
		enabled: row.enabled !== false
	};
	if (typeof row.sourceId === "string" && row.sourceId) item.sourceId = row.sourceId;
	if (row.nameCustom === true) item.nameCustom = true;
	return item;
}
function parseRandomBank(raw) {
	const empty = emptyBank();
	if (!raw || typeof raw !== "object") return empty;
	const row = raw;
	const modules = [];
	if (Array.isArray(row.modules)) for (const mod of row.modules) {
		if (!mod || typeof mod !== "object") continue;
		const m = mod;
		if (typeof m.id !== "string" || typeof m.name !== "string" || !m.name.trim()) continue;
		if (modules.some((x) => x.name === m.name || x.id === m.id)) continue;
		const items = Array.isArray(m.items) ? m.items.map(parseItem).filter((x) => !!x) : [];
		const rounds = moduleRounds(m);
		const hold = parseHold(m.hold);
		modules.push({
			id: m.id,
			name: m.name.trim(),
			pick: m.pick === "seq" ? "seq" : "random",
			items,
			nextId: typeof m.nextId === "string" ? m.nextId : null,
			...rounds > 1 ? { rounds } : {},
			...hold ? { hold } : {},
			...m.linked === "appearances" ? { linked: "appearances" } : {},
			groupId: typeof m.groupId === "string" ? m.groupId : null,
			...m.starred === true ? { starred: true } : {},
			order: Number.isFinite(Number(m.order)) ? Number(m.order) : modules.length
		});
	}
	const groups = parseGroups(row.groups);
	const groupIds = new Set(groups.map((g) => g.id));
	for (const mod of modules) if (mod.groupId && !groupIds.has(mod.groupId)) mod.groupId = null;
	const comboLast = {};
	if (row.comboLast && typeof row.comboLast === "object") {
		for (const [k, v] of Object.entries(row.comboLast)) if (typeof v === "string") comboLast[k] = v;
	}
	const comboHold = {};
	if (row.comboHold && typeof row.comboHold === "object") for (const [k, v] of Object.entries(row.comboHold)) {
		const hold = parseHold(v);
		if (hold) comboHold[k] = hold;
	}
	const poolHeight = poolHeightOf(row.poolHeight);
	return {
		enabled: row.enabled === true,
		modules,
		comboLast,
		...Object.keys(comboHold).length ? { comboHold } : {},
		...row.appearanceModuleDismissed === true ? { appearanceModuleDismissed: true } : {},
		...groups.length ? { groups } : {},
		...poolHeight != null ? { poolHeight } : {}
	};
}
function poolHeightOf(raw) {
	const n = Number(raw);
	if (!Number.isFinite(n)) return null;
	return Math.max(216, Math.min(1200, Math.round(n)));
}
function parseGroups(raw) {
	if (!Array.isArray(raw)) return [];
	const groups = [];
	for (const item of raw) {
		if (!item || typeof item !== "object") continue;
		const g = item;
		if (typeof g.id !== "string" || typeof g.name !== "string" || !g.name.trim()) continue;
		if (groups.some((x) => x.id === g.id)) continue;
		groups.push({
			id: g.id,
			name: g.name.trim(),
			parentId: typeof g.parentId === "string" ? g.parentId : null,
			collapsed: g.collapsed !== false,
			order: Number.isFinite(Number(g.order)) ? Number(g.order) : groups.length,
			...g.starred === true ? { starred: true } : {}
		});
	}
	const ids = new Set(groups.map((g) => g.id));
	for (const g of groups) if (g.parentId && !ids.has(g.parentId)) g.parentId = null;
	const seen = /* @__PURE__ */ new Set();
	const clean = (id) => {
		if (!id) return true;
		if (seen.has(id)) return false;
		seen.add(id);
		const parent = groups.find((g) => g.id === id)?.parentId ?? null;
		const ok = clean(parent);
		seen.delete(id);
		return ok;
	};
	for (const g of groups) if (!clean(g.id)) g.parentId = null;
	return groups;
}
function orderedGroups(bank, parentId, orders, pinStars = true) {
	return (bank.groups ?? []).filter((g) => (g.parentId ?? null) === parentId).sort((a, b) => compareTree(a, b, orders, pinStars));
}
function orderedModules(bank, parentId, orders, pinStars = true) {
	return bank.modules.filter((m) => (m.groupId ?? null) === parentId).sort((a, b) => compareTree(a, b, orders, pinStars));
}
function compareTree(a, b, orders, pinStars) {
	if (pinStars && Boolean(a.starred) !== Boolean(b.starred)) return a.starred ? -1 : 1;
	return (orders?.[a.id] ?? a.order ?? 0) - (orders?.[b.id] ?? b.order ?? 0);
}
function groupDescendants(groups, id) {
	const out = [];
	const walk = (pid) => {
		for (const g of groups) {
			if (g.parentId !== pid) continue;
			out.push(g.id);
			walk(g.id);
		}
	};
	walk(id);
	return out;
}
function deleteRandomGroup(bank, id) {
	const drop = /* @__PURE__ */ new Set([id, ...groupDescendants(bank.groups ?? [], id)]);
	const hitLinked = bank.modules.some((m) => m.linked === "appearances" && m.groupId && drop.has(m.groupId));
	return {
		...bank,
		groups: (bank.groups ?? []).filter((g) => !drop.has(g.id)),
		modules: bank.modules.filter((m) => !(m.groupId && drop.has(m.groupId))),
		...hitLinked ? { appearanceModuleDismissed: true } : {}
	};
}
/** 打开随机设置时调用。联动的「角色」不在了，就在最外层补一份。 */
function reviveAppearanceModule(bank, appearances) {
	const base = bank ?? emptyBank();
	if (base.modules.some((m) => m.linked === "appearances")) return base;
	const ordered = [...appearances].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
	if (!ordered.length) return base;
	if (base.modules.some((m) => m.name === "角色")) return base;
	const order = base.modules.filter((m) => (m.groupId ?? null) === null).reduce((n, m) => Math.max(n, m.order ?? 0), -1) + 1;
	const mod = {
		...fillLinked(blankLinked(), ordered),
		groupId: null,
		order
	};
	return {
		...base,
		appearanceModuleDismissed: false,
		modules: [...base.modules, mod]
	};
}
function parseHold(raw) {
	if (!raw || typeof raw !== "object") return null;
	const row = raw;
	const used = Math.floor(Number(row.used));
	if (typeof row.itemId !== "string" || !row.itemId || !Number.isFinite(used) || used < 1) return null;
	return {
		itemId: row.itemId,
		used
	};
}
function blankLinked() {
	return {
		id: uid("rm_"),
		name: APPEARANCE_MODULE_NAME,
		pick: "random",
		items: [],
		nextId: null,
		linked: "appearances"
	};
}
function fillLinked(mod, ordered) {
	const prev = new Map(mod.items.filter((item) => item.sourceId).map((item) => [item.sourceId, item]));
	const items = ordered.map((a) => {
		const old = prev.get(a.id);
		if (!old) return {
			id: uid("ri_"),
			name: a.name,
			content: a.prompt,
			enabled: false,
			sourceId: a.id
		};
		const custom = old.nameCustom === true;
		return {
			id: old.id,
			name: custom ? old.name : a.name,
			content: a.prompt,
			enabled: old.enabled,
			sourceId: a.id,
			...custom ? { nameCustom: true } : {}
		};
	});
	const nextId = items.some((item) => item.id === mod.nextId) ? mod.nextId ?? null : null;
	const hold = mod.hold && items.some((item) => item.id === mod.hold?.itemId) ? mod.hold : null;
	return {
		...mod,
		name: APPEARANCE_MODULE_NAME,
		linked: "appearances",
		items,
		nextId,
		hold
	};
}
function sameItem(a, b) {
	return a.id === b.id && a.name === b.name && a.content === b.content && a.enabled === b.enabled && (a.sourceId ?? "") === (b.sourceId ?? "") && a.nameCustom === b.nameCustom;
}
function sameLinked(a, b) {
	if (a.name !== b.name || a.linked !== b.linked || (a.nextId ?? null) !== (b.nextId ?? null)) return false;
	if (a.items.length !== b.items.length) return false;
	return a.items.every((item, i) => sameItem(item, b.items[i]));
}
/** ensure：没有就按现有角色建一份，用户删掉过则不动。create：新保存了角色，删掉过也要再建。update：只刷新已经在的那份。 */
function syncAppearanceModule(bank, appearances, mode) {
	const base = bank ?? emptyBank();
	const ordered = [...appearances].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
	const linked = base.modules.find((m) => m.linked === "appearances");
	if (!linked) {
		if (mode === "update" || mode === "ensure" && (base.appearanceModuleDismissed === true || ordered.length === 0)) return base;
		if (base.modules.some((m) => m.name === "角色")) return base;
		return {
			...base,
			appearanceModuleDismissed: false,
			modules: [...base.modules, fillLinked(blankLinked(), ordered)]
		};
	}
	const filled = fillLinked(linked, ordered);
	const dismissed = mode === "create" ? false : base.appearanceModuleDismissed;
	if (sameLinked(linked, filled) && dismissed === base.appearanceModuleDismissed) return base;
	return {
		...base,
		appearanceModuleDismissed: dismissed,
		modules: base.modules.map((m) => m.id === linked.id ? filled : m)
	};
}
/** 复制是快照。不带走角色选择的关联，之后两边互不影响。 */
function duplicateRandomModule(mod, modules) {
	const base = `${mod.name}(副本)`;
	let name = base;
	let n = 2;
	while (modules.some((m) => m.name === name)) {
		name = `${base}${n}`;
		n += 1;
	}
	return {
		id: uid("rm_"),
		name,
		pick: mod.pick,
		nextId: null,
		...moduleRounds(mod) > 1 ? { rounds: moduleRounds(mod) } : {},
		groupId: mod.groupId ?? null,
		starred: false,
		order: modules.filter((m) => (m.groupId ?? null) === (mod.groupId ?? null)).reduce((n, m) => Math.max(n, m.order ?? 0), -1) + 1,
		items: mod.items.map((item) => ({
			id: uid("ri_"),
			name: item.name,
			content: item.content,
			enabled: item.enabled
		}))
	};
}
var LLM_KEY_SEP = "";
function llmModelKey(accountId, model) {
	return `${accountId}${LLM_KEY_SEP}${model}`;
}
function parseLlmModelKey(key) {
	const i = key.indexOf(LLM_KEY_SEP);
	if (i <= 0) return null;
	const model = key.slice(i + 1);
	if (!model) return null;
	return {
		accountId: key.slice(0, i),
		model
	};
}
function llmModelName(key) {
	return parseLlmModelKey(key)?.model ?? key;
}
function isMultiLlm(activeIds) {
	return (activeIds?.length ?? 0) > 1;
}
function llmModelLabel(key, accounts, catalog) {
	const name = llmModelName(key);
	const parsed = parseLlmModelKey(key);
	if (!parsed) return name;
	if (catalog.filter((id) => llmModelName(id) === name).length < 2) return name;
	const acc = accounts.find((a) => a.id === parsed.accountId);
	return acc?.name ? `${name} · ${acc.name}` : name;
}
function catalogFromLinks(links, prefer) {
	const llmModels = [];
	const llmStarred = [];
	for (const link of links) {
		const stars = new Set(link.account.starred ?? []);
		for (const model of link.models) {
			const key = llmModelKey(link.account.id, model);
			if (!llmModels.includes(key)) llmModels.push(key);
			if (stars.has(model)) llmStarred.push(key);
		}
	}
	return {
		llmModels,
		llmStarred,
		llmModel: prefer && llmModels.includes(prefer) ? prefer : llmStarred[0] || llmModels[0] || ""
	};
}
function resolveLlmSend(s, modelKey, baseOverride = "", keyOverride = "") {
	if (baseOverride && keyOverride) return {
		baseUrl: baseOverride,
		apiKey: keyOverride,
		model: llmModelName(modelKey)
	};
	const accounts = s.llmAccounts ?? [];
	const parsed = parseLlmModelKey(modelKey);
	if (parsed) {
		const acc = accounts.find((a) => a.id === parsed.accountId);
		if (acc) return {
			baseUrl: acc.base,
			apiKey: acc.key,
			model: parsed.model
		};
	}
	for (const id of s.llmModels ?? []) {
		const row = parseLlmModelKey(id);
		if (!row || row.model !== modelKey) continue;
		const acc = accounts.find((a) => a.id === row.accountId);
		if (acc) return {
			baseUrl: acc.base,
			apiKey: acc.key,
			model: row.model
		};
	}
	return {
		baseUrl: s.llmBase,
		apiKey: s.llmKey,
		model: llmModelName(modelKey)
	};
}
/** Chat top-bar: current pick, then starred models that are still listed. */
function chatPickerModels(starred, available, current) {
	const avail = new Set(available);
	const ids = [];
	if (current) ids.push(current);
	for (const id of starred) if (avail.has(id) && !ids.includes(id)) ids.push(id);
	return ids;
}
/** Drop stars that left the catalog. Keep `current` if it is still the active pick. */
function pruneStarred(starred, available, current) {
	const avail = new Set(available);
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	for (const id of starred) {
		if (!id || seen.has(id)) continue;
		if (avail.has(id) || id === current) {
			seen.add(id);
			out.push(id);
		}
	}
	return out;
}
function snapshotLlmAccount(accounts, base, key, starred, model) {
	const b = base.trim();
	if (!b && !key) return accounts;
	return accounts.map((a) => a.base.trim() === b && a.key === key ? {
		...a,
		starred: [...starred],
		model
	} : a);
}
function applyLlmPick(s, id) {
	const keep = s.llmModels.includes(id) ? void 0 : id;
	const llmStarred = pruneStarred(s.llmStarred, s.llmModels, keep);
	const parsed = parseLlmModelKey(id);
	return {
		llmModel: id,
		llmStarred,
		chatSource: "api",
		llmAccounts: parsed ? (s.llmAccounts ?? []).map((a) => a.id === parsed.accountId ? {
			...a,
			model: parsed.model
		} : a) : snapshotLlmAccount(s.llmAccounts ?? [], s.llmBase, s.llmKey, llmStarred, id)
	};
}
var FOLLOW_IMAGE_AI = "__follow__";
function llmIdentity(base, key) {
	return `${base.trim()}\n${key}`;
}
function isGrokModelId(id) {
	return GROK_MODELS.some((m) => m.id === id);
}
/** Drop a saved built-in Grok id so prompt writing follows the user's own model. */
function dropBuiltinImageModel(id) {
	if (!id || isGrokModelId(id)) return null;
	return id;
}
function pushOpt(rows, seen, id, danger = false) {
	if (!id || seen.has(id)) return;
	seen.add(id);
	rows.push(danger ? {
		id,
		danger: true
	} : { id });
}
function imagePickerModels(input) {
	const apiOn = Boolean(input.llmConnected);
	const api = apiOn ? chatPickerModels(input.llmStarred, input.llmModels, input.llmModel) : [];
	const apiSet = new Set(api);
	const catalog = new Set(input.llmModels);
	const pick = input.imageModelId || "";
	const extraApi = pick && pick !== "__follow__" && !isGrokModelId(pick) && !apiSet.has(pick) ? pick : "";
	const apiDanger = Boolean(extraApi && (!apiOn || !catalog.has(extraApi)));
	const rows = [];
	const seen = /* @__PURE__ */ new Set();
	pushOpt(rows, seen, FOLLOW_IMAGE_AI);
	const list = extraApi ? [...api, extraApi] : api;
	for (const id of list) pushOpt(rows, seen, id, id === extraApi && apiDanger);
	return rows;
}
function applyImageAiPick(current, pick) {
	const pin = isGrokModelId(current.imageModelPin || "") ? null : current.imageModelPin || null;
	if (!pick || pick === "__follow__" || isGrokModelId(pick)) return {
		imageModelId: null,
		imageModelPin: pin
	};
	return {
		imageModelId: pick,
		imageModelPin: pick
	};
}
function imageWriteFields(imageModelId) {
	const dest = resolveImageWrite(imageModelId);
	if (!dest.split) return {};
	return {
		via: "api",
		model: dest.model
	};
}
function resolveImageWrite(imageModelId) {
	if (!imageModelId || isGrokModelId(imageModelId)) return { split: false };
	return {
		split: true,
		via: "api",
		model: imageModelId
	};
}
var idb_exports = /* @__PURE__ */ __exportAll$1({
	cachedUrl: () => cachedUrl,
	db: () => db,
	defaultSettings: () => defaultSettings,
	deleteImage: () => deleteImage,
	getImage: () => getImage,
	imageUrl: () => imageUrl,
	loadAll: () => loadAll,
	putImage: () => putImage,
	rememberUrl: () => rememberUrl
});
var defaultSettings = () => ({
	grokModelId: DEFAULT_GROK,
	chatSource: "api",
	llmBase: "",
	llmKey: "",
	llmConnected: false,
	llmModel: "",
	llmModels: [],
	llmStarred: [],
	llmAccounts: [],
	llmParams: { ...DEFAULT_LLM_PARAMS },
	llmIdentity: "",
	stPresets: [],
	stActiveId: null,
	stParamSnapshot: null,
	stImageActiveId: null,
	stWechatActiveId: null,
	stPresetId: null,
	stUseChat: false,
	stUseImage: false,
	stUseWechat: false,
	stPresetMode: "new",
	naiKey: "",
	naiBase: DEFAULT_NAI_BASE,
	naiConnected: false,
	naiImageSource: "proxy",
	naiOfficialKey: "",
	naiOfficialConnected: false,
	cooldownUntil: 0,
	chatImage: true,
	imageModelId: null,
	imageModelPin: null,
	theme: "light",
	multiDrawCount: 1,
	multiDrawInfinite: false,
	multiDrawExact: 1,
	multiDrawExactOn: false,
	random: {
		enabled: false,
		modules: [],
		comboLast: {}
	}
});
var HuiyuDB = class extends Dexie {
	chats;
	folders;
	cards;
	appearances;
	favorites;
	favGroups;
	history;
	images;
	kv;
	constructor() {
		super("huiyu");
		this.version(1).stores({
			chats: "id, folderId, order, updatedAt",
			folders: "id, order",
			cards: "id, order",
			appearances: "id, order",
			favorites: "id, createdAt",
			history: "id, createdAt",
			images: "id",
			kv: "key"
		});
		this.version(2).stores({ favGroups: "id, parentId, order" });
	}
};
var db = new HuiyuDB();
function parseLlmAccounts(raw) {
	if (!Array.isArray(raw)) return [];
	const out = [];
	for (const row of raw) {
		if (!row || typeof row !== "object") continue;
		const a = row;
		if (typeof a.id !== "string" || typeof a.name !== "string") continue;
		out.push({
			id: a.id,
			name: a.name,
			base: typeof a.base === "string" ? a.base : "",
			key: typeof a.key === "string" ? a.key : "",
			starred: Array.isArray(a.starred) ? a.starred.filter((id) => typeof id === "string") : void 0,
			model: typeof a.model === "string" ? a.model : void 0
		});
	}
	return out;
}
function parseSysPrompt(raw) {
	if (!raw || typeof raw !== "object") return void 0;
	const out = {};
	for (const [key, value] of Object.entries(raw)) {
		if (!value || typeof value !== "object") continue;
		const row = value;
		const patch = {};
		if (typeof row.text === "string") patch.text = row.text;
		if (typeof row.force === "boolean") patch.force = row.force;
		if (row.off === true) patch.off = true;
		if (patch.text !== void 0 || patch.force !== void 0 || patch.off) out[key] = patch;
	}
	return Object.keys(out).length ? out : void 0;
}
function exactDrawCount(raw) {
	const n = Math.floor(Number(raw));
	if (!Number.isFinite(n) || n < 1) return 1;
	return Math.min(n, Number.MAX_SAFE_INTEGER);
}
async function loadAll() {
	const [chats, folders, cards, appearances, favorites, favGroups, history, settingsRow] = await Promise.all([
		db.chats.toArray(),
		db.folders.toArray(),
		db.cards.toArray(),
		db.appearances.toArray(),
		db.favorites.toArray(),
		db.favGroups.toArray(),
		db.history.toArray(),
		db.kv.get("settings")
	]);
	const raw = settingsRow?.value ?? void 0;
	const stPresets = parseStPresets(raw?.stPresets);
	const stActiveId = typeof raw?.stActiveId === "string" && stPresets.some((p) => p.id === raw.stActiveId) ? raw.stActiveId : null;
	const stImageActiveId = typeof raw?.stImageActiveId === "string" && stPresets.some((p) => p.id === raw.stImageActiveId) ? raw.stImageActiveId : null;
	const stWechatActiveId = typeof raw?.stWechatActiveId === "string" && stPresets.some((p) => p.id === raw.stWechatActiveId) ? raw.stWechatActiveId : null;
	const picked = (typeof raw?.stPresetId === "string" && stPresets.some((p) => p.id === raw.stPresetId) ? raw.stPresetId : null) || stActiveId || stWechatActiveId || stImageActiveId;
	const stUseChat = typeof raw?.stUseChat === "boolean" ? raw.stUseChat : Boolean(stActiveId);
	const stUseImage = typeof raw?.stUseImage === "boolean" ? raw.stUseImage : Boolean(stImageActiveId);
	const stUseWechat = typeof raw?.stUseWechat === "boolean" ? raw.stUseWechat : Boolean(stWechatActiveId);
	const stPresetId = picked;
	return {
		chats,
		folders,
		cards,
		appearances,
		favorites,
		favGroups,
		history,
		settings: {
			...defaultSettings(),
			...raw ?? {},
			grokModelId: migrateGrokId(raw?.grokModelId),
			llmParams: mergeLlmParams(raw?.llmParams),
			llmModels: raw?.llmModels ?? [],
			llmStarred: raw?.llmStarred ?? [],
			llmAccounts: parseLlmAccounts(raw?.llmAccounts),
			stPresets,
			stActiveId: stUseChat ? stPresetId : null,
			stParamSnapshot: (stUseChat || stUseImage || stUseWechat) && raw?.stParamSnapshot ? mergeLlmParams(raw.stParamSnapshot) : null,
			stImageActiveId: stUseImage ? stPresetId : null,
			stWechatActiveId: stUseWechat ? stPresetId : null,
			stPresetId,
			stUseChat,
			stUseImage,
			stUseWechat,
			stPresetMode: raw?.stPresetMode === "old" ? "old" : "new",
			naiImageSource: raw?.naiImageSource === "official" ? "official" : "proxy",
			naiOfficialKey: typeof raw?.naiOfficialKey === "string" ? raw.naiOfficialKey : "",
			naiOfficialConnected: raw?.naiOfficialConnected === true,
			chatSource: "api",
			chatImage: raw?.chatImage !== false,
			imageModelId: dropBuiltinImageModel(typeof raw?.imageModelId === "string" ? raw.imageModelId : null),
			imageModelPin: dropBuiltinImageModel(typeof raw?.imageModelPin === "string" ? raw.imageModelPin : null),
			multiDrawCount: Math.min(10, Math.max(1, Math.round(Number(raw?.multiDrawCount) || 1))),
			multiDrawInfinite: raw?.multiDrawInfinite === true && raw?.multiDrawExactOn !== true,
			multiDrawExact: exactDrawCount(raw?.multiDrawExact),
			multiDrawExactOn: raw?.multiDrawExactOn === true && raw?.multiDrawInfinite !== true,
			random: parseRandomBank(raw?.random),
			sysPrompt: parseSysPrompt(raw?.sysPrompt),
			llmIdentity: typeof raw?.llmIdentity === "string" && raw.llmIdentity ? raw.llmIdentity : raw?.llmConnected && raw?.llmBase && raw?.llmKey ? llmIdentity(String(raw.llmBase), String(raw.llmKey)) : ""
		}
	};
}
async function putImage(id, blob) {
	await db.images.put({
		id,
		blob
	});
}
async function getImage(id) {
	return (await db.images.get(id))?.blob ?? null;
}
async function deleteImage(id) {
	await db.images.delete(id);
}
var urlCache = /* @__PURE__ */ new Map();
async function imageUrl(id) {
	if (!id) return null;
	const cached = urlCache.get(id);
	if (cached) return cached;
	const blob = await getImage(id);
	if (!blob) return null;
	const url = URL.createObjectURL(blob);
	urlCache.set(id, url);
	return url;
}
function rememberUrl(id, blob) {
	const prev = urlCache.get(id);
	if (prev) URL.revokeObjectURL(prev);
	const url = URL.createObjectURL(blob);
	urlCache.set(id, url);
	return url;
}
function cachedUrl(id) {
	return id ? urlCache.get(id) ?? null : null;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BTa7LXyd.js
var routes_BTa7LXyd_exports = /* @__PURE__ */ __exportAll({
	a: () => cancelMemory,
	c: () => regenMessage,
	component: () => Home,
	d: () => runManualMemory,
	f: () => sendOpening,
	i: () => cancelImage,
	l: () => replyPending,
	n: () => attachImage,
	o: () => editMessage,
	p: () => sendUser,
	r: () => branchFrom,
	s: () => invalidateMemory,
	t: () => abortChat,
	u: () => retryMemory
});
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = require_react_dom();
function presetNameFrom(params) {
	const t = joinPromptParts(params.promptFront, params.promptMid, params.promptBack).replace(/\s+/g, " ").trim();
	if (!t) return "未命名";
	return t.length > 28 ? t.slice(0, 28) + "…" : t;
}
function migrateFavorite(raw) {
	if (!raw || typeof raw !== "object") return null;
	const f = raw;
	if (!f.id) return null;
	if (f.params && typeof f.name === "string") return {
		id: f.id,
		name: f.name || "未命名",
		params: f.params,
		blobId: f.blobId,
		createdAt: f.createdAt || Date.now(),
		groupId: typeof f.groupId === "string" ? f.groupId : null,
		starred: f.starred === true,
		...typeof f.order === "number" ? { order: f.order } : {}
	};
	return {
		id: f.id || uid$1("fav_"),
		name: String(f.prompt || "").slice(0, 28) || "未命名",
		params: {
			...defaultPureParams(),
			promptMid: f.prompt || "",
			seed: f.seed ?? null
		},
		blobId: f.blobId,
		createdAt: f.createdAt || Date.now(),
		groupId: null,
		...typeof f.order === "number" ? { order: f.order } : {}
	};
}
function promptPreview(p) {
	if (p.merged) return p.promptMid;
	return joinPromptParts(p.promptFront, p.promptMid, p.promptBack);
}
function baseSettings() {
	return {
		grokModelId: DEFAULT_GROK,
		chatSource: "api",
		llmBase: "",
		llmKey: "",
		llmConnected: false,
		llmModel: "",
		llmModels: [],
		llmStarred: [],
		llmAccounts: [],
		llmParams: { ...DEFAULT_LLM_PARAMS },
		stPresets: [],
		stActiveId: null,
		stParamSnapshot: null,
		stImageActiveId: null,
		stWechatActiveId: null,
		naiKey: "",
		naiBase: DEFAULT_NAI_BASE,
		naiConnected: false,
		cooldownUntil: 0,
		chatImage: true,
		theme: "light"
	};
}
function rec(v) {
	return v && typeof v === "object" && !Array.isArray(v) ? v : null;
}
function str(v, fallback = "") {
	return typeof v === "string" ? v : fallback;
}
function num(v, fallback) {
	if (typeof v === "number" && Number.isFinite(v)) return v;
	if (typeof v === "string" && v.trim() !== "") {
		const n = Number(v);
		if (Number.isFinite(n)) return n;
	}
	return fallback;
}
function bool(v, fallback = false) {
	return typeof v === "boolean" ? v : fallback;
}
function isLegacyArchive(raw) {
	const o = rec(raw);
	if (!o) return false;
	if (o.kind === "huiyu-archive") return true;
	if (Array.isArray(o.roles) && !Array.isArray(o.chats)) return true;
	return false;
}
function pickArchiveJson(files) {
	const names = [
		"huiyu.json",
		"data.json",
		"archive.json"
	];
	const entries = Object.entries(files);
	for (const want of names) {
		const hit = entries.find(([k]) => {
			return k.replace(/\\/g, "/").replace(/^\.\//, "").split("/").pop() === want;
		});
		if (hit) return hit[1];
	}
}
function collectPngs(files) {
	const out = /* @__PURE__ */ new Map();
	for (const [path, data] of Object.entries(files)) {
		const base = path.replace(/\\/g, "/").split("/").pop() || "";
		const m = /^(.*)\.png$/i.exec(base);
		if (!m) continue;
		let id = m[1];
		try {
			id = decodeURIComponent(id);
		} catch {}
		if (id) out.set(id, data);
	}
	return out;
}
function blobFromBase64(raw) {
	try {
		let b64 = raw.includes("base64,") ? raw.split("base64,").pop() || "" : raw;
		b64 = b64.replace(/\s+/g, "");
		if (b64.length < 32) return null;
		const bin = atob(b64);
		const out = new Uint8Array(bin.length);
		for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
		return new Blob([out], { type: "image/png" });
	} catch {
		return null;
	}
}
function collectEmbeddedImages(raw) {
	const out = /* @__PURE__ */ new Map();
	const images = rec(rec(raw)?.images);
	if (!images) return out;
	for (const [id, val] of Object.entries(images)) {
		if (typeof val !== "string") continue;
		const blob = blobFromBase64(val);
		if (blob) out.set(id, blob);
	}
	return out;
}
function migrateNaiModel(id) {
	const s = str(id);
	if (NAI_MODELS.some((m) => m.id === s)) return s;
	return "nai-diffusion-4-5-full";
}
function migrateSampler(id) {
	const s = str(id);
	if (SAMPLERS.some((m) => m.id === s)) return s;
	return "k_euler_ancestral";
}
function migrateNoise(id) {
	const s = str(id);
	if (NOISE_SCHEDULES.some((m) => m.id === s)) return s;
	return "karras";
}
function extrasFrom(raw) {
	if (!Array.isArray(raw)) return [];
	return raw.map((e, i) => {
		const o = rec(e) || {};
		const body = str(o.body) || str(o.text) || str(o.title);
		return {
			id: str(o.id, `ex_${i}`),
			body,
			...o.applyImage === true ? { applyImage: true } : {},
			...o.emphasize === true ? { emphasize: true } : {}
		};
	});
}
function convertImageParams(raw) {
	const base = defaultImageParams();
	const o = rec(raw);
	if (!o) return base;
	const seedRaw = o.seed;
	let seed = null;
	if (typeof seedRaw === "number" && Number.isFinite(seedRaw)) seed = seedRaw;
	else if (typeof seedRaw === "string" && seedRaw.trim() !== "") {
		const n = Number(seedRaw);
		seed = Number.isFinite(n) ? n : null;
	}
	const characters = Array.isArray(o.characters) ? o.characters.map((c, i) => {
		const ch = rec(c) || {};
		return {
			id: str(ch.id, `char_${i}`),
			name: str(ch.name),
			enabled: ch.enabled !== false,
			prompt: str(ch.prompt),
			uc: str(ch.uc),
			x: num(ch.x, .5),
			y: num(ch.y, .5)
		};
	}) : [];
	return {
		...base,
		promptFront: str(o.promptFront, base.promptFront),
		promptMid: str(o.promptMid, base.promptMid),
		promptBack: str(o.promptBack, base.promptBack),
		merged: bool(o.merged, bool(o.unifiedPrompt)),
		sensitive: bool(o.sensitive),
		uncensored: bool(o.uncensored, bool(o.noCensor)),
		fullBody: bool(o.fullBody),
		tagSuggest: o.tagSuggest !== false,
		negative: str(o.negative, base.negative),
		ucPreset: [
			"heavy",
			"light",
			"human",
			"custom"
		].includes(str(o.ucPreset)) ? o.ucPreset : "heavy",
		model: migrateNaiModel(o.model),
		width: num(o.width, base.width),
		height: num(o.height, base.height),
		sampler: migrateSampler(o.sampler),
		noiseSchedule: migrateNoise(o.noiseSchedule),
		steps: num(o.steps, base.steps),
		scale: num(o.scale ?? o.cfg, base.scale),
		cfgRescale: num(o.cfgRescale, base.cfgRescale),
		seed,
		seedLocked: bool(o.seedLocked),
		stepsLocked: bool(o.stepsLocked),
		scaleLocked: bool(o.scaleLocked, bool(o.cfgLocked)),
		cfgRescaleLocked: bool(o.cfgRescaleLocked),
		varietyPlus: bool(o.varietyPlus),
		decrisper: bool(o.decrisper),
		useCoords: bool(o.useCoords),
		characters
	};
}
function charactersFromDraft(draft, imageParams) {
	const multi = bool(draft.multi);
	const cast = Array.isArray(draft.cast) ? draft.cast : [];
	const fromCast = (c, i) => {
		const o = rec(c) || {};
		const id = str(o.id, emptyCharacter(i + 1).id);
		const pc = imageParams.characters.find((x) => x.id === id || o.name && x.name === o.name);
		return {
			...emptyCharacter(i + 1),
			id,
			name: str(o.name),
			persona: str(o.persona),
			speech: str(o.speech),
			appearance: str(o.appearance),
			extras: extrasFrom(o.extras),
			personaVoices: bool(o.personaVoices),
			wechatAvatarBlobId: str(o.wechatAvatarBlobId) || void 0,
			imageEnabled: o.away === true ? false : o.imageEnabled !== false,
			prompt: str(o.prompt, pc?.prompt ?? ""),
			uc: str(o.uc, pc?.uc ?? ""),
			x: num(o.x ?? pc?.x, .5),
			y: num(o.y ?? pc?.y, .5)
		};
	};
	if (multi && cast.length) return cast.map(fromCast);
	const first = rec(cast[0]);
	const pc = imageParams.characters[0];
	const ch = emptyCharacter(1);
	return [{
		...ch,
		id: str(first?.id, pc?.id || ch.id),
		name: str(draft.name) || str(first?.name),
		persona: str(draft.persona) || str(first?.persona),
		speech: str(draft.speech) || str(first?.speech),
		appearance: str(draft.appearance) || str(first?.appearance),
		extras: extrasFrom(first?.extras),
		personaVoices: bool(first?.personaVoices ?? draft.personaVoices),
		wechatAvatarBlobId: str(first?.wechatAvatarBlobId) || void 0,
		prompt: str(first?.prompt, pc?.prompt ?? ""),
		uc: str(first?.uc, pc?.uc ?? ""),
		x: num(first?.x ?? pc?.x, .5),
		y: num(first?.y ?? pc?.y, .5)
	}];
}
function alignImageChars(params, characters) {
	if (params.characters.length) return {
		...params,
		characters: params.characters.map((pc) => {
			const match = characters.find((c) => c.id === pc.id) || characters.find((c) => c.name && c.name === pc.name);
			return match ? {
				...pc,
				name: pc.name || match.name,
				id: match.id
			} : pc;
		})
	};
	return {
		...params,
		characters: characters.map((c) => ({
			id: c.id,
			name: c.name,
			enabled: c.imageEnabled,
			prompt: c.prompt || c.appearance,
			uc: c.uc,
			x: c.x,
			y: c.y
		}))
	};
}
function convertGenImage(img, createdAt) {
	const o = rec(img) || {};
	const id = str(o.id, uid$1("img_"));
	return {
		id,
		blobId: str(o.blobId, id),
		prompt: str(o.prompt),
		charTails: void 0,
		negative: str(o.negative),
		seed: num(o.seed, 0),
		model: migrateNaiModel(o.model),
		width: num(o.width, 832),
		height: num(o.height, 1216),
		steps: num(o.steps, 28),
		sampler: migrateSampler(o.sampler),
		status: "done",
		createdAt
	};
}
function convertMessage(m, characters) {
	const o = rec(m) || {};
	const createdAt = num(o.createdAt, Date.now());
	const imagesRaw = Array.isArray(o.images) && o.images.length ? o.images : o.image ? [o.image] : [];
	const speakerId = str(o.speakerId) || void 0;
	const speakerName = str(o.speakerName) || void 0;
	const match = speakerId ? characters.find((c) => c.id === speakerId) : speakerName ? characters.find((c) => c.name === speakerName) : void 0;
	const role = o.role === "user" ? "user" : o.role === "narrator" ? "narrator" : "assistant";
	return {
		id: str(o.id, uid$1("msg_")),
		role,
		characterId: match?.id ?? speakerId,
		characterName: match?.name || speakerName,
		content: str(o.content, str(o.text)),
		images: imagesRaw.map((img) => convertGenImage(img, createdAt)),
		createdAt
	};
}
function convertRole(role, grokModelId) {
	const o = rec(role) || {};
	const draft = rec(o.draft) || {};
	let imageParams = convertImageParams(o.imageParams);
	if (o.customTagSuggest === false) imageParams = {
		...imageParams,
		tagSuggest: false
	};
	const characters = charactersFromDraft(draft, imageParams);
	imageParams = alignImageChars(imageParams, characters);
	const memoryObj = rec(o.memory);
	const memory = typeof o.memory === "string" ? o.memory : str(memoryObj?.text);
	const memoryUntil = num(memoryObj?.covered ?? o.memoryUntil, 0);
	const statusBar = str(draft.statusText, str(draft.statusBar));
	return {
		id: str(o.id, uid$1("chat_")),
		folderId: typeof o.folderId === "string" ? o.folderId : null,
		name: str(o.name, str(draft.name, "未命名")),
		remark: str(o.note, str(o.remark)),
		starred: bool(o.starred),
		order: num(o.order, num(o.sort, 0)),
		createdAt: num(o.createdAt, Date.now()),
		updatedAt: num(o.updatedAt, Date.now()),
		isDraft: false,
		grokModelId,
		isMulti: bool(draft.multi),
		multiMode: draft.chatMode === "group" ? "group" : "together",
		promptMode: draft.promptPack === "split" ? "insert" : "legacy",
		adultBoost: bool(draft.adultPrompt, bool(draft.adultBoost)),
		canGen: o.canGen !== false,
		statusBarOn: bool(draft.statusOn, bool(draft.statusBarOn)),
		statusBar: statusBar || (bool(draft.statusOn) ? DEFAULT_STATUS_BAR : ""),
		overview: str(draft.overview),
		opening: str(draft.scene, str(draft.opening)),
		extras: extrasFrom(draft.extras),
		memory,
		memoryUntil,
		memoryFoldAt: memoryUntil,
		memorySnaps: memory ? [{
			covered: memoryUntil,
			text: memory,
			foldAt: memoryUntil
		}] : [],
		characters,
		imageParams,
		messages: Array.isArray(o.messages) ? o.messages.map((m) => convertMessage(m, characters)) : [],
		avatarBlobId: str(o.avatarImageId, str(o.avatarBlobId)) || void 0,
		scrollTop: 0
	};
}
function convertFolder(f, i) {
	const o = rec(f) || {};
	return {
		id: str(o.id, uid$1("folder_")),
		name: str(o.name, "未命名"),
		starred: bool(o.starred),
		collapsed: bool(o.collapsed),
		order: num(o.order, num(o.sort, i)),
		createdAt: num(o.createdAt, Date.now())
	};
}
function convertPersonaCard(c, i, grokModelId) {
	const o = rec(c) || {};
	const draft = rec(o.draft) || rec(c) || {};
	const characters = charactersFromDraft(draft, defaultImageParams());
	return {
		id: str(o.id, uid$1("card_")),
		name: str(o.name, str(draft.name, "未命名")),
		isMulti: bool(draft.multi),
		overview: str(draft.overview),
		opening: str(draft.scene, str(draft.opening)),
		extras: extrasFrom(draft.extras),
		statusBarOn: bool(draft.statusOn),
		statusBar: str(draft.statusText, str(draft.statusBar)),
		characters,
		grokModelId,
		createdAt: num(o.createdAt, Date.now()),
		order: i
	};
}
function convertAppearance(c, i) {
	const o = rec(c) || {};
	return {
		id: str(o.id, uid$1("ap_")),
		name: str(o.name, "未命名"),
		prompt: str(o.prompt),
		order: num(o.order, i),
		createdAt: num(o.createdAt, Date.now())
	};
}
function convertHistory(h) {
	const o = rec(h) || {};
	const params = convertImageParams(o.params);
	const id = str(o.id, uid$1("hist_"));
	return {
		id,
		blobId: str(o.blobId, str(o.imageId, id)) || void 0,
		prompt: str(o.prompt, params.promptMid),
		negative: str(o.negative, params.negative),
		seed: num(o.seed, params.seed ?? 0),
		model: migrateNaiModel(o.model ?? params.model),
		width: num(o.width, params.width),
		height: num(o.height, params.height),
		steps: num(o.steps, params.steps),
		sampler: migrateSampler(o.sampler ?? params.sampler),
		params,
		createdAt: num(o.createdAt, Date.now()),
		status: "done"
	};
}
function presetToAppearance(p, i) {
	const o = rec(p) || {};
	const params = convertImageParams(o.params);
	const prompt = str(o.prompt) || params.promptMid || [
		params.promptFront,
		params.promptMid,
		params.promptBack
	].filter(Boolean).join(", ");
	const name = str(o.name);
	if (!name && !prompt) return null;
	return {
		id: str(o.id, uid$1("preset_")),
		name: name || "未命名预设",
		prompt,
		order: 1e3 + i,
		createdAt: num(o.createdAt, Date.now())
	};
}
function convertLegacyArchive(raw) {
	const o = rec(raw);
	if (!o) throw new Error("无法识别的存档");
	const settingsIn = rec(o.settings);
	const grokModelId = migrateGrokId(str(settingsIn?.grokModel, str(settingsIn?.grokModelId, DEFAULT_GROK)));
	const settings = {
		...baseSettings(),
		grokModelId,
		theme: settingsIn?.theme === "dark" ? "dark" : "light"
	};
	const chats = Array.isArray(o.roles) ? o.roles.map((r) => convertRole(r, grokModelId)) : [];
	const folders = Array.isArray(o.folders) ? o.folders.map(convertFolder) : [];
	const cards = Array.isArray(o.personaCards) ? o.personaCards.map((c, i) => convertPersonaCard(c, i, grokModelId)) : [];
	const appearances = Array.isArray(o.appearanceCards) ? o.appearanceCards.map(convertAppearance) : [];
	const seen = new Set(appearances.map((a) => a.id));
	if (Array.isArray(o.purePresets)) o.purePresets.forEach((p, i) => {
		const a = presetToAppearance(p, i);
		if (a && !seen.has(a.id)) {
			appearances.push(a);
			seen.add(a.id);
		}
	});
	const history = Array.isArray(o.pureHistory) ? o.pureHistory.map(convertHistory) : [];
	const pureParams = o.pureParams ? convertImageParams(o.pureParams) : defaultPureParams();
	const currentId = typeof o.activeRoleId === "string" && chats.some((c) => c.id === o.activeRoleId) ? o.activeRoleId : [...chats].sort((a, b) => b.updatedAt - a.updatedAt)[0]?.id ?? null;
	return {
		dump: {
			version: 1,
			settings,
			folders,
			chats,
			cards,
			appearances,
			favorites: [],
			history,
			hasImages: o.imagesIncluded !== false
		},
		currentId,
		pureParams
	};
}
function addId(ids, id) {
	if (typeof id === "string" && id) ids.add(id);
}
function addLines(ids, lines, pending) {
	for (const line of lines ?? []) for (const item of line.attachments ?? []) addId(ids, item.blobId);
	for (const item of pending ?? []) addId(ids, item.blobId);
}
function addLog(ids, log) {
	if (!log) return;
	addLines(ids, log.lines);
	for (const room of Object.values(log.rooms ?? {})) addLines(ids, room.lines, room.pending);
}
function addSession(ids, session) {
	addLines(ids, session.lines, session.pending);
	for (const room of Object.values(session.rooms ?? {})) addLines(ids, room.lines, room.pending);
}
function keptImageIds(dump) {
	const ids = /* @__PURE__ */ new Set();
	for (const sticker of dump.wechatStickers ?? []) addId(ids, sticker.blobId);
	for (const fav of dump.favorites ?? []) addId(ids, fav.blobId);
	for (const card of dump.cards ?? []) {
		addId(ids, card.customAvatarBlobId);
		for (const c of card.characters ?? []) {
			addId(ids, c.lookBlobId);
			addId(ids, c.wechatAvatarBlobId);
		}
	}
	for (const chat of dump.chats ?? []) {
		addId(ids, chat.customAvatarBlobId);
		addId(ids, chat.bgImageId);
		for (const c of chat.characters ?? []) {
			addId(ids, c.lookBlobId);
			addId(ids, c.wechatAvatarBlobId);
		}
		for (const m of chat.messages ?? []) {
			addId(ids, m.userImageBlobId);
			for (const shot of m.userImages ?? []) addId(ids, shot.blobId);
			addLog(ids, m.wechatLog);
		}
	}
	for (const session of Object.values(dump.wechatSessions ?? {})) addSession(ids, session);
	for (const shots of Object.values(dump.composerShots ?? {})) for (const shot of shots ?? []) addId(ids, shot.blobId);
	addId(ids, dump.settings?.look?.bgImageId);
	return ids;
}
async function exportArchive(kind) {
	const [chats, folders, cards, appearances, favorites, favGroups, history, settingsRow, wechatRow, stickerRow, pureRow, currentRow, draftsRow, shotsRow] = await Promise.all([
		db.chats.toArray(),
		db.folders.toArray(),
		db.cards.toArray(),
		db.appearances.toArray(),
		db.favorites.toArray(),
		db.favGroups.toArray(),
		db.history.toArray(),
		db.kv.get("settings"),
		db.kv.get("wechatSessions"),
		db.kv.get("wechatStickers"),
		db.kv.get("pureParams"),
		db.kv.get("currentId"),
		db.kv.get("composerDrafts"),
		db.kv.get("composerShots")
	]);
	const dump = {
		version: 1,
		settings: settingsRow?.value ?? {
			grokModelId: "grok-4.6-medium",
			chatSource: "api",
			llmBase: "",
			llmKey: "",
			llmConnected: false,
			llmModel: "",
			llmModels: [],
			llmStarred: [],
			llmAccounts: [],
			llmParams: {
				temperature: .9,
				topP: 1,
				frequencyPenalty: 0,
				presencePenalty: .4,
				maxTokens: 4096,
				contextTurns: 16
			},
			stPresets: [],
			stActiveId: null,
			stParamSnapshot: null,
			stImageActiveId: null,
			stWechatActiveId: null,
			naiKey: "",
			naiBase: "https://api.idlecloud.cc",
			naiConnected: false,
			cooldownUntil: 0,
			chatImage: true,
			theme: "light"
		},
		folders,
		chats,
		cards,
		appearances,
		favorites,
		favGroups,
		history,
		hasImages: kind !== "lite",
		wechatSessions: wechatRow?.value ?? {},
		wechatStickers: Array.isArray(stickerRow?.value) ? stickerRow.value : [],
		pureParams: pureRow?.value && typeof pureRow.value === "object" ? pureRow.value : void 0,
		currentId: typeof currentRow?.value === "string" ? currentRow.value : null,
		composerDrafts: draftsRow?.value && typeof draftsRow.value === "object" && !Array.isArray(draftsRow.value) ? draftsRow.value : {},
		composerShots: shotsRow?.value && typeof shotsRow.value === "object" && !Array.isArray(shotsRow.value) ? shotsRow.value : {}
	};
	if (kind === "lite") {
		if (dump.settings?.look) dump.settings = {
			...dump.settings,
			look: {
				...dump.settings.look,
				bgImageId: void 0
			}
		};
		dump.chats = (dump.chats ?? []).map((c) => ({
			...c,
			bgImageId: void 0
		}));
		dump.favorites = (dump.favorites ?? []).map((f) => ({
			...f,
			blobId: void 0
		}));
		dump.history = (dump.history ?? []).map((h) => ({
			...h,
			blobId: void 0
		}));
		dump.composerShots = {};
		downloadBlob(new Blob([JSON.stringify(dump)], { type: "application/json" }), `绘语-无配图-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`);
		return;
	}
	const files = {};
	const images = await db.images.toArray();
	if (kind === "partial") {
		dump.history = (dump.history ?? []).map((h) => ({
			...h,
			blobId: void 0
		}));
		const keep = keptImageIds(dump);
		for (const img of images) {
			if (!keep.has(img.id)) continue;
			files[`images/${img.id}.png`] = new Uint8Array(await img.blob.arrayBuffer());
		}
	} else for (const img of images) files[`images/${img.id}.png`] = new Uint8Array(await img.blob.arrayBuffer());
	files["huiyu.json"] = strToU8(JSON.stringify(dump));
	const zipped = zipSync(files, { level: 1 });
	const name = kind === "partial" ? "部分配图" : "全部";
	downloadBlob(new Blob([zipped], { type: "application/zip" }), `绘语-${name}-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.zip`);
}
async function importArchive(file) {
	const name = file.name.toLowerCase();
	let raw;
	const imageBlobs = /* @__PURE__ */ new Map();
	const head = new Uint8Array(await file.slice(0, 4).arrayBuffer());
	if (name.endsWith(".zip") || head[0] === 80 && head[1] === 75) {
		const buf = new Uint8Array(await file.arrayBuffer());
		let unzipped;
		try {
			unzipped = unzipSync(buf);
		} catch {
			throw new Error("无法识别的存档");
		}
		const jsonFile = pickArchiveJson(unzipped);
		if (!jsonFile) throw new Error("无法识别的存档");
		try {
			raw = JSON.parse(strFromU8(jsonFile));
		} catch {
			throw new Error("无法识别的存档");
		}
		for (const [id, data] of collectPngs(unzipped)) imageBlobs.set(id, new Blob([data], { type: "image/png" }));
	} else try {
		raw = JSON.parse(await file.text());
	} catch {
		throw new Error("无法识别的存档");
	}
	for (const [id, blob] of collectEmbeddedImages(raw)) if (!imageBlobs.has(id)) imageBlobs.set(id, blob);
	let dump;
	let currentId;
	let pureParams;
	if (isLegacyArchive(raw)) {
		const loaded = convertLegacyArchive(raw);
		dump = loaded.dump;
		currentId = loaded.currentId;
		pureParams = loaded.pureParams;
	} else {
		dump = raw;
		if (!dump || dump.version !== 1 || !Array.isArray(dump.chats)) throw new Error("无法识别的存档");
	}
	const tables = [
		db.chats,
		db.folders,
		db.cards,
		db.appearances,
		db.favorites,
		db.favGroups,
		db.history,
		db.images,
		db.kv
	];
	await db.transaction("rw", tables, async () => {
		await db.chats.clear();
		await db.folders.clear();
		await db.cards.clear();
		await db.appearances.clear();
		await db.favorites.clear();
		await db.favGroups.clear();
		await db.history.clear();
		await db.images.clear();
		await db.chats.bulkPut(dump.chats ?? []);
		await db.folders.bulkPut(dump.folders ?? []);
		await db.cards.bulkPut(dump.cards ?? []);
		await db.appearances.bulkPut(dump.appearances ?? []);
		await db.favorites.bulkPut((dump.favorites ?? []).map(migrateFavorite).filter(Boolean));
		await db.favGroups.bulkPut((dump.favGroups ?? []).filter((g) => g && typeof g.id === "string"));
		await db.history.bulkPut(dump.history ?? []);
		const prevVal = (await db.kv.get("settings"))?.value ?? void 0;
		const dumpS = dump.settings;
		const merged = {
			...prevVal ?? {},
			...dumpS,
			naiKey: dumpS?.naiKey || prevVal?.naiKey || "",
			naiOfficialKey: dumpS?.naiOfficialKey || prevVal?.naiOfficialKey || "",
			llmKey: dumpS?.llmKey || prevVal?.llmKey || "",
			llmAccounts: Array.isArray(dumpS?.llmAccounts) ? dumpS.llmAccounts : prevVal?.llmAccounts ?? [],
			stPresets: Array.isArray(dumpS?.stPresets) ? dumpS.stPresets : prevVal?.stPresets ?? [],
			stActiveId: dumpS?.stActiveId ?? prevVal?.stActiveId ?? null,
			stParamSnapshot: dumpS?.stParamSnapshot ?? prevVal?.stParamSnapshot ?? null,
			stImageActiveId: dumpS?.stImageActiveId ?? prevVal?.stImageActiveId ?? null,
			stWechatActiveId: dumpS?.stWechatActiveId ?? prevVal?.stWechatActiveId ?? null
		};
		await db.kv.put({
			key: "settings",
			value: merged
		});
		if (currentId !== void 0) await db.kv.put({
			key: "currentId",
			value: currentId
		});
		if (pureParams) await db.kv.put({
			key: "pureParams",
			value: pureParams
		});
		if (dump.wechatSessions && typeof dump.wechatSessions === "object") await db.kv.put({
			key: "wechatSessions",
			value: dump.wechatSessions
		});
		if (Array.isArray(dump.wechatStickers)) await db.kv.put({
			key: "wechatStickers",
			value: dump.wechatStickers
		});
		if (dump.pureParams && typeof dump.pureParams === "object") await db.kv.put({
			key: "pureParams",
			value: dump.pureParams
		});
		if ("currentId" in dump) await db.kv.put({
			key: "currentId",
			value: typeof dump.currentId === "string" ? dump.currentId : null
		});
		if (dump.composerDrafts && typeof dump.composerDrafts === "object") await db.kv.put({
			key: "composerDrafts",
			value: dump.composerDrafts
		});
		if (dump.composerShots && typeof dump.composerShots === "object") await db.kv.put({
			key: "composerShots",
			value: dump.composerShots
		});
	});
	for (const [id, blob] of imageBlobs) await putImage(id, blob);
}
function cloneChat(chat, nameSuffix = "(副本)") {
	const id = uid$1("chat_");
	return {
		...structuredClone(chat),
		id,
		name: chat.name ? `${chat.name}${nameSuffix}` : "未命名" + nameSuffix,
		starred: false,
		createdAt: Date.now(),
		updatedAt: Date.now(),
		isDraft: false,
		messages: structuredClone(chat.messages)
	};
}
function isWorkshopChat(chat) {
	return chat?.kind === "assistant" || chat?.kind === "card";
}
function workshopMark(kind) {
	if (kind === "card") return "✍️";
	if (kind === "assistant") return "✨";
	return "";
}
function workshopTitle(chat) {
	const mark = workshopMark(chat.kind);
	const name = chat.name.trim() || (chat.kind === "card" ? "写卡助手" : "绘语助理");
	return mark ? `${mark} ${name}` : name;
}
function nextWorkshopName(chats, kind) {
	const base = kind === "card" ? "写卡助手" : "绘语助理";
	let n = 0;
	for (const chat of chats) {
		if (chat.kind !== kind) continue;
		const hit = chat.name.trim().match(new RegExp(`^${base}(\\d+)$`));
		if (hit) n = Math.max(n, Number(hit[1]));
	}
	return `${base}${n + 1}`;
}
var CARD_TITLES = [
	"要求总览",
	"人设",
	"说话方式",
	"外貌备忘",
	"开场场景"
];
function replyLooksLikeCard(text) {
	return CARD_TITLES.every((title) => new RegExp(`(?:^|\\n)\\s*(?:【\\s*)?${title}(?:\\s*】)?\\s*[:：]?\\s*(?:\\n|$)`).test(text));
}
var DOCS = [
	{
		keys: [
			"绘语",
			"功能",
			"应用",
			"侧边栏"
		],
		title: "功能目录",
		text: `绘语是一个角色扮演聊天应用，旁边还能生图。
普通聊天按角色卡演戏。人设页有要求总览、人设、说话方式、外貌备忘、开场场景。可以多人，可以状态栏和好感度，可以长期记忆，可以微信。
侧边栏管聊天和文件夹。设置里有聊天补全、生图、预设、字体和背景。预设分新版方法和旧版方法，新版按开关读条目。
生图分聊天里的配图和纯生图。聊天配图由写手根据这一轮写英文 tag。
绘语工坊里有写卡助手和绘语助理。它们不扮演角色，也不能改应用里的数据。`
	},
	{
		keys: [
			"扮演",
			"角色扮演",
			"选项",
			"聊天规则"
		],
		title: "聊天规则原文",
		text: RP_SYSTEM
	},
	{
		keys: [
			"人设",
			"完善",
			"写卡",
			"声部",
			"角色卡"
		],
		title: "完善人设原文",
		text: `${POLISH_SYSTEM}\n\n${PERSONA_VOICE_RULES}\n\n${FIELD_SYSTEM}`
	},
	{
		keys: [
			"生图",
			"提示词",
			"nai",
			"novelai",
			"配图"
		],
		title: "生图写手原文",
		text: IMAGE_SYSTEM
	},
	{
		keys: ["预设"],
		title: "预设怎么拼",
		text: "聊天用当前选中的预设。新版方法只发送打开的条目，旧版方法发送导入时封存的整段。预设在系统提示词里，用来定文风和少被误杀。绘语自己的格式规则写在预设后面。微信、长期记忆、改人设也会带上预设，但后面有一句锁住这次该输出什么。"
	},
	{
		keys: ["记忆", "长期记忆"],
		title: "长期记忆原文",
		text: MEMORY_SYSTEM
	},
	{
		keys: ["状态栏", "好感"],
		title: "状态栏和好感度",
		text: "这两个开关默认关。关掉时不写进提示词，聊天里也不显示。打开后，模型在正文和选项后面另写一块。状态栏按用户模板只改冒号后面。好感度是 -100 到 100 的整数，每轮在上一轮的数上加减，并写一两句这个人对用户的感觉。界面把它们画成半透明卡片，不把块留在正文里。"
	},
	{
		keys: ["微信"],
		title: "微信",
		text: "微信是另一个聊天页。气泡只写发出去的话，内心和表情包分开。它可以用主聊天的模型，也可以单独选账号和模型。预设会带上，但输出必须是微信的 JSON，不能写成小说。"
	}
];
function assistantDocs(userText) {
	const q = userText.toLowerCase();
	const hits = DOCS.filter((doc) => doc.keys.some((key) => q.includes(key.toLowerCase())));
	if (!hits.length) return "";
	return hits.map((doc) => `【资料·${doc.title}】\n下面是给你看的原文，不是叫你照着演。\n${doc.text}`).join("\n\n");
}
var CARD_RULES = `你是绘语里的写卡助手。你不是角色，不要扮演任何人，不要用角色口吻跟用户闲聊。
用户要你写或改角色卡时，自由度很高：可以按零碎设定写完整卡，可以把几张卡收成一张多人卡，也可以按他的话改一张现成的卡。关系、身份、题材都按用户这次说的来，不要默认成某一种关系。
没要你交完整卡时，就正常回答，不要硬套标题。

完整卡用这些标题，标题各自独占一行，不要加粗，不要加序号：名字、要求总览、人设、说话方式、外貌备忘、开场场景。
单人顺序：名字、要求总览、人设、说话方式、外貌备忘、开场场景。
多人：每个人先独占一行写「名字」，再写这个人的人设、说话方式、外貌备忘。所有人写完后，整张卡再各写一份要求总览和开场场景。

禁止写成提纲。不要出现「短骨架」「怎么演：」「关系张力：」「不能一压就崩：」「社会：一句话」。栏下面直接写正文。

要求总览写成一整段，不要小标题。写清基调、两人之间的拉力、对方真的压过来时这个人怎么反咬而不是立刻塌掉。若这张卡会写到露骨场面，同一段里写明：直写身体和动作，禁止用含蓄的话跳过，写的时候性格不能变成木头。

人设先写长正文，再写声部。正文要够演：这个人是谁，对外什么样，对用户什么样，越界时具体做哪几件事，喜欢什么，讨厌什么。然后是五个声部，标题写成「声部一·社会」「声部二·内心」「声部三·」后面接这个人自己的特质，不要写成「核心特质」四个字、「声部四·他者」「声部五·作者」。
声部一到声部三，每个至少两个场面。每个场面先写一行这个人自己的场景，再写两句引号里的原话。动作只在需要时用括号补一句。
声部四写两到三个旁人，每人先写一行是谁，再写一段他们嘴里的话。
声部五是给模型的演绎说明，用陈述句，不要对白。点明这个人嘴上和身上的反差，以及压过来、亲密时不能演丢的那一点。

说话方式不要做成「自称：」「语气：」的填空。按状态分开写：什么时候怎么自称，怎么叫用户，两三套叫得出名字的语气，各状态下的口癖，并写明不要每句都复读同一句。再写句子的节奏。最后给四到六句完整例句，例句用引号。

外貌备忘只写英文 tag，用逗号分隔。不要写「体型：」「头发眼睛：」这种中文小标题，也不要写中文外貌散文。

开场场景写成一场已经开始的戏。先写光、声音或气味，再让角色带着自己的习惯动作进来。最后一句必须是角色说出来的话，把下一步交回用户。

多人不是把几份单人卡拼在一起。要求总览写明他们怎么咬合：谁在推，谁在拦，日常的来回是什么，谁真的为难时另一个人怎么护。每个人的人设里都要点出其他人的名字，并写一件只有他们之间才有的具体事。声部里可以让另一个人出场，声部四也可以由卡里的另一个人来讲。开场把所有人放在同一处，各做各的，动作互相撞上。只在开场见一面、其余各写各的，不算联动。

只学这一小段的疏密和排法。不要学人名、关系、职业、外貌，也不要照抄句子。
声部一·对外
把话说短的柜台
“今天就这些。”
“找零不用数。我赶时间。”（收据折好，没有看对方）`;
function workshopExtra(chat, userText) {
	const brief = chat.brief?.trim() ? `【这个助手的要求】\n${chat.brief.trim()}` : "";
	if (chat.kind === "card") return [CARD_RULES, brief].filter(Boolean).join("\n\n");
	return [
		"你是绘语助理。你就是模型本人，不是在扮演角色。用户问什么就直接答，包括数学、看图、改句子、问这个应用。",
		"你不能修改应用，不能新建聊天，不能改人设，不能发图。只能在这条对话里回答。",
		"没人问绘语的功能时，不要主动讲功能。",
		brief,
		assistantDocs(userText)
	].filter(Boolean).join("\n\n");
}
var NAI_OFFICIAL_BASE = "https://image.novelai.net";
function naiDrawAuth(settings) {
	if (settings.naiImageSource === "official" && settings.naiOfficialConnected && settings.naiOfficialKey?.trim()) return {
		mode: "official",
		apiKey: settings.naiOfficialKey.trim(),
		baseUrl: NAI_OFFICIAL_BASE
	};
	if (settings.naiConnected && settings.naiKey?.trim()) return {
		mode: "proxy",
		apiKey: settings.naiKey.trim(),
		baseUrl: settings.naiBase || "https://api.idlecloud.cc"
	};
	return null;
}
function naiMeta(model) {
	return NAI_MODELS.find((m) => m.id === model);
}
function naiFamily(model) {
	return naiMeta(model)?.family ?? "v4.5";
}
function naiWire(model) {
	return naiMeta(model)?.wire || model;
}
/** Drop a whole tag that is exactly 1boy. Leaves 1boy inside other words, and leaves character prompts alone. */
function stripStandalone1boy(text) {
	const parts = text.split(",");
	const kept = parts.filter((p) => p.trim().toLowerCase() !== "1boy");
	if (kept.length === parts.length) return text;
	return kept.map((p) => p.trim()).filter(Boolean).join(", ");
}
function joinPrompt(params, grokTail = "") {
	const furry = !!naiMeta(params.model)?.furry;
	if (params.merged) {
		let text = params.promptMid.trim();
		if (furry && !/fur dataset/i.test(text)) text = joinPromptParts(FURRY_TAG, text);
		if (params.uncensored && !/uncensored/i.test(text)) text = joinPromptParts(text, UNCENSORED_TAG);
		if (params.fullBody && !/full body/i.test(text)) text = joinPromptParts(text, FULLBODY_TAG);
		if (params.sensitive && !/rating:\s*sensitive/i.test(text)) text = joinPromptParts(SENSITIVE_PREFIX, text);
		return joinPromptParts(text, grokTail);
	}
	let front = params.promptFront.trim();
	if (furry && !/fur dataset/i.test(front) && !/fur dataset/i.test(params.promptMid)) front = joinPromptParts(FURRY_TAG, front);
	if (params.uncensored && !/uncensored/i.test(front)) front = joinPromptParts(front, UNCENSORED_TAG);
	if (params.fullBody && !/full body/i.test(front)) front = joinPromptParts(front, FULLBODY_TAG);
	const mid = joinPromptParts(params.promptMid, grokTail);
	let back = params.promptBack.trim();
	if (params.sensitive && !/rating:\s*sensitive/i.test(back)) back = joinPromptParts(SENSITIVE_PREFIX, back);
	return joinPromptParts(front, mid, back);
}
function varietySigma(w, h) {
	return Math.round(19 * Math.sqrt(w * h / 393216) * 100) / 100;
}
function buildNaiPayload(opts) {
	const { params, grokTail = "", charTails = {}, insertMode = "insert" } = opts;
	const seed = opts.seed ?? params.seed ?? randomSeed();
	const family = naiFamily(params.model);
	const v3 = family === "v3";
	const chars = params.characters.filter((c) => c.enabled);
	const charCaptions = chars.map((c) => ({
		char_caption: [c.prompt.trim(), charTails[c.id] ?? ""].filter(Boolean).join(", "),
		centers: [{
			x: c.x,
			y: c.y
		}]
	}));
	const charUc = chars.map((c) => ({
		char_caption: c.uc.trim(),
		centers: [{
			x: c.x,
			y: c.y
		}]
	}));
	let base = joinPrompt(params, grokTail);
	if (!v3 && insertMode === "legacy" && chars.length) {
		const extra = chars.map((c, i) => {
			const body = [c.prompt.trim(), charTails[c.id] ?? ""].filter(Boolean).join(", ");
			return `char${i + 1}: ${body}`;
		}).join(", ");
		base = [base, extra].filter(Boolean).join(", ");
	}
	const useCoords = params.useCoords;
	const characterPrompts = chars.map((c) => ({
		prompt: [c.prompt.trim(), charTails[c.id] ?? ""].filter(Boolean).join(", "),
		uc: c.uc.trim(),
		center: {
			x: c.x,
			y: c.y
		},
		enabled: true
	}));
	const parameters = {
		params_version: family === "v5" ? 4 : 3,
		width: params.width,
		height: params.height,
		scale: params.scale,
		sampler: params.sampler,
		steps: params.steps,
		n_samples: 1,
		ucPreset: 0,
		qualityToggle: false,
		autoSmea: false,
		dynamic_thresholding: params.decrisper,
		controlnet_strength: 1,
		legacy: false,
		add_original_image: true,
		cfg_rescale: params.cfgRescale,
		noise_schedule: params.noiseSchedule,
		legacy_v3_extend: false,
		skip_cfg_above_sigma: params.varietyPlus ? varietySigma(params.width, params.height) : null,
		use_coords: useCoords,
		legacy_uc: false,
		normalize_coords: true,
		prompt: base,
		negative_prompt: params.negative,
		seed,
		extra_noise_seed: seed,
		prefer_brownian: params.sampler.includes("ancestral") || params.sampler.includes("sde")
	};
	if (!v3 && insertMode === "insert") {
		parameters.characterPrompts = characterPrompts;
		parameters.v4_prompt = {
			caption: {
				base_caption: base,
				char_captions: charCaptions
			},
			use_coords: useCoords,
			use_order: true
		};
		parameters.v4_negative_prompt = {
			caption: {
				base_caption: params.negative,
				char_captions: charUc
			},
			legacy_uc: false
		};
	} else if (!v3) {
		parameters.v4_prompt = {
			caption: {
				base_caption: base,
				char_captions: []
			},
			use_coords: false,
			use_order: true
		};
		parameters.v4_negative_prompt = {
			caption: {
				base_caption: params.negative,
				char_captions: []
			},
			legacy_uc: false
		};
	}
	return {
		input: base,
		model: naiWire(params.model),
		action: "generate",
		parameters,
		seed,
		finalPrompt: base,
		characterPrompts
	};
}
function buildIdlecloudBody(built, params, insertMode = "insert", img2img) {
	const body = {
		model: built.model,
		positivePrompt: built.finalPrompt,
		negativePrompt: params.negative,
		width: params.width,
		height: params.height,
		steps: params.steps,
		scale: params.scale,
		sampler: params.sampler,
		seed: built.seed,
		noise_schedule: params.noiseSchedule,
		promptGuidanceRescale: params.cfgRescale,
		sm: false,
		sm_dyn: false,
		autoSmea: false,
		decrisp: params.decrisper,
		variety: params.varietyPlus,
		prefer_brownian: params.sampler.includes("ancestral") || params.sampler.includes("sde"),
		deliberate_euler_ancestral_bug: false,
		legacy: false,
		legacy_uc: false,
		legacy_v3_extend: false,
		use_coords: params.useCoords,
		use_upscale_credits: false
	};
	if (naiFamily(params.model) !== "v3" && insertMode === "insert" && built.characterPrompts.length > 0) {
		body.characterPrompts = built.characterPrompts;
		body.v4_prompt_char_captions = built.characterPrompts.map((c) => ({
			char_caption: c.prompt,
			centers: [{
				x: c.center.x,
				y: c.center.y
			}]
		}));
		body.v4_negative_prompt_char_captions = built.characterPrompts.map((c) => ({
			char_caption: c.uc,
			centers: [{
				x: c.center.x,
				y: c.center.y
			}]
		}));
	}
	if (img2img) {
		body.action = true;
		body.image = img2img.image;
		body.strength = img2img.strength;
		body.noise = img2img.noise;
	}
	return body;
}
function syncCharsFromRole(params, roles, isMulti) {
	if (!isMulti) return {
		...params,
		characters: []
	};
	const next = roles.map((r) => {
		const prev = params.characters.find((c) => c.id === r.id);
		return {
			id: r.id,
			name: r.name,
			enabled: prev ? prev.enabled : r.imageEnabled,
			prompt: prev?.prompt || r.prompt || r.appearance || "",
			uc: prev?.uc || r.uc || "",
			x: prev?.x ?? r.x ?? .5,
			y: prev?.y ?? r.y ?? .5
		};
	});
	return {
		...params,
		characters: next
	};
}
function samplerLabel(id) {
	if (id === "k_euler_ancestral") return "Euler A";
	if (id === "k_euler") return "Euler";
	if (id === "k_dpmpp_2s_ancestral") return "DPM++ 2S A";
	if (id === "k_dpmpp_2m") return "DPM++ 2M";
	if (id === "k_dpmpp_sde") return "DPM++ SDE";
	if (id === "k_dpmpp_2m_sde") return "DPM++ 2M SDE";
	if (id === "ddim_v3") return "DDIM";
	return id;
}
function samplerShort(id) {
	if (id === "k_euler_ancestral") return "Euler A...";
	return samplerLabel(id);
}
function modelLabel(id) {
	return NAI_MODELS.find((m) => m.id === id)?.label ?? id;
}
function modelShort(id) {
	const m = naiMeta(id);
	if (!m) return id;
	if (m.family === "v3") return m.furry ? "F3" : "3";
	if (m.family === "v5") return id.includes("curated") ? "5C" : "5";
	if (m.family === "v4.5") return id.includes("curated") ? "4.5C" : "4.5";
	if (m.family === "v4") return id.includes("curated") ? "4C" : "4";
	return m.label.replace(/^NAI\s+/i, "").replace(/\s*Full$/i, "");
}
var TOP = /* @__PURE__ */ new Set([
	"think",
	"think_nya",
	"think_nya~",
	"game",
	"background",
	"options",
	"option",
	"details",
	"summary",
	"os",
	"disclaimer",
	"safety_check",
	"im_start",
	"im_end",
	"pad",
	"pad_end",
	"censorship_bypass"
]);
function matchTag(s, i) {
	if (s[i] !== "<") return null;
	if (s.startsWith("<!", i)) {
		const end = s.indexOf(">", i + 2);
		return {
			start: i,
			end: end < 0 ? s.length : end + 1,
			name: "!--",
			closing: false
		};
	}
	const slice = s.slice(i);
	const pipe = slice.match(/^<\|([a-zA-Z_][\w-]*)\|>/);
	if (pipe) return {
		start: i,
		end: i + pipe[0].length,
		name: pipe[1].toLowerCase(),
		closing: false
	};
	const close = slice.match(/^<\/([a-zA-Z][\w:~-]*)\s*>/);
	if (close) return {
		start: i,
		end: i + close[0].length,
		name: close[1].toLowerCase(),
		closing: true
	};
	const open = slice.match(/^<([a-zA-Z][\w:~-]*)(?:\s[^>]*)?>/);
	if (open) return {
		start: i,
		end: i + open[0].length,
		name: open[1].toLowerCase(),
		closing: false
	};
	return null;
}
function findClose(s, from, name) {
	let depth = 1;
	let i = from;
	while (i < s.length) {
		const lt = s.indexOf("<", i);
		if (lt < 0) return -1;
		const t = matchTag(s, lt);
		if (!t) {
			i = lt + 1;
			continue;
		}
		if (t.name === name) {
			if (t.closing) {
				depth--;
				if (depth === 0) return t.start;
			} else depth++;
		}
		i = t.end;
	}
	return -1;
}
var CHILDREN = {
	details: /* @__PURE__ */ new Set(["summary"]),
	options: /* @__PURE__ */ new Set(["option"])
};
function nextTopOpen(s, from, parent) {
	const skip = parent ? CHILDREN[parent] : void 0;
	let i = from;
	while (i < s.length) {
		const lt = s.indexOf("<", i);
		if (lt < 0) return -1;
		const t = matchTag(s, lt);
		if (!t) {
			i = lt + 1;
			continue;
		}
		if (!t.closing && TOP.has(t.name) && !skip?.has(t.name)) return t.start;
		i = t.end;
	}
	return -1;
}
function decodeUnicodeEscapes(input) {
	if (!input || !input.includes("\\u")) return input;
	let s = input;
	const hold = s.match(/\\u(?:\{[0-9a-fA-F]{0,5}|[0-9a-fA-F]{0,3})$/);
	const tail = hold ? hold[0] : "";
	if (tail) s = s.slice(0, -tail.length);
	s = s.replace(/\\u\{([0-9a-fA-F]{1,6})\}/g, (full, h) => {
		const n = Number.parseInt(h, 16);
		return Number.isFinite(n) && n <= 1114111 ? String.fromCodePoint(n) : full;
	});
	s = s.replace(/\\u([0-9a-fA-F]{4})/g, (_full, h) => String.fromCharCode(Number.parseInt(h, 16)));
	return s + tail;
}
function hideIncomplete(s) {
	const i = s.lastIndexOf("<");
	if (i < 0) return s;
	const tail = s.slice(i);
	if (tail.includes(">")) return s;
	if (tail === "<" || tail === "</" || /^<\/?[a-zA-Z|][\w:~|-]*$/.test(tail) || /^<\|[\w-]*$/.test(tail) || tail === "<!") return s.slice(0, i);
	return s;
}
function stripReplyTags(s) {
	let cur = s;
	let prev = "";
	for (let n = 0; n < 10 && cur !== prev; n++) {
		prev = cur;
		cur = cur.replace(/<[a-zA-Z|][\w:~|-]*\b[^>]*>([\s\S]*?)<\/[a-zA-Z|][\w:~|-]*\s*>/g, "$1");
		cur = cur.replace(/<\/?[a-zA-Z|][\w:~|-]*(?:\s[^>]*)?\/?>/g, "");
		cur = cur.replace(/<\|[\w-]*\|>/g, "");
	}
	return cur.replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
}
function tidy(s) {
	return stripReplyTags(s);
}
function detailsParts(inner) {
	const m = inner.match(/^\s*<summary\b[^>]*>([\s\S]*?)<\/summary\s*>/i);
	if (m) return {
		title: tidy(m[1]) || "折叠",
		body: tidy(inner.slice(m[0].length))
	};
	const open = inner.match(/^\s*<summary\b[^>]*>([\s\S]*)$/i);
	if (open) return {
		title: tidy(open[1]) || "折叠",
		body: ""
	};
	return {
		title: "折叠",
		body: tidy(inner)
	};
}
function parseOptions(inner) {
	const out = [];
	const re = /<option\b[^>]*>([\s\S]*?)(?:<\/option\s*>|$)/gi;
	let m;
	while (m = re.exec(inner)) {
		const t = tidy(m[1]);
		if (t) out.push(t);
	}
	if (!out.length) for (const line of tidy(inner).split(/\n+/)) {
		const t = line.trim();
		if (t) out.push(t);
	}
	return out;
}
function thinkTitle(name) {
	return name === "os" ? "内心" : "思考";
}
function sliceInner(s, openEnd, name) {
	const close = findClose(s, openEnd, name);
	const next = nextTopOpen(s, openEnd, name);
	if (close >= 0 && (next < 0 || close <= next)) {
		const t = matchTag(s, close);
		return {
			inner: s.slice(openEnd, close),
			after: t ? t.end : close
		};
	}
	if (next >= 0) return {
		inner: s.slice(openEnd, next),
		after: next
	};
	return {
		inner: s.slice(openEnd),
		after: s.length
	};
}
function parseReplyMarkup(raw) {
	const text = hideIncomplete(decodeUnicodeEscapes(raw || ""));
	const think = [];
	const notes = [];
	const options = [];
	const bodySegs = [];
	let i = 0;
	const pushNote = (title, body) => {
		const t = title.trim() || "折叠";
		const b = body.trim();
		if (!b && !t) return;
		notes.push({
			kind: "note",
			title: t,
			body: b
		});
	};
	while (i < text.length) {
		const lt = text.indexOf("<", i);
		if (lt < 0) {
			bodySegs.push(text.slice(i));
			break;
		}
		if (lt > i) bodySegs.push(text.slice(i, lt));
		const t = matchTag(text, lt);
		if (!t) {
			bodySegs.push(text[lt]);
			i = lt + 1;
			continue;
		}
		if (t.closing || t.name === "!--") {
			i = t.end;
			continue;
		}
		if (!TOP.has(t.name)) {
			const { inner, after } = sliceInner(text, t.end, t.name);
			bodySegs.push(inner);
			i = after;
			continue;
		}
		const { inner, after } = sliceInner(text, t.end, t.name);
		if (t.name === "think" || t.name === "think_nya" || t.name === "think_nya~" || t.name === "os") {
			const body = tidy(inner);
			if (body) think.push({
				kind: "think",
				title: thinkTitle(t.name),
				body
			});
		} else if (t.name === "game") bodySegs.push(inner);
		else if (t.name === "background") pushNote("背景", tidy(inner));
		else if (t.name === "details") {
			const d = detailsParts(inner);
			pushNote(d.title, d.body);
		} else if (t.name === "summary") pushNote("摘要", tidy(inner));
		else if (t.name === "options") options.push(...parseOptions(inner));
		else if (t.name === "option") {
			const o = tidy(inner);
			if (o) options.push(o);
		}
		i = after;
	}
	return {
		body: tidy(bodySegs.join("")),
		folds: [...think, ...notes],
		options
	};
}
function replyStoryText(raw) {
	return parseReplyMarkup(raw).body;
}
function replyContextText(raw) {
	const p = parseReplyMarkup(raw);
	const extra = p.folds.filter((f) => f.kind !== "think").map((f) => f.body).filter(Boolean);
	return [p.body, ...extra].filter(Boolean).join("\n\n");
}
var MEMORY_CHAR_CAP = 3800;
var MEMORY_PARAMS = {
	temperature: .3,
	topP: 1,
	frequencyPenalty: 0,
	presencePenalty: 0,
	maxTokens: 4096
};
function memoryFailReason(e) {
	const err = e;
	if (err?.name === "AbortError") return "已取消";
	const msg = err?.message || "";
	if (msg === "memory-invalid") return "回得太短或不像备忘";
	if (msg === "memory-skip") return "没有可收的对白";
	return msg || "请求失败";
}
function clipMemoryText(text) {
	const t = text.trim();
	if (t.length <= 3800) return t;
	return t.slice(0, MEMORY_CHAR_CAP).replace(/\s+\S*$/, "").trim();
}
function isPlausibleMemory(text) {
	const t = text.trim();
	if (t.length < 24) return false;
	if (/could not be submitted|sensitive words|prohibited use|content policy|usage policy|generative ai/i.test(t)) return false;
	if (/^(好的|收到|ok|done|无|没有|（无）)/i.test(t) && t.length < 80) return false;
	return true;
}
function foldIntervalMessages(contextTurns) {
	return Math.max(4, Math.max(4, contextTurns) - 6) * 2;
}
/** First fold fires one pair before the raw window is full. */
function firstFoldAt(windowMsgs, intervalMsgs) {
	return Math.max(intervalMsgs, windowMsgs - 2);
}
/** How far the current line should be covered if every fold had succeeded. */
function foldCoveredEnd(n, windowMsgs, intervalMsgs) {
	const firstAt = firstFoldAt(windowMsgs, intervalMsgs);
	if (n < firstAt || intervalMsgs < 2) return 0;
	const k = 1 + Math.floor((n - firstAt) / intervalMsgs);
	return Math.min(k * intervalMsgs, n);
}
/** True when memory has reached the target for this length. Opening / too-short is caught up. */
function memoryCaughtUp(n, covered, windowMsgs, intervalMsgs) {
	return covered >= foldCoveredEnd(n, windowMsgs, intervalMsgs);
}
/** Next auto chunk while behind. One interval (or the remaining gap if smaller). */
function nextAutoSlice(n, covered, windowMsgs, intervalMsgs) {
	const needed = foldCoveredEnd(n, windowMsgs, intervalMsgs);
	if (covered >= needed || needed < 2) return null;
	const start = Math.max(0, covered);
	const end = Math.min(needed, start === 0 ? Math.min(intervalMsgs, needed) : start + intervalMsgs);
	if (end - start < 2 || end > n) return null;
	return {
		start,
		end
	};
}
/** Display turns: a user+assistant pair. The opening assistant is the leftover 1. */
function memoryTurnStats(messageCount, covered) {
	return {
		spoken: Math.floor(Math.max(0, messageCount) / 2),
		folded: Math.floor(Math.max(0, covered) / 2)
	};
}
function rewindSnaps(snaps, keepCount) {
	return (snaps ?? []).filter((s) => s.covered <= keepCount && s.covered >= 0);
}
function applySnaps(snaps) {
	const last = snaps[snaps.length - 1];
	return {
		memorySnaps: snaps,
		memory: last?.text ?? "",
		memoryUntil: last?.covered ?? 0,
		memoryFoldAt: last?.foldAt ?? 0
	};
}
function pushSnap(snaps, snap) {
	return [...(snaps ?? []).filter((s) => s.covered < snap.covered), snap];
}
function formatMemoryDialog(messages) {
	return messages.map((m) => {
		if (m.wechatLog?.voided) return "";
		const text = (m.role === "user" ? m.content : replyContextText(m.content)).trim();
		if (!text) return "";
		return `${m.role === "user" ? "用户" : m.characterName || "角色"}：${text}`;
	}).filter(Boolean).join("\n");
}
function normalizeChatMemory(c) {
	let snaps = Array.isArray(c.memorySnaps) ? c.memorySnaps.filter((s) => s && typeof s.text === "string" && typeof s.covered === "number") : [];
	if (!snaps.length && c.memory?.trim()) snaps = [{
		covered: Math.max(0, c.memoryUntil || 0),
		text: c.memory,
		foldAt: Math.max(0, c.memoryFoldAt || c.memoryUntil || 0)
	}];
	return {
		...c,
		...applySnaps(snaps)
	};
}
var emptyMemory = () => ({
	memory: "",
	memoryUntil: 0,
	memoryFoldAt: 0,
	memorySnaps: []
});
function settleStuckImages(chat) {
	let dirty = false;
	const messages = chat.messages.map((m) => {
		let imgDirty = false;
		const images = m.images.map((g) => {
			if (g.status === "done" || g.status === "error") return g;
			imgDirty = true;
			return {
				...g,
				status: "error",
				error: "上次生图未完成"
			};
		});
		if (!imgDirty) return m;
		dirty = true;
		return {
			...m,
			images
		};
	});
	return dirty ? {
		...chat,
		messages
	} : chat;
}
function isAbort$1(e) {
	return (e instanceof DOMException || e instanceof Error) && e.name === "AbortError";
}
function imageFailText(e, signal) {
	if (signal?.aborted) return "已取消";
	if (isAbort$1(e)) return "生图超时";
	return e instanceof Error ? e.message : "生图失败";
}
function prettyImageError(error) {
	const raw = (error ?? "").trim();
	if (!raw) return "生图失败";
	let msg = raw;
	if (raw.startsWith("{")) try {
		const j = JSON.parse(raw);
		if (typeof j.message === "string" && j.message.trim()) msg = j.message.trim();
	} catch {}
	if (/too many concurrent/i.test(msg) || /rate limit/i.test(msg) || /"statusCode"\s*:\s*429/.test(raw)) return "请求太频繁";
	if (/<!doctype|<html|internal server error/i.test(raw)) return "中转站返回了异常页面";
	return msg;
}
function genPhaseLabel(status, error) {
	if (status === "writing") return "写提示词中";
	if (status === "uploading") return "上传中";
	if (status === "generating") return "生图中";
	if (status === "receiving") return "回传中";
	if (status === "error") return prettyImageError(error);
	return "";
}
function sortFavorites(items) {
	return [...items].sort((a, b) => (a.order ?? 0) - (b.order ?? 0) || (b.createdAt || 0) - (a.createdAt || 0));
}
function orderFavorites(items) {
	if (!items.length) return [];
	if (items.every((f) => typeof f.order === "number")) return sortFavorites(items);
	const next = sortHistoryNewestFirst(items).map((f, i) => ({
		...f,
		order: i
	}));
	for (const f of next) db.favorites.put(f);
	return next;
}
function favGroupDescendants(groups, id) {
	const out = /* @__PURE__ */ new Set();
	const walk = (pid) => {
		for (const g of groups) if (g.parentId === pid && !out.has(g.id)) {
			out.add(g.id);
			walk(g.id);
		}
	};
	walk(id);
	return out;
}
function countFavsInGroup(groups, favs, id) {
	let n = favs.filter((f) => f.groupId === id).length;
	for (const g of groups) if (g.parentId === id) n += countFavsInGroup(groups, favs, g.id);
	return n;
}
function tidyFavTree(groups, favs) {
	const byId = new Map(groups.map((g) => [g.id, g]));
	const cleanGroups = groups.map((g) => {
		let parentId = g.parentId && byId.has(g.parentId) && g.parentId !== g.id ? g.parentId : null;
		const seen = /* @__PURE__ */ new Set([g.id]);
		let p = parentId;
		while (p) {
			if (seen.has(p) || !byId.has(p)) {
				parentId = null;
				break;
			}
			seen.add(p);
			p = byId.get(p)?.parentId ?? null;
		}
		return {
			...g,
			name: g.name || "未命名",
			parentId,
			collapsed: g.collapsed !== false,
			order: typeof g.order === "number" ? g.order : 0,
			starred: g.starred === true
		};
	});
	const ids = new Set(cleanGroups.map((g) => g.id));
	return {
		favGroups: cleanGroups,
		favorites: favs.map((f) => ({
			...f,
			groupId: f.groupId && ids.has(f.groupId) ? f.groupId : null
		}))
	};
}
function openFavAncestors(groups, id) {
	if (!id) return groups;
	const byId = new Map(groups.map((g) => [g.id, g]));
	const open = /* @__PURE__ */ new Set();
	let p = id;
	while (p) {
		open.add(p);
		p = byId.get(p)?.parentId ?? null;
	}
	return groups.map((g) => open.has(g.id) ? {
		...g,
		collapsed: false
	} : g);
}
function copyRoleBody(dst, src) {
	return {
		...dst,
		persona: src.persona,
		speech: src.speech,
		appearance: src.appearance,
		lookBlobId: src.lookBlobId,
		wechatAvatarBlobId: src.wechatAvatarBlobId,
		personaVoices: src.personaVoices ?? dst.personaVoices,
		extras: src.extras ?? dst.extras
	};
}
function mergeCardCharacters(current, incoming) {
	const next = current.map((ch, i) => incoming[i] ? copyRoleBody(ch, incoming[i]) : ch);
	for (let i = current.length; i < incoming.length; i++) {
		const src = incoming[i];
		if (src) next.push({ ...src });
	}
	return next;
}
var ui0 = () => ({
	tab: "chat",
	sidebar: false,
	connection: false,
	selectMode: false,
	selected: [],
	sortMode: false,
	menuId: null,
	editingChatId: null,
	creating: false,
	previewParams: false,
	saveCardOpen: false,
	editCardId: null,
	saveAppearOpen: false,
	editAppearId: null,
	appearTarget: null,
	customPrompt: null,
	confirm: null,
	rename: null,
	moveOpen: false,
	multiCreate: null,
	personalize: null,
	fieldEdit: null,
	polishJob: null,
	extraPromptOpen: false,
	autoPolish: false,
	paramsJump: null,
	llmSettings: false,
	memoryHint: null,
	editUserMsg: null,
	wechatView: null,
	workshop: false,
	workshopName: null,
	workshopEditId: null,
	workshopAvatars: false,
	workshopCardText: null
});
function persistChat(c) {
	if (c.isDraft) return;
	db.chats.put(c);
}
var toastN = 1;
var useApp = create((set, get) => ({
	ready: true,
	settings: defaultSettings(),
	folders: [],
	chats: [],
	cards: [],
	appearances: [],
	favorites: [],
	favGroups: [],
	history: [],
	pureParams: defaultPureParams(),
	currentId: null,
	editBackup: null,
	toasts: [],
	ui: ui0(),
	composerDrafts: {},
	composerShots: {},
	wechatSessions: {},
	wechatStickers: [],
	hydrate: async () => {
		const data = await loadAll();
		const [pureRow, currentRow, draftsRow, shotsRow, wechatRow, stickerRow] = await Promise.all([
			db.kv.get("pureParams"),
			db.kv.get("currentId"),
			db.kv.get("composerDrafts"),
			db.kv.get("composerShots"),
			db.kv.get("wechatSessions"),
			db.kv.get("wechatStickers")
		]);
		const live = data.chats.filter((c) => !c.isDraft).map((c) => {
			const mapped = {
				...normalizeChatMemory(c),
				grokModelId: migrateGrokId(c.grokModelId),
				imageModelId: dropBuiltinImageModel(c.imageModelId),
				imageModelPin: dropBuiltinImageModel(c.imageModelPin)
			};
			const next = settleStuckImages(mapped);
			const stripped = c.imageModelId !== mapped.imageModelId || (c.imageModelPin || null) !== mapped.imageModelPin;
			if (next !== mapped || stripped) persistChat(next);
			return next;
		});
		const settings = {
			...data.settings,
			grokModelId: migrateGrokId(data.settings.grokModelId),
			theme: data.settings.theme === "dark" ? "dark" : "light",
			llmParams: data.settings.llmParams,
			chatSource: "api",
			imageModelId: dropBuiltinImageModel(data.settings.imageModelId),
			imageModelPin: dropBuiltinImageModel(data.settings.imageModelPin)
		};
		const savedId = currentRow?.value || null;
		const currentId = live.some((c) => c.id === savedId) ? savedId : live.sort((a, b) => b.updatedAt - a.updatedAt)[0]?.id ?? null;
		const lifted = liftImageAi(settings, live, currentId);
		const nextSettings = {
			...settings,
			...lifted
		};
		const withRandom = syncAppearanceModule(nextSettings.random, data.appearances ?? [], "ensure");
		const settingsFinal = withRandom === nextSettings.random ? nextSettings : {
			...nextSettings,
			random: withRandom
		};
		if (!settings.imageModelId && !settings.imageModelPin && (lifted.imageModelId || lifted.imageModelPin) || settingsFinal !== nextSettings) db.kv.put({
			key: "settings",
			value: settingsFinal
		});
		let chats = live;
		let cards = data.cards ?? [];
		let settingsOut = settingsFinal;
		if (!settingsFinal.statusBarMigrated) {
			chats = live.map((c) => {
				if (!isLegacyStatusBar(c.statusBar)) return c;
				const next = {
					...c,
					statusBar: DEFAULT_STATUS_BAR
				};
				persistChat(next);
				return next;
			});
			cards = cards.map((card) => {
				if (!isLegacyStatusBar(card.statusBar)) return card;
				const next = {
					...card,
					statusBar: DEFAULT_STATUS_BAR
				};
				db.cards.put(next);
				return next;
			});
			settingsOut = {
				...settingsFinal,
				statusBarMigrated: true
			};
			db.kv.put({
				key: "settings",
				value: settingsOut
			});
		}
		const favs = orderFavorites((data.favorites ?? []).map(migrateFavorite).filter(Boolean));
		const tree = tidyFavTree(data.favGroups ?? [], favs);
		set({
			ready: true,
			...data,
			settings: settingsOut,
			chats,
			cards,
			favorites: tree.favorites,
			favGroups: tree.favGroups,
			pureParams: normalizePureParams(pureRow?.value ?? defaultPureParams()),
			currentId,
			history: sortHistoryNewestFirst(data.history ?? []),
			composerDrafts: parseComposerDrafts(draftsRow?.value),
			composerShots: parseComposerShots(shotsRow?.value),
			wechatSessions: parseWechatSessions(wechatRow?.value),
			wechatStickers: parseStickers(stickerRow?.value)
		});
	},
	toast: (text) => {
		const id = toastN++;
		set((s) => ({ toasts: [...s.toasts, {
			id,
			text
		}] }));
	},
	dismissToast: (id) => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
	setUI: (p) => set((s) => ({ ui: {
		...s.ui,
		...p
	} })),
	setTab: (tab) => set((s) => ({ ui: {
		...s.ui,
		tab
	} })),
	setSettings: (p) => {
		const settings = {
			...get().settings,
			...p
		};
		set({ settings });
		db.kv.put({
			key: "settings",
			value: settings
		});
	},
	setGrok: (id) => {
		get().setSettings({ grokModelId: id });
		const cur = get().current();
		if (cur) get().patchChat(cur.id, { grokModelId: id });
	},
	clearImageAi: () => {
		get().setSettings({
			imageModelId: null,
			imageModelPin: null
		});
	},
	current: () => get().chats.find((c) => c.id === get().currentId),
	patchChat: (id, p) => {
		set((s) => ({ chats: s.chats.map((c) => {
			if (c.id !== id) return c;
			const next = typeof p === "function" ? p(c) : {
				...c,
				...p,
				updatedAt: Date.now()
			};
			persistChat(next);
			return next;
		}) }));
	},
	patchParams: (id, p) => {
		if (id === "__pure__") {
			get().setPureParams(p);
			return;
		}
		const chat = get().chats.find((c) => c.id === id);
		if (!chat) return;
		const imageParams = {
			...chat.imageParams,
			...p
		};
		const bank = get().settings.random;
		const random = bank ? forgetIfPrompt(bank, chat.imageParams, imageParams) : null;
		get().patchChat(id, { imageParams });
		if (random) get().setSettings({ random });
	},
	setPureParams: (p) => {
		const prev = get().pureParams;
		const pureParams = {
			...prev,
			...p
		};
		set({ pureParams });
		db.kv.put({
			key: "pureParams",
			value: pureParams
		});
		const bank = get().settings.random;
		if (!bank) return;
		const random = forgetIfPrompt(bank, prev, pureParams);
		if (random) get().setSettings({ random });
	},
	newDraft: () => {
		const id = uid$1("chat_");
		const grok = get().settings.grokModelId || "grok-4.6-medium";
		const draft = {
			id,
			folderId: null,
			name: "",
			remark: "",
			starred: false,
			order: Date.now(),
			createdAt: Date.now(),
			updatedAt: Date.now(),
			isDraft: true,
			grokModelId: grok,
			isMulti: false,
			multiMode: "together",
			promptMode: "insert",
			adultBoost: false,
			canGen: true,
			statusBarOn: false,
			statusBar: DEFAULT_STATUS_BAR,
			overview: "",
			opening: "",
			extras: [],
			memory: "",
			memoryUntil: 0,
			memoryFoldAt: 0,
			memorySnaps: [],
			characters: [emptyCharacter(1)],
			imageParams: defaultImageParams(),
			messages: [],
			scrollTop: 0
		};
		set((s) => ({
			chats: [...s.chats, draft],
			currentId: id,
			ui: {
				...s.ui,
				creating: true,
				editingChatId: null,
				sidebar: false,
				tab: "chat",
				menuId: null
			}
		}));
	},
	cancelDraft: () => {
		set((s) => {
			const rest = s.chats.filter((c) => !c.isDraft);
			return {
				chats: rest,
				currentId: rest.sort((a, b) => b.updatedAt - a.updatedAt)[0]?.id ?? null,
				ui: {
					...s.ui,
					creating: false,
					editingChatId: null
				}
			};
		});
	},
	commitChat: (id) => {
		const c = get().chats.find((x) => x.id === id);
		if (!c) return;
		const name = c.characters.map((ch) => ch.name).filter(Boolean).join("、") || c.name || "未命名";
		const appearance = c.characters[0]?.appearance || "";
		const imageParams = syncCharsFromRole(c.imageParams, c.characters, c.isMulti);
		if (!c.isMulti && !imageParams.promptMid.trim() && appearance) imageParams.promptMid = appearance;
		const next = {
			...c,
			name,
			isDraft: false,
			imageParams,
			updatedAt: Date.now()
		};
		persistChat(next);
		db.kv.put({
			key: "currentId",
			value: id
		});
		set((s) => ({
			chats: s.chats.map((x) => x.id === id ? next : x),
			currentId: id,
			ui: {
				...s.ui,
				creating: false,
				editingChatId: null,
				tab: "chat"
			}
		}));
	},
	openChat: (id, opts) => {
		db.kv.put({
			key: "currentId",
			value: id
		});
		set((s) => ({
			currentId: id,
			ui: {
				...s.ui,
				sidebar: false,
				creating: false,
				editingChatId: opts?.edit ? id : null,
				tab: "chat",
				menuId: null
			}
		}));
	},
	beginEdit: (id) => {
		const c = get().chats.find((x) => x.id === id);
		set({
			editBackup: c ? structuredClone(c) : null,
			currentId: id,
			ui: {
				...get().ui,
				editingChatId: id,
				creating: false,
				sidebar: false,
				tab: "chat",
				menuId: null
			}
		});
	},
	cancelEdit: () => {
		const bak = get().editBackup;
		if (bak) {
			persistChat(bak);
			set((s) => ({
				chats: s.chats.map((c) => c.id === bak.id ? bak : c),
				editBackup: null,
				ui: {
					...s.ui,
					editingChatId: null
				}
			}));
		} else set((s) => ({
			ui: {
				...s.ui,
				editingChatId: null
			},
			editBackup: null
		}));
	},
	addFolder: (place) => {
		const f = {
			id: uid$1("fold_"),
			name: "新建文件夹",
			starred: false,
			collapsed: false,
			order: Date.now(),
			createdAt: Date.now(),
			...place === "workshop" ? { place: "workshop" } : {}
		};
		db.folders.put(f);
		set((s) => ({ folders: [...s.folders, f] }));
		get().toast("已创建文件夹");
	},
	createWorkshop: (kind, name) => {
		const id = uid$1("chat_");
		const settings = get().settings;
		const avatar = kind === "card" ? settings.workshopCardAvatar : settings.workshopAssistAvatar;
		const draft = {
			id,
			folderId: null,
			name,
			remark: "",
			starred: false,
			order: Date.now(),
			createdAt: Date.now(),
			updatedAt: Date.now(),
			kind,
			brief: "",
			grokModelId: settings.grokModelId || "grok-4.6-medium",
			isMulti: false,
			multiMode: "together",
			promptMode: "insert",
			adultBoost: false,
			canGen: false,
			statusBarOn: false,
			statusBar: "",
			overview: "",
			opening: "",
			extras: [],
			memory: "",
			memoryUntil: 0,
			memoryFoldAt: 0,
			memorySnaps: [],
			characters: [{
				...emptyCharacter(1),
				name
			}],
			imageParams: defaultImageParams(),
			messages: [],
			scrollTop: 0,
			...avatar ? { customAvatarBlobId: avatar } : {}
		};
		persistChat(draft);
		set((s) => ({ chats: [...s.chats, draft] }));
		get().toast(`已创建「${name}」`);
	},
	toggleFolder: (id) => {
		set((s) => {
			const folders = s.folders.map((f) => f.id === id ? {
				...f,
				collapsed: !f.collapsed
			} : f);
			const f = folders.find((x) => x.id === id);
			if (f) db.folders.put(f);
			return { folders };
		});
	},
	deleteSelected: () => {
		const ids = new Set(get().ui.selected);
		const chats = get().chats.filter((c) => !ids.has(c.id));
		const folders = get().folders.filter((f) => !ids.has(f.id));
		const moved = chats.map((c) => c.folderId && ids.has(c.folderId) ? {
			...c,
			folderId: null
		} : c);
		db.chats.bulkPut(moved.filter((c) => !c.isDraft));
		db.chats.bulkDelete([...ids]);
		db.folders.bulkDelete([...ids]);
		set((s) => {
			const composerDrafts = dropDrafts(s.composerDrafts, ids);
			const composerShots = dropShots(s.composerShots, ids);
			const wechatSessions = dropWechat(s.wechatSessions, ids);
			db.kv.put({
				key: "composerDrafts",
				value: composerDrafts
			});
			db.kv.put({
				key: "composerShots",
				value: composerShots
			});
			db.kv.put({
				key: "wechatSessions",
				value: wechatSessions
			});
			return {
				chats: moved,
				folders,
				currentId: ids.has(s.currentId || "") ? moved[0]?.id ?? null : s.currentId,
				composerDrafts,
				composerShots,
				wechatSessions,
				ui: {
					...s.ui,
					selectMode: false,
					selected: [],
					sortMode: false,
					menuId: null
				}
			};
		});
		get().toast("已删除");
	},
	starSelected: () => {
		const ids = new Set(get().ui.selected);
		const turningOn = get().chats.some((c) => ids.has(c.id) && !c.starred) || get().folders.some((f) => ids.has(f.id) && !f.starred);
		set((s) => {
			return {
				chats: s.chats.map((c) => {
					if (!ids.has(c.id)) return c;
					const next = {
						...c,
						starred: !c.starred,
						updatedAt: Date.now()
					};
					persistChat(next);
					return next;
				}),
				folders: s.folders.map((f) => {
					if (!ids.has(f.id)) return f;
					const next = {
						...f,
						starred: !f.starred
					};
					db.folders.put(next);
					return next;
				}),
				ui: {
					...s.ui,
					selectMode: false,
					selected: []
				}
			};
		});
		get().toast(turningOn ? "已星标并置顶" : "已取消星标");
	},
	moveSelected: (folderId) => {
		const ids = new Set(get().ui.selected);
		set((s) => {
			return {
				chats: s.chats.map((c) => {
					if (!ids.has(c.id)) return c;
					const next = {
						...c,
						folderId,
						updatedAt: Date.now()
					};
					persistChat(next);
					return next;
				}),
				ui: {
					...s.ui,
					selectMode: false,
					selected: [],
					moveOpen: false
				}
			};
		});
		get().toast("已移动");
	},
	copySelected: () => {
		const ids = get().ui.selected;
		const extras = [];
		for (const id of ids) {
			const c = get().chats.find((x) => x.id === id);
			if (!c) continue;
			const copy = cloneChat(c);
			extras.push(copy);
			persistChat(copy);
		}
		set((s) => ({
			chats: [...s.chats, ...extras],
			ui: {
				...s.ui,
				selectMode: false,
				selected: []
			}
		}));
		get().toast(extras.length === 1 ? `已复制「${extras[0].name}」` : "已复制");
	},
	renameItem: (id, name) => {
		set((s) => {
			return {
				chats: s.chats.map((c) => {
					if (c.id !== id) return c;
					const next = {
						...c,
						name,
						characters: c.isMulti ? c.characters : c.characters.map((ch, i) => i === 0 ? {
							...ch,
							name
						} : ch),
						updatedAt: Date.now()
					};
					persistChat(next);
					return next;
				}),
				folders: s.folders.map((f) => {
					if (f.id !== id) return f;
					const next = {
						...f,
						name
					};
					db.folders.put(next);
					return next;
				}),
				cards: s.cards.map((c) => {
					if (c.id !== id) return c;
					const next = {
						...c,
						name
					};
					db.cards.put(next);
					return next;
				}),
				ui: {
					...s.ui,
					rename: null,
					selectMode: false,
					selected: []
				}
			};
		});
		get().toast("已改名");
	},
	reorder: (ids) => {
		const order = new Map(ids.map((id, i) => [id, i]));
		set((s) => {
			return {
				chats: s.chats.map((c) => {
					if (!order.has(c.id)) return c;
					const next = {
						...c,
						order: order.get(c.id)
					};
					persistChat(next);
					return next;
				}),
				folders: s.folders.map((f) => {
					if (!order.has(f.id)) return f;
					const next = {
						...f,
						order: order.get(f.id)
					};
					db.folders.put(next);
					return next;
				}),
				ui: {
					...s.ui,
					sortMode: false,
					selectMode: false,
					selected: []
				}
			};
		});
	},
	saveCard: (chat, name) => {
		const card = {
			id: uid$1("card_"),
			name,
			isMulti: chat.isMulti,
			overview: chat.overview,
			opening: chat.opening,
			extras: chat.extras,
			statusBarOn: chat.statusBarOn,
			statusBar: chat.statusBar,
			characters: structuredClone(chat.characters),
			grokModelId: chat.grokModelId,
			customAvatarBlobId: chat.customAvatarBlobId || void 0,
			createdAt: Date.now(),
			order: Date.now()
		};
		db.cards.put(card);
		set((s) => ({
			cards: [...s.cards, card],
			ui: {
				...s.ui,
				saveCardOpen: false
			}
		}));
		get().toast(`已保存角色卡「${name}」`);
	},
	addCard: (card) => {
		db.cards.put(card);
		set((s) => ({
			cards: [...s.cards, card],
			ui: {
				...s.ui,
				workshopCardText: null
			}
		}));
		get().toast(`已保存角色卡「${card.name}」`);
	},
	updateCard: (card) => {
		const prev = get().cards.find((c) => c.id === card.id);
		if (!prev) {
			get().toast("这张卡已经不在了");
			return;
		}
		const next = {
			...card,
			id: prev.id,
			name: card.name.trim() || prev.name,
			createdAt: prev.createdAt,
			order: prev.order,
			customAvatarBlobId: card.customAvatarBlobId || void 0
		};
		db.cards.put(next);
		set((s) => ({ cards: s.cards.map((c) => c.id === next.id ? next : c) }));
		get().toast(`已保存角色卡「${next.name}」`);
	},
	applyCard: (chatId, card, charIndex) => {
		get().patchChat(chatId, (c) => {
			if (c.isMulti && !card.isMulti && charIndex != null) {
				const src = card.characters[0];
				const characters = src ? c.characters.map((ch, i) => i === charIndex ? copyRoleBody(ch, src) : ch) : c.characters;
				return {
					...c,
					characters,
					imageParams: syncCharsFromRole(c.imageParams, characters, c.isMulti),
					updatedAt: Date.now()
				};
			}
			const characters = mergeCardCharacters(c.characters, card.characters);
			return {
				...c,
				isMulti: card.isMulti,
				overview: card.overview,
				opening: card.opening,
				extras: card.extras,
				statusBarOn: card.statusBarOn,
				statusBar: card.statusBar,
				grokModelId: card.grokModelId,
				...card.customAvatarBlobId ? { customAvatarBlobId: card.customAvatarBlobId } : {},
				characters,
				imageParams: syncCharsFromRole(c.imageParams, characters, card.isMulti),
				updatedAt: Date.now()
			};
		});
		get().toast(`已应用「${card.name}」`);
	},
	deleteCard: (id) => {
		db.cards.delete(id);
		const name = get().cards.find((c) => c.id === id)?.name ?? "";
		set((s) => ({ cards: s.cards.filter((c) => c.id !== id) }));
		get().toast(`已删除${name}`);
	},
	reorderCards: (ids) => {
		const order = new Map(ids.map((id, i) => [id, i]));
		set((s) => {
			return { cards: s.cards.map((c) => {
				if (!order.has(c.id)) return c;
				const next = {
					...c,
					order: order.get(c.id)
				};
				db.cards.put(next);
				return next;
			}) };
		});
	},
	saveAppearance: (name, prompt) => {
		const a = {
			id: uid$1("ap_"),
			name,
			prompt,
			order: Date.now(),
			createdAt: Date.now()
		};
		db.appearances.put(a);
		const appearances = [...get().appearances, a];
		set((s) => ({
			appearances,
			ui: {
				...s.ui,
				saveAppearOpen: false
			}
		}));
		const random = syncAppearanceModule(get().settings.random, appearances, "create");
		if (random !== get().settings.random) get().setSettings({ random });
		get().toast(`已保存角色「${name}」`);
	},
	updateAppearance: (id, name, prompt) => {
		const prev = get().appearances.find((a) => a.id === id);
		if (!prev) {
			get().toast("这个角色已经不在了");
			return;
		}
		const next = {
			...prev,
			name: name.trim() || prev.name,
			prompt
		};
		db.appearances.put(next);
		const appearances = get().appearances.map((a) => a.id === id ? next : a);
		set({ appearances });
		const random = syncAppearanceModule(get().settings.random, appearances, "update");
		if (random !== get().settings.random) get().setSettings({ random });
		get().toast(`已保存角色「${next.name}」`);
	},
	applyAppearance: (chatId, preset, target) => {
		if (chatId === "__pure__") {
			if (target === "mid") get().setPureParams({ promptMid: preset.prompt });
			else get().setPureParams({ characters: get().pureParams.characters.map((ch) => ch.id === target ? {
				...ch,
				prompt: preset.prompt
			} : ch) });
			return;
		}
		get().patchChat(chatId, (c) => {
			if (target === "mid") return {
				...c,
				imageParams: {
					...c.imageParams,
					promptMid: preset.prompt
				},
				characters: c.isMulti ? c.characters : c.characters.map((ch, i) => i === 0 ? {
					...ch,
					appearance: preset.prompt
				} : ch)
			};
			return {
				...c,
				imageParams: {
					...c.imageParams,
					characters: c.imageParams.characters.map((ch) => ch.id === target ? {
						...ch,
						prompt: preset.prompt
					} : ch)
				},
				characters: c.characters.map((ch) => ch.id === target ? {
					...ch,
					appearance: preset.prompt,
					prompt: preset.prompt
				} : ch)
			};
		});
	},
	deleteAppearance: (id) => {
		db.appearances.delete(id);
		const appearances = get().appearances.filter((a) => a.id !== id);
		set({ appearances });
		const random = syncAppearanceModule(get().settings.random, appearances, "update");
		if (random !== get().settings.random) get().setSettings({ random });
	},
	reorderAppearances: (ids) => {
		const order = new Map(ids.map((id, i) => [id, i]));
		const appearances = get().appearances.map((a) => {
			if (!order.has(a.id)) return a;
			const next = {
				...a,
				order: order.get(a.id)
			};
			db.appearances.put(next);
			return next;
		});
		set({ appearances });
		const random = syncAppearanceModule(get().settings.random, appearances, "update");
		if (random !== get().settings.random) get().setSettings({ random });
	},
	addFavorite: (blobId) => {
		const hist = blobId ? get().history.find((h) => h.blobId === blobId) : void 0;
		const params = hist?.params ? {
			...structuredClone(hist.params),
			seed: hist.seed,
			seedLocked: true
		} : (() => {
			const p = structuredClone(get().pureParams);
			if (p.seed != null) p.seedLocked = true;
			return p;
		})();
		const loose = get().favorites.filter((f) => !f.groupId);
		const top = loose.reduce((m, f) => Math.min(m, f.order ?? 0), 0);
		const f = {
			id: uid$1("fav_"),
			name: presetNameFrom(params),
			params,
			blobId,
			createdAt: Date.now(),
			groupId: null,
			starred: false,
			order: loose.length ? top - 1 : 0
		};
		(async () => {
			try {
				await db.favorites.put(f);
				set((s) => ({ favorites: sortFavorites([f, ...s.favorites]) }));
				get().toast("已保存");
			} catch (err) {
				get().toast(err instanceof Error ? err.message : "收藏失败");
			}
		})();
	},
	patchFavorite: (id, p) => {
		const row = get().favorites.find((f) => f.id === id);
		if (!row) return;
		const next = {
			...row,
			...p
		};
		(async () => {
			try {
				await db.favorites.put(next);
				set((s) => ({ favorites: sortFavorites(s.favorites.map((f) => f.id === id ? next : f)) }));
			} catch (err) {
				get().toast(err instanceof Error ? err.message : "收藏更新失败");
			}
		})();
	},
	deleteFavorite: (id) => {
		const row = get().favorites.find((f) => f.id === id);
		set((s) => ({ favorites: s.favorites.filter((f) => f.id !== id) }));
		db.favorites.delete(id);
		if (row?.blobId && !blobInUse(get(), row.blobId, id)) deleteImage(row.blobId);
		get().toast("已删除");
	},
	reorderFavorites: (ids) => {
		const rank = new Map(ids.map((id, i) => [id, i]));
		const next = sortFavorites(get().favorites.map((f) => rank.has(f.id) ? {
			...f,
			order: rank.get(f.id)
		} : f));
		set({ favorites: next });
		for (const f of next) db.favorites.put(f);
	},
	setFavOrders: (groupOrders, favOrders) => {
		set((s) => {
			return {
				favGroups: s.favGroups.map((g) => {
					if (!(g.id in groupOrders) || groupOrders[g.id] === g.order) return g;
					const next = {
						...g,
						order: groupOrders[g.id]
					};
					db.favGroups.put(next);
					return next;
				}),
				favorites: sortFavorites(s.favorites.map((f) => {
					if (!(f.id in favOrders) || favOrders[f.id] === (f.order ?? 0)) return f;
					const next = {
						...f,
						order: favOrders[f.id]
					};
					db.favorites.put(next);
					return next;
				}))
			};
		});
	},
	addFavGroup: (name) => {
		const title = name.trim() || "未命名";
		const roots = get().favGroups.filter((g) => !g.parentId);
		const top = roots.reduce((m, g) => Math.min(m, g.order), 0);
		const row = {
			id: uid$1("fg_"),
			name: title,
			parentId: null,
			collapsed: true,
			order: roots.length ? top - 1 : 0,
			starred: false,
			createdAt: Date.now()
		};
		db.favGroups.put(row);
		set((s) => ({ favGroups: [row, ...s.favGroups] }));
	},
	renameFavGroup: (id, name) => {
		const row = get().favGroups.find((g) => g.id === id);
		if (!row) return;
		const next = {
			...row,
			name: name.trim() || "未命名"
		};
		db.favGroups.put(next);
		set((s) => ({ favGroups: s.favGroups.map((g) => g.id === id ? next : g) }));
	},
	toggleFavGroup: (id) => {
		const row = get().favGroups.find((g) => g.id === id);
		if (!row) return;
		const next = {
			...row,
			collapsed: !row.collapsed
		};
		db.favGroups.put(next);
		set((s) => ({ favGroups: s.favGroups.map((g) => g.id === id ? next : g) }));
	},
	deleteFavGroup: (id) => {
		const dropG = /* @__PURE__ */ new Set([id, ...favGroupDescendants(get().favGroups, id)]);
		const dropF = get().favorites.filter((f) => f.groupId && dropG.has(f.groupId));
		set((s) => ({
			favGroups: s.favGroups.filter((g) => !dropG.has(g.id)),
			favorites: s.favorites.filter((f) => !(f.groupId && dropG.has(f.groupId)))
		}));
		for (const gid of dropG) db.favGroups.delete(gid);
		for (const f of dropF) {
			db.favorites.delete(f.id);
			if (f.blobId && !blobInUse(get(), f.blobId)) deleteImage(f.blobId);
		}
		get().toast("已删除");
	},
	moveFavorite: (id, groupId) => {
		const favs = get().favorites;
		if (!favs.find((f) => f.id === id)) return;
		if (groupId && !get().favGroups.some((g) => g.id === groupId)) return;
		const sib = favs.filter((f) => f.id !== id && (f.groupId ?? null) === groupId);
		const top = sib.reduce((m, f) => Math.min(m, f.order ?? 0), 0);
		const groups = openFavAncestors(get().favGroups, groupId);
		if (groups !== get().favGroups) {
			set({ favGroups: groups });
			for (const g of groups) if (!g.collapsed) db.favGroups.put(g);
		}
		get().patchFavorite(id, {
			groupId,
			order: sib.length ? top - 1 : 0
		});
	},
	moveFavGroup: (id, parentId) => {
		const groups = get().favGroups;
		const row = groups.find((g) => g.id === id);
		if (!row) return;
		if (parentId) {
			if (parentId === id || favGroupDescendants(groups, id).has(parentId)) return;
			if (!groups.some((g) => g.id === parentId)) return;
		}
		const sib = groups.filter((g) => g.id !== id && (g.parentId ?? null) === parentId);
		const top = sib.reduce((m, g) => Math.min(m, g.order), 0);
		const moved = {
			...row,
			parentId,
			order: sib.length ? top - 1 : 0
		};
		const next = openFavAncestors(groups.map((g) => g.id === id ? moved : g), parentId);
		set({ favGroups: next });
		for (const g of next) db.favGroups.put(g);
	},
	toggleFavoriteStar: (id) => {
		const row = get().favorites.find((f) => f.id === id);
		if (!row) return;
		const next = {
			...row,
			starred: !row.starred
		};
		db.favorites.put(next);
		set((s) => ({ favorites: s.favorites.map((f) => f.id === id ? next : f) }));
	},
	toggleFavGroupStar: (id) => {
		const row = get().favGroups.find((g) => g.id === id);
		if (!row) return;
		const next = {
			...row,
			starred: !row.starred
		};
		db.favGroups.put(next);
		set((s) => ({ favGroups: s.favGroups.map((g) => g.id === id ? next : g) }));
	},
	setFavoriteThumb: (id, blobId) => {
		const old = get().favorites.find((f) => f.id === id)?.blobId;
		get().patchFavorite(id, { blobId });
		if (old && old !== blobId && !blobInUse(get(), old, id)) deleteImage(old);
		get().toast("已更新配图");
	},
	addHistory: (h) => {
		db.history.put(h);
		set((s) => ({ history: sortHistoryNewestFirst([h, ...s.history]).slice(0, 200) }));
	},
	patchHistory: (id, p) => {
		set((s) => {
			const history = s.history.map((h) => h.id === id ? {
				...h,
				...p
			} : h);
			const row = history.find((h) => h.id === id);
			if (row) db.history.put(row);
			return { history };
		});
	},
	deleteHistory: (id) => {
		const row = get().history.find((h) => h.id === id);
		set((s) => ({ history: s.history.filter((h) => h.id !== id) }));
		db.history.delete(id);
		if (row?.blobId && !blobInUse(get(), row.blobId)) deleteImage(row.blobId);
	},
	setCooldown: (until) => get().setSettings({ cooldownUntil: until }),
	setComposerDraft: (chatId, text) => {
		set((s) => {
			const composerDrafts = { ...s.composerDrafts };
			if (text) composerDrafts[chatId] = text;
			else delete composerDrafts[chatId];
			db.kv.put({
				key: "composerDrafts",
				value: composerDrafts
			});
			return { composerDrafts };
		});
	},
	setComposerShot: (chatId, shots) => {
		set((s) => {
			const composerShots = { ...s.composerShots };
			if (shots?.length) composerShots[chatId] = shots;
			else delete composerShots[chatId];
			db.kv.put({
				key: "composerShots",
				value: composerShots
			});
			return { composerShots };
		});
	},
	setWechatSession: (chatId, session) => {
		set((s) => {
			const wechatSessions = { ...s.wechatSessions };
			if (session) wechatSessions[chatId] = session;
			else delete wechatSessions[chatId];
			db.kv.put({
				key: "wechatSessions",
				value: wechatSessions
			});
			return { wechatSessions };
		});
	},
	setWechatStickers: (items) => {
		set({ wechatStickers: items });
		db.kv.put({
			key: "wechatStickers",
			value: items
		});
	}
}));
bindSysApp(() => useApp);
function parseComposerDrafts(raw) {
	if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
	const out = {};
	for (const [k, v] of Object.entries(raw)) if (k && typeof v === "string" && v) out[k] = v;
	return out;
}
function dropDrafts(drafts, ids) {
	const next = { ...drafts };
	for (const id of ids) delete next[id];
	return next;
}
function parseOneShot(v) {
	if (!v || typeof v !== "object") return null;
	const row = v;
	if (typeof row.blobId !== "string" || !row.blobId) return null;
	return {
		blobId: row.blobId,
		i2i: row.i2i === true
	};
}
function parseComposerShots(raw) {
	if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
	const out = {};
	for (const [k, v] of Object.entries(raw)) {
		if (!k) continue;
		const rows = Array.isArray(v) ? v.map(parseOneShot) : [parseOneShot(v)];
		let lit = false;
		const shots = rows.filter((s) => !!s).map((s) => {
			const i2i = s.i2i && !lit;
			if (i2i) lit = true;
			return {
				blobId: s.blobId,
				i2i
			};
		});
		if (shots.length) out[k] = shots;
	}
	return out;
}
function dropShots(shots, ids) {
	const next = { ...shots };
	for (const id of ids) delete next[id];
	return next;
}
function parseStickers(raw) {
	if (!Array.isArray(raw)) return [];
	const out = [];
	for (const item of raw) {
		if (typeof item === "string" && item) {
			out.push({
				blobId: item,
				brief: ""
			});
			continue;
		}
		if (!item || typeof item !== "object") continue;
		const blobId = item.blobId;
		const brief = item.brief;
		if (typeof blobId === "string" && blobId) out.push({
			blobId,
			brief: typeof brief === "string" ? brief : ""
		});
	}
	return out;
}
function parseWechatRooms(raw) {
	if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
	const out = {};
	for (const [k, v] of Object.entries(raw)) {
		if (!k || !v || typeof v !== "object") continue;
		const row = v;
		out[k] = {
			lines: Array.isArray(row.lines) ? row.lines : [],
			earlier: typeof row.earlier === "string" ? row.earlier : "",
			folded: typeof row.folded === "number" && row.folded > 0 ? Math.floor(row.folded) : 0,
			draft: typeof row.draft === "string" ? row.draft : "",
			pending: Array.isArray(row.pending) ? row.pending : []
		};
	}
	return out;
}
function parseWechatSessions(raw) {
	if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
	const out = {};
	for (const [k, v] of Object.entries(raw)) {
		if (!k || !v || typeof v !== "object") continue;
		const row = v;
		out[k] = {
			charId: typeof row.charId === "string" ? row.charId : "",
			lines: Array.isArray(row.lines) ? row.lines : [],
			earlier: typeof row.earlier === "string" ? row.earlier : "",
			folded: typeof row.folded === "number" && row.folded > 0 ? Math.floor(row.folded) : 0,
			draft: typeof row.draft === "string" ? row.draft : "",
			pending: Array.isArray(row.pending) ? row.pending : [],
			armed: row.armed === true,
			minimized: row.minimized === true,
			...typeof row.activeRoom === "string" ? { activeRoom: row.activeRoom } : {},
			...row.rooms && typeof row.rooms === "object" ? { rooms: parseWechatRooms(row.rooms) } : {}
		};
	}
	return out;
}
function dropWechat(sessions, ids) {
	const next = { ...sessions };
	for (const id of ids) delete next[id];
	return next;
}
function liftImageAi(settings, chats, currentId) {
	if (settings.imageModelId || settings.imageModelPin) return {
		imageModelId: settings.imageModelId ?? null,
		imageModelPin: settings.imageModelPin ?? null
	};
	const hit = [chats.find((c) => c.id === currentId), ...chats].find((c) => c && (c.imageModelId || c.imageModelPin));
	return {
		imageModelId: hit?.imageModelId ?? null,
		imageModelPin: hit?.imageModelPin ?? null
	};
}
function blobInUse(s, blobId, skipFav) {
	if (s.favorites.some((f) => f.blobId === blobId && f.id !== skipFav)) return true;
	if (s.favorites.some((f) => f.params.img2imgBlobId === blobId)) return true;
	if (s.pureParams.img2imgBlobId === blobId) return true;
	if (s.history.some((h) => h.blobId === blobId)) return true;
	if (s.cards.some((card) => card.customAvatarBlobId === blobId || card.characters.some((c) => c.lookBlobId === blobId || c.wechatAvatarBlobId === blobId))) return true;
	if (s.wechatStickers.some((st) => st.blobId === blobId)) return true;
	for (const c of s.chats) {
		if (c.avatarBlobId === blobId) return true;
		if (c.customAvatarBlobId === blobId) return true;
		if (c.imageParams.img2imgBlobId === blobId) return true;
		if (c.characters.some((ch) => ch.lookBlobId === blobId || ch.wechatAvatarBlobId === blobId)) return true;
		for (const m of c.messages) {
			if (m.userImageBlobId === blobId) return true;
			if (m.userImages?.some((s) => s.blobId === blobId)) return true;
			if (m.images.some((g) => g.blobId === blobId)) return true;
		}
	}
	return false;
}
async function saveBlob(blob) {
	const id = uid$1("img_");
	await putImage(id, blob);
	rememberUrl(id, blob);
	return id;
}
function listedChats(folders, chats, place = "home") {
	const live = chats.filter((c) => !c.isDraft && (place === "workshop" ? isWorkshopChat(c) : !isWorkshopChat(c)));
	return {
		foldersSorted: [...folders].filter((f) => place === "workshop" ? f.place === "workshop" : f.place !== "workshop").sort((a, b) => {
			if (a.starred !== b.starred) return a.starred ? -1 : 1;
			return a.order - b.order;
		}),
		root: live.filter((c) => !c.folderId).sort((a, b) => {
			if (a.starred !== b.starred) return a.starred ? -1 : 1;
			return a.order - b.order;
		}),
		inFolder: (fid) => live.filter((c) => c.folderId === fid).sort((a, b) => {
			if (a.starred !== b.starred) return a.starred ? -1 : 1;
			return a.order - b.order;
		})
	};
}
function fakePureChat(params, grokModelId) {
	return {
		id: "__pure__",
		folderId: null,
		name: "纯生图",
		remark: "",
		starred: false,
		order: -1,
		createdAt: 0,
		updatedAt: 0,
		isDraft: true,
		grokModelId,
		isMulti: false,
		multiMode: "together",
		promptMode: "insert",
		adultBoost: false,
		canGen: true,
		statusBarOn: false,
		statusBar: "",
		overview: "",
		opening: "",
		extras: [],
		memory: "",
		memoryUntil: 0,
		memoryFoldAt: 0,
		memorySnaps: [],
		characters: [],
		imageParams: params,
		messages: [],
		scrollTop: 0
	};
}
async function readJsonError(res, fallback) {
	try {
		return (await res.json()).error || fallback;
	} catch {
		return fallback;
	}
}
var writeChain = Promise.resolve();
function enqueueWrite(fn, signal) {
	const run = () => {
		if (signal?.aborted) {
			const err = /* @__PURE__ */ new Error("Aborted");
			err.name = "AbortError";
			return Promise.reject(err);
		}
		return fn();
	};
	const next = writeChain.then(run, run);
	writeChain = next.then(() => void 0, () => void 0);
	return next;
}
function shouldQueue(task) {
	return task === "memory" || task === "image" || task === "rewrite";
}
function abortError() {
	const err = /* @__PURE__ */ new Error("Aborted");
	err.name = "AbortError";
	return err;
}
async function grokOnceRaw(body, signal) {
	const s = useApp.getState().settings;
	const modelBody = typeof body.model === "string" && !isGrokModelId(body.model) ? body.model : "";
	const baseBody = typeof body.baseUrl === "string" ? body.baseUrl : "";
	const keyBody = typeof body.apiKey === "string" ? body.apiKey : "";
	const rest = { ...body };
	delete rest.via;
	delete rest.model;
	delete rest.baseUrl;
	delete rest.apiKey;
	const ownParams = rest.params && typeof rest.params === "object" ? rest.params : null;
	const maxFromOwn = typeof ownParams?.maxTokens === "number" ? ownParams.maxTokens : void 0;
	const route = resolveLlmSend(s, modelBody || s.llmModel, baseBody, keyBody);
	const apiKey = route.apiKey;
	if (!apiKey) throw new Error("还没连接对话 API");
	if (!route.model) throw new Error("还没选择模型");
	const res = await fetch("/api/llm", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			action: "chat",
			baseUrl: route.baseUrl,
			apiKey,
			model: route.model,
			...rest,
			params: ownParams ?? s.llmParams,
			stream: false,
			max_tokens: rest.max_tokens ?? maxFromOwn ?? s.llmParams.maxTokens
		}),
		signal
	});
	const data = await res.json();
	if (!res.ok || !data.ok) throw new Error(data.error || `请求失败 ${res.status}`);
	return data.text ?? "";
}
async function grokOnce(body, signal) {
	if (shouldQueue(body.task)) return enqueueWrite(() => grokOnceRaw(body, signal), signal);
	return grokOnceRaw(body, signal);
}
function consumeSse(chunk, onDelta, acc) {
	const line = chunk.split("\n").find((l) => l.startsWith("data: "));
	if (!line) return;
	const data = line.slice(6);
	if (data === "[DONE]") return;
	try {
		const j = JSON.parse(data);
		if (j.error) throw new Error(j.error);
		if (j.text) {
			acc.full += j.text;
			onDelta(acc.full);
		}
	} catch (e) {
		if (e instanceof Error && e.message && !e.message.includes("JSON") && e.message !== "Unexpected end of JSON input") throw e;
	}
}
async function grokStream(body, onDelta, signal) {
	const run = () => grokStreamRaw(body, onDelta, signal);
	if (shouldQueue(body.task)) return enqueueWrite(run, signal);
	return run();
}
async function grokStreamRaw(body, onDelta, signal) {
	if (signal?.aborted) throw abortError();
	const s = useApp.getState().settings;
	const baseBody = typeof body.baseUrl === "string" ? body.baseUrl : "";
	const keyBody = typeof body.apiKey === "string" ? body.apiKey : "";
	const route = resolveLlmSend(s, (typeof body.model === "string" && !isGrokModelId(body.model) ? body.model : "") || s.llmModel, baseBody, keyBody);
	if (!route.apiKey) throw new Error("还没连接对话 API");
	if (!route.model) throw new Error("还没选择模型");
	const ownParams = body.params && typeof body.params === "object" ? body.params : null;
	const maxFromOwn = typeof ownParams?.maxTokens === "number" ? ownParams.maxTokens : void 0;
	const rest = { ...body };
	delete rest.baseUrl;
	delete rest.apiKey;
	delete rest.model;
	delete rest.via;
	const res = await fetch("/api/llm", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			action: "chat",
			...rest,
			baseUrl: route.baseUrl,
			apiKey: route.apiKey,
			model: route.model,
			params: ownParams ?? s.llmParams,
			stream: true,
			max_tokens: body.max_tokens ?? maxFromOwn ?? s.llmParams.maxTokens
		}),
		signal
	});
	if (!res.ok || !res.body) throw new Error(await readJsonError(res, `请求失败 ${res.status}`));
	const reader = res.body.getReader();
	const dec = new TextDecoder();
	let buf = "";
	const acc = { full: "" };
	while (true) {
		const { done, value } = await reader.read();
		if (done) break;
		buf += dec.decode(value, { stream: true });
		const parts = buf.split("\n\n");
		buf = parts.pop() ?? "";
		for (const p of parts) consumeSse(p, onDelta, acc);
	}
	buf += dec.decode();
	if (buf.trim()) for (const p of buf.split("\n\n")) consumeSse(p, onDelta, acc);
	return acc.full;
}
async function fetchLlmModels(baseUrl, apiKey) {
	const res = await fetch("/api/llm", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			action: "models",
			baseUrl,
			apiKey
		})
	});
	const data = await res.json();
	if (!res.ok || !data.ok) throw new Error(data.error || `连接失败 ${res.status}`);
	return data.models ?? [];
}
var CHAR_KEYS = [
	"name",
	"persona",
	"speech",
	"appearance"
];
function stripRoleOutput(text) {
	let s = (text || "").trim();
	s = s.replace(/^```(?:json|text|markdown)?\s*/i, "").replace(/\s*```$/i, "").trim();
	if (s.startsWith("\"") && s.endsWith("\"") && s.length >= 2) try {
		const q = JSON.parse(s);
		if (typeof q === "string") return q.trim();
	} catch {
		s = s.slice(1, -1).trim();
	}
	return s;
}
function parseObject(raw) {
	const s = stripRoleOutput(raw);
	const start = s.indexOf("{");
	const end = s.lastIndexOf("}");
	if (start < 0 || end <= start) return null;
	try {
		const json = JSON.parse(s.slice(start, end + 1));
		if (json && typeof json === "object" && !Array.isArray(json)) return json;
	} catch {}
	return null;
}
function asText(v) {
	if (typeof v === "string") return v.trim();
	if (v == null) return "";
	return String(v).trim();
}
function parsePolishJson(text) {
	const obj = parseObject(text);
	if (!obj) throw new Error("完善结果解析失败，请再试一次");
	const characters = Array.isArray(obj.characters) ? obj.characters.map((c) => {
		const row = c && typeof c === "object" ? c : {};
		return {
			name: asText(row.name),
			persona: asText(row.persona),
			speech: asText(row.speech),
			appearance: asText(row.appearance)
		};
	}) : void 0;
	return {
		overview: asText(obj.overview),
		opening: asText(obj.opening),
		characters
	};
}
function extractFieldText(text, field) {
	const stripped = stripRoleOutput(text);
	const json = parseObject(stripped);
	if (!json) return stripped;
	if (typeof json[field] === "string" && asText(json[field])) return asText(json[field]);
	const label = {
		persona: "人设",
		speech: "说话方式",
		appearance: "外貌备忘",
		overview: "要求总览",
		opening: "开场场景",
		name: "名字"
	}[field];
	if (label && typeof json[label] === "string" && asText(json[label])) return asText(json[label]);
	const first = Array.isArray(json.characters) ? json.characters[0] : null;
	if (first && typeof first === "object") {
		const v = first[field];
		if (typeof v === "string" && asText(v)) return asText(v);
	}
	if (typeof json.text === "string" && asText(json.text)) return asText(json.text);
	return stripped;
}
function mergeOneChar(c, src) {
	if (!src) return c;
	const nameLocked = Boolean(c.name.trim());
	const appearLocked = Boolean(c.appearance.trim());
	return {
		...c,
		name: nameLocked ? c.name : src.name || c.name,
		persona: src.persona || c.persona,
		speech: src.speech || c.speech,
		appearance: appearLocked ? c.appearance : src.appearance || c.appearance
	};
}
function mergePolish(chat, json) {
	const characters = chat.characters.map((c, i) => mergeOneChar(c, json.characters?.[i]));
	return {
		name: characters.map((c) => c.name).filter(Boolean).join("、") || chat.name,
		overview: json.overview || chat.overview,
		opening: json.opening || chat.opening,
		characters
	};
}
function applyRoleField(chat, field, text, charId) {
	const cleaned = extractFieldText(text, field);
	if (charId) {
		const key = CHAR_KEYS.includes(field) ? field : "persona";
		return {
			...chat,
			characters: chat.characters.map((c) => c.id === charId ? {
				...c,
				[key]: cleaned
			} : c)
		};
	}
	if (field === "overview" || field === "opening" || field === "statusBar") return {
		...chat,
		[field]: cleaned
	};
	return chat;
}
function buildPolishUserContent(chat) {
	const characters = chat.characters.map((c, i) => ({
		index: i + 1,
		name: c.name,
		nameLocked: Boolean(c.name.trim()),
		persona: c.persona,
		speech: c.speech,
		appearance: c.appearance,
		appearanceLocked: Boolean(c.appearance.trim()),
		personaVoices: Boolean(c.personaVoices)
	}));
	const extras = [...chat.extras, ...chat.characters.flatMap((c) => c.extras)].map((e) => e.body.trim()).filter(Boolean);
	return JSON.stringify({
		overview: chat.overview,
		opening: chat.opening,
		isMulti: chat.isMulti,
		characters,
		readOnlyExtras: extras.length ? extras : void 0,
		readOnlyMemory: chat.memory.trim() || void 0,
		locks: {
			filledName: "nameLocked 为 true 的名字必须原样返回",
			filledAppearance: "appearanceLocked 为 true 的外貌必须原样返回，一个 tag 都不要改",
			statusBar: "不要输出 statusBar",
			extras: "不要改新增栏"
		}
	}, null, 2);
}
var OPENING_USER = "（开始场景，请角色先开口）";
var CONTINUE_USER = "用户这轮没有发言。这不是开场，也不是结束。接着上一拍已经发生的事往下演，把场上未完的动作、对话、时间往前推，不要空等用户开口，不要问「你想做什么」。需要用户开口或表态时你可以代写或给出选项。不要复述上一拍，不要跳到无关的新故事。";
function parseUserMarkup(raw) {
	const facts = [];
	const directives = [];
	let s = raw || "";
	s = s.replace(/《([^》]*)》/g, (_, inner) => {
		const t = inner.trim();
		if (t) directives.push(t);
		return " ";
	});
	s = s.replace(/[（(]([^）)]*)[）)]/g, (_, inner) => {
		const t = inner.trim();
		if (t) facts.push(t);
		return " ";
	});
	return {
		facts,
		directives,
		rest: s.replace(/\s+/g, " ").trim(),
		raw
	};
}
function isShortBareCandidate(rest) {
	const t = rest.trim();
	if (!t || t.length > 12) return false;
	if (/[？?！!。，,]/.test(t)) return false;
	return true;
}
function needsMarkupFormat(raw) {
	const t = (raw || "").trim();
	if (!t || t === "（开始场景，请角色先开口）") return false;
	const p = parseUserMarkup(t);
	if (p.facts.length || p.directives.length) return true;
	return isShortBareCandidate(p.rest);
}
function standingDirectives(chat) {
	return [...chat.extras || [], ...(chat.characters || []).flatMap((c) => c.extras || [])].map((e) => e.emphasize ? (e.body || "").trim() : "").filter(Boolean);
}
function chatAuthorBlock(directives) {
	return `【作者指令】${directives.map((d) => `《${d}》`).join(" ")}\n角色听不见、不准念、不准写成「听到指示」。只执行与这轮文笔/剧情有关的；与画图、镜头、构图、tag 有关的忽略（生图会另处理）。`;
}
function imageAuthorBlock(directives) {
	return `作者指令：${directives.map((d) => `《${d}》`).join(" ")}（只执行与画面有关的；文笔/篇幅/怎么写的忽略）`;
}
function formatUserForChat(raw, standing = []) {
	const extra = standing.map((s) => s.trim()).filter(Boolean);
	const t = (raw || "").trim();
	if ((!t || t === "（开始场景，请角色先开口）") && extra.length) return `${!t ? CONTINUE_USER : OPENING_USER}\n\n${chatAuthorBlock(extra)}`;
	if (!t) return CONTINUE_USER;
	if (t === "（开始场景，请角色先开口）") return raw;
	const merged = extra.length ? `${t}${extra.map((d) => `《${d}》`).join("")}` : t;
	if (!needsMarkupFormat(merged)) return raw;
	const p = parseUserMarkup(merged);
	const parts = [];
	if (p.facts.length) parts.push(`【已发生】${p.facts.map((f) => `「${f}」`).join("、")}\n这是本拍必须达成的事实：过程可以写，回复结束时必须已经成立。不是口令。角色不是「听见」这些字；若内容本身是已经说出口的话，她听见的是那句话，不是括号。`);
	if (p.rest) parts.push(`【用户其余原文】${p.rest}\n请判断：像对角色说的话 → 她听见的台词；像动作/场面补充（摸头、抱住、插入）→ 与【已发生】同一规则，短动词优先当动作。`);
	if (p.directives.length) parts.push(`【作者指令】${p.directives.map((d) => `《${d}》`).join(" ")}\n角色听不见、不准念、不准写成「听到指示」。只执行与这轮文笔/剧情有关的；与画图、镜头、构图、tag 有关的忽略（生图会另处理）。`);
	if (p.facts.length && !p.rest) parts.push("本条没有台词。角色只对已经发生的事实做身体和情绪反应，禁止写成听到一句话或听到指示。");
	return parts.join("\n\n");
}
function messageShots(m) {
	if (m.userImages?.length) {
		let lit = false;
		return m.userImages.filter((s) => s.blobId).map((s) => {
			const i2i = s.i2i === true && !lit;
			if (i2i) lit = true;
			return {
				blobId: s.blobId,
				i2i
			};
		});
	}
	if (m.userImageBlobId) return [{
		blobId: m.userImageBlobId,
		i2i: m.userImageI2i === true
	}];
	return [];
}
function stampShots(msg, shots) {
	const next = { ...msg };
	delete next.userImages;
	delete next.userImageBlobId;
	delete next.userImageI2i;
	let lit = false;
	const userImages = shots.filter((s) => s.blobId).map((s) => {
		const i2i = s.i2i === true && !lit;
		if (i2i) lit = true;
		return {
			blobId: s.blobId,
			i2i
		};
	});
	if (!userImages.length) return next;
	next.userImages = userImages;
	next.userImageBlobId = userImages[0].blobId;
	next.userImageI2i = userImages[0].i2i;
	return next;
}
function formatUserImageTurn(raw, standing = [], count = 1) {
	const t = (raw || "").trim();
	const n = Math.max(1, count);
	const extra = standing.map((s) => s.trim()).filter(Boolean);
	if (!t) {
		const frame = n > 1 ? `用户这轮发来 ${n} 张图，没有写字。图按编号附在这条消息后面。这些都是这一轮的画面，不要当成外貌备忘。能看成同一刻的不同角度，就写成同一刻。明显是前后不同的时刻，就按编号写中间是怎么过去的，不要从最后一张直接起笔，也不要沿用上一拍自己推进的动作。看着这些图回复，不要当成没说话。` : "用户这轮发来一张图，没有写字。图就在这条消息后面。这张图就是现在正在发生的画面：她在做什么、什么姿势、在什么地方，都认这张图。看着这张图回复，不要当成没说话，也不要沿用上一拍自己推进剧情。";
		return extra.length ? `${frame}\n\n${chatAuthorBlock(extra)}` : frame;
	}
	return `${formatUserForChat(t, standing)}\n\n${n > 1 ? `用户这轮还发来 ${n} 张图，按编号附在这条消息后面。上面的字是对着这些图说的。这些都是这一轮的画面，不要当成外貌备忘，也不要沿用上一拍的旧动作。能看成同一刻的不同角度，就写成同一刻。明显是前后不同的时刻，就按编号写中间是怎么过去的，不要从最后一张直接起笔。她听见的话也是在问或说这些图里的事。` : "用户这轮还发来一张图，图就在这条消息后面。上面的字是对着这张图说的。这张图就是现在的画面，不要沿用上一拍的旧动作。她听见的话也是在问或说这张图里的事。"}`;
}
function formatUserForImage(raw, standing = []) {
	const extra = standing.map((s) => s.trim()).filter(Boolean);
	const t = (raw || "").trim();
	if ((!t || t === "（开始场景，请角色先开口）") && !extra.length) return "";
	if (!t || t === "（开始场景，请角色先开口）") return imageAuthorBlock(extra);
	const merged = extra.length ? `${t}${extra.map((d) => `《${d}》`).join("")}` : t;
	if (!needsMarkupFormat(merged)) return `用户：${t}`;
	const p = parseUserMarkup(merged);
	const parts = [];
	if (p.facts.length) parts.push(`用户已发生（镜头里必须是已经发生，不要写成准备、磨蹭或停在入口）：${p.facts.join("；")}`);
	if (p.rest) parts.push(`用户其余：${p.rest}`);
	if (p.directives.length) parts.push(`作者指令：${p.directives.map((d) => `《${d}》`).join(" ")}（只执行与画面有关的；文笔/篇幅/怎么写的忽略）`);
	return parts.join("\n") || `用户：${t}`;
}
function recentSceneForImage(messages, n = 4, standing = []) {
	let lastUser = -1;
	for (let i = messages.length - 1; i >= 0; i--) if (messages[i].role === "user") {
		lastUser = i;
		break;
	}
	const slice = messages.slice(-n);
	const offset = messages.length - slice.length;
	return slice.map((m, i) => {
		if (m.role === "user") return formatUserForImage(m.content, offset + i === lastUser ? standing : []);
		if (m.role === "narrator") return m.content ? `旁白：${replyContextText(m.content)}` : "";
		return `${m.characterName || "角色"}：${replyContextText(m.content)}`;
	}).filter(Boolean).join("\n");
}
/** 本镜 = this assistant reply (or override); residual = last 4 bubbles before it. */
function shotAndResidual(messages, msgId, shotOverride, standing = []) {
	const idx = messages.findIndex((m) => m.id === msgId);
	const msg = idx >= 0 ? messages[idx] : void 0;
	const before = idx >= 0 ? messages.slice(0, idx) : messages;
	return {
		shot: (shotOverride ?? (msg ? replyStoryText(msg.content) : "")).trim(),
		residual: recentSceneForImage(before, 4, standing)
	};
}
/** The user's latest line before this reply. Who is on screen looks at this plus 本镜. */
function latestUserBefore(messages, msgId, standing = []) {
	const idx = messages.findIndex((m) => m.id === msgId);
	const before = idx >= 0 ? messages.slice(0, idx) : messages;
	for (let i = before.length - 1; i >= 0; i--) {
		if (before[i].role !== "user") continue;
		const text = formatUserForImage(before[i].content, standing).trim();
		if (text) return text;
	}
	return "";
}
/** Immediate previous assistant/narrator only. Empty if that round has no successful image. */
function previousRoundImagePrompt(messages, msgId) {
	const idx = messages.findIndex((m) => m.id === msgId);
	const from = idx >= 0 ? idx - 1 : messages.length - 1;
	for (let i = from; i >= 0; i--) {
		const m = messages[i];
		if (m.role !== "assistant" && m.role !== "narrator") continue;
		return ([...m.images || []].reverse().find((g) => g.status === "done" && g.prompt)?.prompt || "").trim();
	}
	return "";
}
function escapeRegExp(s) {
	return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function stripSpeakerPrefix(text, names) {
	const list = [...new Set(names.map((n) => (n || "").trim()).filter(Boolean))].sort((a, b) => b.length - a.length);
	let s = text;
	for (let i = 0; i < 6; i++) {
		const next = s.replace(/^\s+/, "");
		let hit = false;
		for (const n of list) {
			const re = new RegExp(`^${escapeRegExp(n)}\\s*[：:]\\s*`);
			if (re.test(next)) {
				s = next.replace(re, "");
				hit = true;
				break;
			}
		}
		if (!hit) return next;
	}
	return s.replace(/^\s+/, "");
}
var QUOTE = /「[^」]*」|『[^』]*』|“[^”]*”|"[^"\n]*"/g;
function splitDialogue(text) {
	const out = [];
	let last = 0;
	for (const m of text.matchAll(QUOTE)) {
		const i = m.index ?? 0;
		if (i > last) out.push({
			kind: "narr",
			text: text.slice(last, i)
		});
		out.push({
			kind: "say",
			text: m[0]
		});
		last = i + m[0].length;
	}
	if (last < text.length) out.push({
		kind: "narr",
		text: text.slice(last)
	});
	return out.filter((p) => p.text);
}
var FACE_KEEP = /[\^:;><]_[^,\s]|_[wWmMoO]_|\\m\/|\^_\^|:_\^|;_;/;
var FORBIDDEN_EXACT = /* @__PURE__ */ new Set([
	"masterpiece",
	"best quality",
	"amazing quality",
	"absurdres",
	"very aesthetic",
	"highres",
	"newest",
	"4k",
	"8k",
	"8k wallpaper",
	"extremely detailed",
	"ultra-detailed",
	"cinematic",
	"no text",
	"worst quality",
	"low quality",
	"artist collaboration",
	"loli",
	"shota",
	"child",
	"teen",
	"underage",
	"toddler",
	"kid",
	"children"
]);
var AUTO_TAGS = /* @__PURE__ */ new Set([
	"uncensored",
	"full body",
	"rating:sensitive",
	"rating: sensitive",
	"fur dataset"
]);
function isForbidden(tag) {
	const t = tag.trim().toLowerCase();
	if (!t) return true;
	if (FORBIDDEN_EXACT.has(t)) return true;
	if (/\bartist\s*:/.test(t)) return true;
	if (/^year 202\d$/.test(t)) return true;
	if (/^year_202\d$/.test(t)) return true;
	return false;
}
function unSnake(tag) {
	const t = tag.trim();
	if (t.length < 10 && FACE_KEEP.test(t)) return t;
	return t.replace(/_/g, " ");
}
function splitNaiTags(raw) {
	const out = [];
	let buf = "";
	let inWeight = false;
	for (let i = 0; i < raw.length; i++) {
		const c = raw[i];
		if (c === ":" && raw[i + 1] === ":") {
			inWeight = !inWeight;
			buf += "::";
			i++;
			continue;
		}
		if (c === "," && !inWeight) {
			if (buf.trim()) out.push(buf.trim());
			buf = "";
			continue;
		}
		buf += c;
	}
	if (buf.trim()) out.push(buf.trim());
	return out;
}
function normKey(tag) {
	return unSnake(tag).replace(/\s+/g, " ").trim().toLowerCase();
}
function sanitizeNaiTags(raw, opts) {
	let s = (raw || "").trim();
	if (!s) return "";
	s = s.replace(/^```(?:json|text|tags)?\s*/i, "").replace(/\s*```$/i, "").trim();
	s = s.replace(/^(?:here are (?:the )?tags:?|tags:?|prompt:?)\s*/i, "");
	s = s.replace(/^["']|["']$/g, "").trim();
	if (s.includes("{") && /"base"\s*:|"chars"\s*:/.test(s)) s = flattenMaybeJson(s);
	const strip = opts?.stripForbidden !== false;
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	for (let part of splitNaiTags(s)) {
		part = unSnake(part).replace(/\s+/g, " ").trim();
		if (!part) continue;
		if (!/^[-0-9.]+::/.test(part) && !part.startsWith("Text:") && !part.startsWith("source#") && !part.startsWith("target#") && !part.startsWith("mutual#")) part = part.toLowerCase();
		if (strip && isForbidden(part)) continue;
		const key = part.toLowerCase();
		if (seen.has(key)) continue;
		seen.add(key);
		out.push(part);
	}
	return out.join(", ");
}
/** Pull the Grok-added mid tags out of a stored prompt that may still be the full front+mid+tail+back string. */
function extractGrokTail(stored, params) {
	const cleaned = sanitizeNaiTags(flattenMaybeJson(stored));
	if (!cleaned) return "";
	const drop = /* @__PURE__ */ new Set();
	for (const src of [
		params.promptFront,
		params.promptMid,
		params.promptBack
	]) for (const t of splitNaiTags(src || "")) {
		const k = normKey(t);
		if (k) drop.add(k);
	}
	for (const t of AUTO_TAGS) drop.add(t);
	return splitNaiTags(cleaned).filter((t) => !drop.has(normKey(t)) && !isForbidden(t)).join(", ");
}
function extractJsonObject(raw) {
	let s = (raw || "").trim();
	s = s.replace(/^```(?:json|text|tags)?\s*/i, "").replace(/\s*```$/i, "").trim();
	const start = s.indexOf("{");
	const end = s.lastIndexOf("}");
	if (start < 0 || end <= start) return null;
	try {
		const json = JSON.parse(s.slice(start, end + 1));
		if (json && typeof json === "object" && !Array.isArray(json)) return json;
	} catch {}
	return null;
}
function asTagStr(v) {
	if (v == null) return "";
	if (typeof v === "string") return v;
	if (Array.isArray(v)) return v.map(asTagStr).filter(Boolean).join(", ");
	if (typeof v === "object") return Object.values(v).map(asTagStr).filter(Boolean).join(", ");
	return String(v);
}
function flattenMaybeJson(raw) {
	const json = extractJsonObject(raw);
	if (!json || !("base" in json) && !("chars" in json)) return raw;
	const parts = [asTagStr(json.base)];
	const chars = json.chars;
	if (chars && typeof chars === "object") for (const v of Object.values(chars)) parts.push(asTagStr(v));
	return parts.filter(Boolean).join(", ");
}
function assignCharTags(rawChars, characters) {
	const mapped = {};
	const used = /* @__PURE__ */ new Set();
	const unmatched = [];
	const resolve = (key) => {
		const k = key.trim().toLowerCase();
		if (!k) return void 0;
		const byName = characters.find((c) => !used.has(c.id) && c.name && c.name.toLowerCase() === k);
		if (byName) return byName.id;
		const byId = characters.find((c) => !used.has(c.id) && c.id.toLowerCase() === k);
		if (byId) return byId.id;
		const m = k.match(/^(?:char|character|角色)\s*[_#.\-]?\s*(\d+)$/i);
		if (m) {
			const c = characters[Number(m[1]) - 1];
			if (c && !used.has(c.id)) return c.id;
		}
	};
	for (const [key, val] of Object.entries(rawChars)) {
		const tags = sanitizeNaiTags(val);
		if (!tags) continue;
		const id = resolve(key);
		if (id) {
			mapped[id] = tags;
			used.add(id);
		} else unmatched.push(tags);
	}
	return {
		mapped,
		leftover: unmatched.join(", ")
	};
}
function resolveAbsentIds(absent, characters) {
	const names = Array.isArray(absent) ? absent.map((x) => String(x || "").trim()).filter(Boolean) : [];
	const ids = [];
	for (const n of names) {
		const k = n.toLowerCase();
		const hit = characters.find((c) => c.name && c.name.toLowerCase() === k) || characters.find((c) => c.id.toLowerCase() === k) || (() => {
			const m = k.match(/^(?:char|character|角色)\s*[_#.\-]?\s*(\d+)$/i);
			return m ? characters[Number(m[1]) - 1] : void 0;
		})();
		if (hit && !ids.includes(hit.id)) ids.push(hit.id);
	}
	return ids;
}
function presenceFromTags(mappedIds, absentIds) {
	if (mappedIds.length) {
		const absent = new Set(absentIds);
		return {
			mode: "exact",
			ids: mappedIds.filter((id) => !absent.has(id))
		};
	}
	if (absentIds.length) return {
		mode: "off",
		ids: absentIds
	};
}
function legacyPresentIds(text, characters) {
	const found = /* @__PURE__ */ new Set();
	const re = /\bchar(?:acter)?\s*(\d+)\s*:/gi;
	let m;
	while (m = re.exec(text)) found.add(Number(m[1]));
	if (!found.size) return void 0;
	const ids = [];
	for (const n of [...found].sort((a, b) => a - b)) {
		const c = characters[n - 1];
		if (c && !ids.includes(c.id)) ids.push(c.id);
	}
	return ids;
}
function readChunks(buf) {
	const view = new DataView(buf);
	if (view.getUint32(0) !== 2303741511 || view.getUint32(4) !== 218765834) throw new Error("不是 PNG");
	const texts = {};
	let offset = 8;
	const u8 = new Uint8Array(buf);
	while (offset + 8 < buf.byteLength) {
		const len = view.getUint32(offset);
		const type = String.fromCharCode(u8[offset + 4], u8[offset + 5], u8[offset + 6], u8[offset + 7]);
		const start = offset + 8;
		const data = u8.slice(start, start + len);
		if (type === "tEXt") {
			const nul = data.indexOf(0);
			if (nul > 0) {
				const key = new TextDecoder().decode(data.slice(0, nul));
				texts[key] = new TextDecoder("latin1").decode(data.slice(nul + 1));
			}
		} else if (type === "iTXt") {
			const nul = data.indexOf(0);
			if (nul > 0) {
				const key = new TextDecoder().decode(data.slice(0, nul));
				let i = nul + 1;
				const compressed = data[i];
				i += 2;
				i = data.indexOf(0, i) + 1;
				i = data.indexOf(0, i) + 1;
				let val;
				if (compressed) val = "";
				else val = new TextDecoder().decode(data.slice(i));
				texts[key] = val;
			}
		} else if (type === "IEND") break;
		offset = start + len + 4;
	}
	return texts;
}
function parseNaiPng(buf) {
	const texts = readChunks(buf);
	const comment = texts.Comment || texts.comment || texts.Description || "";
	const raw = comment || JSON.stringify(texts);
	let json = null;
	try {
		json = JSON.parse(comment);
	} catch {
		json = null;
	}
	const src = json ?? {};
	const v4 = src.v4_prompt?.caption;
	const v4neg = src.v4_negative_prompt?.caption;
	const charCaps = Array.isArray(v4?.char_captions) ? v4.char_captions : [];
	const ucCaps = Array.isArray(v4neg?.char_captions) ? v4neg.char_captions : [];
	const characters = charCaps.map((c, i) => ({
		prompt: String(c?.char_caption || ""),
		uc: String(ucCaps[i]?.char_caption || ""),
		x: Number(c?.centers?.[0]?.x ?? .5),
		y: Number(c?.centers?.[0]?.y ?? .5)
	}));
	return {
		prompt: (v4?.base_caption || src.prompt || texts.prompt || "").toString(),
		uc: (src.uc || src.negative_prompt || "").toString(),
		width: Number(src.width) || void 0,
		height: Number(src.height) || void 0,
		steps: Number(src.steps) || void 0,
		scale: Number(src.scale) || void 0,
		sampler: src.sampler || void 0,
		seed: Number(src.seed) || void 0,
		noiseSchedule: src.noise_schedule || void 0,
		model: src.sm ?? src.model,
		raw,
		characters: characters.length ? characters : void 0
	};
}
var IMAGE_EXT = /\.(png|jpe?g|gif|webp|bmp|heic|heif|avif)$/i;
function isImageFile(file) {
	if (file.type.startsWith("image/")) return true;
	return IMAGE_EXT.test(file.name);
}
async function naiSeedOf(file) {
	try {
		const meta = parseNaiPng(await file.arrayBuffer());
		return meta.seed && meta.seed > 0 ? meta.seed : void 0;
	} catch {
		return;
	}
}
async function compressRef(file, maxEdge = 1024, quality = .85) {
	try {
		const bmp = await createImageBitmap(file);
		const scale = Math.min(1, maxEdge / Math.max(bmp.width, bmp.height));
		const w = Math.max(1, Math.round(bmp.width * scale));
		const h = Math.max(1, Math.round(bmp.height * scale));
		const canvas = document.createElement("canvas");
		canvas.width = w;
		canvas.height = h;
		const ctx = canvas.getContext("2d");
		if (!ctx) {
			bmp.close();
			return file;
		}
		ctx.drawImage(bmp, 0, 0, w, h);
		bmp.close();
		return await new Promise((res) => canvas.toBlob(res, "image/jpeg", quality)) ?? file;
	} catch {
		return file;
	}
}
async function blobRawB64(blob) {
	const bytes = new Uint8Array(await blob.arrayBuffer());
	let binary = "";
	const chunk = 32768;
	for (let i = 0; i < bytes.length; i += chunk) binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
	return btoa(binary);
}
async function blobDataUrl(id) {
	if (!id) return null;
	const blob = await getImage(id);
	if (!blob) return null;
	return `data:${blob.type || "image/jpeg"};base64,${await blobRawB64(blob)}`;
}
function stripStatus(text) {
	const i = text.lastIndexOf("状态栏:");
	if (i < 0) return {
		body: text.trim(),
		status: ""
	};
	return {
		body: text.slice(0, i).trim(),
		status: text.slice(i).trim()
	};
}
async function decorateVision(chat, msgs) {
	let last = -1;
	for (let i = msgs.length - 1; i >= 0; i--) if (msgs[i].role === "user") last = i;
	if (last < 0) return msgs;
	const windowMsgs = chat.messages.slice(0, chat.messages.length);
	const start = Math.max(0, windowMsgs.length - recentWindow());
	const recent = windowMsgs.slice(start);
	let src;
	for (let i = recent.length - 1; i >= 0; i--) if (recent[i].role === "user") {
		src = recent[i];
		break;
	}
	const parts = [{
		type: "text",
		text: msgs[last].content
	}];
	let added = false;
	const shots = src ? messageShots(src) : [];
	const loaded = [];
	for (const shot of shots) {
		const url = await blobDataUrl(shot.blobId);
		if (url) loaded.push(url);
	}
	if (loaded.length === 1) {
		parts.push({
			type: "text",
			text: "下面这张就是用户这一轮发来的图，也就是现在的画面。用户的字是对着这张图说的。不要把它当成外貌备忘，也不要沿用上一拍的旧动作。"
		});
		parts.push({
			type: "image_url",
			image_url: { url: loaded[0] }
		});
		added = true;
	} else if (loaded.length > 1) {
		parts.push({
			type: "text",
			text: "这一轮的图按编号排列。能看成同一刻的不同角度，就写成同一刻。明显是前后不同的时刻，就按编号写中间是怎么过去的，不要从最后一张直接起笔，也不要沿用上一拍的旧动作。"
		});
		loaded.forEach((url, i) => {
			parts.push({
				type: "text",
				text: `下面这张是用户这一轮发来的第 ${i + 1} 张，共 ${loaded.length} 张。不要把它当成外貌备忘。`
			});
			parts.push({
				type: "image_url",
				image_url: { url }
			});
		});
		added = true;
	}
	for (const c of chat.characters) {
		if (!c.lookBlobId) continue;
		const url = await blobDataUrl(c.lookBlobId);
		if (!url) continue;
		const name = c.name.trim() || "角色";
		const note = loaded.length > 1 ? "它没有编号，不算进上面这一轮的图。" : "";
		parts.push({
			type: "text",
			text: `下面这张是${name}的外貌备忘，不是用户这轮发来的图，也不是现在的剧情画面。人设里「外貌备忘」写的就是她；这张图是那一栏的样子，用来认长相、发色瞳色、体型和衣服。剧情里已经换过的衣服或发型，以剧情为准，不要被这张图改回去。${note}`
		});
		parts.push({
			type: "image_url",
			image_url: { url }
		});
		added = true;
	}
	if (!added) return msgs;
	return msgs.map((m, i) => i === last ? {
		...m,
		content: parts
	} : m);
}
function clampUnit(n, min, max) {
	if (!Number.isFinite(n)) return min;
	return Math.min(max, Math.max(min, n));
}
function recentWindow() {
	const s = useApp.getState().settings;
	return (s.chatSource === "api" ? Math.max(4, s.llmParams.contextTurns) : 20) * 2;
}
function foldWindow() {
	const s = useApp.getState().settings;
	const turns = s.chatSource === "api" ? Math.max(4, s.llmParams.contextTurns) : 20;
	return {
		W: turns * 2,
		I: foldIntervalMessages(turns)
	};
}
function userHistoryContent(m, last, standing) {
	const n = messageShots(m).length;
	if (n && last) return formatUserImageTurn(m.content, standing, n);
	if (n && !m.content.trim()) return n > 1 ? `用户那一轮发过 ${n} 张图，没有写字。那一轮已经过去。` : "用户那一轮发过一张图，没有写字。那一轮已经过去。";
	return formatUserForChat(m.content, standing);
}
function historyMessages(chat, upto) {
	const msgs = chat.messages.slice(0, upto ?? chat.messages.length);
	const start = Math.max(0, msgs.length - recentWindow());
	const recent = msgs.slice(start).filter((m) => !m.wechatLog?.voided && (m.role !== "narrator" || m.content));
	const standing = standingDirectives(chat);
	let lastUser = -1;
	for (let i = recent.length - 1; i >= 0; i--) if (recent[i].role === "user") {
		lastUser = i;
		break;
	}
	return recent.map((m, i) => ({
		role: m.role === "user" ? "user" : "assistant",
		content: m.role === "user" ? userHistoryContent(m, i === lastUser, i === lastUser ? standing : []) : stripSpeakerPrefix(replyContextText(m.content), [
			m.characterName,
			chat.name,
			...chat.characters.map((c) => c.name),
			"角色"
		])
	}));
}
async function polishAll(chat, grokModelId, instruction) {
	const style = presetStyle(useApp.getState().settings, "polish", chat);
	const voice = voicePolishExtra(chat);
	const extra = [voice, instruction?.trim() || ""].filter(Boolean).join("\n\n") || void 0;
	return parsePolishJson(await grokOnce({
		task: instruction?.trim() ? "personalize" : "polish",
		grokModelId,
		extraSystem: extra,
		messages: [{
			role: "user",
			content: buildPolishUserContent(chat)
		}],
		...style,
		...voice ? { max_tokens: 6e3 } : {}
	}));
}
async function polishField(chat, grokModelId, field, instruction, charId, onDelta) {
	const char = charId ? chat.characters.find((c) => c.id === charId) : void 0;
	const charIndex = charId ? chat.characters.findIndex((c) => c.id === charId) : -1;
	let current = "";
	if (char && (field === "name" || field === "persona" || field === "speech" || field === "appearance")) current = char[field];
	else if (field === "overview") current = chat.overview;
	else if (field === "opening") current = chat.opening;
	else if (field === "statusBar") current = chat.statusBar;
	const charLabel = char && chat.isMulti ? `角色${charIndex + 1}${char.name ? "「" + char.name + "」" : ""}` : char ? char.name ? `角色「${char.name}」` : "角色" : void 0;
	const voices = field === "persona" && Boolean(char?.personaVoices);
	const payload = {
		task: "field",
		grokModelId,
		extraSystem: fieldPolishHint({
			field,
			instruction,
			current,
			charLabel,
			voices
		}),
		messages: [{
			role: "user",
			content: roleSnapshot(chat)
		}],
		max_tokens: voices ? 4500 : 2e3,
		...presetStyle(useApp.getState().settings, "field", chat)
	};
	if (voices && onDelta) return extractFieldText(await grokStream(payload, (t) => onDelta(stripRoleOutput(t))), field);
	return extractFieldText(await grokOnce(payload), field);
}
async function summarizeMemory(chat, grokModelId, slice, previous, signal, onDelta) {
	const keep = recentWindow();
	const older = slice ?? chat.messages.slice(0, Math.max(0, chat.messages.length - keep));
	if (older.length < 2) throw new Error("memory-skip");
	const dialog = formatMemoryDialog(older);
	if (!dialog.trim()) throw new Error("memory-skip");
	const s = useApp.getState().settings;
	const dest = resolveImageWrite(s.imageModelId);
	const payload = {
		task: "memory",
		grokModelId,
		...imageWriteFields(s.imageModelId),
		...presetStyle(s, "memory", chat),
		params: MEMORY_PARAMS,
		max_tokens: MEMORY_PARAMS.maxTokens,
		messages: [{
			role: "user",
			content: `上一份备忘：\n${previous ?? chat.memory ?? "（无）"}\n\n需要收进去的对白：\n${dialog}`
		}]
	};
	if (!dest.split) payload.grokModelId = grokModelId;
	const clipped = clipMemoryText(await grokStream(payload, (t) => onDelta?.(t), signal));
	if (!isPlausibleMemory(clipped)) throw new Error("memory-invalid");
	return clipped;
}
function nextFoldSlice(chat) {
	const { W, I } = foldWindow();
	return nextAutoSlice(chat.messages.length, chat.memoryUntil || 0, W, I);
}
function imageBrief(chat, opts, cast) {
	const names = chat.characters.map((c) => c.name).filter(Boolean).join("、");
	const insert = chat.isMulti && chat.promptMode === "insert";
	const format = cast === "all" ? wechatGroupCastFormat(chat.characters, "brief", insert) : insert ? multiInsertInstruction(chat.characters, "brief") : chat.isMulti ? "只输出英文 tag 一行，地点写最前。只给在场的人写 char1: ... char2: ...，不在场的整段省略。禁止 JSON，禁止 ENABLED。" : "只输出英文 tag 一行，地点写最前。禁止 JSON。";
	const shot = (opts.shot || "").trim();
	const residual = (opts.residual || opts.last || "").trim();
	const turnUser = cast === "all" ? `这一轮用户（不能用来把任何人排除出画面。姿势、动作、衣服仍只认本镜）：\n${(opts.turnUser || "").trim() || "（无）"}\n\n` : chat.isMulti ? `这一轮用户（只用来判断谁在场；姿势、动作、衣服仍只认本镜）：\n${(opts.turnUser || "").trim() || "（无）"}\n\n` : "";
	return `角色：${names || "（未命名）"}
外貌已由用户写好，不要重复（含发色瞳色体型种族整套衣服）。
成人提示词加强：${chat.adultBoost ? "开" : "关"}
多人：${chat.isMulti ? "是" : "否"}　插入模式：${chat.promptMode}

${IMAGE_SHOT_RULES}

${IMAGE_BG_RULES}

${chat.isMulti ? `${IMAGE_MULTI_RULES}\n\n` : ""}写法：先抽出本镜里最显眼的动作/部位，写成具体真 tag，不要收成 ass focus、naughty face 这种安全词。空格真 tag，禁止下划线。不要写画师质量词和外貌。
用户已发生的动作优先于角色回里写软了的版本，必须写成已经发生，不要停在入口。
成人开着：把画面写成具体真 tag，不要保守。「不要硬塞」只挡住完全无关的内容。
成人关着：对白里看得见的仍写，不额外堆没写到的特写；完全没有性/血腥则不加 nsfw。
只输出标签，不要解释。

${imageLengthRules(chat.imageParams.model, chat.adultBoost)}

本镜（姿势、镜头、正在做的事只认这段）：
${shot || "（无）"}

${turnUser}${chat.memory.trim() ? `长期记忆（只继承没被推翻的状态，不含地点）：\n${chat.memory.trim()}\n` : ""}残留参考（不要继承已结束的动作/体位/朝向，也不要用它决定谁在场）：
${residual || "（无）"}

上一镜地点（对白看不出人在哪时才用，只借人所在的地方）：
${(opts.prevScene || "").trim() || "（无）"}

${format}`;
}
function parseImageTagOutput(text, chat, keepAll = false) {
	const insert = chat.isMulti && chat.promptMode === "insert";
	const roster = (chat.imageParams.characters.length ? chat.imageParams.characters : chat.characters).map((c) => {
		const role = chat.characters.find((r) => r.id === c.id);
		return {
			id: c.id,
			name: (role?.name || c.name || "").trim()
		};
	});
	const json = extractJsonObject(text);
	if (json && (json.base != null || json.chars != null)) {
		const rawChars = {};
		const src = json.chars && typeof json.chars === "object" ? json.chars : {};
		for (const [k, v] of Object.entries(src)) rawChars[k] = typeof v === "string" ? v : v == null ? "" : JSON.stringify(v);
		const { mapped, leftover } = assignCharTags(rawChars, roster);
		const base = sanitizeNaiTags([String(json.base || ""), leftover].filter(Boolean).join(", "));
		const absent = keepAll ? [] : resolveAbsentIds(json.absent, roster);
		const presence = keepAll ? void 0 : presenceFromTags(Object.keys(mapped), absent);
		if (!insert) {
			const absentSet = new Set(absent);
			return {
				base: sanitizeNaiTags([base, ...Object.entries(mapped).filter(([id]) => keepAll || !absentSet.has(id)).map(([, tags]) => tags).filter(Boolean)].filter(Boolean).join(", ")),
				chars: {},
				absent,
				presence
			};
		}
		return {
			base,
			chars: mapped,
			absent,
			presence
		};
	}
	const legacy = !keepAll && chat.isMulti ? legacyPresentIds(text, roster) : void 0;
	return {
		base: sanitizeNaiTags(text.replace(/\n/g, ", ")),
		chars: {},
		absent: [],
		presence: legacy ? {
			mode: "exact",
			ids: legacy
		} : void 0
	};
}
async function writeImageTags(chat, lastText, grokModelId, shotText, prevScene, signal, turnUser, cast, route) {
	const view = cast === "solo" ? {
		...chat,
		isMulti: false
	} : chat;
	const extra = [
		chat.adultBoost ? "成人提示词加强：开。这是最高优先级之一。对白里的动作、部位、体液必须写成具体真 tag，不要收成 ass focus / naughty face。无关内容仍不要加。只输出标签，不要解释。" : "成人提示词加强：关。对白里看得见的仍写具体真 tag，不要额外堆没写到的器官特写。完全没有性/血腥的场面不要加 nsfw。只输出标签，不要解释。",
		imageLengthRules(chat.imageParams.model, chat.adultBoost),
		cast === "solo" ? "" : chat.isMulti || cast === "all" ? IMAGE_MULTI_RULES : "",
		cast === "all" ? "这次名单上的角色全部在场。每个人都要写进画面。禁止把任何人放进 absent，禁止省略任何一个角色的提示词。" : "",
		imageApplyRules(chat)
	].filter(Boolean).join("\n\n");
	const imageModelId = useApp.getState().settings.imageModelId;
	const dest = resolveImageWrite(imageModelId);
	const payload = {
		task: "image",
		extraSystem: extra,
		messages: [{
			role: "user",
			content: imageBrief(view, {
				shot: shotText,
				residual: lastText,
				prevScene,
				turnUser
			}, cast)
		}],
		max_tokens: imageWriteMaxTokens(chat.imageParams.model),
		...imageWriteFields(imageModelId),
		...imagePresetStyle(useApp.getState().settings, chat)
	};
	if (route?.via === "api") Object.assign(payload, route);
	else if (!dest.split) payload.grokModelId = grokModelId;
	return parseImageTagOutput(replyStoryText(await grokOnce(payload, withImageTimeout(signal))), view, cast === "all");
}
function withImageTimeout(user) {
	const timeout = AbortSignal.timeout(IMAGE_GEN_TIMEOUT_MS);
	return user ? AbortSignal.any([user, timeout]) : timeout;
}
function afterPaint() {
	return new Promise((r) => requestAnimationFrame(() => r()));
}
function sleepMs(ms, signal) {
	return new Promise((resolve, reject) => {
		if (signal?.aborted) {
			reject(new DOMException("Aborted", "AbortError"));
			return;
		}
		const timer = setTimeout(() => {
			signal?.removeEventListener("abort", onAbort);
			resolve();
		}, ms);
		const onAbort = () => {
			clearTimeout(timer);
			reject(new DOMException("Aborted", "AbortError"));
		};
		signal?.addEventListener("abort", onAbort, { once: true });
	});
}
function isHopTimeout(e) {
	return e instanceof Error && e.name === "HopTimeout";
}
async function naiHop(body, signal, timeoutMs = NAI_HOP_TIMEOUT_MS) {
	const hop = AbortSignal.timeout(timeoutMs);
	const combined = signal ? AbortSignal.any([signal, hop]) : hop;
	let res;
	try {
		res = await fetch("/api/nai", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body),
			signal: combined
		});
	} catch (e) {
		if (signal?.aborted) throw new DOMException("Aborted", "AbortError");
		const name = e instanceof Error || e instanceof DOMException ? e.name : "";
		if (name === "AbortError" || name === "TimeoutError") {
			const err = /* @__PURE__ */ new Error(body.action === "official" ? "官网生图超时" : "中转站超时，请稍后重试");
			err.name = "HopTimeout";
			throw err;
		}
		throw new Error(imageFailText(e, signal));
	}
	const raw = await res.text();
	let data;
	try {
		data = JSON.parse(raw);
	} catch {
		throw new Error("中转站返回了异常页面");
	}
	if (!data.ok) throw new Error(data.error || "生图失败");
	return data;
}
async function imageFromB64(b64) {
	const bin = atob(b64);
	const arr = new Uint8Array(bin.length);
	for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
	const blob = new Blob([arr], { type: "image/png" });
	return {
		blobId: await saveBlob(blob),
		blob
	};
}
async function generateNai(opts) {
	const settings = useApp.getState().settings;
	const rolled = expandParams(opts.chat.imageParams, settings.random);
	if (rolled.bank && rolled.bank !== settings.random) useApp.getState().setSettings({ random: rolled.bank });
	if (rolled.missing.length) useApp.getState().toast(`模块「${rolled.missing.join("、")}」没有可选项`);
	const params = rolled.params;
	const built = buildNaiPayload({
		params,
		grokTail: opts.grokTail,
		charTails: opts.charTails,
		insertMode: opts.chat.promptMode,
		seed: opts.seed
	});
	const blobId = params.img2imgBlobId || opts.turnImageBlobId || "";
	let img2img;
	if (blobId) {
		const blob = await getImage(blobId);
		if (blob) img2img = {
			image: await blobRawB64(blob),
			strength: clampUnit(params.img2imgStrength ?? .7, .01, .99),
			noise: clampUnit(params.img2imgNoise ?? 0, 0, .99)
		};
	}
	const payload = buildIdlecloudBody(built, params, opts.chat.promptMode, img2img);
	opts.onStart?.();
	const finish = async (b64) => {
		opts.onReceiving?.();
		await afterPaint();
		const saved = await imageFromB64(b64);
		return {
			blobId: saved.blobId,
			seed: built.seed,
			prompt: built.finalPrompt,
			blob: saved.blob
		};
	};
	const base = {
		baseUrl: opts.baseUrl,
		apiKey: opts.apiKey
	};
	if (opts.mode === "official") {
		const parameters = { ...built.parameters };
		let action = "generate";
		if (img2img) {
			action = "img2img";
			parameters.image = img2img.image;
			parameters.strength = img2img.strength;
			parameters.noise = img2img.noise;
		}
		const hop = await naiHop({
			action: "official",
			apiKey: opts.apiKey,
			payload: {
				input: built.input,
				model: built.model,
				action,
				parameters
			}
		}, opts.signal, 1e5);
		if (!hop.image) throw new Error("官网没有返回图片");
		return finish(hop.image);
	}
	const started = Date.now();
	const timedOut = () => Date.now() - started >= IMAGE_DRAW_TIMEOUT_MS;
	let submit;
	while (!submit) {
		if (timedOut()) throw new Error("生图超时");
		try {
			submit = await naiHop({
				...base,
				action: "submit",
				payload
			}, opts.signal);
		} catch (e) {
			if (isHopTimeout(e)) continue;
			throw e;
		}
	}
	if (submit.image) return finish(submit.image);
	if (!submit.jobId && !submit.statusUrl && !submit.fileUrl) throw new Error("中转站没有返回任务");
	let statusUrl = submit.statusUrl;
	let fileUrl = submit.fileUrl;
	let v5 = submit.v5;
	while (!timedOut()) {
		if (fileUrl) {
			try {
				const fetched = await naiHop({
					...base,
					action: "fetch",
					fileUrl,
					v5
				}, opts.signal);
				if (fetched.image) return finish(fetched.image);
			} catch (e) {
				if (!isHopTimeout(e)) throw e;
				continue;
			}
			fileUrl = void 0;
		}
		let poll;
		try {
			poll = await naiHop({
				...base,
				action: "poll",
				jobId: submit.jobId,
				statusUrl
			}, opts.signal);
		} catch (e) {
			if (isHopTimeout(e)) continue;
			throw e;
		}
		if (poll.statusUrl) statusUrl = poll.statusUrl;
		if (poll.image) return finish(poll.image);
		if (poll.fileUrl) {
			fileUrl = poll.fileUrl;
			v5 = poll.v5;
			continue;
		}
		const left = IMAGE_DRAW_TIMEOUT_MS - (Date.now() - started);
		if (left <= 0) break;
		await sleepMs(Math.min(NAI_POLL_MS, left), opts.signal);
	}
	throw new Error("生图超时");
}
function parseGroup(text) {
	if (text.split(/<<<(?:CHAR:([^>]+)|NARRATOR)>>>/g).length === 1) return [{
		name: "",
		content: text.trim()
	}];
	const out = [];
	const tokens = text.split(/(<<<CHAR:[^>]+>>>|<<<NARRATOR>>>)/);
	let current = null;
	let buf = "";
	const flush = () => {
		if (current && buf.trim()) out.push({
			...current,
			content: buf.trim()
		});
		buf = "";
	};
	for (const tok of tokens) {
		const char = tok.match(/^<<<CHAR:([^>]+)>>>$/);
		if (char) {
			flush();
			current = { name: char[1].trim() };
			continue;
		}
		if (tok === "<<<NARRATOR>>>") {
			flush();
			current = {
				name: "旁白",
				narrator: true
			};
			continue;
		}
		buf += tok;
	}
	flush();
	return out.length ? out : [{
		name: "",
		content: text.trim()
	}];
}
function makeUserMessage(content) {
	return {
		id: uid$1("m_"),
		role: "user",
		content,
		images: [],
		createdAt: Date.now()
	};
}
function makeAssistantPlaceholder(chat) {
	const names = chat.characters.map((c) => c.name).filter(Boolean);
	return {
		id: uid$1("m_"),
		role: "assistant",
		characterName: chat.isMulti && chat.multiMode === "together" ? names.join("、") : names[0],
		characterId: chat.characters[0]?.id,
		content: "",
		images: [],
		createdAt: Date.now()
	};
}
function makeImageRecord(partial = {}) {
	return {
		id: uid$1("g_"),
		prompt: "",
		charTails: {},
		negative: "",
		seed: randomSeed(),
		model: "nai-diffusion-4-5-full",
		width: 832,
		height: 1216,
		steps: 28,
		sampler: "k_euler_ancestral",
		status: "uploading",
		createdAt: Date.now(),
		...partial
	};
}
var REPLY_SYSTEM = `你在和用户用手机微信聊天。你就是角色本人，坐在手机前面打字。你知道这是微信，不是面对面说话。
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
var FOLD_SYSTEM = `把下面更早的微信压成一份简短记录，给后面的微信接着用。保留说定的事、人在哪、关系、现在停在哪。用户发过的照片，用一句话留下画面里是什么。表情包如果记录里已经有简述，留下简述，不要另猜。她发过的图，留下提示词里的地点和动作。不要整段抄内心，不要写成小说。只输出正文。`;
var SUMMARY_SYSTEM = `你在给一段手机微信写总结，给主聊天的正文接着用。
你可以看内心，用来理解她当时的态度，但写出来的总结不要抄内心，不要写她没说出口的心理和只有你看得到的小动作。
只写微信上说定的事：定了什么、关系怎样、停在哪。提到她发过的照片时用一句话带过。
不要用书名号，不要用括号。只输出总结正文。`;
var JSON_MARK = "\n\n只返回一个 JSON，不要 markdown，不要解释：\n";
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
function wxBaseline(id) {
	if (id === "reply") return REPLY_SYSTEM.slice(0, Math.max(0, REPLY_SYSTEM.lastIndexOf(JSON_MARK)));
	if (id === "group") return GROUP_SYSTEM.slice(0, Math.max(0, GROUP_SYSTEM.lastIndexOf(JSON_MARK)));
	if (id === "private") return PRIVATE_EXTRA;
	if (id === "fold") return FOLD_SYSTEM;
	return SUMMARY_SYSTEM;
}
function wxCloser(id) {
	const full = id === "reply" ? REPLY_SYSTEM : GROUP_SYSTEM;
	const at = full.lastIndexOf(JSON_MARK);
	if (at < 0) return "";
	return full.slice(at).replace(/^\n+/, "");
}
function emptyWechatSession(charId) {
	return {
		charId,
		lines: [],
		earlier: "",
		folded: 0,
		draft: "",
		pending: [],
		armed: false,
		minimized: false
	};
}
var WECHAT_GROUP = "group";
function wechatIsMulti(chat) {
	return chat.isMulti && chat.characters.length > 1;
}
function emptyRoom() {
	return {
		lines: [],
		earlier: "",
		folded: 0,
		draft: "",
		pending: []
	};
}
function ensureMultiSession(chat, session) {
	if (!wechatIsMulti(chat)) return session;
	const rooms = {};
	for (const c of chat.characters) rooms[c.id] = session.rooms?.[c.id] ?? emptyRoom();
	rooms[WECHAT_GROUP] = session.rooms?.["group"] ?? emptyRoom();
	if (!session.rooms && session.lines.length) {
		const id = chat.characters.some((c) => c.id === session.charId) ? session.charId : chat.characters[0].id;
		rooms[id] = {
			lines: session.lines,
			earlier: session.earlier,
			folded: session.folded,
			draft: session.draft,
			pending: session.pending
		};
	}
	const active = session.activeRoom && rooms[session.activeRoom] ? session.activeRoom : chat.characters.some((c) => c.id === session.charId) ? session.charId : chat.characters[0].id;
	return {
		...session,
		rooms,
		activeRoom: active,
		lines: [],
		earlier: "",
		folded: 0,
		draft: "",
		pending: []
	};
}
function sessionHasLines(session) {
	if (session.rooms) return Object.values(session.rooms).some((room) => room.lines.length > 0);
	return session.lines.length > 0;
}
function wechatTurnText(summary) {
	const s = summary.trim();
	if (!s) return "【已保存的微信】这轮有一段微信聊天，还没有总结。不要编造里面说了什么。";
	return `【已保存的微信】下面是这段手机微信里已经说定的事，不是用户现在开口说的话。\n${s}`;
}
function parseWechatReply(raw, stickerMax, allowLong = false, strict = false) {
	const t = raw.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
	const i = t.indexOf("{");
	const j = t.lastIndexOf("}");
	let bubbles = [];
	let inner = "";
	let sticker = 0;
	if (i >= 0 && j > i) try {
		const o = JSON.parse(t.slice(i, j + 1));
		if (Array.isArray(o.bubbles)) bubbles = o.bubbles.map((x) => typeof x === "string" ? x.trim() : "").filter(Boolean);
		inner = typeof o.inner === "string" ? o.inner.trim() : "";
		sticker = Number(o.sticker) || 0;
	} catch {
		bubbles = [];
	}
	if (!bubbles.length) {
		const salvaged = arrayItems(t, "bubbles").filter((x) => typeof x === "string" && !!x.trim());
		if (salvaged.length) bubbles = salvaged.map((x) => x.trim());
	}
	if (!bubbles.length && !strict) {
		const plain = t.replace(/\{[\s\S]*\}$/, "").trim();
		if (plain && !plain.includes("<<<PROMPT>>>")) bubbles = [plain];
	}
	bubbles = bubbles.slice(0, 3).map((b) => clipBubble(b, allowLong)).filter(Boolean);
	if (!bubbles.some(hasWord)) bubbles = [];
	if (sticker < 1 || sticker > stickerMax) sticker = 0;
	return {
		bubbles,
		inner,
		sticker
	};
}
function endOfValue(src, start) {
	if (src[start] === "\"") {
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
			if (src[j] === "\"") return j + 1;
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
			else if (c === "\"") inStr = false;
			continue;
		}
		if (c === "\"") inStr = true;
		else if (c === "{") depth++;
		else if (c === "}") {
			depth--;
			if (depth === 0) return j + 1;
		}
	}
	return -1;
}
function arrayItems(src, key) {
	const mark = src.search(new RegExp(`"${key}"\\s*:`));
	if (mark < 0) return [];
	const lb = src.indexOf("[", mark);
	if (lb < 0) return [];
	const out = [];
	let i = lb + 1;
	while (i < src.length) {
		const c = src[i];
		if (c === "]") break;
		if (c === " " || c === "\n" || c === "\r" || c === "	" || c === ",") {
			i++;
			continue;
		}
		if (c !== "{" && c !== "\"") break;
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
function oneEdit(a, b) {
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
function matchChar(raw, characters) {
	const name = raw.trim().replace(/^[「『"']+|[」』"']+$/g, "").trim();
	if (!name) return void 0;
	const exact = characters.find((c) => c.name.trim() === name);
	if (exact) return exact;
	const loose = characters.filter((c) => {
		const n = c.name.trim();
		if (!n) return false;
		return n.includes(name) || name.includes(n) || oneEdit(n, name);
	});
	return loose.length === 1 ? loose[0] : void 0;
}
function clipBubble(s, allowLong = false) {
	const t = s.replace(/\s+/g, " ").trim();
	const max = allowLong ? 120 : 40;
	const chars = [...t];
	if (chars.length <= max) return t;
	return chars.slice(0, max).join("").replace(/[，。！？、,.!?]$/, "");
}
function hasWord(s) {
	return /[\u4e00-\u9fffA-Za-z0-9]/.test(s);
}
function cleanSummary(s) {
	return s.replace(/<think>[\s\S]*?<\/think>/gi, "").replace(/[《》]/g, "").replace(/[（）()]/g, "").trim();
}
function sessionOf(chatId) {
	return useApp.getState().wechatSessions[chatId];
}
function patchSession(chatId, fn) {
	const cur = sessionOf(chatId);
	if (!cur) return;
	useApp.getState().setWechatSession(chatId, fn(cur));
}
function charOf(chat, charId) {
	return chat.characters.find((c) => c.id === charId) || chat.characters[0];
}
function personaPack(chat, charId) {
	const c = charOf(chat, charId);
	const extras = [...chat.extras, ...c?.extras ?? []].filter((e) => !e.emphasize && e.body.trim());
	return [
		chat.overview.trim() ? `【要求总览】\n${chat.overview.trim()}` : "",
		c?.name.trim() ? `你扮演${c.name.trim()}。` : "",
		c?.persona.trim() ? `人设：\n${c.persona.trim()}` : "",
		c?.speech.trim() ? `说话方式：\n${c.speech.trim()}` : "",
		c?.appearance.trim() ? `外貌备忘：\n${c.appearance.trim()}` : "",
		!chat.memory.trim() && chat.opening.trim() ? `【开场场景】\n${chat.opening.trim()}` : "",
		extras.length ? `【补丁】\n${extras.map((e) => e.body.trim()).join("\n")}` : "",
		chat.memory.trim() ? `【长期记忆】\n${chat.memory.trim()}` : ""
	].filter(Boolean).join("\n\n");
}
function storyText(m) {
	if (m.wechatLog?.voided) return "";
	if (m.wechatLog) return m.wechatLog.summary ? `微信里说定的：${m.wechatLog.summary}` : "有一段没总结的微信";
	const body = m.role === "user" ? (m.content || "").trim() : replyContextText(stripStatusBody(m.content || "")).trim();
	if (!body) return "";
	return `${m.role === "user" ? "用户" : m.characterName || "她"}：${body}`;
}
function stripStatusBody(text) {
	const i = text.lastIndexOf("状态栏:");
	return i < 0 ? text : text.slice(0, i);
}
function mainRecent(chat) {
	const slice = chat.messages.filter((m) => !m.wechatLog?.voided && (m.role === "user" || m.content.trim())).slice(-12);
	if (!slice.length) return "";
	const lines = slice.map(storyText).filter(Boolean);
	if (!lines.length) return "";
	return `主聊天最近 6 轮，以最后一轮为重，前面只补还没被推翻的事：\n${lines.join("\n")}`;
}
function mainLatest(chat) {
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
function wechatRounds(lines) {
	const rounds = [];
	let cur = [];
	for (const line of lines) if (line.role === "user" && cur.length && (line.continued || cur.some((item) => item.role === "assistant"))) {
		rounds.push(cur);
		cur = [line];
	} else cur.push(line);
	if (cur.length) rounds.push(cur);
	return rounds;
}
function lineImages(line) {
	if (line.images?.length) return line.images;
	if (!line.gen) return [];
	const base = makeImageRecord({
		id: `${line.id}-old`,
		seed: 1,
		createdAt: 0
	});
	if (line.gen.status === "done" && line.gen.blobId) return [{
		...base,
		blobId: line.gen.blobId,
		status: "done"
	}];
	if (line.gen.status === "error") return [{
		...base,
		status: "error",
		error: line.gen.error || "没画成"
	}];
	return [{
		...base,
		status: "generating"
	}];
}
function herPrompt(line) {
	return lineImages(line).filter((g) => g.status === "done" && g.prompt.trim()).at(-1)?.prompt.trim() || "";
}
var STICKER_BRIEF_SYSTEM = `这是一张微信表情包。用一两句中文写它。第一句写画面里有什么，如果图片上有字，就把图片上的字写上。第二句写发它通常是什么意思。这不是正在发生的事，不要写成故事，不要提到某一次聊天。总共不超过 60 个字。只输出这段简述。`;
function packOf(stickers) {
	return stickers.slice(-30);
}
function stickerChoices(pack) {
	if (!pack.length) return "这次没有可用的表情包。sticker 必须是 0。";
	return `下面是你可以发的表情包，按编号。只根据简述选，不合适就填 0。不要把简述里的画面当成正在发生的事，也不要当成用户刚发来的。还没有简述的尽量别选。\n${pack.map((s, i) => `${i + 1}. ${s.brief.trim() || "还没有简述。"}`).join("\n")}`;
}
function cleanBrief(raw) {
	let t = raw.trim().replace(/^```[\w]*\n?/, "").replace(/```$/, "").trim();
	t = t.replace(/^简述[:：]\s*/, "").replace(/\s+/g, " ").trim();
	return t.length > 80 ? t.slice(0, 80) : t;
}
function wechatRoute(chat) {
	const pick = chat.wechatAi;
	if (!pick?.accountId) return { grokModelId: chat.grokModelId };
	const account = (useApp.getState().settings.llmAccounts ?? []).find((a) => a.id === pick.accountId);
	const starred = account?.starred ?? [];
	if (!account) {
		useApp.getState().patchChat(chat.id, { wechatAi: void 0 });
		throw new Error("这个账号已经不在了，请重选");
	}
	if (!pick.model) throw new Error("请先选择模型");
	if (!starred.includes(pick.model)) {
		useApp.getState().patchChat(chat.id, { wechatAi: void 0 });
		throw new Error("这个模型不在收藏里了，请重选");
	}
	return {
		via: "api",
		model: pick.model,
		baseUrl: account.base,
		apiKey: account.key
	};
}
async function describeSticker(blobId, grokModelId, route) {
	const url = await blobDataUrl(blobId);
	if (!url) throw new Error("这张图已经不在了");
	return cleanBrief(await grokOnce({
		task: "wechat",
		extraSystem: STICKER_BRIEF_SYSTEM,
		...route ?? { grokModelId },
		max_tokens: 200,
		messages: [{
			role: "user",
			content: [{
				type: "text",
				text: "看这张表情包，按要求写简述。"
			}, {
				type: "image_url",
				image_url: { url }
			}]
		}]
	}));
}
var briefChain = Promise.resolve();
function enqueueStickerBrief(fn) {
	const run = briefChain.then(fn, fn);
	briefChain = run.then(() => void 0, () => void 0);
	return run;
}
function queueStickerBrief(blobId, grokModelId, route) {
	enqueueStickerBrief(async () => {
		const row = useApp.getState().wechatStickers.find((s) => s.blobId === blobId);
		if (!row || row.brief.trim()) return;
		try {
			const brief = await describeSticker(blobId, grokModelId, route);
			if (!brief) return;
			const now = useApp.getState().wechatStickers;
			const hit = now.find((s) => s.blobId === blobId);
			if (!hit || hit.brief.trim()) return;
			useApp.getState().setWechatStickers(now.map((s) => s.blobId === blobId ? {
				...s,
				brief
			} : s));
		} catch (e) {
			useApp.getState().toast(e instanceof Error ? e.message : "简述没写成");
		}
	});
}
function stickerNote(blobId) {
	return useApp.getState().wechatStickers.find((s) => s.blobId === blobId)?.brief.trim() || "";
}
function lineText(line, withInner, names) {
	const who = line.role === "user" ? "用户" : line.speakerId && names?.[line.speakerId] || "她";
	const bits = [];
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
function modelRounds(session) {
	const rounds = wechatRounds(session.lines);
	const folded = Math.min(session.folded || 0, rounds.length);
	return {
		rounds,
		pending: rounds.slice(folded),
		folded
	};
}
function transcript(session, withInner, names) {
	const { pending } = modelRounds(session);
	const recent = pending.flat().map((line) => lineText(line, withInner, names)).filter(Boolean).join("\n");
	return [session.earlier.trim() ? `更早的微信摘要：\n${session.earlier.trim()}` : "", recent ? `微信记录，以最后一轮为重：\n${recent}` : ""].filter(Boolean).join("\n\n");
}
function turnCue(turns, group, standing) {
	const turn = turns[turns.length - 1];
	if (!turn) return "";
	if (turn.continued) return "用户这一轮没有发新的消息。接着刚才的话题往下聊，不要把上一轮的气泡再发一遍。";
	const texts = turns.map((item) => item.text.trim()).filter(Boolean);
	const attachments = turns.flatMap((item) => item.attachments);
	return [
		group ? "这一轮用户刚发到群里的在下面。按微信回。" : "这一轮用户刚发来的在下面。按微信回。",
		texts.length ? texts.map((text) => formatUserForChat(text, standing)).join("\n\n") : "用户这一轮没有写字。",
		userTurnCaption(attachments, texts.join("\n"))
	].filter(Boolean).join("\n\n");
}
async function pushTurnImages(parts, turns) {
	const photos = turns.flatMap((item) => item.attachments.filter((a) => a.kind === "photo"));
	let photoN = 0;
	for (const photo of photos) {
		photoN += 1;
		const caption = photos.length > 1 ? `下面这张是用户刚在微信里发来的第 ${photoN} 张照片，共 ${photos.length} 张。不是外貌备忘，也不是你眼前的实景。` : "下面这张是用户刚在微信里发来的照片，不是外貌备忘，也不是你眼前的实景。";
		await pushImage(parts, photo.blobId, caption);
	}
	for (const sticker of turns.flatMap((item) => item.attachments.filter((a) => a.kind === "sticker"))) await pushImage(parts, sticker.blobId, "下面这张是表情包，只取它的意思。");
}
async function pushImage(parts, blobId, caption) {
	const url = await blobDataUrl(blobId);
	if (!url) return;
	parts.push({
		type: "text",
		text: caption
	});
	parts.push({
		type: "image_url",
		image_url: { url }
	});
}
async function replyMessages(chat, session, stickers, turns) {
	const standing = standingDirectives(chat);
	const skip = new Set(turns.map((item) => item.id));
	const view = {
		...session,
		lines: session.lines.filter((line) => !skip.has(line.id))
	};
	const parts = [{
		type: "text",
		text: [
			personaPack(chat, session.charId),
			mainRecent(chat),
			transcript(view, true),
			turnCue(turns, false, standing)
		].filter(Boolean).join("\n\n")
	}];
	await pushTurnImages(parts, turns);
	const older = [];
	for (const round of modelRounds(view).pending) for (const line of round) older.push(...line.attachments);
	const keep = older.filter((item) => item.kind === "photo").slice(-4);
	for (const item of keep) await pushImage(parts, item.blobId, "下面这张是前面微信里发过的照片，不是这一拍新发的，也不是你眼前的实景。");
	parts.push({
		type: "text",
		text: stickerChoices(packOf(stickers))
	});
	return [{
		role: "user",
		content: parts
	}];
}
async function maybeFold(chatId, signal) {
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
			...host ? wechatRoute(host) : {},
			messages: [{
				role: "user",
				content: body
			}],
			max_tokens: 500
		}, signal);
		if (signal?.aborted) return;
		const next = cleanSummary(text);
		if (!next) return;
		patchSession(chatId, (s) => ({
			...s,
			earlier: next,
			folded: rounds.length - 12
		}));
	} catch (e) {
		if (signal?.aborted) throw e;
	}
}
var busy$1 = /* @__PURE__ */ new Set();
var jobs = /* @__PURE__ */ new Map();
var textStops = /* @__PURE__ */ new Map();
var textHalt = /* @__PURE__ */ new Set();
var imageStops = /* @__PURE__ */ new Map();
function takeJob(chatId) {
	textStops.get(chatId)?.abort();
	const signal = new AbortController();
	textStops.set(chatId, signal);
	if (textHalt.has(chatId)) {
		textHalt.delete(chatId);
		signal.abort();
	}
	const job = (jobs.get(chatId) ?? 0) + 1;
	jobs.set(chatId, job);
	busy$1.add(chatId);
	return {
		job,
		signal: signal.signal
	};
}
function jobLive(chatId, job) {
	return jobs.get(chatId) === job;
}
function isAbort(e) {
	return (e instanceof DOMException || e instanceof Error) && (e.name === "AbortError" || e.message === "Aborted");
}
function dropDangling(lines) {
	let end = lines.length;
	while (end > 0 && lines[end - 1].continued) end -= 1;
	return lines.slice(0, end);
}
function openUserTurns(lines, turn) {
	if (turn.continued) return [turn];
	const idx = lines.findIndex((line) => line.id === turn.id);
	if (idx < 0) return [turn];
	let start = idx;
	while (start > 0 && lines[start - 1].role === "user" && !lines[start - 1].continued) start -= 1;
	return lines.slice(start, idx + 1);
}
function markerAfter(lines, lineId) {
	const at = lines.findIndex((line) => line.id === lineId);
	if (at < 0) return -1;
	for (let i = at + 1; i < lines.length; i++) if (lines[i].continued) return i;
	return -1;
}
async function runJob(chatId, onTextReady, body) {
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
			busy$1.delete(chatId);
			textStops.delete(chatId);
		}
	}
}
function cutAt(lines, replaceFromId) {
	const base = replaceFromId ? lines : dropDangling(lines);
	if (!replaceFromId) return base;
	const idx = base.findIndex((line) => line.id === replaceFromId);
	if (idx >= 0) return base.slice(0, idx);
	const raw = lines.findIndex((line) => line.id === replaceFromId);
	return raw < 0 ? null : lines.slice(0, raw);
}
function cancelWechat(chatId) {
	const live = textStops.get(chatId);
	if (live) live.abort();
	else textHalt.add(chatId);
}
function stopKey(chatId, lineId) {
	return `${chatId}:${lineId}`;
}
function cancelWechatImage(chatId, lineId) {
	imageStops.get(stopKey(chatId, lineId))?.abort();
}
function clampFold(lines, folded, earlier) {
	if (folded > wechatRounds(lines).length) return {
		folded: 0,
		earlier: ""
	};
	return {
		folded,
		earlier
	};
}
async function completeReply(chat, turn, armed, onTextReady, signal, job) {
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
		max_tokens: wechatMaxTokens(inline ? 1800 : 800)
	}, signal);
	if (!jobLive(chatId, job)) return;
	const allowLong = standingDirectives(chat).length > 0 || turns.some((item) => parseUserMarkup(item.text).directives.length > 0);
	const split = splitChatPrompt(raw);
	const pack = packOf(stickers);
	const parsed = parseWechatReply(split.visible, pack.length, allowLong, Boolean(settings.stWechatActiveId));
	if (!parsed.bubbles.length) throw new Error(wechatFailText(raw));
	const lines = parsed.bubbles.map((bubble) => ({
		id: uid$1("w_"),
		role: "assistant",
		text: bubble,
		attachments: []
	}));
	if (parsed.sticker) {
		const blobId = pack[parsed.sticker - 1]?.blobId;
		if (blobId) lines.push({
			id: uid$1("w_"),
			role: "assistant",
			text: "",
			attachments: [{
				blobId,
				kind: "sticker"
			}]
		});
	}
	if (armed) {
		const fresh = useApp.getState().chats.find((c) => c.id === chatId) ?? chat;
		lines.push({
			id: uid$1("w_"),
			role: "assistant",
			text: "",
			attachments: [],
			images: [makeImageRecord({
				model: fresh.imageParams.model,
				width: fresh.imageParams.width,
				height: fresh.imageParams.height,
				steps: fresh.imageParams.steps,
				sampler: fresh.imageParams.sampler,
				negative: fresh.imageParams.negative,
				...fresh.imageParams.seedLocked && fresh.imageParams.seed != null ? { seed: fresh.imageParams.seed } : {},
				status: "writing",
				source: "auto"
			})]
		});
	}
	lines[lines.length - 1] = {
		...lines[lines.length - 1],
		inner: parsed.inner
	};
	if (!jobLive(chatId, job)) return;
	patchSession(chatId, (s) => ({
		...s,
		lines: [...s.lines, ...lines]
	}));
	onTextReady();
	if (armed) {
		const fresh = useApp.getState().chats.find((c) => c.id === chatId) ?? chat;
		const tags = inline && split.prompt ? parseImageTagOutput(split.prompt, fresh) : null;
		const hasTags = Boolean(tags && (tags.base || Object.keys(tags.chars).length));
		await paintWechat(chat, lines[lines.length - 1].id, "auto", void 0, void 0, hasTags ? tags : void 0);
	}
}
var PRIVATE_EXTRA = `上面列出的群记录，你当时也在场，按已经发生过的事处理。不要把群记录照抄进气泡。
没有列出的其他角色私聊，你没看见。不准在气泡里提起，也不准写进内心。`;
var GROUP_SYSTEM = `你在微信群里。你要一次写出每个在场角色发出的消息。每个角色都是她本人，坐在自己手机前面打字。她们知道这是微信群。
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
function wechatFailText(raw) {
	const t = raw.replace(/<think>[\s\S]*?<\/think>/gi, "").replace(/\s+/g, " ").trim();
	if (!t) return "没写成文字";
	return `没写成文字：${t.length > 40 ? `${t.slice(0, 40)}…` : t}`;
}
function wechatMaxTokens(floor) {
	const slider = useApp.getState().settings.llmParams.maxTokens;
	const n = Number(slider);
	return Math.max(floor, Number.isFinite(n) ? n : 0);
}
function nameMap(chat) {
	return Object.fromEntries(chat.characters.map((c) => [c.id, c.name.trim() || "她"]));
}
function sideText(room, names) {
	const rounds = wechatRounds(room.lines);
	const folded = Math.min(room.folded || 0, rounds.length);
	const pending = rounds.slice(folded);
	if (!pending.length && !room.earlier.trim()) return "";
	const take = room.earlier.trim() ? Math.min(4, pending.length) : Math.min(8, pending.length);
	const recent = pending.slice(-take).flat().map((line) => lineText(line, true, names)).filter(Boolean).join("\n");
	return [room.earlier.trim() ? `更早的摘要：\n${room.earlier.trim()}` : "", recent].filter(Boolean).join("\n\n");
}
function charCard(c) {
	const extras = (c.extras ?? []).filter((e) => !e.emphasize && e.body.trim());
	return [
		`【${c.name.trim() || "她"}】`,
		c.persona.trim() ? `人设：\n${c.persona.trim()}` : "",
		c.speech.trim() ? `说话方式：\n${c.speech.trim()}` : "",
		c.appearance.trim() ? `外貌备忘：\n${c.appearance.trim()}` : "",
		extras.length ? `补丁：\n${extras.map((e) => e.body.trim()).join("\n")}` : ""
	].filter(Boolean).join("\n");
}
function parseGroupReply(raw, chat, stickerMax, allowLong) {
	const t = raw.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
	const i = t.indexOf("{");
	const j = t.lastIndexOf("}");
	let rawBubbles = [];
	const inners = /* @__PURE__ */ new Map();
	const stickers = /* @__PURE__ */ new Map();
	const takeBubble = (item) => {
		const rec = item;
		const name = typeof rec?.name === "string" ? rec.name : "";
		const text = typeof rec?.text === "string" ? clipBubble(rec.text.trim(), allowLong) : "";
		const who = matchChar(name, chat.characters);
		if (!who || !text) return;
		rawBubbles.push({
			id: who.id,
			text
		});
	};
	const takeInner = (name, value) => {
		const who = matchChar(name, chat.characters);
		if (who && typeof value === "string" && value.trim()) inners.set(who.id, value.trim());
	};
	const takeSticker = (name, value) => {
		const who = matchChar(name, chat.characters);
		const n = Number(value) || 0;
		if (who && n >= 1 && n <= stickerMax) stickers.set(who.id, n);
	};
	let parsed = false;
	if (i >= 0 && j > i) try {
		const o = JSON.parse(t.slice(i, j + 1));
		parsed = true;
		if (Array.isArray(o.bubbles)) for (const item of o.bubbles) takeBubble(item);
		if (o.inner && typeof o.inner === "object") for (const [name, value] of Object.entries(o.inner)) takeInner(name, value);
		if (o.sticker && typeof o.sticker === "object") for (const [name, value] of Object.entries(o.sticker)) takeSticker(name, value);
	} catch {
		parsed = false;
	}
	if (!parsed) {
		for (const item of arrayItems(t, "bubbles")) takeBubble(item);
		const innerMark = t.search(/"inner"\s*:/);
		if (innerMark >= 0) {
			const lb = t.indexOf("{", innerMark);
			const end = lb >= 0 ? endOfValue(t, lb) : -1;
			if (end > lb) try {
				const inner = JSON.parse(t.slice(lb, end));
				for (const [name, value] of Object.entries(inner)) takeInner(name, value);
			} catch {}
		}
		const stickerMark = t.search(/"sticker"\s*:/);
		if (stickerMark >= 0) {
			const lb = t.indexOf("{", stickerMark);
			const end = lb >= 0 ? endOfValue(t, lb) : -1;
			if (end > lb) try {
				const sticker = JSON.parse(t.slice(lb, end));
				for (const [name, value] of Object.entries(sticker)) takeSticker(name, value);
			} catch {}
		}
	}
	const counts = /* @__PURE__ */ new Map();
	const capped = [];
	for (const item of rawBubbles) {
		const n = counts.get(item.id) ?? 0;
		if (n >= 3) continue;
		capped.push(item);
		counts.set(item.id, n + 1);
	}
	const ok = /* @__PURE__ */ new Set();
	for (const id of counts.keys()) if (capped.some((b) => b.id === id && hasWord(b.text))) ok.add(id);
	return {
		bubbles: capped.filter((b) => ok.has(b.id)),
		inners,
		stickers
	};
}
async function foldRoom(chat, key, signal) {
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
			messages: [{
				role: "user",
				content: body
			}],
			max_tokens: 400
		}, signal);
		if (signal?.aborted) return;
		const summary = text.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
		if (!summary) return;
		patchSession(chatId, (s) => {
			const rooms = { ...s.rooms ?? {} };
			const cur = rooms[key];
			if (!cur) return s;
			rooms[key] = {
				...cur,
				earlier: summary,
				folded: folded + chunk.length
			};
			return {
				...s,
				rooms
			};
		});
	} catch (e) {
		if (signal?.aborted) throw e;
	}
}
async function multiMessages(chat, session, key, stickers, turns) {
	const standing = standingDirectives(chat);
	const names = nameMap(chat);
	const rooms = session.rooms ?? {};
	const own = rooms[key] ?? emptyRoom();
	const skip = new Set(turns.map((item) => item.id));
	const ownView = {
		...session,
		lines: own.lines.filter((line) => !skip.has(line.id)),
		earlier: own.earlier,
		folded: own.folded,
		rooms: void 0
	};
	const groupCue = key === WECHAT_GROUP;
	let head = "";
	if (groupCue) {
		const privates = chat.characters.map((c) => {
			const text = sideText(rooms[c.id] ?? emptyRoom());
			const name = c.name.trim() || "她";
			return text ? `【只有${name}知道的私聊】\n写${name}的气泡和 inner 时可以用。写其他角色时当这段不存在。\n${text}` : "";
		}).filter(Boolean).join("\n\n");
		head = [
			chat.characters.map(charCard).join("\n\n"),
			chat.overview.trim() ? `【要求总览】\n${chat.overview.trim()}` : "",
			chat.memory.trim() ? `【长期记忆】\n${chat.memory.trim()}` : "",
			mainRecent(chat),
			transcript(ownView, true, names),
			privates,
			turnCue(turns, true, standing)
		].filter(Boolean).join("\n\n");
	} else {
		const groupText = sideText(rooms["group"] ?? emptyRoom(), names);
		head = [
			personaPack(chat, key),
			mainRecent(chat),
			groupText ? `【群记录】\n${groupText}` : "",
			transcript(ownView, true),
			turnCue(turns, false, standing)
		].filter(Boolean).join("\n\n");
	}
	const parts = [{
		type: "text",
		text: head
	}];
	await pushTurnImages(parts, turns);
	parts.push({
		type: "text",
		text: stickerChoices(packOf(stickers))
	});
	return [{
		role: "user",
		content: parts
	}];
}
async function completeMulti(chat, key, turn, armed, onTextReady, signal, job) {
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
	const prevScene = previousWechatPrompt({
		...live,
		lines: room.lines
	}, turn.id);
	const raw = await grokOnce({
		task: "wechat",
		extraSystem: [group ? groupSystem() : [soloSystem(), privateSystem()].filter(Boolean).join("\n\n"), inline ? wechatImageTail(chat, prevScene, group ? "all" : "solo") : ""].filter(Boolean).join("\n\n"),
		...wechatPresetStyle(settings, chat, inline, group),
		...wechatRoute(chat),
		messages: await multiMessages(chat, {
			...live,
			rooms: {
				...live.rooms,
				[key]: room
			}
		}, key, stickers, turns),
		max_tokens: wechatMaxTokens(group ? 1200 + Math.max(1, chat.characters.length) * 900 + (inline ? 600 : 0) : inline ? 2200 : 800)
	}, signal);
	if (!jobLive(chatId, job)) return;
	const allowLong = standingDirectives(chat).length > 0 || turns.some((item) => parseUserMarkup(item.text).directives.length > 0);
	const split = splitChatPrompt(raw);
	const pack = packOf(stickers);
	const lines = [];
	if (group) {
		const parsed = parseGroupReply(split.visible, chat, pack.length, allowLong);
		if (!parsed.bubbles.length) throw new Error(wechatFailText(raw));
		const lastAt = /* @__PURE__ */ new Map();
		parsed.bubbles.forEach((b, i) => lastAt.set(b.id, i));
		parsed.bubbles.forEach((b, i) => {
			const isLast = lastAt.get(b.id) === i;
			lines.push({
				id: uid$1("w_"),
				role: "assistant",
				speakerId: b.id,
				text: b.text,
				attachments: [],
				inner: isLast ? parsed.inners.get(b.id) : void 0
			});
			if (!isLast) return;
			const sticker = parsed.stickers.get(b.id) || 0;
			const blobId = sticker ? pack[sticker - 1]?.blobId : "";
			if (!blobId) return;
			const stickerLine = {
				id: uid$1("w_"),
				role: "assistant",
				speakerId: b.id,
				text: "",
				attachments: [{
					blobId,
					kind: "sticker"
				}]
			};
			const last = lines[lines.length - 1];
			if (last?.inner) {
				stickerLine.inner = last.inner;
				last.inner = void 0;
			}
			lines.push(stickerLine);
		});
	} else {
		const parsed = parseWechatReply(split.visible, pack.length, allowLong, Boolean(settings.stWechatActiveId));
		if (!parsed.bubbles.length) throw new Error(wechatFailText(raw));
		for (const bubble of parsed.bubbles) lines.push({
			id: uid$1("w_"),
			role: "assistant",
			speakerId: key,
			text: bubble,
			attachments: []
		});
		if (parsed.sticker) {
			const blobId = pack[parsed.sticker - 1]?.blobId;
			if (blobId) lines.push({
				id: uid$1("w_"),
				role: "assistant",
				speakerId: key,
				text: "",
				attachments: [{
					blobId,
					kind: "sticker"
				}]
			});
		}
		if (lines.length) lines[lines.length - 1] = {
			...lines[lines.length - 1],
			inner: parsed.inner
		};
	}
	if (!lines.length) throw new Error(wechatFailText(raw));
	if (armed) {
		const fresh = useApp.getState().chats.find((c) => c.id === chatId) ?? chat;
		lines.push({
			id: uid$1("w_"),
			role: "assistant",
			text: "",
			attachments: [],
			images: [makeImageRecord({
				model: fresh.imageParams.model,
				width: fresh.imageParams.width,
				height: fresh.imageParams.height,
				steps: fresh.imageParams.steps,
				sampler: fresh.imageParams.sampler,
				negative: fresh.imageParams.negative,
				...fresh.imageParams.seedLocked && fresh.imageParams.seed != null ? { seed: fresh.imageParams.seed } : {},
				status: "writing",
				source: "auto"
			})]
		});
	}
	if (!jobLive(chatId, job)) return;
	patchSession(chatId, (s) => {
		const rooms = { ...s.rooms ?? {} };
		const cur = rooms[key] ?? emptyRoom();
		rooms[key] = {
			...cur,
			lines: [...cur.lines, ...lines]
		};
		return {
			...s,
			rooms
		};
	});
	onTextReady();
	if (armed) {
		const fresh = useApp.getState().chats.find((c) => c.id === chatId) ?? chat;
		const tags = inline && split.prompt ? parseImageTagOutput(split.prompt, group ? fresh : {
			...fresh,
			isMulti: false
		}, group) : null;
		const hasTags = Boolean(tags && (tags.base || Object.keys(tags.chars).length));
		await paintWechat(chat, lines[lines.length - 1].id, "auto", void 0, void 0, hasTags ? tags : void 0);
	}
}
async function withMultiRoom(chat) {
	const chatId = chat.id;
	let session = sessionOf(chatId);
	if (!session) return null;
	if (!session.rooms) {
		session = ensureMultiSession(chat, session);
		useApp.getState().setWechatSession(chatId, session);
	}
	const key = session.activeRoom && session.rooms?.[session.activeRoom] ? session.activeRoom : chat.characters[0]?.id;
	if (!key || !session.rooms?.[key]) return null;
	return {
		key,
		room: session.rooms[key]
	};
}
async function sendWechat(chat, onTextReady, replaceFromId) {
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
			const turn = {
				id: uid$1("w_"),
				role: "user",
				text,
				attachments: pending
			};
			const fold = clampFold(kept, slot.room.folded || 0, slot.room.earlier);
			if (!jobLive(chatId, job)) return;
			patchSession(chatId, (s) => {
				const rooms = { ...s.rooms ?? {} };
				rooms[slot.key] = {
					...slot.room,
					...fold,
					draft: "",
					pending: [],
					lines: [...kept, turn]
				};
				return {
					...s,
					rooms
				};
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
		const turn = {
			id: uid$1("w_"),
			role: "user",
			text,
			attachments: pending
		};
		const fold = clampFold(kept, session.folded || 0, session.earlier);
		if (!jobLive(chatId, job)) return;
		patchSession(chatId, (s) => ({
			...s,
			...fold,
			draft: "",
			pending: [],
			lines: [...kept, turn]
		}));
		await completeReply(chat, turn, session.armed, ready, signal, job);
	});
}
function canContinue(lines) {
	return [...lines].reverse().find((line) => !line.continued)?.role === "assistant";
}
function dropUnanswered(chatId, key, turnId) {
	if (!jobLive(chatId, jobs.get(chatId) ?? -1)) return;
	patchSession(chatId, (s) => {
		if (key && s.rooms) {
			const rooms = { ...s.rooms };
			const cur = rooms[key];
			if (!cur) return s;
			const idx = cur.lines.findIndex((line) => line.id === turnId);
			if (idx < 0 || cur.lines.slice(idx + 1).some((line) => line.role === "assistant")) return s;
			rooms[key] = {
				...cur,
				lines: cur.lines.filter((line) => line.id !== turnId)
			};
			return {
				...s,
				rooms
			};
		}
		const idx = s.lines.findIndex((line) => line.id === turnId);
		if (idx < 0 || s.lines.slice(idx + 1).some((line) => line.role === "assistant")) return s;
		return {
			...s,
			lines: s.lines.filter((line) => line.id !== turnId)
		};
	});
}
async function replyTail(chat, key, lines, armed, ready, signal, job) {
	chat.id;
	const last = [...lines].reverse().find((line) => line.role === "user" && !line.continued);
	if (!last) return;
	if (key) await completeMulti(chat, key, last, armed, ready, signal, job);
	else await completeReply(chat, last, armed, ready, signal, job);
}
async function startContinue(chat, key, lines, armed, ready, signal, job) {
	const chatId = chat.id;
	const turn = {
		id: uid$1("w_"),
		role: "user",
		text: "",
		attachments: [],
		continued: true
	};
	if (!jobLive(chatId, job)) return;
	if (key) patchSession(chatId, (s) => {
		const rooms = { ...s.rooms ?? {} };
		const cur = rooms[key];
		if (!cur) return s;
		rooms[key] = {
			...cur,
			lines: [...lines, turn]
		};
		return {
			...s,
			rooms
		};
	});
	else patchSession(chatId, (s) => ({
		...s,
		lines: [...lines, turn]
	}));
	try {
		if (key) await completeMulti(chat, key, turn, armed, ready, signal, job);
		else await completeReply(chat, turn, armed, ready, signal, job);
	} catch (e) {
		if (jobLive(chatId, job)) dropUnanswered(chatId, key, turn.id);
		throw e;
	}
}
async function continueWechat(chat, onTextReady) {
	const chatId = chat.id;
	await runJob(chatId, onTextReady, async (signal, job, ready) => {
		if (wechatIsMulti(chat)) {
			const slot = await withMultiRoom(chat);
			if (!slot || !jobLive(chatId, job)) return;
			const lines = dropDangling(slot.room.lines);
			const armed = sessionOf(chatId)?.armed === true;
			if (!canContinue(lines)) {
				if (lines.length !== slot.room.lines.length) patchSession(chatId, (s) => {
					const rooms = { ...s.rooms ?? {} };
					const cur = rooms[slot.key];
					if (!cur) return s;
					rooms[slot.key] = {
						...cur,
						lines
					};
					return {
						...s,
						rooms
					};
				});
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
			if (lines.length !== session.lines.length) patchSession(chatId, (s) => ({
				...s,
				lines
			}));
			await replyTail(chat, null, lines, session.armed, ready, signal, job);
			return;
		}
		await startContinue(chat, null, lines, session.armed, ready, signal, job);
	});
}
async function regenContinueFrom(chat, lineId, onTextReady) {
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
async function regenWechat(chat, lineId, onTextReady) {
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
				const rooms = { ...s.rooms ?? {} };
				rooms[slot.key] = {
					...slot.room,
					...fold,
					lines: kept
				};
				return {
					...s,
					rooms
				};
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
		patchSession(chatId, (s) => ({
			...s,
			...fold,
			lines: kept
		}));
		await completeReply(chat, turn, session.armed, ready, signal, job);
	});
}
function patchLine(chatId, lineId, fn) {
	patchSession(chatId, (s) => {
		if (s.rooms) {
			const rooms = { ...s.rooms };
			for (const [key, room] of Object.entries(rooms)) {
				if (!room.lines.some((line) => line.id === lineId)) continue;
				rooms[key] = {
					...room,
					lines: room.lines.map((line) => line.id === lineId ? fn(line) : line)
				};
				return {
					...s,
					rooms
				};
			}
		}
		return {
			...s,
			lines: s.lines.map((line) => line.id === lineId ? fn(line) : line)
		};
	});
}
function linesHolding(session, lineId) {
	if (session.rooms) {
		for (const room of Object.values(session.rooms)) if (room.lines.some((line) => line.id === lineId)) return room.lines;
	}
	return session.lines;
}
function roomKeyOf(session, lineId) {
	if (!session.rooms) return "";
	for (const [key, room] of Object.entries(session.rooms)) if (room.lines.some((line) => line.id === lineId)) return key;
	return "";
}
function previousWechatPrompt(session, lineId) {
	const lines = linesHolding(session, lineId);
	const idx = lines.findIndex((l) => l.id === lineId);
	for (let i = idx - 1; i >= 0; i--) {
		const prompt = herPrompt(lines[i]);
		if (prompt) return prompt.slice(0, 400);
	}
	return "";
}
async function paintWechat(chat, lineId, mode, custom, customChars, parsedTags) {
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
	const record = writing && (mode === "auto" || mode === "rewrite") ? {
		...writing,
		status: "writing",
		source: mode
	} : makeImageRecord({
		model: freshChat.imageParams.model,
		width: freshChat.imageParams.width,
		height: freshChat.imageParams.height,
		steps: freshChat.imageParams.steps,
		sampler: freshChat.imageParams.sampler,
		negative: freshChat.imageParams.negative,
		...freshChat.imageParams.seedLocked && freshChat.imageParams.seed != null ? { seed: freshChat.imageParams.seed } : {},
		status: needsWrite ? "writing" : "uploading",
		source: mode
	});
	patchLine(chatId, lineId, (cur) => {
		const list = lineImages(cur).filter((g) => g.id !== `${cur.id}-old`);
		const next = list.some((g) => g.id === record.id) ? list.map((g) => g.id === record.id ? record : g) : [...list, record];
		return {
			...cur,
			gen: void 0,
			images: next
		};
	});
	const setImg = (p) => patchLine(chatId, lineId, (cur) => ({
		...cur,
		images: lineImages(cur).map((g) => g.id === record.id ? {
			...g,
			...p
		} : g)
	}));
	const ac = new AbortController();
	const key = stopKey(chatId, lineId);
	imageStops.get(key)?.abort();
	imageStops.set(key, ac);
	try {
		const settings = useApp.getState().settings;
		const auth = naiDrawAuth(settings);
		if (!auth) throw new Error("还没连接生图");
		let grokTail = custom ? sanitizeNaiTags(custom, { stripForbidden: false }) : "";
		let charTails = {};
		if (customChars) for (const [k, v] of Object.entries(customChars)) {
			const t = sanitizeNaiTags(v, { stripForbidden: false });
			if (t) charTails[k] = t;
		}
		if (parsedTags && mode === "auto") {
			grokTail = parsedTags.base;
			if (freshChat.isMulti && settings.allowMulti1boy === false) grokTail = stripStandalone1boy(grokTail);
			charTails = { ...parsedTags.chars };
			if (parsedTags.presence && !wechatIsMulti(freshChat)) {
				const presence = parsedTags.presence;
				useApp.getState().patchChat(chatId, (ch) => {
					const enabledOf = (slotId) => presence.mode === "exact" ? presence.ids.includes(slotId) : !presence.ids.includes(slotId);
					return {
						...ch,
						characters: ch.characters.map((role) => ({
							...role,
							imageEnabled: enabledOf(role.id)
						})),
						imageParams: {
							...ch.imageParams,
							characters: ch.imageParams.characters.map((x) => ({
								...x,
								enabled: enabledOf(x.id)
							}))
						}
					};
				});
			}
		} else if (mode === "same" && prev?.prompt) {
			grokTail = prev.prompt;
			charTails = { ...prev.charTails || {} };
		} else if (mode !== "custom") {
			const now = sessionOf(chatId) ?? session;
			const live = useApp.getState().chats.find((c) => c.id === chatId) ?? freshChat;
			const round = wechatRounds(linesHolding(now, lineId)).find((r) => r.some((l) => l.id === lineId)) ?? [];
			const group = roomKeyOf(now, lineId) === WECHAT_GROUP;
			const nameOf = (id) => live.characters.find((c) => c.id === id)?.name.trim() || "她";
			const bubbles = group ? round.filter((l) => l.role === "assistant" && l.text.trim()).map((l) => `${nameOf(l.speakerId)}：${l.text.trim()}`).join("\n") : round.filter((l) => l.role === "assistant" && l.text.trim()).map((l) => l.text.trim()).join("\n");
			const inner = group ? round.filter((l) => l.inner?.trim()).map((l) => `${nameOf(l.speakerId)}的内心：\n${l.inner?.trim()}`).join("\n\n") : [...round].reverse().find((l) => l.inner)?.inner?.trim() || "";
			const user = round.find((l) => l.role === "user");
			const shot = [
				inner ? group ? `这一轮各人的地点、动作、表情（以这段为重）：\n${inner}` : `这一拍她实际的地点、动作、表情（以这段为重）：\n${inner}` : "",
				bubbles ? group ? `这一轮群里刚发出的微信：\n${bubbles}` : `她刚发出的微信：\n${bubbles}` : "",
				mainLatest(live) ? `主聊天最近一轮，只补背景：\n${mainLatest(live)}` : "",
				user ? formatUserForImage(user.text, standingDirectives(live)) : ""
			].filter(Boolean).join("\n\n");
			const cast = group ? "all" : wechatIsMulti(live) ? "solo" : void 0;
			const tags = await writeImageTags(live, "", live.grokModelId, shot, previousWechatPrompt(now, lineId), ac.signal, user?.text || "", cast, wechatRoute(live));
			grokTail = tags.base;
			charTails = tags.chars;
			if (live.isMulti && useApp.getState().settings.allowMulti1boy === false) grokTail = stripStandalone1boy(grokTail);
			if (tags.presence && !wechatIsMulti(live)) {
				const presence = tags.presence;
				useApp.getState().patchChat(chatId, (ch) => {
					const enabledOf = (slotId) => presence.mode === "exact" ? presence.ids.includes(slotId) : !presence.ids.includes(slotId);
					return {
						...ch,
						characters: ch.characters.map((role) => ({
							...role,
							imageEnabled: enabledOf(role.id)
						})),
						imageParams: {
							...ch.imageParams,
							characters: ch.imageParams.characters.map((x) => ({
								...x,
								enabled: enabledOf(x.id)
							}))
						}
					};
				});
			}
		}
		if (!grokTail && !Object.keys(charTails).length) {
			setImg({
				status: "error",
				error: "提示词写失败"
			});
			return;
		}
		setImg({
			status: "uploading",
			prompt: grokTail,
			charTails
		});
		await afterPaint();
		const live = useApp.getState().chats.find((c) => c.id === chatId) ?? freshChat;
		const roomKey = roomKeyOf(sessionOf(chatId) ?? session, lineId);
		const result = await generateNai({
			chat: wechatIsMulti(live) ? {
				...live,
				imageParams: {
					...live.imageParams,
					characters: live.imageParams.characters.map((slot) => ({
						...slot,
						enabled: roomKey === "group" ? true : roomKey ? slot.id === roomKey : slot.enabled
					}))
				}
			} : live,
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
			}
		});
		setImg({
			status: "done",
			blobId: result.blobId,
			prompt: grokTail,
			charTails,
			seed: result.seed
		});
	} catch (e) {
		const err = imageFailText(e, ac.signal);
		setImg({
			status: "error",
			error: err
		});
		if (err !== "已取消") useApp.getState().toast(err);
	} finally {
		if (imageStops.get(key) === ac) imageStops.delete(key);
	}
}
async function summarizeWechat(chat, session) {
	if (wechatIsMulti(chat) && session.rooms) {
		const names = nameMap(chat);
		const blocks = [...chat.characters.map((c) => {
			const text = sideText(session.rooms?.[c.id] ?? emptyRoom(), names);
			return text ? `和${c.name.trim() || "她"}的私聊：\n${text}` : "";
		}), sideText(session.rooms["group"] ?? emptyRoom(), names) ? `群聊：\n${sideText(session.rooms["group"] ?? emptyRoom(), names)}` : ""].filter(Boolean);
		const text = cleanSummary(await grokOnce({
			task: "wechat",
			extraSystem: summarySystem(),
			...wechatRoute(chat),
			messages: [{
				role: "user",
				content: blocks.join("\n\n") || "（没有内容）"
			}],
			max_tokens: 700
		}));
		if (!text) throw new Error("总结是空的");
		return text;
	}
	const name = charOf(chat, session.charId)?.name.trim() || chat.name || "她";
	const text = cleanSummary(await grokOnce({
		task: "wechat",
		extraSystem: summarySystem(),
		...wechatRoute(chat),
		messages: [{
			role: "user",
			content: `角色是${name}。\n\n${transcript(session, true) || "（没有内容）"}`
		}],
		max_tokens: 500
	}));
	if (!text) throw new Error("总结是空的");
	return text;
}
function detachWechat(chatId) {
	const session = useApp.getState().wechatSessions[chatId];
	if (!session) return null;
	const lines = session.rooms ? Object.values(session.rooms).flatMap((room) => room.lines) : session.lines;
	for (const line of lines) cancelWechatImage(chatId, line.id);
	useApp.getState().setWechatSession(chatId, null);
	if (!lines.length) return null;
	const chat = useApp.getState().chats.find((c) => c.id === chatId);
	const role = chat?.characters.find((c) => c.id === session.charId) || chat?.characters[0];
	const roomNames = chat ? Object.fromEntries([...chat.characters.map((c) => [c.id, c.name.trim() || "角色"]), [WECHAT_GROUP, "群聊"]]) : void 0;
	return {
		id: uid$1("m_"),
		role: "user",
		content: "",
		images: [],
		createdAt: Date.now(),
		wechatLog: {
			charName: session.rooms ? "微信" : role?.name.trim() || chat?.name || "她",
			lines: session.rooms ? [] : session.lines,
			summary: "",
			voided: true,
			...session.rooms ? {
				rooms: session.rooms,
				activeRoom: session.activeRoom,
				roomNames
			} : {}
		}
	};
}
function userTurnCaption(attachments, text) {
	const photos = attachments.filter((a) => a.kind === "photo");
	const sticks = attachments.filter((a) => a.kind === "sticker");
	const bits = [];
	if (photos.length === 1) bits.push(text.trim() ? "用户在微信里发来一张照片。上面的字是对着这张照片说的。这是他用手机发给你看的，不是你眼前的实景，不要把场景改成照片里的地方。按微信回他。" : "用户在微信里发来一张照片。这是他用手机发给你看的，不是你眼前的实景，不要把场景改成照片里的地方。按微信回他。");
	else if (photos.length > 1) bits.push(text.trim() ? `用户在微信里发来 ${photos.length} 张照片，按编号。上面的字是对着这些照片说的。这是他用手机发给你看的，不是你眼前的实景，不要把场景改成照片里的地方。按微信回他。` : `用户在微信里发来 ${photos.length} 张照片，按编号。这是他用手机发给你看的，不是你眼前的实景，不要把场景改成照片里的地方。按微信回他。`);
	if (!text.trim() && photos.length) bits.push("他没有写字。看着照片回，不要当成没说话。");
	if (sticks.length) bits.push("用户在微信里发来一张表情包。看它在表达什么，按这个意思回。不要把画里的人、地方或动作当成正在发生的事。");
	return bits.join("\n");
}
var STATUS_LINE = /^\s*状态栏\s*[:：]\s*$/;
var LOVE_LINE = /^\s*(?:💞|❤️|❤)?\s*好感度\s*[:：]/;
function isLove(line) {
	return LOVE_LINE.test(line);
}
function isQuote(line) {
	return /^\s*💬/.test(line) || /「[^」]*」/.test(line);
}
function readAffinity(text) {
	const m = text.match(/(?:💞|❤️|❤)?\s*好感度\s*[:：]\s*(-?\d+)/);
	if (!m) return null;
	const n = Number(m[1]);
	if (!Number.isFinite(n)) return null;
	return Math.max(-100, Math.min(100, Math.round(n)));
}
function splitField(line) {
	const i = line.search(/[:：]/);
	if (i < 0) return null;
	const title = line.slice(0, i).trim();
	if (!title || isLove(line) || isQuote(line)) return null;
	return {
		title,
		value: line.slice(i + 1).trim()
	};
}
function bareName(line) {
	const t = line.trim();
	if (!t || STATUS_LINE.test(t) || isLove(t) || isQuote(t) || splitField(t)) return null;
	const person = t.match(/^👤\s*(.+)$/);
	if (person) return person[1].replace(/[:：].*$/, "").trim();
	if (t.length > 24 || /[。！？]/.test(t)) return null;
	return t;
}
function parseInner(inner) {
	const m = inner.match(/(-?\d+)\s*(?:Ⅰ|,|，)\s*(.*)$/);
	if (!m) return {
		delta: 0,
		stage: inner.trim()
	};
	return {
		delta: Number(m[1]) || 0,
		stage: m[2].trim()
	};
}
function parseAffinity(text) {
	const lines = text.split("\n");
	const love = lines.find(isLove);
	if (!love) return null;
	const value = readAffinity(love);
	if (value == null) return null;
	const inner = parseInner((love.match(/[\[［]([^\]］]+)[\]］]/) ?? love.match(/[（(]([^）)]+)[）)]/))?.[1] ?? "");
	const quoted = lines.join("\n").match(/「([^」]*)」/);
	let quote = quoted ? quoted[1].trim() : "";
	if (!quote) quote = love.split(/➕|＋|——/).slice(1).join("").trim().replace(/^「|」$/g, "").trim();
	return {
		value,
		delta: inner.delta,
		stage: inner.stage,
		quote
	};
}
function formatDelta(delta) {
	if (delta > 0) return `📈+${delta}`;
	if (delta < 0) return `📉${delta}`;
	return "0";
}
function formatAffinity(a) {
	return `💞好感度:${a.value}[${formatDelta(a.delta)}Ⅰ${a.stage}]\n「${a.quote}」`;
}
function blockToCard(raw, fallback) {
	const lines = raw.split("\n");
	let name = "";
	const fields = [];
	const love = [];
	let seenField = false;
	for (const line of lines) {
		if (!line.trim() || STATUS_LINE.test(line)) continue;
		if (isLove(line) || isQuote(line)) {
			love.push(line);
			continue;
		}
		if (!seenField) {
			const bare = bareName(line);
			if (bare) {
				if (!name) name = bare;
				continue;
			}
		}
		const field = splitField(line);
		if (!field) continue;
		if (/^👤/.test(field.title)) {
			if (!name) name = field.title.replace(/^👤\s*/, "").trim() || field.value;
			continue;
		}
		seenField = true;
		fields.push(field);
	}
	return {
		name: name || fallback,
		lines: fields,
		affinity: parseAffinity(love.join("\n"))
	};
}
function cardsFromStatus(raw, fallback) {
	const chunks = [];
	let chunk = [];
	let seenField = false;
	let seenLove = false;
	let started = false;
	const titles = /* @__PURE__ */ new Set();
	const flush = () => {
		if (chunk.some((line) => line.trim())) chunks.push(chunk);
		chunk = [];
		seenField = false;
		seenLove = false;
		started = false;
		titles.clear();
	};
	for (const line of raw.split("\n")) {
		if (!line.trim() || STATUS_LINE.test(line)) continue;
		const love = isLove(line);
		const field = splitField(line);
		const bare = !love && !field ? bareName(line) : null;
		const repeat = Boolean(field && titles.has(field.title));
		if (started && (Boolean(bare) && (seenField || seenLove) || love && seenLove || repeat)) flush();
		chunk.push(line);
		started = true;
		if (love) seenLove = true;
		if (field && !/^👤/.test(field.title)) {
			seenField = true;
			titles.add(field.title);
		}
	}
	flush();
	return chunks.map((lines, i) => blockToCard(lines.join("\n"), i === 0 ? fallback : ""));
}
/** Pull status blocks and affinity lines out of a reply. Stored text is unchanged. */
function readScene(text, fallbackName = "") {
	const lines = text.split("\n");
	const body = [];
	const cards = [];
	let status = null;
	const flush = () => {
		if (!status) return;
		const raw = status.join("\n").trim();
		status = null;
		if (!raw) return;
		cards.push(...cardsFromStatus(raw, fallbackName));
	};
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		if (STATUS_LINE.test(line)) {
			flush();
			status = [line];
			continue;
		}
		if (status) {
			status.push(line);
			continue;
		}
		if (isLove(line)) {
			const buf = [line];
			while (i + 1 < lines.length && lines[i + 1].trim() && !STATUS_LINE.test(lines[i + 1]) && !isLove(lines[i + 1])) {
				i += 1;
				buf.push(lines[i]);
			}
			const card = blockToCard(buf.join("\n"), fallbackName);
			if (card.affinity || card.lines.length) cards.push(card);
			continue;
		}
		body.push(line);
	}
	flush();
	return {
		body: body.join("\n").replace(/\n{3,}/g, "\n\n").trim(),
		cards
	};
}
function presentScene(text, opts, fallbackName = "") {
	const scene = readScene(text, fallbackName);
	if (!opts.status && !opts.affection) return {
		body: scene.body,
		cards: []
	};
	const cards = scene.cards.map((c) => ({
		...c,
		lines: opts.status ? c.lines : [],
		affinity: opts.affection ? c.affinity : null
	})).filter((c) => c.lines.length > 0 || c.affinity);
	return {
		body: scene.body,
		cards
	};
}
function writeScene(body, cards, nameLine = false) {
	const tail = cards.map((card) => {
		const love = card.affinity ? formatAffinity(card.affinity) : "";
		if (!card.lines.length) return love;
		const head = ["状态栏:"];
		if (nameLine && card.name) head.push(card.name);
		if (love) head.push(love);
		for (const line of card.lines) head.push(`${line.title}:${line.value}`);
		return head.join("\n");
	}).filter(Boolean).join("\n\n");
	return [body.trim(), tail].filter(Boolean).join("\n\n");
}
function affinityUpdates(text) {
	return readScene(text).cards.flatMap((c) => c.affinity ? [{
		name: c.name,
		value: c.affinity.value
	}] : []);
}
var aborts = /* @__PURE__ */ new Map();
var busy = /* @__PURE__ */ new Set();
var memoryEpoch = /* @__PURE__ */ new Map();
var memoryBusy = /* @__PURE__ */ new Set();
var memoryAborts = /* @__PURE__ */ new Map();
var imageAborts = /* @__PURE__ */ new Map();
function imageKey(chatId, msgId) {
	return `${chatId}:${msgId}`;
}
function chat(id) {
	return useApp.getState().chats.find((c) => c.id === id);
}
function patch(id, fn) {
	useApp.getState().patchChat(id, fn);
}
function imageOn() {
	return useApp.getState().settings.chatImage !== false;
}
function lastAssist(c) {
	return [...c.messages].reverse().find((m) => m.role === "assistant" || m.role === "narrator");
}
function bumpMemoryEpoch(id) {
	memoryEpoch.set(id, (memoryEpoch.get(id) ?? 0) + 1);
}
async function sendOpening(id) {
	await runReply(id, null, true);
}
async function sendUser(id, text, shots) {
	const t = text.trim();
	abortChat(id);
	const msg = shots?.length ? stampShots(makeUserMessage(t), shots) : makeUserMessage(t);
	const dropped = detachWechat(id);
	patch(id, (c) => ({
		...c,
		messages: [
			...c.messages,
			...dropped ? [dropped] : [],
			msg
		]
	}));
	await runReply(id, t, false);
}
function abortChat(id) {
	aborts.get(id)?.abort();
	aborts.delete(id);
	for (const [k, ac] of imageAborts) if (k.startsWith(`${id}:`)) {
		ac.abort();
		imageAborts.delete(k);
	}
	invalidateMemory(id);
	busy.delete(id);
	const last = chat(id)?.messages.at(-1);
	if (!last || last.role === "user" || last.content.trim()) return;
	patch(id, (ch) => {
		const tail = ch.messages.at(-1);
		if (!tail || tail.id !== last.id || tail.content.trim()) return ch;
		return {
			...ch,
			messages: ch.messages.slice(0, -1)
		};
	});
}
function replyPending(id) {
	if (!busy.has(id)) return false;
	const last = chat(id)?.messages.at(-1);
	return Boolean(last && last.role !== "user" && !last.content.trim());
}
function cancelImage(chatId, msgId) {
	imageAborts.get(imageKey(chatId, msgId))?.abort();
}
function invalidateMemory(id) {
	bumpMemoryEpoch(id);
	memoryAborts.get(id)?.abort();
	memoryAborts.delete(id);
	memoryBusy.delete(id);
	const hint = useApp.getState().ui.memoryHint;
	if (hint?.chatId === id && hint.state === "generating") useApp.getState().setUI({ memoryHint: null });
}
function cancelMemory(id) {
	memoryAborts.get(id)?.abort();
	memoryAborts.delete(id);
	bumpMemoryEpoch(id);
	memoryBusy.delete(id);
	const hint = useApp.getState().ui.memoryHint;
	if (!hint || hint.chatId === id) useApp.getState().setUI({ memoryHint: {
		chatId: id,
		state: "fail",
		error: "已取消"
	} });
}
function retryMemory(id) {
	runMemory(id);
}
async function regenMessage(id, msgId) {
	abortChat(id);
	const c = chat(id);
	if (!c) return;
	const idx = c.messages.findIndex((m) => m.id === msgId);
	if (idx < 0) return;
	const cut = c.messages.slice(0, idx);
	patch(id, (ch) => ({
		...ch,
		messages: cut,
		...applySnaps(rewindSnaps(ch.memorySnaps, cut.length))
	}));
	bumpMemoryEpoch(id);
	await runReply(id, [...cut].reverse().find((m) => m.role === "user")?.content ?? null, cut.length === 0, true);
}
async function branchFrom(id, msgId) {
	const c = chat(id);
	if (!c) return;
	const idx = c.messages.findIndex((m) => m.id === msgId);
	if (idx < 0) return;
	const keep = idx + 1;
	const copy = {
		...structuredClone(c),
		id: uid$1("chat_"),
		name: `${c.name}(分支)`,
		starred: false,
		isDraft: false,
		createdAt: Date.now(),
		updatedAt: Date.now(),
		messages: structuredClone(c.messages.slice(0, keep)),
		...applySnaps(rewindSnaps(c.memorySnaps, keep))
	};
	useApp.setState((s) => ({
		chats: [...s.chats, copy],
		currentId: copy.id
	}));
	const { db } = await import("../_libs/_.mjs").then((n) => n.o);
	db.chats.put(copy);
	useApp.getState().toast(`已开分支「${copy.name}」`);
}
function applyStream(id, placeholder, full, c0) {
	if (c0.isMulti && c0.multiMode === "group") {
		const mapped = parseGroup(full).map((p, i) => ({
			id: i === 0 ? placeholder.id : placeholder.id + "_" + i,
			role: p.narrator ? "narrator" : "assistant",
			characterName: p.narrator ? void 0 : p.name,
			characterId: c0.characters.find((ch) => ch.name === p.name)?.id,
			content: p.content,
			images: [],
			createdAt: Date.now()
		}));
		patch(id, (c) => {
			const imgs = c.messages.filter((m) => m.id === placeholder.id || m.id.startsWith(placeholder.id + "_")).flatMap((m) => m.images);
			if (mapped.length && imgs.length) mapped[mapped.length - 1].images = imgs;
			const without = c.messages.filter((m) => m.id !== placeholder.id && !m.id.startsWith(placeholder.id + "_"));
			return {
				...c,
				messages: [...without, ...mapped]
			};
		});
	} else patch(id, (c) => ({
		...c,
		messages: c.messages.map((m) => m.id === placeholder.id ? {
			...m,
			content: full
		} : m)
	}));
}
function rememberAffinity(id, placeholderId) {
	const c = chat(id);
	if (!c?.affectionOn) return;
	const mine = c.messages.filter((m) => m.id === placeholderId || m.id.startsWith(placeholderId + "_"));
	const next = { ...c.affections ?? {} };
	let changed = false;
	for (const m of mine) {
		if (m.role !== "assistant") continue;
		const found = affinityUpdates(m.content);
		if (!found.length) continue;
		if (m.characterId && found.length === 1) {
			next[m.characterId] = found[0].value;
			changed = true;
			continue;
		}
		for (const item of found) {
			const who = c.characters.find((ch) => ch.name && item.name && (item.name === ch.name || item.name.includes(ch.name))) ?? (c.characters.length === 1 ? c.characters[0] : void 0);
			if (!who) continue;
			next[who.id] = item.value;
			changed = true;
		}
	}
	if (changed) patch(id, (ch) => ({
		...ch,
		affections: next
	}));
}
function ensureWritingImage(id, placeholder) {
	const live = chat(id);
	if (!live) return;
	const target = lastAssist(live) ?? placeholder;
	if (target.images.some((g) => g.status !== "done" && g.status !== "error")) return;
	const img = makeImageRecord({
		model: live.imageParams.model,
		width: live.imageParams.width,
		height: live.imageParams.height,
		steps: live.imageParams.steps,
		sampler: live.imageParams.sampler,
		negative: live.imageParams.negative,
		seed: live.imageParams.seedLocked && live.imageParams.seed != null ? live.imageParams.seed : randomSeed(),
		status: "writing",
		source: "auto"
	});
	patch(id, (ch) => ({
		...ch,
		messages: ch.messages.map((m) => m.id === target.id ? {
			...m,
			images: [...m.images, img]
		} : m)
	}));
}
async function runWorkshopReply(id, userText, regen) {
	const c0 = chat(id);
	if (!c0) return;
	const ctrl = new AbortController();
	aborts.set(id, ctrl);
	busy.add(id);
	const placeholder = makeAssistantPlaceholder(c0);
	patch(id, (c) => ({
		...c,
		messages: [...c.messages, placeholder]
	}));
	const live = chat(id);
	const hist = historyMessages(live).filter((m) => m.content);
	const msgs = await decorateVision(live, hist);
	const asked = userText ?? [...hist].reverse().find((m) => m.role === "user")?.content ?? "";
	const style = presetStyle(useApp.getState().settings, "workshop", c0);
	try {
		const raw = await grokStream({
			task: "workshop",
			grokModelId: useApp.getState().settings.grokModelId,
			extraSystem: workshopExtra(c0, asked),
			messages: msgs,
			...style
		}, (text) => applyStream(id, placeholder, text, c0), ctrl.signal);
		if (raw) applyStream(id, placeholder, raw, c0);
	} catch (e) {
		if (e.name === "AbortError") return;
		patch(id, (c) => ({
			...c,
			messages: c.messages.map((m) => m.id === placeholder.id ? {
				...m,
				content: m.content || `（回复失败）${e instanceof Error ? e.message : ""}`
			} : m)
		}));
	} finally {
		busy.delete(id);
		if (aborts.get(id) === ctrl) aborts.delete(id);
	}
}
async function runReply(id, userText, opening, regen = false) {
	const c0 = chat(id);
	if (!c0) return;
	if (isWorkshopChat(c0)) {
		await runWorkshopReply(id, userText, regen);
		return;
	}
	const grokModelId = useApp.getState().settings.grokModelId;
	const wantImage = imageOn();
	const imageInChat = wantImage && !resolveImageWrite(useApp.getState().settings.imageModelId).split;
	const ctrl = new AbortController();
	aborts.set(id, ctrl);
	busy.add(id);
	const placeholder = makeAssistantPlaceholder(c0);
	patch(id, (c) => ({
		...c,
		messages: [...c.messages, placeholder]
	}));
	const extra = [
		chatContextBlock(c0, { regen }),
		groupFormatHint(c0, imageInChat),
		openingHint(opening)
	].filter(Boolean).join("\n\n");
	const live = chat(id);
	const prevScene = previousRoundImagePrompt(live.messages, placeholder.id);
	const hist = historyMessages(live).filter((m) => m.content);
	if (opening && hist.length === 0) hist.push({
		role: "user",
		content: formatUserForChat(OPENING_USER, standingDirectives(live))
	});
	const msgs = await decorateVision(live, hist);
	let raw = "";
	let promptStarted = false;
	let streamFailed = false;
	const style = presetStyle(useApp.getState().settings, "chat", c0);
	const post = [style.postHistory, sceneTail(c0)].filter(Boolean).join("\n\n");
	try {
		raw = await grokStream({
			task: "chat",
			grokModelId,
			extraSystem: extra,
			imageSystem: imageInChat ? chatImageSystem(c0, prevScene) : void 0,
			messages: msgs,
			...style,
			...post ? { postHistory: post } : {}
		}, (text) => {
			const split = splitChatPrompt(text);
			applyStream(id, placeholder, split.visible, c0);
			if (imageInChat && split.started && !promptStarted) {
				promptStarted = true;
				ensureWritingImage(id, placeholder);
			}
		}, ctrl.signal);
		if (raw) applyStream(id, placeholder, splitChatPrompt(raw).visible, c0);
	} catch (e) {
		if (e.name === "AbortError") return;
		streamFailed = true;
		const split = splitChatPrompt(raw);
		if (!split.visible.trim()) patch(id, (c) => ({
			...c,
			messages: c.messages.map((m) => m.id === placeholder.id ? {
				...m,
				content: m.content || `（回复失败）${e instanceof Error ? e.message : ""}`
			} : m)
		}));
		else applyStream(id, placeholder, split.visible, c0);
	} finally {
		aborts.delete(id);
		busy.delete(id);
	}
	rememberAffinity(id, placeholder.id);
	const latest = chat(id);
	if (!latest) return;
	const assist = lastAssist(latest);
	const split = splitChatPrompt(raw);
	const visibleOk = Boolean(split.visible.trim() || assist?.content.trim());
	if (wantImage && assist && visibleOk) {
		if (resolveImageWrite(useApp.getState().settings.imageModelId).split) attachImage(id, assist.id, "rewrite", void 0, void 0, void 0, split.visible);
		else {
			if (promptStarted && !split.started && raw) {
				const again = splitChatPrompt(raw);
				if (again.started) Object.assign(split, again);
			}
			const parsed = split.prompt ? parseImageTagOutput(split.prompt, latest) : null;
			if (Boolean(parsed && (parsed.base || Object.keys(parsed.chars).length)) && parsed) attachImage(id, assist.id, "auto", void 0, void 0, parsed);
			else if (!streamFailed || promptStarted) attachImage(id, assist.id, "rewrite", void 0, void 0, void 0, split.visible);
		}
	}
	if (visibleOk) maybeMemory(id);
}
async function attachImage(id, msgId, mode = "auto", custom, customChars, parsed, shotText) {
	if (!imageOn()) return;
	const c = chat(id);
	if (!c) return;
	const msg = c.messages.find((m) => m.id === msgId);
	if (!msg) return;
	if (msg.images.some((g) => g.status !== "done" && g.status !== "error" && g.status !== "writing")) return;
	const settings = useApp.getState().settings;
	const prev = msg.images.filter((g) => g.prompt).at(-1);
	const writing = msg.images.find((g) => g.status === "writing");
	const needsWrite = !parsed && mode !== "custom" && !(mode === "same" && prev?.prompt);
	const img = writing && (mode === "auto" || mode === "rewrite") ? writing : makeImageRecord({
		model: c.imageParams.model,
		width: c.imageParams.width,
		height: c.imageParams.height,
		steps: c.imageParams.steps,
		sampler: c.imageParams.sampler,
		negative: c.imageParams.negative,
		seed: c.imageParams.seedLocked && c.imageParams.seed != null ? c.imageParams.seed : randomSeed(),
		status: needsWrite ? "writing" : "uploading",
		source: mode
	});
	if (!writing || img.id !== writing.id) {
		if (msg.images.some((g) => g.status !== "done" && g.status !== "error")) return;
		patch(id, (ch) => ({
			...ch,
			messages: ch.messages.map((m) => m.id === msgId ? {
				...m,
				images: [...m.images, img]
			} : m)
		}));
	} else patch(id, (ch) => ({
		...ch,
		messages: ch.messages.map((m) => m.id === msgId ? {
			...m,
			images: m.images.map((g) => g.id === img.id ? {
				...g,
				status: "writing",
				source: mode
			} : g)
		} : m)
	}));
	const setImg = (p) => patch(id, (ch) => ({
		...ch,
		messages: ch.messages.map((m) => m.id === msgId ? {
			...m,
			images: m.images.map((g) => g.id === img.id ? {
				...g,
				...p
			} : g)
		} : m)
	}));
	const auth = naiDrawAuth(settings);
	if (!auth) {
		setImg({
			status: "error",
			error: "还没连接生图"
		});
		return;
	}
	const ac = new AbortController();
	const key = imageKey(id, msgId);
	imageAborts.get(key)?.abort();
	imageAborts.set(key, ac);
	try {
		let grokTail = custom ? sanitizeNaiTags(custom, { stripForbidden: false }) : "";
		let charTails = {};
		if (customChars) for (const [k, v] of Object.entries(customChars)) {
			const t = sanitizeNaiTags(v, { stripForbidden: false });
			if (t) charTails[k] = t;
		}
		if (mode !== "custom") {
			if (parsed) {
				grokTail = parsed.base;
				charTails = keepPresentTails(mapCharTails(c, parsed.chars), parsed.presence);
				applyPresence(id, parsed.presence);
				if (c.isMulti && useApp.getState().settings.allowMulti1boy === false) grokTail = stripStandalone1boy(grokTail);
			} else if (mode === "same" && prev?.prompt) {
				grokTail = extractGrokTail(prev.prompt, c.imageParams);
				charTails = { ...prev.charTails || {} };
			} else {
				const live = chat(id) ?? c;
				const standing = standingDirectives(live);
				const { shot, residual } = shotAndResidual(live.messages, msgId, shotText, standing);
				const prevScene = previousRoundImagePrompt(live.messages, msgId);
				const tags = await writeImageTags(live, residual, useApp.getState().settings.grokModelId, shot || msg.content, prevScene, ac.signal, latestUserBefore(live.messages, msgId, standing));
				grokTail = tags.base;
				charTails = keepPresentTails(mapCharTails(live, tags.chars), tags.presence);
				applyPresence(id, tags.presence);
				if (c.isMulti && useApp.getState().settings.allowMulti1boy === false) grokTail = stripStandalone1boy(grokTail);
			}
		}
		if (!grokTail && !Object.keys(charTails).length) {
			setImg({
				status: "error",
				error: "提示词写失败"
			});
			return;
		}
		setImg({
			status: "uploading",
			prompt: grokTail,
			charTails
		});
		await afterPaint();
		const live = chat(id) ?? c;
		const result = await generateNai({
			chat: live,
			grokTail,
			charTails,
			seed: img.seed,
			apiKey: auth.apiKey,
			baseUrl: auth.baseUrl,
			mode: auth.mode,
			turnImageBlobId: turnI2iBlob(live, msgId),
			signal: ac.signal,
			onStart: () => setImg({ status: "generating" }),
			onReceiving: () => {
				if (auth.mode === "proxy") useApp.getState().setCooldown(Date.now() + COOLDOWN_MS);
				setImg({ status: "receiving" });
			}
		});
		setImg({
			status: "done",
			blobId: result.blobId,
			prompt: grokTail,
			charTails,
			seed: result.seed
		});
		const after = chat(id);
		if (after) {
			const firstAssist = after.messages.find((m) => m.role === "assistant" || m.role === "narrator");
			if (firstAssist && firstAssist.id === msgId) patch(id, (ch) => ({
				...ch,
				avatarBlobId: result.blobId
			}));
			else if (!after.avatarBlobId) patch(id, (ch) => ({
				...ch,
				avatarBlobId: result.blobId
			}));
		}
	} catch (e) {
		const err = imageFailText(e, ac.signal);
		setImg({
			status: "error",
			error: err
		});
		if (err !== "已取消") useApp.getState().toast(err);
	} finally {
		if (imageAborts.get(key) === ac) imageAborts.delete(key);
	}
}
function turnI2iBlob(c, msgId) {
	if (c.imageParams.img2imgBlobId) return void 0;
	const idx = c.messages.findIndex((m) => m.id === msgId);
	for (let i = idx - 1; i >= 0; i--) {
		const m = c.messages[i];
		if (m.role === "user") return messageShots(m).find((s) => s.i2i)?.blobId;
	}
}
function mapCharTails(c, chars) {
	const map = {};
	for (const ch of c.imageParams.characters) {
		const roleName = c.characters.find((r) => r.id === ch.id)?.name || "";
		const byId = chars[ch.id];
		const byName = ch.name && chars[ch.name] || roleName && chars[roleName] || "";
		if (byId || byName) map[ch.id] = byId || byName;
	}
	return map;
}
function keepPresentTails(charTails, presence) {
	if (!presence) return charTails;
	if (presence.mode === "exact") {
		const on = new Set(presence.ids);
		const next = {};
		for (const [k, v] of Object.entries(charTails)) if (on.has(k)) next[k] = v;
		return next;
	}
	const off = new Set(presence.ids);
	const next = { ...charTails };
	for (const id of off) delete next[id];
	return next;
}
function applyPresence(id, presence) {
	if (!presence) return;
	patch(id, (ch) => {
		const enabledOf = (slotId) => presence.mode === "exact" ? presence.ids.includes(slotId) : !presence.ids.includes(slotId);
		return {
			...ch,
			characters: ch.characters.map((role) => ({
				...role,
				imageEnabled: enabledOf(role.id)
			})),
			imageParams: {
				...ch.imageParams,
				characters: ch.imageParams.characters.map((x) => ({
					...x,
					enabled: enabledOf(x.id)
				}))
			}
		};
	});
}
function setMemoryHint(chatId, state, extra) {
	if (!state) {
		useApp.getState().setUI({ memoryHint: null });
		return;
	}
	const prev = useApp.getState().ui.memoryHint;
	const keepDraft = state === "generating" && prev?.chatId === chatId ? prev.draft : void 0;
	useApp.getState().setUI({ memoryHint: {
		chatId,
		state,
		error: extra?.error,
		draft: extra?.draft ?? keepDraft
	} });
}
function onMemoryDelta(id) {
	return (t) => {
		const hint = useApp.getState().ui.memoryHint;
		if (hint?.chatId === id && hint.state === "generating") useApp.getState().setUI({ memoryHint: {
			...hint,
			draft: t
		} });
	};
}
async function maybeMemory(id) {
	runMemory(id);
}
async function runMemory(id) {
	const c = chat(id);
	if (!c || isWorkshopChat(c)) return;
	const { W, I } = foldWindow();
	if (memoryCaughtUp(c.messages.length, c.memoryUntil || 0, W, I)) return;
	const slice = nextFoldSlice(c);
	if (!slice) return;
	if (memoryBusy.has(id)) return;
	const nAtStart = c.messages.length;
	const epoch = memoryEpoch.get(id) ?? 0;
	const ctrl = new AbortController();
	memoryAborts.set(id, ctrl);
	memoryBusy.add(id);
	setMemoryHint(id, "generating", { draft: "" });
	try {
		const mem = await summarizeMemory(c, useApp.getState().settings.grokModelId, c.messages.slice(slice.start, slice.end), c.memory, ctrl.signal, onMemoryDelta(id));
		if ((memoryEpoch.get(id) ?? 0) !== epoch) return;
		const live = chat(id);
		if (!live) return;
		if (live.messages.length < slice.end) return;
		const snap = {
			covered: slice.end,
			text: mem,
			foldAt: nAtStart
		};
		patch(id, (ch) => ({
			...ch,
			...applySnaps(pushSnap(ch.memorySnaps, snap))
		}));
		setMemoryHint(id, "ok");
		setTimeout(() => {
			const ui = useApp.getState().ui.memoryHint;
			if (ui?.chatId === id && ui.state === "ok") setMemoryHint(id, null);
		}, 1e3);
	} catch (e) {
		if (e.name === "AbortError") return;
		if ((memoryEpoch.get(id) ?? 0) !== epoch) return;
		setMemoryHint(id, "fail", { error: memoryFailReason(e) });
	} finally {
		if (memoryAborts.get(id) === ctrl) memoryAborts.delete(id);
		memoryBusy.delete(id);
	}
}
async function runManualMemory(id, mode) {
	const c = chat(id);
	if (!c) return false;
	const { W, I } = foldWindow();
	const n = c.messages.length;
	const needed = foldCoveredEnd(n, W, I);
	if (needed < 2) {
		useApp.getState().toast("还不够长，先多聊几轮");
		return false;
	}
	memoryAborts.get(id)?.abort();
	memoryAborts.delete(id);
	memoryBusy.delete(id);
	const epoch = (memoryEpoch.get(id) ?? 0) + 1;
	memoryEpoch.set(id, epoch);
	const ctrl = new AbortController();
	memoryAborts.set(id, ctrl);
	memoryBusy.add(id);
	setMemoryHint(id, "generating", { draft: "" });
	try {
		const grok = useApp.getState().settings.grokModelId;
		const snaps = c.memorySnaps ?? [];
		const delta = onMemoryDelta(id);
		if (mode === "all") {
			const text = await summarizeMemory(c, grok, c.messages.slice(0, needed), "（无）", ctrl.signal, delta);
			patch(id, (ch) => ({
				...ch,
				...applySnaps([{
					covered: needed,
					text,
					foldAt: n
				}])
			}));
		} else if (memoryCaughtUp(n, c.memoryUntil || 0, W, I)) {
			const last = snaps[snaps.length - 1];
			if (!last || last.covered < 2) {
				useApp.getState().toast("还没有可重压的那一截");
				setMemoryHint(id, null);
				return false;
			}
			const prev = snaps[snaps.length - 2];
			const start = prev?.covered ?? 0;
			const text = await summarizeMemory(c, grok, c.messages.slice(start, last.covered), prev?.text ?? "（无）", ctrl.signal, delta);
			patch(id, (ch) => ({
				...ch,
				...applySnaps(pushSnap(ch.memorySnaps, {
					covered: last.covered,
					text,
					foldAt: last.foldAt
				}))
			}));
		} else {
			const start = c.memoryUntil || 0;
			const text = await summarizeMemory(c, grok, c.messages.slice(start, needed), c.memory || "（无）", ctrl.signal, delta);
			patch(id, (ch) => ({
				...ch,
				...applySnaps(pushSnap(ch.memorySnaps, {
					covered: needed,
					text,
					foldAt: n
				}))
			}));
		}
		if ((memoryEpoch.get(id) ?? 0) !== epoch) return false;
		setMemoryHint(id, "ok");
		setTimeout(() => {
			const ui = useApp.getState().ui.memoryHint;
			if (ui?.chatId === id && ui.state === "ok") setMemoryHint(id, null);
		}, 1e3);
		return true;
	} catch (e) {
		if (e.name === "AbortError") return false;
		const reason = memoryFailReason(e);
		useApp.getState().toast(reason === "请求失败" ? "总结失败，旧备忘还在" : `总结失败：${reason}`);
		setMemoryHint(id, "fail", { error: reason });
		return false;
	} finally {
		if (memoryAborts.get(id) === ctrl) memoryAborts.delete(id);
		memoryBusy.delete(id);
	}
}
async function editMessage(id, msgId, text, shots) {
	const c = chat(id);
	if (!c) return;
	const idx = c.messages.findIndex((m) => m.id === msgId);
	if (idx < 0) return;
	const msg = c.messages[idx];
	if (msg.role === "user") {
		abortChat(id);
		bumpMemoryEpoch(id);
		const next = stampShots({
			...msg,
			content: text.trim()
		}, shots ?? []);
		const dropped = detachWechat(id);
		patch(id, (ch) => ({
			...ch,
			messages: [
				...ch.messages.slice(0, idx),
				next,
				...dropped ? [dropped] : []
			],
			...applySnaps(rewindSnaps(ch.memorySnaps, idx))
		}));
		await runReply(id, text.trim(), false);
	} else patch(id, (ch) => ({
		...ch,
		messages: ch.messages.map((m) => m.id === msgId ? {
			...m,
			content: text
		} : m)
	}));
}
var ZH_FIX = {
	solo: "单人",
	"1girl": "1个女孩",
	"1boy": "1个男孩",
	"2girls": "2个女孩",
	"multiple girls": "多个女孩",
	breasts: "胸部",
	"looking at viewer": "看向观众",
	"commentary request": "求评论",
	commentary: "评论",
	highres: "高分辨率",
	absurdres: "超高分辨率",
	"open mouth": "张嘴",
	"closed mouth": "闭嘴",
	"large breasts": "巨乳",
	"small breasts": "贫乳",
	"medium breasts": "中等胸部",
	navel: "肚脐",
	panties: "内裤",
	pussy: "小穴",
	penis: "阴茎",
	ass: "臀部",
	nude: "裸体",
	hetero: "男女",
	sex: "性交",
	sitting: "坐着",
	standing: "站立",
	lying: "躺着",
	"cowboy shot": "七分身",
	"upper body": "上半身",
	"full body": "全身",
	"from behind": "从后方",
	"from side": "侧面",
	"from above": "俯视",
	"from below": "仰视",
	"looking back": "回眸",
	"spread legs": "张开腿",
	"animal ears": "兽耳",
	"cat ears": "猫耳",
	tail: "尾巴",
	blush: "脸红",
	smile: "微笑",
	nipples: "乳头",
	uncensored: "无码",
	censored: "有码",
	cum: "精液",
	vaginal: "阴道插入",
	anal: "肛交",
	fellatio: "口交",
	paizuri: "乳交",
	missionary: "传教士",
	doggystyle: "后入",
	"cowgirl position": "骑乘",
	ahegao: "阿黑颜",
	bondage: "捆绑",
	tentacles: "触手",
	"heart-shaped pupils": "爱心瞳",
	"tongue out": "吐舌",
	sweat: "出汗",
	"steaming body": "热气",
	"pussy juice": "爱液",
	"female ejaculation": "潮吹",
	"object insertion": "物体插入",
	"anal object insertion": "肛门物体插入",
	"anus peek": "肛门窥视",
	"after anal": "肛交之后",
	"anal beads": "肛珠",
	"anal tail": "肛尾",
	"anal fingering": "肛门指交",
	anus: "肛门",
	holding: "手持",
	fang: "虎牙",
	"simple background": "简单背景",
	"white background": "白背景",
	original: "原创",
	translated: "已翻译",
	"bad id": "错误ID",
	"bad pixiv id": "错误pixiv ID"
};
var tags = [];
var loaded = false;
var loading = null;
function loadTags() {
	if (loaded) return Promise.resolve();
	if (loading) return loading;
	loading = fetch("/data/tags.json").then((r) => r.json()).then((rows) => {
		tags = rows.map((t) => ({
			...t,
			c: ZH_FIX[t.e] || t.c
		}));
		loaded = true;
	}).catch(() => {
		tags = Object.entries(ZH_FIX).map(([e, c], i) => ({
			e,
			c,
			n: 1e6 - i
		}));
		loaded = true;
	});
	return loading;
}
function lastToken(text, caret) {
	return (text.slice(0, caret).match(/([^,\n]*)$/)?.[1] ?? "").trim();
}
function suggestTags(text, caret, limit = 40) {
	const q = lastToken(text, caret).toLowerCase();
	if (!q) return {
		q,
		total: 0,
		items: []
	};
	const hits = [];
	for (const t of tags) {
		const en = t.e.toLowerCase();
		const zh = t.c;
		if (en.startsWith(q) || en.includes(q) || zh.includes(q)) hits.push(t);
		if (hits.length >= 400) break;
	}
	hits.sort((a, b) => {
		const as = a.e.toLowerCase().startsWith(q) ? 1 : 0;
		const bs = b.e.toLowerCase().startsWith(q) ? 1 : 0;
		if (as !== bs) return bs - as;
		return b.n - a.n;
	});
	return {
		q,
		total: hits.length,
		items: hits.slice(0, limit)
	};
}
function insertTag(text, caret, tag) {
	const left = text.slice(0, caret);
	const right = text.slice(caret);
	const prefix = left.match(/^(.*?)([^,\n]*)$/s)?.[1] ?? left;
	const next = `${prefix}${prefix && !prefix.endsWith("\n") && !/,\s*$/.test(prefix) ? prefix.endsWith(",") ? " " : ", " : ""}${tag}, `;
	return {
		text: next + right.replace(/^\s*,?\s*/, ""),
		caret: next.length
	};
}
var FONTS = [
	{
		id: "default",
		label: "绘语默认",
		stack: "\"Noto Serif SC\", \"Songti SC\", \"Noto Serif CJK SC\", serif"
	},
	{
		id: "song",
		label: "宋体",
		stack: "\"Songti SC\", \"STSong\", \"SimSun\", \"Noto Serif SC\", serif"
	},
	{
		id: "hei",
		label: "黑体",
		stack: "\"PingFang SC\", \"Noto Sans SC\", \"Microsoft YaHei\", sans-serif"
	},
	{
		id: "kai",
		label: "楷体",
		stack: "\"Kaiti SC\", \"STKaiti\", \"KaiTi\", \"Noto Serif SC\", serif"
	}
];
var SIZE_STEPS = [
	12,
	14,
	16,
	18,
	20,
	22,
	24
];
var PAPERS = [
	{
		name: "绘语米",
		color: "#f3eee6"
	},
	{
		name: "米纸",
		color: "#f7f1e6"
	},
	{
		name: "暖白",
		color: "#f7f4ee"
	},
	{
		name: "燕麦",
		color: "#efe4d2"
	},
	{
		name: "浅杏",
		color: "#f4e4d4"
	},
	{
		name: "豆沙",
		color: "#f0e2de"
	},
	{
		name: "石灰",
		color: "#e6e2dc"
	},
	{
		name: "墨灰",
		color: "#d5d2cc"
	},
	{
		name: "暖灰",
		color: "#e7e1d6"
	},
	{
		name: "淡松绿",
		color: "#e3eee7"
	},
	{
		name: "茶绿",
		color: "#e2eee4"
	},
	{
		name: "青瓷",
		color: "#e3eeea"
	},
	{
		name: "雾青",
		color: "#e2eae9"
	},
	{
		name: "雾蓝",
		color: "#e3e9f1"
	},
	{
		name: "远山蓝",
		color: "#e2e7ee"
	},
	{
		name: "海蓝",
		color: "#e2eef2"
	},
	{
		name: "灰紫",
		color: "#ebe6ee"
	}
];
var ACCENTS = [
	{
		name: "绘语红",
		color: "#9c5348"
	},
	{
		name: "朱砂",
		color: "#c45c4a"
	},
	{
		name: "玫瑰褐",
		color: "#8d5b66"
	},
	{
		name: "暖咖",
		color: "#8a6244"
	},
	{
		name: "橄榄",
		color: "#6d6a45"
	},
	{
		name: "苔绿",
		color: "#5e7a4e"
	},
	{
		name: "青绿",
		color: "#3e6d68"
	},
	{
		name: "松绿",
		color: "#4f6b5a"
	},
	{
		name: "雾蓝",
		color: "#5b7088"
	},
	{
		name: "海蓝",
		color: "#3d6280"
	},
	{
		name: "墨蓝",
		color: "#3a4c66"
	},
	{
		name: "藕紫",
		color: "#7b6a86"
	},
	{
		name: "暮紫",
		color: "#5a4d6c"
	}
];
var BLACKS = [
	"#1a1714",
	"#2c2824",
	"#3a342e",
	"#4a433c",
	"#5a534c",
	"#6e675f",
	"#8a8378"
];
var TEXT_COLORS = [
	"#1a1714",
	"#2c2824",
	"#3f3832",
	"#5c4638",
	"#7a4e42",
	"#9c5348",
	"#6b5344",
	"#3d4a3f",
	"#3e4d5c",
	"#4a3f55",
	"#5a534c",
	"#8a8378"
];
var clamp = (n, min, max) => Math.min(max, Math.max(min, n));
function validHex(raw) {
	if (typeof raw !== "string") return null;
	const s = raw.trim().toLowerCase();
	return /^#[0-9a-f]{6}$/.test(s) ? s : null;
}
function readLook(look) {
	return {
		font: FONTS.some((f) => f.id === look?.font) ? look?.font : "default",
		size: clamp(Math.round(Number(look?.size) || 16), 12, 28),
		weight: clamp(Math.round(Number(look?.weight) || 400), 300, 700),
		narrate: validHex(look?.narrate) ?? "#5a534c",
		say: validHex(look?.say) ?? "#2c2824",
		paper: validHex(look?.paper) ?? "#f3eee6",
		accent: validHex(look?.accent) ?? "#9c5348",
		textPlate: look?.textPlate === true,
		bgImageId: typeof look?.bgImageId === "string" && look.bgImageId ? look.bgImageId : void 0,
		bgFade: clamp(Math.round(Number(look?.bgFade ?? 40)), 0, 80)
	};
}
function swatchName(list, hex) {
	return list.find((item) => item.color.toLowerCase() === hex.toLowerCase())?.name ?? "自定义";
}
function fontStack(id) {
	return FONTS.find((f) => f.id === id)?.stack ?? FONTS[0].stack;
}
function sayWeight(weight) {
	return Math.min(700, weight + 200);
}
function rgbOf(hex) {
	const n = validHex(hex) ?? "#000000";
	return [
		parseInt(n.slice(1, 3), 16),
		parseInt(n.slice(3, 5), 16),
		parseInt(n.slice(5, 7), 16)
	];
}
function mixHex(from, to, t) {
	const a = rgbOf(from);
	const b = rgbOf(to);
	return `#${a.map((v, i) => Math.round(v + (b[i] - v) * t)).map((n) => n.toString(16).padStart(2, "0")).join("")}`;
}
function accentTone(hex) {
	const solid = validHex(hex) ?? "#9c5348";
	return {
		solid,
		hover: mixHex(solid, "#000000", .14),
		soft: mixHex(solid, "#ffffff", .86),
		softDark: mixHex(solid, "#1a1714", .78)
	};
}
function hsvToHex(h, s, v) {
	const hh = (h % 360 + 360) % 360;
	const c = v * s;
	const x = c * (1 - Math.abs(hh / 60 % 2 - 1));
	const m = v - c;
	let r = 0;
	let g = 0;
	let b = 0;
	if (hh < 60) [r, g, b] = [
		c,
		x,
		0
	];
	else if (hh < 120) [r, g, b] = [
		x,
		c,
		0
	];
	else if (hh < 180) [r, g, b] = [
		0,
		c,
		x
	];
	else if (hh < 240) [r, g, b] = [
		0,
		x,
		c
	];
	else if (hh < 300) [r, g, b] = [
		x,
		0,
		c
	];
	else [r, g, b] = [
		c,
		0,
		x
	];
	const hex = (n) => Math.round((n + m) * 255).toString(16).padStart(2, "0");
	return `#${hex(r)}${hex(g)}${hex(b)}`;
}
function hexToHsv(hex) {
	const n = validHex(hex) ?? "#000000";
	const r = parseInt(n.slice(1, 3), 16) / 255;
	const g = parseInt(n.slice(3, 5), 16) / 255;
	const b = parseInt(n.slice(5, 7), 16) / 255;
	const max = Math.max(r, g, b);
	const d = max - Math.min(r, g, b);
	let h = 0;
	if (d) {
		if (max === r) h = (g - b) / d % 6;
		else if (max === g) h = (b - r) / d + 2;
		else h = (r - g) / d + 4;
		h *= 60;
		if (h < 0) h += 360;
	}
	return {
		h,
		s: max === 0 ? 0 : d / max,
		v: max
	};
}
function ImagePick({ onFile, onFiles, onBlob, onBlobs, onStored, onWechat, multiple = false, render }) {
	const album = (0, import_react.useRef)(null);
	const file = (0, import_react.useRef)(null);
	const [open, setOpen] = (0, import_react.useState)(null);
	const take = (list) => {
		const files = [...list ?? []];
		if (!files.length) return;
		if (multiple && onFiles) {
			const images = files.filter(isImageFile);
			if (!images.length) {
				useApp.getState().toast("请选择图片");
				return;
			}
			if (images.length < files.length) useApp.getState().toast("已跳过不是图片的文件");
			onFiles(images);
			return;
		}
		const picked = files[0];
		if (!isImageFile(picked)) {
			useApp.getState().toast("请选择图片");
			return;
		}
		onFile(picked);
	};
	const close = () => setOpen(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		render(() => setOpen("menu")),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			ref: album,
			type: "file",
			accept: "image/*",
			multiple,
			className: "hidden",
			onChange: (e) => {
				take(e.target.files);
				e.target.value = "";
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			ref: file,
			type: "file",
			accept: "*/*",
			multiple,
			className: "hidden",
			onChange: (e) => {
				take(e.target.files);
				e.target.value = "";
			}
		}),
		open === "menu" ? (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-[90] flex items-end justify-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "absolute inset-0 bg-overlay/40",
				"aria-label": "关闭",
				onClick: close
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mb-[max(12px,env(safe-area-inset-bottom))] w-[min(100%-24px,360px)] overflow-hidden rounded-[20px] border border-line bg-card text-ink shadow-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-6 shrink-0" }),
						label: "相册",
						onClick: () => {
							close();
							album.current?.click();
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, { className: "size-6 shrink-0" }),
						label: "文件",
						border: true,
						onClick: () => {
							close();
							file.current?.click();
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-6 shrink-0" }),
						label: "历史",
						border: true,
						onClick: () => setOpen("hist")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-6 shrink-0" }),
						label: "收藏",
						border: true,
						onClick: () => setOpen("fav")
					}),
					onWechat ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-6 shrink-0" }),
						label: "微信",
						border: true,
						onClick: () => {
							close();
							onWechat();
						}
					}) : null
				]
			})]
		}), document.body) : null,
		open === "hist" || open === "fav" ? (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibrarySheet, {
			kind: open,
			onBack: () => setOpen("menu"),
			onClose: close,
			onBlob,
			onBlobs,
			onStored,
			multiple
		}), document.body) : null
	] });
}
function MenuRow({ icon, label, onClick, border }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: `flex w-full items-center gap-3 px-5 py-4 text-left text-[16px] ${border ? "border-t border-line" : ""}`,
		onClick,
		children: [icon, label]
	});
}
function ordered(rows) {
	return [...rows].sort((a, b) => {
		if (Boolean(a.starred) !== Boolean(b.starred)) return a.starred ? -1 : 1;
		return (a.order ?? 0) - (b.order ?? 0);
	});
}
function LibrarySheet({ kind, onBack, onClose, onBlob, onBlobs, onStored, multiple }) {
	const history = useApp((s) => s.history);
	const favorites = useApp((s) => s.favorites);
	const favGroups = useApp((s) => s.favGroups);
	const [selected, setSelected] = (0, import_react.useState)([]);
	const [fold, setFold] = (0, import_react.useState)({});
	const [busy, setBusy] = (0, import_react.useState)(false);
	const pics = sortHistoryNewestFirst(history.filter((h) => h.status === "done" && h.blobId));
	const groupsOf = (parentId) => ordered(favGroups.filter((g) => (g.parentId ?? null) === parentId));
	const favsOf = (groupId) => ordered(favorites.filter((f) => (f.groupId ?? null) === groupId && f.blobId));
	const toggle = (id) => setSelected((cur) => {
		if (!multiple) return cur[0] === id ? [] : [id];
		if (cur.indexOf(id) >= 0) return cur.filter((x) => x !== id);
		return [...cur, id];
	});
	const confirm = async () => {
		if (!selected.length || busy) return;
		setBusy(true);
		try {
			const resolve = (id) => kind === "hist" ? pics.find((h) => h.id === id) : favorites.find((f) => f.id === id);
			if (!multiple) {
				const item = resolve(selected[0]);
				const blobId = item?.blobId;
				if (!blobId || !await getImage(blobId)) {
					useApp.getState().toast("这张图已经不在了");
					return;
				}
				if (onStored && item && "params" in item) {
					const seed = "seed" in item ? item.seed : void 0;
					onStored({
						blobId,
						params: item.params,
						seed
					});
				} else await onBlob?.(blobId);
			} else {
				const blobIds = [];
				for (const id of selected) {
					const blobId = resolve(id)?.blobId;
					if (!blobId || !await getImage(blobId)) {
						useApp.getState().toast("这张图已经不在了");
						return;
					}
					blobIds.push(blobId);
				}
				await onBlobs?.(blobIds);
			}
			onClose();
		} finally {
			setBusy(false);
		}
	};
	const collapsed = (g) => fold[g.id] ?? g.collapsed;
	const renderGroups = (parentId, depth) => groupsOf(parentId).map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: "flex w-full items-center gap-2 py-1.5 text-left",
		style: { paddingLeft: depth * 12 },
		onClick: () => setFold((m) => ({
			...m,
			[g.id]: !collapsed(g)
		})),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-5 shrink-0 items-center justify-center rounded-full border border-line text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, { className: "size-3" })
			}),
			g.starred ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 shrink-0 fill-primary text-primary" }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-0 flex-1 truncate text-[15px] font-bold",
				children: g.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 12 12",
				className: `size-3 shrink-0 fill-current text-muted transition ${collapsed(g) ? "" : "rotate-180"}`,
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 9.2 1.4 3.2h9.2L6 9.2z" })
			})
		]
	}), !collapsed(g) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [renderGroups(g.id, depth + 1), favsOf(g.id).length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbGrid, {
		depth: depth + 1,
		children: favsOf(g.id).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoredThumb, {
			blobId: f.blobId,
			w: f.params.width,
			h: f.params.height,
			active: selected.includes(f.id),
			order: multiple ? selected.indexOf(f.id) + 1 : 0,
			onClick: () => toggle(f.id)
		}, f.id))
	}) : null] }) : null] }, g.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[90] flex flex-col justify-end",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-overlay/40",
			"aria-label": "关闭",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-[86dvh] flex-col overflow-hidden rounded-t-[28px] bg-bg text-ink",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center gap-3 px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-[15px] text-muted",
						onClick: onBack,
						children: "返回"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 text-center text-[16px] font-semibold",
						children: kind === "hist" ? "历史" : "收藏"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-[15px] font-medium text-primary disabled:opacity-40",
						disabled: !selected.length || busy,
						onClick: () => void confirm(),
						children: "确定"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-h-0 flex-1 overflow-y-auto px-3 pb-6",
				children: kind === "hist" ? pics.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbGrid, { children: pics.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoredThumb, {
					blobId: h.blobId,
					w: h.width,
					h: h.height,
					active: selected.includes(h.id),
					order: multiple ? selected.indexOf(h.id) + 1 : 0,
					onClick: () => toggle(h.id)
				}, h.id)) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "py-10 text-center text-[13px] text-muted",
					children: "还没有历史"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					renderGroups(null, 0),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbGrid, { children: favsOf(null).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoredThumb, {
						blobId: f.blobId,
						w: f.params.width,
						h: f.params.height,
						active: selected.includes(f.id),
						order: multiple ? selected.indexOf(f.id) + 1 : 0,
						onClick: () => toggle(f.id)
					}, f.id)) }),
					favorites.every((f) => !f.blobId) && favGroups.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "py-10 text-center text-[13px] text-muted",
						children: "还没有带图的收藏"
					}) : null
				] })
			})]
		})]
	});
}
function ThumbGrid({ children, depth = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-3 grid grid-cols-4 items-start gap-x-1.5 gap-y-2",
		style: { marginLeft: depth * 12 },
		children
	});
}
function StoredThumb({ blobId, w, h, active, order = 0, onClick }) {
	const [url, setUrl] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let dead = false;
		if (blobId) imageUrl(blobId).then((u) => {
			if (!dead) setUrl(u);
		});
		else setUrl(null);
		return () => {
			dead = true;
		};
	}, [blobId]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: `w-full overflow-hidden rounded-[8px] bg-dim ${active ? "ring-2 ring-red-500 ring-offset-1 ring-offset-bg" : ""}`,
			style: { aspectRatio: `${w > 0 ? w : 832} / ${h > 0 ? h : 1216}` },
			onClick,
			children: url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: url,
				alt: "",
				className: "size-full object-contain"
			}) : null
		}), order > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "pointer-events-none absolute right-1 top-1 grid size-5 place-items-center rounded-full bg-red-500 text-[11px] font-medium text-white",
			children: order
		}) : null]
	});
}
function firstChatImageBlob(chat) {
	if (chat.customAvatarBlobId) return chat.customAvatarBlobId;
	if (chat.avatarBlobId) return chat.avatarBlobId;
	for (const m of chat.messages ?? []) {
		const hit = m.images?.find((g) => g.status === "done" && g.blobId);
		if (hit?.blobId) return hit.blobId;
	}
}
function IconBtn({ className, children, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: cn("inline-flex size-10 items-center justify-center rounded-full text-ink/80 transition-colors hover:bg-dim/80 active:scale-[0.98]", className),
		...rest,
		children
	});
}
function PrimaryBtn({ className, children, busy, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: cn("inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-[15px] font-medium text-on-primary shadow-[0_6px_16px_rgb(156_83_72/0.25)] transition hover:bg-primary-hover disabled:opacity-50", className),
		...rest,
		children: [busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), children]
	});
}
function GhostBtn({ className, children, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: cn("inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-line bg-card px-5 text-[15px] font-medium text-ink transition hover:bg-surface disabled:opacity-50", className),
		...rest,
		children
	});
}
function Card({ className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-[22px] border border-line/80 bg-card p-4 shadow-[0_1px_0_rgb(44_40_36/0.03)]", className),
		children
	});
}
function FieldLabel({ children, hint, sub, right }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-1.5 flex items-start justify-between gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[13px] font-medium text-ink",
					children
				}),
				sub ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-0.5",
					children: sub
				}) : null,
				hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-0.5 text-[11px] leading-snug text-muted",
					children: hint
				})
			]
		}), right ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "shrink-0",
			children: right
		}) : null]
	});
}
var TextArea = (0, import_react.forwardRef)(function TextArea({ className, ...rest }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		ref,
		className: cn("min-h-[88px] w-full resize-y rounded-[16px] border border-line bg-surface/60 px-3.5 py-3 text-[14px] leading-relaxed text-ink outline-none placeholder:text-faint focus:border-primary/40 focus:bg-card", className),
		...rest
	});
});
function TextInput({ className, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-12 w-full rounded-full border border-line bg-card px-4 text-[14px] outline-none placeholder:text-faint focus:border-primary/40", className),
		...rest
	});
}
function Switch({ on, onChange, label, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		role: "switch",
		"aria-checked": on,
		"aria-label": label,
		disabled,
		onClick: () => {
			if (!disabled) onChange(!on);
		},
		className: cn("relative inline-flex h-7 w-12 shrink-0 items-center overflow-hidden rounded-full p-0.5 transition-colors", on ? "bg-primary" : "bg-line-strong", disabled && "opacity-40"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block size-6 rounded-full bg-card shadow-sm transition-transform", on ? "translate-x-5" : "translate-x-0") })
	});
}
function Slider({ value, min, max, step, onChange, disabled }) {
	const track = (0, import_react.useRef)(null);
	const span = max - min || 1;
	const pct = Math.min(100, Math.max(0, (value - min) / span * 100));
	const snap = (raw) => {
		const s = step && step > 0 ? step : 1;
		const n = Math.round(raw / s) * s;
		const clamped = Math.min(max, Math.max(min, n));
		const digits = s < .1 ? 2 : s < 1 ? 1 : 0;
		return Number(clamped.toFixed(digits));
	};
	const fromX = (clientX) => {
		const el = track.current;
		if (!el || disabled) return;
		const r = el.getBoundingClientRect();
		const t = r.width <= 0 ? 0 : (clientX - r.left) / r.width;
		onChange(snap(min + t * span));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: track,
		role: "slider",
		"aria-valuemin": min,
		"aria-valuemax": max,
		"aria-valuenow": value,
		"aria-disabled": disabled || void 0,
		className: cn("relative h-6 w-full touch-none select-none", disabled ? "opacity-40" : "cursor-pointer"),
		onPointerDown: (e) => {
			if (disabled) return;
			e.preventDefault();
			e.currentTarget.setPointerCapture(e.pointerId);
			fromX(e.clientX);
		},
		onPointerMove: (e) => {
			if (disabled || !e.currentTarget.hasPointerCapture(e.pointerId)) return;
			fromX(e.clientX);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-line-strong" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-primary",
				style: { width: `${pct}%` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute top-1/2 size-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-card shadow-[0_1px_4px_rgb(44_40_36/0.35)] ring-1 ring-black/10",
				style: { left: `${pct}%` }
			})
		]
	});
}
function ExpandSelect({ value, options, onChange, render, className, align = "center", menu }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	const current = options.find((o) => o.id === value);
	const trigger = current?.short ?? current?.label ?? "";
	(0, import_react.useEffect)(() => {
		const fn = (e) => {
			if (!ref.current?.contains(e.target)) setOpen(false);
		};
		document.addEventListener("mousedown", fn);
		return () => document.removeEventListener("mousedown", fn);
	}, []);
	const menuSide = menu ?? (align === "left" ? "start" : "center");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: cn("relative", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setOpen((v) => !v),
			className: cn("inline-flex h-9 items-center gap-1 rounded-full px-3 text-[14px] font-medium", current?.danger ? "text-danger" : "text-ink", align === "center" ? "justify-center" : "w-full justify-between"),
			children: [render ? render(value, trigger) : trigger, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 text-muted transition", open && "rotate-180") })]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("absolute top-[110%] z-50 min-w-[10rem] overflow-hidden rounded-[20px] border border-line bg-card py-1 shadow-[0_16px_40px_rgb(44_40_36/0.16)]", menuSide === "start" && "left-0", menuSide === "end" && "right-0", menuSide === "center" && (align === "left" ? "left-0 right-0 w-full" : "left-1/2 w-[min(280px,80vw)] -translate-x-1/2")),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-h-[50vh] overflow-auto scroll-thin",
				children: options.map((o) => o.header ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-4 py-1.5 text-center text-[12px] font-medium text-good",
					children: o.label
				}, o.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						onChange(o.id);
						setOpen(false);
					},
					className: cn("flex w-full items-center gap-2 px-4 py-3 text-left text-[14px]", o.danger && "text-danger", o.id === value ? "bg-dim/70 font-medium" : "hover:bg-surface"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 flex-1 truncate",
						children: o.label
					}), o.id === value && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: cn("size-4 shrink-0", o.danger ? "text-danger" : "text-primary") })]
				}, o.id))
			})
		})]
	});
}
function ToastCard({ id, text }) {
	const [held, setHeld] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (held) return;
		const timer = window.setTimeout(() => useApp.getState().dismissToast(id), 2e3);
		return () => window.clearTimeout(timer);
	}, [held, id]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-auto relative w-full max-w-full rounded-[18px] bg-good py-2.5 pl-4 pr-9 text-[13px] leading-snug text-on-primary shadow-lg",
		style: { animation: "toast-in 180ms ease" },
		onClick: () => setHeld(true),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-0 whitespace-pre-wrap break-words",
				children: text
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute right-1.5 top-1.5 grid size-6 place-items-center",
			"aria-label": "关闭",
			onClick: (e) => {
				e.stopPropagation();
				useApp.getState().dismissToast(id);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
		})]
	});
}
function ToastHost() {
	const toasts = useApp((s) => s.toasts);
	if (toasts.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-x-0 top-3 z-[80] flex flex-col items-center gap-2 px-4",
		children: toasts.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastCard, {
			id: t.id,
			text: t.text
		}, t.id))
	});
}
function ZoomImg({ src, className }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "block bg-transparent p-0",
		"aria-label": "查看大图",
		onClick: () => setOpen(true),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt: "",
			className
		})
	}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4",
		onClick: () => setOpen(false),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute right-3 top-[max(12px,env(safe-area-inset-top))] grid size-10 place-items-center rounded-full bg-card text-ink",
			"aria-label": "关闭",
			onClick: () => setOpen(false),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt: "",
			className: "max-h-full max-w-full object-contain",
			onClick: (e) => e.stopPropagation()
		})]
	}) : null] });
}
function Modal({ open, onClose, title, titleAside, children, wide, hideClose }) {
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[70] flex items-start justify-center px-5 pt-[12vh] pb-[max(16px,env(safe-area-inset-bottom))]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "absolute inset-0 bg-overlay",
			onClick: onClose,
			"aria-label": "关闭"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("relative max-h-[calc(100dvh-12vh-16px-env(safe-area-inset-bottom))] w-full overflow-y-auto overscroll-contain rounded-[24px] bg-bg shadow-2xl scroll-thin", wide ? "max-w-lg" : "max-w-sm"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sticky top-0 z-10 flex items-center gap-2 bg-bg px-5 pt-5 pb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "min-w-0 flex-1 truncate text-[18px] font-semibold",
						children: title
					}),
					titleAside,
					!hideClose && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
						onClick: onClose,
						className: "size-9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-5 pb-5",
				children
			})]
		})]
	});
}
function ConfirmHost() {
	const confirm = useApp((s) => s.ui.confirm);
	const setUI = useApp((s) => s.setUI);
	if (!confirm) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
		open: true,
		onClose: () => setUI({ confirm: null }),
		title: confirm.title,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-5 text-[14px] leading-relaxed text-muted",
			children: confirm.body
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
				onClick: () => setUI({ confirm: null }),
				children: "取消"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
				className: confirm.danger ? "bg-danger hover:bg-danger/90" : "",
				onClick: () => {
					confirm.onOk();
					setUI({ confirm: null });
				},
				children: "确定"
			})]
		})]
	});
}
function useCooldown(until) {
	const [, tick] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (until <= Date.now()) return;
		const id = setInterval(() => tick((n) => n + 1), 250);
		return () => clearInterval(id);
	}, [until]);
	return Math.max(0, Math.ceil((until - Date.now()) / 1e3));
}
function Avatar({ url, name, dim, size = 40 }) {
	const ch = (name || "角").slice(0, 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("overflow-hidden rounded-full bg-dim text-center font-medium text-primary", dim && "opacity-55"),
		style: {
			width: size,
			height: size,
			lineHeight: `${size}px`,
			fontSize: size * .4
		},
		children: url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: url,
			alt: "",
			className: "size-full object-cover"
		}) : ch
	});
}
function useBlobUrl(id) {
	const [url, setUrl] = (0, import_react.useState)(() => cachedUrl(id));
	(0, import_react.useEffect)(() => {
		let gone = false;
		if (!id) {
			setUrl(null);
			return;
		}
		const hit = cachedUrl(id);
		if (hit) {
			setUrl(hit);
			return;
		}
		setUrl(null);
		imageUrl(id).then((u) => {
			if (!gone) setUrl(u);
		});
		return () => {
			gone = true;
		};
	}, [id]);
	return url;
}
function ChatAvatar({ chat, name, size, dim }) {
	const url = useBlobUrl(firstChatImageBlob(chat));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
		url,
		name: name ?? chat.name,
		size,
		dim
	});
}
var EMOJI = [
	"😀",
	"😁",
	"😂",
	"🤣",
	"😊",
	"😍",
	"😘",
	"😜",
	"🤔",
	"😅",
	"😭",
	"😡",
	"🥺",
	"😏",
	"😴",
	"🤗",
	"👍",
	"👎",
	"👏",
	"🙏",
	"👌",
	"✌️",
	"🤝",
	"💪",
	"❤️",
	"🧡",
	"💛",
	"💚",
	"💙",
	"💜",
	"🖤",
	"💔",
	"🎉",
	"✨",
	"🔥",
	"⭐",
	"🌙",
	"☀️",
	"🌈",
	"⚡"
];
function WechatDock({ chat }) {
	const session = useApp((s) => s.wechatSessions[chat.id] ?? null);
	const view = useApp((s) => s.ui.wechatView?.chatId === chat.id ? s.ui.wechatView : null);
	if (view) {
		const msg = chat.messages.find((m) => m.id === view.msgId);
		if (msg?.wechatLog) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WechatRead, {
			chat,
			log: msg.wechatLog,
			onClose: () => useApp.getState().setUI({ wechatView: null })
		});
	}
	if (session && !session.minimized) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WechatLive, {
		chat,
		session
	});
	return null;
}
function openWechat(chat) {
	const cur = useApp.getState().wechatSessions[chat.id];
	useApp.getState().setUI({ wechatView: null });
	if (cur) {
		const next = wechatIsMulti(chat) ? ensureMultiSession(chat, {
			...cur,
			minimized: false
		}) : {
			...cur,
			minimized: false
		};
		useApp.getState().setWechatSession(chat.id, next);
		return;
	}
	const fresh = emptyWechatSession(chat.characters[0]?.id || "");
	useApp.getState().setWechatSession(chat.id, wechatIsMulti(chat) ? ensureMultiSession(chat, fresh) : fresh);
}
function WechatLive({ chat, session }) {
	const stickers = useApp((s) => s.wechatStickers);
	const left = useCooldown(useApp((s) => s.settings.cooldownUntil));
	const portrait = chat.imageParams.height >= chat.imageParams.width;
	const [emoji, setEmoji] = (0, import_react.useState)(false);
	const [tab, setTab] = (0, import_react.useState)("emoji");
	const [phase, setPhase] = (0, import_react.useState)("idle");
	const [ask, setAsk] = (0, import_react.useState)(null);
	const [openInner, setOpenInner] = (0, import_react.useState)({});
	const scroller = (0, import_react.useRef)(null);
	const inputRef = (0, import_react.useRef)(null);
	const char = chat.characters.find((c) => c.id === session.charId) || chat.characters[0];
	const multi = wechatIsMulti(chat);
	const active = multi ? session.activeRoom || chat.characters[0]?.id || "group" : "";
	const room = multi ? session.rooms?.[active] : void 0;
	const lines = room ? room.lines : session.lines;
	const draft = room ? room.draft : session.draft;
	const pending = room ? room.pending : session.pending;
	const activeChar = multi && active !== "group" ? chat.characters.find((c) => c.id === active) : char;
	const name = multi ? active === "group" ? "群聊" : activeChar?.name.trim() || "她" : char?.name.trim() || chat.name || "她";
	const [full, setFull] = (0, import_react.useState)(false);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [book, setBook] = (0, import_react.useState)(false);
	const [apiOpen, setApiOpen] = (0, import_react.useState)(false);
	const [editFrom, setEditFrom] = (0, import_react.useState)(null);
	const [editBackup, setEditBackup] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const el = scroller.current;
		if (!el) return;
		el.scrollTop = el.scrollHeight;
	}, [
		lines.length,
		phase,
		pending.length,
		active
	]);
	const patch = (p) => {
		const cur = useApp.getState().wechatSessions[chat.id];
		if (!cur) return;
		useApp.getState().setWechatSession(chat.id, {
			...cur,
			...p
		});
	};
	const patchView = (p) => {
		if (!multi) {
			patch(p);
			return;
		}
		const cur = useApp.getState().wechatSessions[chat.id];
		if (!cur?.rooms || !active) return;
		const rooms = {
			...cur.rooms,
			[active]: {
				...cur.rooms[active],
				...p
			}
		};
		useApp.getState().setWechatSession(chat.id, {
			...cur,
			rooms
		});
	};
	const addPending = (items) => {
		const roomLeft = 9 - pending.length;
		if (roomLeft <= 0) {
			useApp.getState().toast("最多 9 张");
			return;
		}
		if (items.length > roomLeft) useApp.getState().toast("最多 9 张");
		patchView({ pending: [...pending, ...items.slice(0, roomLeft)] });
	};
	const send = () => {
		if (phase === "sum") return;
		if (!draft.trim() && !pending.length) return;
		setPhase("type");
		setEmoji(false);
		const from = editFrom && lines.some((l) => l.id === editFrom) ? editFrom : void 0;
		setEditFrom(null);
		setEditBackup(null);
		setPicked(null);
		sendWechat(chat, () => setPhase("idle"), from);
	};
	const cancelEdit = () => {
		if (editBackup) {
			const back = editBackup;
			if (!multi || back.room === active) patchView({
				draft: back.draft,
				pending: back.pending
			});
			else {
				const cur = useApp.getState().wechatSessions[chat.id];
				const room = cur?.rooms?.[back.room];
				if (cur && room) useApp.getState().setWechatSession(chat.id, {
					...cur,
					rooms: {
						...cur.rooms,
						[back.room]: {
							...room,
							draft: back.draft,
							pending: back.pending
						}
					}
				});
			}
		}
		setEditFrom(null);
		setEditBackup(null);
	};
	const close = () => {
		const cur = useApp.getState().wechatSessions[chat.id];
		if (!cur || !sessionHasLines(cur)) {
			useApp.getState().setWechatSession(chat.id, null);
			return;
		}
		setAsk("close");
	};
	const discard = () => {
		setAsk(null);
		useApp.getState().setWechatSession(chat.id, null);
	};
	const commit = (summary) => {
		const cur = useApp.getState().wechatSessions[chat.id];
		if (!cur) return;
		const log = cur.rooms ? {
			charName: "微信",
			lines: [],
			summary,
			rooms: cur.rooms,
			activeRoom: cur.activeRoom,
			roomNames: Object.fromEntries([...chat.characters.map((c) => [c.id, c.name.trim() || "角色"]), [WECHAT_GROUP, "群聊"]])
		} : {
			charName: name,
			lines: cur.lines,
			summary
		};
		useApp.getState().patchChat(chat.id, (ch) => ({
			...ch,
			messages: [...ch.messages, {
				id: uid$1("m_"),
				role: "user",
				content: wechatTurnText(summary),
				images: [],
				createdAt: Date.now(),
				wechatLog: log
			}]
		}));
		useApp.getState().setWechatSession(chat.id, null);
		setAsk(null);
		setPhase("idle");
	};
	const save = async () => {
		const cur = useApp.getState().wechatSessions[chat.id];
		if (!cur) return;
		setAsk(null);
		setPhase("sum");
		try {
			const summary = await summarizeWechat(chat, cur);
			commit(summary);
		} catch (e) {
			setPhase("idle");
			setAsk("fail");
			useApp.getState().toast(e instanceof Error ? e.message : "总结失败");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell$1, {
		title: phase === "type" ? "正在输入中..." : name,
		onClose: close,
		full,
		onFull: () => setFull((v) => !v),
		onMinimize: () => {
			setFull(false);
			patch({ minimized: true });
		},
		onGear: () => setApiOpen(true),
		scrollRef: scroller,
		overlay: ask ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 z-10 flex items-center justify-center bg-black/30 px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full rounded-2xl bg-white p-4 text-black",
				children: [
					ask === "close" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "absolute right-3 top-3",
						"aria-label": "取消",
						onClick: () => setAsk(null),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 pr-6 text-[15px]",
						children: ask === "close" ? "是否保存当前微信内容到聊天" : "总结没写成"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2",
						children: ask === "close" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "flex-1 rounded-lg border border-neutral-300 py-2",
							onClick: discard,
							children: "不保存"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "flex-1 rounded-lg bg-[#95EC69] py-2",
							onClick: () => void save(),
							children: "保存"
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "flex-1 rounded-lg border border-neutral-300 py-2 text-[13px]",
							onClick: () => commit(""),
							children: "仅保存微信聊天"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "flex-1 rounded-lg bg-[#95EC69] py-2",
							onClick: () => void save(),
							children: "重试"
						})] })
					})
				]
			})
		}) : null,
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			pending.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-2 flex gap-2 overflow-x-auto",
				children: pending.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PendingThumb, {
					blobId: item.blobId,
					mark: item.kind === "sticker" ? "表情" : "",
					onRemove: () => patchView({ pending: pending.filter((_, at) => at !== i) })
				}, `${item.blobId}-${i}`))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-center gap-1.5 text-[13px] text-black",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex h-[22px] items-center gap-1.5 rounded-md border border-neutral-300 bg-white px-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: portrait ? "font-medium text-black" : "text-neutral-400",
								onClick: () => {
									if (!portrait) useApp.getState().patchParams(chat.id, {
										width: chat.imageParams.height,
										height: chat.imageParams.width
									});
								},
								children: "竖图"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-neutral-300",
								children: "|"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: !portrait ? "font-medium text-black" : "text-neutral-400",
								onClick: () => {
									if (portrait) useApp.getState().patchParams(chat.id, {
										width: chat.imageParams.height,
										height: chat.imageParams.width
									});
								},
								children: "横图"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: `mx-auto inline-flex h-[22px] items-center rounded-md border px-2 ${session.armed ? "border-red-500 text-red-500" : "border-neutral-300 text-neutral-500"}`,
						onClick: () => patch({ armed: !session.armed }),
						children: left > 0 ? `${left}s` : "可生图"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: `inline-flex h-[22px] items-center rounded-md border border-neutral-300 px-1.5 ${chat.adultBoost ? "font-medium text-black" : "text-neutral-400"}`,
						onClick: () => useApp.getState().patchChat(chat.id, { adultBoost: !chat.adultBoost }),
						children: "成人提示词"
					})
				]
			}),
			multi ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex gap-1.5 overflow-x-auto",
				children: [chat.characters.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `shrink-0 rounded-full border px-2 py-0.5 text-[12px] ${c.id === active ? "border-red-500 text-red-500" : "border-neutral-300 text-neutral-500"}`,
					onClick: () => patch({ activeRoom: c.id }),
					children: c.name.trim() || "角色"
				}, c.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `shrink-0 rounded-full border px-2 py-0.5 text-[12px] ${active === "group" ? "border-red-500 text-red-500" : "border-neutral-300 text-neutral-500"}`,
					onClick: () => patch({ activeRoom: WECHAT_GROUP }),
					children: "群聊"
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end gap-1.5",
				children: [
					emoji ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-9 shrink-0 place-items-center text-neutral-500",
						onClick: () => setEmoji(false),
						"aria-label": "收起表情",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						ref: inputRef,
						value: draft,
						rows: 1,
						className: "max-h-24 min-h-9 flex-1 resize-none rounded-md bg-white px-3 py-2 text-[15px] text-black outline-none",
						onChange: (e) => patchView({ draft: e.target.value })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: `grid size-9 shrink-0 place-items-center ${emoji ? "text-red-500" : "text-neutral-600"}`,
						"aria-label": "表情",
						onClick: () => setEmoji((v) => !v),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smile, { className: "size-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePick, {
						multiple: true,
						onFile: () => void 0,
						onFiles: (files) => void addFiles(files, addPending),
						onBlobs: (ids) => void addBlobs(ids, "photo", addPending),
						render: (open) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-9 shrink-0 place-items-center text-neutral-600",
							"aria-label": "添加",
							onClick: open,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-6" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-9 shrink-0 place-items-center rounded-md bg-[#95EC69] text-black disabled:opacity-40",
						"aria-label": phase === "type" ? "停止" : "发送",
						disabled: phase === "sum" || phase !== "type" && !draft.trim() && !pending.length,
						onClick: () => {
							if (phase === "type") {
								cancelWechat(chat.id);
								return;
							}
							send();
						},
						children: phase === "type" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-[2px] bg-neutral-600" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-5" })
					})
				]
			}),
			editFrom ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center pt-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-[12px] text-neutral-500",
					onClick: cancelEdit,
					children: "取消编辑"
				})
			}) : null,
			emoji ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmojiPanel, {
				tab,
				setTab,
				stickers,
				onEmoji: (ch) => {
					patchView({ draft: draft + ch });
					inputRef.current?.focus();
				},
				onSticker: (blobId) => addPending([{
					blobId,
					kind: "sticker"
				}]),
				onDeleteSticker: (blobId) => {
					useApp.getState().setWechatStickers(useApp.getState().wechatStickers.filter((s) => s.blobId !== blobId));
				},
				onAddSticker: (blobId) => {
					useApp.getState().setWechatStickers([...useApp.getState().wechatStickers, {
						blobId,
						brief: ""
					}]);
					try {
						queueStickerBrief(blobId, chat.grokModelId, wechatRoute(chat));
					} catch (e) {
						useApp.getState().toast(e instanceof Error ? e.message : "请重选模型");
					}
				},
				onOpenBook: () => setBook(true)
			}) : null
		] }),
		children: [
			book ? (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickerBook, {
				chat,
				grokModelId: chat.grokModelId,
				onClose: () => setBook(false)
			}), document.body) : null,
			apiOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WechatApiDialog, {
				chat,
				onClose: () => setApiOpen(false)
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thread, {
				chat,
				name,
				lines,
				names: multi && active === "group",
				speakerId: multi && active !== "group" ? active : void 0,
				openInner,
				toggleInner: (id) => setOpenInner((m) => ({
					...m,
					[id]: !m[id]
				})),
				picked,
				onPick: (id) => setPicked((cur) => cur === id ? null : id),
				onRegen: (id) => {
					cancelEdit();
					setPicked(null);
					setPhase("type");
					regenWechat(chat, id, () => setPhase("idle"));
				},
				onRegenNode: (id) => {
					cancelEdit();
					setPicked(null);
					setPhase("type");
					regenContinueFrom(chat, id, () => setPhase("idle"));
				},
				onEdit: (line) => {
					setEditBackup((prev) => prev ?? {
						room: active,
						draft,
						pending: pending.map((item) => ({ ...item }))
					});
					patchView({
						draft: line.text,
						pending: line.attachments.map((item) => ({ ...item }))
					});
					setEditFrom(line.id);
					setPicked(null);
				}
			}),
			phase !== "sum" && ([...lines].reverse().find((line) => !line.continued)?.role === "assistant" || phase === "type") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center py-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "rounded-full border border-neutral-300 bg-white px-5 py-1 text-[14px]",
					onClick: () => {
						cancelEdit();
						setPhase("type");
						continueWechat(chat, () => setPhase("idle"));
					},
					children: "继续"
				})
			}) : null,
			phase === "sum" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "py-2 text-center text-[12px] text-neutral-500",
				children: "正在总结"
			}) : null
		]
	});
}
function WechatRead({ chat, log, onClose }) {
	const [openInner, setOpenInner] = (0, import_react.useState)({});
	const [full, setFull] = (0, import_react.useState)(false);
	const rooms = log.rooms;
	const tabs = rooms ? readRoomTabs(chat, log) : [];
	const [room, setRoom] = (0, import_react.useState)(() => initialRoom(chat, log));
	const lines = rooms ? rooms[room]?.lines ?? [] : log.lines;
	const group = Boolean(rooms && room === "group");
	const title = !rooms ? log.charName || "微信" : group ? "群聊" : chat.characters.find((c) => c.id === room)?.name.trim() || log.roomNames?.[room] || "微信";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell$1, {
		title,
		onClose,
		full,
		onFull: () => setFull((v) => !v),
		footer: tabs.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-1.5 overflow-x-auto",
			children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: `shrink-0 rounded-full border px-2 py-0.5 text-[12px] ${tab.id === room ? "border-red-500 text-red-500" : "border-neutral-300 text-neutral-500"}`,
				onClick: () => setRoom(tab.id),
				children: tab.label
			}, tab.id))
		}) : void 0,
		children: [lines.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thread, {
			chat,
			name: title,
			lines,
			names: group,
			speakerId: rooms && !group ? room : void 0,
			roomNames: log.roomNames,
			openInner,
			toggleInner: (id) => setOpenInner((m) => ({
				...m,
				[id]: !m[id]
			})),
			readOnly: true
		}) : rooms ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "py-8 text-center text-[13px] text-neutral-400",
			children: "这里还没有聊天"
		}) : null, log.summary.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 rounded-lg bg-white px-3 py-2 text-[13px] leading-relaxed text-black",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-1 text-[12px] text-neutral-400",
				children: "总结"
			}), log.summary]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 text-center text-[12px] text-neutral-400",
			children: "这段还没有总结"
		})]
	});
}
function initialRoom(chat, log) {
	const rooms = log.rooms;
	if (!rooms) return "";
	if (log.activeRoom && rooms[log.activeRoom]) return log.activeRoom;
	const first = chat.characters.find((c) => rooms[c.id]);
	if (first) return first.id;
	return Object.keys(rooms)[0] || "";
}
function readRoomTabs(chat, log) {
	const rooms = log.rooms;
	if (!rooms) return [];
	const tabs = [];
	const seen = /* @__PURE__ */ new Set();
	for (const c of chat.characters) {
		if (!rooms[c.id]) continue;
		seen.add(c.id);
		tabs.push({
			id: c.id,
			label: c.name.trim() || log.roomNames?.[c.id] || "角色"
		});
	}
	for (const id of Object.keys(rooms)) {
		if (id === "group" || seen.has(id)) continue;
		tabs.push({
			id,
			label: log.roomNames?.[id] || "角色"
		});
	}
	if (rooms["group"]) tabs.push({
		id: WECHAT_GROUP,
		label: "群聊"
	});
	return tabs;
}
var EMPTY_ACCOUNTS = [];
function WechatApiDialog({ chat, onClose }) {
	const accounts = useApp((s) => s.settings.llmAccounts) ?? EMPTY_ACCOUNTS;
	const pick = chat.wechatAi;
	const account = accounts.find((a) => a.id === pick?.accountId);
	const [open, setOpen] = (0, import_react.useState)(null);
	const models = account?.starred ?? [];
	const chooseAccount = (id) => {
		if (!id) useApp.getState().patchChat(chat.id, { wechatAi: void 0 });
		else {
			const next = accounts.find((a) => a.id === id);
			const keep = pick?.model && next?.starred?.includes(pick.model) ? pick.model : "";
			useApp.getState().patchChat(chat.id, { wechatAi: {
				accountId: id,
				model: keep
			} });
		}
		setOpen(null);
	};
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[90] flex items-start justify-center px-6 pt-[22vh]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-black/40",
			"aria-label": "关闭",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-[210px] w-full max-w-sm overflow-visible rounded-[24px] bg-[#F7F7F7] text-black shadow-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center px-4 pb-2 pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "min-w-0 flex-1 text-[18px] font-semibold",
					children: "微信 API 设置"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid size-8 place-items-center",
					"aria-label": "关闭",
					onClick: onClose,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ApiDrawer, {
					title: "账号列表",
					label: account?.name || "与主聊天一致",
					open: open === "account",
					onToggle: () => setOpen(open === "account" ? null : "account"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerRow, {
							on: !pick?.accountId,
							onClick: () => chooseAccount(null),
							children: "与主聊天一致"
						}),
						accounts.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerRow, {
							on: a.id === pick?.accountId,
							onClick: () => chooseAccount(a.id),
							children: a.name || "未命名"
						}, a.id)),
						accounts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-4 py-3 text-[13px] text-neutral-500",
							children: "还没有保存的账号"
						}) : null
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApiDrawer, {
					title: "模型列表",
					label: !account ? "先选账号" : pick?.model || "请选择",
					open: open === "model",
					dim: !account,
					onToggle: () => {
						if (!account) {
							useApp.getState().toast("先选一个账号");
							return;
						}
						setOpen(open === "model" ? null : "model");
					},
					children: models.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-4 py-3 text-[13px] text-neutral-500",
						children: "先去主设置收藏"
					}) : models.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerRow, {
						on: m === pick?.model,
						onClick: () => {
							useApp.getState().patchChat(chat.id, { wechatAi: {
								accountId: account.id,
								model: m
							} });
							setOpen(null);
						},
						children: m
					}, m))
				})]
			})]
		})]
	}), document.body);
}
function ApiDrawer({ title, label, open, dim, onToggle, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mb-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "flex h-11 w-full items-center rounded-full bg-white px-4 text-left",
			onClick: onToggle,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-20 shrink-0 text-[14px]",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `min-w-0 flex-1 truncate text-right text-[13px] ${dim ? "text-neutral-400" : ""}`,
					children: label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `ml-2 size-4 shrink-0 ${open ? "rotate-180" : ""}` })
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute left-0 right-0 top-12 z-20 max-h-44 overflow-y-auto rounded-2xl bg-white py-1 shadow-lg",
			children
		}) : null]
	});
}
function DrawerRow({ children, on, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: `block h-11 w-full truncate px-4 text-left text-[14px] ${on ? "text-primary" : ""}`,
		onClick,
		children
	});
}
function Shell$1({ title, onClose, children, footer, overlay, scrollRef, full, onFull, onMinimize, onGear }) {
	const node = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: full ? "fixed inset-0 z-[80] flex bg-[#EDEDED]" : "absolute inset-0 z-30 flex justify-center bg-black/40 px-4 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: full ? "relative flex h-full min-h-0 w-full flex-col overflow-hidden bg-[#EDEDED] text-black" : "relative flex h-full min-h-0 w-full max-w-md flex-col overflow-hidden rounded-[28px] bg-[#EDEDED] text-black shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex shrink-0 items-center px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "absolute left-4",
							"aria-label": full ? "还原" : "全屏",
							onClick: onFull,
							children: full ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minimize2, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "size-5" })
						}),
						onMinimize ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "absolute left-11",
							"aria-label": "收起",
							onClick: onMinimize,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-5" })
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid w-full grid-cols-[1fr_auto_1fr] items-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate text-center text-[16px] font-medium",
									children: title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex items-center justify-start pl-1",
									children: onGear ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "grid size-4 place-items-center",
										"aria-label": "微信 API 设置",
										onClick: onGear,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-4" })
									}) : null
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "absolute right-4",
							"aria-label": "关闭",
							onClick: onClose,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: scrollRef,
					className: "min-h-0 flex-1 overflow-y-auto px-3 pb-3",
					children
				}),
				footer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "shrink-0 border-t border-black/5 bg-[#F7F7F7] px-3 py-2",
					children: footer
				}) : null,
				overlay
			]
		})
	});
	if (full) return (0, import_react_dom.createPortal)(node, document.body);
	return node;
}
function Thread({ chat, name, lines, names, speakerId, roomNames, openInner, toggleInner, picked, onPick, onRegen, onRegenNode, onEdit, readOnly }) {
	const nodes = continueNodeIds(lines);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col gap-2",
		children: lines.map((line) => line.continued ? null : line.role === "user" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-end gap-1",
			onClick: () => onPick?.(line.id),
			children: [
				line.text.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserBubble, { text: line.text }) : null,
				line.attachments.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shot, { blobId: a.blobId }, `${a.blobId}-${i}`)),
				!readOnly && picked === line.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 text-neutral-600",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "重新生成",
						onClick: () => onRegen?.(line.id),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "编辑",
						onClick: () => onEdit?.(line),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" })
					})]
				}) : null
			]
		}, line.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-2",
			children: [names && !line.speakerId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-8 shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatAvatar, {
				chat: faceOf(chat, line.speakerId || speakerId),
				name: speakerLabel(chat, line.speakerId || speakerId, name, roomNames),
				size: 32
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col items-start",
				children: [names && line.speakerId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-1 max-w-[75%] text-[12px] leading-4 text-[#888]",
					children: speakerLabel(chat, line.speakerId, name, roomNames)
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start gap-1",
					children: [
						line.text.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HerBubble, { text: line.text }) : null,
						line.attachments.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shot, { blobId: a.blobId }, `${a.blobId}-${i}`)),
						lineImages(line).length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WechatShot, {
							chat,
							lineId: line.id,
							images: lineImages(line),
							readOnly
						}) : null,
						line.inner ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1 text-[12px] leading-none text-neutral-500",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "flex items-center gap-0.5",
								onClick: () => toggleInner(line.id),
								children: [openInner[line.id] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: nodes.has(line.id) ? "内心(节点)" : "内心" })]
							}), nodes.has(line.id) && openInner[line.id] && onRegenNode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "重新生成",
								className: "grid size-3 place-items-center",
								onClick: () => onRegenNode(line.id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-3" })
							}) : null]
						}) : null,
						line.inner && openInner[line.id] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "max-w-[85%] whitespace-pre-wrap rounded-md bg-white/80 px-2 py-1 text-[12px] leading-relaxed text-neutral-700",
							children: line.inner
						}) : null
					]
				})]
			})]
		}, line.id))
	});
}
function continueNodeIds(lines) {
	const ids = /* @__PURE__ */ new Set();
	for (let i = 0; i < lines.length; i++) {
		if (!lines[i].continued) continue;
		if (!lines.slice(i + 1).some((line) => line.role === "assistant")) continue;
		for (let j = i - 1; j >= 0; j--) {
			if (lines[j].continued) break;
			if (lines[j].role === "assistant" && lines[j].inner) {
				ids.add(lines[j].id);
				break;
			}
		}
	}
	return ids;
}
function speakerLabel(chat, speakerId, fallback, roomNames) {
	if (!speakerId) return fallback;
	return chat.characters.find((c) => c.id === speakerId)?.name.trim() || roomNames?.[speakerId] || fallback || "她";
}
function faceOf(chat, speakerId) {
	if (!speakerId) return chat;
	const blob = chat.characters.find((c) => c.id === speakerId)?.wechatAvatarBlobId;
	if (!blob) return chat;
	return {
		...chat,
		customAvatarBlobId: blob
	};
}
function UserBubble({ text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "max-w-[75%] rounded-[6px] bg-[#95EC69] px-3 py-2 text-[15px] leading-snug text-black",
		children: text
	});
}
function HerBubble({ text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "max-w-[75%] rounded-[6px] bg-white px-3 py-2 text-[15px] leading-snug text-black",
		children: text
	});
}
function Shot({ blobId }) {
	const [url, setUrl] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let dead = false;
		imageUrl(blobId).then((u) => {
			if (!dead) setUrl(u);
		});
		return () => {
			dead = true;
		};
	}, [blobId]);
	if (!url) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-24 w-24 rounded-[4px] bg-white" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: url,
		alt: "",
		className: "max-h-40 max-w-[70%] rounded-[4px] object-contain"
	});
}
function WechatShot({ chat, lineId, images, readOnly }) {
	const done = images.filter((g) => g.status === "done" && g.blobId);
	const pending = images.find((g) => g.status !== "done" && g.status !== "error");
	const [idx, setIdx] = (0, import_react.useState)(() => Math.max(0, done.length - 1));
	const [url, setUrl] = (0, import_react.useState)(null);
	const [kick, setKick] = (0, import_react.useState)(null);
	const [saved, setSaved] = (0, import_react.useState)(false);
	const [flashErr, setFlashErr] = (0, import_react.useState)(null);
	const prevDone = (0, import_react.useRef)(done.length);
	const seenFail = (0, import_react.useRef)("");
	const current = done[idx] ?? done[done.length - 1];
	const latest = images.at(-1);
	const failed = latest?.status === "error" ? latest : void 0;
	const busy = kick ?? pending?.source ?? null;
	const phase = genPhaseLabel(pending?.status) || (kick === "rewrite" || kick === "auto" ? "写提示词中" : kick ? "上传中" : "");
	const locked = Boolean(pending) || Boolean(kick);
	(0, import_react.useEffect)(() => {
		if (!pending) setKick(null);
	}, [pending]);
	(0, import_react.useEffect)(() => {
		if (done.length > prevDone.current) setIdx(done.length - 1);
		else if (idx >= done.length && done.length > 0) setIdx(done.length - 1);
		prevDone.current = done.length;
	}, [done.length, idx]);
	(0, import_react.useEffect)(() => {
		let gone = false;
		if (current?.blobId) imageUrl(current.blobId).then((u) => {
			if (!gone) setUrl(u);
		});
		else setUrl(null);
		return () => {
			gone = true;
		};
	}, [current?.blobId]);
	(0, import_react.useEffect)(() => {
		if (pending || !failed || !current?.blobId) {
			if (!failed) setFlashErr(null);
			return;
		}
		if (seenFail.current === failed.id) return;
		seenFail.current = failed.id;
		setFlashErr(genPhaseLabel("error", failed.error));
		const t = window.setTimeout(() => setFlashErr(null), 2e3);
		return () => window.clearTimeout(t);
	}, [
		pending,
		failed,
		current?.blobId
	]);
	const run = (mode) => {
		setKick(mode);
		paintWechat(chat, lineId, mode).finally(() => setKick(null));
	};
	const openCustom = () => {
		const src = pending && (pending.prompt || pending.charTails) ? pending : current ?? pending;
		if (!src) return;
		useApp.getState().setUI({ customPrompt: {
			chatId: chat.id,
			msgId: lineId,
			wechatLineId: lineId,
			imgId: src.id,
			text: extractGrokTail(src.prompt, chat.imageParams) || src.prompt || "",
			charTails: { ...src.charTails || {} }
		} });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full",
		children: [
			current ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-1 flex flex-wrap gap-x-1.5 text-[10px] text-neutral-500",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: modelLabel(current.model) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						current.width,
						"×",
						current.height
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [current.steps, "步"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: samplerLabel(current.sampler) })
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative max-w-[240px] overflow-hidden rounded-[14px] bg-neutral-200",
				children: current && url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: url,
						alt: "",
						className: "w-full"
					}), done.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "absolute inset-y-0 left-0 w-1/2",
						"aria-label": "上一张",
						onClick: () => setIdx((i) => (i - 1 + done.length) % done.length)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "absolute inset-y-0 right-0 w-1/2",
						"aria-label": "下一张",
						onClick: () => setIdx((i) => (i + 1) % done.length)
					})] }) : null]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid place-items-center px-2 text-[12px] text-neutral-500",
					style: { aspectRatio: `${chat.imageParams.width} / ${chat.imageParams.height}` },
					children: pending || kick ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin" }),
							phase || "准备中",
							!readOnly ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "text-red-500",
								onClick: () => cancelWechatImage(chat.id, lineId),
								children: "取消"
							}) : null
						]
					}) : failed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-center text-red-500",
						children: genPhaseLabel("error", failed.error)
					}) : "还没有图"
				})
			}),
			flashErr ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 truncate text-center text-[10px] leading-4 text-red-500",
				children: flashErr
			}) : null,
			!readOnly ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1.5 grid grid-cols-4 text-center text-[10px] leading-none text-neutral-500",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShotBtn, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-3.5" }),
						label: busy === "same" && phase ? phase : "重新生成",
						busy: busy === "same",
						disabled: locked || !current,
						onClick: () => {
							if (busy === "same") {
								cancelWechatImage(chat.id, lineId);
								return;
							}
							if (locked || !current) return;
							run("same");
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShotBtn, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }),
						label: (busy === "rewrite" || busy === "auto") && phase ? phase : "换提示词生成",
						busy: busy === "rewrite" || busy === "auto",
						disabled: locked,
						onClick: () => {
							if (busy === "rewrite" || busy === "auto") {
								cancelWechatImage(chat.id, lineId);
								return;
							}
							if (locked) return;
							run("rewrite");
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShotBtn, {
						icon: saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-good" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }),
						label: "下载",
						disabled: !current?.blobId,
						onClick: () => {
							if (!current?.blobId) return;
							imageUrl(current.blobId).then(async (u) => {
								if (!u) return;
								downloadBlob(await fetch(u).then((r) => r.blob()), String(current.seed));
								setSaved(true);
								window.setTimeout(() => setSaved(false), 1e3);
							});
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShotBtn, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "size-3.5" }),
						label: busy === "custom" && phase ? phase : "自定义修改",
						busy: busy === "custom",
						disabled: !current && !pending,
						onClick: openCustom
					})
				]
			}) : null
		]
	});
}
function ShotBtn({ icon, label, onClick, busy, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		disabled: busy ? false : disabled,
		className: busy ? "flex min-w-0 flex-col items-center gap-1 px-0.5 py-1 text-primary" : "flex min-w-0 flex-col items-center gap-1 px-0.5 py-1 disabled:opacity-40",
		children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 shrink-0 animate-spin" }) : icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap",
			children: label
		})]
	});
}
function PendingThumb({ blobId, mark, onRemove }) {
	const [url, setUrl] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let dead = false;
		imageUrl(blobId).then((u) => {
			if (!dead) setUrl(u);
		});
		return () => {
			dead = true;
		};
	}, [blobId]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative shrink-0",
		children: [
			url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: url,
				alt: "",
				className: "h-16 w-14 rounded-md object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 w-14 rounded-md bg-white" }),
			mark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute bottom-0 left-0 bg-black/50 px-1 text-[10px] text-white",
				children: mark
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-white text-black",
				onClick: onRemove,
				"aria-label": "去掉",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })
			})
		]
	});
}
function EmojiPanel({ tab, setTab, stickers, onEmoji, onSticker, onDeleteSticker, onAddSticker, onOpenBook }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-2 border-t border-black/5 pt-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-2 flex gap-4 text-[14px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: tab === "emoji" ? "text-red-500" : "text-neutral-500",
				onClick: () => setTab("emoji"),
				children: "Emoji"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: tab === "heart" ? "text-red-500" : "text-neutral-500",
				onClick: () => setTab("heart"),
				children: "♥"
			})]
		}), tab === "emoji" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid max-h-36 grid-cols-8 gap-1 overflow-y-auto",
			children: EMOJI.map((ch) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "py-1 text-[22px]",
				onClick: () => onEmoji(ch),
				children: ch
			}, ch))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid max-h-44 grid-cols-5 gap-1.5 overflow-y-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePick, {
					onFile: (file) => {
						compressRef(file, 512, .85).then(async (blob) => onAddSticker(await saveBlob(blob)));
					},
					render: (open) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid aspect-square place-items-center rounded-md border border-dashed border-neutral-300 text-neutral-500",
						onClick: open,
						"aria-label": "上传表情包",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-5" })
					})
				}),
				stickers.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickerTile, {
					blobId: s.blobId,
					onPick: () => onSticker(s.blobId),
					onDelete: () => onDeleteSticker(s.blobId)
				}, s.blobId)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid aspect-square place-items-center rounded-md border border-dashed border-neutral-300 text-neutral-500",
					onClick: onOpenBook,
					"aria-label": "表情包设置",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-5" })
				})
			]
		})]
	});
}
function StickerTile({ blobId, onPick, onDelete }) {
	const [url, setUrl] = (0, import_react.useState)(null);
	const timer = (0, import_react.useRef)(0);
	const skip = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		let dead = false;
		imageUrl(blobId).then((u) => {
			if (!dead) setUrl(u);
		});
		return () => {
			dead = true;
		};
	}, [blobId]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "aspect-square overflow-hidden rounded-md bg-white",
		onClick: () => {
			if (skip.current) {
				skip.current = false;
				return;
			}
			onPick();
		},
		onPointerDown: () => {
			skip.current = false;
			timer.current = window.setTimeout(() => {
				skip.current = true;
				onDelete();
			}, 500);
		},
		onPointerUp: () => window.clearTimeout(timer.current),
		onPointerLeave: () => window.clearTimeout(timer.current),
		children: url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: url,
			alt: "",
			className: "size-full object-contain"
		}) : null
	});
}
function sameStickers(a, b) {
	if (a.length !== b.length) return false;
	return a.every((s, i) => s.blobId === b[i]?.blobId && s.brief === b[i]?.brief);
}
function GripBars$4() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex flex-col items-center justify-center gap-[3px]",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[2px] w-4 rounded-full bg-current" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[2px] w-4 rounded-full bg-current" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[2px] w-4 rounded-full bg-current" })
		]
	});
}
function StickerBook({ chat, grokModelId, onClose }) {
	const saved = useApp((s) => s.wechatStickers);
	const [rows, setRows] = (0, import_react.useState)(() => saved.map((s) => ({ ...s })));
	const [sortMode, setSortMode] = (0, import_react.useState)(false);
	const [dragId, setDragId] = (0, import_react.useState)(null);
	const [leave, setLeave] = (0, import_react.useState)(false);
	const [dropId, setDropId] = (0, import_react.useState)(null);
	const [busyId, setBusyId] = (0, import_react.useState)(null);
	const listRef = (0, import_react.useRef)(null);
	const rowsRef = (0, import_react.useRef)(rows);
	const dragRef = (0, import_react.useRef)(null);
	const lastY = (0, import_react.useRef)(0);
	const rafRef = (0, import_react.useRef)(0);
	const touched = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	const hold = (0, import_react.useRef)(0);
	rowsRef.current = rows;
	(0, import_react.useEffect)(() => {
		setRows((cur) => {
			let changed = false;
			const next = cur.map((row) => {
				if (touched.current.has(row.blobId)) return row;
				const live = saved.find((s) => s.blobId === row.blobId);
				if (!live || live.brief === row.brief) return row;
				changed = true;
				return {
					...row,
					brief: live.brief
				};
			});
			return changed ? next : cur;
		});
	}, [saved]);
	(0, import_react.useEffect)(() => {
		const applyY = (y) => {
			const id = dragRef.current;
			if (!id) return;
			const nodes = listRef.current?.querySelectorAll("[data-sticker-id]");
			if (!nodes?.length) return;
			const order = rowsRef.current.map((s) => s.blobId);
			const nextIds = moveId(order, id, indexFromY(nodes, y));
			if (nextIds.join("\0") === order.join("\0")) return;
			const byId = new Map(rowsRef.current.map((s) => [s.blobId, s]));
			const next = nextIds.map((blobId) => byId.get(blobId)).filter((s) => !!s);
			rowsRef.current = next;
			setRows(next);
		};
		const tick = () => {
			rafRef.current = 0;
			if (!dragRef.current) return;
			const scroller = nearestScroller(listRef.current);
			const dy = scroller ? autoScrollNearEdge(scroller, lastY.current) : 0;
			applyY(lastY.current);
			if (dy) rafRef.current = requestAnimationFrame(tick);
		};
		const onMove = (e) => {
			if (!dragRef.current) return;
			e.preventDefault();
			lastY.current = e.clientY;
			const scroller = nearestScroller(listRef.current);
			const dy = scroller ? autoScrollNearEdge(scroller, e.clientY) : 0;
			applyY(e.clientY);
			if (dy && !rafRef.current) rafRef.current = requestAnimationFrame(tick);
		};
		const onUp = () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
			rafRef.current = 0;
			const scroller = nearestScroller(listRef.current);
			if (scroller) scroller.style.touchAction = "";
			if (!dragRef.current) return;
			dragRef.current = null;
			setDragId(null);
		};
		window.addEventListener("pointermove", onMove, { passive: false });
		window.addEventListener("pointerup", onUp);
		window.addEventListener("pointercancel", onUp);
		return () => {
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("pointerup", onUp);
			window.removeEventListener("pointercancel", onUp);
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, []);
	const save = () => {
		useApp.getState().setWechatStickers(rowsRef.current.map((s) => ({ ...s })));
		onClose();
	};
	const requestClose = () => {
		if (!sameStickers(rowsRef.current, useApp.getState().wechatStickers)) setLeave(true);
		else onClose();
	};
	const regen = (blobId) => {
		if (busyId) return;
		setBusyId(blobId);
		touched.current.add(blobId);
		let route = null;
		if (chat) try {
			route = wechatRoute(chat);
		} catch {
			setBusyId((id) => id === blobId ? null : id);
			return;
		}
		describeSticker(blobId, grokModelId, route).then((brief) => {
			if (!brief) return;
			setRows((cur) => cur.map((s) => s.blobId === blobId ? {
				...s,
				brief
			} : s));
		}).catch((e) => {
			useApp.getState().toast(e instanceof Error ? e.message : "简述没写成");
		}).finally(() => setBusyId((id) => id === blobId ? null : id));
	};
	const onGripDown = (e, id) => {
		e.preventDefault();
		e.stopPropagation();
		dragRef.current = id;
		setDragId(id);
		lastY.current = e.clientY;
		const scroller = nearestScroller(listRef.current);
		if (scroller) scroller.style.touchAction = "none";
		try {
			e.currentTarget.setPointerCapture(e.pointerId);
		} catch {}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[90] flex items-start justify-center bg-black/40 px-5 pt-[12vh]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0",
			"aria-label": "关闭",
			onClick: requestClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex max-h-[calc(100dvh-12vh-24px)] w-full max-w-sm flex-col overflow-hidden rounded-[24px] bg-white text-black shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-5 pt-5 pb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[18px] font-semibold",
						children: "表情包设置"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "rounded-md border border-neutral-300 px-3 py-1 text-[14px]",
							onClick: save,
							children: "保存"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-9 place-items-center",
							"aria-label": "关闭",
							onClick: requestClose,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: listRef,
					className: "min-h-0 flex-1 overflow-y-auto px-5 pb-5",
					children: [rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "py-6 text-center text-[14px] text-neutral-400",
						children: "还没有表情包"
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-4",
						children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickerBriefRow, {
							row,
							sortMode,
							dragging: dragId === row.blobId,
							busy: busyId === row.blobId,
							onChange: (brief) => {
								touched.current.add(row.blobId);
								setRows((cur) => cur.map((s) => s.blobId === row.blobId ? {
									...s,
									brief
								} : s));
							},
							onRegen: () => regen(row.blobId),
							onDelete: () => setDropId(row.blobId),
							onHold: () => setSortMode(true),
							onGripDown: (e) => onGripDown(e, row.blobId),
							holdRef: hold
						}, row.blobId))
					})]
				}),
				leave ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ask, {
					text: "是否保存修改？",
					no: "否",
					yes: "是",
					onNo: onClose,
					onYes: save
				}) : null,
				dropId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ask, {
					text: "是否删除这张表情包？",
					no: "否",
					yes: "是",
					danger: true,
					onNo: () => setDropId(null),
					onYes: () => {
						touched.current.add(dropId);
						setRows((cur) => cur.filter((s) => s.blobId !== dropId));
						setDropId(null);
					}
				}) : null
			]
		})]
	});
}
function Ask({ text, no, yes, danger, onNo, onYes }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-10 flex items-center justify-center bg-black/40 px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full rounded-2xl bg-white p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[15px]",
				children: text
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex justify-end gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-[14px] text-neutral-500",
					onClick: onNo,
					children: no
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: danger ? "text-[14px] font-medium text-red-500" : "text-[14px] font-medium",
					onClick: onYes,
					children: yes
				})]
			})]
		})
	});
}
function StickerBriefRow({ row, sortMode, dragging, busy, onChange, onRegen, onDelete, onHold, onGripDown, holdRef }) {
	const [url, setUrl] = (0, import_react.useState)(null);
	const start = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	(0, import_react.useEffect)(() => {
		let dead = false;
		imageUrl(row.blobId).then((u) => {
			if (!dead) setUrl(u);
		});
		return () => {
			dead = true;
		};
	}, [row.blobId]);
	const clearHold = () => window.clearTimeout(holdRef.current);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-sticker-id": row.blobId,
		className: `flex items-start gap-3 ${dragging ? "opacity-60" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "size-16 shrink-0 overflow-hidden rounded-md bg-neutral-100 select-none hold-none",
				"aria-label": "长按排序",
				onContextMenu: (e) => e.preventDefault(),
				onPointerDown: (e) => {
					if (sortMode) return;
					start.current = {
						x: e.clientX,
						y: e.clientY
					};
					clearHold();
					holdRef.current = window.setTimeout(onHold, 420);
				},
				onPointerMove: (e) => {
					if (Math.abs(e.clientX - start.current.x) + Math.abs(e.clientY - start.current.y) > 12) clearHold();
				},
				onPointerUp: clearHold,
				onPointerCancel: clearHold,
				children: url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: url,
					alt: "",
					draggable: false,
					className: "size-full object-contain"
				}) : null
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1 flex justify-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-7 place-items-center text-neutral-500 disabled:opacity-40",
						"aria-label": "重新生成",
						disabled: busy,
						onClick: onRegen,
						children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-7 place-items-center text-neutral-500",
						"aria-label": "删除",
						onClick: onDelete,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: row.brief,
					placeholder: "还没有简述",
					className: "min-h-16 w-full resize-none rounded-xl border border-neutral-200 bg-white px-3 py-2 text-[14px] leading-snug text-black outline-none [field-sizing:content]",
					onChange: (e) => onChange(e.target.value)
				})]
			}),
			sortMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-3 grid size-9 shrink-0 place-items-center text-neutral-500",
				"aria-label": "拖动排序",
				style: { touchAction: "none" },
				onPointerDown: onGripDown,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripBars$4, {})
			}) : null
		]
	});
}
async function addFiles(files, add) {
	const items = [];
	for (const file of files) {
		if (!isImageFile(file)) continue;
		const blob = await compressRef(file, 1024, .85);
		items.push({
			blobId: await saveBlob(blob),
			kind: "photo"
		});
	}
	if (items.length) add(items);
}
async function addBlobs(ids, kind, add) {
	const items = [];
	for (const id of ids) {
		const blob = await getImage(id);
		if (!blob) continue;
		items.push({
			blobId: await saveBlob(blob),
			kind
		});
	}
	if (!items.length && ids.length) {
		useApp.getState().toast("这张图已经不在了");
		return;
	}
	add(items);
}
function useImageUrl(id) {
	const [url, setUrl] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!id) {
			setUrl(null);
			return;
		}
		let dead = false;
		imageUrl(id).then((u) => {
			if (!dead) setUrl(u);
		});
		return () => {
			dead = true;
		};
	}, [id]);
	return url;
}
function SceneBackdrop({ blobId, fade, paper }) {
	const url = useImageUrl(blobId);
	if (!url) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute inset-0 z-0",
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-cover bg-center",
			style: { backgroundImage: `url("${url}")` }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0",
			style: {
				background: paper,
				opacity: fade / 100
			}
		})]
	});
}
function patchLook(partial) {
	const cur = useApp.getState().settings.look ?? {};
	useApp.getState().setSettings({ look: {
		...cur,
		...partial
	} });
}
function dropLook(keys) {
	const cur = { ...useApp.getState().settings.look ?? {} };
	for (const key of keys) delete cur[key];
	useApp.getState().setSettings({ look: cur });
}
function askDrop(title, body, keys) {
	useApp.getState().setUI({ confirm: {
		title,
		body,
		onOk: () => dropLook(keys)
	} });
}
function Marked({ value, min, max, step, mark, onChange }) {
	const pct = (mark - min) / (max - min || 1) * 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
			value,
			min,
			max,
			step,
			onChange
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "pointer-events-none absolute top-1/2 h-3 w-px -translate-y-1/2 bg-ink/50",
			style: { left: `${pct}%` }
		})]
	});
}
function Sample({ live, paper }) {
	const raw = useApp((s) => s.settings.look);
	const look = readLook(live ? raw : void 0);
	const weight = look.weight;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "rounded-[14px] px-3 py-2 leading-[1.85]",
		style: {
			background: paper,
			fontFamily: fontStack(look.font),
			fontSize: look.size,
			fontWeight: weight,
			color: look.narrate
		},
		children: ["仅改变正文", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: {
				fontStyle: "italic",
				fontWeight: sayWeight(weight),
				color: look.say
			},
			children: "「字体」"
		})]
	});
}
var EMPTY_THEMES = [];
function LookSheet({ onClose }) {
	const raw = useApp((s) => s.settings.look);
	const look = readLook(raw);
	const [sizeText, setSizeText] = (0, import_react.useState)(null);
	const [fontOpen, setFontOpen] = (0, import_react.useState)(false);
	const [picker, setPicker] = (0, import_react.useState)(null);
	const [themesOpen, setThemesOpen] = (0, import_react.useState)(false);
	const [naming, setNaming] = (0, import_react.useState)(false);
	const themes = useApp((s) => s.settings.lookThemes) ?? EMPTY_THEMES;
	const stepSize = (dir) => {
		const next = SIZE_STEPS.filter((n) => dir > 0 ? n > look.size : n < look.size);
		const hit = dir > 0 ? next[0] : next[next.length - 1];
		if (hit) patchLook({ size: hit });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative z-10 flex min-h-0 w-full max-w-md flex-col overflow-hidden rounded-[28px] bg-bg shadow-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center gap-2 px-5 pb-3 pt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[20px] font-semibold",
					children: "字体和背景"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "ml-auto grid size-9 place-items-center",
					onClick: onClose,
					"aria-label": "关闭",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[20px] leading-none",
						children: "×"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-6 scroll-hide",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section$1, {
					title: "字体",
					onReset: () => askDrop("恢复字体", "字体会回到最初。背景不动。", [
						"font",
						"size",
						"weight",
						"narrate",
						"say"
					]),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "字体" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "flex h-8 min-w-28 items-center justify-between gap-2 rounded-full border border-line bg-card px-3 text-[13px]",
									onClick: () => setFontOpen((v) => !v),
									children: [FONTS.find((f) => f.id === look.font)?.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 text-muted transition", fontOpen && "rotate-180") })]
								})]
							}), fontOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute right-0 top-9 z-20 w-40 overflow-hidden rounded-[16px] border border-line bg-card shadow-lg",
								children: FONTS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: cn("block w-full px-4 py-2.5 text-left text-[14px]", f.id === look.font && "text-primary"),
									style: { fontFamily: f.stack },
									onClick: () => {
										patchLook({ font: f.id === "default" ? void 0 : f.id });
										setFontOpen(false);
									},
									children: f.label
								}, f.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-1 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "大小" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex h-8 items-center rounded-full border border-line bg-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "grid size-8 place-items-center",
										"aria-label": "增大字号",
										onClick: () => stepSize(1),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: sizeText ?? String(look.size),
										inputMode: "numeric",
										"aria-label": "字号",
										className: "w-8 bg-transparent text-center text-[13px] outline-none",
										onFocus: () => setSizeText(String(look.size)),
										onChange: (e) => setSizeText(e.target.value.replace(/[^\d]/g, "").slice(0, 2)),
										onBlur: () => {
											const n = Math.round(Number(sizeText));
											if (Number.isFinite(n) && n > 0) patchLook({ size: Math.min(28, Math.max(12, n)) });
											setSizeText(null);
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "grid size-8 place-items-center",
										"aria-label": "减小字号",
										onClick: () => stepSize(-1),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" })
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowLabel, {
							left: "A",
							right: "A",
							pct: Math.round(look.size / 16 * 100),
							big: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marked, {
							value: look.size,
							min: 12,
							max: 28,
							step: 1,
							mark: 16,
							onChange: (n) => patchLook({ size: n })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-1 mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "粗细" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowLabel, {
							left: "A",
							right: "A",
							pct: Math.round(look.weight / 400 * 100)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marked, {
							value: look.weight,
							min: 300,
							max: 700,
							step: 10,
							mark: 400,
							onChange: (n) => patchLook({ weight: n })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sample, {
								live: true,
								paper: look.paper
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sample, {
								live: false,
								paper: look.paper
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-1 mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "颜色" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwatchRow, {
								label: "主文字",
								color: look.narrate,
								onClick: () => setPicker("narrate")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwatchRow, {
								label: "引用",
								color: look.say,
								onClick: () => setPicker("say")
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section$1, {
					title: "背景",
					onReset: () => askDrop("恢复背景", "纯色、图片、淡化、强调色和文本框会回到最初。某个聊天自己的图不动。", [
						"paper",
						"bgImageId",
						"bgFade",
						"accent",
						"textPlate"
					]),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-1 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "纯色" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwatchRow, {
									label: swatchName(PAPERS, look.paper),
									color: look.paper,
									onClick: () => setPicker("paper")
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "强调色" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwatchRow, {
									label: swatchName(ACCENTS, look.accent),
									color: look.accent,
									onClick: () => setPicker("accent")
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-1 mt-1 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "图片背景" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: cn("h-7 rounded-full border px-3 text-[12px]", look.textPlate ? "border-primary bg-primary text-on-primary" : "border-line bg-card text-ink"),
								onClick: () => patchLook({ textPlate: look.textPlate ? void 0 : true }),
								children: "文本框"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preview, {
							blobId: look.bgImageId,
							fade: look.bgFade,
							paper: look.paper,
							narrate: look.narrate,
							say: look.say,
							font: look.font,
							size: look.size,
							weight: look.weight
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BgControls, {
							blobId: look.bgImageId,
							fade: look.bgFade,
							onId: (id) => patchLook({
								bgImageId: id,
								bgFade: raw?.bgFade ?? 40
							}),
							onClear: () => patchLook({ bgImageId: void 0 }),
							onFade: (n) => patchLook({ bgFade: n })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[12px] leading-5 text-muted",
							children: "总背景只铺在每个聊天的正文和生图参数上。某个聊天自己传了图，就用它的。"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "mt-3 h-10 w-full rounded-full border border-line bg-card text-[14px]",
							onClick: () => setNaming(true),
							children: "保存为主题"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "mt-2 flex h-10 w-full items-center justify-between rounded-full border border-line bg-card px-4 text-[14px]",
							onClick: () => setThemesOpen((v) => !v),
							children: ["主题列表", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 text-muted transition", themesOpen && "rotate-180") })]
						}),
						themesOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 max-h-44 overflow-y-auto rounded-[16px] border border-line",
							children: [themes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-3 py-3 text-[13px] text-muted",
								children: "还没有主题"
							}) : null, themes.map((theme) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeRow, {
								theme,
								onApply: () => {
									patchLook({
										font: theme.font === "default" ? void 0 : theme.font,
										size: theme.size === 16 ? void 0 : theme.size,
										weight: theme.weight === 400 ? void 0 : theme.weight,
										narrate: theme.narrate === "#5a534c" ? void 0 : theme.narrate,
										say: theme.say === "#2c2824" ? void 0 : theme.say,
										paper: theme.paper === "#f3eee6" ? void 0 : theme.paper,
										accent: theme.accent === "#9c5348" ? void 0 : theme.accent
									});
									useApp.getState().toast("已应用");
								},
								onDelete: () => {
									useApp.getState().setUI({ confirm: {
										title: "删除主题",
										body: `删除「${theme.name}」？`,
										onOk: () => useApp.getState().setSettings({ lookThemes: (useApp.getState().settings.lookThemes ?? []).filter((item) => item.id !== theme.id) })
									} });
								}
							}, theme.id))]
						}) : null
					]
				})]
			}),
			picker && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorDialog, {
				kind: picker,
				value: picker === "paper" ? look.paper : picker === "say" ? look.say : picker === "accent" ? look.accent : look.narrate,
				original: picker === "paper" ? "#f3eee6" : picker === "say" ? "#2c2824" : picker === "accent" ? "#9c5348" : "#5a534c",
				onClose: () => setPicker(null),
				onPick: (hex) => {
					const orig = picker === "paper" ? "#f3eee6" : picker === "say" ? "#2c2824" : picker === "accent" ? "#9c5348" : "#5a534c";
					patchLook({ [picker === "paper" ? "paper" : picker === "say" ? "say" : picker === "accent" ? "accent" : "narrate"]: hex === orig ? void 0 : hex });
					setPicker(null);
				}
			}),
			naming ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NameTheme, { onClose: () => setNaming(false) }) : null
		]
	});
}
function Section$1({ title, onReset, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mb-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-2 flex items-center gap-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-[18px] font-semibold",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-7 place-items-center text-muted",
				"aria-label": `恢复${title}`,
				onClick: onReset,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" })
			})]
		}), children]
	});
}
function Sub({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[13px] font-medium",
		children
	});
}
function ThemeRow({ theme, onApply, onDelete }) {
	const type = {
		fontFamily: fontStack(theme.font),
		fontSize: Math.min(theme.size, 16)
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-11 items-center gap-2 border-b border-black/5 px-3 last:border-b-0",
		style: { background: theme.paper },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1 truncate",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: {
						...type,
						fontWeight: theme.weight,
						color: theme.narrate
					},
					children: theme.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: {
						...type,
						fontStyle: "italic",
						fontWeight: sayWeight(theme.weight),
						color: theme.say
					},
					children: "「绘语」"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "h-7 shrink-0 rounded-full px-3 text-[12px] text-white",
				style: { background: theme.accent },
				onClick: onApply,
				children: "应用"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-7 shrink-0 place-items-center text-danger",
				"aria-label": "删除主题",
				onClick: onDelete,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
			})
		]
	});
}
function NameTheme({ onClose }) {
	const [name, setName] = (0, import_react.useState)("");
	const save = () => {
		const title = name.trim();
		if (!title) {
			useApp.getState().toast("先起个名字");
			return;
		}
		const look = readLook(useApp.getState().settings.look);
		const theme = {
			id: uid$1("th_"),
			name: title,
			font: look.font,
			size: look.size,
			weight: look.weight,
			narrate: look.narrate,
			say: look.say,
			paper: look.paper,
			accent: look.accent
		};
		useApp.getState().setSettings({ lookThemes: [...useApp.getState().settings.lookThemes ?? [], theme] });
		useApp.getState().toast("已保存");
		onClose();
	};
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[80] flex items-start justify-center px-6 pt-[22vh]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-overlay/40",
			"aria-label": "关闭",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-sm rounded-[24px] bg-bg p-5 text-ink shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 text-[18px] font-semibold",
					children: "保存为主题"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: name,
					autoFocus: true,
					placeholder: "主题名",
					className: "h-11 w-full rounded-full border border-line bg-card px-4 text-[14px] outline-none",
					onChange: (e) => setName(e.target.value),
					onKeyDown: (e) => {
						if (e.key === "Enter") save();
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex justify-end gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-[14px] text-muted",
						onClick: onClose,
						children: "取消"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-[14px] font-medium text-primary",
						onClick: save,
						children: "保存"
					})]
				})
			]
		})]
	}), document.body);
}
function RowLabel({ left, right, pct, big }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-1 flex items-end justify-between text-muted",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: big ? "text-[18px]" : "text-[13px]",
				children: left
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-[12px] tabular-nums",
				children: [pct, "%"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: big ? "text-[22px] font-semibold" : "text-[16px] font-semibold",
				children: right
			})
		]
	});
}
function SwatchRow({ label, color, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: "mb-2 flex min-w-0 flex-1 items-center justify-between rounded-[16px] border border-line bg-card px-4 py-3",
		onClick,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[14px]",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "size-8 rounded-[8px] border border-line",
			style: { background: color }
		})]
	});
}
function Preview({ blobId, fade, paper, narrate, say, font, size, weight }) {
	const url = useImageUrl(blobId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mb-3 h-24 overflow-hidden rounded-[16px] border border-line",
		children: [
			url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-cover bg-center",
				style: { backgroundImage: `url("${url}")` }
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: {
					background: paper,
					opacity: url ? fade / 100 : 1
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "relative px-3 py-4 leading-[1.85]",
				style: {
					fontFamily: fontStack(font),
					fontSize: Math.min(size, 18),
					fontWeight: weight,
					color: narrate
				},
				children: ["仅改变正文", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: {
						fontStyle: "italic",
						fontWeight: sayWeight(weight),
						color: say
					},
					children: "「字体」"
				})]
			})
		]
	});
}
function BgControls({ blobId, fade, onId, onClear, onFade }) {
	const [crop, setCrop] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		return () => {
			if (crop) URL.revokeObjectURL(crop);
		};
	}, [crop]);
	const openCrop = (blob) => {
		setCrop((prev) => {
			if (prev) URL.revokeObjectURL(prev);
			return URL.createObjectURL(blob);
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePick, {
				onFile: (file) => openCrop(file),
				onBlob: async (id) => {
					const { getImage } = await import("../_libs/_.mjs").then((n) => n.o);
					const blob = await getImage(id);
					if (!blob) {
						useApp.getState().toast("这张图已经不在了");
						return;
					}
					openCrop(blob);
				},
				render: (open) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "h-11 flex-1 rounded-full border border-line bg-card text-[14px]",
					onClick: open,
					children: "上传并裁剪"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: cn("h-11 flex-1 rounded-full border border-line bg-card text-[14px]", blobId ? "text-ink" : "text-faint"),
				disabled: !blobId,
				onClick: onClear,
				children: "移除图片"
			})]
		}),
		blobId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-1 flex justify-between text-[13px] text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "淡化" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [fade, "%"] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
				value: fade,
				min: 0,
				max: 80,
				step: 1,
				onChange: onFade
			})]
		}) : null,
		crop ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverCrop, {
			src: crop,
			onCancel: () => setCrop(null),
			onDone: (blob) => {
				saveBlob(blob).then(onId);
				setCrop(null);
			}
		}) : null
	] });
}
function chipClass(color, original, current) {
	const same = (a, b) => a.toLowerCase() === b.toLowerCase();
	const orig = same(color, original);
	return cn("border-2", same(color, current) ? "border-ink" : "border-line", orig && "ring-2 ring-[#c4473b] ring-offset-1");
}
function ColorDialog({ kind, value, original, onClose, onPick }) {
	const [custom, setCustom] = (0, import_react.useState)(false);
	const [hsv, setHsv] = (0, import_react.useState)(() => hexToHsv(value));
	const hex = hsvToHex(hsv.h, hsv.s, hsv.v);
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[80] flex items-start justify-center px-4 py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-overlay/40",
			onClick: onClose,
			"aria-label": "关闭"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex max-h-full w-full max-w-md flex-col overflow-hidden rounded-[24px] bg-bg text-ink shadow-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center px-5 pb-3 pt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "min-w-0 flex-1 text-[18px] font-semibold",
					children: custom ? "自定义" : kind === "paper" ? "纯色" : kind === "accent" ? "强调色" : "选择颜色"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid size-9 place-items-center",
					onClick: custom ? () => setCustom(false) : onClose,
					"aria-label": "关闭",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[20px] leading-none",
						children: "×"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-h-0 overflow-y-auto px-5 pb-5",
				children: custom ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hue, {
						value: hsv.h,
						onChange: (h) => setHsv({
							...hsv,
							h
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-1 mt-3 text-[13px] text-muted",
						children: "饱和度"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
						value: Math.round(hsv.s * 100),
						min: 0,
						max: 100,
						step: 1,
						onChange: (n) => setHsv({
							...hsv,
							s: n / 100
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-1 mt-3 text-[13px] text-muted",
						children: "明度"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
						value: Math.round(hsv.v * 100),
						min: 0,
						max: 100,
						step: 1,
						onChange: (n) => setHsv({
							...hsv,
							v: n / 100
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "size-10 rounded-[10px] border border-line",
							style: { background: hex }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "font-medium text-primary",
							onClick: () => onPick(validHex(hex) ?? value),
							children: "设置"
						})]
					})
				] }) : kind === "paper" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-4 gap-2",
					children: [PAPERS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "text-center",
						onClick: () => onPick(p.color),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("mx-auto block h-12 rounded-[12px]", chipClass(p.color, original, value)),
							style: { background: p.color }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-[11px] text-muted",
							children: p.name
						})]
					}, p.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "text-center",
						onClick: () => setCustom(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mx-auto grid h-12 place-items-center rounded-[12px] border border-dashed border-line bg-card text-[11px] text-muted",
							children: "自定义"
						}), !PAPERS.some((p) => p.color === value) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("mx-auto mt-1 block size-5 rounded-[6px]", chipClass(value, original, value)),
							style: { background: value }
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-[11px] text-transparent",
							children: "占"
						})]
					})]
				}) : kind === "accent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-5 gap-2",
					children: [ACCENTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "text-center",
						onClick: () => onPick(item.color),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("mx-auto block h-8 rounded-[8px]", chipClass(item.color, original, value)),
							style: { background: item.color }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block h-4 text-[10px] text-muted",
							children: item.name
						})]
					}, item.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "text-center",
						onClick: () => setCustom(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("mx-auto block h-8 rounded-[8px]", ACCENTS.some((item) => item.color.toLowerCase() === value.toLowerCase()) ? "border border-dashed border-line bg-card" : chipClass(value, original, value)),
							style: ACCENTS.some((item) => item.color.toLowerCase() === value.toLowerCase()) ? void 0 : { background: value }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block h-4 text-[10px] text-muted",
							children: "自定义"
						})]
					})]
				}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-2 text-[13px] text-muted",
						children: "黑的程度"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 flex gap-2",
						children: BLACKS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: cn("h-8 flex-1 rounded-[8px]", chipClass(c, original, value)),
							style: { background: c },
							onClick: () => onPick(c)
						}, c))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-6 gap-2",
						children: TEXT_COLORS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: cn("h-8 rounded-[8px]", chipClass(c, original, value)),
							style: { background: c },
							onClick: () => onPick(c)
						}, c))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "text-[14px] text-primary",
							onClick: () => setCustom(true),
							children: "自定义"
						}), !BLACKS.includes(value) && !TEXT_COLORS.includes(value) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("size-6 rounded-[6px]", chipClass(value, original, value)),
							style: { background: value }
						}) : null]
					})
				] })
			})]
		})]
	}), document.body);
}
function Hue({ value, onChange }) {
	const ref = (0, import_react.useRef)(null);
	const from = (x) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const t = r.width <= 0 ? 0 : (x - r.left) / r.width;
		onChange(Math.round(Math.min(1, Math.max(0, t)) * 360));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-1 text-[13px] text-muted",
		children: "色相"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "relative h-8 touch-none rounded-[8px]",
		style: { background: "linear-gradient(90deg,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00)" },
		onPointerDown: (e) => {
			e.currentTarget.setPointerCapture(e.pointerId);
			from(e.clientX);
		},
		onPointerMove: (e) => {
			if (e.currentTarget.hasPointerCapture(e.pointerId)) from(e.clientX);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow",
			style: {
				left: `${value / 360 * 100}%`,
				background: hsvToHex(value, 1, 1)
			}
		})
	})] });
}
function clampCover(scale, ox, oy, sMin, sMax, fw, fh, natW, natH) {
	const s = Math.min(sMax, Math.max(sMin, scale || sMin));
	const maxX = Math.max(0, (natW * s - fw) / 2);
	const maxY = Math.max(0, (natH * s - fh) / 2);
	return {
		scale: s,
		ox: Math.min(maxX, Math.max(-maxX, ox)),
		oy: Math.min(maxY, Math.max(-maxY, oy))
	};
}
function CoverCrop({ src, onCancel, onDone }) {
	const stageRef = (0, import_react.useRef)(null);
	const imgRef = (0, import_react.useRef)(null);
	const [box, setBox] = (0, import_react.useState)({
		w: 0,
		h: 0
	});
	const [nat, setNat] = (0, import_react.useState)({
		w: 0,
		h: 0
	});
	const [view, setView] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const frameW = Math.min(box.w * .72, box.h * .72 * (9 / 16));
	const frameH = frameW * (16 / 9);
	const ready = nat.w > 0 && frameW > 8;
	const sMin = ready ? Math.max(frameW / nat.w, frameH / nat.h) : 1;
	const sMax = sMin * 4;
	const shown = view ?? {
		scale: sMin,
		ox: 0,
		oy: 0
	};
	const viewRef = (0, import_react.useRef)(shown);
	viewRef.current = shown;
	const geo = (0, import_react.useRef)({
		sMin,
		sMax,
		frameW,
		frameH,
		natW: nat.w,
		natH: nat.h
	});
	geo.current = {
		sMin,
		sMax,
		frameW,
		frameH,
		natW: nat.w,
		natH: nat.h
	};
	const pointers = (0, import_react.useRef)(/* @__PURE__ */ new Map());
	const gesture = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = stageRef.current;
		if (!el) return;
		const measure = () => setBox({
			w: el.clientWidth,
			h: el.clientHeight
		});
		measure();
		const ro = new ResizeObserver(measure);
		ro.observe(el);
		return () => ro.disconnect();
	}, []);
	const apply = (scale, ox, oy) => {
		const g = geo.current;
		const next = clampCover(scale, ox, oy, g.sMin, g.sMax, g.frameW, g.frameH, g.natW, g.natH);
		viewRef.current = next;
		setView(next);
	};
	const begin = () => {
		const pts = [...pointers.current.values()];
		const v = viewRef.current;
		if (pts.length >= 2) {
			const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y) || 1;
			gesture.current = {
				ox: v.ox,
				oy: v.oy,
				scale: v.scale,
				x: 0,
				y: 0,
				dist,
				mx: (pts[0].x + pts[1].x) / 2,
				my: (pts[0].y + pts[1].y) / 2
			};
		} else if (pts.length === 1) gesture.current = {
			ox: v.ox,
			oy: v.oy,
			scale: v.scale,
			x: pts[0].x,
			y: pts[0].y,
			dist: 0,
			mx: pts[0].x,
			my: pts[0].y
		};
		else gesture.current = null;
	};
	const onPointerDown = (e) => {
		if (!ready) return;
		e.currentTarget.setPointerCapture(e.pointerId);
		pointers.current.set(e.pointerId, {
			x: e.clientX,
			y: e.clientY
		});
		begin();
	};
	const onPointerMove = (e) => {
		if (!pointers.current.has(e.pointerId)) return;
		pointers.current.set(e.pointerId, {
			x: e.clientX,
			y: e.clientY
		});
		const g = gesture.current;
		if (!g) return;
		const pts = [...pointers.current.values()];
		if (pts.length >= 2) {
			const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y) || 1;
			const mx = (pts[0].x + pts[1].x) / 2;
			const my = (pts[0].y + pts[1].y) / 2;
			const scale = g.scale * (dist / g.dist);
			const k = scale / g.scale;
			apply(scale, g.ox * k + (mx - g.mx), g.oy * k + (my - g.my));
		} else apply(g.scale, g.ox + (e.clientX - g.x), g.oy + (e.clientY - g.y));
	};
	const onPointerUp = (e) => {
		pointers.current.delete(e.pointerId);
		begin();
	};
	const finish = () => {
		const img = imgRef.current;
		const g = geo.current;
		if (!img || !g.natW || !g.frameW || busy) return;
		setBusy(true);
		const { scale, ox, oy } = viewRef.current;
		const sw = g.frameW / scale;
		const sh = g.frameH / scale;
		const sx = Math.max(0, Math.min(g.natW - sw, (g.natW - sw) / 2 - ox / scale));
		const sy = Math.max(0, Math.min(g.natH - sh, (g.natH - sh) / 2 - oy / scale));
		const canvas = document.createElement("canvas");
		canvas.width = 720;
		canvas.height = 1280;
		const ctx = canvas.getContext("2d");
		if (!ctx) {
			setBusy(false);
			return;
		}
		ctx.drawImage(img, sx, sy, sw, sh, 0, 0, 720, 1280);
		canvas.toBlob((blob) => {
			if (!blob) {
				setBusy(false);
				return;
			}
			onDone(blob);
		}, "image/jpeg", .86);
	};
	const dw = nat.w * shown.scale;
	const dh = nat.h * shown.scale;
	const cx = box.w / 2;
	const cy = box.h / 2;
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[100] flex flex-col bg-black text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center px-1 pt-[max(8px,env(safe-area-inset-top))]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-11 place-items-center",
						"aria-label": "返回",
						onClick: onCancel,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 text-center text-[16px]",
						children: "裁成竖图"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-11" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: stageRef,
				className: "relative min-h-0 flex-1 touch-none overflow-hidden",
				onPointerDown,
				onPointerMove,
				onPointerUp,
				onPointerCancel: onPointerUp,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					ref: imgRef,
					src,
					alt: "",
					draggable: false,
					onLoad: (e) => setNat({
						w: e.currentTarget.naturalWidth,
						h: e.currentTarget.naturalHeight
					}),
					onError: onCancel,
					className: "absolute max-w-none select-none",
					style: {
						width: dw || void 0,
						height: dh || void 0,
						left: cx + shown.ox - dw / 2,
						top: cy + shown.oy - dh / 2,
						opacity: ready ? 1 : 0
					}
				}), ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute border border-white/90",
					style: {
						width: frameW,
						height: frameH,
						left: cx - frameW / 2,
						top: cy - frameH / 2,
						boxShadow: "0 0 0 9999px rgba(0,0,0,0.55)"
					}
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex shrink-0 justify-end px-4 pb-[max(16px,env(safe-area-inset-bottom))] pt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "rounded-full bg-primary px-6 py-2 text-[15px] text-on-primary disabled:opacity-40",
					disabled: !ready || busy,
					onClick: finish,
					children: "完成"
				})
			})
		]
	}), document.body);
}
function ChatModelSelect({ align = "center", className }) {
	const llmModel = useApp((s) => s.settings.llmModel);
	const starred = useApp((s) => s.settings.llmStarred);
	const available = useApp((s) => s.settings.llmModels);
	const accounts = useApp((s) => s.settings.llmAccounts);
	const connected = useApp((s) => s.settings.llmConnected);
	const ids = chatPickerModels(starred, available, llmModel);
	if (!connected || ids.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "inline-flex h-9 items-center rounded-full px-3 text-[14px] font-medium text-muted",
		onClick: () => useApp.getState().setUI({
			connection: true,
			llmSettings: true
		}),
		children: connected ? "去标星模型" : "先连接 API"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpandSelect, {
		value: llmModel || ids[0],
		options: ids.map((id) => {
			const full = llmModelLabel(id, accounts ?? [], available);
			const name = llmModelName(id);
			return {
				id,
				label: full,
				short: full === name ? shortModelLabel(name) : `${shortModelLabel(name)}${full.slice(name.length)}`
			};
		}),
		onChange: (id) => useApp.getState().setSettings(applyLlmPick(useApp.getState().settings, id)),
		align,
		className
	});
}
var noShots = [];
function ChatPane({ chat }) {
	const left = useCooldown(useApp((s) => s.settings.cooldownUntil));
	const chatImage = useApp((s) => s.settings.chatImage !== false);
	const memoryHint = useApp((s) => s.ui.memoryHint);
	const editUser = useApp((s) => s.ui.editUserMsg?.chatId === chat.id ? s.ui.editUserMsg : null);
	const scroller = (0, import_react.useRef)(null);
	const inputRef = (0, import_react.useRef)(null);
	const [atBottom, setAtBottom] = (0, import_react.useState)(true);
	const draft = useApp((s) => s.composerDrafts[chat.id] ?? "");
	const shots = useApp((s) => s.composerShots[chat.id] ?? noShots);
	(0, import_react.useEffect)(() => {
		const el = scroller.current;
		if (!el) return;
		el.scrollTop = chat.scrollTop || 0;
		const bottom = el.scrollHeight - el.scrollTop - el.clientHeight < 80;
		setAtBottom(bottom);
	}, [chat.id]);
	(0, import_react.useEffect)(() => {
		if (editUser) requestAnimationFrame(() => inputRef.current?.focus());
	}, [editUser?.msgId]);
	const onScroll = () => {
		const el = scroller.current;
		if (!el) return;
		const bottom = el.scrollHeight - el.scrollTop - el.clientHeight < 80;
		setAtBottom(bottom);
		useApp.getState().patchChat(chat.id, { scrollTop: el.scrollTop });
	};
	const startUserEdit = (msg) => {
		const backup = editUser ? editUser.backup : draft;
		const shotBackup = editUser ? editUser.shotBackup : shots.length ? shots.map((s) => ({ ...s })) : null;
		useApp.getState().setUI({ editUserMsg: {
			chatId: chat.id,
			msgId: msg.id,
			backup,
			shotBackup
		} });
		useApp.getState().setComposerDraft(chat.id, msg.content);
		useApp.getState().setComposerShot(chat.id, messageShots(msg));
		requestAnimationFrame(() => inputRef.current?.focus());
	};
	const cancelUserEdit = () => {
		if (!editUser) return;
		useApp.getState().setComposerDraft(chat.id, editUser.backup);
		useApp.getState().setComposerShot(chat.id, editUser.shotBackup);
		useApp.getState().setUI({ editUserMsg: null });
	};
	const send = () => {
		const t = draft;
		if (editUser) {
			const pending = shots.length ? shots : null;
			if (!t.trim() && !pending) {
				useApp.getState().toast("写点字，或留一张图");
				return;
			}
			const { msgId, backup, shotBackup } = editUser;
			useApp.getState().setUI({ editUserMsg: null });
			useApp.getState().setComposerDraft(chat.id, backup);
			useApp.getState().setComposerShot(chat.id, shotBackup);
			editMessage(chat.id, msgId, t, pending);
			return;
		}
		useApp.getState().setComposerDraft(chat.id, "");
		const pending = shots.length ? shots : void 0;
		useApp.getState().setComposerShot(chat.id, null);
		sendUser(chat.id, t, pending);
	};
	const portrait = chat.imageParams.height >= chat.imageParams.width;
	const { W, I } = foldWindow();
	const memOk = memoryCaughtUp(chat.messages.length, chat.memoryUntil || 0, W, I);
	const memMine = memoryHint?.chatId === chat.id;
	const memGenerating = memMine && memoryHint?.state === "generating";
	const memOkFlash = memMine && memoryHint?.state === "ok";
	const memFail = !memOk && !memGenerating && !memOkFlash;
	const failReason = memMine && memoryHint?.state === "fail" ? memoryHint.error : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex shrink-0 items-center justify-center gap-1 px-2 py-1",
				children: [
					chat.isMulti && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpandSelect, {
							value: chat.promptMode,
							options: [{
								id: "insert",
								label: "插入版"
							}, {
								id: "legacy",
								label: "原版"
							}],
							onChange: (id) => useApp.getState().patchChat(chat.id, { promptMode: id }),
							menu: "start"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatModelSelect, {}),
					chat.isMulti && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute right-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpandSelect, {
							value: chat.multiMode,
							options: [{
								id: "together",
								label: "多人同聊模式"
							}, {
								id: "group",
								label: "群聊模式"
							}],
							onChange: (id) => useApp.getState().patchChat(chat.id, { multiMode: id }),
							menu: "end"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-[1] min-h-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatScene, { chat }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: scroller,
					onScroll,
					className: "relative z-[1] h-full overflow-y-auto px-4 pb-4 scroll-thin",
					children: [chat.messages.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mt-6 max-w-md rounded-2xl bg-card px-4 py-4 text-[13px] leading-7 text-primary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "聊天：在输入框里写完点发送即可。" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "生图参数：只作用于当前角色的配图，模型、提示词、分辨率、步数都在那里改。" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "纯生图：只出图，不聊天，参数和聊天完全独立。" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "顶栏可切换当前用的模型。润色人设、写提示词、聊天回复都用同一个。" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted",
								children: [
									"对 ",
									chat.name || "她",
									" 说点什么。(动作) 是已经发生的事实，《》是给 AI 的指令，角色听不见。"
								]
							})
						]
					}), chat.messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bubble, {
						chat,
						msg: m,
						showImageTray: chatImage && !isWorkshopChat(chat) && m.role !== "user",
						onUseOption: (t) => {
							useApp.getState().setComposerDraft(chat.id, t);
							requestAnimationFrame(() => inputRef.current?.focus());
						},
						onEditUser: m.role === "user" ? () => startUserEdit(m) : void 0
					}, m.id))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shrink-0 bg-bg px-3 pb-[calc(env(safe-area-inset-bottom)+10px)] pt-1",
				children: [
					!isWorkshopChat(chat) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WechatChip, { chatId: chat.id }),
					!isWorkshopChat(chat) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1.5 flex h-6 items-center gap-1.5 px-0.5 text-[13px] leading-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex h-[22px] items-center gap-1.5 rounded-md border border-line bg-card px-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: cnToggle(portrait),
										onClick: () => {
											if (!portrait) useApp.getState().patchParams(chat.id, {
												width: chat.imageParams.height,
												height: chat.imageParams.width
											});
										},
										children: "竖图"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-faint",
										children: "|"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: cnToggle(!portrait),
										onClick: () => {
											if (portrait) useApp.getState().patchParams(chat.id, {
												width: chat.imageParams.height,
												height: chat.imageParams.width
											});
										},
										children: "横图"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex min-w-0 flex-1 items-center justify-center",
								children: chatImage ? left > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-medium text-danger",
									children: [left, "s"]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-good",
									children: "可生图"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: "生图已关"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: chat.adultBoost ? "inline-flex h-[22px] items-center rounded-md border border-line px-1.5 font-medium text-ink" : "inline-flex h-[22px] items-center rounded-md border border-line px-1.5 text-muted",
								onClick: () => useApp.getState().patchChat(chat.id, { adultBoost: !chat.adultBoost }),
								children: "成人提示词"
							})
						]
					}),
					memGenerating || memOkFlash || memFail ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 px-[52px] pb-1 text-[12px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: memFail ? "min-w-0 flex-1 text-danger" : memOkFlash ? "min-w-0 flex-1 text-good" : "min-w-0 flex-1 text-faint",
							children: memGenerating ? "生成记忆中" : memOkFlash ? "记忆已生成" : failReason ? `记忆生成失败（${failReason}）` : "记忆生成失败"
						}), memGenerating ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "shrink-0 text-muted",
							onClick: () => cancelMemory(chat.id),
							children: "取消"
						}) : memFail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "shrink-0 text-muted",
							onClick: () => retryMemory(chat.id),
							children: "重试"
						}) : null]
					}) : null,
					shots.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-2 ml-11 flex gap-2 overflow-x-auto pb-1",
						children: shots.map((shot, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex shrink-0 flex-col items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComposerThumb, {
								blobId: shot.blobId,
								onRemove: () => {
									const next = shots.filter((_, at) => at !== i);
									useApp.getState().setComposerShot(chat.id, next.length ? next : null);
								}
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: `rounded-full border px-2.5 py-1 text-[12px] ${shot.i2i ? "border-primary bg-primary text-on-primary" : "border-line text-muted"}`,
								onClick: () => {
									const on = !shot.i2i;
									useApp.getState().setComposerShot(chat.id, shots.map((s, at) => ({
										...s,
										i2i: on && at === i
									})));
								},
								children: "以图生图"
							})]
						}, `${shot.blobId}-${i}`))
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "grid size-9 shrink-0 place-items-center rounded-full text-muted",
								onClick: () => {
									const el = scroller.current;
									if (!el) return;
									if (atBottom) el.scrollTo({
										top: 0,
										behavior: "smooth"
									});
									else el.scrollTo({
										top: el.scrollHeight,
										behavior: "smooth"
									});
								},
								"aria-label": atBottom ? "回到顶部" : "回到底部",
								children: atBottom ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-5 rotate-180" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								ref: inputRef,
								value: draft,
								onChange: (e) => useApp.getState().setComposerDraft(chat.id, e.target.value),
								onKeyDown: (e) => {
									if (e.key === "Enter" && !e.shiftKey) {
										e.preventDefault();
										if (replyPending(chat.id)) abortChat(chat.id);
										else send();
									}
								},
								rows: 1,
								placeholder: "",
								className: "max-h-32 min-h-[46px] flex-1 resize-none rounded-full border border-line bg-card px-4 py-3 text-[14px] outline-none"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePick, {
								multiple: true,
								onFile: () => void 0,
								onFiles: (files) => void addChatShots(chat.id, files, null),
								onBlobs: (ids) => void addChatShots(chat.id, null, ids),
								onWechat: () => openWechat(chat),
								render: (open) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "grid size-11 shrink-0 place-items-center rounded-full border border-line text-ink",
									"aria-label": "添加图片",
									onClick: open,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-5" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									if (replyPending(chat.id)) {
										abortChat(chat.id);
										return;
									}
									send();
								},
								className: "grid size-11 shrink-0 place-items-center rounded-full bg-primary text-on-primary",
								"aria-label": replyPending(chat.id) ? "停止" : editUser ? "保存" : "发送",
								children: replyPending(chat.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-[2px] bg-on-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-5" })
							})
						]
					}),
					editUser ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center pt-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "text-[12px] text-muted",
							onClick: cancelUserEdit,
							children: "取消编辑"
						})
					}) : null
				]
			})
		]
	});
}
function ComposerThumb({ blobId, onRemove }) {
	const [url, setUrl] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let dead = false;
		imageUrl(blobId).then((u) => {
			if (!dead) setUrl(u);
		});
		return () => {
			dead = true;
		};
	}, [blobId]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomImg, {
			src: url,
			className: "h-24 w-20 rounded-[14px] object-cover"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-24 w-20 rounded-[14px] bg-dim" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute -right-1 -top-1 z-10 grid size-6 place-items-center rounded-full bg-card text-ink",
			"aria-label": "去掉图片",
			onClick: onRemove,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
		})]
	});
}
async function addChatShots(chatId, files, blobIds) {
	const room = 9 - (useApp.getState().composerShots[chatId]?.length ?? 0);
	if (room <= 0) {
		useApp.getState().toast("最多 9 张");
		return;
	}
	if ((files ? files.length : blobIds?.length ?? 0) > room) useApp.getState().toast("最多 9 张");
	const added = [];
	if (files) for (const file of files.slice(0, room)) {
		const blob = await compressRef(file, 1024, .85);
		added.push({
			blobId: await saveBlob(blob),
			i2i: false
		});
	}
	else {
		for (const id of (blobIds ?? []).slice(0, room)) {
			const blob = await getImage(id);
			if (!blob) continue;
			added.push({
				blobId: await saveBlob(blob),
				i2i: false
			});
		}
		if (!added.length) {
			useApp.getState().toast("这张图已经不在了");
			return;
		}
	}
	const latest = useApp.getState().composerShots[chatId] ?? [];
	useApp.getState().setComposerShot(chatId, [...latest, ...added].slice(0, 9));
}
function UserShot({ blobId, i2i }) {
	const [url, setUrl] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let dead = false;
		imageUrl(blobId).then((u) => {
			if (!dead) setUrl(u);
		});
		return () => {
			dead = true;
		};
	}, [blobId]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-end",
		children: [url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomImg, {
			src: url,
			className: "h-28 max-w-full rounded-[14px] object-cover"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-28 w-24 rounded-[14px] bg-dim" }), i2i ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-[11px] text-muted",
			children: "以图生图"
		}) : null]
	});
}
function jumpParams(section) {
	useApp.getState().setUI({ paramsJump: section });
	useApp.getState().setTab("params");
}
function cnToggle(on) {
	return on ? "px-1 font-medium text-ink" : "px-1 text-muted";
}
function WechatChip({ chatId }) {
	if (!useApp((s) => s.wechatSessions[chatId]?.minimized === true)) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "mx-auto mb-2 block rounded-full border border-line bg-card px-4 py-1.5 text-[13px] text-ink",
		onClick: () => {
			const cur = useApp.getState().wechatSessions[chatId];
			if (!cur) return;
			useApp.getState().setWechatSession(chatId, {
				...cur,
				minimized: false
			});
		},
		children: "微信聊天中..."
	});
}
var SCENE_BOX = "rounded-[16px] border border-line bg-surface/60 px-3.5 py-3 text-[13px] leading-6 text-ink";
function deltaMark(delta) {
	if (delta > 0) return `📈+${delta}`;
	if (delta < 0) return `📉${delta}`;
	return "0";
}
function AffinityFace({ a, lookSay }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-[15px] leading-snug",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-bold",
				children: "💞好感度:"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-bold",
				style: { color: "#d23a3a" },
				children: a.value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"[",
				deltaMark(a.delta),
				"Ⅰ",
				a.stage,
				"]"
			] })
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-1",
		style: {
			color: lookSay,
			fontWeight: 700,
			fontStyle: "italic"
		},
		children: [
			"「",
			a.quote,
			"」"
		]
	})] });
}
function StatusLines({ lines }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-2 whitespace-pre-wrap",
		children: lines.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-bold",
			children: [line.title, ":"]
		}), line.value] }, i))
	});
}
function SceneFace({ card, lookSay, statusOn, loveOn }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const showLove = loveOn && card.affinity;
	const showStatus = statusOn && card.lines.length > 0;
	if (!showLove && !showStatus) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: SCENE_BOX,
		children: [showLove && card.affinity ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AffinityFace, {
			a: card.affinity,
			lookSay
		}) : null, showStatus ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "flex items-center gap-1 text-[15px] font-bold leading-snug",
			onClick: () => setOpen((v) => !v),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-3.5 shrink-0 transition", open ? "" : "-rotate-90") }),
				"「",
				card.name || "角色",
				"」当前的状态"
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusLines, { lines: card.lines }) : null] }) : null]
	});
}
function SceneEditor({ cards, lookSay, statusOn, loveOn, onChange }) {
	const patch = (i, next) => onChange(cards.map((c, n) => n === i ? next : c));
	const shown = cards.map((card, i) => ({
		card,
		i
	})).filter(({ card }) => loveOn && card.affinity || statusOn && card.lines.length > 0);
	if (!shown.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-3 space-y-2",
		children: shown.map(({ card, i }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: SCENE_BOX,
			children: [loveOn && card.affinity ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AffinityEdit, {
				a: card.affinity,
				lookSay,
				onChange: (a) => patch(i, {
					...card,
					affinity: a
				})
			}) : null, statusOn && card.lines.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: loveOn && card.affinity ? "mt-2" : "",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-[15px] font-bold leading-snug",
					children: [
						"「",
						card.name || "角色",
						"」当前的状态"
					]
				}), card.lines.map((line, li) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-1 flex items-start gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "shrink-0 font-bold",
						children: [line.title, ":"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: line.value,
						onChange: (e) => {
							const lines = card.lines.map((row, n) => n === li ? {
								...row,
								value: e.target.value
							} : row);
							patch(i, {
								...card,
								lines
							});
						},
						className: "min-w-0 flex-1 bg-transparent outline-none"
					})]
				}, li))]
			}) : null]
		}, i))
	});
}
function AffinityEdit({ a, lookSay, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-1 text-[15px] leading-snug",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-bold",
				children: "💞好感度:"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: String(a.value),
				onChange: (e) => onChange({
					...a,
					value: Number(e.target.value.replace(/[^\d-]/g, "")) || 0
				}),
				className: "w-12 bg-transparent font-bold outline-none",
				style: { color: "#d23a3a" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "[" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: String(a.delta),
				onChange: (e) => onChange({
					...a,
					delta: Number(e.target.value.replace(/[^\d-]/g, "")) || 0
				}),
				className: "w-10 bg-transparent outline-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ⅰ" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: a.stage,
				onChange: (e) => onChange({
					...a,
					stage: e.target.value
				}),
				className: "min-w-0 flex-1 bg-transparent outline-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "]" })
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		value: a.quote,
		onChange: (e) => onChange({
			...a,
			quote: e.target.value
		}),
		rows: 2,
		className: "mt-1 w-full resize-y bg-transparent outline-none",
		style: {
			color: lookSay,
			fontWeight: 700,
			fontStyle: "italic"
		}
	})] });
}
function Bubble({ chat, msg, showImageTray, onUseOption, onEditUser }) {
	const [edit, setEdit] = (0, import_react.useState)(false);
	const [text, setText] = (0, import_react.useState)(msg.content);
	const [draftCards, setDraftCards] = (0, import_react.useState)([]);
	const editRef = (0, import_react.useRef)(null);
	const generating = msg.role !== "user" && !msg.content;
	const names = [
		msg.characterName,
		chat.name,
		...chat.characters.map((c) => c.name),
		"角色"
	];
	const look = readLook(useApp((s) => s.settings.look));
	const person = msg.characterName || chat.characters.find((c) => c.id === msg.characterId)?.name || chat.characters[0]?.name || chat.name || "角色";
	const statusOn = chat.statusBarOn === true;
	const loveOn = chat.affectionOn === true;
	const scene = msg.role === "user" ? {
		body: msg.content,
		cards: []
	} : presentScene(msg.content, {
		status: statusOn,
		affection: loveOn
	}, person);
	const cards = msg.role === "narrator" ? [] : scene.cards;
	const editingUser = useApp((s) => s.ui.editUserMsg?.msgId === msg.id);
	const startAssistEdit = () => {
		const full = readScene(msg.content, person);
		setText(full.body);
		setDraftCards(full.cards);
		setEdit(true);
		requestAnimationFrame(() => editRef.current?.focus());
	};
	const saveAssistEdit = () => {
		const nameLine = chat.isMulti && chat.multiMode === "together";
		editMessage(chat.id, msg.id, writeScene(text, draftCards, nameLine));
		if (loveOn) {
			const next = { ...chat.affections ?? {} };
			for (const card of draftCards) {
				if (!card.affinity) continue;
				const who = msg.characterId && chat.characters.find((c) => c.id === msg.characterId) || chat.characters.find((c) => c.name && c.name === card.name) || (chat.characters.length === 1 ? chat.characters[0] : void 0);
				if (who) next[who.id] = card.affinity.value;
			}
			useApp.getState().patchChat(chat.id, { affections: next });
		}
		setEdit(false);
	};
	if (msg.role === "user") {
		if (msg.wechatLog) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex flex-col items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "rounded-[12px] border border-line bg-card px-4 py-3 text-[14px] text-ink",
				onClick: () => useApp.getState().setUI({ wechatView: {
					chatId: chat.id,
					msgId: msg.id
				} }),
				children: msg.wechatLog.voided ? "失效的聊天记录" : "已保存的微信内容"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1.5 flex justify-end gap-1.5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
					onClick: () => void branchFrom(chat.id, msg.id),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitBranch, { className: "size-3" }),
					label: "开分支"
				})
			})]
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex flex-col items-end",
			children: [
				messageShots(msg).length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-1.5 flex max-w-[85%] flex-wrap justify-end gap-1.5",
					children: messageShots(msg).map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserShot, {
						blobId: s.blobId,
						i2i: s.i2i
					}, `${s.blobId}-${i}`))
				}) : null,
				msg.content.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("w-fit min-h-[2.75rem] min-w-[5.5rem] max-w-[85%] rounded-[18px] border px-4 py-2.5", editingUser ? "border-primary bg-card" : "border-line bg-card"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "whitespace-pre-wrap text-[14px] leading-relaxed text-ink",
						children: msg.content
					})
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1.5 flex justify-end gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
						onClick: () => onEditUser?.(),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-3" }),
						label: "编辑"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
						onClick: () => void branchFrom(chat.id, msg.id),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitBranch, { className: "size-3" }),
						label: "开分支"
					})]
				})
			]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			className: "mb-2 flex items-center gap-2",
			onClick: () => {
				if (isWorkshopChat(chat)) useApp.getState().setUI({ workshopEditId: chat.id });
				else useApp.getState().beginEdit(chat.id);
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatAvatar, {
				chat,
				name: msg.characterName || chat.name,
				size: 36
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[16px] font-semibold",
				children: workshopTitle({
					kind: chat.kind,
					name: msg.characterName || chat.name
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pl-[44px]",
			children: [
				generating ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-sans text-[14px] text-muted",
					children: ["回复中", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex gap-0.5 pl-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
								className: "animate-pulse",
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
								className: "animate-pulse",
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
								className: "animate-pulse",
								children: "·"
							})
						]
					})]
				}) : edit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					ref: editRef,
					value: text,
					onChange: (e) => setText(e.target.value),
					className: "serif-body min-h-[120px] w-full resize-y bg-transparent text-[16px] leading-relaxed text-narrate outline-none"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReplyView, {
					text: scene.body,
					names,
					onUseOption,
					chat
				}),
				edit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneEditor, {
					cards: draftCards,
					lookSay: look.say,
					statusOn,
					loveOn,
					onChange: setDraftCards
				}),
				edit ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex flex-wrap gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex h-7 items-center rounded-full border border-line bg-card px-3 text-[12px] text-muted",
						onClick: () => setEdit(false),
						children: "取消"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex h-7 items-center rounded-full bg-primary px-3 text-[12px] text-on-primary",
						onClick: saveAssistEdit,
						children: "保存"
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex flex-wrap gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							onClick: () => void regenMessage(chat.id, msg.id),
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-3" }),
							label: "重新生成"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							onClick: () => void branchFrom(chat.id, msg.id),
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitBranch, { className: "size-3" }),
							label: "开分支"
						}),
						!generating && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							onClick: startAssistEdit,
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-3" }),
							label: "编辑"
						}),
						chat.kind === "card" && !generating && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							onClick: () => {
								navigator.clipboard.writeText(msg.content);
								useApp.getState().toast("已复制");
							},
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3" }),
							label: "复制"
						})
					]
				}),
				chat.kind === "card" && !edit && !generating && replyLooksLikeCard(msg.content) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-2 inline-flex h-7 items-center rounded-full border border-line bg-card px-3 text-[12px]",
					onClick: () => useApp.getState().setUI({ workshopCardText: msg.content }),
					children: "保存为角色卡"
				}),
				cards.length > 0 && !edit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 space-y-2",
					children: cards.map((card, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneFace, {
						card,
						lookSay: look.say,
						statusOn,
						loveOn
					}, i))
				}),
				(msg.images.length > 0 || showImageTray && !generating) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageBlock, {
					chat,
					msg,
					allowEmpty: Boolean(showImageTray && !generating)
				})
			]
		})]
	});
}
function ReplyView({ text, names, onUseOption, chat }) {
	const parsed = parseReplyMarkup(text);
	const think = parsed.folds.filter((f) => f.kind === "think");
	const notes = parsed.folds.filter((f) => f.kind === "note");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		think.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReplyFoldRow, { fold: f }, `think-${i}-${f.title}`)),
		parsed.body ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RpBody, {
			text: parsed.body,
			names,
			chat
		}) : null,
		notes.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReplyFoldRow, { fold: f }, `note-${i}-${f.title}`)),
		parsed.options.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 space-y-1.5",
			children: parsed.options.map((opt, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onUseOption?.(opt),
				className: "block w-full rounded-[16px] border border-line bg-card px-3 py-2 text-left text-[13px] leading-snug text-ink",
				children: opt
			}, i))
		}) : null
	] });
}
function ReplyFoldRow({ fold }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: fold.kind === "think" ? "mb-2" : "mt-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setOpen((v) => !v),
			className: "inline-flex items-center gap-1 text-[12px] text-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-3.5 shrink-0 transition", open ? "" : "-rotate-90") }), fold.title]
		}), open && fold.body ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 whitespace-pre-wrap text-[13px] leading-relaxed text-narrate",
			children: fold.body
		}) : null]
	});
}
function ChatScene({ chat }) {
	const look = readLook(useApp((s) => s.settings.look));
	const own = Boolean(chat.bgImageId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneBackdrop, {
		blobId: own ? chat.bgImageId : look.bgImageId,
		fade: own ? chat.bgFade ?? 40 : look.bgFade,
		paper: look.paper
	});
}
function RpBody({ text, names, chat }) {
	const look = readLook(useApp((s) => s.settings.look));
	const plate = (typeof chat.textPlate === "boolean" ? chat.textPlate : look.textPlate) && Boolean(chat.bgImageId || look.bgImageId);
	const { body, status } = stripStatus(stripSpeakerPrefix(text, names));
	const parts = splitDialogue(body);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("serif-body whitespace-pre-wrap", plate && "rounded-[16px] px-3 py-2"),
		style: {
			fontFamily: fontStack(look.font),
			fontSize: look.size,
			fontWeight: look.weight,
			color: look.narrate,
			background: plate ? `color-mix(in srgb, ${look.paper} 86%, transparent)` : void 0
		},
		children: parts.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: p.kind === "say" ? {
				fontStyle: "italic",
				fontWeight: sayWeight(look.weight),
				color: look.say
			} : void 0,
			children: p.text
		}, i))
	}), status ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-3 whitespace-pre-wrap font-sans text-[13px] leading-6 text-ink",
		children: status
	}) : null] });
}
function Mini({ icon, label, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick,
		className: "inline-flex h-6 items-center gap-0.5 rounded-full border border-line bg-card px-2 text-[11px] leading-none text-muted",
		children: [icon, label]
	});
}
function ImageBlock({ chat, msg, allowEmpty }) {
	const chatImage = useApp((s) => s.settings.chatImage !== false);
	const done = msg.images.filter((g) => g.status === "done" && g.blobId);
	const pendingImg = msg.images.find((g) => g.status !== "done" && g.status !== "error");
	const pending = Boolean(pendingImg);
	const followLatest = (0, import_react.useRef)(true);
	const prevDone = (0, import_react.useRef)(done.length);
	const [idx, setIdx] = (0, import_react.useState)(() => Math.max(0, done.length - 1));
	const [url, setUrl] = (0, import_react.useState)(null);
	const [saved, setSaved] = (0, import_react.useState)(false);
	const [kick, setKick] = (0, import_react.useState)(null);
	const [flashErr, setFlashErr] = (0, import_react.useState)(null);
	const seenFail = (0, import_react.useRef)("");
	const current = done[idx] ?? done[done.length - 1];
	const busy = kick ?? pendingImg?.source ?? null;
	const locked = pending || Boolean(kick) || !chatImage;
	(0, import_react.useEffect)(() => {
		if (!pending) setKick(null);
	}, [pending]);
	(0, import_react.useEffect)(() => {
		if (done.length > prevDone.current) {
			setIdx(done.length - 1);
			followLatest.current = true;
		} else if (idx >= done.length && done.length > 0) setIdx(done.length - 1);
		prevDone.current = done.length;
	}, [done.length, idx]);
	(0, import_react.useEffect)(() => {
		let gone = false;
		if (current?.blobId) imageUrl(current.blobId).then((u) => {
			if (!gone) setUrl(u);
		});
		else setUrl(null);
		return () => {
			gone = true;
		};
	}, [current?.blobId]);
	const go = (dir) => {
		const n = done.length;
		if (n < 2) return;
		setIdx((i) => {
			const next = (i + dir + n) % n;
			followLatest.current = next === n - 1;
			return next;
		});
	};
	const latest = msg.images.at(-1);
	const lastError = latest?.status === "error" ? latest : void 0;
	const phaseLabel = genPhaseLabel(pendingImg?.status) || (kick === "rewrite" || kick === "auto" ? "写提示词中" : kick ? "上传中" : "");
	(0, import_react.useEffect)(() => {
		if (pending || !lastError || !current?.blobId) {
			if (!lastError) setFlashErr(null);
			return;
		}
		if (seenFail.current === lastError.id) return;
		seenFail.current = lastError.id;
		setFlashErr(genPhaseLabel("error", lastError.error));
		const t = window.setTimeout(() => setFlashErr(null), 2e3);
		return () => window.clearTimeout(t);
	}, [
		pending,
		lastError,
		current?.blobId
	]);
	if (msg.images.length === 0 && !allowEmpty) return null;
	const showFrame = msg.images.length > 0 || pending;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3",
		children: [
			current && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-1 flex w-full flex-wrap items-center gap-x-2 gap-y-0.5 text-left text-[11px] text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => jumpParams("model"),
						children: modelLabel(current.model)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => jumpParams("size"),
						children: [
							current.width,
							"×",
							current.height
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => jumpParams("steps"),
						children: [current.steps, "步"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => jumpParams("sampler"),
						children: samplerLabel(current.sampler)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							useApp.getState().patchParams(chat.id, { seed: current.seed });
							jumpParams("seed");
						},
						children: String(current.seed).slice(0, 8)
					}),
					chat.isMulti && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "text-danger",
						onClick: () => jumpParams("chars"),
						children: "多"
					})
				]
			}),
			showFrame ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative overflow-hidden rounded-[18px] bg-dim",
				children: current && url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: url,
						alt: "",
						className: "w-full"
					}), done.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "absolute inset-y-0 left-0 w-1/2",
						onClick: () => go(-1),
						"aria-label": "上一张"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "absolute inset-y-0 right-0 w-1/2",
						onClick: () => go(1),
						"aria-label": "下一张"
					})] })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid place-items-center px-4 text-[13px] text-muted",
					style: { aspectRatio: `${chat.imageParams.width} / ${chat.imageParams.height}` },
					children: pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }),
								" ",
								phaseLabel || "准备中"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "text-primary",
							onClick: () => cancelImage(chat.id, msg.id),
							children: "取消"
						})]
					}) : lastError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-center text-danger",
						children: genPhaseLabel("error", lastError.error)
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-center text-muted",
						children: "还没有配图"
					})
				})
			}) : null,
			flashErr ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 truncate text-center text-[11px] leading-4 text-danger",
				children: flashErr
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 grid grid-cols-4 text-[12px] text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IcoBtn, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-4" }),
						label: busy === "same" && phaseLabel ? phaseLabel : "重新生成",
						busy: busy === "same",
						disabled: locked || !current,
						onClick: () => {
							if (busy === "same") {
								cancelImage(chat.id, msg.id);
								return;
							}
							if (locked || !current) return;
							setKick("same");
							attachImage(chat.id, msg.id, "same");
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IcoBtn, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }),
						label: (busy === "rewrite" || busy === "auto") && phaseLabel ? phaseLabel : "换提示词生成",
						busy: busy === "rewrite" || busy === "auto",
						disabled: locked,
						onClick: () => {
							if (busy === "rewrite" || busy === "auto") {
								cancelImage(chat.id, msg.id);
								return;
							}
							if (locked) return;
							setKick("rewrite");
							attachImage(chat.id, msg.id, "rewrite");
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IcoBtn, {
						icon: saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-good" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }),
						label: "下载",
						disabled: !current?.blobId,
						onClick: async () => {
							if (!current?.blobId) return;
							const u = await imageUrl(current.blobId);
							if (!u) return;
							downloadBlob(await fetch(u).then((r) => r.blob()), String(current.seed));
							setSaved(true);
							setTimeout(() => setSaved(false), 1e3);
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IcoBtn, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "size-4" }),
						label: busy === "custom" && phaseLabel ? phaseLabel : "自定义修改",
						busy: busy === "custom",
						disabled: !chatImage,
						onClick: () => {
							const src = pendingImg && (pendingImg.prompt || pendingImg.charTails) ? pendingImg : current ?? pendingImg;
							if (!src) return;
							useApp.getState().setUI({ customPrompt: {
								chatId: chat.id,
								msgId: msg.id,
								imgId: src.id,
								text: extractGrokTail(src.prompt, chat.imageParams) || src.prompt || "",
								charTails: { ...src.charTails || {} }
							} });
						}
					})
				]
			})
		]
	});
}
function IcoBtn({ icon, label, onClick, busy, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		disabled: busy ? false : disabled,
		"aria-busy": busy || void 0,
		"aria-label": label,
		className: busy ? "flex w-full min-w-0 flex-col items-center gap-1 px-1 py-1 text-center text-primary" : "flex w-full min-w-0 flex-col items-center gap-1 px-1 py-1 text-center disabled:opacity-40",
		children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 shrink-0 animate-spin" }) : icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "max-w-full truncate",
			children: label
		})]
	});
}
function applyChatImageToPure(chat, text, charTails, live, insert) {
	const next = structuredClone(chat.imageParams);
	next.promptMid = joinPromptParts(next.promptMid, text);
	if (live) {
		next.model = live.model;
		next.width = live.width;
		next.height = live.height;
		next.steps = live.steps;
		next.sampler = live.sampler;
		next.negative = live.negative;
		if (live.status === "done") next.seed = live.seed;
	}
	const state = useApp.getState();
	if (state.settings.pureCharLocked === true) {
		next.characters = structuredClone(state.pureParams.characters);
		next.useCoords = state.pureParams.useCoords;
	} else next.characters = next.characters.map((c) => ({
		...c,
		name: "",
		prompt: insert ? joinPromptParts(c.prompt, charTails[c.id] ?? "") : c.prompt
	}));
	state.setPureParams({
		...next,
		img2imgBlobId: next.img2imgBlobId || "",
		img2imgStrength: next.img2imgStrength ?? .7,
		img2imgNoise: next.img2imgNoise ?? 0
	});
	state.toast("应用成功");
}
function CustomPromptModal() {
	const data = useApp((s) => s.ui.customPrompt);
	const setUI = useApp((s) => s.setUI);
	const chat = useApp((s) => data ? s.chats.find((c) => c.id === data.chatId) : void 0);
	const wechatLine = useApp((s) => data?.wechatLineId ? s.wechatSessions[data.chatId]?.lines.find((l) => l.id === data.wechatLineId) : void 0);
	const msg = chat?.messages.find((m) => m.id === data?.msgId);
	const pool = wechatLine ? lineImages(wechatLine) : msg?.images;
	const live = pool?.find((g) => g.id === data?.imgId);
	const generating = pool?.some((g) => g.status !== "done" && g.status !== "error") ?? false;
	const [text, setText] = (0, import_react.useState)(data?.text ?? "");
	const [charTails, setCharTails] = (0, import_react.useState)(data?.charTails ?? {});
	const edited = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		edited.current = false;
		setText(data?.text ?? "");
		setCharTails(data?.charTails ?? {});
	}, [data?.text, data?.imgId]);
	const liveKey = live ? `${live.id}\n${live.prompt}\n${JSON.stringify(live.charTails || {})}` : "";
	(0, import_react.useEffect)(() => {
		if (!chat || !live || edited.current) return;
		if (!live.prompt && !live.charTails) return;
		setText(extractGrokTail(live.prompt, chat.imageParams) || live.prompt || "");
		setCharTails({ ...live.charTails || {} });
	}, [liveKey]);
	if (!data || !chat) return null;
	const insert = chat.isMulti && chat.promptMode === "insert";
	const chars = chat.imageParams.characters;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
		open: true,
		onClose: () => setUI({ customPrompt: null }),
		title: "自定义修改提示词",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "-mt-1 mb-3 inline-flex h-7 items-center rounded-full border border-line bg-card px-3 text-[13px] font-medium leading-none text-primary",
				onClick: () => applyChatImageToPure(chat, text, charTails, live, insert),
				children: "应用到纯生图"
			}),
			insert ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-[12px] leading-5 text-muted",
					children: "总提示追加到「正面提示词 · 中」后面，各角色追加到对应角色正面提示词后面。不会写入 ENABLED。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-1 text-[13px] font-medium",
					children: "总提示（正面提示词 · 中）"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					className: "min-h-[96px]",
					value: text,
					onChange: (e) => {
						edited.current = true;
						setText(e.target.value);
					}
				}),
				chars.map((ch, i) => {
					const name = (chat.characters.find((c) => c.id === ch.id)?.name || ch.name || "").trim();
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-1 text-[13px] font-medium",
							children: [
								"角色",
								i + 1,
								name ? `:${name}` : "",
								" 正面提示词"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
							className: "min-h-[88px]",
							value: charTails[ch.id] ?? "",
							onChange: (e) => {
								edited.current = true;
								setCharTails((prev) => ({
									...prev,
									[ch.id]: e.target.value
								}));
							}
						})]
					}, ch.id);
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
				className: "min-h-[160px]",
				value: text,
				onChange: (e) => {
					edited.current = true;
					setText(e.target.value);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "h-12 flex-1 rounded-full border border-line bg-card text-[15px] font-medium",
					onClick: () => setUI({ customPrompt: null }),
					children: "取消"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: generating,
					className: "h-12 flex-[1.2] rounded-full bg-primary text-[15px] font-medium text-on-primary disabled:opacity-40",
					onClick: () => {
						if (generating) return;
						if (data.wechatLineId) paintWechat(chat, data.wechatLineId, "custom", text, insert ? charTails : void 0);
						else attachImage(data.chatId, data.msgId, "custom", text, insert ? charTails : void 0);
						setUI({ customPrompt: null });
					},
					children: "按这个生成"
				})]
			}),
			generating ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-3 w-full text-center text-[13px] text-danger",
				onClick: () => {
					if (data.wechatLineId) cancelWechatImage(data.chatId, data.wechatLineId);
					else cancelImage(data.chatId, data.msgId);
					setUI({ customPrompt: null });
				},
				children: "取消这次生图"
			}) : null
		]
	});
}
var CHAT_IMAGE_IDS = [
	SYS.chatImgWriter,
	SYS.chatImgShot,
	SYS.chatImgBg,
	SYS.chatImgMulti,
	SYS.chatImgLen,
	SYS.chatImgOrder
];
var WX_IMAGE_IDS = [
	SYS.wxImgWriter,
	SYS.wxImgShot,
	SYS.wxImgBg,
	SYS.wxImgMulti,
	SYS.wxImgHere,
	SYS.wxImgLen,
	SYS.wxImgOrder
];
function SysPromptSheet({ onClose }) {
	const settings = useApp((s) => s.settings);
	const chat = useApp((s) => s.chats.find((c) => c.id === s.currentId));
	const [edit, setEdit] = (0, import_react.useState)(null);
	const preset = activePreset(settings);
	const hasStyle = Boolean(preset && presetTexts(preset, settings.stPresetMode === "old" ? "old" : "new").systemPrompt.trim());
	const openEdit = (id, title, baseline, readOnly = false) => {
		setEdit({
			id,
			title,
			baseline,
			readOnly,
			text: readOnly ? baseline : customText(id) ?? baseline
		});
	};
	const save = () => {
		if (!edit || edit.readOnly) return;
		saveSysText(edit.id, edit.text, edit.baseline);
		setEdit(null);
		useApp.getState().toast("已保存");
	};
	const restore = () => {
		if (!edit || edit.readOnly) return;
		saveSysText(edit.id, edit.baseline, edit.baseline);
		setEdit({
			...edit,
			text: edit.baseline
		});
		useApp.getState().toast("已还原");
	};
	const openLive = (id, title, raw, empty) => {
		openEdit(id, title, raw || empty, !raw);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative z-10 flex min-h-0 w-full max-w-md flex-col overflow-hidden rounded-[28px] bg-bg shadow-2xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex shrink-0 items-center gap-2 px-5 pb-3 pt-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-[20px] font-semibold",
				children: "系统预设设置"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "ml-auto",
				onClick: onClose,
				"aria-label": "关闭",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-6 scroll-hide",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-[12px] leading-relaxed text-muted",
					children: "没改过的块和原来逐字一样。改过的只发你写的。标题不会发给模型。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "主聊天",
					ids: [
						SYS.chatWrite,
						SYS.chatStruct,
						SYS.chatGroup,
						SYS.chatOpen,
						SYS.chatStatus,
						SYS.chatLove,
						SYS.chatImgWriter,
						SYS.chatImgShot,
						SYS.chatImgBg,
						SYS.chatImgMulti,
						SYS.chatImgLen,
						SYS.chatImgOrder
					],
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PairRow, {
							id: SYS.chatWrite,
							title: "聊天写法",
							hasStyle,
							onEdit: () => openEdit(SYS.chatWrite, "聊天写法", RP_SYSTEM)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PairRow, {
							id: SYS.chatStruct,
							title: "结构规则",
							hasStyle,
							onEdit: () => openEdit(SYS.chatStruct, "结构规则", RP_STRUCTURE)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-[12px] text-muted",
							children: pairNote(hasStyle)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrayRow, {
							title: "这一轮的人设、开场、长期记忆",
							text: "具体文字随当前聊天填入，这里不能改。要求总览、人设、说话方式、外貌、开场、长期记忆还是照旧发。",
							onOpen: openEdit
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditRow, {
							id: SYS.chatGroup,
							title: "群聊怎么分段",
							onEdit: () => openLive(SYS.chatGroup, "群聊怎么分段", chat ? groupHintRaw(chat) : "", "只有群聊才会发这段。先打开一个群聊再改。")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditRow, {
							id: SYS.chatOpen,
							title: "开场第一句",
							onEdit: () => openEdit(SYS.chatOpen, "开场第一句", CHAT_OPENING_LINE)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PresetFold, {
							title: "预设插入位置 1",
							place: "before",
							which: "chat"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Fold, {
							title: "生图",
							accent: true,
							resetIds: CHAT_IMAGE_IDS,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditRow, {
									id: SYS.chatImgWriter,
									title: "生图写手（含词库和正反例）",
									accent: true,
									onEdit: () => openEdit(SYS.chatImgWriter, "生图写手", IMAGE_SYSTEM)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditRow, {
									id: SYS.chatImgShot,
									title: "这一镜认哪段",
									accent: true,
									onEdit: () => openEdit(SYS.chatImgShot, "这一镜认哪段", IMAGE_SHOT_RULES)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditRow, {
									id: SYS.chatImgBg,
									title: "背景",
									accent: true,
									onEdit: () => openEdit(SYS.chatImgBg, "背景", IMAGE_BG_RULES)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditRow, {
									id: SYS.chatImgMulti,
									title: "多人互动",
									accent: true,
									onEdit: () => openEdit(SYS.chatImgMulti, "多人互动", IMAGE_MULTI_RULES)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrayRow, {
									title: "上一镜地点",
									accent: true,
									text: "随上一张图填。对白看不出人在哪时才用。不能在这里改。",
									onOpen: openEdit
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrayRow, {
									title: "成人加强",
									accent: true,
									text: "跟这个聊天的成人开关走。开和关两句都是原来的，不能在这里改。",
									onOpen: openEdit
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditRow, {
									id: SYS.chatImgLen,
									title: "篇幅",
									accent: true,
									onEdit: () => openLive(SYS.chatImgLen, "篇幅", chat ? imageLengthRules(chat.imageParams.model, chat.adultBoost) : "", "按当前聊天的模型和成人开关生成。先打开一个聊天再改。")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrayRow, {
									title: "人设里勾了生图的补丁",
									accent: true,
									text: "随人设里勾了「生图用」的句子填，不能在这里改。",
									onOpen: openEdit
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditRow, {
									id: SYS.chatImgOrder,
									title: "正文和生图标记的先后",
									accent: true,
									onEdit: () => openEdit(SYS.chatImgOrder, "正文和生图标记的先后", CHAT_IMAGE_ORDER)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrayRow, {
									title: "输出格式",
									accent: true,
									text: "按单人、多人、插入模式生成。不能在这里改。",
									onOpen: openEdit
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-1 mt-3 text-[12px] text-muted",
							children: "下面在聊天记录之后。"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PresetFold, {
							title: "预设插入位置 2",
							place: "after",
							which: "chat"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditRow, {
							id: SYS.chatStatus,
							title: "状态栏怎么写",
							onEdit: () => openEdit(SYS.chatStatus, "状态栏怎么写", STATUS_RULE_TEXT)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrayRow, {
							title: "状态栏模板",
							text: "模板随人设里的状态栏填，接在规则后面。不能在这里改。",
							onOpen: openEdit
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditRow, {
							id: SYS.chatLove,
							title: "好感度怎么写",
							onEdit: () => openEdit(SYS.chatLove, "好感度怎么写", LOVE_RULE_TEXT)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrayRow, {
							title: "当前分数",
							text: "没改规则时，分数夹在原来的两段中间。改过之后，分数接在你写的后面，不会被抹掉。",
							onOpen: openEdit
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "微信",
					ids: [
						SYS.wxReply,
						SYS.wxGroup,
						SYS.wxPrivate,
						SYS.wxFold,
						SYS.wxSum,
						SYS.wxImgWriter,
						SYS.wxImgShot,
						SYS.wxImgBg,
						SYS.wxImgMulti,
						SYS.wxImgHere,
						SYS.wxImgLen,
						SYS.wxImgOrder
					],
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditRow, {
							id: SYS.wxReply,
							title: "一个人怎么回",
							onEdit: () => openEdit(SYS.wxReply, "一个人怎么回", wxBaseline("reply"))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrayRow, {
							title: "只能返回 JSON",
							text: wxCloser("reply") || "结尾那句不能改，改了微信会拆不开。",
							onOpen: openEdit
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditRow, {
							id: SYS.wxGroup,
							title: "群里怎么回",
							onEdit: () => openEdit(SYS.wxGroup, "群里怎么回", wxBaseline("group"))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrayRow, {
							title: "群的 JSON",
							text: wxCloser("group") || "结尾那句不能改。",
							onOpen: openEdit
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditRow, {
							id: SYS.wxPrivate,
							title: "私聊里带上的群记录",
							onEdit: () => openEdit(SYS.wxPrivate, "私聊里带上的群记录", wxBaseline("private"))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditRow, {
							id: SYS.wxFold,
							title: "更早的微信怎么压短",
							onEdit: () => openEdit(SYS.wxFold, "更早的微信怎么压短", wxBaseline("fold"))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-[12px] leading-relaxed text-muted",
							children: "这是单独一趟，不是这条回复里的。"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Fold, {
							title: "生图",
							accent: true,
							resetIds: WX_IMAGE_IDS,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditRow, {
									id: SYS.wxImgWriter,
									title: "生图写手",
									accent: true,
									onEdit: () => openEdit(SYS.wxImgWriter, "生图写手", IMAGE_SYSTEM)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditRow, {
									id: SYS.wxImgShot,
									title: "这一镜认哪段",
									accent: true,
									onEdit: () => openEdit(SYS.wxImgShot, "这一镜认哪段", IMAGE_SHOT_RULES)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditRow, {
									id: SYS.wxImgBg,
									title: "背景",
									accent: true,
									onEdit: () => openEdit(SYS.wxImgBg, "背景", IMAGE_BG_RULES)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditRow, {
									id: SYS.wxImgMulti,
									title: "多人互动",
									accent: true,
									onEdit: () => openEdit(SYS.wxImgMulti, "多人互动", IMAGE_MULTI_RULES)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditRow, {
									id: SYS.wxImgHere,
									title: "以刚写的内心为准",
									accent: true,
									onEdit: () => openEdit(SYS.wxImgHere, "以刚写的内心为准", WX_IMAGE_HERE)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrayRow, {
									title: "上一镜地点",
									accent: true,
									text: "随上一张图填。看不出人在哪时才用。不能在这里改。",
									onOpen: openEdit
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrayRow, {
									title: "成人加强",
									accent: true,
									text: "跟这个聊天的成人开关走。开和关两句都是原来的，不能在这里改。",
									onOpen: openEdit
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditRow, {
									id: SYS.wxImgLen,
									title: "篇幅",
									accent: true,
									onEdit: () => openLive(SYS.wxImgLen, "篇幅", chat ? imageLengthRules(chat.imageParams.model, chat.adultBoost) : "", "按当前聊天的模型和成人开关生成。先打开一个聊天再改。")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrayRow, {
									title: "人设里勾了生图的补丁",
									accent: true,
									text: "随人设里勾了「生图用」的句子填，不能在这里改。",
									onOpen: openEdit
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditRow, {
									id: SYS.wxImgOrder,
									title: "微信和生图标记的先后",
									accent: true,
									onEdit: () => openEdit(SYS.wxImgOrder, "微信和生图标记的先后", WX_IMAGE_ORDER)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrayRow, {
									title: "输出格式",
									accent: true,
									text: "按单人、群、插入模式生成。不能在这里改。",
									onOpen: openEdit
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PresetFold, {
							title: "预设插入位置 1",
							place: "before",
							which: "wechat"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-1 mt-3 text-[12px] text-muted",
							children: "下面在聊天记录之后。"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PresetFold, {
							title: "预设插入位置 2",
							place: "after",
							which: "wechat"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Fold, {
							title: "写回主聊天的总结",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditRow, {
								id: SYS.wxSum,
								title: "总结规则",
								onEdit: () => openEdit(SYS.wxSum, "总结规则", wxBaseline("sum"))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12px] leading-relaxed text-muted",
								children: "这是单独一趟，不是微信回复里的。"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "人设润色",
					ids: [
						SYS.polishAll,
						SYS.polishField,
						SYS.polishVoice
					],
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditRow, {
							id: SYS.polishAll,
							title: "整卡润色",
							onEdit: () => openEdit(SYS.polishAll, "整卡润色", POLISH_SYSTEM)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditRow, {
							id: SYS.polishField,
							title: "单栏怎么改",
							onEdit: () => openEdit(SYS.polishField, "单栏怎么改", FIELD_SYSTEM)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditRow, {
							id: SYS.polishVoice,
							title: "五声部",
							onEdit: () => openEdit(SYS.polishVoice, "五声部", PERSONA_VOICE_RULES)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PresetFold, {
							title: "预设插入位置",
							place: "all",
							which: "chat"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrayRow, {
							title: "收尾",
							text: TASK_CLOSER,
							onOpen: openEdit
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "长期记忆",
					ids: [SYS.memoryBody],
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditRow, {
							id: SYS.memoryBody,
							title: "怎么总结",
							onEdit: () => openEdit(SYS.memoryBody, "怎么总结", MEMORY_SYSTEM)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PresetFold, {
							title: "预设插入位置",
							place: "all",
							which: "chat"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrayRow, {
							title: "收尾",
							text: MEMORY_CLOSER,
							onOpen: openEdit
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12px] leading-relaxed text-muted",
							children: "要压进去的对白是聊天记录，不在这里改。用的是主聊天那份预设。"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
					open: Boolean(edit),
					onClose: () => setEdit(null),
					title: edit?.title || "内容",
					wide: true,
					titleAside: edit && !edit.readOnly ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-9 place-items-center text-muted",
						"aria-label": "还原",
						onClick: restore,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" })
					}) : null,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
						className: "min-h-[200px]",
						value: edit?.text ?? "",
						readOnly: edit?.readOnly,
						onChange: (e) => setEdit((cur) => cur ? {
							...cur,
							text: e.target.value
						} : cur)
					}), edit?.readOnly ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[12px] text-muted",
						children: "只能看，不会改发出去的字。"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
						className: "mt-4",
						onClick: save,
						children: "保存"
					})]
				})
			]
		})]
	});
}
function Section({ title, ids, children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3 border-b border-line pb-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "flex min-w-0 flex-1 items-center gap-2 py-2 text-left",
				onClick: () => setOpen((v) => !v),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `size-4 shrink-0 text-muted transition ${open ? "" : "-rotate-90"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[16px] font-semibold",
					children: title
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-8 place-items-center text-muted",
				"aria-label": `还原${title}`,
				onClick: () => {
					resetSys(ids);
					useApp.getState().toast("已还原");
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" })
			})]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pb-2",
			children
		}) : null]
	});
}
function Fold({ title, children, accent, resetIds }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "flex min-w-0 flex-1 items-center gap-2 py-2 text-left",
				onClick: () => setOpen((v) => !v),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `size-4 shrink-0 transition ${accent ? "text-primary" : "text-muted"} ${open ? "" : "-rotate-90"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `text-[14px] font-medium ${accent ? "text-primary" : ""}`,
					children: title
				})]
			}), resetIds ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-8 place-items-center text-muted",
				"aria-label": `还原${title}`,
				onClick: () => {
					resetSys(resetIds);
					useApp.getState().toast("已还原");
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" })
			}) : null]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pl-2",
			children
		}) : null]
	});
}
function PairRow({ id, title, hasStyle, onEdit }) {
	const on = pairOn(hasStyle, id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 border-b border-line/70 py-2.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `min-w-0 flex-1 truncate text-[13px] ${on ? "font-semibold" : ""}`,
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-8 place-items-center text-muted",
				"aria-label": `编辑${title}`,
				onClick: onEdit,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
				on,
				label: title,
				onChange: () => togglePair(hasStyle, id)
			})
		]
	});
}
function EditRow({ id, title, accent, onEdit }) {
	const on = !turnedOff(id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 border-b border-line/70 py-2.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `min-w-0 flex-1 truncate text-[13px] ${accent ? "text-primary" : ""} ${on ? "font-semibold" : ""}`,
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-8 place-items-center text-muted",
				"aria-label": `编辑${title}`,
				onClick: onEdit,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
				on,
				label: title,
				onChange: () => toggleSysOff(id)
			})
		]
	});
}
function GrayRow({ title, text, accent, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 border-b border-line/70 py-2.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `min-w-0 flex-1 truncate text-[13px] ${accent ? "text-primary" : "text-faint"}`,
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-8 place-items-center text-faint",
				"aria-label": `查看${title}`,
				onClick: () => onOpen(title, title, text, true),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
				on: true,
				disabled: true,
				label: title,
				onChange: () => void 0
			})
		]
	});
}
function PresetFold({ title, place, which }) {
	const settings = useApp((s) => s.settings);
	const preset = which === "wechat" ? activeWechatPreset(settings) : activePreset(settings);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [edit, setEdit] = (0, import_react.useState)(null);
	const old = settings.stPresetMode === "old";
	const texts = preset ? presetTexts(preset, old ? "old" : "new") : {
		systemPrompt: "",
		postHistory: ""
	};
	const items = (preset?.items ?? []).filter((item) => place === "all" ? true : place === "after" ? item.place === "after" : item.place !== "after");
	const legacy = place === "after" ? texts.postHistory : place === "before" ? texts.systemPrompt : [texts.systemPrompt, texts.postHistory].filter(Boolean).join("\n\n");
	const setItem = (item, enabled) => {
		if (!preset || !item.usable || old) return;
		const id = preset.id;
		useApp.getState().setSettings({ stPresets: (useApp.getState().settings.stPresets ?? []).map((row) => row.id === id && row.items ? sealPreset({
			...row,
			items: row.items.map((it) => it.id === item.id ? {
				...it,
				enabled
			} : it)
		}) : row) });
	};
	const save = () => {
		if (!edit || edit.readOnly || !preset) return;
		const id = preset.id;
		const itemId = edit.id;
		const text = edit.text;
		useApp.getState().setSettings({ stPresets: (useApp.getState().settings.stPresets ?? []).map((row) => row.id === id && row.items ? sealPreset({
			...row,
			items: row.items.map((it) => it.id === itemId ? {
				...it,
				content: text
			} : it)
		}) : row) });
		setEdit(null);
		useApp.getState().toast("已保存");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "flex w-full items-center gap-2 py-2 text-left",
				onClick: () => setOpen((v) => !v),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `size-4 shrink-0 text-muted transition ${open ? "" : "-rotate-90"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[14px] font-medium",
					children: title
				})]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pl-2",
				children: [
					!preset ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "py-2 text-[12px] text-muted",
						children: "还没选上。主聊天要开「对话」，微信要开「微信」。"
					}) : null,
					preset && (old || !preset.items?.length) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "py-1 text-[12px] text-muted",
						children: old ? "旧版是导入时封存的整段，这里不能改条目。" : "这是以前导入的整段。"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
						className: "min-h-[80px]",
						value: legacy,
						readOnly: true
					})] }) : null,
					preset && !old && preset.items?.length ? items.map((item) => {
						const live = item.usable;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 border-b border-line/70 py-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `min-w-0 flex-1 truncate text-[13px] ${live ? "" : "text-faint"}`,
									children: item.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "grid size-8 place-items-center text-muted",
									onClick: () => setEdit({
										id: item.id,
										name: item.name,
										text: item.content,
										readOnly: !live
									}),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-3.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
									on: Boolean(live && item.enabled),
									disabled: !live,
									label: item.name,
									onChange: (v) => setItem(item, v)
								})
							]
						}, item.id);
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "py-1 text-[12px] text-muted",
						children: "和预设设置是同一份。切新版旧版会马上变。上面的循环图标不会动预设。"
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				open: Boolean(edit),
				onClose: () => setEdit(null),
				title: edit?.name || "预设",
				wide: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					className: "min-h-[160px]",
					value: edit?.text ?? "",
					readOnly: edit?.readOnly,
					onChange: (e) => setEdit((cur) => cur ? {
						...cur,
						text: e.target.value
					} : cur)
				}), edit?.readOnly ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-[12px] text-muted",
					children: "这一条绘语用不上，只给查看。"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
					className: "mt-4",
					onClick: save,
					children: "保存"
				})]
			})
		]
	});
}
function ConnectionPanel() {
	const open = useApp((s) => s.ui.connection);
	const settings = useApp((s) => s.settings);
	const setUI = useApp((s) => s.setUI);
	const [dl, setDl] = (0, import_react.useState)(false);
	const [page, setPage] = (0, import_react.useState)(null);
	const llmSettings = useApp((s) => s.ui.llmSettings);
	(0, import_react.useEffect)(() => {
		if (!open || !llmSettings) return;
		setPage("chat");
		useApp.getState().setUI({ llmSettings: false });
	}, [open, llmSettings]);
	(0, import_react.useEffect)(() => {
		if (!open) setPage(null);
	}, [open]);
	if (!open) return null;
	const close = () => {
		setPage(null);
		setUI({ connection: false });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-50 flex justify-center px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-overlay/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetCard, {
				title: "设置",
				titleExtra: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1.5 text-[13px] text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
							on: settings.chatImage !== false,
							onChange: (v) => {
								useApp.getState().setSettings({ chatImage: v });
							},
							label: "生图"
						}),
						"生图",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: cn("rounded-full border px-2.5 py-0.5 text-[12px] leading-none", settings.allowMulti1boy !== false ? "border-primary bg-primary text-on-primary" : "border-line bg-card text-ink"),
							onClick: () => useApp.getState().setSettings({ allowMulti1boy: settings.allowMulti1boy === false }),
							children: "1boy"
						})
					]
				}),
				onClose: close,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "flex flex-col items-center gap-2 rounded-[18px] border border-line bg-card py-5",
							onClick: () => setDl(true),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[13px]",
								children: "下载存档"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex cursor-pointer flex-col items-center gap-2 rounded-[18px] border border-line bg-card py-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-6" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[13px]",
									children: "读取存档"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									accept: ".json,.zip",
									className: "hidden",
									onChange: async (e) => {
										const f = e.target.files?.[0];
										e.target.value = "";
										if (!f) return;
										try {
											await importArchive(f);
											await useApp.getState().hydrate();
											useApp.getState().toast("已读取存档");
											close();
										} catch (err) {
											useApp.getState().toast(err instanceof Error ? err.message : "读取失败");
										}
									}
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GearRow, {
						label: "聊天补全 AI",
						onClick: () => setPage("chat")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GearRow, {
						label: "生图 AI",
						onClick: () => setPage("image")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GearRow, {
						label: "预设设置",
						onClick: () => setPage("preset")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GearRow, {
						label: "系统预设设置",
						onClick: () => setPage("sys")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GearRow, {
						label: "字体和背景",
						onClick: () => setPage("look")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				open: dl,
				onClose: () => setDl(false),
				title: "下载存档",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-[13px] text-muted",
					children: "全部含配图。部分配图留下你上传的头像、表情包、收藏和照片，不含生成图。无配图可再次点重生。"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
							onClick: () => {
								exportArchive("full");
								setDl(false);
							},
							children: "全部"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
							onClick: () => {
								exportArchive("partial");
								setDl(false);
							},
							children: "部分配图"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
							onClick: () => {
								exportArchive("lite");
								setDl(false);
							},
							children: "无配图"
						})
					]
				})]
			}),
			page && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 z-20 flex justify-center px-4 py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "absolute inset-0 bg-overlay/40",
						onClick: () => setPage(null),
						"aria-label": "返回"
					}),
					page === "chat" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatAiSheet, { onClose: () => setPage(null) }),
					page === "image" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageAiSheet, { onClose: () => setPage(null) }),
					page === "preset" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PresetSheet, { onClose: () => setPage(null) }),
					page === "look" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LookSheet, { onClose: () => setPage(null) }),
					page === "sys" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SysPromptSheet, { onClose: () => setPage(null) })
				]
			})
		]
	});
}
function SheetCard({ title, titleExtra, onClose, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative z-10 flex min-h-0 w-full max-w-md flex-col overflow-hidden rounded-[28px] bg-bg shadow-2xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex shrink-0 items-center gap-2 px-5 pb-3 pt-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[20px] font-semibold",
					children: title
				}),
				titleExtra,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "ml-auto",
					onClick: onClose,
					"aria-label": "关闭",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-6 scroll-hide",
			children
		})]
	});
}
function GearRow({ label, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: "mb-3 flex w-full items-center justify-between rounded-[18px] border border-line bg-card px-4 py-4 text-left active:bg-dim",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[15px]",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-5 text-muted" })]
	});
}
function ChatAiSheet({ onClose }) {
	const settings = useApp((s) => s.settings);
	const [url, setUrl] = (0, import_react.useState)(settings.llmBase);
	const [key, setKey] = (0, import_react.useState)(settings.llmKey);
	const [manual, setManual] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)("");
	const [saveOpen, setSaveOpen] = (0, import_react.useState)(false);
	const [saveName, setSaveName] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setUrl(settings.llmBase);
		setKey(settings.llmKey);
		setErr("");
	}, [settings.llmBase, settings.llmKey]);
	const connect = async (override) => {
		const u = (override?.url ?? url).trim();
		const k = override?.key ?? key;
		setBusy(true);
		setErr("");
		try {
			const list = await fetchLlmModels(u, k);
			const live = useApp.getState().settings;
			const nextModel = override?.model || live.llmModel || list[0] || "";
			const keepStars = override?.starred ?? live.llmStarred;
			const starred = list.length ? pruneStarred(keepStars, list, nextModel) : [...new Set(keepStars)];
			const nextIdentity = llmIdentity(u, k);
			const prevIdentity = live.llmIdentity || (live.llmConnected ? llmIdentity(live.llmBase, live.llmKey) : "");
			useApp.getState().setSettings({
				llmBase: u,
				llmKey: k,
				llmConnected: true,
				llmModels: list,
				llmModel: nextModel,
				llmStarred: starred,
				chatSource: "api",
				llmAccounts: snapshotLlmAccount(live.llmAccounts ?? [], u, k, starred, nextModel),
				llmIdentity: nextIdentity,
				llmActiveIds: []
			});
			if (prevIdentity && prevIdentity !== nextIdentity) useApp.getState().clearImageAi();
			useApp.getState().toast(override?.toast ?? (list.length ? `已连接 · ${list.length} 个模型` : "已连接，请手填模型名"));
		} catch (e) {
			setErr(e instanceof Error ? e.message : "连接失败");
			useApp.getState().setSettings({
				llmBase: u,
				llmKey: k,
				llmConnected: false
			});
		} finally {
			setBusy(false);
		}
	};
	const disconnect = () => {
		useApp.getState().setSettings({
			llmConnected: false,
			llmKey: "",
			chatSource: "api",
			llmActiveIds: []
		});
		setKey("");
		useApp.getState().toast("已断开 API");
	};
	const connectMany = async (picked) => {
		if (!picked.length) {
			useApp.getState().toast("请先选择");
			return;
		}
		if (picked.length === 1) {
			const a = picked[0];
			setUrl(a.base);
			setKey(a.key);
			await connect({
				url: a.base,
				key: a.key,
				starred: a.starred,
				model: a.model,
				toast: `已应用密钥（${a.name}）`
			});
			return;
		}
		setBusy(true);
		setErr("");
		const results = await Promise.all(picked.map(async (account) => {
			try {
				return {
					account,
					models: await fetchLlmModels(account.base, account.key),
					error: ""
				};
			} catch (e) {
				return {
					account,
					models: [],
					error: e instanceof Error ? e.message : "连接失败"
				};
			}
		}));
		const ok = results.filter((row) => !row.error);
		const bad = results.filter((row) => row.error);
		if (!ok.length) {
			setErr(bad.map((row) => `${row.account.name}：${row.error}`).join("\n"));
			setBusy(false);
			return;
		}
		if (ok.length === 1) {
			setBusy(false);
			const a = ok[0].account;
			const fail = bad.map((row) => row.account.name).join("、");
			setUrl(a.base);
			setKey(a.key);
			await connect({
				url: a.base,
				key: a.key,
				starred: a.starred,
				model: a.model,
				toast: fail ? `${a.name}已连接，${fail}没连上` : `已应用密钥（${a.name}）`
			});
			return;
		}
		const live = useApp.getState().settings;
		let accounts = live.llmAccounts ?? [];
		for (const row of ok) {
			const stars = (row.account.starred ?? []).filter((id) => row.models.includes(id));
			const model = row.account.model && row.models.includes(row.account.model) ? row.account.model : row.models[0] || "";
			accounts = accounts.map((a) => a.id === row.account.id ? {
				...a,
				starred: stars,
				model
			} : a);
		}
		const packed = catalogFromLinks(ok.map((row) => ({
			account: accounts.find((a) => a.id === row.account.id) ?? row.account,
			models: row.models
		})), live.llmModel);
		const imageHit = live.imageModelId && packed.llmModels.filter((id) => id === live.imageModelId || llmModelName(id) === live.imageModelId);
		useApp.getState().setSettings({
			llmConnected: true,
			chatSource: "api",
			llmActiveIds: ok.map((row) => row.account.id),
			llmModels: packed.llmModels,
			llmStarred: packed.llmStarred,
			llmModel: packed.llmModel,
			llmAccounts: accounts,
			llmBase: "",
			llmKey: "",
			...imageHit && imageHit.length === 1 ? { imageModelId: imageHit[0] } : {}
		});
		const fail = bad.map((row) => row.account.name).join("、");
		useApp.getState().toast(fail ? `已连接 ${ok.length} 个密钥，${fail}没连上` : `已连接 ${ok.length} 个密钥`);
		setBusy(false);
	};
	const saveAccount = () => {
		const name = uniqueNumberedName(saveName, (settings.llmAccounts ?? []).map((a) => a.name));
		if (!saveName.trim()) {
			useApp.getState().toast("请输入名称");
			return;
		}
		useApp.getState().setSettings({ llmAccounts: [...settings.llmAccounts ?? [], {
			id: uid$1("acc_"),
			name,
			base: url.trim(),
			key,
			starred: [...settings.llmStarred],
			model: settings.llmModel
		}] });
		useApp.getState().toast(`已保存（${name}）`);
		setSaveOpen(false);
		setSaveName("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetCard, {
		title: "聊天补全 AI",
		onClose,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-1 flex items-center justify-between text-[14px] font-medium",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "网址" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-[12px] font-normal text-muted",
					onClick: () => {
						if (isMultiLlm(settings.llmActiveIds)) return;
						if (!url.trim() || !key.trim()) {
							useApp.getState().toast("请填写网址和密钥");
							return;
						}
						setSaveName("");
						setSaveOpen(true);
					},
					children: "保存"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				value: isMultiLlm(settings.llmActiveIds) ? "(已连接多个密钥)" : url,
				placeholder: "https://api.siliconflow.cn/v1",
				readOnly: isMultiLlm(settings.llmActiveIds),
				onChange: (e) => setUrl(e.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 mt-1 text-[11px] text-muted",
				children: "OpenAI 兼容。末尾 /v1 即可，不必写到 chat/completions。"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountPicker, {
				accounts: settings.llmAccounts ?? [],
				keyValue: isMultiLlm(settings.llmActiveIds) ? "" : key,
				keyLocked: isMultiLlm(settings.llmActiveIds),
				onKeyChange: setKey,
				busy,
				exit: settings.llmConnected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-[12px] text-muted",
					onClick: disconnect,
					children: "退出"
				}) : null,
				onPick: (a) => {
					const s = useApp.getState().settings;
					if (s.llmBase || s.llmKey) useApp.getState().setSettings({ llmAccounts: snapshotLlmAccount(s.llmAccounts ?? [], s.llmBase, s.llmKey, s.llmStarred, s.llmModel) });
					setUrl(a.base);
					setKey(a.key);
					connect({
						url: a.base,
						key: a.key,
						starred: a.starred,
						model: a.model,
						toast: `已应用密钥（${a.name}）`
					});
				},
				onConfirmMany: (ids) => {
					const rows = (settings.llmAccounts ?? []).filter((a) => ids.includes(a.id));
					connectMany(rows);
				},
				onDelete: (id) => {
					const s = useApp.getState().settings;
					const accounts = (s.llmAccounts ?? []).filter((a) => a.id !== id);
					const active = (s.llmActiveIds ?? []).filter((x) => x !== id);
					if ((s.llmActiveIds?.length ?? 0) > 1 && active.length > 1) {
						const llmModels = s.llmModels.filter((key) => parseLlmModelKey(key)?.accountId !== id);
						const llmStarred = s.llmStarred.filter((key) => parseLlmModelKey(key)?.accountId !== id);
						const llmModel = llmModels.includes(s.llmModel) ? s.llmModel : llmStarred[0] || llmModels[0] || "";
						useApp.getState().setSettings({
							llmAccounts: accounts,
							llmActiveIds: active,
							llmModels,
							llmStarred,
							llmModel
						});
						return;
					}
					if ((s.llmActiveIds?.length ?? 0) > 1) {
						const left = accounts.find((a) => a.id === active[0]);
						const llmModels = s.llmModels.flatMap((key) => {
							const row = parseLlmModelKey(key);
							return row && left && row.accountId === left.id ? [row.model] : [];
						});
						const llmStarred = (left?.starred ?? []).filter((name) => llmModels.includes(name));
						useApp.getState().setSettings({
							llmAccounts: accounts,
							llmActiveIds: [],
							llmBase: left?.base ?? "",
							llmKey: left?.key ?? "",
							llmModels,
							llmStarred,
							llmModel: llmModels.includes(llmModelName(s.llmModel)) ? llmModelName(s.llmModel) : llmModels[0] || ""
						});
						if (left) {
							setUrl(left.base);
							setKey(left.key);
						}
						return;
					}
					useApp.getState().setSettings({ llmAccounts: accounts });
				}
			}),
			err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-[12px] text-danger",
				children: err
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
				className: cn("mt-3", settings.llmConnected && "bg-good hover:bg-good"),
				busy,
				onClick: () => {
					if (isMultiLlm(settings.llmActiveIds)) {
						const rows = (settings.llmActiveIds ?? []).map((id) => (settings.llmAccounts ?? []).find((a) => a.id === id)).filter((a) => Boolean(a));
						connectMany(rows);
						return;
					}
					connect();
				},
				children: settings.llmConnected ? "已连接 · 重新拉取" : "连接"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 mb-1 text-[14px] font-medium",
				children: "可用模型"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-[11px] text-muted",
				children: "列表来自接口。点选即当前模型，星标会进聊天顶栏。"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModelPicker, {
				models: settings.llmModels,
				current: settings.llmModel,
				starred: settings.llmStarred,
				connected: settings.llmConnected,
				onPick: (id) => {
					useApp.getState().setSettings(applyLlmPick(settings, id));
				},
				onStar: (id) => {
					const on = settings.llmStarred.includes(id);
					const llmStarred = pruneStarred(on ? settings.llmStarred.filter((x) => x !== id) : [...settings.llmStarred, id], settings.llmModels, settings.llmModel);
					const parsed = parseLlmModelKey(id);
					const llmAccounts = parsed ? (settings.llmAccounts ?? []).map((a) => {
						if (a.id !== parsed.accountId) return a;
						const stars = new Set(a.starred ?? []);
						if (on) stars.delete(parsed.model);
						else stars.add(parsed.model);
						return {
							...a,
							starred: [...stars]
						};
					}) : snapshotLlmAccount(settings.llmAccounts ?? [], settings.llmBase, settings.llmKey, llmStarred, settings.llmModel);
					useApp.getState().setSettings({
						llmStarred,
						llmAccounts
					});
				},
				labelFor: (id) => llmModelLabel(id, settings.llmAccounts ?? [], settings.llmModels)
			}),
			settings.llmConnected && settings.llmModels.length === 0 && !isMultiLlm(settings.llmActiveIds) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-1 text-[13px]",
					children: "手填模型名"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						value: manual,
						placeholder: "deepseek-ai/DeepSeek-V3.2",
						onChange: (e) => setManual(e.target.value)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "shrink-0 rounded-full bg-primary px-4 text-[13px] text-on-primary",
						onClick: () => {
							const id = manual.trim();
							if (!id) return;
							useApp.getState().setSettings({
								llmModel: id,
								llmModels: [id],
								llmStarred: settings.llmStarred.includes(id) ? settings.llmStarred : [...settings.llmStarred, id]
							});
						},
						children: "使用"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-[12px] text-muted",
				children: [
					"当前：",
					settings.llmModel ? llmModelLabel(settings.llmModel, settings.llmAccounts ?? [], settings.llmModels) : "未选",
					" · 常用",
					" ",
					pruneStarred(settings.llmStarred, settings.llmModels, settings.llmModel).length
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-60 shrink-0",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				open: saveOpen,
				onClose: () => setSaveOpen(false),
				title: "保存账号",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: saveName,
					placeholder: "给这组起个名字",
					onChange: (e) => setSaveName(e.target.value),
					onKeyDown: (e) => {
						if (e.key === "Enter") saveAccount();
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
					className: "mt-4",
					onClick: saveAccount,
					children: "保存"
				})]
			})
		]
	});
}
function presetUses(s) {
	return {
		chat: Boolean(s.stUseChat),
		image: Boolean(s.stUseImage),
		wechat: Boolean(s.stUseWechat)
	};
}
function writePresetUse(id, use, extra) {
	useApp.getState().setSettings({
		stPresetId: id,
		stUseChat: use.chat,
		stUseImage: use.image,
		stUseWechat: use.wechat,
		stActiveId: use.chat ? id : null,
		stImageActiveId: use.image ? id : null,
		stWechatActiveId: use.wechat ? id : null,
		...extra
	});
}
function applyStPreset(preset) {
	const s = useApp.getState().settings;
	const use = presetUses(s);
	const none = !use.chat && !use.image && !use.wechat;
	writePresetUse(preset.id, none ? {
		chat: true,
		image: false,
		wechat: false
	} : use, {
		stParamSnapshot: s.stParamSnapshot ?? { ...s.llmParams },
		llmParams: samplerPatch(preset.params, s.llmParams)
	});
	useApp.getState().toast(`已应用预设（${preset.name}）`);
}
function cancelStPreset() {
	const s = useApp.getState().settings;
	writePresetUse(s.stPresetId ?? null, {
		chat: false,
		image: false,
		wechat: false
	}, {
		stParamSnapshot: null,
		llmParams: restoreSampler(s.stParamSnapshot, s.llmParams)
	});
	useApp.getState().toast("已取消预设");
}
function setPresetUse(part, on) {
	const s = useApp.getState().settings;
	const id = s.stPresetId ?? null;
	if (on && !id) {
		useApp.getState().toast("先选择一份预设");
		return;
	}
	const use = presetUses(s);
	use[part] = on;
	const anyBefore = Boolean(s.stUseChat || s.stUseImage || s.stUseWechat);
	const any = use.chat || use.image || use.wechat;
	const preset = (s.stPresets ?? []).find((p) => p.id === id);
	if (on && !anyBefore && preset) {
		writePresetUse(id, use, {
			stParamSnapshot: s.stParamSnapshot ?? { ...s.llmParams },
			llmParams: samplerPatch(preset.params, s.llmParams)
		});
		return;
	}
	if (!any) {
		writePresetUse(id, use, {
			stParamSnapshot: null,
			llmParams: restoreSampler(s.stParamSnapshot, s.llmParams)
		});
		return;
	}
	writePresetUse(id, use);
}
function deleteStPreset(id) {
	const s = useApp.getState().settings;
	const next = (s.stPresets ?? []).filter((x) => x.id !== id);
	if (!(s.stPresetId === id || s.stActiveId === id || s.stImageActiveId === id || s.stWechatActiveId === id)) {
		useApp.getState().setSettings({ stPresets: next });
		return;
	}
	writePresetUse(null, {
		chat: false,
		image: false,
		wechat: false
	}, {
		stParamSnapshot: null,
		llmParams: restoreSampler(s.stParamSnapshot, s.llmParams)
	});
	useApp.getState().setSettings({ stPresets: next });
	useApp.getState().toast("已取消预设");
}
function ChatPresetPicker() {
	const settings = useApp((s) => s.settings);
	const presets = settings.stPresets ?? [];
	const activeId = settings.stPresetId ?? null;
	const active = presets.find((p) => p.id === activeId) ?? null;
	const applied = Boolean(active && (settings.stUseChat || settings.stUseImage || settings.stUseWechat));
	const fileRef = (0, import_react.useRef)(null);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [pos, setPos] = (0, import_react.useState)(null);
	const box = (0, import_react.useRef)(null);
	const menu = (0, import_react.useRef)(null);
	const place = () => {
		const el = box.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const width = Math.min(r.width, window.innerWidth - 16);
		const left = Math.min(Math.max(8, r.left), window.innerWidth - width - 8);
		const top = r.bottom + 4;
		const maxH = Math.min(260, Math.max(120, window.innerHeight - top - 12));
		setPos({
			top,
			left,
			width,
			maxH
		});
	};
	const openMenu = () => {
		place();
		setOpen(true);
	};
	(0, import_react.useEffect)(() => {
		if (!open) return;
		place();
		let start = null;
		let downOutside = false;
		let moved = false;
		const inChrome = (t) => {
			const n = t;
			return Boolean(n && (box.current?.contains(n) || menu.current?.contains(n)));
		};
		const onDown = (e) => {
			start = {
				x: e.clientX,
				y: e.clientY
			};
			downOutside = !inChrome(e.target);
			moved = false;
		};
		const onMove = (e) => {
			if (!start) return;
			if (Math.abs(e.clientX - start.x) + Math.abs(e.clientY - start.y) > 10) moved = true;
		};
		const onUp = (e) => {
			if (downOutside && !moved && !inChrome(e.target)) setOpen(false);
			start = null;
		};
		window.addEventListener("pointerdown", onDown, true);
		window.addEventListener("pointermove", onMove, true);
		window.addEventListener("pointerup", onUp, true);
		window.addEventListener("resize", place);
		window.addEventListener("scroll", place, true);
		return () => {
			window.removeEventListener("pointerdown", onDown, true);
			window.removeEventListener("pointermove", onMove, true);
			window.removeEventListener("pointerup", onUp, true);
			window.removeEventListener("resize", place);
			window.removeEventListener("scroll", place, true);
		};
	}, [open]);
	const importFile = async (file) => {
		let raw;
		try {
			raw = JSON.parse(await file.text());
		} catch {
			useApp.getState().toast("无法读取这个文件");
			return;
		}
		try {
			const parsed = parseChatCompletionPreset(raw, file.name);
			const s = useApp.getState().settings;
			const name = uniquePresetName(parsed.name, (s.stPresets ?? []).map((p) => p.name));
			useApp.getState().setSettings({ stPresets: [...s.stPresets ?? [], {
				...parsed,
				name
			}] });
			useApp.getState().toast(`已导入 ${name}，点列表应用`);
		} catch (e) {
			useApp.getState().toast(e instanceof Error ? e.message : "这不是对话补全预设");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-2 flex items-center gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0 flex-1 text-[14px] font-medium",
				children: "预设版本"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: fileRef,
				type: "file",
				accept: ".json,application/json",
				className: "hidden",
				onChange: (e) => {
					const f = e.target.files?.[0];
					e.target.value = "";
					if (f) importFile(f);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-8 shrink-0 place-items-center text-muted",
				"aria-label": "导入预设",
				onClick: () => fileRef.current?.click(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUp, { className: "size-4" })
			}),
			applied ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex shrink-0 items-center gap-2 text-[12px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1 text-good",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), "已应用"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-muted",
					onClick: cancelStPreset,
					children: "取消"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex shrink-0 items-center gap-1 text-[12px] text-danger",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" }), "未应用"]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: box,
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-11 items-center rounded-full border border-line bg-card pl-4 pr-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "min-w-0 flex-1 truncate text-left text-[13px]",
				onClick: () => open ? setOpen(false) : openMenu(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: active ? "text-ink" : "text-muted",
					children: active ? active.name : "未选择"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-9 shrink-0 place-items-center text-muted",
				"aria-label": open ? "收起预设列表" : "展开预设列表",
				onClick: () => open ? setOpen(false) : openMenu(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 transition", open && "rotate-180") })
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: menu,
			className: "mt-1 max-h-60 overflow-auto overscroll-contain rounded-[16px] border border-line bg-card shadow-[0_16px_40px_rgb(44_40_36/0.16)] scroll-hide",
			children: presets.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-4 py-6 text-center text-[13px] text-muted",
				children: "还没有导入的预设"
			}) : presets.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1 border-b border-line/70 last:border-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: cn("min-w-0 flex-1 truncate px-3 py-3 text-left text-[13px]", p.id === active?.id && "text-primary"),
					onClick: () => {
						applyStPreset(p);
						setOpen(false);
					},
					children: p.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid size-10 shrink-0 place-items-center text-danger",
					"aria-label": `删除${p.name}`,
					onClick: () => deleteStPreset(p.id),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
				})]
			}, p.id))
		})]
	})] });
}
async function naiProbe(body) {
	let j;
	try {
		j = await (await fetch("/api/nai", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body)
		})).json();
	} catch {
		throw new Error("无法连接");
	}
	if (!j.ok) throw new Error(j.error || "连接失败");
}
function ImageAiSheet({ onClose }) {
	const settings = useApp((s) => s.settings);
	const source = settings.naiImageSource === "official" ? "official" : "proxy";
	const [tab, setTab] = (0, import_react.useState)(source);
	const [base, setBase] = (0, import_react.useState)(settings.naiBase || "https://api.idlecloud.cc");
	const [key, setKey] = (0, import_react.useState)(settings.naiKey);
	const [officialKey, setOfficialKey] = (0, import_react.useState)(settings.naiOfficialKey ?? "");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setBase(settings.naiBase || "https://api.idlecloud.cc");
		setKey(settings.naiKey);
		setOfficialKey(settings.naiOfficialKey ?? "");
	}, [
		settings.naiBase,
		settings.naiKey,
		settings.naiOfficialKey
	]);
	const connectProxy = async () => {
		const b = base.trim() || "https://api.idlecloud.cc";
		const k = key.trim();
		if (!k) {
			useApp.getState().toast("请填写中转站密钥");
			return;
		}
		setBusy(true);
		setErr("");
		try {
			await naiProbe({
				action: "test",
				baseUrl: b,
				apiKey: k
			});
			useApp.getState().setSettings({
				naiBase: b,
				naiKey: k,
				naiConnected: true,
				naiOfficialConnected: false,
				naiImageSource: "proxy"
			});
			useApp.getState().toast("已连接中转站");
		} catch (e) {
			const msg = e instanceof Error ? e.message : "连接失败";
			setErr(msg);
			useApp.getState().setSettings({
				naiBase: b,
				naiKey: k,
				naiConnected: false
			});
		} finally {
			setBusy(false);
		}
	};
	const connectOfficial = async () => {
		const k = officialKey.trim().replace(/^Bearer\s+/i, "");
		if (!k) {
			useApp.getState().toast("请填写 Persistent Token");
			return;
		}
		setBusy(true);
		setErr("");
		try {
			await naiProbe({
				action: "official-test",
				apiKey: k
			});
			useApp.getState().setSettings({
				naiOfficialKey: k,
				naiOfficialConnected: true,
				naiConnected: false,
				naiImageSource: "official"
			});
			setOfficialKey(k);
			useApp.getState().toast("已连接官网");
		} catch (e) {
			const msg = e instanceof Error ? e.message : "连接失败";
			setErr(msg);
			useApp.getState().setSettings({
				naiOfficialKey: k,
				naiOfficialConnected: false
			});
		} finally {
			setBusy(false);
		}
	};
	const proxyOn = Boolean(settings.naiConnected && tab === "proxy" && source === "proxy");
	const officialOn = Boolean(settings.naiOfficialConnected && tab === "official" && source === "official");
	const liveOther = tab !== source && (source === "official" ? settings.naiOfficialConnected : settings.naiConnected);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetCard, {
		title: "生图 AI",
		onClose,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex rounded-full bg-dim p-1 text-[13px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: cn("flex-1 rounded-full py-2", tab === "proxy" && "bg-card"),
					onClick: () => {
						setErr("");
						setTab("proxy");
					},
					children: "中转站"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: cn("flex-1 rounded-full py-2", tab === "official" && "bg-card"),
					onClick: () => {
						setErr("");
						setTab("official");
					},
					children: "官网 API"
				})]
			}),
			tab === "proxy" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-1 text-[14px] font-medium",
					children: "中转站地址"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: base,
					placeholder: DEFAULT_NAI_BASE,
					onChange: (e) => {
						const v = e.target.value;
						setBase(v);
						const s = useApp.getState().settings;
						useApp.getState().setSettings({
							naiBase: v,
							naiConnected: Boolean(s.naiConnected && v === s.naiBase)
						});
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-1 mt-3 text-[14px] font-medium",
					children: "中转站 API Key"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					type: "password",
					value: key,
					onChange: (e) => {
						const v = e.target.value;
						setKey(v);
						const s = useApp.getState().settings;
						useApp.getState().setSettings({
							naiKey: v,
							naiConnected: Boolean(s.naiConnected && v === s.naiKey)
						});
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex h-5 justify-end",
					children: settings.naiConnected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-[12px] text-muted",
						onClick: () => {
							useApp.getState().setSettings({ naiConnected: false });
							useApp.getState().toast("已退出中转站");
						},
						children: "退出"
					}) : null
				}),
				err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-[12px] text-danger",
					children: err
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
					className: cn(proxyOn && "bg-good hover:bg-good"),
					busy,
					onClick: () => void connectProxy(),
					children: proxyOn ? "已连接" : "连接"
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-1 text-[14px] font-medium",
					children: "Persistent Token"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					type: "password",
					value: officialKey,
					placeholder: "pst-",
					onChange: (e) => {
						const v = e.target.value;
						setOfficialKey(v);
						const s = useApp.getState().settings;
						useApp.getState().setSettings({
							naiOfficialKey: v,
							naiOfficialConnected: Boolean(s.naiOfficialConnected && v === (s.naiOfficialKey ?? ""))
						});
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-1 mt-1 text-[11px] text-muted",
					children: [
						"一般以 pst- 开头。地址固定为 ",
						NAI_OFFICIAL_BASE,
						"，不能改。"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex h-5 justify-end",
					children: settings.naiOfficialConnected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-[12px] text-muted",
						onClick: () => {
							useApp.getState().setSettings({ naiOfficialConnected: false });
							useApp.getState().toast("已退出官网");
						},
						children: "退出"
					}) : null
				}),
				err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-[12px] text-danger",
					children: err
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
					className: cn(officialOn && "bg-good hover:bg-good"),
					busy,
					onClick: () => void connectOfficial(),
					children: officialOn ? "已连接" : "连接"
				})
			] }),
			liveOther ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-[12px] text-muted",
				children: [
					"生图目前仍走",
					source === "official" ? "官网" : "中转站",
					"。连接这边后会改过来，另一边会断开，密钥还留在输入框里。"
				]
			}) : null
		]
	});
}
function patchActivePreset(map) {
	const s = useApp.getState().settings;
	const id = s.stPresetId;
	if (!id) return;
	useApp.getState().setSettings({ stPresets: (s.stPresets ?? []).map((p) => p.id === id ? map(p) : p) });
}
function PresetSheet({ onClose }) {
	const settings = useApp((s) => s.settings);
	const params = settings.llmParams;
	const preset = (settings.stPresets ?? []).find((p) => p.id === settings.stPresetId) ?? null;
	const [edit, setEdit] = (0, import_react.useState)(null);
	const patchParam = (partial) => {
		const cur = useApp.getState().settings.llmParams;
		useApp.getState().setSettings({ llmParams: {
			...cur,
			...partial
		} });
	};
	const setItemEnabled = (item, on) => {
		if (!item.usable) return;
		patchActivePreset((p) => {
			if (!p.items) return p;
			return sealPreset({
				...p,
				items: p.items.map((row) => row.id === item.id ? {
					...row,
					enabled: on
				} : row)
			});
		});
	};
	const saveEdit = () => {
		if (!edit || edit.readOnly) return;
		const text = edit.text;
		const id = edit.id;
		patchActivePreset((p) => {
			if (!p.items) return p;
			return sealPreset({
				...p,
				items: p.items.map((row) => row.id === id ? {
					...row,
					content: text
				} : row)
			});
		});
		setEdit(null);
	};
	const oldMode = settings.stPresetMode === "old";
	const hasLegacy = typeof preset?.legacySystemPrompt === "string" || typeof preset?.legacyPostHistory === "string";
	const editing = preset?.items?.find((item) => item.id === edit?.id);
	const canRestore = Boolean(edit && !edit.readOnly && typeof editing?.original === "string");
	const restoreOriginal = () => {
		if (!edit || edit.readOnly || typeof editing?.original !== "string") return;
		const text = editing.original;
		const id = edit.id;
		patchActivePreset((p) => {
			if (!p.items) return p;
			return sealPreset({
				...p,
				items: p.items.map((row) => row.id === id ? {
					...row,
					content: text
				} : row)
			});
		});
		setEdit({
			...edit,
			text
		});
		useApp.getState().toast("已还原");
	};
	const restoreItems = () => {
		if (!preset?.items?.length) return;
		let switches = true;
		patchActivePreset((p) => {
			if (!p.items?.length) return p;
			return sealPreset({
				...p,
				items: p.items.map((row) => {
					const content = typeof row.original === "string" ? row.original : row.content;
					if (typeof row.originalEnabled !== "boolean") {
						switches = false;
						return {
							...row,
							content
						};
					}
					return {
						...row,
						content,
						enabled: row.originalEnabled
					};
				})
			});
		});
		setEdit(null);
		useApp.getState().toast(switches ? "已还原" : "已还原文字。这份是以前导入的，开关要重新导入才能回到最初。");
	};
	const setMode = (mode) => {
		useApp.getState().setSettings({ stPresetMode: mode });
		if (mode === "old" && preset && !hasLegacy) useApp.getState().toast("这份是以前导入的，没有旧版内容，请重新导入");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetCard, {
		title: "预设设置",
		onClose,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatPresetPicker, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex items-center gap-5 text-[13px]",
				children: [["new", "新版方法"], ["old", "旧版方法"]].map(([id, label]) => {
					const on = (oldMode ? "old" : "new") === id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "inline-flex items-center gap-1.5",
						onClick: () => setMode(id),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("grid size-4 place-items-center rounded-full border", on ? "border-primary" : "border-line-strong"),
							children: on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-primary" }) : null
						}), label]
					}, id);
				})
			}),
			oldMode && preset && !hasLegacy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-[12px] leading-relaxed text-muted",
				children: "这份没有旧版内容。请重新导入。现在仍按新版发送。"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid grid-cols-3 gap-2",
				children: [
					[
						"chat",
						"对话",
						Boolean(settings.stUseChat)
					],
					[
						"image",
						"生图",
						Boolean(settings.stUseImage)
					],
					[
						"wechat",
						"微信",
						Boolean(settings.stUseWechat)
					]
				].map(([part, label, on]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[13px]",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						on,
						onChange: (v) => setPresetUse(part, v),
						label
					})]
				}, part))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 mt-5 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[14px] font-medium",
					children: "参数管理"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-[12px] text-muted",
					onClick: () => {
						const cur = useApp.getState().settings.llmParams;
						useApp.getState().setSettings({ llmParams: defaultSampler(cur) });
					},
					children: "恢复默认"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParamRow, {
				label: "温度",
				value: params.temperature,
				min: 0,
				max: 2,
				step: .01,
				locked: params.temperatureLocked,
				onLock: (v) => patchParam({ temperatureLocked: v }),
				onChange: (n) => patchParam({ temperature: n })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParamRow, {
				label: "Top P",
				value: params.topP,
				min: 0,
				max: 1,
				step: .01,
				locked: params.topPLocked,
				onLock: (v) => patchParam({ topPLocked: v }),
				onChange: (n) => patchParam({ topP: n })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParamRow, {
				label: "频率惩罚",
				value: params.frequencyPenalty,
				min: -2,
				max: 2,
				step: .01,
				locked: params.frequencyPenaltyLocked,
				onLock: (v) => patchParam({ frequencyPenaltyLocked: v }),
				onChange: (n) => patchParam({ frequencyPenalty: n })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParamRow, {
				label: "存在惩罚",
				value: params.presencePenalty,
				min: -2,
				max: 2,
				step: .01,
				locked: params.presencePenaltyLocked,
				onLock: (v) => patchParam({ presencePenaltyLocked: v }),
				onChange: (n) => patchParam({ presencePenalty: n })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParamRow, {
				label: "最大长度",
				value: params.maxTokens,
				min: 256,
				max: 131072,
				step: 1,
				digits: 0,
				locked: params.maxTokensLocked,
				onLock: (v) => patchParam({ maxTokensLocked: v }),
				onChange: (n) => patchParam({ maxTokens: n })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParamRow, {
				label: "上下文轮数",
				value: params.contextTurns,
				min: 4,
				max: 80,
				step: 1,
				digits: 0,
				locked: params.contextTurnsLocked,
				onLock: (v) => patchParam({ contextTurnsLocked: v }),
				onChange: (n) => patchParam({ contextTurns: n })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 mt-4 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[14px] font-medium",
					children: "内容开关"
				}), preset?.items?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid size-8 place-items-center text-muted",
					"aria-label": "还原内容开关",
					onClick: () => useApp.getState().setUI({ confirm: {
						title: "还原内容开关",
						body: "文字和开关都会回到导入时的样子。改过的内容会丢掉。",
						onOk: restoreItems
					} }),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" })
				}) : null]
			}),
			oldMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-[12px] leading-relaxed text-muted",
				children: "旧版不看这些开关。要改内容，请切回新版方法。"
			}) : null,
			!preset ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12px] text-muted",
				children: "先选择一份预设。"
			}) : !preset.items?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12px] leading-relaxed text-muted",
				children: "这是以前导入的预设，只有整段文字，没有一条条开关。重新导入后才能逐条开关，现在仍按原来的整段发送。"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: preset.items.map((item) => {
				const live = item.usable && !oldMode;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 border-b border-line/70 py-2.5 last:border-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("min-w-0 flex-1 truncate text-[13px]", live ? item.enabled ? "font-semibold text-ink" : "text-ink" : "text-faint"),
							children: item.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: cn("grid size-8 shrink-0 place-items-center", live ? "text-muted" : "text-faint"),
							"aria-label": live ? `编辑${item.name}` : `查看${item.name}`,
							onClick: () => setEdit({
								id: item.id,
								name: item.name,
								text: item.content,
								readOnly: !live
							}),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-3.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
							on: Boolean(live && item.enabled),
							disabled: !live,
							label: item.name,
							onChange: (v) => setItemEnabled(item, v)
						})
					]
				}, item.id);
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				open: Boolean(edit),
				onClose: () => setEdit(null),
				title: edit?.name || "内容",
				wide: true,
				titleAside: canRestore ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid size-9 place-items-center text-muted",
					"aria-label": "还原",
					onClick: restoreOriginal,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" })
				}) : null,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					className: cn("min-h-[200px]", edit?.readOnly && "text-muted"),
					value: edit?.text ?? "",
					readOnly: edit?.readOnly,
					onChange: (e) => {
						const text = e.target.value;
						setEdit((cur) => cur ? {
							...cur,
							text
						} : cur);
					}
				}), edit?.readOnly ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-[12px] text-muted",
					children: oldMode ? "旧版方法不能改这些条目。" : "这一条绘语用不上，只给查看，不会发送。"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
					className: "mt-4",
					onClick: saveEdit,
					children: "保存"
				})]
			})
		]
	});
}
function AccountPicker({ accounts, keyValue, keyLocked, onKeyChange, busy, exit, onPick, onConfirmMany, onDelete }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [picking, setPicking] = (0, import_react.useState)(false);
	const [chosen, setChosen] = (0, import_react.useState)([]);
	const box = (0, import_react.useRef)(null);
	const menu = (0, import_react.useRef)(null);
	const hold = (0, import_react.useRef)(null);
	const skipClick = (0, import_react.useRef)(false);
	const closePick = () => {
		setPicking(false);
		setChosen([]);
	};
	const arm = (id) => {
		if (hold.current) window.clearTimeout(hold.current);
		hold.current = window.setTimeout(() => {
			skipClick.current = true;
			setPicking(true);
			setChosen((cur) => cur.includes(id) ? cur : [...cur, id]);
		}, 450);
	};
	const disarm = () => {
		if (hold.current) window.clearTimeout(hold.current);
		hold.current = null;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: box,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-1 flex items-center justify-between gap-2 text-[14px] font-medium",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "API 密钥" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex shrink-0 items-center gap-3 text-[12px] font-normal",
					children: [exit, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-muted",
						onClick: () => {
							if (open) {
								setOpen(false);
								closePick();
							} else setOpen(true);
						},
						children: "账号列表"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				type: keyLocked ? "text" : "password",
				value: keyLocked ? "(已连接多个密钥)" : keyValue,
				placeholder: "",
				readOnly: keyLocked,
				onChange: (e) => onKeyChange(e.target.value)
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: menu,
				className: "mt-1 flex max-h-60 flex-col overflow-hidden rounded-[16px] border border-line bg-card shadow-[0_16px_40px_rgb(44_40_36/0.16)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-0 flex-1 overflow-auto overscroll-contain scroll-hide",
					children: accounts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-4 py-6 text-center text-[13px] text-muted",
						children: "还没有保存的账号"
					}) : accounts.map((a) => {
						const on = chosen.includes(a.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1 border-b border-line/70 last:border-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "min-w-0 flex-1 truncate px-3 py-3 text-left text-[13px]",
								disabled: busy && !picking,
								onContextMenu: (e) => e.preventDefault(),
								onPointerDown: () => {
									if (picking) return;
									arm(a.id);
								},
								onPointerUp: disarm,
								onPointerCancel: disarm,
								onPointerLeave: disarm,
								onClick: () => {
									if (skipClick.current) {
										skipClick.current = false;
										return;
									}
									if (picking) {
										setChosen((cur) => cur.includes(a.id) ? cur.filter((id) => id !== a.id) : [...cur, a.id]);
										return;
									}
									onPick(a);
									setOpen(false);
								},
								children: a.name
							}), picking ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "grid size-10 shrink-0 place-items-center",
								"aria-label": on ? `取消选择${a.name}` : `选择${a.name}`,
								onClick: () => setChosen((cur) => cur.includes(a.id) ? cur.filter((id) => id !== a.id) : [...cur, a.id]),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("grid size-[22px] place-items-center rounded-full border", on ? "border-primary bg-primary text-on-primary" : "border-line-strong bg-card"),
									children: on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "size-3.5",
										strokeWidth: 3
									}) : null
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "grid size-10 shrink-0 place-items-center text-danger",
								"aria-label": `删除${a.name}`,
								onClick: () => onDelete(a.id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
							})]
						}, a.id);
					})
				}), picking ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 border-t border-line p-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "h-10 flex-1 rounded-full border border-line bg-card text-[13px]",
						onClick: closePick,
						children: "取消"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "h-10 flex-1 rounded-full bg-primary text-[13px] text-on-primary",
						onClick: () => {
							const ids = chosen;
							closePick();
							setOpen(false);
							onConfirmMany(ids);
						},
						children: "确定"
					})]
				}) : null]
			})
		]
	});
}
function ModelPicker({ models, current, starred, connected, onPick, onStar, labelFor }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [q, setQ] = (0, import_react.useState)("");
	const [pos, setPos] = (0, import_react.useState)(null);
	const box = (0, import_react.useRef)(null);
	const menu = (0, import_react.useRef)(null);
	const filtered = (0, import_react.useMemo)(() => {
		const t = q.trim().toLowerCase();
		const list = t ? models.filter((id) => id.toLowerCase().includes(t)) : models;
		const star = new Set(starred);
		return [...list].sort((a, b) => {
			const as = star.has(a) ? 0 : 1;
			const bs = star.has(b) ? 0 : 1;
			if (as !== bs) return as - bs;
			return a.localeCompare(b);
		});
	}, [
		models,
		q,
		starred
	]);
	const place = () => {
		const el = box.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const width = Math.min(r.width, window.innerWidth - 16);
		const left = Math.min(Math.max(8, r.left), window.innerWidth - width - 8);
		const top = r.bottom + 4;
		const maxH = Math.min(260, Math.max(120, window.innerHeight - top - 12));
		setPos({
			top,
			left,
			width,
			maxH
		});
	};
	const openMenu = () => {
		place();
		setOpen(true);
	};
	(0, import_react.useEffect)(() => {
		if (!open) return;
		place();
		menu.current?.scrollIntoView({ block: "nearest" });
		let start = null;
		let downOutside = false;
		let moved = false;
		const inChrome = (t) => {
			const n = t;
			return Boolean(n && (box.current?.contains(n) || menu.current?.contains(n)));
		};
		const onDown = (e) => {
			start = {
				x: e.clientX,
				y: e.clientY
			};
			downOutside = !inChrome(e.target);
			moved = false;
		};
		const onMove = (e) => {
			if (!start) return;
			if (Math.abs(e.clientX - start.x) + Math.abs(e.clientY - start.y) > 10) moved = true;
		};
		const onUp = (e) => {
			if (downOutside && !moved && !inChrome(e.target)) setOpen(false);
			start = null;
		};
		window.addEventListener("pointerdown", onDown, true);
		window.addEventListener("pointermove", onMove, true);
		window.addEventListener("pointerup", onUp, true);
		window.addEventListener("resize", place);
		window.addEventListener("scroll", place, true);
		return () => {
			window.removeEventListener("pointerdown", onDown, true);
			window.removeEventListener("pointermove", onMove, true);
			window.removeEventListener("pointerup", onUp, true);
			window.removeEventListener("resize", place);
			window.removeEventListener("scroll", place, true);
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: box,
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-12 items-center rounded-full border border-line bg-card focus-within:border-primary/40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: q,
				placeholder: "搜索",
				className: "min-w-0 flex-1 bg-transparent px-4 text-[14px] outline-none placeholder:text-faint",
				onChange: (e) => {
					setQ(e.target.value);
					if (!open) openMenu();
				},
				onFocus: () => {
					if (!open) openMenu();
				}
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-11 shrink-0 place-items-center",
				"aria-label": open ? "收起模型列表" : "展开模型列表",
				onClick: () => open ? setOpen(false) : openMenu(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 text-muted transition", open && "rotate-180") })
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: menu,
			className: "mt-1 max-h-60 overflow-auto overscroll-contain rounded-[16px] border border-line bg-card shadow-[0_16px_40px_rgb(44_40_36/0.16)] scroll-hide",
			children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-4 py-6 text-center text-[13px] text-muted",
				children: connected ? "没有匹配的模型" : "连接后才会出现列表"
			}) : filtered.map((id) => {
				const on = current === id;
				const star = starred.includes(id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("flex items-center gap-1 border-b border-line/70 last:border-0", on && "bg-dim/70"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-w-0 flex-1 truncate px-3 py-3 text-left text-[13px]",
						onClick: () => {
							onPick(id);
							setOpen(false);
						},
						children: labelFor ? labelFor(id) : id
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-10 shrink-0 place-items-center",
						onClick: () => onStar(id),
						"aria-label": star ? "取消常用" : "标为常用",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("size-4", star ? "fill-primary text-primary" : "text-faint") })
					})]
				}, id);
			})
		})]
	});
}
function ParamRow({ label, value, min, max, step, digits = 2, locked, onLock, onChange }) {
	const shown = digits === 0 ? String(Math.round(value)) : value.toFixed(digits);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-0.5 flex items-center justify-between text-[13px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: locked ? "text-muted" : void 0,
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-1.5 tabular-nums text-muted",
				children: [shown, onLock ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: locked ? "text-primary" : "text-muted",
					onClick: () => onLock(!locked),
					"aria-label": locked ? "解锁" : "锁定",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3.5" })
				}) : null]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
			value,
			min,
			max,
			step,
			onChange,
			disabled: locked
		})]
	});
}
var TITLE_LINE = /^(?:【\s*)?(名字|要求总览|人设|说话方式|外貌备忘|开场场景)\s*(?:】)?\s*[:：]?\s*$/;
function pushBlock(blocks, title, body) {
	const text = body.trim();
	if (!text) return;
	blocks.push(`${title}\n${text}`);
}
function copyRole(chat) {
	const blocks = [];
	if (!chat.isMulti) {
		const c = chat.characters[0];
		pushBlock(blocks, "名字", c?.name ?? "");
		pushBlock(blocks, "要求总览", chat.overview);
		pushBlock(blocks, "人设", c?.persona ?? "");
		pushBlock(blocks, "说话方式", c?.speech ?? "");
		pushBlock(blocks, "外貌备忘", c?.appearance ?? "");
		pushBlock(blocks, "开场场景", chat.opening);
		return blocks.join("\n\n");
	}
	for (const c of chat.characters) {
		pushBlock(blocks, "名字", c.name);
		pushBlock(blocks, "人设", c.persona);
		pushBlock(blocks, "说话方式", c.speech);
		pushBlock(blocks, "外貌备忘", c.appearance);
	}
	pushBlock(blocks, "要求总览", chat.overview);
	pushBlock(blocks, "开场场景", chat.opening);
	return blocks.join("\n\n");
}
function parseRoleText(raw) {
	const lines = raw.replace(/\r\n/g, "\n").split("\n");
	const sections = [];
	let cur = null;
	for (const line of lines) {
		const hit = line.trim().match(TITLE_LINE);
		if (hit) {
			cur = {
				title: hit[1],
				lines: []
			};
			sections.push(cur);
			continue;
		}
		if (cur) cur.lines.push(line);
	}
	if (!sections.length) return {
		matched: false,
		people: []
	};
	const people = [];
	let person = null;
	let overview;
	let opening;
	const ensure = () => {
		if (!person) {
			person = {};
			people.push(person);
		}
		return person;
	};
	for (const sec of sections) {
		const body = sec.lines.join("\n").trim();
		if (sec.title === "要求总览") {
			overview = body;
			continue;
		}
		if (sec.title === "开场场景") {
			opening = body;
			continue;
		}
		if (sec.title === "名字") {
			if (person?.name !== void 0) {
				person = {};
				people.push(person);
			}
			ensure().name = body;
			continue;
		}
		const target = ensure();
		if (sec.title === "人设") target.persona = body;
		else if (sec.title === "说话方式") target.speech = body;
		else target.appearance = body;
	}
	return {
		matched: true,
		overview,
		opening,
		people
	};
}
var HOLD_MS$2 = 400;
function buzz() {
	try {
		navigator.vibrate?.(12);
	} catch {}
}
function GripBars$3() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex flex-col items-center justify-center gap-[3.5px] text-current",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[2px] w-4 rounded-full bg-current" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[2px] w-4 rounded-full bg-current" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[2px] w-4 rounded-full bg-current" })
		]
	});
}
function LibraryDrawer({ items, onApply, onDelete, onReorder, onEdit, label = "角色选择", className }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [sortMode, setSortMode] = (0, import_react.useState)(false);
	const [dragId, setDragId] = (0, import_react.useState)(null);
	const [holdId, setHoldId] = (0, import_react.useState)(null);
	const [pendingDelete, setPendingDelete] = (0, import_react.useState)(null);
	const [liveIds, setLiveIds] = (0, import_react.useState)(null);
	const [pos, setPos] = (0, import_react.useState)(null);
	const box = (0, import_react.useRef)(null);
	const trigger = (0, import_react.useRef)(null);
	const menu = (0, import_react.useRef)(null);
	const list = (0, import_react.useRef)(null);
	const pressTimer = (0, import_react.useRef)(0);
	const press = (0, import_react.useRef)(null);
	const idsRef = (0, import_react.useRef)([]);
	const dragIdRef = (0, import_react.useRef)(null);
	const sortRef = (0, import_react.useRef)(false);
	const savedRef = (0, import_react.useRef)(false);
	const lastY = (0, import_react.useRef)(0);
	const rafRef = (0, import_react.useRef)(0);
	const onReorderRef = (0, import_react.useRef)(onReorder);
	onReorderRef.current = onReorder;
	const onEditRef = (0, import_react.useRef)(onEdit);
	onEditRef.current = onEdit;
	const lastTap = (0, import_react.useRef)(null);
	const moved = (0, import_react.useRef)(false);
	const display = (liveIds ?? items.map((c) => c.id)).map((id) => items.find((c) => c.id === id)).filter((c) => Boolean(c));
	const persist = () => {
		if (sortRef.current && idsRef.current.length && !savedRef.current) {
			savedRef.current = true;
			onReorderRef.current(idsRef.current);
		}
	};
	const close = () => {
		persist();
		setOpen(false);
		setSortMode(false);
		setPendingDelete(null);
		setDragId(null);
		setHoldId(null);
		setLiveIds(null);
		dragIdRef.current = null;
		sortRef.current = false;
	};
	const place = () => {
		const el = trigger.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const width = Math.min(r.width, window.innerWidth - 16);
		const left = Math.min(Math.max(8, r.left), window.innerWidth - width - 8);
		const top = r.bottom + 4;
		const maxH = Math.min(260, Math.max(120, window.innerHeight - top - 12));
		setPos({
			top,
			left,
			width,
			maxH
		});
	};
	const openMenu = () => {
		savedRef.current = false;
		sortRef.current = false;
		idsRef.current = items.map((c) => c.id);
		setLiveIds(null);
		setSortMode(false);
		setPendingDelete(null);
		setDragId(null);
		place();
		setOpen(true);
	};
	(0, import_react.useEffect)(() => {
		sortRef.current = sortMode;
		if (sortMode) setPendingDelete(null);
	}, [sortMode]);
	(0, import_react.useEffect)(() => {
		if (!sortMode && !dragId) idsRef.current = items.map((c) => c.id);
	}, [
		items,
		sortMode,
		dragId
	]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		place();
		const onOutside = (e) => {
			if (dragIdRef.current) return;
			const t = e.target;
			if (box.current?.contains(t) || menu.current?.contains(t)) return;
			close();
		};
		window.addEventListener("resize", place);
		window.addEventListener("scroll", place, true);
		document.addEventListener("pointerdown", onOutside);
		return () => {
			window.removeEventListener("resize", place);
			window.removeEventListener("scroll", place, true);
			document.removeEventListener("pointerdown", onOutside);
		};
	}, [open]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const applyY = (y) => {
			const id = dragIdRef.current;
			if (!id) return;
			const rows = list.current?.querySelectorAll("[data-card-id]");
			if (!rows?.length) return;
			const next = moveId(idsRef.current, id, indexFromY(rows, y));
			if (next.join("\0") === idsRef.current.join("\0")) return;
			idsRef.current = next;
			setLiveIds(next);
		};
		const lockScroller = (on) => {
			const el = nearestScroller(list.current);
			if (el) el.style.touchAction = on ? "none" : "";
		};
		const tick = () => {
			rafRef.current = 0;
			if (!dragIdRef.current) return;
			const scroller = nearestScroller(list.current);
			const dy = scroller ? autoScrollNearEdge(scroller, lastY.current) : 0;
			applyY(lastY.current);
			if (dy) rafRef.current = requestAnimationFrame(tick);
		};
		const onMove = (e) => {
			if (!dragIdRef.current) return;
			e.preventDefault();
			lastY.current = e.clientY;
			const scroller = nearestScroller(list.current);
			const dy = scroller ? autoScrollNearEdge(scroller, e.clientY) : 0;
			applyY(e.clientY);
			if (dy && !rafRef.current) rafRef.current = requestAnimationFrame(tick);
		};
		const onUp = () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
			rafRef.current = 0;
			lockScroller(false);
			if (!dragIdRef.current) return;
			dragIdRef.current = null;
			setDragId(null);
			savedRef.current = true;
			onReorderRef.current(idsRef.current);
		};
		const onTouchMove = (e) => {
			if (!dragIdRef.current) return;
			e.preventDefault();
		};
		window.addEventListener("pointermove", onMove, { passive: false });
		window.addEventListener("pointerup", onUp);
		window.addEventListener("pointercancel", onUp);
		window.addEventListener("touchmove", onTouchMove, { passive: false });
		return () => {
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("pointerup", onUp);
			window.removeEventListener("pointercancel", onUp);
			window.removeEventListener("touchmove", onTouchMove);
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, [open]);
	(0, import_react.useEffect)(() => {
		return () => {
			window.clearTimeout(pressTimer.current);
			persist();
		};
	}, []);
	const lockScroller = (on) => {
		const el = nearestScroller(list.current);
		if (el) el.style.touchAction = on ? "none" : "";
	};
	const enterSort = () => {
		const ids = liveIds ?? items.map((c) => c.id);
		idsRef.current = ids;
		savedRef.current = false;
		sortRef.current = true;
		setLiveIds(ids);
		setSortMode(true);
		setHoldId(null);
		setPendingDelete(null);
		buzz();
	};
	const clearPress = () => {
		window.clearTimeout(pressTimer.current);
		press.current = null;
		setHoldId(null);
	};
	const onRowPointerDown = (e, id) => {
		if (sortRef.current) return;
		moved.current = false;
		if (items.length < 2) return;
		if (e.target.closest("[data-row-action]")) return;
		if (e.pointerType === "mouse" && e.button !== 0) return;
		clearPress();
		press.current = {
			id,
			y: e.clientY
		};
		setHoldId(id);
		const endPress = () => {
			window.removeEventListener("pointerup", endPress);
			window.removeEventListener("pointercancel", endPress);
			if (!sortRef.current) clearPress();
		};
		window.addEventListener("pointerup", endPress);
		window.addEventListener("pointercancel", endPress);
		pressTimer.current = window.setTimeout(() => {
			press.current = null;
			enterSort();
		}, HOLD_MS$2);
	};
	const onRowPointerMove = (e) => {
		if (sortRef.current) return;
		const p = press.current;
		if (!p) return;
		if (Math.abs(e.clientY - p.y) + Math.abs(e.movementX) > 12) {
			moved.current = true;
			clearPress();
		}
	};
	const onRowPointerUp = (e, id) => {
		if (sortRef.current || moved.current) return;
		if (e.target.closest("[data-row-action]")) return;
		if (!onEditRef.current) return;
		const now = Date.now();
		const prev = lastTap.current;
		if (prev && prev.id === id && now - prev.at < 450) {
			lastTap.current = null;
			window.clearTimeout(pressTimer.current);
			press.current = null;
			setHoldId(null);
			onEditRef.current(id);
			close();
			return;
		}
		lastTap.current = {
			id,
			at: now
		};
	};
	const onGripDown = (e, id) => {
		e.preventDefault();
		e.stopPropagation();
		const ids = liveIds ?? items.map((c) => c.id);
		idsRef.current = ids;
		setLiveIds(ids);
		dragIdRef.current = id;
		setDragId(id);
		lastY.current = e.clientY;
		lockScroller(true);
		try {
			e.currentTarget.setPointerCapture(e.pointerId);
		} catch {}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative min-w-0", className),
		ref: box,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-0.5 text-left text-[11px] leading-none text-muted",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				ref: trigger,
				type: "button",
				className: "flex h-9 w-full items-center justify-between rounded-full border border-line bg-card px-3 text-[13px]",
				onClick: () => open ? close() : openMenu(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "(无)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-3.5 text-muted transition", open && "rotate-180") })]
			}),
			open && pos && (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: menu,
				className: "fixed z-[80] overflow-hidden rounded-[16px] border border-line bg-card shadow-[0_16px_40px_rgb(44_40_36/0.16)]",
				style: {
					top: pos.top,
					left: pos.left,
					width: pos.width,
					WebkitUserSelect: "none",
					WebkitTouchCallout: "none",
					userSelect: "none"
				},
				onContextMenu: (e) => e.preventDefault(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: list,
					className: "overflow-auto scroll-thin overscroll-contain",
					style: { maxHeight: pos.maxH },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "block w-full px-2.5 py-1.5 text-left text-[13px] text-muted",
							onClick: close,
							children: "(无)"
						}),
						display.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-card-id": c.id,
							className: cn("flex items-center gap-1 px-2 py-1 select-none hold-none", dragId === c.id && "rounded-lg bg-ink/15 drag-dim", !sortMode && holdId === c.id && "rounded-lg bg-ink/8"),
							style: { touchAction: sortMode ? "pan-y" : "manipulation" },
							onPointerDown: (e) => onRowPointerDown(e, c.id),
							onPointerMove: onRowPointerMove,
							onPointerUp: (e) => {
								onRowPointerUp(e, c.id);
								clearPress();
							},
							onPointerCancel: clearPress,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 flex-1 truncate text-[13px] leading-5",
								children: c.name
							}), sortMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "flex size-8 shrink-0 items-center justify-center rounded-md text-ink/55",
								"aria-label": `拖动${c.name}`,
								onPointerDown: (e) => onGripDown(e, c.id),
								style: { touchAction: "none" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripBars$3, {})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"data-row-action": true,
								className: "h-6 shrink-0 rounded-full bg-primary px-2 text-[11px] leading-none text-on-primary",
								onClick: (e) => {
									e.stopPropagation();
									onApply(c.id);
									close();
								},
								children: "应用"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"data-row-action": true,
								className: "grid size-6 shrink-0 place-items-center text-danger",
								"aria-label": `删除${c.name}`,
								onClick: (e) => {
									e.stopPropagation();
									setPendingDelete(c.id);
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
							})] })]
						}, c.id)),
						items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-2.5 py-2 text-[12px] text-muted",
							children: "还没有保存的项目"
						}),
						items.length > 0 && !sortMode && (onEdit || items.length > 1) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-3 pb-1 pt-0.5 text-[9px] leading-4 text-muted",
							children: onEdit && items.length > 1 ? "双击修改 · 长按排序" : onEdit ? "双击修改" : "长按进入排序"
						}) : null
					]
				}), pendingDelete && !sortMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-line bg-card px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[13px]",
						children: [
							"删除「",
							items.find((c) => c.id === pendingDelete)?.name ?? "",
							"」？"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1.5 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"data-row-action": true,
							className: "h-8 flex-1 rounded-full bg-dim text-[13px]",
							onClick: () => setPendingDelete(null),
							children: "取消"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"data-row-action": true,
							className: "h-8 flex-1 rounded-full bg-danger text-[13px] text-white",
							onClick: () => {
								onDelete(pendingDelete);
								setPendingDelete(null);
							},
							children: "删除"
						})]
					})]
				}) : null]
			}), document.body)
		]
	});
}
function RoleEditor({ chat, mode }) {
	const grok = useApp((s) => s.settings.grokModelId);
	const cards = useApp((s) => s.cards);
	const [busy, setBusy] = (0, import_react.useState)(null);
	const [polished, setPolished] = (0, import_react.useState)(false);
	const [charSel, setCharSel] = (0, import_react.useState)(0);
	const [memPick, setMemPick] = (0, import_react.useState)(false);
	const [recognizeOpen, setRecognizeOpen] = (0, import_react.useState)(false);
	const [recognizeText, setRecognizeText] = (0, import_react.useState)("");
	const patch = (p) => useApp.getState().patchChat(chat.id, p);
	const char = chat.characters[charSel] ?? chat.characters[0];
	const autoPolish = useApp((s) => s.ui.autoPolish);
	const polishJob = useApp((s) => s.ui.polishJob);
	const busyRef = (0, import_react.useRef)(false);
	const locked = !!busy;
	const memTurns = memoryTurnStats(chat.messages.length, chat.memoryUntil);
	const { W, I } = foldWindow();
	const memOk = memoryCaughtUp(chat.messages.length, chat.memoryUntil || 0, W, I);
	const memReady = foldCoveredEnd(chat.messages.length, W, I) >= 2;
	const memoryHint = useApp((s) => s.ui.memoryHint);
	const memStreaming = memoryHint?.chatId === chat.id && memoryHint.state === "generating";
	const memoryShown = memStreaming && memoryHint.draft != null ? memoryHint.draft : chat.memory;
	const fieldBusyLabel = busy?.kind === "field" ? FIELD_LABELS[busy.key] || busy.key : "";
	const syncChars = (characters, isMulti = chat.isMulti) => patch({
		characters,
		isMulti,
		imageParams: syncCharsFromRole(chat.imageParams, characters, isMulti)
	});
	const copyPersona = async () => {
		const text = copyRole(chat);
		if (!text.trim()) {
			useApp.getState().toast("没有可复制的内容");
			return;
		}
		try {
			await navigator.clipboard.writeText(text);
			useApp.getState().toast("已复制");
		} catch {
			useApp.getState().toast("复制失败");
		}
	};
	const applyRecognized = () => {
		const parsed = parseRoleText(recognizeText);
		if (!parsed.matched) {
			useApp.getState().toast("没认出标题");
			return;
		}
		const people = parsed.people;
		const shared = {};
		if (parsed.overview !== void 0) shared.overview = parsed.overview;
		if (parsed.opening !== void 0) shared.opening = parsed.opening;
		if (!chat.isMulti) {
			const p = people[0];
			const cur = chat.characters[0] ?? emptyCharacter(1);
			const next = p ? {
				...cur,
				...p.name !== void 0 ? { name: p.name } : {},
				...p.persona !== void 0 ? { persona: p.persona } : {},
				...p.speech !== void 0 ? { speech: p.speech } : {},
				...p.appearance !== void 0 ? { appearance: p.appearance } : {}
			} : cur;
			patch({
				...shared,
				characters: [next, ...chat.characters.slice(1)],
				imageParams: {
					...chat.imageParams,
					characters: chat.imageParams.characters.map((slot) => slot.id === next.id && p?.name !== void 0 ? {
						...slot,
						name: next.name
					} : slot)
				}
			});
			useApp.getState().toast(people.length > 1 ? "只填了第一个人" : "已填入");
		} else {
			let characters = [...chat.characters];
			while (characters.length < Math.max(people.length, 1)) characters.push(emptyCharacter(characters.length + 1));
			characters = characters.map((c, i) => {
				const p = people[i];
				if (!p) return c;
				return {
					...c,
					...p.name !== void 0 ? { name: p.name } : {},
					...p.persona !== void 0 ? { persona: p.persona } : {},
					...p.speech !== void 0 ? { speech: p.speech } : {},
					...p.appearance !== void 0 ? { appearance: p.appearance } : {}
				};
			});
			patch({
				...shared,
				characters,
				imageParams: syncCharsFromRole(chat.imageParams, characters, true)
			});
			useApp.getState().toast("已填入");
		}
		setRecognizeOpen(false);
	};
	const runPolish = async (instruction, mark = "all") => {
		if (busyRef.current) return;
		busyRef.current = true;
		setBusy({ kind: mark });
		try {
			const json = await polishAll(useApp.getState().chats.find((c) => c.id === chat.id) ?? chat, grok, instruction);
			useApp.getState().patchChat(chat.id, (c) => {
				const merged = mergePolish(c, json);
				return {
					...c,
					...merged,
					imageParams: syncCharsFromRole(c.imageParams, merged.characters, c.isMulti),
					updatedAt: Date.now()
				};
			});
			setPolished(true);
			useApp.getState().toast(instruction?.trim() ? "已按要求修改" : "已完善设定");
		} catch (e) {
			useApp.getState().toast(e instanceof Error ? e.message : "完善失败");
		} finally {
			busyRef.current = false;
			setBusy(null);
		}
	};
	const runField = async (key, charId, instruction) => {
		if (busyRef.current) return;
		busyRef.current = true;
		setBusy({
			kind: "field",
			key,
			charId
		});
		try {
			const snapshot = useApp.getState().chats.find((c) => c.id === chat.id) ?? chat;
			const text = await polishField(snapshot, grok, key, instruction, charId, (t) => {
				if (key !== "persona") return;
				if (!snapshot.characters.find((c) => c.id === charId)?.personaVoices) return;
				useApp.getState().patchChat(chat.id, (c) => ({
					...applyRoleField(c, key, t, charId),
					updatedAt: Date.now()
				}));
			});
			useApp.getState().patchChat(chat.id, (c) => ({
				...applyRoleField(c, key, text, charId),
				updatedAt: Date.now()
			}));
			useApp.getState().toast(`已更新${FIELD_LABELS[key] || key}`);
		} catch (e) {
			useApp.getState().toast(e instanceof Error ? e.message : "生成失败");
		} finally {
			busyRef.current = false;
			setBusy(null);
		}
	};
	const openPersonalize = (key, charId) => {
		if (locked) return;
		useApp.getState().setUI({ fieldEdit: {
			key,
			charId,
			text: ""
		} });
	};
	(0, import_react.useEffect)(() => {
		if (!autoPolish || mode !== "create") return;
		useApp.getState().setUI({ autoPolish: false });
		runPolish();
	}, [autoPolish]);
	(0, import_react.useEffect)(() => {
		if (!polishJob || polishJob.chatId !== chat.id) return;
		useApp.getState().setUI({ polishJob: null });
		if (polishJob.kind === "field" && polishJob.key) runField(polishJob.key, polishJob.charId, polishJob.instruction);
		else runPolish(polishJob.instruction, "personalize");
	}, [polishJob]);
	const startChat = async () => {
		const name = chat.characters.map((c) => c.name).filter(Boolean).join("、") || chat.name || "未命名";
		useApp.getState().patchChat(chat.id, (c) => ({
			...c,
			name,
			isDraft: false,
			imageParams: syncCharsFromRole(c.imageParams, c.characters, c.isMulti)
		}));
		useApp.getState().commitChat(chat.id);
		if (mode === "create") {
			const { sendOpening } = await import("./chat-actions-C6lFpsZZ.mjs");
			sendOpening(chat.id);
		} else useApp.getState().toast("设定已保存");
	};
	const nameBlock = char ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldBlock, {
		label: "名字",
		hint: "可空，让AI起",
		value: char.name,
		placeholder: PLACEHOLDERS.name,
		single: true,
		busy: busy?.kind === "field" && busy.key === "name" && busy.charId === char.id,
		locked,
		onChange: (v) => useApp.getState().patchChat(chat.id, (c) => {
			const characters = c.characters.map((x) => x.id === char.id ? {
				...x,
				name: v
			} : x);
			return {
				...c,
				characters,
				imageParams: {
					...c.imageParams,
					characters: c.imageParams.characters.map((slot) => slot.id === char.id ? {
						...slot,
						name: v
					} : slot)
				},
				updatedAt: Date.now()
			};
		}),
		onRegen: () => runField("name", char.id),
		onPersonal: () => openPersonalize("name", char.id)
	}) : null;
	const overviewBlock = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldBlock, {
		label: "要求总览",
		hint: "可空。写了就是最高优先。例如：回复尽量详尽生动，不要简略。",
		value: chat.overview,
		placeholder: PLACEHOLDERS.overview,
		busy: busy?.kind === "field" && busy.key === "overview",
		locked,
		onChange: (v) => patch({ overview: v }),
		onRegen: () => runField("overview"),
		onPersonal: () => openPersonalize("overview")
	});
	const look = readLook(useApp((s) => s.settings.look));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full",
		children: [chat.bgImageId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneBackdrop, {
			blobId: chat.bgImageId,
			fade: chat.bgFade ?? 40,
			paper: look.paper
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-full overflow-y-auto px-4 pb-72 pt-3 scroll-thin",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-1 text-[11px] tracking-[0.14em] text-muted",
					children: mode === "create" ? "NEW ROLE" : "EDIT ROLE"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1 flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: `min-w-0 flex-1 truncate whitespace-nowrap font-semibold leading-tight ${mode === "create" ? "text-[15px]" : "text-[20px]"}`,
							children: mode === "create" ? "写下她，再交给AI补全" : "修改设定"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-8 shrink-0 place-items-center text-muted",
							"aria-label": "复制人设",
							onClick: () => void copyPersona(),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-8 shrink-0 place-items-center text-muted",
							"aria-label": "识别人设",
							onClick: () => {
								setRecognizeText("");
								setRecognizeOpen(true);
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareArrowUp, { className: "size-4" })
						})
					]
				}),
				mode === "edit" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-[12px] text-muted",
					children: "保存后立刻对之后的对话生效。取消则不改动。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-end gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "inline-flex shrink-0 flex-col items-center gap-0.5 px-1 pb-1.5 text-[10px] text-muted",
						onClick: () => useApp.getState().setUI({ saveCardOpen: true }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }), "保存为角色卡"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-w-0 flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardSelect, {
							onPick: (id) => {
								const card = cards.find((c) => c.id === id);
								if (card) useApp.getState().applyCard(chat.id, card, chat.isMulti ? charSel : void 0);
							},
							onEdit: (id) => useApp.getState().setUI({ editCardId: id })
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center gap-2 text-[14px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `grid size-5 place-items-center rounded-full border ${chat.isMulti ? "border-primary bg-primary text-on-primary" : "border-line-strong bg-card"}`,
								children: chat.isMulti && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] leading-none",
									children: "✓"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								className: "sr-only",
								checked: chat.isMulti,
								onChange: (e) => {
									const on = e.target.checked;
									const characters = on ? chat.characters.length >= 2 ? chat.characters : [...chat.characters, emptyCharacter(2)] : [chat.characters[0] ?? emptyCharacter(1)];
									setCharSel(0);
									syncChars(characters, on);
								}
							}),
							"多人"
						]
					}), chat.isMulti && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-auto inline-flex items-center gap-1 text-[13px] text-muted",
						children: ["人数", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center rounded-full border border-line bg-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "px-2 py-1",
									onClick: () => {
										const characters = [...chat.characters, emptyCharacter(chat.characters.length + 1)];
										syncChars(characters, true);
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-3.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-2 text-ink",
									children: chat.characters.length
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "px-2 py-1",
									disabled: chat.characters.length <= 2,
									onClick: () => {
										const characters = chat.characters.slice(0, -1);
										setCharSel(0);
										syncChars(characters, true);
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3.5" })
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "mb-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "AI 版本" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatModelSelect, {
							align: "left",
							className: "w-full rounded-full border border-line bg-card"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomAvatar, {
							blobId: chat.customAvatarBlobId,
							onId: (id) => patch({ customAvatarBlobId: id }),
							onClear: () => patch({ customAvatarBlobId: "" })
						})
					]
				}),
				!chat.isMulti && nameBlock,
				overviewBlock,
				chat.isMulti && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "角色选择" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpandSelect, {
						value: String(charSel),
						options: chat.characters.map((c, i) => ({
							id: String(i),
							label: `角色${i + 1}${c.name ? ":" + c.name : ""}`
						})),
						onChange: (id) => setCharSel(Number(id)),
						align: "left"
					})]
				}),
				char && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: chat.isMulti ? "rounded-[22px] border border-line/80 bg-card/50 p-1" : "",
					children: [
						chat.isMulti && nameBlock,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldBlock, {
							label: "人设",
							hint: "她是谁：性格、职业或身份、口头禅、和我的关系……外貌请写在下面那栏。",
							value: char.persona,
							placeholder: PLACEHOLDERS.persona,
							busy: busy?.kind === "field" && busy.key === "persona" && busy.charId === char.id,
							locked,
							grow: Boolean(char.personaVoices),
							titleExtra: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: `rounded-full border px-2 py-0.5 text-[11px] leading-none transition ${char.personaVoices ? "border-primary bg-primary text-on-primary" : "border-primary bg-transparent text-primary"}`,
								disabled: locked,
								onClick: () => patch({ characters: chat.characters.map((c) => c.id === char.id ? {
									...c,
									personaVoices: !c.personaVoices
								} : c) }),
								children: "声部"
							}),
							onChange: (v) => patch({ characters: chat.characters.map((c) => c.id === char.id ? {
								...c,
								persona: v
							} : c) }),
							onRegen: () => runField("persona", char.id),
							onPersonal: () => openPersonalize("persona", char.id)
						}),
						chat.isMulti ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 px-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomAvatar, {
								blobId: char.wechatAvatarBlobId,
								label: "自定义微信头像。不上传就用主聊天的头像",
								onId: (id) => patch({ characters: chat.characters.map((c) => c.id === char.id ? {
									...c,
									wechatAvatarBlobId: id
								} : c) }),
								onClear: () => patch({ characters: chat.characters.map((c) => c.id === char.id ? {
									...c,
									wechatAvatarBlobId: ""
								} : c) })
							})
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldBlock, {
							label: "说话方式",
							hint: "语气、口癖、人称、句子长短。例如：软软的、会把「……」拖长。",
							value: char.speech,
							placeholder: PLACEHOLDERS.speech,
							busy: busy?.kind === "field" && busy.key === "speech" && busy.charId === char.id,
							locked,
							onChange: (v) => patch({ characters: chat.characters.map((c) => c.id === char.id ? {
								...c,
								speech: v
							} : c) }),
							onRegen: () => runField("speech", char.id),
							onPersonal: () => openPersonalize("speech", char.id)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LookRef, {
							blobId: char.lookBlobId,
							onPick: async (file) => {
								const id = await saveBlob(await compressRef(file, 768, .82));
								patch({ characters: chat.characters.map((c) => c.id === char.id ? {
									...c,
									lookBlobId: id
								} : c) });
							},
							onBlob: async (blobId) => {
								const blob = await getImage(blobId);
								if (!blob) {
									useApp.getState().toast("这张图已经不在了");
									return;
								}
								const id = await saveBlob(blob);
								patch({ characters: chat.characters.map((c) => c.id === char.id ? {
									...c,
									lookBlobId: id
								} : c) });
							},
							onClear: () => patch({ characters: chat.characters.map((c) => c.id === char.id ? {
								...c,
								lookBlobId: ""
							} : c) })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldBlock, {
							label: "外貌备忘",
							hint: "用生图提示词书写。发型发色瞳色体型固定服装写这里。其他栏不用再写外貌。",
							value: char.appearance,
							placeholder: PLACEHOLDERS.appearance,
							busy: busy?.kind === "field" && busy.key === "appearance" && busy.charId === char.id,
							locked,
							onChange: (v) => patch({ characters: chat.characters.map((c) => c.id === char.id ? {
								...c,
								appearance: v
							} : c) }),
							onRegen: () => runField("appearance", char.id),
							onPersonal: () => openPersonalize("appearance", char.id)
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldBlock, {
					label: "开场场景",
					hint: "现在在哪里、在做什么、气氛如何。",
					value: chat.opening,
					placeholder: PLACEHOLDERS.opening,
					busy: busy?.kind === "field" && busy.key === "opening",
					locked,
					onChange: (v) => patch({ opening: v }),
					onRegen: () => runField("opening"),
					onPersonal: () => openPersonalize("opening")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[13px] font-medium",
							children: "状态栏"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-0.5 text-[11px] text-muted",
							children: "关掉就折叠。打开后，每句回复末尾都会更新这份状态。开启内容按固定骨架，可改冒号后的描述。"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
							on: chat.statusBarOn,
							onChange: (v) => patch({
								statusBarOn: v,
								statusBar: chat.statusBar?.trim() ? chat.statusBar : DEFAULT_STATUS_BAR
							})
						})]
					}), chat.statusBarOn && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
						className: "min-h-[200px] font-mono text-[12px]",
						value: chat.statusBar,
						onChange: (e) => patch({ statusBar: e.target.value })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					className: "mb-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[13px] font-medium",
							children: "好感度"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-0.5 text-[11px] text-muted",
							children: "关掉就和现在一样。打开后每人单独记一个数，这一轮的结果会带进下一轮。"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
							on: chat.affectionOn === true,
							onChange: (v) => patch({ affectionOn: v })
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Extras, {
					extras: chat.extras,
					onChange: (extras) => patch({ extras })
				}),
				mode === "edit" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "mb-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
							sub: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5 text-[11px] text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"（已对话 ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-good",
										children: memTurns.spoken
									}),
									" 轮，已总结到第",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-good",
										children: memTurns.folded
									}),
									" 轮）"
								] }), memOk ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-good" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5 text-danger" })]
							}),
							hint: "聊久了会把更早的剧情压成备忘，下一轮当事实用。聊天里看不见。可改、可重总结、可清空。",
							children: "长期记忆"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
							className: "min-h-[120px]",
							value: memoryShown,
							placeholder: memStreaming ? "正在总结…" : "还没有长期记忆。对话变长后会自动整理。",
							onChange: (e) => {
								if (memStreaming) return;
								const text = e.target.value;
								const snaps = chat.memorySnaps ?? [];
								const last = snaps[snaps.length - 1];
								patch({
									memory: text,
									memorySnaps: last ? [...snaps.slice(0, -1), {
										...last,
										text
									}] : text ? [{
										covered: chat.memoryUntil || 0,
										text,
										foldAt: chat.memoryFoldAt || 0
									}] : []
								});
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
									className: "h-10 w-auto min-w-0 flex-1 whitespace-nowrap px-3 text-[13px]",
									onClick: () => useApp.getState().toast("已保存"),
									children: "保存"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
									className: "h-10 w-auto min-w-0 flex-1 whitespace-nowrap px-3 text-[13px]",
									onClick: () => {
										if (locked) return;
										if (!memReady) {
											useApp.getState().toast("还不够长，先多聊几轮");
											return;
										}
										setMemPick(true);
									},
									children: busy?.kind === "mem" ? "总结中…" : "重新总结"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
									className: "h-10 w-auto min-w-0 flex-1 whitespace-nowrap px-3 text-[13px]",
									onClick: () => {
										invalidateMemory(chat.id);
										patch(emptyMemory());
									},
									children: "清空"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
					open: memPick,
					onClose: () => setMemPick(false),
					title: "重新总结",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 text-[13px] leading-5 text-muted",
						children: memOk ? "记忆已经齐了。总结到当前只重压最近那一截。" : "记忆还落后。总结到当前会从缺口一次收到位。"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
							disabled: locked || !memReady,
							busy: busy?.kind === "mem",
							onClick: async () => {
								if (locked) return;
								setMemPick(false);
								setBusy({ kind: "mem" });
								if (await runManualMemory(chat.id, "current")) useApp.getState().toast("已总结到当前");
								setBusy(null);
							},
							children: "总结到当前"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
							className: "h-11",
							disabled: locked || !memReady,
							onClick: async () => {
								if (locked) return;
								setMemPick(false);
								setBusy({ kind: "mem" });
								if (await runManualMemory(chat.id, "all")) useApp.getState().toast("已全部重新总结");
								setBusy(null);
							},
							children: "全部重新总结"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
						hint: "只铺在这个聊天的人设、正文和生图参数上。有这张图时，不再用总设置里的图。",
						right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `h-7 rounded-full border px-3 text-[12px] ${(typeof chat.textPlate === "boolean" ? chat.textPlate : look.textPlate) ? "border-primary bg-primary text-on-primary" : "border-line bg-card text-ink"}`,
							onClick: () => {
								const on = typeof chat.textPlate === "boolean" ? chat.textPlate : look.textPlate;
								patch({ textPlate: !on });
							},
							children: "文本框"
						}),
						children: "上传自定义背景"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BgControls, {
						blobId: chat.bgImageId,
						fade: chat.bgFade ?? 40,
						onId: (id) => patch({
							bgImageId: id,
							bgFade: chat.bgFade ?? 40
						}),
						onClear: () => patch({
							bgImageId: void 0,
							bgFade: void 0
						}),
						onFade: (n) => patch({ bgFade: n })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none h-16" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "fixed inset-x-0 bottom-0 z-20 mx-auto max-w-lg bg-gradient-to-t from-bg via-bg to-transparent px-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-4",
					children: [
						mode === "create" && !polished && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
							busy: busy?.kind === "all" || busy?.kind === "field",
							disabled: locked && busy?.kind !== "all" && busy?.kind !== "field",
							onClick: () => {
								if (locked) return;
								runPolish();
							},
							children: busy?.kind === "field" ? `完善中(${fieldBusyLabel})` : busy?.kind === "all" ? "完善中" : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), " 让AI完善设定"] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
							className: "mt-2",
							disabled: locked,
							onClick: () => void startChat(),
							children: "跳过，开始聊天"
						})] }),
						mode === "create" && polished && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
								busy: busy?.kind === "field",
								disabled: locked,
								onClick: () => {
									if (locked) return;
									startChat();
								},
								children: busy?.kind === "field" ? `完善中(${fieldBusyLabel})` : "可以了，开始聊天"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
								className: "mt-2",
								disabled: locked && busy?.kind !== "all",
								onClick: () => void runPolish(),
								children: busy?.kind === "all" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), " 完善中"] }) : "让AI完善设定"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
								className: "mt-2",
								disabled: locked && busy?.kind !== "personalize",
								onClick: () => openPersonalize("all"),
								children: busy?.kind === "personalize" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), " 完善中"] }) : "让AI个性化修改"
							})
						] }),
						mode === "edit" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
								busy: busy?.kind === "field",
								disabled: locked,
								onClick: () => {
									if (locked) return;
									startChat();
								},
								children: busy?.kind === "field" ? `完善中(${fieldBusyLabel})` : "确认保存"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
								className: "mt-2",
								disabled: locked && busy?.kind !== "all",
								onClick: () => void runPolish(),
								children: busy?.kind === "all" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), " 完善中"] }) : "让AI完善设定"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
								className: "mt-2",
								disabled: locked && busy?.kind !== "personalize",
								onClick: () => openPersonalize("all"),
								children: busy?.kind === "personalize" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), " 完善中"] }) : "让AI个性化修改"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "mt-2 w-full py-2 text-[13px] text-muted",
								onClick: () => useApp.getState().cancelEdit(),
								children: "取消"
							})
						] }),
						mode === "create" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "mt-2 w-full py-2 text-[13px] text-muted",
							onClick: () => useApp.getState().cancelDraft(),
							children: "取消"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
					open: recognizeOpen,
					onClose: () => setRecognizeOpen(false),
					title: "识别人设",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-[12px] leading-relaxed text-muted",
							children: "按标题拆开。一行写「名字」「要求总览」「人设」「说话方式」「外貌备忘」或「开场场景」，也可以写成「名字：」或「【名字】」。对不上的不改。"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
							value: recognizeText,
							onChange: (e) => setRecognizeText(e.target.value),
							placeholder: "把人设贴在这里"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
							className: "mt-3",
							onClick: applyRecognized,
							children: "填入"
						})
					]
				})
			]
		})]
	});
}
function FieldBlock({ label, hint, value, placeholder, onChange, onRegen, onPersonal, busy, locked, single, titleExtra, grow }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "mb-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
			hint,
			right: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "grid size-8 place-items-center rounded-full hover:bg-dim disabled:opacity-40",
					onClick: onRegen,
					disabled: locked,
					title: "重新生成",
					children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-4 text-muted" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "grid size-8 place-items-center rounded-full hover:bg-dim disabled:opacity-40",
					onClick: onPersonal,
					disabled: locked,
					title: "个性化",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-muted" })
				})]
			}),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1.5",
				children: [label, titleExtra]
			})
		}), single ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
			value,
			placeholder,
			onChange: (e) => onChange(e.target.value)
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
			value,
			placeholder,
			rows: grow ? 12 : 5,
			className: grow ? "min-h-[calc(1.5rem+12*1.625em)]" : "min-h-[calc(1.5rem+5*1.625em)]",
			onChange: (e) => onChange(e.target.value)
		})]
	});
}
function clampCrop(scale, ox, oy, sMin, sMax, diameter, natW, natH) {
	const s = Math.min(sMax, Math.max(sMin, scale));
	const limX = Math.max(0, (natW * s - diameter) / 2);
	const limY = Math.max(0, (natH * s - diameter) / 2);
	return {
		scale: s,
		ox: Math.min(limX, Math.max(-limX, ox)),
		oy: Math.min(limY, Math.max(-limY, oy))
	};
}
function AvatarCrop({ src, onCancel, onDone }) {
	const stageRef = (0, import_react.useRef)(null);
	const imgRef = (0, import_react.useRef)(null);
	const [box, setBox] = (0, import_react.useState)({
		w: 0,
		h: 0
	});
	const [nat, setNat] = (0, import_react.useState)({
		w: 0,
		h: 0
	});
	const [view, setView] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const pointers = (0, import_react.useRef)(/* @__PURE__ */ new Map());
	const gesture = (0, import_react.useRef)(null);
	const diameter = Math.min(box.w, box.h) * .78;
	const ready = nat.w > 0 && diameter > 0;
	const sMin = ready ? Math.max(diameter / nat.w, diameter / nat.h) : 1;
	const sMax = sMin * 4;
	const shown = view ?? {
		scale: sMin,
		ox: 0,
		oy: 0
	};
	const viewRef = (0, import_react.useRef)(shown);
	viewRef.current = shown;
	const geo = (0, import_react.useRef)({
		sMin,
		sMax,
		diameter,
		natW: nat.w,
		natH: nat.h
	});
	geo.current = {
		sMin,
		sMax,
		diameter,
		natW: nat.w,
		natH: nat.h
	};
	(0, import_react.useEffect)(() => {
		const el = stageRef.current;
		if (!el) return;
		const measure = () => setBox({
			w: el.clientWidth,
			h: el.clientHeight
		});
		measure();
		const ro = new ResizeObserver(measure);
		ro.observe(el);
		return () => ro.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		setView((v) => {
			const g = geo.current;
			if (!v || !g.natW || !g.diameter) return v;
			const next = clampCrop(v.scale, v.ox, v.oy, g.sMin, g.sMax, g.diameter, g.natW, g.natH);
			if (next.scale === v.scale && next.ox === v.ox && next.oy === v.oy) return v;
			viewRef.current = next;
			return next;
		});
	}, [
		box.w,
		box.h,
		nat.w,
		nat.h
	]);
	const apply = (scale, ox, oy) => {
		const g = geo.current;
		const next = clampCrop(scale, ox, oy, g.sMin, g.sMax, g.diameter, g.natW, g.natH);
		viewRef.current = next;
		setView(next);
	};
	const begin = () => {
		const pts = [...pointers.current.values()];
		const v = viewRef.current;
		if (pts.length >= 2) {
			const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y) || 1;
			gesture.current = {
				ox: v.ox,
				oy: v.oy,
				scale: v.scale,
				x: 0,
				y: 0,
				dist,
				mx: (pts[0].x + pts[1].x) / 2,
				my: (pts[0].y + pts[1].y) / 2
			};
		} else if (pts.length === 1) gesture.current = {
			ox: v.ox,
			oy: v.oy,
			scale: v.scale,
			x: pts[0].x,
			y: pts[0].y,
			dist: 0,
			mx: pts[0].x,
			my: pts[0].y
		};
		else gesture.current = null;
	};
	const onPointerDown = (e) => {
		if (!ready) return;
		e.currentTarget.setPointerCapture(e.pointerId);
		pointers.current.set(e.pointerId, {
			x: e.clientX,
			y: e.clientY
		});
		begin();
	};
	const onPointerMove = (e) => {
		if (!pointers.current.has(e.pointerId)) return;
		pointers.current.set(e.pointerId, {
			x: e.clientX,
			y: e.clientY
		});
		const g = gesture.current;
		if (!g) return;
		const pts = [...pointers.current.values()];
		if (pts.length >= 2) {
			const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y) || 1;
			const mx = (pts[0].x + pts[1].x) / 2;
			const my = (pts[0].y + pts[1].y) / 2;
			const scale = g.scale * (dist / g.dist);
			const k = scale / g.scale;
			apply(scale, g.ox * k + (mx - g.mx), g.oy * k + (my - g.my));
		} else apply(g.scale, g.ox + (e.clientX - g.x), g.oy + (e.clientY - g.y));
	};
	const onPointerUp = (e) => {
		pointers.current.delete(e.pointerId);
		begin();
	};
	(0, import_react.useEffect)(() => {
		const el = stageRef.current;
		if (!el) return;
		const onWheel = (e) => {
			if (!geo.current.natW) return;
			e.preventDefault();
			const v = viewRef.current;
			const factor = e.deltaY < 0 ? 1.06 : 1 / 1.06;
			const g = geo.current;
			const next = clampCrop(v.scale * factor, v.ox * factor, v.oy * factor, g.sMin, g.sMax, g.diameter, g.natW, g.natH);
			viewRef.current = next;
			setView(next);
		};
		el.addEventListener("wheel", onWheel, { passive: false });
		return () => el.removeEventListener("wheel", onWheel);
	}, []);
	const finish = () => {
		const img = imgRef.current;
		const g = geo.current;
		if (!img || !g.natW || !g.diameter || busy) return;
		setBusy(true);
		const { scale, ox, oy } = viewRef.current;
		const dw = g.natW * scale;
		const dh = g.natH * scale;
		const sw = g.diameter / scale;
		const sh = g.diameter / scale;
		const sx = Math.max(0, Math.min(g.natW - sw, ((dw - g.diameter) / 2 - ox) / scale));
		const sy = Math.max(0, Math.min(g.natH - sh, ((dh - g.diameter) / 2 - oy) / scale));
		const canvas = document.createElement("canvas");
		canvas.width = 512;
		canvas.height = 512;
		const ctx = canvas.getContext("2d");
		if (!ctx) {
			setBusy(false);
			return;
		}
		ctx.drawImage(img, sx, sy, sw, sh, 0, 0, 512, 512);
		canvas.toBlob((blob) => {
			if (!blob) {
				setBusy(false);
				return;
			}
			onDone(blob);
		}, "image/jpeg", .9);
	};
	const dw = nat.w * shown.scale;
	const dh = nat.h * shown.scale;
	const cx = box.w / 2;
	const cy = box.h / 2;
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[100] flex flex-col bg-black text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center px-1 pt-[max(8px,env(safe-area-inset-top))]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-11 place-items-center",
						"aria-label": "返回",
						onClick: onCancel,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 text-center text-[16px]",
						children: "移动和缩放"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-11" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: stageRef,
				className: "relative min-h-0 flex-1 touch-none overflow-hidden",
				onPointerDown,
				onPointerMove,
				onPointerUp,
				onPointerCancel: onPointerUp,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					ref: imgRef,
					src,
					alt: "",
					draggable: false,
					onLoad: (e) => setNat({
						w: e.currentTarget.naturalWidth,
						h: e.currentTarget.naturalHeight
					}),
					onError: onCancel,
					className: "absolute max-w-none select-none",
					style: {
						width: dw || void 0,
						height: dh || void 0,
						left: cx + shown.ox - dw / 2,
						top: cy + shown.oy - dh / 2,
						opacity: ready ? 1 : 0
					}
				}), ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute rounded-full border border-white/90",
					style: {
						width: diameter,
						height: diameter,
						left: cx - diameter / 2,
						top: cy - diameter / 2,
						boxShadow: "0 0 0 9999px rgba(0,0,0,0.55)"
					}
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex shrink-0 justify-end px-4 pb-[max(16px,env(safe-area-inset-bottom))] pt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "rounded-full bg-primary px-6 py-2 text-[15px] text-on-primary disabled:opacity-40",
					disabled: !ready || busy,
					onClick: finish,
					children: "完成"
				})
			})
		]
	}), document.body);
}
function CustomAvatar({ blobId, onId, onClear, label = "自定义头像。不上传就用第一张生成的图" }) {
	const [url, setUrl] = (0, import_react.useState)(null);
	const [crop, setCrop] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!blobId) {
			setUrl(null);
			return;
		}
		let dead = false;
		imageUrl(blobId).then((u) => {
			if (!dead) setUrl(u);
		});
		return () => {
			dead = true;
		};
	}, [blobId]);
	(0, import_react.useEffect)(() => {
		return () => {
			if (crop) URL.revokeObjectURL(crop);
		};
	}, [crop]);
	const openCrop = (blob) => {
		setCrop((prev) => {
			if (prev) URL.revokeObjectURL(prev);
			return URL.createObjectURL(blob);
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3 flex items-center gap-2",
		children: [
			url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomImg, {
					src: url,
					className: "size-16 rounded-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute -right-1 -top-1 z-10 grid size-5 place-items-center rounded-full bg-card text-ink",
					"aria-label": "去掉自定义头像",
					onClick: onClear,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePick, {
				onFile: (file) => openCrop(file),
				onBlob: async (id) => {
					const blob = await getImage(id);
					if (!blob) {
						useApp.getState().toast("这张图已经不在了");
						return;
					}
					openCrop(blob);
				},
				render: (open) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid size-9 place-items-center rounded-full border border-line text-muted",
					"aria-label": "上传自定义头像",
					onClick: open,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[12px] text-muted",
				children: label
			}),
			crop ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarCrop, {
				src: crop,
				onCancel: () => setCrop(null),
				onDone: (blob) => {
					saveBlob(blob).then(onId);
					setCrop(null);
				}
			}) : null
		]
	});
}
function LookRef({ blobId, onPick, onBlob, onClear }) {
	const [url, setUrl] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!blobId) {
			setUrl(null);
			return;
		}
		let dead = false;
		imageUrl(blobId).then((u) => {
			if (!dead) setUrl(u);
		});
		return () => {
			dead = true;
		};
	}, [blobId]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3 flex items-center gap-2 px-1",
		children: [url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomImg, {
				src: url,
				className: "size-16 rounded-[12px] object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "absolute -right-1 -top-1 z-10 grid size-5 place-items-center rounded-full bg-card text-ink",
				"aria-label": "去掉外貌备忘",
				onClick: onClear,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePick, {
			onFile: onPick,
			onBlob,
			render: (open) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-9 place-items-center rounded-full border border-line text-muted",
				"aria-label": "上传外貌备忘",
				onClick: open,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[12px] text-muted",
			children: "外貌备忘的样子，只给聊天看"
		})]
	});
}
function Extras({ extras, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3",
		children: [extras.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mb-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-1 flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-[13px] font-medium",
					children: ["新增", i + 1]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `rounded-full border px-2 py-0.5 text-[11px] leading-none transition ${e.emphasize ? "border-primary bg-primary text-on-primary" : "border-primary bg-transparent text-primary"}`,
							onClick: () => onChange(extras.map((x) => x.id === e.id ? {
								...x,
								emphasize: !x.emphasize
							} : x)),
							children: "强调"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `rounded-full border px-2 py-0.5 text-[11px] leading-none transition ${e.applyImage ? "border-primary bg-primary text-on-primary" : "border-primary bg-transparent text-primary"}`,
							onClick: () => onChange(extras.map((x) => x.id === e.id ? {
								...x,
								applyImage: !x.applyImage
							} : x)),
							children: "应用到生图"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "text-danger",
							onClick: () => onChange(extras.filter((x) => x.id !== e.id)),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
				value: e.body,
				onChange: (ev) => onChange(extras.map((x) => x.id === e.id ? {
					...x,
					body: ev.target.value
				} : x))
			})]
		}, e.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			className: "flex items-center gap-1 px-2 py-2 text-[13px] text-primary",
			onClick: () => onChange([...extras, {
				id: uid$1("ex_"),
				body: ""
			}]),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " 新增"]
		})]
	});
}
function CardSelect({ onPick, onEdit }) {
	const ordered = useApp((s) => s.cards).slice().sort((a, b) => a.order - b.order);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryDrawer, {
		className: "flex-1",
		label: "角色卡选择",
		items: ordered.map((c) => ({
			id: c.id,
			name: c.name
		})),
		onApply: onPick,
		onEdit,
		onDelete: (id) => useApp.getState().deleteCard(id),
		onReorder: (ids) => useApp.getState().reorderCards(ids)
	});
}
function CardEditSheet() {
	const id = useApp((s) => s.ui.editCardId);
	const [draft, setDraft] = (0, import_react.useState)(null);
	const [charSel, setCharSel] = (0, import_react.useState)(0);
	const opened = (0, import_react.useRef)(null);
	const openedName = (0, import_react.useRef)("");
	(0, import_react.useEffect)(() => {
		if (!id) {
			opened.current = null;
			setDraft(null);
			return;
		}
		if (opened.current === id) return;
		const card = useApp.getState().cards.find((c) => c.id === id);
		if (!card) return;
		opened.current = id;
		openedName.current = card.name;
		setDraft(structuredClone(card));
		setCharSel(0);
	}, [id]);
	if (!id || !draft) return null;
	const close = () => useApp.getState().setUI({ editCardId: null });
	const char = draft.characters[charSel] ?? draft.characters[0];
	const patchChar = (charId, p) => {
		setDraft((d) => d ? {
			...d,
			characters: d.characters.map((c) => c.id === charId ? {
				...c,
				...p
			} : c)
		} : d);
	};
	const save = () => {
		const name = draft.name.trim() || openedName.current;
		useApp.getState().updateCard({
			...draft,
			name
		});
		close();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-[60] flex justify-center px-4 py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-overlay/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 flex min-h-0 w-full max-w-md flex-col overflow-hidden rounded-[28px] bg-bg shadow-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center gap-2 px-5 pb-3 pt-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[20px] font-semibold",
						children: "修改"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "ml-auto text-[15px] text-primary",
						onClick: save,
						children: "保存"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-8 place-items-center",
						onClick: close,
						"aria-label": "关闭",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-8 scroll-hide",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
							hint: "列表里显示的名字。和下面角色的名字不是同一个。",
							children: "卡名"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							value: draft.name,
							placeholder: "卡名",
							onChange: (e) => setDraft((d) => d ? {
								...d,
								name: e.target.value
							} : d)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center gap-2 text-[14px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `grid size-5 place-items-center rounded-full border ${draft.isMulti ? "border-primary bg-primary text-on-primary" : "border-line-strong bg-card"}`,
									children: draft.isMulti && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] leading-none",
										children: "✓"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									className: "sr-only",
									checked: draft.isMulti,
									onChange: (e) => {
										const on = e.target.checked;
										setCharSel(0);
										setDraft((d) => {
											if (!d) return d;
											const characters = on ? d.characters.length >= 2 ? d.characters : [...d.characters, emptyCharacter(d.characters.length + 1)] : [d.characters[0] ?? emptyCharacter(1)];
											return {
												...d,
												isMulti: on,
												characters
											};
										});
									}
								}),
								"多人"
							]
						}), draft.isMulti && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "ml-auto inline-flex items-center gap-1 text-[13px] text-muted",
							children: ["人数", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center rounded-full border border-line bg-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "px-2 py-1",
										onClick: () => {
											setDraft((d) => d ? {
												...d,
												characters: [...d.characters, emptyCharacter(d.characters.length + 1)]
											} : d);
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-3.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-2 text-ink",
										children: draft.characters.length
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "px-2 py-1",
										disabled: draft.characters.length <= 2,
										onClick: () => {
											setCharSel(0);
											setDraft((d) => d ? {
												...d,
												characters: d.characters.slice(0, -1)
											} : d);
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3.5" })
									})
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "mb-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "AI 版本" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatModelSelect, {
								align: "left",
								className: "w-full rounded-full border border-line bg-card"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomAvatar, {
								blobId: draft.customAvatarBlobId,
								onId: (customAvatarBlobId) => setDraft((d) => d ? {
									...d,
									customAvatarBlobId
								} : d),
								onClear: () => setDraft((d) => d ? {
									...d,
									customAvatarBlobId: ""
								} : d)
							})
						]
					}),
					!draft.isMulti && char ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlainField, {
						label: "名字",
						hint: "可空，让AI起",
						value: char.name,
						placeholder: PLACEHOLDERS.name,
						single: true,
						onChange: (v) => patchChar(char.id, { name: v })
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlainField, {
						label: "要求总览",
						hint: "可空。写了就是最高优先。例如：回复尽量详尽生动，不要简略。",
						value: draft.overview,
						placeholder: PLACEHOLDERS.overview,
						onChange: (overview) => setDraft((d) => d ? {
							...d,
							overview
						} : d)
					}),
					draft.isMulti && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "角色选择" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpandSelect, {
							value: String(Math.min(charSel, Math.max(0, draft.characters.length - 1))),
							options: draft.characters.map((c, i) => ({
								id: String(i),
								label: `角色${i + 1}${c.name ? ":" + c.name : ""}`
							})),
							onChange: (next) => setCharSel(Number(next)),
							align: "left"
						})]
					}),
					char && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: draft.isMulti ? "mb-3 rounded-[22px] border border-line/80 bg-card/50 p-1" : "",
						children: [
							draft.isMulti && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlainField, {
								label: "名字",
								hint: "可空，让AI起",
								value: char.name,
								placeholder: PLACEHOLDERS.name,
								single: true,
								onChange: (v) => patchChar(char.id, { name: v })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlainField, {
								label: "人设",
								hint: "她是谁：性格、职业或身份、口头禅、和我的关系……外貌请写在下面那栏。",
								value: char.persona,
								placeholder: PLACEHOLDERS.persona,
								grow: Boolean(char.personaVoices),
								titleExtra: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: `rounded-full border px-2 py-0.5 text-[11px] leading-none transition ${char.personaVoices ? "border-primary bg-primary text-on-primary" : "border-primary bg-transparent text-primary"}`,
									onClick: () => patchChar(char.id, { personaVoices: !char.personaVoices }),
									children: "声部"
								}),
								onChange: (v) => patchChar(char.id, { persona: v })
							}),
							draft.isMulti ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-3 px-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomAvatar, {
									blobId: char.wechatAvatarBlobId,
									label: "自定义微信头像。不上传就用主聊天的头像",
									onId: (wechatAvatarBlobId) => patchChar(char.id, { wechatAvatarBlobId }),
									onClear: () => patchChar(char.id, { wechatAvatarBlobId: "" })
								})
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlainField, {
								label: "说话方式",
								hint: "语气、口癖、人称、句子长短。例如：软软的、会把「……」拖长。",
								value: char.speech,
								placeholder: PLACEHOLDERS.speech,
								onChange: (v) => patchChar(char.id, { speech: v })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LookRef, {
								blobId: char.lookBlobId,
								onPick: async (file) => {
									const lookBlobId = await saveBlob(await compressRef(file, 768, .82));
									patchChar(char.id, { lookBlobId });
								},
								onBlob: async (blobId) => {
									const blob = await getImage(blobId);
									if (!blob) {
										useApp.getState().toast("这张图已经不在了");
										return;
									}
									const lookBlobId = await saveBlob(blob);
									patchChar(char.id, { lookBlobId });
								},
								onClear: () => patchChar(char.id, { lookBlobId: "" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlainField, {
								label: "外貌备忘",
								hint: "用生图提示词书写。发型发色瞳色体型固定服装写这里。其他栏不用再写外貌。",
								value: char.appearance,
								placeholder: PLACEHOLDERS.appearance,
								onChange: (v) => patchChar(char.id, { appearance: v })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlainField, {
						label: "开场场景",
						hint: "现在在哪里、在做什么、气氛如何。",
						value: draft.opening,
						placeholder: PLACEHOLDERS.opening,
						onChange: (opening) => setDraft((d) => d ? {
							...d,
							opening
						} : d)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[13px] font-medium",
								children: "状态栏"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-0.5 text-[11px] text-muted",
								children: "关掉就折叠。打开后，每句回复末尾都会更新这份状态。开启内容按固定骨架，可改冒号后的描述。"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
								on: draft.statusBarOn,
								onChange: (v) => setDraft((d) => d ? {
									...d,
									statusBarOn: v,
									statusBar: d.statusBar?.trim() ? d.statusBar : DEFAULT_STATUS_BAR
								} : d)
							})]
						}), draft.statusBarOn && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
							className: "min-h-[200px] font-mono text-[12px]",
							value: draft.statusBar,
							onChange: (e) => setDraft((d) => d ? {
								...d,
								statusBar: e.target.value
							} : d)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Extras, {
						extras: draft.extras,
						onChange: (extras) => setDraft((d) => d ? {
							...d,
							extras
						} : d)
					})
				]
			})]
		})]
	});
}
function PlainField({ label, hint, value, placeholder, onChange, single, titleExtra, grow }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "mb-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
			hint,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1.5",
				children: [label, titleExtra]
			})
		}), single ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
			value,
			placeholder,
			onChange: (e) => onChange(e.target.value)
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
			value,
			placeholder,
			rows: grow ? 12 : 5,
			className: grow ? "min-h-[calc(1.5rem+12*1.625em)]" : "min-h-[calc(1.5rem+5*1.625em)]",
			onChange: (e) => onChange(e.target.value)
		})]
	});
}
function AppearEditSheet() {
	const id = useApp((s) => s.ui.editAppearId);
	const [draft, setDraft] = (0, import_react.useState)(null);
	const opened = (0, import_react.useRef)(null);
	const openedName = (0, import_react.useRef)("");
	(0, import_react.useEffect)(() => {
		if (!id) {
			opened.current = null;
			setDraft(null);
			return;
		}
		if (opened.current === id) return;
		const row = useApp.getState().appearances.find((a) => a.id === id);
		if (!row) return;
		opened.current = id;
		openedName.current = row.name;
		setDraft({ ...row });
	}, [id]);
	if (!id || !draft) return null;
	const close = () => useApp.getState().setUI({ editAppearId: null });
	const save = () => {
		useApp.getState().updateAppearance(draft.id, draft.name.trim() || openedName.current, draft.prompt);
		close();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-[70] flex justify-center px-4 py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-overlay/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 flex min-h-0 w-full max-w-md flex-col overflow-hidden rounded-[28px] bg-bg shadow-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center gap-2 px-5 pb-3 pt-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[20px] font-semibold",
						children: "修改"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "ml-auto text-[15px] text-primary",
						onClick: save,
						children: "保存"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-8 place-items-center",
						onClick: close,
						"aria-label": "关闭",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-8 scroll-hide",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
						hint: "列表里显示的名字。",
						children: "名字"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						value: draft.name,
						placeholder: "名字",
						onChange: (e) => setDraft((d) => d ? {
							...d,
							name: e.target.value
						} : d)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
						hint: "保存后不会改你现在参数里已经写着的词。要点「应用」才换上。",
						children: "正面提示词"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
						value: draft.prompt,
						rows: 12,
						className: "min-h-[calc(1.5rem+12*1.625em)]",
						onChange: (e) => setDraft((d) => d ? {
							...d,
							prompt: e.target.value
						} : d)
					})]
				})]
			})]
		})]
	});
}
function esc(s) {
	return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function stripEndTag(s, tag) {
	const core = tag.replace(/,\s*$/, "").trim();
	const re = new RegExp(`(?:^|,)?\\s*${esc(core)}\\s*,?\\s*$`, "i");
	let cur = s.trimEnd();
	for (let i = 0; i < 4; i++) {
		const next = cur.replace(re, "").replace(/[,\s]+$/g, "").trimEnd();
		if (next === cur) break;
		cur = next;
	}
	return cur;
}
function appendTag(s, tag) {
	const t = s.trimEnd();
	if (!t) return tag;
	if (t.endsWith(",")) return `${t} ${tag}`;
	return `${t}, ${tag}`;
}
var SENSITIVE_RE = /^\s*rating:\s*sensitive,\s*nsfw,\s*uncensored,\s*/i;
function stripSensitivePrefix(s) {
	return s.replace(SENSITIVE_RE, "").replace(/^\s+/, "");
}
function applyFrontFlags(front, uncensored, fullBody) {
	let s = stripEndTag(stripEndTag(front, FULLBODY_TAG), UNCENSORED_TAG);
	if (uncensored) s = appendTag(s, UNCENSORED_TAG);
	if (fullBody) s = appendTag(s, FULLBODY_TAG);
	return s;
}
function applyBackFlags(back, sensitive) {
	const rest = stripSensitivePrefix(back);
	if (!sensitive) return rest;
	return rest ? `${SENSITIVE_PREFIX} ${rest}` : SENSITIVE_PREFIX;
}
function applyMergedFlags(text, flags) {
	let s = stripSensitivePrefix(text);
	s = applyFrontFlags(s, flags.uncensored, flags.fullBody);
	if (flags.sensitive) s = s ? `${SENSITIVE_PREFIX} ${s}` : SENSITIVE_PREFIX;
	return s;
}
function saveBank$1(next) {
	useApp.getState().setSettings({ random: next });
}
function GripBars$2() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex flex-col items-center justify-center gap-[3.5px] text-current",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[2px] w-4 rounded-full bg-current" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[2px] w-4 rounded-full bg-current" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[2px] w-4 rounded-full bg-current" })
		]
	});
}
function endOrder(rows) {
	return rows.reduce((n, row) => Math.max(n, row.order ?? 0), -1) + 1;
}
function ModuleList({ bank, sortDo, onSorting, onEdit, onCreate, onInsert }) {
	const [menu, setMenu] = (0, import_react.useState)(null);
	const [naming, setNaming] = (0, import_react.useState)(null);
	const [move, setMove] = (0, import_react.useState)(null);
	const [sortMode, setSortMode] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)(null);
	const [dragId, setDragId] = (0, import_react.useState)(null);
	const [holdId, setHoldId] = (0, import_react.useState)(null);
	const listRef = (0, import_react.useRef)(null);
	const draftRef = (0, import_react.useRef)(null);
	const dragRef = (0, import_react.useRef)(null);
	const sortRef = (0, import_react.useRef)(false);
	const bankRef = (0, import_react.useRef)(bank);
	const press = (0, import_react.useRef)(null);
	const pressTimer = (0, import_react.useRef)(0);
	const lastY = (0, import_react.useRef)(0);
	const rafRef = (0, import_react.useRef)(0);
	bankRef.current = bank;
	const pinStars = !(sortMode && draft);
	const groupsOf = (parentId) => orderedGroups(bank, parentId, draft?.groups, pinStars);
	const modsOf = (parentId) => orderedModules(bank, parentId, draft?.mods, pinStars);
	const cancelSort = () => {
		sortRef.current = false;
		draftRef.current = null;
		dragRef.current = null;
		setDraft(null);
		setDragId(null);
		setSortMode(false);
		setHoldId(null);
	};
	const finishSort = () => {
		const d = draftRef.current;
		const cur = bankRef.current;
		sortRef.current = false;
		if (d) saveBank$1({
			...cur,
			groups: (cur.groups ?? []).map((g) => d.groups[g.id] == null ? g : {
				...g,
				order: d.groups[g.id]
			}),
			modules: cur.modules.map((m) => d.mods[m.id] == null ? m : {
				...m,
				order: d.mods[m.id]
			})
		});
		draftRef.current = null;
		dragRef.current = null;
		setDraft(null);
		setDragId(null);
		setSortMode(false);
	};
	(0, import_react.useEffect)(() => {
		if (!menu) return;
		const close = () => setMenu(null);
		window.addEventListener("pointerdown", close);
		return () => window.removeEventListener("pointerdown", close);
	}, [menu]);
	(0, import_react.useEffect)(() => {
		onSorting(sortMode);
		sortDo.current = {
			save: finishSort,
			cancel: cancelSort
		};
	});
	(0, import_react.useEffect)(() => {
		if (!sortMode) return;
		const applyY = (y) => {
			const d = dragRef.current;
			const cur = draftRef.current;
			if (!d || !cur) return;
			const nodes = listRef.current?.querySelectorAll(`[data-drag-lane="${CSS.escape(d.lane)}"]`);
			if (!nodes?.length) return;
			const ids = Array.from(nodes).map((el) => el.dataset.rowId).filter((id) => Boolean(id));
			const next = moveId(ids, d.id, indexFromY(nodes, y));
			if (next.join("\0") === ids.join("\0")) return;
			const laneGroups = d.lane.startsWith("g:");
			const map = { ...laneGroups ? cur.groups : cur.mods };
			next.forEach((id, i) => {
				map[id] = i;
			});
			const updated = laneGroups ? {
				...cur,
				groups: map
			} : {
				...cur,
				mods: map
			};
			draftRef.current = updated;
			setDraft(updated);
		};
		const tick = () => {
			rafRef.current = 0;
			if (!dragRef.current) return;
			const scroller = nearestScroller(listRef.current);
			const dy = scroller ? autoScrollNearEdge(scroller, lastY.current) : 0;
			applyY(lastY.current);
			if (dy) rafRef.current = requestAnimationFrame(tick);
		};
		const onMove = (e) => {
			if (!dragRef.current) return;
			e.preventDefault();
			lastY.current = e.clientY;
			const scroller = nearestScroller(listRef.current);
			const dy = scroller ? autoScrollNearEdge(scroller, e.clientY) : 0;
			applyY(e.clientY);
			if (dy && !rafRef.current) rafRef.current = requestAnimationFrame(tick);
		};
		const onUp = () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
			rafRef.current = 0;
			const scroller = nearestScroller(listRef.current);
			if (scroller) scroller.style.touchAction = "";
			dragRef.current = null;
			setDragId(null);
		};
		window.addEventListener("pointermove", onMove, { passive: false });
		window.addEventListener("pointerup", onUp);
		window.addEventListener("pointercancel", onUp);
		return () => {
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("pointerup", onUp);
			window.removeEventListener("pointercancel", onUp);
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, [sortMode]);
	const clearPress = () => {
		window.clearTimeout(pressTimer.current);
		press.current = null;
		setHoldId(null);
	};
	const enterSort = () => {
		if (bank.modules.length + (bank.groups ?? []).length < 2) return;
		const snap = {
			groups: {},
			mods: {}
		};
		const parents = /* @__PURE__ */ new Set([null]);
		for (const g of bank.groups ?? []) parents.add(g.parentId ?? null);
		for (const m of bank.modules) parents.add(m.groupId ?? null);
		for (const p of parents) {
			orderedGroups(bank, p, void 0, true).forEach((g, i) => {
				snap.groups[g.id] = i;
			});
			orderedModules(bank, p, void 0, true).forEach((m, i) => {
				snap.mods[m.id] = i;
			});
		}
		draftRef.current = snap;
		sortRef.current = true;
		setDraft(snap);
		setSortMode(true);
		setHoldId(null);
		setMenu(null);
	};
	const onRowDown = (e, id) => {
		if (sortRef.current) return;
		if (e.target.closest("button")) return;
		if (e.pointerType === "mouse" && e.button !== 0) return;
		clearPress();
		press.current = { y: e.clientY };
		setHoldId(id);
		pressTimer.current = window.setTimeout(enterSort, 400);
	};
	const onRowMove = (e) => {
		if (sortRef.current || !press.current) return;
		if (Math.abs(e.clientY - press.current.y) > 12) clearPress();
	};
	const onGripDown = (e, id, lane) => {
		e.preventDefault();
		e.stopPropagation();
		dragRef.current = {
			id,
			lane
		};
		setDragId(id);
		lastY.current = e.clientY;
		const el = nearestScroller(listRef.current);
		if (el) el.style.touchAction = "none";
		try {
			e.currentTarget.setPointerCapture(e.pointerId);
		} catch {}
	};
	const openMenu = (el, kind, id) => {
		if (menu?.kind === kind && menu.id === id) {
			setMenu(null);
			return;
		}
		const r = el.getBoundingClientRect();
		const menuW = 132;
		const menuH = 168;
		let right = window.innerWidth - r.right;
		right = Math.max(8, Math.min(right, window.innerWidth - menuW - 8));
		let top = r.bottom + 4;
		if (top + menuH > window.innerHeight - 8) top = Math.max(8, r.top - menuH - 4);
		setMenu({
			kind,
			id,
			top,
			right
		});
	};
	const toggleStar = (kind, id) => {
		const cur = bankRef.current;
		if (kind === "group") {
			saveBank$1({
				...cur,
				groups: (cur.groups ?? []).map((g) => g.id === id ? {
					...g,
					starred: !g.starred
				} : g)
			});
			return;
		}
		saveBank$1({
			...cur,
			modules: cur.modules.map((m) => m.id === id ? {
				...m,
				starred: !m.starred
			} : m)
		});
	};
	const toggleCollapse = (id) => {
		const cur = bankRef.current;
		saveBank$1({
			...cur,
			groups: (cur.groups ?? []).map((g) => g.id === id ? {
				...g,
				collapsed: !g.collapsed
			} : g)
		});
	};
	const applyMove = (parentId) => {
		if (!move) return;
		const cur = bankRef.current;
		if (move.kind === "group") {
			if (parentId === move.id) return;
			if (parentId && groupDescendants(cur.groups ?? [], move.id).includes(parentId)) return;
			const siblings = (cur.groups ?? []).filter((g) => g.id !== move.id && (g.parentId ?? null) === parentId);
			saveBank$1({
				...cur,
				groups: (cur.groups ?? []).map((g) => g.id === move.id ? {
					...g,
					parentId,
					order: endOrder(siblings)
				} : g)
			});
		} else {
			const siblings = cur.modules.filter((m) => m.id !== move.id && (m.groupId ?? null) === parentId);
			saveBank$1({
				...cur,
				modules: cur.modules.map((m) => m.id === move.id ? {
					...m,
					groupId: parentId,
					order: endOrder(siblings)
				} : m)
			});
		}
		setMove(null);
	};
	const renderGroups = (parentId, depth) => groupsOf(parentId).map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-drag-lane": `g:${parentId ?? "root"}`,
		"data-row-id": g.id,
		className: cn("flex items-center gap-2 py-1.5 select-none", dragId === g.id && "bg-ink/10", !sortMode && holdId === g.id && "bg-ink/5"),
		style: {
			marginLeft: depth * 12,
			touchAction: sortMode ? "pan-y" : "manipulation"
		},
		onPointerDown: (e) => onRowDown(e, g.id),
		onPointerMove: onRowMove,
		onPointerUp: clearPress,
		onPointerCancel: clearPress,
		onContextMenu: (e) => e.preventDefault(),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-1 items-center gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-5 shrink-0 items-center justify-center rounded-full border border-line text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, { className: "size-3" })
					}),
					g.starred && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 shrink-0 fill-primary text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("min-w-0 truncate font-bold", depth === 0 ? "text-[15px]" : depth === 1 ? "text-[14px]" : "text-[13px]"),
						children: g.name
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-8 shrink-0 place-items-center text-muted",
				"aria-label": g.collapsed ? "展开" : "收起",
				onPointerDown: (e) => e.stopPropagation(),
				onClick: () => toggleCollapse(g.id),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 12 12",
					className: cn("size-3 shrink-0 fill-current transition", g.collapsed ? "" : "rotate-180"),
					"aria-hidden": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 9.2 1.4 3.2h9.2L6 9.2z" })
				})
			}),
			sortMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-8 shrink-0 place-items-center text-ink/55",
				"aria-label": "拖动排序",
				style: { touchAction: "none" },
				onPointerDown: (e) => onGripDown(e, g.id, `g:${parentId ?? "root"}`),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripBars$2, {})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-8 shrink-0 place-items-center text-muted",
				"aria-label": "更多",
				onPointerDown: (e) => e.stopPropagation(),
				onClick: (e) => openMenu(e.currentTarget, "group", g.id),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })
			})
		]
	}), !g.collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [renderGroups(g.id, depth + 1), modsOf(g.id).map((mod) => renderMod(mod, depth + 1))] })] }, g.id));
	const renderMod = (mod, depth) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-drag-lane": `m:${mod.groupId ?? "root"}`,
		"data-row-id": mod.id,
		className: cn("mb-3 rounded-[18px] border border-line bg-card px-3 py-3 select-none", dragId === mod.id && "bg-ink/15", !sortMode && holdId === mod.id && "bg-ink/8"),
		style: {
			marginLeft: depth * 12,
			touchAction: sortMode ? "pan-y" : "manipulation"
		},
		onPointerDown: (e) => onRowDown(e, mod.id),
		onPointerMove: onRowMove,
		onPointerUp: clearPress,
		onPointerCancel: clearPress,
		onContextMenu: (e) => e.preventDefault(),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-1 items-center gap-1",
				children: [mod.starred && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 shrink-0 fill-primary text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 truncate text-[15px] font-medium",
					children: [mod.name, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-1 text-[12px] font-normal text-muted",
						children: [
							"(",
							mod.items.length,
							")"
						]
					})]
				})]
			}), sortMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-8 shrink-0 place-items-center text-muted",
				"aria-label": `拖动${mod.name}`,
				style: { touchAction: "none" },
				onPointerDown: (e) => onGripDown(e, mod.id, `m:${mod.groupId ?? "root"}`),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripBars$2, {})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid size-8 place-items-center text-muted",
					"aria-label": "插入到正面提示词",
					onPointerDown: (e) => e.stopPropagation(),
					onClick: () => {
						onInsert(moduleTag([mod.name]));
						useApp.getState().toast("插入成功");
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid size-8 place-items-center text-muted",
					"aria-label": "复制提示词",
					onPointerDown: (e) => e.stopPropagation(),
					onClick: () => copyText(moduleTag([mod.name])),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid size-8 place-items-center text-muted",
					"aria-label": "更多",
					onPointerDown: (e) => e.stopPropagation(),
					onClick: (e) => openMenu(e.currentTarget, "mod", mod.id),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })
				})
			] })]
		}), !sortMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2 flex items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: cn("h-6 shrink-0 rounded-full px-2.5 text-[12px] leading-none", mod.pick === "random" ? "bg-primary text-on-primary" : "border border-line bg-card text-ink"),
					onPointerDown: (e) => e.stopPropagation(),
					onClick: () => saveBank$1(setModulePick(bank, mod.id, mod.pick === "random" ? "seq" : "random")),
					children: mod.pick === "random" ? "随机" : "顺序"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoundsBridge, {
					rounds: moduleRounds(mod),
					onChange: (n) => saveBank$1(setModuleRounds(bank, mod.id, n))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "ml-auto grid size-8 place-items-center text-muted",
					"aria-label": "编辑",
					onPointerDown: (e) => e.stopPropagation(),
					onClick: () => onEdit(mod),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" })
				})
			]
		})]
	}, mod.id);
	const moveRows = () => {
		const banned = /* @__PURE__ */ new Set();
		if (move?.kind === "group") {
			banned.add(move.id);
			for (const id of groupDescendants(bank.groups ?? [], move.id)) banned.add(id);
		}
		const rows = [];
		const walk = (parent, depth) => {
			for (const g of orderedGroups(bank, parent)) {
				if (banned.has(g.id)) continue;
				rows.push({
					id: g.id,
					name: g.name,
					depth
				});
				walk(g.id, depth + 1);
			}
		};
		walk(null, 0);
		return rows;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: listRef,
		children: [
			!sortMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "flex h-11 flex-1 items-center justify-center gap-1 rounded-full border border-line bg-card text-[14px]",
					onClick: onCreate,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " 添加模块"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "flex h-11 flex-1 items-center justify-center rounded-full border border-line bg-card text-[14px]",
					onClick: () => setNaming({ name: "" }),
					children: "创建分组"
				})]
			}),
			renderGroups(null, 0),
			modsOf(null).map((mod) => renderMod(mod, 0)),
			bank.modules.length === 0 && !(bank.groups ?? []).length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-[13px] text-muted",
				children: "还没有模块"
			}),
			menu && (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed z-[80] w-32 overflow-hidden rounded-[14px] border border-line bg-card shadow-lg",
				style: {
					top: menu.top,
					right: menu.right
				},
				onPointerDown: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "block w-full px-3 py-2.5 text-left text-[13px]",
						onClick: () => {
							toggleStar(menu.kind, menu.id);
							setMenu(null);
						},
						children: "星标"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "block w-full border-t border-line px-3 py-2.5 text-left text-[13px]",
						onClick: () => {
							setMove({
								kind: menu.kind,
								id: menu.id
							});
							setMenu(null);
						},
						children: "移动"
					}),
					menu.kind === "group" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "block w-full border-t border-line px-3 py-2.5 text-left text-[13px]",
						onClick: () => {
							const g = (bank.groups ?? []).find((x) => x.id === menu.id);
							setNaming({
								id: menu.id,
								name: g?.name ?? ""
							});
							setMenu(null);
						},
						children: "重命名"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "block w-full border-t border-line px-3 py-2.5 text-left text-[13px]",
						onClick: () => {
							const mod = bank.modules.find((m) => m.id === menu.id);
							setMenu(null);
							if (!mod) return;
							const copy = duplicateRandomModule(mod, bank.modules);
							saveBank$1({
								...bank,
								modules: [...bank.modules, copy]
							});
						},
						children: "复制"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "block w-full border-t border-line px-3 py-2.5 text-left text-[13px] text-danger",
						onClick: () => {
							const kind = menu.kind;
							const id = menu.id;
							setMenu(null);
							if (kind === "group") {
								const g = (bank.groups ?? []).find((x) => x.id === id);
								useApp.getState().setUI({ confirm: {
									title: "删除分组",
									body: `删除「${g?.name ?? "这个分组"}」和里面的全部分组、模块？这些模块的提示词以后抽不到了。`,
									danger: true,
									onOk: () => saveBank$1(deleteRandomGroup(bankRef.current, id))
								} });
								return;
							}
							const mod = bank.modules.find((m) => m.id === id);
							if (!mod) return;
							useApp.getState().setUI({ confirm: {
								title: "删除模块",
								body: `删除「${mod.name}」？里面的项也会一起删掉。`,
								danger: true,
								onOk: () => saveBank$1({
									...bankRef.current,
									modules: bankRef.current.modules.filter((m) => m.id !== id),
									...mod.linked === "appearances" ? { appearanceModuleDismissed: true } : {}
								})
							} });
						},
						children: "删除"
					})
				]
			}), document.body),
			naming && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NameDialog$2, {
				title: naming.id ? "重命名" : "创建分组",
				value: naming.name,
				onClose: () => setNaming(null),
				onOk: (name) => {
					const cur = bankRef.current;
					if (naming.id) saveBank$1({
						...cur,
						groups: (cur.groups ?? []).map((g) => g.id === naming.id ? {
							...g,
							name
						} : g)
					});
					else {
						const siblings = (cur.groups ?? []).filter((g) => (g.parentId ?? null) === null);
						saveBank$1({
							...cur,
							groups: [...cur.groups ?? [], {
								id: uid$1("rg_"),
								name,
								parentId: null,
								collapsed: true,
								order: endOrder(siblings),
								starred: false
							}]
						});
					}
					setNaming(null);
				}
			}),
			move && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveDialog, {
				rows: moveRows(),
				onClose: () => setMove(null),
				onPick: applyMove
			})
		]
	});
}
function copyText(text) {
	const done = () => useApp.getState().toast("已复制");
	if (navigator.clipboard?.writeText) {
		navigator.clipboard.writeText(text).then(done).catch(() => useApp.getState().toast("复制失败"));
		return;
	}
	useApp.getState().toast("复制失败");
}
function RoundsBridge({ rounds, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex h-6 shrink-0 items-center gap-1 text-[11px] leading-none text-muted",
		children: ["轮数", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex h-6 items-center rounded-full border border-line bg-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid h-6 w-5 place-items-center",
					"aria-label": "增加轮数",
					onClick: () => onChange(rounds + 1),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-3" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "min-w-4 text-center text-[12px] text-ink tabular-nums",
					children: rounds
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid h-6 w-5 place-items-center disabled:opacity-30",
					"aria-label": "减少轮数",
					disabled: rounds <= 1,
					onClick: () => onChange(rounds - 1),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3" })
				})
			]
		})]
	});
}
function NameDialog$2({ title, value, onClose, onOk }) {
	const [text, setText] = (0, import_react.useState)(value);
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[80] flex items-center justify-center px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-overlay/40",
			onClick: onClose,
			"aria-label": "关闭"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-sm rounded-[24px] bg-bg p-5 text-ink shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 text-[18px] font-semibold",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: text,
					placeholder: "分组名称",
					onChange: (e) => setText(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex justify-end gap-5 text-[15px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-muted",
						onClick: onClose,
						children: "取消"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "font-medium text-primary",
						onClick: () => onOk(text.trim() || "未命名"),
						children: "确定"
					})]
				})
			]
		})]
	}), document.body);
}
function MoveDialog({ rows, onClose, onPick }) {
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[80] flex items-start justify-center px-4 py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-overlay/40",
			onClick: onClose,
			"aria-label": "关闭"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex max-h-full w-full max-w-md flex-col overflow-hidden rounded-[24px] bg-bg text-ink shadow-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center px-5 pb-3 pt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "min-w-0 flex-1 text-[18px] font-semibold",
					children: "移动"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid size-9 place-items-center",
					onClick: onClose,
					"aria-label": "关闭",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[18px]",
						children: "×"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 overflow-y-auto px-4 pb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mb-2 h-12 w-full rounded-full border border-line bg-card text-[15px]",
					onClick: () => onPick(null),
					children: "不放进分组"
				}), rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mb-2 h-12 w-full rounded-full border border-line bg-card text-left text-[15px]",
					style: { paddingLeft: 16 + row.depth * 16 },
					onClick: () => onPick(row.id),
					children: row.name
				}, row.id))]
			})]
		})]
	}), document.body);
}
function PoolTree({ bank, picked, onToggle }) {
	const box = (0, import_react.useRef)(null);
	const toggle = (id) => {
		const cur = useApp.getState().settings.random;
		if (!cur) return;
		saveBank$1({
			...cur,
			groups: (cur.groups ?? []).map((g) => g.id === id ? {
				...g,
				collapsed: !g.collapsed
			} : g)
		});
	};
	(0, import_react.useEffect)(() => {
		const el = box.current;
		if (!el || typeof ResizeObserver === "undefined") return;
		let timer = 0;
		const obs = new ResizeObserver(() => {
			const h = Math.round(el.offsetHeight);
			window.clearTimeout(timer);
			timer = window.setTimeout(() => {
				const cur = useApp.getState().settings.random;
				if (!cur) return;
				const next = Math.max(216, Math.min(1200, h));
				if (cur.poolHeight === next) return;
				saveBank$1({
					...cur,
					poolHeight: next
				});
			}, 200);
		});
		obs.observe(el);
		return () => {
			obs.disconnect();
			window.clearTimeout(timer);
		};
	}, []);
	const render = (parentId, depth) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [orderedGroups(bank, parentId).map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: { marginLeft: depth * 12 },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1 py-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-5 shrink-0 items-center justify-center rounded-full border border-line text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, { className: "size-3" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("min-w-0 flex-1 truncate", depth === 0 ? "text-[14px]" : "text-[13px]"),
					children: g.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid size-7 place-items-center text-muted",
					"aria-label": g.collapsed ? "展开" : "收起",
					onClick: () => toggle(g.id),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						viewBox: "0 0 12 12",
						className: cn("size-3 shrink-0 fill-current transition", g.collapsed ? "" : "rotate-180"),
						"aria-hidden": true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 9.2 1.4 3.2h9.2L6 9.2z" })
					})
				})
			]
		}), !g.collapsed && render(g.id, depth + 1)]
	}, g.id)), orderedModules(bank, parentId).length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-2 py-1",
		style: { marginLeft: depth * 12 },
		children: orderedModules(bank, parentId).map((mod) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: cn("self-start rounded-full px-3 py-1.5 text-[13px] leading-5", picked.includes(mod.name) ? "bg-primary text-on-primary" : "bg-dim text-ink"),
			onClick: () => onToggle(mod.name),
			children: mod.name
		}, mod.id))
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: box,
		className: "mb-5 min-h-[216px] resize-y overflow-y-auto rounded-[16px] border border-line bg-card p-3",
		style: {
			height: bank.poolHeight ?? 216,
			maxHeight: "70vh"
		},
		children: [render(null, 0), bank.modules.length === 0 && !(bank.groups ?? []).length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[13px] text-muted",
			children: "还没有模块"
		})]
	});
}
function Sheet$2({ title, extra, onClose, z, children }) {
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 flex justify-center px-4 py-8",
		style: { zIndex: z },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-overlay/40",
			onClick: onClose,
			"aria-label": "关闭"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 flex h-full min-h-0 w-full max-w-md flex-col overflow-hidden rounded-[28px] bg-bg text-ink shadow-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center gap-2 px-5 pb-3 pt-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "min-w-0 flex-1 truncate text-[20px] font-semibold",
						children: title
					}),
					extra,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-9 shrink-0 place-items-center",
						onClick: onClose,
						"aria-label": "关闭",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-6 scroll-thin",
				children
			})]
		})]
	}), document.body);
}
function saveBank(next) {
	useApp.getState().setSettings({ random: next });
}
function GripBars$1() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex flex-col items-center justify-center gap-[3.5px] text-current",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[2px] w-4 rounded-full bg-current" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[2px] w-4 rounded-full bg-current" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[2px] w-4 rounded-full bg-current" })
		]
	});
}
function SortActions({ onSave, onCancel }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex shrink-0 items-center gap-3 text-[14px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "text-muted",
			onClick: onCancel,
			children: "取消"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "font-medium text-primary",
			onClick: onSave,
			children: "保存"
		})]
	});
}
function useListSort(sourceIds, enabled) {
	const [sorting, setSorting] = (0, import_react.useState)(false);
	const [order, setOrder] = (0, import_react.useState)(null);
	const [dragId, setDragId] = (0, import_react.useState)(null);
	const [holdId, setHoldId] = (0, import_react.useState)(null);
	const listRef = (0, import_react.useRef)(null);
	const idsRef = (0, import_react.useRef)([]);
	const dragRef = (0, import_react.useRef)(null);
	const sortingRef = (0, import_react.useRef)(false);
	const press = (0, import_react.useRef)(null);
	const timer = (0, import_react.useRef)(0);
	const lastY = (0, import_react.useRef)(0);
	const raf = (0, import_react.useRef)(0);
	const sourceKey = sourceIds.join("\0");
	(0, import_react.useEffect)(() => {
		if (!sortingRef.current) idsRef.current = sourceIds.slice();
	}, [sourceKey, sourceIds]);
	(0, import_react.useEffect)(() => {
		if (!sorting) return;
		const applyY = (y) => {
			const id = dragRef.current;
			if (!id) return;
			const rows = listRef.current?.querySelectorAll("[data-sort-id]");
			if (!rows?.length) return;
			const next = moveId(idsRef.current, id, indexFromY(rows, y));
			if (next.join("\0") === idsRef.current.join("\0")) return;
			idsRef.current = next;
			setOrder(next);
		};
		const lockScroller = (on) => {
			const el = nearestScroller(listRef.current);
			if (el) el.style.touchAction = on ? "none" : "";
		};
		const tick = () => {
			raf.current = 0;
			if (!dragRef.current) return;
			const scroller = nearestScroller(listRef.current);
			const dy = scroller ? autoScrollNearEdge(scroller, lastY.current) : 0;
			applyY(lastY.current);
			if (dy) raf.current = requestAnimationFrame(tick);
		};
		const onMove = (e) => {
			if (!dragRef.current) return;
			e.preventDefault();
			lastY.current = e.clientY;
			const scroller = nearestScroller(listRef.current);
			const dy = scroller ? autoScrollNearEdge(scroller, e.clientY) : 0;
			applyY(e.clientY);
			if (dy && !raf.current) raf.current = requestAnimationFrame(tick);
		};
		const onUp = () => {
			if (raf.current) cancelAnimationFrame(raf.current);
			raf.current = 0;
			lockScroller(false);
			if (!dragRef.current) return;
			dragRef.current = null;
			setDragId(null);
		};
		const onTouchMove = (e) => {
			if (!dragRef.current) return;
			e.preventDefault();
		};
		window.addEventListener("pointermove", onMove, { passive: false });
		window.addEventListener("pointerup", onUp);
		window.addEventListener("pointercancel", onUp);
		window.addEventListener("touchmove", onTouchMove, { passive: false });
		return () => {
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("pointerup", onUp);
			window.removeEventListener("pointercancel", onUp);
			window.removeEventListener("touchmove", onTouchMove);
			if (raf.current) cancelAnimationFrame(raf.current);
			lockScroller(false);
		};
	}, [sorting]);
	(0, import_react.useEffect)(() => () => window.clearTimeout(timer.current), []);
	const clearPress = () => {
		window.clearTimeout(timer.current);
		press.current = null;
		setHoldId(null);
	};
	const onRowDown = (e, id) => {
		if (!enabled || sortingRef.current) return;
		if (sourceIds.length < 2) return;
		if (e.target.closest("[data-row-action]")) return;
		if (e.pointerType === "mouse" && e.button !== 0) return;
		clearPress();
		press.current = { y: e.clientY };
		setHoldId(id);
		const end = () => {
			window.removeEventListener("pointerup", end);
			window.removeEventListener("pointercancel", end);
			if (!sortingRef.current) clearPress();
		};
		window.addEventListener("pointerup", end);
		window.addEventListener("pointercancel", end);
		timer.current = window.setTimeout(() => {
			press.current = null;
			const next = sourceIds.slice();
			idsRef.current = next;
			sortingRef.current = true;
			setOrder(next);
			setSorting(true);
			setHoldId(null);
		}, 400);
	};
	const onRowMove = (e) => {
		if (sortingRef.current || !press.current) return;
		if (Math.abs(e.clientY - press.current.y) > 12) clearPress();
	};
	const onGripDown = (e, id) => {
		e.preventDefault();
		e.stopPropagation();
		dragRef.current = id;
		setDragId(id);
		lastY.current = e.clientY;
		const el = nearestScroller(listRef.current);
		if (el) el.style.touchAction = "none";
		try {
			e.currentTarget.setPointerCapture(e.pointerId);
		} catch {}
	};
	const cancel = () => {
		window.clearTimeout(timer.current);
		sortingRef.current = false;
		dragRef.current = null;
		const el = nearestScroller(listRef.current);
		if (el) el.style.touchAction = "";
		setSorting(false);
		setOrder(null);
		setDragId(null);
		setHoldId(null);
	};
	const savedOrder = () => idsRef.current.length ? idsRef.current.slice() : sourceIds.slice();
	return {
		sorting,
		order: order ?? sourceIds,
		dragId,
		holdId,
		listRef,
		onRowDown,
		onRowMove,
		onGripDown,
		cancel,
		savedOrder
	};
}
function RandomSettings({ onClose, onInsert }) {
	const bank = useApp((s) => s.settings.random) ?? emptyBank();
	const appearances = useApp((s) => s.appearances);
	const revived = (0, import_react.useRef)(false);
	const [tab, setTab] = (0, import_react.useState)("mods");
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [creating, setCreating] = (0, import_react.useState)(false);
	const [sorting, setSorting] = (0, import_react.useState)(false);
	const sortDo = (0, import_react.useRef)({
		save: () => {},
		cancel: () => {}
	});
	(0, import_react.useEffect)(() => {
		if (revived.current || !appearances.length) return;
		revived.current = true;
		const cur = useApp.getState().settings.random ?? emptyBank();
		const next = reviveAppearanceModule(cur, appearances);
		if (next !== cur) saveBank(next);
	}, [appearances]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet$2, {
			z: 60,
			title: "随机设置",
			onClose,
			extra: sorting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortActions, {
				onCancel: () => sortDo.current.cancel(),
				onSave: () => sortDo.current.save()
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
				label: "随机模式",
				on: bank.enabled,
				onChange: (v) => saveBank(bankSwitch(bank, v))
			}),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex gap-6 text-[15px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: tab === "mods" ? "font-medium text-ink" : "text-muted",
					onClick: () => {
						if (!sorting) setTab("mods");
					},
					children: "模块管理"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: tab === "quick" ? "font-medium text-ink" : "text-muted",
					onClick: () => {
						if (!sorting) setTab("quick");
					},
					children: "快速配置"
				})]
			}), tab === "mods" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModuleList, {
				bank,
				sortDo,
				onSorting: setSorting,
				onEdit: setEditing,
				onCreate: () => setCreating(true),
				onInsert
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickPick, {
				bank,
				onInsert
			})]
		}),
		creating && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModuleDraft, {
			modules: bank.modules,
			onClose: () => setCreating(false),
			onSave: (mod) => {
				const cur = useApp.getState().settings.random ?? emptyBank();
				const order = cur.modules.filter((m) => (m.groupId ?? null) === null).reduce((n, m) => Math.max(n, m.order ?? 0), -1) + 1;
				saveBank({
					...cur,
					modules: [...cur.modules, {
						...mod,
						groupId: null,
						order
					}]
				});
				setCreating(false);
			}
		}),
		editing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModuleEditor, {
			module: bank.modules.find((m) => m.id === editing.id) ?? editing,
			modules: bank.modules,
			onClose: () => setEditing(null),
			onChange: (next) => saveBank({
				...bank,
				modules: bank.modules.map((m) => m.id === next.id ? next : m)
			})
		})
	] });
}
function SeqTurn({ module, onPick }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const current = seqTurnItem(module);
	const pool = module.items.filter((item) => item.enabled);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-1 text-[13px] text-muted",
				children: "当前轮到"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "flex h-11 w-full items-center gap-2 rounded-full border border-line bg-card px-4 text-left text-[14px]",
				onClick: () => setOpen((v) => !v),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "min-w-0 flex-1 truncate",
					children: current ? current.name || "未命名" : "没有选中的项"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `size-4 shrink-0 text-muted transition ${open ? "rotate-180" : ""}` })]
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `mt-2 overflow-y-auto overscroll-contain rounded-[16px] border border-line bg-card scroll-thin ${pool.length > 8 ? "max-h-[22rem]" : ""}`,
				children: [pool.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "flex h-11 items-center px-4 text-[14px] text-muted",
					children: "没有选中的项"
				}), pool.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `flex h-11 w-full items-center px-4 text-left text-[14px] ${item.id === current?.id ? "text-primary" : "text-ink"}`,
					onClick: () => {
						onPick(item.id);
						setOpen(false);
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 flex-1 truncate",
						children: item.name || "未命名"
					})
				}, item.id))]
			})
		]
	});
}
function ModuleEditor({ module, modules, onClose, onChange }) {
	const [item, setItem] = (0, import_react.useState)(null);
	const [name, setName] = (0, import_react.useState)(module.name);
	const linked = module.linked === "appearances";
	const sort = useListSort(module.items.map((item) => item.id), !linked);
	const allOn = module.items.length > 0 && module.items.every((item) => item.enabled);
	const allOff = module.items.length > 0 && module.items.every((item) => !item.enabled);
	const setAll = (enabled) => onChange({
		...module,
		items: module.items.map((item) => ({
			...item,
			enabled
		}))
	});
	const shown = sort.order.map((id) => module.items.find((item) => item.id === id)).filter((item) => !!item);
	(0, import_react.useEffect)(() => setName(module.name), [module.name]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet$2, {
		z: 64,
		title: "编辑模块",
		onClose,
		extra: sort.sorting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortActions, {
			onCancel: () => sort.cancel(),
			onSave: () => {
				const map = new Map(module.items.map((item) => [item.id, item]));
				const items = sort.savedOrder().map((id) => map.get(id)).filter((item) => !!item);
				for (const item of module.items) if (!items.some((x) => x.id === item.id)) items.push(item);
				onChange({
					...module,
					items
				});
				sort.cancel();
			}
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex shrink-0 items-center gap-1 text-[13px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: allOn ? "text-primary" : "text-muted",
				onClick: () => setAll(true),
				children: "全选"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: allOff ? "text-primary" : "text-muted",
				onClick: () => setAll(false),
				children: "全不选"
			})]
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "mb-1 block text-[13px] text-muted",
				children: "名称"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				value: name,
				disabled: linked,
				onChange: (e) => setName(e.target.value),
				onBlur: () => {
					if (linked) {
						setName(module.name);
						return;
					}
					const err = badModuleName(name, modules, module.id);
					if (err) {
						useApp.getState().toast(err);
						setName(module.name);
						return;
					}
					if (name.trim() !== module.name) onChange({
						...module,
						name: name.trim()
					});
				}
			}),
			linked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-[12px] leading-5 text-muted",
				children: "这个模块跟着角色选择。名字不能改，加减角色也请到角色选择里。"
			}),
			module.pick === "seq" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeqTurn, {
				module,
				onPick: (id) => onChange(jumpSeq(module, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemList, {
				items: shown,
				sorting: sort.sorting,
				dragId: sort.dragId,
				holdId: sort.holdId,
				listRef: sort.listRef,
				onRowDown: sort.onRowDown,
				onRowMove: sort.onRowMove,
				onGripDown: sort.onGripDown,
				canAdd: !linked && !sort.sorting,
				canDelete: !linked,
				onAdd: () => setItem("new"),
				onToggle: (it) => onChange({
					...module,
					items: module.items.map((x) => x.id === it.id ? {
						...x,
						enabled: !x.enabled
					} : x)
				}),
				onEdit: setItem,
				onDelete: (it) => useApp.getState().setUI({ confirm: {
					title: "删除这一项",
					body: `删除「${it.name || "未命名"}」？`,
					danger: true,
					onOk: () => onChange({
						...module,
						items: module.items.filter((x) => x.id !== it.id)
					})
				} })
			})
		]
	}), item && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemEditor, {
		item: item === "new" ? null : item,
		onClose: () => setItem(null),
		onSave: (next) => {
			const items = item === "new" ? [...module.items, next] : module.items.map((x) => x.id === next.id ? next : x);
			onChange({
				...module,
				items
			});
			setItem(null);
		}
	})] });
}
function ModuleDraft({ modules, onClose, onSave }) {
	const [draft, setDraft] = (0, import_react.useState)({
		id: uid$1("rm_"),
		name: "",
		pick: "random",
		items: [],
		nextId: null
	});
	const [item, setItem] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet$2, {
		z: 64,
		title: "添加模块",
		onClose,
		extra: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "text-[14px] text-primary",
			onClick: () => {
				const err = badModuleName(draft.name, modules);
				if (err) {
					useApp.getState().toast(err);
					return;
				}
				onSave({
					...draft,
					name: draft.name.trim()
				});
			},
			children: "保存"
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "mb-1 block text-[13px] text-muted",
				children: "名称"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				value: draft.name,
				onChange: (e) => setDraft({
					...draft,
					name: e.target.value
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemList, {
				items: draft.items,
				canAdd: true,
				canDelete: true,
				onAdd: () => setItem("new"),
				onToggle: (it) => setDraft({
					...draft,
					items: draft.items.map((x) => x.id === it.id ? {
						...x,
						enabled: !x.enabled
					} : x)
				}),
				onEdit: setItem,
				onDelete: (it) => useApp.getState().setUI({ confirm: {
					title: "删除这一项",
					body: `删除「${it.name || "未命名"}」？`,
					danger: true,
					onOk: () => setDraft({
						...draft,
						items: draft.items.filter((x) => x.id !== it.id)
					})
				} })
			})
		]
	}), item && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemEditor, {
		item: item === "new" ? null : item,
		onClose: () => setItem(null),
		onSave: (next) => {
			const items = item === "new" ? [...draft.items, next] : draft.items.map((x) => x.id === next.id ? next : x);
			setDraft({
				...draft,
				items
			});
			setItem(null);
		}
	})] });
}
function ItemList({ items, canAdd = true, canDelete = true, sorting = false, dragId = null, holdId = null, listRef, onRowDown, onRowMove, onGripDown, onAdd, onToggle, onEdit, onDelete }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4",
		ref: listRef,
		children: [canAdd && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "mb-3 flex h-11 w-full items-center justify-center gap-1 rounded-full border border-line text-[14px]",
			onClick: onAdd,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " 新增"]
		}), items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-sort-id": item.id,
			className: cn("mb-2 flex items-center gap-2 rounded-[16px] border border-line px-3 py-2 select-none hold-none", dragId === item.id && "bg-ink/15", !sorting && holdId === item.id && "bg-ink/8"),
			style: { touchAction: sorting ? "pan-y" : "manipulation" },
			onPointerDown: (e) => onRowDown?.(e, item.id),
			onPointerMove: onRowMove,
			onContextMenu: (e) => e.preventDefault(),
			children: [
				!sorting && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"data-row-action": true,
					"aria-label": item.enabled ? "取消选用" : "选用",
					className: `size-4 shrink-0 rounded-full border ${item.enabled ? "border-primary bg-primary" : "border-line-strong"}`,
					onClick: () => onToggle(item)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-w-0 flex-1 truncate text-[14px]",
					children: item.name || "未命名"
				}),
				sorting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid size-8 shrink-0 place-items-center text-muted",
					"aria-label": `拖动${item.name || "未命名"}`,
					style: { touchAction: "none" },
					onPointerDown: (e) => onGripDown?.(e, item.id),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripBars$1, {})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [canDelete && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"data-row-action": true,
					className: "grid size-8 place-items-center text-danger",
					"aria-label": "删除",
					onClick: () => onDelete(item),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"data-row-action": true,
					className: "grid size-8 place-items-center text-muted",
					"aria-label": "编辑",
					onClick: () => onEdit(item),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" })
				})] })
			]
		}, item.id))]
	});
}
function ItemEditor({ item, onClose, onSave }) {
	const [name, setName] = (0, import_react.useState)(item?.name ?? "");
	const [content, setContent] = (0, import_react.useState)(item?.content ?? "");
	const appearances = useApp((s) => s.appearances);
	const source = item?.sourceId ? appearances.find((a) => a.id === item.sourceId) : void 0;
	const contentLocked = Boolean(item?.sourceId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet$2, {
		z: 68,
		title: item ? "修改" : "新增",
		onClose,
		extra: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "text-[14px] text-primary",
			onClick: () => {
				if (!name.trim() && !content.trim()) {
					useApp.getState().toast("先写名称或内容");
					return;
				}
				const nextName = name.trim();
				if (item?.sourceId && !nextName) {
					useApp.getState().toast("先写名称");
					return;
				}
				const custom = item?.sourceId ? source ? nextName !== source.name : item.nameCustom === true : false;
				onSave({
					id: item?.id ?? uid$1("ri_"),
					name: nextName,
					content: contentLocked ? source?.prompt ?? item?.content ?? "" : content,
					enabled: item?.enabled ?? false,
					...item?.sourceId ? {
						sourceId: item.sourceId,
						...custom ? { nameCustom: true } : {}
					} : {}
				});
			},
			children: "保存"
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "mb-1 block text-[13px] text-muted",
				children: "名称"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				value: name,
				onChange: (e) => setName(e.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "mb-1 mt-4 block text-[13px] text-muted",
				children: "内容"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
				value: contentLocked ? source?.prompt ?? content : content,
				readOnly: contentLocked,
				onChange: (e) => setContent(e.target.value)
			}),
			contentLocked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-[12px] leading-5 text-muted",
				children: "内容跟着角色选择，这里改不了。改名字不会写回去。"
			})
		]
	});
}
function groupText(groups) {
	return groups.map((g) => g.join("&")).join(", ");
}
function groupRanges(groups) {
	const ranges = [];
	let at = 0;
	groups.forEach((g, i) => {
		if (i > 0) at += 2;
		const start = at;
		at += g.join("&").length;
		ranges.push({
			start,
			end: at
		});
	});
	return ranges;
}
function hitGroups(groups, start, end, dir) {
	const ranges = groupRanges(groups);
	if (!ranges.length) return [];
	if (start !== end) return ranges.map((_, i) => i).filter((i) => ranges[i].end > start && ranges[i].start < end);
	const caret = start;
	if (dir === "back") {
		for (let i = ranges.length - 1; i >= 0; i--) {
			if (caret > ranges[i].start && caret <= ranges[i].end) return [i];
			if (caret > ranges[i].end && (i === ranges.length - 1 || caret <= ranges[i + 1].start)) return [i];
		}
		return [];
	}
	for (let i = 0; i < ranges.length; i++) {
		if (caret >= ranges[i].start && caret < ranges[i].end) return [i];
		if (caret < ranges[i].start && (i === 0 || caret >= ranges[i - 1].end)) return [i];
	}
	return [];
}
function dropGroups(groups, indexes) {
	if (!indexes.length) return {
		next: groups,
		caret: 0
	};
	const gone = new Set(indexes);
	const ranges = groupRanges(groups);
	let prev = Math.min(...indexes) - 1;
	while (prev >= 0 && gone.has(prev)) prev--;
	return {
		next: groups.filter((_, i) => !gone.has(i)),
		caret: prev >= 0 ? ranges[prev].end : 0
	};
}
function QuickPick({ bank, onInsert }) {
	const [picked, setPicked] = (0, import_react.useState)([]);
	const [groups, setGroups] = (0, import_react.useState)([]);
	const boxRef = (0, import_react.useRef)(null);
	const caretRef = (0, import_react.useRef)(null);
	const delAt = (0, import_react.useRef)(0);
	const toggle = (name) => setPicked((cur) => cur.includes(name) ? cur.filter((n) => n !== name) : [...cur, name]);
	const confirm = () => {
		if (!picked.length) return;
		setGroups((cur) => [...cur, picked]);
		setPicked([]);
	};
	(0, import_react.useEffect)(() => {
		const el = boxRef.current;
		const n = caretRef.current;
		if (!el || n == null) return;
		caretRef.current = null;
		el.setSelectionRange(n, n);
	}, [groups]);
	const cut = (dir) => {
		const now = Date.now();
		if (now - delAt.current < 40) return;
		delAt.current = now;
		const el = boxRef.current;
		if (!el || !groups.length) return;
		const indexes = hitGroups(groups, el.selectionStart, el.selectionEnd, dir);
		if (!indexes.length) return;
		const dropped = dropGroups(groups, indexes);
		caretRef.current = dropped.caret;
		setGroups(dropped.next);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-2 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[13px] text-muted",
				children: "模块池"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "text-[14px] text-primary",
				onClick: confirm,
				children: "确定"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PoolTree, {
			bank,
			picked,
			onToggle: toggle
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-2 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[13px] text-muted",
				children: "已选择"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "text-[14px] text-primary",
				onClick: () => {
					if (!groups.length) {
						useApp.getState().toast("还没有选择");
						return;
					}
					onInsert(groups.map((g) => moduleTag(g)).join(","));
					caretRef.current = 0;
					setGroups([]);
					useApp.getState().toast("输出成功");
				},
				children: "输出"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			ref: boxRef,
			value: groupText(groups),
			placeholder: "点确定后出现在这里。退格删掉一整组。",
			className: "min-h-28 w-full resize-none rounded-[16px] border border-line bg-card px-3 py-3 text-[14px] outline-none placeholder:text-muted focus:border-primary/40",
			onChange: () => void 0,
			onPaste: (e) => e.preventDefault(),
			onKeyDown: (e) => {
				if (e.key !== "Backspace" && e.key !== "Delete") return;
				e.preventDefault();
				cut(e.key === "Backspace" ? "back" : "fwd");
			},
			onBeforeInput: (e) => {
				const kind = e.nativeEvent.inputType || "";
				if (kind === "deleteContentBackward" || kind === "deleteContentForward" || kind === "deleteByCut") {
					e.preventDefault();
					cut(kind === "deleteContentForward" ? "fwd" : "back");
					return;
				}
				e.preventDefault();
			}
		})
	] });
}
function scrollJump(jump) {
	const el = document.querySelector(`[data-section="${jump}"]`);
	if (!el) return false;
	let pane = el.parentElement;
	let fallback = null;
	while (pane) {
		const s = getComputedStyle(pane);
		if (/(auto|scroll)/.test(s.overflowY)) {
			if (!fallback) fallback = pane;
			if (pane.scrollHeight > pane.clientHeight + 4) break;
		}
		pane = pane.parentElement;
	}
	if (!pane || !/(auto|scroll)/.test(getComputedStyle(pane).overflowY)) pane = fallback;
	if (!pane) return false;
	const top = el.getBoundingClientRect().top - pane.getBoundingClientRect().top + pane.scrollTop;
	pane.scrollTo({
		top: Math.max(0, top - 6),
		behavior: "smooth"
	});
	if (jump === "seed") {
		const input = el.querySelector("[data-seed-input], input");
		if (input && !input.disabled) {
			input.focus();
			input.select();
		}
	}
	return true;
}
function ParamsPane({ chat, mode = "chat" }) {
	const live = chat.imageParams;
	const [peek, setPeek] = (0, import_react.useState)(null);
	const p = peek ? {
		...peek,
		characters: live.characters,
		useCoords: live.useCoords
	} : live;
	const commit = (partial) => {
		if (mode === "pure") useApp.getState().setPureParams(partial);
		else useApp.getState().patchParams(chat.id, partial);
	};
	const patch = (partial) => {
		if (peek) {
			const { characters, useCoords, ...rest } = partial;
			if (characters !== void 0 || useCoords !== void 0) commit({
				...characters !== void 0 ? { characters } : {},
				...useCoords !== void 0 ? { useCoords } : {}
			});
			if (Object.keys(rest).length) setPeek((prev) => prev ? {
				...prev,
				...rest
			} : prev);
			return;
		}
		commit(partial);
	};
	const v3 = naiFamily(p.model) === "v3";
	const hideSplit = mode === "pure" && p.merged;
	const jump = useApp((s) => s.ui.paramsJump);
	const charLocked = useApp((s) => s.settings.pureCharLocked === true);
	const previewOpen = useApp((s) => s.ui.previewParams);
	const previewRef = (0, import_react.useRef)(null);
	const chatId = chat.id;
	const pickAppearance = (target, a) => {
		if (peek && target === "mid") {
			patch({ promptMid: a.prompt });
			return;
		}
		useApp.getState().applyAppearance(chat.id, a, target);
	};
	const setFlags = (next) => {
		const sensitive = next.sensitive ?? p.sensitive;
		const uncensored = next.uncensored ?? p.uncensored;
		const fullBody = next.fullBody ?? p.fullBody;
		if (p.merged) {
			patch({
				sensitive,
				uncensored,
				fullBody,
				promptMid: applyMergedFlags(p.promptMid, {
					sensitive,
					uncensored,
					fullBody
				})
			});
			return;
		}
		patch({
			sensitive,
			uncensored,
			fullBody,
			promptFront: applyFrontFlags(p.promptFront, uncensored, fullBody),
			promptBack: applyBackFlags(p.promptBack, sensitive)
		});
	};
	const resId = `${p.width}x${p.height}`;
	const [polarity, setPolarity] = (0, import_react.useState)("pos");
	const [othersOpen, setOthersOpen] = (0, import_react.useState)(false);
	const [randomOpen, setRandomOpen] = (0, import_react.useState)(false);
	const inOthers = jump === "sampler" || jump === "steps" || jump === "img2img";
	(0, import_react.useEffect)(() => {
		if (!jump) return;
		if (inOthers && !othersOpen) {
			setOthersOpen(true);
			return;
		}
		let n = 0;
		let timer = 0;
		const run = () => {
			if (scrollJump(jump)) {
				useApp.getState().setUI({ paramsJump: null });
				return;
			}
			if (++n < 24) timer = window.setTimeout(run, 40);
			else useApp.getState().setUI({ paramsJump: null });
		};
		timer = window.setTimeout(run, 40);
		return () => window.clearTimeout(timer);
	}, [
		jump,
		inOthers,
		othersOpen
	]);
	(0, import_react.useEffect)(() => {
		if (!previewOpen) {
			setPeek(null);
			return;
		}
		const fn = (e) => {
			if (!previewRef.current?.contains(e.target)) {
				useApp.getState().setUI({ previewParams: false });
				setPeek(null);
			}
		};
		document.addEventListener("pointerdown", fn);
		return () => document.removeEventListener("pointerdown", fn);
	}, [previewOpen]);
	const look = readLook(useApp((s) => s.settings.look));
	const ownBg = Boolean(chat.bgImageId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: mode === "pure" ? "relative" : "relative h-full",
		children: [mode === "chat" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneBackdrop, {
			blobId: ownBg ? chat.bgImageId : look.bgImageId,
			fade: ownBg ? chat.bgFade ?? 40 : look.bgFade,
			paper: look.paper
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: mode === "pure" ? "mx-auto max-w-lg px-4 pb-10 pt-1" : "relative mx-auto h-full max-w-lg overflow-y-auto px-4 pb-24 pt-3 scroll-thin",
			children: [
				mode === "chat" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-[11px] tracking-[0.16em] text-muted",
								children: "CHAT IMAGE"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-serif text-2xl",
								children: "聊天配图参数"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageAiPicker, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 mt-1 text-[12px] text-muted",
						children: chat.isDraft ? "正在给这个新角色配图。改完可以切回「聊天」继续写人设，开始后她会先开口。" : "只作用于当前角色。改这里不会动到纯生图。"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mb-4",
						"data-preview-params": true,
						ref: previewRef,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "flex h-12 w-full items-center justify-between rounded-full border border-line bg-card px-4",
							onClick: () => {
								const next = !useApp.getState().ui.previewParams;
								useApp.getState().setUI({ previewParams: next });
								if (!next) setPeek(null);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-[14px]",
								children: chat.name || "当前角色"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shrink-0 text-[12px] text-muted",
								children: "预览角色参数"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewParamsDrawer, {
							currentId: chatId,
							onPeek: (id) => {
								if (id === chatId) {
									setPeek(null);
									return;
								}
								const src = useApp.getState().chats.find((c) => c.id === id);
								if (!src) return;
								setPeek(structuredClone(src.imageParams));
							},
							onApply: (id) => {
								const src = useApp.getState().chats.find((c) => c.id === id);
								if (!src) return;
								const { characters: _c, useCoords: _u, ...rest } = structuredClone(src.imageParams);
								useApp.getState().patchParams(chatId, {
									...rest,
									img2imgBlobId: rest.img2imgBlobId || "",
									img2imgStrength: rest.img2imgStrength ?? .7,
									img2imgNoise: rest.img2imgNoise ?? 0
								});
								setPeek(null);
								useApp.getState().setUI({ previewParams: false });
								useApp.getState().toast("已套用参数");
							}
						})]
					})
				] }),
				mode === "pure" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mb-3",
					"data-preview-params": true,
					ref: previewRef,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "flex h-12 w-full items-center justify-center rounded-full border border-line bg-card px-4 text-[14px]",
						onClick: () => {
							const next = !useApp.getState().ui.previewParams;
							useApp.getState().setUI({ previewParams: next });
							if (!next) setPeek(null);
						},
						children: "预览角色参数"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewParamsDrawer, {
						currentId: "__pure__",
						onPeek: (id) => {
							const src = useApp.getState().chats.find((c) => c.id === id);
							if (!src) return;
							setPeek(structuredClone(src.imageParams));
						},
						onApply: (id) => {
							const src = useApp.getState().chats.find((c) => c.id === id);
							if (!src) return;
							const next = structuredClone(src.imageParams);
							const cur = useApp.getState().pureParams;
							const locked = useApp.getState().settings.pureCharLocked === true;
							useApp.getState().setPureParams({
								...next,
								...locked ? {
									characters: structuredClone(cur.characters),
									useCoords: cur.useCoords
								} : { characters: next.characters.map((c) => ({
									...c,
									name: ""
								})) },
								img2imgBlobId: next.img2imgBlobId || "",
								img2imgStrength: next.img2imgStrength ?? .7,
								img2imgNoise: next.img2imgNoise ?? 0
							});
							setPeek(null);
							useApp.getState().setUI({ previewParams: false });
							useApp.getState().toast("已套用参数");
						}
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-2 flex gap-1.5",
					children: [
						[
							"成人",
							p.sensitive,
							() => setFlags({ sensitive: !p.sensitive })
						],
						[
							"无码",
							p.uncensored,
							() => setFlags({ uncensored: !p.uncensored })
						],
						[
							"全身",
							p.fullBody,
							() => setFlags({ fullBody: !p.fullBody })
						],
						[
							"补全",
							p.tagSuggest,
							() => patch({ tagSuggest: !p.tagSuggest })
						]
					].map(([label, on, fn]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: `h-7 flex-1 rounded-full text-[12px] ${on ? "bg-primary text-on-primary" : "bg-dim text-ink"}`,
						onClick: fn,
						children: label
					}, label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex rounded-full bg-dim p-0.5 text-[13px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `rounded-full px-4 py-1 ${polarity === "pos" ? "bg-primary text-on-primary" : "text-ink"}`,
							onClick: () => setPolarity("pos"),
							children: "正向"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `rounded-full px-4 py-1 ${polarity === "neg" ? "bg-primary text-on-primary" : "text-ink"}`,
							onClick: () => setPolarity("neg"),
							children: "负向"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "ml-auto grid size-9 place-items-center rounded-[10px] border border-line bg-card",
						"aria-label": "随机设置",
						onClick: () => setRandomOpen(true),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dices, { className: "size-4" })
					})]
				}),
				polarity === "pos" && (!hideSplit ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-1 mt-3 text-[13px] font-medium",
						children: "正面提示词.前"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptBox, {
						value: p.promptFront,
						suggest: p.tagSuggest,
						minH: 120,
						onChange: (v) => patch({ promptFront: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1 mt-3 flex items-end gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "shrink-0 pb-1.5 text-[13px] font-medium",
								children: "正面提示词.中"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "inline-flex shrink-0 flex-col items-center gap-0.5 px-1 pb-1 text-[10px] text-muted",
								onClick: () => useApp.getState().setUI({
									saveAppearOpen: true,
									appearTarget: "mid"
								}),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "保存角色"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppearSelect, {
								className: "min-w-0 flex-1",
								onPick: (a) => pickAppearance("mid", a)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptBox, {
						value: p.promptMid,
						suggest: p.tagSuggest,
						minH: 208,
						onChange: (v) => patch({ promptMid: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1 mt-3 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[13px] font-medium leading-5",
							children: "正面提示词.后"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-5 place-items-center text-danger",
							"aria-label": "清空正面提示词中",
							onClick: () => patch({ promptMid: "" }),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptBox, {
						value: p.promptBack,
						suggest: p.tagSuggest,
						minH: 120,
						onChange: (v) => patch({ promptBack: v })
					}),
					mode === "pure" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mb-2 mt-3 inline-flex h-7 items-center rounded-full border border-line px-3 text-[11px] text-muted",
						onClick: () => patch({
							merged: true,
							promptMid: joinPromptParts(p.promptFront, p.promptMid, p.promptBack),
							promptFront: "",
							promptBack: ""
						}),
						children: "合并成一个提示词"
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": true,
						className: "mb-2 inline-flex h-7 items-center rounded-full border border-primary bg-primary px-3 text-[11px] font-medium text-on-primary",
						onClick: () => patch({
							merged: false,
							promptFront: "",
							promptBack: ""
						}),
						children: "合并成一个提示词"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptBox, {
						value: p.promptMid,
						suggest: p.tagSuggest,
						minH: 208,
						onChange: (v) => patch({ promptMid: v })
					})]
				})),
				polarity === "neg" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 text-[15px] font-medium",
						children: "负面提示词"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-2 mt-1 flex gap-1.5",
						children: [
							"heavy",
							"light",
							"human",
							"custom"
						].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `h-8 rounded-full px-3 text-[13px] ${p.ucPreset === id ? "bg-primary text-on-primary" : "bg-dim text-ink"}`,
							onClick: () => {
								if (id === "custom") patch({ ucPreset: id });
								else patch({
									ucPreset: id,
									negative: UC[id]
								});
							},
							children: id === "heavy" ? "重" : id === "light" ? "轻" : id === "human" ? "人形" : "自定义"
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptBox, {
						value: p.negative,
						suggest: p.tagSuggest,
						minH: 88,
						onChange: (v) => patch({
							negative: v,
							ucPreset: "custom"
						})
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 mt-4 flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						"data-section": "model",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-1 text-[13px] font-medium",
							children: "模型"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpandSelect, {
							value: p.model,
							options: NAI_MODELS.map((m) => ({
								id: m.id,
								label: m.label,
								short: m.label.replace("NAI ", "")
							})),
							onChange: (id) => patch({ model: id }),
							align: "left",
							menu: "end"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						"data-section": "size",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-1 text-[13px] font-medium",
							children: "分辨率"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpandSelect, {
							value: resId,
							options: RESOLUTIONS.map((r) => ({
								id: `${r.w}x${r.h}`,
								label: `${r.label}  ${r.w}×${r.h}`,
								short: `${r.w} × ${r.h}`
							})),
							onChange: (id) => {
								const [w, h] = id.split("x").map(Number);
								patch({
									width: w,
									height: h
								});
							},
							align: "left",
							menu: "end"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center gap-2",
					"data-section": "seed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "shrink-0 text-[13px] font-medium",
							children: "种子"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							inputMode: "numeric",
							"data-seed-input": true,
							value: p.seed ?? "",
							placeholder: "随机",
							disabled: p.seedLocked,
							onChange: (e) => {
								const t = e.target.value.trim();
								patch({ seed: t === "" ? null : Number(t) || 0 });
							},
							className: "h-9 min-w-0 flex-1 rounded-full border border-line bg-card px-3 text-[13px] outline-none disabled:opacity-40"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-9 shrink-0 place-items-center rounded-full border border-line",
							onClick: () => patch({ seed: randomSeed() }),
							"aria-label": "随机种子",
							children: "↻"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `grid size-9 shrink-0 place-items-center rounded-full ${p.seedLocked ? "text-primary" : "text-muted"}`,
							onClick: () => patch({ seedLocked: !p.seedLocked }),
							"aria-label": "锁定种子",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-4" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "mb-3 flex w-full items-center justify-between text-[15px] font-medium",
					onClick: () => setOthersOpen((v) => !v),
					children: ["其他", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `size-4 transition ${othersOpen ? "rotate-180" : ""}` })]
				}),
				othersOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center gap-2",
						"data-section": "sampler",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 flex-1 items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "shrink-0 text-[13px] font-medium",
								children: "采样器"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpandSelect, {
								value: p.sampler,
								options: SAMPLERS.map((s) => ({
									id: s.id,
									label: s.label
								})),
								onChange: (id) => patch({ sampler: id }),
								menu: "end"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 flex-1 items-center justify-end gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "shrink-0 text-[13px] font-medium",
								children: "噪声表"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpandSelect, {
								value: p.noiseSchedule,
								options: NOISE_SCHEDULES.map((s) => ({
									id: s.id,
									label: s.label
								})),
								onChange: (id) => patch({ noiseSchedule: id }),
								menu: "end"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-section": "steps",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabeledSlider, {
							label: "步数",
							value: p.steps,
							min: 1,
							max: 50,
							locked: p.stepsLocked,
							onLock: (v) => patch({ stepsLocked: v }),
							onChange: (n) => patch({ steps: n })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabeledSlider, {
						label: "提示词引导",
						value: p.scale,
						min: 0,
						max: 10,
						step: .1,
						locked: p.scaleLocked,
						onLock: (v) => patch({ scaleLocked: v }),
						onChange: (n) => patch({ scale: n })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabeledSlider, {
						label: "CFG rescale",
						value: p.cfgRescale,
						min: 0,
						max: 1,
						step: .01,
						locked: p.cfgRescaleLocked,
						onLock: (v) => patch({ cfgRescaleLocked: v }),
						onChange: (n) => patch({ cfgRescale: n })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowSwitch, {
						label: "Variety+",
						hint: "动态跳过 CFG，增加构图变化",
						on: p.varietyPlus,
						onChange: (v) => patch({ varietyPlus: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowSwitch, {
						label: "Decrisper",
						hint: "减轻过饱和",
						on: p.decrisper,
						onChange: (v) => patch({ decrisper: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Img2ImgBox, {
						blobId: p.img2imgBlobId,
						strength: p.img2imgStrength ?? .7,
						noise: p.img2imgNoise ?? 0,
						onFile: async (file) => {
							const seed = await naiSeedOf(file);
							const next = { img2imgBlobId: await saveBlob(await compressRef(file, 1216, .9)) };
							if (p.img2imgStrength == null) next.img2imgStrength = .7;
							if (p.img2imgNoise == null) next.img2imgNoise = 0;
							if (seed != null) next.seed = seed;
							commit(next);
						},
						onBlob: async (blobId) => {
							const blob = await getImage(blobId);
							if (!blob) {
								useApp.getState().toast("这张图已经不在了");
								return;
							}
							const next = { img2imgBlobId: await saveBlob(blob) };
							if (p.img2imgStrength == null) next.img2imgStrength = .7;
							if (p.img2imgNoise == null) next.img2imgNoise = 0;
							commit(next);
						},
						onClear: () => commit({ img2imgBlobId: "" }),
						onStrength: (n) => commit({ img2imgStrength: n }),
						onNoise: (n) => commit({ img2imgNoise: n })
					})
				] }),
				!v3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 mt-4",
					"data-section": "chars",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[15px] font-medium",
								children: "角色提示词 (V4 / V5)"
							}), mode === "pure" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: `grid size-9 shrink-0 place-items-center ${charLocked ? "text-primary" : "text-muted"}`,
								onClick: () => useApp.getState().setSettings({ pureCharLocked: !charLocked }),
								"aria-label": "锁定角色",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-2 text-[11px] text-muted",
							children: "每个角色独立提示。AI 决定位置时忽略坐标。"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex rounded-full bg-dim p-1 text-[13px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: `flex-1 rounded-full py-2 ${!p.useCoords ? "bg-card" : ""}`,
								onClick: () => patch({ useCoords: false }),
								children: "AI 决定位置"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: `flex-1 rounded-full py-2 ${p.useCoords ? "bg-card" : ""}`,
								onClick: () => patch({ useCoords: true }),
								children: "自定义位置"
							})]
						}),
						p.characters.map((ch, i) => {
							const role = chat.characters.find((c) => c.id === ch.id) ?? chat.characters[i];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CharCard, {
								ch,
								index: i,
								name: mode === "pure" ? "" : (role?.name || ch.name || "").trim(),
								suggest: p.tagSuggest,
								useCoords: p.useCoords,
								onChange: (next) => patch({ characters: p.characters.map((x) => x.id === ch.id ? next : x) }),
								onPick: (a) => pickAppearance(ch.id, a),
								onApplyLook: mode === "chat" ? () => {
									const role = chat.characters.find((c) => c.id === ch.id) ?? chat.characters[i];
									if (!role) {
										useApp.getState().toast("没有对应人设");
										return;
									}
									useApp.getState().patchChat(chat.id, (c) => ({
										...c,
										characters: c.characters.map((x) => x.id === role.id ? {
											...x,
											appearance: ch.prompt
										} : x)
									}));
									useApp.getState().toast("已写入外貌备忘");
								} : void 0,
								onRemove: () => useApp.getState().setUI({ confirm: {
									title: "删除角色",
									body: `删除「${ch.name || `角色${i + 1}`}」的提示词栏？`,
									danger: true,
									onOk: () => patch({ characters: p.characters.filter((x) => x.id !== ch.id) })
								} })
							}, ch.id);
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "mt-1 flex items-center gap-1 px-2 py-2 text-[13px] text-primary",
							onClick: () => patch({ characters: [...p.characters, {
								id: uid$1("c_"),
								name: `角色${p.characters.length + 1}`,
								enabled: true,
								prompt: "",
								uc: "",
								x: .5,
								y: .5
							}] }),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " 添加角色"]
						})
					]
				}),
				randomOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RandomSettings, {
					onClose: () => setRandomOpen(false),
					onInsert: (piece) => patch({ promptMid: appendPrompt(p.promptMid, piece) })
				})
			]
		})]
	});
}
function CharCard({ ch, index, name, suggest, useCoords, onChange, onPick, onApplyLook, onRemove }) {
	const title = name ? `角色${index + 1}:${name}` : `角色${index + 1}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "mb-3 overflow-visible",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-w-0 flex-1 truncate text-[15px] font-semibold",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 items-center gap-1",
					children: [onRemove && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-8 place-items-center text-danger",
						onClick: onRemove,
						"aria-label": "删除角色",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						on: ch.enabled,
						onChange: (v) => onChange({
							...ch,
							enabled: v
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-end gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppearSelect, {
					className: "min-w-0 flex-1",
					onPick
				}), onApplyLook && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mb-0 h-9 shrink-0 rounded-full border border-line px-3 text-[13px] text-primary",
					onClick: onApplyLook,
					children: "应用"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-1 text-[12px] text-muted",
				children: "正面提示词"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptBox, {
				value: ch.prompt,
				suggest,
				minH: 88,
				onChange: (v) => onChange({
					...ch,
					prompt: v
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-1 mt-2 text-[12px] text-muted",
				children: "角色负面 UC"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptBox, {
				value: ch.uc,
				suggest,
				minH: 72,
				onChange: (v) => onChange({
					...ch,
					uc: v
				})
			}),
			useCoords && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabeledSlider, {
					label: "X",
					value: ch.x,
					min: 0,
					max: 1,
					step: .01,
					onChange: (n) => onChange({
						...ch,
						x: n
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabeledSlider, {
					label: "Y",
					value: ch.y,
					min: 0,
					max: 1,
					step: .01,
					onChange: (n) => onChange({
						...ch,
						y: n
					})
				})]
			})
		]
	});
}
function AppearSelect({ className, onPick }) {
	const ordered = useApp((s) => s.appearances).slice().sort((a, b) => a.order - b.order);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryDrawer, {
		className,
		label: "角色选择",
		items: ordered.map((a) => ({
			id: a.id,
			name: a.name
		})),
		onApply: (id) => {
			const a = useApp.getState().appearances.find((x) => x.id === id);
			if (a) onPick(a);
		},
		onDelete: (id) => useApp.getState().deleteAppearance(id),
		onReorder: (ids) => useApp.getState().reorderAppearances(ids),
		onEdit: (id) => useApp.getState().setUI({ editAppearId: id })
	});
}
function ImageAiPicker() {
	const source = useApp((s) => s.settings.chatSource);
	const llmModel = useApp((s) => s.settings.llmModel);
	const starred = useApp((s) => s.settings.llmStarred);
	const available = useApp((s) => s.settings.llmModels);
	const accounts = useApp((s) => s.settings.llmAccounts) ?? [];
	const connected = useApp((s) => s.settings.llmConnected);
	const imageModelId = useApp((s) => s.settings.imageModelId);
	const rows = imagePickerModels({
		chatSource: source,
		llmStarred: starred,
		llmModels: available,
		llmModel,
		llmConnected: connected,
		imageModelId
	});
	const ids = rows.filter((r) => !r.header).map((r) => r.id);
	const value = imageModelId && ids.includes(imageModelId) ? imageModelId : FOLLOW_IMAGE_AI;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "shrink-0 pt-1 text-right",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[11px] tracking-[0.16em] text-muted",
				children: "配图 AI"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 inline-flex rounded-full border border-line bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpandSelect, {
					value,
					options: rows.map((r) => ({
						id: r.id,
						label: r.header ?? llmModelLabel(r.id, accounts, available),
						short: r.header ?? llmModelLabel(r.id, accounts, available),
						header: Boolean(r.header),
						danger: r.danger
					})),
					onChange: (id) => {
						if (id.startsWith("__hdr_")) return;
						const s = useApp.getState().settings;
						useApp.getState().setSettings(applyImageAiPick(s, id));
					},
					align: "left",
					menu: "end"
				})
			}),
			imageModelId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 max-w-[11rem] text-[11px] leading-4 text-muted",
				children: ["对白用顶栏，提示词用 ", llmModelLabel(imageModelId, accounts, available)]
			}) : null
		]
	});
}
function chatSnippet(c) {
	const lastMsg = [...c.messages].reverse().find((m) => m.content);
	return (c.remark || (lastMsg && lastMsg.role !== "user" ? replyStoryText(lastMsg.content) || lastMsg.content : lastMsg?.content) || c.opening || "新的对话").replace(/\s+/g, " ");
}
function PreviewParamsDrawer({ currentId, onPeek, onApply }) {
	const open = useApp((s) => s.ui.previewParams);
	const { foldersSorted, root, inFolder } = listedChats(useApp((s) => s.folders), useApp((s) => s.chats));
	const [folderId, setFolderId] = (0, import_react.useState)(null);
	const [peekId, setPeekId] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!open) {
			setFolderId(null);
			setPeekId(null);
		}
	}, [open]);
	if (!open) return null;
	const folder = folderId ? foldersSorted.find((f) => f.id === folderId) : void 0;
	const list = folderId ? inFolder(folderId) : root;
	const marked = peekId ?? currentId;
	const peekChat = (c) => {
		setPeekId(c.id);
		onPeek(c.id);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute left-0 right-0 top-[calc(100%+6px)] z-30 overflow-hidden rounded-[18px] border border-line bg-card shadow-[0_16px_40px_rgb(44_40_36/0.16)]",
		children: [folder && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "flex h-10 w-full items-center gap-1 px-3 text-[13px] text-ink",
			onClick: () => setFolderId(null),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "truncate",
				children: folder.name || "文件夹"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overflow-y-auto scroll-thin overscroll-contain",
			style: { maxHeight: "21rem" },
			children: [
				!folderId && foldersSorted.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "flex h-14 w-full items-center gap-3 px-3 text-left",
					onClick: () => setFolderId(f.id),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-10 shrink-0 items-center justify-center rounded-full border border-line text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-w-0 items-center gap-1 text-[14px] font-medium",
								children: [f.starred && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 shrink-0 fill-primary text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "min-w-0 truncate",
									children: f.name || "文件夹"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[12px] text-muted",
								children: [inFolder(f.id).length, " 项"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 shrink-0 text-muted" })
					]
				}, f.id)),
				list.map((c) => {
					const current = c.id === currentId;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("flex h-14 items-center gap-2 px-3", marked === c.id && "bg-dim"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "flex min-w-0 flex-1 items-center gap-3 text-left",
							onClick: () => peekChat(c),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatAvatar, {
								chat: c,
								size: 40
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex min-w-0 items-center gap-1 text-[14px] font-medium",
									children: [c.starred && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 shrink-0 fill-primary text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-0 truncate",
										children: c.name || "未命名"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate text-[12px] text-muted",
									children: chatSnippet(c)
								})]
							})]
						}), current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 px-1 text-[12px] text-muted",
							children: "当前"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "shrink-0 px-1 text-[13px] text-primary",
							onClick: () => onApply(c.id),
							children: "应用"
						})]
					}, c.id);
				}),
				!folderId && foldersSorted.length === 0 && root.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-3 py-4 text-center text-[12px] text-muted",
					children: "还没有其他角色"
				}),
				folderId && list.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-3 py-4 text-center text-[12px] text-muted",
					children: "文件夹是空的"
				})
			]
		})]
	});
}
function LabeledSlider({ label, value, min, max, step, locked, onLock, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-1 flex items-center justify-between text-[13px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-1 text-muted",
				children: [step && step < 1 ? value.toFixed(step < .1 ? 2 : 1) : value, onLock && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: locked ? "text-primary" : "text-muted",
					onClick: () => onLock(!locked),
					"aria-label": "锁定",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3.5" })
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
			value,
			min,
			max,
			step,
			onChange,
			disabled: locked
		})]
	});
}
function RowSwitch({ label, hint, on, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3 flex items-center justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[13px] font-medium",
			children: label
		}), hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[11px] text-muted",
			children: hint
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
			on,
			onChange
		})]
	});
}
function PromptBox({ value, onChange, suggest, minH }) {
	const ref = (0, import_react.useRef)(null);
	const [hits, setHits] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		loadTags();
	}, []);
	const onPick = (tag) => {
		const el = ref.current;
		const next = insertTag(value, el?.selectionStart ?? value.length, tag);
		onChange(next.text);
		setHits([]);
		requestAnimationFrame(() => {
			el?.focus();
			el?.setSelectionRange(next.caret, next.caret);
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
			ref,
			value,
			style: { minHeight: minH },
			onChange: (e) => {
				onChange(e.target.value);
				if (!suggest) {
					setHits([]);
					return;
				}
				const caret = e.target.selectionStart ?? e.target.value.length;
				setHits(suggestTags(e.target.value, caret, 8).items);
			}
		}), hits.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-x-0 top-full z-20 mt-1 max-h-40 overflow-auto rounded-[14px] border border-line bg-card py-1 shadow-lg",
			children: hits.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "flex w-full items-center justify-between px-3 py-1.5 text-left text-[12px] hover:bg-dim",
				onMouseDown: (e) => e.preventDefault(),
				onClick: () => onPick(t.e),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.e }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted",
					children: t.c
				})]
			}, t.e))
		})]
	});
}
function Img2ImgBox({ blobId, strength, noise, onFile, onBlob, onClear, onStrength, onNoise }) {
	const [url, setUrl] = (0, import_react.useState)(null);
	const [over, setOver] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!blobId) {
			setUrl(null);
			return;
		}
		let dead = false;
		imageUrl(blobId).then((u) => {
			if (!dead) setUrl(u);
		});
		return () => {
			dead = true;
		};
	}, [blobId]);
	const take = (file) => {
		if (!file) return;
		if (!isImageFile(file)) {
			useApp.getState().toast("请选择图片");
			return;
		}
		onFile(file);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4",
		"data-section": "img2img",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-2 text-[13px] font-medium",
			children: "图生图"
		}), blobId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[16px] border border-line bg-dim",
				children: [url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomImg, {
					src: url,
					className: "max-h-64 w-full object-contain"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-36 w-full bg-dim" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute right-2 top-2 z-10 grid size-8 place-items-center rounded-full bg-card/90 text-ink",
					"aria-label": "删除底图",
					onClick: onClear,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-1 mt-3 text-[13px] font-medium",
				children: "图生图调整"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-1 flex items-center justify-between text-[13px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "强度" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular-nums text-muted",
					children: strength.toFixed(2)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
				value: strength,
				min: .01,
				max: .99,
				step: .01,
				onChange: onStrength
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-1 mt-3 flex items-center justify-between text-[13px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "噪声" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular-nums text-muted",
					children: noise.toFixed(2)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
				value: noise,
				min: 0,
				max: .99,
				step: .01,
				onChange: onNoise
			})
		] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePick, {
			onFile,
			onBlob,
			render: (open) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: `flex h-36 w-full flex-col items-center justify-center gap-2 rounded-[16px] border border-dashed text-[13px] text-muted ${over ? "border-primary bg-dim" : "border-line"}`,
				onClick: open,
				onDragOver: (e) => {
					e.preventDefault();
					setOver(true);
				},
				onDragLeave: () => setOver(false),
				onDrop: (e) => {
					e.preventDefault();
					setOver(false);
					take(e.dataTransfer.files?.[0]);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-5" }), "点击或将图像拖放到此处"]
			})
		})]
	});
}
var HOLD_MS$1 = 450;
var drawing = false;
var drawAbort = null;
var queue = null;
var phase = null;
var phaseListeners = /* @__PURE__ */ new Set();
function setDrawPhase(next) {
	phase = next;
	for (const fn of phaseListeners) fn(next);
}
function useDrawPhase() {
	const [value, setValue] = (0, import_react.useState)(phase);
	(0, import_react.useEffect)(() => {
		phaseListeners.add(setValue);
		setValue(phase);
		return () => {
			phaseListeners.delete(setValue);
		};
	}, []);
	return value;
}
function cancelPureDraw() {
	queue?.ac.abort();
	queue = null;
	drawAbort?.abort();
	drawing = false;
	setDrawPhase(null);
}
function PurePane() {
	const history = useApp((s) => s.history);
	const left = useCooldown(useApp((s) => s.settings).cooldownUntil);
	const [sheet, setSheet] = (0, import_react.useState)(null);
	const [viewId, setViewId] = (0, import_react.useState)(null);
	const [url, setUrl] = (0, import_react.useState)(null);
	const [saved, setSaved] = (0, import_react.useState)(false);
	const phase = useDrawPhase();
	const [flipLock, setFlipLock] = (0, import_react.useState)(false);
	const [peekId, setPeekId] = (0, import_react.useState)(null);
	const [multiOpen, setMultiOpen] = (0, import_react.useState)(false);
	const peek = useApp((s) => peekId ? s.favorites.find((f) => f.id === peekId) : void 0);
	const done = sortHistoryNewestFirst(history.filter((h) => h.status === "done" && h.blobId));
	const found = viewId ? done.findIndex((h) => h.id === viewId) : -1;
	const idx = found >= 0 ? found : 0;
	const item = done[idx];
	const shownBlob = peek?.blobId || item?.blobId;
	(0, import_react.useEffect)(() => {
		let gone = false;
		if (shownBlob) imageUrl(shownBlob).then((u) => {
			if (!gone) setUrl(u);
		});
		else setUrl(null);
		return () => {
			gone = true;
		};
	}, [shownBlob]);
	const go = (dir) => {
		if (peekId) {
			setPeekId(null);
			return;
		}
		const n = done.length;
		if (n < 2) return;
		const next = (idx + dir + n) % n;
		setViewId(done[next].id);
	};
	const closeSheet = () => {
		setSheet(null);
		setFlipLock(true);
	};
	const openSheet = (s) => setSheet(s);
	(0, import_react.useEffect)(() => {
		if (!flipLock) return;
		const stop = (e) => {
			e.stopPropagation();
			e.preventDefault();
		};
		window.addEventListener("click", stop, true);
		const t = window.setTimeout(() => {
			window.removeEventListener("click", stop, true);
			setFlipLock(false);
		}, 400);
		return () => {
			window.clearTimeout(t);
			window.removeEventListener("click", stop, true);
		};
	}, [flipLock]);
	const jump = (section) => {
		useApp.getState().setUI({ paramsJump: section });
		setSheet("params");
	};
	const showDrawn = (id) => {
		setPeekId(null);
		setViewId(id);
	};
	const tapDraw = () => {
		if (phase || drawing) {
			cancelPureDraw();
			return;
		}
		beginQueue(showDrawn);
	};
	const startFromDialog = () => {
		setMultiOpen(false);
		cancelPureDraw();
		beginQueue(showDrawn);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col bg-stage text-on-stage",
		style: {
			background: "#141210",
			color: "#f3eee6"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative min-h-0 flex-1",
				children: url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: url,
						alt: "",
						className: "h-full w-full object-contain"
					}), done.length > 1 && !flipLock && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "absolute inset-y-0 left-0 w-1/2",
						onClick: () => go(1),
						"aria-label": "上一张"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "absolute inset-y-0 right-0 w-1/2",
						onClick: () => go(-1),
						"aria-label": "下一张"
					})] })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-full place-items-center px-8 text-center text-[13px] text-stage-muted",
					children: "还没有图。先去参数里写提示词，再点绘图。"
				})
			}),
			item && !peek && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex w-full flex-wrap items-center gap-x-2 gap-y-0.5 px-4 py-2 text-[11px] text-stage-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => jump("model"),
						children: modelLabel(item.model)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => jump("size"),
						children: [
							item.width,
							"×",
							item.height
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => jump("steps"),
						children: [item.steps, "步"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => jump("sampler"),
						children: samplerLabel(item.sampler)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							useApp.getState().setPureParams({ seed: item.seed });
							jump("seed");
						},
						children: item.seed
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: left > 0 ? "text-danger" : "text-good",
						children: left > 0 ? `${left}s` : "可生图"
					})
				]
			}),
			peek && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex w-full flex-wrap items-center gap-x-2 gap-y-0.5 px-4 py-2 text-[11px] text-stage-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => jump("model"),
						children: modelLabel(peek.params.model)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => jump("size"),
						children: [
							peek.params.width,
							"×",
							peek.params.height
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => jump("steps"),
						children: [peek.params.steps, "步"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => jump("sampler"),
						children: samplerLabel(peek.params.sampler)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: peek.params.seed ?? "随机" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: left > 0 ? "text-danger" : "text-good",
						children: left > 0 ? `${left}s` : "可生图"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 px-4 pb-[calc(env(safe-area-inset-bottom)+14px)] pt-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
						className: "text-on-stage",
						onClick: () => openSheet("params"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
						className: "text-on-stage",
						onClick: () => openSheet("fav"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawPress, {
						className: "inline-flex h-12 min-w-0 flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 text-[15px] font-medium text-on-primary shadow-[0_6px_16px_color-mix(in_srgb,var(--color-primary)_25%,transparent)]",
						onTap: tapDraw,
						onHold: () => setMultiOpen(true),
						children: phase === "waiting" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), "等待中"] }) : phase ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), "取消"] }) : "绘图"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
						className: "text-on-stage",
						onClick: async () => {
							if (!shownBlob) return;
							const u = await imageUrl(shownBlob);
							if (!u) return;
							downloadBlob(await fetch(u).then((r) => r.blob()), String(peek?.params.seed ?? item?.seed ?? "image"));
							setSaved(true);
							setTimeout(() => setSaved(false), 1e3);
						},
						children: saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5 text-good" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
						className: "text-on-stage",
						onClick: () => openSheet("hist"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-5" })
					})
				]
			}),
			sheet === "params" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PureParamsSheet, {
				phase,
				left,
				onTap: tapDraw,
				onHold: () => setMultiOpen(true),
				onClose: closeSheet,
				onOpenFav: () => setSheet("fav")
			}),
			sheet === "fav" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FavSheet, {
				currentBlob: item?.blobId,
				previewId: peekId,
				onPreview: setPeekId,
				onClose: closeSheet,
				onOpenParams: () => setSheet("params")
			}),
			multiOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiDrawDialog, {
				onClose: () => setMultiOpen(false),
				onStart: startFromDialog
			}),
			sheet === "hist" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HistSheet, {
				items: done,
				activeId: item?.id,
				onClose: closeSheet,
				onPreview: (i) => {
					const row = done[i];
					if (row) setViewId(row.id);
					closeSheet();
				}
			})
		]
	});
}
function Sheet$1({ title, onClose, extra, header, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-20 flex flex-col justify-end bg-overlay/50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "flex-1",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex max-h-[80%] min-h-0 flex-col overflow-hidden rounded-t-[28px] bg-bg text-ink",
			children: [header ?? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center justify-between gap-2 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[16px] font-semibold",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [extra, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						"aria-label": "关闭",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-h-0 flex-1 overflow-y-auto px-4 pb-4",
				children
			})]
		})]
	});
}
function GripBars() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex flex-col items-center justify-center gap-[3.5px] text-current",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[2px] w-4 rounded-full bg-current" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[2px] w-4 rounded-full bg-current" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[2px] w-4 rounded-full bg-current" })
		]
	});
}
function byOrder(rows, pick, starredFirst) {
	return [...rows].sort((a, b) => {
		if (starredFirst && Boolean(a.starred) !== Boolean(b.starred)) return a.starred ? -1 : 1;
		return (pick(a.id) ?? a.order ?? 0) - (pick(b.id) ?? b.order ?? 0);
	});
}
function applyPureParams(next) {
	const s = useApp.getState();
	if (s.settings.pureCharLocked) next = {
		...next,
		characters: structuredClone(s.pureParams.characters),
		useCoords: s.pureParams.useCoords
	};
	s.setPureParams({
		...next,
		img2imgBlobId: next.img2imgBlobId || "",
		img2imgStrength: next.img2imgStrength ?? .7,
		img2imgNoise: next.img2imgNoise ?? 0
	});
}
function FavSheet({ currentBlob, previewId, onPreview, onClose, onOpenParams }) {
	const favorites = useApp((s) => s.favorites);
	const favGroups = useApp((s) => s.favGroups);
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const [editId, setEditId] = (0, import_react.useState)(null);
	const [sortMode, setSortMode] = (0, import_react.useState)(false);
	const [dragId, setDragId] = (0, import_react.useState)(null);
	const [holdId, setHoldId] = (0, import_react.useState)(null);
	const [draft, setDraft] = (0, import_react.useState)(null);
	const [menu, setMenu] = (0, import_react.useState)(null);
	const [move, setMove] = (0, import_react.useState)(null);
	const [naming, setNaming] = (0, import_react.useState)(null);
	const [askDelete, setAskDelete] = (0, import_react.useState)(null);
	const thumbs = useApp((s) => s.settings.favThumbs === true);
	const listRef = (0, import_react.useRef)(null);
	const pressTimer = (0, import_react.useRef)(0);
	const press = (0, import_react.useRef)(null);
	const sortRef = (0, import_react.useRef)(false);
	const draftRef = (0, import_react.useRef)(null);
	const dragRef = (0, import_react.useRef)(null);
	const lastY = (0, import_react.useRef)(0);
	const rafRef = (0, import_react.useRef)(0);
	const gOrder = (id) => draft?.groups[id];
	const fOrder = (id) => draft?.favs[id];
	const pinStars = !(sortMode && draft);
	const groupsOf = (parentId) => byOrder(favGroups.filter((g) => (g.parentId ?? null) === parentId), gOrder, pinStars);
	const favsOf = (groupId) => byOrder(favorites.filter((f) => (f.groupId ?? null) === groupId), fOrder, pinStars);
	const current = favorites.find((f) => f.id === openId);
	const editing = favorites.find((f) => f.id === editId);
	const saveDraft = () => {
		const d = draftRef.current;
		if (!sortRef.current || !d) return;
		sortRef.current = false;
		useApp.getState().setFavOrders(d.groups, d.favs);
		draftRef.current = null;
		setDraft(null);
		setSortMode(false);
		setDragId(null);
	};
	const close = () => {
		saveDraft();
		onClose();
	};
	(0, import_react.useEffect)(() => {
		sortRef.current = sortMode;
	}, [sortMode]);
	(0, import_react.useEffect)(() => {
		if (!sortMode) return;
		const applyY = (y) => {
			const d = dragRef.current;
			const cur = draftRef.current;
			if (!d || !cur) return;
			const nodes = listRef.current?.querySelectorAll(`[data-drag-lane="${d.lane}"]`);
			if (!nodes?.length) return;
			const ids = Array.from(nodes).map((el) => el.dataset.rowId).filter((id) => Boolean(id));
			const next = moveId(ids, d.id, indexFromY(nodes, y));
			if (next.join("\0") === ids.join("\0")) return;
			const laneGroups = d.lane.startsWith("g:");
			const map = { ...laneGroups ? cur.groups : cur.favs };
			next.forEach((id, i) => {
				map[id] = i;
			});
			const updated = laneGroups ? {
				...cur,
				groups: map
			} : {
				...cur,
				favs: map
			};
			draftRef.current = updated;
			setDraft(updated);
		};
		const tick = () => {
			rafRef.current = 0;
			if (!dragRef.current) return;
			const scroller = nearestScroller(listRef.current);
			const dy = scroller ? autoScrollNearEdge(scroller, lastY.current) : 0;
			applyY(lastY.current);
			if (dy) rafRef.current = requestAnimationFrame(tick);
		};
		const onMove = (e) => {
			if (!dragRef.current) return;
			e.preventDefault();
			lastY.current = e.clientY;
			const scroller = nearestScroller(listRef.current);
			const dy = scroller ? autoScrollNearEdge(scroller, e.clientY) : 0;
			applyY(e.clientY);
			if (dy && !rafRef.current) rafRef.current = requestAnimationFrame(tick);
		};
		const onUp = () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
			rafRef.current = 0;
			const scroller = nearestScroller(listRef.current);
			if (scroller) scroller.style.touchAction = "";
			dragRef.current = null;
			setDragId(null);
		};
		window.addEventListener("pointermove", onMove, { passive: false });
		window.addEventListener("pointerup", onUp);
		window.addEventListener("pointercancel", onUp);
		return () => {
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("pointerup", onUp);
			window.removeEventListener("pointercancel", onUp);
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, [sortMode]);
	(0, import_react.useEffect)(() => {
		return () => {
			window.clearTimeout(pressTimer.current);
			if (sortRef.current && draftRef.current) useApp.getState().setFavOrders(draftRef.current.groups, draftRef.current.favs);
		};
	}, []);
	const clearPress = () => {
		window.clearTimeout(pressTimer.current);
		press.current = null;
		setHoldId(null);
	};
	const enterSort = () => {
		if (favorites.length + favGroups.length < 2) return;
		const snap = {
			groups: {},
			favs: {}
		};
		const parents = /* @__PURE__ */ new Set([null]);
		for (const g of favGroups) parents.add(g.parentId ?? null);
		for (const f of favorites) parents.add(f.groupId ?? null);
		for (const p of parents) {
			groupsOf(p).forEach((g, i) => {
				snap.groups[g.id] = i;
			});
			favsOf(p).forEach((f, i) => {
				snap.favs[f.id] = i;
			});
		}
		draftRef.current = {
			groups: { ...snap.groups },
			favs: { ...snap.favs }
		};
		sortRef.current = true;
		setDraft(draftRef.current);
		setSortMode(true);
		setHoldId(null);
		setMenu(null);
		try {
			navigator.vibrate?.(12);
		} catch {}
	};
	const cancelSort = () => {
		sortRef.current = false;
		draftRef.current = null;
		dragRef.current = null;
		setDraft(null);
		setDragId(null);
		setSortMode(false);
	};
	const finishSort = () => {
		saveDraft();
	};
	const onRowPointerDown = (e) => {
		if (sortRef.current) return;
		if (e.target.closest("button")) return;
		if (e.pointerType === "mouse" && e.button !== 0) return;
		clearPress();
		if (favorites.length + favGroups.length < 2) return;
		const id = e.currentTarget.dataset.rowId || "";
		press.current = { y: e.clientY };
		setHoldId(id);
		pressTimer.current = window.setTimeout(enterSort, HOLD_MS$1);
	};
	const onRowPointerMove = (e) => {
		const p = press.current;
		if (!p || sortRef.current) return;
		if (Math.abs(e.clientY - p.y) > 12) clearPress();
	};
	const onGripDown = (e, id, lane) => {
		e.preventDefault();
		e.stopPropagation();
		dragRef.current = {
			id,
			lane
		};
		setDragId(id);
		lastY.current = e.clientY;
		const el = nearestScroller(listRef.current);
		if (el) el.style.touchAction = "none";
		try {
			e.currentTarget.setPointerCapture(e.pointerId);
		} catch {}
	};
	const openMenu = (el, kind, id) => {
		const r = el.getBoundingClientRect();
		const menuW = 132;
		const menuH = kind === "group" ? 168 : 126;
		let right = window.innerWidth - r.right;
		right = Math.max(8, Math.min(right, window.innerWidth - menuW - 8));
		let top = r.bottom + 4;
		if (top + menuH > window.innerHeight - 8) top = Math.max(8, r.top - menuH - 4);
		setMenu({
			kind,
			id,
			top,
			right
		});
	};
	const fillFav = (fav) => {
		const next = structuredClone(fav.params);
		next.seedLocked = false;
		applyPureParams(next);
		useApp.getState().toast("已填入");
	};
	const rowHandlers = {
		onPointerDown: onRowPointerDown,
		onPointerMove: onRowPointerMove,
		onPointerUp: clearPress,
		onPointerCancel: clearPress,
		onContextMenu: (e) => e.preventDefault()
	};
	const renderGroups = (parentId, depth) => groupsOf(parentId).map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-drag-lane": `g:${parentId ?? "root"}`,
		"data-row-id": g.id,
		className: `flex items-center gap-2 py-1.5 select-none ${dragId === g.id ? "bg-ink/10" : ""} ${!sortMode && holdId === g.id ? "bg-ink/5" : ""}`,
		style: {
			marginLeft: depth * 12,
			touchAction: sortMode ? "pan-y" : "manipulation"
		},
		...rowHandlers,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-1 items-center gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-5 shrink-0 items-center justify-center rounded-full border border-line text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, { className: "size-3" })
					}),
					g.starred && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 shrink-0 fill-primary text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-w-0 truncate text-[15px] font-bold",
						children: g.name
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "flex size-8 shrink-0 items-center justify-center text-muted",
				"aria-label": g.collapsed ? "展开" : "收起",
				onPointerDown: (e) => e.stopPropagation(),
				onClick: () => useApp.getState().toggleFavGroup(g.id),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 12 12",
					className: `size-3 shrink-0 fill-current transition ${g.collapsed ? "" : "rotate-180"}`,
					"aria-hidden": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 9.2 1.4 3.2h9.2L6 9.2z" })
				})
			}),
			sortMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "flex size-8 shrink-0 items-center justify-center text-ink/55",
				"aria-label": "拖动排序",
				style: { touchAction: "none" },
				onPointerDown: (e) => onGripDown(e, g.id, `g:${parentId ?? "root"}`),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripBars, {})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "flex size-8 shrink-0 items-center justify-center text-muted",
				"aria-label": "更多",
				onPointerDown: (e) => e.stopPropagation(),
				onClick: (e) => openMenu(e.currentTarget, "group", g.id),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })
			})
		]
	}), !g.collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [renderGroups(g.id, depth + 1), thumbs ? renderThumbs(favsOf(g.id), depth + 1) : favsOf(g.id).map((f) => renderFav(f, depth + 1))] })] }, g.id));
	const renderFav = (f, depth) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-drag-lane": `f:${f.groupId ?? "root"}`,
		"data-row-id": f.id,
		className: `mb-2 flex items-stretch gap-3 rounded-[18px] border border-line bg-card px-3 py-2 select-none ${dragId === f.id ? "bg-ink/15" : ""} ${!sortMode && holdId === f.id ? "bg-ink/8" : ""}`,
		style: {
			marginLeft: depth * 12,
			touchAction: sortMode ? "pan-y" : "manipulation"
		},
		...rowHandlers,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RatioThumb, {
				blobId: f.blobId,
				w: f.params.width,
				h: f.params.height
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-[72px] min-w-0 flex-1 flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex min-h-0 flex-1 items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-center gap-1",
						children: [f.starred && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 shrink-0 fill-primary text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate text-[14px] text-ink",
							children: f.name
						})]
					})
				}), !sortMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "rounded-full border border-line px-2.5 py-0.5 text-[12px] text-ink",
							onPointerDown: (e) => e.stopPropagation(),
							onClick: () => fillFav(f),
							children: "填入"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex-1" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "flex size-7 items-center justify-center text-muted",
							"aria-label": "查看",
							onPointerDown: (e) => e.stopPropagation(),
							onClick: () => setOpenId(f.id),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "flex size-7 items-center justify-center text-muted",
							"aria-label": "编辑",
							onPointerDown: (e) => e.stopPropagation(),
							onClick: () => setEditId(f.id),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "flex size-7 items-center justify-center text-muted",
							"aria-label": "更多",
							onPointerDown: (e) => e.stopPropagation(),
							onClick: (e) => openMenu(e.currentTarget, "fav", f.id),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })
						})
					]
				})]
			}),
			sortMode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "flex size-8 shrink-0 items-center justify-center text-ink/55",
				"aria-label": "拖动排序",
				style: { touchAction: "none" },
				onPointerDown: (e) => onGripDown(e, f.id, `f:${f.groupId ?? "root"}`),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripBars, {})
			})
		]
	}, f.id);
	const renderThumbs = (rows, depth) => rows.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-3 grid grid-cols-4 items-start gap-x-1.5 gap-y-2",
		style: { marginLeft: depth * 12 },
		children: rows.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FavThumb, {
			fav: f,
			active: previewId === f.id,
			onPick: () => onPreview(f.id),
			onHold: () => setOpenId(f.id),
			onApply: () => fillFav(f),
			onMenu: (el) => openMenu(el, "fav", f.id)
		}, f.id))
	}) : null;
	if (current) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FavDetail, {
		fav: current,
		currentBlob,
		onBack: () => setOpenId(null),
		onClose,
		onFill: () => void 0
	});
	const pill = "rounded-full border border-line bg-card px-3 py-1 text-[12px]";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet$1, {
			title: "收藏",
			onClose: close,
			header: sortMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center justify-between gap-3 px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-[15px] font-medium text-primary",
						onClick: cancelSort,
						children: "取消"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-[15px] font-medium text-primary",
						onClick: finishSort,
						children: "完成"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: close,
						"aria-label": "关闭",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center gap-1.5 px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "shrink-0 text-[16px] font-semibold",
						onClick: onOpenParams,
						children: "收藏"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: thumbs ? "shrink-0 rounded-full bg-danger px-2.5 py-1 text-[12px] text-white" : "shrink-0 rounded-full border border-line bg-card px-2.5 py-1 text-[12px]",
						onClick: () => useApp.getState().setSettings({ favThumbs: !thumbs }),
						children: "缩略图"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "min-w-0 flex-1" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: pill,
						onClick: () => setNaming({ name: "" }),
						children: "创建分组"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: pill,
						onClick: () => useApp.getState().addFavorite(currentBlob),
						children: "保存当前"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: close,
						"aria-label": "关闭",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})
				]
			}),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: listRef,
				children: [
					renderGroups(null, 0),
					thumbs ? renderThumbs(favsOf(null), 0) : favsOf(null).map((f) => renderFav(f, 0)),
					favorites.length === 0 && favGroups.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "py-10 text-center text-[13px] text-muted",
						children: "还没有收藏。点右上角保存当前参数。"
					})
				]
			})
		}),
		menu && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-40",
			onClick: () => setMenu(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute w-[132px] overflow-hidden rounded-[14px] border border-line bg-card text-left text-[14px] text-ink shadow-lg",
				style: {
					top: menu.top,
					right: menu.right
				},
				onClick: (e) => e.stopPropagation(),
				children: [
					menu.kind === "group" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "block w-full px-3 py-2.5 text-left",
						onClick: () => {
							const g = favGroups.find((x) => x.id === menu.id);
							setNaming({
								id: menu.id,
								name: g?.name ?? ""
							});
							setMenu(null);
						},
						children: "重命名"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: `block w-full px-3 py-2.5 text-left ${menu.kind === "group" ? "border-t border-line" : ""}`,
						onClick: () => {
							setMove({
								kind: menu.kind,
								id: menu.id
							});
							setMenu(null);
						},
						children: "移动"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "block w-full border-t border-line px-3 py-2.5 text-left",
						onClick: () => {
							if (menu.kind === "fav") useApp.getState().toggleFavoriteStar(menu.id);
							else useApp.getState().toggleFavGroupStar(menu.id);
							setMenu(null);
						},
						children: "星标"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "block w-full border-t border-line px-3 py-2.5 text-left text-danger",
						onClick: () => {
							if (menu.kind === "fav") useApp.getState().deleteFavorite(menu.id);
							else setAskDelete(menu.id);
							setMenu(null);
						},
						children: "删除"
					})
				]
			})
		}),
		move && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveSheet, {
			move,
			groups: favGroups,
			onClose: () => setMove(null),
			onPick: (parentId) => {
				if (move.kind === "fav") useApp.getState().moveFavorite(move.id, parentId);
				else useApp.getState().moveFavGroup(move.id, parentId);
				setMove(null);
			}
		}),
		naming && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NameDialog$1, {
			title: naming.id ? "重命名" : "创建分组",
			value: naming.name,
			onClose: () => setNaming(null),
			onOk: (name) => {
				if (naming.id) useApp.getState().renameFavGroup(naming.id, name);
				else useApp.getState().addFavGroup(name);
				setNaming(null);
			}
		}),
		askDelete && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDialog, {
			text: countFavsInGroup(favGroups, favorites, askDelete) > 0 ? `删除这个分组？里面的 ${countFavsInGroup(favGroups, favorites, askDelete)} 条收藏会一起删掉。` : "删除这个分组？",
			onClose: () => setAskDelete(null),
			onOk: () => {
				useApp.getState().deleteFavGroup(askDelete);
				setAskDelete(null);
			}
		}),
		editing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FavEdit, {
			fav: editing,
			onClose: () => setEditId(null)
		})
	] });
}
function MoveSheet({ move, groups, onClose, onPick }) {
	const blocked = move.kind === "group" ? /* @__PURE__ */ new Set([move.id, ...favGroupDescendants(groups, move.id)]) : /* @__PURE__ */ new Set();
	const rows = [];
	const walk = (parentId, depth) => {
		for (const g of [...groups].filter((x) => (x.parentId ?? null) === parentId).sort((a, b) => {
			if (Boolean(a.starred) !== Boolean(b.starred)) return a.starred ? -1 : 1;
			return a.order - b.order;
		})) {
			if (blocked.has(g.id)) continue;
			rows.push({
				g,
				depth
			});
			walk(g.id, depth + 1);
		}
	};
	walk(null, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-30 flex flex-col justify-end bg-overlay/50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "min-h-8 flex-1",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-[70%] min-h-0 flex-col overflow-hidden rounded-t-[28px] bg-bg text-ink",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center justify-between px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[16px] font-semibold",
					children: "移动"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					"aria-label": "关闭",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 overflow-y-auto px-4 pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mb-2 h-11 w-full rounded-full border border-line bg-card text-[14px]",
					onClick: () => onPick(null),
					children: "不放进分组"
				}), rows.map(({ g, depth }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mb-2 block h-11 rounded-full border border-line bg-card px-4 text-left text-[14px]",
					style: {
						marginLeft: depth * 16,
						width: `calc(100% - ${depth * 16}px)`
					},
					onClick: () => onPick(g.id),
					children: g.name
				}, g.id))]
			})]
		})]
	});
}
function NameDialog$1({ title, value, onClose, onOk }) {
	const [text, setText] = (0, import_react.useState)(value);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-30 flex items-center justify-center bg-overlay/50 px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full rounded-[20px] bg-bg p-4 text-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 text-[15px] font-semibold",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: text,
					autoFocus: true,
					placeholder: "分组名称",
					onChange: (e) => setText(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex justify-end gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-[14px] text-muted",
						onClick: onClose,
						children: "取消"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-[14px] font-medium text-primary",
						onClick: () => onOk(text),
						children: "确定"
					})]
				})
			]
		})
	});
}
function ConfirmDialog({ text, onClose, onOk }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-30 flex items-center justify-center bg-overlay/50 px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full rounded-[20px] bg-bg p-4 text-ink",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[14px] leading-relaxed",
				children: text
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex justify-end gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-[14px] text-muted",
					onClick: onClose,
					children: "取消"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-[14px] font-medium text-danger",
					onClick: onOk,
					children: "删除"
				})]
			})]
		})
	});
}
function FavEdit({ fav, onClose }) {
	const p = fav.params;
	const [name, setName] = (0, import_react.useState)(fav.name);
	const [front, setFront] = (0, import_react.useState)(p.promptFront);
	const [mid, setMid] = (0, import_react.useState)(p.promptMid);
	const [back, setBack] = (0, import_react.useState)(p.promptBack);
	const [negative, setNegative] = (0, import_react.useState)(p.negative);
	const [chars, setChars] = (0, import_react.useState)(p.characters.map((c) => ({
		id: c.id,
		prompt: c.prompt,
		uc: c.uc
	})));
	const save = () => {
		const params = structuredClone(p);
		params.promptFront = front;
		params.promptMid = mid;
		params.promptBack = back;
		params.negative = negative;
		params.characters = params.characters.map((c) => {
			const hit = chars.find((x) => x.id === c.id);
			return hit ? {
				...c,
				prompt: hit.prompt,
				uc: hit.uc
			} : c;
		});
		useApp.getState().patchFavorite(fav.id, {
			name: name.trim() || "未命名",
			params
		});
		useApp.getState().toast("已保存");
		onClose();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-30 flex flex-col justify-end bg-overlay/50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "min-h-8 flex-1",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-[78%] min-h-0 flex-col overflow-hidden rounded-t-[28px] bg-bg text-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "shrink-0 px-4 py-3 text-[16px] font-semibold",
					children: "编辑收藏"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-h-0 flex-1 overflow-y-auto px-4 pb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-1 text-[12px] text-muted",
							children: "标题"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							value: name,
							onChange: (e) => setName(e.target.value)
						}),
						p.merged ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-1 mt-3 text-[12px] text-muted",
							children: "正面提示词"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
							value: mid,
							onChange: (e) => setMid(e.target.value)
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-1 mt-3 text-[12px] text-muted",
								children: "正面提示词前"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
								value: front,
								onChange: (e) => setFront(e.target.value)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-1 mt-3 text-[12px] text-muted",
								children: "正面提示词中"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
								value: mid,
								onChange: (e) => setMid(e.target.value)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-1 mt-3 text-[12px] text-muted",
								children: "正面提示词后"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
								value: back,
								onChange: (e) => setBack(e.target.value)
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-1 mt-3 text-[12px] text-muted",
							children: "负面提示词"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
							value: negative,
							onChange: (e) => setNegative(e.target.value)
						}),
						chars.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1 mt-3 text-[12px] text-muted",
								children: [
									"角色",
									i + 1,
									" 正面"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
								value: c.prompt,
								onChange: (e) => setChars((rows) => rows.map((x) => x.id === c.id ? {
									...x,
									prompt: e.target.value
								} : x))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1 mt-3 text-[12px] text-muted",
								children: [
									"角色",
									i + 1,
									" 负面"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
								value: c.uc,
								onChange: (e) => setChars((rows) => rows.map((x) => x.id === c.id ? {
									...x,
									uc: e.target.value
								} : x))
							})
						] }, c.id))
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 items-center justify-end gap-3 border-t border-line px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "h-10 px-3 text-[14px]",
						onClick: onClose,
						children: "取消"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "h-10 rounded-full bg-ink px-4 text-[14px] font-medium text-bg",
						onClick: save,
						children: "保存修改"
					})]
				})
			]
		})]
	});
}
function FavDetail({ fav, currentBlob, onBack, onClose, onFill }) {
	const [name, setName] = (0, import_react.useState)(fav.name);
	(0, import_react.useEffect)(() => setName(fav.name), [fav.id, fav.name]);
	const p = fav.params;
	const chars = p.characters.filter((c) => c.prompt.trim());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-20 flex flex-col justify-end bg-overlay/50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "flex-1",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex max-h-[80%] min-h-0 flex-col overflow-hidden rounded-t-[28px] bg-bg text-ink",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center justify-between px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "inline-flex items-center gap-1 text-[14px]",
					onClick: onBack,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), " 返回"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 overflow-y-auto px-4 pb-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-1 text-[13px] text-muted",
						children: "名称"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						value: name,
						onChange: (e) => setName(e.target.value),
						onBlur: () => {
							const t = name.trim() || "未命名";
							setName(t);
							if (t !== fav.name) useApp.getState().patchFavorite(fav.id, { name: t });
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "h-11 flex-1 rounded-full bg-ink text-[14px] font-medium text-bg",
							onClick: () => {
								const next = structuredClone(fav.params);
								next.seedLocked = false;
								applyPureParams(next);
								useApp.getState().toast("已填入");
								onFill();
							},
							children: "填入"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "h-11 flex-1 rounded-full bg-danger text-[14px] font-medium text-white",
							onClick: () => {
								useApp.getState().deleteFavorite(fav.id);
								onBack();
							},
							children: "删除"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "正面提示词",
						text: promptPreview(p) || "（空）"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "负面提示词",
						text: p.negative || "（空）"
					}),
					chars.length > 0 && chars.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: c.name ? `角色提示词 · ${c.name}` : `角色提示词 ${i + 1}`,
						text: c.prompt
					}), c.uc?.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: c.name ? `角色负面 · ${c.name}` : `角色负面 ${i + 1}`,
						text: c.uc
					}) : null] }, c.id)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 text-[12px] leading-5 text-muted",
						children: [
							modelLabel(p.model),
							" · ",
							p.width,
							"×",
							p.height,
							" · ",
							p.steps,
							"步 · ",
							samplerLabel(p.sampler),
							" · 种子 ",
							p.seed ?? "随机",
							p.seedLocked ? "（已锁）" : "",
							" · CFG ",
							p.scale,
							" · 噪声",
							" ",
							NOISE_SCHEDULES.find((n) => n.id === p.noiseSchedule)?.label ?? p.noiseSchedule,
							" · rescale ",
							p.cfgRescale,
							p.varietyPlus ? " · Variety+" : "",
							p.decrisper ? " · Decrisper" : ""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "mt-4 mb-2 h-11 w-full rounded-full border border-line bg-card text-[14px] disabled:opacity-40",
						disabled: !currentBlob,
						onClick: () => {
							if (!currentBlob) return;
							useApp.getState().setFavoriteThumb(fav.id, currentBlob);
						},
						children: "应用当前图片为配图"
					})
				]
			})]
		})]
	});
}
function FavThumb({ fav, active, onPick, onHold, onApply, onMenu }) {
	const [u, setU] = (0, import_react.useState)(null);
	const hold = (0, import_react.useRef)(null);
	const held = (0, import_react.useRef)(false);
	const moved = (0, import_react.useRef)(false);
	const start = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	(0, import_react.useEffect)(() => {
		if (fav.blobId) imageUrl(fav.blobId).then(setU);
		else setU(null);
	}, [fav.blobId]);
	const clear = () => {
		if (hold.current) window.clearTimeout(hold.current);
		hold.current = null;
	};
	const w = fav.params.width > 0 ? fav.params.width : 832;
	const h = fav.params.height > 0 ? fav.params.height : 1216;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-w-0 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `overflow-hidden rounded-[8px] bg-dim ${active ? "ring-2 ring-red-500 ring-offset-1 ring-offset-bg" : ""}`,
			style: { aspectRatio: `${w} / ${h}` },
			onPointerDown: (e) => {
				held.current = false;
				moved.current = false;
				start.current = {
					x: e.clientX,
					y: e.clientY
				};
				clear();
				hold.current = window.setTimeout(() => {
					held.current = true;
				}, HOLD_MS$1);
			},
			onPointerMove: (e) => {
				if (Math.abs(e.clientX - start.current.x) > 10 || Math.abs(e.clientY - start.current.y) > 10) {
					moved.current = true;
					clear();
				}
			},
			onPointerUp: (e) => {
				const was = held.current;
				const skip = moved.current;
				clear();
				held.current = false;
				e.stopPropagation();
				if (skip) return;
				if (was) onHold();
				else onPick();
			},
			onPointerCancel: clear,
			onContextMenu: (e) => e.preventDefault(),
			children: u ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: u,
				alt: "",
				className: "size-full object-contain"
			}) : null
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-1 flex items-stretch gap-0.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "min-w-0 flex-1 whitespace-nowrap rounded-full border border-line py-0.5 text-[10px] leading-tight text-ink",
				onPointerDown: (e) => e.stopPropagation(),
				onClick: (e) => {
					e.stopPropagation();
					onApply();
				},
				children: "应用参数"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "flex w-5 shrink-0 items-center justify-center text-muted",
				"aria-label": "更多",
				onPointerDown: (e) => e.stopPropagation(),
				onClick: (e) => {
					e.stopPropagation();
					onMenu(e.currentTarget);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-3" })
			})]
		})]
	});
}
function Field({ label, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-1 text-[12px] text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "whitespace-pre-wrap rounded-[16px] bg-surface px-3.5 py-3 text-[13px] leading-relaxed",
			children: text
		})]
	});
}
function RatioThumb({ blobId, w, h }) {
	const [u, setU] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (blobId) imageUrl(blobId).then(setU);
		else setU(null);
	}, [blobId]);
	const ratio = w > 0 && h > 0 ? w / h : 832 / 1216;
	const height = 72;
	const width = Math.max(40, Math.min(72, Math.round(height * ratio)));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "shrink-0 overflow-hidden rounded-[8px] bg-dim",
		style: {
			width,
			height
		},
		children: u ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: u,
			alt: "",
			className: "size-full object-contain"
		}) : null
	});
}
function HistSheet({ items, activeId, onClose, onPreview }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet$1, {
		title: "历史",
		onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-3 gap-2",
			children: [items.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HistCell, {
				item: h,
				active: h.id === activeId,
				onPreview: () => onPreview(i)
			}, h.id)), items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "col-span-3 py-10 text-center text-[13px] text-muted",
				children: "还没有历史"
			})]
		})
	});
}
function HistCell({ item, active, onPreview }) {
	const [u, setU] = (0, import_react.useState)(null);
	const hold = (0, import_react.useRef)(null);
	const held = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (item.blobId) imageUrl(item.blobId).then(setU);
	}, [item.blobId]);
	const clear = () => {
		if (hold.current) window.clearTimeout(hold.current);
		hold.current = null;
	};
	const onDown = (e) => {
		held.current = false;
		clear();
		hold.current = window.setTimeout(() => {
			held.current = true;
		}, HOLD_MS$1);
		e.currentTarget.setPointerCapture(e.pointerId);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: active ? "relative overflow-hidden rounded-[8px] bg-dim ring-2 ring-red-500 ring-offset-1 ring-offset-bg" : "relative overflow-hidden rounded-[8px] bg-dim",
		onPointerDown: onDown,
		onPointerUp: (e) => {
			const was = held.current;
			clear();
			e.stopPropagation();
			if (was) useApp.getState().deleteHistory(item.id);
			else onPreview();
		},
		onPointerCancel: clear,
		onContextMenu: (e) => e.preventDefault(),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-square",
				children: u && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: u,
					alt: "",
					className: "size-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-1.5 pb-1.5 pt-6 text-[10px] leading-tight text-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: modelShort(item.model) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: samplerShort(item.sampler) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "absolute bottom-1 right-1 z-10 rounded-full bg-black/55 px-1.5 py-0.5 text-[10px] text-white",
				onClick: (e) => {
					e.stopPropagation();
					const p = item.params;
					if (p) {
						const next = structuredClone(p);
						next.seed = item.seed;
						next.seedLocked = false;
						applyPureParams(next);
					} else useApp.getState().setPureParams({
						model: item.model,
						width: item.width,
						height: item.height,
						steps: item.steps,
						sampler: item.sampler,
						seed: item.seed,
						seedLocked: false,
						negative: item.negative,
						promptMid: item.prompt,
						merged: true,
						img2imgBlobId: ""
					});
					useApp.getState().toast("已应用参数");
				},
				onPointerDown: (e) => e.stopPropagation(),
				onPointerUp: (e) => e.stopPropagation(),
				children: "应用参数"
			})
		]
	});
}
function PureParamsSheet({ onClose, onOpenFav, phase, left, onTap, onHold }) {
	const chat = fakePureChat(useApp((s) => s.pureParams), useApp((s) => s.settings.grokModelId));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-30 flex flex-col bg-overlay/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 flex min-h-0 flex-1 flex-col overflow-hidden rounded-t-[28px] bg-bg text-ink",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex h-12 shrink-0 items-center px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "font-serif text-[18px] leading-[26px]",
						onClick: onOpenFav,
						children: "参数设置"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawPress, {
						className: "absolute left-1/2 top-1/2 inline-flex h-[26px] min-w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1 whitespace-nowrap rounded-full bg-primary px-3 text-[15px] leading-none text-on-primary",
						onTap,
						onHold,
						children: phase === "waiting" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin" }), "等待中"] }) : phase ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin" }) : left > 0 ? `${left}s` : "绘图"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "ml-auto",
						onClick: onClose,
						"aria-label": "关闭",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 overflow-y-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParamsPane, {
					chat,
					mode: "pure"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadMeta, {})
				})]
			})]
		})
	});
}
function ReadMeta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePick, {
		onStored: (pick) => {
			const next = structuredClone(pick.params);
			if (pick.seed != null) next.seed = pick.seed;
			next.seedLocked = false;
			applyPureParams(next);
			useApp.getState().toast("已应用参数");
		},
		onFile: async (file) => {
			try {
				const meta = parseNaiPng(await file.arrayBuffer());
				if (!meta.prompt) {
					useApp.getState().toast("没读到 NovelAI 参数");
					return;
				}
				const p = useApp.getState().pureParams;
				const known = NAI_MODELS.some((m) => m.id === meta.model || m.wire === meta.model);
				const chars = meta.characters?.length ? meta.characters.map((c, i) => ({
					id: p.characters[i]?.id || `c${i}`,
					name: p.characters[i]?.name || `角色${i + 1}`,
					enabled: true,
					prompt: c.prompt,
					uc: c.uc,
					x: c.x,
					y: c.y
				})) : p.characters;
				useApp.getState().setPureParams({
					merged: true,
					promptMid: meta.prompt,
					promptFront: "",
					promptBack: "",
					negative: meta.uc || p.negative,
					width: meta.width || p.width,
					height: meta.height || p.height,
					steps: meta.steps || p.steps,
					scale: meta.scale || p.scale,
					seed: meta.seed ?? p.seed,
					sampler: meta.sampler || p.sampler,
					noiseSchedule: meta.noiseSchedule || p.noiseSchedule,
					model: known ? NAI_MODELS.find((m) => m.id === meta.model || m.wire === meta.model)?.id ?? p.model : p.model,
					characters: chars
				});
				useApp.getState().toast("已识别参数");
			} catch {
				useApp.getState().toast("识别失败，不是带参数的 NAI PNG");
			}
		},
		render: (open) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "mb-3 flex h-11 w-full items-center justify-center gap-2 rounded-full border border-line bg-card text-[13px]",
			onClick: open,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanSearch, { className: "size-4" }), "看图识参"]
		})
	});
}
async function drawOneImage(ac, showId) {
	const params = useApp.getState().pureParams;
	const settings = useApp.getState().settings;
	const auth = naiDrawAuth(settings);
	if (!auth) {
		useApp.getState().toast("还没连接生图");
		useApp.getState().setUI({ connection: true });
		return "fail";
	}
	if (ac.signal.aborted) return "cancel";
	const seed = params.seedLocked && params.seed != null ? params.seed : randomSeed();
	drawAbort = ac;
	setDrawPhase("uploading");
	await afterPaint();
	try {
		const result = await generateNai({
			chat: fakePureChat(params, settings.grokModelId),
			grokTail: "",
			seed,
			apiKey: auth.apiKey,
			baseUrl: auth.baseUrl,
			mode: auth.mode,
			signal: ac.signal,
			onStart: () => setDrawPhase("generating"),
			onReceiving: () => {
				if (auth.mode === "proxy") useApp.getState().setCooldown(Date.now() + COOLDOWN_MS);
				setDrawPhase("receiving");
			}
		});
		const rec = {
			id: uid$1("h_"),
			prompt: result.prompt,
			negative: params.negative,
			seed: result.seed,
			model: params.model,
			width: params.width,
			height: params.height,
			steps: params.steps,
			sampler: params.sampler,
			params: structuredClone(params),
			blobId: result.blobId,
			createdAt: Date.now(),
			status: "done"
		};
		useApp.getState().addHistory(rec);
		showId(rec.id);
		return "ok";
	} catch (e) {
		useApp.getState().toast(imageFailText(e, ac.signal));
		return ac.signal.aborted ? "cancel" : "fail";
	}
}
function beginQueue(showId) {
	const settings = useApp.getState().settings;
	const infinite = settings.multiDrawInfinite === true;
	const count = !infinite && settings.multiDrawExactOn === true ? Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, Math.floor(Number(settings.multiDrawExact) || 1))) : Math.min(10, Math.max(1, Math.round(settings.multiDrawCount || 1)));
	queue = {
		ac: new AbortController(),
		left: infinite ? Number.POSITIVE_INFINITY : count
	};
	drawing = true;
	setDrawPhase("uploading");
	runQueue(showId);
}
async function runQueue(showId) {
	const mine = queue;
	if (!mine) return;
	try {
		while (queue === mine && mine.left > 0 && !mine.ac.signal.aborted) {
			if (mine.left !== Number.POSITIVE_INFINITY) mine.left -= 1;
			const auth = naiDrawAuth(useApp.getState().settings);
			if (await drawOneImage(mine.ac, showId) !== "ok" || queue !== mine || mine.ac.signal.aborted) break;
			if (mine.left <= 0) break;
			if (auth?.mode === "proxy") {
				if (useApp.getState().settings.cooldownUntil - Date.now() > 3e3) {
					setDrawPhase("waiting");
					await waitCooldown(mine.ac.signal);
				}
			}
		}
	} finally {
		if (queue === mine) {
			queue = null;
			drawing = false;
			drawAbort = null;
			setDrawPhase(null);
		}
	}
}
function waitCooldown(signal) {
	return new Promise((resolve) => {
		const tick = () => {
			if (signal.aborted) {
				resolve();
				return;
			}
			if (useApp.getState().settings.cooldownUntil - Date.now() <= 3e3) {
				resolve();
				return;
			}
			window.setTimeout(tick, 200);
		};
		tick();
	});
}
function DrawPress({ className, onTap, onHold, children }) {
	const timer = (0, import_react.useRef)(null);
	const held = (0, import_react.useRef)(false);
	const clear = () => {
		if (timer.current) window.clearTimeout(timer.current);
		timer.current = null;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: `${className ?? ""} select-none`,
		style: {
			WebkitTouchCallout: "none",
			WebkitUserSelect: "none",
			userSelect: "none"
		},
		onContextMenu: (e) => e.preventDefault(),
		onPointerDown: (e) => {
			e.preventDefault();
			held.current = false;
			clear();
			timer.current = window.setTimeout(() => {
				held.current = true;
				onHold();
			}, HOLD_MS$1);
		},
		onPointerUp: () => {
			const was = held.current;
			clear();
			if (!was) onTap();
		},
		onPointerCancel: clear,
		onClick: (e) => e.preventDefault(),
		children
	});
}
function MultiDrawDialog({ onClose, onStart }) {
	const count = useApp((s) => s.settings.multiDrawCount ?? 1);
	const infinite = useApp((s) => s.settings.multiDrawInfinite === true);
	const exactOn = useApp((s) => s.settings.multiDrawExactOn === true);
	const exact = useApp((s) => s.settings.multiDrawExact ?? 1);
	const [draft, setDraft] = (0, import_react.useState)(String(exact));
	const locked = infinite || exactOn;
	(0, import_react.useEffect)(() => setDraft(String(exact)), [exact]);
	const commitExact = (raw) => {
		const digits = raw.replace(/\D/g, "").replace(/^0+/, "");
		setDraft(digits);
		if (!digits) return;
		const n = Math.floor(Number(digits));
		if (!Number.isFinite(n) || n < 1) return;
		useApp.getState().setSettings({ multiDrawExact: Math.min(n, Number.MAX_SAFE_INTEGER) });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[80] flex items-center justify-center px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-overlay/40",
			onClick: onClose,
			"aria-label": "关闭"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-sm rounded-[24px] bg-bg p-5 text-ink shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-5 flex items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[18px] font-semibold",
						children: "多图设置"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "ml-auto",
						onClick: onClose,
						"aria-label": "关闭",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: locked ? "pointer-events-none opacity-40" : "",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
						min: 1,
						max: 10,
						step: 1,
						value: count,
						disabled: locked,
						onChange: (n) => useApp.getState().setSettings({ multiDrawCount: n })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex justify-between text-[12px] text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "1" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: count }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "10" })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							inputMode: "numeric",
							"aria-label": "连续张数",
							value: draft,
							onChange: (e) => commitExact(e.target.value),
							onBlur: () => {
								if (!draft || Number(draft) < 1) setDraft(String(useApp.getState().settings.multiDrawExact ?? 1));
							},
							className: "h-10 min-w-0 flex-1 rounded-[10px] border border-line bg-card px-3 text-center text-[15px] outline-none"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `h-10 shrink-0 rounded-[10px] border px-4 text-[15px] ${exactOn ? "border-primary bg-primary text-on-primary" : "border-line bg-card text-ink"}`,
							onClick: () => {
								if (exactOn) {
									useApp.getState().setSettings({ multiDrawExactOn: false });
									return;
								}
								const n = Math.floor(Number(draft));
								if (!draft || !Number.isFinite(n) || n < 1) {
									useApp.getState().toast("先填张数");
									return;
								}
								useApp.getState().setSettings({
									multiDrawExactOn: true,
									multiDrawInfinite: false,
									multiDrawExact: Math.min(n, Number.MAX_SAFE_INTEGER)
								});
							},
							children: "确定"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `grid h-10 w-16 shrink-0 place-items-center rounded-[10px] border text-[20px] leading-none ${infinite ? "border-primary bg-primary text-on-primary" : "border-line bg-card text-ink"}`,
							onClick: () => useApp.getState().setSettings(infinite ? { multiDrawInfinite: false } : {
								multiDrawInfinite: true,
								multiDrawExactOn: false
							}),
							children: "∞"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-5 flex h-11 w-full items-center justify-center rounded-full bg-primary text-[15px] text-on-primary",
					onClick: onStart,
					children: "绘图"
				})
			]
		})]
	});
}
var HOLD_MS = 420;
var sidebarScroll = {
	home: 0,
	workshop: 0
};
function Sidebar() {
	const open = useApp((s) => s.ui.sidebar);
	const setUI = useApp((s) => s.setUI);
	const folders = useApp((s) => s.folders);
	const chats = useApp((s) => s.chats);
	const currentId = useApp((s) => s.currentId);
	const ui = useApp((s) => s.ui);
	const theme = useApp((s) => s.settings.theme);
	const { foldersSorted, root, inFolder } = listedChats(folders, chats, ui.workshop ? "workshop" : "home");
	const [draftOrder, setDraftOrder] = (0, import_react.useState)(null);
	const [draggingId, setDraggingId] = (0, import_react.useState)(null);
	const listRef = (0, import_react.useRef)(null);
	const dragRef = (0, import_react.useRef)(null);
	const draftRef = (0, import_react.useRef)(null);
	const lastY = (0, import_react.useRef)(0);
	const rafRef = (0, import_react.useRef)(0);
	draftRef.current = draftOrder;
	(0, import_react.useLayoutEffect)(() => {
		if (!open) return;
		const el = listRef.current;
		if (!el) return;
		const key = ui.workshop ? "workshop" : "home";
		const want = sidebarScroll[key];
		let remember = false;
		const place = () => {
			const room = el.scrollHeight - el.clientHeight;
			if (want > 0 && room + 1 < want) return false;
			el.scrollTop = want;
			return true;
		};
		remember = place();
		const onScroll = () => {
			if (!remember) return;
			sidebarScroll[key] = el.scrollTop;
		};
		el.addEventListener("scroll", onScroll, { passive: true });
		let frames = 0;
		let raf = 0;
		const tick = () => {
			frames += 1;
			if (place() || frames > 8) {
				remember = true;
				return;
			}
			raf = requestAnimationFrame(tick);
		};
		if (!remember) raf = requestAnimationFrame(tick);
		return () => {
			if (raf) cancelAnimationFrame(raf);
			el.removeEventListener("scroll", onScroll);
		};
	}, [open, ui.workshop]);
	const visualFolders = draftOrder ? [...foldersSorted].sort((a, b) => draftOrder.indexOf(a.id) - draftOrder.indexOf(b.id)) : foldersSorted;
	const visualRoot = draftOrder ? [...root].sort((a, b) => draftOrder.indexOf(a.id) - draftOrder.indexOf(b.id)) : root;
	const visualIn = (fid) => {
		const list = inFolder(fid);
		if (!draftOrder) return list;
		return [...list].sort((a, b) => draftOrder.indexOf(a.id) - draftOrder.indexOf(b.id));
	};
	const allOrderIds = () => [
		...foldersSorted.map((f) => f.id),
		...foldersSorted.flatMap((f) => inFolder(f.id).map((c) => c.id)),
		...root.map((c) => c.id)
	];
	(0, import_react.useEffect)(() => {
		if (!ui.sortMode) return;
		const applyY = (y) => {
			const d = dragRef.current;
			const draft = draftRef.current;
			if (!d || !draft) return;
			const rows = listRef.current?.querySelectorAll(`[data-drag-group="${d.group}"]`);
			if (!rows?.length) return;
			const groupIds = Array.from(rows).map((el) => el.dataset.rowId).filter((id) => Boolean(id));
			const from = groupIds.indexOf(d.id);
			const to = indexFromY(rows, y);
			if (from < 0 || from === to) return;
			const nextGroup = moveId(groupIds, d.id, to);
			const out = [...draft];
			const slots = groupIds.map((g) => out.indexOf(g));
			nextGroup.forEach((g, i) => {
				if (slots[i] >= 0) out[slots[i]] = g;
			});
			draftRef.current = out;
			setDraftOrder(out);
		};
		const tick = () => {
			rafRef.current = 0;
			if (!dragRef.current) return;
			const el = listRef.current;
			const dy = el ? autoScrollNearEdge(el, lastY.current) : 0;
			applyY(lastY.current);
			if (dy) rafRef.current = requestAnimationFrame(tick);
		};
		const onMove = (e) => {
			if (!dragRef.current) return;
			e.preventDefault();
			lastY.current = e.clientY;
			const el = listRef.current;
			const dy = el ? autoScrollNearEdge(el, e.clientY) : 0;
			applyY(e.clientY);
			if (dy && !rafRef.current) rafRef.current = requestAnimationFrame(tick);
		};
		const onUp = () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
			rafRef.current = 0;
			if (listRef.current) listRef.current.style.touchAction = "";
			if (!dragRef.current) return;
			dragRef.current = null;
			setDraggingId(null);
		};
		const onTouchMove = (e) => {
			if (!dragRef.current) return;
			e.preventDefault();
		};
		window.addEventListener("pointermove", onMove, { passive: false });
		window.addEventListener("pointerup", onUp);
		window.addEventListener("pointercancel", onUp);
		window.addEventListener("touchmove", onTouchMove, { passive: false });
		return () => {
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("pointerup", onUp);
			window.removeEventListener("pointercancel", onUp);
			window.removeEventListener("touchmove", onTouchMove);
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, [ui.sortMode]);
	const beginDrag = (e, id, group) => {
		e.preventDefault();
		e.stopPropagation();
		dragRef.current = {
			id,
			group
		};
		setDraggingId(id);
		lastY.current = e.clientY;
		if (listRef.current) listRef.current.style.touchAction = "none";
		try {
			e.currentTarget.setPointerCapture(e.pointerId);
		} catch {}
	};
	const beginSort = () => {
		setDraftOrder(allOrderIds());
		setUI({ sortMode: true });
	};
	const exitSidebar = () => {
		setDraftOrder(null);
		setUI({
			sidebar: false,
			selectMode: false,
			selected: [],
			sortMode: false,
			menuId: null
		});
	};
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-40 flex",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "relative flex h-full w-[86%] max-w-[360px] flex-col bg-bg shadow-[8px_0_32px_rgb(44_40_36/0.12)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "px-4 pb-2 pt-[calc(env(safe-area-inset-top)+14px)]",
					children: [ui.sortMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "text-[15px] font-medium text-primary",
							onClick: () => {
								setDraftOrder(null);
								setUI({ sortMode: false });
							},
							children: "取消"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "text-[15px] font-medium text-primary",
							onClick: () => {
								useApp.getState().reorder(draftOrder ?? allOrderIds());
								setDraftOrder(null);
								setUI({ sortMode: false });
							},
							children: "完成"
						})]
					}) : ui.selectMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "shrink-0 text-[15px] font-medium text-primary",
								onClick: () => {
									const ids = [
										...foldersSorted.map((f) => f.id),
										...foldersSorted.flatMap((f) => inFolder(f.id).map((c) => c.id)),
										...root.map((c) => c.id)
									];
									setUI({ selected: ids });
								},
								children: "全选"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1 px-2 text-center text-[14px] text-muted",
								children: [
									"已选择 ",
									ui.selected.length,
									" 项"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "shrink-0 px-2 text-[15px] font-medium text-primary",
								onClick: () => setUI({
									selectMode: false,
									selected: [],
									sortMode: false
								}),
								children: "取消"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
								className: "-mr-2",
								onClick: exitSidebar,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mt-2 text-left text-[13px] text-muted",
						onClick: beginSort,
						children: "手动排序"
					})] }) : ui.workshop ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "flex shrink-0 items-center text-[15px]",
								onClick: () => setUI({
									workshop: false,
									selectMode: false,
									selected: [],
									sortMode: false,
									menuId: null
								}),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" }), "返回"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "min-w-0 flex-1 text-center font-serif text-[20px] tracking-wide",
								children: "绘语工坊"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
								"aria-label": "创建文件夹",
								onClick: () => useApp.getState().addFolder("workshop"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderPlus, { className: "size-5" })
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-serif text-[22px] tracking-wide",
							children: "绘语"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-0.5 text-[12px] text-muted",
							children: "角色与故事"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
								className: "text-muted",
								onClick: () => useApp.getState().setSettings({ theme: theme === "dark" ? "light" : "dark" }),
								"aria-label": "切换主题",
								children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
								onClick: exitSidebar,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
							})]
						})]
					}), ui.sortMode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[12px] leading-relaxed text-muted",
						children: "文件夹在上、聊天在下。不按横杠时可滑动，拖到边缘会跟着滚。"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: listRef,
					className: cn("flex-1 overflow-y-auto px-4 scroll-thin hold-none", ui.selectMode && !ui.sortMode ? "pb-36" : "pb-6"),
					children: [
						!ui.sortMode && (ui.workshop ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "mb-2 text-[13px] text-primary",
								onClick: () => setUI({ workshopAvatars: true }),
								children: "设置头像"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "mb-2 flex h-12 w-full items-center justify-center rounded-full bg-primary text-[15px] font-medium text-on-primary",
								disabled: ui.selectMode,
								onClick: () => setUI({ workshopName: "card" }),
								children: "✍️新建写卡助手"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "mb-4 flex h-12 w-full items-center justify-center rounded-full border border-line bg-card text-[14px]",
								disabled: ui.selectMode,
								onClick: () => setUI({ workshopName: "assistant" }),
								children: "✨新建绘语助理"
							})
						] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "mb-2 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-[15px] font-medium text-on-primary disabled:opacity-40",
							disabled: ui.selectMode,
							onClick: () => useApp.getState().newDraft(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " 新建聊天"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "mb-4 flex h-12 w-full items-center justify-center gap-2 rounded-full border border-line bg-card text-[14px] disabled:opacity-40",
							disabled: ui.selectMode,
							onClick: () => useApp.getState().addFolder(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderPlus, { className: "size-4" }), " 创建文件夹"]
						})] })),
						!ui.workshop && !ui.sortMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "mb-3 flex w-full items-center gap-3 rounded-[18px] border-2 border-primary px-3 py-3 text-left",
							onClick: () => setUI({
								workshop: true,
								menuId: null,
								selectMode: false,
								selected: [],
								sortMode: false
							}),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "min-w-0 flex-1 text-[16px] font-semibold",
									children: "绘语工坊"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-primary text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 text-muted" })
							]
						}),
						visualFolders.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderRow, {
							id: f.id,
							name: f.name,
							starred: f.starred,
							collapsed: f.collapsed,
							count: inFolder(f.id).length,
							dragging: draggingId === f.id,
							dragGroup: "folders",
							onGripDown: (e) => beginDrag(e, f.id, "folders"),
							children: !f.collapsed && visualIn(f.id).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatRow, {
								id: c.id,
								nested: true,
								active: c.id === currentId,
								dragging: draggingId === c.id,
								dragGroup: `folder:${f.id}`,
								onGripDown: (e) => beginDrag(e, c.id, `folder:${f.id}`)
							}, c.id))
						}, f.id)),
						visualRoot.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatRow, {
							id: c.id,
							active: c.id === currentId,
							dragging: draggingId === c.id,
							dragGroup: "root",
							onGripDown: (e) => beginDrag(e, c.id, "root")
						}, c.id))
					]
				}),
				ui.selectMode && !ui.sortMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 bottom-0 border-t border-line bg-bg px-1 pt-2 pb-[calc(env(safe-area-inset-bottom)+10px)]",
					children: [ui.selected.filter((id) => chats.some((c) => c.id === id && !c.isDraft)).length >= 2 && !ui.workshop && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mx-3 mb-2 w-[calc(100%-1.5rem)] rounded-full border border-line bg-card py-2.5 text-[13px] font-medium",
						onClick: () => setUI({ multiCreate: ui.selected.filter((id) => chats.some((c) => c.id === id && !c.isDraft)) }),
						children: "创建多人聊天"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-around",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelAct, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderInput, { className: "size-5" }),
								label: "移动",
								onClick: () => setUI({ moveOpen: true })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelAct, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-5" }),
								label: "复制",
								onClick: () => useApp.getState().copySelected()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelAct, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-5" }),
								label: "删除",
								danger: true,
								onClick: () => setUI({ confirm: {
									title: "删除所选",
									body: "聊天记录会一起删掉。",
									danger: true,
									onOk: () => useApp.getState().deleteSelected()
								} })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelAct, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-5" }),
								label: "星标",
								onClick: () => useApp.getState().starSelected()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelAct, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-5" }),
								label: "重命名",
								disabled: ui.selected.length !== 1,
								onClick: () => {
									const id = ui.selected[0];
									const chat = chats.find((c) => c.id === id);
									const folder = folders.find((f) => f.id === id);
									setUI({ rename: {
										id,
										kind: folder ? "folder" : "chat",
										value: chat?.name || folder?.name || ""
									} });
								}
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "flex-1 bg-overlay/40",
			onClick: exitSidebar
		})]
	});
}
function SelAct({ icon, label, onClick, danger, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		disabled,
		onClick,
		className: cn("flex min-w-0 flex-1 flex-col items-center gap-1 px-1 py-1 text-[11px] font-medium disabled:opacity-30", danger ? "text-danger" : "text-ink"),
		children: [icon, label]
	});
}
function useHold(id) {
	const timer = (0, import_react.useRef)(null);
	const startY = (0, import_react.useRef)(0);
	const held = (0, import_react.useRef)(false);
	const start = (e) => {
		if (e.pointerType === "mouse" && e.button !== 0) return;
		startY.current = e.clientY;
		held.current = false;
		timer.current = window.setTimeout(() => {
			const ui = useApp.getState().ui;
			if (ui.sortMode || ui.selectMode) return;
			held.current = true;
			useApp.getState().setUI({
				selectMode: true,
				selected: [id],
				menuId: null
			});
		}, HOLD_MS);
	};
	const clear = () => {
		if (timer.current) window.clearTimeout(timer.current);
		timer.current = null;
	};
	return {
		held,
		onPointerDown: start,
		onPointerUp: clear,
		onPointerCancel: clear,
		onPointerMove: (e) => {
			if (Math.abs(e.clientY - startY.current) > 12) clear();
		},
		onContextMenu: (e) => e.preventDefault()
	};
}
function FolderRow({ id, name, starred, collapsed, count, children, dragging, dragGroup, onGripDown }) {
	const selected = useApp((s) => s.ui.selected.includes(id));
	const selectMode = useApp((s) => s.ui.selectMode);
	const sortMode = useApp((s) => s.ui.sortMode);
	const { held, ...holdH } = useHold(id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-row-id": id,
			"data-drag-group": dragGroup,
			...sortMode ? {} : holdH,
			onClick: () => {
				if (held.current) {
					held.current = false;
					return;
				}
				if (sortMode) return;
				if (useApp.getState().ui.selectMode) {
					const cur = useApp.getState().ui.selected;
					useApp.getState().setUI({ selected: selected ? cur.filter((x) => x !== id) : [...cur, id] });
					return;
				}
				useApp.getState().toggleFolder(id);
			},
			className: cn("flex items-center gap-3 rounded-[18px] px-2 py-2.5 hold-none", selected && "bg-dim", dragging && "drag-dim"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-10 items-center justify-center rounded-full border border-line text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-center gap-1 text-[15px] font-medium",
						children: [starred && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 shrink-0 fill-primary text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 truncate",
							children: name
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[12px] text-muted",
						children: [count, " 项"]
					})]
				}),
				selectMode && !sortMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-9 shrink-0 place-items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckBox, { on: selected })
				}) : sortMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-9 place-items-center text-muted",
					onPointerDown: onGripDown,
					style: { touchAction: "none" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignJustify, { className: "size-5" })
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted",
					children: "›"
				})
			]
		}), children]
	});
}
function ChatRow({ id, active, nested, dragging, dragGroup, onGripDown }) {
	const chat = useApp((s) => s.chats.find((c) => c.id === id));
	const ui = useApp((s) => s.ui);
	const { held, ...holdH } = useHold(id);
	if (!chat) return null;
	const selected = ui.selected.includes(id);
	const lastMsg = [...chat.messages].reverse().find((m) => m.content);
	const last = chat.remark || (lastMsg && lastMsg.role !== "user" ? replyStoryText(lastMsg.content) || lastMsg.content : lastMsg?.content) || chat.opening;
	const menu = ui.menuId === id;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative mb-0.5", nested && "ml-3"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-row-id": id,
			"data-drag-group": dragGroup,
			...ui.sortMode ? {} : holdH,
			onClick: () => {
				if (held.current) {
					held.current = false;
					return;
				}
				if (ui.sortMode) return;
				if (useApp.getState().ui.selectMode) {
					const cur = useApp.getState().ui.selected;
					useApp.getState().setUI({ selected: selected ? cur.filter((x) => x !== id) : [...cur, id] });
					return;
				}
				useApp.getState().openChat(id);
			},
			className: cn("flex items-center gap-3 rounded-[18px] px-2 py-2 hold-none", active && !ui.selectMode && "bg-dim/70", selected && "bg-dim", dragging && "drag-dim"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatAvatar, {
					chat,
					dim: active && !ui.selectMode
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-center gap-1 text-[15px] font-medium",
						children: [chat.starred && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 shrink-0 fill-primary text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 truncate",
							children: workshopTitle(chat)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "truncate text-[12px] text-muted",
						children: last || "新的对话"
					})]
				}),
				ui.selectMode && !ui.sortMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-9 shrink-0 place-items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckBox, { on: selected })
				}) : ui.sortMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-9 place-items-center text-muted",
					onPointerDown: onGripDown,
					style: { touchAction: "none" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignJustify, { className: "size-5" })
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "grid size-9 place-items-center text-muted",
					onClick: (e) => {
						e.stopPropagation();
						useApp.getState().setUI({ menuId: menu ? null : id });
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-5" })
				})
			]
		}), menu && !ui.selectMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute right-2 top-12 z-20 w-44 overflow-hidden rounded-2xl border border-line bg-card py-1 shadow-lg",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "block w-full px-4 py-2.5 text-left text-[14px]",
					onClick: () => {
						useApp.getState().setUI({
							menuId: null,
							rename: {
								id,
								kind: "remark",
								value: chat.remark || ""
							}
						});
					},
					children: "修改备注"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "block w-full px-4 py-2.5 text-left text-[14px]",
					onClick: () => {
						useApp.getState().setUI({ menuId: null });
						if (isWorkshopChat(chat)) useApp.getState().setUI({ workshopEditId: id });
						else {
							useApp.getState().setUI({ sidebar: false });
							useApp.getState().beginEdit(id);
						}
					},
					children: "修改设定"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "block w-full px-4 py-2.5 text-left text-[14px] text-danger",
					onClick: () => {
						useApp.getState().setUI({
							menuId: null,
							confirm: {
								title: isWorkshopChat(chat) ? "删除" : "删除角色",
								body: `删除「${workshopTitle(chat)}」以及全部聊天记录？`,
								danger: true,
								onOk: () => {
									useApp.getState().setUI({ selected: [id] });
									useApp.getState().deleteSelected();
								}
							}
						});
					},
					children: isWorkshopChat(chat) ? "删除" : "删除角色"
				})
			]
		})]
	});
}
function CheckBox({ on }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("grid size-[22px] shrink-0 place-items-center rounded-full border", on ? "border-primary bg-primary text-on-primary" : "border-line-strong bg-card"),
		children: on && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
			className: "size-3.5",
			strokeWidth: 3
		})
	});
}
function RenameModal() {
	const rename = useApp((s) => s.ui.rename);
	const setUI = useApp((s) => s.setUI);
	const [val, setVal] = (0, import_react.useState)(rename?.value ?? "");
	(0, import_react.useEffect)(() => setVal(rename?.value ?? ""), [rename?.id, rename?.value]);
	if (!rename) return null;
	const title = rename.kind === "folder" ? "重命名文件夹" : rename.kind === "remark" ? "修改备注" : "修改名称";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[75] flex items-center justify-center bg-overlay p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm rounded-[24px] bg-bg p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 text-[16px] font-semibold",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					autoFocus: true,
					value: val,
					onChange: (e) => setVal(e.target.value),
					className: "h-12 w-full rounded-full border border-line bg-card px-4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "flex-1 py-3 text-muted",
						onClick: () => setUI({ rename: null }),
						children: "取消"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "flex-1 rounded-full bg-primary py-3 text-on-primary",
						onClick: () => {
							if (rename.kind === "remark") {
								useApp.getState().patchChat(rename.id, { remark: val });
								useApp.getState().toast("备注已更新");
								setUI({ rename: null });
							} else useApp.getState().renameItem(rename.id, val);
						},
						children: "保存"
					})]
				})
			]
		})
	});
}
function WorkshopHost() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NameDialog, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditDialog, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarDialog, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveCardDialog, {})
	] });
}
function Sheet({ title, onClose, children, footer }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-[70] flex justify-center px-4 py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-overlay/40",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 flex min-h-0 w-full max-w-md flex-col overflow-hidden rounded-[28px] bg-bg shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 items-center gap-2 px-5 pb-3 pt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[20px] font-semibold",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "ml-auto",
						onClick: onClose,
						"aria-label": "关闭",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-4 scroll-hide",
					children
				}),
				footer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "shrink-0 space-y-2 px-5 pb-5",
					children: footer
				})
			]
		})]
	});
}
function NameDialog() {
	const kind = useApp((s) => s.ui.workshopName);
	const chats = useApp((s) => s.chats);
	const [val, setVal] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => setVal(""), [kind]);
	if (!kind) return null;
	const title = kind === "card" ? "请输入写卡助手名" : "请输入绘语助理名";
	const close = () => useApp.getState().setUI({ workshopName: null });
	const make = (name) => {
		useApp.getState().createWorkshop(kind, name);
		close();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[75] flex items-center justify-center bg-overlay p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm rounded-[24px] bg-bg p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[16px] font-semibold",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "ml-auto",
						onClick: close,
						"aria-label": "关闭",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					autoFocus: true,
					value: val,
					onChange: (e) => setVal(e.target.value),
					className: "h-12 w-full rounded-full border border-line bg-card px-4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "flex-1 py-3 text-muted",
						onClick: () => make(nextWorkshopName(chats, kind)),
						children: "跳过"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "flex-1 rounded-full bg-primary py-3 text-on-primary",
						onClick: () => make(val.trim() || nextWorkshopName(chats, kind)),
						children: "确定"
					})]
				})
			]
		})
	});
}
function EditDialog() {
	const id = useApp((s) => s.ui.workshopEditId);
	const chat = useApp((s) => s.chats.find((c) => c.id === id));
	const [name, setName] = (0, import_react.useState)("");
	const [brief, setBrief] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!chat) return;
		setName(chat.name);
		setBrief(chat.brief || "");
	}, [id]);
	if (!id || !chat) return null;
	const close = () => useApp.getState().setUI({ workshopEditId: null });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		title: "修改设定",
		onClose: close,
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "h-12 w-full rounded-full bg-primary text-[15px] font-medium text-on-primary",
			onClick: () => {
				const next = name.trim() || chat.name;
				useApp.getState().patchChat(chat.id, {
					name: next,
					brief,
					characters: chat.characters.map((c, i) => i === 0 ? {
						...c,
						name: next
					} : c)
				});
				useApp.getState().toast("已保存");
				close();
			},
			children: "确认保存"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "h-10 w-full text-[14px] text-muted",
			onClick: close,
			children: "取消"
		})] }),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "名称" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				value: name,
				onChange: (e) => setName(e.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "要求" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					className: "min-h-[160px]",
					value: brief,
					onChange: (e) => setBrief(e.target.value)
				})]
			})
		]
	});
}
function AvatarDialog() {
	const open = useApp((s) => s.ui.workshopAvatars);
	const card = useApp((s) => s.settings.workshopCardAvatar);
	const assist = useApp((s) => s.settings.workshopAssistAvatar);
	if (!open) return null;
	const close = () => useApp.getState().setUI({ workshopAvatars: false });
	const set = (key, id) => {
		useApp.getState().setSettings({ [key]: id || void 0 });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		title: "设置头像",
		onClose: close,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-[12px] text-muted",
				children: "只作用于以后新建的。已经建好的不改。"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomAvatar, {
				blobId: card,
				label: "写卡助手",
				onId: (id) => set("workshopCardAvatar", id),
				onClear: () => set("workshopCardAvatar", "")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomAvatar, {
					blobId: assist,
					label: "绘语助理",
					onId: (id) => set("workshopAssistAvatar", id),
					onClear: () => set("workshopAssistAvatar", "")
				})
			})
		]
	});
}
function SaveCardDialog() {
	const text = useApp((s) => s.ui.workshopCardText);
	const [draft, setDraft] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!text) {
			setDraft(null);
			return;
		}
		const parsed = parseRoleText(text);
		const characters = (parsed.people.length ? parsed.people : [{}]).map((p, i) => ({
			...emptyCharacter(i + 1),
			id: uid$1("c_"),
			name: p.name || "",
			persona: p.persona || "",
			speech: p.speech || "",
			appearance: p.appearance || ""
		}));
		setDraft({
			id: uid$1("card_"),
			name: characters.map((c) => c.name).filter(Boolean).join("、") || "未命名",
			isMulti: characters.length > 1,
			overview: parsed.overview || "",
			opening: parsed.opening || "",
			extras: [],
			statusBarOn: false,
			statusBar: "",
			characters,
			grokModelId: useApp.getState().settings.grokModelId,
			createdAt: Date.now(),
			order: Date.now()
		});
	}, [text]);
	if (!text || !draft) return null;
	const close = () => useApp.getState().setUI({ workshopCardText: null });
	const patchChar = (id, p) => {
		setDraft((d) => d ? {
			...d,
			characters: d.characters.map((c) => c.id === id ? {
				...c,
				...p
			} : c)
		} : d);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		title: "保存为角色卡",
		onClose: close,
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "h-12 w-full rounded-full bg-primary text-[15px] font-medium text-on-primary",
			onClick: () => useApp.getState().addCard({
				...draft,
				name: draft.name.trim() || "未命名",
				isMulti: draft.characters.length > 1
			}),
			children: "保存"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "h-10 w-full text-[14px] text-muted",
			onClick: close,
			children: "取消"
		})] }),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
				hint: "列表里显示的名字。",
				children: "卡名"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				value: draft.name,
				onChange: (e) => setDraft({
					...draft,
					name: e.target.value
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "要求总览" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					className: "min-h-[96px]",
					value: draft.overview,
					onChange: (e) => setDraft({
						...draft,
						overview: e.target.value
					})
				})]
			}),
			draft.characters.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-[18px] border border-line p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-2 text-[13px] font-medium",
						children: draft.characters.length > 1 ? `角色${i + 1}` : "角色"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "名字" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						value: c.name,
						onChange: (e) => patchChar(c.id, { name: e.target.value })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "人设" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
							className: "min-h-[96px]",
							value: c.persona,
							onChange: (e) => patchChar(c.id, { persona: e.target.value })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "说话方式" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
							className: "min-h-[80px]",
							value: c.speech,
							onChange: (e) => patchChar(c.id, { speech: e.target.value })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "外貌备忘" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
							className: "min-h-[72px]",
							value: c.appearance,
							onChange: (e) => patchChar(c.id, { appearance: e.target.value })
						})]
					})
				]
			}, c.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "开场场景" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					className: "min-h-[96px]",
					value: draft.opening,
					onChange: (e) => setDraft({
						...draft,
						opening: e.target.value
					})
				})]
			})
		]
	});
}
function App() {
	const hydrate = useApp((s) => s.hydrate);
	(0, import_react.useEffect)(() => {
		hydrate();
		loadTags();
	}, [hydrate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {});
}
function Shell() {
	const tab = useApp((s) => s.ui.tab);
	const creating = useApp((s) => s.ui.creating);
	const editing = useApp((s) => s.ui.editingChatId);
	const currentId = useApp((s) => s.currentId);
	const chat = useApp((s) => s.chats.find((c) => c.id === currentId));
	const editChat = useApp((s) => s.chats.find((c) => c.id === editing));
	const draft = useApp((s) => s.chats.find((c) => c.isDraft && c.id === currentId));
	const theme = useApp((s) => s.settings.theme);
	const look = readLook(useApp((s) => s.settings.look));
	(0, import_react.useEffect)(() => {
		const root = document.documentElement;
		root.classList.toggle("dark", theme === "dark");
		const custom = theme !== "dark" && look.paper !== "#f3eee6";
		if (custom) root.style.setProperty("--color-bg", look.paper);
		else root.style.removeProperty("--color-bg");
		if (look.accent !== "#9c5348") {
			const tone = accentTone(look.accent);
			root.style.setProperty("--color-primary", tone.solid);
			root.style.setProperty("--color-primary-hover", tone.hover);
			root.style.setProperty("--color-primary-soft", theme === "dark" ? tone.softDark : tone.soft);
		} else {
			root.style.removeProperty("--color-primary");
			root.style.removeProperty("--color-primary-hover");
			root.style.removeProperty("--color-primary-soft");
		}
		const meta = custom ? look.paper : theme === "dark" ? "#1a1714" : "#F3EEE6";
		document.querySelector("meta[name=\"theme-color\"]")?.setAttribute("content", meta);
	}, [
		theme,
		look.paper,
		look.accent
	]);
	let body;
	if (tab === "pure") body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PurePane, {});
	else if (creating && draft) body = tab === "params" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParamsPane, { chat: draft }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleEditor, {
		chat: draft,
		mode: "create"
	});
	else if (editing && editChat && tab === "chat") body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleEditor, {
		chat: editChat,
		mode: "edit"
	});
	else if (tab === "params") body = chat && !chat.isDraft ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParamsPane, { chat }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyParams, {});
	else if (chat && !chat.isDraft) body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatPane, { chat });
	else body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyChat, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto flex h-full max-w-lg flex-col bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex shrink-0 items-center gap-1 px-2 pt-[calc(env(safe-area-inset-top)+8px)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
						onClick: () => useApp.getState().setUI({ sidebar: true }),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex flex-1 justify-center gap-7 text-[15px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabBtn, {
								id: "chat",
								label: "聊天"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabBtn, {
								id: "params",
								label: "生图参数"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabBtn, {
								id: "pure",
								label: "纯生图"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
						onClick: () => useApp.getState().setUI({ connection: true }),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative min-h-0 flex-1 overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full",
						children: body
					}),
					tab === "chat" && chat && !chat.isDraft && !isWorkshopChat(chat) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WechatDock, { chat }) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkshopHost, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConnectionPanel, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardEditSheet, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppearEditSheet, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastHost, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmHost, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenameModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomPromptModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveCardModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveAppearModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldEditModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiCreateModal, {})
		]
	});
}
function TabBtn({ id, label }) {
	const on = useApp((s) => s.ui.tab) === id;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick: () => useApp.getState().setTab(id),
		className: `relative pb-2 ${on ? "font-semibold text-ink" : "text-muted"}`,
		children: [label, on && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-1 -bottom-0.5 h-[2px] rounded-full bg-ink" })]
	});
}
function EmptyParams() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "px-6 py-16 text-center text-[13px] text-muted",
		children: "先在侧栏新建一个角色，才能设置聊天配图参数。"
	});
}
function EmptyChat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid h-full place-items-center px-8 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-serif text-2xl",
				children: "还没有开始"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-xs text-[13px] leading-6 text-muted",
				children: "点左上角打开侧栏，新建一个角色就能聊。配图会跟着每句回复出来。"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "mt-6 rounded-full bg-primary px-6 py-3 text-[14px] text-on-primary",
				onClick: () => useApp.getState().newDraft(),
				children: "新建聊天"
			})
		] })
	});
}
function SaveCardModal() {
	const open = useApp((s) => s.ui.saveCardOpen);
	const chat = useApp((s) => s.current());
	const [name, setName] = (0, import_react.useState)(chat?.name ?? "");
	(0, import_react.useEffect)(() => setName(chat?.name ?? ""), [chat?.name, open]);
	if (!open || !chat) return null;
	const close = () => useApp.getState().setUI({ saveCardOpen: false });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
		open: true,
		onClose: close,
		title: "保存为角色卡",
		hideClose: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
			value: name,
			onChange: (e) => setName(e.target.value),
			placeholder: "输入名称",
			autoFocus: true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
				onClick: close,
				children: "取消"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
				onClick: () => useApp.getState().saveCard(chat, name.trim() || chat.name || "未命名"),
				children: "保存"
			})]
		})]
	});
}
function SaveAppearModal() {
	const ui = useApp((s) => s.ui);
	const tab = useApp((s) => s.ui.tab);
	const chat = useApp((s) => s.current());
	const pure = useApp((s) => s.pureParams);
	const [name, setName] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => setName(""), [ui.saveAppearOpen]);
	if (!ui.saveAppearOpen) return null;
	const close = () => useApp.getState().setUI({ saveAppearOpen: false });
	const prompt = tab === "pure" ? ui.appearTarget && ui.appearTarget !== "mid" ? pure.characters.find((c) => c.id === ui.appearTarget)?.prompt ?? "" : pure.promptMid : ui.appearTarget && ui.appearTarget !== "mid" ? chat?.imageParams.characters.find((c) => c.id === ui.appearTarget)?.prompt ?? "" : chat?.imageParams.promptMid ?? "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
		open: true,
		onClose: close,
		title: "保存角色",
		hideClose: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
			value: name,
			onChange: (e) => setName(e.target.value),
			placeholder: "输入名称",
			autoFocus: true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
				onClick: close,
				children: "取消"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
				disabled: !name.trim(),
				onClick: () => useApp.getState().saveAppearance(name.trim(), prompt),
				children: "保存"
			})]
		})]
	});
}
function FieldEditModal() {
	const field = useApp((s) => s.ui.fieldEdit);
	const [text, setText] = (0, import_react.useState)(field?.text ?? "");
	(0, import_react.useEffect)(() => setText(field?.text ?? ""), [
		field?.text,
		field?.key,
		field?.charId
	]);
	if (!field) return null;
	const isAll = field.key === "all";
	const label = isAll ? "整张卡" : FIELD_LABELS[field.key] || field.key;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
		open: true,
		onClose: () => useApp.getState().setUI({ fieldEdit: null }),
		title: isAll ? "个性化修改整张卡" : `个性化修改 · ${label}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
			value: text,
			placeholder: "写下你的要求",
			onChange: (e) => setText(e.target.value)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
			className: "mt-4",
			onClick: () => {
				const t = text.trim();
				if (!t) {
					useApp.getState().toast("写一点要求");
					return;
				}
				const live = useApp.getState().current();
				if (!live) return;
				useApp.getState().setUI({
					fieldEdit: null,
					polishJob: {
						chatId: live.id,
						kind: isAll ? "personalize" : "field",
						key: isAll ? void 0 : field.key,
						charId: field.charId,
						instruction: t
					}
				});
			},
			children: isAll ? "按这个改" : "改这一栏"
		})]
	});
}
function MoveModal() {
	const open = useApp((s) => s.ui.moveOpen);
	const folders = useApp((s) => s.folders);
	const chats = useApp((s) => s.chats);
	const selected = useApp((s) => s.ui.selected);
	if (!open) return null;
	const { foldersSorted } = listedChats(folders, chats, selected.some((id) => {
		const chat = chats.find((c) => c.id === id);
		if (chat) return isWorkshopChat(chat);
		return folders.find((f) => f.id === id)?.place === "workshop";
	}) ? "workshop" : "home");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
		open: true,
		onClose: () => useApp.getState().setUI({ moveOpen: false }),
		title: "移动到",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "mb-2 w-full rounded-2xl bg-card px-4 py-3 text-left",
			onClick: () => useApp.getState().moveSelected(null),
			children: "不放进文件夹"
		}), foldersSorted.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "mb-2 w-full rounded-2xl bg-card px-4 py-3 text-left",
			onClick: () => useApp.getState().moveSelected(f.id),
			children: f.name
		}, f.id))]
	});
}
function MultiCreateModal() {
	const ids = useApp((s) => s.ui.multiCreate);
	const chats = useApp((s) => s.chats);
	const [mode, setMode] = (0, import_react.useState)("together");
	const [overview, setOverview] = (0, import_react.useState)("");
	const [opening, setOpening] = (0, import_react.useState)("");
	if (!ids || ids.length < 2) return null;
	const picked = ids.map((id) => chats.find((c) => c.id === id)).filter(Boolean);
	const makeDraft = () => {
		const id = uid$1("chat_");
		const characters = picked.map((c, i) => {
			return {
				...c.characters[0] ?? emptyCharacter(i + 1),
				id: uid$1("c_")
			};
		});
		const imageParams = defaultImageParams();
		imageParams.characters = characters.map((c) => ({
			id: c.id,
			name: c.name,
			enabled: true,
			prompt: c.appearance || c.prompt,
			uc: c.uc,
			x: .5,
			y: .5
		}));
		return {
			id,
			folderId: null,
			name: characters.map((c) => c.name).filter(Boolean).join("、"),
			remark: "",
			starred: false,
			order: Date.now(),
			createdAt: Date.now(),
			updatedAt: Date.now(),
			isDraft: true,
			grokModelId: useApp.getState().settings.grokModelId,
			isMulti: true,
			multiMode: mode,
			promptMode: "insert",
			adultBoost: false,
			canGen: true,
			statusBarOn: false,
			statusBar: DEFAULT_STATUS_BAR,
			overview,
			opening,
			extras: [],
			memory: "",
			memoryUntil: 0,
			memoryFoldAt: 0,
			memorySnaps: [],
			characters,
			imageParams,
			messages: [],
			scrollTop: 0
		};
	};
	const pushDraft = (draft) => {
		useApp.setState((s) => ({
			chats: [...s.chats, draft],
			currentId: draft.id,
			ui: {
				...s.ui,
				multiCreate: null,
				creating: true,
				sidebar: false,
				selectMode: false,
				selected: [],
				tab: "chat",
				autoPolish: false
			}
		}));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
		open: true,
		onClose: () => useApp.getState().setUI({ multiCreate: null }),
		title: "请设置多人聊天",
		wide: true,
		children: [
			picked.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 text-[13px]",
				children: [
					"角色",
					i + 1,
					"：",
					c.name
				]
			}, c.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "my-3 text-[13px] font-medium",
				children: "要求总览"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
				value: overview,
				onChange: (e) => setOverview(e.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-1 mt-3 text-[13px] font-medium",
				children: "开场场景"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
				value: opening,
				onChange: (e) => setOpening(e.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "my-3 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: `flex-1 rounded-full py-2 text-[13px] ${mode === "together" ? "bg-primary text-on-primary" : "border border-line"}`,
					onClick: () => setMode("together"),
					children: "多人同聊模式"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: `flex-1 rounded-full py-2 text-[13px] ${mode === "group" ? "bg-primary text-on-primary" : "border border-line"}`,
					onClick: () => setMode("group"),
					children: "群聊模式"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
				onClick: () => {
					const draft = makeDraft();
					useApp.setState((s) => ({
						chats: [...s.chats, draft],
						currentId: draft.id,
						ui: {
							...s.ui,
							multiCreate: null,
							creating: true,
							sidebar: false,
							selectMode: false,
							selected: [],
							tab: "chat",
							autoPolish: true
						}
					}));
				},
				children: "让AI完善设定"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
				className: "mt-2",
				onClick: async () => {
					const draft = makeDraft();
					pushDraft(draft);
					useApp.getState().commitChat(draft.id);
					const { sendOpening } = await import("./chat-actions-C6lFpsZZ.mjs");
					sendOpening(draft.id);
				},
				children: "跳过，开始聊天"
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-[100dvh] overflow-hidden bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {})
	});
}
//#endregion
export { loadAll as $, defaultSettings as A, groupDescendants as B, bankSwitch as C, snapshotLlmAccount as Ct, cn as D, uniqueNumberedName as Dt, chatPickerModels as E, uid$1 as Et, duplicateRandomModule as F, imageWriteFields as G, imagePickerModels as H, emptyBank as I, isMultiLlm as J, indexFromY as K, expandParams as L, deleteRandomGroup as M, downloadBlob as N, db as O, uniquePresetName as Ot, dropBuiltinImageModel as P, llmModelName as Q, forgetIfPrompt as R, badModuleName as S, setModuleRounds as St, catalogFromLinks as T, syncAppearanceModule as Tt, imagePresetStyle as U, idb_exports as V, imageUrl as W, llmIdentity as X, jumpSeq as Y, llmModelLabel as Z, activeWechatPreset as _, reviveAppearanceModule as _t, cancelMemory as a, orderedModules as at, applyLlmPick as b, seqTurnItem as bt, regenMessage as c, Home as component, presetStyle as ct, runManualMemory as d, putImage as dt, moduleRounds as et, sendOpening as f, randomSeed as ft, activePreset as g, restoreSampler as gt, FOLLOW_IMAGE_AI as h, resolveLlmSend as ht, cancelImage as i, orderedGroups as it, deleteImage as j, defaultSampler as k, wechatPresetStyle as kt, replyPending as l, presetTexts as lt, routes_BTa7LXyd_exports as m, resolveImageWrite as mt, attachImage as n, moveId as nt, editMessage as o, parseChatCompletionPreset as ot, sendUser as p, rememberUrl as pt, isGrokModelId as q, branchFrom as r, nearestScroller as rt, invalidateMemory as s, parseLlmModelKey as st, abortChat as t, moduleTag as tt, retryMemory as u, pruneStarred as ut, appendPrompt as v, samplerPatch as vt, cachedUrl as w, sortHistoryNewestFirst as wt, autoScrollNearEdge as x, setModulePick as xt, applyImageAiPick as y, sealPreset as yt, getImage as z };
