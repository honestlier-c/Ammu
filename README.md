# Ammu — TCS NQT prep (Vite + React)

This project is **Vite-only**: run it with the dev server or build static files. Do **not** open `index.html` directly from disk — the app loads `/src/main.tsx` as an ES module, which needs Vite’s dev server or a proper `dist/` deploy.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:3000`).

## Production build

```bash
npm run build
npm run preview
```

Upload the contents of **`dist/`** to your host (e.g. GitHub Pages, Netlify).

### GitHub Pages (project site)

If the site is served from `https://<user>.github.io/<repo>/`, set `base` in `vite.config.ts` to `/<repo>/` before building, or the assets will 404.

## Repo

https://github.com/honestlier-c/Ammu
