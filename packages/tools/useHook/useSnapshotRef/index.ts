import { computed, ref, Ref, toValue } from 'vue';
import { useDeepClone } from '../../useFunction/useDeepClone/index';
import { useDebounce } from '../../useFunction/useDebounce/index';
import { useDeepProxy } from '../../useFunction/useDeepProxy/index';
import type { Options, Snapshot, ReturnData } from './typing';

export * from './typing';
export const PENDING = 'pending';
export const UNDO = 'undo';
export const REDO = 'redo';
export const initOptions: Required<Options> = {
	delay: 300,
	include: [],
	exclude: [],
	limit: 10
};

export function useSnapshotRef<Raw extends object>(
	raw: Raw,
	options?: Partial<Options>
): ReturnData<Raw> {
	const { limit, delay, include, exclude } = Object.assign({}, initOptions, options || {});
	const redoList: Ref<Snapshot<Raw>[]> = ref([]); // 可重做历史记录
	const undoList: Ref<Snapshot<Raw>[]> = ref([]); // 可撤销历史记录
	const canUndo = computed(() => undoList.value.length > 1);
	const canRedo = computed(() => redoList.value.length > 0);
	const cb = useDebounce(callback, delay);
	const rawProxy = useDeepProxy(raw, undefined, onSet);
	const state = ref<Raw>(rawProxy);

	let status = PENDING; // 变量
	callback(); // 必须先执行一次

	function onSet(path: string) {
		if (exclude.includes(path)) return void 0;
		if (include.includes(path) || include.length === 0) {
			cb();
		}
	}

	function checkLimit() {
		let _limit = toValue(limit) as number;
		if (typeof _limit !== 'number') {
			console.error('limit must be of type number');
			_limit = Number(_limit); // 补救措施
		}
		if (redoList.value.length > _limit) {
			redoList.value = redoList.value.slice(0, _limit);
		}
		if (undoList.value.length > _limit + 1) {
			undoList.value = undoList.value.slice(0, _limit + 1);
		}
	}

	function callback() {
		const cloneOld = useDeepClone(raw);
		const datetime = new Date().toLocaleString();
		const snapshot = { snapshot: cloneOld, datetime };
		if (status === PENDING) {
			redoList.value = []; // 正常操作，清空撤销操作
			undoList.value.unshift(snapshot); // 正常操作，本次重做支持撤销
		}
		status = PENDING;
		checkLimit();
	}

	function undo() {
		status = UNDO;
		const redo = undoList.value.shift();
		const old = undoList.value[0];
		if (old) Object.assign(state.value, old.snapshot);
		if (redo) redoList.value.unshift(redo); // 撤销操作，本次操作支持重做
		checkLimit();
	}

	function redo() {
		status = REDO;
		const old = redoList.value.shift();
		if (old) {
			Object.assign(state.value, old.snapshot);
			undoList.value.unshift(old); // 重做操作，本次重做支持撤销
		}
		checkLimit();
	}

	return { state, undo, redo, undoList, redoList, history: undoList, canUndo, canRedo };
}
