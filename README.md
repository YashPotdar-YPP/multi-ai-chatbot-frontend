# Multi-AI Chatbot 🤖

A modern, beautiful chatbot application that lets you interact with multiple AI models including **OpenAI GPT-4**, **Anthropic Claude**, and **Google Gemini**.

![Multi-AI Chatbot](https://img.shields.io/badge/React-19.2.0-blue) ![Node.js](https://img.shields.io/badge/Node.js-Backend-green) ![AI Models](https://img.shields.io/badge/AI-GPT4%20%7C%20Claude%20%7C%20Gemini-purple)

## ✨ Features

- 🎯 **Multiple AI Models** - Switch between GPT-4, Claude, and Gemini
- 💬 **Real-time Chat** - Get actual responses from AI APIs (no hardcoded answers!)
- 🧠 **Conversation Memory** - AI remembers your conversation history
- 🎨 **Beautiful UI** - Modern, responsive design with Material-UI
- 🔄 **Multiple Chats** - Create and manage multiple chat sessions
- ⚡ **Fast & Reliable** - Built with React + Vite frontend and Node.js backend

## 🚀 Quick Start

### 1. Get API Keys

You'll need at least one API key from:

- [OpenAI](https://platform.openai.com/) for GPT-4
- [Anthropic](https://console.anthropic.com/) for Claude
- [Google AI Studio](https://makersuite.google.com/app/apikey) for Gemini

### 2. Setup Backend

```bash
cd backend
npm install
```

Create `backend/.env` file:

```env
OPENAI_API_KEY=your-key-here
ANTHROPIC_API_KEY=your-key-here
GOOGLE_API_KEY=your-key-here
PORT=3001
```

### 3. Run the Application

**Terminal 1 - Backend:**

```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**

```bash
npm run dev
```

Open your browser to the URL shown (usually `http://localhost:5173`)

## 📖 Full Documentation

For detailed setup instructions, troubleshooting, and more, see [SETUP_GUIDE.md](./SETUP_GUIDE.md)

## 🛠️ Tech Stack

**Frontend:**

- React 19
- Material-UI (MUI)
- Vite

**Backend:**

- Node.js
- Express
- OpenAI SDK
- Anthropic SDK
- Google Generative AI SDK

## 📁 Project Structure

```
Multi-AI/
├── backend/              # Node.js backend server
│   ├── server.js        # Main server with AI integrations
│   ├── package.json     # Backend dependencies
│   └── .env            # API keys configuration
├── src/                 # React frontend
│   ├── api.js          # API service layer
│   ├── models.js       # AI model configurations
│   ├── components/     # React components
│   └── ChatContext.jsx # State management
└── SETUP_GUIDE.md      # Detailed setup guide
```

## 🔐 Security

- Never commit your `.env` file
- Keep your API keys secret
- The `.env` file is already in `.gitignore`

## 📝 License

MIT

---

Built with ❤️ using React, Node.js, and the power of AI
