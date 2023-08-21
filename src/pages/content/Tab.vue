<template>
	<div>
		<Tabs :tabs="tabs">
			<template #default="{ selectedTab }">
				<div v-if="selectedTab.name === 'tab1'">1111Content of Tab 1</div>
				<div v-else-if="selectedTab.name === 'tab2'">2222Content of Tab 2</div>
				<div v-else>33333Content of Tab 3</div>
			</template>
		</Tabs>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Tabs from '@/components/Tabs.vue'

export default defineComponent({
	name: 'App',
	components: {
		Tabs
	},
	setup() {
		const tabs = [
			{ name: 'tab1', label: 'Tab 1' },
			{ name: 'tab2', label: 'Tab 2' },
			{ name: 'tab3', label: 'Tab 3' }
		]

		return {
			tabs
		}
	}
})
</script>
