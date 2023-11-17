<template>
	<view>
		<u-checkbox-group placement="column" v-model="checkedList" @change="sendCheckInfo">
			<view class="cartItemList" v-for="(item,index) in cartList.cartInfo" :key="index">
				<view class="item">
					<u-checkbox :name="item.id" label-size="14">
					</u-checkbox>
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
								<u-number-box v-model="item.count" :min="0">
									<template #minus>
										<view class="minus">
											<u-icon name="minus" size="10"></u-icon>
										</view>
									</template>
									<template #input>
										<text style="width: 20px;text-align: center;"
											class="input">{{item.count}}</text>
									</template>
									<template #plus>
										<view class="plus">
											<u-icon name="plus" color="#FFFFFF" size="12"></u-icon>
										</view>
									</template>
								</u-number-box>
							</view>
						</view>
					</view>

				</view>
			</view>
		</u-checkbox-group>

	</view>
</template>

<script setup>
	import {ref,defineEmits} from 'vue'
	//pinia
	import {
		cartInfoStore
	} from '../store/cartInfoStore.js'
	let cartList = cartInfoStore()
	//选中的checkbox
	let checkedList = ref([])
	//向父组件传递选择信息
	let sendCheckInfo =(e)=>{
		console.log(e)
		emit('childCheckedValue',checkedList.value)
	}
	let emit = defineEmits(['childCheckedValue']); // 定义组件的事件 
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
				width: 150px;
				height: 200px;
			}

			.itemInfo {
				width: 60vw;
				border: 1px solid darkred;
				margin-left: 5px;
				display: flex;
				flex-direction: column;

				.itemTile {
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					text-align: center;
				}

				.summaryAndDel {
					display: flex;

					.itemSummary {
						border: 1px solid red;
						overflow: hidden;
						height: 80px;
						text-overflow: ellipsis;
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

						.minus {
							width: 18px;
							height: 18px;
							border-width: 1px;
							background-color: #eee;
							border-color: #E6E6E6;
							border-top-left-radius: 100px;
							border-top-right-radius: 100px;
							border-bottom-left-radius: 100px;
							border-bottom-right-radius: 100px;
							@include flex;
							justify-content: center;
							align-items: center;
						}

						.input {
							padding: 0 10px;
						}

						.plus {
							width: 18px;
							height: 18px;
							background-color: #eee;
							border-radius: 50%;
							/* #ifndef APP-NVUE */
							display: flex;
							/* #endif */
							justify-content: center;
							align-items: center;
						}
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