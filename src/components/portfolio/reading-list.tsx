"use client";

import { BookOpen, Library, Mail } from "lucide-react";
import { books } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

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

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book, i) => (
            <Reveal key={book.title} delay={0.04 * (i % 4)}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-panel/80 p-3 backdrop-blur transition-all hover:-translate-y-1 hover:border-glow/40 hover:shadow-lg hover:shadow-glow/10">
                {/* ── Book cover (real photo over gradient fallback) ── */}
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${book.title} by ${book.author} — view references`}
                  className="group/cover relative block aspect-[4/5] overflow-hidden rounded-xl shadow-md"
                  style={{
                    background: `linear-gradient(150deg, ${book.gradient[0]} 0%, ${book.gradient[1]} 100%)`,
                  }}
                >
                  {/* fallback: spine highlights + title/author (hidden behind the photo when it loads) */}
                  <span
                    className="absolute inset-y-0 left-0 w-1.5 bg-white/20"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute inset-y-0 left-1.5 w-px bg-white/15"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute inset-y-0 right-0 w-3 bg-black/10"
                    aria-hidden="true"
                  />
                  <span className="absolute inset-x-0 bottom-0 block bg-gradient-to-t from-black/60 via-black/25 to-transparent p-4 pt-10">
                    <span className="block font-[family-name:var(--font-display)] text-sm font-semibold leading-snug text-white">
                      {book.title}
                    </span>
                    <span className="mt-1.5 block font-mono text-[10px] text-white/75">
                      {book.author}
                    </span>
                  </span>

                  {/* real cover photo — on error it is removed and the gradient fallback shows */}
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

                  {/* category pill (stays readable over any cover photo) */}
                  <span className="absolute left-2.5 top-2.5 z-10 rounded-md bg-hull/65 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-white/85 backdrop-blur-sm">
                    {book.category}
                  </span>

                  {/* hover shine */}
                  <span
                    className="absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-white/0 to-white/0 transition-all duration-500 group-hover/cover:via-white/15"
                    aria-hidden="true"
                  />
                </a>

                {/* why it's on the shelf */}
                <p className="mt-3 px-1 pb-1 text-[13px] leading-relaxed text-ink-soft">
                  {book.note}
                </p>
              </article>
            </Reveal>
          ))}

          {/* ── Shelf stats card (spans the rest of the last row) ── */}
          <Reveal delay={0.12} className="lg:col-span-3">
            <article className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-glow/25 bg-hull p-6 text-white shadow-lg shadow-glow/10 md:p-8 lg:flex-row lg:items-center lg:gap-10">
              <div
                className="nebula -top-20 right-[20%] size-64 bg-nebula/20"
                aria-hidden="true"
              />
              {/* count */}
              <div className="relative flex items-center gap-4 lg:shrink-0">
                <span
                  className="grid size-12 shrink-0 place-items-center rounded-xl border border-glow/25 bg-glow/10 text-glow"
                  aria-hidden="true"
                >
                  <Library className="size-6" />
                </span>
                <div>
                  <p className="font-[family-name:var(--font-display)] text-4xl font-bold leading-none text-white">
                    {books.length}
                  </p>
                  <p className="mt-1.5 text-xs text-navy-200/60">
                    books, read &amp; owned
                  </p>
                </div>
              </div>

              {/* shelf facts */}
              <ul className="relative mt-6 space-y-3 text-sm leading-relaxed text-navy-100/80 lg:mt-0 lg:flex-1">
                <li className="flex gap-2.5">
                  <BookOpen className="mt-0.5 size-4 shrink-0 text-glow" aria-hidden="true" />
                  6 shelves — Python, APIs &amp; frameworks, data systems, code
                  craft, protocols, infrastructure
                </li>
                <li className="flex gap-2.5">
                  <BookOpen className="mt-0.5 size-4 shrink-0 text-glow" aria-hidden="true" />
                  Theory that shipped — every title maps to something I&apos;ve
                  built or operated in production
                </li>
              </ul>

              {/* cta */}
              <div className="relative mt-6 border-t border-white/10 pt-5 lg:mt-0 lg:shrink-0 lg:border-0 lg:pt-0">
                <p className="font-mono text-[11px] leading-relaxed text-navy-200/50">
                  $ cat shelf.next
                  <br />
                  &gt; always reading — recommendations welcome
                </p>
                <a
                  href="#contact"
                  className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3.5 py-2 text-xs font-medium text-glow transition-colors hover:bg-white/10 hover:text-nebula"
                >
                  <Mail className="size-3.5" aria-hidden="true" />
                  Suggest a book
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
