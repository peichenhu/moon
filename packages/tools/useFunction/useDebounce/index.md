<script lang="ts" setup>
    import demo from './index-demo.vue'
</script>

# useDebounce

一个防抖函数

## Demo

<ClientOnly>
<demo />
</ClientOnly>

::: details 查看代码
<<< ./index-demo.vue
:::

## Usage

```js
import { useDebounce } from '@pch1024/vueuse';
const delay = ref(100);
const add = useDebounce(() => {
	count.value++;
}, delay);
```

## Type Declarations

```ts
function useDebounce(
	fn: (...args: unknown[]) => unknown,
	delay?: number | Ref<number>
): (...rest: unknown[]) => void;
```

## Source (建设中)

[#Source]: https://vueuse.org
[#Demo]: https://vueuse.org
[#Docs]: https://vueuse.org

[Source][#Source] • [Demo][#Demo] • [Docs][#Docs]

## Changelog (建设中)
