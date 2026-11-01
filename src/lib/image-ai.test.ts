import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  FOLLOW_IMAGE_AI,
  applyImageAiPick,
  dropBuiltinImageModel,
  imagePickerModels,
  llmIdentity,
  resolveImageWrite,
} from "./image-ai.ts";

describe("imagePickerModels", () => {
  it("lists 与聊天一致, then the connected chat models, and never built-in Grok", () => {
    const rows = imagePickerModels({
      chatSource: "api",
      llmConnected: true,
      llmStarred: ["agy-high", "ds-flash"],
      llmModels: ["agy-high", "ds-flash", "other"],
      llmModel: "agy-high",
    });
    assert.deepEqual(
      rows.map((r) => r.id),
      [FOLLOW_IMAGE_AI, "agy-high", "ds-flash"],
    );
    assert.equal(
      rows.some((r) => r.header === "API" || String(r.id).startsWith("grok-")),
      false,
    );
  });

  it("ignores a saved built-in Grok pick and still lists only the user's models", () => {
    const rows = imagePickerModels({
      chatSource: "grok",
      llmConnected: true,
      llmStarred: ["ds-flash"],
      llmModels: ["ds-flash", "other"],
      llmModel: "agy-high",
      imageModelId: "grok-4.6-high",
    });
    assert.deepEqual(
      rows.map((r) => r.id),
      [FOLLOW_IMAGE_AI, "agy-high", "ds-flash"],
    );
  });

  it("with API disconnected: only 与聊天一致", () => {
    const rows = imagePickerModels({
      chatSource: "grok",
      llmConnected: false,
      llmStarred: ["ds-flash"],
      llmModels: ["ds-flash"],
      llmModel: "ds-flash",
      imageModelId: "grok-4.6-high",
    });
    assert.deepEqual(
      rows.map((r) => r.id),
      [FOLLOW_IMAGE_AI],
    );
  });

  it("keeps a user's model named like grok if it is not a built-in id", () => {
    const rows = imagePickerModels({
      chatSource: "api",
      llmConnected: true,
      llmStarred: ["grok-4"],
      llmModels: ["grok-4", "agy-high"],
      llmModel: "agy-high",
    });
    assert.deepEqual(
      rows.map((r) => r.id),
      [FOLLOW_IMAGE_AI, "agy-high", "grok-4"],
    );
  });

  it("keeps a selected delisted API model in red", () => {
    const rows = imagePickerModels({
      chatSource: "api",
      llmConnected: true,
      llmStarred: ["agy-high"],
      llmModels: ["agy-high"],
      llmModel: "agy-high",
      imageModelId: "gone-model",
    });
    const gone = rows.find((r) => r.id === "gone-model");
    assert.equal(gone?.danger, true);
    assert.equal(rows.at(-1)?.id, "gone-model");
  });
});

describe("applyImageAiPick", () => {
  it("keeps the pin when returning to 与聊天一致", () => {
    assert.deepEqual(applyImageAiPick({ imageModelId: "ds-flash", imageModelPin: "ds-flash" }, FOLLOW_IMAGE_AI), {
      imageModelId: null,
      imageModelPin: "ds-flash",
    });
  });
  it("does not keep a built-in Grok pick", () => {
    assert.deepEqual(applyImageAiPick({ imageModelId: "ds-flash", imageModelPin: "ds-flash" }, "grok-4.6-medium"), {
      imageModelId: null,
      imageModelPin: "ds-flash",
    });
  });
  it("drops a built-in Grok pin", () => {
    assert.deepEqual(applyImageAiPick({ imageModelId: "grok-4.6-medium", imageModelPin: "grok-4.6-medium" }, FOLLOW_IMAGE_AI), {
      imageModelId: null,
      imageModelPin: null,
    });
  });
  it("updates the pin when picking an API model", () => {
    assert.deepEqual(applyImageAiPick({ imageModelId: null, imageModelPin: "old" }, "ds-flash"), {
      imageModelId: "ds-flash",
      imageModelPin: "ds-flash",
    });
  });
});

describe("resolveImageWrite", () => {
  it("follows chat when unset", () => {
    assert.deepEqual(resolveImageWrite(null), { split: false });
  });
  it("follows chat for a built-in Grok id", () => {
    assert.deepEqual(resolveImageWrite("grok-4.6-medium"), { split: false });
  });
  it("routes an API pick through the API", () => {
    assert.deepEqual(resolveImageWrite("ds-flash"), { split: true, via: "api", model: "ds-flash" });
  });
  it("routes the user's own grok-named model through the API", () => {
    assert.deepEqual(resolveImageWrite("grok-4"), { split: true, via: "api", model: "grok-4" });
  });
});

describe("dropBuiltinImageModel", () => {
  it("clears only built-in ids", () => {
    assert.equal(dropBuiltinImageModel("grok-4.7-high"), null);
    assert.equal(dropBuiltinImageModel("grok-4"), "grok-4");
    assert.equal(dropBuiltinImageModel(null), null);
  });
});

describe("llmIdentity", () => {
  it("treats trimmed base + key as the account", () => {
    assert.equal(llmIdentity(" https://a/v1 ", "k"), llmIdentity("https://a/v1", "k"));
    assert.notEqual(llmIdentity("https://a/v1", "k1"), llmIdentity("https://a/v1", "k2"));
  });
});
