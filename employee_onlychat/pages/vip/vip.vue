<template>
	<view class="vip">
		<!-- 自定义导航 -->
		<u-navbar title="会员权益" @rightClick="rightClick" :autoBack="true" bgColor="rgba(66, 74, 78, 0.2)"
			titleStyle="color:#fff;font-size: 31rpx;">
			<view class="u-nav-slot" slot="left">
				<image :src="imgUrl+'/worker/back_white_circle.png'" mode="widthFix" style="width: 58rpx;"></image>
				<!-- <u-icon name="arrow-left" size="19"></u-icon> -->
			</view>
		</u-navbar>
		<view class="cont" :style="{marginTop:marginTop+tabMargin+'px'}">
			<view class="top">
				<image :src="userInfo.is_vip?imgUrl+'/worker/vip_bg2.png':imgUrl+'/worker/not_vip_bg2.png'"
					mode="widthFix"></image>
				<view class="info">
					<image class="tit"
						:src="userInfo.is_vip?imgUrl+'/worker/vip_title2.png':imgUrl+'/worker/not_vip_title2.png'"
						mode="widthFix"></image>
					<view class="mark" :class="userInfo.is_vip?'is_vip_mark':''">好工作不限次数快速匹配</view>
					<image class="vip_btn" :src="imgUrl+'/worker/vip_btn2.png'" mode="widthFix" v-if="!userInfo.is_vip">
					</image>
					<!-- 如果是会员显示到期时间 -->
					<view class="date" v-if="userInfo.is_vip">
						<view class="tit">到期时间</view>
						<view class="time">{{userInfo.vip_end_time}}</view>
					</view>
				</view>
			</view>
			<view class="middle">
				<u-grid :border="false" col="4">
					<u-grid-item v-for="(listItem,listIndex) in menu" :key="listIndex" @click="toDetail(listItem)">
						<image :src="listItem.icon" mode="widthFix" style="width:115rpx;margin-bottom: 20rpx;"></image>
						<!-- <u-icon :customStyle="{paddingTop:20+'rpx'}" :name="listItem.name" :size="22"></u-icon> -->
						<text class="grid-text" style="font-size: 29rpx;">{{listItem.title}}</text>
					</u-grid-item>
				</u-grid>
			</view>

			<view class="btn" v-if="!userInfo.is_vip" @click="buyVip">成为会员</view>
		</view>

	</view>
</template>

<script>
	const app = getApp()
	export default {
		data() {
			return {
				userInfo: {
					is_vip: false
				},
				imgUrl: app.globalData.baseImageUrl,
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				menu: [{
						icon: app.globalData.baseImageUrl + '/worker/vip_ic_1.png',
						title: '预定工作',
						url: "/pages/mine/mine"
					},
					{
						icon: app.globalData.baseImageUrl + '/worker/vip_ic_2.png',
						title: '优先匹配',
						url: "/pages/mine/mine"
					},
					{
						icon: app.globalData.baseImageUrl + '/worker/vip_ic_3.png',
						title: '工作分析',
						url: "/pages/mine/mine"
					},
					{
						icon: app.globalData.baseImageUrl + '/worker/vip_ic_4.png',
						title: '行业分析',
						url: "/pages/mine/mine"
					}
				],
			}
		},
		onLoad() {
			uni.showLoading()
			this.getInfo()
			setTimeout(function() {
				uni.hideLoading()
			}, 1000)
		},
		methods: {
			async buyVip() {
				// 获取订单数据
				let _this = this
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
					fail() {
						uni.showModal({
							title: "支付失败，请重试",
							showCancel: false
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
			},
			getInfo() {
				this.$request("/worker/profile").then(response => {
					if (response.code == 0) {
						uni.setStorageSync("userInfo", JSON.stringify(response.data))
						this.userInfo = response.data
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	.vip {
		width: 100%;
		min-height: 100vh;
		background: $base-bgcolor;
		color: #FFFFFF;
		padding: 38rpx 28rpx 0 28rpx;
		box-sizing: border-box;

		.btn {
			background: linear-gradient(180deg, #FEFCF9 0%, #E9CC8A 100%);
			border-radius: 48rpx;
			height: 96rpx;
			line-height: 96rpx;
			text-align: center;
			margin-top: 244rpx;
			font-weight: 600;
			font-size: 31rpx;
			color: $base-bgcolor;
		}

		.cont {

			.top {
				position: relative;

				&>image {
					width: 100%;
				}

				.info {
					position: absolute;
					top: 12%;
					left: 10%;

					.tit {
						width: 260rpx;
						margin-bottom: 10rpx;
					}

					.mark {
						font-size: 25rpx;
						color: #D8D8D8;
						line-height: 35rpx;
						margin-bottom: 30rpx;

						&.is_vip_mark {
							font-weight: 400;
							font-size: 25rpx;
							color: #72402B;
						}
					}

					.vip_btn {

						width: 185rpx;
					}

					.date {
						margin-top: 30rpx;

						.tit {
							font-weight: 400;
							font-size: 25rpx;
							color: #72402B;
						}

						.time {
							font-family: "HiraMaruProN", "HiraMaruProN";
							font-size: 31rpx;
							color: $base-bgcolor;
						}
					}
				}
			}

			.middle {
				margin-top: 94rpx;
			}
		}
	}
</style>