import path from 'node:path';
import { globSync } from 'glob';

export function createHooksMenu() {
	const files = globSync('useHook/**/index.md', {
		ignore: [],
		root: process.cwd()
	});
	const text = 'Hook';
	const items: { text: string; link: string }[] = [];
	const collapsed = true;
	const menu = [{ text, items, collapsed }];
	files.forEach((file) => {
		const text = file.split(path.sep)[1];
		items.push({ text, link: file.replace('.md', '') });
		// console.log('createHooksMenu', items[items.length - 1]);
	});
	return menu;
}

export function createFunctionMenu() {
	const files = globSync('useFunction/**/index.md', {
		ignore: [],
		root: process.cwd()
	});
	const text = 'Function';
	const items: { text: string; link: string }[] = [];
	const collapsed = true;
	const menu = [{ text, items, collapsed }];
	files.forEach((file) => {
		const text = file.split(path.sep)[1];
		items.push({ text, link: file.replace('.md', '') });
		// console.log('createFunctionMenu', items[items.length - 1]);
	});
	return menu;
}
