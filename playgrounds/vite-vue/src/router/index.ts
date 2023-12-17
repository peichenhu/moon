import { createRouter, createWebHashHistory } from 'vue-router';
import home from '../pages/home/index.vue';
import useSnapshotRef from '../pages/useSnapshotRef/index.vue';
import useJsonRouter from '../pages/useJsonRouter/index.vue';

export const routes = [
	{
		path: '/',
		name: 'Home',
		component: home,
		meta: {}
	},
	{
		path: '/useSnapshotRef',
		name: 'useSnapshotRef',
		component: useSnapshotRef,
		meta: {}
	},
	{
		path: '/useJsonRouter',
		name: 'useJsonRouter',
		component: useJsonRouter,
		meta: {}
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
