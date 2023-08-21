<template>
	<div>
		<Carousel :items="items"></Carousel>
		<div>
			<ul>
				<li @click="moveTo('1')">跳转tab</li>
				<li @click="moveTo('2')">跳转mao</li>
				<li @click="moveTo('3')">跳转todoList</li>
				<li @click="moveTo('4')">跳转目标说明</li>
				<li @click="moveTo('5')">跳转目标说明</li>
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
		const items = [
			{ img: '1', alt: 'Tab 1' },
			{ img: '2', alt: 'Tab 2' },
			{ img: '3', alt: 'Tab 3' },
			{ img: '4', alt: 'Tab 4' }
		]
		const router = useRouter()

		function moveTo(item){
			if (item==='1') {
				router.push('/tab')
			}else if(item==='2'){
				router.push('/mao')
			}else if(item==='3'){
				router.push('/todo')
			}
		}
		return {
			items,
			moveTo
		}
	}
})
</script>
<style>
	ul{
		list-style: none;
		cursor: pointer;
	}
</style>