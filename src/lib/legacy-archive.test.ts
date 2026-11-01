import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  collectPngs,
  convertLegacyArchive,
  isLegacyArchive,
  pickArchiveJson,
} from "./legacy-archive.ts";
import { strToU8 } from "fflate";

const sample = {
  kind: "huiyu-archive",
  version: 1,
  exportedAt: 1,
  folders: [{ id: "f1", name: "日常", starred: false, parentId: "root", sort: 2, createdAt: 1 }],
  roles: [
    {
      id: "r1",
      name: "小桃",
      note: "备注",
      folderId: "f1",
      starred: true,
      sort: 3,
      avatarImageId: "av1",
      createdAt: 10,
      updatedAt: 20,
      draft: {
        name: "小桃",
        overview: "写细一点",
        persona: "傲娇妹妹",
        speech: "哼",
        appearance: "1girl, cat ears",
        scene: "沙发上",
        statusOn: true,
        statusText: "状态栏:\n体力:满",
        extras: [{ id: "e1", body: "补丁" }],
        multi: false,
        adultPrompt: true,
      },
      imageParams: {
        promptFront: "front",
        promptMid: "mid",
        promptBack: "back",
        unifiedPrompt: true,
        noCensor: true,
        cfg: 6.5,
        seed: "12345",
        model: "nai-diffusion-4-5-full",
        characters: [{ id: "cA", name: "小桃", enabled: true, prompt: "cat girl", uc: "", x: 0.2, y: 0.8 }],
      },
      memory: { text: "已经认识", covered: 4, updatedAt: 20 },
      messages: [
        { id: "m1", role: "user", text: "(摸头)", createdAt: 11 },
        {
          id: "m2",
          role: "assistant",
          text: "才、才不是喜欢",
          speakerName: "小桃",
          image: {
            id: "img1",
            prompt: "from behind",
            seed: 9,
            model: "nai-diffusion-4-5-full",
            width: 832,
            height: 1216,
            steps: 28,
            sampler: "k_euler_ancestral",
          },
          createdAt: 12,
        },
      ],
    },
  ],
  personaCards: [
    {
      id: "pc1",
      name: "雌小鬼搞笑妹妹",
      createdAt: 5,
      draft: {
        name: "妹妹",
        overview: "",
        persona: "雌小鬼",
        speech: "哈？",
        appearance: "1girl",
        scene: "教室",
        statusOn: false,
        statusText: "",
        extras: [],
        multi: false,
      },
    },
  ],
  appearanceCards: [{ id: "ap1", name: "40原猫娘", prompt: "1girl, cat tail", createdAt: 6 }],
  settings: { grokModel: "grok-4.5-fast", theme: "dark" },
  activeRoleId: "r1",
  imagesIncluded: true,
};

describe("isLegacyArchive", () => {
  it("detects kind and roles", () => {
    assert.equal(isLegacyArchive(sample), true);
    assert.equal(isLegacyArchive({ version: 1, chats: [], folders: [] }), false);
    assert.equal(isLegacyArchive(null), false);
  });
});

describe("convertLegacyArchive", () => {
  it("maps chats, cards, appearances, folders and messages", () => {
    const { dump, currentId, pureParams } = convertLegacyArchive(sample);
    assert.equal(dump.version, 1);
    assert.equal(dump.settings.grokModelId, "grok-4.5-low");
    assert.equal(dump.settings.theme, "dark");
    assert.equal(currentId, "r1");
    assert.ok(pureParams);

    assert.equal(dump.folders.length, 1);
    assert.equal(dump.folders[0].id, "f1");
    assert.equal(dump.folders[0].order, 2);
    assert.equal(dump.folders[0].collapsed, false);

    assert.equal(dump.chats.length, 1);
    const chat = dump.chats[0];
    assert.equal(chat.name, "小桃");
    assert.equal(chat.remark, "备注");
    assert.equal(chat.overview, "写细一点");
    assert.equal(chat.opening, "沙发上");
    assert.equal(chat.adultBoost, true);
    assert.equal(chat.memory, "已经认识");
    assert.equal(chat.memoryUntil, 4);
    assert.equal(chat.memorySnaps.length, 1);
    assert.equal(chat.memorySnaps[0].text, "已经认识");
    assert.equal(dump.settings.chatImage, true);
    assert.equal(chat.avatarBlobId, "av1");
    assert.equal(chat.characters[0].persona, "傲娇妹妹");
    assert.equal(chat.characters[0].appearance, "1girl, cat ears");
    assert.equal(chat.imageParams.merged, true);
    assert.equal(chat.imageParams.uncensored, true);
    assert.equal(chat.imageParams.scale, 6.5);
    assert.equal(chat.imageParams.seed, 12345);
    assert.equal(chat.messages[0].content, "(摸头)");
    assert.equal(chat.messages[1].content, "才、才不是喜欢");
    assert.equal(chat.messages[1].images[0].blobId, "img1");
    assert.equal(chat.messages[1].images[0].status, "done");

    assert.equal(dump.cards.length, 1);
    assert.equal(dump.cards[0].name, "雌小鬼搞笑妹妹");
    assert.equal(dump.cards[0].characters[0].persona, "雌小鬼");
    assert.equal(dump.cards[0].opening, "教室");

    assert.equal(dump.appearances[0].name, "40原猫娘");
    assert.equal(dump.appearances[0].prompt, "1girl, cat tail");
  });

  it("expands multi cast", () => {
    const { dump } = convertLegacyArchive({
      kind: "huiyu-archive",
      version: 1,
      roles: [
        {
          id: "r2",
          name: "双人",
          draft: {
            multi: true,
            chatMode: "group",
            promptPack: "split",
            name: "",
            overview: "",
            persona: "",
            speech: "",
            appearance: "",
            scene: "",
            statusOn: false,
            statusText: "",
            extras: [],
            cast: [
              { id: "a", name: "甲", persona: "冷静", speech: "嗯", appearance: "1girl" },
              { id: "b", name: "乙", persona: "活泼", speech: "哈", appearance: "1girl, smile", away: true },
            ],
          },
          messages: [],
        },
      ],
    });
    const chat = dump.chats[0];
    assert.equal(chat.isMulti, true);
    assert.equal(chat.multiMode, "group");
    assert.equal(chat.promptMode, "insert");
    assert.equal(chat.characters.length, 2);
    assert.equal(chat.characters[1].imageEnabled, false);
  });
});

describe("zip helpers", () => {
  it("finds archive.json in nested path and decodes png ids", () => {
    const json = pickArchiveJson({
      "folder/archive.json": strToU8("{}"),
    });
    assert.ok(json);
    const pngs = collectPngs({
      "images/av%2F1.png": new Uint8Array([1, 2, 3]),
    });
    assert.equal(pngs.has("av/1"), true);
  });
});
