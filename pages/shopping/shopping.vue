<template>
	<view class="shopCart">
		<NavigationBar></NavigationBar>
		<scroll-view class="cartList">
			<u-checkbox-group placement="column" v-model="checkedList" name="cartList">
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
		</scroll-view>
		<view class="bottomTotal">
			<view class="bottomCheck">
				<u-checkbox-group placement="column" @change="checkAll" name="bottomChcek">
					<u-checkbox :checked="ckAll" size="12" label="全选" name="checkAllBtn" label-size="14" >
					</u-checkbox>
				</u-checkbox-group>
			</view>
			<view class="totalFeeZone">
				<view>合计</view>
				<view class="totalFee">￥0</view>
				<view class="feeSubmit">结算</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onMounted,
		ref,
		computed
	} from 'vue'
	//顶部导航
	import NavigationBar from '../../components/NavigationBar.vue'
	import {
		cartInfoStore
	} from '../../store/cartInfoStore.js'
	let cartList = cartInfoStore()
	//选中的checkbox
	let checkedList = ref([])
	//是否是全选状态
	let ckAll = computed(()=>{
		//console.log(checkedList)
		//console.log(cartList)
			let l1 = checkedList.value.length
			console.log(l1)
			let l2 = cartList.cartInfo.length
			console.log(l2)
			//初始化时，都为零，需要避免
			if(l1===0&&l2===0){
				return false
			}
			return l1===l2
	})
//点击全选
let checkAll=(e)=>{
	//全选
	if(e.length>0){
		checkedList.value = cartList.cartInfo.map(r=>r.id)
	}else{
	//全不选
	checkedList.value=[]	
	}

}
</script>

<style scoped lang="scss">
	.shopCart {
		font-size: 14px;
		.cartList {
			padding: 10px 10px;
		}
		.bottomTotal {
			justify-content: space-between;
			border: 1px solid #eee;
			//#ifdef H5
			bottom: 50px;
			//#endif
			//#ifndef H5
			bottom: 0px;
			//#endif
			//box-sizing: border-box;
			position: fixed;
			display: flex;
			width: 100vw;
			height: 35px;
			padding: 0 4px;
			align-items: center;
			.bottomCheck{
				margin-right: 5px;
			}
			.totalFeeZone {
				display: flex;
				justify-content: flex-end;
				.totalFee{
					margin-left: 5px;
					margin-right: 5px;
					
				}
			}
			.feeSubmit{
				margin-right: 5px;
				border-radius: 30px;
				text-align: center;
				background-color: #ff6700;
				width: 50px;
				color: white;
			}
		}
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
	}
</style>