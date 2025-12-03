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
    slug: "nebula-analytics",
    title: {
      en: "Nebula Analytics",
      pt: "Nebula Analytics"
    },
    description: {
      en: "Analytics dashboard with real-time charts, role-based access, and custom reporting.",
      pt: "Dashboard de analytics com gráficos em tempo real, acesso por papéis e relatórios personalizados."
    },
    stack: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
    featured: true,
    links: [
      { label: "GitHub", href: "https://github.com", type: "github" },
      { label: "Live demo", href: "https://example.com", type: "demo" }
    ]
  },
  {
    slug: "pulsecare",
    title: {
      en: "PulseCare",
      pt: "PulseCare"
    },
    description: {
      en: "Healthcare portal with patient timelines, messaging, and appointment flows.",
      pt: "Portal de saúde com linha do tempo do paciente, mensagens e fluxo de agendamentos."
    },
    stack: ["Next.js", "React Query", "Tailwind", "Node.js"],
    featured: true,
    links: [
      { label: "Case study", href: "https://example.com/case", type: "caseStudy" },
      { label: "GitHub", href: "https://github.com", type: "github" }
    ]
  },
  {
    slug: "atlas-docs",
    title: {
      en: "Atlas Docs",
      pt: "Atlas Docs"
    },
    description: {
      en: "Documentation platform with full-text search, versioning, and MDX authoring.",
      pt: "Plataforma de documentação com busca, versionamento e autoria em MDX."
    },
    stack: ["Next.js", "MDX", "Algolia", "Framer Motion"],
    featured: false,
    links: [
      { label: "Live demo", href: "https://example.com", type: "demo" },
      { label: "GitHub", href: "https://github.com", type: "github" }
    ]
  },
  {
    slug: "flow-finance",
    title: {
      en: "Flow Finance",
      pt: "Flow Finance"
    },
    description: {
      en: "Personal finance app with budgeting, goal tracking, and bank sync integrations.",
      pt: "Aplicativo financeiro com orçamento, metas e integrações bancárias."
    },
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    featured: false,
    links: [
      { label: "GitHub", href: "https://github.com", type: "github" },
      { label: "Live demo", href: "https://example.com", type: "demo" }
    ]
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}
