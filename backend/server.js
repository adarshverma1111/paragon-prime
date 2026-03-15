const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");

// ─── Load .env from the same folder as server.js ─────────────────────────────
require("dotenv").config({ path: path.join(__dirname, ".env") });

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Startup credential check ─────────────────────────────────────────────────
const MAIL_USER = process.env.MAIL_USER;
const MAIL_PASS = process.env.MAIL_PASS;

if (!MAIL_USER || !MAIL_PASS) {
  console.error("\n──────────────────────────────────────────────");
  console.error("MISSING EMAIL CREDENTIALS IN .env FILE");
  console.error("──────────────────────────────────────────────");
  console.error("Create a .env file in your backend folder with:");
  console.error("  MAIL_USER=your_gmail@gmail.com");
  console.error("  MAIL_PASS=your_16_char_app_password");
  console.error("\nGenerate an App Password (2FA must be ON first):");
  console.error("  https://myaccount.google.com/apppasswords\n");
  process.exit(1);
}

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(express.json());
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173",
  "http://localhost:5174",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:5174",
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // Allow non-browser clients (curl/postman)
      if (allowedOrigins.includes(origin)) return callback(null, true);
      callback(new Error(`CORS policy: origin ${origin} not allowed`));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }),
);

// ─── Nodemailer Transporter ───────────────────────────────────────────────────
// Gmail option (commented out)
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: MAIL_USER,
//     pass: MAIL_PASS,
//   },
// });

const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  auth: {
    user: "apikey",               // literally "apikey"
    pass: process.env.SENDGRID_API_KEY,
  },
});

transporter.verify((error) => {
  if (error) {
    console.error(" Mail transporter error:", error.message);
    console.error(
      "   → Make sure MAIL_PASS is a Gmail App Password, NOT your login password"
    );
    console.error(
      "   → App Passwords: https://myaccount.google.com/apppasswords"
    );
  } else {
    console.log("✅ Mail transporter ready — sending from:", MAIL_USER);
  }
});

// ─── Validation Helper ────────────────────────────────────────────────────────
function validateContactForm({ fullName, email, phone }) {
  const errors = [];
  if (!fullName || fullName.trim().length < 2)
    errors.push("Full name must be at least 2 characters.");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.trim()))
    errors.push("A valid email address is required.");
  const phoneRegex = /^[+\d\s\-().]{7,20}$/;
  if (!phone || !phoneRegex.test(phone.trim()))
    errors.push("A valid phone number is required.");
  return errors;
}

// ─── POST /api/contact ────────────────────────────────────────────────────────
app.post("/api/contact", async (req, res) => {
  const {
    fullName: receivedFullName,
    firstName,
    lastName,
    email,
    phone,
    query,
  } = req.body;

  const fullName =
    (receivedFullName && receivedFullName.trim()) ||
    `${(firstName || "").trim()} ${(lastName || "").trim()}`.trim();

  const errors = validateContactForm({ fullName, email, phone });
  if (errors.length > 0)
    return res.status(422).json({ success: false, errors });

  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  const ownerMailOptions = {
    from: `"Paragon Prime Infotech" <${MAIL_USER}>`,
    to: process.env.OWNER_EMAIL || MAIL_USER,
    subject: `New Consultation Request from ${fullName.trim()}`,
    html: `...`, // keeping your full HTML template here
  };

  const userMailOptions = {
    from: `"Paragon Prime Infotech" <${MAIL_USER}>`,
    to: email.trim(),
    subject: `We received your query, ${fullName.trim().split(" ")[0]}!`,
    html: `...`, // keeping your full HTML template here
  };

  try {
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(userMailOptions),
    ]);
    console.log(`✅ Emails sent for: ${fullName.trim()} <${email.trim()}>`);
    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (err) {
    console.error("❌ Failed to send email:", err.message);
    return res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again later.",
    });
  }
});

// ─── Health Check ─────────────────────────────────────────────────────────────
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 Server running at http://localhost:${PORT}`);
  console.log(`   Health check: http://localhost:${PORT}/api/health\n`);
});