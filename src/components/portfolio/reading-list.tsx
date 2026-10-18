"use client";

import { Library, Mail } from "lucide-react";
import { books } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

/**
 * Minimal shelf — one row per book: uniform cover slot on the left,
 * "title — author" on the right, flowing in an organized 3-column grid
 * (matching the wireframe: picture left, text right).
 */
export function ReadingList() {
  return (
    <section
      id="reading"
      className="scroll-mt-16 border-y border-line/70 bg-glow/[0.035] py-20 md:py-28"
      aria-labelledby="reading-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="06"
          eyebrow="Data Vault"
          title="Books I've read & keep on my shelf"
          description="The shelf behind the stack — Python craft, API design, data systems, security, and the protocols and infrastructure underneath it all. These shaped how I design, build, and operate backends."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book, i) => (
            <Reveal key={book.title} delay={0.05 * (i % 3)}>
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                title={`${book.title} — ${book.author}`}
                aria-label={`${book.title} by ${book.author} — view references`}
                className="group flex h-24 overflow-hidden rounded-xl border border-line bg-panel/80 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-glow/40 hover:shadow-lg hover:shadow-glow/10"
              >
                {/* ── Cover: fixed 3:4 slot, photo over gradient fallback ── */}
                <span
                  className="relative w-[4.5rem] shrink-0 overflow-hidden"
                  style={{
                    background: `linear-gradient(150deg, ${book.gradient[0]} 0%, ${book.gradient[1]} 100%)`,
                  }}
                >
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-white/20"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute inset-y-0 left-1 w-px bg-white/15"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute inset-y-0 right-0 w-2 bg-black/10"
                    aria-hidden="true"
                  />
                  {book.cover && (
                    <img
                      src={book.cover}
                      alt={`Book cover: ${book.title} by ${book.author}`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  )}
                  {/* hover shine */}
                  <span
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/0 transition-all duration-500 group-hover:via-white/15"
                    aria-hidden="true"
                  />
                </span>

                {/* ── Title — author ── */}
                <span className="flex min-w-0 flex-1 flex-col justify-center px-4">
                  <span className="line-clamp-2 text-sm font-semibold leading-snug text-ink-heading">
                    {book.title}
                  </span>
                  <span className="mt-1 truncate font-mono text-[11px] text-ink-muted">
                    {book.author}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        {/* ── Slim shelf footer: count + CTA, keeps the grid the star ── */}
        <Reveal delay={0.15}>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-xl border border-line bg-panel/60 px-5 py-4 backdrop-blur sm:flex-row sm:items-center">
            <p className="flex items-center gap-2.5 text-sm text-ink-soft">
              <Library className="size-4 shrink-0 text-glow" aria-hidden="true" />
              <span>
                <span className="font-semibold text-ink-heading">
                  {books.length} books
                </span>{" "}
                — read &amp; owned, every one mapped to something shipped in
                production
              </span>
            </p>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-line bg-panel-2 px-3.5 py-2 text-xs font-medium text-ink transition-colors hover:border-glow/40 hover:text-glow"
            >
              <Mail className="size-3.5" aria-hidden="true" />
              Suggest a book
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
