<template>
	<view class="custom_header"
		:style="{height:headHeight+'px',backgroundImage: bgImage ? `url(${bgImage})` : `url(${imgUrl}/broker/bg.png)`,backgroundRepeat:'no-repeat'}">
		<image :src="imgUrl+'/broker/ic_jiedan_header_bg.png'" mode="widthFix" v-if="showSecondimage"></image>
		<view class="title" :style="{lineHeight:titleHeight+'px',height:titleHeight+'px',marginTop:marginTop+'px'}">
			<view class="back" v-if="showBack" @click="back">
				<image :src="imgUrl+'/broker/back.png'" mode=""></image>
			</view>
			<!-- <view class="scan flex flex-start" v-if="showScan" @click="scanCode">
				<image :src="imgUrl+'/broker/scan_icon.png'" mode="widthFix"></image>
				<text>扫一扫</text>
			</view> -->
			<view class="text">{{title}}</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		name: "custom_header",
		props: ["title", "showBack", "headHeight", "showSecondimage", "showScan", "backIndex", "bgImage"],
		data() {
			return {
				titleHeight: 0,
				marginTop: 0,
				backLeft: 0,
				imgUrl: app.globalData.baseImageUrl
			};
		},
		created() {
			console.log(this.bgImage, "bgImage")
			let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			this.titleHeight = menuButtonInfo.height
			this.marginTop = menuButtonInfo.top
		},
		methods: {
			back() {
				if (this.title == "完善职位信息") {
					this.$emit("handleBack")
				} else {
					if (this.backIndex) {
						uni.switchTab({
							url: "/pages/index/index"
						})
					} else {
						uni.navigateBack()
					}
				}

			},
			scanCode() {
				let _this = this
				uni.scanCode({
					onlyFromCamera: true,
					scanType: "qrCode",
					hideAlbum: true,
					success: function(res) {
						console.log(res)
						let url = res.result
						_this.$request(url, {}, "POST").then(resp => {
							if (resp.code == 0) {
								uni.showModal({
									title: "工人：" + resp.data + "，报到核销成功",
									showCancel: false
								})
							}
						})
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.custom_header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		// background: url($back-ground-url+"/broker/bg.png") no-repeat;
		background-size: 100% 100%;
		overflow: hidden;
		z-index: 2;

		&>image {
			width: 100%;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 3;
			will-change: transform;
		}

		.title {
			text-align: center;
			color: #fff;
			font-size: 32rpx;
			position: relative;
			font-weight: bold;
			z-index: 10;

			.back {
				position: absolute;
				left: 48rpx;
				top: 50%;
				transform: translateY(-50%);
				width: 44rpx;
				height: 44rpx;

				image {
					width: 44rpx;
					height: 44rpx;
					will-change: transform;
				}
			}

			.scan {
				position: absolute;
				left: 48rpx;
				top: 50%;
				transform: translateY(-50%);

				image {
					width: 32rpx;
					height: 32rpx;
					margin-right: 8rpx;
				}

				text {
					font-size: 28rpx;
					color: #FFFFFF;
				}
			}
		}
	}
</style>