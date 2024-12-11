<template>
	<view class="invite">
		<!-- 自定义导航 -->
		<u-navbar title="关于我们" @rightClick="rightClick" :autoBack="true" bgColor="rgba(66, 74, 78, 0.2)"
			titleStyle="color:#fff;font-size: 31rpx;">
			<view class="u-nav-slot" slot="left">
				<image :src="imgUrl+'/worker/back_white_circle.png'" mode="widthFix" style="width: 58rpx;"></image>
				<!-- <u-icon name="arrow-left" size="19"></u-icon> -->
			</view>
		</u-navbar>
		<view class="cont" :style="{marginTop:marginTop+tabMargin+'px',height:contHeight+'px'}">
			<view class="inner">
				<view class="tit">灵动优聘</view>
				<view class="text">
					灵动优聘是成都灵动世界科技有限公司旗下灵活就业与灵活用工的人力资源供应链服务平台。我们希望用工方和蓝领工人都可以通过灵动优聘能快速匹配、优质匹配，提高行业工作效率，优化行业服务流程。灵动优聘是一个面向工厂、物流快递、商圈短期用工的新型人力资源服务平台，通过人工智能技术实现短期用工的招募、入职、合同、保险、考勤、发薪、税务等完整业务流程，支持人力资源的线索收集、激活、预估、保量和竞价等核心功能。与传统零工供应链系统相比，灵动优聘以低成本规模化的方式实现人力资源的线索、激活和调度，最大程度的降低用工成本，提高用工效率。
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