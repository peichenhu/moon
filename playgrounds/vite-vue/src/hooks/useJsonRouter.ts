import { onBeforeMount, watch, Ref, isRef, toRaw } from 'vue';

export function encode<T>(object: T): string {
	return encodeURIComponent(JSON.stringify(object));
}

export function decode<T>(string: string): T {
	return JSON.parse(decodeURIComponent(string));
}

export function extend<T>(obj: T, extendObj: T) {
	const has = Object.prototype.hasOwnProperty;
	for (const key in obj) {
		if (has.call(obj, key) && has.call(extendObj, key)) {
			obj[key] = extendObj[key];
		}
	}
}

export function useJsonRouter<T extends object>(data: T | Ref<T>, key?: string) {
	const KEY = key || 'jsonRouter';

	watch(data, () => {
		const state = { createTime: new Date(), creator: 'useJsonRouter' };
		const title = document.title;
		const url = new URL(location.href);
		const usp = new URLSearchParams(location.search);
		const raw = toRaw(data) as T;
		usp.set(KEY, encode(raw));
		url.search = usp.toString();
		history.pushState(state, title, url.href);
	});

	onBeforeMount(() => {
		const usp = new URLSearchParams(location.search);
		const encodeJson = usp.get(KEY);
		if (encodeJson) {
			extend<T>(isRef(data) ? data.value : data, decode(encodeJson));
		}
	});
}
