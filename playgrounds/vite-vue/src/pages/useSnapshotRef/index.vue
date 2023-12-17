<script setup lang="ts">
import { ref } from 'vue';
import { useSnapshotRef, type Options } from '@pch1024/tools';
import { useToString } from '@pch1024/tools';
// 配置选项
const delay = ref(500);
const limit = ref(5);
const options: Options = {
	limit,
	// include: [],
	exclude: ['a.b', 'a', 'a[Symbol(1)].b'],
	delay
};
// 监听对象
const data = { count: 1 };
// 导出对象
const { state, undo, redo, history, canRedo, canUndo } = useSnapshotRef(data, options);

function todo(num: number) {
	state.value.count += num;
}
</script>

<template>
	<div class="demo">
		<div class="row">
			<span style="display: inline-block; min-width: 120px">state:</span>
			<span>{{ useToString(state) }}</span>
		</div>
		<div class="row">
			<input
				type="range"
				:value="delay"
				@input="delay = ($event.target as HTMLInputElement).valueAsNumber"
				:max="1000"
				:min="0"
			/>
			<span> delay: {{ delay }}</span>
		</div>
		<div class="row">
			<input
				type="range"
				:value="limit"
				@input="limit = ($event.target as HTMLInputElement).valueAsNumber"
				:max="10"
				:min="0"
			/>
			<span> limit: {{ limit }}</span>
		</div>
		<div class="row">
			<button class="btn" @click="todo(1)">count ++</button>
			<button class="btn" @click="todo(-1)">count --</button>
			<button class="btn" :disabled="!canRedo" @click="redo">redo</button>
			<button class="btn" :disabled="!canUndo" @click="undo">undo</button>
		</div>
		<div class="row">
			<span style="display: inline-block; min-width: 120px">history (count): </span>
			<span> {{ history.length }}</span>
		</div>
		<div class="row" style="min-height: 200px">
			<div v-for="(item, i) in history" :key="i">快照 ： {{ useToString(item) }}</div>
		</div>
	</div>
</template>

<style scoped lang="less"></style>
