<template>
	<view class="content">
		<customHeader :title="pageName" :showBack="false" :headHeight="headerHeight"></customHeader>
		<view class="cont" :style="{marginTop:marginTop+tabMargin+'px'}">
			<view class="top_area" :style="{top:marginTop+tabMargin+'px',height:mineCardHeight+'px'}">
				<image :src="imgUrl+'/broker/ic_mine_top_bg.png'" :style="{height:mineCardHeight+'px',width:'100%'}">
				</image>
				<view class="top flex flex-start">
					<button class="logo" open-type="chooseAvatar" @chooseavatar="getAvatar"
						:style="{height:mineCardHeight*0.45+'px',width:mineCardHeight*0.45+'px'}">
						<image :src="info.broker.avatar.url?info.broker.avatar.url:avatar"
							style="border-radius: 50%;background: #fff;"
							:style="{height:mineCardHeight*0.45+'px',width:mineCardHeight*0.45+'px'}"></image>
					</button>
					<image :src="imgUrl+'/broker/ic_mine_veri.png'" mode="widthFix"></image>
					<view class="info flex flex_btween">
						<view class="" style="margin-right: 40rpx;">
							<view class="name">{{info.broker.name}}</view>
							<view class="status">{{info.broker.mobile}}</view>
						</view>
						<view class="status">
							<view class="sta_text"
								v-if="info.broker.review_status=='reviewing'||info.broker.review_status=='approved'">
								{{baseStatus.filter(el=>{return el.value == info.broker.review_status})[0].text}}
							</view>
							<view class="btn"
								v-if="baseStatus.filter(el=>{return el.value == info.broker.review_status})[0].btnText"
								@click="navigate('/subpkg/authentication/authentication')">
								{{baseStatus.filter(el=>{return el.value == info.broker.review_status})[0].btnText}}
							</view>
						</view>
						<!-- <view class="status flex flex_btween" v-if="!info.id">
							<view class="sta_text">未认证</view>
							<view class="btn" @click="navigate('/subpkg/authentication/authentication')">去认证</view>
						</view> -->
					</view>
				</view>
			</view>
			<view class="box" :style="{top:boxTop+'px',height:scrollHeight+'px'}">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y"
					:style="{height:scrollHeight+'px'}">
					<view class="line flex flex_btween">
						<view class="item" @click="navigate('/subpkg/add_project/add_project')">
							<view class="item_top flex flex-start">
								<image :src="imgUrl+'/broker/ic_mine_rele.png'" mode="widthFix"></image>
								<view class="text">发布职位</view>
							</view>
							<view class="item_middle">快速发布</view>
							<view class="item_bot">
								<image :src="imgUrl+'/broker/ic_mine_rele_bg.png'" mode="widthFix"></image>
							</view>
						</view>
						<view class="item" @click="navigate('/subpkg/account/account')">
							<view class="item_top flex flex-start">
								<image :src="imgUrl+'/broker/ic_mine_account.png'" mode="widthFix"></image>
								<view class="text">钱包余额</view>
							</view>
							<view class="item_middle">余额变动</view>
							<view class="item_bot">
								<image :src="imgUrl+'/broker/ic_mine_account_bg.png'" mode="widthFix"></image>
							</view>
						</view>
					</view>
					<view class="line flex flex_btween">
						<view class="item" @click="navigate('/subpkg/my_info/my_info')">
							<view class="item_top flex flex-start">
								<image :src="imgUrl+'/broker/ic_mine_info.png'" mode="widthFix"></image>
								<view class="text">公司信息</view>
							</view>
							<view class="item_middle">实名认证，多重保障</view>
							<view class="item_bot">
								<image :src="imgUrl+'/broker/ic_mine_info_bg.png'" mode="widthFix"></image>
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
						<!-- <view class="item" @click="navigate('/subpkg/two_card/two_card')">
							<view class="item_top flex flex-start">
								<image :src="imgUrl+'/broker/ic_mine_two_card.png'" mode="widthFix"></image>
								<view class="text">两证信息</view>
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
		<login :showLogin="showLogin" @handleConfirm="getInfo" @closeLogin="closeLogin" @handleInfo="handleInfo">
		</login>
		<infoFirst :showNameInput="showNameInput" v-if="showAddInfo" @handleName="handleName"
			@closeAddInfo="closeAddInfo"></infoFirst>
		<view class="mask" v-if="showMask" @click="close">
			<view class="inner" @click.stop="openMask">
				<image :src="imgUrl+'/broker/ic_mine_mask_inner_bg.png'" mode="widthFix" class="bg"></image>
				<image :src="imgUrl+'/broker/ic_mine_mask_icon.png'" mode="widthFix"></image>
				<view class="info">
					<view class="tit">复制网址到电脑浏览器操作</view>
					<view class="text">https://swiftwd.com</view>
					<view class="btn" @click.stop="copyLink">复制网址</view>
				</view>
			</view>
		</view>
		<tabbar current="2" @getTabbarHeight="getTabbarHeight" :todo="todo"></tabbar>
	</view>
</template>

