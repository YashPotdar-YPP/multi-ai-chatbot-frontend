import {
  Box,
  TextField,
  IconButton,
  CircularProgress,
  InputAdornment,
} from "@mui/material";
import { Send, AttachFile, Mic } from "@mui/icons-material";
import { useState } from "react";
import { useChat } from "../ChatContext";
import { models } from "../models";

const ChatInput = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const { addMessage, selectedModel, currentChat } = useChat();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() && !loading) {
      const userMessage = {
        text: input,
        sender: "user",
        timestamp: new Date().toISOString(),
      };
      addMessage(userMessage);
      const currentInput = input;
      setInput("");
      setLoading(true);

      const model = models.find((m) => m.id === selectedModel);
      if (model) {
        try {
          const conversationHistory = currentChat.messages.map((msg) => ({
            role: msg.sender === "user" ? "user" : "assistant",
            content: msg.text,
          }));

          const response = await model.getResponse(
            currentInput,
            conversationHistory,
          );
          const aiMessage = {
            text: response,
            sender: "ai",
            timestamp: new Date().toISOString(),
          };
          addMessage(aiMessage);
        } catch (error) {
          console.error("Error getting AI response:", error);
          const errorMessage = {
            text: `Error: ${error.message}. Please ensure the backend server is running.`,
            sender: "ai",
            timestamp: new Date().toISOString(),
          };
          addMessage(errorMessage);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    }
  };

  return (
    <Box
      sx={{
        p: { xs: 2.5, md: 4 },
        background: "#ffffff",
        borderTop: "1px solid #e2e8f0",
        boxShadow: "0 -4px 6px -1px rgba(0, 0, 0, 0.05)",
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          multiline
          maxRows={6}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
          disabled={loading}
          placeholder="Message Multi-AI..."
          autoComplete="off"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton size="small" sx={{ color: "#94a3b8" }}>
                  <AttachFile fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  sx={{ color: "#94a3b8", mr: 1.5 }}
                  disabled={loading}
                >
                  <Mic fontSize="small" />
                </IconButton>
                <IconButton
                  type="submit"
                  disabled={!input.trim() || loading}
                  sx={{
                    background:
                      "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                    color: "white",
                    width: 44,
                    height: 44,
                    transition:
                      "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    boxShadow: "0 4px 6px -1px rgba(99, 102, 241, 0.4)",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                      transform: "scale(1.08)",
                      boxShadow: "0 10px 15px -3px rgba(99, 102, 241, 0.3)",
                    },
                    "&:disabled": {
                      background: "#f1f5f9",
                      color: "#cbd5e1",
                      boxShadow: "none",
                    },
                  }}
                >
                  {loading ? (
                    <CircularProgress size={20} color="inherit" thickness={5} />
                  ) : (
                    <Send fontSize="small" />
                  )}
                </IconButton>
              </InputAdornment>
            ),
            sx: {
              py: 2,
              px: 2.5,
              borderRadius: 4,
              backgroundColor: "#f8fafc",
              fontSize: "0.95rem",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#e2e8f0",
                borderWidth: 1.5,
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#cbd5e1",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#6366f1",
                borderWidth: 2,
              },
            },
          }}
        />
      </form>
    </Box>
  );
};

export default ChatInput;
