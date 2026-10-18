"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  phase: number;
  speed: number;
  tint: number; // 0..1 — higher = bluer star
}

interface Meteor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

/**
 * Full-page starfield: twinkling stars + occasional shooting stars.
 * Fixed behind all content (-z-10), theme-aware (white-blue stars in dark
 * mode, faint navy specks in light mode), honors prefers-reduced-motion,
 * pauses when the tab is hidden.
 */
export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    let stars: Star[] = [];
    let meteors: Meteor[] = [];
    let nextMeteorAt = performance.now() + 2600;
    let running = true;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const isDark = () =>
      document.documentElement.classList.contains("dark");

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = Math.floor(w * dpr);
      canvas!.height = Math.floor(h * dpr);
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(230, Math.round((w * h) / 8500));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w!,
        y: Math.random() * h!,
        r: 0.4 + Math.random() * 1.25,
        baseAlpha: 0.22 + Math.random() * 0.6,
        phase: Math.random() * Math.PI * 2,
        speed: 0.4 + Math.random() * 1.3,
        tint: Math.random(),
      }));
    }

    function draw(t: number) {
      const dark = isDark();
      ctx!.clearRect(0, 0, w, h);

      // ── stars ──
      for (const s of stars) {
        const twinkle = reduceMotion
          ? 1
          : 0.55 + 0.45 * Math.sin(s.phase + (t / 1000) * s.speed);
        const a = s.baseAlpha * twinkle * (dark ? 1 : 0.6);
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fillStyle = dark
          ? s.tint > 0.86
            ? `rgba(165,180,252,${a})` // indigo star
            : s.tint > 0.7
              ? `rgba(103,232,249,${a * 0.9})` // cyan star
              : `rgba(255,255,255,${a})` // classic white
          : `rgba(28,42,74,${a})`;
        ctx!.fill();
      }

      // ── shooting stars (dark mode only) ──
      if (!reduceMotion) {
        if (dark && t > nextMeteorAt) {
          nextMeteorAt = t + 3800 + Math.random() * 5200;
          meteors.push({
            x: w * 0.2 + Math.random() * w * 0.75,
            y: -24,
            vx: -(2.4 + Math.random() * 2),
            vy: 3.4 + Math.random() * 2.4,
            life: 0,
            maxLife: 55 + Math.random() * 30,
          });
        }
        meteors = meteors.filter((m) => m.life < m.maxLife && m.y < h + 80);
        for (const m of meteors) {
          m.x += m.vx;
          m.y += m.vy;
          m.life += 1;
          const fade = 1 - m.life / m.maxLife;
          const tailX = m.x - m.vx * 13;
          const tailY = m.y - m.vy * 13;
          const grad = ctx!.createLinearGradient(m.x, m.y, tailX, tailY);
          grad.addColorStop(0, `rgba(255,255,255,${0.85 * fade})`);
          grad.addColorStop(0.3, `rgba(103,232,249,${0.5 * fade})`);
          grad.addColorStop(1, "rgba(103,232,249,0)");
          ctx!.strokeStyle = grad;
          ctx!.lineWidth = 1.6;
          ctx!.lineCap = "round";
          ctx!.beginPath();
          ctx!.moveTo(m.x, m.y);
          ctx!.lineTo(tailX, tailY);
          ctx!.stroke();
          ctx!.beginPath();
          ctx!.arc(m.x, m.y, 1.5, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(255,255,255,${0.9 * fade})`;
          ctx!.fill();
        }
      }

      if (running && !reduceMotion) {
        raf = requestAnimationFrame(draw);
      }
    }

    resize();
    draw(performance.now());

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        if (!reduceMotion) raf = requestAnimationFrame(draw);
      }
    };

    // Repaint static frame when the theme class flips (light↔dark).
    const themeObserver = new MutationObserver(() => {
      if (reduceMotion) draw(performance.now());
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      themeObserver.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
