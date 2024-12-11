<template>
	<view class="content">
		<customHeader :title="pageName" :showBack="true" :bgImage="imgUrl+'/broker/bg_3.png'"
			:headHeight="headerHeight"></customHeader>
		<view class="cont" :style="{marginTop:marginTop+tabMargin+'px'}">
			<view class="box" :style="{top:marginTop+tabMargin+'px'}">
				<view class="line flex flex_btween" @click="navigate('/subpkg/edit_my_info/edit_my_info')">
					<view class="left flex flex-start">
						<image :src="imgUrl+'/broker/ic_setting_edit.png'" mode="widthFix">
						</image>
						<view class="text">编辑资料</view>
					</view>
					<view class="right">
						<image :src="imgUrl+'/broker/ic_trangle_right.png'" mode="widthFix"></image>
					</view>
				</view>
				<view class="line flex flex_btween" @click="navigate('/subpkg/setting_password/setting_password')">
					<view class="left flex flex-start">
						<image :src="imgUrl+'/broker/ic_lock.png'" mode="widthFix"></image>
						<view class="text">设置密码</view>
					</view>
					<view class="right">
						<image :src="imgUrl+'/broker/ic_trangle_right.png'" mode="widthFix"></image>
					</view>
				</view>
				<view class="line flex flex_btween" @click="navigate('/subpkg/about_us/about_us')">
					<view class="left flex flex-start">
						<image :src="imgUrl+'/broker/ic_tips.png'" mode="widthFix"></image>
						<view class="text">关于我们</view>
					</view>
					<view class="right">
						<image :src="imgUrl+'/broker/ic_trangle_right.png'" mode="widthFix"></image>
					</view>
				</view>
				<view class="line flex flex_btween" @click="logout">
					<view class="left flex flex-start">
						<image :src="imgUrl+'/broker/ic_logout.png'" mode="widthFix"></image>
						<view class="text">退出登录</view>
					</view>
					<view class="right">
						<image :src="imgUrl+'/broker/ic_trangle_right.png'" mode="widthFix"></image>
					</view>
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
				currentMainTab: 0,
				headerHeight: app.globalData.topHeight,
			}
		},
		components: {
			tabbar,
			customHeader
		},
		onLoad() {},
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
							_this.$request("/broker/logout", {}, "POST").then(res => {
								if (res.code == 0) {
									uni.clearStorage()
									uni.switchTab({
										url: "/pages/index/index"
									})
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