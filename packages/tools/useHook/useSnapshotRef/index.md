<script lang="ts" setup>
    // import demo from './index-demo.vue'
	import demoTsx from './demo.tsx'
</script>

# useSnapshotRef

一个支持快照和防抖的 Ref

## Demo

<ClientOnly>
<demoTsx />
</ClientOnly>

::: details 查看代码
<<< ./demo.tsx
:::

<!-- <ClientOnly>
<demo />
</ClientOnly> -->

## Usage

```js
import { useSnapshotRef, type Options } from '@pch1024/vueuse';
const options:Options = {
	limit: 5, 							// 快照最大存储数量
	// include: [], 					// 包含的监听属性路径；","分隔；支持 Symbol 属性
	exclude: ['a,b', 'a,Symbol(1)'], 	// 忽略的监听属性路径；","分隔；支持 Symbol 属性
	delay: 500, 						// 防抖延迟生效时间
};
const data = { count: 1 };
const { state, undo, redo, history, canRedo, canUndo } = useSnapshotRef(data, options);

```

## Type Declarations

::: details 查看代码
<<< ./typing.ts
:::

## Source (建设中)

[#Source]: https://vueuse.org
[#Demo]: https://vueuse.org
[#Docs]: https://vueuse.org

[Source][#Source] • [Demo][#Demo] • [Docs][#Docs]

## Changelog (建设中)
