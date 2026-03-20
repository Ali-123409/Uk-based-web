import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Root site property (standard)
  site: 'https://fairworkcheck.co.uk',
  trailingSlash: 'always',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap({
      // FORCED SITE PROPERTY (This fixes the 'reduce' error)
      site: 'https://fairworkcheck.pakistanbill.online'
    })
  ]
});
