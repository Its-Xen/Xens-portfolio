# Cloudflare D1 migration — contact_messages table
# Apply remotely:  bun run cf:d1:migrate
# Apply locally:   bunx wrangler d1 execute portfolio-db --local --file migrations/0001_contact_messages.sql

CREATE TABLE IF NOT EXISTS contact_messages (
  id         TEXT PRIMARY KEY,
  name       TEXT NOT NULL,
  email      TEXT NOT NULL,
  message    TEXT NOT NULL,
  read       INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at
  ON contact_messages (created_at DESC);
