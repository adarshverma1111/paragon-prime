const Contact = require("../models/Contact");
const sendEmail = require("../utils/sendEmail");
const adminEmailTemplate = require("../templates/adminEmail");
const clientEmailTemplate = require("../templates/clientEmail");

// ── Shared email dispatcher ───────────────────────────────────
const dispatchEmails = async (doc) => {
  const adminTpl  = adminEmailTemplate(doc);
  const clientTpl = clientEmailTemplate(doc);

  const [adminOk, clientOk] = await Promise.all([
    sendEmail({ to: process.env.ADMIN_EMAIL,  replyTo: doc.email, ...adminTpl }),
    sendEmail({ to: doc.email, replyTo: process.env.FROM_EMAIL,   ...clientTpl }),
  ]);

  doc.adminEmailSent  = adminOk;
  doc.clientEmailSent = clientOk;
  await doc.save();

  if (!adminOk)  console.warn(`⚠️  Admin email failed for contact ${doc._id}`);
  if (!clientOk) console.warn(`⚠️  Client email failed for contact ${doc._id}`);
};

// ────────────────────────────────────────────────────────────────
// POST /api/contact/popup
// Fields: fullName, email, phone, query
// ────────────────────────────────────────────────────────────────
exports.submitPopup = async (req, res) => {
  try {
    const { fullName, email, phone, query = "" } = req.body;

    const doc = await Contact.create({
      source: "popup",
      fullName,
      email,
      phone,
      query,
    });

    await dispatchEmails(doc);

    return res.status(201).json({
      success: true,
      message: "Query received. We will contact you shortly.",
    });
  } catch (err) {
    console.error("submitPopup error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};

// ────────────────────────────────────────────────────────────────
// POST /api/contact/page
// Fields: firstName, lastName, email, phone, address, query
// ────────────────────────────────────────────────────────────────
exports.submitContactPage = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, address = "", query = "" } = req.body;

    const doc = await Contact.create({
      source: "contact",
      firstName,
      lastName,
      fullName: `${firstName} ${lastName}`.trim(),
      email,
      phone,
      address,
      query,
    });

    await dispatchEmails(doc);

    return res.status(201).json({
      success: true,
      message: "Message sent successfully. We will contact you soon.",
    });
  } catch (err) {
    console.error("submitContactPage error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};
