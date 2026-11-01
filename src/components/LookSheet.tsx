import { useEffect, useRef, useState, type PointerEvent as PE, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, ChevronLeft, ChevronUp, RotateCcw, Trash2 } from "lucide-react";
import { imageUrl } from "@/lib/idb";
import {
  ACCENT,
  ACCENTS,
  BLACKS,
  FONTS,
  NARRATE,
  PAPER,
  PAPERS,
  SAY,
  SIZE_MAX,
  SIZE_MIN,
  SIZE_STEPS,
  TEXT_COLORS,
  WEIGHT_MAX,
  WEIGHT_MIN,
  fontStack,
  hexToHsv,
  hsvToHex,
  readLook,
  sayWeight,
  swatchName,
  validHex,
  type LookFont,
  type LookSettings,
  type LookTheme,
} from "@/lib/look";
import { saveBlob, useApp } from "@/lib/store";
import { cn, uid } from "@/lib/utils";
import { ImagePick } from "./ImagePick";
import { Slider } from "./ui-kit";

function useImageUrl(id?: string) {
  const [url, setUrl] = useState<string | null>(null);
  useEffect(() => {
    if (!id) {
      setUrl(null);
      return;
    }
    let dead = false;
    void imageUrl(id).then((u) => {
      if (!dead) setUrl(u);
    });
    return () => {
      dead = true;
    };
  }, [id]);
  return url;
}

export function SceneBackdrop({ blobId, fade, paper }: { blobId?: string; fade: number; paper: string }) {
  const url = useImageUrl(blobId);
  if (!url) return null;
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${url}")` }} />
      <div className="absolute inset-0" style={{ background: paper, opacity: fade / 100 }} />
    </div>
  );
}

function patchLook(partial: Partial<LookSettings>) {
  const cur = useApp.getState().settings.look ?? {};
  useApp.getState().setSettings({ look: { ...cur, ...partial } });
}

function dropLook(keys: (keyof LookSettings)[]) {
  const cur = { ...(useApp.getState().settings.look ?? {}) };
  for (const key of keys) delete cur[key];
  useApp.getState().setSettings({ look: cur });
}

function askDrop(title: string, body: string, keys: (keyof LookSettings)[]) {
  useApp.getState().setUI({
    confirm: { title, body, onOk: () => dropLook(keys) },
  });
}

function Marked({ value, min, max, step, mark, onChange }: { value: number; min: number; max: number; step: number; mark: number; onChange: (n: number) => void }) {
  const pct = ((mark - min) / (max - min || 1)) * 100;
  return (
    <div className="relative">
      <Slider value={value} min={min} max={max} step={step} onChange={onChange} />
      <span className="pointer-events-none absolute top-1/2 h-3 w-px -translate-y-1/2 bg-ink/50" style={{ left: `${pct}%` }} />
    </div>
  );
}

function Sample({ live, paper }: { live: boolean; paper: string }) {
  const raw = useApp((s) => s.settings.look);
  const look = readLook(live ? raw : undefined);
  const weight = look.weight;
  return (
    <p
      className="rounded-[14px] px-3 py-2 leading-[1.85]"
      style={{
        background: paper,
        fontFamily: fontStack(look.font),
        fontSize: look.size,
        fontWeight: weight,
        color: look.narrate,
      }}
    >
      仅改变正文
      <span style={{ fontStyle: "italic", fontWeight: sayWeight(weight), color: look.say }}>「字体」</span>
    </p>
  );
}

const EMPTY_THEMES: LookTheme[] = [];

