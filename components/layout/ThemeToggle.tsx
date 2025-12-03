"use client";

import clsx from "clsx";
import { useTheme } from "@/components/providers/theme-provider";
import { useTranslation } from "@/components/providers/language-provider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const t = useTranslation();

  return (
    <button
      type="button"
      aria-label={t.theme.toggle}
      onClick={toggleTheme}
      className={clsx(
        "flex items-center gap-2 rounded-full border border-border/60 bg-card px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-foreground/70 transition-colors",
        "hover:border-primary/60 hover:text-primary"
      )}
    >
      <span
        className={clsx(
          "rounded-full px-2 py-0.5 transition-colors",
          theme === "light" ? "bg-primary/15 text-primary" : "text-foreground/70"
        )}
      >
        {t.theme.light}
      </span>
      <span className="text-foreground/30">/</span>
      <span
        className={clsx(
          "rounded-full px-2 py-0.5 transition-colors",
          theme === "dark" ? "bg-primary/15 text-primary" : "text-foreground/70"
        )}
      >
        {t.theme.dark}
      </span>
    </button>
  );
}
