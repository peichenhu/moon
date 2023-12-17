console.log('\x1B[46m %s \x1B[49m', '@pch1024/eslint-config/vue');

import type { ESLint } from 'eslint';

const config: ESLint.ConfigData = {
	ignorePatterns: ['dist', 'node_modules'],
	root: true,
	env: {
		browser: true,
		es2022: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-essential',
		'prettier' // 关闭 eslint 中与 prettier 相互冲突的规则。
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: [
		'@typescript-eslint',
		'vue',
		'prettier' // 允许 eslint 用 prettier 格式化代码的能力。 安装依赖并修改 .eslintrc 文件
	],
	rules: {
		'@typescript-eslint/no-explicit-any': 'off',
		'prefer-const': 'off',
		'vue/multi-word-component-names': 'off',
		'linebreak-style': ['error', 'unix'],
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		semi: ['error', 'always']
	}
};

export default config;
