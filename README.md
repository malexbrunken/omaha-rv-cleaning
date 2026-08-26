# Omaha RV Cleaning Co. — omaharvcleaning.com

Marketing site for an RV-only mobile cleaning company serving the Omaha metro
(Omaha, Elkhorn, Valley, Waterloo, Bennington, Gretna, Papillion, La Vista,
Millard, Ashland NE).

## Stack

- Next.js 16 (App Router, TypeScript, Tailwind v4)
- Markdown blog (`content/posts/*.md`, gray-matter frontmatter)
- Deploys on Vercel

## SEO architecture

- **Hubs:** service pages (`/services/*`), `/pricing` (published per-foot pricing),
  `/service-areas/*` (one page per town)
- **Spokes:** `/blog` guides (2/month cadence — see content calendar in GTM plan)
- JSON-LD: LocalBusiness (sitewide), Service + FAQ + Breadcrumb (per page)
- `sitemap.xml` + `robots.txt` generated from content
- Internal linking: spokes → hubs, town → adjacent towns, pricing in footer

## Before launch

1. Replace the placeholder phone number in `src/lib/site.ts`
2. Add real before/after photos to `/gallery`
3. Set up Google Business Profile + Search Console (submit `https://omaharvcleaning.com/sitemap.xml`)

## Env vars

- `QUOTE_WEBHOOK_URL` (optional) — Discord/Slack/Forms webhook for quote-form leads

## Dev

```bash
npm install
npm run dev   # http://localhost:3000
npm run build
```
