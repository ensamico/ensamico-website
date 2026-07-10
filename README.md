# Ensamico Static Website

Independent static Vite + React website for Ensamico.

## Edit content

Most website text is in:

- `src/main.tsx`

Main styling is in:

- `src/styles.css`

SEO title/description are in:

- `index.html`

Sitemap and robots are in:

- `public/sitemap.xml`
- `public/robots.txt`

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Build

```bash
npm run build
```

The production files will be created in `dist`.

## Deploy to Cloudflare Pages via GitHub

1. Create a new GitHub repository.
2. Upload/push this project folder to the repository.
3. In Cloudflare, go to Workers & Pages > Create application > Pages > Connect to Git.
4. Select the GitHub repository.
5. Use these settings:
   - Framework preset: Vite or None
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Deploy.
7. Add your custom domain `ensamico.com` in Cloudflare Pages.

## Notes

This cleaned version removes Lovable-specific project files and asset references. It uses a text-based Ensamico logo, so you can later replace it with your real logo file if needed.
