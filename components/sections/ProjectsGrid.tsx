"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage, useTranslation } from "@/components/providers/language-provider";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { getFeaturedProjects, projects } from "@/data/projects";

type ProjectsGridProps = {
  featuredOnly?: boolean;
};

export default function ProjectsGrid({ featuredOnly = false }: ProjectsGridProps) {
  const t = useTranslation();
  const { locale } = useLanguage();
  const items = featuredOnly ? getFeaturedProjects() : projects;

  return (
    <Section
      id="projects"
      title={t.projects.title}
      eyebrow={t.nav.projects}
      description={t.projects.subtitle}
      className="pt-4"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((project, index) => (
          <Card key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="group flex items-start justify-between gap-4 rounded-xl p-1 -m-1 transition-colors hover:bg-primary/5"
            >
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  {project.featured ? t.projects.featuredLabel : t.projects.caseStudyLabel}
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary">{project.title[locale]}</h3>
                <p className="text-sm text-foreground/70">{project.description[locale]}</p>
              </div>
              <motion.span
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/80 text-sm font-semibold text-primary"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                →
              </motion.span>
            </Link>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs text-foreground/70">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm text-primary">
              {project.links.map((link) => {
                const label = link.type ? t.projects.linksType[link.type] : link.label;
                return (
                  <Button
                    key={link.href}
                    href={link.href}
                    variant="ghost"
                    className="px-3 py-1 text-sm text-primary hover:text-accent"
                  >
                    {label}
                  </Button>
                );
              })}
            </div>
          </Card>
        ))}
      </div>
      {featuredOnly && (
        <div className="mt-10 flex justify-center">
          <Button href="/projects" variant="secondary">
            {t.projects.viewAll}
          </Button>
        </div>
      )}
    </Section>
  );
}
