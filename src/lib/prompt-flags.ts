import { FULLBODY_TAG, SENSITIVE_PREFIX, UNCENSORED_TAG } from "./constants.ts";

function esc(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function stripEndTag(s: string, tag: string) {
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

function appendTag(s: string, tag: string) {
  const t = s.trimEnd();
  if (!t) return tag;
  if (t.endsWith(",")) return `${t} ${tag}`;
  return `${t}, ${tag}`;
}

const SENSITIVE_RE = /^\s*rating:\s*sensitive,\s*nsfw,\s*uncensored,\s*/i;

export function stripSensitivePrefix(s: string) {
  return s.replace(SENSITIVE_RE, "").replace(/^\s+/, "");
}

export function applyFrontFlags(front: string, uncensored: boolean, fullBody: boolean) {
  let s = stripEndTag(stripEndTag(front, FULLBODY_TAG), UNCENSORED_TAG);
  if (uncensored) s = appendTag(s, UNCENSORED_TAG);
  if (fullBody) s = appendTag(s, FULLBODY_TAG);
  return s;
}

export function applyBackFlags(back: string, sensitive: boolean) {
  const rest = stripSensitivePrefix(back);
  if (!sensitive) return rest;
  return rest ? `${SENSITIVE_PREFIX} ${rest}` : SENSITIVE_PREFIX;
}

export function applyMergedFlags(
  text: string,
  flags: { sensitive: boolean; uncensored: boolean; fullBody: boolean },
) {
  let s = stripSensitivePrefix(text);
  s = applyFrontFlags(s, flags.uncensored, flags.fullBody);
  if (flags.sensitive) s = s ? `${SENSITIVE_PREFIX} ${s}` : SENSITIVE_PREFIX;
  return s;
}
