import { Briefcase, Building2, CalendarDays } from "lucide-react";
import { experience } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 border-y border-line/70 bg-glow/[0.035] py-20 md:py-28"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="02"
          eyebrow="Flight Log"
          title="Where I've shipped"
          description="Three backend roles across e-commerce, fintech, ERP, and ed-tech — designing APIs, optimizing databases, and running production infrastructure."
        />

        <div className="relative">
          {/* Timeline spine */}
          <div
            className="absolute top-2 bottom-2 left-[15px] w-px bg-gradient-to-b from-glow/70 via-line-strong to-transparent md:left-[19px]"
            aria-hidden="true"
          />

          <ol className="space-y-10">
            {experience.map((job, i) => (
              <li key={job.company} className="relative pl-12 md:pl-14">
                {/* Timeline node */}
                <span
                  className="absolute left-0 top-1.5 grid size-8 place-items-center rounded-full border border-glow/40 bg-background text-glow shadow-[0_0_14px_var(--star-glow)] md:size-10"
                  aria-hidden="true"
                >
                  <Building2 className="size-4 md:size-4.5" />
                </span>

                <Reveal delay={0.05 * i}>
                  <article className="group rounded-2xl border border-line bg-panel/80 p-6 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-glow/45 hover:shadow-lg hover:shadow-glow/10 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                      <div className="min-w-0">
                        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold leading-tight text-ink-heading md:text-xl">
                          {job.role}
                        </h3>
                        <p className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-soft">
                          <span className="inline-flex items-center gap-1.5 font-medium text-ink">
                            <Briefcase className="size-3.5 text-glow" aria-hidden="true" />
                            {job.company}
                          </span>
                          <span className="text-line-strong" aria-hidden="true">
                            ·
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarDays className="size-3.5" aria-hidden="true" />
                            {job.period}
                          </span>
                        </p>
                      </div>
                      <span className="rounded-full border border-glow/35 bg-glow/10 px-3 py-1 text-xs font-medium text-glow">
                        {job.tech.length > 0 ? job.tech[0] : "Backend"}
                      </span>
                    </div>

                    <p className="mt-4 text-sm font-medium leading-relaxed text-ink">
                      {job.summary}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {job.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft"
                        >
                          <span
                            className="mt-[7px] size-1.5 shrink-0 rounded-full bg-glow shadow-[0_0_6px_var(--star-glow)]"
                            aria-hidden="true"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-1.5 border-t border-line/80 pt-4">
                      {job.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-secondary px-2 py-1 font-mono text-[11px] text-ink-soft"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
