export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  status: string;
  href: string;
};

export const projects: Project[] = [
  {
    id: "ai-it-support-agent",
    title: "AI IT Support Agent",
    description:
      "An AI-assisted workflow for diagnosing common IT issues and guiding faster resolution.",
    category: "AI / Automation",
    tags: ["AI", "Python", "APIs"],
    status: "In Development",
    href: "/projects",
  },
  {
    id: "invoice-intelligence",
    title: "Invoice Intelligence",
    description:
      "Document understanding pipeline for extracting structured data from business invoices.",
    category: "AI / OCR / Data",
    tags: ["AI", "OCR", "PostgreSQL"],
    status: "Prototype",
    href: "/projects",
  },
  {
    id: "business-intelligence-assistant",
    title: "Business Intelligence Assistant",
    description:
      "A conversational layer over operational data to surface practical business insights.",
    category: "Data / Analytics",
    tags: ["AI", "Data", "Analytics"],
    status: "Research",
    href: "/projects",
  },
  {
    id: "whatsapp-sales-assistant",
    title: "WhatsApp Sales Assistant",
    description:
      "Automated customer conversations for product enquiries and order workflows.",
    category: "AI / Commerce",
    tags: ["AI", "WhatsApp", "Commerce"],
    status: "Coming Soon",
    href: "/projects",
  },
];
