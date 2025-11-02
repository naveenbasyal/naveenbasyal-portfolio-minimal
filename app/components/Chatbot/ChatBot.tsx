"use client";
import React, { useCallback, useState } from "react";
import ChatBubble from "./ChatBubble";
import ChatBotLogic from "./ChatBotLogic";

const Chatbot = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = useCallback(() => {
    setIsChatbotOpen((prev) => !prev);
  }, []);
  return (
    <>
      <ChatBubble onClick={toggleChatbot} />
      {isChatbotOpen && <ChatBotLogic onClose={toggleChatbot} />}
    </>
  );
};

export default Chatbot;
