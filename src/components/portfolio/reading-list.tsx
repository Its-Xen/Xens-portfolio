import { ArrowUpRight, BookOpen, Quote } from "lucide-react";
import { books } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function ReadingList() {
  return (
    <section
      id="reading"
      className="relative scroll-mt-16 overflow-hidden bg-navy-950 py-20 text-white md:py-28"
      aria-labelledby="reading-heading"
    >
      <div className="absolute inset-0 bg-grid-navy" aria-hidden="true" />
      <div
        className="absolute -top-40 left-1/3 size-[420px] rounded-full bg-brand-500/8 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="04"
          eyebrow="Reading List · Continuous Learning"
          title="Books that shaped how I build"
          description="Backend engineering is a moving target — these books keep my foundations sharp. Each one left a mark on how I design real systems."
          dark
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {books.map((book, i) => (
            <Reveal key={book.title} delay={0.06 * i}>
              <article className="group flex h-full gap-5 rounded-2xl border border-white/10 bg-navy-900/70 p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-xl hover:shadow-brand-500/10">
                {/* CSS book cover */}
                <div className="relative w-24 shrink-0 sm:w-28" aria-hidden="true">
                  <div
                    className={`
                      relative aspect-[2/3] rounded-r-md rounded-l-sm
                      bg-gradient-to-br ${book.coverGradient}
                      shadow-[8px_8px_20px_rgba(0,0,0,0.45)]
                      transition-transform duration-300
                      group-hover:-rotate-3 group-hover:scale-[1.04]
                    `}
                  >
                    {/* spine highlight */}
                    <div className="absolute inset-y-0 left-0 w-[6px] rounded-l-sm bg-black/25" />
                    {/* title on cover */}
                    <div className="flex h-full flex-col justify-between p-3 pl-4">
                      <div className={`space-y-0.5 ${book.accentText}`}>
                        {book.title
                          .split(" ")
                          .slice(0, 4)
                          .map((word, wi) => (
                            <p
                              key={wi}
                              className="font-[family-name:var(--font-display)] text-[10px] font-bold leading-tight drop-shadow sm:text-[11px]"
                            >
                              {word}
                            </p>
                          ))}
                      </div>
                      <p className="font-mono text-[8px] uppercase tracking-wide text-white/70">
                        {book.author}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="flex min-w-0 flex-1 flex-col">
                  <h3 className="font-[family-name:var(--font-display)] text-[15px] font-semibold leading-snug text-white">
                    {book.title}
                  </h3>
                  <p className="mt-1 text-xs text-navy-200/60">
                    by {book.author}
                  </p>

                  <div className="mt-3 rounded-lg bg-white/5 p-3">
                    <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-brand-400">
                      <Quote className="size-3" aria-hidden="true" />
                      Key takeaway
                    </p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-navy-100/85">
                      {book.takeaway}
                    </p>
                  </div>

                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex w-fit items-center gap-1.5 pt-4 text-sm font-medium text-brand-300 transition-colors hover:text-brand-200"
                  >
                    <BookOpen className="size-4" aria-hidden="true" />
                    Reference & summary
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-navy-200/60">
            Currently reading:{" "}
            <span className="font-medium text-brand-300">
              &ldquo;Understanding Distributed Systems&rdquo;
            </span>{" "}
            by Roberto Vitillo — next up on the shelf is{" "}
            <span className="font-medium text-navy-100">
              &ldquo;Streaming Systems&rdquo;
            </span>
            . Recommendations always welcome.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
