# KAI IT Consultant LTD Website

Production-ready company website for **KAI IT Consultant LTD** — Technology • Software • AI • Cloud.

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Lucide React

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```text
src/
  app/                 # Routes + SEO (sitemap, robots)
  components/
    sections/          # Homepage section blocks
    ui/                # Shared UI primitives
  data/                # Mock content (services, projects, articles…)
  lib/                 # site-config + helpers
```

Update company contact details, social links and founder info in:

`src/lib/site-config.ts`

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — ESLint

## Deploying (free) — Cloudflare Pages

The site is configured as a fully static export (`output: "export"` in `next.config.ts`),
so `npm run build` produces plain HTML/CSS/JS in the `out/` folder.

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Pick this GitHub repository.
3. Build settings:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
   - Environment variable: `NODE_VERSION` = `20`
4. Deploy. The site goes live at `https://<project-name>.pages.dev`.
5. Optional: **Custom domains** → add your own domain (e.g. `kaitconsultant.com`).

Every push to `main` redeploys automatically.

> The contact form is still a placeholder — connect it to a form service
> (e.g. Formspree or Web3Forms) before going live.
