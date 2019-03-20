<template>
	<view class="product">
		<scroll-view scroll-x="true" class="product-tabs">
			<view class="tabs-item" @click="changeTabIndex(index)" :class="{'active': tabsIndex == index}" v-for="(item, index) in classicList" :key="index">
				{{item.text}}
			</view>
		</scroll-view>
		<proList></proList>
	</view>
</template>

<script>
	import proList from '../../components/productList.vue';
	export default {
		components:{
			proList
		},
		data() {
			return {
				tabsIndex: 0,
				classicList: [
					{
						text: "分类1",
						id: 0,
					},
					{
						text: "分类5分类5",
						id: 0,
					},
					{
						text: "分类7",
						id: 0,
					},
					{
						text: "分类88分类5",
						id: 0,
					},
					{
						text: "分类0分类5分类5",
						id: 0,
					},
					{
						text: "分类12",
						id: 2,
					},
				]
			}
		},
		methods:{
			changeTabIndex(index) {
				this.tabsIndex = index;
			}
		}
	}
</script>

<style lang="less" scoped>
.product-tabs{
	width: 100%;
	display: flex;
	border-bottom: 2upx solid #dbdbdb;
	height: 80upx;
	white-space: nowrap;
	.tabs-item{
		display: inline-block;
		padding: 0 20upx;
		font-size: 28upx;
		color: #583213;
		font-weight: bold;
		text-align: center;
		line-height: 76upx;
		box-sizing: border-box;
		margin: 0 15upx;
		border-bottom: 4upx solid transparent;
		&.active{
			border-bottom: 4upx solid #583213;
		}
	}
}
</style>
