import {
  Code2,
  Container,
  Database,
  FlaskConical,
  Layers,
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
};

export function Tools() {
  return (
    <section
      id="skills"
      className="scroll-mt-16 bg-white py-20 md:py-28"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="03"
          eyebrow="Tools & Technologies"
          title="My engineering toolbox"
          description="The stack I reach for daily to design, build, test, and operate backend systems — centered on the Python ecosystem with FastAPI and Django at the core."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {techGroups.map((group, gi) => {
            const Icon = CATEGORY_ICONS[group.icon] ?? Code2;
            return (
              <Reveal key={group.category} delay={0.06 * gi}>
                <article
                  className={cnHtest(gi)}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-lg bg-brand-500/10 text-brand-600">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-navy-900">
                      {group.category}
                    </h3>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className="group/tile flex items-center gap-2.5 rounded-xl border border-navy-100 bg-white py-2 pl-2 pr-3.5 transition-all hover:-translate-y-0.5 hover:border-navy-200 hover:shadow-md"
                        title={item.name}
                      >
                        <span
                          className="grid size-8 shrink-0 place-items-center rounded-lg font-mono text-[11px] font-bold text-white shadow-sm"
                          style={{
                            background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}cc 100%)`,
                          }}
                          aria-hidden="true"
                        >
                          {item.monogram}
                        </span>
                        <span className="text-sm font-medium text-navy-800">
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
            <article className="flex h-full flex-col justify-between rounded-2xl bg-navy-900 p-6 text-white shadow-sm">
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-base font-semibold">
                  How I work with them
                </h3>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-navy-100/80">
                  <li className="flex gap-2.5">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-400" />
                    Async-first architecture — every I/O boundary is
                    non-blocking by default.
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-400" />
                    Type safety end-to-end: Pydantic contracts validated from
                    request to response.
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-400" />
                    Everything containerized, every deploy reproducible, every
                    service observable.
                  </li>
                </ul>
              </div>
              <p className="mt-6 border-t border-white/10 pt-4 font-mono text-xs text-navy-200/60">
                &gt; currently exploring: Rust (the next chapter) · async runtimes · event-driven systems
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** The 5th category spans two columns on xl so the grid stays balanced. */
function cnHtest(gi: number): string {
  const base =
    "h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg hover:shadow-navy-900/5";
  return gi === 4 ? `${base} xl:col-span-2` : base;
}
