import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function uid(prefix = "") {
  return `${prefix}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}

export function sortHistoryNewestFirst<T extends { createdAt?: number; id?: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const dt = (b.createdAt || 0) - (a.createdAt || 0);
    if (dt) return dt;
    return String(b.id || "").localeCompare(String(a.id || ""));
  });
}


export function uniqueNumberedName(desired: string, taken: Iterable<string>): string {
  const base = desired.trim();
  const set = new Set(taken);
  if (!set.has(base)) return base;
  let n = 2;
  while (set.has(`${base}${n}`)) n++;
  return `${base}${n}`;
}

export function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function now() {
  return Date.now();
}

export function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export function excerpt(s: string, n = 28) {
  const t = s.replace(/\s+/g, " ").trim();
  return t.length > n ? t.slice(0, n) + "…" : t;
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

export function randomSeed() {
  return Math.floor(Math.random() * 2 ** 32);
}

export function moveIndex<T>(arr: T[], from: number, to: number): T[] {
  if (from === to || from < 0 || to < 0 || from >= arr.length || to >= arr.length) return arr;
  const next = arr.slice();
  const [x] = next.splice(from, 1);
  next.splice(to, 0, x);
  return next;
}

export function moveId(ids: string[], id: string, to: number): string[] {
  const from = ids.indexOf(id);
  if (from < 0) return ids;
  const next = ids.slice();
  next.splice(from, 1);
  next.splice(Math.max(0, Math.min(next.length, to)), 0, id);
  return next;
}

export function indexFromY(rows: ArrayLike<HTMLElement>, y: number): number {
  if (!rows.length) return 0;
  for (let i = 0; i < rows.length; i++) {
    const box = rows[i].getBoundingClientRect();
    if (y < box.top + box.height / 2) return i;
  }
  return rows.length - 1;
}

export function nearestScroller(el: HTMLElement | null): HTMLElement | null {
  let n: HTMLElement | null = el;
  while (n && n !== document.body) {
    const oy = getComputedStyle(n).overflowY;
    if (oy === "auto" || oy === "scroll" || oy === "overlay") return n;
    n = n.parentElement;
  }
  return null;
}

export function autoScrollNearEdge(scroller: HTMLElement, clientY: number, edge = 52): number {
  const box = scroller.getBoundingClientRect();
  const max = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
  if (max <= 0) return 0;
  let dy = 0;
  if (clientY < box.top + edge) {
    dy = -Math.min(28, Math.max(3, (box.top + edge - clientY) * 0.4));
  } else if (clientY > box.bottom - edge) {
    dy = Math.min(28, Math.max(3, (clientY - (box.bottom - edge)) * 0.4));
  }
  if (!dy) return 0;
  const next = Math.max(0, Math.min(max, scroller.scrollTop + dy));
  const applied = next - scroller.scrollTop;
  scroller.scrollTop = next;
  return applied;
}

export function dropIndexByY(
  ids: string[],
  dragId: string,
  y: number,
  rectOf: (id: string) => DOMRect | undefined,
) {
  const from = ids.indexOf(dragId);
  if (from < 0) return from;
  let to = from;
  for (let i = 0; i < ids.length; i++) {
    if (ids[i] === dragId) continue;
    const r = rectOf(ids[i]);
    if (!r) continue;
    const mid = r.top + r.height / 2;
    if (i < from && y < mid) to = Math.min(to, i);
    if (i > from && y > mid) to = Math.max(to, i);
  }
  return to;
}
