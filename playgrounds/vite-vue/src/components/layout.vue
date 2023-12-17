<script setup lang="ts">
import { computed } from 'vue';
import { useScrollY } from '../hooks/useScrollY';
import domMenu from './menu.vue';

// const domLayout = ref<HTMLElement | null>(null);
// const { scrollToTop, scrollY } = useScrollY(domLayout as Ref<HTMLElement>);
const { scrollToTop, scrollY } = useScrollY();

const headerStyle = computed(() => {
	let [y, t] = [0, 300];
	if (!scrollToTop.value) {
		[y, t] = [-scrollY.value, scrollY.value * 2];
	}
	return {
		transform: `translateY(${y}px)`,
		transition: `transform ${t}ms`
	};
});
</script>

<template>
	<div class="app-layout" ref="domLayout">
		<div class="app-body">
			<div class="app-menu">
				<domMenu></domMenu>
			</div>
			<div class="app-main">
				<slot></slot>
			</div>
		</div>
		<div class="app-header" :style="headerStyle">header</div>
		<div class="app-footer">footer</div>
	</div>
</template>

<style scoped lang="less">
.app-layout {
	min-width: 800px;
	width: 100vw;
	margin: 0 auto;
	box-sizing: border-box;
	position: relative;
}

.app-header {
	width: 100%;
	height: 50px;
	top: 0;
	left: 0;
	position: fixed;
	line-height: 50px;
	text-align: center;
	color: var(--theme-color);
	background-color: var(--theme-bg-color);
	transform: translateY(0);
	border-bottom: 2px solid rgba(0, 0, 0, 0.2);
	box-sizing: border-box;
}

.app-body {
	position: relative;
	height: 100%;
	min-height: 200vh;
	margin-top: 50px;
	display: flex;
	flex-flow: row nowrap;
	.app-menu {
		flex: 0 1 auto;
		width: 200px;
		background-color: var(--theme-bg-color);
		border-right: 2px solid rgba(0, 0, 0, 0.2);
	}
	.app-main {
		flex: 1 1 auto;
		padding: 12px;
	}
}

.app-footer {
	height: 50px;
	line-height: 50px;
	text-align: center;
	color: var(--theme-color);
	background-color: var(--theme-bg-color);
	border-top: 2px solid rgba(0, 0, 0, 0.2);
	box-sizing: border-box;
}
</style>
