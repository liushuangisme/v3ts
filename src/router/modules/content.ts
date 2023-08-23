export default [
	{
		path: '/tab',
		name: 'testIndex',
		component: () => import('@/pages/content/Tab.vue'),
		meta: {
			title: 'tab选项卡'
		}
	},
  {
		path: '/mao',
		name: 'maoIndex',
		component: () => import('@/pages/home/maoDian.vue'),
		meta: {
			title: '说明书'
		}
	},
	{
		path: '/todo',
		name: 'todoListIndex',
		component: () => import('@/pages/content/TodoList.vue'),
		meta: {
			title: '记事项'
		}
	},
	{
		path: '/todo2',
		name: 'todoListIndex2',
		component: () => import('@/pages/content/TodoList2.vue'),
		meta: {
			title: '记事项'
		}
	},
	{
		path: '/notification',
		name: 'notification',
		component: () => import('@/pages/content/notice.vue'),
		meta: {
			title: '提醒弹框'
		}
	}
]
