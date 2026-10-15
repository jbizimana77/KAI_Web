export type SolutionStatus =
  | "In Development"
  | "Prototype"
  | "Research"
  | "Coming Soon";

export type Solution = {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  status: SolutionStatus;
};

export const solutions: Solution[] = [
  {
    id: "ai-it-support-agent",
    number: "01",
    title: "AI IT Support Agent",
    description:
      "An intelligent assistant that helps businesses diagnose and resolve common IT problems faster.",
    tags: ["AI", "IT Support", "Networking", "Automation"],
    status: "In Development",
  },
  {
    id: "invoice-intelligence",
    number: "02",
    title: "Invoice Intelligence",
    description:
      "Extract, organize and analyze information from invoices and business documents using AI.",
    tags: ["AI", "OCR", "Data", "APIs"],
    status: "Prototype",
  },
  {
    id: "ai-business-assistant",
    number: "03",
    title: "AI Business Assistant",
    description:
      "Ask questions about your business and receive insights from your operational data.",
    tags: ["AI", "Data", "Analytics"],
    status: "Research",
  },
  {
    id: "whatsapp-business-assistant",
    number: "04",
    title: "WhatsApp Business Assistant",
    description:
      "Automate customer conversations, product enquiries and order workflows.",
    tags: ["AI", "WhatsApp", "Commerce"],
    status: "Coming Soon",
  },
];
