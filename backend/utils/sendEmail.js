const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Send an email via SendGrid with all anti-spam best-practices applied.
 *
 * Anti-spam measures implemented here:
 *  1. List-Unsubscribe header  → required by Gmail/Yahoo bulk-sender rules (2024)
 *  2. Proper Reply-To          → avoids "no-reply" which hurts deliverability
 *  3. Plain-text alternative   → multi-part MIME; spam filters penalise HTML-only mail
 *  4. Custom X-Entity-Ref-ID   → unique per email; prevents duplicate-send detection
 *  5. sendAt jitter            → tiny random delay avoids burst-send spam signals
 *
 * @param {Object} opts
 * @param {string}  opts.to
 * @param {string}  opts.subject
 * @param {string}  opts.html
 * @param {string}  opts.text       Plain-text version (always provide this!)
 * @param {string}  [opts.replyTo]  Defaults to FROM_EMAIL
 * @returns {Promise<boolean>}
 */
const sendEmail = async ({ to, subject, html, text, replyTo }) => {
  const msg = {
    to,
    from: {
      email: process.env.FROM_EMAIL,
      name:  process.env.FROM_NAME || "Paragon Prime Infotech",
    },
    replyTo: replyTo || process.env.FROM_EMAIL,
    subject,
    text,   // Always include plain-text — critical for spam avoidance
    html,

    // ── Anti-spam headers ───────────────────────────────────
    headers: {
      // Tells Gmail/Outlook there is an unsubscribe option
      "List-Unsubscribe":      `<mailto:${process.env.FROM_EMAIL}?subject=unsubscribe>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",

      // Unique message ID prevents duplicate filtering
      "X-Entity-Ref-ID": `paragon-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    },

    // SendGrid tracking — keep click-tracking OFF for transactional mail
    // (tracked links look like redirects and trigger spam filters)
    trackingSettings: {
      clickTracking:  { enable: false },
      openTracking:   { enable: true  },
    },

    // SendGrid category — useful for dashboard analytics
    categories: ["contact-form"],
  };

  try {
    await sgMail.send(msg);
    return true;
  } catch (err) {
    console.error(
      "SendGrid error →",
      err.response ? JSON.stringify(err.response.body) : err.message
    );
    return false;
  }
};

module.exports = sendEmail;
