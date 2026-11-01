import type { Chat, ChatMessage, MemorySnap } from "./types";
import { replyContextText } from "./reply-markup.ts";

export const MEMORY_CHAR_CAP = 3800;
export const MEMORY_TARGET = "900–1400 字";

export const MEMORY_PARAMS = {
  temperature: 0.3,
  topP: 1,
  frequencyPenalty: 0,
  presencePenalty: 0,
  maxTokens: 4096,
};

export function memoryFailReason(e: unknown): string {
  const err = e as { name?: string; message?: string };
  if (err?.name === "AbortError") return "已取消";
  const msg = err?.message || "";
  if (msg === "memory-invalid") return "回得太短或不像备忘";
  if (msg === "memory-skip") return "没有可收的对白";
  return msg || "请求失败";
}

export function clipMemoryText(text: string): string {
  const t = text.trim();
  if (t.length <= MEMORY_CHAR_CAP) return t;
  return t.slice(0, MEMORY_CHAR_CAP).replace(/\s+\S*$/, "").trim();
}

export function isPlausibleMemory(text: string): boolean {
  const t = text.trim();
  if (t.length < 24) return false;
  if (/could not be submitted|sensitive words|prohibited use|content policy|usage policy|generative ai/i.test(t)) return false;
  if (/^(好的|收到|ok|done|无|没有|（无）)/i.test(t) && t.length < 80) return false;
  return true;
}

export function foldIntervalMessages(contextTurns: number): number {
  const turns = Math.max(4, contextTurns);
  return Math.max(4, turns - 6) * 2;
}

/** First fold fires one pair before the raw window is full. */
export function firstFoldAt(windowMsgs: number, intervalMsgs: number): number {
  return Math.max(intervalMsgs, windowMsgs - 2);
}

/** Next chunk to compress, or null if not yet. */
export function planFold(
  n: number,
  covered: number,
  foldAt: number,
  windowMsgs: number,
  intervalMsgs: number,
): { start: number; end: number } | null {
  const I = intervalMsgs;
  const firstAt = firstFoldAt(windowMsgs, I);
  if (n < firstAt || I < 2) return null;
  if (foldAt > 0 && n < foldAt + I) return null;
  if (covered <= 0) return { start: 0, end: Math.min(I, n) };
  const end = covered + I;
  if (end > n) return null;
  return { start: covered, end };
}

/** How far the current line should be covered if every fold had succeeded. */
export function foldCoveredEnd(n: number, windowMsgs: number, intervalMsgs: number): number {
  const firstAt = firstFoldAt(windowMsgs, intervalMsgs);
  if (n < firstAt || intervalMsgs < 2) return 0;
  const k = 1 + Math.floor((n - firstAt) / intervalMsgs);
  return Math.min(k * intervalMsgs, n);
}

/** True when memory has reached the target for this length. Opening / too-short is caught up. */
export function memoryCaughtUp(n: number, covered: number, windowMsgs: number, intervalMsgs: number): boolean {
  return covered >= foldCoveredEnd(n, windowMsgs, intervalMsgs);
}

/** Next auto chunk while behind. One interval (or the remaining gap if smaller). */
export function nextAutoSlice(
  n: number,
  covered: number,
  windowMsgs: number,
  intervalMsgs: number,
): { start: number; end: number } | null {
  const needed = foldCoveredEnd(n, windowMsgs, intervalMsgs);
  if (covered >= needed || needed < 2) return null;
  const start = Math.max(0, covered);
  const end = Math.min(needed, start === 0 ? Math.min(intervalMsgs, needed) : start + intervalMsgs);
  if (end - start < 2 || end > n) return null;
  return { start, end };
}

/** Display turns: a user+assistant pair. The opening assistant is the leftover 1. */
export function memoryTurnStats(messageCount: number, covered: number): { spoken: number; folded: number } {
  return {
    spoken: Math.floor(Math.max(0, messageCount) / 2),
    folded: Math.floor(Math.max(0, covered) / 2),
  };
}

export function rewindSnaps(snaps: MemorySnap[] | undefined, keepCount: number): MemorySnap[] {
  return (snaps ?? []).filter((s) => s.covered <= keepCount && s.covered >= 0);
}

export function applySnaps(snaps: MemorySnap[]): Pick<Chat, "memory" | "memoryUntil" | "memoryFoldAt" | "memorySnaps"> {
  const last = snaps[snaps.length - 1];
  return {
    memorySnaps: snaps,
    memory: last?.text ?? "",
    memoryUntil: last?.covered ?? 0,
    memoryFoldAt: last?.foldAt ?? 0,
  };
}

export function pushSnap(snaps: MemorySnap[] | undefined, snap: MemorySnap): MemorySnap[] {
  const prev = (snaps ?? []).filter((s) => s.covered < snap.covered);
  return [...prev, snap];
}

export function formatMemoryDialog(messages: ChatMessage[]): string {
  return messages
    .map((m) => {
      if (m.wechatLog?.voided) return "";
      const text = (m.role === "user" ? m.content : replyContextText(m.content)).trim();
      if (!text) return "";
      return `${m.role === "user" ? "用户" : m.characterName || "角色"}：${text}`;
    })
    .filter(Boolean)
    .join("\n");
}

export function normalizeChatMemory(c: Chat): Chat {
  let snaps = Array.isArray(c.memorySnaps)
    ? c.memorySnaps.filter((s) => s && typeof s.text === "string" && typeof s.covered === "number")
    : [];
  if (!snaps.length && c.memory?.trim()) {
    snaps = [
      {
        covered: Math.max(0, c.memoryUntil || 0),
        text: c.memory,
        foldAt: Math.max(0, c.memoryFoldAt || c.memoryUntil || 0),
      },
    ];
  }
  return { ...c, ...applySnaps(snaps) };
}

export const emptyMemory = (): Pick<Chat, "memory" | "memoryUntil" | "memoryFoldAt" | "memorySnaps"> => ({
  memory: "",
  memoryUntil: 0,
  memoryFoldAt: 0,
  memorySnaps: [],
});
