import { Gauge, Layers, Rocket, Satellite, Workflow } from "lucide-react";
import { about, coreStrengths, profile } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const highlightIcons = [Layers, Gauge, Workflow, Rocket];

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="01"
          eyebrow="Crew Profile"
          title="Backend engineering is my craft"
        />

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Narrative */}
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-ink md:text-lg">
              <p>{about.paragraph1}</p>
              <p>{about.paragraph2}</p>
            </div>

            {/* Core strengths chips */}
            <div className="mt-8">
              <p className="font-mono text-xs uppercase tracking-widest text-glow">
                Core strengths
              </p>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Core strengths">
                {coreStrengths.map((strength) => (
                  <li
                    key={strength}
                    className="rounded-full border border-line bg-panel/70 px-3.5 py-1.5 text-[13px] font-medium text-ink transition-all hover:border-glow/50 hover:bg-glow/10 hover:text-glow"
                  >
                    {strength}
                  </li>
                ))}
              </ul>
            </div>

            <figure className="mt-8 rounded-2xl border border-line bg-panel/70 p-6 backdrop-blur">
              <blockquote className="border-l-4 border-glow pl-4 text-base italic leading-relaxed text-ink-heading md:text-lg">
                {profile.funFact}
              </blockquote>
              <figcaption className="mt-3 pl-5 font-mono text-xs text-ink-muted">
                — {profile.name}, probably refactoring a legacy module
              </figcaption>
            </figure>
          </Reveal>

          {/* Highlight cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {about.highlights.map((item, i) => {
              const Icon = highlightIcons[i % highlightIcons.length];
              return (
                <Reveal key={item.title} delay={0.08 * i}>
                  <article className="group h-full rounded-2xl border border-line bg-panel/70 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-glow/45 hover:shadow-lg hover:shadow-glow/10">
                    <span className="mb-4 grid size-11 place-items-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 text-white shadow-md shadow-glow/25 transition-transform group-hover:scale-105">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-ink-heading">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* comms satellite footnote */}
        <Reveal delay={0.1}>
          <p className="mt-10 flex items-center gap-2 font-mono text-xs text-ink-muted">
            <Satellite className="size-3.5 text-glow" aria-hidden="true" />
            signal check: crew member online · health nominal
          </p>
        </Reveal>
      </div>
    </section>
  );
}
