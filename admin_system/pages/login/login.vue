<template>
	<view class="content">
		<view class="right">
			<view class="header flex flex-start">
				<image src="/static/logo.png" mode="widthFix" style="width: 60px;height:60px;margin-right:5px;">
				</image>
				<text style="font-size: 22px;">灵动优聘后台管理员系统</text>
				<!-- <image src="/static/login_title.png" mode="heightFix" style="height:27px;"></image> -->
			</view>
			<view style="margin-top: 15px;font-size: 35px;font-weight: 600;">
				欢迎来到灵动优聘！
				<!-- <image src="/static/login_welcome.png" mode="heightFix" style="height:42px;"></image> -->
			</view>
			<view class="tabs flex flex_start">
				<view class="tab" :class="currentTab==0?'active':''" @click="changeTab(0)">账号密码</view>
				<!-- <view class="tab" :class="currentTab==1?'active':''" @click="changeTab(1)">短信验证码</view> -->
			</view>
			<view class="list">
				<view class="list-call">
					<image class="img" src="/static/phone.png"></image>
					<input class="biaoti" v-model="mobile" type="text" placeholder="输入手机号码" />
				</view>
				<view class="list-call" v-if="currentTab==0">
					<image class="img" src="/static/shilu-login/block.png"></image>
					<input class="biaoti" v-model="password" type="text" placeholder="请输入密码" password="true"
						@confirm="bindLogin" />
				</view>
				<view class="list-call" v-if="currentTab==1">
					<image class="img" src="/static/shilu-login/veri.png"></image>
					<input class="biaoti" v-model="verCode" type="text" placeholder="请输入短信验证码" @confirm="bindLogin" />
					<view class="get_code" :class="canSend?'':'disabled'" @click="getMessageCode">{{tipsText}}
					</view>
				</view>
			</view>

			<view class="dlbutton" hover-class="dlbutton-hover" @tap="bindLogin">
				<text>登录/注册</text>
			</view>
			<!-- <view class="tips"><text class="mark" @click="toRegister">注册账号</text></view> -->
		</view>
		<botFooter></botFooter>
	</view>
</template>

<script>
	import botFooter from "@/components/bot_footer.vue"
	import {
		mapState,
		mapMutations,
	} from 'vuex'
	export default {
		data() {
			return {
				mobile: '',
				password: '',
				verCode: '',
				codeImage: "",
				captchaId: "",
				currentTab: 0,
				canSend: true,
				tipsText: "获取短信验证码"
			};
		},
		components: {
			botFooter
		},
		onShow() {
			let token = uni.getStorageSync("token")
			if (!token) {
				// this.getImageCode()
				return
			} else {
				this.$request("/admin/info").then(res => {
					if (res.code == 0) {
						uni.navigateTo({
							url: "/pages/index/index?page_name=project_list&status=all"
						})
					}
				})
			}
		},
		methods: {
			changeTab(index) {
				this.currentTab = index
			},
			getMessageCode() {
				let _this = this
				if (!this.canSend) {
					uni.showModal({
						title: "验证码已发送，请稍后重试",
						showCancel: false
					})
					return
				}
				let data = {
					mobile: this.mobile
				}
				this.$request("/auth/send-sms-verify-code", data, "POST").then(res => {
					if (res.code == 0) {
						this.canSend = false
						let count = 60
						this.tipsText = count + "s"
						let t = setInterval(function() {
							if (count > 0) {
								count--
								_this.tipsText = count + "s"
							} else {
								_this.canSend = true
								_this.tipsText = "重新获取"
								clearInterval(t)
							}
						}, 1000)
					}
				})
			},
			bindLogin() {
				// 连接到云服务器中的登录方式
				if (this.currentTab == 0) {
					if (!this.password || !this.mobile) {
						uni.showToast({
							icon: 'none',
							title: '内容未填写完整'
						});
						return;
					}
				} else {
					if (!this.verCode || !this.mobile) {
						uni.showToast({
							icon: 'none',
							title: '内容未填写完整'
						});
						return;
					}
				}

				var data;
				var url;
				if (this.currentTab == 0) {
					// 账号密码登录
					data = {
						"mobile": this.mobile,
						"password": this.password
					}
					url = "/auth/admin/login"
				} else {
					// 验证码登录
					data = {
						"mobile": this.mobile,
						"sms_verify_code": this.verCode
					}
					url = "/auth/broker/login/sms"
				}
				this.$request(url, data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							icon: "none",
							title: "登录成功"
						})
						uni.setStorage({
							key: "token",
							data: res.data.token,
							success() {
								uni.navigateTo({
									url: "/pages/index/index?page_name=project_list&status=all"
								})
							}
						})
					}
				})

			},
			toReset() {
				uni.navigateTo({
					url: "/pages/resetpassword/resetpassword"
				})
			}
		}
	}
