# cc-tencentGeocoding
#### 使用方法 
```使用方法
// 引入腾讯地图sdk
import qqmapsdk from "../../utils/qqmap-wx-jssdk.min.js";
	
// 地址反向编码解析地址
			reverseGeocodingClick(e) {

				const QQMapWX = new qqmapsdk({
					//腾讯地图  需要用户自己去申请key
					key: "SFABZ-WANWW-FISRY-3IGTF-HV7RE-YSFTI"
				});
				let that = this;

				QQMapWX.reverseGeocoder({
					location: {
						latitude: that.locatonDict.lat,
						longitude: that.locatonDict.lng
					},
					success: function(res) {
						console.log('解析地址成功', res);

						uni.showModal({
							title: "解析地址",
							content: "解析地址 = " + JSON.stringify(res)
						})
						that.addressInfo = JSON.stringify(res);


					},
					fail: function(res) {
						console.log(res);
					},
					complete: function(res) {
						console.log(res);
					}
				});
			},

			// 地址正向编码解析地址
			geocodingClick(e) {

				const QQMapWX = new qqmapsdk({
					//腾讯地图  需要用户自己去申请key
					key: "SFABZ-WANWW-FISRY-3IGTF-HV7RE-YSFTI"
				});
				let that = this;

				QQMapWX.geocoder({
					address: that.locationAddress,
					success: function(res) {
						console.log('解析地址成功', res);


						that.locatonInfo = JSON.stringify(res);


					},
					fail: function(res) {
						console.log(res);
					},
					complete: function(res) {
						console.log(res);
					}
				});
			},			


```

#### HTML代码实现部分
```html
<template>
	<view class="content">


		<view class="infoV">{{"地址信息 = "  + locationAddress }}</view>

		<!-- 点击按钮 地址反向编码 -->
		<button @click="geocodingClick" style="margin: 18px 20px;">正向解析地址</button>

		<!-- 地址信息 -->
		<view class="infoView">{{locatonInfo}}</view>

		<view class="infoV">{{"经度信息 = "  + locatonDict.lng }}</view>
		<view class="infoV">{{"纬度信息 = " + locatonDict.lat }}</view>

		<!-- 点击按钮 地址反向编码 -->
		<button @click="reverseGeocodingClick" style="margin: 18px 20px;">反向解析地址</button>

		<!-- 地址信息 -->
		<view class="infoView">{{addressInfo}}</view>







	</view>
</template>

<script>
	// 引入腾讯地图sdk
	import qqmapsdk from "../../utils/qqmap-wx-jssdk.min.js";

	export default {
		data() {
			return {

				locatonDict: {
					lng: 112.2626,
					lat: 23.1578
				},
				locationAddress: "广东省广州市天河区中山大道棠东东路128号",

				addressInfo: '',
				locatonInfo: ''
			}
		},
		/**
		 * 生命周期函数--监听页面显示
		 */
		onShow: function() {

		},

		methods: {

			// 地址反向编码解析经纬度
			reverseGeocodingClick(e) {

				const QQMapWX = new qqmapsdk({
					//腾讯地图  需要用户自己去申请key
					key: "SFABZ-WANWW-FISRY-3IGTF-HV7RE-YSFTI"
				});
				let that = this;

				QQMapWX.reverseGeocoder({
					location: {
						latitude: that.locatonDict.lat,
						longitude: that.locatonDict.lng
					},
					success: function(res) {
						console.log('解析地址成功', res);

						uni.showModal({
							title: "解析地址",
							content: "解析地址 = " + JSON.stringify(res)
						})
						that.addressInfo = JSON.stringify(res);


					},
					fail: function(res) {
						console.log(res);
					},
					complete: function(res) {
						console.log(res);
					}
				});
			},

			// 地址正向编码解析地址
			geocodingClick(e) {

				const QQMapWX = new qqmapsdk({
					//腾讯地图  需要用户自己去申请key
					key: "SFABZ-WANWW-FISRY-3IGTF-HV7RE-YSFTI"
				});
				let that = this;

				QQMapWX.geocoder({
					address: that.locationAddress,
					success: function(res) {
						console.log('解析地址成功', res);


						that.locatonInfo = JSON.stringify(res);


					},
					fail: function(res) {
						console.log(res);
					},
					complete: function(res) {
						console.log(res);
					}
				});
			},


		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		width: 100%;

	}

	.infoV {
		font-size: 14px;
		margin: 10px 20px;

	}

	.infoView {

		margin-left: 16px;
		width: calc(100vw - 48px);

		font-size: 13px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 20px;
		padding: 12px 8px;
		background-color: #F6F7F8;

		/* 换行 */
		white-space: pre-line;
	}
</style>
```