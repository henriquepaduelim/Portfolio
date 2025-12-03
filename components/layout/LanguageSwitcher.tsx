"use client";

import clsx from "clsx";
import { useLanguage, useTranslation } from "@/components/providers/language-provider";

export default function LanguageSwitcher() {
  const { locale, setLocale, toggleLocale } = useLanguage();
  const t = useTranslation();

  return (
    <div className="flex items-center gap-2 rounded-full border border-border/60 bg-card px-2 py-1 text-xs font-semibold uppercase tracking-wide text-foreground/70">
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={clsx(
          "rounded-full px-2 py-1 transition-colors",
          locale === "en" ? "bg-primary/15 text-primary" : "hover:text-foreground"
        )}
      >
        {t.language.en}
      </button>
      <span className="text-foreground/30">|</span>
      <button
        type="button"
        onClick={() => setLocale("pt")}
        className={clsx(
          "rounded-full px-2 py-1 transition-colors",
          locale === "pt" ? "bg-primary/15 text-primary" : "hover:text-foreground"
        )}
      >
        {t.language.pt}
      </button>
      <button
        type="button"
        aria-label={t.language.label}
        onClick={toggleLocale}
        className="ml-1 hidden rounded-full px-2 py-1 text-[10px] font-semibold text-foreground/50 transition hover:text-primary sm:block"
      >
        ↺
      </button>
    </div>
  );
}
