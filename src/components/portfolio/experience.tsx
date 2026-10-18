import { Briefcase, Building2, CalendarDays } from "lucide-react";
import { experience } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 bg-navy-50/50 py-20 md:py-28"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="02"
          eyebrow="Professional Experience"
          title="Where I've shipped"
          description="Three backend roles across e-commerce, fintech, ERP, and ed-tech — designing APIs, optimizing databases, and running production infrastructure."
        />

        <div className="relative">
          {/* Timeline spine */}
          <div
            className="absolute top-2 bottom-2 left-[15px] w-px bg-gradient-to-b from-brand-500/60 via-navy-200 to-transparent md:left-[19px]"
            aria-hidden="true"
          />

          <ol className="space-y-10">
            {experience.map((job, i) => (
              <li key={job.company} className="relative pl-12 md:pl-14">
                {/* Timeline node */}
                <span
                  className="absolute left-0 top-1.5 grid size-8 place-items-center rounded-full border border-brand-500/40 bg-white text-brand-600 shadow-sm md:size-10"
                  aria-hidden="true"
                >
                  <Building2 className="size-4 md:size-4.5" />
                </span>

                <Reveal delay={0.05 * i}>
                  <article className="group rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/10 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                      <div className="min-w-0">
                        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold leading-tight text-navy-900 md:text-xl">
                          {job.role}
                        </h3>
                        <p className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5 font-medium text-navy-700">
                            <Briefcase className="size-3.5 text-brand-600" aria-hidden="true" />
                            {job.company}
                          </span>
                          <span className="text-navy-200" aria-hidden="true">
                            ·
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarDays className="size-3.5" aria-hidden="true" />
                            {job.period}
                          </span>
                        </p>
                      </div>
                      <span className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                        {job.tech.length > 0 ? job.tech[0] : "Backend"}
                      </span>
                    </div>

                    <p className="mt-4 text-sm font-medium leading-relaxed text-navy-800">
                      {job.summary}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {job.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600"
                        >
                          <span
                            className="mt-[7px] size-1.5 shrink-0 rounded-full bg-brand-500"
                            aria-hidden="true"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-1.5 border-t border-navy-100/80 pt-4">
                      {job.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-navy-50 px-2 py-1 font-mono text-[11px] text-navy-600"
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
