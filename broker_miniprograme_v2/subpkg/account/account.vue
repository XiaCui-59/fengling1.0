<template>
	<view class="content">
		<customHeader :title="pageName" :showBack="true" :headHeight="headerHeight"></customHeader>
		<view class="cont" :style="{marginTop:marginTop+'px'}">
			<view class="top_area" :style="{top:marginTop+'px'}">
				<!-- 顶部账户信息 -->
				<view class="account">
					<!-- <image :src="imgUrl+'/broker/account_bg.png'" mode="widthFix">
					</image> -->
					<view class="top_line">
						<view class="icon flex flex-start">
							<image :src="imgUrl+'/broker/ic_finance.png'" mode="widthFix"></image>
							<view class="tit">账户余额</view>
						</view>
						<view class="bot flex flex_btween">
							<view class="flex flex-start">
								<view class="bold">{{accountInfo.amount}}</view>
								<view class="text">元</view>
							</view>
							<view class="recharge_btn" @click="toRecharge">充值</view>
						</view>

					</view>
				</view>
				<!-- 收支统计 -->
				<view class="statics_wrap">
					<view class="tit">收支统计</view>
					<view class="statics flex flex_btween">
						<view class="stat_item">
							<view class="subtit">充值金额</view>
							<view class="text flex flex-start">
								<view class="count yellow">{{staticData.recharge_amount}}</view>
								<view class="period">元</view>
							</view>
						</view>
						<view class="stat_item">
							<view class="subtit">支出金额</view>
							<view class="text flex flex-start">
								<view class="count green">{{staticData.bill_amount}} </view>
								<view class="period">元</view>
							</view>
						</view>
					</view>
				</view>

			</view>
			<view class="box" :style="{marginTop:boxTop+'px'}">
				<!-- 订单明细筛选区 -->
				<view class="sele_wrap flex flex_btween">
					<view class="tit">订单明细</view>
					<view class="date flex flex_end">
						<uni-datetime-picker ref="picker" v-model="range" type="daterange" rangeSeparator="至"
							@change="changeTime" />
						<u-icon name="close-circle-fill" size="17" v-if="range[0]" @click="clearTime"></u-icon>
					</view>

				</view>
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y"
					:style="{height:scrollHeight+'px'}" @scrolltolower="lower">
					<view class="item" v-for="(item,index) in list" :key="index">
						<view class="top flex flex_btween">
							<view class="left flex flex-start">
								<image
									:src="item.type=='recharge'?imgUrl+'/broker/ic_mini_recharge.png':imgUrl+'/broker/ic_mini_buy.png'"
									mode="widthFix"></image>
								<text :class="item.type">【{{item.type=="recharge"?"余额充值":"购买简历"}}】</text>
							</view>
							<view class="right">{{item.create_time}}</view>
						</view>
						<view class="bot flex flex_btween">
							<view class="left">
								<view class="code">订单编号：{{item.id}}</view>
								<view class="name">{{item.remark}}</view>
							</view>
							<view class="right">{{item.amount}}</view>
						</view>
					</view>
					<view class="empty" v-if="list.length == 0">
						<image :src="imgUrl+'/broker/empty.png'" mode="widthFix"></image>
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
				staticData: {
					bill_amount: 0,
					recharge_amount: 0
				},
				imgUrl: app.globalData.baseImageUrl,
				refreshStatus: true,
				isPulling: false,
				pageName: "钱包余额",
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				range: ["", ""],
				scrollHeight: 0,
				boxTop: 0,
				headerHeight: app.globalData.topHeight,
				currentPage: 1,
				list: [],
				pagination: {},
				accountInfo: {
					name: "",
					account: 0
				}

			}
		},
		components: {
			tabbar,
			customHeader
		},
		async onReady() {
			let topArea = await this.getElementInfo(".top_area")
			if (topArea) {
				this.boxTop = topArea.bottom
			}
			let seleWrap = await this.getElementInfo(".sele_wrap")
			if (seleWrap) {
				this.scrollHeight = app.globalData.systemHeight - this.boxTop - seleWrap.height - 15
			}
			if (this.isLogin()) {
				this.getInfo()
				this.getList()
				this.getStatics()
			}
		},
		methods: {
			clearTime() {
				this.list = []
				this.range[0] = ""
				this.range[1] = ""
				this.$refs.picker.clear()
				this.getList()
			},
			toRecharge() {
				uni.navigateTo({
					url: "/subpkg/recharge/recharge"
				})
			},
			changeTime() {
				this.list = []
				this.getList()
				this.getStatics()
			},
			getElementInfo(className) {
				let _this = this
				return new Promise((resolve) => {
					let info = uni.createSelectorQuery().select(className);
					info.boundingClientRect(function(data) { //data - 各种参数
						resolve(data)
					}).exec()
				})
			},
			getInfo() {
				this.$request("/broker/company/amount").then(res => {
					if (res.code == 0) {
						this.accountInfo = res.data
					}
				})
			},
			getList() {
				let url = "/broker/company/amount-logs?page=" + this.currentPage +
					"&create_time_start=" + this.range[0] + "&create_time_end=" + this.range[1]
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = this.list.concat(res.data.list)
						this.pagination = res.data.pagination
					}
				})
			},
			getStatics() {
				let url = "/broker/income-and-expense-statistics?create_time_start=" + this.range[0] +
					"&create_time_end=" + this.range[1]
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.staticData = res.data
					}
				})
			},
			lower() {
				if (this.list.length < this.pagination.totalCount) {
					this.currentPage++
					this.getList()
				} else {
					if (this.list.length >= this.pagination.totalCount) {
						uni.showToast({
							title: "已经到底啦~",
							icon: "none",
							duration: 2000
						})
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep {
		.uni-select {
			border: none;
			background: #fff;
			height: 88rpx;
			font-size: 28rpx;
			border-radius: 8rpx;
			padding: 0 40rpx;
		}

		.uni-date {
			margin-left: 30rpx;
			margin-right: 10rpx;
		}

		.uni-date-x {
			justify-content: flex-end !important;
			font-size: 29rpx;
			color: #333333;
		}

		.uni-date-x .range-separator {
			margin: 0 10rpx;
		}

		.uni-date-x--border {
			padding: 0 !important;
		}

		.uni-date__x-input {
			flex: none !important;
		}

		.uni-icons {
			display: none;
		}

		.uni-select__input-placeholder {
			font-size: 28rpx;
		}

		.uni-date-x--border {
			height: 88rpx;
			line-height: 88rpx;
			padding: 0 40rpx;
			background: #fff;
			border-radius: 8rpx;
			box-sizing: border-box;
			border: none;
		}

		.uni-datetime-picker--btn,
		.uni-calendar-item__weeks-box .uni-calendar-item--checked {
			background: #F7BC05;
		}

		.uni-datetime-picker-btn-text {
			color: #F7BC05;
		}
	}

	.content {
		height: 100vh;
		overflow: hidden;

		.cont {
			width: calc(100% - 96rpx);
		}
	}

	.sele_wrap {
		background: #FFFFFF;
		border-top-left-radius: 19rpx;
		border-top-right-radius: 19rpx;

		.tit {
			font-weight: 600;
			font-size: 29rpx;
			color: #333333;
		}
	}

	.top_area {
		width: calc(100% - 96rpx);
		position: fixed;
		left: 48rpx;



		.statics_wrap {
			margin: 20rpx 0;
			background: #FFFFFF;
			border-radius: 19rpx;
			padding: 23rpx 20rpx;
			box-sizing: border-box;

			.tit {
				font-weight: 600;
				font-size: 29rpx;
				color: #333333;
				line-height: 40rpx;
			}

			.statics {
				margin-top: 30rpx;

				.stat_item {
					width: 50%;
					text-align: center;

					.subtit {
						font-weight: 400;
						font-size: 29rpx;
						color: #333333;
						margin-bottom: 10rpx;
					}

					.text {
						justify-content: center;

						.count {
							font-weight: 900;
							font-size: 42rpx;
						}

						.period {
							font-weight: 400;
							font-size: 23rpx;
							color: #9E9E9E;
							margin-left: 10rpx;
						}
					}

					&:nth-child(1) {
						border-right: 2rpx solid #F3F3F5;
					}
				}
			}
		}

		.account {
			position: relative;
			height: 276rpx;
			background: url($back-ground-url+'/broker/account_bg.png') no-repeat;
			background-size: 100% 100%;

			&>image {
				width: 100%;
				will-change: transform;
			}

			.top_line {
				width: 75%;
				position: absolute;
				top: 22%;
				left: 50%;
				transform: translateX(-50%);

				image {
					width: 32rpx;
					height: 32rpx;
					margin-right: 10rpx;
				}

				.tit {
					font-size: 32rpx;
					color: #333;
					font-weight: bold;
				}

				.bot {

					.recharge_btn {
						margin-top: 15rpx;
						height: 60rpx;
						line-height: 60rpx;
						width: 180rpx;
						text-align: center;
						box-sizing: border-box;
						background: #FFFFFF;
						box-shadow: 0rpx 2rpx 4rpx 0rpx #714A00;
						border-radius: 31rpx;
						font-weight: 600;
						font-size: 27rpx;
						color: #EA9900;
					}
				}

				.bold {
					font-size: 52rpx;
					color: #fff;
					font-family: Arial, Arial;
					font-weight: 900;
					text-shadow: 0px 1px 2px #000000;
					margin-right: 8rpx;
				}

				.text {
					font-size: 24rpx;
					font-family: PingFangSC, PingFang SC;
					font-weight: 400;
					color: #FFFFFF;
				}
			}

			.bot_line {
				position: absolute;
				width: 75%;
				bottom: 4%;
				left: 50%;
				transform: translateX(-50%);

				.text {
					color: #A8A8A8;
					font-size: 24rpx;
					text-align: center;
				}

				.tit {
					font-size: 28rpx;
					color: #333;
					text-align: center;
					margin-bottom: 8rpx;
				}

				.yellow {
					font-weight: 900;
					font-size: 36rpx;
					color: #F3A005;
					text-align: center;
					font-style: normal;
					margin-right: 8rpx;
				}
			}
		}

		.sele_box {

			// margin:0 20rpx 20rpx 0;
			.text {
				font-size: 28rpx;
				color: #333;
			}

			image {
				width: 26rpx;
				height: 26rpx;
				margin-left: 8rpx;
			}
		}
	}

	.box {
		background: #ffffff;
		padding: 0rpx 20rpx 23rpx 20rpx;
		box-sizing: border-box;

		.item {
			padding: 28rpx 0;
			border-top: 2rpx solid #F3F3F5;


			.top {
				font-weight: 400;
				font-size: 29rpx;

				image {
					width: 58rpx;
				}

				.left {
					.recharge {
						color: #FA7414;
					}

					.buy_offer {
						color: #4284F4;
					}
				}

				.right {
					text-align: right;
					color: #5A5A5A;
				}
			}

			.bot {
				margin-top: 28rpx;
				align-items: flex-end;

				.left {
					width: calc(100% - 170rpx);
					font-weight: 400;

					.code {

						font-size: 23rpx;
						color: #9E9E9E;
						margin-bottom: 8rpx;
					}

					.name {
						font-size: 29rpx;
						color: #333333;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}

				.right {
					width: 150rpx;
					font-weight: 600;
					font-size: 35rpx;
					color: #303030;
					flex-shrink: 0;
					text-align: right;
				}
			}
		}
	}
</style>