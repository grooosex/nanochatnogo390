export function firstChatImageBlob(chat: {
  customAvatarBlobId?: string;
  avatarBlobId?: string;
  messages?: { images?: { status?: string; blobId?: string }[] }[];
}): string | undefined {
  if (chat.customAvatarBlobId) return chat.customAvatarBlobId;
  if (chat.avatarBlobId) return chat.avatarBlobId;
  for (const m of chat.messages ?? []) {
    const hit = m.images?.find((g) => g.status === "done" && g.blobId);
    if (hit?.blobId) return hit.blobId;
  }
}
