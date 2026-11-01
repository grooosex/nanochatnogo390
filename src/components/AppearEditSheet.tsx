import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { useApp } from "@/lib/store";
import type { AppearancePreset } from "@/lib/types";
import { Card, FieldLabel, TextArea, TextInput } from "./ui-kit";

export function AppearEditSheet() {
  const id = useApp((s) => s.ui.editAppearId);
  const [draft, setDraft] = useState<AppearancePreset | null>(null);
  const opened = useRef<string | null>(null);
  const openedName = useRef("");

  useEffect(() => {
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

  return (
    <div className="absolute inset-0 z-[70] flex justify-center px-4 py-8">
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
            <FieldLabel hint="列表里显示的名字。">名字</FieldLabel>
            <TextInput
              value={draft.name}
              placeholder="名字"
              onChange={(e) => setDraft((d) => (d ? { ...d, name: e.target.value } : d))}
            />
          </Card>
          <Card className="mb-3">
            <FieldLabel hint="保存后不会改你现在参数里已经写着的词。要点「应用」才换上。">正面提示词</FieldLabel>
            <TextArea
              value={draft.prompt}
              rows={12}
              className="min-h-[calc(1.5rem+12*1.625em)]"
              onChange={(e) => setDraft((d) => (d ? { ...d, prompt: e.target.value } : d))}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
