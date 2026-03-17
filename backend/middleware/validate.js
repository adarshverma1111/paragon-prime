const { body, validationResult } = require("express-validator");

// ── Popup form validation ─────────────────────────────────────
const popupRules = [
  body("fullName")
    .trim()
    .notEmpty().withMessage("Full name is required")
    .isLength({ max: 120 }).withMessage("Name too long"),

  body("email")
    .trim()
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email address")
    .normalizeEmail(),

  body("phone")
    .trim()
    .notEmpty().withMessage("Phone number is required")
    .matches(/^[\d\s\+\-\(\)]{7,20}$/).withMessage("Invalid phone number"),

  body("query")
    .optional()
    .trim()
    .isLength({ max: 2000 }).withMessage("Query too long"),
];

// ── Contact-page form validation ──────────────────────────────
const contactRules = [
  body("firstName")
    .trim()
    .notEmpty().withMessage("First name is required")
    .isLength({ max: 60 }).withMessage("First name too long"),

  body("lastName")
    .trim()
    .notEmpty().withMessage("Last name is required")
    .isLength({ max: 60 }).withMessage("Last name too long"),

  body("email")
    .trim()
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email address")
    .normalizeEmail(),

  body("phone")
    .trim()
    .notEmpty().withMessage("Phone number is required")
    .matches(/^[\d\s\+\-\(\)]{7,20}$/).withMessage("Invalid phone number"),

  body("address")
    .optional()
    .trim()
    .isLength({ max: 255 }).withMessage("Address too long"),

  body("query")
    .optional()
    .trim()
    .isLength({ max: 2000 }).withMessage("Message too long"),
];

// ── Middleware that returns errors ────────────────────────────
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      message: "Validation failed",
      errors: errors.array().map((e) => e.msg),
    });
  }
  next();
};

module.exports = { popupRules, contactRules, validate };
