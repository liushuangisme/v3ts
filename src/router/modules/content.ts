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
	},
	{
		path: '/pop',
		name: 'pop',
		component: () => import('@/pages/content/pop.vue'),
		meta: {
			title: '提醒弹框'
		}
	},
	{
		path: '/video',
		name: 'video',
		component: () => import('@/pages/content/play.vue'),
		meta: {
			title: '提醒弹框'
		}
	},
	{
		path: '/Input',
		name: 'input',
		component: () => import('@/pages/content/InputBtn.vue'),
		meta: {
			title: '输入按钮'
		}
	},
	{
		path: '/Bread',
		name: 'Bread',
		component: () => import('@/pages/content/Bread.vue'),
		meta: {
			title: '面包屑'
		}
	},
	{
		path: '/pagination',
		name: 'pagination',
		component: () => import('@/pages/content/paginations.vue'),
		meta: {
			title: '分页'
		}
	},{
		path: '/charts',
		name: 'charts',
		component: () => import('@/pages/content/charts.vue'),
		meta: {
			title: 'echarts'
		}
	},{
		path: '/card',
		name: 'card',
		component: () => import('@/pages/content/cardIndex.vue'),
		meta: {
			title: 'card'
		}
	},{
		path: '/space',
		name: 'space',
		component: () => import('@/pages/content/spaceBtn.vue'),
		meta: {
			title: 'space'
		}
	},{
		path: '/watchs',
		name: 'watchs',
		component: () => import('@/pages/content/grammar/watch.vue'),
		meta: {
			title: 'watchs'
		}
	},{
		path: '/alert',
		name: 'alert',
		component: () => import('@/pages/content/alertIndex.vue'),
		meta: {
			title: 'alert'
		}
	},{
		path: '/result',
		name: 'result',
		component: () => import('@/pages/content/resultIndex.vue'),
		meta: {
			title: 'result'
		}
	},{
		path: '/statisticIndex',
		name: 'statisticIndex',
		component: () => import('@/pages/content/statisticIndex.vue'),
		meta: {
			title: 'statisticIndex'
		}
	}
]
