<script setup lang="ts">
import { ref, computed } from 'vue';
import { useScrollY } from './index';
const scrollDom = ref<HTMLElement | null>(null);
const { scrollToTop, scrollY } = useScrollY(scrollDom);
let [y, t] = [0, 0];
const domStyle = computed(() => {
	const domHeight = 50;
	const sy = scrollY.value;
	if (sy < domHeight) {
		if (scrollToTop.value && y === 0) {
			// [y, t] = [0, 300];
		} else {
			[y, t] = [-sy, 0];
		}
	} else {
		if (scrollToTop.value) {
			[y, t] = [0, 300];
		} else {
			[y, t] = [-domHeight, 300];
		}
	}
	return {
		transform: `translateY(${y}px)`,
		transition: `transform ${t}ms`
	};
});
</script>

<template>
	<div class="demo">
		<div class="header" :style="domStyle">
			header: 默认显示，向下滚动时隐藏，向上滚动时显示。
		</div>
		<div class="body" ref="scrollDom">
			<p v-for="i in 20" :key="i">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga exercitationem hic
				tempore facilis nihil vero delectus non nesciunt. Libero excepturi et quaerat nemo
				aperiam, earum ut ducimus unde ipsum totam!
			</p>
		</div>
	</div>
</template>

<style scoped lang="less">
.demo {
	position: relative;
	display: block;
	height: 300px;
	overflow: hidden;
	border: 1px solid var(--vp-c-divider);
	.header {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		background-color: var(--vp-nav-bg-color);
		color: var(--vp-c-text-1);
		transform: translateY(0);
		z-index: 2;
	}
	.body {
		padding-top: 50px;
		z-index: 1;
		position: relative;
		height: 100%;
		overflow: auto;
	}
}
</style>
