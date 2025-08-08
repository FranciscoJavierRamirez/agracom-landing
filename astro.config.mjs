// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
const isCI = !!process.env.CI || !!process.env.GITHUB_ACTIONS;
const owner = process.env.GITHUB_REPOSITORY_OWNER || 'YOUR_GH_USERNAME';
const repo = (process.env.GITHUB_REPOSITORY || 'agracom-landing').split('/')[1];

export default defineConfig({
  site: isCI ? `https://${owner}.github.io` : 'http://localhost:4321',
  base: isCI ? `/${repo}` : '/',
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