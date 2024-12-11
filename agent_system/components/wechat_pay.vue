<template>
	<view class="board">
		<view class="box">
			<view class="nav flex flex-start">
				<view class="back" @click="navigate({pageName:'choose_pay'})">充值中心</view>
				<image src="/static/arrow_right_black.png" mode="widthFix"></image>
				<view class="curre">微信支付</view>
			</view>
			<view class="in_box">
				<view class="left">
					<view class="top">
						<view class="line flex flex-start">
							<view class="subtit">订单编号：</view>
							<view class="text">{{orderInfo.order_no}}</view>
						</view>
						<view class="line flex flex-start">
							<view class="subtit">订单金额：</view>
							<view class="text flex flex-start">
								<image src="/static/ic_yen.png" mode="widthFix"></image>
								<text>{{orderInfo.amount}}</text>
							</view>
						</view>
						<view class="line flex flex-start">
							<view class="subtit">订单时间：</view>
							<view class="text">{{orderInfo.create_time}}</view>
						</view>
						<view class="line flex flex-start">
							<view class="subtit">付款截止时间：</view>
							<view class="text">{{orderInfo.expire_time}}</view>
						</view>
					</view>
					<!-- <view class="bot">
						<view class="line">订单详情</view>
						<view class="line flex flex-start">
							<view class="tit">商品名称：</view>
							<view class="text">余额充值</view>
						</view>
						<view class="line flex flex-start">
							<view class="tit">订单编号：</view>
							<view class="text">9088783264374305734</view>
						</view>
						<view class="line flex flex-start">
							<view class="tit">应付金额：</view>
							<view class="text">&yen;800</view>
						</view>
						<view class="line flex flex-start">
							<view class="tit">充值时间：</view>
							<view class="text">2024-05-11 15:20:50</view>
						</view>
					</view> -->
				</view>
				<view class="right">
					<view class="right_bot flex flex_btween">
						<view class="bot_left">
							<view class="title">支付方式</view>
							<view class="method">
								<image src="/static/ic_pay_wx.png" mode="widthFix"></image>
								<text>微信支付</text>
							</view>
							<view class="code_wrap">
								<view class="code">
									<image :src="qrcodeUrl" mode="widthFix"></image>
								</view>
								<view class="tips">请打开手机微信，扫一扫完成支付</view>
							</view>
						</view>
						<view class="bot_right">
							<image src="/static/scan_img.png" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "commission_bill",
		data() {
			return {
				id: "",
				orderInfo: {},
				qrcodeUrl: "",
				timer: null,
			};
		},
		created() {
			let _this = this
			let paramArr = []
			if (location.href.indexOf("?") != -1) {
				paramArr = location.href.split("?")[1].split("&")
			}
			for (var i = 0; i < paramArr.length; i++) {
				if (paramArr[i].indexOf("id") != -1) {
					this.id = paramArr[i].split("=")[1]
				}
			}
			uni.showLoading({
				title: "正在拉取付款码"
			})
			this.getOrder()
			this.getCode()
			// 轮询支付结果
			this.timer = setInterval(function() {
				_this.queryStatus()
			}, 1000)
		},
		destroyed() {
			let _this = this
			console.log("组件销毁")
			clearInterval(_this.timer)
		},
		methods: {
			navigate(obj) {
				this.setPageName(obj)
				this.$emit("getPageName", obj)
			},
			getOrder() {
				let url = "/broker/order/" + this.id
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.orderInfo = res.data.order
					}
				})
			},
			getCode() {
				let url = "/broker/order/" + this.id + "/pay"
				this.$request(url, {}, "POST").then(res => {
					if (res.code == 0) {
						this.qrcodeUrl = res.data.wechat_pc.qrcode_url
						uni.hideLoading()
					}
				})
			},
			queryStatus() {
				let _this = this
				let url = "/broker/order/" + this.id + "/pay-status"
				this.$request(url, {}, "POST").then(res => {
					if (res.code == 0) {
						if (res.data) {
							//支付成功
							clearInterval(_this.timer)
							uni.showModal({
								title: "您已成功充值：" + _this.orderInfo.amount + "元。",
								showCancel: false,
								success(resp) {
									if (resp.confirm) {
										_this.navigate({
											pageName: "financial_account"
										})
									}
								}
							})
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.nav {
		.back {
			cursor: pointer;

			&:hover {
				color: #0F90FF;
			}

		}

		image {
			width: 20px;
			margin-right: 10px;
		}

		.curre {
			color: #0F90FF;
		}
	}

	.in_box {
		width: 60%;
		margin: 30px auto 0 auto;

		.left {
			.bot {
				font-weight: 400;
				font-size: 15px;
				color: #333333;
				line-height: 30px;
			}

			.top {
				.line {
					font-size: 18px;
					color: rgba(0, 0, 0, 0.95);
					margin-bottom: 15px;

					&:nth-child(2) {
						.text {
							font-family: 'Times New Roman',
								Times,
								serif;
							font-weight: 800;
							font-size: 26px;
							color: #226FF9;
						}
					}

					.subtit {}

					.text {
						image {
							width: 12px;
							margin-right: 5px;
						}
					}
				}
			}

		}

		.right {
			.right_bot {
				margin-top: 80px;
				align-items: start;

				.bot_right {
					width: 50%;

					image {
						width: 100%;
					}
				}

				.bot_left {
					width: 35%;

					.title {
						margin-top: 0;
					}

					.code_wrap {
						margin-top: 20px;

						.code {
							text-align: center;

							image {
								width: 100%;
							}
						}

						.tips {
							padding: 0 10px;
							box-sizing: border-box;
							height: 40px;
							line-height: 40px;
							margin-top: 10px;
							background: #00C800;
							border-radius: 2px;
							font-size: 12px;
							color: #FFFFFF;
							text-align: center;
						}
					}

					.method {
						text-align: center;
						padding: 10px 0px;
						border-radius: 4px;
						border: 2px solid #226FF9;
						box-sizing: border-box;
						position: relative;

						&::after {
							content: "";
							width: 20px;
							height: 20px;
							background: url("/static/ic_trangle_checked.png") no-repeat;
							background-size: 100% 100%;
							bottom: 0;
							right: 0;
							position: absolute;
						}

						image {
							width: 20px;
							margin-right: 5px;
							vertical-align: middle;
						}
					}
				}
			}

		}
	}
</style>