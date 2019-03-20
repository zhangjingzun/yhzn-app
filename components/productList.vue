<template>
	<view class="shopList">
		<navigator hover-class="none" :url="'../productDetail/productDetail?id=1'" class="shop-item">
			<image src="https://192.168.1.228:18081/mbxcx/images/shop.png" mode=""></image>
			<view class="item-desc">
				<view class="desc-title">
					商品标题商品标题商品标题商品标题
				</view>
			</view>
		</navigator>
		<navigator hover-class="none" :url="'../productDetail/productDetail?id=1'" class="shop-item">
			<image src="https://192.168.1.228:18081/mbxcx/images/shop.png" mode=""></image>
			<view class="item-desc">
				<view class="desc-title">
					商品标题商品标题商品标题商品标题
				</view>
			</view>
		</navigator>
		<navigator hover-class="none" :url="'../productDetail/productDetail?id=1'" class="shop-item">
			<image src="https://192.168.1.228:18081/mbxcx/images/shop.png" mode=""></image>
			<view class="item-desc">
				<view class="desc-title">
					商品标题商品标题商品标题商品标题
				</view>
			</view>
		</navigator>
		<navigator hover-class="none" :url="'../productDetail/productDetail?id=1'" class="shop-item">
			<image src="https://192.168.1.228:18081/mbxcx/images/shop.png" mode=""></image>
			<view class="item-desc">
				<view class="desc-title">
					商品标题商品标题商品标题商品标题
				</view>
			</view>
		</navigator>
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
		border-bottom: 2upx solid #e6e6e6;
		border-right: 2upx solid #e6e6e6;
		// margin-top: 10upx;
		width: 375upx;
		// margin-right: 10upx;
		background-color: #fff;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		box-sizing: border-box;
		padding: 20upx;
		&:nth-child(2n) {
			margin-right: 0;
			border-right: none;
		}
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
