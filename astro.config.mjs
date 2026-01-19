// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";
import icon from "astro-icon";
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), icon(), vue()],
  markdown: {
    remarkPlugins: [
      [remarkToc, { ordered: true }]
    ]
  }
});