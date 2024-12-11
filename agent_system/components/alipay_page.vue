<template>
	<view class="board">
		<view class="box">
			<view class="nav flex flex-start">
				<view class="back" @click="navigate({pageName:'choose_pay'})">充值中心</view>
				<image src="/static/arrow_right_black.png" mode="widthFix"></image>
				<view class="curre">支付宝支付</view>
			</view>
			<view class="in_box">
				<view class="left">
					<view class="top">
						<view class="line flex flex-start">
							<view class="logo">
								<image src="/static/ic_pay_ali.png" mode="widthFix"></image>
							</view>
							<view class="text">我的收银台</view>
						</view>
						<view class="line" style="margin-top: 30px;">
							<view class="tips" style="margin-bottom: 20px;">正在使用即时到账交易，交易将在5天23小时后关闭，请及时付款！</view>
							<view class="text flex flex_btween">
								<view class="tips">充值：余额充值 订单号：89783422343657632511</view>
								<view class="price flex flex-start">
									<image src="/static/ic_yen.png" mode="widthFix"></image>
									<text>100</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="right">
					<view class="right_bot flex flex_btween">
						<view class="bot_left">
							<view class="title">支付方式</view>
							<view class="method">
								<image src="/static/ic_logo_ali.png" mode="widthFix"></image>
								<text>支付宝</text>
							</view>
							<view class="code_wrap">
								<view class="code">
									<image src="/static/code.png" mode="widthFix"></image>
								</view>
								<view class="tips">请打开手机支付宝，扫一扫完成支付</view>
							</view>
						</view>
						<view class="bot_right">
							<image src="/static/scan_ali.png" mode="widthFix"></image>
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
			return {};
		},
		created() {},
		methods: {
			navigate(obj) {
				this.setPageName(obj)
				this.$emit("getPageName", obj)
			},
			choosePayMethod(item) {
				this.currentPay = item
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
					font-size: 16px;
					color: rgba(0, 0, 0, 0.95);
					margin-bottom: 15px;

					&:nth-child(2) {

						.text {
							.tips {
								font-size: 16px;
								color: rgba(0, 0, 0, 0.85);
							}

							.price {
								font-family: 'Times New Roman',
									Times,
									serif;
								font-weight: 800;
								font-size: 26px;
								color: #226FF9;
							}

						}
					}

					.logo {
						position: relative;
						padding-right: 20px;
						margin-right: 20px;

						image {
							width: 160px;
						}

						&::after {
							content: "";
							width: 2px;
							height: 50%;
							position: absolute;
							top: 50%;
							right: 0;
							transform: translateY(-50%);
							background: #ccc;
						}
					}

					.text {
						font-size: 26px;
						color: rgba(0, 0, 0, 0.85);

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
							background: #06B4FD;
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