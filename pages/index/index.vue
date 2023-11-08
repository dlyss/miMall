<template>
	<NavigationBar></NavigationBar>
	<u-swiper height="200" :list="apiImgLs"></u-swiper>
	<!-- top list-->
	<view class="ListTitle">太空文章</view>
	<itemList cateName="articles" :itemList="itemLsTop"></itemList>
	<!-- middle list-->
	<view class="ListTitle">太空博客</view>
	<itemList cateName="blogs" :itemList="itemLsMiddle"></itemList>
	<!-- middle list-->
	<view class="ListTitle">太空信息</view>
	<itemList cateName="reports" :itemList="itemLsBottom"></itemList>
</template>

<script setup>
	import {
		onMounted,
		ref
	} from 'vue'
	//swiper api 
	import {
		indexSwiperApiUrl,
		indexItemLsTopUrl
	} from '../../config/requestUrlConfig.js'
	//顶部导航
	import NavigationBar from '../../components/NavigationBar.vue'
	// itemlist componet
	import itemList from '../../components/itemList.vue'
	//接口轮播图数字
	let apiImgLs = ref([])
	//取在线图片
	let getApiImg = async () => {
		let data = await uni.$get(indexSwiperApiUrl)
		apiImgLs.value = data.map(r => r.resolutions.original.url)

	}
	//itemlist top
	let itemLsTop = ref([])
	//get list top
	let getItemLsTop = async (category, limit, list) => {
		let {
			results
		} = await uni.$get(indexItemLsTopUrl + category, {
			limit: limit,
		})
		//console.log(results)
		list.value = results
	}
	let itemLsMiddle = ref([])
	let itemLsBottom = ref([])
	//get list middle

	onMounted(() => {
		//swiper
		getApiImg()
		//item list top
		getItemLsTop('articles', 20, itemLsTop)
		//item list middle
		getItemLsTop('blogs', 20, itemLsMiddle)
		//item list bottom
		getItemLsTop('reports', 20, itemLsBottom)
	})
</script>

<style lang="scss">

	.ListTitle {
		font-weight: bold;
		font-size: 18px;
		padding: 5px 10px;
	}
</style>