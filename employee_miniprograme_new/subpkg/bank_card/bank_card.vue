<template>
	<view class="content">
		<customHeader :title="pageName" :showBack="true" :headHeight="headerHeight"></customHeader>
		<!-- 未添加 -->
		<view class="box" v-if="!hasBank || showModify" :style="{top:marginTop+'px'}">
			<view class="info_area">
				<view class="title">
					<image :src="imgUrl+'/worker/ic_baoming_title_bg.png'" mode="widthFix"></image>
					<text>添加银行卡</text>
				</view>
				<view class="upload" style="background: #fff;">
					<view class="up_item" @click="chooseImage('bank_card_front')">
						<view class="top">
							<image :src="bankCard.url?bankCard.url:imgUrl+'/broker/ic_veri_front.png'" mode="widthFix">
							</image>
							<view class="add_icon" v-if="!bankCard.url">
								<image :src="imgUrl+'/worker/ic_auth_add.png'" mode="widthFix"></image>
							</view>
						</view>
						<view class="bot">上传银行卡照片</view>
					</view>
				</view>
				<view class="tips">（上传后下方信息会自动识别，请仔细核对。）</view>
				<view class="item">
					<view class="line flex flex-start">
						<view class="tit">银行卡号：</view>
						<view class="input_wrap">
							<input type="text" v-model="bank_num" placeholder="请输入银行卡号" disabled />
						</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">银行名称：</view>
						<view class="input_wrap">
							<input type="text" v-model="bank_name" placeholder="请输入开户行名称" disabled />
						</view>
					</view>
					<!-- <view class="line flex flex-start">
						<view class="tit">姓名：</view>
						<view class="input_wrap">
							<input type="text" v-model="name" placeholder="请输入开户人姓名" disabled/>
						</view>
					</view> -->
				</view>
			</view>
			<view class="btns flex flex_btween">
				<view class="btn cancel" @click="cancel" v-if="showModify">暂不修改</view>
				<view class="btn" @click="confirm" :style="{width:showModify?'49%':'100%'}">
					{{showModify?'确认修改':'保存银行卡信息'}}
				</view>
			</view>
		</view>
		<!-- 已添加 -->
		<view class="box" v-if="hasBank && !showModify" :style="{top:marginTop+'px'}">
			<view class="info_area">
				<view class="title">
					<image :src="imgUrl+'/worker/ic_baoming_title_bg.png'" mode="widthFix"></image>
					<text>当前银行卡</text>
				</view>
				<view class="upload" style="background: #fff;">
					<view class="up_item">
						<view class="top">
							<image :src="info.bank_card_front_image" mode="widthFix"
								@click="prevImage(info.bank_card_front_image)"></image>
						</view>
					</view>
				</view>
				<view class="item">
					<view class="line flex flex-start">
						<view class="tit">银行卡号</view>
						<view class="input_wrap noborder">{{info.bank_card_number}}</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">银行名称</view>
						<view class="input_wrap noborder">{{info.bank_name}}</view>
					</view>
					<!-- <view class="line flex flex-start">
						<view class="tit">姓名</view>
						<view class="input_wrap noborder">{{info.account_holder_name}}</view>
					</view> -->
				</view>
			</view>
			<view class="btn" @click="toModify">修改</view>
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
				pageName: "添加银行卡",
				marginTop: 0,
				scrollHeight: 0,
				boxTop: 0,
				headerHeight: 0,
				hasBank: false,
				showModify: false,
				bank_name: "",
				bank_num: "",
				name: "",
				info: {
					"account_holder_name": "",
					"bank_card_front_image": "",
					"bank_card_number": "",
					"bank_name": ""
				},
				bankCard: {
					key: "",
					url: ""
				}
			}
		},
		components: {
			customHeader
		},
		onLoad() {
			let _this = this
			this.getMarginTop()
			setTimeout(function() {
				_this.getElementInfo()
				_this.getTopHeight()
			}, 500)
			this.$request("/worker/have/bank").then(res => {
				if (res.code == 0) {
					if (res.data) {
						// 有银行卡
						this.hasBank = true
						this.pageName = "银行卡信息"
						this.getInfo()
					} else {
						// 无银行卡
						this.pageName = "添加银行卡"
						this.hasBank = false
					}
				}
			})
			this.name = uni.getStorageSync("userInfo").name
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
			prevImage(url) {
				let arr = []
				arr[0] = url
				uni.previewImage({
					urls: arr,
					current: 0
				})
			},
			toModify() {
				this.showModify = true
			},
			cancel() {
				this.showModify = false
			},
			chooseImage(type) {
				uni.chooseImage({
					count: 1,
					sizeType: ["original", "compressed"],
					sourceType: ["album", "camera"],
					success: (res) => {
						const tempFilePaths = res.tempFilePaths;
						// uni.showLoading({
						// 	title:"上传中，请稍后"
						// })
						this.loadimg(type, tempFilePaths[0])
					},
					fail(res) {
						console.log(res)
					}
				})
			},
			async loadimg(type, filePath) {
				var _this = this;
				let header = {
					"Authorization": "bearer " + uni.getStorageSync("token"),
					"accept": "application/json",
					"content-type": "multipart/form-data"
				}
				return new Promise((resolve, reject) => {
					uni.uploadFile({
						url: app.globalData.baseUrl + "/worker/upload/image?type=" + type,
						filePath: filePath,
						name: "file",
						header: header,
						success(resp) {
							var response = JSON.parse(resp.data);
							if (response.code == 0) {
								uni.showToast({
									title: "图片上传成功"
								})
								_this.bankCard = response.data
								_this.$request("/worker/ocr/bank-card", {
									key: response.data.key
								}, "POST").then(res => {
									if (res.code == 0) {
										_this.bank_name = res.data.bank_name
										_this.bank_num = res.data.card_number
									}
								})
							} else {
								uni.showModal({
									title: "上传失败",
									content: response.msg
								})
							}
						},
						complete() {
							uni.hideLoading();
						}
					})
					resolve(_this.reponsefiles)
				})
			},
			getInfo() {
				this.$request("/worker/bank-account").then(res => {
					if (res.code == 0) {
						this.info = res.data
					}
				})
			},
			confirm() {
				let data = {
					"bank_name": this.bank_name,
					"bank_card_number": this.bank_num,
					"account_holder_name": this.name,
					"bank_card_front_image": this.bankCard.key
				}
				this.$request("/worker/bank-account", data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: "保存成功",
							duration: 2000
						})
						this.hasBank = true
						this.showModify = false
						this.getInfo()
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
		border-top-left-radius: 16rpx;
		border-top-right-radius: 16rpx;
		overflow: hidden;

		.info_area {
			background: #fff;
			padding-bottom: 40rpx;
			border-bottom-left-radius: 16rpx;
			border-bottom-right-radius: 16rpx;
		}

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

		.upload {
			border-radius: 8rpx;
			padding: 40rpx;
			box-sizing: border-box;

			.up_item {
				background: #F5F5F5;
				border-radius: 8rpx;
			}

			.top {
				text-align: center;
				position: relative;
				padding: 28rpx 0;

				&>image {
					width: 55%;
					will-change: transform;
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
				background: rgba(33, 111, 249, .1);
				border-radius: 8rpx;
				font-size: 28rpx;
				color: #333;
				text-align: center;
			}
		}

		.tips {
			color: #DD0000;
			font-size: 24rpx;
			padding: 0 40rpx;
			box-sizing: border-box;
		}

		.item {
			padding: 0 40rpx;
			box-sizing: border-box;
			margin-top: 40rpx;
		}

		.btns {
			.btn {
				width: 49%;

				&.cancel {
					background: #fff;
					color: #216FF9;
				}
			}
		}
	}

	.line {
		height: 88rpx;
		line-height: 88rpx;
		font-size: 28rpx;
		border-bottom: 1px dashed #DFDFDF;

		.tit {
			color: #5A5A5A;
			width: 150rpx;
		}

		.input_wrap {
			width: calc(100% - 150rpx);
			background: #fff;
			border-radius: 10rpx;
			padding: 0 20rpx;
			box-sizing: border-box;
			color: #333333;

			&.input_card {
				width: 100%;
				height: 250rpx;
				padding: 20rpx 0 60rpx 0;
			}

			.item {
				height: 250rpx;
				background: #F6F6F6;
				border-radius: 8rpx;
				position: relative;
				overflow: hidden;

				&>image {
					width: 80%;
					position: absolute;
					top: 5%;
					left: 50%;
					transform: translateX(-50%);
					will-change: transform;
				}

				&>.show {
					width: 100%;
					top: 0;
					left: 0;
					transform: translateX(0);
				}

				.dele {
					position: absolute;
					top: 16rpx;
					right: 16rpx;
					width: 28rpx;
					height: 28rpx;

					image {
						width: 28rpx;
						height: 28rpx;
						position: relative;
						display: block;
					}
				}

				.text {
					width: 100%;
					height: 60rpx;
					line-height: 60rpx;
					font-size: 26rpx;
					text-align: center;
					background: #279CF4;
					color: #fff;
					position: absolute;
					bottom: 0;
					left: 0;
					border-bottom-left-radius: 8rpx;
					border-bottom-right-radius: 8rpx;
				}
			}
		}
	}

	.btn {
		width: 100%;
		height: 88rpx;
		line-height: 88rpx;
		text-align: center;
		background: #216FF9;
		border: 1px solid #216FF9;
		box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
		border-radius: 8px;
		margin-top: 60rpx;
		color: #fff;
		font-size: 30rpx;
	}
</style>