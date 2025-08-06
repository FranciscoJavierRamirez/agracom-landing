// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://agracom-internacional.com',
  integrations: [
    tailwind({
      config: { path: './tailwind.config.mjs' }
    }),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
      cacheDir: './.cache/image',
      logLevel: 'info'
    }),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-CL',
          en: 'en-US'
        }
      }
    }),
    robotsTxt(),
    partytown({
      config: {
        forward: ['gtag']
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
      transformer: 'lightningcss'
    }
  }
});
