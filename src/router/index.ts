import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// 引入 login.ts
import LoginRouter from './modules/login'
// 引入 test.ts
import contentRouter from './modules/content'
const routes: RouteRecordRaw[] = [
	{
		path: '/home',
		name: 'homeIndex',
		component: () => import('@/pages/home/index.vue'),
		meta: {
			title: '首页'
		}
	},
	...LoginRouter,
	...contentRouter,
]
const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
