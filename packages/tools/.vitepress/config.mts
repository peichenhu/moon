import { defineConfig } from 'vitepress';
import { createHooksMenu, createFunctionMenu } from './sidebar.mts';
import viteConfig from './config.vite.mts';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	vite: viteConfig,
	base: "/docs-tools/",
	srcDir: '.',
	outDir: 'docs',
	title: 'Tools',
	description: '一个超集工具包',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [{ text: 'Home', link: '/' }],
		sidebar: [
			{
				text: '开始',
				items: [{ text: '简介', link: 'guide' }]
			},
			...createHooksMenu(),
			...createFunctionMenu()
		],

		socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
	}
});
