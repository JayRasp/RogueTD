# Roguelike Tower Defense (Anime x Cyberpunk)

A Vite + TypeScript + Phaser 3 project scaffold for a roguelike tower defense game.

## Requirements
- Node 18+
- Nginx on your server (static file hosting)

## Quick Start (Local)
```bash
npm install
npm run dev
```
Open the printed local URL.

## Build for Production
```bash
npm run build
```
The static site is emitted to `dist/`.

---

## Getting the Code

### Clone the repository
```bash
# HTTPS
git clone https://github.com/<org-or-user>/<repo>.git
# or SSH
# git clone git@github.com:<org-or-user>/<repo>.git
cd <repo>
```

### Checkout a specific branch (if provided)
```bash
git fetch origin
git checkout <branch-name>
# keep your local in sync later
git pull --ff-only
```

---

## Nginx Deployment
Below are copy‑paste recipes for serving the built `dist/` with Nginx.

### Option A: Root deployment (site served at `/`)
1) Build and copy files to your web root:
```bash
npm run build
sudo mkdir -p /var/www/roguelike-td
sudo cp -r dist/* /var/www/roguelike-td/
```
2) Nginx server block (`/etc/nginx/sites-available/roguelike-td`):
```nginx
server {
	listen 80;
	server_name your-host;
	root /var/www/roguelike-td;
	index index.html;
	location / {
		# SPA fallback so client-side routing works
		try_files $uri $uri/ /index.html;
	}

	# Optional: cache static assets aggressively
	location ~* \.(?:js|css|png|jpg|jpeg|gif|svg|webp|ico)$ {
		expires 30d;
		access_log off;
	}
}
```
3) Enable and reload:
```bash
sudo ln -sf /etc/nginx/sites-available/roguelike-td /etc/nginx/sites-enabled/roguelike-td
sudo nginx -t && sudo systemctl reload nginx
```

### Option B: Subpath deployment (served at `/games/roguelike-td/`)
1) Build with a base path so asset URLs are correct:
```bash
vite build --base=/games/roguelike-td/
```
2) Copy build to a folder:
```bash
sudo mkdir -p /var/www/roguelike-td
sudo cp -r dist/* /var/www/roguelike-td/
```
3) Add a location block to your existing server:
```nginx
server {
	listen 80;
	server_name your-host;
	# ... your existing root/index ...

	location /games/roguelike-td/ {
		alias /var/www/roguelike-td/;
		index index.html;
		# SPA fallback within the subpath
		try_files $uri $uri/ /games/roguelike-td/index.html;
	}
}
```
4) Reload Nginx:
```bash
sudo nginx -t && sudo systemctl reload nginx
```

### HTTPS (recommended)
Use Let's Encrypt with Certbot (example for Ubuntu):
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-host
```
Certbot will update your Nginx config and auto‑renew certificates.

### Content Security Policy (optional)
```http
Content-Security-Policy: default-src 'self'; img-src 'self' data: blob:; script-src 'self'; style-src 'self' 'unsafe-inline'; connect-src 'self' blob:; worker-src 'self' blob:; child-src 'self';
```
Adjust if you load external assets.

### Troubleshooting
- White screen or 404 on refresh: ensure SPA fallback (`try_files ... /index.html`) is present in the correct location block.
- Broken assets under subpath: confirm you built with the correct `--base=/games/roguelike-td/` and your Nginx `location` matches it.
- Mixed content: use HTTPS for the site and any embeds.

---

## Project Structure
- Scenes: `src/phaser/BootScene.ts`, `src/phaser/GameScene.ts`, `src/phaser/UIScene.ts`
- Config: `src/config/game.ts`
- Types: `src/types/game.ts`

## License
MIT
