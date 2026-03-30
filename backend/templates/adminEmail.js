/**
 * Email sent to the admin for every new lead.
 * Returns { subject, html, text } — always supply both html AND text.
 */
const adminEmailTemplate = ({ source, fullName, email, phone, address, query, createdAt }) => {
  const formLabel = source === "popup" ? "Consultation Popup" : "Contact Page";
  const receivedAt = new Date(createdAt).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  // ── Plain-text version (anti-spam essential) ────────────────
  const text = [
    "NEW LEAD — Paragon Prime Infotech",
    "=".repeat(40),
    `Form     : ${formLabel}`,
    `Name     : ${fullName}`,
    `Email    : ${email}`,
    `Phone    : ${phone}`,
    address ? `Address  : ${address}` : null,
    `Received : ${receivedAt}`,
    query ? `\nMessage:\n${query}` : null,
    "\n" + "=".repeat(40),
    "Reply directly to this email to contact the lead.",
  ]
    .filter(Boolean)
    .join("\n");

  // ── HTML version ────────────────────────────────────────────
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>New Lead — ${fullName}</title>
</head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:'Segoe UI',Arial,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"
  style="background:#f0f4f8;padding:32px 16px;">
  <tr><td align="center">
  <table role="presentation" width="600" cellpadding="0" cellspacing="0"
    style="background:#ffffff;border-radius:12px;overflow:hidden;
    box-shadow:0 4px 24px rgba(0,0,0,0.08);max-width:600px;width:100%;">

    <!-- Header -->
    <tr>
      <td style="background:linear-gradient(135deg,#1A3A6B 0%,#0D1B34 100%);
        padding:32px 40px;text-align:center;">
        <p style="color:#93b4d8;margin:0 0 4px;font-size:11px;letter-spacing:2px;
          text-transform:uppercase;">Paragon Prime Infotech</p>
        <h1 style="color:#ffffff;margin:0;font-size:20px;font-weight:700;">
          🔔 New Lead Received
        </h1>
      </td>
    </tr>

    <!-- Form badge -->
    <tr>
      <td style="padding:24px 40px 0;text-align:center;">
        <span style="display:inline-block;background:#fff3e0;color:#c45000;
          border:1px solid #ffcc80;border-radius:20px;padding:5px 16px;
          font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">
          📋 ${formLabel}
        </span>
      </td>
    </tr>

    <!-- Details table -->
    <tr>
      <td style="padding:24px 40px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
          style="border-collapse:collapse;">
          ${detailRow("👤 Name",    fullName)}
          ${detailRow("📧 Email",   `<a href="mailto:${email}" style="color:#1A3A6B;font-weight:600;">${email}</a>`)}
          ${detailRow("📞 Phone",   `<a href="tel:${phone}" style="color:#1A3A6B;font-weight:600;">${phone}</a>`)}
          ${address ? detailRow("📍 Address", address) : ""}
          ${detailRow("⏰ Received", receivedAt)}
        </table>
      </td>
    </tr>

    <!-- Query block -->
    ${query ? `
    <tr>
      <td style="padding:0 40px 24px;">
        <p style="color:#374151;font-size:12px;font-weight:700;
          text-transform:uppercase;letter-spacing:1px;margin:0 0 8px;">
          💬 Message / Query
        </p>
        <div style="background:#f7f9ff;border-left:4px solid #1A3A6B;
          border-radius:0 6px 6px 0;padding:14px 18px;
          color:#374151;font-size:14px;line-height:1.75;">
          ${query.replace(/\n/g, "<br/>")}
        </div>
      </td>
    </tr>` : ""}

    <!-- CTA -->
    <tr>
      <td style="padding:8px 40px 36px;text-align:center;">
        <a href="mailto:${email}?subject=Re%3A Your inquiry at Paragon Prime Infotech"
          style="display:inline-block;background:linear-gradient(90deg,#ff6a00,#ff8c00);
          color:#ffffff;text-decoration:none;padding:13px 32px;border-radius:8px;
          font-size:14px;font-weight:700;letter-spacing:0.5px;">
          Reply to ${fullName.split(" ")[0]} →
        </a>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background:#f8fafc;border-top:1px solid #e2e8f0;
        padding:16px 40px;text-align:center;">
        <p style="color:#94a3b8;font-size:11px;margin:0;">
          © ${new Date().getFullYear()} Paragon Prime Infotech &nbsp;·&nbsp;
          This is an automated internal notification.
        </p>
      </td>
    </tr>

  </table>
  </td></tr>
</table>
</body>
</html>`;

  return {
    subject: `🔔 New Lead: ${fullName} — ${formLabel}`,
    html,
    text,
  };
};

const detailRow = (label, value) => `
<tr>
  <td style="padding:9px 12px 9px 0;border-bottom:1px solid #f1f5f9;
    width:36%;color:#64748b;font-size:12px;font-weight:700;
    text-transform:uppercase;letter-spacing:0.6px;vertical-align:top;">
    ${label}
  </td>
  <td style="padding:9px 0 9px 12px;border-bottom:1px solid #f1f5f9;
    color:#0f172a;font-size:14px;font-weight:500;">
    ${value}
  </td>
</tr>`;

module.exports = adminEmailTemplate;
