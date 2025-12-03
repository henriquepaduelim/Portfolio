"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dictionaries, fallbackLocale, type Dictionary, type Locale } from "@/lib/dictionaries";

type LanguageContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const STORAGE_KEY = "hp_locale";

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return fallbackLocale;
  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (stored === "en" || stored === "pt") return stored;
  const prefersPortuguese = navigator.language?.toLowerCase().startsWith("pt");
  return prefersPortuguese ? "pt" : fallbackLocale;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, locale);
    }
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      dictionary: dictionaries[locale],
      setLocale,
      toggleLocale: () => setLocale((prev) => (prev === "en" ? "pt" : "en"))
    }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

export function useTranslation() {
  return useLanguage().dictionary;
}
