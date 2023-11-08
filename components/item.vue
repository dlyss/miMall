<!-- 列表中具体展示块 -->
<template>
	<view class="item" @click="goDetail(cateName,item.id)">
		<image :src="item.image_url" mode="aspectFit"></image>
		<view class="itemTitle">{{item.title}}</view>
		<view class="itemPrice">{{item.id}}</view>
	</view>
</template>

<script setup>
	let {
		item,
		cateName
	} = defineProps(['item','cateName'])
	
	let goDetail = (cateName,id) => {

		uni.navigateTo({
			url:'/pages/detail/detail?cateName='+cateName+'&id='+id
		})
	}
</script>

<style lang="scss">
	.item {
		border: 1px solid #eee;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		image {
			width: 80%;
			height: 150rpx;
			padding: 5px 5px;
		}

		height: 100%;
		margin: 5px 0;
	}
	.itemTitle {
		width: 90%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: center;
	}
</style>