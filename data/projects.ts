import type { Locale } from "@/lib/dictionaries";

export type ProjectLink = {
  label: string;
  href: string;
  type?: "github" | "demo" | "caseStudy";
};

export type Project = {
  slug: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  stack: string[];
  featured?: boolean;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "statcat-football-platform",
    title: {
      en: "StatCat Football Platform",
      pt: "StatCat Football Platform"
    },
    description: {
      en: "Full-stack platform for grassroots and academy clubs to onboard athletes, track combine metrics, manage teams, schedules, and content via a FastAPI/SQLModel backend and Vite React frontend.",
      pt: "Plataforma full-stack para clubes de base e academia: onboarding de atletas, métricas de combine, gestão de equipes, agendas e conteúdo usando FastAPI/SQLModel no backend e React Vite no frontend."
    },
    stack: ["FastAPI", "SQLModel", "PostgreSQL", "React", "Vite", "TypeScript", "Tailwind", "React Query", "Zustand"],
    featured: true,
    links: []
  },
  {
    slug: "statcat-landing-template",
    title: {
      en: "StatCat Landing Page Template",
      pt: "StatCat Landing Page Template"
    },
    description: {
      en: "High-conversion landing page in Next.js 14 + Tailwind with video hero, componentized sections, and centralized content/theming for fast customization.",
      pt: "Landing page de alta conversão em Next.js 14 + Tailwind com hero em vídeo, seções componentizadas e conteúdo/tema centralizados para customização rápida."
    },
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    featured: true,
    links: []
  },
  {
    slug: "jack-scoular-portfolio",
    title: {
      en: "Jack Scoular Portfolio",
      pt: "Portfólio Jack Scoular"
    },
    description: {
      en: "Static portfolio highlighting Jack Scoular’s design work with about, projects, collaboration, and contact sections built in HTML/CSS/JS.",
      pt: "Portfólio estático do designer Jack Scoular com seções de sobre, projetos, colaboração e contato em HTML/CSS/JS."
    },
    stack: ["HTML", "CSS", "JavaScript", "Playfair Display", "Google Fonts"],
    featured: false,
    links: []
  },
  {
    slug: "gallo-classics-ecommerce",
    title: {
      en: "Gallo Classics E-commerce",
      pt: "Gallo Classics E-commerce"
    },
    description: {
      en: "Laravel 12 e-commerce (pt-BR) for classic soccer jerseys with seeded admin/client, catalog, cart/checkout, and full REST APIs.",
      pt: "E-commerce em Laravel 12 (pt-BR) para camisas clássicas com admin/cliente seed, catálogo, carrinho/checkout e APIs completas."
    },
    stack: ["Laravel 12", "PHP 8.2", "MySQL/PostgreSQL", "Tailwind CSS", "Vite"],
    featured: false,
    links: []
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}
