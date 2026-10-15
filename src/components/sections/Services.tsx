import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ServicesSection() {
  return (
    <section id="services" className="bg-kai-bg py-20 sm:py-24">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="WHAT WE DO"
            title="Technology services designed around real business problems."
            description="We combine software engineering, infrastructure, data and AI to build practical solutions that create measurable business value."
            action={
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-kai-blue hover:text-kai-navy"
              >
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            }
          />
        </FadeIn>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 60}>
              <ServiceCard service={service} index={index} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
