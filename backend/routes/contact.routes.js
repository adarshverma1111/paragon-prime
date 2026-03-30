const express = require("express");
const router  = express.Router();

const { contactLimiter } = require("../middleware/rateLimiter");
const { popupRules, contactRules, validate } = require("../middleware/validate");
const { submitPopup, submitContactPage } = require("../controllers/contact.controller");

/**
 * POST /api/contact/popup
 * — ConsultationPopup form
 */
router.post(
  "/popup",
  contactLimiter,
  popupRules,
  validate,
  submitPopup
);

/**
 * POST /api/contact/page
 * — Contact Page form
 */
router.post(
  "/page",
  contactLimiter,
  contactRules,
  validate,
  submitContactPage
);

/**
 * Backward-compat alias — old endpoint used by both forms before split
 * POST /api/contact  (routes to popup handler)
 */
router.post(
  "/",
  contactLimiter,
  popupRules,
  validate,
  submitPopup
);

module.exports = router;
