<template>
	<div class="login">
		<h1>登录</h1>
		<form @submit.prevent="submitForm">
			<label>用户名:</label>
			<input type="text" v-model="username" />
			<br />
			<label>密码:</label>
			<input type="password" v-model="password" />
			<br />
			<button type="submit">登录</button>
		</form>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
export default defineComponent({
	name: 'Login',
	setup() {
		const router = useRouter()
		const username = ref('')
		const password = ref('')

		function submitForm() {
			// 在这里进行登录验证
			if (username.value === 'admin' && password.value === '123') {
				router.push('/home')
			}else {
				alert('用户名或密码错误')
			}
		}

		return {
			username,
			password,
			submitForm
		}
	}
})
</script>

<style scoped>
.login {
	background: #787171;
	margin: 0 auto;
	width: 400px;
	height: 1000px;
}
</style>
