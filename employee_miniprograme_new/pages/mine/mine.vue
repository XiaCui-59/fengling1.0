<template>
	<view class="content">
		<!-- #ifdef MP-WEIXIN || MP-KUAISHOU -->
		<customHeader :title="pageName" :showBack="false" :headHeight="headerHeight"></customHeader>
		<!-- #endif -->

		<view class="cont" :style="{marginTop:marginTop+'px'}">
			<view class="top_area" :style="{top:marginTop+'px'}">
				<view class="top flex flex-start" :style="{marginTop:tabMargin+'px',marginBottom:tabMargin+'px'}">
					<button class="logo" open-type="chooseAvatar" @chooseavatar="getAvatar"
						:style="{width:avatarHeight + 'px',height:avatarHeight + 'px'}">

						<image
							:src="info.avatar?info.avatar:(info.gender=='male'?imgUrl+'/worker/male_avatar.png':imgUrl+'/worker/female_avatar.png')"
							style="border-radius: 50%;background: #fff;"
							:style="{width:avatarHeight + 'px',height:avatarHeight + 'px'}"></image>
					</button>
					<view class="info flex flex_btween">
						<view class="name flex flex-start">
							<text>{{info.name}}</text>
						</view>
						<!-- <view class="status flex flex-end" v-if="info.id_card_number">
							<image :src="imgUrl+'/worker/ic_veri.png'" mode=""></image>
							<view class="sta_text">已认证</view>
						</view>
						<view class="status flex flex-end" v-if="!info.id_card_number">
							<view class="sta_text">未认证</view>
							<view class="btn" @click="navigate('/subpkg/authentication/authentication')">去认证</view>
						</view> -->
					</view>
				</view>
				<view class="data">
					<image :src="imgUrl+'/worker/data_bg2.png'" :style="{height:mineCardHeight+'px',width:'100%'}">
					</image>
					<view class="line flex flex_btween">
						<view class="in_line">
							<view class="tit">工作次数</view>
							<view class="num">{{info.working_count}}</view>
						</view>
						<view class="in_line">
							<view class="tit">受邀次数</view>
							<view class="num">{{info.invited_count}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="box" :style="{top:mineTop+'px',height:scrollHeight+'px',paddingTop:0}">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y"
					:style="{height:scrollHeight+'px',paddingTop:'70rpx',boxSizing:'border-box'}">
					<view class="line flex flex_btween">
						<!-- <view class="item" @click="navigate('/subpkg/my_info/my_info')">
							<view class="item_top flex flex-start">
								<image :src="imgUrl+'/broker/ic_mine_info.png'" mode="widthFix"></image>
								<view class="text">我的名片</view>
							</view>
							<view class="item_middle">实名认证，多重保障</view>
							<view class="item_bot">
								<image :src="imgUrl+'/broker/ic_mine_info_bg.png'" mode="widthFix"></image>
							</view>
						</view> -->
						<!-- <view class="item" @click="navigate('/subpkg/setting/setting')">
							<view class="item_top flex flex-start">
								<image :src="imgUrl+'/broker/ic_mine_setting.png'" mode="widthFix"></image>
								<view class="text">系统设置</view>
							</view>
							<view class="item_middle">更多功能，敬请期待</view>
							<view class="item_bot">
								<image :src="imgUrl+'/broker/ic_mine_setting_bg.png'" mode="widthFix"></image>
							</view>
						</view> -->
						<view class="item" @click="navigate('/subpkg/my_resume/my_resume')">
							<view class="item_top flex flex-start">
								<image :src="imgUrl+'/worker/ic_myresume.png'" mode="widthFix"></image>
								<view class="text">我的简历</view>
							</view>
							<view class="item_middle">信息全面，安全随行备份</view>
							<view class="item_bot">
								<image :src="imgUrl+'/worker/my_resume_icon.png'" mode="widthFix"></image>
							</view>
						</view>
						<view class="item" @click="navigate('/subpkg/setting/setting')">
							<view class="item_top flex flex-start">
								<image :src="imgUrl+'/broker/ic_mine_setting.png'" mode="widthFix"></image>
								<view class="text">系统设置</view>
							</view>
							<view class="item_middle">更多功能，敬请期待</view>
							<view class="item_bot">
								<image :src="imgUrl+'/broker/ic_mine_setting_bg.png'" mode="widthFix"></image>
							</view>
						</view>
					</view>
					<view class="line flex flex_btween">

						<!-- 	<view class="item" @click="navigate('/subpkg/bank_card/bank_card')">
							<view class="item_top flex flex-start">
								<image :src="imgUrl+'/broker/ic_mine_two_card.png'" mode="widthFix"></image>
								<view class="text">银行卡</view>
							</view>
							<view class="item_middle">信息全面，安全随行</view>
							<view class="item_bot">
								<image :src="imgUrl+'/broker/ic_mine_two_bg.png'" mode="widthFix"></image>
							</view>
						</view> -->
					</view>
				</scroll-view>
			</view>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<tabbar current="3" @getTabbarHeight="getTabbarHeight"></tabbar>
		<!-- #endif -->
		<!-- #ifdef MP-KUAISHOU -->
		<tabbar :current="1" @getTabbarHeight="getTabbarHeight"></tabbar>
		<!-- #endif -->
		<login :showLogin="showLogin" pageName="mine" @getInfo="getInfo" @closeLogin="closeLogin">
		</login>
	</view>
</template>

<script>
	import tabbar from "@/components/tabbar.vue"
	import customHeader from "@/components/custom_header.vue"
	const app = getApp()
	export default {
		data() {
			return {
				showLogin: false,
				imgUrl: app.globalData.baseImageUrl,
				pageName: "我的",
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				avatarHeight: app.globalData.avatarHeight,
				mineCardHeight: app.globalData.mineCardHeight,
				mineTop: app.globalData.mineTop,
				scrollHeight: 0,
				boxTop: 0,
				headerHeight: app.globalData.highTopHeight,
				maskInnerTop: 0,
				showMask: false,
				baseStatus: [{
						value: "pending",
						text: "审核中",
						btnText: ""
					},
					{
						value: "approved",
						text: "已认证",
						btnText: ""
					},
					{
						value: "rejected",
						text: "认证失败",
						btnText: "重新认证"
					}
				],
				twoStatus: [{
						value: "not_uploaded",
						text: "未上传"
					},
					{
						value: "pending",
						text: "待审"
					},
					{
						value: "approved",
						text: "审核通过"
					},
					{
						value: "rejected",
						text: "审核拒绝"
					}
				],
				info: {
					"gender": "male",
					"id_card_back_image": "",
					"id_card_front_image": "",
					"id_card_number": "",
					"name": "",
					"verified": false
				},
				dataHeight: 0,
				tabbarHeight: 0,
				loginStatus: false,
				avatar: ""
			}
		},
		components: {
			tabbar,
			customHeader
		},
		onLoad() {
			this.scrollHeight = app.globalData.systemHeight - this.mineTop - this.tabbarHeight
			if (this.isLogin()) {
				this.loginStatus = true
			}
		},
		// watch: {
		// 	loginStatus(newValue, oldValue) {
		// 		console.log(newValue, oldValue)
		// 		if (newValue) {
		// 			this.getInfo()
		// 		}
		// 	}
		// },
		onShow() {
			if (this.isLogin()) {
				this.loginStatus = true
				this.getInfo()
			} else {
				this.loginStatus = false
				this.showLogin = true
			}
		},
		methods: {
			closeLogin() {
				this.showLogin = false
				uni.switchTab({
					url: "/pages/work/work"
				})
			},
			getTabbarHeight(e) {
				this.tabbarHeight = e
			},
			navigate(url) {
				uni.navigateTo({
					url: url
				})
			},
			openMask(type) {
				this.showMask = true
			},
			close() {
				this.showMask = false
			},
			copyLink() {
				let _this = this
				uni.setClipboardData({
					data: "https://swiftwd.com",
					success() {
						_this.close()
					}
				})
			},
			getInfo() {
				this.$request("/worker/profile").then(res => {
					if (res.code == 0) {
						this.info = res.data
						uni.setStorageSync("userInfo", res.data)
					}
				})
			},
			async loadimg(type, filePath) {
				var _this = this;
				let header = {
					"Authorization": "bearer " + uni.getStorageSync("token"),
					"accept": "application/json",
					"content-type": "multipart/form-data"
				}
				return new Promise((resolve, reject) => {
					uni.uploadFile({
						url: app.globalData.baseUrl + "/worker/upload/image?type=" + type,
						filePath: filePath,
						name: "file",
						header: header,
						success(resp) {
							var response = JSON.parse(resp.data);
							if (response.code == 0) {
								uni.showToast({
									title: "图片上传成功"
								})
								let data = {
									avatar: response.data.key
								}
								_this.$request("/worker/avatar", data, "POST").then(res => {
									if (res.code == 0) {
										uni.showToast({
											title: "头像更新成功",
											duration: 2000
										})
										_this.getInfo()
									}
								})
							} else {
								uni.showModal({
									title: "上传失败",
									content: response.msg
								})
							}
						},
						complete() {
							uni.hideLoading();
						}
					})
					resolve(_this.reponsefiles)
				})
			},
			// 获取头像
			getAvatar(e) {
				this.loadimg("avatar", e.detail.avatarUrl)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top_area {
		width: calc(100% - 120rpx);
		position: fixed;
		left: 60rpx;

		&>image {
			width: 100%;
			will-change: transform;
		}

		.top {
			width: 100%;

			&>image {
				width: 168rpx;
				position: absolute;
				top: 50%;
				left: 84%;
				will-change: transform;
			}

			.logo {
				width: 112rpx;
				height: 112rpx;
				border-radius: 50%;
				overflow: hidden;
				margin-right: 20rpx;
				padding-left: 0;
				padding-right: 0;
				margin-left: 0;
			}

			.info {
				width: calc(100% - 132rpx);
				position: relative;

				.name {
					font-weight: 600;
					font-size: 34rpx;
					color: #FFFFFF;
					text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
					white-space: nowrap;
				}

				.status {
					image {
						width: 38rpx;
						height: 38rpx;
						margin-right: 8rpx;
					}

					.sta_text {
						font-size: 24rpx;
						color: #FFFFFF;
						line-height: 48rpx;
						text-shadow: 0px 1px 2px rgba(52, 35, 0, 0.76);
					}

					.btn {
						width: 160rpx;
						height: 56rpx;
						line-height: 56rpx;
						background: #F7BC05;
						// box-shadow: 0px 1px 2px 0px rgba(146,110,2,0.5);
						border-radius: 44rpx;
						border: 1px solid #F7BC05;
						color: #fff;
						font-size: 28rpx;
						text-align: center;
						margin-left: 10rpx;
						// text-align: right;
					}
				}
			}
		}

		.data {
			margin-top: 20rpx;
			position: relative;

			&>image {
				width: 100%;
				will-change: transform;
			}

			.line {
				width: 100%;
				position: absolute;
				top: 17%;
				left: 0;
				transform: translateY(-50%);
				color: #fff;

				&::after {
					content: "";
					width: 2rpx;
					height: 30rpx;
					background: #fff;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
				}

				.in_line {
					width: 50%;
					text-align: center;
					font-size: 28rpx;

					.num {
						font-size: 40rpx;
						font-weight: bold;
					}
				}
			}
		}
	}

	.box {
		position: fixed;
		width: 100%;
		left: 0rpx;
		z-index: 3;
		background: url($back-ground-url+"/broker/ic_mine_bg.png") no-repeat;
		background-size: 100% 100%;
		overflow: hidden;
		padding: 70rpx 40rpx 0 40rpx;
		box-sizing: border-box;

		.line {
			margin-bottom: 30rpx;

			.item {
				width: 48%;
				padding: 20rpx;
				box-sizing: border-box;
				background: #fff;
				border-radius: 20rpx;

				.item_top {
					image {
						width: 50rpx;
						height: 50rpx;
						margin-right: 8rpx;
					}

					.text {
						color: #333;
						font-size: 28rpx;
					}
				}

				.item_middle {
					font-size: 24rpx;
					color: #9E9E9E;
					margin-top: 10rpx;
					margin-bottom: 20rpx;
				}

				.item_bot {
					font-size: 0;

					image {
						width: 100%;
						will-change: transform;
					}
				}
			}
		}
	}
</style>