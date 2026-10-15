export type Article = {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readingTime: string;
  href: string;
};

export const articles: Article[] = [
  {
    id: "ai-changing-it-support",
    title: "How AI is changing IT support",
    description:
      "A practical look at where AI can help teams diagnose issues faster without replacing human judgment.",
    category: "AI",
    date: "2026-03-12",
    readingTime: "6 min read",
    href: "/insights",
  },
  {
    id: "reliable-business-software",
    title: "Building reliable business software",
    description:
      "Principles for designing software that fits real business processes and stays maintainable over time.",
    category: "Software Engineering",
    date: "2026-02-28",
    readingTime: "7 min read",
    href: "/insights",
  },
  {
    id: "cloud-for-growing-businesses",
    title: "Why cloud infrastructure matters for growing businesses",
    description:
      "How scalable infrastructure supports reliability, recovery and growth as operations expand.",
    category: "Cloud",
    date: "2026-02-10",
    readingTime: "5 min read",
    href: "/insights",
  },
  {
    id: "ai-powered-invoice-reader",
    title: "Building an AI-powered invoice reader",
    description:
      "Notes from prototyping document intelligence for invoices, extraction and structured data workflows.",
    category: "AI / Data",
    date: "2026-01-22",
    readingTime: "8 min read",
    href: "/insights",
  },
];
