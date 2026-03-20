import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 1. Ensure this URL is exactly where the site is hosted
  site: 'https://fairworkcheck.pakistanbill.online',
  trailingSlash: 'always',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap({
      // 2. This forces the sitemap to include all pages found in the build
      filter: (page) => true,
      // 3. Serializer ensures the XML formatting is clean for Google
      serialize(item) {
        if (/tools/.test(item.url)) {
          item.changefreq = 'weekly';
          item.priority = 0.7;
        }
        return item;
      },
    })
  ]
});
