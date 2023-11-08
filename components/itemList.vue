<template>
	<view class="list">
		<u-grid :border="false" col="3">
			<u-grid-item v-for="(item,index) in itemList" :key="index">
				<item :cateName="cateName" :item="item"></item>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script setup>
	import item from './item.vue'
	let {
		itemList,
		cateName
	} = defineProps(['itemList','cateName'])

</script>


<style lang="scss">



</style>