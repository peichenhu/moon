import { describe, expect, expectTypeOf, it } from 'vitest';
import { useSnapshotRef } from './index';
import { isRef, type Ref } from 'vue';
import { promiseTimeout } from '../../useFunction/useShared';

describe('useSnapshotRef', function () {
	it('导出变量 state 是一个 Ref 类型', async () => {
		const { state } = useSnapshotRef({});
		expect(isRef(state)).toBe(true);
		expectTypeOf(state).toMatchTypeOf<Ref>();
	});

	it('state 变化会创建快照', async () => {
		const { state, history } = useSnapshotRef({ n: 1 }, { delay: 100 });
		const length = history.value.length;
		state.value.n++;
		await promiseTimeout(200);
		expect(history.value.length - length).toBe(1);
	});

	it('include 属性会创建快照', async () => {
		const { state, history } = useSnapshotRef({ n: 1 }, { delay: 100, include: ['n'] });
		state.value.n++;
		const length = history.value.length;
		await promiseTimeout(100);
		expect(history.value.length - length).toBe(1);
	});

	it('exclude 属性不会创建快照', async () => {
		const { state, history } = useSnapshotRef({ n: 1 }, { delay: 100, exclude: ['n'] });
		state.value.n++;
		const length = history.value.length;
		await promiseTimeout(100);
		expect(history.value.length - length).toBe(0);
	});

	it('undo 会对快照进行撤销', async () => {
		const { state, undo, canUndo } = useSnapshotRef({ n: 1 }, { delay: 50 });
		state.value.n = 2;
		await promiseTimeout(50);
		expect(state.value.n).toBe(2);

		canUndo.value && undo();
		expect(state.value.n).toBe(1);
	});

	it('redo 会对快照撤销进行重做', async () => {
		const { state, undo, redo, canUndo, canRedo } = useSnapshotRef({ n: 1 }, { delay: 50 });
		state.value.n = 2;
		await promiseTimeout(50);
		expect(state.value.n).toBe(2);
		canUndo.value && undo();
		expect(state.value.n).toBe(1);
		canRedo.value && redo();
		expect(state.value.n).toBe(2);
	});

	it('delay 会对快照的创建动作进行防抖', async () => {
		const { state, history } = useSnapshotRef({ n: 1 }, { delay: 100 });
		const length = history.value.length;
		state.value.n = 1;
		state.value.n = 2;
		state.value.n = 3;
		state.value.n = 4;
		state.value.n = 5;
		await promiseTimeout(200);
		expect(history.value.length - length).toBe(1);
		expect(state.value.n).toBe(5);
	});
});
