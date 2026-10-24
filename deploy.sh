#!/bin/sh
# Pull latest, build at low priority (so clinic containers stay up), then restart.
set -e

cd "$(dirname "$0")"

git pull origin feat/carousel-marquee
git rev-parse --short HEAD > public/VERSION

echo "Building image (low priority)..."
nice -n 19 docker compose build

echo "Restarting container..."
docker compose up -d

echo "Done."
