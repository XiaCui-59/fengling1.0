<template>
	<view class="card_recharge" @click="recharge">
		<view class="top flex flex_btween">
			<view class="top_left">
				<view class="tit">温馨提醒,当前积分不足</view>
				<view class="text">精选工作岗位只需{{jobNeedCredit}}积分，即可报名</view>
			</view>
			<image :src="imgUrl+'/worker/new/card_ic_jinbi.png'" mode="widthFix"></image>
		</view>
		<view class="bot_wrap">
			<view class="bot">
				<view class="flex flex_start">
					<view class="left flex">
						<image :src="imgUrl+'/worker/new/card_ic_zan.png'" mode="widthFix"
							style="margin-left:0;margin-right: 8rpx;"></image>
						<view class="text">精选工作</view>
					</view>
					<view class="name">{{sureJobName}}</view>
				</view>
				<view class="sure_btn">立即支付
					{{creditSeries[0].discounted_price}}元（{{creditSeries[0].exchange_credit}}积分）
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from "vuex"
	const app = getApp();
	export default {
		name: "chat_card_recharge",
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
				creditSeries: [],
				jobNeedCredit: 0,
				currentPage: 1
			};
		},
		computed: {
			...mapState(["sureJobName"])
		},
		created() {
			this.getCreditSeries()
			this.getCredit()
		},
		methods: {
			async recharge() {
				let _this = this
				let orderId = await this.creatOrder()
				if (orderId) {
					let url = "/worker/credit/" + orderId + "/pay"
					this.$request(url, {}, "POST").then(res => {
						if (res.code == 0) {
							let orderParams = res.data.wechat_mini_program
							uni.requestPayment({
								"appId": orderParams.appId,
								"timeStamp": orderParams.timeStamp, //时间戳
								"nonceStr": orderParams.nonceStr, //随机字符串
								"package": orderParams.package, //prepay_id
								"signType": orderParams.signType, //签名算法MD5
								"paySign": orderParams.paySign, //签名s,
								success() {
									uni.showToast({
										title: "充值成功",
										duration: 2000
									})
									// 强制恢复聊天滚动区
									_this.$emit("setScrollHeight")
									_this.$emit("sendMsg")
								},
								fail(err) {
									console.log(err, "err")
									uni.showToast({
										title: "支付已取消",
										icon: "error",
										duration: 2000
									})
								}

							})
						}
					})
				}
			},
			getCreditSeries() {
				let url = "/worker/credit/subscription?page=" + this.currentPage + "&page_size=15"
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.creditSeries = res.data.list
					}
				})
			},
			getCredit() {
				this.$request("/worker/credit/project").then(res => {
					if (res.code == 0) {
						this.jobNeedCredit = res.data.job_worth_credit
					}
				})
			},
			creatOrder() {
				let _this = this
				return new Promise(resolve => {
					let url = "/worker/credit/order"
					let data = {
						"credit_package_id": _this.creditSeries[0].id
					}
					_this.$request(url, data, "POST").then(res => {
						if (res.code == 0) {
							resolve(res.data.order_id)
						}
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	.card_recharge {
		margin-top: 30rpx;
		background: url($back-ground-url+"/worker/new/card_ic_bg.png") no-repeat;
		background-size: 100% 100%;


		.top {
			padding: 20rpx 20rpx 0 70rpx;

			.top_left {
				.tit {
					font-size: 38rpx;
					color: #FFFFFF;
					text-shadow: 0px 1px 2px rgba(32, 32, 32, 0.8);
					margin-bottom: 6rpx;
					font-family: "也字工厂";
				}

				.text {
					font-weight: 400;
					font-size: 23rpx;
					color: #333333;
				}
			}

			image {
				width: 120rpx;
			}
		}

		.bot_wrap {
			padding: 0 30rpx 30rpx 30rpx;
			margin-top: 10rpx;
		}

		.bot {
			background: #FFFFFF;
			border-radius: 15rpx;
			padding: 30rpx 25rpx 23rpx 25rpx;

			.left {
				width: 165rpx;
				padding: 6rpx 15rpx 6rpx 10rpx;
				background: rgba(239, 197, 98, 0.3);
				border-radius: 12rpx;
				margin-right: 10rpx;
				white-space: nowrap;
				flex-shrink: 0;
				box-sizing: border-box;

				.text {
					font-weight: 600;
					font-size: 23rpx;
					color: #AA691B;
				}

				image {
					width: 50rpx;
					margin-right: 6rpx;
				}
			}

			.name {
				width: calc(100% - 175rpx);
				font-weight: 600;
				font-size: 31rpx;
				color: #020202;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.sure_btn {
				height: 81rpx;
				background: #EFC562;
				box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(104, 78, 0, 0.5);
				border-radius: 15rpx;
				font-weight: 600;
				font-size: 29rpx;
				color: #282319;
				line-height: 81rpx;
				text-align: center;
				margin-top: 25rpx;
			}
		}
	}
</style>