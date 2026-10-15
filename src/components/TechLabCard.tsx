import type { TechLabExperiment } from "@/data/tech-lab";
import { StatusBadge } from "@/components/ui/StatusBadge";

type TechLabCardProps = {
  experiment: TechLabExperiment;
};

export function TechLabCard({ experiment }: TechLabCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-kai-cyan/35">
      <div className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-kai-blue/20 blur-2xl transition-opacity group-hover:opacity-100" />
      <div className="relative mb-4 flex items-center justify-between gap-3">
        <div className="h-10 w-10 rounded-xl border border-white/15 bg-white/5" />
        <StatusBadge status={experiment.status} />
      </div>
      <h3 className="relative text-lg font-semibold text-white">
        {experiment.title}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-white/65">
        {experiment.description}
      </p>
      <div className="relative mt-5 flex flex-wrap gap-2">
        {experiment.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-white/10 bg-kai-navy/40 px-2 py-1 font-mono text-[11px] text-kai-cyan"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
