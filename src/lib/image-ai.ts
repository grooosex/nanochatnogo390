import { GROK_MODELS, shortModelLabel } from "./constants.ts";
import { chatPickerModels, llmModelName } from "./llm-models.ts";
import type { ChatSource } from "./types.ts";

export const FOLLOW_IMAGE_AI = "__follow__";
export const IMAGE_HDR_GROK = "__hdr_grok__";
export const IMAGE_HDR_API = "__hdr_api__";

export type ImagePickerRow = {
  id: string;
  header?: "API";
  danger?: boolean;
};

export function llmIdentity(base: string, key: string) {
  return `${base.trim()}\n${key}`;
}

export function isGrokModelId(id: string) {
  return GROK_MODELS.some((m) => m.id === id);
}

/** Drop a saved built-in Grok id so prompt writing follows the user's own model. */
export function dropBuiltinImageModel(id: string | null | undefined): string | null {
  if (!id || isGrokModelId(id)) return null;
  return id;
}

export function imageAiLabel(id: string) {
  if (!id || id === FOLLOW_IMAGE_AI || isGrokModelId(id)) return "与聊天一致";
  return shortModelLabel(llmModelName(id));
}

function pushOpt(rows: ImagePickerRow[], seen: Set<string>, id: string, danger = false) {
  if (!id || seen.has(id)) return;
  seen.add(id);
  rows.push(danger ? { id, danger: true } : { id });
}

export function imagePickerModels(input: {
  chatSource: ChatSource;
  llmStarred: string[];
  llmModels: string[];
  llmModel: string;
  llmConnected?: boolean;
  imageModelId?: string | null;
}): ImagePickerRow[] {
  const apiOn = Boolean(input.llmConnected);
  const api = apiOn ? chatPickerModels(input.llmStarred, input.llmModels, input.llmModel) : [];
  const apiSet = new Set(api);
  const catalog = new Set(input.llmModels);
  const pick = input.imageModelId || "";
  const extraApi = pick && pick !== FOLLOW_IMAGE_AI && !isGrokModelId(pick) && !apiSet.has(pick) ? pick : "";
  const apiDanger = Boolean(extraApi && (!apiOn || !catalog.has(extraApi)));

  const rows: ImagePickerRow[] = [];
  const seen = new Set<string>();
  pushOpt(rows, seen, FOLLOW_IMAGE_AI);
  const list = extraApi ? [...api, extraApi] : api;
  for (const id of list) pushOpt(rows, seen, id, id === extraApi && apiDanger);
  return rows;
}

export function applyImageAiPick(
  current: { imageModelId?: string | null; imageModelPin?: string | null },
  pick: string,
): { imageModelId: string | null; imageModelPin: string | null } {
  const pin = isGrokModelId(current.imageModelPin || "") ? null : current.imageModelPin || null;
  if (!pick || pick === FOLLOW_IMAGE_AI || isGrokModelId(pick)) return { imageModelId: null, imageModelPin: pin };
  return { imageModelId: pick, imageModelPin: pick };
}

export function imageWriteFields(imageModelId?: string | null): Record<string, unknown> {
  const dest = resolveImageWrite(imageModelId);
  if (!dest.split) return {};
  return { via: "api", model: dest.model };
}

export type ImageWriteDest = { split: false } | { split: true; via: "api"; model: string };

export function resolveImageWrite(imageModelId?: string | null): ImageWriteDest {
  if (!imageModelId || isGrokModelId(imageModelId)) return { split: false };
  return { split: true, via: "api", model: imageModelId };
}