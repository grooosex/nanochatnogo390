import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { firstChatImageBlob } from "./chat-avatar.ts";

describe("firstChatImageBlob", () => {
  it("prefers a custom avatar over the saved one", () => {
    assert.equal(
      firstChatImageBlob({
        customAvatarBlobId: "custom",
        avatarBlobId: "av",
        messages: [{ images: [{ status: "done", blobId: "img1" }] }],
      }),
      "custom",
    );
  });
  it("prefers the saved avatar", () => {
    assert.equal(
      firstChatImageBlob({
        avatarBlobId: "av",
        messages: [{ images: [{ status: "done", blobId: "img1" }] }],
      }),
      "av",
    );
  });

  it("falls back to the first successful chat image", () => {
    assert.equal(
      firstChatImageBlob({
        messages: [
          { images: [] },
          { images: [{ status: "error", blobId: "x" }, { status: "done", blobId: "img1" }] },
          { images: [{ status: "done", blobId: "img2" }] },
        ],
      }),
      "img1",
    );
  });
});
