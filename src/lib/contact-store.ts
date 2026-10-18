import { getCloudflareContext } from "@opennextjs/cloudflare";

export interface ContactInput {
  name: string;
  email: string;
  message: string;
}

/**
 * Minimal structural types for the Cloudflare D1 binding, so we don't
 * need @cloudflare/workers-types in the main tsconfig.
 */
interface MinimalD1PreparedStatement {
  bind(...values: unknown[]): { run(): Promise<unknown> };
}
interface MinimalD1Database {
  prepare(query: string): MinimalD1PreparedStatement;
}

export interface WorkerEnv {
  DB?: MinimalD1Database;
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
  WEB3FORMS_ACCESS_KEY?: string;
}

/**
 * Reads Cloudflare bindings/secrets when running on Workers (or with the
 * optional local dev proxy), falling back to process.env everywhere else.
 */
export function getWorkerEnv(): WorkerEnv {
  let cfEnv: Partial<WorkerEnv> = {};
  try {
    // Throws outside the Cloudflare runtime — that's expected locally.
    cfEnv = (getCloudflareContext() as unknown as { env: WorkerEnv }).env ?? {};
  } catch {
    // Not running on Workers → plain Node dev server, use process.env.
  }

  return {
    DB: cfEnv.DB,
    TELEGRAM_BOT_TOKEN:
      cfEnv.TELEGRAM_BOT_TOKEN ?? process.env.TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID: cfEnv.TELEGRAM_CHAT_ID ?? process.env.TELEGRAM_CHAT_ID,
    WEB3FORMS_ACCESS_KEY:
      cfEnv.WEB3FORMS_ACCESS_KEY ?? process.env.WEB3FORMS_ACCESS_KEY,
  };
}

/**
 * Persists a contact message.
 *  - On Cloudflare Workers → inserts into the D1 database (binding "DB").
 *  - Everywhere else (local `next dev`) → falls back to Prisma + SQLite.
 */
export async function saveContactMessage(
  input: ContactInput
): Promise<{ id: string }> {
  const env = getWorkerEnv();

  if (env.DB) {
    const id = crypto.randomUUID();
    await env.DB.prepare(
      "INSERT INTO contact_messages (id, name, email, message) VALUES (?1, ?2, ?3, ?4)"
    )
      .bind(id, input.name, input.email, input.message)
      .run();
    return { id };
  }

  // Local development fallback (never reachable on Workers).
  const { db } = await import("@/lib/db");
  const saved = await db.contactMessage.create({ data: input });
  return { id: saved.id };
}
