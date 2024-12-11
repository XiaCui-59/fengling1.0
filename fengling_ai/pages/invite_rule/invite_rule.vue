<template>
	<view class="invite">
		<view class="single_page" v-if="ifSingle">
			<image :src="imgUrl+'/worker/single_page.png'" mode="widthFix" style="width: 100%;"></image>
		</view>
		<view class="" v-else>
			<!-- 自定义导航 -->
			<u-navbar title="邀请奖励规则" @rightClick="rightClick" :autoBack="true" bgColor="rgba(247, 248, 250, 0.3)"
				titleStyle="color:#010101;font-size: 31rpx;">
				<view class="u-nav-slot" slot="left">
					<!-- <image :src="imgUrl+'/worker/back_white_circle.png'" mode="widthFix" style="width: 58rpx;"></image> -->
					<u-icon name="arrow-left" color="#010101" size="19"></u-icon>
				</view>
			</u-navbar>
			<view class="cont">
				<view class="cont_header"></view>
				<view class="cont_bot" :style="{height:contBotHeight+'px',top:marginTop+20+'px'}">
					<view class="title">邀请好友赚现金规则</view>
					<scroll-view scroll-y="true"
						:style="{height:scrollHeight+'px',padding:'0 30rpx',boxSizing:'border-box'}"
						@scrolltolower="scrolltolower">
						<view class="pa">可通过＜邀请好友＞获取现金，分享的内容中会包含推广链接；</view>
						<view class="pa">通过"微信／微信朋友圈／面对面二维码邀请"方式邀请好友完成注册，被邀请的好友账号将与您关联。</view>
						<view class="pa">当被邀好友点击推广链接注册账号，或者通过邀请人分享的活动页面完成手机号码注册，都将记录邀请关系。</view>
						<view class="pa">每人每次可通过"邀请好友”获得9元现金奖励，好友完成注册并成为会员，奖励会在24小时内到账钱包余额，部分存在延迟，请谅解。</view>
						<view class="pa">被邀请人绑定的手机号码应为正常号段即手机号码号段不属于虚拟号／网络号号码号段，且手机号第一次在本平台注册，否则邀请无效，不获得邀请奖励。</view>
						<view class="pa">邀请记录将通过风控系统和人工双重校验。包括但不限于存在下列违规行为的，灵动优聘在发现或接到投诉后，将对违规账号进行冻结，并要求用户承担相应的损害赔偿责任：
						</view>
						<view class="pa">1．在本平台以外的任何第三方渠道售卖或购买灵动优聘积分的；</view>
						<view class="pa">2．以任何机器人软件、爬虫软件、刷奖软件／脚本、木马植入或其他任何自动程序方式、不正当手段等参与邀请的；</view>
						<view class="pa">3．以相似 IP ／设备批量推荐注册的；</view>
						<view class="pa">4．通过刷奖平台或刷奖群等渠道，发布信息利诱他人参与活动，或有虚假承诺被邀请好友等行为的；</view>
						<view class="pa">5．邀请来的用户行为及活跃度远低于正常注册用户的；

							本邀请规则最终解释权归灵动优聘所有。</view>
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