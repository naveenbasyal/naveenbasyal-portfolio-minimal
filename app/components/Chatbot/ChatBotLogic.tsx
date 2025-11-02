import React, { useState, useEffect, useRef, useCallback } from "react";
import { getChatResponse } from "app/services/geminiService";
import { ChatMessage } from "app/types";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import ReactMarkdown from "react-markdown";

interface ChatbotProps {
  onClose: () => void;
}

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

// declare const emailjs: any

const LoadingIndicator: React.FC = () => (
  <div className="flex items-center space-x-2">
    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-75"></div>
    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-150"></div>
  </div>
);

type ForwardingState =
  | "idle"
  | "awaiting_consent"
  | "awaiting_name"
  | "awaiting_email";

const ChatBotLogic: React.FC<ChatbotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "model",
      content:
        "Hi there! I'm Nav-AI, Naveen's personal AI assistant. You can ask me anything about his skills, experience, or projects. How can I help you?",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [forwardingState, setForwardingState] =
    useState<ForwardingState>("idle");
  const [forwardingInfo, setForwardingInfo] = useState({ query: "", name: "" });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!userInput.trim() || isLoading) return;

      const userMessageContent = userInput.trim();
      const userMessage: ChatMessage = {
        id: Math.random().toString(36).substring(7),
        role: "user",
        content: userMessageContent,
      };
      setMessages((prev) => [...prev, userMessage]);
      setUserInput("");

      // --- FORWARDING FLOW LOGIC ---
      if (forwardingState !== "idle") {
        if (forwardingState === "awaiting_consent") {
          if (userMessageContent.toLowerCase().includes("yes")) {
            setForwardingState("awaiting_name");
            setMessages((prev) => [
              ...prev,
              { role: "model", content: "Great! What's your full name?" },
            ]);
          } else {
            setForwardingState("idle");
            setForwardingInfo({ query: "", name: "" });
            setMessages((prev) => [
              ...prev,
              {
                role: "model",
                content: "No problem. Is there anything else I can help with?",
              },
            ]);
          }
        } else if (forwardingState === "awaiting_name") {
          setForwardingInfo((prev) => ({ ...prev, name: userMessageContent }));
          setForwardingState("awaiting_email");
          setMessages((prev) => [
            ...prev,
            {
              role: "model",
              content: `Thanks, ${userMessageContent}. And what's your email address?`,
            },
          ]);
        } else if (forwardingState === "awaiting_email") {
          const userEmail = userMessageContent;
          setForwardingState("idle");

          setIsLoading(true);

          const templateParams = {
            from_name: forwardingInfo.name,
            from_email: userEmail,
            message: forwardingInfo.query,
            to_name: "Naveen Basyal",
            reply_to: userEmail,
          };

          try {
            if (
              !EMAILJS_SERVICE_ID ||
              !EMAILJS_TEMPLATE_ID ||
              !EMAILJS_PUBLIC_KEY
            ) {
              return;
            }
            await emailjs.send(
              EMAILJS_SERVICE_ID,
              EMAILJS_TEMPLATE_ID,
              templateParams,
              EMAILJS_PUBLIC_KEY
            );
            const modelMessage: ChatMessage = {
              role: "model",
              content:
                "Perfect, I've forwarded your message to Naveen. He'll get back to you soon!",
            };
            setMessages((prev) => [...prev, modelMessage]);
          } catch (error) {
            console.error("Failed to send email via EmailJS:", error);
            const errorMessage: ChatMessage = {
              role: "model",
              content:
                "Oops! Something went wrong and I couldn't send the message. Please try again later or contact Naveen directly at naveenbasyal.001@gmail.com.",
            };
            setMessages((prev) => [...prev, errorMessage]);
          } finally {
            setIsLoading(false);
            setForwardingInfo({ query: "", name: "" });
          }
        }
        return;
      }

      // --- REGULAR CHAT FLOW ---
      setIsLoading(true);
      try {
        const response = await getChatResponse([...messages, userMessage]);

        if (response && typeof response === "object" && response.functionCall) {
          const queryArg = response?.functionCall?.args?.userQuery as string;
          setForwardingInfo({
            query: queryArg || userMessageContent,
            name: "",
          });
          setForwardingState("awaiting_consent");

          const modelMessage: ChatMessage = {
            role: "model",
            content:
              "I can forward your question to Naveen. Would you like me to do that? (yes/no)",
          };
          setMessages((prev) => [...prev, modelMessage]);
        } else if (typeof response === "string") {
          const modelMessage: ChatMessage = {
            role: "model",
            content: response,
          };
          setMessages((prev) => [...prev, modelMessage]);
        }
      } catch (error) {
        console.error("Gemini API error:", error);
        const errorMessage: ChatMessage = {
          role: "model",
          content: "Sorry, I encountered an error. Please try again later.",
        };
        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    },
    [userInput, isLoading, messages, forwardingState, forwardingInfo]
  );

  const placeholders = [
    "Ask me anything about my dev journey ",
    "What’s my tech stack?",
    "Tell me about Walldeed project",
    "How can you contact me?",
    "What’s my experience?",
    "What’s my best skill as a fullstack dev?",
    "Interested in Indistock? Ask me how it works",
    "Can I work remotely?",
    "What sets me apart from other devs?",
    "Got questions about blockchain or TON?",
  ];

  return (
    <div className="fixed bottom-0 bg-zinc-800 rounded-t-lg right-0 sm:bottom-24 sm:right-8 w-full h-full sm:h-[70vh] sm:max-h-[600px] sm:w-[400px]   sm:rounded-xl shadow-2xl flex flex-col z-50 animate-fade-in-up">
      <header className="bg-zinc-900 text-white p-4 flex justify-between items-center rounded-t-lg sm:rounded-t-xl">
        <h2 className="text-lg font-semibold flex items-center gap-x-5">
          <Image
            src="/pfp.jpeg"
            alt="Profile"
            width={30}
            height={30}
            quality={100}
            priority
            style={{
              pointerEvents: "none",
              userSelect: "none",
              objectFit: "cover",
              transform: "scale(1.2)",
            }}
            unoptimized={true}
            className="rounded-full h-full interactionspfp"
          />
          Chat with Naveen's AI
        </h2>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </header>

      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        <div className="space-y-4 relative">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs md:max-w-sm px-4 py-2 rounded-2xl ${
                  msg.role === "user"
                    ? "bg-indigo-500 text-white rounded-br-lg"
                    : "bg-gray-200 text-gray-800 rounded-bl-lg"
                }`}
              >
                <ReactMarkdown
                  components={{
                    a: ({ node, ...props }) => (
                      <a
                        {...props}
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul {...props} className="list-disc pl-4" />
                    ),
                    li: ({ node, ...props }) => (
                      <li {...props} className="my-0" />
                    ),
                    strong: ({ node, ...props }) => (
                      <strong {...props} className="font-semibold" />
                    ),
                  }}
                >
                  {msg.content}
                </ReactMarkdown>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-xs px-4 py-2 rounded-2xl bg-gray-200 text-gray-800 rounded-bl-lg">
                <LoadingIndicator />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <footer className="p-4 border rounded-b-lg  bg-white">
        <div
          // onSubmit={handleSendMessage}
          className="flex items-center space-x-2"
        >
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={(e) => setUserInput(e.target.value)}
            onSubmit={handleSendMessage}
          />
        </div>
      </footer>
    </div>
  );
};

export default ChatBotLogic;
