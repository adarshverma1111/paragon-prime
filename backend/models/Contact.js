const mongoose = require("mongoose");

/**
 * Unified schema for both form submissions:
 *   - ConsultationPopup  → source: "popup"    (sends fullName)
 *   - Contact Page form  → source: "contact"  (sends firstName + lastName)
 */
const contactSchema = new mongoose.Schema(
  {
    source: {
      type: String,
      enum: ["popup", "contact"],
      required: true,
    },

    // Normalised full name — always populated
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      maxlength: 120,
    },

    // Raw split fields (contact-page only; empty string for popup)
    firstName: { type: String, trim: true, default: "" },
    lastName:  { type: String, trim: true, default: "" },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email address"],
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      maxlength: 20,
    },

    address: { type: String, trim: true, default: "", maxlength: 255 },
    query:   { type: String, trim: true, default: "", maxlength: 2000 },

    // Email delivery tracking
    adminEmailSent:  { type: Boolean, default: false },
    clientEmailSent: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
