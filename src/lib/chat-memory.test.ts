import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  applySnaps,
  firstFoldAt,
  foldCoveredEnd,
  foldIntervalMessages,
  isPlausibleMemory,
  MEMORY_PARAMS,
  memoryCaughtUp,
  memoryFailReason,
  memoryTurnStats,
  nextAutoSlice,
  planFold,
  rewindSnaps,
} from "./chat-memory.ts";
import { sortHistoryNewestFirst } from "./utils.ts";

describe("foldIntervalMessages", () => {
  it("is window minus 6 turns, floored at 4", () => {
    assert.equal(foldIntervalMessages(16), 20);
    assert.equal(foldIntervalMessages(20), 28);
    assert.equal(foldIntervalMessages(8), 8);
    assert.equal(foldIntervalMessages(4), 8);
  });
});

describe("planFold", () => {
  const W = 32;
  const I = 20;
  it("does nothing until one pair before the window fills", () => {
    assert.equal(firstFoldAt(W, I), 30);
    assert.equal(planFold(29, 0, 0, W, I), null);
  });
  it("first fold one pair early compresses 1–10", () => {
    assert.deepEqual(planFold(30, 0, 0, W, I), { start: 0, end: 20 });
    assert.deepEqual(planFold(32, 0, 0, W, I), { start: 0, end: 20 });
  });
  it("waits a full interval after the first fold", () => {
    assert.equal(planFold(49, 20, 30, W, I), null);
    assert.deepEqual(planFold(50, 20, 30, W, I), { start: 20, end: 40 });
  });
  it("third fold ten turns later", () => {
    assert.deepEqual(planFold(70, 40, 50, W, I), { start: 40, end: 60 });
  });
  it("manual summarize does not immediately refold", () => {
    assert.equal(planFold(50, 18, 50, W, I), null);
    assert.deepEqual(planFold(70, 18, 50, W, I), { start: 18, end: 38 });
  });
  it("retries the same chunk if the last fold never landed", () => {
    assert.deepEqual(planFold(34, 0, 0, W, I), { start: 0, end: 20 });
    assert.deepEqual(planFold(52, 0, 0, W, I), { start: 0, end: 20 });
  });
});

describe("memoryCaughtUp / nextAutoSlice", () => {
  const W = 32;
  const I = 20;
  it("is caught up before the first fold and after covering the target", () => {
    assert.equal(memoryCaughtUp(29, 0, W, I), true);
    assert.equal(memoryCaughtUp(30, 0, W, I), false);
    assert.equal(memoryCaughtUp(30, 20, W, I), true);
    assert.equal(memoryCaughtUp(116, 100, W, I), true);
    assert.equal(memoryCaughtUp(116, 80, W, I), false);
  });
  it("auto-folds the first 10 turns at the early trigger", () => {
    assert.deepEqual(nextAutoSlice(30, 0, W, I), { start: 0, end: 20 });
    assert.equal(nextAutoSlice(30, 20, W, I), null);
  });
  it("catches up one interval at a time while behind", () => {
    assert.deepEqual(nextAutoSlice(116, 80, W, I), { start: 80, end: 100 });
    assert.equal(nextAutoSlice(116, 100, W, I), null);
  });
});

describe("foldCoveredEnd", () => {
  const W = 32;
  const I = 20;
  it("matches the 15 / 25 / 35 schedule", () => {
    assert.equal(foldCoveredEnd(29, W, I), 0);
    assert.equal(foldCoveredEnd(30, W, I), 20);
    assert.equal(foldCoveredEnd(49, W, I), 20);
    assert.equal(foldCoveredEnd(50, W, I), 40);
    assert.equal(foldCoveredEnd(70, W, I), 60);
  });
});

describe("memoryTurnStats", () => {
  it("counts pairs and drops the leftover opening", () => {
    assert.deepEqual(memoryTurnStats(0, 0), { spoken: 0, folded: 0 });
    assert.deepEqual(memoryTurnStats(1, 0), { spoken: 0, folded: 0 });
    assert.deepEqual(memoryTurnStats(31, 20), { spoken: 15, folded: 10 });
    assert.deepEqual(memoryTurnStats(32, 20), { spoken: 16, folded: 10 });
    assert.deepEqual(memoryTurnStats(33, 20), { spoken: 16, folded: 10 });
  });
});

describe("rewindSnaps", () => {
  const snaps = [
    { covered: 20, text: "1-10", foldAt: 32 },
    { covered: 40, text: "1-20", foldAt: 52 },
    { covered: 60, text: "1-30", foldAt: 72 },
  ];
  it("drops sheets that include the regenerated turn", () => {
    const kept = rewindSnaps(snaps, 53);
    assert.deepEqual(applySnaps(kept).memory, "1-20");
    assert.equal(applySnaps(kept).memoryUntil, 40);
  });
  it("keeps a sheet that stops exactly at the cut", () => {
    const kept = rewindSnaps(snaps, 40);
    assert.equal(applySnaps(kept).memoryUntil, 40);
    assert.equal(applySnaps(kept).memory, "1-20");
  });
  it("clears when cutting into the first sheet", () => {
    const kept = rewindSnaps(snaps, 9);
    assert.equal(applySnaps(kept).memory, "");
    assert.equal(applySnaps(kept).memoryUntil, 0);
  });
});

describe("isPlausibleMemory", () => {
  it("rejects empty or one-word replies", () => {
    assert.equal(isPlausibleMemory(""), false);
    assert.equal(isPlausibleMemory("好的"), false);
    assert.equal(isPlausibleMemory("他们在雨里进门，外套还湿着，项链没摘。客厅灯没开。后来在沙发上做过。"), true);
    assert.equal(
      isPlausibleMemory("The prompt could not be submitted. The prompt contains sensitive words that violate Google's policy."),
      false,
    );
  });
});

describe("MEMORY_PARAMS", () => {
  it("is a low-temp factual fold, independent of chat sampler", () => {
    assert.equal(MEMORY_PARAMS.temperature, 0.3);
    assert.equal(MEMORY_PARAMS.topP, 1);
    assert.equal(MEMORY_PARAMS.frequencyPenalty, 0);
    assert.equal(MEMORY_PARAMS.presencePenalty, 0);
    assert.equal(MEMORY_PARAMS.maxTokens, 4096);
  });
});

describe("memoryFailReason", () => {
  it("maps skip / invalid / abort", () => {
    assert.equal(memoryFailReason(new Error("memory-invalid")), "回得太短或不像备忘");
    assert.equal(memoryFailReason(new Error("memory-skip")), "没有可收的对白");
    const abort = new Error("Aborted");
    abort.name = "AbortError";
    assert.equal(memoryFailReason(abort), "已取消");
  });
});

describe("sortHistoryNewestFirst", () => {
  it("puts newest createdAt first", () => {
    const rows = [
      { id: "a", createdAt: 1 },
      { id: "c", createdAt: 3 },
      { id: "b", createdAt: 2 },
    ];
    assert.deepEqual(
      sortHistoryNewestFirst(rows).map((r) => r.id),
      ["c", "b", "a"],
    );
  });
});
