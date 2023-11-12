import { defineStore } from 'pinia';

export const userInfoStore = defineStore('userInfoStore', {
	state: () => {
		return { userInfo:{
			userName:'',
			userPw:''
		} };
	},
	// state: () => ({ count: 0 })
	// actions: {
	// 	increment() {
	// 		this.count++;
	// 	},
	// },
});