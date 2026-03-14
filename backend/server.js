const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const contactRouter = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ───────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["POST"],
    credentials: true,
  }),
);

// Rate limiter: max 10 form submissions per IP per 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    success: false,
    message: "Too many requests. Please try again after 15 minutes.",
  },
});
app.use("/api/contact", limiter);

// ─── Routes ──────────────────────────────────────────────────
app.use("/api/contact", contactRouter);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found." });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ success: false, message: "Internal server error." });
});

// ─── Start ────────────────────────────────────────────────────
const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`✅  Server running at http://localhost:${port}`);
  });

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.error(
        `⚠️  Port ${port} is already in use. ` +
          "Stop the other process or use a different PORT env value.",
      );
      if (port === 5000) {
        const fallbackPort = 5001;
        console.log(`🔁 Trying fallback port ${fallbackPort}...`);
        startServer(fallbackPort);
      } else {
        process.exit(1);
      }
    } else {
      console.error("Unhandled server error:", err);
      process.exit(1);
    }
  });
};

startServer(PORT);
