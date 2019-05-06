<template>
	<view class="shopList">
		<view v-for="item in shopArr" :key="item.id" class="shop-item" @click="gotoDetail(item.id)">
			<image :src="item.shop_img[0]" mode=""></image>
			<view class="item-desc">
				<view class="desc-title">
					{{item.shop_name}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			shopArr: {
				type: Array,
				default() {
					return []
				}
			}
		},
		methods: {
			gotoDetail (id) {
				uni.navigateTo({
					url: `../productDetail/productDetail?id=${id}`
				})
			}
		}
	}
</script>

<style lang="less" scoped> 
.shopList{
	display: flex;
	background-color: #fff;
	flex-wrap: wrap;
	padding-bottom: 20upx;
	
	.shop-item{
		width: 375upx;
		background-color: #fff;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		box-sizing: border-box;
		padding: 20upx;
		image{
			width: 335upx;
			height: 335upx;
			display: block;
		}
		.item-desc{
			width: 335upx;
			.desc-title{
				margin-top: 10upx;
				font-size: 26upx;
				color: #333333;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
				margin-bottom: 15upx;
			}
// 			.desc-price{
// 				font-size: 26upx;
// 				color: #f10215;
// 				font-weight: bold;
// 				margin-bottom: 10upx;
// 			}
// 			.desc-bottom{
// 				padding-bottom: 10upx;
// 				display: flex;
// 				justify-content: space-between;
// 				.bottom-desc{
// 					font-size: 20upx;
// 					color: #666666;
// 				}
// 			}
		}
	}
}
</style>
