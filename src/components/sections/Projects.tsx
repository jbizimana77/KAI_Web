import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-kai-bg py-20 sm:py-24">
      <Container>
        <FadeIn>
          <SectionHeader
            title="Selected projects"
            description="A selection of technology solutions, experiments and client-focused work."
            action={
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-kai-blue"
              >
                View all projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            }
          />
        </FadeIn>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 60}>
              <ProjectCard project={project} index={index} />
            </FadeIn>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-kai-muted">
          Example / in-development work shown for illustration. Details can be
          updated as projects mature.
        </p>
      </Container>
    </section>
  );
}
