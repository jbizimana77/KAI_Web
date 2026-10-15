import type { Metadata } from "next";
import { techLabExperiments } from "@/data/tech-lab";
import { TechLabCard } from "@/components/TechLabCard";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Tech Lab",
  description:
    "KAI Tech Lab — where we research emerging technologies, build prototypes and turn ideas into practical solutions.",
};

export default function TechLabPage() {
  return (
    <PageShell
      eyebrow="KAI Tech Lab"
      title="Experiment. Build. Grow."
      description="A space for research, prototypes and technical exploration that feeds into real business solutions."
    >
      <div className="grid gap-5 rounded-[2rem] bg-kai-navy p-6 sm:grid-cols-2 sm:p-8">
        {techLabExperiments.map((experiment) => (
          <TechLabCard key={experiment.id} experiment={experiment} />
        ))}
      </div>
    </PageShell>
  );
}
