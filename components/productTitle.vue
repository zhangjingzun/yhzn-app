<template>
	<view class="product-title">
		{{title}}
	</view>
</template>

<script>
	export default {
		props:{
			title: {
				type: String,
				default: ""
			}
		}
	}
</script>

<style lang="less" scoped>
.product-title{
	// margin-top: 20upx;
	line-height: 85upx;
	color: #583213;
	background-color: #fff;
	padding: 0 20upx;
	height: 85upx;
	font-size: 28upx;
	font-weight: bold;
	border-bottom: 2upx solid #e6e6e6;
}
</style>
