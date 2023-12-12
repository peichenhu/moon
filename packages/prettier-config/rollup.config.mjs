import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
	input: 'index.ts',
	plugins: [typescript()],
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
