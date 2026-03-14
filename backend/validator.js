/**
 * Validates consultation form fields.
 * Returns an array of error strings (empty = valid).
 */
function validateContactForm({ fullName, email, phone }) {
  const errors = [];

  // Full Name
  if (!fullName || fullName.trim().length < 2) {
    errors.push("Full name must be at least 2 characters.");
  }
  if (fullName && fullName.trim().length > 100) {
    errors.push("Full name must be under 100 characters.");
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.trim())) {
    errors.push("A valid email address is required.");
  }

  // Phone — accepts 7–15 digits, optional +, spaces, dashes, parentheses
  const phoneRegex = /^\+?[\d\s\-().]{7,15}$/;
  if (!phone || !phoneRegex.test(phone.trim())) {
    errors.push("A valid phone number is required (7–15 digits).");
  }

  return errors;
}

module.exports = { validateContactForm };
