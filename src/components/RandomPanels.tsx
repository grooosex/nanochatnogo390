import { useEffect, useRef, useState, type PointerEvent as PE, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, Pencil, Plus, Trash2, X } from "lucide-react";
import { useApp } from "@/lib/store";
import {
  badModuleName,
  bankSwitch,
  deleteRandomGroup,
  duplicateRandomModule,
  emptyBank,
  groupDescendants,
  jumpSeq,
  moduleRounds,
  moduleTag,
  orderedGroups,
  orderedModules,
  reviveAppearanceModule,
  seqTurnItem,
  setModulePick,
  setModuleRounds,
  type RandomBank,
  type RandomItem,
  type RandomModule,
} from "@/lib/random-prompt";
import { autoScrollNearEdge, cn, indexFromY, moveId, nearestScroller, uid } from "@/lib/utils";
import { Switch, TextArea, TextInput } from "./ui-kit";
import { ModuleList, PoolTree } from "./random-list";

function Sheet({
  title,
  extra,
  onClose,
  z,
  children,
}: {
  title: string;
  extra?: ReactNode;
  onClose: () => void;
  z: number;
  children: ReactNode;
}) {
  return createPortal(
    <div className="fixed inset-0 flex justify-center px-4 py-8" style={{ zIndex: z }}>
      <button type="button" className="absolute inset-0 bg-overlay/40" onClick={onClose} aria-label="关闭" />
      <div className="relative z-10 flex h-full min-h-0 w-full max-w-md flex-col overflow-hidden rounded-[28px] bg-bg text-ink shadow-2xl">
        <div className="flex shrink-0 items-center gap-2 px-5 pb-3 pt-5">
          <h2 className="min-w-0 flex-1 truncate text-[20px] font-semibold">{title}</h2>
          {extra}
          <button type="button" className="grid size-9 shrink-0 place-items-center" onClick={onClose} aria-label="关闭">
            <X className="size-5" />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-6 scroll-thin">{children}</div>
      </div>
    </div>,
    document.body,
  );
}

function saveBank(next: RandomBank) {
  useApp.getState().setSettings({ random: next });
}

function GripBars() {
  return (
    <span className="flex flex-col items-center justify-center gap-[3.5px] text-current" aria-hidden>
      <span className="h-[2px] w-4 rounded-full bg-current" />
      <span className="h-[2px] w-4 rounded-full bg-current" />
      <span className="h-[2px] w-4 rounded-full bg-current" />
    </span>
  );
}

function SortActions({ onSave, onCancel }: { onSave: () => void; onCancel: () => void }) {
  return (
    <div className="flex shrink-0 items-center gap-3 text-[14px]">
      <button type="button" className="text-muted" onClick={onCancel}>
        取消
      </button>
      <button type="button" className="font-medium text-primary" onClick={onSave}>
        保存
      </button>
    </div>
  );
}

