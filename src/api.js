// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

/**
 * Send a chat message to the AI backend
 * @param {string} message - The user's message
 * @param {string} model - The AI model to use ('gpt', 'claude', or 'gemini')
 * @param {Array} conversationHistory - Previous messages in the conversation
 * @returns {Promise<string>} - The AI's response
 */
export async function sendChatMessage(message, model, conversationHistory = []) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message,
                model,
                conversationHistory,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to get response from AI');
        }

        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

/**
 * Check if the backend server is running
 * @returns {Promise<boolean>}
 */
export async function checkBackendHealth() {
    try {
        const response = await fetch(`${API_BASE_URL}/health`);
        const data = await response.json();
        return data.status === 'ok';
    } catch (error) {
        console.error('Backend health check failed:', error);
        return false;
    }
}
