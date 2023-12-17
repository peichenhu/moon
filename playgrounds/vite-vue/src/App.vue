<script setup lang="tsx">
import AppLayout from './components/layout.vue';
import { ElConfigProvider } from 'element-plus';
</script>

<template>
	<el-config-provider :size="'small'" :z-index="3000">
		<AppLayout>
			<router-view></router-view>
		</AppLayout>
	</el-config-provider>
</template>

<style scoped></style>
