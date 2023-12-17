import { UnwrapRef, computed, ref, Ref, toRaw, watch } from 'vue';

export const initOptions: Options = {
	deep: false,
	debounce: 0,
	ignore: []
};

export interface Options {
	deep?: boolean;
	debounce?: number;
	ignore?: string[];
}

export type WatchData<T> = UnwrapRef<T> | T;

export function useDebouncedRefHistory<Raw>(data: Ref<Raw>, options?: Options) {
	const { deep } = Object.assign(initOptions, options || {});
	const redoList: Ref<Raw[]> = ref([]); // 可重做历史记录
	const undoList: Ref<Raw[]> = ref([]); // 可撤销历史记录
	const PENDING = 'pending';
	const UNDO = 'undo';
	const REDO = 'redo';
	const canUndo = computed(() => undoList.value.length > 1);
	const canRedo = computed(() => redoList.value.length > 0);
	// 变量
	let status = PENDING;

	watch(data, callback, { deep, immediate: true });

	function callback(raw: Raw) {
		console.log(JSON.stringify(raw));
		const cloneOld: Raw = structuredClone(toRaw(raw));
		if (status === UNDO) {
			redoList.value.unshift(cloneOld); // 撤销操作，本次操作支持重做
		} else if (status === REDO) {
			undoList.value.unshift(cloneOld); // 重做操作，本次重做支持撤销
		} else {
			redoList.value = [];
			undoList.value.unshift(cloneOld); // 正常操作，本次重做支持撤销
		}
		status = PENDING;
	}

	function undo() {
		status = UNDO;
		const old = undoList.value.shift();
		if (old) data.value = old;
	}

	function redo() {
		status = REDO;
		const old = redoList.value.shift();
		if (old) data.value = old;
	}

	return { undo, redo, undoList, redoList, canUndo, canRedo };
}
