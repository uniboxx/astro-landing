// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-landingpage.netlify.app/',
  integrations: [
    sitemap({
      filter: (page) =>
        page !== 'https://stargazers.club/secret-vip-lounge/' &&
        page !== 'https://stargazers.club/secret-vip-lounge-2/',
    }),
  ],
});
