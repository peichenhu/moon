<script setup lang="ts">
// import { ref, reactive, ComputedRef } from 'vue';
import router from '../router/index';
import { routes } from '../router/index';
function handleOpen() {}
function handleClose() {}

interface ActiveMenu {
	active: boolean;
	index: string;
	indexPath: string[];
}

function goto(menu: ActiveMenu) {
	// console.log(menu.active);
	// console.log(menu.index);
	// console.log(menu.indexPath);
	router.push(menu.index);
}
</script>

<template>
	<el-menu default-active="/" class="el-menu-vertical" @open="handleOpen" @close="handleClose">
		<template v-for="item in routes" :key="item.path">
			<el-menu-item :index="item.path" @click="goto">
				<span>{{ item.name }}</span>
			</el-menu-item>
		</template>
	</el-menu>
</template>

<style scoped lang="less">
.el-menu-vertical {
	display: block;
	border-right: none;

	:deep(.el-menu-item) {
		background-color: var(--theme-bg-color);
		border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
	}
}
</style>
