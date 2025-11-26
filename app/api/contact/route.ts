import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email to CSouth (notification of new contact)
    const msgToCompany = {
      to: process.env.CONTACT_EMAIL || "info@csouthint.com",
      from: process.env.SENDGRID_FROM_EMAIL || "noreply@csouthint.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
New contact form submission from C-South Technologies website:

Name: ${name}
Email: ${email}

Message:
${message}

---
This email was sent from the contact form at csouthint.com
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #0a1b29; font-family: Arial, sans-serif;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; background-color: #0d2538; border-radius: 12px; overflow: hidden; border: 1px solid rgba(59, 163, 195, 0.2);">
          <!-- Header -->
          <tr>
            <td style="padding: 30px 40px; background: linear-gradient(135deg, #1a6a8a 0%, #165a75 100%);">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">
                New Contact Form Submission
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding-bottom: 20px;">
                    <p style="margin: 0 0 8px 0; color: #5eb8d4; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">From</p>
                    <p style="margin: 0; color: #ffffff; font-size: 16px; font-weight: 500;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 20px;">
                    <p style="margin: 0 0 8px 0; color: #5eb8d4; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</p>
                    <p style="margin: 0;">
                      <a href="mailto:${email}" style="color: #3ba3c3; font-size: 16px; text-decoration: none;">${email}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 10px; border-top: 1px solid rgba(59, 163, 195, 0.2);">
                    <p style="margin: 20px 0 12px 0; color: #5eb8d4; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                    <p style="margin: 0; color: #e2e8f0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 20px 40px; background-color: rgba(0, 0, 0, 0.2); border-top: 1px solid rgba(59, 163, 195, 0.1);">
              <p style="margin: 0; color: #64748b; font-size: 12px; text-align: center;">
                This email was sent from the contact form at csouthint.com
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    };

    // Send email
    await sgMail.send(msgToCompany);

    // Optional: Send confirmation email to the user
    const msgToUser = {
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL || "noreply@csouthint.com",
      subject: "Thank you for contacting C-South Technologies",
      text: `
Dear ${name},

Thank you for reaching out to C-South Technologies. We have received your message and will respond within 24-48 hours.

Your message:
"${message}"

Best regards,
C-South Technologies Team

---
info@csouthint.com
https://csouthint.com
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #0a1b29; font-family: Arial, sans-serif;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; background-color: #0d2538; border-radius: 12px; overflow: hidden; border: 1px solid rgba(59, 163, 195, 0.2);">
          <!-- Header -->
          <tr>
            <td style="padding: 30px 40px; background: linear-gradient(135deg, #1a6a8a 0%, #165a75 100%); text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">
                C-South Technologies
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 20px 0; color: #ffffff; font-size: 18px;">
                Dear ${name},
              </p>
              <p style="margin: 0 0 20px 0; color: #e2e8f0; font-size: 15px; line-height: 1.6;">
                Thank you for reaching out to C-South Technologies. We have received your message and will respond within 24-48 hours.
              </p>
              
              <div style="margin: 30px 0; padding: 20px; background-color: rgba(59, 163, 195, 0.1); border-radius: 8px; border-left: 3px solid #3ba3c3;">
                <p style="margin: 0 0 8px 0; color: #5eb8d4; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Your Message</p>
                <p style="margin: 0; color: #cbd5e1; font-size: 14px; line-height: 1.5; font-style: italic;">"${message}"</p>
              </div>
              
              <p style="margin: 0; color: #e2e8f0; font-size: 15px; line-height: 1.6;">
                Best regards,<br>
                <strong style="color: #ffffff;">C-South Technologies Team</strong>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 20px 40px; background-color: rgba(0, 0, 0, 0.2); border-top: 1px solid rgba(59, 163, 195, 0.1); text-align: center;">
              <p style="margin: 0 0 8px 0;">
                <a href="mailto:info@csouthint.com" style="color: #5eb8d4; font-size: 14px; text-decoration: none;">info@csouthint.com</a>
              </p>
              <p style="margin: 0; color: #64748b; font-size: 12px;">
                © 2025 C-South Technologies. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    };

    // Send confirmation to user
    await sgMail.send(msgToUser);

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("SendGrid Error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
