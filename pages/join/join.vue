<template>
	<view class="join">
		<form @submit="formSubmit" @reset="formReset">
			<view class="form-wrapper">
				<input type="text" placeholder="请输入您的姓名" name="username" value="" />
			</view>
			<view class="form-wrapper">
				<input type="text" placeholder="请输入您的电话" name="tel" value="" />
			</view>
			<view class="form-wrapper">
				<picker class="picker-item" mode="selector" :range="objList" range-key="text" @change="selectArea">
					<input type="text" disabled="true" name="area" v-model="area" placeholder="请选择县区" :value="area" />
				</picker>
			</view>
			<view class="form-button">
				<button type="primary" form-type="submit">提交申请</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				objList: [{
					text: 'item1'
				}, {
					text: 'item2'
				}, {
					text: 'item3'
				}],
				area: "",
			}
		},
		onLoad(options) {
		},
		methods: {
			selectArea(e) {
				var i = e.detail.value;
				this.getArea(i);
			},
			getArea(index) {
				this.area = this.objList[index].text;
			}
		}
	}
</script>

<style lang="less" scoped>
.join{
	padding: 30upx 20upx;
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
