<template>
	<scroll-view scroll-y="true" class="productDetail">
		<view class="detail-img">
			<swiper :indicator-dots="true" :autoplay="true" :interval="4000" :duration="1000">
				<swiper-item>
					<image src="http://img0.imgtn.bdimg.com/it/u=2844949136,2031078830&fm=27&gp=0.jpg" mode=""></image>
				</swiper-item>
				<swiper-item>
					<image src="http://img0.imgtn.bdimg.com/it/u=2844949136,2031078830&fm=27&gp=0.jpg" mode=""></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="detail-title">
			产品一产品一产品一
		</view>
		<view class="text-area">
			<wxParse :content="htmlString" :imageProp="imageProp"/>
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
			<wxParse :content="htmlString" :imageProp="imageProp" />
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
				htmlString: "<div>测试数据</div>",
				tabIndex: 0,
				imgPublic: config.imgPublic,
				imageProp: {
					mode: '',
					padding: 0,
					lazyLoad: false,
					domain: config.richImgHost,
				},
				info: {},
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
		},
		onShareAppMessage:function(){
			
		},
		methods:{
			moreImageFuc() {
// 				let that = this;
// 				let moreImage = this.info.news_moreImg.split("|");
// 				this.moreImage = moreImage;
			},
			getInfo(id) {
// 				let that = this;
// 				util.ajax({url: config.url.article_detail, data: {a_id: id}}).then((res) => {
// 					that.info = res;
// 					that.moreImageFuc();
// 					that.htmlString = res.news_technology;
// 				});
			},
			changeIndex(index) {
// 				this.tabIndex = index;
// 				if(index == 0) {
// 					this.htmlString = this.info.news_technology;
// 				}else if(index == 1) {
// 					this.htmlString = this.info.news_application;
// 				}else if(index == 2) {
// 					this.htmlString = this.info.news_oil_wear;
// 				}
			},
		},
	}
</script>

<style lang="less" scoped>
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
.detail-title{
	width: 100%;
	margin: 0 auto;
	text-align: center;
	height: 65upx;
	background-color: #583213;
	color: #fff;
	font-size: 28upx;
	line-height: 65upx;
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
	font-size: 28upx;
	color: #727272;
	line-height: 45upx;
	image{
		max-width: 100%;
	}
}
</style>
