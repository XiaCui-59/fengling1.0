<template>
	<view class="content">
		<customHeader :title="pageName" :showBack="false" :headHeight="headerHeight"></customHeader>
		<view class="cont" :style="{marginTop:marginTop+'px'}">
			<view class="top_area" :style="{top:marginTop+'px'}">
				<!-- <view class="subtabs flex flex-start"
					:style="{height:subTabHeight+'px',marginTop:tabMargin+'px',marginBottom:tabMargin+'px'}">
					<view class="subtab flex flex_around" v-for="(item,index) in tabs" :key="index"
						:class="currentTab.value==item.value?'active':''" @click="changeTab(item)">{{item.text}}</view>
				</view> -->
				<!-- 筛选按钮 -->
				<view class="sele_box flex flex-start" style="height:20px;"
					:style="{marginTop:tabMargin+'px',marginBottom:tabMargin+'px'}" @click="readAll">
					<image :src="imgUrl+'/broker/ic_message.png'" mode="widthFix"></image>
					<view class="text">全部已读</view>
				</view>
			</view>
			<view class="box" :style="{top:boxTop+'px',background:list.length==0?'#fff':'#F3F3F5'}">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y"
					:style="{height:scrollHeight+'px'}" refresher-enabled="true" :refresher-triggered="refreshStatus"
					@refresherpulling="refreshData" @scrolltolower="lower">
					<view class="empty" v-if="list.length == 0">
						<image :src="imgUrl+'/worker/empty_bg.png'" mode="widthFix"></image>
					</view>
					<view class="item" v-for="(item,index) in list" :key="index" v-if="list.length != 0">
						<view class="top flex flex-start">
							<view class="circle" v-if="!item.read"></view>
							<view class="text">{{item.title}}</view>
						</view>
						<view class="middle">
							<view class="detail">{{item.content}}</view>
						</view>
						<view class="bottom flex flex_end">
							<view class="text">{{item.create_time}}</view>
							<!-- <view class="opera flex flex_end">
								<view class="">查看详情</view>
								<image :src="imgUrl+'/worker/ic_more.png'" mode="widthFix"></image>
							</view> -->
						</view>
						<view class="read_label" v-if="item.read">
							<image :src="imgUrl+'/broker/ic_message_read.png'" mode="widthFix"></image>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<tabbar current="2" @getTabbarHeight="getTabbarHeight"></tabbar>
	</view>
</template>

