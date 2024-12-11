<template>
	<view class="board">
		<view class="box"
			v-if="(info.broker.review_status == 'rejected') || (info.broker.review_status == 'waiting_submit')">
			<view class="title">上传基本信息</view>
			<view class="wrap">
				<view class="box">
					<!-- 基本信息 -->
					<view class="item">
						<view class="line flex flex_btween">
							<view class="input_wrap uploadCard flex flex-start">
								<view class="loadimg idcardImg" v-if="showyyzz">
									<image :src="yyzzImg.url" mode="heightFix" @click="preview(yyzzImg.url)"></image>
								</view>
								<view class="innerimg" v-if="!showyyzz" @click="uploadImg('business_license')">
									<image src="/static/add.png" style="width:50px;height:50px;"></image>
									<view class="text" style="font-size: 14px;">上传营业执照</view>
								</view>
								<view class="reload" @click="uploadImg('business_license')" v-if="showyyzz">重新上传</view>
							</view>
							<view class="input_wrap uploadCard flex flex-start">
								<view class="loadimg idcardImg" v-if="showrlzy">
									<image :src="rlzyImg.url" mode="heightFix" @click="preview(rlzyImg.url)"></image>
								</view>
								<view class="innerimg" v-if="!showrlzy" @click="uploadImg('human_resources_permit')">
									<image src="/static/add.png" style="width:50px;height:50px;"></image>
									<view class="text" style="font-size: 14px;">上传人力资源许可证</view>
								</view>
								<view class="reload" @click="uploadImg('human_resources_permit')" v-if="showrlzy">重新上传
								</view>
							</view>
						</view>
						<view class="tips">（上传执照后自动识别并填充下方信息。营业执照与人力资源许可证需为同一主体。）</view>
						<view class="line flex flex-start">
							<view class="tit">公司名称</view>
							<view class="input_wrap">
								<input type="text" v-model="companyName" placeholder="请输入公司名称" disabled />
							</view>
						</view>
						<view class="line flex flex-start">
							<view class="tit">统一信用代码</view>
							<view class="input_wrap">
								<input type="text" v-model="creditCode" placeholder="请输入统一信用代码" disabled />
							</view>
						</view>
						<view class="line flex flex-start">
							<view class="tit">公司类型</view>
							<view class="input_wrap">
								<input type="text" v-model="companyType" placeholder="请输入公司类型" disabled />
								<!-- <uni-data-select v-model="comValue" :localdata="comRange"
									@change="changeType"></uni-data-select> -->
							</view>
						</view>
						<view class="line flex flex-start">
							<view class="tit">办公地址</view>
							<view class="input_wrap">
								<input type="text" v-model="companyAddress" placeholder="请输入公司办公地址" disabled />
							</view>
						</view>
						<view class="line flex flex-start">
							<view class="tit">法人姓名</view>
							<view class="input_wrap">
								<input type="text" v-model="legalPerson" placeholder="请输入法人姓名" disabled />
							</view>
						</view>
					</view>

					<view class="btns flex flex_start" style="margin-top:30px;width: 70%;">
						<view class="btn" @click="handleBtn" style="margin: 0;max-width: 200px;width: 200px;">确认提交
						</view>
					</view>
				</view>

			</view>
		</view>
		<view class="box" v-if="(info.broker.review_status == 'approved'|| info.broker.review_status == 'reviewing')">
			<view class="title">公司基本信息<text
					class="tips">{{info.broker.review_status == 'approved'?"（审核通过）":"（审核中）"}}</text> </view>
			<view class="wrap">
				<view class="box">
					<!-- 基本信息 -->
					<view class="item" style="width:100%;">
						<view class="line flex flex-start">
							<view class="input_wrap uploadCard" v-if="info.company.business_license_image.url">
								<view class="loadimg idcardImg">
									<image :src="info.company.business_license_image.url" mode="heightFix"></image>
								</view>
							</view>
							<view class="input_wrap uploadCard" v-if="info.company.human_resources_permit_image.url">
								<view class="loadimg idcardImg">
									<image :src="info.company.human_resources_permit_image.url" mode="heightFix">
									</image>
								</view>
							</view>
						</view>
						<view class="line flex flex-start">
							<view class="tit">公司名称</view>
							<view class="input_wrap onlytext">{{info.company.name}}</view>
						</view>
						<view class="line flex flex-start">
							<view class="tit">信用代码</view>
							<view class="input_wrap onlytext">{{info.company.unified_social_credit_code}}</view>
						</view>
						<view class="line flex flex-start">
							<view class="tit">公司类型</view>
							<view class="input_wrap onlytext">{{info.company.type}}</view>
						</view>
						<view class="line flex flex-start">
							<view class="tit">办公地址</view>
							<view class="input_wrap onlytext">{{info.company.business_address}}</view>
						</view>
						<view class="line flex flex-start">
							<view class="tit">法人姓名</view>
							<view class="input_wrap onlytext">{{info.company.legal_person_name}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	// import pickerAddress from '@/components/pickaddress.vue';
	const app = getApp()
	export default {
		name: "add_employer",
		props: ["info"],
		data() {
			return {
				showyyzz: false,
				yyzzImg: {
					key: "",
					url: ""
				},
				showrlzy: false,
				rlzyImg: {
					key: "",
					url: ""
				},
				companyName: "",
				creditCode: "",
				comValue: "",
				comRange: [],
				companyAddress: "",
				legalPerson: "",
				companyType: "",
			};
		},
		created() {
			if (this.info.broker.review_status == 'rejected') {
				this.yyzzImg = {
					...this.info.company.business_license_image
				}
				this.rlzyImg = {
					...this.info.company.human_resources_permit_image
				}
				this.showyyzz = true
				this.showrlzy = true
				this.companyName = this.info.company.name
				this.companyType = this.info.company.type
				this.companyAddress = this.info.company.business_address
				this.legalPerson = this.info.company.legal_person_name
				this.creditCode = this.info.company.unified_social_credit_code
			}
		},
		methods: {
			preview(url) {
				let urls = []
				urls[0] = url
				uni.previewImage({
					urls: urls
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
								this.companyName = res.data.company_name
								this.companyType = res.data.company_type
								this.companyAddress = res.data.business_address
								this.creditCode = res.data.credit_code
								this.legalPerson = res.data.legal_person
								break;
							default:
								break;
						}
					}
				})
			},
			uploadImg(type) {
				let _this = this
				uni.chooseImage({
					count: 1,
					sizeType: ["original", "compressed"],
					sourceType: ["album", "camera"],
					async success(res) {
						const tempFilePaths = res.tempFilePaths;
						uni.showLoading({
							title: "上传中，请稍后"
						})
						let result = await _this.loadImage(app.globalData.baseUrl, type, tempFilePaths[0])
						if (result) {
							switch (type) {
								case "business_license":
									_this.showyyzz = true
									_this.yyzzImg = result
									_this.toOcr("business-license", result.key)
									break;
								case "human_resources_permit":
									_this.showrlzy = true
									_this.rlzyImg = result
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
			handleBtn() {
				let _this = this
				if (!this.companyName || !this.companyType || !this.companyAddress || !this.creditCode || !this
					.legalPerson || !this.yyzzImg.url || !this.rlzyImg.url) {
					uni.showToast({
						title: "内容填写不完整",
						duration: 2000,
						icon: "error"
					})
					return
				}
				uni.showModal({
					title: "温馨提示",
					content: '请仔细核实填写信息是否正确，确认无误请点击“确定”提交资料。',
					success(resp) {
						if (resp.confirm) {
							let data = {
								"name": _this.companyName,
								"unified_social_credit_code": _this.creditCode,
								"type": _this.companyType,
								"business_license_image": _this.yyzzImg,
								"legal_person_name": _this.legalPerson,
								"business_address": _this.companyAddress,
								"human_resources_permit_image": _this.rlzyImg
							}
							console.log(data)
							_this.$request("/broker/company/info", data, "POST").then(res => {
								if (res.code == 0) {
									uni.showModal({
										title: "提交成功，等待审核",
										showCancel: false
									})
									_this.$emit("updateUserInfo")
								} else {
									uni.showModal({
										title: res.msg,
										showCancel: false
									})
								}
							})
						}
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

	.board {
		.tips {
			font-size: 14px;
			font-weight: normal;
			color: #f00;
			margin-bottom: 30px;
		}

		.wrap {
			max-width: 1200px;
			background: #ffffff;
			padding: 15px;
			border-radius: 10px;
			box-sizing: border-box;

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

					max-width: 70%;

					&.left {
						margin-left: 80px;
						width: 40%;
					}

					.line {
						margin-bottom: 20px;
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
							width: 100px;
						}

						.input_wrap {
							width: calc(100% - 100px);
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
								// height: 40px;
								// line-height: 40px;
								border: none;
							}

							&.uploadCard {
								width:48%;
								overflow: hidden;
								height: 200px;
								border: 1px solid #e9e9e9;
								border-radius: 20px;
								position: relative;
								cursor: pointer;

								.reload {
									position: absolute;
									padding: 5px 10px;
									top: 0px;
									right: 0px;
									background: #0092ff;
									font-size: 12px;
									color: #fff;
									cursor: pointer;
									border-top-right-radius: 10px;
									border-bottom-left-radius: 10px;
								}

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