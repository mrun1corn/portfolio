// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mrun1corn.xyz',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date(),
    })
  ]
});
