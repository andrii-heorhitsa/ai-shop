"use client";

import { useState } from "react";

export function HelloButton() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    try {
      const res = await fetch("/api/chat");

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data: { text: string } = await res.json();
      setText(data.text);
    } catch {
      setText("Модель зараз недоступна, спробуй пізніше.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button type="button" onClick={handleClick} disabled={loading}>
        {loading ? "Думаю..." : "Привітатися з AI"}
      </button>
      {text && <p>{text}</p>}
    </div>
  );
}
