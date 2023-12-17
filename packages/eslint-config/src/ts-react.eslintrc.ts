console.log('\x1B[46m %s \x1B[49m', '@pch1024/eslint-config/react');

import type { ESLint } from 'eslint';

export default <ESLint.ConfigData>{
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
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'prettier' // 关闭 eslint 中与 prettier 相互冲突的规则。
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: [
		'@typescript-eslint',
		'react',
		'react-hooks',
		'react-refresh',
		'prettier' // 允许 eslint 用 prettier 格式化代码的能力。 安装依赖并修改 .eslintrc 文件
	],
	rules: {
		'@typescript-eslint/no-explicit-any': 'warn',
		'prefer-const': 'warn',
		'linebreak-style': ['error', 'unix'],
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
	},
	// FIX Warning: React version not specified in eslint-plugin-react settings.
	settings: {
		// sharedData: 'Hello PCH1024!',
		react: {
			version: '18.2.0'
		}
	}
};
