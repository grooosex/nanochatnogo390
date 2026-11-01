export interface PngNaiMeta {
  prompt?: string;
  uc?: string;
  width?: number;
  height?: number;
  steps?: number;
  scale?: number;
  sampler?: string;
  seed?: number;
  noiseSchedule?: string;
  model?: string;
  raw?: string;
  characters?: { prompt: string; uc: string; x: number; y: number }[];
}

function readChunks(buf: ArrayBuffer) {
  const view = new DataView(buf);
  if (view.getUint32(0) !== 0x89504e47 || view.getUint32(4) !== 0x0d0a1a0a) {
    throw new Error("不是 PNG");
  }
  const texts: Record<string, string> = {};
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
        const val = new TextDecoder("latin1").decode(data.slice(nul + 1));
        texts[key] = val;
      }
    } else if (type === "iTXt") {
      const nul = data.indexOf(0);
      if (nul > 0) {
        const key = new TextDecoder().decode(data.slice(0, nul));
        let i = nul + 1;
        const compressed = data[i];
        i += 2;
        const langEnd = data.indexOf(0, i);
        i = langEnd + 1;
        const transEnd = data.indexOf(0, i);
        i = transEnd + 1;
        let val: string;
        if (compressed) val = "";
        else val = new TextDecoder().decode(data.slice(i));
        texts[key] = val;
      }
    } else if (type === "IEND") break;
    offset = start + len + 4;
  }
  return texts;
}

export function parseNaiPng(buf: ArrayBuffer): PngNaiMeta {
  const texts = readChunks(buf);
  const comment = texts.Comment || texts.comment || texts.Description || "";
  const raw = comment || JSON.stringify(texts);
  let json: Record<string, unknown> | null = null;
  try {
    json = JSON.parse(comment);
  } catch {
    json = null;
  }
  const src = (json ?? {}) as Record<string, unknown>;
  const v4 = (src.v4_prompt as { caption?: { base_caption?: string; char_captions?: { char_caption?: string; centers?: { x: number; y: number }[] }[] } } | undefined)?.caption;
  const v4neg = (src.v4_negative_prompt as { caption?: { char_captions?: { char_caption?: string }[] } } | undefined)?.caption;
  const charCaps = Array.isArray(v4?.char_captions) ? v4!.char_captions! : [];
  const ucCaps = Array.isArray(v4neg?.char_captions) ? v4neg!.char_captions! : [];
  const characters = charCaps.map((c, i) => ({
    prompt: String(c?.char_caption || ""),
    uc: String(ucCaps[i]?.char_caption || ""),
    x: Number(c?.centers?.[0]?.x ?? 0.5),
    y: Number(c?.centers?.[0]?.y ?? 0.5),
  }));
  return {
    prompt: (v4?.base_caption || (src.prompt as string) || texts.prompt || "").toString(),
    uc: ((src.uc as string) || (src.negative_prompt as string) || "").toString(),
    width: Number(src.width) || undefined,
    height: Number(src.height) || undefined,
    steps: Number(src.steps) || undefined,
    scale: Number(src.scale) || undefined,
    sampler: (src.sampler as string) || undefined,
    seed: Number(src.seed) || undefined,
    noiseSchedule: (src.noise_schedule as string) || undefined,
    model: (src.sm ?? src.model) as string | undefined,
    raw,
    characters: characters.length ? characters : undefined,
  };
}
