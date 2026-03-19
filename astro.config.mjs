import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fairworkcheck.co.uk',
  trailingSlash: 'always',
  integrations: [
    tailwind(),
    sitemap()
  ],
  output: 'static'
});
