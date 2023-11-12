<template>
	<view class="shopCart">
		<NavigationBar></NavigationBar>
		<scroll-view class="cartList">
			<cartList></cartList>
		</scroll-view>
		<view class="totalCount">底部结算区域</view>
	</view>
</template>

<script setup>
	import {
		onMounted,
		ref
	} from 'vue'
	//顶部导航
	import NavigationBar from '../../components/NavigationBar.vue'
	//cartItem
	import cartList from '../../components/cartItem.vue'
</script>

<style scoped lang="scss">
	.shopCart {
		.cartList {
			padding: 10px 10px;
		}

		.totalCount {}
	}
</style>