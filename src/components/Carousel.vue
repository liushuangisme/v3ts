<template>
	<div class='carousel' @mouseenter="stop()" @mouseleave="start()">
	  <ul class="carousel-body">
		<li class="carousel-item" v-for="(item, i) in list" :key="item.id" :class="{fade: index === i}">
		  <!-- <RouterLink to="/"> -->
			<img :src="item.imgUrl" alt="">
		  <!-- </RouterLink> -->
		</li>
	  </ul>
	  <!-- 左右控制按钮 -->
	  <a href="javascript:;" class="carousel-btn prev" @click="toggle(-1)">&lt;</a>
	  <a href="javascript:;" class="carousel-btn next" @click="toggle(1)">&gt;</a>
	  <!-- 分页器 -->
	  <div class="carousel-indicator">
		<span v-for="(item,i) in list" :key="i" :class="{active: index === i}" @click="index = i"></span>
	  </div>
	</div>
  </template>
  
  <script>
  import { ref, watch, onUnmounted } from 'vue'
  export default {
	name: 'Carousel',
	props: {
	  list: {
		type: Array,
		default: () => []
	  },
	  duration: {
		type: Number,
		default: 3000
	  },
	  autoPlay: {
		type: Boolean,
		default: false
	  }
	},
	setup (props) {
	  const index = ref(0)
	  let timer = null
	  // 自动播放
	  const autoPlayFn = () => {
		clearInterval(timer)
		timer = setInterval(() => {
		  index.value++
		  if (index.value >= props.list.length) {
			index.value = 0
		  }
		}, props.duration)
	  }
  
	  // 鼠标进入停止，移出开启自动，前提条件：autoPlay为true
	  const stop = () => {
		if (timer) clearInterval(timer)
	  }
	  const start = () => {
		if (props.list.length && props.autoPlay) {
		  autoPlayFn()
		}
	  }
  
	  // 轮播图左右按钮切换效果
	  const toggle = (step) => {
		index.value += step
  
		// 确定右侧临界值
		if (index.value >= props.list.length) {
		  index.value = 0
		  return
		}
		// 确定左侧临界值
		if (index.value < 0) {
		  index.value = props.list.length - 1
		}
	  }
  
	  watch(() => props.list, (newVal) => {
		// 有数据&开启自动播放，才调用自动播放函数
		if (newVal.length > 1 && props.autoPlay) {
		  index.value = 0
		  autoPlayFn()
		}
	  }, { immediate: true })
  
	  // 组件消耗，清理定时器
	  onUnmounted(() => {
		clearInterval(timer)
	  })
  
	  return { index, stop, start, toggle }
	}
  }
  </script>
  <style scoped lang="scss">
  .carousel{
	width: 100%;
	height: 100%;
	min-width: 500px;
	min-height: 250px;
	position: relative;
	border: 1px solid #ccc;
	text-decoration: none;
	.carousel{
	  &-body {
		width: 100%;
		height: 100%;
	  }
	  &-item {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		opacity: 0;
		list-style: none;
		transition: opacity 0.5s linear;
		&.fade {
		  opacity: 1;
		  z-index: 1;
		}
		img {
		  width: 100%;
		  height: 100%;
		}
	  }
	  &-indicator {
		position: absolute;
		left: 0;
		bottom: 20px;
		z-index: 2;
		width: 100%;
		text-align: center;
		span {
		  display: inline-block;
		  width: 12px;
		  height: 12px;
		  background: rgba(234, 177, 177, 0.2);
		  border-radius: 50%;
		  cursor: pointer;
		  ~ span {
			margin-left: 12px;
		  }
		  &.active {
			width: 20px;
			border-radius: 12px;
			background:  #fff;
		  }
		}
	  }
	  &-btn {
		width: 44px;
		height: 44px;
		background: rgba(0,0,0,.2);
		color: #fff;
		border-radius: 50%;
		position: absolute;
		top: 100px;
		z-index: 2;
		text-align: center;
		line-height: 44px;
		opacity: 0;
		font-family: serif;
		text-decoration: none;
		transition: all 0.5s;
		&.prev{
		  left: 20px;
		}
		&.next{
		  right: 20px;
		}
	  }
	}
	&:hover {
	  .carousel-btn {
		opacity: 1;
	  }
	}
  }
  </style>
