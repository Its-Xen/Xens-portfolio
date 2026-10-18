import { ArrowUp, Github, Linkedin, Send } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/10 bg-navy-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#hero"
              className="flex items-center gap-2.5 font-[family-name:var(--font-display)] font-semibold"
            >
              <span className="grid size-9 place-items-center rounded-lg bg-brand-500/15 border border-brand-400/30 font-mono text-brand-400">
                &lt;/&gt;
              </span>
              {profile.name}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-navy-200/60">
              Backend engineer building fast, reliable APIs with FastAPI and
              Python. Open to new opportunities and interesting problems.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <p className="font-mono text-xs uppercase tracking-widest text-brand-400">
              Navigate
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-200/70 transition-colors hover:text-brand-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-brand-400">
              Connect
            </p>
            <div className="mt-4 flex items-center gap-2.5">
              {[
                { icon: Github, href: profile.github, label: "GitHub" },
                { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
                { icon: Send, href: profile.telegram, label: "Telegram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-navy-100/80 transition-all hover:-translate-y-0.5 hover:border-brand-400/40 hover:text-brand-300"
                >
                  <Icon className="size-4.5" />
                </a>
              ))}
              <a
                href="#hero"
                aria-label="Back to top"
                className="ml-2 grid size-10 place-items-center rounded-lg bg-brand-500 text-navy-950 transition-all hover:-translate-y-0.5 hover:bg-brand-400"
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
            Designed & built with Next.js · powered by FastAPI-in-spirit
          </p>
        </div>
      </div>
    </footer>
  );
}
