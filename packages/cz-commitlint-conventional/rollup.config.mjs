import { defineConfig } from 'rollup';

export default defineConfig({
	input: 'index.ts',
	output: [
		{
			file: 'dist/index.cjs',
			format: 'cjs'
		},
		{
			file: 'dist/index.mjs',
			format: 'es'
		}
	]
});
