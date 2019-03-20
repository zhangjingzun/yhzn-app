<template>
	<view class="map">
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			this.locations();
		},
		methods:{
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