export function LookSheet({ onClose }: { onClose: () => void }) {
  const raw = useApp((s) => s.settings.look);
  const look = readLook(raw);
  const [sizeText, setSizeText] = useState<string | null>(null);
  const [fontOpen, setFontOpen] = useState(false);
  const [picker, setPicker] = useState<null | "narrate" | "say" | "paper" | "accent">(null);
  const [themesOpen, setThemesOpen] = useState(false);
  const [naming, setNaming] = useState(false);
  const themes = useApp((s) => s.settings.lookThemes) ?? EMPTY_THEMES;
  const stepSize = (dir: 1 | -1) => {
    const next = SIZE_STEPS.filter((n) => (dir > 0 ? n > look.size : n < look.size));
    const hit = dir > 0 ? next[0] : next[next.length - 1];
    if (hit) patchLook({ size: hit });
  };
  return (
    <div className="relative z-10 flex min-h-0 w-full max-w-md flex-col overflow-hidden rounded-[28px] bg-bg shadow-2xl">
      <div className="flex shrink-0 items-center gap-2 px-5 pb-3 pt-5">
        <h2 className="text-[20px] font-semibold">字体和背景</h2>
        <button type="button" className="ml-auto grid size-9 place-items-center" onClick={onClose} aria-label="关闭">
          <span className="text-[20px] leading-none">×</span>
        </button>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-6 scroll-hide">
        <Section
          title="字体"
          onReset={() => askDrop("恢复字体", "字体会回到最初。背景不动。", ["font", "size", "weight", "narrate", "say"])}
        >
          <div className="relative mb-2">
            <div className="flex items-center justify-between gap-3">
              <Sub>字体</Sub>
              <button
                type="button"
                className="flex h-8 min-w-28 items-center justify-between gap-2 rounded-full border border-line bg-card px-3 text-[13px]"
                onClick={() => setFontOpen((v) => !v)}
              >
                {FONTS.find((f) => f.id === look.font)?.label}
                <ChevronDown className={cn("size-4 text-muted transition", fontOpen && "rotate-180")} />
              </button>
            </div>
            {fontOpen && (
              <div className="absolute right-0 top-9 z-20 w-40 overflow-hidden rounded-[16px] border border-line bg-card shadow-lg">
                {FONTS.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    className={cn("block w-full px-4 py-2.5 text-left text-[14px]", f.id === look.font && "text-primary")}
                    style={{ fontFamily: f.stack }}
                    onClick={() => {
                      patchLook({ font: f.id === "default" ? undefined : f.id });
                      setFontOpen(false);
                    }}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="mb-1 flex items-center justify-between">
            <Sub>大小</Sub>
            <span className="inline-flex h-8 items-center rounded-full border border-line bg-card">
              <button type="button" className="grid size-8 place-items-center" aria-label="增大字号" onClick={() => stepSize(1)}>
                <ChevronUp className="size-4" />
              </button>
              <input
                value={sizeText ?? String(look.size)}
                inputMode="numeric"
                aria-label="字号"
                className="w-8 bg-transparent text-center text-[13px] outline-none"
                onFocus={() => setSizeText(String(look.size))}
                onChange={(e) => setSizeText(e.target.value.replace(/[^\d]/g, "").slice(0, 2))}
                onBlur={() => {
                  const n = Math.round(Number(sizeText));
                  if (Number.isFinite(n) && n > 0) patchLook({ size: Math.min(SIZE_MAX, Math.max(SIZE_MIN, n)) });
                  setSizeText(null);
                }}
              />
              <button type="button" className="grid size-8 place-items-center" aria-label="减小字号" onClick={() => stepSize(-1)}>
                <ChevronDown className="size-4" />
              </button>
            </span>
          </div>
          <RowLabel left="A" right="A" pct={Math.round((look.size / 16) * 100)} big />
          <Marked value={look.size} min={SIZE_MIN} max={SIZE_MAX} step={1} mark={16} onChange={(n) => patchLook({ size: n })} />

          <div className="mb-1 mt-3"><Sub>粗细</Sub></div>
          <RowLabel left="A" right="A" pct={Math.round((look.weight / 400) * 100)} />
          <Marked value={look.weight} min={WEIGHT_MIN} max={WEIGHT_MAX} step={10} mark={400} onChange={(n) => patchLook({ weight: n })} />

          <div className="mt-3 space-y-2">
            <Sample live paper={look.paper} />
            <Sample live={false} paper={look.paper} />
          </div>

          <div className="mb-1 mt-3"><Sub>颜色</Sub></div>
          <div className="flex gap-2">
            <SwatchRow label="主文字" color={look.narrate} onClick={() => setPicker("narrate")} />
            <SwatchRow label="引用" color={look.say} onClick={() => setPicker("say")} />
          </div>
        </Section>

        <Section
          title="背景"
          onReset={() => askDrop("恢复背景", "纯色、图片、淡化、强调色和文本框会回到最初。某个聊天自己的图不动。", ["paper", "bgImageId", "bgFade", "accent", "textPlate"])}
        >
          <div className="mb-1 flex gap-2">
            <div className="min-w-0 flex-1">
              <Sub>纯色</Sub>
              <SwatchRow label={swatchName(PAPERS, look.paper)} color={look.paper} onClick={() => setPicker("paper")} />
            </div>
            <div className="min-w-0 flex-1">
              <Sub>强调色</Sub>
              <SwatchRow label={swatchName(ACCENTS, look.accent)} color={look.accent} onClick={() => setPicker("accent")} />
            </div>
          </div>
          <div className="mb-1 mt-1 flex items-center justify-between">
            <Sub>图片背景</Sub>
            <button
              type="button"
              className={cn("h-7 rounded-full border px-3 text-[12px]", look.textPlate ? "border-primary bg-primary text-on-primary" : "border-line bg-card text-ink")}
              onClick={() => patchLook({ textPlate: look.textPlate ? undefined : true })}
            >
              文本框
            </button>
          </div>
          <Preview blobId={look.bgImageId} fade={look.bgFade} paper={look.paper} narrate={look.narrate} say={look.say} font={look.font} size={look.size} weight={look.weight} />
          <BgControls
            blobId={look.bgImageId}
            fade={look.bgFade}
            onId={(id) => patchLook({ bgImageId: id, bgFade: raw?.bgFade ?? 40 })}
            onClear={() => patchLook({ bgImageId: undefined })}
            onFade={(n) => patchLook({ bgFade: n })}
          />
          <p className="mt-2 text-[12px] leading-5 text-muted">总背景只铺在每个聊天的正文和生图参数上。某个聊天自己传了图，就用它的。</p>
          <button type="button" className="mt-3 h-10 w-full rounded-full border border-line bg-card text-[14px]" onClick={() => setNaming(true)}>
            保存为主题
          </button>
          <button type="button" className="mt-2 flex h-10 w-full items-center justify-between rounded-full border border-line bg-card px-4 text-[14px]" onClick={() => setThemesOpen((v) => !v)}>
            主题列表
            <ChevronDown className={cn("size-4 text-muted transition", themesOpen && "rotate-180")} />
          </button>
          {themesOpen ? (
            <div className="mt-2 max-h-44 overflow-y-auto rounded-[16px] border border-line">
              {themes.length === 0 ? <div className="px-3 py-3 text-[13px] text-muted">还没有主题</div> : null}
              {themes.map((theme) => (
                <ThemeRow
                  key={theme.id}
                  theme={theme}
                  onApply={() => {
                    patchLook({
                      font: theme.font === "default" ? undefined : theme.font,
                      size: theme.size === 16 ? undefined : theme.size,
                      weight: theme.weight === 400 ? undefined : theme.weight,
                      narrate: theme.narrate === NARRATE ? undefined : theme.narrate,
                      say: theme.say === SAY ? undefined : theme.say,
                      paper: theme.paper === PAPER ? undefined : theme.paper,
                      accent: theme.accent === ACCENT ? undefined : theme.accent,
                    });
                    useApp.getState().toast("已应用");
                  }}
                  onDelete={() => {
                    useApp.getState().setUI({
                      confirm: {
                        title: "删除主题",
                        body: `删除「${theme.name}」？`,
                        onOk: () => useApp.getState().setSettings({ lookThemes: (useApp.getState().settings.lookThemes ?? []).filter((item) => item.id !== theme.id) }),
                      },
                    });
                  }}
                />
              ))}
            </div>
          ) : null}
        </Section>
      </div>
      {picker && (
        <ColorDialog
          kind={picker}
          value={picker === "paper" ? look.paper : picker === "say" ? look.say : picker === "accent" ? look.accent : look.narrate}
          original={picker === "paper" ? PAPER : picker === "say" ? SAY : picker === "accent" ? ACCENT : NARRATE}
          onClose={() => setPicker(null)}
          onPick={(hex) => {
            const orig = picker === "paper" ? PAPER : picker === "say" ? SAY : picker === "accent" ? ACCENT : NARRATE;
            const key = picker === "paper" ? "paper" : picker === "say" ? "say" : picker === "accent" ? "accent" : "narrate";
            patchLook({ [key]: hex === orig ? undefined : hex });
            setPicker(null);
          }}
        />
      )}
      {naming ? <NameTheme onClose={() => setNaming(false)} /> : null}
    </div>
  );
}

function Section({ title, onReset, children }: { title: string; onReset: () => void; children: ReactNode }) {
  return (
    <section className="mb-4">
      <div className="mb-2 flex items-center gap-1">
        <h3 className="text-[18px] font-semibold">{title}</h3>
        <button type="button" className="grid size-7 place-items-center text-muted" aria-label={`恢复${title}`} onClick={onReset}>
          <RotateCcw className="size-3.5" />
        </button>
      </div>
      {children}
    </section>
  );
}

function Sub({ children }: { children: ReactNode }) {
  return <div className="text-[13px] font-medium">{children}</div>;
}

function ThemeRow({ theme, onApply, onDelete }: { theme: LookTheme; onApply: () => void; onDelete: () => void }) {
  const type = { fontFamily: fontStack(theme.font), fontSize: Math.min(theme.size, 16) };
  return (
    <div className="flex h-11 items-center gap-2 border-b border-black/5 px-3 last:border-b-0" style={{ background: theme.paper }}>
      <div className="min-w-0 flex-1 truncate">
        <span style={{ ...type, fontWeight: theme.weight, color: theme.narrate }}>{theme.name}</span>
        <span style={{ ...type, fontStyle: "italic", fontWeight: sayWeight(theme.weight), color: theme.say }}>「绘语」</span>
      </div>
      <button type="button" className="h-7 shrink-0 rounded-full px-3 text-[12px] text-white" style={{ background: theme.accent }} onClick={onApply}>
        应用
      </button>
      <button type="button" className="grid size-7 shrink-0 place-items-center text-danger" aria-label="删除主题" onClick={onDelete}>
        <Trash2 className="size-3.5" />
      </button>
    </div>
  );
}

function NameTheme({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const save = () => {
    const title = name.trim();
    if (!title) {
      useApp.getState().toast("先起个名字");
      return;
    }
    const look = readLook(useApp.getState().settings.look);
    const theme: LookTheme = {
      id: uid("th_"),
      name: title,
      font: look.font,
      size: look.size,
      weight: look.weight,
      narrate: look.narrate,
      say: look.say,
      paper: look.paper,
      accent: look.accent,
    };
    useApp.getState().setSettings({ lookThemes: [...(useApp.getState().settings.lookThemes ?? []), theme] });
    useApp.getState().toast("已保存");
    onClose();
  };
  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-start justify-center px-6 pt-[22vh]">
      <button type="button" className="absolute inset-0 bg-overlay/40" aria-label="关闭" onClick={onClose} />
      <div className="relative w-full max-w-sm rounded-[24px] bg-bg p-5 text-ink shadow-2xl">
        <div className="mb-3 text-[18px] font-semibold">保存为主题</div>
        <input
          value={name}
          autoFocus
          placeholder="主题名"
          className="h-11 w-full rounded-full border border-line bg-card px-4 text-[14px] outline-none"
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") save();
          }}
        />
        <div className="mt-4 flex justify-end gap-3">
          <button type="button" className="text-[14px] text-muted" onClick={onClose}>取消</button>
          <button type="button" className="text-[14px] font-medium text-primary" onClick={save}>保存</button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function RowLabel({ left, right, pct, big }: { left: string; right: string; pct: number; big?: boolean }) {
  return (
    <div className="mb-1 flex items-end justify-between text-muted">
      <span className={big ? "text-[18px]" : "text-[13px]"}>{left}</span>
      <span className="text-[12px] tabular-nums">{pct}%</span>
      <span className={big ? "text-[22px] font-semibold" : "text-[16px] font-semibold"}>{right}</span>
    </div>
  );
}

function SwatchRow({ label, color, onClick }: { label: string; color: string; onClick: () => void }) {
  return (
    <button type="button" className="mb-2 flex min-w-0 flex-1 items-center justify-between rounded-[16px] border border-line bg-card px-4 py-3" onClick={onClick}>
      <span className="text-[14px]">{label}</span>
      <span className="size-8 rounded-[8px] border border-line" style={{ background: color }} />
    </button>
  );
}

function Preview({
  blobId,
  fade,
  paper,
  narrate,
  say,
  font,
  size,
  weight,
}: {
  blobId?: string;
  fade: number;
  paper: string;
  narrate: string;
  say: string;
  font: LookFont;
  size: number;
  weight: number;
}) {
  const url = useImageUrl(blobId);
  return (
    <div className="relative mb-3 h-24 overflow-hidden rounded-[16px] border border-line">
      {url ? <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${url}")` }} /> : null}
      <div className="absolute inset-0" style={{ background: paper, opacity: url ? fade / 100 : 1 }} />
      <p className="relative px-3 py-4 leading-[1.85]" style={{ fontFamily: fontStack(font), fontSize: Math.min(size, 18), fontWeight: weight, color: narrate }}>
        仅改变正文
        <span style={{ fontStyle: "italic", fontWeight: sayWeight(weight), color: say }}>「字体」</span>
      </p>
    </div>
  );
}

export function BgControls({
  blobId,
  fade,
  onId,
  onClear,
  onFade,
}: {
  blobId?: string;
  fade: number;
  onId: (id: string) => void;
  onClear: () => void;
  onFade: (n: number) => void;
}) {
  const [crop, setCrop] = useState<string | null>(null);
  useEffect(() => {
    return () => {
      if (crop) URL.revokeObjectURL(crop);
    };
  }, [crop]);
  const openCrop = (blob: Blob) => {
    setCrop((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return URL.createObjectURL(blob);
    });
  };
  return (
    <div>
      <div className="flex gap-2">
        <ImagePick
          onFile={(file) => openCrop(file)}
          onBlob={async (id) => {
            const { getImage } = await import("@/lib/idb");
            const blob = await getImage(id);
            if (!blob) {
              useApp.getState().toast("这张图已经不在了");
              return;
            }
            openCrop(blob);
          }}
          render={(open) => (
            <button type="button" className="h-11 flex-1 rounded-full border border-line bg-card text-[14px]" onClick={open}>
              上传并裁剪
            </button>
          )}
        />
        <button
          type="button"
          className={cn("h-11 flex-1 rounded-full border border-line bg-card text-[14px]", blobId ? "text-ink" : "text-faint")}
          disabled={!blobId}
          onClick={onClear}
        >
          移除图片
        </button>
      </div>
      {blobId ? (
        <div className="mt-3">
          <div className="mb-1 flex justify-between text-[13px] text-muted">
            <span>淡化</span>
            <span>{fade}%</span>
          </div>
          <Slider value={fade} min={0} max={80} step={1} onChange={onFade} />
        </div>
      ) : null}
      {crop ? (
        <CoverCrop
          src={crop}
          onCancel={() => setCrop(null)}
          onDone={(blob) => {
            void saveBlob(blob).then(onId);
            setCrop(null);
          }}
        />
      ) : null}
    </div>
  );
}

function chipClass(color: string, original: string, current: string) {
  const same = (a: string, b: string) => a.toLowerCase() === b.toLowerCase();
  const orig = same(color, original);
  const cur = same(color, current);
  return cn("border-2", cur ? "border-ink" : "border-line", orig && "ring-2 ring-[#c4473b] ring-offset-1");
}

function ColorDialog({
  kind,
  value,
  original,
  onClose,
  onPick,
}: {
  kind: "narrate" | "say" | "paper" | "accent";
  value: string;
  original: string;
  onClose: () => void;
  onPick: (hex: string) => void;
}) {
  const [custom, setCustom] = useState(false);
  const [hsv, setHsv] = useState(() => hexToHsv(value));
  const hex = hsvToHex(hsv.h, hsv.s, hsv.v);
  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-start justify-center px-4 py-8">
      <button type="button" className="absolute inset-0 bg-overlay/40" onClick={onClose} aria-label="关闭" />
      <div className="relative flex max-h-full w-full max-w-md flex-col overflow-hidden rounded-[24px] bg-bg text-ink shadow-2xl">
        <div className="flex shrink-0 items-center px-5 pb-3 pt-5">
          <h2 className="min-w-0 flex-1 text-[18px] font-semibold">{custom ? "自定义" : kind === "paper" ? "纯色" : kind === "accent" ? "强调色" : "选择颜色"}</h2>
          <button type="button" className="grid size-9 place-items-center" onClick={custom ? () => setCustom(false) : onClose} aria-label="关闭">
            <span className="text-[20px] leading-none">×</span>
          </button>
        </div>
        <div className="min-h-0 overflow-y-auto px-5 pb-5">
          {custom ? (
            <>
              <Hue value={hsv.h} onChange={(h) => setHsv({ ...hsv, h })} />
              <div className="mb-1 mt-3 text-[13px] text-muted">饱和度</div>
              <Slider value={Math.round(hsv.s * 100)} min={0} max={100} step={1} onChange={(n) => setHsv({ ...hsv, s: n / 100 })} />
              <div className="mb-1 mt-3 text-[13px] text-muted">明度</div>
              <Slider value={Math.round(hsv.v * 100)} min={0} max={100} step={1} onChange={(n) => setHsv({ ...hsv, v: n / 100 })} />
              <div className="mt-4 flex items-center justify-between">
                <span className="size-10 rounded-[10px] border border-line" style={{ background: hex }} />
                <button type="button" className="font-medium text-primary" onClick={() => onPick(validHex(hex) ?? value)}>
                  设置
                </button>
              </div>
            </>
          ) : kind === "paper" ? (
            <div className="grid grid-cols-4 gap-2">
              {PAPERS.map((p) => (
                <button key={p.name} type="button" className="text-center" onClick={() => onPick(p.color)}>
                  <span className={cn("mx-auto block h-12 rounded-[12px]", chipClass(p.color, original, value))} style={{ background: p.color }} />
                  <span className="mt-1 block text-[11px] text-muted">{p.name}</span>
                </button>
              ))}
              <button type="button" className="text-center" onClick={() => setCustom(true)}>
                <span className="mx-auto grid h-12 place-items-center rounded-[12px] border border-dashed border-line bg-card text-[11px] text-muted">自定义</span>
                {!PAPERS.some((p) => p.color === value) ? <span className={cn("mx-auto mt-1 block size-5 rounded-[6px]", chipClass(value, original, value))} style={{ background: value }} /> : <span className="mt-1 block text-[11px] text-transparent">占</span>}
              </button>
            </div>
          ) : kind === "accent" ? (
            <>
              <div className="grid grid-cols-5 gap-2">
                {ACCENTS.map((item) => (
                  <button key={item.name} type="button" className="text-center" onClick={() => onPick(item.color)}>
                    <span className={cn("mx-auto block h-8 rounded-[8px]", chipClass(item.color, original, value))} style={{ background: item.color }} />
                    <span className="mt-1 block h-4 text-[10px] text-muted">{item.name}</span>
                  </button>
                ))}
                <button type="button" className="text-center" onClick={() => setCustom(true)}>
                  <span
                    className={cn("mx-auto block h-8 rounded-[8px]", ACCENTS.some((item) => item.color.toLowerCase() === value.toLowerCase()) ? "border border-dashed border-line bg-card" : chipClass(value, original, value))}
                    style={ACCENTS.some((item) => item.color.toLowerCase() === value.toLowerCase()) ? undefined : { background: value }}
                  />
                  <span className="mt-1 block h-4 text-[10px] text-muted">自定义</span>
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="mb-2 text-[13px] text-muted">黑的程度</div>
              <div className="mb-4 flex gap-2">
                {BLACKS.map((c) => (
                  <button key={c} type="button" className={cn("h-8 flex-1 rounded-[8px]", chipClass(c, original, value))} style={{ background: c }} onClick={() => onPick(c)} />
                ))}
              </div>
              <div className="grid grid-cols-6 gap-2">
                {TEXT_COLORS.map((c) => (
                  <button key={c} type="button" className={cn("h-8 rounded-[8px]", chipClass(c, original, value))} style={{ background: c }} onClick={() => onPick(c)} />
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <button type="button" className="text-[14px] text-primary" onClick={() => setCustom(true)}>自定义</button>
                {!BLACKS.includes(value) && !TEXT_COLORS.includes(value) ? (
                  <span className={cn("size-6 rounded-[6px]", chipClass(value, original, value))} style={{ background: value }} />
                ) : null}
              </div>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}

function Hue({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const from = (x: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const t = r.width <= 0 ? 0 : (x - r.left) / r.width;
    onChange(Math.round(Math.min(1, Math.max(0, t)) * 360));
  };
  return (
    <div>
      <div className="mb-1 text-[13px] text-muted">色相</div>
      <div
        ref={ref}
        className="relative h-8 touch-none rounded-[8px]"
        style={{ background: "linear-gradient(90deg,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00)" }}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          from(e.clientX);
        }}
        onPointerMove={(e) => {
          if (e.currentTarget.hasPointerCapture(e.pointerId)) from(e.clientX);
        }}
      >
        <span className="absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow" style={{ left: `${(value / 360) * 100}%`, background: hsvToHex(value, 1, 1) }} />
      </div>
    </div>
  );
}

function clampCover(scale: number, ox: number, oy: number, sMin: number, sMax: number, fw: number, fh: number, natW: number, natH: number) {
  const s = Math.min(sMax, Math.max(sMin, scale || sMin));
  const maxX = Math.max(0, (natW * s - fw) / 2);
  const maxY = Math.max(0, (natH * s - fh) / 2);
  return { scale: s, ox: Math.min(maxX, Math.max(-maxX, ox)), oy: Math.min(maxY, Math.max(-maxY, oy)) };
}

function CoverCrop({ src, onCancel, onDone }: { src: string; onCancel: () => void; onDone: (blob: Blob) => void }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [box, setBox] = useState({ w: 0, h: 0 });
  const [nat, setNat] = useState({ w: 0, h: 0 });
  const [view, setView] = useState<{ scale: number; ox: number; oy: number } | null>(null);
  const [busy, setBusy] = useState(false);
  const frameW = Math.min(box.w * 0.72, box.h * 0.72 * (9 / 16));
  const frameH = frameW * (16 / 9);
  const ready = nat.w > 0 && frameW > 8;
  const sMin = ready ? Math.max(frameW / nat.w, frameH / nat.h) : 1;
  const sMax = sMin * 4;
  const shown = view ?? { scale: sMin, ox: 0, oy: 0 };
  const viewRef = useRef(shown);
  viewRef.current = shown;
  const geo = useRef({ sMin, sMax, frameW, frameH, natW: nat.w, natH: nat.h });
  geo.current = { sMin, sMax, frameW, frameH, natW: nat.w, natH: nat.h };
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const gesture = useRef<{ ox: number; oy: number; scale: number; x: number; y: number; dist: number; mx: number; my: number } | null>(null);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const measure = () => setBox({ w: el.clientWidth, h: el.clientHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const apply = (scale: number, ox: number, oy: number) => {
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
      gesture.current = { ox: v.ox, oy: v.oy, scale: v.scale, x: 0, y: 0, dist, mx: (pts[0].x + pts[1].x) / 2, my: (pts[0].y + pts[1].y) / 2 };
    } else if (pts.length === 1) {
      gesture.current = { ox: v.ox, oy: v.oy, scale: v.scale, x: pts[0].x, y: pts[0].y, dist: 0, mx: pts[0].x, my: pts[0].y };
    } else gesture.current = null;
  };
  const onPointerDown = (e: PE<HTMLDivElement>) => {
    if (!ready) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    begin();
  };
  const onPointerMove = (e: PE<HTMLDivElement>) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
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
  const onPointerUp = (e: PE<HTMLDivElement>) => {
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
    }, "image/jpeg", 0.86);
  };
  const dw = nat.w * shown.scale;
  const dh = nat.h * shown.scale;
  const cx = box.w / 2;
  const cy = box.h / 2;
  return createPortal(
    <div className="fixed inset-0 z-[100] flex flex-col bg-black text-white">
      <div className="flex shrink-0 items-center px-1 pt-[max(8px,env(safe-area-inset-top))]">
        <button type="button" className="grid size-11 place-items-center" aria-label="返回" onClick={onCancel}>
          <ChevronLeft className="size-6" />
        </button>
        <div className="flex-1 text-center text-[16px]">裁成竖图</div>
        <div className="size-11" />
      </div>
      <div
        ref={stageRef}
        className="relative min-h-0 flex-1 touch-none overflow-hidden"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <img
          ref={imgRef}
          src={src}
          alt=""
          draggable={false}
          onLoad={(e) => setNat({ w: e.currentTarget.naturalWidth, h: e.currentTarget.naturalHeight })}
          onError={onCancel}
          className="absolute max-w-none select-none"
          style={{ width: dw || undefined, height: dh || undefined, left: cx + shown.ox - dw / 2, top: cy + shown.oy - dh / 2, opacity: ready ? 1 : 0 }}
        />
        {ready ? (
          <div
            className="pointer-events-none absolute border border-white/90"
            style={{ width: frameW, height: frameH, left: cx - frameW / 2, top: cy - frameH / 2, boxShadow: "0 0 0 9999px rgba(0,0,0,0.55)" }}
          />
        ) : null}
      </div>
      <div className="flex shrink-0 justify-end px-4 pb-[max(16px,env(safe-area-inset-bottom))] pt-3">
        <button type="button" className="rounded-full bg-primary px-6 py-2 text-[15px] text-on-primary disabled:opacity-40" disabled={!ready || busy} onClick={finish}>
          完成
        </button>
      </div>
    </div>,
    document.body,
  );
}
