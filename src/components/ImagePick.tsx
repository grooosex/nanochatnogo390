import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Clock, Folder, Image as ImageIcon, MessageCircle, Star } from "lucide-react";
import { getImage, imageUrl } from "@/lib/idb";
import { isImageFile } from "@/lib/ref-image";
import { useApp } from "@/lib/store";
import type { FavGroup, ImageParams } from "@/lib/types";
import { sortHistoryNewestFirst } from "@/lib/utils";

export type StoredPick = {
  blobId: string;
  params: ImageParams;
  seed?: number;
};

export function ImagePick({
  onFile,
  onFiles,
  onBlob,
  onBlobs,
  onStored,
  onWechat,
  multiple = false,
  render,
}: {
  onFile: (file: File) => void;
  onFiles?: (files: File[]) => void;
  onBlob?: (blobId: string) => void | Promise<void>;
  onBlobs?: (blobIds: string[]) => void | Promise<void>;
  onStored?: (pick: StoredPick) => void;
  onWechat?: () => void;
  multiple?: boolean;
  render: (open: () => void) => ReactNode;
}) {
  const album = useRef<HTMLInputElement>(null);
  const file = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState<"menu" | "hist" | "fav" | null>(null);

  const take = (list: FileList | null) => {
    const files = [...(list ?? [])];
    if (!files.length) return;
    if (multiple && onFiles) {
      const images = files.filter(isImageFile);
      if (!images.length) {
        useApp.getState().toast("请选择图片");
        return;
      }
      if (images.length < files.length) useApp.getState().toast("已跳过不是图片的文件");
      onFiles(images);
      return;
    }
    const picked = files[0];
    if (!isImageFile(picked)) {
      useApp.getState().toast("请选择图片");
      return;
    }
    onFile(picked);
  };

  const close = () => setOpen(null);

  return (
    <>
      {render(() => setOpen("menu"))}
      <input
        ref={album}
        type="file"
        accept="image/*"
        multiple={multiple}
        className="hidden"
        onChange={(e) => {
          take(e.target.files);
          e.target.value = "";
        }}
      />
      <input
        ref={file}
        type="file"
        accept="*/*"
        multiple={multiple}
        className="hidden"
        onChange={(e) => {
          take(e.target.files);
          e.target.value = "";
        }}
      />
      {open === "menu"
        ? createPortal(
            <div className="fixed inset-0 z-[90] flex items-end justify-center">
              <button type="button" className="absolute inset-0 bg-overlay/40" aria-label="关闭" onClick={close} />
              <div className="relative mb-[max(12px,env(safe-area-inset-bottom))] w-[min(100%-24px,360px)] overflow-hidden rounded-[20px] border border-line bg-card text-ink shadow-2xl">
                <MenuRow
                  icon={<ImageIcon className="size-6 shrink-0" />}
                  label="相册"
                  onClick={() => {
                    close();
                    album.current?.click();
                  }}
                />
                <MenuRow
                  icon={<Folder className="size-6 shrink-0" />}
                  label="文件"
                  border
                  onClick={() => {
                    close();
                    file.current?.click();
                  }}
                />
                <MenuRow icon={<Clock className="size-6 shrink-0" />} label="历史" border onClick={() => setOpen("hist")} />
                <MenuRow icon={<Star className="size-6 shrink-0" />} label="收藏" border onClick={() => setOpen("fav")} />
                {onWechat ? (
                  <MenuRow
                    icon={<MessageCircle className="size-6 shrink-0" />}
                    label="微信"
                    border
                    onClick={() => {
                      close();
                      onWechat();
                    }}
                  />
                ) : null}
              </div>
            </div>,
            document.body,
          )
        : null}
      {open === "hist" || open === "fav"
        ? createPortal(
            <LibrarySheet
              kind={open}
              onBack={() => setOpen("menu")}
              onClose={close}
              onBlob={onBlob}
              onBlobs={onBlobs}
              onStored={onStored}
              multiple={multiple}
            />,
            document.body,
          )
        : null}
    </>
  );
}

