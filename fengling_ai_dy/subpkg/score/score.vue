<template>
	<view class="balance">
		<!-- 自定义导航 -->
		<view class="single_page" v-if="ifSingle">
			<image :src="imgUrl+'/worker/single_page.png'" mode="widthFix" style="width: 100%;"></image>
		</view>
		<view v-else>
			<u-navbar title="积分管理" @rightClick="rightClick" :autoBack="true" bgColor="#F7F8FA"
				titleStyle="color: #010101;font-size: 31rpx;">
				<view class="u-nav-slot" slot="left"
					style="width:57rpx;height:57rpx;text-align: center;line-height: 57rpx;border:1px solid #C5C6CB;border-radius: 50%;">

					<u-icon name="arrow-left" size="19" color="#4E4E52"
						custom-style="display: inline-block;line-height: 57rpx;margin:0 auto;left:-2rpx;"></u-icon>
				</view>
			</u-navbar>
			<view class="cont" :style="{marginTop:marginTop+tabMargin+'px'}">
				<view class="top">
					<view class="top_line">
						<view class="tit">当前积分</view>
						<view class="count flex">
							<image :src="imgUrl+'/worker/new/ic_score.png'" mode="widthFix"
								style="width:44rpx;margin-right: 16rpx;">
							</image>
							<text>{{balance.total_amount}}</text>
						</view>
					</view>
					<view class="middle_line flex flex_btween">
						<view class="right" @click="open">充值积分</view>
						<view class="left" @click="toRule"><u-icon name="question-circle" color="#333333"
								size="22"></u-icon></view>

					</view>
				</view>
				<!-- <view class="tabs">
					<u-tabs :list="tabList" @click="click"></u-tabs>
				</view> -->
				<image :src="imgUrl+'/worker/new/score_text_icon.png'" mode="heightFix"
					style="height:25px;margin-top:15px;">
				</image>
				<view class="record">
					<scroll-view scroll-y="true" :style="{height:scrollHeight+'px'}" @scrolltolower="scrolltolower">
						<view class="item flex flex_btween" v-for="(item,index) in list" key="index"
							v-if="list.length>0">
							<view class="left">
								<view class="remark">{{item.description}}</view>
								<view class="time">{{item.create_time}}</view>
							</view>
							<view class="right num">
								<text
									:class="item.direction== 'income'?'green':'red'">{{item.direction== 'income'?"+":"-"}}</text>
								{{item.change_amount}}
							</view>
						</view>
						<view class="empty" v-if="list.length==0">
							<image :src="imgUrl+'/worker/no_data.png'" mode="widthFix"></image>
						</view>
					</scroll-view>
				</view>
			</view>
			<view class="mask" v-show="showMask">
				<view class="inner">
					<image :src="imgUrl+'/worker/tx_close.png'" mode="widthFix" @click="close"></image>
					<view class="title">积分充值</view>
					<view class="tx_wrap">
						<view class="tx_inner">
							<view class="tx_line">
								<view class="tx_tit">兑换积分</view>
								<view class="input_wrap flex flex_btween">
									<image :src="imgUrl+'/worker/new/ic_score.png'" mode="widthFix"
										style="width:44rpx;">
									</image>
									<input type="text" value="10" placeholder="请输入提现金额"
										style="padding-left: 16rpx;box-sizing: border-box;" disabled />
									<text
										style="font-weight: 400;font-size: 29rpx;color: #333333;white-space: nowrap;">积分</text>
								</view>
								<view class=" tips">积分用于报名精选工作，报名1次扣除2.5个积分</view>
							</view>
							<image :src="imgUrl+'/worker/new/score_icon.png'" mode="widthFix"></image>
						</view>

					</view>
					<view class="tx_btn">
						<view class="btn" @click="confirm">立即支付 9.9元</view>
						<view class="tips" @click="toRule"><text>补充说明</text></view>
					</view>
				</view>
			</view>
		</view>
		<myModal ref="myModal">
		</myModal>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		data() {
			return {
				ifSingle: app.globalData.scene == 1154 ? true : false,
				showMask: false,
				amount: "",
				name: "",
				imgUrl: app.globalData.baseImageUrl,
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				scrollHeight: 0,
				list: [],
				balance: {
					"total_amount": "0",
					"available_amount": "0",
					"frozen_amount": "0"
				},
				currentPage: 1,
				pagination: {

				}
				// tabList: [{
				// 	name: "今日"
				// }, {
				// 	name: "昨日"
				// }, {
				// 	name: "本月"
				// }, {
				// 	name: "今日"
				// }]
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
			if (this.isLogin()) {
				let data = await this.getElementInfo()
				console.log("data", data)
				if (data) {
					this.scrollHeight = app.globalData.systemHeight - data.bottom - 60
				}
			} else {
				uni.reLaunch({
					url: "/pages/index/index"
				})
			}

			this.getList()

		},
		methods: {
			getElementInfo() {
				let _this = this
				return new Promise((resolve) => {
					let info = uni.createSelectorQuery().select(".top");
					info.boundingClientRect(function(data) { //data - 各种参数
						resolve(data)
					}).exec()
				})
			},
			getList() {
				let url = "/worker/balance-changes?page=" + this.currentPage + "&page_size=15"
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = this.list.concat(res.data.list)
						this.pagination = res.data.pagination
						this.balance = res.data.balance
					}
				})
			},
			scrolltolower() {
				if (this.currentPage < this.pagination.pageCount) {
					this.currentPage++
					this.getList()
				} else {
					uni.showToast({
						title: "到底啦~",
						icon: "none",
						duration: 2000
					})
				}
			},
			open() {
				this.showMask = true
				// if (Number(this.balance.available_amount) >= 10) {
				// 	this.showMask = true
				// } else {
				// 	this.$refs.myModal.showModal({
				// 		title: "可用余额≥10元，才可提现。",
				// 		showCancel: false,
				// 		confirmText: "知道了"
				// 	})
				// }

			},
			close() {
				this.showMask = false
			},
			toRule() {
				uni.navigateTo({
					url: "/subpkg/score_rule/score_rule"
				})
			},
			confirm() {
				// this.$request("/worker/withdraw", data, "POST").then(res => {
				// 	if (res.code == 0) {
				// 		this.$refs.myModal.showModal({
				// 			title: "余额提现已申请， 将在24小时内到账微信零钱。",
				// 			showCancel: false,
				// 			confirmText: "知道了"
				// 		})
				// 		this.close()
				// 	}
				// })
			}
		}
	}
