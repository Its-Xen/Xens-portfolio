"use client";

import { useState, type FormEvent } from "react";
import {
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { useToast } from "@/hooks/use-toast";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialForm: FormState = { name: "", email: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const update =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as {
        ok: boolean;
        message?: string;
        error?: string;
      };

      if (res.ok && data.ok) {
        toast({
          title: "Message sent ✓",
          description: data.message ?? "I'll get back to you soon.",
        });
        setForm(initialForm);
      } else {
        toast({
          title: "Couldn't send message",
          description: data.error ?? "Please check the fields and try again.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Network error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-navy-50/50 py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title="Let's build something fast"
          description="Recruiting for a backend role? Need an API designed and shipped? Or just want to trade notes on FastAPI and distributed systems — my inbox is open."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* ── Info panel ── */}
          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-2xl bg-navy-900 p-8 text-white">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
                <Sparkles className="size-3.5" aria-hidden="true" />
                {profile.availability}
              </span>

              <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-bold leading-snug">
                Typically replies within 24 hours
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-100/75">
                Whether it&apos;s a full-time opportunity, a freelance project,
                or an open-source collaboration — I read every message myself
                and I&apos;m happy to talk shop or scope.
              </p>

              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="group flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-brand-400/40 hover:bg-white/10"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-500/15 text-brand-400">
                      <Mail className="size-4.5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-navy-200/60">
                        Email
                      </span>
                      <span className="block truncate text-sm font-medium text-white group-hover:text-brand-300">
                        {profile.email}
                      </span>
                    </span>
                  </a>
                </li>
                {[
                  { icon: Github, label: "GitHub", href: profile.github, handle: "github.com/armanrezaei-dev" },
                  { icon: Linkedin, label: "LinkedIn", href: profile.linkedin, handle: "in/armanrezaei-dev" },
                ].map(({ icon: Icon, label, href, handle }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-brand-400/40 hover:bg-white/10"
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-500/15 text-brand-400">
                        <Icon className="size-4.5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs text-navy-200/60">
                          {label}
                        </span>
                        <span className="block truncate text-sm font-medium text-white group-hover:text-brand-300">
                          {handle}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
                <li className="flex items-center gap-3.5 px-4 py-1 text-sm text-navy-200/60">
                  <MapPin className="size-4 shrink-0" aria-hidden="true" />
                  {profile.location}
                </li>
              </ul>

              <p className="mt-auto pt-8 font-mono text-xs text-navy-200/40">
                $ curl -X POST /api/contact — status: 200 OK
              </p>
            </div>
          </Reveal>

          {/* ── Form ── */}
          <Reveal delay={0.1} className="h-full">
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-8 shadow-sm"
              aria-label="Contact form"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-navy-800"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    minLength={2}
                    maxLength={80}
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Ada Lovelace"
                    className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-all placeholder:text-navy-300/70 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-navy-800"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-all placeholder:text-navy-300/70 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-1 flex-col">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-navy-800"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={7}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Hi Arman — we're hiring a backend engineer and your FastAPI work caught my eye..."
                  className="w-full flex-1 resize-y rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm leading-relaxed text-navy-900 outline-none transition-all placeholder:text-navy-300/70 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy-900 px-6 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-xl hover:shadow-navy-900/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto sm:px-10"
              >
                {sending ? (
                  <>
                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="size-4" aria-hidden="true" />
                    Send Message
                  </>
                )}
              </button>
              <p className="mt-4 text-xs text-muted-foreground">
                Messages are delivered straight to my inbox — no spam, no
                newsletters, ever.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
