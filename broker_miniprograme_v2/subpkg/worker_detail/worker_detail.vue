<template>
	<view class="content">
		<customHeader :title="pageName" :showBack="true" :bgImage="imgUrl+'/broker/bg_2.png'"
			:headHeight="headerHeight"></customHeader>
		<view class="cont" :style="{marginTop:marginTop+tabMargin+'px'}">
			<view class="top_area">
				<view class="base_info">
					<view class="base_top flex flex-start">
						<image :src="workerInfo.worker_avatar" mode="widthFix"></image>
						<view class="base">
							<view class="flex flex_btween">
								<view class="name">{{workerInfo.worker_name}}</view>
								<view class="posi">职位：{{workerInfo.project_name}}</view>
							</view>
							<view class="mobile">{{workerInfo.worker_mobile}}</view>
						</view>
					</view>
					<view class="base_bot flex flex_around">
						<view class="text">{{workerInfo.worker_gender=="male"?"男":"女"}}</view>
						<view class="line"></view>
						<view class="text">{{workerInfo.worker_nation}}</view>
						<view class="line"></view>
						<view class="text">{{workerInfo.worker_age+"岁"}}</view>
					</view>
				</view>
				<view class="tabs flex">
					<view class="tab" :class="currentTab==0?'active':''" @click="changeTab(0)">评估报告</view>
					<view class="tab" :class="currentTab==1?'active':''" @click="changeTab(1)">跟进记录</view>
				</view>
			</view>
			<scroll-view scroll-y="true" :style="{height:scrollHeight+'px',marginTop:tabMargin+'px'}"
				@scrolltolower="scrolltolower">
				<view class="report" v-show="currentTab == 0">
					<view class="item">
						<view class="title">候选匹配度</view>
						<view class="detail" v-if="currentMatch.candidateMatchScore">
							<view class="text_line flex flex-start"
								v-for="(value,key,index) in JSON.parse(currentMatch.candidateMatchScore)" :key="index">
								<view class="tit">{{key}}：</view>
								<view class="text">{{value}}</view>
							</view>
						</view>
						<view v-if="!currentMatch.candidateMatchScore" style="color:#0092ff;font-size: 14px;">
							暂无数据</view>
					</view>
					<!-- <view class="item">
						<view class="title">工作经验</view>
						<view class="detail">
							<view class="text">做过2年富士康流水线</view>
							<view class="text">做过2年富士康流水线</view>
							<view class="text">做过2年富士康流水线</view>
						</view>
					</view> -->
					<view class="item">
						<view class="title">聊天记录摘要</view>
						<view class="detail" v-if="currentMatch.chatSummary">
							<view class="chat_item" v-for="(item,index) in currentMatch.chatSummary" :key="index"
								v-if="item.origin!='system_event'">
								<view class="chat_top flex flex-start" :class="item.origin">
									<view class="origin">
										{{item.origin=="customer"?(item.customer_nickname?item.customer_nickname:"用户"):"风铃"}}
									</view>
									<view class="time">{{item.send_time}}</view>
								</view>
								<view class="chat_content">{{item.content}}</view>
							</view>
						</view>
						<view v-if="!currentMatch.chatSummary" style="color:#0092ff;font-size: 14px;">
							暂无数据</view>
					</view>
				</view>
				<view class="follow" v-show="currentTab == 1" style="min-height: 100%;">
					<view class="foll_line follow_item" v-for="(item,index) in followList" :key="index">
						<view class="follow_cont">{{item.remark}}</view>
						<view class="follow_time flex flex_btween">
							<view class="time">{{item.create_time}}</view>
							<view class="status">
								{{status.filter(el=>{return el.value == item.status})[0].text}}
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import customHeader from "@/components/custom_header.vue"
	import commonData from "@/common/commonData"
	const app = getApp()
	export default {
		data() {
			return {
				status: commonData.workerStatus,
				systemHeight: app.globalData.systemHeight,
				imgUrl: app.globalData.baseImageUrl,
				pageName: "工人详情",
				marginTop: app.globalData.marginTop,
				headerHeight: app.globalData.topHeight,
				tabMargin: app.globalData.tabMargin,
				currentTab: 0,
				scrollHeight: 0,
				workerInfo: {

				},
				followList: [],
				currentMatch: {}
			}
		},
		components: {
			customHeader
		},
		async onLoad(param) {
			this.workerInfo = JSON.parse(decodeURIComponent(param.worker_info))
			this.getFollowList()
			this.getReport()
			this.getScrollHeight()
		},
		methods: {
			changeTab(index) {
				this.currentTab = index
			},
			getScrollHeight() {
				let _this = this
				let info = uni.createSelectorQuery().select(".top_area");
				info.boundingClientRect(function(data) { //data - 各种参数
					if (data) {
						_this.scrollHeight = _this.systemHeight - _this.marginTop - 3 * _this.tabMargin - data
							.height
					}

				}).exec()

			},
			getFollowList() {
				let url = "/broker/remarks/" + this.workerInfo.worker_id + "/" + this.workerInfo.project_id
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.followList = res.data
					}
				})
			},
			getReport() {
				let url = "/broker/interview_record/" + this.workerInfo.id
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.currentMatch = res.data
					}
				})
			},
			scrolltolower() {
				// if (this.currentTab) {
				// 	// 跟进记录
				// }
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cont {
		padding: 0rpx 40rpx 0rpx 40rpx;
		box-sizing: border-box;
		position: fixed;
		width: 100%;
		z-index: 100;

		.base_info {
			padding: 40rpx;
			border-radius: 16rpx;
			background: #fff;
			box-shadow: 0 2rpx 6rpx 0 rgba(0, 0, 0, 0.15);
			margin-bottom: 20rpx;
			position: relative;
			box-sizing: border-box;

			.base_top {
				margin-bottom: 30rpx;
				background: #F6F6F6;
				border-radius: 8rpx;
				padding: 20rpx;
				box-sizing: border-box;

				image {
					width: 88rpx;
					height: 88rpx;
					background: #ccc;
					margin-right: 30rpx;
					border-radius: 50%;
					flex-shrink: 0;
				}

				.base {
					width: calc(100% - 118rpx);
				}

				.mobile {
					margin-top: 20rpx;
					font-size: 27rpx;
				}

				.name {
					width: 140rpx;
					margin-right: 10rpx;
					font-size: 32rpx;
					color: #000;
				}

				.posi {
					width: calc(100% - 150rpx);
					flex-shrink: 0;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
					font-weight: 400;
					font-size: 23rpx;
					color: #EA9900;
					text-align: right;
				}
			}

			.base_bot {
				.text {
					height: 50rpx;
					line-height: 50rpx;
				}

				.line {
					margin-top: 0;
					width: 2rpx;
					height: 30rpx;
					background: #DFDFDF;
				}
			}
		}

		.tabs {
			padding: 25rpx 0;
			background: #fff;
			box-sizing: border-box;
			border-radius: 10rpx;
			box-shadow: 0 2rpx 6rpx 0 rgba(0, 0, 0, 0.15);

			.tab {
				width: 50%;
				position: relative;
				text-align: center;

				&:first-child {
					&::before {
						content: "";
						width: 2rpx;
						height: 30rpx;
						background: #DFDFDF;
						position: absolute;
						top: 50%;
						right: -1rpx;
						transform: translateY(-50%);
					}
				}

				&.active {
					color: #F7BC05;
					font-weight: 600;
				}

				&.active::after {
					content: "";
					width: 30rpx;
					height: 10rpx;
					background: url($back-ground-url+'/broker/arrow_down_yellow.png') no-repeat;
					background-size: 100% 100%;
					position: absolute;
					bottom: -15rpx;
					left: 50%;
					transform: translateX(-50%);
				}
			}
		}

		.report {
			.item {
				padding: 19rpx 40rpx;
				border-radius: 16rpx;
				background: #fff;
				box-shadow: 0 2rpx 6rpx 0 rgba(0, 0, 0, 0.15);
				margin-bottom: 20rpx;
				position: relative;
				box-sizing: border-box;

				.title {
					font-weight: 600;
					font-size: 29rpx;
					color: #333333;
					margin-bottom: 19rpx;
					position: relative;
					padding-left: 20rpx;

					&:before {
						content: "";
						width: 8rpx;
						height: 27rpx;
						background: #F7BC05;
						border-radius: 2rpx;
						position: absolute;
						top: 50%;
						left: 0;
						transform: translateY(-50%);
					}
				}

				.detail {

					.text_line,
					&>.text {
						padding: 25rpx 0;
						border-top: 2rpx dotted #DFDFDF;
						font-weight: 400;
						font-size: 27rpx;
						color: #333333;
					}

					.text_line {
						.tit {
							color: #6E6E6E;
						}
					}

					.chat_item {
						margin-bottom: 20rpx;

						.chat_top {
							font-weight: 400;
							font-size: 23rpx;

							&.ai {
								color: #F7BC05;
							}

							&.customer {
								color: #216FF9;
							}

							.origin {
								margin-right: 20rpx;
							}
						}

						.chat_content {
							font-size: 27rpx;
							color: #333333;
						}

					}
				}
			}
		}

		.follow {
			padding: 19rpx 40rpx;
			border-radius: 16rpx;
			background: #fff;
			box-shadow: 0 2rpx 6rpx 0 rgba(0, 0, 0, 0.15);
			box-sizing: border-box;

			.follow_item {
				margin-bottom: 20px;
				padding-left: 20px;
				box-sizing: border-box;
				position: relative;

				&::before {
					content: "";
					width: 10px;
					height: 10px;
					background: #F7BC05;
					border-radius: 50%;
					position: absolute;
					top: 5px;
					left: 0;
				}

				.follow_cont {
					color: #333;
					font-size: 28rpx;
					margin-bottom: 10rpx;
				}

				.follow_time {
					font-size: 28rpx;
					color: #5a5a5a;

					.status {
						margin-left: 10px;
						color: #0092ff;
					}
				}
			}

			.tit {
				font-size: 32rpx;
				font-weight: 600;
				color: #333;
				margin-bottom: 40rpx;
			}

			.foll_line {
				margin-bottom: 30rpx;
			}

			.subtit {
				position: relative;
				padding-left: 14rpx;
				font-size: 28rpx;
				margin-bottom: 25rpx;

				&::before {
					content: "";
					width: 6rpx;
					height: 80%;
					background: #F7BC05;
					position: absolute;
					left: 0;
					top: 50%;
					transform: translateY(-50%);
				}
			}

			.status_item {
				flex-wrap: wrap;
			}
		}
	}
</style>