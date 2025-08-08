// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // For GitHub Pages deployment, update YOUR_USERNAME with your actual GitHub username
  site: process.env.CI ? 'https://YOUR_USERNAME.github.io' : 'http://localhost:4321',
  ...(process.env.CI && { base: '/agracom-landing' }),
  integrations: [
    tailwind({
      configFile: './tailwind.config.mjs'
    }),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-CL',
          en: 'en-US'
        }
      }
    })
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false
    }
  },
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    css: {
      devSourcemap: true
    }
  }
});