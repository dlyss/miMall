<template>
	<view class="cartItem" v-for="(item,index) in cartList.cartInfo" :key="index">
		<view class="itemCheck" >
			<checkbox></checkbox>
		</view>
		<view class="item">
			<image :src="item.imgUrl" mode="aspectFit"></image>
			<view class="itemTitle">{{item.title}}</view>
		</view>	
	</view>
</template>

<script setup>
	//pinia
	import { cartInfoStore } from '../store/cartInfoStore.js'
	let cartList=cartInfoStore()
</script>

<style scoped lang="scss">
.cartItem{
	display: flex;
	.item{
		.itemTile{
			width: 90%;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			text-align: center;
		}
	}
}
</style>