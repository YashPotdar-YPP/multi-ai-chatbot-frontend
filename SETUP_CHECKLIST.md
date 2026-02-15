# ✅ Setup Checklist

Use this checklist to ensure everything is configured correctly.

## 📋 Pre-Setup

- [ ] Node.js is installed (v18 or higher)
- [ ] You have access to at least one AI provider account

## 🔑 Step 1: Get API Keys

- [ ] **OpenAI Account** (optional but recommended)
  - [ ] Signed up at https://platform.openai.com/
  - [ ] Created API key
  - [ ] Saved key securely (starts with `sk-...`)

- [ ] **Anthropic Account** (optional)
  - [ ] Signed up at https://console.anthropic.com/
  - [ ] Created API key
  - [ ] Saved key securely (starts with `sk-ant-...`)

- [ ] **Google Account** (optional, has generous free tier)
  - [ ] Visited https://makersuite.google.com/app/apikey
  - [ ] Created API key
  - [ ] Saved key securely (starts with `AIza...`)

## ⚙️ Step 2: Backend Configuration

- [ ] Navigated to `backend` folder
- [ ] Opened `backend/.env` file
- [ ] Added at least one API key to `.env`
- [ ] Saved the `.env` file
- [ ] Verified no extra spaces or quotes around keys

Example `.env` file:

```env
OPENAI_API_KEY=sk-proj-abc123...
ANTHROPIC_API_KEY=sk-ant-api03-xyz789...
GOOGLE_API_KEY=AIzadef456...
PORT=3001
```

## 🚀 Step 3: Start Backend Server

- [ ] Opened a new terminal
- [ ] Navigated to backend folder: `cd backend`
- [ ] Ran: `npm run dev`
- [ ] Server started successfully on port 3001
- [ ] Saw "✅ Configured" for at least one API key

Expected output:

```
🚀 Multi-AI Backend server is running on port 3001
📡 Health check: http://localhost:3001/health
💬 Chat endpoint: http://localhost:3001/api/chat

🔑 API Keys Status:
   OpenAI: ✅ Configured
   Anthropic: ✅ Configured
   Google: ✅ Configured
```

## 🎨 Step 4: Frontend (Already Running)

- [ ] Frontend is running on port 5173 (or similar)
- [ ] Can access the app in browser
- [ ] UI loads without errors

If frontend is not running:

- [ ] Open new terminal
- [ ] Navigate to project root
- [ ] Run: `npm run dev`

## 🧪 Step 5: Test the Application

- [ ] Opened browser to frontend URL
- [ ] Selected an AI model from dropdown
- [ ] Typed a test message (e.g., "Hello, how are you?")
- [ ] Clicked "Send"
- [ ] Received a response from the AI (not an error)
- [ ] Response is different from hardcoded answers

### Test Each Model

- [ ] **GPT-4** - Sent message and got response
- [ ] **Claude** - Sent message and got response
- [ ] **Gemini** - Sent message and got response

### Test Conversation History

- [ ] Sent first message: "My name is [Your Name]"
- [ ] Sent second message: "What's my name?"
- [ ] AI correctly remembered your name

## 🔍 Troubleshooting

If something doesn't work, check:

### Backend Issues

- [ ] Backend terminal shows no errors
- [ ] Port 3001 is not already in use
- [ ] `.env` file is in the `backend` folder (not root)
- [ ] API keys are valid and have credits/quota

### Frontend Issues

- [ ] Browser console (F12) shows no errors
- [ ] Frontend can reach backend (check Network tab)
- [ ] No CORS errors in console

### API Key Issues

- [ ] Keys are copied completely (no truncation)
- [ ] No extra spaces before or after keys
- [ ] Keys haven't been deleted from provider dashboard
- [ ] Account has available credits/quota

## ✨ Success Indicators

You know it's working when:

✅ Backend shows "✅ Configured" for your API keys
✅ Frontend loads without errors
✅ You can send a message and get a real AI response
✅ Responses are contextual and not hardcoded
✅ AI remembers previous messages in the conversation

## 📚 Additional Resources

- **Detailed Setup:** See `SETUP_GUIDE.md`
- **API Keys Help:** See `API_KEYS_GUIDE.md`
- **Implementation Details:** See `IMPLEMENTATION_SUMMARY.md`
- **Backend API Docs:** See `backend/README.md`

## 🎉 All Done?

If you checked all the boxes above, congratulations! Your Multi-AI chatbot is fully functional and ready to use.

### What to Try Next

1. **Compare Models:** Ask the same question to different models
2. **Long Conversations:** Test how well each model maintains context
3. **Complex Questions:** Try coding problems, creative writing, analysis
4. **Multiple Chats:** Create different chat sessions for different topics

---

**Need Help?** Check the troubleshooting section above or review the documentation files.
