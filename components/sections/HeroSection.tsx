"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { useTranslation } from "@/components/providers/language-provider";

export default function HeroSection() {
  const t = useTranslation();

  return (
    <section className="container flex flex-col gap-12 py-16 md:flex-row md:items-center md:justify-between md:py-24">
      <div className="flex-1 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex flex-wrap items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold text-primary md:flex-nowrap md:gap-3 md:px-4 md:py-2 md:text-xs"
        >
          {t.about.highlights.map((item, idx) => (
            <span key={item} className="flex items-center whitespace-nowrap gap-2">
              {idx > 0 && <span aria-hidden="true">•</span>}
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.65, ease: "easeOut" }}
          className="space-y-4"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">{t.hero.greeting}</p>
          <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
            {t.hero.name}
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {t.hero.title}
            </span>
          </h1>
          <p className="max-w-2xl text-base text-foreground/70 md:text-lg">{t.hero.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex flex-wrap gap-3"
        >
          <Button href="/projects">{t.hero.primaryCta}</Button>
          <Button href="/contact" variant="secondary">
            {t.hero.secondaryCta}
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="relative flex-1 max-md:hidden"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.65 }}
      >
        <div className="relative mx-auto h-72 w-full max-w-lg overflow-hidden rounded-3xl border border-border/60 bg-card shadow-glow">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20" />
          <div className="absolute inset-6 rounded-2xl border border-border/60 bg-background/70 backdrop-blur-xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.35),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(236,72,153,0.28),transparent_36%)]" />
          <div className="absolute inset-0 grid grid-cols-6 gap-2 p-6">
            {[...Array(18)].map((_, index) => (
              <motion.span
                key={index}
                className="rounded-full border border-border/60 bg-card/70"
                animate={{ opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 5, repeat: Infinity, delay: index * 0.1, ease: "easeInOut" }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
