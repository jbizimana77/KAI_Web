import { Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-kai-navy py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-30" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-kai-blue/25 blur-3xl" />
      <Container className="relative">
        <FadeIn>
          <div className="grid items-center gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-8 sm:p-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Have a technology challenge?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
                Let&apos;s turn your business problem into a practical technology
                solution.
              </p>
              <Button href="/contact" className="mt-8">
                Start a Conversation →
              </Button>
            </div>
            <div className="space-y-4 rounded-2xl border border-white/10 bg-kai-navy/50 p-6">
              <div className="flex items-start gap-3 text-sm text-white/75">
                <MapPin className="mt-0.5 h-4 w-4 text-kai-cyan" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/75">
                <Mail className="mt-0.5 h-4 w-4 text-kai-cyan" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-kai-cyan"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
