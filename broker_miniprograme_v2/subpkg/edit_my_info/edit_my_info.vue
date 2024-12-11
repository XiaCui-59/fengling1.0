<template>
	<view class="content">
		<customHeader :title="pageName" :showBack="true" :bgImage="imgUrl+'/broker/bg_2.png'"
			:headHeight="headerHeight"></customHeader>
		<view class="cont" :style="{marginTop:marginTop+'px'}">
			<view class="info">
				<view class="avatar">
					<button type="default" open-type="chooseAvatar" @chooseavatar="chooseAvatar">
						<image :src="info.broker.avatar.url?info.broker.avatar.url:imgUrl+'/broker/com_default.png'"
							mode="widthFix"></image>
						<view class="edit">
							<image :src="imgUrl+'/broker/ic_edit_info.png'" mode="widthFix"></image>
						</view>
					</button>
				</view>
				<view class="line">
					<view class="tit">姓名</view>
					<view class="input_wrap flex flex_btween">
						<input type="nickname" v-model="info.broker.name" placeholder="请输入姓名" class="focus" />
						<image :src="imgUrl+'/broker/ic_circle_ye.png'" mode="widthFix"></image>
					</view>
				</view>
				<view class="line">
					<view class="tit">手机号码</view>
					<view class="input_wrap flex flex_btween">
						<input type="text" v-model="info.broker.mobile" placeholder="请输入手机号" disabled />
					</view>
				</view>
			</view>
			<view class="btn" @click="confirm">确认修改</view>
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
				pageName: "公司认证",
				marginTop: app.globalData.marginTop,
				headerHeight: app.globalData.topHeight,
				tabMargin: app.globalData.tabMargin,
				info: {
					avatar: "",
					name: "",
					mobile: ""
				}
			}
		},
		components: {
			customHeader
		},
		async onLoad() {
			this.info = await this.getInfo()
		},
		methods: {
			// 获取头像
			async chooseAvatar(e) {
				console.log(e)
				let result = await this.loadImage(app.globalData.baseUrl, "avatar", e.detail.avatarUrl)
				this.info.broker.avatar.url = result.url
				this.info.broker.avatar.key = result.key

			},
			confirm() {
				let data = {
					"username": this.info.broker.name,
					"avatar": this.info.broker.avatar
				}
				this.$request("/broker/update-personal-info", data, "POST").then(async res => {
					if (res.code == 0) {
						uni.showToast({
							title: "更新成功",
							duration: 2000
						})
						this.info = await this.getInfo()
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cont {
		padding: 120rpx 40rpx 0rpx 40rpx;
		box-sizing: border-box;
		position: fixed;
		width: 100%;
		z-index: 100;

		.btn {
			height: 85rpx;
			line-height: 85rpx;
			background: #F7BC05;
			box-shadow: 0rpx 2rpx 4rpx 0rpx rgba(0, 0, 0, 0.15);
			border-radius: 15rpx;
			font-weight: 600;
			font-size: 29rpx;
			margin-top: 58rpx;
		}

		.info {
			background: url($back-ground-url+'/broker/edit_info_bg.png') no-repeat;
			background-size: 100% 100%;
			padding: 150rpx 40rpx 40rpx 40rpx;
			box-sizing: border-box;
			position: relative;

			.avatar {
				position: absolute;
				top: -90rpx;
				left: 50%;
				transform: translateX(-50%);

				button {
					display: block;
					width: 240rpx;
					height: 240rpx;
					padding-left: 0;
					padding-right: 0;
					background: transparent;
					line-height: auto;
					border-radius: 50%;
					overflow: visible;

					&::after {
						display: none;
					}

					&>image {
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}

					.edit {
						position: absolute;
						bottom: 8rpx;
						right: 8rpx;
						display: flex;

						image {
							width: 50rpx;
							flex-shrink: 0;
						}
					}
				}
			}

			.line {
				margin-top: 38rpx;

				.input_wrap {
					width: 100%;
					height: 85rpx;
					background: #F9F9F9;
					border-radius: 8rpx;
					padding: 0 20rpx;
					box-sizing: border-box;
					border-bottom: none;

					input {
						width: calc(100% - 40rpx);
						height: 100%;
						font-size: 27rpx;
					}

					.focus:focus {
						border: 2rpx solid #F7BC05;
					}

					image {
						width: 40rpx;
						flex-shrink: 0;
					}
				}
			}
		}
	}
</style>