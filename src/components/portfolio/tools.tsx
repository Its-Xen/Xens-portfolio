import { cn } from "@/lib/utils";
import {
  Code2,
  Container,
  Database,
  FlaskConical,
  Layers,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { techGroups } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  code: Code2,
  layers: Layers,
  database: Database,
  container: Container,
  flask: FlaskConical,
  workflow: Workflow,
};

export function Tools() {
  return (
    <section
      id="skills"
      className="scroll-mt-16 border-y border-line/70 bg-glow/[0.035] py-20 md:py-28"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="04"
          eyebrow="Instrument Panel"
          title="My engineering toolbox"
          description="The stack I reach for daily to design, build, test, and operate backend systems — centered on Python with FastAPI and Django at the core."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {techGroups.map((group, gi) => {
            const Icon = CATEGORY_ICONS[group.icon] ?? Code2;
            return (
              <Reveal key={group.category} delay={0.06 * gi}>
                <article
                  className={cn(
                    "h-full rounded-2xl border border-line bg-panel/80 p-6 backdrop-blur transition-all hover:border-glow/45 hover:shadow-lg hover:shadow-glow/10",
                    gi === 4 && "xl:col-span-2"
                  )}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-lg border border-glow/25 bg-glow/10 text-glow">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-ink-heading">
                      {group.category}
                    </h3>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className="group/tile flex items-center gap-2.5 rounded-xl border border-line bg-panel-2 py-2 pl-2 pr-3.5 transition-all hover:-translate-y-0.5 hover:border-line-strong hover:shadow-md"
                        title={item.name}
                      >
                        {item.icon ? (
                          <span
                            className="grid size-8 shrink-0 place-items-center rounded-lg"
                            style={{
                              background: `linear-gradient(135deg, ${item.color}1f 0%, ${item.color}0d 100%)`,
                            }}
                          >
                            <img
                              src={`/tech/${item.icon}.svg`}
                              alt=""
                              loading="lazy"
                              className="size-5"
                            />
                          </span>
                        ) : (
                          <span
                            className="grid size-8 shrink-0 place-items-center rounded-lg font-mono text-[11px] font-bold text-white shadow-sm"
                            style={{
                              background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}cc 100%)`,
                            }}
                            aria-hidden="true"
                          >
                            {item.monogram}
                          </span>
                        )}
                        <span className="text-sm font-medium text-ink">
                          {item.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}

          {/* Proficiency note card — fills the grid nicely */}
          <Reveal delay={0.3}>
            <article className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-glow/25 bg-hull p-6 text-white shadow-lg shadow-glow/10">
              <div
                className="nebula -top-16 -right-16 size-56 bg-nebula/25"
                aria-hidden="true"
              />
              <div className="relative">
                <h3 className="font-[family-name:var(--font-display)] text-base font-semibold">
                  How I work with them
                </h3>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-navy-100/80">
                  <li className="flex gap-2.5">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-glow shadow-[0_0_6px_var(--star-glow)]" />
                    Clean architecture by default — routing, business logic,
                    data access, and schemas kept in separate layers.
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-glow shadow-[0_0_6px_var(--star-glow)]" />
                    Performance is a feature: PostgreSQL query plans examined,
                    Redis caching where it actually pays off.
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-glow shadow-[0_0_6px_var(--star-glow)]" />
                    Everything containerized, every deploy automated with CI/CD,
                    every service running on production Linux.
                  </li>
                </ul>
              </div>
              <p className="relative mt-6 border-t border-white/10 pt-4 font-mono text-xs text-navy-200/60">
                &gt; currently in production: FastAPI · Django · DRF · Redis · Kafka
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
