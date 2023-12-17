import { type Ref, ref, onMounted, nextTick, onBeforeUnmount } from 'vue';

export function useScrollY(el?: Ref<HTMLElement>) {
	const scrollToTop = ref(false);
	const scrollY = ref(0);
	let y = 0;

	const onscroll = function () {
		y = !el ? window.scrollY : (el as Ref<HTMLElement>).value.scrollTop;
		scrollToTop.value = y < scrollY.value;
		scrollY.value = y;
	};

	onMounted(() => {
		nextTick(() => {
			const dom = el ? el.value : window;
			dom.addEventListener('scroll', onscroll);
		});
	});

	onBeforeUnmount(() => {
		const dom = el ? el.value : window;
		dom.removeEventListener('scroll', onscroll);
	});

	return { scrollToTop, scrollY };
}
