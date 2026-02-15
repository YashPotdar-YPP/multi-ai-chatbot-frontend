# Multi-AI Chatbot - Setup Guide

This guide will help you set up the Multi-AI chatbot application with real API integrations for OpenAI GPT-4, Anthropic Claude, and Google Gemini.

## 🎯 What Changed

Your application now uses **real AI APIs** instead of hardcoded responses! The backend server handles all API calls securely.

## 📋 Prerequisites

- Node.js (v18 or higher)
- API keys for the AI models you want to use

## 🔑 Step 1: Get API Keys

### OpenAI (GPT-4)

1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in
3. Go to **API Keys** section
4. Click **Create new secret key**
5. Copy the key (starts with `sk-...`)

### Anthropic (Claude)

1. Visit [Anthropic Console](https://console.anthropic.com/)
2. Sign up or log in
3. Go to **API Keys** section
4. Click **Create Key**
5. Copy the key (starts with `sk-ant-...`)

### Google (Gemini)

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click **Create API Key**
4. Copy the key (starts with `AIza...`)

## ⚙️ Step 2: Configure Backend

1. Navigate to the backend folder:

```bash
cd backend
```

2. Create a `.env` file:

```bash
copy .env.example .env
```

3. Open `.env` and add your API keys:

```env
OPENAI_API_KEY=sk-your-openai-key-here
ANTHROPIC_API_KEY=sk-ant-your-anthropic-key-here
GOOGLE_API_KEY=AIza-your-google-key-here
PORT=3001
```

**Note:** You can use any combination of API keys. If you only have one API key, just add that one - the other models will show an error message when selected.

## 🚀 Step 3: Run the Application

### Terminal 1 - Start Backend Server

```bash
cd backend
npm run dev
```

You should see:

```
🚀 Multi-AI Backend server is running on port 3001
📡 Health check: http://localhost:3001/health
💬 Chat endpoint: http://localhost:3001/api/chat

🔑 API Keys Status:
   OpenAI: ✅ Configured
   Anthropic: ✅ Configured
   Google: ✅ Configured
```

### Terminal 2 - Start Frontend (Already Running)

Your frontend is already running on `http://localhost:5173` (or similar). If not, run:

```bash
npm run dev
```

## 🎉 Step 4: Test the Application

1. Open your browser to the frontend URL
2. Select an AI model from the dropdown (GPT-4, Claude, or Gemini)
3. Type a message and press Send
4. You should get a real response from the selected AI model!

## 🔍 Troubleshooting

### "Failed to fetch" or "Network Error"

- Make sure the backend server is running on port 3001
- Check that there are no firewall issues blocking localhost connections

### "API Error" messages

- Verify your API keys are correct in the `.env` file
- Check that you have credits/quota available for the API
- Look at the backend terminal for detailed error messages

### Backend won't start

- Make sure you ran `npm install` in the backend folder
- Check that port 3001 is not already in use
- Verify your `.env` file exists and has the correct format

## 💰 Cost Considerations

- **OpenAI GPT-4**: ~$0.03 per 1K tokens (input) / ~$0.06 per 1K tokens (output)
- **Anthropic Claude**: ~$0.003 per 1K tokens (input) / ~$0.015 per 1K tokens (output)
- **Google Gemini**: Free tier available, then ~$0.00025 per 1K tokens

Start with small tests to understand costs. Most casual usage will be very inexpensive.

## 🎨 Features

- **Real AI Responses**: Get actual responses from GPT-4, Claude, and Gemini
- **Conversation History**: The AI remembers previous messages in the conversation
- **Multiple Chats**: Create and switch between different chat sessions
- **Model Switching**: Change AI models mid-conversation
- **Error Handling**: Graceful error messages if something goes wrong

## 📁 Project Structure

```
Multi-AI/
├── backend/              # Node.js backend server
│   ├── server.js        # Main server with AI integrations
│   ├── package.json     # Backend dependencies
│   └── .env            # API keys (DO NOT COMMIT)
├── src/                 # React frontend
│   ├── api.js          # API service layer
│   ├── models.js       # AI model configurations
│   └── components/     # React components
└── README.md           # This file
```

## 🔐 Security Notes

- **Never commit your `.env` file** to version control
- Keep your API keys secret
- The `.env` file is already in `.gitignore`
- Consider using environment-specific API keys for production

## 🆘 Need Help?

If you encounter any issues:

1. Check the browser console for frontend errors
2. Check the backend terminal for server errors
3. Verify all API keys are correctly configured
4. Make sure both frontend and backend are running

Enjoy your Multi-AI chatbot! 🤖✨
