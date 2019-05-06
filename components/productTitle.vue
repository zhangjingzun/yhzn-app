<template>
	<view class="product-title">
		<view class="title_div">
			{{title}}
		</view>
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
	margin-top: 20upx;
	background-color: #fff;
	padding: 0 20upx;
	height: 85upx;
	display: flex;
	align-items: center;
	.title_div{
		height: 35upx;
		color: #583213;
		font-size: 28upx;
		font-weight: bold;
		display: flex;
		align-items: center;
		border-left: 10upx solid #583213;
		padding-left: 20upx;
	}
}
</style>
