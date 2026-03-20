// @ts-check
import { defineConfig } from 'astro/config';

// GITHUB_ACTIONS is automatically set to 'true' in GitHub Actions environments.
// Locally it is undefined, so base defaults to '/' and dev server works at localhost:4321.
const base = process.env.GITHUB_ACTIONS ? '/portfolio' : '/';

export default defineConfig({
  site: 'https://bdoshchak.github.io/portfolio',
  base,
  output: 'static',
});
