// # 配置文档 https://prettier.io/docs/en/configuration.html
// # 使用 prettier 进行格式化，使用 linters 来捕捉 bug

import type { Config } from 'prettier';

const config: Config = {
	useTabs: true, // 采用 tab 缩进还是空白缩进
	tabWidth: 4, // tab 键宽度
	printWidth: 100, // 使用较大的打印宽度，因为 Prettier 的换行设置似乎是针对没有注释的 JavaScript.
	singleQuote: true, // 字符串是否使用单引号
	semi: true, // 行位是否使用分号
	trailingComma: 'none', // 对于 ES5 而言, 尾逗号不能用于函数参数，因此使用它们只能用于数组
	bracketSpacing: true // 是否保留括号中的空格 默认true
};

export default config;
