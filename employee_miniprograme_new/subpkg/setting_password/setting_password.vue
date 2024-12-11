<template>
	<view class="content">
		<!-- #ifdef MP-WEIXIN || MP-KUAISHOU -->
		<customHeader :title="pageName" :showBack="true" :headHeight="headerHeight"></customHeader>
		<!-- #endif -->
		<view class="cont" :style="{marginTop:marginTop+'px'}">
			<view class="box" :style="{top:marginTop+'px'}">
				<view class="wrap">
					<view class="line" v-if="hasOldPassword">
						<view class="tit">旧密码</view>
						<view class="input_wrap flex flex_btween">
							<input type="password" v-model="oldPassword" placeholder="请输入旧密码"
								placeholder-style="font-size:28rpx;" @input="checkActive" />
							<image :src="imgUrl+'/worker/ic_close.png'" mode="widthFix" @click="reset('old')"></image>
						</view>
					</view>
					<view class="line">
						<view class="tit">新密码</view>
						<view class="input_wrap flex flex_btween">
							<input type="password" v-model="newPassword" placeholder="请输入新密码"
								placeholder-style="font-size:28rpx;" @input="checkActive" />
							<image :src="imgUrl+'/worker/ic_close.png'" mode="widthFix" @click="reset('new')"></image>
						</view>
					</view>
					<view class="line">
						<view class="tit">确认新密码</view>
						<view class="input_wrap flex flex_btween">
							<input type="password" v-model="veriPassword" placeholder="请再次输入新密码"
								placeholder-style="font-size:28rpx;" @input="checkActive" />
							<image :src="imgUrl+'/worker/ic_close.png'" mode="widthFix" @click="reset('veri')"></image>
						</view>
					</view>
				</view>
				<view class="btns flex flex_btween">
					<view class="btn sure" :class="showActive?'active':''" @click="confirmSet">确认</view>
					<!-- <view class="btn not" @click="notSet">暂不设置</view> -->
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
				pageName: "设置密码",
				marginTop: 0,
				currentMainTab: 0,
				scrollHeight: 0,
				boxTop: 0,
				headerHeight: 0,
				oldPassword: "",
				newPassword: "",
				veriPassword: "",
				showActive: false,
				hasOldPassword: false
			}
		},
		components: {
			tabbar,
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
			checkActive() {
				if (this.hasOldPassword) {
					if (!this.oldPassword || !this.newPassword || !this.veriPassword) {
						this.showActive = false
					} else {
						this.showActive = true
					}
				} else {
					if (!this.newPassword || !this.veriPassword) {
						this.showActive = false
					} else {
						this.showActive = true
					}
				}

			},
			reset(type) {
				if (type == 'old') {
					this.oldPassword = ""
				}
				if (type == 'new') {
					this.newPassword = ""
				}
				if (type == 'veri') {
					this.veriPassword = ""
				}
				this.checkActive()
			},
			getMarginTop(e) {
				let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
				this.marginTop = menuButtonInfo.height + menuButtonInfo.top + 10
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
			navigate(url) {
				uni.navigateTo({
					url: url
				})
			},
			notSet() {
				uni.navigateBack()
			},
			getInfo() {
				this.$request("/worker/profile").then(res => {
					if (res.code == 0) {
						this.hasOldPassword = res.data.has_old_password
					}
				})
			},
			confirmSet() {
				if (!this.showActive) {
					uni.showToast({
						title: "填写不完整",
						icon: "error",
						duration: 2000
					})
					return
				}
				let data = {
					"old_password": this.oldPassword,
					"new_password": this.newPassword,
					"new_password_confirmation": this.veriPassword
				}
				this.$request("/worker/password", data, "POST").then(res => {
					if (res.code == 0) {
						uni.showModal({
							title: "密码设置成功",
							showCancel: false,
							duration: 2000
						})
						setTimeout(function() {
							uni.switchTab({
								url: "/pages/mine/mine"
							})
						}, 2000)
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

		.wrap {
			padding: 40rpx;
			box-sizing: border-box;
			background: #fff;
			box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.15);
			border-radius: 20rpx;

			.line {
				margin-bottom: 40rpx;

				.tit {
					font-size: 28rpx;
					color: #5A5A5A;
					margin-bottom: 8rpx;
				}

				.input_wrap {
					height: 88rpx;
					background: #F9F9F9;
					border-radius: 4px;
					position: relative;

					input {
						height: 88rpx;
						line-height: 88rpx;
						width: calc(100% - 60rpx);
						padding: 0 40rpx;
						font-size: 28rpx;
						color: #333;
					}

					image {
						width: 40rpx;
						height: 40rpx;
						margin-right: 20rpx;
					}
				}
			}
		}

		.btns {
			margin-top: 60rpx;

			.btn {
				width: 100%;
				height: 88rpx;
				line-height: 88rpx;
				font-size: 30rpx;
				border-radius: 8px;
				text-align: center;

				&.sure {
					background: #FFFFFF;
					box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
					border-radius: 8px;
					border: 1px solid #F77A0B;
					color: #F77A0B;
				}

				&.active {
					background: linear-gradient(180deg, #FFDB01 0%, #F77A0B 100%);
					box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
					color: #fff;
					border: none;
				}

				// &.not {
				// 	border: 1px solid #C9C9C9;
				// 	color: #333;
				// }
			}
		}
	}
</style>