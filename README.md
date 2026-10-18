# Parsa Nazari — Portfolio

🌐 **Live:** https://its-xen.pages.dev

Personal portfolio for **Parsa Nazari**, Backend Developer (Python & FastAPI).
Built with Next.js 16, TypeScript, and Tailwind CSS. Fully static — no server, no database, no runtime costs.

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
| 3 | Missions | 5 projects — FastAPI E-Commerce, Eveto ticketing, Study Social Hub, Medium Clone API, Recipe App — with **status filters** (Completed / In Progress) |
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
