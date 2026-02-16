import {
  Select,
  MenuItem,
  FormControl,
  Box,
  Chip,
  Typography,
} from "@mui/material";
import { Psychology, AutoAwesome, SmartToy } from "@mui/icons-material";
import { useChat } from "../ChatContext";
import { models } from "../models";
import { getModelGradient, getModelColor } from "../theme";

const ModelSelector = () => {
  const { selectedModel, setSelectedModel } = useChat();

  const getModelIcon = (modelId) => {
    const icons = {
      gpt: <Psychology sx={{ fontSize: 20 }} />,
      claude: <SmartToy sx={{ fontSize: 20 }} />,
      gemini: <AutoAwesome sx={{ fontSize: 20 }} />,
    };
    return icons[modelId] || <SmartToy sx={{ fontSize: 20 }} />;
  };

  const selectedModelData = models.find((m) => m.id === selectedModel);

  return (
    <Box
      sx={{
        p: { xs: 2.5, md: 3 },
        pl: { xs: 8, md: 3 },
        background: "rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #e2e8f0",
        position: "relative",
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#64748b",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 0.5,
          }}
        >
          Active Environment
        </Typography>
        {selectedModelData && (
          <Chip
            icon={getModelIcon(selectedModel)}
            label={selectedModelData.name}
            size="small"
            sx={{
              background: getModelGradient(selectedModel),
              color: "white",
              fontWeight: 700,
              boxShadow: `0 4px 10px ${getModelColor(selectedModel)}30`,
              "& .MuiChip-icon": { color: "white" },
            }}
          />
        )}
      </Box>

      <FormControl fullWidth>
        <Select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          displayEmpty
          sx={{
            background: "#ffffff",
            "& .MuiSelect-select": {
              display: "flex",
              alignItems: "center",
              gap: 2,
              py: 1.5,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#e2e8f0",
              borderWidth: 1.5,
            },
          }}
        >
          {models.map((model) => (
            <MenuItem
              key={model.id}
              value={model.id}
              sx={{
                py: 2,
                px: 2.5,
                borderRadius: 2,
                mx: 1,
                my: 0.5,
                transition: "all 0.2s ease",
                "&:hover": {
                  background: "#f1f5f9",
                  transform: "translateX(4px)",
                },
                "&.Mui-selected": {
                  background: `${getModelColor(model.id)}15`,
                  "&:hover": {
                    background: `${getModelColor(model.id)}20`,
                  },
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2.5,
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: 2.5,
                    background: getModelGradient(model.id),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 4px 12px ${getModelColor(model.id)}40`,
                    color: "white",
                  }}
                >
                  {getModelIcon(model.id)}
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 700, color: "#1e293b" }}
                  >
                    {model.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "#64748b", fontWeight: 500 }}
                  >
                    {model.description}
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ModelSelector;
