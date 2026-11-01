import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { defaultImageParams, emptyCharacter } from "./constants.ts";
import type { Chat, Character } from "./types.ts";
import {
  applyRoleField,
  extractFieldText,
  mergePolish,
  parsePolishJson,
  stripRoleOutput,
} from "./role-polish.ts";

function char(partial: Partial<Character> = {}): Character {
  return { ...emptyCharacter(1), id: "c1", ...partial };
}

function chat(partial: Partial<Chat> & { characters: Character[] }): Chat {
  return {
    id: "chat_1",
    folderId: null,
    name: "",
    remark: "",
    starred: false,
    order: 0,
    createdAt: 0,
    updatedAt: 0,
    grokModelId: "grok-4.6-medium",
    isMulti: false,
    multiMode: "together",
    promptMode: "insert",
    adultBoost: false,
    canGen: true,
    statusBarOn: false,
    statusBar: "状态栏:\n👤{name}",
    overview: "",
    opening: "",
    extras: [{ id: "ex1", body: "不要OOC" }],
    memory: "",
    memoryUntil: 0,
    memoryFoldAt: 0,
    memorySnaps: [],
    imageParams: defaultImageParams(),
    messages: [],
    scrollTop: 0,
    ...partial,
  };
}

describe("parsePolishJson", () => {
  it("reads JSON even when wrapped in fences", () => {
    const json = parsePolishJson(`\`\`\`json
{"overview":"详尽生动","opening":"便利店门口","characters":[{"name":"青叶","persona":"傲娇","speech":"哼","appearance":"1girl, long hair"}]}
\`\`\``);
    assert.equal(json.overview, "详尽生动");
    assert.equal(json.characters?.[0]?.name, "青叶");
  });
});

describe("mergePolish locks", () => {
  it("keeps filled appearance and name, fills empty fields from the model", () => {
    const before = chat({
      overview: "",
      opening: "",
      statusBar: "KEEP_STATUS",
      characters: [
        char({
          name: "青叶",
          persona: "傲娇妹妹",
          speech: "",
          appearance: "1girl, black hair, school uniform",
          extras: [{ id: "ce", body: "角色补丁" }],
        }),
      ],
    });
    const merged = mergePolish(before, {
      overview: "保持傲娇口吻，回复详尽有画面。",
      opening: "傍晚便利店门口刚下过雨。",
      characters: [
        {
          name: "小雪",
          persona: "表面高傲冷淡的傲娇少女，内心在意对方，口头禅是哼和才不是。",
          speech: "短句呛人。示例：「哼，才不是因为担心你。」",
          appearance: "1girl, silver hair, red eyes, maid",
        },
      ],
    });
    assert.equal(merged.characters[0].name, "青叶");
    assert.equal(merged.characters[0].appearance, "1girl, black hair, school uniform");
    assert.match(merged.characters[0].persona, /傲娇少女/);
    assert.match(merged.characters[0].speech, /才不是/);
    assert.match(merged.overview, /傲娇/);
    assert.match(merged.opening, /便利店/);
    assert.equal(before.statusBar, "KEEP_STATUS");
    assert.equal(merged.characters[0].extras[0]?.body, "角色补丁");
  });

  it("generates appearance only when it was empty", () => {
    const before = chat({
      characters: [char({ name: "", persona: "傲娇", speech: "", appearance: "" })],
    });
    const merged = mergePolish(before, {
      characters: [{ name: "青叶", persona: "扩写人设", speech: "说话", appearance: "1girl, brown hair" }],
    });
    assert.equal(merged.characters[0].name, "青叶");
    assert.equal(merged.characters[0].appearance, "1girl, brown hair");
  });

  it("does not add or drop characters", () => {
    const a = char({ id: "a", name: "A", appearance: "tag-a" });
    const b = char({ id: "b", name: "B", appearance: "" });
    const before = chat({ isMulti: true, characters: [a, b] });
    const merged = mergePolish(before, {
      characters: [
        { name: "X", persona: "p1", speech: "s1", appearance: "changed-a" },
        { name: "Y", persona: "p2", speech: "s2", appearance: "new-b" },
        { name: "Z", persona: "p3", speech: "s3", appearance: "extra" },
      ],
    });
    assert.equal(merged.characters.length, 2);
    assert.equal(merged.characters[0].id, "a");
    assert.equal(merged.characters[0].name, "A");
    assert.equal(merged.characters[0].appearance, "tag-a");
    assert.equal(merged.characters[1].name, "B");
    assert.equal(merged.characters[1].appearance, "new-b");
  });

  it("keeps original text when the model returns an empty field", () => {
    const before = chat({
      overview: "用户写的总览",
      opening: "用户写的开场",
      characters: [char({ name: "", persona: "种子", speech: "旧说话", appearance: "" })],
    });
    const merged = mergePolish(before, {
      overview: "",
      opening: "",
      characters: [{ name: "", persona: "", speech: "", appearance: "" }],
    });
    assert.equal(merged.overview, "用户写的总览");
    assert.equal(merged.opening, "用户写的开场");
    assert.equal(merged.characters[0].persona, "种子");
    assert.equal(merged.characters[0].speech, "旧说话");
  });
});

describe("applyRoleField isolation", () => {
  it("only patches the requested character field", () => {
    const a = char({ id: "a", persona: "A人设", speech: "A说话" });
    const b = char({ id: "b", persona: "B人设", speech: "B说话" });
    const before = chat({ isMulti: true, characters: [a, b], overview: "总览" });
    const next = applyRoleField(before, "persona", "新的A人设，很长一段可演的文字。", "a");
    assert.equal(next.characters[0].persona, "新的A人设，很长一段可演的文字。");
    assert.equal(next.characters[0].speech, "A说话");
    assert.equal(next.characters[1].persona, "B人设");
    assert.equal(next.overview, "总览");
  });

  it("patches overview without touching characters", () => {
    const before = chat({
      overview: "旧",
      characters: [char({ persona: "人设" })],
    });
    const next = applyRoleField(before, "overview", "新的作者指令，保持傲娇。");
    assert.equal(next.overview, "新的作者指令，保持傲娇。");
    assert.equal(next.characters[0].persona, "人设");
  });
});

describe("extractFieldText", () => {
  it("strips fences", () => {
    assert.equal(stripRoleOutput("```\n哼，才不是。\n```"), "哼，才不是。");
  });
  it("pulls the named field out of accidental JSON", () => {
    assert.equal(
      extractFieldText(`{"persona":"表面高傲，内心在意。","speech":"不要写进来"}`, "persona"),
      "表面高傲，内心在意。",
    );
  });
});
