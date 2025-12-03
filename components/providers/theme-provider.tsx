"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const STORAGE_KEY = "hp_theme";
const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem(STORAGE_KEY) as Theme | null) : null;
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      updateDocumentTheme(stored);
      return;
    }

    const prefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = prefersDark ? "dark" : "light";
    setTheme(initial);
    updateDocumentTheme(initial);
  }, []);

  useEffect(() => {
    updateDocumentTheme(theme);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, theme);
    }
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme((prev) => (prev === "dark" ? "light" : "dark"))
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

function updateDocumentTheme(next: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", next === "dark");
}
