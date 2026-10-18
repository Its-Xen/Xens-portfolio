import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { saveContactMessage } from "@/lib/contact-store";
import { notifyNewMessage } from "@/lib/notify";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name is too long"),
  email: z.string().trim().email("Please provide a valid email address"),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters")
    .max(2000, "Message is too long (max 2000 characters)"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Validation failed",
          issues: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;
    const input = { name, email, message };

    // 1) Persist (D1 on Cloudflare, SQLite locally)
    const saved = await saveContactMessage(input);

    // 2) Fan out notifications — never throws, safe to await
    await notifyNewMessage(input);

    return NextResponse.json({
      ok: true,
      message: "Message received — I'll get back to you soon!",
      id: saved.id,
    });
  } catch (error) {
    console.error("[/api/contact] Failed to save message:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { ok: true, message: "Contact endpoint is live. Send a POST request." },
    { status: 200 }
  );
}
