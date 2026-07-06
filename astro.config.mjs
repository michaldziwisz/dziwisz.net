import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  site: 'https://dziwisz.net',
  // Domyślny język: polski. Angielski pod /en/.
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
