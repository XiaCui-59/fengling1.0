<template>
	<view class="invite">
		<!-- 自定义导航 -->
		<u-navbar title="钱包余额" @rightClick="rightClick" :autoBack="true" bgColor="rgba(66, 74, 78, 0.2)"
			titleStyle="color:#fff;font-size: 31rpx;">
			<view class="u-nav-slot" slot="left">
				<image :src="imgUrl+'/worker/back_white_circle.png'" mode="widthFix" style="width: 58rpx;"></image>
				<!-- <u-icon name="arrow-left" size="19"></u-icon> -->
			</view>
		</u-navbar>
		<view class="cont" :style="{marginTop:marginTop+tabMargin+'px',height:contHeight+'px'}">
			<view class="inner">
				<view class="tit">灵动优聘</view>
				<view class="text"></view>
			</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				contHeight: 0
			}
		},
		onLoad() {
			this.contHeight = app.globalData.systemHeight - this.marginTop - this.tabMargin
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.invite {
		height: 100vh;
		background: $base-bgcolor;
		color: #fff;

		.cont {
			background: url($back-ground-url+'/worker/about_bg.png') no-repeat;
			background-size: cover;
			background-position: top left;
			padding: 70rpx 26rpx;
			box-sizing: border-box;

			.inner {
				height: 100%;
				background: url($back-ground-url+'/worker/about_inner_bg.png') no-repeat;
				background-size: 100% 100%;
				position: relative;
				padding: 34rpx;
				box-sizing: border-box;

				.tit {
					position: absolute;
					top: -20rpx;
					left: 50%;
					transform: translateX(-50%);
					font-size: 31rpx;
					color: #FFF0D1;
				}

				.text {
					font-size: 31rpx;
					color: #D8D8D8;
					line-height: 58rpx;
					margin-top: 30rpx;
				}
			}
		}
	}
</style>