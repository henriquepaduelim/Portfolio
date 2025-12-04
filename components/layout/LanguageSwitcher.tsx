"use client";

import clsx from "clsx";
import { useLanguage, useTranslation } from "@/components/providers/language-provider";

export default function LanguageSwitcher() {
  const { locale, setLocale, toggleLocale } = useLanguage();
  const t = useTranslation();

  return (
    <div className="inline-flex w-fit items-center gap-1 rounded-full border border-border/60 bg-card px-1 py-1 text-xs font-semibold uppercase tracking-tight text-foreground/70">
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
    </div>
  );
}
