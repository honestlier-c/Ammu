# Ammu — TCS NQT prep (Vite + React)

## If you see: “MIME type application/octet-stream” for `main.tsx`

That means the page is **not** being served by Vite. Common cases:

| What you did | Fix |
|--------------|-----|
| Double‑clicked `index.html` or `file://…` | Run `npm install` then `npm run dev` |
| `python -m http.server` on the repo root | Use `npm run dev` or `npm run build` then `npm run preview` |
| GitHub Pages shows the **source** repo (no `dist`) | Enable the **GitHub Action** in `.github/workflows/pages.yml` and set Pages source to **GitHub Actions**, or manually upload **`dist/`** after `npm run build` |
| Netlify **Publish directory** is wrong (e.g. repo root instead of `dist`) | Set **Publish directory** to `dist` (see `netlify.toml`) |

This project is **Vite-only**: the browser must either use **`vite dev`** (transforms `.tsx`) or load the **built** JS files from **`dist/`** after **`npm run build`**.

## Deploy on Netlify

This repo includes **`netlify.toml`**: build = `npm run build`, publish = **`dist`**.

1. **New site from Git** → pick this repo.  
2. Netlify reads `netlify.toml` automatically.  
3. **Do not** set Publish directory to `.` or leave the default repo root — it must be **`dist`** so the browser loads compiled **`.js`** bundles (not `/src/main.tsx`).

**Base URL:** Netlify sites are usually at the domain root (`https://yoursite.netlify.app/`). Keep **`VITE_BASE` unset** (defaults to `/` in `vite.config.ts`). Only set `VITE_BASE` if you deploy under a subpath (uncommon on Netlify).

Connect repo: [honestlier-c/Ammu](https://github.com/honestlier-c/Ammu)

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

For `https://honestlier-c.github.io/Ammu/`, the workflow sets `VITE_BASE=/Ammu/` during `npm run build`. If your repo name or Pages URL path is different, edit `VITE_BASE` in `.github/workflows/pages.yml` (and match that path in the repo **Settings → Pages** URL).

## Repo

https://github.com/honestlier-c/Ammu
