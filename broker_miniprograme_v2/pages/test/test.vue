<template>
	<view class="content">
		<customHeader :title="pageName" :showBack="true" :bgImage="imgUrl+'/broker/bg_2.png'"
			:headHeight="headerHeight"></customHeader>
		<view class="cont" :style="{marginTop:marginTop+tabMargin+'px'}">
			<view class="box" :style="{top:marginTop+tabMargin+'px'}">
				<view class="wrap">
					<view class="title">充值到钱包</view>
					<u--input placeholder="请输入充值金额" size="large" prefixIcon="rmb"
						prefixIconStyle="font-size: 22px;color: #303030;font-weight:900;" border="none" :value="mount"
						fontSize="38rpx"></u--input>
					<view class="item flex flex_btween"
						style="flex-wrap: wrap;margin-top: 19rpx;padding-top:19rpx;border-top:1px solid #F3F3F5">
						<view class="u-page__tag-item" v-for="(item, index) in priceList" :key="index">
							<u-tag :text="item.text" :plain="item.value != currentPrice.value" type="warning"
								borderColor="transparent" @click="radioClick(item)">
							</u-tag>
						</view>
					</view>
					<view class="btns flex flex_btween">
						<view class="btn sure" :class="showActive?'active':''" @click="confirmSet">确认</view>
					</view>
				</view>

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
				mount: "",
				priceList: [{
						value: 100,
						text: "100元"
					},
					{
						value: 200,
						text: "200元"
					},
					{
						value: 300,
						text: "300元"
					}, {
						value: 500,
						text: "500元"
					}, {
						value: 1000,
						text: "1000元"
					}, {
						value: 2000,
						text: "2000元"
					}
				],
				currentPrice: {},
				imgUrl: app.globalData.baseImageUrl,
				pageName: "充值中心",
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				scrollHeight: 0,
				boxTop: 0,
				headerHeight: app.globalData.topHeight,
			}
		},
		components: {
			tabbar,
			customHeader
		},
		onLoad() {
			let _this = this
		},
		methods: {
			radioClick(item) {
				this.currentPrice = item
			},
			async confirmSet() {
				// 获取订单数据
				let _this = this
				if (!this.amount) {
					uni.showToast({
						title: "未输入金额",
						icon: "error",
						duration: 2000
					})
					return
				}
				let orderId = await this.getOrderId()
				let orderParams = await this.getOrderParams(orderId)
				uni.requestPayment({
					"appId": orderParams.appId,
					"timeStamp": orderParams.timeStamp, //时间戳
					"nonceStr": orderParams.nonceStr, //随机字符串
					"package": orderParams.package, //prepay_id
					"signType": orderParams.signType, //签名算法MD5
					"paySign": orderParams.paySign, //签名s,
					success() {
						uni.showModal({
							title: "支付成功",
							showCancel: false,
							success(res) {
								if (res.confirm) {
									_this.getInfo()
								}
							}
						})
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
			},
			getOrderId() {
				let _this = this
				return new Promise(resolve => {
					// 获取订单数据接口
					let url = "/worker/vip-order"
					_this.$request(url, {}, "POST").then(res => {
						if (res.code == 0) {
							resolve(res.data.order_id)
						}
					})
				})
			},
			getOrderParams(id) {
				let _this = this
				return new Promise(resolve => {
					// 获取订单数据接口
					let url = "/worker/order/" + id + "/pay"
					_this.$request(url, {}, "POST").then(res => {
						if (res.code == 0) {
							resolve(res.data.wechat_mini_program)
						}
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep {
		.u-page__tag-item {
			width: 32%;
			text-align: center;
			margin-right: 2%;
			margin-bottom: 20rpx;

			background: rgba(247, 188, 5, .1);
			border-radius: 4rpx;


			&:nth-child(3n) {
				margin-right: 0;
			}
		}

		.u-tag--medium {
			font-weight: 600;
			color: #F7BC05;
			height: 88rpx !important;
			line-height: 88rpx !important;
			padding: 0 !important;
		}

		.u-tag__text--medium {
			font-size: 35rpx !important;
		}

		.u-tag {
			display: block !important;
			font-size: 28rpx;
		}
	}

	.box {
		position: fixed;
		width: calc(100% - 96rpx);
		left: 48rpx;
		z-index: 3;

		.wrap {
			padding: 50rpx 50rpx 80rpx 50rpx;
			background: url($back-ground-url+'/broker/recharge_bg.png') no-repeat;
			background-size: 100% 100%;
			box-sizing: border-box;

			.title {
				font-weight: 400;
				font-size: 29rpx;
				color: #333333;
				margin-bottom: 60rpx;
				text-align: center;
			}
		}

		.btns {
			margin-top: 76rpx;
			margin-bottom: 40rpx;

			.btn {
				width: 100%;
				height: 88rpx;
				line-height: 88rpx;
				font-size: 30rpx;
				border-radius: 8px;
				text-align: center;
				margin-top: 0;
				background: #F7BC05;
				box-shadow: 0rpx 2rpx 4rpx 0rpx rgba(0, 0, 0, 0.15);
				border-radius: 15rpx;
				color: #fff;
			}
		}
	}
</style>