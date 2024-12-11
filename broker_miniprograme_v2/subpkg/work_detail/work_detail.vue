<template>
	<view class="content">
		<customHeader :title="pageName" :showBack="true" :headHeight="headerHeight" :showSecondimage="true"
			:backIndex="true"></customHeader>
		<view class="cont" :style="{top:marginTop+getTop+'px',height:contHeight+'px'}">
			<view class="inner">
				<view class="title flex flex-start"
					:style="{height:detailTitleHeight+'px',lineHeight:detailTitleHeight+'px'}">
					<view class="text">职位详情</view>
				</view>
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
					:style="{height:scrollHeight+'px'}" @scrolltolower="lower" @scroll="scroll">
					<view class="base">
						<view class="line flex flex-start"
							:style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px'}">
							<view class="tit">职位来源：</view>
							<view class="text">{{info.broker_name}}</view>
						</view>
						<view class="line flex flex-start"
							:style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px'}">
							<view class="tit">工作名称：</view>
							<view class="text">{{info.project_name}}</view>
						</view>
						<view class="line flex flex-start"
							:style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px'}">
							<view class="tit">开始时间：</view>
							<view class="text">{{info.work_start_time}}</view>
						</view>
						<view class="line flex flex-start"
							:style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px'}">
							<view class="tit">结束时间：</view>
							<view class="text">{{info.work_end_time}}</view>
						</view>
						<view class="line flex flex-start"
							:style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px'}">
							<view class="tit">工作地点：</view>
							<view class="text">{{info.work_address}}</view>
						</view>
						<view class="line flex flex-start"
							:style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px'}">
							<view class="tit">佣金金额：</view>
							<view class="text flex flex_btween">
								<view class="num">{{info.commission_unit_price}}元</view>
								<view class="period">/人/时</view>
							</view>
						</view>
						<view class="line flex flex-start"
							:style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px'}">
							<view class="tit">工作酬劳：</view>
							<view class="text flex flex_btween">
								<view class="num">{{info.salary_unit_price}}元</view>
								<view class="period">
									/{{period.filter(el=>{return el.value == info.salary_settlement_type})[0].text}}
								</view>
							</view>
						</view>
					</view>
					<view class="more">
						<view class="tit">工作详情</view>
						<view class="textarea" :style="{paddingBottom:!showAll?scrollPadding+'px':'auto'}">
							<rich-text :nodes="info.project_content" :style="{display:displayType}"></rich-text>
							<view class="showtotal" @click="showTotal" v-if="showAll">
								<text class="text">展开</text>
								<image :src="imgUrl+'/broker/ic_more.png'" mode="widthFix"></image>
							</view>
						</view>
					</view>
				</scroll-view>
				<view class="bot">
					<image :src="imgUrl+'/broker/ic_jiedan_bot_bg.png'" :style="{height:getBottomHeight+'px'}"></image>
					<view class="btn" @click="accept">
						<image :src="imgUrl+'/broker/ic_jiedan_btn_bg.png'" mode="widthFix"></image>
						<text>我要接单</text>
					</view>
				</view>
			</view>
		</view>
		<view class="mask" v-if="showMask" @click="close">
			<view class="inner" @click.stop="openInner1" v-if="showInner1">
				<image :src="imgUrl+'/broker/ic_jiedan_mask_bg.png'" mode="widthFix" class="bg"></image>
				<view class="tit">公司认证</view>
				<view class="info">
					<view class="text">您还未提交公司认证信息 请认证公司信息后，再接单。</view>
					<view class="btn blue" @click.stop="toAuth">去认证</view>
				</view>
			</view>
			<!-- <view class="inner" @click.stop="openInner2" v-if="showInner2">
				<image src="https://static.swiftwd.com/broker/ic_jiedan_mask_inner2_bg.png" mode="widthFix" class="bg"></image>
				<view class="info">
					<view class="tit2">认证成功</view>
					<view class="text">恭喜你认证成功 开始你的蓝峰之旅吧</view>
					<view class="btn yellow" @click.stop="copyLink">去发单</view>
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	import commonData from "@/common/commonData.js"
	import customHeader from "@/components/custom_header.vue"
	const app = getApp()
	export default {
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
				pageName: "我要接单",
				marginTop: app.globalData.marginTop,
				getTop: app.globalData.getTop,
				getBottomHeight: app.globalData.getBottomHeight,
				detailTitleHeight: app.globalData.detailTitleHeight,
				subTabHeight: app.globalData.subTabHeight,
				info: {
					"id": 0,
					"content": "这是职位详情",
					"employer_name": "成都欣欣劳务有限公司",
					"enroll_num": 0,
					"id": "",
					"need_num": 0,
					"salary": "4.5",
					"work_address": "成都高新区剑南大道215号",
					"work_time": "2024-03-19 09:00",
					"salary_period": "/人/时",
					"status": "待签约"
				},
				displayType: "-webkit-box",
				period: commonData.periodList,
				paySalaryPeriod: commonData.paySalaryPeriod,
				paySalaryWeekly: commonData.paySalaryWeekly,
				showAll: true,
				headerHeight: app.globalData.topHeight,
				scrollHeight: 0,
				contHeight: 0,
				showMask: false,
				showInner1: false,
				showInner2: false,
				pb_id: ""
			}
		},
		components: {
			customHeader
		},
		onLoad(param) {
			this.contHeight = app.globalData.systemHeight - this.marginTop - this.getTop - Math.floor(app.globalData
				.systemHeight * (151 / 884))
			this.scrollHeight = this.contHeight - this.detailTitleHeight
			console.log(param)
			if (param.scene) {
				let scene = decodeURIComponent(param.scene)
				console.log(scene)
				let arr = scene.split("&")
				for (var i = 0; i < arr.length; i++) {
					if (arr[i].indexOf("pb_id") != -1) {
						this.pb_id = arr[i].split("=")[1]
					}
				}
			}

			if (param.open_type) {
				if (param.open_type == "toc") {
					uni.showModal({
						title: "是否打开灵动优聘工人端小程序进行报名？",
						confirmText: "去报名",
						showCancel: false,
						success(res) {
							if (res.confirm) {
								uni.navigateToMiniProgram({
									envVersion: "trial",
									appId: "wxaefe465c891721e8",
									path: '/subpkg/work_detail/work_detail?scene=' + param
										.scene, //好友点击分享之后跳转的页面
									success(res) {
										console.log('/subpkg/work_detail/work_detail?scene=' + param.scene)
										// 打开成功
										console.log("打开成功")
										uni.exitMiniProgram()
									},
									fail(err) {
										console.log(err)
										uni.exitMiniProgram()
									}
								})
							}
						}
					})

				}
			}
			console.log(this.pb_id, "pb_id")
		},
		onShow() {
			let url = "/share-to-broker/project/" + this.pb_id + "/detail"
			this.$request(url).then(res => {
				if (res.code == 0) {
					this.info = res.data
				}
			})
		},
		methods: {
			showTotal() {
				console.log(1234)
				this.displayType = "block";
				this.showAll = false;
			},
			accept() {
				let token = uni.getStorageSync("token")
				if (!token) {
					uni.showModal({
						title: "未登录",
						content: "您当前还未登录，请先登录再报名。",
						confirmText: "去登录",
						success(resp) {
							if (resp.confirm) {
								uni.navigateTo({
									url: "/pages/login/login"
								})
							} else {
								uni.exitMiniProgram()
							}
						}
					})
				} else {
					let url = "/broker/mini/project-broker/" + this.pb_id + "/join-affiliate"
					this.$request(url, {}, "POST").then(res => {
						if (res.code == 0) {
							uni.showModal({
								title: "接单成功",
								content: "点击确定，进入系统首页。",
								success(resp) {
									if (resp.confirm) {
										uni.switchTab({
											url: "/pages/index/index"
										})
									}
								}
							})
						}
					})
				}
			},
			toAuth() {
				this.close()
				uni.navigateTo({
					url: "/subpkg/authentication/authentication"
				})
			},
			close() {
				this.showMask = false
				this.showInner1 = false
				this.showInner2 = false
			},
			openInner1() {
				this.showMask = true
				this.showInner1 = true
			},
			openInner2() {
				this.showMask = true
				this.showInner2 = true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cont {
		position: fixed;
		width: 100%;
		left: 0;
		padding: 0 28rpx;
		box-sizing: border-box;
		overflow: hidden;

		.inner {
			height: 100%;
			position: relative;
			background: url($back-ground-url+"/broker/ic_jiedan_bg.png") no-repeat;
			background-size: cover;

			&>image {
				width: 100%;
				height: 100%;
			}

			.title {
				height: 80rpx;
				line-height: 80rpx;
				padding-left: 100rpx;
				padding-top: 32rpx;
				box-sizing: border-box;
				font-size: 30rpx;
				color: #333;
				box-sizing: border-box;
			}

			.base {
				padding: 0 56rpx;

				.line {
					font-size: 28rpx;
					border-bottom: 1px dashed #DFDFDF;
					margin-top: 0;

					.tit {
						width: 140rpx;
						color: #5A5A5A;
					}

					.text {
						width: calc(100% - 140rpx);
						color: #333;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;

						.period {
							font-size: 24rpx;
							color: #A8A8A8;
						}
					}
				}
			}

			.more {
				padding: 0 56rpx;

				.tit {
					font-size: 30rpx;
					color: #F7BB05;
					margin: 40rpx 0 10rpx 0;
				}

				.textarea {
					position: relative;
					background: #fff;
					line-height: 40rpx;
					font-size: 28rpx;
					color: #5A5A5A;
					border-radius: 16rpx;
					padding: 20rpx;
					box-sizing: border-box;

					p {
						margin-bottom: 20rpx;
					}

					rich-text {
						line-height: 50rpx;
						-webkit-line-clamp: 4;
						overflow: hidden;
						text-overflow: ellipsis;
						height: auto;
						-webkit-box-orient: vertical;
						display: -webkit-box;
					}

					.showtotal {
						color: #F7BB05;
						margin: 20rpx auto;
						text-align: center;
						position: relative;
						z-index: 100;

						image {
							width: 32rpx;
							height: 32rpx;
							vertical-align: middle;
						}
					}
				}
			}

			.bot {
				width: 100%;
				position: fixed;
				bottom: -18rpx;
				left: 0;
				z-index: 99;

				image {
					width: 100%;
					will-change: transform;
				}

				.btn {
					width: 33%;
					position: absolute;
					bottom: 12%;
					left: 50%;
					transform: translateX(-50%);
					font-size: 0;
					background: transparent;

					image {
						width: 100%;
						will-change: transform;
					}

					text {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						color: #fff;
						font-weight: bold;
						font-size: 30rpx;
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

			.tit {
				font-size: 36rpx;
				color: #fff;
				font-weight: bold;
				position: absolute;
				top: 13%;
				left: 10%;
			}

			.info {
				position: absolute;
				top: 44%;
				left: 50%;
				transform: translateX(-50%);
				width: 75%;

				.tit2 {
					font-size: 36rpx;
					color: #FFB103;
					font-weight: bold;
				}

				.text {
					margin: 20rpx auto 56rpx auto;
					font-size: 28rpx;
					color: #333333;
					width: 80%;
				}

				.btn {
					height: 88rpx;
					line-height: 88rpx;
					box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
					border-radius: 16rpx;
					color: #fff;
				}

				.blue {
					background: #3780FF;
				}

				.yellow {
					background: #FFB103;
				}
			}

		}
	}
</style>