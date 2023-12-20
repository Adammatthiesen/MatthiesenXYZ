import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { remarkModifiedTime } from './remark-modified-time.mjs';
import image from "@astrojs/image";

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkModifiedTime],
  },
  site: 'https://matthiesen.xyz',
  integrations: [mdx(), sitemap(), tailwind(), image(
    {
      serviceEntryPoint: '@astrojs/image/sharp',
      cacheDir: "./.cache/image",
      logLevel: 'debug',
    }
  )]
});
