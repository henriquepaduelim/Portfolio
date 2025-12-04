"use client";

import Section from "@/components/ui/Section";
import { useTranslation } from "@/components/providers/language-provider";

export default function AboutSection() {
  const t = useTranslation();

  return (
    <Section title={t.about.title} eyebrow={t.nav.about} className="text-left">
      <div className="mb-3 flex flex-wrap items-center gap-2 text-[12px] font-semibold text-primary md:flex-nowrap md:gap-3 md:text-[13px]">
        {t.about.highlights.map((item, idx) => (
          <span key={item} className="flex items-center whitespace-nowrap gap-2">
            {idx > 0 && <span aria-hidden="true">•</span>}
            {item}
          </span>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 md:items-start md:text-left">
        <div className="space-y-4 text-base leading-relaxed text-foreground/80">
          {t.about.paragraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
        <div className="flex flex-col items-center gap-4 md:items-start md:mt-[-3rem]">
          <div className="w-full max-w-xs overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-primary/15 via-accent/12 to-secondary/12 shadow-soft">
            <div className="aspect-[3/4] w-full bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(236,72,153,0.18),transparent_32%)]" />
          </div>
        </div>
      </div>
    </Section>
  );
}
