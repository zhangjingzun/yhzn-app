<template>
	<view class="map">
		
	</view>
</template>

<script>
	import util from '../../static/assets/util.js';
	import config from '../../static/assets/config.js';
	export default {
		data() {
			return {
				lat: 33.510154,
				lon: 112.430822
			}
		},
		onLoad() {
			let info = uni.getStorageSync('info')
			if (info.lat) {
				this.lat = info.info_lat
				this.lon = info.info_lon
				this.locations()
			} else {
				this.getAbout()
			}
		},
		methods:{
			getAbout() {
				let _this = this
				util.ajax({url: config.url.about, type: 'get'}).then(res => {
					if (res.code == 0) {
						_this.lat = res.data.info_lat
						_this.lon = res.data.info_lon
						uni.setStorageSync('info', res.data)
						_this.locations()
					}
				})
			},
			locations() {
				uni.openLocation({
					latitude: 33.510154,
					longitude: 112.430822,
					success: function () {
						console.log('success');
					}
				});
			}
		}
	}
</script>

<style lang="less" scoped>
.map{
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
}
</style>
