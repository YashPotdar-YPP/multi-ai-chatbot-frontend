import { Box, IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import ModelSelector from "./ModelSelector";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import { useChat } from "../ChatContext";

const ChatArea = () => {
  const { toggleSidebar } = useChat();

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "transparent",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Mobile Menu Button */}
      <IconButton
        onClick={toggleSidebar}
        sx={{
          display: { xs: "flex", md: "none" },
          position: "absolute",
          top: 16,
          left: 16,
          zIndex: 100,
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          "&:hover": {
            background: "rgba(255, 255, 255, 1)",
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      <ModelSelector />
      <Box
        sx={{
          flex: 1,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MessageList />
      </Box>
      <ChatInput />
    </Box>
  );
};

export default ChatArea;
