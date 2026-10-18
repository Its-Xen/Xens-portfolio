import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center flex flex-col items-center"
      )}
    >
      <p className="mb-3 flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-glow">
        <span className="inline-block size-1.5 rounded-full bg-glow shadow-[0_0_8px_var(--star-glow)]" aria-hidden="true" />
        {index} · {eyebrow}
      </p>
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-tight text-ink-heading">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-ink-soft",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
      <div
        className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-glow via-nebula to-flare"
        aria-hidden="true"
      />
    </Reveal>
  );
}
