import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact KAI IT Consultant LTD in Kigali, Rwanda to discuss your next technology project.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <ContactSection />
    </div>
  );
}
