<template>
	<view class="content">
		<view class="custom_header" :style="{height:headHeight+'px'}">
			<view class="title" :style="{lineHeight:titleHeight+'px',height:titleHeight+'px',marginTop:headTop+'px'}">
				<view class="back" @click="back">
					<image :src="imgUrl+'/broker/back.png'" mode=""></image>
				</view>
				<!-- <view class="text">登录|注册</view> -->
			</view>
			<view class="subtit">
				<view class="hello">hello！</view>
				<view class="tips">欢迎来到灵动优聘企业端</view>
			</view>
		</view>
		<view class="box" :style="{marginTop:loginAreaTop + 'px',height:boxHeight+'px'}">
			<view class="tabs flex flex-start" :class="currentTab==0?'bg1':'bg2'">
				<view class="tab" :class="currentTab==0?'active':''" @click="changeTab(0)">验证码登录</view>
				<view class="tab" :class="currentTab==1?'active':''" @click="changeTab(1)">密码登录</view>
			</view>
			<view class="input_box">
				<view class="line">
					<view class="line_inner flex flex_btween">
						<image :src="imgUrl+'/broker/ic_login_phone.png'" mode="widthFix"></image>
						<input type="text" v-model="mobile" placeholder="请输入手机号"
							placeholder-style="font-size:28rpx;color:#9E9E9E;" />
					</view>
				</view>
				<view class="line">
					<view class="line_inner flex flex_btween">
						<view class="left flex flex-start" :style="{width:currentTab==1?'100%':'auto'}">
							<image :src="imgUrl+'/broker/ic_login_lock.png'" mode="widthFix"
								style="width:34rpx;height:40rpx;"></image>
							<input type="text" v-model="veri_code" placeholder="请输入验证码"
								placeholder-style="font-size:28rpx;color:#9E9E9E;" v-if="currentTab==0" />
							<input type="password" v-model="password" placeholder="请输入密码"
								placeholder-style="font-size:28rpx;color:#9E9E9E;" v-if="currentTab==1" />
						</view>
						<view class="get_code" :class="canSend?'':'disabled'" @click="getMessageCode"
							v-if="currentTab==0">{{tipsText}}
						</view>
					</view>

				</view>
				<!-- <view class="line" v-if="currentTab==1">
					<view class="line_inner">
						<view class="left flex flex-start">
							<image :src="imgUrl+'/broker/ic_login_lock.png'" mode="widthFix"></image>
							<input type="password" v-model="password" placeholder="请输入密码"
								placeholder-style="font-size:28rpx;color:#9E9E9E;" />
						</view>
					</view>

				</view> -->
			</view>
			<view class="btn_wrap">
				<view class="btn" v-if="currentTab == 0" @click="codeLogin">登录/注册</view>
				<view class="btn" v-if="currentTab == 1" @click="passwordLogin">登录/注册</view>
				<view class="veri" v-if="!policyStatus" @click="handlePolicy">手机号一键登录</view>
				<button class="veri" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber"
					v-if="policyStatus">手机号一键登录</button>
				<!-- <view class="veri">手机号一键登录</view> -->
			</view>
			<view class="policy flex flex-start">
				<image :src="policyStatus?imgUrl+'/broker/ic_login_checked.png':imgUrl+'/broker/ic_check_normal.png'"
					@click="checkPolicy"></image>
				<text>灵动优聘用户隐私协议</text>
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
				policyStatus: false,
				showOtherLogin: false,
				mobile: "",
				veri_code: "",
				password: "",
				currentTab: 0,
				getPhoneData: {},
				canSend: true,
				tipsText: "发送验证码",
				headHeight: app.globalData.loginHeadHeight,
				marginTop: app.globalData.marginTop,
				titleHeight: 0,
				headTop: 0,
				boxHeight: 0,
				loginAreaTop: app.globalData.loginAreaTop,
				btnBottom: app.globalData.btnBottom
			}
		},
		onLoad(param) {
			let _this = this
			let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			this.titleHeight = menuButtonInfo.height
			this.headTop = menuButtonInfo.top
			this.boxHeight = app.globalData.systemHeight - this.loginAreaTop - this.btnBottom

		},
		methods: {
			changeTab(index) {
				this.currentTab = index
			},
			checkPolicy() {
				this.policyStatus = !this.policyStatus
			},
			chooseLoginMethod() {
				this.showOtherLogin = !this.showOtherLogin
			},
			checkTab(index) {
				this.currentTab = index
			},
			handlePolicy() {
				// uni.navigateTo({
				// 	url:"/subpkg/work_detail/work_detail"
				// })
				if (!this.policyStatus) {
					uni.showToast({
						title: "请先勾选隐私协议",
						icon: "none",
						duration: 2000
					})
					return false
				} else {
					return true
				}
			},
			getOpenId() {
				let _this = this
				return new Promise(resolve => {
					uni.login({
						provider: 'weixin',
						success: (res) => {
							if (res.errMsg == 'login:ok') {
								_this.$request("/auth/broker/wechat/mini/openid", {
									code: res.code
								}, "POST").then(resp => {
									if (resp.code == 0) {
										resolve(resp.data.open_id)
									}
								})
							}
						},
						fail() {
							uni.showModal({
								title: "登录失败",
								content: "授权登录失败，将无法使用部分功能",
								showCancel: false
							})
						}
					});
				})
			},
			async getPhoneNumber(e) {
				const _that = this;
				this.getPhoneData.open_id = await this.getOpenId();
				uni.setStorage({
					key: "openid",
					data: this.getPhoneData.open_id
				})
				console.log(this.getPhoneData)
				console.log(e)
				if (e.detail.errMsg == 'getPhoneNumber:ok') {
					this.getPhoneData.code = e.detail.code;
					// this.getPhoneData.edata = e.detail.encryptedData;
					// this.getPhoneData.invite_code = uni.getStorageSync("invit_code");
					_that.$request("/auth/broker/wechat/mini/login", this.getPhoneData, "POST").then(resp => {
						if (resp.code == 0) {
							uni.showToast({
								title: "授权成功"
							})
							uni.setStorageSync("token", resp.data)
							uni.navigateBack()
						}
					})
				}
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
			codeLogin() {
				let _this = this
				if (!this.handlePolicy()) {
					return
				}
				let data = {
					"mobile": this.mobile,
					"sms_verify_code": this.veri_code
				}
				this.$request("/auth/broker/login/sms", data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: "登录成功",
							duration: 2000
						})
						uni.setStorageSync("token", res.data.token)
						uni.navigateBack()
					}
				})
			},
			passwordLogin() {
				let _this = this
				if (!this.handlePolicy()) {
					return
				}
				let data = {
					"mobile": this.mobile,
					"password": this.password
				}
				this.$request("/auth/broker/login/password", data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: "登录成功",
							duration: 2000
						})
						uni.setStorageSync("token", res.data.token)
						uni.navigateBack()
					}
				})
			},
			back() {
				uni.switchTab({
					url: "/pages/index/index"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		overflow: hidden;
	}

	.custom_header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background: url($back-ground-url+"/broker/ic_login_header.png") no-repeat;
		background-size: 100% 100%;
		overflow: hidden;
		z-index: 2;

		&>image {
			width: 100%;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 3;
		}

		.title {
			text-align: center;
			color: #fff;
			font-size: 32rpx;
			position: relative;
			font-weight: bold;
			z-index: 10;

			.back {
				position: absolute;
				left: 48rpx;
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

		.subtit {
			padding: 0 48rpx;
			margin-top: 24rpx;
			color: #FFFFFF;

			.hello {
				font-size: 72rpx;
				line-height: 100rpx;
				font-weight: bold;
			}

			.tips {
				font-size: 32rpx;
				line-height: 44rpx;
			}
		}
	}

	.box {
		width: calc(100% - 96rpx);
		margin: 0 auto;
		position: relative;
		z-index: 10;
		background: url($back-ground-url+"/broker/ic_login_bg.png") no-repeat;
		background-size: 100% 100%;
		// background-color: #fff;
		border-radius: 20rpx;
		overflow: hidden;

		.tabs {
			width: calc(100% - 10rpx);
			margin: 0 auto;
			height: 88rpx;
			line-height: 88rpx;

			&.bg1 {
				background: url($back-ground-url+"/broker/ic_login_title_bg1.png") no-repeat;
				background-size: 100% 100%;
			}

			&.bg2 {
				background: url($back-ground-url+"/broker/ic_login_title_bg2.png") no-repeat;
				background-size: 100% 100%;
			}

			.tab {
				width: 50%;
				height: 88rpx;
				text-align: center;
				line-height: 88rpx;
				font-size: 32rpx;
				color: #333;
				position: relative;

				&.active {
					color: #F7BB05;
					font-weight: bold;
				}

				&.active::after {
					content: "";
					width: 28rpx;
					height: 10rpx;
					background: url($back-ground-url+"/broker/arrow_down_yellow.png") no-repeat;
					background-size: 100% 100%;
					position: absolute;
					bottom: 0;
					left: 50%;
					transform: translateX(-50%);
				}
			}
		}

		.input_box {
			padding: 0 36rpx;
			margin-top: 50rpx;
			box-sizing: border-box;

			.line {
				height: 120rpx;
				background: #F9F9F9;
				border-radius: 8rpx;
				padding: 20rpx;
				box-sizing: border-box;
				margin-bottom: 40rpx;

				.line_inner {
					background: #fff;
					height: 100%;
					border-radius: 8rpx;

					input {
						width: calc(100% - 68rpx);
						font-size: 28rpx;
					}
				}

				&:nth-child(2) {
					.line_inner {
						background: transparent;

						.left {
							height: 100%;
							background: #fff;
						}

						.get_code {
							height: 100%;
							line-height: 80rpx;
							font-size: 28rpx;
							color: #F7BB05;
							text-align: center;
							background: #FFFFFF;
							border-radius: 4px;
							border: 1px solid #F7BB05;
							padding: 0 10rpx;
							white-space: nowrap;
						}
					}
				}

				image {
					width: 34rpx;
					height: 40rpx;
					margin-left: 30rpx;
					margin-right: 24rpx;
					flex-shrink: 0;
				}
			}
		}

		.btn_wrap {
			margin-top: 80rpx;
			padding: 0 36rpx;
			box-sizing: border-box;

			.btn {
				width: 100%;
				height: 96rpx;
				line-height: 96rpx;
				background: url($back-ground-url+"/broker/ic_login_btn_bg.png") no-repeat;
				background-size: 100% 100%;
				color: #fff;
				font-size: 30rpx;
				font-weight: bold;
				text-align: center;
				margin-bottom: 40rpx;
			}

			button {
				background-color: transparent;
				line-height: auto;
				padding-left: 0;
				padding-right: 0;
				line-height: 50rpx;

				&::after {
					border: none;
				}
			}

			.veri {
				width: 218rpx;
				height: 50rpx;
				font-size: 32rpx;
				color: #F7BB05;
				font-weight: bold;
				margin: 0 auto;
				border-bottom: 1px dashed #F7BB05;
				text-align: center;
				white-space: nowrap;
			}
		}

		.policy {
			margin-top: 150rpx;
			position: absolute;
			bottom: 60rpx;
			left: 50%;
			transform: translateX(-50%);

			image {
				width: 30rpx;
				height: 30rpx;
				margin-right: 20rpx;
				vertical-align: middle;
			}

			text {
				font-size: 28rpx;
				color: #9E9E9E;
				white-space: nowrap;
			}
		}
	}

	// .content{
	// 	position: relative;
	// 	min-height: 100vh;
	// 	.get_code{
	// 		padding:16rpx;
	// 		font-size:24rpx;
	// 		color:$base-color;
	// 		border:1px solid $base-color;
	// 		border-radius: 2px;
	// 		white-space: nowrap;
	// 		&.disabled{
	// 			color:#999;
	// 		}
	// 	}
	// 	.tabs{
	// 		margin-bottom: 30rpx;
	// 	}
	// 	.back{
	// 		image{
	// 			width: 40rpx;
	// 			height:40rpx;
	// 			margin-right: 10rpx;
	// 		}
	// 		text{
	// 			color:$base-color;
	// 			font-size: 30rpx;
	// 		}
	// 	}
	// 	.box{
	// 		width: 80%;
	// 		position: absolute;
	// 		top:50%;
	// 		left:50%;
	// 		transform: translate(-50%,-50%);
	// 		.logo{
	// 			margin-bottom: 80rpx;
	// 			text-align: center;
	// 			image{
	// 				width:80%;
	// 			}
	// 		}
	// 		.btns{
	// 			button{
	// 				padding-left: 0;
	// 				padding-right: 0;
	// 				border:1px solid $base-color;
	// 			}
	// 			.btn{
	// 				width:100%;
	// 				height:80rpx;
	// 				line-height: 80rpx;
	// 				text-align: center;
	// 				border:1px solid $base-color;
	// 				border-radius: 80rpx;
	// 				margin-bottom: 30rpx;
	// 				box-sizing: border-box;
	// 				background: transparent;
	// 				&:nth-child(1){
	// 					background: $base-color;
	// 					color:#fff;
	// 				}
	// 				&:nth-child(2){
	// 					color:$base-color;
	// 				}
	// 			}
	// 		}
	// 		.other_login{
	// 			.line{
	// 				margin-bottom:30rpx;
	// 				image{
	// 					width:50rpx;
	// 					height:50rpx;
	// 					margin-right: 16rpx;
	// 					vertical-align: middle;
	// 				}
	// 				input{
	// 					height:80rpx;
	// 					width:calc(100% - 96rpx);
	// 					border-bottom:1px solid $base-color;
	// 					padding:0 10rpx;
	// 					box-sizing: border-box;
	// 					outline: none;
	// 				}
	// 			}
	// 			.btn{
	// 				width:100%;
	// 				height:80rpx;
	// 				line-height: 80rpx;
	// 				text-align: center;
	// 				background:$base-color;
	// 				border-radius: 80rpx;
	// 				margin-top: 50rpx;
	// 				box-sizing: border-box;
	// 				color:#fff;
	// 			}
	// 		}
	// 		.policy{
	// 			text-align: center;
	// 			margin-top:150rpx;
	// 			image{
	// 				width:30rpx;
	// 				height:30rpx;
	// 				margin-right: 20rpx;
	// 				vertical-align: middle;
	// 			}
	// 			text{
	// 				font-size: 28rpx;
	// 				color:$base-color;
	// 			}
	// 		}
	// 	}
	// }
</style>