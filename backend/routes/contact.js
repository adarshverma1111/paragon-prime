const express = require("express");
const router = express.Router();
const { sendConsultationMail } = require("../mailer");
const { validateContactForm } = require("../validator");

// POST /api/contact
router.post("/", async (req, res) => {
  const { fullName, email, phone, query } = req.body;

  // ── Validation ──────────────────────────────────────────────
  const errors = validateContactForm({ fullName, email, phone });
  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  // ── Send Mail ───────────────────────────────────────────────
  try {
    await sendConsultationMail({ fullName, email, phone, query });
    return res.status(200).json({
      success: true,
      message: "Your message has been sent! Our experts will contact you soon.",
    });
  } catch (err) {
    console.error("Mail send error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
    });
  }
});

module.exports = router;
