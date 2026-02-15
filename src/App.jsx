import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ChatProvider } from "./ChatContext";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ChatProvider>
        <Box
          sx={{
            display: "flex",
            height: "100vh",
            flexDirection: { xs: "column", md: "row" },
            background: "#f8fafc",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.03) 0%, transparent 50%)",
              pointerEvents: "none",
            },
          }}
        >
          <Sidebar />
          <ChatArea />
        </Box>
      </ChatProvider>
    </ThemeProvider>
  );
}

export default App;
