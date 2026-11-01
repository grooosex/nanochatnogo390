export function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function stripSpeakerPrefix(text: string, names: (string | undefined | null)[]): string {
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

const QUOTE =
  /「[^」]*」|『[^』]*』|“[^”]*”|"[^"\n]*"/g;

export function splitDialogue(text: string): { kind: "say" | "narr"; text: string }[] {
  const out: { kind: "say" | "narr"; text: string }[] = [];
  let last = 0;
  for (const m of text.matchAll(QUOTE)) {
    const i = m.index ?? 0;
    if (i > last) out.push({ kind: "narr", text: text.slice(last, i) });
    out.push({ kind: "say", text: m[0] });
    last = i + m[0].length;
  }
  if (last < text.length) out.push({ kind: "narr", text: text.slice(last) });
  return out.filter((p) => p.text);
}
