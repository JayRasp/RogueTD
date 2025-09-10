# Roguelike Tower Defense (Anime x Cyberpunk)

A Vite + TypeScript + Phaser 3 project scaffold for a roguelike tower defense game.

## Requirements
- Node 18+

## Setup
```bash
npm install
npm run dev
```
Open the printed local URL.

## Build
```bash
npm run build
npm run preview
```
`dist/` contains static assets suitable for static hosting.

## Site Integration

### 1) Embed via iframe (recommended)
- Host `dist/` on any static host.
- Embed in your site:
```html
<iframe
	src="/path-to-your-hosted-game/" 
	style="width:100%;height:100%;border:0;"
	allow="fullscreen"
	title="Roguelike TD"
></iframe>
```

### 2) Subpath hosting
Vite builds are relative-URL friendly if you set `base`.
- For subpath like `/games/roguelike-td/`, build with:
```bash
vite build --base=/games/roguelike-td/
```
- Or set `base` in `vite.config.ts` for permanent subpath.

### 3) GitHub Pages
- Add in `package.json` (optional):
```json
{
	"homepage": "https://<user>.github.io/<repo>"
}
```
- Build for subpath:
```bash
vite build --base=/<repo>/
```
- Push `dist/` to `gh-pages` branch (use `gh-pages` package or GitHub Actions).

### 4) Netlify
- New Site from Git.
- Build command: `npm run build`
- Publish directory: `dist`

### 5) Vercel
- Import the repo.
- Build command: `npm run build`
- Output directory: `dist`

### 6) Any static host (S3/CloudFront, Cloudflare Pages, Firebase Hosting)
- Upload `dist/` as-is.

## Dev Notes
- Phaser bootstrap scenes: `BootScene`, `GameScene`, `UIScene`.
- Config and types: `src/config/game.ts`, `src/types/game.ts`.
- TS config enforces bundler-friendly, strict, no-emit mode.

## License
MIT
