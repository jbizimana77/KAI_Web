import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build the site as plain static files (HTML/CSS/JS) in the `out/` folder,
  // so it can be hosted for free on Cloudflare Pages, Netlify or GitHub Pages.
  output: "export",
  // Static hosts have no image-optimisation server, so serve images as-is.
  images: {
    unoptimized: true,
  },
  // Generate /about/index.html etc. so every page works on any static host.
  trailingSlash: true,
};

export default nextConfig;
