"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { ChatView } from "./chat.view";

export function Chat() {
  const { messages, sendMessage, status } = useChat();
  const [input, setInput] = useState("");

  const isBusy = status === "submitted" || status === "streaming";

  function handleSubmit() {
    const text = input.trim();
    if (!text) return;
    sendMessage({ text });
    setInput("");
  }

  return (
    <ChatView
      messages={messages}
      input={input}
      isBusy={isBusy}
      hasError={status === "error"}
      onInputChange={setInput}
      onSubmit={handleSubmit}
    />
  );
}
