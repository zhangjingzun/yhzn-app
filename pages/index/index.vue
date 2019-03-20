<template>
	<view class="index">
		<swiper class="swiper-box" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in swiper" :key="item.id">
				<view class="swiper-item">
					<image :src="item.src" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<proTitle :title="title" />
		<proList></proList>
		<view class="index-btn" @click="contact">
			<view>
				我要咨询
			</view>
		</view>
	</view>
</template>

<script>
	import proList from '../../components/productList.vue';
	import proTitle from '../../components/productTitle.vue';
	export default {
		components:{
			proTitle,
			proList
		},
		data() {
			return {
				title: "热门产品",
				swiper: [
					{
						id: 1,
						src: 'http://img0.imgtn.bdimg.com/it/u=2844949136,2031078830&fm=27&gp=0.jpg'
					},
					{
						id: 2,
						src: 'http://img0.imgtn.bdimg.com/it/u=2844949136,2031078830&fm=27&gp=0.jpg'
					},
					{
						id: 3,
						src: 'http://img0.imgtn.bdimg.com/it/u=2844949136,2031078830&fm=27&gp=0.jpg'
					}
				]
			}
		},
		methods:{
			contact() {
				uni.makePhoneCall({
					phoneNumber: '13193690998',
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.index{
		background-color: #f2f2f2;
		.swiper-box{
			width: 100%;
			height: 360upx;
			.swiper-item{
				width: 100%;
				height: 360upx;
			}
			image{
				width: 100%;
				height: 360upx;
			}
		}
		.index-btn{
			margin-top: 20upx;
			background-color: #fff;
			padding: 20upx 30upx 50upx 30upx;
			view{
				height: 75upx;
				line-height: 75upx;
				text-align: center;
				font-size: 30upx;
				color: #fff;
				border-radius: 10upx;
				background-color: #583213;
			}
		}
	}
</style>
