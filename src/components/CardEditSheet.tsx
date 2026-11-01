import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { DEFAULT_STATUS_BAR, PLACEHOLDERS, emptyCharacter } from "@/lib/constants";
import { getImage } from "@/lib/idb";
import { compressRef } from "@/lib/ref-image";
import { saveBlob, useApp } from "@/lib/store";
import type { Character, CharacterCard } from "@/lib/types";
import { Card, ExpandSelect, FieldLabel, Switch, TextArea, TextInput } from "./ui-kit";
import { CustomAvatar, Extras, LookRef } from "./RoleEditor";
import { ChatModelSelect } from "./ModelSelect";

export function CardEditSheet() {
  const id = useApp((s) => s.ui.editCardId);
  const [draft, setDraft] = useState<CharacterCard | null>(null);
  const [charSel, setCharSel] = useState(0);
  const opened = useRef<string | null>(null);
  const openedName = useRef("");

  useEffect(() => {
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

  const patchChar = (charId: string, p: Partial<Character>) => {
    setDraft((d) =>
      d ? { ...d, characters: d.characters.map((c) => (c.id === charId ? { ...c, ...p } : c)) } : d,
    );
  };

  const save = () => {
    const name = draft.name.trim() || openedName.current;
    useApp.getState().updateCard({ ...draft, name });
    close();
  };

  return (
    <div className="absolute inset-0 z-[60] flex justify-center px-4 py-8">
      <div className="absolute inset-0 bg-overlay/40" />
      <div className="relative z-10 flex min-h-0 w-full max-w-md flex-col overflow-hidden rounded-[28px] bg-bg shadow-2xl">
        <div className="flex shrink-0 items-center gap-2 px-5 pb-3 pt-5">
          <h2 className="text-[20px] font-semibold">修改</h2>
          <button type="button" className="ml-auto text-[15px] text-primary" onClick={save}>
            保存
          </button>
          <button type="button" className="grid size-8 place-items-center" onClick={close} aria-label="关闭">
            <X className="size-5" />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-8 scroll-hide">
          <Card className="mb-3">
            <FieldLabel hint="列表里显示的名字。和下面角色的名字不是同一个。">卡名</FieldLabel>
            <TextInput
              value={draft.name}
              placeholder="卡名"
              onChange={(e) => setDraft((d) => (d ? { ...d, name: e.target.value } : d))}
            />
          </Card>

          <div className="mb-4 flex items-center gap-2 text-[14px]">
            <label className="flex items-center gap-2">
              <span
                className={`grid size-5 place-items-center rounded-full border ${draft.isMulti ? "border-primary bg-primary text-on-primary" : "border-line-strong bg-card"}`}
              >
                {draft.isMulti && <span className="text-[11px] leading-none">✓</span>}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={draft.isMulti}
                onChange={(e) => {
                  const on = e.target.checked;
                  setCharSel(0);
                  setDraft((d) => {
                    if (!d) return d;
                    const characters = on
                      ? d.characters.length >= 2
                        ? d.characters
                        : [...d.characters, emptyCharacter(d.characters.length + 1)]
                      : [d.characters[0] ?? emptyCharacter(1)];
                    return { ...d, isMulti: on, characters };
                  });
                }}
              />
              多人
            </label>
            {draft.isMulti && (
              <span className="ml-auto inline-flex items-center gap-1 text-[13px] text-muted">
                人数
                <span className="inline-flex items-center rounded-full border border-line bg-card">
                  <button
                    type="button"
                    className="px-2 py-1"
                    onClick={() => {
                      setDraft((d) =>
                        d ? { ...d, characters: [...d.characters, emptyCharacter(d.characters.length + 1)] } : d,
                      );
                    }}
                  >
                    <ChevronUp className="size-3.5" />
                  </button>
                  <span className="px-2 text-ink">{draft.characters.length}</span>
                  <button
                    type="button"
                    className="px-2 py-1"
                    disabled={draft.characters.length <= 2}
                    onClick={() => {
                      setCharSel(0);
                      setDraft((d) => (d ? { ...d, characters: d.characters.slice(0, -1) } : d));
                    }}
                  >
                    <ChevronDown className="size-3.5" />
                  </button>
                </span>
              </span>
            )}
          </div>

          <Card className="mb-3">
            <FieldLabel>AI 版本</FieldLabel>
            <ChatModelSelect align="left" className="w-full rounded-full border border-line bg-card" />
            <CustomAvatar
              blobId={draft.customAvatarBlobId}
              onId={(customAvatarBlobId) => setDraft((d) => (d ? { ...d, customAvatarBlobId } : d))}
              onClear={() => setDraft((d) => (d ? { ...d, customAvatarBlobId: "" } : d))}
            />
          </Card>

          {!draft.isMulti && char ? (
            <PlainField
              label="名字"
              hint="可空，让AI起"
              value={char.name}
              placeholder={PLACEHOLDERS.name}
              single
              onChange={(v) => patchChar(char.id, { name: v })}
            />
          ) : null}

          <PlainField
            label="要求总览"
            hint="可空。写了就是最高优先。例如：回复尽量详尽生动，不要简略。"
            value={draft.overview}
            placeholder={PLACEHOLDERS.overview}
            onChange={(overview) => setDraft((d) => (d ? { ...d, overview } : d))}
          />

          {draft.isMulti && (
            <Card className="mb-3">
              <FieldLabel>角色选择</FieldLabel>
              <ExpandSelect
                value={String(Math.min(charSel, Math.max(0, draft.characters.length - 1)))}
                options={draft.characters.map((c, i) => ({
                  id: String(i),
                  label: `角色${i + 1}${c.name ? ":" + c.name : ""}`,
                }))}
                onChange={(next) => setCharSel(Number(next))}
                align="left"
              />
            </Card>
          )}

          {char && (
            <div className={draft.isMulti ? "mb-3 rounded-[22px] border border-line/80 bg-card/50 p-1" : ""}>
              {draft.isMulti && (
                <PlainField
                  label="名字"
                  hint="可空，让AI起"
                  value={char.name}
                  placeholder={PLACEHOLDERS.name}
                  single
                  onChange={(v) => patchChar(char.id, { name: v })}
                />
              )}
              <PlainField
                label="人设"
                hint="她是谁：性格、职业或身份、口头禅、和我的关系……外貌请写在下面那栏。"
                value={char.persona}
                placeholder={PLACEHOLDERS.persona}
                grow={Boolean(char.personaVoices)}
                titleExtra={
                  <button
                    type="button"
                    className={`rounded-full border px-2 py-0.5 text-[11px] leading-none transition ${
                      char.personaVoices
                        ? "border-primary bg-primary text-on-primary"
                        : "border-primary bg-transparent text-primary"
                    }`}
                    onClick={() => patchChar(char.id, { personaVoices: !char.personaVoices })}
                  >
                    声部
                  </button>
                }
                onChange={(v) => patchChar(char.id, { persona: v })}
              />
              {draft.isMulti ? (
                <div className="mb-3 px-1">
                  <CustomAvatar
                    blobId={char.wechatAvatarBlobId}
                    label="自定义微信头像。不上传就用主聊天的头像"
                    onId={(wechatAvatarBlobId) => patchChar(char.id, { wechatAvatarBlobId })}
                    onClear={() => patchChar(char.id, { wechatAvatarBlobId: "" })}
                  />
                </div>
              ) : null}
              <PlainField
                label="说话方式"
                hint="语气、口癖、人称、句子长短。例如：软软的、会把「……」拖长。"
                value={char.speech}
                placeholder={PLACEHOLDERS.speech}
                onChange={(v) => patchChar(char.id, { speech: v })}
              />
              <LookRef
                blobId={char.lookBlobId}
                onPick={async (file) => {
                  const blob = await compressRef(file, 768, 0.82);
                  const lookBlobId = await saveBlob(blob);
                  patchChar(char.id, { lookBlobId });
                }}
                onBlob={async (blobId) => {
                  const blob = await getImage(blobId);
                  if (!blob) {
                    useApp.getState().toast("这张图已经不在了");
                    return;
                  }
                  const lookBlobId = await saveBlob(blob);
                  patchChar(char.id, { lookBlobId });
                }}
                onClear={() => patchChar(char.id, { lookBlobId: "" })}
              />
              <PlainField
                label="外貌备忘"
                hint="用生图提示词书写。发型发色瞳色体型固定服装写这里。其他栏不用再写外貌。"
                value={char.appearance}
                placeholder={PLACEHOLDERS.appearance}
                onChange={(v) => patchChar(char.id, { appearance: v })}
              />
            </div>
          )}

          <PlainField
            label="开场场景"
            hint="现在在哪里、在做什么、气氛如何。"
            value={draft.opening}
            placeholder={PLACEHOLDERS.opening}
            onChange={(opening) => setDraft((d) => (d ? { ...d, opening } : d))}
          />

          <Card className="mb-3">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <div className="text-[13px] font-medium">状态栏</div>
                <div className="mt-0.5 text-[11px] text-muted">
                  关掉就折叠。打开后，每句回复末尾都会更新这份状态。开启内容按固定骨架，可改冒号后的描述。
                </div>
              </div>
              <Switch
                on={draft.statusBarOn}
                onChange={(v) =>
                  setDraft((d) =>
                    d
                      ? {
                          ...d,
                          statusBarOn: v,
                          statusBar: d.statusBar?.trim() ? d.statusBar : DEFAULT_STATUS_BAR,
                        }
                      : d,
                  )
                }
              />
            </div>
            {draft.statusBarOn && (
              <TextArea
                className="min-h-[200px] font-mono text-[12px]"
                value={draft.statusBar}
                onChange={(e) => setDraft((d) => (d ? { ...d, statusBar: e.target.value } : d))}
              />
            )}
          </Card>

          <Extras extras={draft.extras} onChange={(extras) => setDraft((d) => (d ? { ...d, extras } : d))} />
        </div>
      </div>
    </div>
  );
}

function PlainField({
  label,
  hint,
  value,
  placeholder,
  onChange,
  single,
  titleExtra,
  grow,
}: {
  label: string;
  hint?: string;
  value: string;
  placeholder?: string;
  onChange: (v: string) => void;
  single?: boolean;
  titleExtra?: ReactNode;
  grow?: boolean;
}) {
  return (
    <Card className="mb-3">
      <FieldLabel hint={hint}>
        <span className="inline-flex items-center gap-1.5">
          {label}
          {titleExtra}
        </span>
      </FieldLabel>
      {single ? (
        <TextInput value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <TextArea
          value={value}
          placeholder={placeholder}
          rows={grow ? 12 : 5}
          className={grow ? "min-h-[calc(1.5rem+12*1.625em)]" : "min-h-[calc(1.5rem+5*1.625em)]"}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </Card>
  );
}
