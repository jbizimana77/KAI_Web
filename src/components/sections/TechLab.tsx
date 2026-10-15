import { techLabExperiments } from "@/data/tech-lab";
import { TechLabCard } from "@/components/TechLabCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TechLabSection() {
  return (
    <section
      id="tech-lab"
      className="relative overflow-hidden bg-kai-navy py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 network-dots opacity-25" />
        <div className="absolute top-1/2 left-0 h-80 w-80 -translate-y-1/2 rounded-full bg-kai-cyan/10 blur-3xl" />
      </div>
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <FadeIn>
            <SectionHeader
              eyebrow="KAI TECH LAB"
              title="Experiment. Build. Grow."
              description="This is where we research emerging technologies, build prototypes and turn promising ideas into practical solutions."
              light
              className="mb-0"
            />
            <Button href="/tech-lab" className="mt-8">
              Explore Tech Lab →
            </Button>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2">
            {techLabExperiments.map((experiment, index) => (
              <FadeIn key={experiment.id} delay={index * 70}>
                <TechLabCard experiment={experiment} />
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