function useListSort(sourceIds: string[], enabled: boolean) {
  const [sorting, setSorting] = useState(false);
  const [order, setOrder] = useState<string[] | null>(null);
  const [dragId, setDragId] = useState<string | null>(null);
  const [holdId, setHoldId] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const idsRef = useRef<string[]>([]);
  const dragRef = useRef<string | null>(null);
  const sortingRef = useRef(false);
  const press = useRef<{ y: number } | null>(null);
  const timer = useRef(0);
  const lastY = useRef(0);
  const raf = useRef(0);
  const sourceKey = sourceIds.join("\0");

  useEffect(() => {
    if (!sortingRef.current) idsRef.current = sourceIds.slice();
  }, [sourceKey, sourceIds]);

  useEffect(() => {
    if (!sorting) return;
    const applyY = (y: number) => {
      const id = dragRef.current;
      if (!id) return;
      const rows = listRef.current?.querySelectorAll<HTMLElement>("[data-sort-id]");
      if (!rows?.length) return;
      const next = moveId(idsRef.current, id, indexFromY(rows, y));
      if (next.join("\0") === idsRef.current.join("\0")) return;
      idsRef.current = next;
      setOrder(next);
    };
    const lockScroller = (on: boolean) => {
      const el = nearestScroller(listRef.current);
      if (el) el.style.touchAction = on ? "none" : "";
    };
    const tick = () => {
      raf.current = 0;
      if (!dragRef.current) return;
      const scroller = nearestScroller(listRef.current);
      const dy = scroller ? autoScrollNearEdge(scroller, lastY.current) : 0;
      applyY(lastY.current);
      if (dy) raf.current = requestAnimationFrame(tick);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragRef.current) return;
      e.preventDefault();
      lastY.current = e.clientY;
      const scroller = nearestScroller(listRef.current);
      const dy = scroller ? autoScrollNearEdge(scroller, e.clientY) : 0;
      applyY(e.clientY);
      if (dy && !raf.current) raf.current = requestAnimationFrame(tick);
    };
    const onUp = () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = 0;
      lockScroller(false);
      if (!dragRef.current) return;
      dragRef.current = null;
      setDragId(null);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!dragRef.current) return;
      e.preventDefault();
    };
    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      window.removeEventListener("touchmove", onTouchMove);
      if (raf.current) cancelAnimationFrame(raf.current);
      lockScroller(false);
    };
  }, [sorting]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const clearPress = () => {
    window.clearTimeout(timer.current);
    press.current = null;
    setHoldId(null);
  };

  const onRowDown = (e: PE<HTMLElement>, id: string) => {
    if (!enabled || sortingRef.current) return;
    if (sourceIds.length < 2) return;
    if ((e.target as HTMLElement).closest("[data-row-action]")) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;
    clearPress();
    press.current = { y: e.clientY };
    setHoldId(id);
    const end = () => {
      window.removeEventListener("pointerup", end);
      window.removeEventListener("pointercancel", end);
      if (!sortingRef.current) clearPress();
    };
    window.addEventListener("pointerup", end);
    window.addEventListener("pointercancel", end);
    timer.current = window.setTimeout(() => {
      press.current = null;
      const next = sourceIds.slice();
      idsRef.current = next;
      sortingRef.current = true;
      setOrder(next);
      setSorting(true);
      setHoldId(null);
    }, 400);
  };

  const onRowMove = (e: PE<HTMLElement>) => {
    if (sortingRef.current || !press.current) return;
    if (Math.abs(e.clientY - press.current.y) > 12) clearPress();
  };

  const onGripDown = (e: PE<HTMLElement>, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    dragRef.current = id;
    setDragId(id);
    lastY.current = e.clientY;
    const el = nearestScroller(listRef.current);
    if (el) el.style.touchAction = "none";
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* */
    }
  };

  const cancel = () => {
    window.clearTimeout(timer.current);
    sortingRef.current = false;
    dragRef.current = null;
    const el = nearestScroller(listRef.current);
    if (el) el.style.touchAction = "";
    setSorting(false);
    setOrder(null);
    setDragId(null);
    setHoldId(null);
  };

  const savedOrder = () => (idsRef.current.length ? idsRef.current.slice() : sourceIds.slice());

  return {
    sorting,
    order: order ?? sourceIds,
    dragId,
    holdId,
    listRef,
    onRowDown,
    onRowMove,
    onGripDown,
    cancel,
    savedOrder,
  };
}

