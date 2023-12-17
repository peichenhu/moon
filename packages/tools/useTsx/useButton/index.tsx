import { defineComponent, h, PropType, defineEmits } from 'vue';

export function sfcButton(
	content?: string,
	onClick?: () => void,
	disabled = false as boolean,
	type = 'button' as string
) {
	const attrs = { type, disabled, onClick };
	return h('button', attrs, content);
}

export default defineComponent({
	props: {
		type: {
			type: String as PropType<'button' | 'submit' | 'reset'>,
			default: 'button'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		content: {
			type: String,
			default: ''
		}
	},
	setup(props, { slots }) {
		const { type, content } = props;
		const emit = defineEmits(['on-click']);
		const attrs = { type, disabled: props.disabled, onClick: () => emit('on-click') };
		return () => h('button', attrs, [content, slots.default?.()]);
	}
});
