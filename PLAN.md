# VetDesk marketing site - Astro + Docker plan

## Goal
Replace the GitHub Pages site for vetdesk.gr with a fast, good-looking, self-hosted static site in a Docker container. Greek first, English secondary. Videos and social media are first-class.

## Stack
- Astro 7 (static output, minimal JS; requires Node >= 22.22)
- Plain CSS with variables (light/dark), no CSS framework
- @astrojs/sitemap for SEO
- Docker multi-stage: node build -> Caddy serving /srv
- Caddy handles gzip/zstd, security headers, caching, optional automatic HTTPS

## Structure
```
vetdesk-site/
  PLAN.md
  Dockerfile, Caddyfile, docker-compose.yml, .dockerignore
  astro.config.mjs, package.json
  media/videos/          mounted into the container at /srv/videos (not baked in image)
  public/                favicon, og image, poster images, robots.txt
  src/
    config.ts            site name, url, contact, social links
    i18n/ui.ts           all copy, el + en
    styles/global.css    tokens, layout, components
    layouts/Base.astro   head, SEO, OG, hreflang, theme script
    components/          Header, Hero, Features, Steps, GreekEdge, Pricing, Faq, Contact, Footer, Socials, HomePage
    pages/index.astro    Greek (default, /)
    pages/en/index.astro English (/en/)
    pages/404.astro
```

## Page sections
1. Hero: promise, screenshot/video carousel in device frame (auto-advance, pause, swipe), buttons (Request demo, Watch video -> modal with long video)
2. Marquee strip under the hero (feature keywords now, clinic logos later)
2b. Features: alternating text + video loop rows (appointments, records, reminders, invoicing)
3. How it works: 3 steps
4. Greek edge: myDATA/AADE, GDPR, EU hosting, Greek support
5. Pricing: single "custom per clinic" card until tiers are decided
6. FAQ: details/summary, no JS
7. Contact: demo form, Viber/WhatsApp/email
8. Footer: social icons, links

## Video handling
- Self-hosted MP4 (H.264) + optional WebM, with poster images
- Feature loops: muted, loop, playsinline, preload=none, started by IntersectionObserver when visible
- Overview video opens in a native <dialog>
- Files live in `media/videos/` and are mounted read-only; replace without rebuilding the image

Expected files (names used in the template):
- hero.mp4, hero.webm (10-15s loop)
- overview.mp4 (60-90s)
- appointments.mp4, records.mp4, reminders.mp4, invoicing.mp4 (10-15s loops)

## Social media
- Links configured once in `src/config.ts` (Facebook, Instagram, LinkedIn, YouTube)
- Icons inline SVG, shown in header-adjacent footer block and contact section
- Open Graph + Twitter meta so links preview correctly in Viber/WhatsApp/Facebook (needs `public/og.png`, 1200x630)
- No third-party embeds, so no cookie banner needed

## Run locally
```
npm install
npm run dev          # http://localhost:4321
```

## Build and run in Docker
```
docker compose up -d --build
# http://localhost:8080
```
Production on its own host: set `SITE_ADDRESS=vetdesk.gr` and publish ports 80 and 443 (see comments in docker-compose.yml).
Behind an existing reverse proxy: keep `SITE_ADDRESS=:80` and proxy to the container.

## Deploy (manual)
1. `git pull` on the server
2. `docker compose up -d --build`
3. Copy new videos into `media/videos/` if changed (no rebuild needed)

## TODO before going live
- Replace placeholder social URLs, email, phone/Viber in `src/config.ts`
- Add real videos and poster images
- Replace the placeholder `public/og.png` (1200x630) and `public/images/poster.svg`
- Wire the demo form to an endpoint (set `formEndpoint` in `src/config.ts`) or keep mailto fallback
- Review Greek copy in `src/i18n/ui.ts` and verify product claims against the real app (myDATA, reminders, EU hosting, backups, data import)
- Decide pricing tiers
- Point DNS for vetdesk.gr at the server, then retire GitHub Pages

## Open decisions
- Same server as the app or separate
- Form backend: external endpoint vs small container
- Analytics: none, or self-hosted Plausible/Umami

## Status
- Starter built and verified (Astro 7). Carousel, marquee, Docker run and Hetzner deployment are specified in CLAUDE.md and still to be done.
