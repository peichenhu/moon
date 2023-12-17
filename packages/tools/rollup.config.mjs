import { sync } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';

export const inputList = ['useHook/**/index.ts', 'useFunction/**/index.ts'];

export default defineConfig({
	input: {
		index: 'index.ts',
		...Object.fromEntries(
			sync(inputList).map((file) => [
				file.split(path.sep)[1], // name
				fileURLToPath(new URL(file, import.meta.url)) // path
			])
		)
	},
	plugins: [
		typescript({
			declaration: true,
			declarationDir: 'dist/typing',
			exclude: ['**/*.test.ts']
		})
	],
	external: ['vue-demi', 'vue'], // <-- suppresses the warning
	output: [
		{
			// file: 'dist/[name].mjs',
			dir: 'dist',
			format: 'esm',
			entryFileNames: ({ name }) => {
				if (name === 'index') {
					return 'index.mjs';
				}
				return '[name]/index.mjs';
			},
			sourcemap: true
		},
		{
			// file: 'dist/[name].cjs',
			dir: 'dist',
			format: 'cjs',
			entryFileNames: ({ name }) => {
				if (name === 'index') {
					return 'index.cjs';
				}
				return '[name]/index.cjs';
			},
			sourcemap: true
		}
	]
});
