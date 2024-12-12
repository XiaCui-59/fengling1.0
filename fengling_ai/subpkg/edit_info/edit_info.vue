<template>
	<view class="edit">
		<!-- 自定义导航 -->
		<u-navbar title="编辑资料" @rightClick="rightClick" :autoBack="true" bgColor="#fff"
			titleStyle="color:#010101;font-size: 31rpx;">
			<view class="u-nav-slot" slot="left">
				<!-- <image :src="imgUrl+'/worker/ic_back_blank.png'" mode="widthFix" style="width: 58rpx;"></image> -->
				<u-icon name="arrow-left" size="19"></u-icon>
			</view>
		</u-navbar>
		<view class="cont" :style="{marginTop:marginTop+tabMargin+'px',height:contHeight+'px'}">
			<view class="info">
				<view class="line">
					<view class="tit">姓名</view>
					<view class="input_wrap flex flex_btween">
						<input type="text" v-model="info.name" placeholder="请输入姓名" class="focus" />
						<image :src="imgUrl+'/worker/new/ic_close_circle_grey.png'" mode="widthFix"></image>
					</view>
				</view>
				<view class="line flex flex_btween">
					<view class="tit">性别</view>
					<u-radio-group v-model="info.gender">
						<u-radio :customStyle="{marginLeft: '60rpx'}" v-for="(item, index) in gender" :key="index"
							:label="item.text" :name="item.text">
						</u-radio>
					</u-radio-group>
				</view>
				<view class="line">
					<view class="tit">年龄</view>
					<view class="input_wrap flex flex_btween">
						<input type="number" v-model="info.age" placeholder="请输入年龄" class="focus" />
						<image :src="imgUrl+'/worker/new/ic_close_circle_grey.png'" mode="widthFix"></image>
					</view>
				</view>
				<view class="line">
					<view class="tit">民族</view>
					<view class="input_wrap flex flex_btween">
						<input type="text" v-model="info.nation" placeholder="请输入民族" class="focus" />
						<image :src="imgUrl+'/worker/new/ic_close_circle_grey.png'" mode="widthFix"></image>
					</view>
				</view>
				<view class="line">
					<view class="tit">手机号码</view>
					<view class="input_wrap flex flex_btween">
						<input type="text" v-model="info.mobile" placeholder="请输入手机号" disabled v-if="info.mobile" />
						<view class="mark" v-if="info.mobile">无法修改</view>
						<button style="border:none;font-size: 27rpx;text-align: left;color:#666;" v-if="!info.mobile"
							open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">请输入手机号</button>
					</view>
				</view>
			</view>
			<view class="btn" @click="confirm">保存</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				contHeight: 0,
				gender: [{
						value: "male",
						text: "男"
					},
					{
						value: "female",
						text: "女"
					}
				],
				info: {
					name: "",
					age: "",
					gender: "男",
					nation: "",
					mobile: ""
				}
			}
		},
		onLoad() {
			uni.setNavigationBarColor({
				frontColor: '#000000',
				backgroundColor: 'transparent'
			})
			uni.hideShareMenu()
			this.contHeight = app.globalData.systemHeight - this.marginTop - this.tabMargin
			this.getInfo()
		},
		methods: {
			confirm() {
				let data = {
					...this.info
				}
				data.gender = data.gender == "男" ? "male" : "female"
				data.age = Number(data.age)
				this.$request("/worker/profile", data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: "保存成功",
							duration: 3000
						})
					}
				})
			},
			getPhoneNumber(e) {
				let data = {
					encrypted_data: "",
					iv: "",
					code: "",
					openid: ""
				};
				if (e.detail.errMsg == 'getPhoneNumber:ok') {
					data.encrypted_data = e.detail.encryptedData;
					data.iv = e.detail.iv;
					data.code = e.detail.code;
					data.open_id = uni.getStorageSync("openid")
					this.$request("/auth/worker/wechat/mini/login", data, "POST").then(resp => {
						if (resp.code == 0) {
							this.info.mobile = resp.data.mobile
							uni.setStorageSync("token", resp.data.token)
						}
					})
				}
			},
			getInfo() {
				this.$request("/worker/profile").then(response => {
					if (response.code == 0) {
						uni.setStorageSync("userInfo", JSON.stringify(response.data))
						this.info.name = response.data.name
						this.info.gender = this.info.gender == "male" ? "男" : "女"
						this.info.age = response.data.age
						this.info.nation = response.data.nation
						this.info.mobile = response.data.mobile
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	::v-deep {
		.u-radio-group {
			justify-content: flex-end;
		}
	}

	.edit {
		height: 100vh;
		background: #fff;
		color: $base-fontcolor;

		.cont {
			background: #F3F3F5;
			padding: 38rpx 26rpx;
			box-sizing: border-box;

			.btn {
				text-align: center;
				height: 85rpx;
				background: #216FF9;
				box-shadow: 0rpx 2rpx 4rpx 0rpx rgba(0, 0, 0, 0.15);
				border-radius: 15rpx;
				color: #fff;
				font-weight: 600;
				font-size: 29rpx;
				line-height: 85rpx;
				margin-top: 57rpx;
			}

			.info {
				background: #FFFFFF;
				box-shadow: 0rpx 2rpx 6rpx 0rpx rgba(0, 0, 0, 0.15);
				padding: 2rpx 40rpx 40rpx 40rpx;
				box-sizing: border-box;
				border-radius: 28rpx;
				position: relative;

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
						position: relative;

						.mark {
							position: absolute;
							top: 50%;
							right: 20rpx;
							transform: translateY(-50%);
							font-size: 24rpx;
							color: #999;
						}

						button {
							width: 100%;
							height: 85rpx;
							line-height: 85rpx;
							border: none;
							font-size: 14px;
							text-align: left;
							color: #999;
							margin-left: 0;
							border-radius: 0;
							background-color: transparent;
							padding-left: 0;
							padding-right: 0;

							&::after {
								display: none;
							}
						}

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
	}
</style>