// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages deployment config.
// If deploying to https://USERNAME.github.io        → site: 'https://USERNAME.github.io', no base needed
// If deploying to https://USERNAME.github.io/REPO  → add: base: '/REPO'
// Update `site` before first deploy.

export default defineConfig({
  site: 'https://bdoshchak.github.io/portfolio',
  base: '/portfolio',
  output: 'static',
});
