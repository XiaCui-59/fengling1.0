<template>
	<view class="board">
		<view class="box flex flex-start" style="align-items: start;">
			<view class="box_item">
				<view class="l_tabs">
					<view class="l_tab" :class="currentMainTab==0?'active':''" @click="changeMainTab(0)">基本信息<text
							class="mark">*</text></view>
					<view class="l_tab" :class="currentMainTab==1?'active':''" @click="changeMainTab(1)">两证信息</view>
				</view>
			</view>
			<view class="box_item box_right" v-if="currentMainTab == 0">
				<view class="title">修改基本信息</view>
				<view class="wrap">
					<view class="box">
						<!-- 基本信息 -->
						<view class="item flex flex_btween">
							<view class="item_box">
								<view class="line flex flex-start" style="margin-bottom:20px;">
									<view class="tit">营业执照</view>
									<view class="input_wrap uploadCard flex flex-start"
										@click="uploadImg('business_license')">
										<view class="loadimg idcardImg" v-if="userInfo.business_license_image.url">
											<image :src="userInfo.business_license_image.url" mode="heightFix"></image>
										</view>
										<view class="innerimg" v-if="!userInfo.business_license_image.url">
											<image src="/static/add.png" style="width:50px;height:50px;"></image>
											<view class="text">上传营业执照</view>
										</view>
									</view>
									<!-- <view class="tips">（上传执照后自动识别并填充下方信息，请仔细核对是否有误）</view> -->
									<!-- <view class="preview" v-if="showyyzz" @click="toView('yyzz')">预览</view> -->
								</view>
								<view class="line flex flex-start">
									<view class="tit">公司logo</view>
									<view class="input_wrap uploadCard flex flex-start" @click="uploadImg('logo')">
										<view class="loadimg idcardImg" v-if="userInfo.logo.url">
											<image :src="userInfo.logo.url" mode="heightFix"></image>
										</view>
										<view class="innerimg" v-if="!userInfo.logo.url">
											<image src="/static/add.png" style="width:50px;height:50px;"></image>
											<view class="text">上传公司logo</view>
										</view>
									</view>
								</view>
							</view>
							<view class="item_box">
								<view class="line flex flex-start">
									<view class="tit">公司名称</view>
									<view class="input_wrap">
										<input type="text" v-model="userInfo.name" placeholder="请输入公司名称" />
									</view>
								</view>
								<view class="line flex flex-start">
									<view class="tit">统一信用代码</view>
									<view class="input_wrap">
										<input type="text" v-model="userInfo.unified_social_credit_code"
											placeholder="请输入统一信用代码" />
									</view>
								</view>
								<view class="line flex flex-start">
									<view class="tit">公司类型</view>
									<view class="input_wrap">
										<input type="text" v-model="userInfo.type" placeholder="请输入公司类型" />
									</view>
								</view>
								<view class="line flex flex-start">
									<view class="tit">所在城市</view>
									<view class="input_wrap">
										<input type="text" v-model="userInfo.city" placeholder="请输入公司所处城市" />
									</view>
								</view>
								<view class="line flex flex-start">
									<view class="tit">办公地址</view>
									<view class="input_wrap">
										<input type="text" v-model="userInfo.business_address"
											placeholder="请输入公司办公地址" />
									</view>
								</view>
								<view class="line flex flex-start">
									<view class="tit">姓名</view>
									<view class="input_wrap">
										<input type="text" v-model="userInfo.legal_person_name"
											placeholder="请输入公司法人姓名" />
									</view>
								</view>
								<view class="line flex flex-start">
									<view class="tit">联系电话</view>
									<view class="input_wrap">
										<input type="text" v-model="userInfo.legal_person_mobile"
											placeholder="请输入联系方式" />
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="btns flex flex_around">
						<view class="btn" @click="handleBtn">确认修改</view>
					</view>
				</view>
			</view>
			<view class="box_item box_right" v-if="currentMainTab == 1">
				<view class="title">修改两证 <text class="tips">（劳务派遣证、人力资源许可证）</text> </view>
				<view class="wrap two_card flex flex_btween">
					<view class="item">
						<view class="uploadCard" @click="uploadImg('human_resources_permit')">
							<view class="loadimg idcardImg" v-if="userInfo.human_resources_permit_image.url">
								<image :src="userInfo.human_resources_permit_image.url" mode="heightFix"></image>
							</view>
							<view class="innerimg" v-if="!userInfo.human_resources_permit_image.url">
								<image src="/static/add.png" style="width:50px;height:50px;"></image>
								<view class="text">上传人力资源许可证</view>
							</view>
						</view>
					</view>
					<view class="item">
						<view class="uploadCard" @click="uploadImg('labor_dispatch_permit')">
							<view class="loadimg idcardImg" v-if="userInfo.labor_dispatch_permit_image.url">
								<image :src="userInfo.labor_dispatch_permit_image.url" mode="heightFix"></image>
							</view>
							<view class="innerimg" v-if="!userInfo.labor_dispatch_permit_image.url">
								<image src="/static/add.png" style="width:50px;height:50px;"></image>
								<view class="text">上传劳务派遣证</view>
							</view>
						</view>
					</view>
				</view>
				<view class="btns flex flex_around">
					<view class="btn" @click="handleBtn" style="width: 160px;color:#fff;">确认修改</view>
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	// import pickerAddress from '@/components/pickaddress.vue';
	function getToday(parm) {
		let date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
		if (month < 10) {
			month = "0" + month
		}
		if (day < 10) {
			day = "0" + day
		}
		if (parm == "month") {
			return year + "-" + month
		} else {
			return year + "-" + month + "-" + day
		}


	}
	const app = getApp()
	export default {
		name: "add_employer",
		props: ["header", "currentPage"],
		data() {
			return {
				currentMainTab: 0,
				id: "",
				userInfo: {
					logo: {
						url: "",
						key: ""
					},
					business_license_image: {
						url: "",
						key: ""
					},
					company_name: "",
					company_address: "",
					city: "",
					unified_social_credit_code: "",
					company_type: "",
					legal_person_name: "",
					legal_person_mobile: "",
					human_resources_permit_image: {
						url: "",
						key: ""
					},
					labor_dispatch_permit_image: {
						url: "",
						key: ""
					}
				},
			};
		},
		created() {
			let paramArr = []
			if (location.href.indexOf("?") != -1) {
				paramArr = location.href.split("?")[1].split("&")
			}
			for (var i = 0; i < paramArr.length; i++) {
				if (paramArr[i].indexOf("id") != -1) {
					this.id = paramArr[i].split("=")[1]
				}
			}
			this.getInfo()
		},
		components: {
			// pickerAddress
		},
		methods: {
			changeMainTab(index) {
				this.currentMainTab = index
			},
			close() {
				this.showViewBox = false
			},
			toView(type) {
				this.showViewBox = true
				console.log(type, this.yyzzImg.url)
				if (type == "yyzz") {
					this.currentView = this.yyzzImg.url
				}
				if (type == "hasyyzz") {
					this.currentView = this.userInfo.business_license_image
				}
			},
			chooseComponyType(type) {
				this.componyType = type
			},
			changeType(e) {
				console.log(e)
				console.log(this.comValue)
			},
			bindDateChange3(e) {
				console.log(e)
				this.birthday = e.detail.value
			},
			uploadImg(type) {
				uni.chooseImage({
					count: 1,
					sizeType: ["original", "compressed"],
					sourceType: ["album", "camera"],
					success: (res) => {
						const tempFilePaths = res.tempFilePaths;
						uni.showLoading({
							title: "上传中，请稍后"
						})
						this.loadimg(type, tempFilePaths[0])
					},
					fail(res) {
						console.log(res)
					}
				})
			},
			editBaseInfo() {
				this.showEdit = true
				this.editText = "重新提交"
			},
			async loadimg(type, filePath) {
				var _this = this;
				let header = {
					"Authorization": "bearer " + uni.getStorageSync("token"),
					"accept": "application/json"
				}
				return new Promise((resolve, reject) => {
					uni.uploadFile({
						url: app.globalData.baseUrl + "/broker/upload?type=" + type,
						filePath: filePath,
						name: "file",
						header: header,
						success(resp) {
							var response = JSON.parse(resp.data);
							if (response.code == 0) {
								uni.showToast({
									title: "图片上传成功"
								})
								if (_this.currentIndex == 2) {
									// 法人信息
									if (type == "id_card_back") {
										_this.showidCardBack = true
										_this.idCardBack = response.data
										_this.$request("/broker/ocr/id-card", {
											key: response.data.key
										}, "POST").then(res => {
											if (res.code == 0) {
												_this.idCardDateline = res.data.back
													.valid_period
											}
										})
									}
									if (type == "id_card_front") {
										_this.showidCardFront = true
										_this.idCardFront = response.data
										_this.$request("/broker/ocr/id-card", {
											key: response.data.key
										}, "POST").then(res => {
											if (res.code == 0) {
												_this.name = res.data.front.name
												_this.idCard = res.data.front.id_number
												_this.gender = res.data.front.sex == "男" ?
													"male" : "female"
											}
										})
									}
								}
								if (_this.currentIndex == 3) {
									// 联系人信息
									if (type == "id_card_back") {
										_this.showconidCardBack = true
										_this.conidCardBack = response.data
										_this.$request("/broker/ocr/id-card", {
											key: response.data.key
										}, "POST").then(res => {
											if (res.code == 0) {
												_this.conidCardDateline = res.data.back
													.valid_period
											}
										})
									}
									if (type == "id_card_front") {
										_this.showconidCardFront = true
										_this.conidCardFront = response.data
										_this.$request("/broker/ocr/id-card", {
											key: response.data.key
										}, "POST").then(res => {
											if (res.code == 0) {
												_this.contactName = res.data.front.name
												_this.conidCard = res.data.front.id_number
												_this.congender = res.data.front.sex == "男" ?
													"male" : "female"
											}
										})
									}
								}
								if (type == "business_license") {
									_this.showyyzz = true
									_this.yyzzImg = response.data
									_this.$request("/broker/ocr/business-license", {
										key: response.data.key
									}, "POST").then(res => {
										if (res.code == 0) {
											_this.companyName = res.data.company_name
											_this.creditCode = res.data.credit_code
											_this.company_address = res.data.business_address
											_this.comValue = res.data.company_type.indexOf(
													"有限责任公司") != -1 ?
												"limited_liability_company" : "self_employed"
										}
									})
								}
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
			getMsgCode() {
				let _this = this
				let data;
				if (this.currentIndex == 2) {
					if (!this.canSend) {
						uni.showModal({
							title: "验证码已发送，请1分钟后重试。",
							showCancel: false
						})
						return
					}
					// 法人验证码
					if (this.showEdit) {
						// 验证法人
						data = {
							"mobile": this.userInfo.legal_person_mobile,
							"name": this.userInfo.legal_person_name,
							"id_card_number": this.userInfo.legal_person_id_card_number
						}
					} else {
						// 验证法人
						data = {
							"mobile": this.mobile,
							"name": this.name,
							"id_card_number": this.idCard
						}
					}
				} else if (this.currentIndex == 3) {
					if (!this.canSend2) {
						uni.showModal({
							title: "验证码已发送，请1分钟后重试。",
							showCancel: false
						})
						return
					}
					// 联系人验证码
					if (this.showEdit) {
						// 验证联系人
						data = {
							"mobile": this.userInfo.contact_mobile,
							"name": this.userInfo.contact_name,
							"id_card_number": this.userInfo.contact_id_card_number
						}
					} else {
						data = {
							"mobile": this.contactMobile,
							"name": this.contactName,
							"id_card_number": this.conidCard
						}
					}
				}
				let url = "/auth/send-sms-verify-code" //不验证
				// let url = "/broker/sms-verify-code"//验证三要素
				this.$request(url, data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: "验证码发送成功",
							duration: 2000
						})
						if (_this.currentIndex == 2) {
							_this.canSend = false
							let count = 60
							_this.codeText = count + "s"
							let t = setInterval(function() {
								if (count > 0) {
									count--
									_this.codeText = count + "s"
								} else {
									_this.canSend = true
									_this.codeText = "重新获取"
									clearInterval(t)
								}
							}, 1000)
						} else {
							_this.canSend2 = false
							let count = 60
							_this.codeText2 = count + "s"
							let t = setInterval(function() {
								if (count > 0) {
									count--
									_this.codeText2 = count + "s"
								} else {
									_this.canSend2 = true
									_this.codeText2 = "重新获取"
									clearInterval(t)
								}
							}, 1000)
						}
					}
				})
			},
			handleBtn() {
				let _this = this

				if (this.currentMainTab == 0) {
					//  修改基础信息
					let url = "/admin/company/" + this.id
					this.$request(url, this.userInfo, "POST").then(res => {
						if (res.code == 0) {
							uni.showToast({
								title: "更新成功",
								duration: 3000
							})
							this.getInfo()
						}
					})
				} else {
					// 修改两证信息
				}
			},
			chooseGender(option) {
				this.gender = option
			},
			chooseLong() {
				this.isLong = !this.isLong
				if (this.isLong) {
					this.dateLine = "长期"
				}
			},
			chooseLong2() {
				this.isLong2 = !this.isLong2
				if (this.isLong2) {
					this.dateLine2 = "长期"
				}
			},
			bindDateChange1(e) {
				this.dateLine = e.detail.value
				if (this.dateLine != "长期") {
					this.isLong = false
				}
			},
			bindDateChange2(e) {
				this.dateLine2 = e.detail.value
				if (this.dateLine2 != "长期") {
					this.isLong2 = false
				}
			},
			getInfo() {
				let url = "/admin/company/" + this.id
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.userInfo = res.data
					}
				})
			},

		}
	}
