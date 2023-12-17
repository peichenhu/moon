export function useDeepProxy<T extends object>(
	obj: T,
	onGet?: (s: string) => void,
	onSet?: (s: string) => void,
	path = [] as string[]
) {
	const handle: ProxyHandler<T> = {
		get(t, p, r) {
			const v = Reflect.get(t, p, r);
			const fullPath = [...path, p.toString()];
			const fullPathString = fullPath.join();
			if (typeof v === 'object' && v !== null) {
				return useDeepProxy(v, onGet, onSet, fullPath);
			}
			onGet && onGet(fullPathString);
			return v;
		},
		set(t, p, v, r) {
			const success = Reflect.set(t, p, v, r);
			const fullPath = [...path, p.toString()];
			const fullPathString = fullPath.join();
			success && onSet && onSet(fullPathString);
			return success;
		}
	};

	return new Proxy(obj, handle);
}
