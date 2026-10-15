export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  items: string[];
  icon: "code" | "bot" | "server" | "cloud" | "chart" | "shield";
};

export const services: Service[] = [
  {
    id: "software-development",
    number: "01",
    title: "Software Development",
    description:
      "Custom web, mobile and enterprise applications designed around your business processes.",
    items: [
      "Web Applications",
      "Mobile Applications",
      "Enterprise Systems",
      "APIs & Integrations",
    ],
    icon: "code",
  },
  {
    id: "ai-automation",
    number: "02",
    title: "AI & Automation",
    description:
      "Turn repetitive processes into intelligent workflows with modern AI.",
    items: [
      "AI Assistants",
      "Document Intelligence",
      "Business Automation",
      "AI Agents",
    ],
    icon: "bot",
  },
  {
    id: "it-infrastructure",
    number: "03",
    title: "IT Infrastructure & Support",
    description:
      "Reliable technology infrastructure that keeps your business running.",
    items: [
      "IT Support",
      "Network Infrastructure",
      "Server Management",
      "Monitoring & Maintenance",
    ],
    icon: "server",
  },
  {
    id: "cloud-solutions",
    number: "04",
    title: "Cloud Solutions",
    description:
      "Deploy, migrate and manage secure and scalable cloud infrastructure.",
    items: [
      "Cloud Migration",
      "Cloud Deployment",
      "Backup & Recovery",
      "Infrastructure Management",
    ],
    icon: "cloud",
  },
  {
    id: "data-analytics",
    number: "05",
    title: "Data & Analytics",
    description:
      "Transform business data into information that helps people make better decisions.",
    items: [
      "Dashboards",
      "Business Intelligence",
      "Data Integration",
      "Reporting & Analytics",
    ],
    icon: "chart",
  },
  {
    id: "cybersecurity",
    number: "06",
    title: "Cybersecurity",
    description:
      "Protect your systems, data and users from evolving digital threats.",
    items: [
      "Security Assessment",
      "Access Management",
      "Network Security",
      "Security Monitoring",
    ],
    icon: "shield",
  },
];
