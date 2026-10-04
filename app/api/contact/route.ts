import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const ALLOWED_SERVICES = [
  "Website",
  "AI Chatbot",
  "Custom Software",
  "Mobile App",
  "Not sure",
] as const;

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid JSON request payload." },
        { status: 400 }
      );
    }

    const { name, contact, service, message, honeypot } = body;

    // Honeypot spam check - if filled, silently accept
    if (honeypot && String(honeypot).trim().length > 0) {
      return NextResponse.json(
        { success: true, message: "Thank you for reaching out!" },
        { status: 200 }
      );
    }

    // Validation
    const cleanName = typeof name === "string" ? name.trim() : "";
    const cleanContact = typeof contact === "string" ? contact.trim() : "";
    const cleanService = typeof service === "string" ? service.trim() : "";
    const cleanMessage = typeof message === "string" ? message.trim() : "";

    const errors: Record<string, string> = {};

    if (!cleanName || cleanName.length < 2) {
      errors.name = "Please enter your name (at least 2 characters).";
    } else if (cleanName.length > 100) {
      errors.name = "Name must not exceed 100 characters.";
    }

    if (!cleanContact || cleanContact.length < 5) {
      errors.contact = "Please provide a valid email or phone number.";
    } else if (cleanContact.length > 100) {
      errors.contact = "Contact information must not exceed 100 characters.";
    } else {
      // Basic check: either email pattern or phone pattern (digits, +, spaces, hyphens)
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanContact);
      const isPhone = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/.test(cleanContact);
      if (!isEmail && !isPhone) {
        errors.contact = "Please provide a valid email address or phone number.";
      }
    }

    if (!cleanService || !ALLOWED_SERVICES.includes(cleanService as typeof ALLOWED_SERVICES[number])) {
      errors.service = "Please select a valid service option.";
    }

    if (!cleanMessage || cleanMessage.length < 10) {
      errors.message = "Please describe your project or inquiry (minimum 10 characters).";
    } else if (cleanMessage.length > 3000) {
      errors.message = "Message must not exceed 3000 characters.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { error: "Validation failed", errors },
        { status: 400 }
      );
    }

    const recipientEmail =
      process.env.CONTACT_TO_EMAIL?.trim() || "codix.team26@gmail.com";
    const senderEmail =
      process.env.CONTACT_FROM_EMAIL?.trim() ||
      "Team Codix Inquiries <onboarding@resend.dev>";
    const resendApiKey = process.env.RESEND_API_KEY?.trim();

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    if (resendApiKey && !resendApiKey.startsWith("re_your_")) {
      const resend = new Resend(resendApiKey);

      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F8FAFC; color: #12264F; margin: 0; padding: 24px; }
            .container { max-width: 580px; margin: 0 auto; background: #ffffff; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; }
            .header { background-color: #12264F; color: #ffffff; padding: 24px 32px; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em; }
            .header p { margin: 4px 0 0; font-size: 13px; color: #C5DAF8; }
            .body { padding: 32px; }
            .field { margin-bottom: 20px; }
            .label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #64748B; margin-bottom: 4px; }
            .value { font-size: 15px; color: #0F172A; font-weight: 500; }
            .service-tag { display: inline-block; padding: 4px 12px; background-color: #0B6BE6; color: #ffffff; border-radius: 9999px; font-size: 12px; font-weight: 600; }
            .message-box { background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #334155; }
            .footer { padding: 16px 32px; background: #F1F5F9; font-size: 12px; color: #64748B; border-top: 1px solid #E2E8F0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Project Inquiry</h1>
              <p>Team Codix Studio Lead Notification</p>
            </div>
            <div class="body">
              <div class="field">
                <div class="label">Client Name</div>
                <div class="value">${escapeHtml(cleanName)}</div>
              </div>
              <div class="field">
                <div class="label">Contact Info (Email / Phone)</div>
                <div class="value">${escapeHtml(cleanContact)}</div>
              </div>
              <div class="field">
                <div class="label">Service Required</div>
                <div><span class="service-tag">${escapeHtml(cleanService)}</span></div>
              </div>
              <div class="field">
                <div class="label">Project Brief / Message</div>
                <div class="message-box">${escapeHtml(cleanMessage)}</div>
              </div>
              <div class="field">
                <div class="label">Received At</div>
                <div class="value" style="font-size: 13px; color: #64748B;">${timestamp} (IST)</div>
              </div>
            </div>
            <div class="footer">
              Sent via Team Codix Website Inquiry Form
            </div>
          </div>
        </body>
        </html>
      `;

      const sendResult = await resend.emails.send({
        from: senderEmail,
        to: recipientEmail,
        replyTo: cleanContact.includes("@") ? cleanContact : undefined,
        subject: `[Team Codix Inquiry] ${cleanName} - ${cleanService}`,
        html: htmlContent,
      });

      if (sendResult.error) {
        console.error("Resend error sending contact email:", sendResult.error);
        return NextResponse.json(
          { error: "Could not deliver email through provider. Please contact us directly at codix.team26@gmail.com." },
          { status: 500 }
        );
      }
    } else {
      // Development mode / fallback when RESEND_API_KEY is not configured
      console.log(
        "[Contact API Notice] RESEND_API_KEY is not configured. Email logged to console:\n",
        JSON.stringify(
          {
            name: cleanName,
            contact: cleanContact,
            service: cleanService,
            message: cleanMessage,
            recipient: recipientEmail,
            time: timestamp,
          },
          null,
          2
        )
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! We have received your inquiry and will get back to you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unexpected error in contact route:", error);
    return NextResponse.json(
      { error: "An unexpected server error occurred. Please try again or reach out on WhatsApp." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
