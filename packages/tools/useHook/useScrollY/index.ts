import { type Ref, ref, onMounted, nextTick, onBeforeUnmount, unref } from 'vue';

export function useScrollY(el?: Ref<HTMLElement | null> | HTMLElement) {
	const scrollToTop = ref(true);
	const scrollY = ref(0);
	let y = 0;

	const onscroll = function () {
		y = !el ? window.scrollY : (el as Ref<HTMLElement>).value.scrollTop;
		scrollToTop.value = y < scrollY.value;
		scrollY.value = y;
	};

	onMounted(() => {
		nextTick(() => {
			const dom = el ? (unref(el) as HTMLElement) : window;
			dom.addEventListener('scroll', onscroll);
		});
	});

	onBeforeUnmount(() => {
		const dom = el ? (unref(el) as HTMLElement) : window;
		dom.removeEventListener('scroll', onscroll);
	});

	return { scrollToTop, scrollY };
}
