# [https://tyleretters.com](https://tyleretters.com)

## Deploy

Deployed to the `tyleretters-com` Cloudflare Worker (Workers Static Assets) on push to `main` via `.github/workflows/deploy.yml`. The workflow runs `npm ci`, `npm run build` (Eleventy → `_site/`), then `wrangler deploy`. Worker config: `wrangler.jsonc`. Requires `CLOUDFLARE_API_TOKEN` repo secret.