<script>
	import tabbar from "@/components/tabbar.vue"
	import customHeader from "@/components/custom_header.vue"
	import infoFirst from "@/components/info_first.vue"
	import commonData from "@/common/commonData.js"
	const app = getApp()
	export default {
		data() {
			return {
				showAddInfo: false,
				showNameInput: true,
				showLogin: false,
				imgUrl: app.globalData.baseImageUrl,
				pageName: "我的",
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				mineCardHeight: app.globalData.mineCardHeight,
				scrollHeight: 0,
				boxTop: 0,
				headerHeight: app.globalData.highTopHeight,
				maskInnerTop: 0,
				showMask: false,
				avatar: app.globalData.baseImageUrl + "/broker/com_default.png",
				baseStatus: commonData.baseStatus,
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
					"company_name": "",
					"basic_verify_status": ""
				},
				tabbarHeight: 0,
				mineTop: app.globalData.mineTop,
				loginStatus: false,
				todo: 0
			}
		},
		components: {
			tabbar,
			customHeader,
			infoFirst
		},
		async onLoad() {
			this.boxTop = this.marginTop + this.mineTop + this.tabMargin
			this.scrollHeight = app.globalData.systemHeight - this.marginTop - this.tabMargin - this.mineTop - this
				.tabbarHeight
			if (this.isLogin()) {
				this.loginStatus = true
			}
		},
		watch: {
			// loginStatus(newValue, oldValue) {
			// 	console.log(newValue, oldValue)
			// 	if (newValue) {
			// 		this.getInfo()
			// 	}
			// }
		},
		async onShow() {
			if (this.isLogin()) {
				this.loginStatus = true
				let todoStatic = await this.getTodoStatic()
				this.todo = todoStatic.total
				this.info = await this.getInfo()
			} else {
				this.showLogin = true

				this.loginStatus = false
				this.info = {
					broker: {
						name: "",
						mobile: "",
						avatar: {
							key: "",
							url: ""
						},
						review_status: ""
					},
					compamy: {
						name: "",

					}
				}
				// uni.showModal({
				// 	title: "提示",
				// 	content: "您当前未登录，或登录状态异常，请重新登录。",
				// 	confirmText: "去登录",
				// 	success(res) {
				// 		if (res.confirm) {
				// 			uni.navigateTo({
				// 				url: "/pages/login/login"
				// 			})
				// 		} else {
				// 			uni.switchTab({
				// 				url: "/pages/index/index"
				// 			})
				// 		}
				// 	}
				// })
			}
		},
		methods: {
			handleName() {
				this.showNameInput = false
			},
			closeAddInfo() {
				this.showAddInfo = false
			},
			handleInfo(info) {
				if (!info.company.name) {
					this.showAddInfo = true
				}
				if (info.broker.name) {
					// 隐藏输入姓名
					this.showNameInput = false
				}
			},
			closeLogin() {
				this.showLogin = false
				uni.switchTab({
					url: "/pages/index/index"
				})
			},
			getTabbarHeight(e) {
				this.tabbarHeight = e
			},
			navigate(url) {
				if ((url.indexOf("my_info") != -1) && this.info.broker.review_status == "waiting_submit") {
					uni.showModal({
						title: "您还未提交公司信息。",
						confirmText: "去提交",
						success(res) {
							if (res.confirm) {
								uni.navigateTo({
									url: "/subpkg/authentication/authentication"
								})
							}
						}
					})
					return
				}
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
			// 获取头像
			async getAvatar(e) {
				console.log(e)
				let result = await this.loadImage(app.globalData.baseUrl, "avatar", e.detail.avatarUrl)
				if (result) {
					// 更新个人信息
					let data = {
						"avatar": result
					}
					this.$request("/broker/update-personal-info", data, "POST").then(async res => {
						if (res.code == 0) {
							uni.showToast({
								title: "头像更新成功",
								duration: 2000
							})
							this.info = await this.getInfo()
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top_area {
		width: calc(100% - 96rpx);
		position: fixed;
		left: 48rpx;

		&>image {
			width: 100%;
			will-change: transform;
		}

		.top {
			position: absolute;
			top: 3%;
			left: 50%;
			transform: translateX(-50%);
			width: calc(100% - 80rpx);
			padding: 20rpx 0;

			&>image {
				width: 168rpx;
				position: absolute;
				top: 50%;
				left: 84%;
				will-change: transform;
			}

			.logo {
				border-radius: 50%;
				overflow: hidden;
				margin-right: 20rpx;
				padding-left: 0;
				padding-right: 0;
				margin-left: 0;
			}

			.info {
				// width: calc(100% - 220rpx);
				position: relative;

				.name {
					font-weight: 600;
					font-size: 34rpx;
					color: #333333;
					line-height: 48rpx;
					text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
					margin-bottom: 16rpx;
					white-space: nowrap;
				}

				.status {
					.sta_text {
						font-weight: 600;
						font-size: 34rpx;
						color: #FFFFFF;
						line-height: 48rpx;
						text-shadow: 0px 1px 2px rgba(52, 35, 0, 0.76);
					}

					.btn {
						width: 160rpx;
						height: 56rpx;
						line-height: 56rpx;
						background: #F7BB05;
						box-shadow: 0px 1px 2px 0px rgba(146, 110, 2, 0.5);
						border-radius: 44rpx;
						border: 1px solid #F7BB05;
						color: #333;
						font-size: 28rpx;
						text-align: center;
						margin-top: 0;
						margin-bottom: 0;
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
		padding: 104rpx 48rpx 0 48rpx;
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

	.mask {
		.inner {
			width: 71%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			text-align: center;

			.bg {
				width: 100%;
				position: relative;
				top: 0;
				left: 0;
			}

			image {
				width: 175rpx;
				height: 175rpx;
				position: absolute;
				top: 4%;
				left: 62rpx;
			}

			.info {
				position: absolute;
				top: 44%;
				left: 62rpx;

				.tit {
					font-size: 36rpx;
					color: #FFB103;
					font-weight: bold;
				}

				.text {
					margin: 20rpx 0 56rpx 0;
					font-size: 28rpx;
					color: #333333;
				}

				.btn {
					height: 88rpx;
					line-height: 88rpx;
					background: #F7BC05;
					box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
					border-radius: 16rpx;
					color: #fff;
				}
			}

		}
	}
</style>