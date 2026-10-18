import { Code2, Gauge, BookOpenCheck, Rocket } from "lucide-react";
import { about, profile } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const highlightIcons = [Code2, Gauge, Rocket, BookOpenCheck];

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 bg-white py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="01"
          eyebrow="About Me"
          title="Backend engineering is my craft"
        />

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Narrative */}
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-slate-700 md:text-lg">
              <p>{about.paragraph1}</p>
              <p>{about.paragraph2}</p>
            </div>

            <figure className="mt-8 rounded-2xl border border-navy-100 bg-navy-50/60 p-6">
              <blockquote className="border-l-4 border-brand-500 pl-4 text-base italic leading-relaxed text-navy-800 md:text-lg">
                {profile.funFact}
              </blockquote>
              <figcaption className="mt-3 pl-5 font-mono text-xs text-muted-foreground">
                — {profile.name}, probably optimizing an N+1 query
              </figcaption>
            </figure>
          </Reveal>

          {/* Highlight cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {about.highlights.map((item, i) => {
              const Icon = highlightIcons[i % highlightIcons.length];
              return (
                <Reveal key={item.title} delay={0.08 * i}>
                  <article className="group h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/10">
                    <span className="mb-4 grid size-11 place-items-center rounded-xl bg-navy-900 text-brand-400 transition-colors group-hover:bg-brand-500 group-hover:text-navy-950">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-navy-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
