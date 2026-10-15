import type { Metadata } from "next";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software development, AI & automation, IT infrastructure, cloud, data and cybersecurity services from KAI IT Consultant LTD.",
};

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="Technology services designed around real business problems."
      description="Explore how KAI helps businesses design, build and manage practical technology solutions."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </PageShell>
  );
}
