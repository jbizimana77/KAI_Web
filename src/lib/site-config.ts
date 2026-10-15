export const siteConfig = {
  name: "KAI IT Consultant LTD",
  shortName: "KAI",
  tagline: "Technology • Software • AI • Cloud",
  coreMessage: "Technology that moves your business forward.",
  supportingMessage:
    "KAI IT Consultant LTD helps businesses design, build, integrate and manage practical technology solutions — from custom software and IT infrastructure to AI-powered automation, data and cloud solutions.",
  description:
    "KAI IT Consultant LTD builds practical software, AI, cloud, data and IT solutions for businesses in Rwanda and beyond.",
  url: "https://kaitconsultant.com",
  location: "Kigali, Rwanda",
  email: "info@kaitconsultant.com",
  social: {
    linkedin: "",
    github: "https://github.com/jbizimana77/KAI_Web",
    x: "",
    youtube: "",
  },
  founder: {
    name: "JMV Bizimana",
    title: "Founder & Technology Lead",
    bio: [
      "JMV Bizimana is a Software Engineer and technology leader with a background in software engineering, software testing, IT support, business systems and technology operations.",
      "He graduated in Software Engineering from KIST, now University of Rwanda, in 2017, and continues to work at the intersection of technology, business and innovation.",
    ],
    focusAreas: [
      "AI",
      "Software Engineering",
      "Cloud",
      "System Architecture",
      "Data",
      "IT Solutions",
    ],
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Tech Lab", href: "/tech-lab" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = [
  ...navLinks,
  { label: "Insights", href: "/insights" },
] as const;
