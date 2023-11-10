<template>
	<view class="headSpace"></view>
	<view class="box">
		<image src="../static/1.png" alt="logo" />
		<u-search  placeholder="请输入搜索内容" v-model="searchStore.searchText" :showAction="false" bgColor="#fff"></u-search>
	</view>
</template>

<script setup>
import {ref} from "vue"
//search keyword
//let searchText = ref('');
//pinia
import { useSearchStore } from '../store/searchStore.js'
let searchStore = useSearchStore()
</script>

<style scoped lang="scss">
.headSpace {
	/* #ifdef MP */
	height: 25px;
	background-color: #eeeeee;
	/* #endif */
}
.box {
	height:45px;
	width: 100vw;
	display: flex;
	align-items:center;
	padding:0 5px;
	box-sizing:border-box;
	background-color: #eeeeee;
	image{
		height:38px;
		width:38px;
		margin-right:5px;
	}
}
</style>