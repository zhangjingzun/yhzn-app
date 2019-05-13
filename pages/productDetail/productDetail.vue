<template>
	<scroll-view scroll-y="true" class="productDetail">
		<view class="detail-img">
			<swiper :indicator-dots="true" :autoplay="true" :interval="4000" :duration="1000">
				<swiper-item v-for="(item, index) in info.shop_img" :key="index">
					<image :src="imgHost+item" mode=""></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="detail-title">
			<view class="title-text">
				{{info.shop_name}}
			</view>
		</view>
		<view class="detail-desc">
			<view class="desc-text">
				{{info.shop_desc}}
			</view>
		</view>
		<view class="detail-info">
			<view class="info-box">
				<view class="info-item info-old-price">
					原价:{{info.shop_old_price}}元
				</view>
				<view class="info-item info-price">
					现价:{{info.shop_price}}元
				</view>
			</view>
			<view class="info-count">
				{{info.shop_count}}人已咨询
			</view>
		</view>
		<view class="detail-tabs">
			<view class="tabs-item active">
				产品详情
				<view class="bottom-icon">
					<text class="icon"></text>
				</view>
			</view>
		</view>
		<view class="text-area">
			<image v-for="(item, index) in info.shop_detail" :key="index" :src="imgHost+item" mode="widthFix"></image>
		</view>
		<view class="submit-button" @click="contact">
			点我咨询低价
		</view>
	</scroll-view>
</template>

<script>
	import wxParse from '../../components/wxParseCompontent/wxParse.vue';
	import config from '../../static/assets/config.js';
	import util from '../../static/assets/util.js';
	export default {
		components:{
			wxParse
		},
		data() {
			return {
				tabIndex: 0,
				imgHost: config.imgHost,
				info: {},
				phone: '13193690998',
				moreImage: []
			}
		},
		onLoad:function(options){
			if(options.id) {
				this.id = options.id;	
				this.getInfo(options.id);
			}else {
				util.returnPrev();
			}
			let info = uni.getStorageSync('info')
			if (info.info_tel) {
				this.phone = info.info_tel
			} else {
				this.getAbout()
			}
		},
		methods:{
			getAbout() {
				let _this = this
				util.ajax({url: config.url.about, type: 'get'}).then(res => {
					if (res.code == 0) {
						_this.phone = res.data.info_tel
						uni.setStorageSync('info', res.data)
					}
				})
			},
			getInfo(id) {
				let _this = this
				util.ajax({url: config.url.productDetail, data: {id: id}}).then((res) => {
					console.log(res)
					if (res.code == 0) {
						let data = res.data
						let shop_img = data.shop_img
						let shopImg = shop_img.split(',')
						data.shop_img = shopImg
						
						let shop_detail = data.shop_detail
						let detailImg = shop_detail.split(',')
						data.shop_detail = detailImg
						_this.info = data
					} else {
						util.showTost('网络错误，请稍后重试')
					}
				})
			},
			contact() {
				uni.makePhoneCall({
					phoneNumber: this.phone,
				})
			}
		},
		onShareAppMessage:function(){
			
		},
	}
</script>

<style lang="less" scoped>
.submit-button{
	position: fixed;
	bottom: 0;
	left: 0;
	height: 80upx;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #483213;
	color: #fff;
	font-size: 30upx;
	width: 100%;
}
.productDetail{
	background-color: #fff;
	min-height: 100%;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
}
.detail-tabs{
	display: flex;
	background-color: #fff;
	.tabs-item{
		flex: 1;
		height: 90upx;
		border-bottom: 2upx solid transparent;
		text-align: center;
		line-height: 90upx;
		font-size: 30upx;
		position: relative;
		color: #656565;
		background-color: #f7f7f7;
		display: flex;
		align-items: center;
		justify-content: center;
		.bottom-icon{
			position: absolute;
			left: 0;
			width: 100%;
			bottom: 0;
			display: flex;
			justify-content: center;
			.icon{
				display: block;
				border-style: solid;
				border-color: transparent;
				border-width: 9upx;
				border-bottom-color: #583213;
				position: absolute;
				bottom: 0px;
				display: none;
			}
		}
		&.active{
			border-bottom: 4upx solid #583213;
			color: #583213;
			background-color: #fff;
			.bottom-icon .icon{
				display: block;
			}
		}
	}
}
.detail-desc{
	padding: 20upx;
	font-size: 28upx;
	color: #333333;
	.desc-text{
		line-height: 35upx;
	}
}
.detail-info{
	display: flex;
	align-items: center;
	.info-box{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		.info-item{
			flex: 1;
			display: flex;
			padding: 0 20upx;
			align-items: center;
			font-size: 30upx;
			color: #666666;
			&.info-old-price{
				font-size: 28upx;
				text-decoration: line-through;
				font-style: italic;
				margin-bottom: 6upx;
			}
			&.info-price{
				color: #c00303;
				font-size: 32upx;
				font-weight: bold;
			}
		}
	}
	.info-count{
		flex: 1;
		font-size: 28upx;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-right: 20upx;
		color: #666;
	}
}
.detail-title{
	width: 100%;
	margin: 0 auto;
	text-align: center;
	height: 65upx;
	background-color: #583213;
	color: #fff;
	font-size: 28upx;
	line-height: 65upx;
	padding: 0 20upx;
	.title-text{
		width: 100%;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
}
.detail-img{
	swiper{
		height: 450upx;
	}
	image{
		width: 100%;
		height: 450upx;
	}
}
.text-area{
	padding: 20upx;
	padding-bottom: 100upx;
	display: flex;
	flex-direction: column;
	image{
		display: block;
		width: 100%;
	}
}
</style>
