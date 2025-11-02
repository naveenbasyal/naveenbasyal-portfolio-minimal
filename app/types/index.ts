export type ChatMessageRole = "user" | "model";

export interface ChatMessage {
  id?: any;
  role: ChatMessageRole;
  content: string;
}
