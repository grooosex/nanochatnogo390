import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { applyBackFlags, applyFrontFlags, applyMergedFlags } from "./prompt-flags.ts";

describe("prompt flags", () => {
  it("adds and removes 无码 / 全身 at the end of 前", () => {
    const on = applyFrontFlags("1girl, cat ears", true, true);
    assert.match(on, /uncensored,/);
    assert.match(on, /1\.5::full body,foot::,/);
    const off = applyFrontFlags(on, false, false);
    assert.equal(off.includes("uncensored"), false);
    assert.equal(off.includes("full body"), false);
    assert.match(off, /cat ears/);
  });

  it("adds and removes 敏感 at the start of 后", () => {
    const on = applyBackFlags("masterpiece", true);
    assert.match(on, /^rating: sensitive, nsfw, uncensored,/);
    const off = applyBackFlags(on, false);
    assert.equal(off, "masterpiece");
  });

  it("merged box puts 敏感 first and body tags last", () => {
    const on = applyMergedFlags("1girl", { sensitive: true, uncensored: true, fullBody: false });
    assert.match(on, /^rating: sensitive/);
    assert.match(on, /uncensored,/);
    const off = applyMergedFlags(on, { sensitive: false, uncensored: false, fullBody: false });
    assert.equal(off.includes("rating:"), false);
  });
});
