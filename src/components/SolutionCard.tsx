import { ArrowUpRight } from "lucide-react";
import type { Solution } from "@/data/solutions";
import { StatusBadge } from "@/components/ui/StatusBadge";

type SolutionCardProps = {
  solution: Solution;
};

export function SolutionCard({ solution }: SolutionCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-kai-cyan/30 hover:bg-white/[0.07]">
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="text-xs font-semibold tracking-[0.16em] text-kai-cyan/80">
          {solution.number}
        </span>
        <StatusBadge status={solution.status} />
      </div>
      <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
        {solution.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {solution.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-1 text-sm font-medium text-kai-cyan opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Learn more
        <ArrowUpRight className="h-4 w-4" />
      </div>
    </article>
  );
}
