<template>
	<div class="content">
		<Carousel :list="list" :duration="1500" :autoPlay="true"></Carousel>
		<div>
			<ul>
				<li @click="moveTo('1')">跳转tab</li>
				<li @click="moveTo('2')">跳转mao</li>
				<li @click="moveTo('3')">跳转todoList</li>
				<li @click="moveTo('4')">跳转todoList2</li>
				<li @click="moveTo('5')">跳转</li>
			</ul>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Carousel from '@/components/Carousel.vue'
import { useRouter } from 'vue-router'
export default defineComponent({
	name: 'App',
	components: {
		Carousel
	},
	setup() {
		const list = [
      { id: 1, imgUrl: 'https://code-1307161657.cos.ap-beijing.myqcloud.com/images%2Fcloud.jpeg' },
      { id: 2, imgUrl: 'https://code-1307161657.cos.ap-beijing.myqcloud.com/images%2Fground.jpeg' },
      { id: 3, imgUrl: 'https://code-1307161657.cos.ap-beijing.myqcloud.com/images%2Fnight.jpeg' },
      { id: 4, imgUrl: 'https://code-1307161657.cos.ap-beijing.myqcloud.com/images%2Fstreet.jpeg' },
      { id: 5, imgUrl: 'https://code-1307161657.cos.ap-beijing.myqcloud.com/images%2Fsun.jpeg' }
    ]
		const router = useRouter()

		function moveTo(item){
			if (item==='1') {
				router.push('/tab')
			}else if(item==='2'){
				router.push('/mao')
			}else if(item==='3'){
				router.push('/todo')
			}else if(item==='4'){
				router.push('/todo2')
			}
		}
		return {
			list,
			moveTo
		}
	}
})
</script>
<style scoped lang="scss">
	.content{
		ul{
			list-style: none;
			cursor: pointer;
			color: rgb(0, 255, 162);
		}
	}
</style>