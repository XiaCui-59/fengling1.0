<template>
	<view class="content">
		<!-- #ifdef MP-WEIXIN || MP-KUAISHOU -->
		<view class="custom_header" :style="{height:headerHeight+'px'}">
			<image :src="imgUrl+'/worker/ic_baoming_header_bg.png'" mode="widthFix" v-if="showSecondimage"></image>
			<view class="title" :style="{lineHeight:titleHeight+'px',height:titleHeight+'px',top:titleTop+'px'}">
				<view class="text">{{pageName}}</view>
			</view>
		</view>
		<!-- <customHeader :title="pageName" :showBack="false" :headHeight="headerHeight"></customHeader> -->
		<!-- #endif -->
		<view class="cont" :style="{marginTop:marginTop+'px'}">
			<!-- <view class="banner"
				:style="{top:marginTop+'px',height:bannerHeight+'px',marginTop:tabMargin+'px',marginBottom:tabMargin+'px'}">
				<image :src="imgUrl+'/worker/work_banner.png'" mode="widthFix"></image>
			</view> -->
			<view class="box" :style="{top:boxTop+'px',background:list.length==0?'#fff':'#F3F3F5'}">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y"
					:style="{height:scrollHeight+'px'}" refresher-enabled="true" :refresher-triggered="refreshStatus"
					@refresherpulling="refreshData" @scrolltolower="lower">
					<view class="item" v-for="(item,index) in list" :key="index" @click="toDetail(item.id)">
						<view class="top">
							<view class="title">{{item.name}}</view>
							<view class="invite flex flex-start">
								{{(item.worker_salary_min == item.worker_salary_max?item.worker_salary_min:(item.worker_salary_min+"-"+item.worker_salary_max))}}
								<text
									class="period">{{"元"+periodList.filter(el=>{return el.value==item.worker_salary_type})[0].text}}</text>
							</view>
						</view>
						<!-- <view class="middle labels flex flex-start"
							v-if="item.job_benefits.length!=0 || item.job_info.length!=0">
							<view class="label" v-for="(item2,index2) in item.job_benefits" :key="item2.id">
								{{item2.name}}{{index2==7?"...":""}}
							</view>
							<view class="label" v-for="(item3,index3) in item.job_info" :key="item3.id">
								{{item3.name}}{{!item.job_benefits.length?(index3==7?"...":""):(item.job_benefits.length+index3 == 7?"...":"")}}
							</view>
						</view> -->
						<view class="bottom flex flex_btween">
							<view class="left flex flex-start">
								<image
									:src="!item.broker_avatar?imgUrl+'/worker/broker_default_avatar.png':item.broker_avatar"
									style="width:50rpx;height:50rpx;border-radius:50%;border:1px solid #ccc;margin-right: 8rpx;">
								</image>
								<view>{{item.broker_name}}</view>
							</view>
							<view class="right flex flex_end"
								v-if="item.work_address.city || item.work_address.district">
								<image :src="imgUrl+'/broker/ic_posi_blue.png'" mode="widthFix"
									style="width:27rpx;height:27rpx;"></image>
								<text>{{item.work_address.city+item.work_address.district}}</text>
							</view>
						</view>
						<view class="worker_status" @click.stop="signIn(item)">马上报名</view>
					</view>
					<view class="empty" v-if="list.length == 0">
						<image :src="imgUrl+'/worker/empty_bg.png'" mode="widthFix"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		<login :showLogin="showLogin" pageName="work" @handleSign="sureSign(currentPro)" @closeLogin="closeLogin">
		</login>
		<addBase :showAddBase="showAddBase" @closeBase="closeBase"></addBase>
		<!-- #ifdef MP-WEIXIN || MP-KUAISHOU -->
		<tabbar :current="0" @getTabbarHeight="getTabbarHeight"></tabbar>
		<!-- #endif -->
	</view>
</template>

