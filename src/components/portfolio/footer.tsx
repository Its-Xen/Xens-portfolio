import { ArrowUp, Github, Mail, Orbit } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/10 bg-hull text-white">
      {/* faint star haze */}
      <div
        className="nebula -bottom-32 left-[55%] size-72 bg-nebula/15"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#hero"
              className="flex items-center gap-2.5 font-[family-name:var(--font-display)] font-semibold"
            >
              <span className="grid size-9 place-items-center rounded-lg border border-glow/30 bg-glow/10 font-mono text-glow">
                <Orbit className="size-4.5" aria-hidden="true" />
              </span>
              {profile.name}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-navy-200/60">
              Backend developer building scalable, production-ready systems
              with Python — FastAPI &amp; Django. Open to new opportunities.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <p className="font-mono text-xs uppercase tracking-widest text-glow">
              Navigate
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-200/70 transition-colors hover:text-glow"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-glow">
              Connect
            </p>
            <div className="mt-4 flex items-center gap-2.5">
              {[
                { icon: Github, href: profile.github, label: "GitHub" },
                { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-navy-100/80 transition-all hover:-translate-y-0.5 hover:border-glow/40 hover:text-glow"
                >
                  <Icon className="size-4.5" />
                </a>
              ))}
              <a
                href="#hero"
                aria-label="Back to top"
                className="ml-2 grid size-10 place-items-center rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-glow/40"
              >
                <ArrowUp className="size-4.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-navy-200/50 sm:flex-row">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono">
            transmitting from orbit · fully static · built with Next.js on Cloudflare Pages
          </p>
        </div>
      </div>
    </footer>
  );
}
