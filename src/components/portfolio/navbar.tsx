"use client";

import { useEffect, useState } from "react";
import { Menu, Send } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
          ? "bg-navy-950/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-navy-950/20"
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
          className="group flex items-center gap-2.5 font-[family-name:var(--font-display)] font-semibold text-white"
        >
          <span className="grid size-9 place-items-center rounded-lg bg-brand-500/15 border border-brand-400/30 font-mono text-brand-400 transition-colors group-hover:bg-brand-500/25">
            &lt;/&gt;
          </span>
          <span className="text-[15px] tracking-tight">
            {profile.name}
            <span className="hidden sm:inline text-navy-200/70 font-normal">
              {" "}
              · engineer
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3.5 py-2 text-sm text-navy-100/80 transition-colors hover:text-white hover:bg-white/10"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-navy-950 transition-all hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/25"
          >
            <Send className="size-3.5" aria-hidden="true" />
            Hire Me
          </a>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden inline-flex size-10 items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 bg-navy-950 border-white/10 text-white"
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
                    className="flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-3 text-sm font-semibold text-navy-950 hover:bg-brand-400 transition-colors"
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
