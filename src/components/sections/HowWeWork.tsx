import { processSteps } from "@/data/technologies";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function HowWeWorkSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <FadeIn>
          <SectionHeader
            title="From problem to solution."
            description="A clear process that keeps technology work practical, collaborative and outcome-focused."
            align="center"
          />
        </FadeIn>
        <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="pointer-events-none absolute top-10 right-8 left-8 hidden h-px bg-gradient-to-r from-transparent via-kai-blue/30 to-transparent xl:block" />
          {processSteps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 80}>
              <div className="relative rounded-2xl border border-kai-border bg-kai-bg/60 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-kai-navy text-sm font-bold text-white">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-kai-navy">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-kai-muted">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
