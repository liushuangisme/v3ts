<template>
	<div class="tabs">
		<ul class="tab-list">
			<button class="tab-bg" v-for="(tab, index) in tabs" :key="index" @click="selectTab(index)">
				{{ tab.label }}
			</button>
		</ul>
		<div class="tab-content">
			<slot :selectedTab="selectedTab"></slot>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	name: 'Tabs',
	props: {
		tabs: {
			type: Array,
			required: true
		}
	},
	setup(props) {
		const selectedTab = ref(props.tabs[0])

		function selectTab(index) {
			selectedTab.value = props.tabs[index]
		}

		return {
			selectedTab,
			selectTab
		}
	}
})
</script>

<style scoped lang="scss">
.tab-list {
	list-style: none;
	margin: 0;
	padding: 0;
}

.tab-list li {
	display: inline-block;
	padding: 10px;
	outline: none;
	border: none;
}

.tab-list li:hover {
	cursor: pointer;
	outline: none;
	border: none;
}

.tab-content {
	padding: 10px;
	color: coral;
}
.tab-bg{
	background-color: rgb(246, 206, 158);
}
</style>
