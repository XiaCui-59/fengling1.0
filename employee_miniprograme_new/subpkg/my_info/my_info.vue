<template>
	<view class="content">
		<!-- #ifdef MP-WEIXIN || MP-KUAISHOU -->
		<customHeader :title="pageName" :showBack="true" :headHeight="headerHeight"></customHeader>
		<!-- #endif -->
		<view class="cont" :style="{marginTop:marginTop+'px'}">
			<view class="box" :style="{top:marginTop+tabMargin+'px'}">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y"
					:style="{height:scrollHeight+'px'}">
					<view class="item">
						<view class="title flex flex-start">
							<image :src="imgUrl+'/worker/ic_baoming_title_bg.png'" mode="widthFix"></image>
							<text>当前实名信息</text>
						</view>
						<view class="img_wrap">
							<view class="upload flex flex_btween" style="background: #fff;">
								<view class="up_item">
									<view class="top">
										<image :src="info.id_card_front_image" mode="widthFix"></image>
									</view>
									<view class="bot">人像面</view>
								</view>
								<view class="up_item">
									<view class="top">
										<image :src="info.id_card_back_image" mode="widthFix"></image>
									</view>
									<view class="bot">国徽面</view>
								</view>
							</view>
							<view class="info_wrap">
								<view class="line flex flex-start">
									<view class="tit">姓名：</view>
									<view class="text">{{info.name}}</view>
								</view>
								<view class="line flex flex-start">
									<view class="tit">性别：</view>
									<view class="text">{{info.gender=="male"?"男":"女"}}</view>
								</view>
								<view class="line flex flex-start">
									<view class="tit">民族：</view>
									<view class="text">{{info.nation}}</view>
								</view>
								<view class="line flex flex-start">
									<view class="tit">身份证号：</view>
									<view class="text">{{info.id_card_number}}</view>
								</view>
								<view class="line flex flex-start">
									<view class="tit">有效期：</view>
									<view class="text">{{info.id_card_valid_period}}</view>
								</view>

							</view>
						</view>
					</view>

					<view class="btns">
						<view class="btn" @click="openMask">修改实名认证</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="mask" v-if="showMask" @click="close">
			<view class="inner" @click.stop="openMask">
				<image :src="imgUrl+'/worker/ic_edit_auth_bg.png'" mode="widthFix" class="bg"></image>
				<image :src="imgUrl+'/worker/ic_edit_auth_icon.png'" mode="widthFix"></image>
				<view class="info">
					<view class="tit">更改身份证信息 请联系客服</view>
					<view class="btn" @click.stop="close">关闭</view>
				</view>
			</view>
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
				pageName: "我的资料",
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,

				scrollHeight: 0,
				boxTop: 0,
				headerHeight: app.globalData.topHeight,
				showMask: false,
				info: {
					"gender": "",
					"id_card_back_image": "",
					"id_card_front_image": "",
					"id_card_number": "",
					"name": "",
					"verified": false
				}
			}
		},
		components: {
			customHeader
		},
		onLoad() {
			let _this = this
			this.scrollHeight = app.globalData.systemHeight - this.marginTop - this.tabMargin
			// this.getMarginTop()
			// setTimeout(function() {
			// 	_this.getElementInfo()
			// 	_this.getTopHeight()
			// }, 500)
			this.getInfo()
		},
		methods: {
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
				let info = uni.createSelectorQuery().select(".top_area");
				info.boundingClientRect(function(data) { //data - 各种参数
					if (data) {
						topHeight = data.height // 获取元素高度
						_this.boxTop = _this.marginTop + data.height
					}
					_this.scrollHeight = systemInfo.screenHeight - _this.boxTop - 5
				}).exec()

			},

			confirm() {
				let _this = this
				let data = {
					"gender": this.gender == "男" ? "male" : "female",
					"name": this.name,
					"ethnicity": this.nation,
					"id_card_number": this.idcardNumber,
					"id_card_front": this.idcardFront.key,
					"id_card_back": this.idcardBack.key
				}
				_this.$request("/worker/profile", data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: "提交成功"
						})
						uni.navigateBack()
					}
				})
			},
			openMask() {
				this.showMask = true
			},
			close() {
				this.showMask = false
			},
			getInfo() {
				let _this = this
				this.$request("/worker/profile").then(res => {
					if (res.code == 0) {
						this.info = res.data
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top_area {
		width: calc(100% - 96rpx);
		position: fixed;
		left: 48rpx;

		.tabs {
			height: 88rpx;
			line-height: 88rpx;
			background: #FFFFFF;
			box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.15);
			border-radius: 16rpx;
			padding: 0 40rpx;
			box-sizing: border-box;
			margin-bottom: 20rpx;

			.tab {
				font-size: 30rpx;
				color: #9E9E9E;
				text-align: center;
				position: relative;

				&.active {
					font-weight: bold;
					color: #216FF9;
				}

				&.finished {
					color: #333333;
				}

				&.active::after {
					content: "";
					width: 28rpx;
					height: 10rpx;
					background: url($back-ground-url+"/broker/arrow_down_yellow.png") no-repeat;
					background-size: 100% 100%;
					position: absolute;
					bottom: 8rpx;
					left: 50%;
					transform: translateX(-50%);
				}

				image {
					width: 34rpx;
					height: 32rpx;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
				}
			}
		}

	}

	.box {
		position: fixed;
		width: calc(100% - 96rpx);
		left: 48rpx;
		z-index: 3;
		border-top-left-radius: 16rpx;
		border-top-right-radius: 16rpx;
		overflow: hidden;
		background: #F3F3F5;
	}

	.btns {
		margin-top: 60rpx;

		.btn {
			width: 100%;
			height: 88rpx;
			line-height: 88rpx;
			text-align: center;
			background: #FFFFFF;
			box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
			border-radius: 16rpx;
			border: 1px solid #216FF9;
			font-size: 30rpx;
			color: #216FF9;
			box-sizing: border-box;
		}
	}

	.item {
		background: #FFFFFF;
		box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.15);
		border-radius: 16rpx;
		overflow: hidden;
		margin-bottom: 40rpx;

		.title {
			height: 80rpx;
			line-height: 80rpx;
			padding: 0 40rpx;
			background: url($back-ground-url+"/worker/ic_detail_title_bg.png") no-repeat;
			background-size: 100% 100%;
			font-size: 30rpx;
			color: #333;

			image {
				width: 32rpx;
				height: 32rpx;
				margin-right: 8rpx;
			}
		}

		.img_wrap {
			padding: 40rpx;
			background: #FFFFFF;
			box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.15);

			.tips {
				font-size: 24rpx;
				color: #DD0000;
				line-height: 34rpx;
				margin-top: 20rpx;
				text-align: center;
				margin-bottom: 40rpx;
			}

			.info_wrap {
				.line {
					height: 88rpx;
					line-height: 88rpx;
					font-size: 28rpx;
					border-bottom: 1px dashed #DFDFDF;

					&:last-child {
						border-bottom: none;
					}

					.tit {
						width: 140rpx;
						color: #5A5A5A;
					}

					.text {
						width: calc(100% - 140rpx);
						color: #333333;
						position: relative;

						input {
							width: 100%;
							height: 88rpx;
						}

						.get_code {
							position: absolute;
							top: 50%;
							right: 0;
							font-size: 28rpx;
							color: #216FF9;
							transform: translateY(-50%);
							z-index: 99;

							&.disabled {
								color: #ccc;
							}
						}
					}
				}
			}

			.upload {
				background: #F5F5F5;
				border-radius: 8rpx;

				.up_item {
					width: 49%;
					background: #F5F5F5;
					border-radius: 8rpx;
					overflow: hidden;
				}

				.top {
					text-align: center;
					position: relative;
					// padding: 28rpx 0;
					font-size: 0;

					&>image {
						width: 100%;
					}

					.add_icon {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);

						image {
							width: 80rpx;
							height: 80rpx;
						}
					}
				}

				.bot {
					height: 52rpx;
					line-height: 52rpx;
					background: rgba(247, 188, 5, .1);
					border-radius: 8rpx;
					font-size: 28rpx;
					color: #333;
					text-align: center;
				}
			}
		}
	}

	.mask {
		.inner {
			width: 71%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			text-align: center;

			.bg {
				width: 100%;
				position: relative;
				top: 0;
				left: 0;
			}

			image {
				width: 175rpx;
				height: 175rpx;
				position: absolute;
				top: 4%;
				left: 62rpx;
			}

			.info {
				position: absolute;
				top: 44%;
				left: 62rpx;

				.tit {
					font-size: 36rpx;
					color: #216FF9;
					font-weight: bold;
				}

				.btn {
					margin-top: 80rpx;
					height: 88rpx;
					line-height: 88rpx;
					background: #216FF9;
					box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
					border-radius: 16rpx;
					color: #fff;
				}
			}

		}
	}
</style>