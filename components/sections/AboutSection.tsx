"use client";

import Section from "@/components/ui/Section";
import { useTranslation } from "@/components/providers/language-provider";

export default function AboutSection() {
  const t = useTranslation();

  return (
    <Section title={t.about.title} eyebrow={t.nav.about} description={t.about.subtitle}>
      <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-start">
        <div className="space-y-4 text-base leading-relaxed text-foreground/80">
          {t.about.paragraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
        <div className="flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-4 shadow-soft">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{t.about.title}</h3>
          <ul className="grid grid-cols-1 gap-2 text-sm text-foreground/80 sm:grid-cols-2">
            {t.about.highlights.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-border/60 bg-background/60 px-3 py-2 text-foreground/80 transition hover:border-primary/40 hover:text-primary"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
