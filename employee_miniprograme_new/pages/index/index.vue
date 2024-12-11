<template>
	<view class="content">
		<customHeader :title="pageName" :showBack="false" :headHeight="headerHeight"></customHeader>
		<view class="cont" :style="{marginTop:marginTop+'px'}">
			<view class="top_area" :style="{top:marginTop+'px'}">
				<view class="subtabs flex flex-start"
					:style="{height:subTabHeight+'px',marginTop:tabMargin+'px',marginBottom:tabMargin+'px'}">
					<view class="subtab flex flex_around" v-for="(item,index) in tabs" :key="index"
						:class="currentTab.value==item.value?'active':''" @click="changeTab(item)">{{item.text}}</view>
				</view>
			</view>
			<view class="box" :style="{top:boxTop+'px',background:list.length==0?'#fff':'#F3F3F5'}">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y"
					:style="{height:scrollHeight+'px'}" refresher-enabled="true" :refresher-triggered="refreshStatus"
					@refresherpulling="refreshData" @scrolltolower="lower">
					<view class="item" v-for="(item,index) in list" :key="index" @click="toDetail(item.project_id)">
						<view class="top">
							<view class="title">{{item.project_name}}</view>
							<view class="invite flex flex-start">
								{{(item.worker_salary_min == item.worker_salary_max?item.worker_salary_min:(item.worker_salary_min+"-"+item.worker_salary_max))}}
								<text
									class="period">{{"元"+periodList.filter(el=>{return el.value==item.worker_salary_type})[0].text}}</text>
							</view>
						</view>
						<!-- <view class="middle labels flex flex-start"
							v-if="item.job_benefits.length!=0 || item.job_info.length !=0">
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
						<view class="worker_status" :class="item.status">
							{{status.filter(el=>{return el.value == item.status})[0].text}}
						</view>
					</view>
					<view class="empty" v-if="list.length == 0">
						<image :src="imgUrl+'/worker/empty_bg.png'" mode="widthFix"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		<!-- <aiChat v-if="showAi"></aiChat> -->
		<tabbar current="1" @getTabbarHeight="getTabbarHeight"></tabbar>
	</view>
</template>

<script>
	import tabbar from "@/components/tabbar.vue"
	import customHeader from "@/components/custom_header.vue"
	import commonData from "@/common/commonData.js"

	const app = getApp()
	export default {
		data() {
			return {
				showAi: false,
				imgUrl: app.globalData.baseImageUrl,
				currentTab: {
					value: "entry-signing-requests",
					text: "进行中"
				},
				showMask: false,
				refreshStatus: true,
				isPulling: false,
				pageName: "灵动优聘",
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
				headerHeight: app.globalData.highTopHeight,
				currentPage: 1,
				list: [],
				pagination: {},
				tabbarHeight: 0,
				loginStatus: false
			}
		},
		components: {
			tabbar,
			customHeader
		},
		onLoad() {
			this.boxTop = this.marginTop + this.subTabHeight + 2 * this.tabMargin
			this.scrollHeight = app.globalData.systemHeight - this.marginTop - this.subTabHeight - 2 * this.tabMargin -
				this.tabbarHeight
			console.log(this.isLogin(), "isLogin")
			if (this.isLogin()) {
				this.loginStatus = true
			}
		},
		onShow() {
			this.showAi = true
			if (this.isLogin()) {
				this.loginStatus = true
				this.currentPage = 1
				this.getList()
			} else {
				this.loginStatus = false
				this.list = []
			}
		},
		onHide() {
			this.showAi = false
		},
		methods: {
			refreshData() {
				let _this = this
				if (!this.isPulling) {
					this.isPulling = true
					this.refreshStatus = true
					this.currentPage = 1
					this.list = []
					this.getList()
					setTimeout(function() {
						_this.refreshStatus = false
						_this.isPulling = false
					}, 1000);
				}
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
				this.currentPage = 1
				this.getList()
			},
			toDetail(id) {
				uni.navigateTo({
					url: "/subpkg/project_detail/project_detail?id=" + id
				})
			},
			getMore() {
				let url = "/worker/project/" + this.currentTab.value + "?page=" + this.currentPage
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = this.list.concat(res.data.list)
						this.pagination = res.data.pagination
					}
				})
			},
			getList() {
				let url = "/worker/project/" + this.currentTab.value + "?page=1"
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.pagination = res.data.pagination
					}
				})
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
	.period {
		font-size: 23rpx;
		color: #A8A8A8;
		display: inline-block;
		margin-left: 10rpx;
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
				width: 135rpx;
				height: 38rpx;
				border-radius: 0rpx 15rpx 0rpx 17rpx;
				line-height: 38rpx;
				text-align: center;
				font-size: 27rpx;
				background: rgba(249, 136, 6, 0.1);
				border: 1rpx solid #F77A0B;
				color: #F77A0B;

				&.wait_check_in {
					background: rgba(46, 215, 117, 0.1);
					border: 1rpx solid #2ED775;
					color: #2ED775;
				}

				&.check_in {
					background: rgba(123, 61, 249, 0.1);
					border: 1rpx solid #7B3DF9;
					color: #7B3DF9;
				}
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
						background: #0E5FE7;
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
					// overflow: hidden;
					text-align: center;
					box-sizing: border-box;
					font-size: 35rpx;
					color: #0E5FE7;
					font-weight: 600;
					text-align: right;
					padding: 0 0rpx 0 16rpx;
					margin-top: 20rpx;
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
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;

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