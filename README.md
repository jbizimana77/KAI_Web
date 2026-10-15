# KAI IT Consultant LTD Website

Production-ready company website for **KAI IT Consultant LTD** — Technology • Software • AI • Cloud.

Static export for **free hosting** on Cloudflare Pages (recommended), Netlify, or GitHub Pages.

## Stack

- Next.js (App Router, static export)
- React + TypeScript
- Tailwind CSS
- Lucide React
- [Web3Forms](https://web3forms.com) contact delivery (no backend)

## Getting started

```bash
npm install
cp .env.example .env.local   # then add your Web3Forms access key
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

1. Create a free access key at [web3forms.com](https://web3forms.com).
2. Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local` for local testing.
3. On Cloudflare Pages, add the same variable under **Environment variables** before going live.

Without the key, the form builds but shows a clear error when submitted.

## Project structure

```text
src/
  app/                 # Routes + SEO (sitemap, robots)
  components/
    sections/          # Homepage section blocks
    ui/                # Shared UI primitives
  data/                # Site content (services, projects, articles…)
  lib/                 # site-config, contact submit helper
public/
  _headers             # Security headers (Cloudflare Pages)
```

Update company contact details, social links and founder info in `src/lib/site-config.ts`.

## Scripts

- `npm run dev` — development server
- `npm run build` — static production build → `out/`
- `npm run start` — local preview of Node server (optional; production uses static files)
- `npm run lint` — ESLint

## Deploy

**Full checklist:** see [DEPLOY.md](./DEPLOY.md).

**Cloudflare Pages (recommended):**

| Setting | Value |
|---------|--------|
| Build command | `npm run build` |
| Output directory | `out` |
| Node | `20` (`NODE_VERSION=20`) |
| Env | `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` |

Connect repo: [github.com/jbizimana77/KAI_Web](https://github.com/jbizimana77/KAI_Web). Pushes to `main` redeploy automatically.

Custom domain: add **kaitconsultant.com** in Pages → Custom domains (DNS on Cloudflare).

## Repository

https://github.com/jbizimana77/KAI_Web
