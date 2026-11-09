import type { UIMessage } from "ai";

type ChatViewProps = {
  messages: UIMessage[];
  input: string;
  isBusy: boolean;
  hasError: boolean;
  onInputChange: (value: string) => void;
  onSubmit: () => void;
};

export function ChatView({
  messages,
  input,
  isBusy,
  hasError,
  onInputChange,
  onSubmit,
}: ChatViewProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <div>
      {messages.length === 0 && <p>Ask me about any product 👋</p>}

      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <strong>{message.role === "user" ? "You" : "AI"}: </strong>
            {message.parts.map((part, index) =>
              part.type === "text" ? (
                <span key={index}>{part.text}</span>
              ) : null,
            )}
          </li>
        ))}
      </ul>

      {hasError && (
        <p>The assistant is unavailable right now. Please try again.</p>
      )}

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(event) => onInputChange(event.target.value)}
          placeholder="Type a message..."
          disabled={isBusy}
          name="message"
          aria-label="Message"
          autoComplete="off"
        />
        <button type="submit" disabled={isBusy}>
          Send
        </button>
      </form>
    </div>
  );
}