export function RandomSettings({
  onClose,
  onInsert,
}: {
  onClose: () => void;
  onInsert: (piece: string) => void;
}) {
  const bank = useApp((s) => s.settings.random) ?? emptyBank();
  const appearances = useApp((s) => s.appearances);
  const revived = useRef(false);
  const [tab, setTab] = useState<"mods" | "quick">("mods");
  const [editing, setEditing] = useState<RandomModule | null>(null);
  const [creating, setCreating] = useState(false);
  const [sorting, setSorting] = useState(false);
  const sortDo = useRef({ save: () => {}, cancel: () => {} });
  useEffect(() => {
    if (revived.current || !appearances.length) return;
    revived.current = true;
    const cur = useApp.getState().settings.random ?? emptyBank();
    const next = reviveAppearanceModule(cur, appearances);
    if (next !== cur) saveBank(next);
  }, [appearances]);
  return (
    <>
      <Sheet
        z={60}
        title="随机设置"
        onClose={onClose}
        extra={
          sorting ? (
            <SortActions onCancel={() => sortDo.current.cancel()} onSave={() => sortDo.current.save()} />
          ) : (
            <Switch label="随机模式" on={bank.enabled} onChange={(v) => saveBank(bankSwitch(bank, v))} />
          )
        }
      >
        <div className="mb-4 flex gap-6 text-[15px]">
          <button type="button" className={tab === "mods" ? "font-medium text-ink" : "text-muted"} onClick={() => { if (!sorting) setTab("mods"); }}>
            模块管理
          </button>
          <button type="button" className={tab === "quick" ? "font-medium text-ink" : "text-muted"} onClick={() => { if (!sorting) setTab("quick"); }}>
            快速配置
          </button>
        </div>
        {tab === "mods" ? (
          <ModuleList
            bank={bank}
            sortDo={sortDo}
            onSorting={setSorting}
            onEdit={setEditing}
            onCreate={() => setCreating(true)}
            onInsert={onInsert}
          />
        ) : (
          <QuickPick bank={bank} onInsert={onInsert} />
        )}
      </Sheet>
      {creating && (
        <ModuleDraft
          modules={bank.modules}
          onClose={() => setCreating(false)}
          onSave={(mod) => {
            const cur = useApp.getState().settings.random ?? emptyBank();
            const siblings = cur.modules.filter((m) => (m.groupId ?? null) === null);
            const order = siblings.reduce((n, m) => Math.max(n, m.order ?? 0), -1) + 1;
            saveBank({ ...cur, modules: [...cur.modules, { ...mod, groupId: null, order }] });
            setCreating(false);
          }}
        />
      )}
      {editing && (
        <ModuleEditor
          module={bank.modules.find((m) => m.id === editing.id) ?? editing}
          modules={bank.modules}
          onClose={() => setEditing(null)}
          onChange={(next) => saveBank({ ...bank, modules: bank.modules.map((m) => (m.id === next.id ? next : m)) })}
        />
      )}
    </>
  );
}

