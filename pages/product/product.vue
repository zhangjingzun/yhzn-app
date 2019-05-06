<template>
	<view class="product">
		<scroll-view scroll-x="true" class="product-tabs">
			<view class="tabs-item" @click="changeTabIndex(index)" :class="{'active': tabsIndex == index}" v-for="(item, index) in classicList" :key="index">
				{{item.class_name}}
			</view>
		</scroll-view>
		<proList :shopArr="shopList"></proList>
		<view class="no-data" v-if="isNoData">
			暂无数据
		</view>
	</view>
</template>

<script>
	import proList from '../../components/productList.vue';
	import util from '../../static/assets/util.js';
	import config from '../../static/assets/config.js';
	export default {
		components:{
			proList
		},
		data() {
			return {
				tabsIndex: 0,
				classicId: -1,
				classicList: [],
				shopList: [],
				isNoData: false
			}
		},
		onLoad() {
			this.getClassicList()
			this.getShopList()
		},
		methods:{
			getShopList () {
				let id = this.classicId
				let _this = this
				util.ajax({url: config.url.productClassic, data: {id: id}}).then((res) => {
					_this.shopList = []
					if (res.code == 0) {
						let data = res.data
						if (data.length == 0) {
							_this.isNoData = true
							return false
						}
						_this.isNoData = false
						data.forEach((item) => {
							let shopImgArr = item.shop_img.split(',')
							item.shop_img = shopImgArr
							_this.shopList.push(item)
						})
					} else {
						_this.isNoData = true
						util.showTost('获取失败，请检查网络设置后重试')
					}
				}).catch(e => {
					_this.shopList = []
					_this.isNoData = true
					util.showTost('获取失败，请检查网络设置后重试')
				})
			},
			getClassicList () {
				let _this = this
				util.ajax({url: config.url.classicList, type: 'get'}).then((res) => {
					console.log(res)
					if (res.code == 0) {
						_this.classicList = res.data
						_this.classicList.unshift({
							id: -1,
							class_name: '全部'
						})
					} else {
						util.showTost('获取失败，请检查网络后重试')
					}
				})
			},
			changeTabIndex(index) {
				this.tabsIndex = index
				this.classicId = this.classicList[index].id
				this.getShopList()
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
.no-data{
	font-size: 30upx;
	color: #333333;
	line-height: 60upx;
	text-align: center;
	width: 100%;
}
</style>
