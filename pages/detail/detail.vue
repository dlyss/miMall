<template>
	<view class="detailContent">
		<NavigationBar></NavigationBar>
		<u-swiper height="200" :list="apiImgLs"></u-swiper>
		<view class="detailContainer">

			<view class="title">{{itemDetail.title}}</view>
			<view class="summary">{{itemDetail.summary}}</view>
			<view class="priceContent">
				<view class="priceNew">{{itemDetail.id}}</view>
				<view class="priceOld">{{itemDetail.id}}</view>
			</view>
		</view>
		<view class="detailBtn">
			<view class="addCart" @click="addCart(itemDetail)">加入购物车</view>
			<view class="detailStar">喜欢</view>
		</view>
     <view class="detailArrow">
		 		<u-icon color="#ff6700" size="28" name="arrow-left" @click="goLastPage"></u-icon>
	 </view>
	</view>

</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		ref,
		onMounted
	} from 'vue'
	//顶部导航
	import NavigationBar from '../../components/NavigationBar.vue'
	// api url
	import {
		indexSwiperApiUrl,
		indexItemLsTopUrl
	} from '../../config/requestUrlConfig.js'
	//pinia
	import { cartInfoStore } from '../../store/cartInfoStore.js'
	let itemDetail=ref({})
	let getItemDetail = async (cateName, id, itemDetail) => {
		let ret = await uni.$get(indexItemLsTopUrl + cateName + '/' + id)
		console.log(ret)
		itemDetail.value = ret
	}
	onLoad(({		cateName,
		id}
	) => {
		getItemDetail(cateName, id, itemDetail)
	})
	//接口轮播图数字
	let apiImgLs = ref([])
	//取在线图片
	let getApiImg = async () => {
		let data = await uni.$get(indexSwiperApiUrl)
		apiImgLs.value = data.map(r => r.resolutions.original.url)

	}
	onMounted(() => {
	getApiImg()
	})
	//back to last page
	let goLastPage=()=>{
		uni.navigateBack()
	}
	//add cart
	let cartInfo = cartInfoStore()
	let addCart=(item)=>{
		//console.log(item)
		cartInfo.addCart({title:item.title,imgUrl:item.image_url,id:item.id})
		console.log(cartInfo.cartInfo)
		uni.showToast({
			title:"添加成功"
		})
	}

</script>

<style scoped lang="scss">
	.detailBtn {
		display: flex;
		justify-content: flex-end;
		font-size: 19px;
		margin-top: 10px;

		.addCart {
			padding: 4px 10px;
			background-color: #ff6700;
			color: white;
			border-radius: 4px;
		}

		.detailStar {
			padding: 4px 10px;
			background-color: #bbb;
			margin-left: 30px;
			margin-right: 20px;
			color: white;
			border-radius: 4px;
		}
	}

	.detailContent {
		font-size: 14px;
		color: #646566;
		position: relative;
        .detailArrow{
			position: absolute;
			top:50px;
			left:5px;
		}
		.detailContainer {
			padding: 5px 10px;
		}

		.title {
			width: 50%;
			font-size: 18px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			margin: 10px 1px;
		}

		.summary {
			width: 90%;

			margin: 10px 1px;
		}

		.priceContent {
			display: flex;
			justify-content: flex-end;

			.priceNew {
				color: #ff6700;
				font-size: 20px;
				padding: 5px 0;
				margin-right: 10px;
			}

			.priceOld {
				padding: 8px 0;
				text-decoration: line-through;
			}
		}
	}
</style>