function MenuRow({
  icon,
  label,
  onClick,
  border,
}: {
  icon: ReactNode;
  label: string;
  onClick: () => void;
  border?: boolean;
}) {
  return (
    <button
      type="button"
      className={`flex w-full items-center gap-3 px-5 py-4 text-left text-[16px] ${border ? "border-t border-line" : ""}`}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
}

function ordered<T extends { id: string; order?: number; starred?: boolean }>(rows: T[]) {
  return [...rows].sort((a, b) => {
    if (Boolean(a.starred) !== Boolean(b.starred)) return a.starred ? -1 : 1;
    return (a.order ?? 0) - (b.order ?? 0);
  });
}

function LibrarySheet({
  kind,
  onBack,
  onClose,
  onBlob,
  onBlobs,
  onStored,
  multiple,
}: {
  kind: "hist" | "fav";
  onBack: () => void;
  onClose: () => void;
  onBlob?: (blobId: string) => void | Promise<void>;
  onBlobs?: (blobIds: string[]) => void | Promise<void>;
  onStored?: (pick: StoredPick) => void;
  multiple: boolean;
}) {
  const history = useApp((s) => s.history);
  const favorites = useApp((s) => s.favorites);
  const favGroups = useApp((s) => s.favGroups);
  const [selected, setSelected] = useState<string[]>([]);
  const [fold, setFold] = useState<Record<string, boolean>>({});
  const [busy, setBusy] = useState(false);

  const pics = sortHistoryNewestFirst(history.filter((h) => h.status === "done" && h.blobId));
  const groupsOf = (parentId: string | null) => ordered(favGroups.filter((g) => (g.parentId ?? null) === parentId));
  const favsOf = (groupId: string | null) =>
    ordered(favorites.filter((f) => (f.groupId ?? null) === groupId && f.blobId));

  const toggle = (id: string) =>
    setSelected((cur) => {
      if (!multiple) return cur[0] === id ? [] : [id];
      const at = cur.indexOf(id);
      if (at >= 0) return cur.filter((x) => x !== id);
      return [...cur, id];
    });

  const confirm = async () => {
    if (!selected.length || busy) return;
    setBusy(true);
    try {
      const resolve = (id: string) =>
        kind === "hist" ? pics.find((h) => h.id === id) : favorites.find((f) => f.id === id);
      if (!multiple) {
        const item = resolve(selected[0]);
        const blobId = item?.blobId;
        if (!blobId || !(await getImage(blobId))) {
          useApp.getState().toast("这张图已经不在了");
          return;
        }
        if (onStored && item && "params" in item) {
          const seed = "seed" in item ? item.seed : undefined;
          onStored({ blobId, params: item.params, seed });
        } else await onBlob?.(blobId);
      } else {
        const blobIds: string[] = [];
        for (const id of selected) {
          const blobId = resolve(id)?.blobId;
          if (!blobId || !(await getImage(blobId))) {
            useApp.getState().toast("这张图已经不在了");
            return;
          }
          blobIds.push(blobId);
        }
        await onBlobs?.(blobIds);
      }
      onClose();
    } finally {
      setBusy(false);
    }
  };

  const collapsed = (g: FavGroup) => fold[g.id] ?? g.collapsed;

  const renderGroups = (parentId: string | null, depth: number): ReactNode =>
    groupsOf(parentId).map((g) => (
      <div key={g.id}>
        <button
          type="button"
          className="flex w-full items-center gap-2 py-1.5 text-left"
          style={{ paddingLeft: depth * 12 }}
          onClick={() => setFold((m) => ({ ...m, [g.id]: !collapsed(g) }))}
        >
          <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-line text-primary">
            <Folder className="size-3" />
          </span>
          {g.starred ? <Star className="size-3 shrink-0 fill-primary text-primary" /> : null}
          <span className="min-w-0 flex-1 truncate text-[15px] font-bold">{g.name}</span>
          <svg viewBox="0 0 12 12" className={`size-3 shrink-0 fill-current text-muted transition ${collapsed(g) ? "" : "rotate-180"}`} aria-hidden>
            <path d="M6 9.2 1.4 3.2h9.2L6 9.2z" />
          </svg>
        </button>
        {!collapsed(g) ? (
          <div>
            {renderGroups(g.id, depth + 1)}
            {favsOf(g.id).length ? (
              <ThumbGrid depth={depth + 1}>
                {favsOf(g.id).map((f) => (
                  <StoredThumb
                    key={f.id}
                    blobId={f.blobId}
                    w={f.params.width}
                    h={f.params.height}
                    active={selected.includes(f.id)}
                    order={multiple ? selected.indexOf(f.id) + 1 : 0}
                    onClick={() => toggle(f.id)}
                  />
                ))}
              </ThumbGrid>
            ) : null}
          </div>
        ) : null}
      </div>
    ));

  return (
    <div className="fixed inset-0 z-[90] flex flex-col justify-end">
      <button type="button" className="absolute inset-0 bg-overlay/40" aria-label="关闭" onClick={onClose} />
      <div className="relative flex h-[86dvh] flex-col overflow-hidden rounded-t-[28px] bg-bg text-ink">
        <div className="flex shrink-0 items-center gap-3 px-4 py-3">
          <button type="button" className="text-[15px] text-muted" onClick={onBack}>
            返回
          </button>
          <div className="flex-1 text-center text-[16px] font-semibold">{kind === "hist" ? "历史" : "收藏"}</div>
          <button
            type="button"
            className="text-[15px] font-medium text-primary disabled:opacity-40"
            disabled={!selected.length || busy}
            onClick={() => void confirm()}
          >
            确定
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-3 pb-6">
          {kind === "hist" ? (
            pics.length ? (
              <ThumbGrid>
                {pics.map((h) => (
                  <StoredThumb
                    key={h.id}
                    blobId={h.blobId}
                    w={h.width}
                    h={h.height}
                    active={selected.includes(h.id)}
                    order={multiple ? selected.indexOf(h.id) + 1 : 0}
                    onClick={() => toggle(h.id)}
                  />
                ))}
              </ThumbGrid>
            ) : (
              <div className="py-10 text-center text-[13px] text-muted">还没有历史</div>
            )
          ) : (
            <>
              {renderGroups(null, 0)}
              <ThumbGrid>
                {favsOf(null).map((f) => (
                  <StoredThumb
                    key={f.id}
                    blobId={f.blobId}
                    w={f.params.width}
                    h={f.params.height}
                    active={selected.includes(f.id)}
                    order={multiple ? selected.indexOf(f.id) + 1 : 0}
                    onClick={() => toggle(f.id)}
                  />
                ))}
              </ThumbGrid>
              {favorites.every((f) => !f.blobId) && favGroups.length === 0 ? (
                <div className="py-10 text-center text-[13px] text-muted">还没有带图的收藏</div>
              ) : null}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function ThumbGrid({ children, depth = 0 }: { children: ReactNode; depth?: number }) {
  return (
    <div className="mb-3 grid grid-cols-4 items-start gap-x-1.5 gap-y-2" style={{ marginLeft: depth * 12 }}>
      {children}
    </div>
  );
}

function StoredThumb({
  blobId,
  w,
  h,
  active,
  order = 0,
  onClick,
}: {
  blobId?: string;
  w: number;
  h: number;
  active: boolean;
  order?: number;
  onClick: () => void;
}) {
  const [url, setUrl] = useState<string | null>(null);
  useEffect(() => {
    let dead = false;
    if (blobId) void imageUrl(blobId).then((u) => { if (!dead) setUrl(u); });
    else setUrl(null);
    return () => { dead = true; };
  }, [blobId]);
  const width = w > 0 ? w : 832;
  const height = h > 0 ? h : 1216;
  return (
    <div className="relative">
      <button
        type="button"
        className={`w-full overflow-hidden rounded-[8px] bg-dim ${active ? "ring-2 ring-red-500 ring-offset-1 ring-offset-bg" : ""}`}
        style={{ aspectRatio: `${width} / ${height}` }}
        onClick={onClick}
      >
        {url ? <img src={url} alt="" className="size-full object-contain" /> : null}
      </button>
      {order > 0 ? (
        <span className="pointer-events-none absolute right-1 top-1 grid size-5 place-items-center rounded-full bg-red-500 text-[11px] font-medium text-white">
          {order}
        </span>
      ) : null}
    </div>
  );
}
