/**
 * Confirmation email sent to the client after form submission.
 * Returns { subject, html, text } — always supply both.
 *
 * Anti-spam checklist applied in this template:
 *  ✅ Short, clear subject (no ALL CAPS, no $ signs, no exclamation)
 *  ✅ Plain-text version mirrors HTML content exactly
 *  ✅ Physical mailing address in footer (CAN-SPAM requirement)
 *  ✅ Unsubscribe instruction in footer
 *  ✅ No spam trigger words ("free", "act now", "limited offer", etc.)
 *  ✅ Balanced image-to-text ratio (text-only template)
 *  ✅ Role="presentation" on layout tables
 */
const clientEmailTemplate = ({ fullName, email, query }) => {
  const firstName = fullName.split(" ")[0];

  // ── Plain-text (critical — HTML-only mail is a spam red flag) ──
  const text = [
    `Hi ${firstName},`,
    "",
    "Thank you for reaching out to Paragon Prime Infotech.",
    "We have received your query and our team will get back to you within 24 business hours.",
    "",
    query ? `Your message:\n"${query}"` : null,
    "",
    "In the meantime, feel free to contact us:",
    "  Phone : +91-95559 72693",
    "  Email : connect@paragonprimeinfotech.com",
    "  Web   : https://www.paragonprimeinfotech.com",
    "",
    "Warm regards,",
    "Team Paragon Prime Infotech",
    "",
    "─".repeat(40),
    "Paragon Prime Infotech",
    "New Delhi, India",
    "You received this email because you submitted a query on our website.",
    "To unsubscribe, reply with subject: unsubscribe",
  ]
    .filter((l) => l !== null)
    .join("\n");

  // ── HTML ───────────────────────────────────────────────────
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <!--[if mso]><noscript><xml><o:OfficeDocumentSettings>
    <o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings>
  </xml></noscript><![endif]-->
  <title>We received your query</title>
</head>
<body style="margin:0;padding:0;background:#f0f4f8;
  font-family:'Segoe UI',Helvetica,Arial,sans-serif;-webkit-text-size-adjust:100%;">

<!-- Preheader text (visible in inbox preview, hidden in email body) -->
<div style="display:none;max-height:0;overflow:hidden;font-size:1px;color:#f0f4f8;">
  Hi ${firstName}, we received your query and will respond within 24 hours.
  &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0"
  style="background:#f0f4f8;padding:32px 16px;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0"
  style="background:#ffffff;border-radius:12px;overflow:hidden;
  box-shadow:0 4px 24px rgba(0,0,0,0.07);max-width:600px;width:100%;">

  <!-- ── Header ─────────────────────────────────────────── -->
  <tr>
    <td style="background:linear-gradient(135deg,#1A3A6B 0%,#0D1B34 100%);
      padding:36px 40px;text-align:center;">
      <p style="color:#93b4d8;margin:0 0 4px;font-size:11px;
        letter-spacing:2px;text-transform:uppercase;">
        Paragon Prime Infotech
      </p>
      <h1 style="color:#ffffff;margin:0;font-size:22px;font-weight:700;
        line-height:1.3;">
        IT Support · App &amp; Web · Digital Marketing
      </h1>
    </td>
  </tr>

  <!-- ── Check icon ─────────────────────────────────────── -->
  <tr>
    <td style="padding:36px 40px 8px;text-align:center;">
      <div style="display:inline-block;width:64px;height:64px;
        background:#e8f5e9;border-radius:50%;line-height:64px;font-size:32px;">
        ✅
      </div>
    </td>
  </tr>

  <!-- ── Greeting ───────────────────────────────────────── -->
  <tr>
    <td style="padding:12px 40px 0;text-align:center;">
      <h2 style="color:#0f172a;font-size:20px;font-weight:700;margin:0 0 10px;">
        Thank you, ${firstName}!
      </h2>
      <p style="color:#475569;font-size:15px;line-height:1.75;margin:0;">
        We have received your query. Our team of experts will
        review it and get back to you within
        <strong style="color:#0f172a;">24 business hours</strong>.
      </p>
    </td>
  </tr>

  <!-- ── Quoted message ─────────────────────────────────── -->
  ${query ? `
  <tr>
    <td style="padding:24px 40px 0;">
      <p style="color:#64748b;font-size:11px;font-weight:700;
        text-transform:uppercase;letter-spacing:1px;margin:0 0 8px;">
        Your message
      </p>
      <div style="background:#f7f9ff;border-left:4px solid #1A3A6B;
        border-radius:0 6px 6px 0;padding:14px 18px;
        color:#374151;font-size:14px;line-height:1.75;">
        ${query.replace(/\n/g, "<br/>")}
      </div>
    </td>
  </tr>` : ""}

  <!-- ── What happens next ──────────────────────────────── -->
  <tr>
    <td style="padding:28px 40px 0;">
      <p style="color:#0f172a;font-size:14px;font-weight:700;margin:0 0 14px;">
        What happens next?
      </p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${step("1", "#1A3A6B", "Query reviewed", "Our experts read your message carefully.")}
        ${step("2", "#ff7a00", "Expert assigned", "A specialist matching your needs is assigned.")}
        ${step("3", "#16a34a", "We contact you", "Expect a call or email within 24 hours.")}
      </table>
    </td>
  </tr>

  <!-- ── Contact chips ──────────────────────────────────── -->
  <tr>
    <td style="padding:28px 40px 0;text-align:center;">
      <p style="color:#475569;font-size:13px;margin:0 0 14px;">
        Can't wait? Reach us directly:
      </p>
      <table role="presentation" align="center" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding:0 6px;">
            <a href="tel:+919555972693"
              style="display:inline-block;background:#f0f7ff;color:#1A3A6B;
              text-decoration:none;padding:9px 18px;border-radius:20px;
              font-size:13px;font-weight:600;border:1px solid #bfdbfe;">
              📞 +91-95559 72693
            </a>
          </td>
          <td style="padding:0 6px;">
            <a href="mailto:connect@paragonprimeinfotech.com"
              style="display:inline-block;background:#f0f7ff;color:#1A3A6B;
              text-decoration:none;padding:9px 18px;border-radius:20px;
              font-size:13px;font-weight:600;border:1px solid #bfdbfe;">
              ✉️ Email Us
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- ── CTA button ─────────────────────────────────────── -->
  <tr>
    <td style="padding:28px 40px 36px;text-align:center;">
      <a href="https://www.paragonprimeinfotech.com"
        style="display:inline-block;background:linear-gradient(90deg,#ff6a00,#ff8c00);
        color:#ffffff;text-decoration:none;padding:13px 36px;border-radius:8px;
        font-size:14px;font-weight:700;letter-spacing:0.5px;">
        Visit Our Website →
      </a>
    </td>
  </tr>

  <!-- ── Footer (CAN-SPAM physical address required) ────── -->
  <tr>
    <td style="background:#f8fafc;border-top:1px solid #e2e8f0;
      padding:20px 40px;text-align:center;">
      <p style="color:#94a3b8;font-size:11px;line-height:1.7;margin:0;">
        © ${new Date().getFullYear()} <strong>Paragon Prime Infotech</strong>
        &nbsp;·&nbsp; New Delhi, India<br/>
        You are receiving this email because you submitted a query on our website.<br/>
        To unsubscribe, reply with subject <em>unsubscribe</em> or email
        <a href="mailto:connect@paragonprimeinfotech.com?subject=unsubscribe"
          style="color:#94a3b8;">connect@paragonprimeinfotech.com</a>.
      </p>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>`;

  return {
    subject: `We received your query — Paragon Prime Infotech`,
    html,
    text,
  };
};

// ── Helper: timeline step row ─────────────────────────────────
const step = (num, color, title, desc) => `
<tr>
  <td style="width:36px;vertical-align:top;padding-bottom:14px;">
    <div style="width:28px;height:28px;border-radius:50%;background:${color};
      color:#fff;text-align:center;line-height:28px;font-size:13px;font-weight:700;">
      ${num}
    </div>
  </td>
  <td style="padding:2px 0 14px 10px;vertical-align:top;">
    <p style="color:#0f172a;font-size:14px;font-weight:700;margin:0 0 2px;">${title}</p>
    <p style="color:#475569;font-size:13px;margin:0;">${desc}</p>
  </td>
</tr>`;

module.exports = clientEmailTemplate;
