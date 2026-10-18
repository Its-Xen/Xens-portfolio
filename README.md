# Developer Portfolio — Next.js + FastAPI-flavored

A modern, single-page portfolio for a **Software Engineer** (Python · FastAPI · Django · Rust-on-the-roadmap). Built with Next.js 16 (App Router), TypeScript, Tailwind CSS 4, shadcn/ui and Framer Motion.

> **Live on:** `https://portfolio.<your-subdomain>.workers.dev` after deploying — see [Deployment](#-deployment-to-cloudflare-workers--d1) below.

## ✨ Sections

| # | Section | Highlights |
|---|---------|-----------|
| 1 | **Hero** | Availability badge, tagline, live FastAPI code window, stats bar, CTAs |
| 2 | **About Me** | Bio, pull-quote, 4 competency cards |
| 3 | **Projects** | Animated status filters — `All / Completed / In Progress / Concept` |
| 4 | **Tools & Technologies** | 5 category cards with branded tech tiles |
| 5 | **Reading List** | Books with designed covers, key takeaways, reference links |
| 6 | **Contact** | Working form → **D1 database** + **Telegram** & **Email** notifications |
| 7 | **Footer** | Quick links, socials, back-to-top (sticky, safe-area aware) |

## 🧱 Tech Stack

- **Framework:** Next.js 16 (App Router) + TypeScript 5
- **Styling:** Tailwind CSS 4 + shadcn/ui (New York) + lucide-react icons
- **Animations:** Framer Motion (scroll reveals, filter transitions)
- **Database:** Cloudflare D1 (production) · Prisma + SQLite (local dev fallback)
- **Notifications:** Telegram Bot API + Web3Forms (both optional, configured via secrets)
- **Hosting:** Cloudflare Workers via `@opennextjs/cloudflare`

## 🚀 Local Development

```bash
# 1. Install dependencies
bun install        # or: npm install

# 2. Local database (Prisma + SQLite fallback)
bun run db:push

# 3. Start the dev server
bun run dev        # → http://localhost:3000
```

> **Tip:** to test the *real* Cloudflare bindings (D1 + secrets) locally, build the worker and preview it with `wrangler dev`: `bun run cf:preview`. Plain `next dev` always uses the SQLite fallback.

### Project structure

```
src/
├── app/
│   ├── page.tsx                  # Single-page assembly (all sections)
│   ├── layout.tsx                # Fonts, SEO metadata
│   └── api/contact/route.ts      # Contact endpoint (zod-validated)
├── components/portfolio/         # navbar, hero, about, projects, tools,
│                                 # reading-list, contact, footer, reveal…
└── lib/
    ├── portfolio-data.ts         # ⭐ ALL site content lives here
    ├── contact-store.ts          # D1 insert (Workers) / Prisma (local)
    └── notify.ts                 # Telegram + Web3Forms fan-out
migrations/
└── 0001_contact_messages.sql     # D1 schema
wrangler.jsonc                    # Cloudflare Workers + D1 config
open-next.config.ts               # OpenNext adapter config
```

## 📬 How the contact form works

```
Visitor submits form
        │
        ▼
POST /api/contact  (zod validation → 400 on bad input)
        │
        ├─► 1. Save message ──► Cloudflare D1  (local dev: SQLite via Prisma)
        │
        └─► 2. Notify (parallel, failures never block the reply)
              ├─► Telegram bot  → pings your chat instantly
              └─► Web3Forms     → lands in your email inbox
```

Every channel is **optional**: if a secret is missing, that channel is skipped and the message is still saved.

## ☁️ Deployment to Cloudflare Workers + D1

### 0. Prerequisites

- A [Cloudflare account](https://dash.cloudflare.com/sign-up) (free)
- Node.js 20+ or Bun
- Login once: `bunx wrangler login`

### 1. Create the D1 database

```bash
bunx wrangler d1 create portfolio-db
```

Copy the printed `database_id` and paste it into `wrangler.jsonc` (replace `REPLACE_WITH_YOUR_D1_DATABASE_ID`).

### 2. Apply the schema

```bash
bun run cf:d1:migrate       # remote (production)
# optional local copy for `wrangler dev`:
bunx wrangler d1 execute portfolio-db --local --file migrations/0001_contact_messages.sql
```

### 3. (Optional) Telegram bot notifications

1. Open **@BotFather** in Telegram → `/newbot` → follow prompts → copy the **bot token**.
2. Send any message to your new bot, then open:
   `https://api.telegram.org/bot<TOKEN>/getUpdates`
   → find `"chat":{"id": 123456789}` — that number is your **chat id**.

### 4. (Optional) Email notifications via Web3Forms

1. Go to [web3forms.io](https://web3forms.com) → enter **your email** → receive the **access key** by email. Free.

### 5. Set the secrets

```bash
bunx wrangler secret put TELEGRAM_BOT_TOKEN     # paste bot token
bunx wrangler secret put TELEGRAM_CHAT_ID       # paste chat id
bunx wrangler secret put WEB3FORMS_ACCESS_KEY   # paste access key
```

Skip any you don't want — the form works without them (messages still saved to D1).

### 6. Deploy 🚀

```bash
bun run cf:deploy      # builds with OpenNext + deploys to Workers
```

First run asks you to register a `workers.dev` subdomain. Your site goes live at
`https://portfolio.<your-subdomain>.workers.dev`.

> **Alternative — Git-connected builds:** push the repo to GitHub, then in the Cloudflare dashboard: **Workers & Pages → Create → Workers → Connect to Git**. Set the build command to `npx opennextjs-cloudflare build`, and add the D1 binding (`DB`) + the three secrets in the worker's **Settings**. Every `git push` then auto-deploys.

## 🐙 Push this project to GitHub

```bash
git init
git add .
git commit -m "feat: portfolio website — Next.js + Cloudflare Workers + D1"
git branch -M main
git remote add origin git@github.com:<your-username>/<your-repo>.git
git push -u origin main
```

## 🌐 Custom domain (optional)

- **Free:** the `workers.dev` subdomain from step 6 costs nothing.
- **Custom** (e.g. `yourname.dev`): buy it in **Cloudflare Registrar** (~$10–15/yr, sold at cost — note `.dev` TLDs require HTTPS, which Cloudflare provides free), then:
  **Workers & Pages → your worker → Settings → Domains & Routes → Add → Custom domain**. DNS + SSL are automatic.

## 📝 Notes

- **Free tier is plenty:** Workers 100k req/day, D1 5 GB storage & 5M row-reads/day.
- **Placeholders:** name, email, socials, project links and résumé URL are placeholder content in `src/lib/portfolio-data.ts` — swap that one file with real résumé data when ready.
- `output: "standalone"` in `next.config.ts` is harmless for OpenNext (it only matters for self-hosted Node deployments).
