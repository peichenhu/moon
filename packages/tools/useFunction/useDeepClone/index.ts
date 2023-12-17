import { is } from '../useShared/index';

export type BR = (data: object, tmp: unknown) => WeakMap<object, unknown>;

export function useDeepClone<T>(data: T): T {
	const wp = new WeakMap<object, unknown>();
	typeof data == 'boolean';

	return clone(data);

	function beforeRecursion(data: object, tmp: unknown) {
		return wp.set(data, tmp);
	}

	function clone(data: unknown) {
		if (data && typeof data === 'object' && wp.has(data)) return wp.get(data);
		if (is(data, 'Object'))
			return cloneObject(data as Record<string | symbol, unknown>, beforeRecursion);
		if (is(data, 'Array')) return cloneArray(data as unknown[], beforeRecursion);
		if (is(data, 'Map')) return cloneMap(data as Map<unknown, unknown>, beforeRecursion);
		if (is(data, 'Set')) return cloneSet(data as Set<unknown>, beforeRecursion);
		if (is(data, 'Symbol')) return cloneSymbol(data as symbol);
		if (is(data, 'Date')) return cloneDate(data as Date);
		if (is(data, 'RegExp')) return cloneRegExp(data as RegExp);
		if (is(data, 'Error')) return cloneError(data as Error);
		return data;
	}

	function cloneArray(data = [] as unknown[], beforeRecursion: BR) {
		const tmp: unknown[] = [];
		beforeRecursion(data, tmp); // 递归前操作
		for (const i of data) {
			tmp.push(clone(i));
		}
		return tmp;
	}

	function cloneObject(data: Record<string | symbol, unknown>, beforeRecursion: BR) {
		// const tmp = new Object(Object.getPrototypeOf(data)); // 克隆原型
		const tmp: Record<string | symbol, unknown> = {};
		beforeRecursion(data, tmp); // 递归前操作
		for (const key of Object.keys(data)) {
			tmp[key] = clone(data[key]);
		}
		for (const key of Object.getOwnPropertySymbols(data)) {
			// tmp[key] = clone(data[key]);
			tmp[clone(key)] = clone(data[key]);
		}
		return tmp;
	}

	function cloneMap(data: Map<unknown, unknown>, beforeRecursion: BR) {
		const tmp = new Map();
		beforeRecursion(data, tmp); // 递归前操作
		for (const [key, index] of data) {
			// tmp.set(key, clone(index));
			tmp.set(clone(key), clone(index)); //  克隆 key
			// tmp.set(is(key, 'Symbol') ? key : clone(key), clone(index)); //  分情况克隆 key
		}
		return tmp;
	}

	function cloneSet(data: Set<unknown>, beforeRecursion: BR) {
		const tmp = new Set();
		beforeRecursion(data, tmp); // 递归前操作
		for (const index of data) {
			tmp.add(clone(index));
		}
		return tmp;
	}

	function cloneDate(data: Date) {
		return new Date(data);
	}

	function cloneRegExp(data: RegExp) {
		const { source, flags } = data;
		const tmp = new RegExp(source, flags);
		tmp.lastIndex = data.lastIndex;
		return tmp;
	}

	function cloneError(data: Error) {
		const { name, message } = data;
		const tmp = new (globalThis as any)[name](message);
		return tmp;
	}

	function cloneSymbol(data: symbol) {
		return Symbol(data.description);
	}
}
