import type { Metadata } from "next";
import { UserRound } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet JMV Bizimana, Founder & Technology Lead of KAI IT Consultant LTD.",
};

export default function AboutPage() {
  const { founder } = siteConfig;

  return (
    <PageShell
      eyebrow="About"
      title="Meet the technology behind KAI"
      description="KAI IT Consultant LTD is a technology company focused on practical software, AI, cloud and IT solutions."
    >
      <div className="grid gap-8 rounded-[2rem] border border-kai-border bg-white p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex aspect-[4/5] items-center justify-center rounded-3xl bg-gradient-to-br from-kai-navy to-[#0d3d7a] text-white">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
              <UserRound className="h-10 w-10" strokeWidth={1.5} />
            </div>
            <p className="text-sm font-medium">Profile photo placeholder</p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-kai-navy">{founder.name}</h2>
          <p className="mt-2 text-sm font-medium text-kai-cyan">{founder.title}</p>
          {founder.bio.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-kai-muted leading-relaxed">
              {paragraph}
            </p>
          ))}
          <div className="mt-8 flex flex-wrap gap-2">
            {founder.focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full bg-kai-bg px-3 py-1.5 text-sm font-medium text-kai-text"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
