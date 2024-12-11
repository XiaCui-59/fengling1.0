<template>
	<view class="content">
		<customHeader :title="pageName" :showBack="true" :headHeight="headerHeight"></customHeader>
		<view class="cont" :style="{marginTop:marginTop+'px'}">
			<view class="top_area" :style="{top:marginTop+'px'}" v-if="info.human_resources_permit_image.url">
				<view class="item">
					<view class="title flex flex-start">
						<image :src="imgUrl+'/broker/ic_title.png'" mode="widthFix"></image>
						<text>人力资源许可证</text>
					</view>
					<view class="img_wrap">
						<image :src="info.human_resources_permit_image.url" mode="widthFix"></image>
					</view>
				</view>
				<view class="item">
					<view class="title flex flex-start">
						<image :src="imgUrl+'/broker/ic_title.png'" mode="widthFix"></image>
						<text>劳务派遣证</text>
					</view>
					<view class="img_wrap">
						<image :src="info.labor_dispatch_permit_image.url" mode="widthFix"></image>
					</view>
				</view>
				<view class="empty" style="position: fixed;top:50%;" v-if="!info.human_resources_permit_image.url">
					<image :src="imgUrl+'/broker/empty.png'" mode="heightFix"></image>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import customHeader from "@/components/custom_header.vue"
	const app = getApp()
	export default {
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
				pageName: "两证信息",
				marginTop: 0,
				scrollHeight: 0,
				boxTop: 0,
				headerHeight: 0,
				maskInnerTop: 0,
				info: {
					"human_resources_permit_image": "",
					"labor_dispatch_permit_image": "",
				}
			}
		},
		components: {
			customHeader
		},
		onLoad() {
			let _this = this
			this.getMarginTop()
			setTimeout(function() {
				_this.getElementInfo()
				_this.getTopHeight()
			}, 500)
			this.getInfo()
		},
		methods: {
			getInfo() {
				this.$request("/broker/info").then(res => {
					if (res.code == 0) {
						this.info = res.data
					} else {
						uni.showModal({
							title: res.msg
						})
					}
				})
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
					if (data) {
						topHeight = data.bottom - data.top // 获取元素高度
						_this.boxTop = _this.marginTop + data.height
						_this.scrollHeight = systemInfo.screenHeight - _this.boxTop - tabbarHeight - 5
					}

				}).exec()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.top_area {
		width: calc(100% - 96rpx);
		position: fixed;
		left: 48rpx;

		.item {
			background: #FFFFFF;
			box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.15);
			border-radius: 16rpx;
			overflow: hidden;
			margin-bottom: 40rpx;

			.title {
				height: 80rpx;
				line-height: 80rpx;
				padding: 0 40rpx;
				background: url($back-ground-url+"/broker/bg_title.png") no-repeat;
				background-size: 100% 100%;
				font-size: 30rpx;
				color: #333;

				image {
					width: 32rpx;
					height: 32rpx;
					margin-right: 8rpx;
				}
			}

			.img_wrap {
				padding: 40rpx;
				box-sizing: border-box;

				image {
					width: 100%;
				}
			}
		}
	}
</style>