import { notFound } from "next/navigation";
import ProjectDetail from "@/components/sections/ProjectDetail";
import { getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  return <ProjectDetail project={project} />;
}
