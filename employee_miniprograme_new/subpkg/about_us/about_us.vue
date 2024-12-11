<template>
	<view class="content">
		<!-- #ifdef MP-WEIXIN || MP-KUAISHOU || MP-BAIDU-->
		<customHeader :title="pageName" :showBack="true" :headHeight="headerHeight"></customHeader>
		<view class="cont" :style="{marginTop:marginTop+'px'}">
			<view class="top_area" :style="{top:marginTop+'px'}">
			<!-- #endif -->
				<!-- #ifdef MP-TOUTIAO -->
				<view class="cont" :style="{marginTop:tabMargin+'px'}">
					<view class="top_area" :style="{top:tabMargin+'px'}">
					<!-- #endif -->

						<image :src="imgUrl+'/broker/ic_message_title.png'" mode="widthFix"></image>
						<view class="top flex flex_btween">
							<view class="title flex flex-start">
								<view class="label">公司简介</view>
							</view>
						</view>
					</view>
					<view class="box" :style="{top:boxTop+'px'}">
						<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
							:style="{height:scrollHeight+'px'}" @scrolltolower="lower" @scroll="scroll">
							<view class="message_title">关于灵动优聘</view>
							<view class="text">
								灵动优聘是成都灵动世界科技有限公司旗下灵活就业与灵活用工的人力资源供应链服务平台。我们希望用工方和蓝领工人都可以通过灵动优聘能快速匹配、优质匹配，提高行业工作效率，优化行业服务流程。灵动优聘是一个面向工厂、物流快递、商圈短期用工的新型人力资源服务平台，通过人工智能技术实现短期用工的招募、入职、合同、保险、考勤、发薪、税务等完整业务流程，支持人力资源的线索收集、激活、预估、保量和竞价等核心功能。与传统零工供应链系统相比，灵动优聘以低成本规模化的方式实现人力资源的线索、激活和调度，最大程度的降低用工成本，提高用工效率。
							</view>
						</scroll-view>
					</view>
				</view>
			</view>
</template>

<script>
	import tabbar from "@/components/tabbar.vue"
	import customHeader from "@/components/custom_header.vue"
	const app = getApp()
	export default {
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
				pageName: "关于我们",
				marginTop: 0,
				tabMargin: app.globalData.tabMargin,
				scrollHeight: 0,
				boxTop: 0,
				headerHeight: 0,
			}
		},
		components: {
			tabbar,
			customHeader
		},
		onLoad() {
			let _this = this
			this.getMarginTop()
			setTimeout(function() {
				_this.getElementInfo()
				_this.getTopHeight()
			}, 500)

		},
		methods: {
			getMarginTop(e) {
				let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
				this.marginTop = menuButtonInfo.height + menuButtonInfo.top + 10
			},
			getTopHeight() {
				let percent = 230 / 844
				let systemInfo = uni.getSystemInfoSync()
				this.headerHeight = Math.floor(systemInfo.screenHeight * percent)
			},
			getElementInfo() {
				let _this = this
				let topHeight = 0;
				let systemInfo = uni.getSystemInfoSync()
				let tabbarHeight = Math.floor(systemInfo.screenHeight * (46 / 844))
				console.log(tabbarHeight, "tabbar")
				let info = uni.createSelectorQuery().select(".top_area");
				info.boundingClientRect(function(data) { //data - 各种参数
					topHeight = data.bottom - data.top // 获取元素高度
					// #ifdef MP-WEIXIN||MP-KUAISHOU
					_this.boxTop = _this.marginTop + data.height
					// #endif
					// #ifdef MP-TOUTIAO
					_this.boxTop = _this.tabMargin + data.height
					// #endif
					_this.scrollHeight = systemInfo.screenHeight - _this.boxTop - tabbarHeight - 5
				}).exec()

			},
		}
	}
</script>

<style lang="scss" scoped>
	.top_area {
		width: calc(100% - 80rpx);
		position: fixed;
		left: 40rpx;
		font-size: 0;

		&>image {
			width: 100%;
		}

		.top {
			position: absolute;
			top: 3%;
			left: 50%;
			transform: translateX(-50%);
			width: calc(100% - 80rpx);
			padding: 14rpx 0;

			.title {
				position: relative;

				.label {
					height: 52rpx;
					line-height: 52rpx;
					padding: 0 20rpx;
					text-align: center;
					background: #4284F4;
					border-radius: 4px;
					font-size: 28rpx;
					color: #FFFFFF;
					margin-right: 8rpx;
				}

				.type {
					font-size: 28rpx;
					color: #333;
					line-height: 52rpx;
				}
			}
		}
	}

	.box {
		position: fixed;
		width: calc(100% - 80rpx);
		left: 40rpx;
		z-index: 3;
		// border-top-left-radius: 16rpx;
		// border-top-right-radius: 16rpx;
		overflow: hidden;
		background: url($back-ground-url+"/worker/ic_message_detail_bg.png") no-repeat;
		background-size: 100% 100%;
		background-position: 0 -2rpx;
		padding: 0 40rpx;
		box-sizing: border-box;
		font-size: 0;

		.message_title {
			font-size: 34rpx;
			font-weight: bold;
		}

		.text {
			font-size: 28rpx;
			color: #5A5A5A;
			line-height: 56rpx;
			margin-top: 30rpx;
			text-indent: 2em;
		}
	}
</style>