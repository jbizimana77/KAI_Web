# Deploy checklist — KAI IT Consultant website

Use this once before and right after your first Cloudflare Pages deploy.

## 1. Contact form (required before going live)

1. Sign up at [web3forms.com](https://web3forms.com) with **info@kaitconsultant.com** (or your inbox).
2. Copy your **access key**.
3. **Local:** copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
4. **Cloudflare Pages:** Project → **Settings** → **Environment variables** → add  
   `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` = your key (Production and Preview).
5. Redeploy after saving the variable (Cloudflare rebuilds on the next push, or use **Retry deployment**).

Test at `/contact/` after deploy.

## 2. Cloudflare Pages (hosting)

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Repository: **jbizimana77/KAI_Web**.
3. Build settings:

   | Setting | Value |
   |---------|--------|
   | Production branch | `main` |
   | Build command | `npm run build` |
   | Build output directory | `out` |
   | Node version | `20` (env var `NODE_VERSION` = `20`) |

4. Deploy. Default URL: `https://<project-name>.pages.dev`.

## 3. Domain (kaitconsultant.com)

1. Register **kaitconsultant.com** (Cloudflare Registrar or any registrar).
2. If the domain is not on Cloudflare yet, add the site to Cloudflare and update nameservers at your registrar.
3. Pages project → **Custom domains** → add `kaitconsultant.com` and `www.kaitconsultant.com`.
4. Follow Cloudflare’s DNS prompts (usually automatic if the zone is on Cloudflare).

`src/lib/site-config.ts` already uses `https://kaitconsultant.com` for SEO (sitemap, Open Graph).

## 4. Email (optional, free)

Cloudflare **Email Routing**: forward **info@kaitconsultant.com** → your Gmail/Outlook. No mailbox hosting required.

## 5. After launch

- Submit sitemap in Google Search Console: `https://kaitconsultant.com/sitemap.xml`
- Add real LinkedIn / X / YouTube URLs in `src/lib/site-config.ts` when you have them (GitHub is already set).

## Cost snapshot

| Item | Typical cost |
|------|----------------|
| Cloudflare Pages | $0 |
| Web3Forms (basic) | $0 |
| Domain `.com` | ~$10–15 / year |
| VPS | Not needed for this site |
