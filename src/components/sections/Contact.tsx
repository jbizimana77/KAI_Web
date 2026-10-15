import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function ContactSection() {
  return (
    <section id="contact" className="bg-kai-bg py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.18em] text-kai-blue uppercase">
              Contact
            </p>
            <h2 className="mt-3 max-w-md text-3xl font-semibold tracking-tight text-kai-navy sm:text-4xl">
              Let&apos;s talk about your next technology project.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-kai-muted">
              Share your challenge, goals or idea. We&apos;ll help you explore a
              practical path forward — whether that means software, AI,
              infrastructure, cloud or data.
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <ContactForm />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
