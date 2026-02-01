// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://hera-sauna.com',
  adapter: vercel(),
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
