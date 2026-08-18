# Bioinformatics Resource Hub

A curated static documentation site built with [VitePress](https://vitepress.dev/) containing essential bioinformatics tools, foundational literature, primary databases, and pipeline engineering guides.

## Quick Start (Local Development)

```bash
# Install dependencies
npm install

# Start local development server
npm run docs:dev
```
Open `http://localhost:5173` in your browser.

## Building for Production

```bash
npm run docs:build
```
The production-ready static assets will be output to `docs/.vitepress/dist`.

## Deploying to Render

1. Push this repository to GitHub or GitLab.
2. Go to [Render Dashboard](https://dashboard.render.com/) and select **New +** -> **Static Site**.
3. Connect your repository and configure:
   - **Build Command:** `npm run docs:build`
   - **Publish Directory:** `docs/.vitepress/dist`
4. Click **Create Static Site**.
