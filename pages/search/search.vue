<template>
	<NavigationBar></NavigationBar>
	<view class="searchContent">
		<scroll-view class="left" scroll-y>
			<view class="categoryItem" :class="{active:index===activeIndex}"
				@click="loadRightList(item,20,rightList,index)" v-for="item,index in cateList" :key="index">
				{{item.name}}
			</view>
		</scroll-view>
		<view class="right">
			<itemList :cateName="cateName" :itemList="rightList.value"></itemList>
			<pagination  :totalItems="20" :itemsPerPage="10" :initialPage="1"></pagination>
		</view>

	</view>

</template>

<script setup>
	import {
		onMounted,
		ref
	} from 'vue'
	// api url
	import {
		indexItemLsTopUrl
	} from '../../config/requestUrlConfig.js'
	//顶部导航
	import NavigationBar from '../../components/NavigationBar.vue'
	// itemlist componet
	import itemList from '../../components/itemList.vue'
	//分页组件
	import pagination from '../../components/pagination.vue'
	//分类高亮索引
	let activeIndex = ref(0)
	let cateList = ref([])
    let cateName = ref()
	//模拟从远程取得的分类信息
	let loadCateList = () => {
		//cate info
		let cateInfo = [{
				"name": "太空文章",
				"eName": "articles",
				"id": 1
			},
			{
				"name": "太空博客",
				"eName": "blogs",
				"id": 2
			},
			{
				"name": "太空信息",
				"eName": "reports",
				"id": 3
			}
		]
		cateInfo.unshift({
			"name": "全部",
			"eName": "all",
			"id": 0
		})
		//console.log(cateInfo)
		cateList.value = cateInfo
	}
	//价值右侧内容区
	let rightList = ref([])
	let loadRightList = async (categoryItem, limit, list, index) => {
		activeIndex.value = index;
		cateName = categoryItem.eName
		console.log(cateName)
		let {
			results
		} = await uni.$get(indexItemLsTopUrl + categoryItem.eName, {
			limit: limit,
		})
		list.value = results
	//	console.log(rightList.value)
	}
	onMounted(() => {
		{
			loadCateList()
		}
	})
</script>

<style scoped lang="scss">
	.searchContent {
		display: flex;
		font-size: 13px;
		color: #646566;
		height: calc(100vh - 45px);

		.left {
			background-color: #eee;
			width: 100px;
			flex-shrink: 0;

			.categoryItem {
				text-align: center;
				padding: 5px 0;

				&.active {
					background-color: #fff;
					color: #ff6700;
					border-left: 4px solid #ff6700;

				}
			}

		}

		.right {
			width: 70vh;
			flex-wrap: wrap;
		}
	}
</style>