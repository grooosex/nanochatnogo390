import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  decodeUnicodeEscapes,
  parseReplyMarkup,
  replyContextText,
  replyStoryText,
  stripReplyTags,
} from "./reply-markup.ts";

describe("decodeUnicodeEscapes", () => {
  it("turns \\uXXXX into characters", () => {
    assert.equal(decodeUnicodeEscapes("\\u55b5\\u545c~"), "喵呜~");
  });
  it("holds an incomplete escape at the end", () => {
    assert.equal(decodeUnicodeEscapes("喵\\u55"), "喵\\u55");
  });
});

describe("parseReplyMarkup", () => {
  it("leaves a plain reply alone", () => {
    const t = "她回头看你。\n\n「怎么了。」";
    const p = parseReplyMarkup(t);
    assert.equal(p.body, t);
    assert.equal(p.folds.length, 0);
    assert.equal(p.options.length, 0);
  });

  it("unwraps game, folds think, and decodes unicode", () => {
    const p = parseReplyMarkup(
      `<think_nya~>\n\\u55b5\\u545c~\n\\u5c0f\\u732b\\u4e4b\\u795e\n</think_nya~>\n\n<game>\n卧室里还留着刚才的温度。\n</game>`,
    );
    assert.equal(p.body, "卧室里还留着刚才的温度。");
    assert.equal(p.folds.length, 1);
    assert.equal(p.folds[0].kind, "think");
    assert.equal(p.folds[0].title, "思考");
    assert.match(p.folds[0].body, /喵呜~/);
    assert.match(p.folds[0].body, /小猫之神/);
    assert.equal(p.body.includes("<"), false);
  });

  it("folds details and keeps leftover story as body", () => {
    const p = parseReplyMarkup(
      `<details><summary>内心-小桃\n</summary>\n本来以为是要接着闹的。\n</details>\n\n她坐起来一点，膝盖抵着床垫。`,
    );
    assert.match(p.body, /她坐起来一点/);
    assert.equal(p.folds.some((f) => f.title === "内心-小桃"), true);
    assert.match(p.folds.find((f) => f.title === "内心-小桃")!.body, /本来以为/);
    assert.equal(p.body.includes("<details"), false);
    assert.equal(p.body.includes("summary"), false);
  });

  it("parses options and stray close tags without leaking markup", () => {
    const p = parseReplyMarkup(
      `已经慢慢放凉了。）\n</background>\n\n<options>\n<option>🐾 顺手摸一把她的尾巴根。</option>\n<option>🍙 去客厅把饭团端进来。</option>\n</options>\n\n<summary>傍晚卧室，小桃刚闹完。</summary>`,
    );
    assert.match(p.body, /已经慢慢放凉了/);
    assert.equal(p.body.includes("<"), false);
    assert.equal(p.body.includes("background"), false);
    assert.equal(p.options.length, 2);
    assert.match(p.options[0], /尾巴根/);
    assert.equal(p.folds.some((f) => f.title === "摘要"), true);
  });

  it("hides an unclosed known opener instead of showing the tag", () => {
    const p = parseReplyMarkup("前文。\n<game>\n窗帘没拉严");
    assert.equal(p.body.includes("<game>"), false);
    assert.match(p.body, /窗帘没拉严/);
    assert.match(p.body, /前文/);
  });

  it("keeps an open think block out of the body while it is still streaming", () => {
    const p = parseReplyMarkup("<think_nya~>\n\\u55b5\\u545c~\n还在想");
    assert.equal(p.body, "");
    assert.equal(p.folds[0]?.kind, "think");
    assert.match(p.folds[0].body, /喵呜~/);
    assert.equal(p.body.includes("<"), false);
  });
});

describe("replyContextText", () => {
  it("keeps story and 摘要, drops think and options", () => {
    const raw = `<think_nya~>秘密计划</think_nya~><game>她坐在床上。</game><summary>晚上，卧室。</summary><options><option>去洗澡</option></options>`;
    const ctx = replyContextText(raw);
    assert.match(ctx, /她坐在床上/);
    assert.match(ctx, /晚上，卧室/);
    assert.equal(ctx.includes("秘密计划"), false);
    assert.equal(ctx.includes("去洗澡"), false);
    assert.equal(replyStoryText(raw), "她坐在床上。");
  });
});

describe("stripReplyTags", () => {
  it("never leaves angle brackets from simple wrappers", () => {
    assert.equal(stripReplyTags("<game>正文</game>"), "正文");
    assert.equal(stripReplyTags("a</summary>b").includes("<"), false);
  });
});
