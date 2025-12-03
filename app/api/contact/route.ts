import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb } from "@/lib/db";
import sendgrid from "@sendgrid/mail";

const contactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(160),
  message: z.string().min(5).max(2_000),
  subject: z.string().max(200).optional(),
  company: z.string().max(160).optional(),
  phone: z.string().max(80).optional()
});

const sendgridApiKey = process.env.SENDGRID_API_KEY;
const emailFrom = process.env.EMAIL_FROM;
const contactTo = process.env.CONTACT_TO_EMAIL || emailFrom;

if (sendgridApiKey) {
  sendgrid.setApiKey(sendgridApiKey);
}

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 });
  }

  const payload = parsed.data;

  try {
    // Persist message
    const db = getDb();
    await db.query(
      `INSERT INTO contact_messages (name, email, message, subject, company, phone, user_agent, ip_address)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        payload.name,
        payload.email,
        payload.message,
        payload.subject ?? null,
        payload.company ?? null,
        payload.phone ?? null,
        req.headers.get("user-agent"),
        req.headers.get("x-forwarded-for") || null
      ]
    );
  } catch (error) {
    console.error("Failed to persist contact message", error);
    return NextResponse.json({ ok: false, message: "Failed to save message" }, { status: 500 });
  }

  // Fire-and-forget email; don't block response if email isn't configured.
  if (sendgridApiKey && emailFrom && contactTo) {
    try {
      await sendgrid.send({
        to: contactTo,
        from: emailFrom,
        replyTo: payload.email,
        subject: payload.subject || `New contact from ${payload.name}`,
        text: buildPlainText(payload),
        html: buildHtml(payload)
      });
    } catch (error) {
      console.error("Failed to send contact email", error);
      // We intentionally don't return 500 here because the message is already stored.
    }
  }

  return NextResponse.json({ ok: true });
}

function buildPlainText(payload: z.infer<typeof contactSchema>) {
  return [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Subject: ${payload.subject ?? "-"}`,
    `Company: ${payload.company ?? "-"}`,
    `Phone: ${payload.phone ?? "-"}`,
    "",
    payload.message
  ].join("\n");
}

function buildHtml(payload: z.infer<typeof contactSchema>) {
  return `
    <div style="font-family: system-ui, -apple-system, sans-serif; color: #0f172a;">
      <h2 style="margin: 0 0 12px;">New contact message</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(payload.subject ?? "-")}</p>
      <p><strong>Company:</strong> ${escapeHtml(payload.company ?? "-")}</p>
      <p><strong>Phone:</strong> ${escapeHtml(payload.phone ?? "-")}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-line;">${escapeHtml(payload.message)}</p>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
