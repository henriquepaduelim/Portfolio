import { en } from "@/locales/en/common";
import { pt } from "@/locales/pt/common";

export type Locale = "en" | "pt";
export type Dictionary = typeof en | typeof pt;

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  pt
};

export const fallbackLocale: Locale = "en";

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[fallbackLocale];
}
