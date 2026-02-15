import { Box, Typography } from "@mui/material";
import { useChat } from "../ChatContext";
import Message from "./Message";
import { useEffect, useRef } from "react";
import { AutoAwesome } from "@mui/icons-material";

const MessageList = () => {
  const { currentChat } = useChat();
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [currentChat?.messages]);

  if (!currentChat || currentChat.messages.length === 0) {
    return (
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 6,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: "24px",
            background:
              "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
            animation: "pulse 2s infinite",
            "@keyframes pulse": {
              "0%": {
                transform: "scale(1)",
                boxShadow: "0 0 0 0 rgba(99, 102, 241, 0.2)",
              },
              "70%": {
                transform: "scale(1.05)",
                boxShadow: "0 0 0 15px rgba(99, 102, 241, 0)",
              },
              "100%": {
                transform: "scale(1)",
                boxShadow: "0 0 0 0 rgba(99, 102, 241, 0)",
              },
            },
          }}
        >
          <AutoAwesome sx={{ fontSize: 40, color: "#6366f1" }} />
        </Box>
        <Typography
          variant="h3"
          sx={{
            mb: 2,
            fontWeight: 800,
            background: "linear-gradient(135deg, #1e293b 0%, #64748b 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: -1,
          }}
        >
          How can I help you today?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: 500,
            color: "#64748b",
            lineHeight: 1.7,
            fontSize: "1.1rem",
          }}
        >
          Choose from GPT-4, Claude, or Gemini to start a powerful conversation.
          Your creative and technical partner is ready.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      ref={scrollRef}
      sx={{
        flex: 1,
        overflowY: "auto",
        py: 4,
        px: { xs: 1, md: 2 },
        background: "transparent",
        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#cbd5e1",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#94a3b8",
        },
      }}
    >
      {currentChat.messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </Box>
  );
};

export default MessageList;
