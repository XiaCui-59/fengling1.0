<template>
	<view class="content">
		<customHeader :title="pageName" :showBack="true" :headHeight="headerHeight"></customHeader>
		<view class="cont" :style="{marginTop:marginTop+'px'}">
			<!-- <view class="top_area" :style="{top:marginTop+'px'}">公司简介
				<image :src="imgUrl+'/broker/ic_message_title.png'" mode="widthFix"></image>
				<view class="top flex flex_btween">
					<view class="title flex flex-start">
						<view class="label"></view>
					</view>
				</view>
			</view> -->
			<view class="box" :style="{top:marginTop+tabMargin+'px'}">
				<image :src="imgUrl+'/broker/ic_message_bg2.png'" mode="widthFix"></image>
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
					:style="{height:scrollHeight+'px'}" @scrolltolower="lower" @scroll="scroll">
					<view class="message_title">关于灵动优聘</view>
					<view class="text">
						灵动优聘是成都灵动世界科技有限公司旗下灵活就业与灵活用工的人力资源供应链服务平台。我们希望用工方和蓝领工人都可以通过灵动优聘能快速匹配、优质匹配，提高行业工作效率，优化行业服务流程。灵动优聘是一个面向工厂、物流快递、商圈短期用工的新型人力资源服务平台，通过人工智能技术实现短期用工的招募、入职、合同、保险、考勤、发薪、税务等完整业务流程，支持人力资源的线索收集、激活、预估、保量和竞价等核心功能。与传统零工供应链系统相比，灵动优聘以低成本规模化的方式实现人力资源的线索、激活和调度，最大程度的降低用工成本，提高用工效率。
					</view>
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
				pageName: "公司简介",
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
				info: {
					id: 0,
					type: "commission",
					typeName: "佣金信息",
					title: "爱丽丝顿大酒店-保安 佣金已经到账！",
					content: "尊敬的代理商合作伙伴：为了进一步提升公司尊敬的代理商合作伙伴：为了进一步提升公司尊敬的代理商合作伙伴：为了进一步提升公司",
					time: "2023.03.12",
					status: "unread",
				},
				currentMainTab: 0,
				scrollHeight: 0,
				boxTop: 0,
				headerHeight: app.globalData.topHeight,
				btnBottom: app.globalData.btnBottom,
				maskInnerTop: 0
			}
		},
		components: {
			tabbar,
			customHeader
		},
		onLoad() {
			let _this = this
			this.scrollHeight = app.globalData.systemHeight - this.marginTop - this.tabMargin - this.btnBottom
			// this.getMarginTop()
			// setTimeout(function() {
			// 	_this.getElementInfo()
			// 	_this.getTopHeight()
			// }, 500)

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
				let percent = 200 / 844
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
		width: calc(100% - 96rpx);
		position: fixed;
		left: 48rpx;
		font-size: 0;
		padding: 0 20rpx;
		height: 52rpx;
		line-height: 52rpx;
		text-align: center;
		background: #F7BC05;
		border-radius: 4px;
		font-size: 28rpx;
		color: #FFFFFF;
		margin-right: 8rpx;
		// &>image {
		// 	width: 100%;
		// }

		// .top {
		// 	position: absolute;
		// 	top: 3%;
		// 	left: 50%;
		// 	transform: translateX(-50%);
		// 	width: calc(100% - 80rpx);
		// 	padding: 14rpx 0;

		// 	.title {
		// 		position: relative;

		// 		.label {

		// 		}
		// 	}
		// }
	}

	.box {
		position: fixed;
		width: calc(100% - 96rpx);
		left: 48rpx;
		z-index: 3;
		// border-top-left-radius: 16rpx;
		// border-top-right-radius: 16rpx;
		overflow: hidden;
		background: url($back-ground-url+"/broker/ic_message_bg_void.png") no-repeat;
		background-size: 100% 100%;
		padding: 0 40rpx;
		box-sizing: border-box;
		border-radius: 20rpx;
		overflow: hidden;

		&>image {
			position: absolute;
			width: 100%;
			left: 0;
			top: 0;
		}

		.message_title {
			padding-top: 40rpx;
			font-size: 34rpx;
			font-weight: bold;
		}

		.text {
			text-indent: 2em;
			font-size: 28rpx;
			color: #5A5A5A;
			line-height: 56rpx;
			margin-top: 30rpx;
		}
	}
</style>