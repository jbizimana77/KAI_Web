import { Headphones, Lightbulb, ShieldCheck, Users } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { TechVisual } from "@/components/TechVisual";

const highlights = [
  { icon: Lightbulb, title: "Innovative", subtitle: "Solutions" },
  { icon: Users, title: "Experienced", subtitle: "Team" },
  { icon: ShieldCheck, title: "Reliable", subtitle: "Support" },
  { icon: Headphones, title: "Client", subtitle: "Focused" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-kai-navy pt-28 pb-14 text-white sm:pt-32 sm:pb-16">
      <HeroBackdrop />

      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-up">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase">
            <span className="text-white/70">Welcome to </span>
            <span className="text-kai-cyan">{siteConfig.name}</span>
          </p>
          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
            Smart Technology Solutions for a{" "}
            <span className="bg-gradient-to-r from-kai-cyan to-[#7adfff] bg-clip-text text-transparent">
              Stronger Tomorrow
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            We help businesses leverage software, AI, data and cloud
            technologies to solve real problems, improve efficiency, secure
            their systems and achieve sustainable growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/services">Our Services →</Button>
            <Button href="/solutions" variant="ghost">
              Explore Solutions
            </Button>
          </div>
        </div>

        <div className="relative">
          <TechVisual />
        </div>
      </Container>

      <Container className="relative mt-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:max-w-2xl">
          {highlights.map(({ icon: Icon, title, subtitle }) => (
            <div key={title} className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/10">
                <Icon className="h-4 w-4 text-kai-cyan" strokeWidth={1.8} />
              </span>
              <span className="text-sm leading-tight font-medium text-white/85">
                {title}
                <br />
                {subtitle}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
