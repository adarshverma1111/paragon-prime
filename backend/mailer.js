const nodemailer = require("nodemailer");

// ─── Transporter ──────────────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: "gmail", // change to "outlook" / "yahoo" or use SMTP below
  auth: {
    user: process.env.MAIL_USER,   // your Gmail address
    pass: process.env.MAIL_PASS,   // Gmail App Password (NOT your login password)
  },

  // ── Custom SMTP (uncomment if not using Gmail) ──────────────
  // host: process.env.SMTP_HOST,
  // port: Number(process.env.SMTP_PORT) || 587,
  // secure: false, // true for port 465, false for others
  // auth: {
  //   user: process.env.MAIL_USER,
  //   pass: process.env.MAIL_PASS,
  // },
});

// ─── HTML Email Template ──────────────────────────────────────────────────────
function buildEmailHTML({ fullName, email, phone, query }) {
  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Consultation Request</title>
</head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:'Segoe UI',Arial,sans-serif;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:16px;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.12);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1A3A6B 0%,#1f1a6b 100%);padding:36px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:800;letter-spacing:-0.5px;">
                Paragon Prime Infotech
              </h1>
              <p style="margin:6px 0 0;color:#93c5fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">
                New Consultation Request
              </p>
            </td>
          </tr>

          <!-- Orange accent bar -->
          <tr>
            <td style="background:linear-gradient(90deg,#ff6a00,#ff8c00);height:4px;"></td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:36px 40px;">

              <p style="margin:0 0 24px;color:#374151;font-size:15px;line-height:1.6;">
                👋 Hello, a new lead just came in via the consultation popup on your website.
                Here are the details:
              </p>

              <!-- Details Table -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:10px;overflow:hidden;border:1px solid #e5e7eb;">

                <tr style="background:#f8fafc;">
                  <td style="padding:14px 18px;width:35%;color:#6b7280;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #e5e7eb;">
                    Full Name
                  </td>
                  <td style="padding:14px 18px;color:#111827;font-size:15px;font-weight:700;border-bottom:1px solid #e5e7eb;">
                    ${fullName}
                  </td>
                </tr>

                <tr>
                  <td style="padding:14px 18px;color:#6b7280;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #e5e7eb;">
                    Email
                  </td>
                  <td style="padding:14px 18px;border-bottom:1px solid #e5e7eb;">
                    <a href="mailto:${email}" style="color:#1d4ed8;font-size:15px;text-decoration:none;">
                      ${email}
                    </a>
                  </td>
                </tr>

                <tr style="background:#f8fafc;">
                  <td style="padding:14px 18px;color:#6b7280;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #e5e7eb;">
                    Phone
                  </td>
                  <td style="padding:14px 18px;border-bottom:1px solid #e5e7eb;">
                    <a href="tel:${phone}" style="color:#1d4ed8;font-size:15px;text-decoration:none;">
                      ${phone}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="padding:14px 18px;color:#6b7280;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">
                    Query
                  </td>
                  <td style="padding:14px 18px;color:#374151;font-size:15px;line-height:1.6;">
                    ${query ? query.replace(/\n/g, "<br/>") : "<em style='color:#9ca3af;'>No query provided</em>"}
                  </td>
                </tr>

              </table>

              <!-- CTA Button -->
              <div style="text-align:center;margin:32px 0 8px;">
                <a href="mailto:${email}?subject=Re: Your Consultation Request - Paragon Prime Infotech"
                   style="display:inline-block;background:linear-gradient(90deg,#ff6a00,#ff8c00);
                          color:#ffffff;font-size:15px;font-weight:700;
                          padding:14px 36px;border-radius:8px;text-decoration:none;
                          box-shadow:0 4px 16px rgba(255,100,0,0.35);letter-spacing:0.3px;">
                  Reply to ${fullName} →
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;padding:20px 40px;border-top:1px solid #e5e7eb;text-align:center;">
              <p style="margin:0;color:#9ca3af;font-size:12px;line-height:1.6;">
                Submitted on <strong>${submittedAt} (IST)</strong><br/>
                This is an automated notification from your website contact form.<br/>
                © ${new Date().getFullYear()} Paragon Prime Infotech. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();
}

// ─── Send Function ────────────────────────────────────────────────────────────
async function sendConsultationMail({ fullName, email, phone, query }) {
  const mailOptions = {
    from: `"Paragon Prime Infotech Website" <${process.env.MAIL_USER}>`,
    to: process.env.RECEIVER_MAIL,          // your inbox
    replyTo: email,                          // reply goes directly to the lead
    subject: `🔔 New Consultation Request from ${fullName}`,
    html: buildEmailHTML({ fullName, email, phone, query }),

    // Plain-text fallback
    text: `
New Consultation Request
========================
Full Name : ${fullName}
Email     : ${email}
Phone     : ${phone}
Query     : ${query || "N/A"}
========================
Submitted : ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
    `.trim(),
  };

  const info = await transporter.sendMail(mailOptions);
  console.log(`📧  Mail sent — Message ID: ${info.messageId}`);
  return info;
}

module.exports = { sendConsultationMail };
