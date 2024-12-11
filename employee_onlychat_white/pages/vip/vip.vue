<template>
	<view class="vip">
		<view class="single_page" v-if="ifSingle">
			<image :src="imgUrl+'/worker/single_page.png'" mode="widthFix" style="width: 100%;"></image>
		</view>
		<view class="" v-else>
			<!-- 自定义导航 -->
			<u-navbar title="会员权益" @rightClick="rightClick" :autoBack="true" bgColor="#F7F8FA"
				titleStyle="color:#010101;font-size: 31rpx;">
				<view class="u-nav-slot" slot="left">
					<!-- <image :src="imgUrl+'/worker/ic_back_blank.png'" mode="widthFix" style="width: 58rpx;"></image> -->
					<u-icon name="arrow-left" size="19"></u-icon>
				</view>
			</u-navbar>
			<view class="cont" :style="{marginTop:marginTop+tabMargin+'px'}">
				<view class="top">
					<view class="info"
						:style="{backgroundImage:userInfo.is_vip?`url(${imgUrl}/worker/vip_bg.png)`:`url(${imgUrl}/worker/not_vip_bg.png)`,border: userInfo.is_vip?'1px solid #ffa73a':'none'}">
						<image class="tit"
							:src="userInfo.is_vip?imgUrl+'/worker/vip_title2.png':imgUrl+'/worker/not_vip_title2.png'"
							mode="widthFix"></image>
						<view class="mark" :class="userInfo.is_vip?'is_vip_mark':''">好工作不限次数快速匹配</view>
						<image class="vip_btn" :src="imgUrl+'/worker/vip_btn2.png'" mode="widthFix"
							v-if="!userInfo.is_vip" @click="buyVip">
						</image>
						<!-- 如果是会员显示到期时间 -->
						<view class="date" v-if="userInfo.is_vip">
							<view class="tit">到期时间</view>
							<view class="time">{{userInfo.vip_end_time}}</view>
						</view>
					</view>
					<view class="up"
						:style="{backgroundImage:userInfo.is_vip?`url(${imgUrl}/worker/vip_up.png)`:`url(${imgUrl}/worker/not_vip_up.png)`}">
						<view v-if="!userInfo.is_vip">
							<text>限时特惠</text>
							<text class="count">9.9</text>
							<text>送一年会员权益</text>
						</view>

					</view>
					<view class="vip_icon" :style="{bottom:userInfo.is_vip?'0rpx':'16rpx'}">
						<image :src="userInfo.is_vip?imgUrl+'/worker/vip_icon.png':imgUrl+'/worker/not_vip_icon.png'"
							mode="widthFix"></image>
					</view>
				</view>
				<view class="middle">
					<u-grid :border="false" col="4">
						<u-grid-item v-for="(listItem,listIndex) in menu" :key="listIndex" @click="toDetail(listItem)">
							<image :src="listItem.icon" mode="widthFix" style="width:115rpx;margin-bottom: 20rpx;">
							</image>
							<!-- <u-icon :customStyle="{paddingTop:20+'rpx'}" :name="listItem.name" :size="22"></u-icon> -->
							<text class="grid-text" style="font-size: 29rpx;">{{listItem.title}}</text>
						</u-grid-item>
					</u-grid>
				</view>

				<view class="btn" v-if="!userInfo.is_vip" @click="buyVip">成为会员</view>
				<view class="more">
					<view class="tit">会员特权</view>
					<view class="text">
						<view class="line">特权一：我是专为您服务的客服“灵动优优”；</view>
						<view class="line">特权二：为您提供一对一的工作匹配服务；</view>
						<view class="line">特权三：这里有丰富的工作机会，总会有工作</view>
						<view class="line">特权四：可以满足您的求职需求</view>
					</view>
				</view>
			</view>

		</view>
		<login :showLogin="showLogin" @closeLogin="closeLogin" @getInfo="getInfo" :shareId="shareId">
		</login>
	</view>
</template>

