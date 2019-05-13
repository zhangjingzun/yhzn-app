<template>
	<view class="index">
		<swiper class="swiper-box" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in swiper" :key="item.id">
				<view class="swiper-item">
					<image :src="imgHost+item.url" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<proTitle title="视频展示" v-if="infoVideo" />
		<view class="video" v-if="infoVideo" >
			<video id="myVideo" :src="infoVideo" @error="videoErrorCallback" controls></video>
		</view>
		<proTitle :title="hotTitle" />
		<proList :shopArr="hotShop"></proList>
		<proTitle :title="recTitle" />
		<proList :shopArr="recShop"></proList>
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
	import util from '../../static/assets/util.js';
	import config from '../../static/assets/config.js';
	export default {
		components:{
			proTitle,
			proList
		},
		data() {
			return {
				hotTitle: "热门产品",
				recTitle: "推荐产品",
				swiper: [
				],
				hotShop: [],
				recShop: [],
				infoTel: '13193690998',
				infoVideo: '',
				imgHost: config.imgHost
			}
		},
		onLoad() {
			uni.clearStorageSync()
			this.getBannerList()
			this.getHotProduct()
			this.getRecProduct()
			this.getAbout()
		},
		methods:{
			videoErrorCallback: function(e) {
				this.infoVideo = ''
			},
			getAbout() {
				let _this = this
				util.ajax({url: config.url.about, type: 'get'}).then(res => {
					if (res.code == 0) {
						_this.infoTel = res.data.info_tel
						_this.infoVideo = res.data.info_video
						uni.setStorageSync('info', res.data)
					}
				})
			},
			getBannerList () {
				let _this = this
				util.ajax({url: config.url.bannerList, type: 'get'}).then((res) => {
					if (res.code == 0) {
						_this.swiper = res.data
					} else {
						util.showTost('请检查网络设置后重试')
					}
				})
			},
			getHotProduct () {
				let _this = this
				util.ajax({url: config.url.hotProduct, type: 'get'}).then((res) => {
					if (res.data) {
						_this.hotShop = []
						let data = res.data
						data.forEach((item) => {
							let shopImgArr = item.shop_img.split(',')
							item.shop_img = shopImgArr
							_this.hotShop.push(item)
						})
					}
				})
			},
			getRecProduct () {
				let _this = this
				util.ajax({url: config.url.recProduct, type: 'get'}).then((res) => {
					if (res.data) {
						_this.recShop = []
						let data = res.data
						data.forEach((item) => {
							let shopImgArr = item.shop_img.split(',')
							item.shop_img = shopImgArr
							_this.recShop.push(item)
						})
					}
				})
			},
			contact() {
				uni.makePhoneCall({
					phoneNumber: this.infoTel,
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.index{
		background-color: #f2f2f2;
		.video{
			width: 100%;
			video{
				width: 100%;
				height: 510upx;
			}
		}
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
