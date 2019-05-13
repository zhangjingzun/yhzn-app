<template>
	<view class="join">
		<image v-for="(item, index) in imgList" :key="index" :src="imgHost + item.url" mode="widthFix"></image>
		<button class="btn" type="warn" @click="contact">立即咨询</button>
	</view>
</template>

<script>
	import util from '../../static/assets/util.js';
	import config from '../../static/assets/config.js';
	export default {
		data() {
			return {
				imgList: [],
				area: "",
				imgHost: config.imgHost,
				phone: '13193690998'
			}
		},
		onLoad(options) {
			let info = uni.getStorageSync('info')
			if (info.info_tel) {
				this.phone = info.info_tel
			} else {
				this.getAbout()
			}
			this.getImgs()
		},
		methods: {
			getAbout() {
				let _this = this
				util.ajax({url: config.url.about, type: 'get'}).then(res => {
					if (res.code == 0) {
						_this.phone = res.data.info_tel
						uni.setStorageSync('info', res.data)
					}
				})
			},
			getImgs () {
				let _this = this
				util.ajax({url: config.url.propaganda, type: 'get'}).then((res) => {
					if (res.code == 0) {
						_this.imgList = res.data
					} else {
						util.showTost('请检查网络设置后重试')
					}
				})
			},
			contact() {
				uni.makePhoneCall({
					phoneNumber: this.phone,
				})
			}
		}
	}
</script>

<style lang="less" scoped>
.join{
	padding-bottom: 92upx;
	.btn{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		border-radius: 0;
	}
	image{
		width: 100%;
		display: block;
	}
	.form-wrapper{
		display: flex;
		height: 75upx;
		align-items: center;
		border-bottom: 2upx solid #dbdbdb;
		input{
			width: 100%;
			box-sizing: border-box;
			padding-left: 30upx;
			font-size: 28upx;
			color: #666666;
		}
	}
	.form-button{
		margin-top: 50upx;
		button{
			background-color: #583213;
			color: #fff;
			font-size: 33upx;
			text-align: center;
			height: 65upx;
			line-height: 65upx;
		}
	}
}
</style>
