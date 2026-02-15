import { createTheme } from '@mui/material/styles';

// Custom Material-UI Theme with "Modern Crystal" Light Mode
export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#6366f1', // Vibrant Indigo
            light: '#818cf8',
            dark: '#4f46e5',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#8b5cf6', // Violet
            light: '#a78bfa',
            dark: '#7c3aed',
            contrastText: '#ffffff',
        },
        background: {
            default: '#f8fafc', // Light slate gray
            paper: '#ffffff',
        },
        text: {
            primary: '#1e293b', // Deep slate grey
            secondary: '#64748b', // Muted slate
        },
        // AI model accent colors (keeping them vibrant)
        gpt: {
            main: '#10a37f',
            light: '#d1fae5',
            dark: '#065f46',
        },
        claude: {
            main: '#d97706',
            light: '#fef3c7',
            dark: '#92400e',
        },
        gemini: {
            main: '#2563eb',
            light: '#dbeafe',
            dark: '#1e40af',
        },
    },
    typography: {
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        h1: {
            fontWeight: 800,
            fontSize: '2.5rem',
            color: '#1e293b',
        },
        h2: {
            fontWeight: 700,
            fontSize: '2rem',
        },
        h3: {
            fontWeight: 700,
            fontSize: '1.5rem',
        },
        h4: {
            fontWeight: 700,
            fontSize: '1.25rem',
        },
        h5: {
            fontWeight: 700,
            fontSize: '1.125rem',
        },
        h6: {
            fontWeight: 700,
            fontSize: '1rem',
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.6,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.5,
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 16,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#f8fafc',
                    backgroundImage: 'radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.03) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(139, 92, 246, 0.03) 0px, transparent 50%)',
                    backgroundAttachment: 'fixed',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    padding: '10px 24px',
                    boxShadow: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-1px)',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    },
                },
                contained: {
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                    '&:hover': {
                        background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 12,
                        backgroundColor: '#ffffff',
                        transition: 'all 0.3s ease',
                        '& fieldset': {
                            borderColor: '#e2e8f0',
                            borderWidth: 1.5,
                        },
                        '&:hover fieldset': {
                            borderColor: '#cbd5e1',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#6366f1',
                            borderWidth: 2,
                        },
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    backgroundColor: '#ffffff',
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#e2e8f0',
                        borderWidth: 1.5,
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#cbd5e1',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#6366f1',
                        borderWidth: 2,
                    },
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    marginBottom: 8,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        backgroundColor: '#f1f5f9',
                        transform: 'translateX(4px)',
                    },
                },
            },
        },
    },
});

// Helper function to get model-specific gradient
export const getModelGradient = (modelId) => {
    const gradients = {
        gpt: 'linear-gradient(135deg, #10a37f 0%, #1fc99f 100%)',
        claude: 'linear-gradient(135deg, #d97706 0%, #fbbf24 100%)',
        gemini: 'linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)',
    };
    return gradients[modelId] || 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)';
};

// Helper function to get model-specific color
export const getModelColor = (modelId) => {
    const colors = {
        gpt: '#10a37f',
        claude: '#d97706',
        gemini: '#2563eb',
    };
    return colors[modelId] || '#6366f1';
};
