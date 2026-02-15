import React, { createContext, useContext, useState } from "react";

const ChatContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState([
    { id: 1, title: "New Chat", messages: [] },
  ]);
  const [currentChatId, setCurrentChatId] = useState(1);
  const [selectedModel, setSelectedModel] = useState("gemini");

  const addChat = () => {
    const newId = Date.now();
    const newTitle = `New Chat ${chats.length + 1}`;
    const newChat = { id: newId, title: newTitle, messages: [] };
    setChats((prev) => [...prev, newChat]);
    setCurrentChatId(newId);
  };

  const selectChat = (id) => {
    setCurrentChatId(id);
  };

  const addMessage = (message) => {
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === currentChatId
          ? { ...chat, messages: [...chat.messages, message] }
          : chat,
      ),
    );
  };

  const currentChat = chats.find((chat) => chat.id === currentChatId);

  return (
    <ChatContext.Provider
      value={{
        chats,
        currentChatId,
        currentChat,
        addChat,
        selectChat,
        addMessage,
        selectedModel,
        setSelectedModel,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
