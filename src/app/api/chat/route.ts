import { generateText } from "ai";
import { google } from "@ai-sdk/google";

export async function GET() {
  const { text } = await generateText({
    model: google("gemini-3.6-flash"),
    prompt: "Привітайся одним реченням.",
  });

  return Response.json({ text });
}
