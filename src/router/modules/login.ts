export default [
	{
		path: '/',
		name: 'loginIndex',
		component: () => import('@/pages/login/login.vue'),
		meta: {
			title: '登录页'
		}
	}
]
