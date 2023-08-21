import { defineStore } from 'pinia'

export const useTabsStore = defineStore('tabs', {
	state: () => ({
		tabs: [] as string[],
		activeTab: 'Home'
	}),
	actions: {
		addTab(tab: string) {
			if (!this.tabs.includes(tab)) {
				this.tabs.push(tab)
			}
			this.activeTab = tab
		},
		removeTab(tab: string) {
			const index = this.tabs.indexOf(tab)
			if (index > -1) {
				this.tabs.splice(index, 1)
			}
		},
		setActiveTab(tab: string) {
			this.activeTab = tab
		}
	}
})