</script>

<style lang="scss">
	::v-deep .input-placeholder {
		font-weight: 400;
		font-size: 29rpx;
		color: #7E7E7E !important;
		text-shadow: none;
	}

	.empty {
		text-align: center;

		image {
			width: 100%;
		}
	}

	.mask {
		box-sizing: border-box;

		.inner {
			width: calc(100% - 96rpx);
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			border-radius: 36rpx;
			background: #fff;
			position: relative;
			padding-top: 30rpx;
			box-sizing: border-box;

			&>image {
				width: 50rpx;
				position: absolute;
				z-index: 99;
				top: 8rpx;
				right: 8rpx;
			}

			.title {
				margin: 0 0 30rpx 0;
				font-weight: 600;
				font-size: 38rpx;
				color: #282319;
				padding: 0 84rpx;
				box-sizing: border-box;

			}

			.tx_wrap {
				padding: 0rpx 38rpx;
				box-sizing: border-box;

				.tx_inner {
					background: url($back-ground-url+'/worker/tx_dark_bg.png') no-repeat;
					background-size: 100% 100%;
					color: #F6EAD8;
					padding: 70rpx 46rpx 100rpx 46rpx;
					box-sizing: border-box;
					position: relative;

					&>image {
						width: 170rpx;
						position: absolute;
						top: -90rpx;
						right: -15rpx;
					}
				}

				.tx_line:nth-child(1) {
					margin-bottom: 38rpx;
				}

				.tx_tit {
					font-size: 29rpx;
					margin-bottom: 10rpx;
					color: #333333;
				}

				.input_wrap {
					height: 96rpx;
					background: rgba(255, 255, 255, 0.5);
					border-radius: 8rpx;
					padding: 0 36rpx;
					box-sizing: border-box;

					text {
						font-size: 29rpx;
						color: #333333;
						font-weight: 900;
						font-size: 46rpx;
					}

					input {
						font-family: Arial, Arial;
						font-weight: 900;
						font-size: 46rpx;
						color: #333333;
						text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
					}
				}

				.tips {
					font-size: 23rpx;
					color: #4A2612;
					margin-top: 10rpx;
				}
			}

			.tx_btn {
				background: url($back-ground-url+'/worker/tx_b_bg.png') no-repeat;
				background-size: 103% 103%;
				background-position: center bottom;
				padding: 71rpx 67rpx;
				box-sizing: border-box;
				margin-top: -90rpx;
				position: relative;

				.btn {
					height: 96rpx;
					line-height: 96rpx;
					background: #EFC562;
					border-radius: 48rpx;
					font-weight: 600;
					font-size: 31rpx;
					color: #282319;
					text-align: center;
					margin-top: 35rpx;
				}

				.tips {
					text-align: center;
					font-size: 23rpx;
					color: #7E7E7E;
					margin-top: 10rpx;

					text {
						color: #333333;
					}
				}
			}
		}
	}

	.balance {
		background: #fff;
		color: #333333;
		padding: 0 28rpx;
		box-sizing: border-box;

		.cont {
			padding-top: 20rpx;

			.top {
				height: 310rpx;
				padding: 20rpx 30rpx 53rpx 30rpx;
				box-sizing: border-box;
				background: url($back-ground-url+'/worker/new/score_banner_bg.png') no-repeat;
				background-size: 100% 100%;
				border-top-left-radius: 36rpx;
				border-top-right-radius: 36rpx;

				.count {
					font-family: Arial, Arial;
					font-weight: 900;
					font-size: 50rpx;
					text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
				}

				.tit {
					font-weight: 400;
					font-size: 31rpx;
					color: #333333;
					margin-bottom: 16rpx;
				}

				.top_line {
					padding: 30rpx;
					box-sizing: border-box;
					position: relative;



					.count {
						font-weight: 600;
						font-size: 58rpx;
						color: #4A2612;
						font-family: Arial;
					}

				}

				.middle_line {
					padding: 0 30rpx;
					box-sizing: border-box;

					.left {
						.count {
							font-weight: 900;
							font-size: 50rpx;
							color: #333333;
							text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
						}
					}

					.right {
						background: rgba(255, 255, 255, 0.3);
						border-radius: 63rpx;
						border: 1rpx solid #333333;
						font-size: 31rpx;
						color: #333333;
						padding: 10rpx 30rpx;
						box-sizing: border-box;
					}
				}

			}
		}
	}

	.wrap {
		padding: 12px;
	}

	.record {
		.item {
			margin-top: 20rpx;
			background: #fff;
			border-radius: 16rpx;
			padding: 38rpx 26rpx;
			box-sizing: border-box;

			.left {
				.remark {
					font-weight: 600;
					font-size: 29rpx;
					color: #333333;
					margin-bottom: 8rpx;
				}

				.time {
					font-weight: 400;
					font-size: 23rpx;
					color: #5B5B5B;
				}
			}

			.right {
				&.num {
					font-family: Arial;
					font-weight: 900;
					font-size: 35rpx;
					text-align: right;

					text {
						display: inline-block;
						margin-right: 15rpx;
					}
				}

				.red {
					color: #CC0002;
				}

				.green {
					color: #52C41A;
				}
			}

		}
	}
</style>