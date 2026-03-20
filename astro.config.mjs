import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // This must be your exact live URL
  site: 'https://fairworkcheck.pakistanbill.online',
  trailingSlash: 'always',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap()
  ]
});
