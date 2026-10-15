import { UserRound } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function AboutSection() {
  const { founder } = siteConfig;

  return (
    <section id="about" className="bg-kai-bg py-20 sm:py-24">
      <Container>
        <FadeIn>
          <div className="grid items-center gap-10 rounded-[2rem] border border-kai-border bg-white p-6 shadow-[0_16px_50px_rgba(7,26,61,0.05)] sm:p-8 lg:grid-cols-[0.85fr_1.15fr_0.9fr] lg:p-10">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-kai-navy to-[#0d3d7a] p-8">
              <div className="absolute inset-0 tech-grid opacity-30" />
              <div className="relative flex aspect-[4/5] items-center justify-center rounded-2xl border border-white/15 bg-white/5">
                <div className="text-center text-white/80">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
                    <UserRound className="h-10 w-10" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-medium">Profile photo</p>
                  <p className="mt-1 text-xs text-white/50">Placeholder</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-kai-blue uppercase">
                Meet the technology behind KAI
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-kai-navy sm:text-4xl">
                {founder.name}
              </h2>
              <p className="mt-2 text-sm font-medium text-kai-cyan">
                {founder.title}
              </p>
              {founder.bio.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 text-sm leading-relaxed text-kai-muted sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
              <Button href="/about" className="mt-8">
                View Profile →
              </Button>
            </div>

            <div className="rounded-2xl border border-kai-border bg-kai-bg/70 p-6">
              <h3 className="text-sm font-semibold tracking-[0.14em] text-kai-navy uppercase">
                Focus Areas
              </h3>
              <ul className="mt-5 space-y-3">
                {founder.focusAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-3 rounded-xl border border-kai-border/70 bg-white px-4 py-3 text-sm font-medium text-kai-text"
                  >
                    <span className="h-2 w-2 rounded-full bg-kai-blue" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
