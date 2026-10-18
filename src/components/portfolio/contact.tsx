"use client";

import { useState, type FormEvent } from "react";
import {
  Github,
  Loader2,
  Mail,
  MapPin,
  Phone,
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
      const accessKey = profile.web3formsKey;

      if (accessKey) {
        // ── Static-friendly delivery via Web3Forms (free, no backend) ──
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: form.name,
            email: form.email,
            message: form.message,
            subject: `Portfolio message from ${form.name}`,
            from_name: "Portfolio Contact Form",
          }),
        });
        const data = (await res.json()) as { success: boolean; message?: string };

        if (res.ok && data.success) {
          toast({
            title: "Message sent ✓",
            description: "Thanks for reaching out — I'll get back to you soon.",
          });
          setForm(initialForm);
        } else {
          toast({
            title: "Couldn't send message",
            description:
              data.message ?? "Please try again, or email me directly.",
            variant: "destructive",
          });
        }
      } else {
        // ── Graceful fallback: open the visitor's email client pre-filled ──
        const subject = encodeURIComponent(
          `Portfolio message from ${form.name}`
        );
        const body = encodeURIComponent(
          `${form.message}\n\n— ${form.name} (${form.email})`
        );
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
        toast({
          title: "Opening your email app…",
          description:
            "Your message is pre-filled there — just hit send to deliver it.",
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
      className="relative scroll-mt-16 overflow-hidden py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div
        className="nebula -top-40 right-[15%] size-[400px] bg-glow/10"
        aria-hidden="true"
      />
      <div
        className="nebula -bottom-48 left-[8%] size-[380px] bg-nebula/10"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="07"
          eyebrow="Transmission"
          title="Let's build something reliable"
          description="Recruiting for a backend role? Need an API designed, optimized, or refactored? My inbox is open — I read every message myself."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* ── Info panel ── */}
          <Reveal className="h-full">
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-glow/25 bg-hull p-8 text-white shadow-lg shadow-glow/10">
              <div
                className="nebula -top-24 -left-16 size-64 bg-nebula/25"
                aria-hidden="true"
              />
              <span className="relative inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
                <Sparkles className="size-3.5" aria-hidden="true" />
                {profile.availability}
              </span>

              <h3 className="relative mt-6 font-[family-name:var(--font-display)] text-2xl font-bold leading-snug">
                Typically replies within 24 hours
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-navy-100/75">
                Whether it&apos;s a full-time opportunity, a freelance project,
                or an open-source collaboration — I&apos;m happy to talk shop
                or scope.
              </p>

              <ul className="relative mt-8 space-y-4">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="group flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-glow/40 hover:bg-white/10"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-glow/25 bg-glow/10 text-glow">
                      <Mail className="size-4.5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-navy-200/60">
                        Email
                      </span>
                      <span className="block truncate text-sm font-medium text-white group-hover:text-glow">
                        {profile.email}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={profile.phoneHref}
                    className="group flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-glow/40 hover:bg-white/10"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-glow/25 bg-glow/10 text-glow">
                      <Phone className="size-4.5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-navy-200/60">
                        Phone
                      </span>
                      <span className="block truncate text-sm font-medium text-white group-hover:text-glow">
                        {profile.phone}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-glow/40 hover:bg-white/10"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-glow/25 bg-glow/10 text-glow">
                      <Github className="size-4.5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-navy-200/60">
                        GitHub
                      </span>
                      <span className="block truncate text-sm font-medium text-white group-hover:text-glow">
                        {profile.githubHandle}
                      </span>
                    </span>
                  </a>
                </li>
                <li className="flex items-center gap-3.5 px-4 py-1 text-sm text-navy-200/60">
                  <MapPin className="size-4 shrink-0" aria-hidden="true" />
                  {profile.location}
                </li>
              </ul>

              <p className="relative mt-auto pt-8 font-mono text-xs text-navy-200/40">
                $ curl parsa.dev → 200 OK · signal received
              </p>
            </div>
          </Reveal>

          {/* ── Form ── */}
          <Reveal delay={0.1} className="h-full">
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col rounded-2xl border border-line bg-panel/80 p-8 backdrop-blur"
              aria-label="Contact form"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-ink"
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
                    className="w-full rounded-xl border border-line bg-background/60 px-4 py-3 text-sm text-ink-heading outline-none transition-all placeholder:text-ink-muted/70 focus:border-glow focus:ring-2 focus:ring-glow/25"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-ink"
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
                    className="w-full rounded-xl border border-line bg-background/60 px-4 py-3 text-sm text-ink-heading outline-none transition-all placeholder:text-ink-muted/70 focus:border-glow focus:ring-2 focus:ring-glow/25"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-1 flex-col">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-ink"
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
                  placeholder="Hi Parsa — we're hiring a backend engineer and your FastAPI work caught my eye..."
                  className="w-full flex-1 resize-y rounded-xl border border-line bg-background/60 px-4 py-3 text-sm leading-relaxed text-ink-heading outline-none transition-all placeholder:text-ink-muted/70 focus:border-glow focus:ring-2 focus:ring-glow/25"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-glow/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-glow/50 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto sm:px-10"
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
              <p className="mt-4 text-xs text-ink-muted">
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
