import { defineStore } from 'pinia';

export const cartInfoStore = defineStore('cartInfoStore', {
	
	state: () => {
		return { cartInfo:[ ]};
	},
	actions:{
		addCart(item){
			this.cartInfo.push(item)
		},
		removeCart(id){
			this.cartInfo.filter(item=>item.id!=id)
		}
	}
	// state: () => ({ count: 0 })
	// actions: {
	// 	increment() {
	// 		this.count++;
	// 	},
	// },
});