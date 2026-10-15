import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroBackdrop } from "@/components/HeroBackdrop";

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: PageShellProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-kai-navy pt-28 pb-14 text-white sm:pt-32 sm:pb-16">
        <HeroBackdrop />

        <Container className="relative">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-xs font-semibold tracking-[0.2em] text-kai-cyan uppercase">
              {eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Talk to Us →</Button>
              <Button href="/" variant="ghost">
                Back to Home
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {children ? (
        <div className="pt-14 pb-20 sm:pt-16 sm:pb-24">
          <Container>{children}</Container>
        </div>
      ) : null}
    </>
  );
}
