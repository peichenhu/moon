<script setup lang="ts">
import { ref } from 'vue';

import { useDeepProxy } from './index';
import { useToString } from '../useToString';

const symbol = Symbol();
const raw = {
	d: { [symbol]: 1 },
	a: { b: { c: 1 } }
};

const data = useDeepProxy(raw, onGet, onSet, ['data']);
const dataString = ref(useToString(raw));
const onSetLogs = ref<string[]>([]);
const onGetLogs = ref<string[]>([]);

function onGet(path: string) {
	console.log('onGet', path);
	onGetLogs.value.unshift([new Date().toLocaleString(), path].join('：'));
	dataString.value = useToString(raw);
}

function onSet(path: string) {
	console.log('onSet', path);
	onSetLogs.value.unshift([new Date().toLocaleString(), path].join('：'));
	dataString.value = useToString(raw);
}
</script>

<template>
	<div class="demo">
		<div class="row">
			<p>data = {{ dataString }}</p>
		</div>
		<div class="row">
			<button type="button" @click="data.a.b.c++">data.a.b.c++</button>
			<button type="button" @click="data.d[symbol]++">data.d[symbol]++</button>
		</div>
		<div style="display: flex">
			<div class="row" style="max-height: 200px; overflow: auto; width: 50%">
				<div>onGet 日志</div>
				<div v-for="(str, idx) in onGetLogs" :key="idx">{{ str }}</div>
			</div>
			<div class="row" style="max-height: 200px; overflow: auto; width: 50%">
				<div>onSet 日志</div>
				<div v-for="(str, idx) in onSetLogs" :key="idx">{{ str }}</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="less"></style>
