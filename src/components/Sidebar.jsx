import {
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
} from "@mui/material";
import { Add, Chat, AutoAwesome } from "@mui/icons-material";
import { useChat } from "../ChatContext";

const Sidebar = () => {
  const { chats, selectChat, addChat, currentChatId } = useChat();

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "320px" },
        height: "100%",
        background: "rgba(255, 255, 255, 0.4)",
        backdropFilter: "blur(20px)",
        borderRight: "1px solid #e2e8f0",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Header with gradient */}
      <Box
        sx={{
          p: 3,
          background:
            "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <AutoAwesome sx={{ fontSize: 32, mr: 1.5, color: "#6366f1" }} />
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Multi-AI Chat
          </Typography>
        </Box>

        <Button
          variant="contained"
          fullWidth
          startIcon={<Add />}
          onClick={addChat}
          sx={{
            py: 1.5,
            borderRadius: 3,
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            boxShadow: "0 4px 14px 0 rgba(99, 102, 241, 0.3)",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
              transform: "translateY(-2px)",
              boxShadow: "0 6px 20px rgba(99, 102, 241, 0.2)",
            },
          }}
        >
          New Chat
        </Button>
      </Box>

      {/* Chat List */}
      <Box sx={{ flex: 1, overflow: "auto", p: 2 }}>
        <Typography
          variant="caption"
          sx={{
            px: 2,
            py: 1,
            color: "text.secondary",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 1.2,
          }}
        >
          Recent Chats
        </Typography>

        <List sx={{ mt: 1 }}>
          {chats.map((chat) => {
            const lastMessage =
              chat.messages.length > 0
                ? chat.messages[chat.messages.length - 1]
                : null;
            const isActive = chat.id === currentChatId;

            return (
              <ListItem
                key={chat.id}
                onClick={() => selectChat(chat.id)}
                sx={{
                  borderRadius: 3,
                  mb: 1,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  background: isActive
                    ? "rgba(99, 102, 241, 0.08)"
                    : "transparent",
                  border: isActive
                    ? "1px solid rgba(99, 102, 241, 0.2)"
                    : "1px solid transparent",
                  "&:hover": {
                    background: isActive
                      ? "rgba(99, 102, 241, 0.12)"
                      : "rgba(0, 0, 0, 0.03)",
                    transform: "translateX(4px)",
                  },
                }}
              >
                <Chat
                  sx={{
                    mr: 2,
                    color: isActive ? "#6366f1" : "#94a3b8",
                    fontSize: 20,
                  }}
                />
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? "#1e293b" : "#64748b",
                      }}
                    >
                      {chat.title}
                    </Typography>
                  }
                  secondary={
                    lastMessage && (
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#94a3b8",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          display: "block",
                        }}
                      >
                        {lastMessage.text.substring(0, 40)}
                        {lastMessage.text.length > 40 ? "..." : ""}
                      </Typography>
                    )
                  }
                />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
