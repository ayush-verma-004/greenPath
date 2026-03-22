# Deployment Fix Walkthrough

I've successfully updated your backend to support a production-ready AI deployment! Here's a summary of what was completed and what you need to do next to deploy the AI.

## 🛠️ Changes Made

1. **[backend/routes/aiRoutes.js](file:///c:/Users/MPC/Downloads/Greenpath/Greenpath/backend/routes/aiRoutes.js)**: Updated the hardcoded `https://greenpath-1.onrender.com/predict` URL to use the `process.env.AI_SERVICE_URL` environment variable. This allows the Node.js backend to talk to the AI service dynamically, no matter where it's deployed.
2. **[backend/.env](file:///c:/Users/MPC/Downloads/Greenpath/Greenpath/backend/.env)**: Added a fallback for `AI_SERVICE_URL` pointing to `http://127.0.0.1:8000/predict` so local development still works out of the box.

## 🚀 Final Steps: Deploying the AI on Render

Now that the code is ready, you need to deploy the AI as its own separate **Web Service** on Render so they can both run simultaneously.

Follow these 5 simple steps on your Render Dashboard:
1. Click **New** -> **Web Service** and connect your GitHub repository (the same one you've been using).
2. For the **Root Directory**, type: `backend/ai`
3. Render should automatically detect it's a Python environment. For the **Build Command**, type:
   ```bash
   pip install -r requirements.txt
   ```
4. For the **Start Command**, type:
   ```bash
   uvicorn app:app --host 0.0.0.0 --port $PORT
   ```
5. Click **Deploy Web Service**!

### Connecting Node.js to the new AI Service

Once Render finishes deploying your new Python AI service, it will give you a public URL (e.g., `https://greenpath-ai.onrender.com`).

1. Copy that new URL.
2. Go back to your **original Node.js Web Service** on Render.
3. Click on **Environment Variables**.
4. Add a new variable:
   - Key: `AI_SERVICE_URL`
   - Value: `https://your-new-python-ai-url.onrender.com/predict` *(replace with the actual url!)*
5. Click **Save Changes** (Render will automatically restart the Node.js server).

🎉 **You're all set!** Your frontend will call your Node.js backend, and the Node.js backend will correctly proxy the requests to your dedicated Python AI service.
