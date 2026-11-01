import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { splitDialogue, stripSpeakerPrefix } from "./rp-text.ts";

describe("stripSpeakerPrefix", () => {
  it("strips repeated 角色名：", () => {
    assert.equal(stripSpeakerPrefix("小桃：小桃：这一回你没再往里凑", ["小桃"]), "这一回你没再往里凑");
  });
  it("strips ascii colon", () => {
    assert.equal(stripSpeakerPrefix("小桃: 喂。", ["小桃"]), "喂。");
  });
  it("leaves body that is not a prefix", () => {
    assert.equal(stripSpeakerPrefix("她耳朵一动。", ["小桃"]), "她耳朵一动。");
  });
});

describe("splitDialogue", () => {
  it("marks 「」 as say and the rest as narr", () => {
    const parts = splitDialogue('她咬住下唇。\n\n「看就看嘛。」\n\n她闷在胳膊里出声。');
    assert.equal(parts.filter((p) => p.kind === "say").map((p) => p.text).join(""), "「看就看嘛。」");
    assert.ok(parts.some((p) => p.kind === "narr" && p.text.includes("咬住下唇")));
    assert.ok(parts.some((p) => p.kind === "narr" && p.text.includes("闷在胳膊里")));
  });
});
