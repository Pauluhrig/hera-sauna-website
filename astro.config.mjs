// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://hera-sauna.com',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/order/'),
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'th', 'ru'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
