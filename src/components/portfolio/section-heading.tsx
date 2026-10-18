import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: "left" | "center";
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  dark = false,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center flex flex-col items-center"
      )}
    >
      <p
        className={cn(
          "font-mono text-sm tracking-widest uppercase mb-3",
          dark ? "text-brand-400" : "text-brand-600"
        )}
      >
        {index} · {eyebrow}
      </p>
      <h2
        className={cn(
          "font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-tight",
          dark ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base md:text-lg leading-relaxed",
            dark ? "text-navy-100/70" : "text-muted-foreground",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-brand-300",
          align === "center" && "mx-auto"
        )}
        aria-hidden="true"
      />
    </Reveal>
  );
}
