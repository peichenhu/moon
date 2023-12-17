<script lang="ts" setup>
    import demo from './index-demo.vue'
</script>

# useDeepProxy

一个深度代理函数

## Demo

<ClientOnly>
<demo />
</ClientOnly>

::: details 查看代码
<<< ./index-demo.vue
:::

## Usage

```js
import { useDeepProxy } from '@pch1024/vueuse';

const symbol = Symbol();
const raw = { [symbol]: 1, a: { b: 1 } };
const data = useDeepProxy(raw, onGet, onSet);

function onGet(path) {
	console.log('onGet', new Date().toLocaleString(), path);
}

function onSet(path) {
	console.log('onSet', new Date().toLocaleString(), path);
}

data.a.b++;
data[symbol]++;
```

## Type Declarations

```ts
function useDeepProxy<T extends object>(
	obj: T,
	onGet?: ((s: string) => void) | undefined,
	onSet?: ((s: string) => void) | undefined,
	path?: string[] // 非必要，不要传值
): T;
```

## Source (建设中)

[#Source]: https://vueuse.org
[#Demo]: https://vueuse.org
[#Docs]: https://vueuse.org

[Source][#Source] • [Demo][#Demo] • [Docs][#Docs]

## Changelog (建设中)
