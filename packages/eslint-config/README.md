# @pch1024/eslint-config

> [eslint 配置说明文档](https://zh-hans.eslint.org/docs/latest/extend/shareable-configs)

-   对等依赖项 `"eslint": "^8.55.0"`
-   默认适配 ESM 模块 `sourceType: 'module'`
-   默认适配 TS 语言

# 安装

```bash
# 官方，非 vue、react 直接使用官方 Cli 创建配置
pnpm create @eslint/config

# 我的，vue 或者 react 项目
pnpm add -D @pch1024/eslint-config
```

## 使用

```js
module.exports = {
	// extends: ['@pch1024/eslint-config/react'],
	// extends: ['@pch1024/eslint-config/vue']
};
```
