<template>
	<view class="content">
		<customHeader :title="pageName" :showBack="true" :bgImage="imgUrl+'/broker/bg_3.png'"
			:headHeight="headerHeight"></customHeader>
		<view class="cont" :style="{marginTop:marginTop+tabMargin+'px'}">
			<view class="box" :style="{top:marginTop+tabMargin+'px'}">
				<view class="wrap">
					<view class="line" v-if="hasOldPassword">
						<view class="tit">旧密码</view>
						<view class="input_wrap  flex flex_btween">
							<input type="password" v-model="oldPassword" placeholder="请输入旧密码"
								placeholder-style="font-size:28rpx;" @input="checkActive" />
							<image :src="imgUrl+'/broker/ic_close_circle.png'" mode="widthFix" @click="reset('old')">
							</image>
						</view>
					</view>
					<view class="line">
						<view class="tit">{{hasOldPassword?"新密码":"设置密码"}}</view>
						<view class="input_wrap flex flex_btween">
							<input type="password" v-model="newPassword" placeholder="请输入新密码"
								placeholder-style="font-size:28rpx;" @input="checkActive" />
							<image :src="imgUrl+'/broker/ic_close_circle.png'" mode="widthFix" @click="reset('new')">
							</image>
						</view>
					</view>
					<view class="line">
						<view class="tit">确认新密码</view>
						<view class="input_wrap flex flex_btween">
							<input type="password" v-model="veriPassword" placeholder="请再次输入新密码"
								placeholder-style="font-size:28rpx;" @input="checkActive" />
							<image :src="imgUrl+'/broker/ic_close_circle.png'" mode="widthFix" @click="reset('veri')">
							</image>
						</view>
					</view>
				</view>
				<view class="btns flex flex_btween">
					<view class="btn sure" :class="showActive?'active':''" @click="confirmSet">确认</view>
					<view class="btn not" @click="notSet">暂不设置</view>
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
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				currentMainTab: 0,
				scrollHeight: 0,
				boxTop: 0,
				headerHeight: app.globalData.topHeight,
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
			notSet() {
				uni.navigateBack()
			},
			getInfo() {
				this.$request("/broker/info").then(res => {
					if (res.code == 0) {
						this.hasOldPassword = res.data.broker.has_old_password
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
				this.$request("/broker/password", data, "POST").then(res => {
					if (res.code == 0) {
						uni.showModal({
							title: "密码设置成功",
							showCancel: false,
							duration: 2000
						})
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
					width: 100%;
					height: 88rpx;
					background: #F9F9F9;
					border-radius: 4px;
					position: relative;
					border-bottom: none;

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
				width: 48%;
				height: 88rpx;
				line-height: 88rpx;
				font-size: 30rpx;
				border-radius: 8px;
				text-align: center;
				margin-top: 0;

				&.sure {
					background: #FFFFFF;
					box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
					border: 1px solid #F7BB05;
					color: #F7BB05;
				}

				&.active {
					background: #F7BC05;
					color: #fff;
				}

				&.not {
					border: 1px solid #C9C9C9;
					color: #333;
					background: transparent;
				}
			}
		}
	}
</style>