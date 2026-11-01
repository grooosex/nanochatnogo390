export const PAPER = "#f3eee6";
export const NARRATE = "#5a534c";
export const SAY = "#2c2824";

export type LookFont = "default" | "song" | "hei" | "kai";

export interface LookSettings {
  font?: LookFont;
  /** 正文字号，12–28。16 是 100%。 */
  size?: number;
  /** 叙述粗细，300–700。400 是 100%。引号再粗一档。 */
  weight?: number;
  narrate?: string;
  say?: string;
  /** 绘语米。只在浅色时替换所有纸色。 */
  paper?: string;
  bgImageId?: string;
  /** 图片上的纸色罩，0–80。 */
  bgFade?: number;
  /** 绘语红。按钮、滑块、选中框和它们的浅底。 */
  accent?: string;
  /** 正文底下的纯色块。关掉就直接写在图上。 */
  textPlate?: boolean;
}

export const FONTS: { id: LookFont; label: string; stack: string }[] = [
  { id: "default", label: "绘语默认", stack: '"Noto Serif SC", "Songti SC", "Noto Serif CJK SC", serif' },
  { id: "song", label: "宋体", stack: '"Songti SC", "STSong", "SimSun", "Noto Serif SC", serif' },
  { id: "hei", label: "黑体", stack: '"PingFang SC", "Noto Sans SC", "Microsoft YaHei", sans-serif' },
  { id: "kai", label: "楷体", stack: '"Kaiti SC", "STKaiti", "KaiTi", "Noto Serif SC", serif' },
];

export const SIZE_STEPS = [12, 14, 16, 18, 20, 22, 24];
export const SIZE_MIN = 12;
export const SIZE_MAX = 28;
export const WEIGHT_MIN = 300;
export const WEIGHT_MAX = 700;

export const PAPERS: { name: string; color: string }[] = [
  { name: "绘语米", color: "#f3eee6" },
  { name: "米纸", color: "#f7f1e6" },
  { name: "暖白", color: "#f7f4ee" },
  { name: "燕麦", color: "#efe4d2" },
  { name: "浅杏", color: "#f4e4d4" },
  { name: "豆沙", color: "#f0e2de" },
  { name: "石灰", color: "#e6e2dc" },
  { name: "墨灰", color: "#d5d2cc" },
  { name: "暖灰", color: "#e7e1d6" },
  { name: "淡松绿", color: "#e3eee7" },
  { name: "茶绿", color: "#e2eee4" },
  { name: "青瓷", color: "#e3eeea" },
  { name: "雾青", color: "#e2eae9" },
  { name: "雾蓝", color: "#e3e9f1" },
  { name: "远山蓝", color: "#e2e7ee" },
  { name: "海蓝", color: "#e2eef2" },
  { name: "灰紫", color: "#ebe6ee" },
];

export const ACCENT = "#9c5348";

export const ACCENTS: { name: string; color: string }[] = [
  { name: "绘语红", color: "#9c5348" },
  { name: "朱砂", color: "#c45c4a" },
  { name: "玫瑰褐", color: "#8d5b66" },
  { name: "暖咖", color: "#8a6244" },
  { name: "橄榄", color: "#6d6a45" },
  { name: "苔绿", color: "#5e7a4e" },
  { name: "青绿", color: "#3e6d68" },
  { name: "松绿", color: "#4f6b5a" },
  { name: "雾蓝", color: "#5b7088" },
  { name: "海蓝", color: "#3d6280" },
  { name: "墨蓝", color: "#3a4c66" },
  { name: "藕紫", color: "#7b6a86" },
  { name: "暮紫", color: "#5a4d6c" },
];

export const BLACKS = ["#1a1714", "#2c2824", "#3a342e", "#4a433c", "#5a534c", "#6e675f", "#8a8378"];

export const TEXT_COLORS = [
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
  "#8a8378",
];

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

export function validHex(raw: unknown) {
  if (typeof raw !== "string") return null;
  const s = raw.trim().toLowerCase();
  return /^#[0-9a-f]{6}$/.test(s) ? s : null;
}

export function readLook(look?: LookSettings) {
  const font = FONTS.some((f) => f.id === look?.font) ? (look?.font as LookFont) : "default";
  return {
    font,
    size: clamp(Math.round(Number(look?.size) || 16), SIZE_MIN, SIZE_MAX),
    weight: clamp(Math.round(Number(look?.weight) || 400), WEIGHT_MIN, WEIGHT_MAX),
    narrate: validHex(look?.narrate) ?? NARRATE,
    say: validHex(look?.say) ?? SAY,
    paper: validHex(look?.paper) ?? PAPER,
    accent: validHex(look?.accent) ?? ACCENT,
    textPlate: look?.textPlate === true,
    bgImageId: typeof look?.bgImageId === "string" && look.bgImageId ? look.bgImageId : undefined,
    bgFade: clamp(Math.round(Number(look?.bgFade ?? 40)), 0, 80),
  };
}

export function swatchName(list: { name: string; color: string }[], hex: string) {
  return list.find((item) => item.color.toLowerCase() === hex.toLowerCase())?.name ?? "自定义";
}

export interface LookTheme {
  id: string;
  name: string;
  font: LookFont;
  size: number;
  weight: number;
  narrate: string;
  say: string;
  paper: string;
  accent: string;
}

export function fontStack(id: LookFont) {
  return FONTS.find((f) => f.id === id)?.stack ?? FONTS[0].stack;
}

export function sayWeight(weight: number) {
  return Math.min(WEIGHT_MAX, weight + 200);
}

function rgbOf(hex: string) {
  const n = validHex(hex) ?? "#000000";
  return [parseInt(n.slice(1, 3), 16), parseInt(n.slice(3, 5), 16), parseInt(n.slice(5, 7), 16)];
}

function mixHex(from: string, to: string, t: number) {
  const a = rgbOf(from);
  const b = rgbOf(to);
  const c = a.map((v, i) => Math.round(v + (b[i] - v) * t));
  return `#${c.map((n) => n.toString(16).padStart(2, "0")).join("")}`;
}

export function accentTone(hex: string) {
  const solid = validHex(hex) ?? ACCENT;
  return {
    solid,
    hover: mixHex(solid, "#000000", 0.14),
    soft: mixHex(solid, "#ffffff", 0.86),
    softDark: mixHex(solid, "#1a1714", 0.78),
  };
}

export function hsvToHex(h: number, s: number, v: number) {
  const hh = ((h % 360) + 360) % 360;
  const c = v * s;
  const x = c * (1 - Math.abs(((hh / 60) % 2) - 1));
  const m = v - c;
  let r = 0;
  let g = 0;
  let b = 0;
  if (hh < 60) [r, g, b] = [c, x, 0];
  else if (hh < 120) [r, g, b] = [x, c, 0];
  else if (hh < 180) [r, g, b] = [0, c, x];
  else if (hh < 240) [r, g, b] = [0, x, c];
  else if (hh < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  const hex = (n: number) => Math.round((n + m) * 255).toString(16).padStart(2, "0");
  return `#${hex(r)}${hex(g)}${hex(b)}`;
}

export function hexToHsv(hex: string) {
  const n = validHex(hex) ?? "#000000";
  const r = parseInt(n.slice(1, 3), 16) / 255;
  const g = parseInt(n.slice(3, 5), 16) / 255;
  const b = parseInt(n.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  let h = 0;
  if (d) {
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
    if (h < 0) h += 360;
  }
  return { h, s: max === 0 ? 0 : d / max, v: max };
}
