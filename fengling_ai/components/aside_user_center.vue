<template>
	<view class="">
		<!-- 侧边栏 -->
		<u-popup :show="showMenu" mode="left" @close="closeMenu" @open="openMenu" bgColor="#ffffff">
			<view class="inner" @touchstart="maskStart" @touchend="maskEnd" @touchmove="handleMaskMove">
				<view class="user_base_out">
					<!-- 自定义导航 -->
					<u-navbar title="个人中心" bgColor="transparent" @rightClick="rightClick" :autoBack="true"
						titleStyle="color:#010101;font-size: 31rpx;width:83vw;" :height="menuButtonInfo.height+8"
						style="width: 83vw;">
						<view class="u-nav-slot" slot="left" @click="closeMenu"
							style="width:57rpx;height:57rpx;text-align: center;line-height: 57rpx;border:1px solid #fff;border-radius: 50%;">

							<u-icon name="arrow-left" size="19" color="#fff"
								custom-style="display: inline-block;line-height: 57rpx;margin:0 auto;left:-2rpx;"></u-icon>
						</view>
					</u-navbar>
					<view class="user_base" :style="{marginTop:marginTop+15+'px'}">
						<view class="user_box" :style="{paddingBottom:userInfo.is_vip?'40rpx':'auto'}">
							<view class="user flex flex-start">
								<image :src="userInfo.avatar.url?userInfo.avatar.url:imgUrl+'/worker/avatar.png'"
									mode="widthFix"></image>
								<view class="user_base_info">
									<view class="line flex flex_btween">
										<view class=" flex flex-start">
											<view class="gender" v-if="userInfo.gender">
												{{userInfo.gender == "male"?"男":"女"}}
											</view>
											<view class="name">{{userInfo.name}}</view>
										</view>
										<view class="edit flex" @click="navigate('/subpkg/edit_info/edit_info')">
											编辑资料<u-icon name="arrow-right" color="#fff" size="13"
												custom-style="line-height:auto;margin-top:1rpx;"></u-icon>
										</view>
									</view>
									<view class="line flex flex-start">
										<view class="text">{{userInfo.age}}岁</view>
										<view class="text">{{userInfo.nation}}</view>
									</view>
								</view>
							</view>
						</view>
						<view class="labels" style="height:42rpx;margin-top:30rpx;">
						</view>
					</view>
				</view>
				<u-cell-group :border="false">
					<u-cell v-for="(item,index) in menuList" :class="item.icon"
						:custom-style="{backgroundColor: 'transparent'}" :key="index" size="large" :title="item.text"
						:name="item.text" :border="false" :titleStyle="{color:'#4C4C53'}"
						:value="index==0?'¥ '+item.value:item.value" :clickable="false" :url="item.url" isLink
						@click="handleClick"></u-cell>
				</u-cell-group>
				<!-- 退出登录 -->
				<view class="logout" @click="logout">退出登录</view>
			</view>

		</u-popup>
		<myModal ref="myModal">
		</myModal>
	</view>
</template>

<script>
	const app = getApp();
	export default {
		name: "aside_user_center",
		props: ["userInfo", "menuList", "showMenu"],
		data() {
			return {
				maskStartPoint: {},
				menuButtonInfo: app.globalData.menuButtonInfo,
				marginTop: app.globalData.marginTop,
				imgUrl: app.globalData.baseImageUrl,
			};
		},
		methods: {
			closeMenu() {
				this.$emit("closeMenu")
			},
			openMenu() {
				this.$emit("openMenu")
			},
			maskStart(e) {
				this.maskStartPoint = e.touches[0]
			},
			maskEnd(e) {

			},
			handleMaskMove(e) {
				// console.log(e)
				// 判断左滑
				if (this.maskStartPoint.clientX - e.touches[e.touches.length - 1].clientX > 20) {
					this.closeMenu()
				}
			},
			logout() {
				let _this = this
				this.$refs.myModal.showModal({
					title: "确认退出登录？",
					success(res) {
						if (res == "confirm") {
							_this.$request("/worker/logout", {}, "POST").then(resp => {
								if (resp.code == 0) {
									_this.closeMenu()
									uni.removeStorageSync("token")
									uni.removeStorageSync("userInfo")
									uni.showToast({
										title: "已退出登录",
										icon: "none",
										duration: 2000
									})
								}
							})
						}
					}
				})
			},
			navigate(url) {
				uni.navigateTo({
					url: url
				})
			},
			handleClick(e) {
				console.log("e：", e)
				if (e.name == "联系客服") {
					wx.openCustomerServiceChat({
						extInfo: {
							url: "https://work.weixin.qq.com/kfid/kfc01b1c6e379607409"
						},
						corpId: 'wwe3ced2e65390ad79',
						success(res) {}
					})
				}
			},
		}
	}
