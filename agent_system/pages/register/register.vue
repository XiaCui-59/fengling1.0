<template>
	<view class="content">
		<view class="mask">
			<view class="inner">
				<view class="title">注册账号</view>
				<view class="form">
					<view class="line flex flex_start">
						<view class="tit">手机号码</view>
						<view class="input_wrap">
							<input type="text" v-model="mobile" placeholder="请输入手机号码" placeholder-style="color:#999;" />
						</view>
					</view>
					<view class="line flex flex_start">
						<view class="tit">短信验证码</view>
						<view class="input_wrap">
							<input type="text" v-model="ver_mobile_code" placeholder="请输入短信验证码"
								placeholder-style="color:#999" />
							<view class="send_code" :class="canSend?'':'disabled'" @click="getMessageCode">{{tipsText}}
							</view>
						</view>
					</view>
					<view class="line flex flex_start">
						<view class="tit">设置密码</view>
						<view class="input_wrap">
							<input type="password" v-model="password" placeholder="请输入密码"
								placeholder-style="color:#999;" />
						</view>
					</view>
					<view class="line flex flex_start">
						<view class="tit">确认密码</view>
						<view class="input_wrap">
							<input type="password" v-model="comfirmPassword" placeholder="请输入密码"
								placeholder-style="color:#999;" />
						</view>
					</view>
				</view>
				<view class="register" @click="toRegister">注册</view>
				<view class="tips">已经有账号？<text class="mark" @click="toLogin">点这里登录</text></view>
			</view>
		</view>
		<botFooter></botFooter>
	</view>
</template>

<script>
	import botFooter from "@/components/bot_footer.vue"
	export default {
		data() {
			return {
				mobile: "",
				ver_mobile_code: "",
				password: "",
				comfirmPassword: "",
				tipsText: "发送短信验证码",
				canSend: true
			}
		},
		components: {
			botFooter
		},
		onLoad() {
			// this.getImageCode()
		},
		methods: {
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
			toLogin() {
				uni.navigateTo({
					url: "/pages/login/login"
				})
			},
			toRegister() {
				let _this = this;
				let data = {
					"mobile": this.mobile,
					"sms_verify_code": this.ver_mobile_code,
					"password": this.password,
					"password_confirmation": this.comfirmPassword
				}
				this.$request("/auth/broker/register", data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: "注册成功，跳转登录界面",
							duration: 2000
						})
						setTimeout(function() {
							_this.toLogin()
						}, 2000)
					}
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

		.mark {
			color: $base-color;
			text-decoration: underline;
			display: inline-block;
			margin-left: 10px;
			cursor: pointer;
		}
	}

	.content {
		width: 100%;
		height: 100vh;
		background: url("/static/banner.png") no-repeat;
		background-size: cover;

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
				width: 500px;
				padding: 60px 40px;
				border-radius: 10px;

				.title {
					font-size: 26px;
					font-weight: 600;
					color: #333;
					margin-bottom: 70px;
					text-align: center;
				}

				.form {
					color: #333;
					margin-bottom: 50px;

					.line {
						margin: 20px 0;

						.tit {
							width: 100px;
							margin-right: 15px;
						}

						.input_wrap {
							width: calc(100% - 115px);
							position: relative;

							input {
								width: 100%;
								display: inline-block;
								height: 40px;
								line-height: 40px;
								padding: 0 10px;
								box-sizing: border-box;
								border: 1px solid #d9d9d9;
								border-radius: 4px;

							}

							image {
								width: 200px;
								margin-left: 15px;
							}

							.send_code {
								height: 40px;
								line-height: 40px;
								width: 120px;
								text-align: center;
								border-radius: 4px;
								background: $base-color;
								color: #fff;
								font-size: 14px;
								position: absolute;
								top: 0;
								right: 0;

								&:hover {
									background: #0092ff;
									cursor: pointer;
								}

								&.disabled {
									background: #f6f6f6;
									color: #999;
								}

								&.disabled:hover {
									background: #f6f6f6;
									color: #999;
									cursor: not-allowed;
								}
							}
						}
					}
				}

				.register {
					height: 40px;
					line-height: 40px;
					width: 100%;
					background: $base-color;
					color: #fff;
					text-align: center;
					margin-top: 20px;
					border-radius: 4px;

					&:hover {
						background: #0092ff;
						cursor: pointer;
					}
				}
			}
		}
	}
</style>