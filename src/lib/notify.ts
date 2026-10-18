import { getWorkerEnv, type ContactInput } from "./contact-store";

/**
 * Fire-and-forget notifications for new contact messages.
 * Every channel is optional — if its secrets are not configured it is
 * skipped silently, and a failing channel never blocks the form response.
 */

function telegramText(input: ContactInput): string {
  return [
    "New message from your portfolio",
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    "",
    input.message,
  ].join("\n");
}

async function sendTelegram(input: ContactInput): Promise<void> {
  const { TELEGRAM_BOT_TOKEN: token, TELEGRAM_CHAT_ID: chatId } = getWorkerEnv();
  if (!token || !chatId) return; // not configured — skip

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: telegramText(input),
      disable_web_page_preview: true,
    }),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) {
    console.error("[notify] Telegram delivery failed:", res.status, await res.text());
  }
}

async function sendEmail(input: ContactInput): Promise<void> {
  const { WEB3FORMS_ACCESS_KEY: accessKey } = getWorkerEnv();
  if (!accessKey) return; // not configured — skip

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Portfolio message from ${input.name}`,
      from_name: "Portfolio Contact Form",
      name: input.name,
      email: input.email,
      message: input.message,
    }),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) {
    console.error("[notify] Web3Forms delivery failed:", res.status, await res.text());
  }
}

export async function notifyNewMessage(input: ContactInput): Promise<void> {
  const results = await Promise.allSettled([sendTelegram(input), sendEmail(input)]);
  for (const r of results) {
    if (r.status === "rejected") {
      console.error("[notify] A delivery channel threw:", r.reason);
    }
  }
}
