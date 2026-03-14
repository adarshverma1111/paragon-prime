# Paragon Prime Infotech — Consultation Form Backend

## 📁 Project Structure

```
backend/
├── server.js               ← Express app entry point
├── package.json
├── .env.example            ← Copy to .env and fill in your values
├── routes/
│   └── contact.js          ← POST /api/contact handler
├── services/
│   └── mailer.js           ← Nodemailer + HTML email template
├── utils/
│   └── validator.js        ← Form validation
└── FRONTEND_CHANGES.js     ← Paste these changes into ConsultationPopup.jsx
```

---

## 🚀 Setup (5 minutes)

### 1 — Install dependencies
```bash
cd backend
npm install
```

### 2 — Create your `.env` file
```bash
cp .env.example .env
```
Open `.env` and fill in:

| Variable        | Description |
|-----------------|-------------|
| `MAIL_USER`     | Your Gmail address used to SEND emails |
| `MAIL_PASS`     | Gmail **App Password** (not your login password) |
| `RECEIVER_MAIL` | Email that RECEIVES lead notifications |
| `FRONTEND_URL`  | Your frontend URL (for CORS) |

### 3 — Generate a Gmail App Password
1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Select **"Mail"** and your device
3. Copy the 16-character password → paste into `MAIL_PASS`

> ⚠️ 2-Step Verification must be enabled on your Google account.

### 4 — Run the server
```bash
# Development (auto-reload)
npm run dev

# Production
npm start
```
Server starts at **http://localhost:5000**

---

## 🔗 API Endpoint

**POST** `/api/contact`

### Request Body (JSON)
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+91-9876543210",
  "query": "I need a mobile app for my business."
}
```

### Success Response (200)
```json
{
  "success": true,
  "message": "Your message has been sent! Our experts will contact you soon."
}
```

### Error Response (400 / 500)
```json
{
  "success": false,
  "errors": ["A valid email address is required."]
}
```

---

## 🔒 Security Features
- **Rate limiting** — Max 10 submissions per IP per 15 minutes
- **CORS** — Only allows requests from your frontend URL
- **Input validation** — Server-side validation on all required fields
- **No secrets in code** — All credentials stay in `.env`

---

## 🌐 Deploying to Production

### Option A — Railway / Render / Fly.io
1. Push code to GitHub
2. Connect repo to Railway/Render
3. Add your `.env` variables in the dashboard
4. Deploy — you'll get a public URL like `https://yourapp.railway.app`
5. Update `FRONTEND_URL` in env + update fetch URL in your React frontend

### Option B — VPS (Ubuntu)
```bash
npm install -g pm2
pm2 start server.js --name paragon-backend
pm2 save && pm2 startup
```

---

## ✉️ What the Email Looks Like
- Branded header with **Paragon Prime Infotech** name
- Orange accent bar matching your site
- Clean table with Full Name, Email (clickable), Phone (clickable), Query
- **"Reply to [Name]"** CTA button — clicking it opens a reply directly to the lead
- Timestamp in IST
- Plain-text fallback included
