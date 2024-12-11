<template>
	<view class="content">
		<!-- #ifdef MP-WEIXIN || MP-KUAISHOU -->
		<customHeader :title="pageName" :showBack="true" :headHeight="headerHeight"></customHeader>
		<view class="cont" :style="{marginTop:marginTop+tabMargin+'px'}">
			<view class="box" :style="{top:marginTop+tabMargin+'px'}">
			<!-- #endif -->
				<!-- #ifdef MP-TOUTIAO -->
				<view class="cont" :style="{marginTop:tabMargin+'px'}">
					<view class="box" :style="{top:tabMargin+'px'}">
					<!-- #endif -->

						<view class="line flex flex_btween"
							@click="navigate('/subpkg/setting_password/setting_password')">
							<view class="left flex flex-start">
								<image :src="imgUrl+'/worker/ic_lock.png'" mode="widthFix"></image>
								<view class="text">设置密码</view>
							</view>
							<view class="right">
								<image :src="imgUrl+'/worker/ic_trangle_right.png'" mode="widthFix"></image>
							</view>
						</view>
						<view class="line flex flex_btween" @click="navigate('/subpkg/about_us/about_us')">
							<view class="left flex flex-start">
								<image :src="imgUrl+'/worker/ic_about.png'" mode="widthFix"></image>
								<view class="text">关于我们</view>
							</view>
							<view class="right">
								<image :src="imgUrl+'/worker/ic_trangle_right.png'" mode="widthFix"></image>
							</view>
						</view>
						<view class="line flex flex_btween" @click="logout">
							<view class="left flex flex-start">
								<image :src="imgUrl+'/worker/ic_logout.png'" mode="widthFix"></image>
								<view class="text">退出登录</view>
							</view>
							<!-- <view class="right">
						<image :src="imgUrl+'/worker/ic_trangle_right.png'" mode="widthFix"></image>
					</view> -->
						</view>
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
				pageName: "设置",
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				scrollHeight: 0,
				headerHeight: app.globalData.topHeight,
			}
		},
		components: {
			tabbar,
			customHeader
		},
		onLoad() {
			let _this = this
			this.scrollHeight = app.globalData.systemHeight - this.marginTop - 3 * this.tabMargin
		},
		methods: {
			navigate(url) {
				uni.navigateTo({
					url: url
				})
			},
			logout() {
				let _this = this
				uni.showModal({
					title: "退出提示",
					content: "是否确认退出登录？",
					success(resp) {
						if (resp.confirm) {
							_this.$request("/worker/logout", {}, "POST").then(res => {
								if (res.code == 0) {
									uni.clearStorage()
									// #ifdef MP-WEIXIN
									uni.switchTab({
										url: "/pages/index/index"
									})
									// #endif
									// #ifdef MP-KUAISHOU
									uni.switchTab({
										url: "/pages/work/work"
									})
									// #endif
								}
							})
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.box {
		position: fixed;
		width: calc(100% - 96rpx);
		left: 48rpx;
		z-index: 3;
		padding: 40rpx;
		box-sizing: border-box;
		background: #fff;
		box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.15);
		border-radius: 20rpx;

		.line {
			height: 100rpx;
			line-height: 100rpx;
			border-bottom: 1px dashed #DFDFDF;

			.left {
				image {
					width: 30rpx;
					height: 34rpx;
					margin-right: 8rpx;
				}

				.text {
					font-size: 28rpx;
					color: #333;
				}
			}

			.right {
				image {
					width: 14rpx;
					height: 24rpx;
				}
			}
		}
	}
</style>