<script lang="ts" setup>
    import demo from './index-demo.vue'
</script>

# useScrollY

一个获取 Y 轴上滚动方向和滚动偏移量的函数

## Demo

<ClientOnly>
<demo />
</ClientOnly>

::: details 查看代码
<<< ./index-demo.vue
:::

## Usage

```js
import { useScrollY } from '@pch1024/vueuse';
import { ref, computed } from 'vue';

const scrollDom = (ref < HTMLElement) | (null > null);
const { scrollToTop, scrollY } = useScrollY(scrollDom); // 使用一个滚动容器
const { scrollToTop: winTop, scrollY: winY } = useScrollY(); // 使用默认 window 滚动容器
```

## Type Declarations

```ts
useScrollY(el?: HTMLElement | Ref<HTMLElement | null> | undefined): {
    scrollToTop: Ref<boolean>;
    scrollY: Ref<number>;
}
```

## Source (建设中)

[#Source]: https://vueuse.org
[#Demo]: https://vueuse.org
[#Docs]: https://vueuse.org

[Source][#Source] • [Demo][#Demo] • [Docs][#Docs]

## Changelog (建设中)
