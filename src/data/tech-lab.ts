export type TechLabExperiment = {
  id: string;
  title: string;
  description: string;
  status: "Building" | "Prototype" | "Research" | "Completed";
  technologies: string[];
};

export const techLabExperiments: TechLabExperiment[] = [
  {
    id: "ai-it-support-agent",
    title: "AI IT Support Agent",
    description:
      "Exploring how AI can support day-to-day IT diagnosis and guided troubleshooting.",
    status: "Building",
    technologies: ["AI", "Python", "Linux", "APIs"],
  },
  {
    id: "invoice-intelligence",
    title: "Invoice Intelligence",
    description:
      "Prototyping OCR and structured extraction for invoices and business documents.",
    status: "Prototype",
    technologies: ["AI", "OCR", "PostgreSQL"],
  },
  {
    id: "business-ai-assistant",
    title: "Business AI Assistant",
    description:
      "Researching conversational access to operational and analytical business data.",
    status: "Research",
    technologies: ["AI", "Data", "Analytics"],
  },
  {
    id: "docker-deployment-lab",
    title: "Docker Deployment Lab",
    description:
      "Hands-on experiments packaging and deploying applications with containers and CI/CD.",
    status: "Completed",
    technologies: ["Docker", "Linux", "CI/CD"],
  },
];
