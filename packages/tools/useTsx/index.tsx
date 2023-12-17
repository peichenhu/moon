import { defineComponent } from 'vue';

export default defineComponent({
	setup() {
		const Foo = () => <div>测试 tsx 文件</div>;
		return { Foo };
	},
	render() {
		return <this.Foo />;
	}
});
