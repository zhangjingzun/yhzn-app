<template>
	<view class="about">
		<view class="about-banner">
			<image src="http://img0.imgtn.bdimg.com/it/u=2844949136,2031078830&fm=27&gp=0.jpg" mode=""></image>
		</view>
		<view class="about-tabs">
			<view class="tabs-btn" :class="{'active': tabsIndex == 0}" @click="changeTabsIndex(0)">
				公司简介
			</view>
			<view class="tabs-btn" :class="{'active': tabsIndex == 1}" @click="changeTabsIndex(1)">
				联系我们
			</view>
		</view>
		<view class="about-container">
			<view class="about-content" v-if="tabsIndex == 0">
				<view class="about-richtext">
					<wxParse :content="htmlString" :imageProp="imageProp" />
				</view>
			</view>
			<view class="about-content" v-if="tabsIndex == 1">
				<view class="about-desc">
					公司名称：
					<text>公司名称</text>
				</view>
				<view class="about-desc">
					联系人：
					<text>联系人</text>
				</view>
				<view class="about-desc" @click="callPhone">
					联系手机：
					<text>13193690998</text>
					<image src="../../static/images/jiantou.png" mode=""></image>
				</view>
				<view class="about-desc" @click="goMap">
					联系地址：
					<text>地址地址地址地址地址</text>
					<image src="../../static/images/jiantou.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import util from '../../static/assets/util.js';
	import config from '../../static/assets/config.js';
	import wxParse from '../../components/wxParseCompontent/wxParse.vue'
	export default {
		components: {
			wxParse,
		},
		data() {
			return {
				htmlString: '<div>测试数据</div>',
				imgHost: config.imgPublic,
				tabsIndex: 0,
				imageProp: {
					mode: '',
					padding: 0,
					lazyLoad: false,
					domain: config.richImgHost,
				},
				aboutInfo: {}
			}
		},
		onShow:function(){
			this.getAbout();
		},
		methods: {
			getAbout() {
			},
			changeTabsIndex(index) {
				this.tabsIndex = index;
			},
			callPhone() {
				uni.makePhoneCall({
					phoneNumber: '13193690998',
				})
			},
			goMap() {
				uni.navigateTo({
					url: '../map/map'
				})
			}
		},
	}
</script>

<style lang="less" scoped>
	.about {
		.about-banner{
			image{
				width: 100%;
				display: block;
				height: 360upx;
			}
		}
		.about-container{
			padding: 0 20upx;
		}
		.about-tabs{
			padding: 0 20upx;
			display: flex;
			border-bottom: 2upx solid #dbdbdb;
			.tabs-btn{
				width: 200upx;
				text-align: center;
				line-height: 65upx;
				font-size: 28upx;
				color: #583213;
				border-bottom: 4upx solid transparent;
				&.active{
					border-bottom: 4upx solid #583213;
				}
			}
		}
		.about-richtext {
			padding: 48upx 20upx;
			font-size: 28upx;
			line-height: 36upx;
			color: #4C4B4B;
		}
		.about-desc{
			margin: 0 20upx;
			height: 90upx;
			border-bottom: 2upx solid #eeeeee;
			font-size: 28upx;
			display: flex;
			align-items: center;
			position: relative;
			color: #e77817;
			text{
				color: #3c3c3c;
			}
			image{
				position: absolute;
				width: 14upx;
				height: 24upx;
				right: 0;
			}
		}
	}
</style>
