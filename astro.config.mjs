import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { remarkModifiedTime } from './remark-modified-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://matthiesen.xyz',
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    remarkPlugins: [remarkModifiedTime],
  }
});