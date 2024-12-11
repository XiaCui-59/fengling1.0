<template>
	<view class="mask">
		<view class="inner">
			<view class="name" v-if="!showNameInput">
				<view class="title flex flex_btween">
					<text>完善信息</text>
					<image :src="imgUrl+'/broker/ic_circle_ye.png'" mode="widthFix" @click.stop="close"></image>
				</view>
			</view>
			<view class="name" v-if="showNameInput">
				<view class="title flex flex_btween">
					<text>真实姓名</text>
					<image :src="imgUrl+'/broker/ic_circle_ye.png'" mode="widthFix" @click.stop="close"></image>
				</view>
				<view class="input_wrap">
					<input type="text" v-model="name" placeholder="请输入你的真实姓名" />
				</view>
			</view>
			<view class="btn" @click.stop="toAuth">上传证照资质</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		name: "info_first",
		props: ["showNameInput"],
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
				name: ""
			};
		},
		methods: {
			toAuth() {
				if (this.showNameInput) {
					// 先保存姓名
					if (!this.name) {
						uni.showToast({
							title: "请先填写姓名",
							duration: 2000,
							icon: "error"
						})
						return
					}
					let data = {
						"username": this.name,
						"avatar": {
							key: "",
							url: ""
						}
					}
					this.$request("/broker/update-personal-info", data, "POST").then(res => {
						if (res.code == 0) {
							this.$emit("handleName")
							uni.navigateTo({
								url: "/subpkg/authentication/authentication"
							})
							this.close()
						}
					})

				}else{
					uni.navigateTo({
						url: "/subpkg/authentication/authentication"
					})
					this.close()
				}

			},
			close() {
				this.$emit("closeAddInfo")
			}
		}
	}
</script>

<style lang="scss" scoped>
	.inner {
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		background: #fff;
		padding: 28rpx 48rpx;
		box-sizing: border-box;
		border-radius: 73rpx 73rpx 0rpx 0rpx;

		.name {
			padding: 0 30rpx;
			box-sizing: border-box;

			.title {
				font-weight: 600;
				font-size: 32rpx;
				color: #333333;
				line-height: 40rpx;

				image {
					width: 38rpx;
				}
			}

			.input_wrap {
				width: 100%;
				height: 85rpx;
				background: #F9F9F9;
				border-radius: 8rpx;
				margin-top: 30rpx;
				border-bottom: none;

				input {
					width: 100%;
					height: 85rpx;
					padding: 0 28rpx;
					box-sizing: border-box;
					font-size: 28rpx;
				}
			}
		}

		.btn {
			height: 85rpx;
			line-height: 85rpx;
			background: #F7BC05;
			box-shadow: 0rpx 2rpx 4rpx 0rpx rgba(0, 0, 0, 0.15);
			border-radius: 15rpx;
			margin-top: 86rpx;
			font-weight: 600;
			font-size: 29rpx;
		}
	}
</style>