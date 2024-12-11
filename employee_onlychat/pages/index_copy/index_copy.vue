<template>
	<view class="content">
		<view class="intro">
			<view class="title">
				<view class="tit">Hi~</view>
				<view class="tit">我是风铃AI</view>
			</view>
			<view class="text">
				我是专为您服务的客服“风铃AI”，为您提供一对一的工作匹配服务。这里有丰富的工作机会，总会有工作机会能满足您的需要。请问想了解哪些工作呢？操作工、上下货、保安、保洁都有哟，还可以发送语音与我交流哟。
			</view>
			<view class="btn" @click="navigate">
				<text>立即聊天找工作</text>
				<image :src="imgUrl+'/worker/arrow_long.png'" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import urlSetting from "../../url_setting";
	const app = getApp()
	export default {
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
				openid: "",
				params: null
			}
		},
		onShareAppMessage() {
			return {
				title: "AI找工作，两句话的事儿",
				path: "/pages/index/index",
				imageUrl: app.globalData.baseImageUrl + "/worker/mini_share.jpg"
			}
		},
		onShareTimeline() {
			return {
				title: "AI找工作，两句话的事儿",
				path: "/pages/index/index",
				imageUrl: app.globalData.baseImageUrl + "/worker/mini_share.jpg"
			}
		},
		async onLoad(params) {
			console.log("params", params)
			this.params = params

			if (app.globalData.scene != 1154) {
				this.openid = await this.getOpenId()
			}
		},
		methods: {
			paramsPost(header) {
				this.$request("/ad/tracking/tencent", this.params, "POST", header).then(res => {
					if (res.code == 0) {
						console.log("参数POST成功")
					}
				})
			},
			getOpenId() {
				let _this = this
				return new Promise(resolve => {
					uni.login({
						success: (res) => {
							console.log(res, "dyres")
							if (res.errMsg == 'login:ok') {
								let url = ""
								let data = {
									code: res.code
								}
								// #ifdef MP-WEIXIN
								url = "/auth/worker/wechat/mini/openid"
								// #endif
								// #ifdef MP-KUAISHOU
								url = "/auth/worker/kuaishou/openid"
								// #endif
								// #ifdef MP-TOUTIAO
								url = "/auth/worker/douyin/openid"
								data.anonymous_code = res.anonymousCode
								// #endif
								this.$request(url, data, "POST").then(resp => {
									if (resp.code == 0) {
										uni.setStorage({
											key: "openid",
											data: resp.data.open_id
										})
										let header = {
											"Content-Type": "application/json",
											"Authorization": "bearer " + uni
												.getStorageSync("token"),
											"accept": "application/json",
											"app-id": urlSetting.urls.appid,
											"open-id": resp.data.open_id
										}
										_this.paramsPost(header)
										// _this.ifChat(header)
										resolve(resp.data.open_id)
									}
								})
							}
						},
						fail(err) {
							console.log(err, "接口调用失败")
							// uni.showModal({
							// 	title: "登录失败",
							// 	content: "授权登录失败，将无法使用部分功能",
							// 	showCancel: false
							// })
						}
					});
				})
			},
			navigate() {
				uni.navigateTo({
					url: "/pages/test_chat/test_chat"
				})
			},
			ifChat(header) {
				this.$request("/ai/chat/histories/exist", {}, "GET", header).then(res => {
					if (res.code == 0) {
						if (res.data.exist) {
							this.navigate()
						}
					}
				})
			}

		}
	}
</script>

<style lang="scss">
	.content {
		background: url($back-ground-url+"/worker/welcome_pink.png") no-repeat;
		background-size: cover;
		position: relative;

		.intro {
			width: 75%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			.title {
				margin-bottom: 27rpx;

				.tit {
					font-family: YEFONTTangYingHei;
					font-size: 46rpx;
					color: #fff;
					line-height: 65rpx;
					font-weight: 600;
				}
			}

			.text {
				font-family: PingFangSC, PingFang SC;
				font-weight: 400;
				font-size: 31rpx;
				color: #333333;
				line-height: 60rpx;
			}

			.btn {
				background: linear-gradient(136deg, #FFFFFF 0%, #FFE8C2 100%);
				box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(78, 28, 100, 0.43);
				border-radius: 8rpx;
				font-family: STHeiti;
				font-size: 35rpx;
				color: #333333;
				height: 88rpx;
				text-align: center;
				line-height: 88rpx;
				letter-spacing: 1px;
				margin-top: 80rpx;

				image {
					width: 48rpx;
					margin-left: 34rpx;
					vertical-align: middle;
				}
			}
		}
	}
</style>