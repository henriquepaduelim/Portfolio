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

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Start with fallback to avoid SSR/CSR mismatch; we hydrate to the real locale after mount.
  const [locale, setLocale] = useState<Locale>(fallbackLocale);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem(STORAGE_KEY) as Locale | null) : null;
    const prefersPortuguese = typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("pt");
    const nextLocale: Locale = stored === "en" || stored === "pt" ? stored : prefersPortuguese ? "pt" : fallbackLocale;
    setLocale((prev) => (prev !== nextLocale ? nextLocale : prev));
  }, []);

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