function SeqTurn({ module, onPick }: { module: RandomModule; onPick: (id: string) => void }) {
  const [open, setOpen] = useState(false);
  const current = seqTurnItem(module);
  const pool = module.items.filter((item) => item.enabled);
  return (
    <div className="mt-4">
      <div className="mb-1 text-[13px] text-muted">当前轮到</div>
      <button
        type="button"
        className="flex h-11 w-full items-center gap-2 rounded-full border border-line bg-card px-4 text-left text-[14px]"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="min-w-0 flex-1 truncate">{current ? current.name || "未命名" : "没有选中的项"}</span>
        <ChevronDown className={`size-4 shrink-0 text-muted transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div
          className={`mt-2 overflow-y-auto overscroll-contain rounded-[16px] border border-line bg-card scroll-thin ${pool.length > 8 ? "max-h-[22rem]" : ""}`}
        >
          {pool.length === 0 && <p className="flex h-11 items-center px-4 text-[14px] text-muted">没有选中的项</p>}
          {pool.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`flex h-11 w-full items-center px-4 text-left text-[14px] ${item.id === current?.id ? "text-primary" : "text-ink"}`}
              onClick={() => {
                onPick(item.id);
                setOpen(false);
              }}
            >
              <span className="min-w-0 flex-1 truncate">{item.name || "未命名"}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ModuleEditor({
  module,
  modules,
  onClose,
  onChange,
}: {
  module: RandomModule;
  modules: RandomModule[];
  onClose: () => void;
  onChange: (m: RandomModule) => void;
}) {
  const [item, setItem] = useState<RandomItem | "new" | null>(null);
  const [name, setName] = useState(module.name);
  const linked = module.linked === "appearances";
  const sort = useListSort(module.items.map((item) => item.id), !linked);
  const allOn = module.items.length > 0 && module.items.every((item) => item.enabled);
  const allOff = module.items.length > 0 && module.items.every((item) => !item.enabled);
  const setAll = (enabled: boolean) => onChange({ ...module, items: module.items.map((item) => ({ ...item, enabled })) });
  const shown = sort.order
    .map((id) => module.items.find((item) => item.id === id))
    .filter((item): item is RandomItem => !!item);
  useEffect(() => setName(module.name), [module.name]);
  return (
    <>
      <Sheet
        z={64}
        title="编辑模块"
        onClose={onClose}
        extra={
          sort.sorting ? (
            <SortActions
              onCancel={() => sort.cancel()}
              onSave={() => {
                const map = new Map(module.items.map((item) => [item.id, item]));
                const items = sort.savedOrder().map((id) => map.get(id)).filter((item): item is RandomItem => !!item);
                for (const item of module.items) if (!items.some((x) => x.id === item.id)) items.push(item);
                onChange({ ...module, items });
                sort.cancel();
              }}
            />
          ) : (
            <div className="flex shrink-0 items-center gap-1 text-[13px]">
              <button type="button" className={allOn ? "text-primary" : "text-muted"} onClick={() => setAll(true)}>
                全选
              </button>
              <button type="button" className={allOff ? "text-primary" : "text-muted"} onClick={() => setAll(false)}>
                全不选
              </button>
            </div>
          )
        }
      >
        <label className="mb-1 block text-[13px] text-muted">名称</label>
        <TextInput
          value={name}
          disabled={linked}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => {
            if (linked) {
              setName(module.name);
              return;
            }
            const err = badModuleName(name, modules, module.id);
            if (err) {
              useApp.getState().toast(err);
              setName(module.name);
              return;
            }
            if (name.trim() !== module.name) onChange({ ...module, name: name.trim() });
          }}
        />
        {linked && <p className="mt-1 text-[12px] leading-5 text-muted">这个模块跟着角色选择。名字不能改，加减角色也请到角色选择里。</p>}
        {module.pick === "seq" && <SeqTurn module={module} onPick={(id) => onChange(jumpSeq(module, id))} />}
        <ItemList
          items={shown}
          sorting={sort.sorting}
          dragId={sort.dragId}
          holdId={sort.holdId}
          listRef={sort.listRef}
          onRowDown={sort.onRowDown}
          onRowMove={sort.onRowMove}
          onGripDown={sort.onGripDown}
          canAdd={!linked && !sort.sorting}
          canDelete={!linked}
          onAdd={() => setItem("new")}
          onToggle={(it) => onChange({ ...module, items: module.items.map((x) => (x.id === it.id ? { ...x, enabled: !x.enabled } : x)) })}
          onEdit={setItem}
          onDelete={(it) =>
            useApp.getState().setUI({
              confirm: {
                title: "删除这一项",
                body: `删除「${it.name || "未命名"}」？`,
                danger: true,
                onOk: () => onChange({ ...module, items: module.items.filter((x) => x.id !== it.id) }),
              },
            })
          }
        />
      </Sheet>
      {item && (
        <ItemEditor
          item={item === "new" ? null : item}
          onClose={() => setItem(null)}
          onSave={(next) => {
            const items = item === "new" ? [...module.items, next] : module.items.map((x) => (x.id === next.id ? next : x));
            onChange({ ...module, items });
            setItem(null);
          }}
        />
      )}
    </>
  );
}

function ModuleDraft({
  modules,
  onClose,
  onSave,
}: {
  modules: RandomModule[];
  onClose: () => void;
  onSave: (m: RandomModule) => void;
}) {
  const [draft, setDraft] = useState<RandomModule>({
    id: uid("rm_"),
    name: "",
    pick: "random",
    items: [],
    nextId: null,
  });
  const [item, setItem] = useState<RandomItem | "new" | null>(null);
  return (
    <>
      <Sheet
        z={64}
        title="添加模块"
        onClose={onClose}
        extra={
          <button
            type="button"
            className="text-[14px] text-primary"
            onClick={() => {
              const err = badModuleName(draft.name, modules);
              if (err) {
                useApp.getState().toast(err);
                return;
              }
              onSave({ ...draft, name: draft.name.trim() });
            }}
          >
            保存
          </button>
        }
      >
        <label className="mb-1 block text-[13px] text-muted">名称</label>
        <TextInput value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} />
        <ItemList
          items={draft.items}
          canAdd
          canDelete
          onAdd={() => setItem("new")}
          onToggle={(it) => setDraft({ ...draft, items: draft.items.map((x) => (x.id === it.id ? { ...x, enabled: !x.enabled } : x)) })}
          onEdit={setItem}
          onDelete={(it) =>
            useApp.getState().setUI({
              confirm: {
                title: "删除这一项",
                body: `删除「${it.name || "未命名"}」？`,
                danger: true,
                onOk: () => setDraft({ ...draft, items: draft.items.filter((x) => x.id !== it.id) }),
              },
            })
          }
        />
      </Sheet>
      {item && (
        <ItemEditor
          item={item === "new" ? null : item}
          onClose={() => setItem(null)}
          onSave={(next) => {
            const items = item === "new" ? [...draft.items, next] : draft.items.map((x) => (x.id === next.id ? next : x));
            setDraft({ ...draft, items });
            setItem(null);
          }}
        />
      )}
    </>
  );
}

function ItemList({
  items,
  canAdd = true,
  canDelete = true,
  sorting = false,
  dragId = null,
  holdId = null,
  listRef,
  onRowDown,
  onRowMove,
  onGripDown,
  onAdd,
  onToggle,
  onEdit,
  onDelete,
}: {
  items: RandomItem[];
  canAdd?: boolean;
  canDelete?: boolean;
  sorting?: boolean;
  dragId?: string | null;
  holdId?: string | null;
  listRef?: React.Ref<HTMLDivElement>;
  onRowDown?: (e: PE<HTMLElement>, id: string) => void;
  onRowMove?: (e: PE<HTMLElement>) => void;
  onGripDown?: (e: PE<HTMLElement>, id: string) => void;
  onAdd: () => void;
  onToggle: (item: RandomItem) => void;
  onEdit: (item: RandomItem) => void;
  onDelete: (item: RandomItem) => void;
}) {
  return (
    <div className="mt-4" ref={listRef}>
      {canAdd && (
        <button
          type="button"
          className="mb-3 flex h-11 w-full items-center justify-center gap-1 rounded-full border border-line text-[14px]"
          onClick={onAdd}
        >
          <Plus className="size-4" /> 新增
        </button>
      )}
      {items.map((item) => (
        <div
          key={item.id}
          data-sort-id={item.id}
          className={cn(
            "mb-2 flex items-center gap-2 rounded-[16px] border border-line px-3 py-2 select-none hold-none",
            dragId === item.id && "bg-ink/15",
            !sorting && holdId === item.id && "bg-ink/8",
          )}
          style={{ touchAction: sorting ? "pan-y" : "manipulation" }}
          onPointerDown={(e) => onRowDown?.(e, item.id)}
          onPointerMove={onRowMove}
          onContextMenu={(e) => e.preventDefault()}
        >
          {!sorting && (
            <button
              type="button"
              data-row-action
              aria-label={item.enabled ? "取消选用" : "选用"}
              className={`size-4 shrink-0 rounded-full border ${item.enabled ? "border-primary bg-primary" : "border-line-strong"}`}
              onClick={() => onToggle(item)}
            />
          )}
          <div className="min-w-0 flex-1 truncate text-[14px]">{item.name || "未命名"}</div>
          {sorting ? (
            <button
              type="button"
              className="grid size-8 shrink-0 place-items-center text-muted"
              aria-label={`拖动${item.name || "未命名"}`}
              style={{ touchAction: "none" }}
              onPointerDown={(e) => onGripDown?.(e, item.id)}
            >
              <GripBars />
            </button>
          ) : (
            <>
              {canDelete && (
                <button type="button" data-row-action className="grid size-8 place-items-center text-danger" aria-label="删除" onClick={() => onDelete(item)}>
                  <Trash2 className="size-4" />
                </button>
              )}
              <button type="button" data-row-action className="grid size-8 place-items-center text-muted" aria-label="编辑" onClick={() => onEdit(item)}>
                <Pencil className="size-4" />
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

function ItemEditor({
  item,
  onClose,
  onSave,
}: {
  item: RandomItem | null;
  onClose: () => void;
  onSave: (item: RandomItem) => void;
}) {
  const [name, setName] = useState(item?.name ?? "");
  const [content, setContent] = useState(item?.content ?? "");
  const appearances = useApp((s) => s.appearances);
  const source = item?.sourceId ? appearances.find((a) => a.id === item.sourceId) : undefined;
  const contentLocked = Boolean(item?.sourceId);
  return (
    <Sheet
      z={68}
      title={item ? "修改" : "新增"}
      onClose={onClose}
      extra={
        <button
          type="button"
          className="text-[14px] text-primary"
          onClick={() => {
            if (!name.trim() && !content.trim()) {
              useApp.getState().toast("先写名称或内容");
              return;
            }
            const nextName = name.trim();
            if (item?.sourceId && !nextName) {
              useApp.getState().toast("先写名称");
              return;
            }
            const custom = item?.sourceId ? (source ? nextName !== source.name : item.nameCustom === true) : false;
            onSave({
              id: item?.id ?? uid("ri_"),
              name: nextName,
              content: contentLocked ? (source?.prompt ?? item?.content ?? "") : content,
              enabled: item?.enabled ?? false,
              ...(item?.sourceId ? { sourceId: item.sourceId, ...(custom ? { nameCustom: true } : {}) } : {}),
            });
          }}
        >
          保存
        </button>
      }
    >
      <label className="mb-1 block text-[13px] text-muted">名称</label>
      <TextInput value={name} onChange={(e) => setName(e.target.value)} />
      <label className="mb-1 mt-4 block text-[13px] text-muted">内容</label>
      <TextArea value={contentLocked ? (source?.prompt ?? content) : content} readOnly={contentLocked} onChange={(e) => setContent(e.target.value)} />
      {contentLocked && <p className="mt-1 text-[12px] leading-5 text-muted">内容跟着角色选择，这里改不了。改名字不会写回去。</p>}
    </Sheet>
  );
}

function groupText(groups: string[][]) {
  return groups.map((g) => g.join("&")).join(", ");
}

function groupRanges(groups: string[][]) {
  const ranges: { start: number; end: number }[] = [];
  let at = 0;
  groups.forEach((g, i) => {
    if (i > 0) at += 2;
    const start = at;
    at += g.join("&").length;
    ranges.push({ start, end: at });
  });
  return ranges;
}

function hitGroups(groups: string[][], start: number, end: number, dir: "back" | "fwd") {
  const ranges = groupRanges(groups);
  if (!ranges.length) return [] as number[];
  if (start !== end) {
    return ranges.map((_, i) => i).filter((i) => ranges[i].end > start && ranges[i].start < end);
  }
  const caret = start;
  if (dir === "back") {
    for (let i = ranges.length - 1; i >= 0; i--) {
      if (caret > ranges[i].start && caret <= ranges[i].end) return [i];
      if (caret > ranges[i].end && (i === ranges.length - 1 || caret <= ranges[i + 1].start)) return [i];
    }
    return [];
  }
  for (let i = 0; i < ranges.length; i++) {
    if (caret >= ranges[i].start && caret < ranges[i].end) return [i];
    if (caret < ranges[i].start && (i === 0 || caret >= ranges[i - 1].end)) return [i];
  }
  return [];
}

function dropGroups(groups: string[][], indexes: number[]) {
  if (!indexes.length) return { next: groups, caret: 0 };
  const gone = new Set(indexes);
  const ranges = groupRanges(groups);
  const first = Math.min(...indexes);
  let prev = first - 1;
  while (prev >= 0 && gone.has(prev)) prev--;
  return {
    next: groups.filter((_, i) => !gone.has(i)),
    caret: prev >= 0 ? ranges[prev].end : 0,
  };
}

function QuickPick({ bank, onInsert }: { bank: RandomBank; onInsert: (piece: string) => void }) {
  const [picked, setPicked] = useState<string[]>([]);
  const [groups, setGroups] = useState<string[][]>([]);
  const boxRef = useRef<HTMLTextAreaElement>(null);
  const caretRef = useRef<number | null>(null);
  const delAt = useRef(0);
  const toggle = (name: string) => setPicked((cur) => (cur.includes(name) ? cur.filter((n) => n !== name) : [...cur, name]));
  const confirm = () => {
    if (!picked.length) return;
    setGroups((cur) => [...cur, picked]);
    setPicked([]);
  };
  useEffect(() => {
    const el = boxRef.current;
    const n = caretRef.current;
    if (!el || n == null) return;
    caretRef.current = null;
    el.setSelectionRange(n, n);
  }, [groups]);
  const cut = (dir: "back" | "fwd") => {
    const now = Date.now();
    if (now - delAt.current < 40) return;
    delAt.current = now;
    const el = boxRef.current;
    if (!el || !groups.length) return;
    const indexes = hitGroups(groups, el.selectionStart, el.selectionEnd, dir);
    if (!indexes.length) return;
    const dropped = dropGroups(groups, indexes);
    caretRef.current = dropped.caret;
    setGroups(dropped.next);
  };
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <div className="text-[13px] text-muted">模块池</div>
        <button type="button" className="text-[14px] text-primary" onClick={confirm}>
          确定
        </button>
      </div>
      <PoolTree bank={bank} picked={picked} onToggle={toggle} />
      <div className="mb-2 flex items-center justify-between">
        <div className="text-[13px] text-muted">已选择</div>
        <button
          type="button"
          className="text-[14px] text-primary"
          onClick={() => {
            if (!groups.length) {
              useApp.getState().toast("还没有选择");
              return;
            }
            onInsert(groups.map((g) => moduleTag(g)).join(","));
            caretRef.current = 0;
            setGroups([]);
            useApp.getState().toast("输出成功");
          }}
        >
          输出
        </button>
      </div>
      <textarea
        ref={boxRef}
        value={groupText(groups)}
        placeholder="点确定后出现在这里。退格删掉一整组。"
        className="min-h-28 w-full resize-none rounded-[16px] border border-line bg-card px-3 py-3 text-[14px] outline-none placeholder:text-muted focus:border-primary/40"
        onChange={() => undefined}
        onPaste={(e) => e.preventDefault()}
        onKeyDown={(e) => {
          if (e.key !== "Backspace" && e.key !== "Delete") return;
          e.preventDefault();
          cut(e.key === "Backspace" ? "back" : "fwd");
        }}
        onBeforeInput={(e) => {
          const kind = (e.nativeEvent as InputEvent).inputType || "";
          if (kind === "deleteContentBackward" || kind === "deleteContentForward" || kind === "deleteByCut") {
            e.preventDefault();
            cut(kind === "deleteContentForward" ? "fwd" : "back");
            return;
          }
          e.preventDefault();
        }}
      />
    </div>
  );
}
