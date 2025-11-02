import {
  GoogleGenAI,
  Chat,
  FunctionDeclaration,
  Type,
  FunctionCall,
} from "@google/genai";
import { NAVEEN_INFO } from "app/constants/inedx";

import { ChatMessage } from "app/types";

const forwardEmailDeclaration: FunctionDeclaration = {
  name: "forwardEmailToNaveen",
  description:
    "Forwards the user's query to Naveen's personal email when the assistant cannot answer or when the user has a job offer.",
  parameters: {
    type: Type.OBJECT,
    properties: {
      userQuery: {
        type: Type.STRING,
        description:
          "The user's full, original question or message that needs to be forwarded.",
      },
    },
    required: ["userQuery"],
  },
};

let chat: Chat | null = null;

function initializeChat(): Chat {
  if (chat) {
    return chat;
  }

  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_API_KEY as string,
  });
  chat = ai.chats.create({
    model: "gemini-2.5-flash",
    config: {
      systemInstruction: NAVEEN_INFO,
      tools: [{ functionDeclarations: [forwardEmailDeclaration] }],
    },
  });
  return chat;
}

export const getChatResponse = async (
  history: ChatMessage[]
): Promise<string | { functionCall: FunctionCall }> => {
  try {
    const currentChat = initializeChat();

    const lastUserMessage = history
      .slice()
      .reverse()
      .find((m) => m.role === "user");

    if (!lastUserMessage) {
      throw new Error("No user message found in history.");
    }

    const result = await currentChat.sendMessage({
      message: lastUserMessage.content,
    });

    if (result.functionCalls && result.functionCalls.length > 0) {
      return { functionCall: result.functionCalls[0] };
    }

    return result.text ?? "";
  } catch (error) {
    console.error("Error getting response from Gemini:", error);
    // In case of an error, reset the chat instance.
    chat = null;
    throw new Error("Failed to communicate with the AI assistant.");
  }
};
