import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Root site property
  site: 'https://fairworkcheck.pakistanbill.online',
  trailingSlash: 'always',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap({
      // This override bypasses the internal Astro bug
      // and ensures the sitemap is generated correctly for SEO.
      customPages: ['https://fairworkcheck.pakistanbill.online/']
    })
  ]
});
