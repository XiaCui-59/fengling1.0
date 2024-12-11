<template>
	<view class="custom_header" :style="{height:headHeight+'px'}">
		<image :src="imgUrl+'/worker/ic_baoming_header_bg.png'" mode="widthFix" v-if="showSecondimage"></image>
		<view class="title" :style="{lineHeight:titleHeight+'px',height:titleHeight+'px',top:marginTop+'px'}"
			@click="toIndex">
			<view class="back" v-if="showBack" @click="back">
				<image :src="imgUrl+'/broker/back.png'" mode=""></image>
			</view>
			<view class="text">{{title}}</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		name: "custom_header",
		props: ["title", "showBack", "headHeight", "showSecondimage", "backIndex"],
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
				titleHeight: 0,
				marginTop: 0,
				backLeft: 0
			};
		},
		created() {
			let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			this.titleHeight = menuButtonInfo.height
			this.marginTop = menuButtonInfo.top
		},
		methods: {
			back() {
				if (this.backIndex) {
					// #ifdef MP-WEIXIN
					uni.switchTab({
						url: "/pages/index/index"
					})
					// #endif
					// #ifdef MP-KUAISHOU || MP-TOUTIAO
					uni.switchTab({
						url: "/pages/work/work"
					})
					// #endif
				} else {
					uni.navigateBack()
				}
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
		background: url($back-ground-url+"/worker/top_header_bg3.png") no-repeat;
		background-size: cover;
		background-position: center center;
		// background-size: 100% 100%;
		overflow: hidden;
		z-index: 2;

		image {
			will-change: transform
		}

		&>image {
			width: 100%;
			// position: fixed;
			// top:0;
			// left:0;
			// z-index:3;
		}

		.title {
			text-align: center;
			color: #fff;
			font-size: 32rpx;
			position: fixed;
			font-weight: bold;
			width: 100%;
			z-index: 10;

			.back {
				position: absolute;
				left: 40rpx;
				top: 50%;
				transform: translateY(-50%);
				width: 44rpx;
				height: 44rpx;

				image {
					width: 44rpx;
					height: 44rpx;
				}
			}
		}
	}
</style>