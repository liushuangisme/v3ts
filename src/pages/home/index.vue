<template>
	<div class="content">
		<div class="timeline">{{timeline}}</div>
		<Carousel :list="list" :duration="1500" :autoPlay="true"></Carousel>
		<div>
			<ul>
				<li @click="moveTo('1')">跳转tab</li>
				<li @click="moveTo('2')">跳转mao</li>
				<li @click="moveTo('3')">跳转todoList</li>
				<li @click="moveTo('4')">跳转todoList2</li>
				<li @click="moveTo('5')">跳转弹框</li>
				<li @click="moveTo('6')">跳转pop</li>
				<li @click="moveTo('7')">跳转video</li>
				<li @click="moveTo('8')">跳转input</li>
				<li @click="moveTo('9')">跳转Bread</li>
				<li @click="moveTo('10')">跳转pagination</li>
				<li @click="moveTo('11')">跳转echarts</li>
				<li @click="moveTo('12')">跳转card</li>
				<li @click="moveTo('13')">跳转space</li>
				<li @click="moveTo('14')">跳转语法</li>
				<li @click="moveTo('15')">跳转alert</li>
				<li @click="moveTo('16')">跳转result</li>
				<li @click="moveTo('17')">跳转statisticIndex</li>
			</ul>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent,ref} from 'vue'
import Carousel from '@/components/Carousel.vue'
import { useRouter } from 'vue-router'
import {dateFormat} from '@/util/index'
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
		const timeline = ref(new Date());
		setInterval(() => {
			timeline.value =dateFormat(new Date(), 'YYYY年MM月DD日 HH时mm分ss秒')
		}, 1000);

		function moveTo(item){
			if (item==='1') {
				router.push('/tab')
			}else if(item==='2'){
				router.push('/mao')
			}else if(item==='3'){
				router.push('/todo')
			}else if(item==='4'){
				router.push('/todo2')
			}else if(item==='5'){
				router.push('/notification')
			}else if(item==='6'){
				router.push('/pop')
			}else if(item==='7'){
				router.push('/video')
			}else if(item==='8'){
				router.push('/Input')
			}else if(item==='9'){
				router.push('/Bread')
			}else if(item==='10'){
				router.push('/pagination')
			}else if(item==='11'){
				router.push('/charts')
			}else if(item==='12'){
				router.push('/card')
			}else if(item==='13'){
				router.push('/space')
			}else if(item==='14'){
				router.push('/watchs')
			}else if(item==='15'){
				router.push('/alert')
			}else if(item==='16'){
				router.push('/result')
			}else if(item==='17'){
				router.push('/statisticIndex')
			}
		}
		return {
			list,
			moveTo,
			timeline
		}
	}
})
</script>
<style scoped lang="scss">
	.content{
		.timeline{
			width: 500px;
			height: 100px;
			line-height: 100px;
			color: darkslategrey;
		
		}
		ul{
			list-style: none;
			cursor: pointer;
			color:dimgray;
			font-weight: 700;
		}
	}
</style>