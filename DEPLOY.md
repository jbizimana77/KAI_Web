# Deploy checklist — KAI IT Consultant website

## Phase 1 — Free ($0)

Everything below costs nothing to start.

### 1. Cloudflare Pages (hosting)

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Repository: **jbizimana77/KAI_Web**.
3. **Project name:** `kaitconsultant` (gives **https://kaitconsultant.pages.dev** — good for search and sharing).
4. Build settings:

   | Setting | Value |
   |---------|--------|
   | Production branch | `main` |
   | Build command | `npm run build` |
   | Build output directory | `out` |
   | Environment variable | `NODE_VERSION` = `20` |

5. Deploy and open your `*.pages.dev` URL.

If the project name is different, update `url` in `src/lib/site-config.ts` to match, commit, and push.

### 2. Contact form

1. Sign up at [web3forms.com](https://web3forms.com) with your **Gmail** (free — no domain needed).
2. Copy your **access key**.
3. Cloudflare Pages → **Settings** → **Environment variables** →  
   `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` = your key (Production + Preview).
4. Set `email` in `src/lib/site-config.ts` to the same Gmail so **mailto** links work until you have `info@yourdomain`.
5. Redeploy and test **/contact/**.

### 3. Be findable on Google (free)

- Use business name everywhere: **KAI IT Consultant LTD**, **Kigali, Rwanda**.
- Create a free [Google Business Profile](https://business.google.com) and set website to your `pages.dev` URL.
- Add the site link on GitHub repo **About** and LinkedIn when ready.

---

## Phase 2 — Upgrade later (paid)

When you have budget (~$10/year+):

1. Buy a domain (e.g. **kaitconsultant.com** or **kaitconsultant.space**).
2. Cloudflare Pages → **Custom domains** → attach the domain.
3. In `src/lib/site-config.ts`, set `url` to `https://yourdomain.com` and `email` to `info@yourdomain.com`.
4. Push to GitHub; Cloudflare redeploys.
5. Optional: Cloudflare **Email Routing** to forward `info@` to Gmail.

---

## Cost snapshot

| Phase | Hosting | Domain | Contact form |
|-------|---------|--------|--------------|
| **1 — Free** | $0 (Pages) | $0 (`*.pages.dev`) | $0 (Web3Forms) |
| **2 — Upgrade** | $0 (still Pages) | ~$10–15/yr (.com) or ~$1–7 yr 1 (.space) | $0 or paid tiers |
