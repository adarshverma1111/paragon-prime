const rateLimit = require("express-rate-limit");

/**
 * 5 submissions per IP per 15 minutes.
 * Prevents spam submissions AND protects your SendGrid quota.
 */
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many submissions from this IP. Please try again after 15 minutes.",
  },
});

module.exports = { contactLimiter };
