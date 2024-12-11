<template>
	<view class="invite">
		<view class="single_page" v-if="ifSingle">
			<image :src="imgUrl+'/worker/single_page.png'" mode="widthFix" style="width: 100%;"></image>
		</view>
		<view class="" v-else>
			<!-- 自定义导航 -->
			<u-navbar title="关于我们" @rightClick="rightClick" :autoBack="true" bgColor="#F7F8FA"
				titleStyle="color:#010101;font-size: 31rpx;">
				<view class="u-nav-slot" slot="left">
					<!-- <image :src="imgUrl+'/worker/ic_back_blank.png'" mode="widthFix" style="width: 58rpx;"></image> -->
					<u-icon name="arrow-left" size="19"></u-icon>
				</view>
			</u-navbar>
			<view class="cont" :style="{marginTop:marginTop+tabMargin+'px',height:contHeight+'px'}">
				<view class="inner">
					<view class="tit">灵动优聘</view>
					<view class="text">
						灵动优聘是成都灵动世界科技有限公司（北京灵动赛博科技有限公司全资子公司）旗下专业提供人力资源招聘服务的技术型互联网平台。公司致力于以互联网和人工智能技术实现蓝领用工市场的供需匹配，坚持信用、专业、高效的核心价值观，倾力打造可依赖可信任的高技术招聘服务平台。
					</view>

				</view>
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
			uni.setNavigationBarColor({
				frontColor: '#000000',
				backgroundColor: '#ff0000'
			})
			uni.hideShareMenu()
			if (this.ifSingle) {
				return
			}
			if (this.isLogin()) {
				this.contHeight = app.globalData.systemHeight - this.marginTop - this.tabMargin
			} else {
				uni.reLaunch({
					url: "/pages/index/index"
				})
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.invite {
		height: 100vh;
		background: #fff;
		color: $base-fontcolor;

		.cont {
			background: url($back-ground-url+'/worker/abou_bg_white.png') no-repeat;
			background-size: cover;
			background-position: top left;
			padding: 70rpx 26rpx;
			box-sizing: border-box;

			.inner {
				height: 100%;
				background: url($back-ground-url+'/worker/about_rect_white.png') no-repeat;
				background-size: 100% 100%;
				position: relative;
				padding: 34rpx;
				box-sizing: border-box;

				.tit {
					position: absolute;
					top: -20rpx;
					left: 50%;
					transform: translateX(-50%);
					font-size: 29rpx;
					color: #333;
					font-weight: 600;
				}

				.text {
					font-size: 31rpx;
					color: #333;
					line-height: 58rpx;
					margin-top: 30rpx;
				}
			}
		}
	}
</style>