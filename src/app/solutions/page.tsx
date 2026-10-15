import type { Metadata } from "next";
import { solutions } from "@/data/solutions";
import { SolutionCard } from "@/components/SolutionCard";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Technology solutions KAI is building — AI IT support, invoice intelligence, business assistants and more.",
};

export default function SolutionsPage() {
  return (
    <PageShell
      eyebrow="Solutions"
      title="Technology solutions we're building."
      description="Practical digital products and platforms designed around everyday business challenges."
    >
      <div className="grid gap-5 rounded-[2rem] bg-kai-navy p-6 md:grid-cols-2 xl:grid-cols-4 sm:p-8">
        {solutions.map((solution) => (
          <SolutionCard key={solution.id} solution={solution} />
        ))}
      </div>
    </PageShell>
  );
}
