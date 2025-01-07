import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://juliocamposmachado.com.br',
  integrations: [
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    }),
    tailwind()
  ],
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});