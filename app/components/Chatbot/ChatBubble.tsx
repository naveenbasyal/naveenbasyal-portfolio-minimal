"use client";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

interface ChatBubbleProps {
  onClick: () => void;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ onClick }) => {
  return (
    <HoverBorderGradient
      onClick={onClick}
      aria-label="Open chat"
      containerClassName="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 rounded-full"
      as="button"
      className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
    >
      <span className="text-white font-semibold text-lg">Ask Naveen</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white ml-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    </HoverBorderGradient>
  );
};

export default ChatBubble;
