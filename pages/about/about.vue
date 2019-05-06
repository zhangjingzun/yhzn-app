<template>
	<view class="about">
		<view class="about-banner">
			<image :src="info.info_img" mode=""></image>
		</view>
		<view class="about-tabs">
			<view class="tabs-btn" :class="{'active': tabsIndex == 0}" @click="changeTabsIndex(0)">
				店铺简介
			</view>
			<view class="tabs-btn" :class="{'active': tabsIndex == 1}" @click="changeTabsIndex(1)">
				联系我们
			</view>
		</view>
		<view class="about-container">
			<view class="about-content" v-if="tabsIndex == 0">
				<view class="about-richtext">
					{{info.info_desc}}
				</view>
			</view>
			<view class="about-content" v-if="tabsIndex == 1">
				<view class="about-desc">
					店铺名称：
					<text>{{info.info_name}}</text>
				</view>
				<view class="about-desc">
					联系人：
					<text>{{info.info_user}}</text>
				</view>
				<view class="about-desc" @click="callPhone">
					联系手机：
					<text>{{info.info_tel}}</text>
					<image src="../../static/images/jiantou.png" mode=""></image>
				</view>
				<view class="about-desc" @click="goMap">
					联系地址：
					<text>{{info.info_address}}</text>
					<image src="../../static/images/jiantou.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import util from '../../static/assets/util.js';
	import config from '../../static/assets/config.js';
	export default {
		data() {
			return {
				info: {},
				tabsIndex: 0
			}
		},
		onLoad:function() {
			this.getAbout()
		},
		methods: {
			getAbout() {
				let _this = this
				util.ajax({url: config.url.about, type: 'get'}).then(res => {
					if (res.code == 0) {
						_this.info = res.data
					} else {
						util.showTost('获取失败，请检查网络后重试')
					}
				})
			},
			changeTabsIndex(index) {
				this.tabsIndex = index;
			},
			callPhone() {
				uni.makePhoneCall({
					phoneNumber: this.info.info_tel,
				})
			},
			goMap() {
				uni.navigateTo({
					url: `../map/map?lon=${this.info.info_lon}&lat=${this.info.info_lat}`
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
			text-indent: 56upx;
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