<script>
	import login from "@/components/login.vue"
	const app = getApp()
	export default {
		data() {
			return {
				showLogin: false,
				shareId: "",
				ifSingle: app.globalData.scene == 1154 ? true : false,
				fromSingle: app.globalData.scene == 1155 ? true : false,
				userInfo: {
					is_vip: false
				},
				imgUrl: app.globalData.baseImageUrl,
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				menu: [{
						icon: app.globalData.baseImageUrl + '/worker/vip_ic_4_white.png',
						title: '预定工作',
						url: "/pages/mine/mine"
					},
					{
						icon: app.globalData.baseImageUrl + '/worker/vip_ic_3_white.png',
						title: '优先匹配',
						url: "/pages/mine/mine"
					},
					{
						icon: app.globalData.baseImageUrl + '/worker/vip_ic_1_white.png',
						title: '工作分析',
						url: "/pages/mine/mine"
					},
					{
						icon: app.globalData.baseImageUrl + '/worker/vip_ic_2_white.png',
						title: '行业分析',
						url: "/pages/mine/mine"
					}
				],
			}
		},
		components: {
			login
		},
		onLoad(params) {
			uni.setNavigationBarColor({
				frontColor: '#000000',
				backgroundColor: '#ff0000'
			})
			this.shareId = params.share_id ? params.share_id : ""
			if (this.ifSingle) {
				return
			}
			if (this.fromSingle) {
				// 单页模式打开小程序，跳转至首页
				app.globalData.scene = 0
				uni.redirectTo({
					url: "/pages/index/index?share_id=" + this.shareId
				})
				return
			}
			if (this.isLogin()) {
				this.getInfo()
			} else {
				// uni.reLaunch({
				// 	url: "/pages/index/index"
				// })
			}

		},
		methods: {
			async buyVip() {
				if (!this.isLogin()) {
					this.showLogin = true
					return
				}
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
			closeLogin() {
				this.showLogin = false
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
	.count {
		display: inline-block;
		margin: 0 10rpx;
		font-size: 44rpx;
		font-family: "也字工厂";
	}

	.vip {
		width: 100%;
		min-height: 100vh;
		background: #FFFFFF;
		color: $base-fontcolor;
		padding: 38rpx 28rpx 38rpx 28rpx;
		box-sizing: border-box;

		.btn {
			background: linear-gradient(180deg, #F3BC7A 0%, #82561E 100%);
			border-radius: 48rpx;
			height: 96rpx;
			line-height: 96rpx;
			text-align: center;
			margin-top: 53rpx;
			font-weight: 600;
			font-size: 31rpx;
			color: #FFFFFF;
		}

		.more {
			margin-top: 200rpx;
			background: url($back-ground-url+'/worker/vip_more.png') no-repeat;
			background-size: 100% 100%;
			position: relative;
			padding: 34rpx;
			box-sizing: border-box;

			.tit {
				position: absolute;
				top: -20rpx;
				left: 50%;
				transform: translateX(-50%);
				font-size: 29rpx;
				color: #333333;
			}

			.text {
				font-size: 27rpx;
				color: #7E7E7E;
				line-height: 69rpx;
				margin-top: 30rpx;
			}
		}

		.cont {

			.top {
				position: relative;
				padding: 0 30rpx 70rpx 30rpx;

				.vip_icon {
					position: absolute;
					top: -20rpx;
					right: 60rpx;
					z-index: 80;

					image {
						width: 180rpx;
					}
				}

				.up {
					position: absolute;
					width: 100%;
					height: 106rpx;
					background-size: 100% 100%;
					background-repeat: no-repeat;
					bottom: 0;
					left: 0;
					z-index: 90;
					text-align: center;
					line-height: 130rpx;
					color: #fff;
					font-size: 28rpx;
				}

				.info {
					border-radius: 25rpx;
					overflow: hidden;
					background-size: 102% 102%;
					padding: 28rpx 40rpx 55rpx 40rpx;
					background-repeat: no-repeat;
					background-position: center center;
					box-sizing: border-box;


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
							color: $base-fontcolor;
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