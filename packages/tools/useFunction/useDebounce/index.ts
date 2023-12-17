export interface Ref<T = any> {
	value: T;
}
// 防抖函数：多次重复触发，只执行最后一次
export function useDebounce(
	fn: (...args: unknown[]) => unknown,
	delay = 500 as Ref<number> | number
) {
	let t: any;
	return (...rest: unknown[]) => {
		clearTimeout(t);
		let _delay = (delay as Ref<number>)['value'];
		if (_delay && typeof _delay !== 'number') {
			console.error('delay must be of type number');
			_delay = Number(_delay); // 补救措施
		}
		t = setTimeout(() => fn(...rest), _delay || (delay as number));
	};
}
