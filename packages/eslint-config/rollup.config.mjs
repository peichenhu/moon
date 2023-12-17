import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
	input: {
		'ts-vue.eslintrc': './src/ts-vue.eslintrc.ts',
		'ts-react.eslintrc': './src/ts-react.eslintrc.ts'
	},
	plugins: [typescript()],
	output: [
		{
			dir: 'dist',
			entryFileNames: '[name].cjs',
			format: 'cjs'
		},
		{
			dir: 'dist',
			entryFileNames: '[name].mjs',
			format: 'esm'
		}
	]
});
