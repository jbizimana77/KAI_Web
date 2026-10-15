import { AboutSection } from "@/components/sections/AboutLead";
import { ContactSection } from "@/components/sections/Contact";
import { CTASection } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { HowWeWorkSection } from "@/components/sections/HowWeWork";
import { InsightsSection } from "@/components/sections/Insights";
import { ProjectsSection } from "@/components/sections/Projects";
import { ServicesSection } from "@/components/sections/Services";
import { SolutionsSection } from "@/components/sections/Solutions";
import { TechLabSection } from "@/components/sections/TechLab";
import { TechStackSection } from "@/components/sections/TechStack";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <SolutionsSection />
      <HowWeWorkSection />
      <ProjectsSection />
      <TechLabSection />
      <TechStackSection />
      <AboutSection />
      <InsightsSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
