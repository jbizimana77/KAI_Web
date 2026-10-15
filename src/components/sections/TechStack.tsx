import { technologies } from "@/data/technologies";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TechStackSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <FadeIn>
          <SectionHeader
            title="Built with modern technology"
            description="A working set of technologies we use across software, infrastructure, data and AI work. This list can evolve as the platform grows."
            align="center"
          />
        </FadeIn>
        <FadeIn delay={100}>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-kai-border bg-kai-bg px-4 py-2 text-sm font-medium text-kai-text/80 transition hover:border-kai-blue/30 hover:bg-white hover:text-kai-navy"
              >
                {tech}
              </span>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
