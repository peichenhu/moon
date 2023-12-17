<script setup lang="ts">
import { ref } from 'vue';
import { useDebounce } from './index';
const count = ref(0);
const delay = ref(300);
const add = useDebounce(() => {
	count.value++;
}, delay);
</script>

<template>
	<div class="demo">
		<div class="row">count: {{ count }}</div>
		<div class="row">
			<input
				name="delay"
				id="delay"
				type="range"
				:value="delay"
				@input="delay = ($event.target as HTMLInputElement).valueAsNumber"
				:max="1000"
				:min="0"
			/>
			<label for="delay">delay: {{ delay }}</label>
		</div>
		<div class="row">
			<button type="button" @click="add">count ++</button>
		</div>
	</div>
</template>

<style scoped lang="less">
.demo {
	min-height: 200px;
	.row {
		line-height: 30px;
		span,
		input {
			vertical-align: middle;
			// display: inline-block;
		}
	}
}
</style>