</script>

<style lang="scss">
	::v-deep {
		uni-picker {
			width: 50%;
			padding: 0 15px;
			height: 40px;
			line-height: 40px;
			border: 1px solid #e9e9e9;
			border-radius: 5px;
			margin-right: 20px;
		}

		.uni-select__input-placeholder {
			font-size: 16px;
		}
	}

	.btn {
		margin-right: 10px;
		color: $base-color;
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}
	}

	.edit_btn {
		height: 40px;
		line-height: 40px;
		width: 120px;
		text-align: center;
		border-radius: 6px;
		background: $base-color;
		color: #fff;
		cursor: pointer;
	}

	.img_view {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 100;
		background: rgba(0, 0, 0, 0.6);

		.inner {
			width: 80%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			padding: 15px;
			background: #fff;
			border-radius: 10px;
			box-sizing: border-box;

			.close {
				position: absolute;
				top: 15px;
				right: 15px;
				width: 40px;
				height: 40px;
				z-index: 100;
				cursor: pointer;

				image {
					width: 100%;
					height: 100%;

					&:hover {
						transform: rotate(180deg);
						transition: all 1s;
					}
				}
			}

			.img {
				image {
					width: 100%;
				}
			}
		}
	}

	.board {
		.tips {
			font-size: 16px;
			font-weight: normal;
			color: #f00;
		}

		.box {
			padding-left: 0;

			.box_item {
				&:nth-child(2) {
					padding-left: 20px;

					.title {
						height: 40px;
						line-height: 40px;
						margin: 0;

						&:before {
							display: none;
						}
					}
				}

				.l_tabs {
					.l_tab {
						padding-left: 15px;
						width: 230rpx;
						height: 40px;
						line-height: 40px;

						&:hover {
							color: #1890FF;
							cursor: pointer;
						}

						&.active {
							background: #E7F7FF;
							color: #1890FF;
							border-right: 3px solid #1890FF;
						}

						.mark {
							display: inline-block;
							margin-left: 10px;
							color: #f00;
						}
					}
				}
			}

			.box_right {
				width: calc(100% - 230px);
			}
		}

		.two_card {
			.item {
				width: 49%;

				.uploadCard {
					width: 100%;
					height: 200px;
					border: 1px solid #e9e9e9;
					border-radius: 20px;
					position: relative;
					margin-bottom: 20px;

					.loadimg {
						width: 100%;

						&.idcardImg {
							image {
								height: 200px;
								width: auto;
								max-width: 100%;
								margin: 0 auto;
								display: block;
							}
						}
					}

					.innerimg {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						text-align: center;
						cursor: pointer;

						image {
							width: 50px;
							height: 50px;
							margin-bottom: 15px;
						}
					}
				}
			}
		}

		.wrap {
			max-width: 1200px;
			background: #ffffff;
			padding: 15px;
			border-radius: 10px;
			box-sizing: border-box;

			.tabs {
				width: 100%;
				margin: 20rpx 0;

				.tab {
					width: 100px;
					height: 50px;
					line-height: 50px;
					text-align: center;
					margin-right: 20px;
					white-space: nowrap;

					&.active {
						font-weight: 600;
						color: #1890FF;
						border-bottom: 2px solid #1890FF;
					}
				}
			}

			.btn {
				width: 160px;
				text-align: center;
				height: 40px;
				line-height: 40px;
				border-radius: 10px;
				background: $base-color;
				color: #fff;
				margin: 0 auto;
			}

			.box {
				padding: 20px 0;
				align-items: start;

				.item {
					width: 100%;
					align-items: start;

					.item_box {
						width: 48%;
					}

					&.left {
						margin-left: 80px;
						width: 40%;
					}

					.line {
						margin-bottom: 22px;
						position: relative;

						.preview {
							position: absolute;
							bottom: 20px;
							left: 100%;
							cursor: pointer;
							color: $base-color;
							white-space: nowrap;

							&:hover {
								color: #1491ff;
								font-weight: 600;
							}
						}

						.tips {
							white-space: nowrap;
							position: absolute;
							left: 100%;
							top: 50%;
							transform: translateY(-50%);
						}

						&.scope {
							align-items: start;
						}

						.tit {
							width: 110px;
						}

						.input_wrap {
							width: calc(100% - 150px);
							border: 1px solid #e9e9e9;
							border-radius: 5px;
							position: relative;

							.get_code {
								position: absolute;
								top: 50%;
								right: 5px;
								transform: translateY(-50%);
								font-size: 14px;
								padding: 5px 10px;
								border-radius: 5px;
								background: $base-color;
								color: #fff;
								cursor: pointer;

								&.disable {
									background: #ccc;
									color: #999;
								}
							}

							&.onlytext {
								height: 40px;
								line-height: 40px;
								border: none;
							}

							&.uploadCard {
								height: 200px;
								border: 1px solid #e9e9e9;
								border-radius: 20px;
								position: relative;

								.loadimg {
									width: 100%;

									&.idcardImg {
										image {
											height: 200px;
											width: auto;
											margin: 0 auto;
											display: block;
										}
									}
								}

								.innerimg {
									position: absolute;
									top: 50%;
									left: 50%;
									transform: translate(-50%, -50%);
									text-align: center;
									cursor: pointer;

									image {
										width: 50px;
										height: 50px;
										margin-bottom: 15px;
									}
								}
							}

							.abso {
								position: absolute;
								top: 50%;
								right: 15px;
								transform: translateY(-50%);
							}

							&.noborder {
								border: none;
							}

							input {
								width: 100%;
								height: 40px;
								padding-left: 15px;
								box-sizing: border-box;
							}

							.option {
								margin-right: 20px;
								cursor: pointer;

								image {
									width: 20px;
									height: 20px;
									margin-right: 5px;
								}
							}

							.long {
								image {
									width: 20px;
									height: 20px;
									margin-right: 5px;
									cursor: pointer;
								}
							}

							textarea {
								padding: 15px;
								height: 70px;
							}
						}
					}
				}
			}
		}
	}
</style>