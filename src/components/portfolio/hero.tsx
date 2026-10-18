"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  FileDown,
  Github,
  Linkedin,
  MapPin,
  Send,
  Zap,
} from "lucide-react";
import { heroStats, profile } from "@/lib/portfolio-data";

/** Hand-tinted FastAPI snippet — tokens pre-colored, no runtime highlighter needed. */
const codeLines: { text: string; cls: string }[][] = [
  [{ text: "from", cls: "text-fuchsia-400" }, { text: " fastapi ", cls: "text-sky-200" }, { text: "import", cls: "text-fuchsia-400" }, { text: " FastAPI", cls: "text-sky-200" }],
  [{ text: "", cls: "" }],
  [{ text: "app", cls: "text-sky-200" }, { text: " = ", cls: "text-navy-200" }, { text: "FastAPI", cls: "text-yellow-300" }, { text: "(title=", cls: "text-navy-200" }, { text: "\"Arman's Portfolio API\"", cls: "text-emerald-300" }, { text: ")", cls: "text-navy-200" }],
  [{ text: "", cls: "" }],
  [{ text: "@app.get", cls: "text-cyan-300" }, { text: "(", cls: "text-navy-200" }, { text: "\"/projects\"", cls: "text-emerald-300" }, { text: ", ", cls: "text-navy-200" }, { text: "response_model", cls: "text-sky-200" }, { text: "=", cls: "text-navy-200" }, { text: "list", cls: "text-yellow-300" }, { text: "[", cls: "text-navy-200" }, { text: "Project", cls: "text-yellow-300" }, { text: "])", cls: "text-navy-200" }],
  [{ text: "async def", cls: "text-fuchsia-400" }, { text: " list_projects", cls: "text-sky-200" }, { text: "(", cls: "text-navy-200" }, { text: "status", cls: "text-orange-300" }, { text: ": ", cls: "text-navy-200" }, { text: "str", cls: "text-yellow-300" }, { text: " | ", cls: "text-navy-200" }, { text: "None", cls: "text-yellow-300" }, { text: " = ", cls: "text-navy-200" }, { text: "None", cls: "text-yellow-300" }, { text: "):", cls: "text-navy-200" }],
  [{ text: "    return", cls: "text-fuchsia-400" }, { text: " {", cls: "text-navy-200" }, { text: "\"count\"", cls: "text-emerald-300" }, { text: ": ", cls: "text-navy-200" }, { text: "25", cls: "text-orange-300" }, { text: ", ", cls: "text-navy-200" }, { text: "\"built_with\"", cls: "text-emerald-300" }, { text: ": ", cls: "text-navy-200" }, { text: "\"FastAPI\"", cls: "text-emerald-300" }, { text: "}", cls: "text-navy-200" }],
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col overflow-hidden bg-navy-950 text-white"
      aria-label="Introduction"
    >
      {/* Backdrop: grid + glows */}
      <div className="absolute inset-0 bg-grid-navy" aria-hidden="true" />
      <div className="absolute inset-0 glow-cyan" aria-hidden="true" />
      <div
        className="absolute -bottom-40 -right-40 size-[480px] rounded-full bg-brand-500/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 -left-32 size-[380px] rounded-full bg-navy-500/20 blur-[110px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 pt-28 pb-16 sm:px-6 lg:pt-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* ── Left: intro ── */}
          <div>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              {profile.availability}
            </motion.div>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-mono text-sm tracking-widest uppercase text-brand-400"
            >
              {profile.specialization}
            </motion.p>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="mt-3 font-[family-name:var(--font-display)] text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.2rem]"
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient-brand">{profile.firstName}</span>
              <span className="text-brand-400">.</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="mt-4 font-[family-name:var(--font-display)] text-xl font-medium text-navy-100 sm:text-2xl"
            >
              {profile.role} — I make APIs <span className="text-brand-300">fast</span>.
            </motion.p>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-navy-200/80 sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.38 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-navy-950 transition-all hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-xl hover:shadow-brand-500/30"
              >
                <Zap className="size-4" aria-hidden="true" />
                View My Work
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
              >
                <FileDown className="size-4" aria-hidden="true" />
                Résumé
              </a>
              <a
                href="#reading"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-3.5 text-sm font-medium text-navy-200/70 transition-colors hover:text-white"
              >
                <BookOpen className="size-4" aria-hidden="true" />
                Reading list
              </a>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.46 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <span className="inline-flex items-center gap-1.5 text-sm text-navy-200/60">
                <MapPin className="size-4" aria-hidden="true" />
                {profile.location}
              </span>
              <div className="flex items-center gap-2">
                {[
                  { icon: Github, href: profile.github, label: "GitHub profile" },
                  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn profile" },
                  { icon: Send, href: profile.telegram, label: "Telegram" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-navy-100/80 transition-all hover:-translate-y-0.5 hover:border-brand-400/40 hover:text-brand-300"
                  >
                    <Icon className="size-4.5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: FastAPI code window ── */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl border border-white/10 bg-navy-900/80 shadow-2xl shadow-navy-950/60 backdrop-blur">
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
                <span className="size-3 rounded-full bg-rose-400/80" />
                <span className="size-3 rounded-full bg-amber-400/80" />
                <span className="size-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 font-mono text-xs text-navy-200/50">
                  main.py — FastAPI
                </span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7">
                <code>
                  {codeLines.map((line, i) => (
                    <div key={i} className="flex">
                      <span className="w-8 shrink-0 select-none text-right text-navy-300/30">
                        {i + 1}
                      </span>
                      <span className="pl-4">
                        {line.map((token, j) => (
                          <span key={j} className={token.cls}>
                            {token.text}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
              <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 font-mono text-[11px] text-navy-200/50">
                <span className="inline-flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  server running on 0.0.0.0:8000
                </span>
                <span>async · type-safe · 0 downtime</span>
              </div>
            </div>

            {/* Floating chips */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 -top-5 rounded-xl border border-brand-400/30 bg-navy-900/90 px-4 py-2.5 shadow-xl backdrop-blur"
            >
              <p className="font-mono text-xs text-brand-300">async / await</p>
              <p className="text-[10px] text-navy-200/60">non-blocking I/O</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-6 rounded-xl border border-brand-400/30 bg-navy-900/90 px-4 py-2.5 shadow-xl backdrop-blur"
            >
              <p className="font-mono text-xs text-emerald-300">p95 · 38 ms</p>
              <p className="text-[10px] text-navy-200/60">load-tested under RPS</p>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Stats bar ── */}
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur md:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-navy-900/70 px-6 py-5 transition-colors hover:bg-navy-800/70"
            >
              <dd className="font-[family-name:var(--font-display)] text-2xl font-bold text-brand-300 sm:text-3xl">
                {stat.value}
              </dd>
              <dt className="mt-1 text-xs text-navy-200/70 sm:text-sm">
                {stat.label}
              </dt>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative mx-auto mb-6 hidden text-navy-200/50 transition-colors hover:text-brand-300 md:block"
      >
        <ArrowDown className="size-5" />
      </motion.a>
    </section>
  );
}
