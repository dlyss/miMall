<!-- 列表中具体展示块 -->
<template>
	<view class="item">
		<image :src="item.image_url"></image>
		<view class="itemTitle" length="20">{{item.title}}</view>
		<view class="itemPrice">1000</view>
	</view>
</template>

<script>
	export default {
		props:{
			itemList:[],
		},
		name:"item",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.itemTop{
	
}
</style>