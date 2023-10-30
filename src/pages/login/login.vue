<template>
	<div class="login">
		<h1>登录</h1>
		<form @submit.prevent="submitForm">
			<label>用户名:</label><br />
			<input class="inpt" type="text" v-model="username" />
			<br />
			<br />
			<label>密码:</label><br />
			<input class="inpt" type="password" v-model="password" />
			<br />
			<br />
			<button class="btn" type="submit">登录</button>
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

<style scoped lang="scss">
.login {
	background: #737373;
	margin: 0 auto;
	width: 400px;
	height:600px;
	h1{
		padding-top: 30px;
	}
	.inpt{
		height:36px;
		outline: none;
		background-color: #fff;
		border-radius: 20px;
		border: none;
		color: black;
		padding-left: 16px;
	}
	.btn{
		width: 100px;
		border-radius: 20px;
		background-color: rgb(37, 124, 205);
	}
}
</style>
