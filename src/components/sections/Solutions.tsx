import { solutions } from "@/data/solutions";
import { SolutionCard } from "@/components/SolutionCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function SolutionsSection() {
  return (
    <section id="solutions" className="relative overflow-hidden bg-kai-navy py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 network-dots opacity-30" />
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-kai-blue/20 blur-3xl" />
      <Container className="relative">
        <FadeIn>
          <SectionHeader
            eyebrow="OUR SOLUTIONS"
            title="Technology solutions we're building."
            description="We build practical digital solutions that solve everyday business challenges."
            light
            action={<Button href="/solutions">Explore All Solutions →</Button>}
          />
        </FadeIn>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {solutions.map((solution, index) => (
            <FadeIn key={solution.id} delay={index * 70}>
              <SolutionCard solution={solution} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
