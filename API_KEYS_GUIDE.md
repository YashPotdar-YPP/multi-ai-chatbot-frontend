# 🔑 API Keys Quick Reference

## Where to Get Your API Keys

### 1. OpenAI (GPT-4)

- **Website:** https://platform.openai.com/
- **Steps:**
  1. Sign up or log in
  2. Click on your profile → "API Keys"
  3. Click "Create new secret key"
  4. Copy the key (starts with `sk-...`)
  5. **Important:** Save it immediately - you won't see it again!

- **Key Format:** `sk-proj-...` or `sk-...`
- **Free Credits:** $5 for new accounts (expires after 3 months)
- **Pricing:** ~$0.03 per 1K input tokens, ~$0.06 per 1K output tokens

### 2. Anthropic (Claude)

- **Website:** https://console.anthropic.com/
- **Steps:**
  1. Sign up or log in
  2. Go to "API Keys" section
  3. Click "Create Key"
  4. Give it a name and copy the key (starts with `sk-ant-...`)

- **Key Format:** `sk-ant-api03-...`
- **Free Credits:** $5 for new accounts
- **Pricing:** ~$0.003 per 1K input tokens, ~$0.015 per 1K output tokens

### 3. Google (Gemini)

- **Website:** https://makersuite.google.com/app/apikey
- **Alternative:** https://aistudio.google.com/app/apikey
- **Steps:**
  1. Sign in with your Google account
  2. Click "Get API Key" or "Create API Key"
  3. Select or create a project
  4. Copy the key (starts with `AIza...`)

- **Key Format:** `AIza...`
- **Free Tier:** 60 requests per minute (generous free tier!)
- **Pricing:** Very affordable, free tier covers most personal use

## 📝 Adding Keys to Your Project

1. Open `backend/.env` file
2. Paste your keys:

```env
OPENAI_API_KEY=sk-proj-your-actual-key-here
ANTHROPIC_API_KEY=sk-ant-api03-your-actual-key-here
GOOGLE_API_KEY=AIza-your-actual-key-here
PORT=3001
```

3. Save the file
4. Restart the backend server

## ⚠️ Important Notes

- **Keep keys secret** - Never share them or commit them to Git
- **One key is enough** - You don't need all three to start
- **Test with free tiers** - All providers offer free credits or tiers
- **Monitor usage** - Check your usage dashboards regularly
- **Rotate keys** - If a key is exposed, delete it and create a new one

## 🧪 Testing Your Setup

After adding keys, start the backend:

```bash
cd backend
npm run dev
```

You should see:

```
🔑 API Keys Status:
   OpenAI: ✅ Configured
   Anthropic: ✅ Configured
   Google: ✅ Configured
```

## 💡 Tips

1. **Start with Gemini** - It has the most generous free tier
2. **Use GPT-4 for complex tasks** - Best reasoning capabilities
3. **Try Claude for long conversations** - Great at maintaining context
4. **Monitor costs** - Set up billing alerts in each platform

## 🆘 Troubleshooting

### "Invalid API Key" Error

- Double-check you copied the entire key
- Make sure there are no extra spaces
- Verify the key hasn't been deleted from the provider's dashboard

### "Insufficient Quota" Error

- Check your account balance/credits
- Add payment method if free credits expired
- Wait if you hit rate limits

### Keys Not Loading

- Make sure `.env` file is in the `backend` folder
- Restart the backend server after adding keys
- Check for typos in variable names (must match exactly)
