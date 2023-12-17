import { useDeepClone } from '../useDeepClone/index';
import { is } from '../useShared/index';

export type Obj = Record<string | symbol | number, unknown>;

export function useToString(obj: unknown): string {
	const tmp = useDeepClone(obj);
	loop(tmp);
	function loop(data: unknown) {
		if (is(data, 'Array') || is(data, 'Object')) {
			const obj = data as Obj;
			for (const key of Object.keys(obj)) {
				const value = obj[key];
				obj[key] = is(value, 'Symbol') ? (value as symbol).toString() : loop(value);
			}
			for (const key of Object.getOwnPropertySymbols(data)) {
				const value = obj[key];
				obj[key.toString()] = is(value, 'Symbol')
					? (value as symbol).toString()
					: loop(value);
			}
		}
		return data;
	}
	return JSON.stringify(tmp);
}
