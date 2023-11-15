<template>
	<view class="shopCart">
		<NavigationBar></NavigationBar>
		<scroll-view class="cartList">
			<cartList></cartList>
		</scroll-view>
		<view class="bottomTotal">
			<view class="bottomCheck">
				<u-checkbox-group placement="column">
					<u-checkbox size="12" label="全选" name="item.name" label-size="14">
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
		ref
	} from 'vue'
	//顶部导航
	import NavigationBar from '../../components/NavigationBar.vue'
	//cartItem
	import cartList from '../../components/cartItem.vue'
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
	}
</style>