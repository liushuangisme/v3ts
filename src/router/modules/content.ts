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
	}
]