<script>
	import tabbar from "@/components/tabbar.vue"
	import customHeader from "@/components/custom_header.vue"
	import commonData from "@/common/commonData.js"
	import addBase from "@/components/add_base_info.vue"
	const app = getApp()
	export default {
		data() {
			return {
				showAddBase: false,
				imgUrl: app.globalData.baseImageUrl,
				currentTab: {
					value: "entry-signing-requests",
					text: "进行中"
				},
				showMask: false,
				refreshStatus: true,
				isPulling: false,
				pageName: "工作推荐",
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				subTabHeight: app.globalData.subTabHeight,
				status: commonData.workerStatus,
				periodList: commonData.periodList,
				tabs: [{
						value: "entry-signing-requests",
						text: "进行中"
					},
					{
						value: "wait-signing-requests",
						text: "已报名"
					},
					{
						value: "end-signing-requests",
						text: "已结束"
					}
				],
				scrollHeight: 0,
				boxTop: 0,
				headerHeight: app.globalData.topHeight,
				currentPage: 1,
				list: [],
				pagination: {},
				tabbarHeight: 0,
				loginStatus: false,
				bannerHeight: app.globalData.bannerHeight,
				showLogin: false,
				currentPro: {},
				titleHeight: 0,
				titleTop: 0
			}
		},
		components: {
			tabbar,
			customHeader,
			addBase
		},
		async onLoad() {
			let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			this.titleHeight = menuButtonInfo.height
			this.titleTop = menuButtonInfo.top
			this.getOpenId()
			console.log(this.tabbarHeight, "tabb")
			this.boxTop = this.headerHeight + 1.5 * this.tabMargin
			this.scrollHeight = app.globalData.systemHeight - this.headerHeight - 1.5 * this.tabMargin -
				this.tabbarHeight
			console.log(this.isLogin(), "isLogin")
			if (this.isLogin()) {
				this.loginStatus = true
			}
		},
		onShow() {
			// uni.showShareMenu({
			// 	title: "灵动优聘",
			// 	content: "更多工作免费报名",
			// 	imageUrl: ""
			// });
			// this.list = []
			this.currentPage = 1
			this.getList()
		},
		methods: {
			getOpenId() {
				let _this = this
				uni.login({
					success: (res) => {
						if (res.errMsg == 'login:ok') {
							let url = ""
							let data = {
								code: res.code
							}
							// #ifdef MP-WEIXIN
							url = "/auth/worker/wechat/mini/openid"
							// #endif
							// #ifdef MP-KUAISHOU
							url = "/auth/worker/kuaishou/openid"
							// #endif
							// #ifdef MP-TOUTIAO
							url = "/auth/worker/douyin/openid"
							data.anonymous_code = res.anonymousCode
							// #endif
							this.$request(url, data, "POST").then(resp => {
								if (resp.code == 0) {
									uni.setStorage({
										key: "openid",
										data: resp.data.open_id
									})
								}
							})
						}
					},
					fail(err) {
						console.log(err, "接口调用失败")
					}
				});
			},
			closeBase() {
				this.showAddBase = false
				uni.showToast({
					title: "报名成功",
					duration: 3000
				})
			},
			refreshData() {
				let _this = this
				if (!this.isPulling) {
					this.isPulling = true
					this.refreshStatus = true
					this.currentPage = 1
					this.getList()
					setTimeout(function() {
						_this.refreshStatus = false
						_this.isPulling = false
					}, 1000);
				}
			},
			closeLogin() {
				this.showLogin = false
			},
			signIn(item) {
				let _this = this
				_this.currentPro = item
				uni.showModal({
					title: "正在报名",
					content: "是否确认报名项目：" + item.name + "？",
					success(resp) {
						if (resp.confirm) {
							if (_this.isLogin()) {
								_this.sureSign()
							} else {
								_this.showLogin = true
							}

						}
					}
				})
			},
			sureSign() {
				let url = "/worker/accept/project/" + this.currentPro.id
				this.$request(url, {}, "POST").then(async res => {
					if (res.code == 0) {
						this.closeLogin()
						let info = await this.getUsrInfo()
						// 判断是否填写个人资料
						if (info.gender == "unknown") {
							this.showAddBase = true
						} else {
							uni.showToast({
								title: "报名成功",
								duration: 3000
							})
						}
					}
					this.getList()
				})
			},
			getTabbarHeight(e) {
				this.tabbarHeight = e
			},
			changeMainTab(id) {
				this.currentMainTab = id
			},
			changeTab(item) {
				this.currentTab.value = item.value
				this.currentTab.text = item.text
				this.list = []
				this.getList()
			},
			toDetail(id) {
				uni.navigateTo({
					url: "/subpkg/project_detail/project_detail?id=" + id
				})
			},
			getMore() {
				if (this.isLogin()) {
					let url = "/worker/recommend/project?page=" + this.currentPage
					this.$request(url).then(res => {
						if (res.code == 0) {
							this.list = this.list.concat(res.data.list)
							this.pagination = res.data.pagination
						}
					})
				} else {
					let url = "/common/recommend/project?page=" + this.currentPage
					this.$request(url).then(res => {
						if (res.code == 0) {
							this.list = this.list.concat(res.data.list)
							this.pagination = res.data.pagination
						}
					})
				}
			},
			getList() {
				if (this.isLogin()) {
					let url = "/worker/recommend/project?page=1"
					this.$request(url).then(res => {
						if (res.code == 0) {
							this.list = res.data.list
							this.pagination = res.data.pagination
						}
					})
				} else {
					let url = "/common/recommend/project?page=1"
					this.$request(url).then(res => {
						if (res.code == 0) {
							this.list = res.data.list
							this.pagination = res.data.pagination
						}
					})
				}

			},
			lower() {
				if (this.list.length < this.pagination.totalCount) {
					this.currentPage++
					this.getMore()
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
	.custom_header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background: url($back-ground-url+"/worker/top_header_bg2.png") no-repeat;
		background-size: cover;
		background-position: center center;
		// background-size: 100% 100%;
		overflow: hidden;
		z-index: 2;

		image {
			will-change: transform
		}

		&>image {
			width: 100%;
			// position: fixed;
			// top:0;
			// left:0;
			// z-index:3;
		}

		.title {
			text-align: center;
			color: #fff;
			font-size: 32rpx;
			position: fixed;
			font-weight: bold;
			width: 100%;
			z-index: 10;

			.back {
				position: absolute;
				left: 40rpx;
				top: 50%;
				transform: translateY(-50%);
				width: 44rpx;
				height: 44rpx;

				image {
					width: 44rpx;
					height: 44rpx;
				}
			}

			.text {
				text-shadow: 2px 2px 2px #333;
			}
		}
	}

	.period {
		font-size: 23rpx;
		color: #A8A8A8;
		display: inline-block;
		margin-left: 10rpx;
	}

	.banner {
		position: fixed;
		width: calc(100% - 80rpx);
		left: 40rpx;
		z-index: 4;
		overflow: hidden;
		border-radius: 16rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.box {
		position: fixed;
		width: calc(100% - 80rpx);
		left: 40rpx;
		z-index: 3;
		border-top-left-radius: 16rpx;
		border-top-right-radius: 16rpx;
		overflow: hidden;

		.item {
			padding: 57rpx 40rpx 17rpx 40rpx;
			border-radius: 15rpx;
			background: #fff;
			box-shadow: 0rpx 2rpx 6rpx 0rpx rgba(0, 0, 0, 0.15);
			margin-bottom: 28.85rpx;
			position: relative;

			.worker_status {
				position: absolute;
				top: 0;
				right: 0;
				width: 173rpx;
				height: 50rpx;
				border-radius: 0rpx 15rpx 0rpx 17rpx;
				line-height: 50rpx;
				text-align: center;
				font-weight: 600;
				font-size: 27rpx;
				background: rgba(245, 186, 9, 0.9);
				color: #ffffff;
			}

			.top {
				.title {
					font-size: 33rpx;
					padding-left: 16rpx;
					position: relative;
					// width: calc(100% - 330rpx);
					height: 46rpx;
					line-height: 46rpx;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;

					&:before {
						content: "";
						width: 8rpx;
						height: 35rpx;
						border-radius: 2rpx;
						background: #216FF9;
						position: absolute;
						top: 50%;
						left: 0;
						transform: translateY(-50%);
					}
				}

				.invite {
					height: 48rpx;
					// width: 330rpx;
					line-height: 48rpx;
					white-space: nowrap;
					text-overflow: ellipsis;
					margin-top: 20rpx;
					// overflow: hidden;
					text-align: center;
					box-sizing: border-box;
					font-size: 35rpx;
					color: #216FF9;
					font-weight: 600;
					text-align: right;
					padding: 0 0rpx 0 16rpx;
				}
			}

			.middle {
				font-size: 27rpx;
				// margin: 34rpx 0;
				padding: 0 0rpx 0 16rpx;

				&.labels {
					flex-wrap: wrap;
					height: auto;
					line-height: auto;
					padding-top: 20rpx;
					max-height: 132rpx;
					overflow: hidden;

					.label {
						width: 22%;
						height: 46rpx;
						margin-bottom: 20rpx;
						text-align: center;
						line-height: 46rpx;
						background: rgba(234, 153, 0, 0.06);
						border-radius: 6rpx;
						border: 1rpx solid #EA9900;
						font-size: 23rpx;
						color: #EA9900;
						margin-right: 3%;

						&:nth-child(4n) {
							margin-right: 0;
						}
					}
				}

				.tit {
					color: #333;
					width: 90rpx;
					background: rgba(234, 153, 0, 0.1);
					border-radius: 6rpx;
					color: #EA9900;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}

				.count {
					// font-size: 30rpx;
					width: calc(100% - 90rpx);
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}

				.left {
					.count {
						color: #333;
					}
				}

				.mark {
					font-size: 36rpx;
				}
			}

			.bottom {
				height: 60rpx;
				border-radius: 6rpx;
				line-height: 60rpx;
				padding-top: 20rpx;
				font-size: 23rpx;
				color: #686868;
				border-top: 2rpx solid #F6F6F6;
				margin-top: 20rpx;

				.left {
					width: 40%;

					view {
						width: calc(100% - 72rpx);
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
					}
				}

				.right {
					width: 60%;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					text-align: right;
				}
			}

			.line {
				margin-top: 16rpx;

				.tit {
					width: 122rpx;
					height: 60rpx;
					line-height: 60rpx;
					text-align: center;
					background: #F0F5FF;
					border-radius: 6rpx;
					font-size: 24rpx;
					color: #0E5FE7;
					margin-right: 8rpx;
				}

				.text {
					width: calc(100% - 130rpx);
					font-size: 30rpx;
					color: #333333;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
			}

		}

	}
</style>