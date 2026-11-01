import { createFileRoute } from "@tanstack/react-router";

/** Built-in Grok is disabled. Chat and prompt writing go through the user's own API. */
export const Route = createFileRoute("/api/grok")({
  server: {
    handlers: {
      POST: async () =>
        Response.json({ ok: false, error: "请先连接自己的对话 API" }, { status: 400 }),
    },
  },
});
