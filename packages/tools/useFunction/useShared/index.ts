export type T1 = 'Null' | 'Undefined' | 'String' | 'Number' | 'Symbol' | 'Bigint' | 'Boolean';
export type T2 = 'Object' | 'Array' | 'Map' | 'Set' | 'Function';
export type T3 = 'Date' | 'RegExp' | 'Error';
export type TYPE = T1 | T2 | T3;

export function promiseTimeout(delay = 0 as number) {
	return new Promise<void>((reslove) => {
		setTimeout(() => reslove(), delay);
	});
}

export const is = (d: unknown, t: TYPE) => Reflect.toString.call(d) === `[object ${t}]`;

export function noop() {}
