<template>
	<view class="form">
		<view class="title">个人简历</view>
		<view class="tips">完善基本信息，获得更多高薪岗位机会</view>
		<view class="line_box">
			<view class="tit">姓名<text>(必填)</text></view>
			<view class="input_wrap">
				<input type="text" v-model="name" placeholder="请输入您的姓名" placeholder-class="input-placeholder" />
			</view>
		</view>
		<view class="line_box">
			<view class="tit">电话<text>(必填)</text></view>
			<view class="input_wrap flex flex_btween">
				<input type="text" v-model="mobile" placeholder="请输入您的联系电话" placeholder-class="input-placeholder" />
				<button class="btn" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">自动授权</button>
			</view>
		</view>
		<view class="btns flex flex_btween">
			<view class="btn" @click="close">取消</view>
			<view class="btn" @click="sure">确定</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "edit_form",
		props: ["openid", "userInfo"],
		data() {
			return {
				name: "",
				mobile: ""
			};
		},
		created() {
			this.name = this.userInfo.name.indexOf("@") != -1 ? "" : this.userInfo.name
			this.mobile = this.userInfo.mobile
		},
		methods: {
			close() {
				this.$emit("close")
			},
			async getPhoneNumber(e) {
				let url = "/auth/worker/wechat/mini/login"
				let _this = this
				console.log(e, "getPhoneNumber")
				uni.showLoading()
				if (e.detail.errMsg == 'getPhoneNumber:ok') {
					let data = {
						encrypted_data: e.detail.encryptedData,
						iv: e.detail.iv,
						code: e.detail.code,
						open_id: _this.openid
					}
					_this.$request(url, data, "POST").then(resp => {
						if (resp.code == 0) {
							uni.setStorageSync("token", resp.data.token)
							uni.setStorageSync("loginStatus", "in")
							_this.mobile = resp.data.mobile
						}
						uni.hideLoading()
					})
				} else {
					uni.hideLoading()
				}
			},
			sure() {
				let obj = {
					name: this.name,
					mobile: this.mobile
				}
				this.$emit("sure", obj)
			}
		}
	}
</script>

<style lang="scss">
	::v-deep {
		.input-placeholder {
			font-size: 28rpx !important;
		}
	}

	.form {
		padding: 0 15px;
		color: #161616;

		.title {
			height: 48px;
			line-height: 48px;
			font-size: 36rpx;
			font-weight: 600;

		}

		.tips {
			font-size: 27rpx;
			color: #757575;
			line-height: 38rpx;
			margin-bottom: 40rpx;
		}

		.btns {
			.btn {
				height: 80rpx;
				width: 48%;
				line-height: 80rpx;
				text-align: center;
				font-size: 27rpx;
				color: #1F1F1F;
				background: #F7F7F7;
				border-radius: 40rpx;

				&:nth-child(2) {
					background: #216FF9;
					color: #FFFFFF;
				}
			}
		}

		.line_box {
			margin-bottom: 30rpx;

			.tit {
				font-size: 28rpx;
				font-weight: 600;
				margin-bottom: 20rpx;

				text {
					font-size: 28rpx;
					color: #757575;
				}
			}

			.input_wrap {
				input {
					width: 100%;
					height: 80rpx;
					border: 2rpx solid #e3e3e3;
					// background: #f6f6f6;
					border-radius: 15rpx;
					padding: 0 20rpx;
					box-sizing: border-box;
				}
			}

			&:nth-child(4) {
				.input_wrap {
					input {
						width: calc(100% - 170rpx);
						flex-shrink: 0;
					}

					.btn {
						width: 150rpx;
						height: 80rpx;
						line-height: 80rpx;
						text-align: center;
						font-size: 28rpx;
						color: #216FF9;
						background: rgba(33, 111, 249, .1);
						// border-radius: 15rpx;
						margin-left: 0;
						margin-right: 0;
						padding: 0;
					}
				}
			}
		}
	}
</style>