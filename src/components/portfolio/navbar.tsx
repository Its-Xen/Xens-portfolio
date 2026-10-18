"use client";

import { useEffect, useState } from "react";
import { Menu, Orbit, Send } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-line shadow-lg shadow-black/5 dark:shadow-black/40"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 font-[family-name:var(--font-display)] font-semibold text-ink-heading"
        >
          <span className="grid size-9 place-items-center rounded-lg border border-glow/30 bg-glow/10 text-glow transition-all duration-500 group-hover:rotate-180 group-hover:bg-glow/20">
            <Orbit className="size-4.5" aria-hidden="true" />
          </span>
          <span className="text-[15px] tracking-tight">
            {profile.name}
            <span className="hidden sm:inline text-ink-muted font-normal">
              {" "}
              · backend dev
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-2.5 py-2 text-sm text-ink-soft transition-colors hover:text-ink-heading hover:bg-glow/10 lg:px-3.5"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-glow/25 transition-all hover:-translate-y-0.5 hover:shadow-glow/45"
          >
            <Send className="size-3.5" aria-hidden="true" />
            Hire Me
          </a>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden inline-flex size-10 items-center justify-center rounded-lg text-ink-heading hover:bg-glow/10 transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 bg-hull border-line text-white"
            >
              <SheetHeader>
                <SheetTitle className="font-[family-name:var(--font-display)] text-white text-left">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <ul className="mt-2 flex flex-col gap-1 px-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-4 py-3 text-base text-navy-100/85 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="mt-4 px-2">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                  >
                    <Send className="size-4" aria-hidden="true" />
                    Hire Me
                  </a>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
