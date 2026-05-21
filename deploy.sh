#!/bin/bash
# ─────────────────────────────────────────────
# CBCODER PORTFOLIO — Live Server Deploy Script
# ─────────────────────────────────────────────

set -e

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  CBCODER PORTFOLIO — LIVE SERVER DEPLOY"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# ── 1. Install dependencies ──────────────────
echo "[1/4] Installing production dependencies..."
npm install --production
echo "  ✓ Dependencies installed."
echo ""

# ── 2. Build production bundle ───────────────
echo "[2/4] Building production bundle..."
npm run build
echo "  ✓ Build complete."
echo ""

# ── 3. Package into release.zip ──────────────
echo "[3/4] Packaging files for upload..."
rm -f release.zip
zip -r release.zip \
  .next \
  public \
  next.config.js \
  package.json \
  package-lock.json \
  ecosystem.config.js \
  -x ".next/cache/*" \
  -x "**/.DS_Store"
echo "  ✓ release.zip created: $(du -sh release.zip | cut -f1)"
echo ""

# ── 4. Deployment instructions ───────────────
echo "[4/4] Upload & start instructions for your live server:"
echo ""
echo "  STEP 1 — Upload release.zip to your server (via FTP, cPanel, or SCP):"
echo "    scp release.zip user@yourserver.com:/var/www/cbcoder/"
echo ""
echo "  STEP 2 — SSH into your server and run:"
echo "    cd /var/www/cbcoder"
echo "    unzip -o release.zip"
echo "    npm install --production"
echo ""
echo "  STEP 3 — Start the app with PM2:"
echo "    pm2 start ecosystem.config.js"
echo "    pm2 save"
echo "    pm2 startup"
echo ""
echo "  STEP 4 — Point Nginx to your app:"
echo "    Copy nginx.conf to /etc/nginx/sites-available/cbcoder"
echo "    ln -s /etc/nginx/sites-available/cbcoder /etc/nginx/sites-enabled/"
echo "    sudo nginx -t && sudo systemctl reload nginx"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Your site will run at: https://cbvisuals.com"
echo "  Active videos:"
echo "    ✓ /hero_video/optimized_Bts.mp4  (Home + Photography hero)"
echo "    ✓ /About me/Fx3.mov              (Rentals hero)"
echo "    ✓ YouTube embeds                 (Films pages)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