</script>

<style lang="scss">
	.footer {
		background: transparent;
		color: #fff;
	}

	.tips {
		font-size: 14px;
		margin-top: 15px;
		text-align: center;

		.mark {
			color: #226FF9;
			display: inline-block;
			margin-left: 10px;
			margin-right: 25px;
			cursor: pointer;
		}
	}

	.content {
		width: 100%;
		height: 100vh;
		background: url("/static/login_bg.jpg") no-repeat;
		background-size: cover;
		background-position: right top;
		position: relative;

		.right {
			width: 500px;
			padding: 30px 20px;
			box-sizing: border-box;
			border-radius: 10px;
			// margin-left: 196px;
			// margin-top: 128px;
			position: absolute;
			top: 50%;
			left: 10%;
			transform: translateY(-50%);
			background: rgba(255, 255, 255, .8);
			box-shadow: 3px 3px 20px 3px #a8b6c6;

			.tabs {
				margin-top: 40px;

				.tab {
					height: 40px;
					line-height: 40px;
					padding: 0 10px;
					border-top-left-radius: 4px;
					border-top-right-radius: 4px;
					cursor: pointer;

					&.active {
						color: #226FF9;
						border-bottom: 2px solid #226FF9;
						// background: $base-color;
						// color: #fff;
					}
				}
			}

			input:-internal-autofill-selected {
				background-color: transparent !important;
			}
		}

		.mask {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: rgba(0, 0, 0, .4);

			.inner {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				background: #fff;
				border-radius: 10px;
				box-sizing: border-box;
				max-width: 1200px;
				min-width: 1024px;

				.left {
					width: 60%;

					image {
						width: 100%;
					}
				}


			}
		}
	}

	.header {
		font-size: 50px;
	}


	.list {
		display: flex;
		flex-direction: column;
		padding-top: 20px;
		/* padding-left: 70upx;
		padding-right: 70upx; */
	}

	.list-call {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 40px;
		color: #333333;
		width: 100%;
		text-align: center;
		margin-bottom: 24px;
		margin-top: 0;
		border-radius: 4px;
		border: 1px solid #D9D9D9;
		// background-color: #F6F4FC;
		border-radius: 6upx;
		position: relative;

		&:nth-child(3) {
			width: calc(100% - 160px);
		}

		.codeimg {
			width: 160px;
			position: absolute;
			top: 50%;
			left: 100%;
			transform: translate(15px, -50%);
			background: #fff;
		}

	}

	.list-call .img {
		width: 25px;
		height: 25px;
		padding: 0 10px;
	}

	.list-call .biaoti {
		flex: 1;
		text-align: left;
		font-size: 16px;
		line-height: 50px;
		height: 40px;
		min-height: 40px;
		padding-left: 5px;
		// background-color: rgb(232, 240, 254);
		border-radius: 6px;
	}

	.get_code {
		padding: 0 5px;
		font-size: 14px;
		color: $base-color;
		cursor: pointer;

		&.disabled {
			color: #999;
		}
	}

	.dlbutton {
		color: #FFFFFF;
		font-size: 16px;
		width: 100%;
		height: 40px;
		border-radius: 4px;
		background: #226FF9;
		font-weight: bold;

		&:hover {
			cursor: pointer;
			background: #3da5ff;
		}

		align-items: center;
		display: flex;
		justify-content: center;

		line-height: 40px;
		text-align: center;
		/* margin-left: auto;
		margin-right: auto; */
		margin-top: 30px;
	}

	.dlbutton:hover {
		background-color: $base-color;
	}

	.xieyi {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 22upx;
		margin-top: 80upx;
		color: #FFA800;
		text-align: center;
		height: 40upx;
		line-height: 40upx;
	}

	.xieyi text {
		font-size: 22upx;
		margin-left: 15upx;
		margin-right: 15upx;
	}
</style>