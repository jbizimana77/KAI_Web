import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// Pre-render this file at build time (required for static hosting).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/solutions",
    "/projects",
    "/tech-lab",
    "/about",
    "/insights",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
