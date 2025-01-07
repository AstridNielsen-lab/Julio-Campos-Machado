import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://juliocamposmachado.com.br',
	integrations: [
		mdx(),
		sitemap({
			changefreq: 'weekly',
			priority: 0.7,
			lastmod: new Date()
		})
	],
	markdown: {
		drafts: true,
		shikiConfig: {
			theme: 'github-dark',
			wrap: true
		}
	}
});