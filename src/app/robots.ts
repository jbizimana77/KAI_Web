import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// Pre-render this file at build time (required for static hosting).
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
