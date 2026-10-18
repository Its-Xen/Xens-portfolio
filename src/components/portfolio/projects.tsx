"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  CircleDot,
  ExternalLink,
  Github,
  Loader,
  type LucideIcon,
} from "lucide-react";
import { projects, type ProjectStatus } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";

type Filter = "All" | ProjectStatus;

const FILTERS: Filter[] = ["All", "Completed", "In Progress", "Concept"];

const STATUS_META: Record<
  ProjectStatus,
  { icon: LucideIcon; badge: string; dot: string }
> = {
  Completed: {
    icon: CheckCircle2,
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dot: "bg-emerald-500",
  },
  "In Progress": {
    icon: Loader,
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    dot: "bg-amber-500",
  },
  Concept: {
    icon: CircleDot,
    badge: "bg-violet-50 text-violet-700 border-violet-200",
    dot: "bg-violet-500",
  },
};

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.status === filter),
    [filter]
  );

  const counts = useMemo(() => {
    const map: Record<Filter, number> = {
      All: projects.length,
      Completed: 0,
      "In Progress": 0,
      Concept: 0,
    };
    for (const p of projects) map[p.status] += 1;
    return map;
  }, []);

  return (
    <section
      id="projects"
      className="scroll-mt-16 bg-navy-50/50 py-20 md:py-28"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="02"
          eyebrow="Projects"
          title="Things I've built — and things I'm building"
          description="From shipped production systems to early-stage concepts. Filter by status to see where each project stands right now."
        />

        {/* ── Filter bar ── */}
        <div
          className="mb-10 flex flex-wrap items-center gap-2"
          role="tablist"
          aria-label="Filter projects by status"
        >
          {FILTERS.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all",
                  active
                    ? "border-navy-900 bg-navy-900 text-white shadow-md shadow-navy-900/20"
                    : "border-navy-200 bg-white text-navy-700 hover:border-navy-400 hover:bg-navy-100/60"
                )}
              >
                <span
                  className={cn(
                    "size-1.5 rounded-full",
                    f === "All" && "bg-brand-500",
                    f !== "All" && STATUS_META[f].dot
                  )}
                  aria-hidden="true"
                />
                {f}
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.5 font-mono text-[10px] leading-none",
                    active
                      ? "bg-white/20 text-white"
                      : "bg-navy-100 text-navy-500"
                  )}
                >
                  {counts[f]}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Cards grid ── */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => {
              const meta = STATUS_META[project.status];
              const StatusIcon = meta.icon;
              return (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.94, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-navy-900/10"
                >
                  {/* Header */}
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span
                        className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy-50 text-xl"
                        aria-hidden="true"
                      >
                        {project.emoji}
                      </span>
                      <div>
                        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold leading-tight text-navy-900">
                          {project.title}
                        </h3>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {project.tagline}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Status badge */}
                  <span
                    className={cn(
                      "mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
                      meta.badge
                    )}
                  >
                    <StatusIcon className="size-3.5" aria-hidden="true" />
                    {project.status}
                  </span>

                  <p className="text-sm leading-relaxed text-slate-600">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-4 space-y-1.5">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-[13px] leading-relaxed text-navy-700"
                      >
                        <span
                          className={cn(
                            "mt-1.5 size-1.5 shrink-0 rounded-full",
                            meta.dot
                          )}
                          aria-hidden="true"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech chips */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-navy-50 px-2 py-1 font-mono text-[11px] text-navy-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-auto flex items-center gap-3 border-t border-navy-100/80 pt-4 mt-5">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-700 transition-colors hover:text-brand-600"
                      >
                        <Github className="size-4" aria-hidden="true" />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-700 transition-colors hover:text-brand-600"
                      >
                        <ExternalLink className="size-4" aria-hidden="true" />
                        Live demo
                      </a>
                    )}
                    {!project.repoUrl && !project.liveUrl && (
                      <span className="text-xs italic text-muted-foreground">
                        Design phase — code coming soon
                      </span>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* More-work note */}
        <p className="mt-10 text-center text-sm text-muted-foreground">
          More experiments live on{" "}
          <a
            href="https://github.com/armanrezaei-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-600 underline decoration-brand-300 underline-offset-4 hover:text-brand-700"
          >
            my GitHub
          </a>{" "}
          — from benchmark scripts to tiny async utilities.
        </p>
      </div>
    </section>
  );
}
