import { defineStore } from 'pinia';

export const useSearchStore = defineStore('searchWords', {
	state: () => {
		return { searchText:'' };
	},
	// state: () => ({ count: 0 })
	// actions: {
	// 	increment() {
	// 		this.count++;
	// 	},
	// },
});