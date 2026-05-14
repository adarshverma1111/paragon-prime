// require("dotenv").config();
// const express = require("express");
// const helmet = require("helmet");
// const cors = require("cors");
// const connectDB = require("./config/db");
// const contactRoutes = require("./routes/contact.routes");

// const app = express();

// // ── Connect Database ──────────────────────────────────────────
// connectDB();

// // ── Security Headers ──────────────────────────────────────────
// app.use(helmet());

// // ── CORS ──────────────────────────────────────────────────────
// const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
//   .split(",")
//   .map((o) => o.trim())
//   .filter(Boolean);

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       // Allow requests with no origin (e.g. Postman / server-to-server)
//       if (!origin) return callback(null, true);
//       if (allowedOrigins.includes(origin)) return callback(null, true);
//       callback(new Error(`CORS: origin ${origin} not allowed`));
//     },
//     methods: ["GET", "POST"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

// // ── Body Parser ───────────────────────────────────────────────
// app.use(express.json({ limit: "10kb" }));
// app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// // ── Routes ────────────────────────────────────────────────────
// app.use("/api/contact", contactRoutes);




// // Health-check
// app.get("/health", (_req, res) => res.json({ status: "ok" }));

// // 404
// app.use((_req, res) => res.status(404).json({ success: false, message: "Route not found" }));

// // Global error handler
// app.use((err, _req, res, _next) => {
//   console.error("Unhandled error:", err.message);
//   res.status(500).json({ success: false, message: "Internal server error" });
// });

// // ── Start ─────────────────────────────────────────────────────
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀  Server running on http://localhost:${PORT}`);
// });

require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contact.routes");

const app = express();

// ── Connect Database ─────────────────────────────
connectDB();

// ── Security Headers ──────────────────────────────
app.use(helmet());

// ── CORS ──────────────────────────────────────────
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      callback(new Error(`CORS: origin ${origin} not allowed`));
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// ── Body Parser ───────────────────────────────────
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// ── API ROUTES ────────────────────────────────────
app.use("/api/contact", contactRoutes);

// ── Health Check ──────────────────────────────────
app.get("/health", (_req, res) =>
  res.json({ status: "ok" })
);

// ── SERVE REACT BUILD (IMPORTANT FIX FOR REFRESH) ─
const clientBuildPath = path.join(__dirname, "../client/dist");

app.use(express.static(clientBuildPath));

// IMPORTANT: React Router fix (refresh /dashboard not broken)
app.get("*", (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

// ── ERROR HANDLERS ────────────────────────────────
app.use((_req, res) =>
  res.status(404).json({ success: false, message: "Route not found" })
);

app.use((err, _req, res, _next) => {
  console.error("Unhandled error:", err.message);
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

// ── START SERVER ──────────────────────────────────
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});