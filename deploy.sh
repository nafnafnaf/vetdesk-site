#!/bin/sh
# Pull pre-built dist and restart Caddy. No build on server.
set -e
cd "$(dirname "$0")"
git pull origin feat/carousel-marquee
docker compose up -d --build
echo "Done."
