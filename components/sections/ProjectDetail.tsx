"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage, useTranslation } from "@/components/providers/language-provider";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import type { Project } from "@/data/projects";

type ProjectDetailProps = {
  project: Project;
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const { locale } = useLanguage();
  const t = useTranslation();

  return (
    <Section
      title={project.title[locale]}
      eyebrow={t.projects.detailTitle}
      description={project.description[locale]}
      className="pt-10"
    >
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border/70 bg-card p-6 shadow-soft"
        >
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{t.projects.stackLabel}</h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs text-foreground/70">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-border/70 bg-card p-6 shadow-soft"
        >
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{t.projects.linksLabel}</h3>
          <div className="flex flex-col gap-3">
            {project.links.map((link) => {
              const label = link.type ? t.projects.linksType[link.type] : link.label;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-lg border border-border/60 px-3 py-2 text-sm font-semibold text-foreground/80 transition hover:border-primary/50 hover:text-primary"
                >
                  <span>{label}</span>
                  <span>↗</span>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className="mt-8 flex gap-3">
        <Button href="/projects" variant="secondary">
          {t.projects.backToProjects}
        </Button>
        <Button href="/contact">{t.hero.secondaryCta}</Button>
      </div>
    </Section>
  );
}
