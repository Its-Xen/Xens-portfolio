"use client";

import { Moon, Sun } from "lucide-react";
import { useCallback, useSyncExternalStore } from "react";

const THEME_EVENT = "themechange";

function subscribe(onChange: () => void) {
  window.addEventListener(THEME_EVENT, onChange);
  return () => window.removeEventListener(THEME_EVENT, onChange);
}

/** Light/dark toggle. Reads live state from <html class> via useSyncExternalStore
 *  (no setState-in-effect, hydration-safe), persists to localStorage, and pings
 *  theme-aware decorations through a custom event. */
export function ThemeToggle() {
  const isDark = useSyncExternalStore(
    subscribe,
    () => document.documentElement.classList.contains("dark"),
    () => true // server render matches the dark-by-default <html class="dark">
  );

  const toggle = useCallback(() => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* private mode — theme just won't persist */
    }
    window.dispatchEvent(new CustomEvent(THEME_EVENT));
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="group relative inline-flex size-9 items-center justify-center overflow-hidden rounded-full border border-line bg-panel text-ink-soft transition-all hover:border-glow/50 hover:text-glow hover:shadow-[0_0_18px_var(--star-glow)]"
    >
      {/* orbiting dot decoration */}
      <span
        className="absolute -top-px -right-px size-1.5 rounded-full bg-glow/60 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3"
        aria-hidden="true"
      />
      <Sun
        className={`size-4.5 transition-all duration-500 ${
          isDark ? "scale-100 rotate-0" : "scale-50 -rotate-90 opacity-0"
        }`}
        aria-hidden="true"
      />
      <Moon
        className={`absolute size-4.5 transition-all duration-500 ${
          isDark ? "scale-50 rotate-90 opacity-0" : "scale-100 rotate-0"
        }`}
        aria-hidden="true"
      />
    </button>
  );
}
