<template>
	<view class="content">
		<customHeader :title="pageName" :showBack="true" :headHeight="headerHeight"></customHeader>
		<view class="cont" :style="{marginTop:marginTop+'px'}">
			<view class="top_area" :style="{top:marginTop+'px'}">
				<view class="tabs flex flex_btween">
					<view class="tab" :class="currentTab==0?'active':'finished'" @click="changeTab(0)">
						<image :src="imgUrl+'/broker/step1_inputing.png'" mode="widthFix" v-show="!step1Finish"></image>
						<image :src="imgUrl+'/broker/step1_finish.png'" mode="widthFix" v-show="step1Finish"></image>
						<text>营业执照</text>
					</view>
					<view class="tab">
						<image :src="imgUrl+'/broker/step_arrow_active.png'" mode="widthFix" style="width:46rpx;">
						</image>
					</view>
					<view class="tab" :class="currentTab==1?'active':'finished'" @click="changeTab(1)">
						<!-- <image :src="imgUrl+stepImage2" mode="widthFix"></image> -->
						<image :src="imgUrl+'/broker/step2_default.png'" mode="widthFix"
							v-show="!step2Finish && currentTab==0"></image>
						<image :src="imgUrl+'/broker/step2_inputing.png'" mode="widthFix"
							v-show="!step2Finish && currentTab==1"></image>
						<image :src="imgUrl+'/broker/step2_finish.png'" mode="widthFix" v-show="step2Finish"></image>
						<text>资质证书</text>
					</view>
				</view>
			</view>
			<view class="box" :style="{top:boxTop+'px'}">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y"
					:style="{height:scrollHeight+'px'}">
					<view class="item" v-show="currentTab==0">
						<view class="title flex flex-start">
							<image :src="imgUrl+'/broker/ic_title.png'" mode="widthFix"></image>
							<text>营业执照</text>
						</view>
						<view class="img_wrap">
							<view class="upload" @click="chooseImage('business_license')">
								<view class="top">
									<image
										:src="step1Data.business_license_image.url?step1Data.business_license_image.url:imgUrl+'/broker/ic_veri_yyzz.png'"
										mode="widthFix"></image>
									<view class="add_icon" v-if="!step1Data.business_license_image.url">
										<image :src="imgUrl+'/broker/ic_veri_add.png'" mode="widthFix"></image>
									</view>
								</view>
								<view class="bot">上传营业执照</view>
							</view>
							<view class="tips">（上传后下方信息会自动识别，请仔细核对)</view>
							<view class="info_wrap">
								<view class="line flex flex-start">
									<view class="tit">公司名称：</view>
									<view class="text">
										<input type="text" v-model="step1Data.name" placeholder="请输入公司名称"
											placeholder-style="font-size:28rpx;" />
									</view>
								</view>
								<view class="line flex flex-start">
									<view class="tit">信用代码：</view>
									<view class="text">
										<input type="text" v-model="step1Data.unified_social_credit_code"
											placeholder="请输入信用代码" placeholder-style="font-size:28rpx;" />
									</view>
								</view>
								<view class="line flex flex-start">
									<view class="tit">公司类型：</view>
									<view class="text">
										<input type="text" v-model="step1Data.type" placeholder="请输入公司类型"
											placeholder-style="font-size:28rpx;" />
									</view>
								</view>
								<view class="line flex flex-start">
									<view class="tit">法人姓名：</view>
									<view class="text">
										<input type="text" v-model="step1Data.legal_person_name" placeholder="请输入法人姓名"
											placeholder-style="font-size:28rpx;" />
									</view>
								</view>
								<view class="line flex flex-start">
									<view class="tit">办公地址：</view>
									<view class="text">
										<input type="text" v-model="step1Data.business_address" placeholder="请输入办公地址"
											placeholder-style="font-size:28rpx;" />
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="item" v-show="currentTab==1">
						<view class="title flex flex-start">
							<image :src="imgUrl+'/broker/ic_title.png'" mode="widthFix"></image>
							<text>人力资源许可</text>
						</view>
						<view class="img_wrap">
							<view class="upload" @click="chooseImage('human_resources_permit')">
								<view class="top">
									<image
										:src="step2Data.human_resources_permit_image.url?step2Data.human_resources_permit_image.url:imgUrl+'/broker/ic_veri_yyzz.png'"
										mode="widthFix"></image>
									<view class="add_icon" v-if="!step2Data.human_resources_permit_image.url">
										<image :src="imgUrl+'/broker/ic_veri_add.png'" mode="widthFix"></image>
									</view>
								</view>
								<view class="bot">上传人力资源许可证</view>
							</view>
							<view class="tips">请上传后与营业执照主体一致的人力资源许可证</view>
						</view>
					</view>

					<view class="btns flex flex_btween">
						<view class="btn prev" v-if="currentTab != 0" @click="toPrev">上一步</view>
						<view class="btn next" :class="currentTab==0?'long':''" @click="confirm">
							{{currentTab == 1?"提交认证":"下一步"}}
						</view>
					</view>
				</scroll-view>
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
				stepImage1: "/broker/step1_inputing.png",
				step1Finish: false,
				step1Data: {
					"business_address": "",
					"business_license_image": {
						key: "",
						url: ""
					},
					"name": "",
					"type": "",
					"legal_person_name": "",
					"unified_social_credit_code": ""
				},
				stepImage2: "/broker/step2_default.png",
				step2Finish: false,
				step2Data: {
					"human_resources_permit_image": {
						key: "",
						url: ""
					},
					name: ""
				},
				imgUrl: app.globalData.baseImageUrl,
				pageName: "公司认证",
				marginTop: 0,
				scrollHeight: 0,
				boxTop: 0,
				headerHeight: 0,
				maskInnerTop: 0,
				currentTab: 0,
				btnText: "发送验证码",
				canSend: true,
				btnText2: "发送验证码",
				canSend2: true,
				name: "",
				gender: "",
				idcardNumber: "",
				idcardDateline: "",
				legalMobile: "",
				legalVeriCode: "",
				contactName: "",
				contactGender: "",
				conidcardNumber: "",
				conidcardDateline: "",
				contactMobile: "",
				email: "",
				contactVeriCode: "",
				comName: "",
				creditcode: "",
				comType: "",
				comAddress: "",
				yyzz: {
					key: "",
					url: ""
				},
				idcardFront: {
					key: "",
					url: ""
				},
				idcardBack: {
					key: "",
					url: ""
				},
				conIdcardFront: {
					key: "",
					url: ""
				},
				conIdcardBack: {
					key: "",
					url: ""
				},
				info: {
					"business_address": "",
					"business_license_image": "",
					"company_name": "",
					"company_type": "",
					"has_old_password": false,
					"human_resources_permit_image": "",
					"id": "9576161222878582",
					"legal_person_name": "",
					"credit_code": ""
				},
				showCodeVeriStatus: false,
				showCodeVeriStatus2: false,
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
			this.getInfo()
		},
		watch: {
			step1Data: {
				handler(newData, oldData) {
					console.log(newData)
					let status = true
					for (let key in newData) {
						console.log(typeof newData[key])
						if (typeof newData[key] != "object") {
							if (!newData[key]) {
								status = false
							}
						} else {
							if (!newData[key].url) {
								status = false
							}
						}

					}
					console.log(status)
					if (status) {
						this.stepImage1 = "/broker/step1_finish.png"
						this.step1Finish = true
					} else {
						this.stepImage1 = "/broker/step1_inputing.png"
						this.step1Finish = false
					}
				},
				immediate: true,
				deep: true
			},
			step2Data: {
				handler(newData, oldData) {
					console.log(newData)
					let status = true
					for (let key in newData) {
						if (!newData[key].url) {
							status = false
						}
					}
					console.log(status)
					if (status) {
						this.stepImage2 = "/broker/step2_finish.png"
						this.step2Finish = true
					} else {
						this.stepImage2 = "/broker/step2_inputing.png"
						this.step2Finish = false
					}
				},
				immediate: true,
				deep: true
			}
		},
		methods: {
			changeTab(index) {
				if (!this.step1Finish) {
					uni.showToast({
						title: "请先完成第一步",
						icon: "error",
						duration: 2000
					})
					return
				}
				this.currentTab = index
				if (index == 1) {
					if (!this.step2Finish) {
						this.stepImage2 = "/broker/step2_inputing.png"
					} else {
						this.stepImage2 = "/broker/step2_finish.png"
					}
				} else {
					if (!this.step2Finish) {
						this.stepImage2 = "/broker/step2_default.png"
					} else {
						this.stepImage2 = "/broker/step2_finish.png"
					}
				}
			},
			getMarginTop(e) {
				let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
				this.marginTop = menuButtonInfo.height + menuButtonInfo.top + 10
				this.maskInnerTop = this.marginTop + 20
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
					topHeight = data.bottom - data.top // 获取元素高度
					_this.boxTop = _this.marginTop + data.height
					_this.scrollHeight = systemInfo.screenHeight - _this.boxTop - 5
				}).exec()

			},
			getInfo() {
				this.$request("/broker/info").then(res => {
					if (res.code == 0) {
						this.step1Data.name = res.data.company.name
						this.step1Data.type = res.data.company.type
						this.step1Data.business_address = res.data.company.business_address
						this.step1Data.unified_social_credit_code = res.data.company.unified_social_credit_code
						this.step1Data.business_license_image = res.data.company.business_license_image
						this.step1Data.legal_person_name = res.data.company.legal_person_name
						this.step2Data.human_resources_permit_image = res.data.company.human_resources_permit_image
					}
				})
			},
			chooseImage(type) {
				let _this = this
				uni.chooseImage({
					count: 1,
					sizeType: ["original", "compressed"],
					sourceType: ["album", "camera"],
					async success(res) {
						const tempFilePaths = res.tempFilePaths;
						uni.showLoading({
							title: "识别中，请稍后"
						})
						let result = await _this.loadImage(app.globalData.baseUrl, type, tempFilePaths[0])
						if (result) {
							switch (type) {
								case "business_license":
									_this.step1Data.business_license_image = result
									_this.toOcr("business-license", result.key)
									break;
								case "human_resources_permit":
									_this.step2Data.human_resources_permit_image = result
									_this.toOcr("human-resources-permit", result.key)
									break;
								default:
									break;
							}
						}
					},
					fail(res) {
						console.log(res)
					}
				})
			},
			toOcr(type, key) {
				let url = "/broker/ocr/" + type
				let data = {
					key: key
				}
				this.$request(url, data, "POST").then(res => {
					if (res.code == 0) {
						switch (type) {
							case "business-license":
								this.step1Data.name = res.data.company_name
								this.step1Data.type = res.data.company_type
								this.step1Data.business_address = res.data.business_address
								this.step1Data.unified_social_credit_code = res.data.credit_code
								this.step1Data.legal_person_name = res.data.legal_person
								break;
							default:
								break;
						}
					}
				})
			},
			toPrev() {
				if (this.currentTab > 0) {
					this.currentTab--
					if (!this.step2Finish) {
						this.stepImage2 = "/broker/step2_default.png"
					} else {
						this.stepImage2 = "/broker/step2_finish.png"
					}
				}
			},
			confirm() {
				let _this = this
				if (this.currentTab == 1) {
					if (!this.step2Data.human_resources_permit_image.url) {
						uni.showToast({
							title: "信息不完整",
							duration: 2000,
							icon: "error"
						})
						return
					}
					let data = {
						...this.step1Data
					}
					data.human_resources_permit_image = this.step2Data.human_resources_permit_image
					_this.$request("/broker/company/info", data, "POST").then(res => {
						if (res.code == 0) {
							uni.showToast({
								title: "提交成功",
								duration: 2000
							})
							setTimeout(function(){
								uni.navigateBack()
							},2000)
						}
					})
				} else {
					if (!this.step1Finish) {
						uni.showToast({
							title: "请先完成第一步",
							icon: "error",
							duration: 2000
						})
						return
					}
					this.currentTab++
				}
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

				image {
					width: 58rpx;
					vertical-align: middle;
					margin-right: 10rpx;
				}

				&.active {
					font-weight: bold;
					color: #F7BB05;
				}

				&.finished {
					color: #333333;
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
			width: 47%;
			height: 88rpx;
			line-height: 88rpx;
			text-align: center;
			background: #FFFFFF;
			box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
			border-radius: 16rpx;
			border: 1px solid #F7BC05;
			font-size: 30rpx;
			color: #F7BC05;

			&.next {
				background: #F7BC05;
				color: #fff;

				&.long {
					width: 100%;
				}
			}
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
			background: url($back-ground-url+"/broker/bg_title.png") no-repeat;
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
						z-index: 80;

						&>image {
							position: absolute;
							top: 50%;
							right: 0;
							transform: translateY(-50%);
							z-index: 9;
						}

						input {
							position: relative;
							z-index: 80;
							width: 100%;
							height: 88rpx;
						}

						.get_code {
							position: absolute;
							top: 50%;
							right: 0;
							font-size: 28rpx;
							color: #F7BB05;
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
				}

				.top {
					text-align: center;
					position: relative;
					padding: 28rpx 0;
					height: 200rpx;
					overflow: hidden;

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
					background: rgba(247, 188, 5, .1);
					border-radius: 8rpx;
					font-size: 28rpx;
					color: #333;
					text-align: center;
				}
			}
		}
	}
</style>