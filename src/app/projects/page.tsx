import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected technology projects, experiments and client-focused work from KAI IT Consultant LTD.",
};

export default function ProjectsPage() {
  return (
    <PageShell
      eyebrow="Projects"
      title="Selected projects"
      description="A growing collection of technology solutions, prototypes and applied experiments."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </PageShell>
  );
}
