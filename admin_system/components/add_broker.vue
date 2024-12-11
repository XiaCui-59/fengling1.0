<template>
	<view class="board">
		<view class="back"
			style="font-weight:500;color:#1E8EEE;font-size:16px;cursor: pointer;margin-left:10px;margin-bottom: 15px;"
			@click="back">
			<image src="/static/back_blue.png" mode="widthFix" style="width:18px;height:18px;margin-right:5px;">
			</image>
			<text>返回</text>
		</view>
		<view class="box flex flex-start" style="align-items: start;">
			<view class="box_item">
				<view class="l_tabs">
					<view class="l_tab" :class="currentMainTab==0?'active':''" @click="changeMainTab(0)">基本信息<text
							class="mark">*</text></view>
					<view class="l_tab" :class="currentMainTab==1?'active':''" @click="changeMainTab(1)">两证信息</view>
				</view>
			</view>
			<view class="box_item box_right" v-if="currentMainTab == 0">
				<view class="title">上传基本信息</view>
				<view class="wrap">
					<view class="box">
						<!-- 基本信息 -->
						<view class="item flex flex_btween">
							<view class="item_box">
								<view class="line flex flex-start" style="margin-bottom:20px;">
									<view class="tit">营业执照</view>
									<view class="input_wrap uploadCard flex flex-start"
										@click="uploadImg('business_license')">
										<view class="loadimg" v-if="showyyzz">
											<image :src="yyzzImg.url" mode="widthFix"></image>
										</view>
										<view class="innerimg" v-if="!showyyzz">
											<image src="/static/add.png" style="width:50px;height:50px;"></image>
											<view class="text">上传营业执照</view>
										</view>
									</view>
									<!-- <view class="tips">（上传执照后自动识别并填充下方信息，请仔细核对是否有误）</view> -->
									<!-- <view class="preview" v-if="showyyzz" @click="toView('yyzz')">预览</view> -->
								</view>
								<view class="line flex flex-start">
									<view class="tit">公司logo</view>
									<view class="input_wrap uploadCard flex flex-start"
										@click="uploadImg('company_logo')">
										<view class="loadimg" v-if="showlogo">
											<image :src="logo.url" mode="widthFix"></image>
										</view>
										<view class="innerimg" v-if="!showlogo">
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
										<input type="text" v-model="companyName" placeholder="请输入公司名称" />
									</view>
								</view>
								<view class="line flex flex-start">
									<view class="tit">统一信用代码</view>
									<view class="input_wrap">
										<input type="text" v-model="creditCode" placeholder="请输入统一信用代码" />
									</view>
								</view>
								<view class="line flex flex-start">
									<view class="tit">公司类型</view>
									<view class="input_wrap">
										<input type="text" v-model="companyType" placeholder="请输入公司类型" />
									</view>
								</view>
								<!-- <view class="line flex flex-start">
									<view class="tit">所在城市</view>
									<view class="input_wrap">
										<input type="text" v-model="city" placeholder="请输入公司所处城市" />
									</view>
								</view> -->
								<view class="line flex flex-start">
									<view class="tit">办公地址</view>
									<view class="input_wrap">
										<input type="text" v-model="company_address" placeholder="请输入公司办公地址" />
									</view>
								</view>
								<view class="line flex flex-start">
									<view class="tit">法人姓名</view>
									<view class="input_wrap">
										<input type="text" v-model="name" placeholder="请输入公司法人姓名" />
									</view>
								</view>
								<!-- <view class="line flex flex-start">
									<view class="tit">联系电话</view>
									<view class="input_wrap">
										<input type="text" v-model="mobile" placeholder="请输入联系方式" />
									</view>
								</view> -->
							</view>
						</view>
					</view>
					<view class="btns flex flex_around">
						<view class="btn" @click="handleBase">确认提交</view>
					</view>
				</view>
			</view>
			<view class="box_item box_right" v-if="currentMainTab == 1">
				<view class="title">上传两证 <text class="tips">（劳务派遣证、人力资源许可证）</text> </view>
				<view class="wrap two_card flex flex_btween">
					<view class="item">
						<view class="uploadCard" @click="uploadImg('human_resources_permit')">
							<view class="loadimg" v-if="showrlzyxk">
								<image :src="rlzyxkImg.url" mode="heightFix"></image>
							</view>
							<view class="innerimg" v-if="!showrlzyxk">
								<image src="/static/add.png" style="width:50px;height:50px;"></image>
								<view class="text">上传人力资源许可证</view>
							</view>
						</view>
					</view>
					<view class="item">
						<view class="uploadCard" @click="uploadImg('labor_dispatch_permit')">
							<view class="loadimg" v-if="showlwpq">
								<image :src="lwpqImg.url" mode="heightFix"></image>
							</view>
							<view class="innerimg" v-if="!showlwpq">
								<image src="/static/add.png" style="width:50px;height:50px;"></image>
								<view class="text">上传劳务派遣证</view>
							</view>
						</view>
					</view>
				</view>
				<view class="btns flex flex_around">
					<view class="btn" @click="handleBtn" style="width: 160px;color:#fff;">确认提交</view>
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
				showlogo: false,
				logo: {
					key: "",
					url: ""
				},
				rlzyxkImg: {
					key: "",
					url: ""
				},
				showrlzyxk: false,
				showlwpq: false,
				lwpqImg: {
					key: "",
					url: ""
				},
				showConfirm: true,
				companyName: "",
				creditCode: "",
				companyType: "",
				city: "",
				currentIndex: 1,
				name: "",
				mobile: "",
				workAddress: "",
				company_city: "",
				yyzzImg: {
					key: "",
					url: ""
				},
				showyyzz: false,
				company_address: "",
			};
		},
		created() {},
		components: {
			// pickerAddress
		},
		methods: {
			changeMainTab(index) {
				this.currentMainTab = index
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
			async loadimg(type, filePath) {
				var _this = this;
				let header = {
					"Authorization": "bearer " + uni.getStorageSync("token"),
					"accept": "application/json"
				}
				return new Promise((resolve, reject) => {
					uni.uploadFile({
						url: app.globalData.baseUrl + "/admin/upload?type=" + type,
						filePath: filePath,
						name: "file",
						header: header,
						success(resp) {
							var response = JSON.parse(resp.data);
							if (response.code == 0) {
								uni.showToast({
									title: "图片上传成功"
								})
								if (type == "business_license") {
									_this.showyyzz = true
									_this.yyzzImg = response.data
									_this.$request("/admin/ocr/business-license", {
										key: response.data.key
									}, "POST").then(res => {
										if (res.code == 0) {
											_this.companyName = res.data.company_name
											_this.creditCode = res.data.credit_code
											_this.company_address = res.data.business_address
											_this.companyType = res.data.company_type
											_this.name = res.data.legal_person
											if (res.data.business_address.indexOf("市") != -1) {
												_this.city = res.data.business_address.slice(0,
													res.data.business_address.indexOf(
														"市") + 1)
											} else {
												if (res.data.business_address.indexOf("区") != -
													1) {
													_this.city = res.data.business_address
														.slice(0, res.data.business_address
															.indexOf("区") + 1)
												} else {
													if (res.data.business_address.indexOf(
															"县") != -1) {
														_this.city = res.data.business_address
															.slice(0, res.data.business_address
																.indexOf("县") + 1)
													}
												}
											}
										}
									})
								}
								if (type == "company_logo") {
									_this.showlogo = true
									_this.logo = response.data
								}
							} else {
								uni.showModal({
									title: response.msg,
									showCancel: false
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
			resetData() {
				this.companyName = ""
				this.creditCode = ""
				this.companyType = ""
				this.yyzzImg = {
					key: "",
					url: ""
				}
				this.company_address = ""
				this.name = ""
				this.mobile = ""
				this.logo = {
					key: "",
					url: ""
				}
				this.city = ""
			},
			back() {
				this.setPageName({
					pageName: "broker_list"
				})
				this.$emit("getPageName", {
					pageName: "broker_list"
				})
			},
			handleBase() {
				let _this = this
				let data = {
					"name": _this.companyName,
					"unified_social_credit_code": _this.creditCode,
					"type": _this.companyType,
					"business_license_image": _this.yyzzImg,
					"business_address": _this.company_address,
					"legal_person_name": _this.name,
					"legal_person_mobile": _this.mobile,
					"logo": _this.logo,
					"city": _this.city
				}
				_this.$request("/admin/companies", data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: "创建成功"
						})
						// 重置数据
						_this.resetData()
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
								overflow-y: scroll;

								.loadimg {
									width: 100%;

									image {
										width: 100%;
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