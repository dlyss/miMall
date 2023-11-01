<template>
	<view class="list">
		<view class="ListTitle">{{listTitle}}</view>
		<u-grid :border="false" col="4">
			<u-grid-item v-for="(item,index) in itemList" :key="index">
				<view class="item">
					<image :src="item.image_url" mode="aspectFit"></image>
					<view class="itemTitle">{{item.title}}</view>
					<view class="itemPrice">1000</view>
				</view>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script setup>
	let {
		listTitle,
		itemList
	} = defineProps(['listTitle', 'itemList'])
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
		text-overflow:ellipsis;
		text-align: center;
	}

	.ListTitle {
		font-weight: bold;
		font-size: 18px;
		padding: 5px 10px;
	}
</style>