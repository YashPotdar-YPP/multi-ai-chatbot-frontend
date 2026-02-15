import { Box } from "@mui/material";
import ModelSelector from "./ModelSelector";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

const ChatArea = () => {
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
