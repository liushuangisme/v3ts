<template>
	<div class="carousel">
		<div class="carousel-inner">
			<div
				class="carousel-item"
				v-for="(item, index) in items"
				:key="index"
				:class="{ active: index === activeIndex }">
				{{ item.img }}---{{ activeIndex }}
				<!-- <img :src="item.image" :alt="item.alt" width="500px"> -->
				<!-- <div style="margin:0 auto;width:500px;height: 80px;background-color: aquamarine;">{{item.img}}---{{activeIndex}}</div> -->
			</div>
		</div>
		<button class="carousel-control-prev" @click="prev">左</button>
		<button class="carousel-control-next" @click="next">右</button>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	name: 'Carousel',
	props: {
		items: {
			type: Array,
			required: true
		}
	},
	setup(props) {
		const activeIndex = ref(0)

		function next() {
			activeIndex.value = (activeIndex.value + 1) % props.items.length
		}

		function prev() {
			activeIndex.value = (activeIndex.value - 1 + props.items.length) % props.items.length
		}

		return {
			activeIndex,
			next,
			prev
		}
	}
})
</script>

<style>
.carousel {
	position: relative;
}

.carousel-inner {
	width: 500px;
	height: 100px;
	display: flex;
	overflow: hidden;
}

.carousel-item {
	flex: 0 0 100%;
}

/* 添加以下样式 */
.carousel-item.active {
	/* opacity: 1; */
}

.carousel-item:not(.active) {
	/* opacity: 0; */
}
</style>
