import {
	defineStore
} from 'pinia';

export const cartInfoStore = defineStore('cartInfoStore', {

	state: () => {
		return {
			cartInfo: []
		};
	},
	actions: {
		addCart(item) {
			this.cartInfo.push(item)
		},
		removeCart(id) {
			this.cartInfo.filter(item => item.id != id)
		},
		getCart(id) {
			return this.cartInfo.find(item => item.id === id);
		},
		updateCart(updatedItem) {
			let index = this.cartInfo.findIndex(item => item.id === updatedItem.id);
			if (index !== -1) {
				this.cartInfo[index] = updatedItem;
			}
		}
	}
	// state: () => ({ count: 0 })
	// actions: {
	// 	increment() {
	// 		this.count++;
	// 	},
	// },
});