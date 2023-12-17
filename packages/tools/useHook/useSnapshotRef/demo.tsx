import { ref, defineComponent } from 'vue';
import { useSnapshotRef, type Options } from './index';
import { useToString } from '../../useFunction/useToString/index';
import { sfcButton } from '../../useTsx/useButton/index.tsx';

export default defineComponent({
	setup() {
		// 配置选项
		const delay = ref(500);
		const limit = ref(5);
		const options: Options = {
			limit,
			// include: [],
			exclude: ['a.b', 'a', 'a[Symbol(1)].b'],
			delay
		};
		// 监听对象
		const data = { count: 1 };
		// 导出对象
		const { state, undo, redo, history, canRedo, canUndo } = useSnapshotRef(data, options);

		function todo(num: number) {
			state.value.count += num;
		}

		return () => {
			const domState = () => (
				<div class="row">
					<span>state: </span>
					<span>{useToString(state.value)}</span>
				</div>
			);

			const domDelay = () => {
				const onInput = (e: Event) => {
					delay.value = (e.target as HTMLInputElement).valueAsNumber;
				};
				return (
					<div class="row">
						<input
							type="range"
							value={delay.value}
							onInput={onInput}
							max={1000}
							min={0}
						/>
						<span> delay: {delay.value}</span>
					</div>
				);
			};
			const domLimit = () => {
				const onInput = (e: Event) => {
					limit.value = (e.target as HTMLInputElement).valueAsNumber;
				};
				return (
					<div class="row">
						<input
							type="range"
							value={limit.value}
							onInput={onInput}
							max={10}
							min={0}
						/>
						<span> limit: {limit.value}</span>
					</div>
				);
			};

			const domOptions = () => (
				<div class="row">
					{sfcButton('count ++', () => todo(1))}
					{sfcButton('count --', () => todo(-1))}
					{sfcButton('redo', redo, !canRedo.value)}
					{sfcButton('undo', undo, !canUndo.value)}
				</div>
			);

			const domHistory = () => (
				<div class="row">
					<span>history (count): </span>
					<span> {history.value.length}</span>
				</div>
			);

			const domHistoryList = () => (
				<div class="row" style="min-height: 200px">
					{history.value.map((item) => {
						return <div>快照: {useToString(item)}</div>;
					})}
				</div>
			);

			return (
				<div class="demo tsx">
					{domState()}
					{domDelay()}
					{domLimit()}
					{domOptions()}
					{domHistory()}
					{domHistoryList()}
				</div>
			);
		};
	}
});
