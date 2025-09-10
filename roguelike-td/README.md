# Roguelike Tower Defense (Anime x Cyberpunk)

A Vite + TypeScript + Phaser 3 project scaffold for a roguelike tower defense game.

## Requirements
- Node 18+

## Quick Start
```bash
npm install
npm run dev
```
Open the printed local URL.

## Build for Production
```bash
npm run build
npm run preview
```
The static site is emitted to `dist/` and can be hosted on any static host.

---

## Site Integration (Detailed)
Below are copy‑paste recipes for common hosting and embedding setups.

### 1) Easiest: Embed via iframe
- Deploy `dist/` to any static host (see sections below).
- Then embed in any page:
```html
<div style="position:relative;padding-top:56.25%;background:#000">
	<iframe
		src="https://your-host.tld/path/"
		style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"
		allow="fullscreen"
		title="Roguelike TD"
	></iframe>
</div>
```
- Fullscreen button example (optional):
```html
<button onclick="document.querySelector('iframe')?.requestFullscreen()">Fullscreen</button>
```

### 2) Subpath hosting (e.g., `/games/roguelike-td/`)
Vite needs a `base` set so asset URLs are correct.
- One‑off build:
```bash
vite build --base=/games/roguelike-td/
```
- Persistent config in `vite.config.ts`:
```ts
import { defineConfig } from 'vite';
export default defineConfig({
	base: '/games/roguelike-td/',
});
```
- Verify locally:
```bash
npx serve -s dist -l 4173
# then open http://localhost:4173/games/roguelike-td/
```

### 3) GitHub Pages
- If deploying at `https://<user>.github.io/<repo>`:
```bash
vite build --base=/<repo>/
```
- Deploy `dist/` to `gh-pages` branch. Example using `gh-pages` package:
```bash
npm i -D gh-pages
npx gh-pages -d dist
```
- GitHub Actions minimal workflow (`.github/workflows/gh-pages.yml`):
```yml
name: Deploy
on: { push: { branches: [ master, main ] } }
jobs:
  pages:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 18 }
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: dist
          force_orphan: true
```

### 4) Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- For subpaths, set `Base directory` or specify `--base` in a `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### 5) Vercel
- Framework preset: Other
- Build command: `npm run build`
- Output directory: `dist`
- If using a subpath, configure a rewrite to mount `dist` under the path.

### 6) Cloudflare Pages
- Project > Build settings
  - Build command: `npm run build`
  - Build output directory: `dist`
- For subpaths, set a custom route or serve under a subdomain.

### 7) AWS S3 + CloudFront
- Create an S3 bucket with static website hosting, upload `dist/` contents.
- Set `index.html` as index and 404.
- Put CloudFront in front (optional). For single‑page apps, set custom error response to serve `/index.html`.

### 8) Nginx/Apache snippets
- Nginx (root deployment):
```nginx
server {
	listen 80;
	server_name your-host;
	root /var/www/roguelike-td/dist;
	index index.html;
	location / {
		try_files $uri $uri/ /index.html;
	}
}
```
- Apache (`.htaccess`):
```apache
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
</IfModule>
```

### 9) CSP (Content Security Policy) example
```http
Content-Security-Policy: default-src 'self'; img-src 'self' data: blob:; script-src 'self'; style-src 'self' 'unsafe-inline'; connect-src 'self' blob:; worker-src 'self' blob:; child-src 'self';
```
Adjust if you load external assets.

### 10) Query‑param configuration (optional)
You can pass simple config via query params when embedding, then read it in your code:
```html
<iframe src="https://your-host.tld/path/?seed=42&difficulty=hard"></iframe>
```
```ts
const url = new URL(window.location.href);
const seed = url.searchParams.get('seed') ?? undefined;
const difficulty = url.searchParams.get('difficulty') ?? 'normal';
console.log({ seed, difficulty });
```

---

## Project Structure
- Scenes: `src/phaser/BootScene.ts`, `src/phaser/GameScene.ts`, `src/phaser/UIScene.ts`
- Config: `src/config/game.ts`
- Types: `src/types/game.ts`

## Local Troubleshooting
- White screen? Check console for 404s; subpath `base` likely missing.
- Mixed content? Ensure HTTPS for parent and iframe src.
- CORS on assets? Serve everything from the same origin (or set proper CORS headers).

## License
MIT
