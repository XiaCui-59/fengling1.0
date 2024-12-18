<template>
	<view class="invite">
		<view class="single_page" v-if="ifSingle">
			<image :src="imgUrl+'/worker/single_page.png'" mode="widthFix" style="width: 100%;"></image>
		</view>
		<view class="" v-else>
			<!-- 自定义导航 -->
			<u-navbar title="积分使用说明" @rightClick="rightClick" :autoBack="true" bgColor="rgba(247, 248, 250, 0.3)"
				titleStyle="color:#010101;font-size: 31rpx;">
				<view class="u-nav-slot" slot="left"
					style="width:57rpx;height:57rpx;text-align: center;line-height: 57rpx;border:1px solid #C5C6CB;border-radius: 50%;">

					<u-icon name="arrow-left" size="19" color="#4E4E52"
						custom-style="display: inline-block;line-height: 57rpx;margin:0 auto;left:-2rpx;"></u-icon>
				</view>
			</u-navbar>
			<view class="cont">
				<view class="cont_header"></view>
				<view class="cont_bot" :style="{height:contBotHeight+'px',top:marginTop+20+'px'}">
					<view class="title">积分说明</view>
					<scroll-view scroll-y="true"
						:style="{height:scrollHeight+'px',padding:'0 30rpx',boxSizing:'border-box'}"
						@scrolltolower="scrolltolower">
						<view class="subtit pa">积分是什么？</view>
						<view class="pa">积分是本平台的虚拟货币，可用于报名精选工作岗位。每个精选工作岗位报名时需要2.5个积分，普通工作岗位在报名时不需要积分。</view>
						<view class="subtit pa">如何获得积分？</view>
						<view class="pa">您可以在个人中心-积分管理页面点击“充值积分”，支付9.9元即可获得10个积分。更多获取途径敬请期待。</view>
						<view class="subtit pa">在哪里查看积分？</view>
						<view class="pa">您可以点击首页左上角的菜单按钮，进入个人中心，然后点击“积分管理”，即可进入积分页面，查看您的积分数量以及积分的明细。</view>
						<view class="subtit pa">精选工作和普通工作的区别是什么？</view>
						<view class="pa">
							在风铃为您介绍的职位当中，如果标记有“【精选】”字样，则该职位为精选工作，在报名这类工作时需要扣除您2.5个积分。如果职位信息无“【精选】”标记，则该职位为普通工作，可免费报名，不会扣除您的积分。
						</view>

					</scroll-view>
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
				ifSingle: app.globalData.scene == 1154 ? true : false,
				scrollHeight: 0,
				contBotHeight: 0,
				marginTop: app.globalData.marginTop
			}
		},
		async onLoad() {
			uni.setNavigationBarColor({
				frontColor: '#000000',
				backgroundColor: 'transparent'
			})
			uni.hideShareMenu()
			if (this.ifSingle) {
				return
			}
			let titleInfo = await this.getElementInfo(".title")
			this.scrollHeight = app.globalData.systemHeight - titleInfo.bottom - 20
			this.contBotHeight = app.globalData.systemHeight - this.marginTop - 20
		},
		methods: {
			getElementInfo(className) {
				let _this = this
				return new Promise((resolve) => {
					let info = uni.createSelectorQuery().select(className);
					info.boundingClientRect(function(data) { //data - 各种参数
						resolve(data)
					}).exec()
				})
			},
			scrolltolower() {
				uni.showToast({
					title: "到底啦~",
					icon: "none",
					duration: 2000
				})
			}
		}
	}
</script>

<style lang="scss">
	.pa {
		font-weight: 400;
		font-size: 29rpx;
		color: #333333;
		line-height: 50rpx;
		text-indent: 2em;

		&.subtit {
			font-weight: 600;
			text-indent: 0;
			margin-top: 30rpx;
		}
	}

	.invite {
		height: 100vh;
		background: $base-bgcolor;
		color: #fff;

		.cont_header {
			height: 460rpx;
			background: url($back-ground-url+'/worker/invite_top_bg.png') no-repeat;
			background-size: 100% 100%;
			padding: 0 50rpx;
			box-sizing: border-box;
			position: relative;

		}

		.cont_bot {
			position: fixed;
			width: 100%;
			background: #fff;
			border-radius: 42rpx 42rpx 0rpx 0rpx;

			.title {
				margin: 40rpx 0 20rpx 0;
				font-weight: 600;
				font-size: 38rpx;
				color: #282319;
				text-align: center;
				padding: 0 28rpx;
				box-sizing: border-box;
			}
		}

	}
</style>