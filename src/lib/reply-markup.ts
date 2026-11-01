export type ReplyFold = {
  kind: "think" | "note";
  title: string;
  body: string;
};

export type ParsedReply = {
  body: string;
  folds: ReplyFold[];
  options: string[];
};

const TOP = new Set([
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
  "censorship_bypass",
]);

type Tag = { start: number; end: number; name: string; closing: boolean };

function matchTag(s: string, i: number): Tag | null {
  if (s[i] !== "<") return null;
  if (s.startsWith("<!", i)) {
    const end = s.indexOf(">", i + 2);
    return { start: i, end: end < 0 ? s.length : end + 1, name: "!--", closing: false };
  }
  const slice = s.slice(i);
  const pipe = slice.match(/^<\|([a-zA-Z_][\w-]*)\|>/);
  if (pipe) return { start: i, end: i + pipe[0].length, name: pipe[1].toLowerCase(), closing: false };
  const close = slice.match(/^<\/([a-zA-Z][\w:~-]*)\s*>/);
  if (close) return { start: i, end: i + close[0].length, name: close[1].toLowerCase(), closing: true };
  const open = slice.match(/^<([a-zA-Z][\w:~-]*)(?:\s[^>]*)?>/);
  if (open) return { start: i, end: i + open[0].length, name: open[1].toLowerCase(), closing: false };
  return null;
}

function findClose(s: string, from: number, name: string): number {
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
      } else {
        depth++;
      }
    }
    i = t.end;
  }
  return -1;
}

const CHILDREN: Record<string, Set<string>> = {
  details: new Set(["summary"]),
  options: new Set(["option"]),
};

function nextTopOpen(s: string, from: number, parent?: string): number {
  const skip = parent ? CHILDREN[parent] : undefined;
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

export function decodeUnicodeEscapes(input: string): string {
  if (!input || !input.includes("\\u")) return input;
  let s = input;
  const hold = s.match(/\\u(?:\{[0-9a-fA-F]{0,5}|[0-9a-fA-F]{0,3})$/);
  const tail = hold ? hold[0] : "";
  if (tail) s = s.slice(0, -tail.length);
  s = s.replace(/\\u\{([0-9a-fA-F]{1,6})\}/g, (full, h: string) => {
    const n = Number.parseInt(h, 16);
    return Number.isFinite(n) && n <= 0x10ffff ? String.fromCodePoint(n) : full;
  });
  s = s.replace(/\\u([0-9a-fA-F]{4})/g, (_full, h: string) => String.fromCharCode(Number.parseInt(h, 16)));
  return s + tail;
}

function hideIncomplete(s: string): string {
  const i = s.lastIndexOf("<");
  if (i < 0) return s;
  const tail = s.slice(i);
  if (tail.includes(">")) return s;
  if (
    tail === "<" ||
    tail === "</" ||
    /^<\/?[a-zA-Z|][\w:~|-]*$/.test(tail) ||
    /^<\|[\w-]*$/.test(tail) ||
    tail === "<!"
  ) {
    return s.slice(0, i);
  }
  return s;
}

export function stripReplyTags(s: string): string {
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

function tidy(s: string): string {
  return stripReplyTags(s);
}

function detailsParts(inner: string): { title: string; body: string } {
  const m = inner.match(/^\s*<summary\b[^>]*>([\s\S]*?)<\/summary\s*>/i);
  if (m) return { title: tidy(m[1]) || "折叠", body: tidy(inner.slice(m[0].length)) };
  const open = inner.match(/^\s*<summary\b[^>]*>([\s\S]*)$/i);
  if (open) return { title: tidy(open[1]) || "折叠", body: "" };
  return { title: "折叠", body: tidy(inner) };
}

function parseOptions(inner: string): string[] {
  const out: string[] = [];
  const re = /<option\b[^>]*>([\s\S]*?)(?:<\/option\s*>|$)/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(inner))) {
    const t = tidy(m[1]);
    if (t) out.push(t);
  }
  if (!out.length) {
    for (const line of tidy(inner).split(/\n+/)) {
      const t = line.trim();
      if (t) out.push(t);
    }
  }
  return out;
}

function thinkTitle(name: string) {
  return name === "os" ? "内心" : "思考";
}

function sliceInner(s: string, openEnd: number, name: string): { inner: string; after: number } {
  const close = findClose(s, openEnd, name);
  const next = nextTopOpen(s, openEnd, name);
  if (close >= 0 && (next < 0 || close <= next)) {
    const t = matchTag(s, close);
    return { inner: s.slice(openEnd, close), after: t ? t.end : close };
  }
  if (next >= 0) return { inner: s.slice(openEnd, next), after: next };
  return { inner: s.slice(openEnd), after: s.length };
}

export function parseReplyMarkup(raw: string): ParsedReply {
  const text = hideIncomplete(decodeUnicodeEscapes(raw || ""));
  const think: ReplyFold[] = [];
  const notes: ReplyFold[] = [];
  const options: string[] = [];
  const bodySegs: string[] = [];
  let i = 0;

  const pushNote = (title: string, body: string) => {
    const t = title.trim() || "折叠";
    const b = body.trim();
    if (!b && !t) return;
    notes.push({ kind: "note", title: t, body: b });
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
      if (body) think.push({ kind: "think", title: thinkTitle(t.name), body });
    } else if (t.name === "game") {
      bodySegs.push(inner);
    } else if (t.name === "background") {
      pushNote("背景", tidy(inner));
    } else if (t.name === "details") {
      const d = detailsParts(inner);
      pushNote(d.title, d.body);
    } else if (t.name === "summary") {
      pushNote("摘要", tidy(inner));
    } else if (t.name === "options") {
      options.push(...parseOptions(inner));
    } else if (t.name === "option") {
      const o = tidy(inner);
      if (o) options.push(o);
    }
    i = after;
  }

  const body = tidy(bodySegs.join(""));
  return { body, folds: [...think, ...notes], options };
}

export function replyStoryText(raw: string): string {
  return parseReplyMarkup(raw).body;
}

export function replyContextText(raw: string): string {
  const p = parseReplyMarkup(raw);
  const extra = p.folds.filter((f) => f.kind !== "think").map((f) => f.body).filter(Boolean);
  return [p.body, ...extra].filter(Boolean).join("\n\n");
}
