
// require("dotenv").config();
// const express = require("express");
// const helmet = require("helmet");
// const cors = require("cors");
// const path = require("path");
// const fs = require("fs");

// const connectDB = require("./config/db");
// const contactRoutes = require("./routes/contact.routes");

// const app = express();

// // ─────────────────────────────
// // DB
// // ─────────────────────────────
// connectDB();

// // ─────────────────────────────
// // SECURITY
// // ─────────────────────────────
// app.use(helmet());

// // ─────────────────────────────
// // CORS
// // ─────────────────────────────
// const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
//   .split(",")
//   .map(o => o.trim())
//   .filter(Boolean);

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!origin) return callback(null, true);
//       if (allowedOrigins.includes(origin)) return callback(null, true);
//       callback(new Error(`CORS: origin ${origin} not allowed`));
//     },
//     methods: ["GET", "POST"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

// // ─────────────────────────────
// // BODY PARSER
// // ─────────────────────────────
// app.use(express.json({ limit: "10kb" }));
// app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// // ─────────────────────────────
// // API ROUTES
// // ─────────────────────────────
// app.use("/api/contact", contactRoutes);

// // ─────────────────────────────
// // HEALTH CHECK
// // ─────────────────────────────
// app.get("/health", (req, res) => {
//   res.json({ status: "ok" });
// });

// // ─────────────────────────────
// // FRONTEND (PRODUCTION FIX)
// // ─────────────────────────────

// // IMPORTANT: must match your build output
// const clientBuildPath = path.join(__dirname, "dist");

// console.log("DIR:", __dirname);
// console.log(
//   "BUILD EXISTS:",
//   fs.existsSync(path.join(clientBuildPath, "index.html"))
// );

// // Serve static React files
// app.use(express.static(clientBuildPath));

// // ─────────────────────────────
// // SPA FALLBACK (FIX REFRESH ISSUE)
// // ─────────────────────────────
// app.get("*", (req, res, next) => {
//   // allow API routes to pass through
//   if (req.path.startsWith("/api")) return next();

//   const indexPath = path.join(clientBuildPath, "index.html");

//   if (fs.existsSync(indexPath)) {
//     return res.sendFile(indexPath);
//   }

//   return res.status(404).send("Frontend not built on server");
// });

// // ─────────────────────────────
// // ERROR HANDLER (ONLY API ERRORS)
// // ─────────────────────────────
// app.use((err, req, res, next) => {
//   console.error("Unhandled error:", err.message);
//   res.status(500).json({
//     success: false,
//     message: "Internal server error",
//   });
// });

// // ─────────────────────────────
// // START SERVER
// // ─────────────────────────────
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contact.routes");

const app = express();

// ─────────────────────────────
// DB
// ─────────────────────────────
connectDB();

// ─────────────────────────────
// SECURITY
// ─────────────────────────────
app.use(helmet());

// ─────────────────────────────
// CORS
// ─────────────────────────────
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map(o => o.trim())
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

// ─────────────────────────────
// BODY
// ─────────────────────────────
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// ─────────────────────────────
// API ROUTES
// ─────────────────────────────
app.use("/api/contact", contactRoutes);

// ─────────────────────────────
// HEALTH
// ─────────────────────────────
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// ─────────────────────────────
// FRONTEND BUILD PATH (IMPORTANT FIX)
// ─────────────────────────────

// THIS is your requested fix:
const buildPath = path.join(__dirname, "dist");

// Serve static files
app.use(express.static(buildPath));

// ─────────────────────────────
// SPA FALLBACK (YOUR METHOD)
// ─────────────────────────────
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

// ─────────────────────────────
// ERROR HANDLER
// ─────────────────────────────
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.message);
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

// ─────────────────────────────
// START SERVER
// ─────────────────────────────
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});