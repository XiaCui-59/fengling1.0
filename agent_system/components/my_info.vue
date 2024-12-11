<template>
	<view class="board">
		<view class="box">
			<view class="title">个人资料</view>
			<view class="base_info">
				<view class="line flex flex-start">
					<view class="tit">头像</view>
					<view class="image_wrap" @click="uploadImage">
						<image :src="info.broker.avatar.url" mode="widthFix"></image>
						<view class="image_upload">更换头像</view>

					</view>
				</view>
				<view class="line flex flex-start">
					<view class="tit">昵称</view>
					<view class="input_wrap">
						<input type="text" v-model="info.broker.name" placeholder="请输入昵称" />
					</view>
				</view>
				<view class="line flex flex-start">
					<view class="tit">手机号</view>
					<view class="input_wrap">
						<input type="text" v-model="info.broker.mobile" disabled="true" />
					</view>
					<view class="tips">（手机号无法修改）</view>
				</view>
				<view class="line" style="margin-top:50px;">
					<view class="btn" @click="confirm">确认修改</view>
				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		name: "commission_record",
		props: ["info"],
		data() {
			return {
				avatarImage: "",
				imageResult: {
					key: "",
					url: ""
				},
				userName: ""
			};
		},
		components: {},
		created() {
			// this.userName = this.info.broker.name
			// this.avatarImage = this.info.broker.avatar.url
			// console.log(this.avatarImage)

		},
		methods: {
			uploadImage() {
				let _this = this
				uni.chooseImage({
					count: 1,
					async success(res) {
						console.log(res.tempFilePaths)
						_this.info.broker.avatar.url = res.tempFilePaths[0]
						_this.imageResult = await _this.loadImage(app.globalData.baseUrl, "avatar", res
							.tempFilePaths[0])
						console.log("imageResult", _this.imageResult)
					}
				})
			},
			confirm() {
				let data = {
					"username": this.info.broker.name,
					"avatar": this.imageResult
				}
				this.$request("/broker/update-personal-info", data, "POST").then(res => {
					if (res.code == 0) {
						uni.showModal({
							title: "修改成功",
							showCancel: false
						})
						this.$emit("updateUserInfo")
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	.base_info {
		margin: 50px 0 30px 0;
		align-items: end;
		padding-left: 20px;

		.line {
			margin-bottom: 15px;

			.tit {
				margin-right: 15px;
				border-radius: 6px;
				box-sizing: border-box;
				font-weight: 600;
				font-size: 16px;
				width: 70px;
				text-align: left;
			}

			.image_wrap {
				width: 100px;
				height: 100px;
				border-radius: 50%;
				overflow: hidden;
				cursor: pointer;
				position: relative;
				border: 1px solid #ccc;

				image {
					width: 100px;
				}

				.image_upload {
					position: absolute;
					width: 100px;
					height: 100px;
					border-radius: 50%;
					top: 0;
					left: 0;
					background: rgba(0, 0, 0, .4);
					color: #fff;
					line-height: 100px;
					text-align: center;
					font-size: 14px;
					opacity: 0;
					transition: all .2s;
				}

				&:hover>.image_upload {
					opacity: 1;
				}
			}

			.input_wrap {
				width: 150px;
				height: 40px;
				background: #f6f6f6;
				border-radius: 4px;
				padding: 0 10px;

				input {
					height: 40px;
				}
			}

			.btn {
				width: 255px !important;
				max-width: 255px;
			}

			.tips {
				font-size: 12px;
				color: #f00;
				margin-left: 15px;
			}
		}
	}
</style>