<script>
	import tabbar from "@/components/tabbar.vue"
	import customHeader from "@/components/custom_header.vue"
	const app = getApp()
	export default {
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
				currentTab: {
					value: "wait-signing-requests",
					text: "待签约"
				},
				pageName: "消息",
				refreshStatus: true,
				isPulling: false,
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				subTabHeight: app.globalData.subTabHeight,
				scrollHeight: 0,
				boxTop: 0,
				headerHeight: app.globalData.highTopHeight,
				list: [],
				pagination: {},
				currentPage: 1,
				tabbarHeight: 0
			}
		},
		components: {
			tabbar,
			customHeader
		},
		// onPullDownRefresh() {
		// 	this.refreshData()
		// },
		onShow() {
			if (this.isLogin()) {
				this.currentPage = 1
				this.getList()
			} else {
				this.list = []
				// uni.showModal({
				// 	title: "提示",
				// 	content: "您当前未登录，或登录状态异常，请重新登录。",
				// 	success(res) {
				// 		if (res.confirm) {
				// 			uni.navigateTo({
				// 				url: "/pages/login/login"
				// 			})
				// 		}
				// 	}
				// })
			}

		},
		onLoad() {
			this.boxTop = this.marginTop + 2 * this.tabMargin + 20
			this.scrollHeight = app.globalData.systemHeight - this.marginTop - 2 * this.tabMargin -
				this.tabbarHeight - 20
		},
		methods: {
			getTabbarHeight(e) {
				this.tabbarHeight = e
			},
			readAll() {
				let _this = this
				if (this.list.length == 0) {
					uni.showToast({
						title: "暂无消息",
						icon: "error",
						duration: 3000
					})
					return
				}
				uni.showModal({
					title: "是否全部标记为已读。",
					success(resp) {
						if (resp.confirm) {
							_this.$request("/worker/notifications/read-all", {}, "POST").then(res => {
								if (res.code == 0) {
									console.log("全部已读")
									_this.list = []
									_this.getList()
								}
							})
						}
					}
				})
			},
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
			// toDetail(item) {
			// 	uni.navigateTo({
			// 		url: "/subpkg/message_detail/message_detail?item=" + JSON.stringify(item)
			// 	})
			// },
			getMore() {
				let url = "/worker/notifications?page=" + this.currentPage
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = this.list.concat(res.data.list)
						this.pagination = res.data.pagination
					}
				})
			},
			getList() {
				let url = "/worker/notifications?page=1"
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
	::v-deep {
		.uni-select {
			border: none;
			background: #fff;
			height: 88rpx;
			font-size: 28rpx;
			border-radius: 8rpx;
			padding: 0 40rpx;
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
			background: #4284F4;
		}

		.uni-datetime-picker-btn-text {
			color: #4284F4;
		}
	}

	.top_area {
		width: calc(100% - 96rpx);
		position: fixed;
		left: 48rpx;

		.sele_box {
			margin: 0 20rpx 20rpx 0;

			.text {
				font-size: 28rpx;
				color: #fff;
				font-weight: bold;
			}

			image {
				width: 34rpx;
				height: 30rpx;
				margin-right: 8rpx;
				will-change: transform;
			}
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
			padding: 0 40rpx 40rpx 40rpx;
			border-radius: 16rpx;
			background: #fff;
			box-shadow: 0 2rpx 6rpx 0 rgba(0, 0, 0, 0.15);
			margin-bottom: 20rpx;
			position: relative;

			.top {
				padding: 14rpx 0;
				border-bottom: 1px dashed #979797;

				.circle {
					width: 12rpx;
					height: 12rpx;
					border-radius: 50%;
					background: #DD0000;
					margin-right: 8rpx;
				}

				.text {
					font-weight: 600;
					font-size: 27rpx;
					color: #333333;
				}


			}

			.middle {
				font-size: 24rpx;
				padding: 24rpx 0;

				.detail {
					color: #5A5A5A;
					line-height: 40rpx;
				}

				.mark {
					font-size: 36rpx;
					color: #333;
					margin-right: 8rpx;
				}

				.yellow {
					color: #4284F4;
				}
			}

			.bottom {
				height: 60rpx;
				border-radius: 6rpx;
				line-height: 60rpx;
				background: #F6F6F6;
				font-size: 24rpx;
				color: #686868;

				.opera {
					font-size: 24rpx;
					color: #4284F4;
				}

				image {
					width: 20rpx;
					height: 20rpx;
				}
			}

			.read_label {
				position: absolute;
				top: 0;
				right: 0;

				image {
					width: 74rpx;
					height: 74rpx;
				}
			}
		}

		.item2 {
			padding: 40rpx;
			border-radius: 16rpx;
			background: #fff;
			box-shadow: 0 2rpx 6rpx 0 rgba(0, 0, 0, 0.15);
			margin-bottom: 20rpx;

			.top {
				.title {
					font-size: 36rpx;
					padding-left: 22rpx;
					position: relative;
					font-weight: bold;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;

					&:before {
						content: "";
						width: 8rpx;
						height: 36rpx;
						background: #216FF9;
						position: absolute;
						top: 50%;
						left: 0;
						transform: translateY(-50%);
					}
				}
			}

			.middle {
				margin-top: 28rpx;
			}

			.line {
				margin-top: 16rpx;

				.tit {
					width: 80rpx;
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
					width: calc(100% - 88rpx);
					font-size: 30rpx;
					color: #333333;
				}
			}

			.bottom {
				.line {
					width: 50%;

					.blue {
						font-weight: bold;
						font-size: 36rpx;
						color: #216FF9;
					}

					.period {
						font-size: 24rpx;
						color: #A8A8A8;
						margin-left: 8rpx;
					}
				}

				.company {
					width: 50%;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					background: #F6F6F6;
					height: 60rpx;
					border-radius: 6rpx;
					line-height: 60rpx;
					padding: 0 22rpx;
					font-size: 28rpx;
					color: #686868;
				}
			}
		}
	}
</style>