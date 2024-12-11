<template>
	<view class="board">
		<view class="box">
			<view class="title">修改密码</view>
			<view class="base_info">
				<view class="line flex flex-start" v-if="info.broker.has_old_password">
					<view class="tit">旧密码</view>
					<view class="input_wrap">
						<input type="password" v-model="oldPassword" placeholder="请输入旧密码" />
					</view>
				</view>
				<view class="line flex flex-start">
					<view class="tit">{{info.broker.has_old_password?"新密码":"设置密码"}}</view>
					<view class="input_wrap">
						<input type="password" v-model="newPassword" placeholder="请输入新密码" />
					</view>
				</view>
				<view class="line flex flex-start">
					<view class="tit">确认新密码</view>
					<view class="input_wrap">
						<input type="password" v-model="confirmPassword" placeholder="请再次输入新密码" />
					</view>
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
				oldPassword: "",
				newPassword: "",
				confirmPassword: ""
			};
		},
		components: {},
		created() {},
		methods: {
			confirm() {
				if (!this.oldPassword || !this.newPassword || !this.confirmPassword) {
					uni.showToast({
						title: "信息填写不完整",
						duration: 2000,
						icon: "error"
					})
					return
				}
				if (this.newPassword != this.confirmPassword) {
					uni.showToast({
						title: "两次密码不一致",
						duration: 2000,
						icon: "error"
					})
					return
				}
				let data = {
					"old_password": this.oldPassword,
					"new_password": this.newPassword,
					"new_password_confirmation": this.confirmPassword
				}
				this.$request("/broker/password", data, "POST").then(res => {
					if (res.code == 0) {
						uni.showModal({
							title: "修改成功",
							showCancel: false
						})
						this.oldPassword = ""
						this.newPassword = ""
						this.confirmPassword = ""
					}
				})

			}
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
				width: 100px;
				text-align: left;
			}

			.image_wrap {
				width: 100px;
				height: 100px;
				border-radius: 50%;
				overflow: hidden;
				cursor: pointer;
				position: relative;

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
				width: 200px;
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