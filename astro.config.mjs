import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vetdesk.gr',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'el', locales: { el: 'el-GR', en: 'en' } },
    }),
  ],
});
