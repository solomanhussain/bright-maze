import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.abandonedanimalfoundation.com',
  integrations: [tailwind(), mdx(), sitemap(), partytown()],
  output: 'server',
  adapter: cloudflare(),
  build: {
    minify: true
  },
  image: {
    domains: ["pub-dd8ac30d37cd44f9b5bd11218c798764.r2.dev"]
  }
});