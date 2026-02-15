import { sendChatMessage } from './api';

/**
 * Get AI response using the backend API
 * @param {string} input - User's message
 * @param {string} modelId - Model identifier ('gpt', 'claude', 'gemini')
 * @param {Array} conversationHistory - Previous messages
 * @returns {Promise<string>} - AI response
 */
const getAIResponse = async (input, modelId, conversationHistory = []) => {
  try {
    const response = await sendChatMessage(input, modelId, conversationHistory);
    return response;
  } catch (error) {
    console.error(`Error getting response from ${modelId}:`, error);
    // Return a user-friendly error message
    return `Sorry, I encountered an error: ${error.message}. Please make sure the backend server is running and API keys are configured.`;
  }
};

export const models = [
  {
    id: 'gpt',
    name: 'GPT-4',
    description: 'Powerful reasoning & complex problem solving',
    getResponse: (input, conversationHistory) => getAIResponse(input, 'gpt', conversationHistory)
  },
  {
    id: 'claude',
    name: 'Claude 3.5',
    description: 'Nuanced conversations & creative writing',
    getResponse: (input, conversationHistory) => getAIResponse(input, 'claude', conversationHistory)
  },
  {
    id: 'gemini',
    name: 'Gemini',
    description: 'Google\'s Gemini Pro model',
    getResponse: (input, conversationHistory) => getAIResponse(input, 'gemini', conversationHistory)
  }
];