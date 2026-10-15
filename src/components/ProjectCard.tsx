import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { StatusBadge } from "@/components/ui/StatusBadge";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

const visuals = [
  "from-[#0b2a5e] via-[#1250b5] to-[#10c8e8]",
  "from-[#082246] via-[#1677ff] to-[#20b486]",
  "from-[#071a3d] via-[#0d3d7a] to-[#1677ff]",
  "from-[#0a274f] via-[#1160d8] to-[#5ee7ff]",
];

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-kai-border bg-white shadow-[0_8px_30px_rgba(7,26,61,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(7,26,61,0.08)]">
      <div
        className={`relative h-44 bg-gradient-to-br ${visuals[index % visuals.length]}`}
      >
        <div className="absolute inset-0 tech-grid opacity-40" />
        <div className="absolute inset-0 flex items-end p-5">
          <StatusBadge status={project.status} />
        </div>
        <div className="absolute top-4 right-4 rounded-lg border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
          {project.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-kai-navy">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-kai-muted">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-kai-bg px-2.5 py-1 text-xs font-medium text-kai-text/75"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={project.href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-kai-blue transition-colors hover:text-kai-navy"
        >
          View Project
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
