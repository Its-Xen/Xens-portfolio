import { GraduationCap, Languages, Sparkles } from "lucide-react";
import { education } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Education() {
  return (
    <section
      id="education"
      className="relative scroll-mt-16 overflow-hidden py-20 md:py-28"
      aria-labelledby="education-heading"
    >
      <div className="absolute inset-0 bg-grid-space [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black_30%,transparent_100%)]" aria-hidden="true" />
      <div
        className="nebula -top-40 left-1/4 size-[420px] bg-nebula/15"
        aria-hidden="true"
      />
      <div
        className="nebula -bottom-48 right-[10%] size-[360px] bg-glow/10"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="05"
          eyebrow="Training Deck"
          title="Foundations, formal and self-taught"
          description="A computer engineering degree earned alongside real production work — plus the languages I build and communicate in."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* ── Degree card ── */}
          <Reveal>
            <article className="flex h-full flex-col rounded-2xl border border-line bg-panel/80 p-8 backdrop-blur transition-all hover:-translate-y-1 hover:border-glow/45 hover:shadow-xl hover:shadow-glow/10">
              <span
                className="grid size-12 place-items-center rounded-xl border border-glow/25 bg-glow/10 text-glow"
                aria-hidden="true"
              >
                <GraduationCap className="size-6" />
              </span>

              <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl font-semibold leading-snug text-ink-heading">
                {education.degree}
              </h3>
              <p className="mt-2 text-sm font-medium text-glow">
                {education.school}
              </p>
              <p className="mt-1 inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted">
                {education.period}
              </p>

              <p className="mt-5 border-t border-line pt-5 text-sm leading-relaxed text-ink-soft">
                {education.note}
              </p>

              <div className="mt-auto pt-6">
                <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-300">
                  <Sparkles className="size-3.5" aria-hidden="true" />
                  Continuous learning — self-taught, always shipping
                </p>
              </div>
            </article>
          </Reveal>

          {/* ── Languages card ── */}
          <Reveal delay={0.1}>
            <article className="flex h-full flex-col rounded-2xl border border-line bg-panel/80 p-8 backdrop-blur transition-all hover:-translate-y-1 hover:border-glow/45 hover:shadow-xl hover:shadow-glow/10">
              <span
                className="grid size-12 place-items-center rounded-xl border border-glow/25 bg-glow/10 text-glow"
                aria-hidden="true"
              >
                <Languages className="size-6" />
              </span>

              <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl font-semibold text-ink-heading">
                Languages
              </h3>

              <ul className="mt-5 space-y-6">
                {education.languages.map((lang) => (
                  <li key={lang.name}>
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="text-sm font-semibold text-ink-heading">
                        {lang.name}
                      </p>
                      <p className="font-mono text-xs text-glow">
                        {lang.level}
                      </p>
                    </div>
                    <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">
                      {lang.note}
                    </p>
                    <div
                      className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary"
                      role="img"
                      aria-label={`${lang.name}: ${lang.level}`}
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-glow via-nebula to-flare"
                        style={{ width: `${lang.proficiency}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-auto pt-6 font-mono text-xs text-ink-muted">
                $ locale -a · fa_IR · en_US
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
