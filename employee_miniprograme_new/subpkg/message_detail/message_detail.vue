<template>
	<view class="content">
		<customHeader :title="pageName" :showBack="true" :headHeight="headerHeight"></customHeader>
		<view class="cont" :style="{marginTop:marginTop+'px'}">
			<view class="box" :style="{top:boxTop+'px'}">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
					:style="{height:scrollHeight+'px'}" @scrolltolower="lower" @scroll="scroll">
					<view class="message_title">{{info.title}}</view>
					<view class="text">{{info.content}}</view>
					<view class="bottom">{{info.create_time}}</view>
				</scroll-view>
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
				imgUrl: app.globalData.baseImageUrl,
				currentTab: 0,
				pageName: "消息详情",
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				comValue: "",
				startTime: "",
				endTime: "",
				currentStatus: 0, //0：进行中，1：已结束
				comRange: [{
						value: 0,
						text: "成都有职劳务有限公司"
					},
					{
						value: 1,
						text: "成都顶呱呱劳务有限公司"
					}
				],
				labels: [{
						value: "commission",
						text: "佣金",
					},
					{
						value: "system",
						text: "系统",
					}
				],
				info: {},
				currentMainTab: 0,
				scrollHeight: 0,
				boxTop: 0,
				headerHeight: app.globalData.highTopHeight,
				maskInnerTop: 0,
				btnBottom: app.globalData.btnBottom,
			}
		},
		components: {
			tabbar,
			customHeader
		},
		onLoad(param) {
			let _this = this
			this.boxTop = this.marginTop + this.tabMargin
			this.scrollHeight = app.globalData.systemHeight - this.marginTop - this.tabMargin -
				this.btnBottom
			this.info = JSON.parse(param.item)
			let url = "/broker/todo/" + this.info.id + "/read"
			this.$request(url, {}, "POST").then(res => {
				if (res.code == 0) {
					console.log("已读")
				}
			})
		},
		methods: {
			changeCom() {

			},
			changeStartTime(e) {

			},
			changeEndTime(e) {

			},
			changeStatus(index) {
				this.currentStatus = index
			},
			getMarginTop(e) {
				let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
				this.marginTop = menuButtonInfo.height + menuButtonInfo.top + 10
				this.maskInnerTop = this.marginTop + 20
			},
			getTopHeight() {
				let percent = 230 / 844
				let systemInfo = uni.getSystemInfoSync()
				this.headerHeight = Math.floor(systemInfo.screenHeight * percent)
			},
			getElementInfo() {
				let _this = this
				let topHeight = 0;
				let systemInfo = uni.getSystemInfoSync()
				let tabbarHeight = Math.floor(systemInfo.screenHeight * (46 / 844))
				console.log(tabbarHeight, "tabbar")
				let info = uni.createSelectorQuery().select(".top_area");
				info.boundingClientRect(function(data) { //data - 各种参数
					topHeight = data.bottom - data.top // 获取元素高度
					_this.boxTop = _this.marginTop + data.height
					_this.scrollHeight = systemInfo.screenHeight - _this.boxTop - tabbarHeight - 5
				}).exec()

			},
			changeMainTab(id) {
				this.currentMainTab = id
			},
			changeTab(id) {
				this.currentTab = id
			},
			toDetail(id) {
				uni.navigateTo({
					url: "/subpkg/message_detail/message_detail?id=" + id
				})
			},
			openMask(type) {
				this.showMask = true
			},
			close() {
				this.showMask = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top_area {
		width: calc(100% - 80rpx);
		position: fixed;
		left: 40rpx;
		font-size: 0;

		&>image {
			width: 100%;
		}

		.top {
			position: absolute;
			top: 3%;
			left: 50%;
			transform: translateX(-50%);
			width: calc(100% - 80rpx);
			padding: 14rpx 0;

			.title {
				position: relative;

				.circle {
					width: 12rpx;
					height: 12rpx;
					border-radius: 50%;
					background: #DD0000;
					margin-right: 8rpx;
				}

				.label {
					width: 80rpx;
					height: 52rpx;
					line-height: 52rpx;
					text-align: center;
					background: #4284F4;
					border-radius: 4px;
					font-size: 28rpx;
					color: #FFFFFF;
					margin-right: 8rpx;
				}

				.type {
					font-size: 28rpx;
					color: #333;
					line-height: 52rpx;
				}
			}

			.time {
				font-size: 24rpx;
				color: #5A5A5A;
			}
		}
	}

	.box {
		position: fixed;
		width: calc(100% - 80rpx);
		left: 40rpx;
		z-index: 3;
		// border-top-left-radius: 16rpx;
		// border-top-right-radius: 16rpx;
		overflow: hidden;
		background: url($back-ground-url+"/worker/ic_message_detail_bg.png") no-repeat;
		background-size: 100% 100%;
		background-position: 0 -2rpx;
		padding: 0 40rpx;
		box-sizing: border-box;
		font-size: 0;
		border-radius: 20rpx;
		overflow: hidden;

		.message_title {
			font-size: 34rpx;
			font-weight: bold;
			margin-top: 40rpx;
		}

		.text {
			font-size: 28rpx;
			color: #5A5A5A;
			line-height: 56rpx;
			margin-top: 30rpx;
		}

		.bottom {
			margin-top: 30rpx;
			text-align: right;
			font-size: 24rpx;
			color: #5A5A5A;
		}
	}
</style>