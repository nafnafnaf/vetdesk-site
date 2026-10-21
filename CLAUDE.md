# CLAUDE.md - vetdesk.gr marketing site (handoff)

This file is the handoff from the architecture/design account to the coding account. Read it fully, then read PLAN.md. Work only inside this repo.

## Goal
Replace the current GitHub Pages site for vetdesk.gr with a self-hosted static site that runs as a container next to the existing VetDesk clinic stacks on the Hetzner VM. Greek first, English at /en/. Videos and social media are first-class. A running carousel on the landing page is required (spec below).

## Working rules (from the owner)
- Terse, direct communication. No emojis in code, docs, commits or output.
- Explicit manual workflows only. No auto-deploy, no CI that deploys, no cron that pulls. Deploy is: ssh, git pull, compose up -d --build.
- Show the owner how it looks before committing visual changes. Render screenshots (Playwright is fine) into `docs/preview/`, describe what changed, and wait for approval before committing the carousel/marquee.
- Do not touch the VetDesk app repo, its containers, its databases, or any running clinic stack. Do not restart anything that is already running.
- Ask before anything irreversible or outward-facing: DNS changes, removing the GitHub Pages site, opening firewall ports, publishing posts or sending emails.

## Starting point (already built and verified)
The starter in this repo is an Astro 7 static site (Node >= 22.22), bilingual (el default at `/`, en at `/en/`), plain CSS with light/dark theme, zero external requests (system fonts, no CDNs), sitemap, hreflang, JSON-LD, OG tags.
- `npm install && npm run build` passes with 0 audit vulnerabilities.
- `src/config.ts`: site name, contact, form endpoint, social links (placeholders).
- `src/i18n/ui.ts`: all copy for el and en (same shape). Add any new strings to BOTH languages.
- `src/components/*`: Header, Hero, Features, Steps, GreekEdge, Pricing, Faq, Contact, Footer, Socials, HomePage.
- `Dockerfile`: node build stage -> `caddy:2-alpine` serving `/srv`. `Caddyfile` reads `SITE_ADDRESS` (default `:80`). `docker-compose.yml` mounts `./media/videos` read-only at `/srv/videos`.
- NOT yet tested: the Docker/Caddy build and run. Test it.
- Placeholders still to replace (ask the owner, do not invent): email, phone, Viber/WhatsApp, social URLs, `public/og.png`, `public/images/poster.svg`, all videos, product claims in `ui.ts` (myDATA, reminders, EU hosting, backups, data import, mobile app line), pricing.

## Task 1 - Landing page carousel and marquee
Build both. Vanilla JS and CSS only, no libraries, no external requests, keep total added JS under ~3 KB.

### A. Hero carousel (replaces the single hero video frame)
- 4 to 5 slides in the existing device frame: dashboard, appointments, patient record, reminders, invoicing. Each slide is an image (WebP/AVIF with width/height) or a short muted video (MP4, poster required). Until real assets exist, use clearly labelled placeholders so the layout can be reviewed.
- Auto-advance every 6 s. Pause on hover, on keyboard focus within, when the tab is hidden, and permanently when `prefers-reduced-motion: reduce` (then show controls only).
- Controls: previous, next, dots, and an explicit pause/play button. Swipe on touch (CSS scroll-snap is acceptable; keep it simple).
- Accessibility: wrapper `role="region"` with `aria-roledescription="carousel"` and a label; each slide `role="group"` with `aria-roledescription="slide"` and "n of N" label; inactive slides `aria-hidden`/inert; buttons have localized labels; visible focus states.
- Performance: fixed aspect ratio (no layout shift), first slide eager, other slides lazy, videos only play on the active slide and pause otherwise.
- Keep the "Watch video" modal and "Request demo" button as they are.
- Localize all labels in `ui.ts` (el and en).

### B. Marquee strip (slim, directly under the hero)
- Infinite horizontal scroll, CSS `transform` animation only, content duplicated once with the duplicate `aria-hidden="true"`.
- Default content: feature keywords from the feature list (el/en). Structure it so it can later hold clinic logos from `public/images/clinics/` with a one-line config change.
- Pause on hover/focus. With `prefers-reduced-motion: reduce`, no animation: render as a static wrapped row.
- Edge fade masks; works in light and dark theme.

### Review gate
Render desktop (1440), tablet (820) and mobile (390), light and dark, to `docs/preview/`. Send/describe them to the owner and wait for approval before committing.

## Task 2 - Container and deployment on the Hetzner VM
Existing environment (verify on the server, do not assume): per-clinic isolated stacks run on one Hetzner VM under Podman/podman-compose, with a host-level Caddy reverse proxy and possibly a Cloudflare Tunnel. Inspect how the existing stacks are wired (compose files, networks, Caddyfile, systemd units, SELinux) and follow the same conventions.
- The site container must NOT bind host ports 80/443. Publish only on loopback, e.g. `127.0.0.1:8081:80`, and let the host Caddy reverse_proxy `vetdesk.gr` and `www.vetdesk.gr` to it. Pick a free port after checking what is in use.
- Keep `SITE_ADDRESS=:80` inside the container (plain HTTP behind the host proxy). Caddy inside the container still does gzip/zstd, headers and caching.
- Compose file must work with both docker compose and podman-compose (no exotic features). If SELinux is enforcing, use the right volume label for the videos bind mount.
- Add a healthcheck, `restart: unless-stopped`, and modest memory/CPU limits. Project name/container name must not collide with existing stacks.
- Videos stay outside the image in `media/videos/` (bind mount, read-only). Document the expected filenames: hero.mp4/webm, overview.mp4, appointments.mp4, records.mp4, reminders.mp4, invoicing.mp4.
- Write `DEPLOY.md`: first-time setup, update procedure (ssh, git pull, compose up -d --build), how to add/replace videos without rebuild, the exact host Caddy block to add (provide the snippet, let the owner apply it), rollback (previous image or git revert), and a smoke-test checklist (curl `/`, `/en/`, a 404, `/videos/hero.mp4` range request, headers).
- DNS cutover and retiring GitHub Pages are manual owner steps. Prepare the instructions (including removing the Pages custom domain/CNAME), but do not perform them.

## Task 3 - Cleanup and hardening
- Run the Docker/Podman build and run it locally, curl-test both languages and the 404 page.
- Confirm `.dockerignore`/`.gitignore` behave (no node_modules, no dist, no videos in git).
- Check Lighthouse-style basics: no layout shift from the carousel, images sized, no render-blocking external resources.
- Keep PLAN.md updated: tick off what is done, list what is still open.

## Definition of done
1. Carousel and marquee approved by the owner via screenshots.
2. Container builds and runs, behind the host proxy on loopback, without affecting existing stacks.
3. `DEPLOY.md` and the Caddy snippet delivered.
4. Placeholder list (config, copy, media) handed back to the owner as a short checklist.
5. Final summary: what was built, what was tested, what remains manual.
