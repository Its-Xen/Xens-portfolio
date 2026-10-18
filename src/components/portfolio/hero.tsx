"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Briefcase,
  FileDown,
  Github,
  Mail,
  MapPin,
  Rocket,
  Sparkle,
} from "lucide-react";
import { heroStats, profile } from "@/lib/portfolio-data";

/** Hand-tinted FastAPI snippet — tokens pre-colored, no runtime highlighter needed. */
const codeLines: { text: string; cls: string }[][] = [
  [{ text: "from", cls: "text-sky-300" }, { text: " fastapi ", cls: "text-slate-200" }, { text: "import", cls: "text-sky-300" }, { text: " FastAPI", cls: "text-slate-200" }],
  [{ text: "", cls: "" }],
  [{ text: "app", cls: "text-slate-200" }, { text: " = ", cls: "text-navy-200" }, { text: "FastAPI", cls: "text-[#8fbcbb]" }, { text: "(title=", cls: "text-navy-200" }, { text: "\"Parsa Nazari — Backend\"", cls: "text-[#a3be8c]" }, { text: ")", cls: "text-navy-200" }],
  [{ text: "", cls: "" }],
  [{ text: "@app.get", cls: "text-[#88c0d0]" }, { text: "(", cls: "text-navy-200" }, { text: "\"/profile\"", cls: "text-[#a3be8c]" }, { text: ")", cls: "text-navy-200" }],
  [{ text: "async def", cls: "text-sky-300" }, { text: " profile", cls: "text-slate-200" }, { text: "() -> ", cls: "text-navy-200" }, { text: "dict", cls: "text-[#8fbcbb]" }, { text: ":", cls: "text-navy-200" }],
  [{ text: "    return", cls: "text-sky-300" }, { text: " {", cls: "text-navy-200" }],
  [{ text: "        \"stack\"", cls: "text-[#a3be8c]" }, { text: ": [", cls: "text-navy-200" }, { text: "\"Python\"", cls: "text-[#a3be8c]" }, { text: ", ", cls: "text-navy-200" }, { text: "\"FastAPI\"", cls: "text-[#a3be8c]" }, { text: ", ", cls: "text-navy-200" }, { text: "\"Django\"", cls: "text-[#a3be8c]" }, { text: "],", cls: "text-navy-200" }],
  [{ text: "        \"databases\"", cls: "text-[#a3be8c]" }, { text: ": ", cls: "text-navy-200" }, { text: "\"PostgreSQL · Redis\"", cls: "text-[#a3be8c]" }, { text: ",", cls: "text-navy-200" }],
  [{ text: "        \"experience\"", cls: "text-[#a3be8c]" }, { text: ": ", cls: "text-navy-200" }, { text: "\"4+ years\"", cls: "text-[#a3be8c]" }, { text: ",", cls: "text-navy-200" }],
  [{ text: "        \"status\"", cls: "text-[#a3be8c]" }, { text: ": ", cls: "text-navy-200" }, { text: "\"open to opportunities\"", cls: "text-[#a3be8c]" }, { text: ",", cls: "text-navy-200" }],
  [{ text: "    }", cls: "text-navy-200" }],
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col overflow-hidden"
      aria-label="Introduction"
    >
      {/* Backdrop: space grid + nebula haze + sparkles */}
      <div
        className="absolute inset-0 bg-grid-space [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black_35%,transparent_100%)]"
        aria-hidden="true"
      />
      <div
        className="nebula -top-40 left-[8%] size-[460px] bg-glow/15 dark:bg-glow/20"
        aria-hidden="true"
      />
      <div
        className="nebula top-[30%] -right-32 size-[420px] bg-nebula/15 dark:bg-nebula/20"
        aria-hidden="true"
      />
      <div
        className="nebula -bottom-48 left-[38%] size-[380px] bg-flare/10"
        aria-hidden="true"
      />
      <Sparkle
        className="animate-twinkle absolute left-[12%] top-[22%] size-4 text-glow"
        aria-hidden="true"
      />
      <Sparkle
        className="animate-twinkle absolute right-[18%] top-[14%] size-5 text-nebula [animation-delay:1.1s]"
        aria-hidden="true"
      />
      <Sparkle
        className="animate-twinkle absolute left-[45%] top-[64%] size-3 text-flare [animation-delay:2s]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 pt-28 pb-16 sm:px-6 lg:pt-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* ── Left: intro ── */}
          <div>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-[#a3be8c]"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 dark:bg-emerald-400" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
              </span>
              {profile.availability}
            </motion.div>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-mono text-sm tracking-widest uppercase text-glow"
            >
              {"///"} {profile.specialization}
            </motion.p>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="mt-3 font-[family-name:var(--font-display)] text-5xl font-bold leading-[1.05] tracking-tight text-ink-heading sm:text-6xl lg:text-[4.2rem]"
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient-cosmic drop-shadow-[0_0_28px_var(--star-glow)]">
                {profile.firstName}
              </span>
              <span className="text-glow">.</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="mt-4 font-[family-name:var(--font-display)] text-xl font-medium text-ink sm:text-2xl"
            >
              {profile.role} — I make APIs{" "}
              <span className="text-glow">fast</span>.
            </motion.p>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
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
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-glow to-nebula px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-glow/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-glow/50"
              >
                <Rocket className="size-4" aria-hidden="true" />
                View My Work
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center gap-2 rounded-xl border border-line-strong bg-panel/60 px-6 py-3.5 text-sm font-semibold text-ink-heading backdrop-blur transition-all hover:-translate-y-0.5 hover:border-glow/50 hover:text-glow"
              >
                <FileDown className="size-4" aria-hidden="true" />
                Résumé
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-3.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink-heading"
              >
                <Briefcase className="size-4" aria-hidden="true" />
                Experience
              </a>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.46 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <span className="inline-flex items-center gap-1.5 text-sm text-ink-muted">
                <MapPin className="size-4" aria-hidden="true" />
                {profile.location}
              </span>
              <div className="flex items-center gap-2">
                {[
                  { icon: Github, href: profile.github, label: "GitHub profile" },
                  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid size-10 place-items-center rounded-lg border border-line bg-panel/60 text-ink-soft backdrop-blur transition-all hover:-translate-y-0.5 hover:border-glow/50 hover:text-glow"
                  >
                    <Icon className="size-4.5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: FastAPI code window inside orbit rings ── */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="relative hidden lg:block"
          >
            {/* orbital rings */}
            <div
              className="animate-orbit pointer-events-none absolute -inset-7 rounded-full border border-dashed border-glow/25"
              aria-hidden="true"
            >
              <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow shadow-[0_0_10px_var(--star-glow)]" />
            </div>
            <div
              className="animate-orbit-reverse pointer-events-none absolute -inset-14 rounded-full border border-line-strong/60"
              aria-hidden="true"
            >
              <span className="absolute left-[82%] top-[8%] size-1.5 rounded-full bg-nebula shadow-[0_0_8px_var(--star-glow)]" />
              <span className="absolute left-[6%] top-[78%] size-1 rounded-full bg-flare" />
            </div>

            <div className="relative rounded-2xl border border-glow/20 bg-hull/90 shadow-2xl shadow-glow/10 backdrop-blur">
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
                <span className="size-3 rounded-full bg-rose-400/80" />
                <span className="size-3 rounded-full bg-amber-400/80" />
                <span className="size-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 font-mono text-xs text-navy-200/50">
                  main.py — mission control · async
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
              className="absolute -left-8 -top-5 rounded-xl border border-glow/30 bg-hull/95 px-4 py-2.5 shadow-xl backdrop-blur"
            >
              <p className="font-mono text-xs text-glow">async / await</p>
              <p className="text-[10px] text-navy-200/60">non-blocking I/O</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-6 rounded-xl border border-glow/30 bg-hull/95 px-4 py-2.5 shadow-xl backdrop-blur"
            >
              <p className="font-mono text-xs text-[#a3be8c]">Docker · CI/CD</p>
              <p className="text-[10px] text-navy-200/60">shipped with GitHub Actions</p>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Stats bar ── */}
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line/60 backdrop-blur md:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-panel/70 px-6 py-5 backdrop-blur transition-colors hover:bg-panel-2"
            >
              <dd className="text-gradient-cosmic font-[family-name:var(--font-display)] text-2xl font-bold sm:text-3xl">
                {stat.value}
              </dd>
              <dt className="mt-1 text-xs text-ink-soft sm:text-sm">
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
        className="relative mx-auto mb-6 hidden items-center gap-2 text-ink-muted transition-colors hover:text-glow md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.35em]">
          scroll
        </span>
        <ArrowDown className="size-4" />
      </motion.a>
    </section>
  );
}