</script>

<style lang="scss">
	::v-deep {
		.u-tabs__wrapper__nav__line {
			bottom: 0 !important;
		}

		.u-avatar {
			margin: 0 auto;
		}

		.inner .u-navbar--fixed {
			width: 83vw;
		}

		.u-cell-group {
			padding: 0 28rpx;
		}

		.u-cell__body--large {
			background: #F7F8FA;
			;
			border-radius: 25rpx;
			// border: 1rpx solid #28272C;
			margin-bottom: 20rpx;
		}

		.u-cell__value--large {
			font-weight: 900;
			font-size: 38rpx !important;
			color: #755022 !important;
		}

		// .u-cell:nth-child(1) .u-cell__body--large {
		// 	background: linear-gradient(131deg, #E5EEFE 0%, #4E8EFF 100%);
		// 	font-weight: 600;
		// 	position: relative;
		// 	z-index: 9;
		// }

		// .u-cell:nth-child(1) .u-cell__body--large::before {
		// 	content: "";
		// 	width: 100px;
		// 	height: 100%;
		// 	background: url($back-ground-url+"/worker/new/ic_sign_menu.png") no-repeat;
		// 	background-size: auto 100%;
		// 	position: absolute;
		// 	top: 0;
		// 	left: 0;
		// 	z-index: -1;
		// }

		// .u-cell:nth-child(1) .u-cell__value--large {
		// 	color: #fff !important;
		// 	display: inline-block;
		// 	position: relative;
		// 	margin-right: 46rpx;
		// 	font-family: Arial;
		// }

		// .u-cell:nth-child(1) .u-cell__value--large::after {
		// 	content: "份";
		// 	position: absolute;
		// 	top: 0;
		// 	right: -34rpx;
		// 	font-size: 27rpx;
		// 	font-weight: 400;
		// }

		// .u-cell:nth-child(1) .u-cell__right-icon-wrap {
		// 	display: none;
		// }

		// .u-cell:nth-child(2) .u-cell__value--large,
		// .u-cell:nth-child(5) .u-cell__value--large {
		// 	font-weight: 400 !important;
		// 	font-size: 27rpx !important;
		// 	color: #755022 !important;
		// 	height: 58rpx;
		// 	line-height: 58rpx;
		// }

		// .u-cell:nth-child(3) .u-cell__value--large {
		// 	font-size: 31rpx !important;
		// }
		.u-cell:nth-child(2) .u-cell__value--large {
			font-weight: 400 !important;
			font-size: 27rpx !important;
			color: #755022 !important;
			height: 58rpx;
			line-height: 58rpx;
		}
	}

	.inner {
		width: 83vw;
		box-sizing: border-box;
		background: #fff;
		color: #4C4C53;
		height: 100%;
	}

	.user_base_out {
		position: relative;
		padding: 0 28rpx 40rpx 28rpx;
		margin-bottom: 38rpx;
		background: url($back-ground-url+"/worker/new/my_info_cover.png") no-repeat;
		background-size: cover;
		background-position: center center;
	}

	.user_base {
		background-size: 100% 100%;
		box-sizing: border-box;
		border-radius: 25rpx;
		overflow: hidden;



		.tips {
			margin-top: 20rpx;
			background: rgba(255, 255, 255, 0.15);


			image {
				width: 200rpx;
			}

			.tip {
				width: calc(100% - 200rpx);
				font-weight: 400;
				font-size: 23rpx;
				color: #282319;
				text-align: center;
			}
		}

		&>image {
			width: 100%;
		}



		.user_box {

			.user {
				margin-top: 10rpx;

				&>image {
					width: 120rpx;
					border-radius: 50%;
					margin-right: 28rpx;
				}

				.user_base_info {
					width: calc(100% - 148rpx);

					.line {
						margin-bottom: 20rpx;

						&:last-child {
							margin-bottom: 0;
						}

						.edit {
							font-weight: 400;
							font-size: 27rpx;
							color: #FFFFFF;
						}

						.text {
							font-weight: 400;
							font-size: 31rpx;
							color: #333333;
							margin-right: 20rpx;
						}

						.gender {
							width: 62rpx;
							height: 35rpx;
							background: rgba(33, 111, 249, 0.09);
							border-radius: 8rpx;
							border: 2rpx solid #216FF9;
							font-size: 27rpx;
							color: #216FF9;
							line-height: 35rpx;
							text-align: center;
							margin-right: 16rpx;
						}

						.name {
							font-weight: 600;
							font-size: 31rpx;
							color: #333333;
						}
					}
				}
			}
		}




	}
</style>