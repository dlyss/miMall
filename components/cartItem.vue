<template>
	<view class="cartItemList" v-for="(item,index) in cartList.cartInfo" :key="index">
		<view class="item">
			<u-checkbox-group placement="column">
				<u-checkbox name="item.name" label-size="14">
				</u-checkbox>
			</u-checkbox-group>
			<image :src="item.imgUrl" mode="aspectFit"></image>
			<view class="itemInfo">
				<view class="itemTitle">{{item.title}}</view>
				<view class="summaryAndDel">
					<view class="itemSummary">{{item.summary}}</view>
					<u-icon @click="removeCart(item.id)" name="trash-fill" color="#ff6700" size="28"></u-icon>
				</view>

				<view class="itemOrderInfo">
					<view class="itemPrice">{{item.id}}</view>

					<view class="itemCount">
						<u-number-box buttonSize="18" :disabled="true" v-model="item.count"
							@change="valChange"></u-number-box>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script setup>
	//pinia
	import {
		cartInfoStore
	} from '../store/cartInfoStore.js'
	let cartList = cartInfoStore()
</script>

<style scoped lang="scss">
	.cartItemList {
		display: flex;
		align-items: center;

		.item {
			display: flex;
			align-items: center;
			border: 1px solid red;
			width: 97vw;

			image {
				width: 100px;
				height: 100px;
			}

			.itemInfo {
				width: 60vw;
				border: 1px solid darkred;
				margin-left: 5px;
				display: flex;
				flex-direction: column;

				.itemTile {
					//width: 90%;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					text-align: center;
				}

				.summaryAndDel {
					display: flex;

					.itemSummary {
						border: 1px solid red;
					}
				}


				.itemOrderInfo {
					display: flex;
					justify-content: space-between;
					padding: 10px 0;
					box-sizing: border-box;
					//width: 78vw;
					border: 1px solid red;

					.itemCount {
						margin-right: 10px;
					}

					.itemPrice {
						color: #ff6700;
                    text-align: left;
					}
				}
			}
		}
	}
</style>