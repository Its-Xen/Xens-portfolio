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

/** Derive filter tabs from the data itself — only statuses that exist get a tab. */
const FILTERS: Filter[] = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.status))),
];

const STATUS_META: Record<
  ProjectStatus,
  { icon: LucideIcon; badge: string; dot: string }
> = {
  Completed: {
    icon: CheckCircle2,
    badge:
      "border-emerald-300/70 bg-emerald-50 text-emerald-700 dark:border-emerald-400/25 dark:bg-emerald-400/10 dark:text-emerald-300",
    dot: "bg-emerald-500 dark:bg-emerald-400",
  },
  "In Progress": {
    icon: Loader,
    badge:
      "border-amber-300/70 bg-amber-50 text-amber-700 dark:border-amber-400/25 dark:bg-amber-400/10 dark:text-amber-300",
    dot: "bg-amber-500 dark:bg-amber-400",
  },
  Concept: {
    icon: CircleDot,
    badge:
      "border-violet-300/70 bg-violet-50 text-violet-700 dark:border-violet-400/25 dark:bg-violet-400/10 dark:text-violet-300",
    dot: "bg-violet-500 dark:bg-violet-400",
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
    const map: Record<string, number> = { All: projects.length };
    for (const p of projects) map[p.status] = (map[p.status] ?? 0) + 1;
    return map;
  }, []);

  return (
    <section
      id="projects"
      className="scroll-mt-16 py-20 md:py-28"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="03"
          eyebrow="Missions"
          title="Things I've built — and things I'm building"
          description="From shipped production systems to work in progress. Filter by status to see where each mission stands right now."
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
                    ? "border-transparent bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-glow/30"
                    : "border-line bg-panel/70 text-ink hover:border-glow/45 hover:bg-glow/10 hover:text-glow"
                )}
              >
                <span
                  className={cn(
                    "size-1.5 rounded-full",
                    f === "All" && !active && "bg-glow",
                    f !== "All" && STATUS_META[f].dot
                  )}
                  aria-hidden="true"
                />
                {f}
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.5 font-mono text-[10px] leading-none",
                    active ? "bg-white/25 text-white" : "bg-secondary text-ink-muted"
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
                  className="group flex h-full flex-col rounded-2xl border border-line bg-panel/80 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-glow/45 hover:shadow-xl hover:shadow-glow/10"
                >
                  {/* Header */}
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span
                        className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-xl"
                        aria-hidden="true"
                      >
                        {project.emoji}
                      </span>
                      <div>
                        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold leading-tight text-ink-heading">
                          {project.title}
                        </h3>
                        <p className="mt-0.5 text-xs text-ink-muted">
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

                  <p className="text-sm leading-relaxed text-ink-soft">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-4 space-y-1.5">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-[13px] leading-relaxed text-ink"
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
                  <div className="mb-5 mt-5 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-secondary px-2 py-1 font-mono text-[11px] text-ink-soft"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-auto flex items-center gap-3 border-t border-line/80 pt-4">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-glow"
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
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-glow"
                      >
                        <ExternalLink className="size-4" aria-hidden="true" />
                        Live demo
                      </a>
                    )}
                    {!project.repoUrl && !project.liveUrl && (
                      <span className="text-xs italic text-ink-muted">
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
        <p className="mt-10 text-center text-sm text-ink-soft">
          More backend experiments and utilities live on{" "}
          <a
            href="https://github.com/Its-Xen"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-glow underline decoration-glow/40 underline-offset-4 hover:text-nebula"
          >
            my GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}
