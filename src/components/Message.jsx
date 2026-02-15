import { Box, Typography, Avatar } from "@mui/material";
import { Person, SmartToy } from "@mui/icons-material";

const Message = ({ message }) => {
  const isUser = message.sender === "user";
  const avatarIcon = isUser ? (
    <Person sx={{ fontSize: 24 }} />
  ) : (
    <SmartToy sx={{ fontSize: 24 }} />
  );
  const align = isUser ? "flex-end" : "flex-start";
  const timestamp = new Date(message.timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Box
      sx={{
        mb: 4,
        display: "flex",
        justifyContent: align,
        px: { xs: 2, md: 4 },
        animation: "slideUp 0.4s ease-out",
        "@keyframes slideUp": {
          from: { opacity: 0, transform: "translateY(12px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      {!isUser && (
        <Avatar
          sx={{
            mr: { xs: 1.5, md: 2 },
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            boxShadow: "0 4px 6px -1px rgba(99, 102, 241, 0.4)",
            width: 44,
            height: 44,
          }}
        >
          {avatarIcon}
        </Avatar>
      )}

      <Box
        sx={{
          maxWidth: { xs: "88%", md: "75%" },
          position: "relative",
        }}
      >
        <Box
          sx={{
            p: { xs: 2, md: 2.5 },
            borderRadius: isUser ? "20px 20px 4px 20px" : "20px 20px 20px 4px",
            background: isUser
              ? "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
              : "#ffffff",
            border: isUser ? "none" : "1px solid #e2e8f0",
            color: isUser ? "#ffffff" : "#1e293b",
            boxShadow: isUser
              ? "0 4px 14px 0 rgba(99, 102, 241, 0.3)"
              : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            transition: "all 0.2s ease",
            "&:hover": {
              boxShadow: isUser
                ? "0 6px 18px 0 rgba(99, 102, 241, 0.4)"
                : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              wordWrap: "break-word",
              lineHeight: 1.7,
              fontSize: "0.975rem",
              whiteSpace: "pre-wrap",
              fontWeight: 450,
            }}
          >
            {message.text}
          </Typography>

          <Typography
            variant="caption"
            sx={{
              opacity: 0.6,
              mt: 1.5,
              display: "block",
              fontSize: "0.7rem",
              fontWeight: 600,
              textAlign: isUser ? "right" : "left",
              color: isUser ? "rgba(255, 255, 255, 0.8)" : "#64748b",
            }}
          >
            {timestamp}
          </Typography>
        </Box>
      </Box>

      {isUser && (
        <Avatar
          sx={{
            ml: { xs: 1.5, md: 2 },
            background: "linear-gradient(135deg, #10b981 0%, #059669 100%)", // Green for User
            boxShadow: "0 4px 6px -1px rgba(16, 185, 129, 0.4)",
            width: 44,
            height: 44,
          }}
        >
          {avatarIcon}
        </Avatar>
      )}
    </Box>
  );
};

export default Message;
