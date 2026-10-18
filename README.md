# Parsa Nazari — Portfolio

Personal portfolio website for **Parsa Nazari**, Backend Developer (Python & FastAPI).
Fully **static** — no server, no database, no runtime costs. Built with Next.js, exported
to plain HTML/CSS/JS, deployable anywhere static files are served (Cloudflare Pages,
GitHub Pages, Netlify, Nginx…).

> ⚠️ **Private by design:** all personal data lives in one file —
> `src/lib/portfolio-data.ts`. Edit that file to change anything on the site.

## Theme — "Deep Space Mission Control"

- **Dark mode is the default**: deep-space background, canvas starfield with twinkling
  stars + occasional shooting stars, nebula haze, orbit rings around the code window.
- **Light mode** ("stratosphere by day") available via the sun/moon toggle in the navbar;
  choice persists in `localStorage`, no flash on reload (init script runs before paint).
- All colors are CSS tokens in `src/app/globals.css` (`--glow`, `--nebula`, `--panel`, …)
  that flip with the `.dark` class on `<html>` — retune the palette in one place.

## Sections

| # | Section | Content |
|---|--------------- | ------------------------------------------------------------- |
| 0 | Hero | Name, title, tagline, FastAPI code window, stats, CTAs |
| 1 | About | Profile narrative + core strengths chips + highlight cards |
| 2 | Experience | Timeline of ROSHD Company, Saha App, Moshaversara roles |
| 3 | Key Projects | E-commerce platform + Study Social Hub, with **status filters** (Completed / In Progress) |
| 4 | Tools & Technologies | Grouped skill grid from the résumé |
| 5 | Education & Languages | B.Sc. Computer Engineering + language proficiency |
| 6 | Reading List | 13 books read & owned — real cover photos, shelf notes, Goodreads links |
| 7 | Contact | Static contact form (Web3Forms) + email / phone / GitHub |

## Tech Stack

- **Next.js 16** (App Router, static export via `output: "export"`)
- **TypeScript 5** + **Tailwind CSS 4** + **shadcn/ui**
- **Framer Motion** (animations) + **lucide-react** (icons)
- Real assets baked in: book covers in `public/covers/` (gradient CSS fallback if a file is missing),
  brand tech logos in `public/tech/` (from the `simple-icons` package, brand-colored)
- Zero backend — `next build` emits a self-contained `out/` folder

## Run Locally

```bash
bun install        # or: npm install
bun run dev        # dev server on http://localhost:3000
bun run build      # static export → ./out
bun run start      # serve ./out on http://localhost:3000 (after build)
```

## Make the Contact Form Send Email (optional, 1 minute)

Out of the box the form falls back to opening the visitor's email client with a
pre-filled message (works everywhere, zero setup).

To have messages **delivered straight to your inbox** instead:

1. Go to <https://web3forms.com> and enter your email → you receive a free **access key**.
2. Open `src/lib/portfolio-data.ts` and paste it:
   ```ts
   web3formsKey: "YOUR-ACCESS-KEY-HERE",
   ```
3. Rebuild + redeploy. Submissions now arrive at `callmexenix@gmail.com`.

## Push to GitHub

```bash
cd /path/to/this/project
git init
git add .
git commit -m "Portfolio: Parsa Nazari — backend developer"
git branch -M main
git remote add origin https://github.com/Its-Xen/portfolio.git   # create the repo on github.com first
git push -u origin main
```

## Deploy to Cloudflare Pages (free, gives you `*.pages.dev`)

### Option A — Git integration (recommended: auto-redeploys on every push)

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select the `portfolio` repo you just pushed.
3. Build settings:
   - **Framework preset:** `None`
   - **Build command:** `npm run build`   *(or `bun run build`)*
   - **Build output directory:** `out`
   - **Environment variable:** `NODE_VERSION` = `22`
4. **Save and Deploy** → your site is live at `https://<project-name>.pages.dev`.

Every future `git push` redeploys automatically.

### Option B — Direct upload (no Git connection needed)

```bash
npx wrangler@latest login
npx wrangler@latest pages deploy out --project-name parsa-portfolio
```

Live at `https://parsa-portfolio.pages.dev` a few seconds later.

### Custom domain (later, optional)

Pages project → **Custom domains** → add e.g. `parsanazari.dev` (any registrar;
Cloudflare also sells `.dev` domains at cost). SSL is automatic.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # metadata, fonts, theme init script
│   ├── page.tsx            # section order lives here (+ starfield)
│   └── globals.css         # ⭐ space theme tokens (light + dark)
├── components/portfolio/
│   ├── navbar.tsx          # sticky nav + theme toggle + mobile sheet
│   ├── starfield.tsx       # canvas: twinkling stars + shooting stars
│   ├── theme-toggle.tsx    # dark/light switch (localStorage)
│   ├── hero.tsx            # intro + FastAPI code window in orbit rings
│   ├── about.tsx           # narrative + strengths + highlight cards
│   ├── experience.tsx      # career timeline
│   ├── projects.tsx        # filterable project cards
│   ├── tools.tsx           # tech stack grid
│   ├── education.tsx       # degree + languages
│   ├── reading-list.tsx    # book shelf (covers + notes)
│   ├── contact.tsx         # static form (Web3Forms / mailto)
│   └── footer.tsx
└── lib/
    └── portfolio-data.ts   # ⭐ EDIT THIS — all site content
```
