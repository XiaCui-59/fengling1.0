<template>
	<view class="board">
		<view class="back" style="font-weight:500;color:#1E8EEE;font-size:16px;cursor: pointer;margin-bottom: 15px;"
			@click="back">
			<image src="/static/back_blue.png" mode="widthFix" style="width:18px;height:18px;margin-right:5px;">
			</image>
			<text>返回</text>
		</view>
		<view class="box" style="height:calc(100% - 36px);">
			<view class="title" style="margin:0 0 15px 0;">职位数据校对</view>
			<view class="handle_area flex flex_btween" style="align-items: start;flex-wrap: wrap;">
				<view class="sub_box">
					<view class="base_box">
						<view class="m_tit">原始数据</view>
						<view class="base_inner">
							<textarea v-model="info.content" placeholder="请输入职位详情" style="width:100%;height:100%;"
								maxlength="1000" />
						</view>
					</view>
				</view>
				<view class="sub_box">
					<view class="base_box">
						<view class="m_tit">AI清洗后数据</view>
						<view class="base_inner">
							<view class="base_item">
								<view class="sub_tit">基本信息</view>
								<view class="base">
									<view class="line flex flex-start">
										<view class="tit">用工场景：</view>
										<view class="input_wrap">
											<input type="text" v-model="info.tags.employment_scenario" />
										</view>
									</view>
									<view class="line flex flex-start">
										<view class="tit">所属行业：</view>
										<view class="input_wrap">
											<input type="text" v-model="info.tags.industry" />
										</view>
									</view>
									<view class="line flex flex-start">
										<view class="tit">工种类别：</view>
										<view class="input_wrap">
											<input type="text" v-model="info.tags.work_type" />
										</view>
									</view>
									<view class="line flex flex-start">
										<view class="tit">工作内容：</view>
										<view class="input_wrap">
											<textarea v-model="info.tags.work_description" placeholder=""
												maxlength="1000"
												style="height:100px;padding:10px;box-sizing: border-box;" />
										</view>
									</view>
									<view class="line flex flex-start">
										<view class="tit">工作地点：</view>
										<view class="input_wrap">
											<input type="text" v-model="info.tags.work_location" />
										</view>
									</view>
									<view class="line flex flex-start">
										<view class="tit">面试时间：</view>
										<view class="input_wrap">
											<input type="text" v-model="info.tags.interview_time" />
										</view>
									</view>
									<view class="line flex flex-start">
										<view class="tit">工作时间：</view>
										<view class="input_wrap">
											<input type="text" v-model="info.tags.work_hours" />
										</view>
									</view>
									<view class="line flex flex-start">
										<view class="tit">基本工资：</view>
										<view class="input_wrap">
											<input type="text" v-model="info.tags.base_salary" />
										</view>
									</view>
									<view class="line flex flex-start">
										<view class="tit">发薪日期：</view>
										<view class="input_wrap">
											<input type="text" v-model="info.tags.payday" />
										</view>
									</view>
									<view class="line flex flex-start">
										<view class="tit">结算方式：</view>
										<view class="input_wrap">
											<input type="text" v-model="info.tags.settlement" />
										</view>
									</view>
									<view class="line flex flex-start">
										<view class="tit">发薪方式：</view>
										<view class="input_wrap">
											<input type="text" v-model="info.tags.pay_method" />
										</view>
									</view>
									<view class="line flex flex-start">
										<view class="tit">工作环境：</view>
										<view class="input_wrap">
											<input type="text" v-model="info.tags.work_environment" />
										</view>
									</view>
									<view class="line flex flex-start">
										<view class="tit">休假制度：</view>
										<view class="input_wrap">
											<input type="text" v-model="info.tags.leave_vacation" />
										</view>
									</view>
									<view class="line flex flex-start">
										<view class="tit">基本要求：</view>
										<view class="input_wrap">
											<input type="text" v-model="info.tags.basic_requirements" />
										</view>
									</view>
									<view class="line flex flex-start">
										<view class="tit">证明要求：</view>
										<view class="input_wrap">
											<input type="text" v-model="info.tags.proof_requirements" />
										</view>
									</view>
									<view class="line flex flex-start">
										<view class="tit">学历要求：</view>
										<view class="input_wrap">
											<input type="text" v-model="info.tags.educational_requirements" />
										</view>
									</view>
									<view class="line flex flex-start">
										<view class="tit">工作经验：</view>
										<view class="input_wrap">
											<input type="text" v-model="info.tags.work_experience" />
										</view>
									</view>
									<view class="line flex flex-start">
										<view class="tit">着装要求：</view>
										<view class="input_wrap">
											<input type="text" v-model="info.tags.dress_code" />
										</view>
									</view>
									<view class="line flex flex-start">
										<view class="tit">入职费用：</view>
										<view class="input_wrap">
											<input type="text" v-model="info.tags.onboarding_fees" />
										</view>
									</view>
									<view class="line flex flex-start">
										<view class="tit">奖金补贴：</view>
										<view class="input_wrap">
											<input type="text" v-model="info.tags.bonuses_allowances" />
										</view>
									</view>
									<view class="line flex flex-start">
										<view class="tit">餐饮住宿：</view>
										<view class="input_wrap">
											<input type="text" v-model="info.tags.meals_accommodation" />
										</view>
									</view>
									<view class="line flex flex-start">
										<view class="tit">保险情况：</view>
										<view class="input_wrap">
											<input type="text" v-model="info.tags.insurance" />
										</view>
									</view>
									<view class="line flex flex-start">
										<view class="tit">团建活动：</view>
										<view class="input_wrap">
											<input type="text" v-model="info.tags.team_building" />
										</view>
									</view>
									<view class="line flex flex-start">
										<view class="tit">住宿环境：</view>
										<view class="input_wrap">
											<input type="text" v-model="info.tags.accommodation_environment" />
										</view>
									</view>
								</view>
							</view>
							<view class="base_item">
								<view class="sub_tit">职位亮点</view>
								<view class="labels flex flex-start">
									<view class="label" v-for="(item,index) in info.highlights" :key="index"
										:style="{marginBottom:info.highlights.length>=4?'10px':'0'}">
										{{item}}
										<view class="dele" @click="deleHighlight(item)">&times;</view>
									</view>
									<view class="add flex flex-start"
										:style="{marginBottom:info.negative_rules.length>=4?'10px':'0'}">
										<input type="text" v-model="newHighlight" placeholder="输入新增内容"
											placeholder-style="font-size:14px;" />
										<view class="add_btn" @click="addHighlight">+</view>
									</view>
								</view>
							</view>
							<view class="base_item">
								<view class="sub_tit">负面信息</view>
								<view class="labels flex flex-start">
									<view class="label" v-for="(item,index) in info.negative_rules" :key="index"
										:style="{marginBottom:info.negative_rules.length>=4?'10px':'0'}">
										{{item}}
										<view class="dele" @click="deleNegative(item)">&times;</view>
									</view>
									<view class="add flex flex-start"
										:style="{marginBottom:info.negative_rules.length>=4?'10px':'0'}">
										<input type="text" v-model="newNegative" placeholder="输入新增内容"
											placeholder-style="font-size:14px;" />
										<view class="add_btn" @click="addNegative">+</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="btns flex flex_around">
					<view class="btn" @click="toEdit"
						style="width:150px;background:#fff;border:1px solid #0092ff;color:#0092ff;">更新原始数据</view>
					<view class="btn" @click="submit" style="width:150px;">校对数据</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		name: "add_plan",
		data() {
			return {
				newHighlight: "",
				newNegative: "",
				preStatus: "",
				preCompany: "",
				prePro: "",
				preStart: "",
				preEnd: "",
				info: {
					"tags": {
						"employment_scenario": "",
						"industry": "",
						"work_type": "",
						"work_description": "",
						"work_location": "",
						"work_hours": "",
						"payday": "",
						"payment_method": "",
						"salary_distribution_method": "",
						"work_environment": "",
						"leave_vacation": "",
						"proof_requirements": "",
						"educational_requirements": "",
						"work_experience": "",
						"dress_code": "",
						"onboarding_fees": "",
						"base_salary": "",
						"bonuses_allowances": "",
						"meals_accommodation": "",
						"insurance": "",
						"team_building": "",
						"accommodation_environment": "",
						"base_salary": "",
						"bonuses_allowances": "",
						"meals_accommodation": "",
					},
					"highlights": ["免费住宿", "工作轻松", "长白班", "交通补贴", "餐补"],
					"negative_rules": ["环境差", "有噪音", "长时站立", "长期碰水"],
					"content": ""
				},
				prePage: 1
			};
		},
		async created() {
			let paramArr = []
			if (location.href.indexOf("?") != -1) {
				paramArr = location.href.split("?")[1].split("&")
			}
			for (var i = 0; i < paramArr.length; i++) {
				if (paramArr[i].indexOf("id") != -1) {
					this.id = paramArr[i].split("=")[1]
				}
				if (paramArr[i].indexOf("company") != -1) {
					this.preCompany = paramArr[i].split("=")[1]
				}
				if (paramArr[i].indexOf("searpro") != -1) {
					this.prePro = paramArr[i].split("=")[1]
				}
				if (paramArr[i].indexOf("start") != -1) {
					this.preStart = paramArr[i].split("=")[1]
				}
				if (paramArr[i].indexOf("end") != -1) {
					this.preEnd = paramArr[i].split("=")[1]
				}
				if (paramArr[i].indexOf("pgindex") != -1) {
					this.prePage = paramArr[i].split("=")[1]
				}
			}
			for (var k = 0; k < paramArr.length; k++) {
				if (paramArr[k].indexOf("pre_stus") != -1) {
					this.preStatus = paramArr[k].split("=")[1]
				}

			}
			this.getInfo()
		},
		methods: {
			back() {
				// window.history.back()
				console.log(this.preStatus)
				let preSear = {
					company: this.preCompany,
					searPro: this.prePro,
					start: this.preStart,
					end: this.preEnd,
					page: this.prePage
				}
				this.setPageName({
					pageName: "project_list"
				}, "", this.preStatus, "", preSear)
				this.$emit("getPageName", {
					pageName: "project_list"
				})
			},
			getInfo() {
				let url = "/admin/project/" + this.id + "/extract-data"
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.info = res.data
					}
				})
			},
			deleHighlight(item) {
				let index = this.info.highlights.indexOf(item)
				let _this = this
				uni.showModal({
					title: "确认删除亮点：" + item + "？",
					confirmColor: "#f00",
					confirmText: "确认删除",
					success(res) {
						if (res.confirm) {
							_this.info.highlights.splice(index, 1)
						}
					}
				})

			},
			deleNegative(item) {
				let index = this.info.negative_rules.indexOf(item)
				let _this = this
				uni.showModal({
					title: "确认删除负面信息：" + item + "？",
					confirmColor: "#f00",
					confirmText: "确认删除",
					success(res) {
						if (res.confirm) {
							_this.info.negative_rules.splice(index, 1)
						}
					}
				})

			},
			addHighlight() {
				if (!this.newHighlight) {
					uni.showToast({
						title: "没有输入",
						icon: "error",
						duration: 2000
					})
					return
				}
				if (this.info.highlights.indexOf(this.newHighlight) == -1) {
					this.info.highlights.push(this.newHighlight)
				} else {
					uni.showModal({
						title: "该亮点已存在。",
						showCancel: false
					})
				}
				this.newHighlight = ""

			},
			addNegative() {
				if (!this.newNegative) {
					uni.showToast({
						title: "没有输入",
						icon: "error",
						duration: 2000
					})
					return
				}
				if (this.info.negative_rules.indexOf(this.newNegative) == -1) {
					this.info.negative_rules.push(this.newNegative)
				} else {
					uni.showModal({
						title: "该亮点已存在。",
						showCancel: false
					})
				}
				this.newNegative = ""
			},
			toEdit() {
				let _this = this
				uni.showModal({
					title: "是否确认更新原始数据，AI将重新清洗数据。",
					confirmText: "确定更新",
					success(res) {
						if (res.confirm) {
							// 请求接口
							let data = {
								"content": _this.info.content
							}
							let url = "/admin/project/" + _this.id + "/content"
							_this.$request(url, data, "POST").then(resp => {
								if (resp.code == 0) {
									uni.showModal({
										title: "原始数据已更新，请前往职位列表",
										showCancel: false,
										success(respon) {
											if (respon.confirm) {
												_this.setPageName({
													pageName: "project_list"
												}, "", _this.preStatus, "")
												_this.$emit("getPageName", {
													pageName: "project_list"
												})
											}
										}
									})
								}
							})
						}
					}
				})
			},
			close(e) {
				console.log(e)
				this.showSele = false
			},
			submit() {
				let _this = this
				uni.showModal({
					title: "是否确认已完成数据校对。",
					success(res) {
						if (res.confirm) {
							// 请求接口
							let url = "/admin/project/" + _this.id + "/check-out"
							let data = {
								"highlights": _this.info.highlights,
								"negative_rules": _this.info.negative_rules,
								"tags": _this.info.tags,
							}
							_this.$request(url, data, "POST").then(resp => {
								if (resp.code == 0) {
									uni.showModal({
										title: "校对完成，是否直接发布职位？",
										cancelText: "去职位列表",
										confirmText: "确认发布",
										success(respon) {
											if (respon.confirm) {
												// 请求接口
												let url2 = "/admin/project/" + _this.id + "/review"
												let data2 = {
													"status": "running",
													"reason": ""
												}
												_this.$request(url2, data2, "POST").then(
													response => {
														if (response.code == 0) {
															uni.showModal({
																title: "发布成功，前往职位列表",
																showCancel: false,
																success(uss) {
																	if (uss.confirm) {
																		console.log(
																			"hahahah"
																		)
																		_this
																			.setPageName({
																					pageName: "project_list"
																				}, "",
																				_this
																				.preStatus,
																				"")
																		_this.$emit(
																			"getPageName", {
																				pageName: "project_list"
																			})
																	}
																}
															})
														}
													})
											} else {
												_this.setPageName({
													pageName: "project_list"
												}, "", _this.preStatus, "")
												_this.$emit("getPageName", {
													pageName: "project_list"
												})
											}
										}
									})
								}
							})
						}
					}
				})

			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep {
		uni-picker {
			width: 100%;
			padding: 0 15px;
			height: 30px;
			line-height: 30px;
			border: 1px solid #e9e9e9;
			border-radius: 5px;
			margin-right: 20px;
		}

		.uni-stat__select {
			margin-left: 10px;
		}

		.uni-select {
			height: 30px;
			font-size: 14px;
		}
	}

	.sele_list {
		padding: 15px;
		box-sizing: border-box;

		.sele_item {
			margin-bottom: 10px;
			font-size: 14px;

			.dele {
				width: 20px;
				height: 15px;
				text-align: center;
				line-height: 15px;
				border: 1px solid #f00;
				color: #f00;
				font-size: 18px;
				font-weight: bold;
				border-radius: 2px;

				&:hover {
					background: #f00;
					color: #fff;
					cursor: pointer;
				}
			}
		}
	}

	.box {
		.btns {
			width: 100%;

			.btn {
				margin: 20px auto 0 auto;
			}
		}


		.sub_box {
			width: 49.5%;
			background: #f6f6f6;
			padding: 15px 15px 0 15px;
			box-sizing: border-box;

			.base_box {
				margin-bottom: 20px;

				.m_tit {
					font-weight: 600;
					font-size: 16px;
					white-space: nowrap;
				}


				.base_inner {
					height: calc(100vh - 300px);
					overflow-y: scroll;
					margin-top: 15px;
					border: 1px solid #ccc;
					border-radius: 4px;
					padding: 10px;
					box-sizing: border-box;

					.sub_tit {
						font-size: 15px;
						color: #333;
						font-weight: 600;
					}

					.labels {
						width: 100%;
						flex-wrap: wrap;
						margin-top: 15px;

						.add {
							width: 22%;
							margin-right: 0;

							input {
								width: calc(100% - 30px);
								background: #ffffff;
								// border: 1px solid #0092ff;
								height: 30px;
								padding: 0 10px;
								box-sizing: border-box;
							}

							.add_btn {
								width: 30px;
								height: 30px;
								text-align: center;
								line-height: 30px;
								background: #009eff;
								color: #fff;
								border-radius: 2px;
								cursor: pointer;

								&:hover {
									opacity: 0.8;
								}
							}
						}

						.label {
							width: 22%;
							height: 30px;
							line-height: 30px;
							text-align: center;
							background: #ffffff;
							border-radius: 4px;
							margin-right: 4%;
							font-size: 14px;
							position: relative;

							.dele {
								position: absolute;
								width: 15px;
								height: 15px;
								text-align: center;
								line-height: 15px;
								font-size: 12px;
								border-radius: 50%;
								top: -7px;
								right: -7px;
								border: 1px solid #ccc;
								background: #fff;

								&:hover {
									cursor: pointer;
									background: #f00;
									border: 1px solid #f00;
									color: #f6f6f6;
								}
							}

							&:nth-child(4n) {
								margin-right: 0;
							}
						}
					}


					.base {
						margin-top: 15px;

						.line {
							margin-bottom: 10px;

							.tit {
								font-size: 15px;
								color: #555;
								width: auto;
								white-space: nowrap;
							}

							.input_wrap {
								border: none;
								// border-bottom: 1px solid #ddd;
								width: 100%;
								white-space: nowrap;
								padding: 5px 0;
								box-sizing: border-box;

								input {
									height: 30px;
									padding: 0 10px;
									box-sizing: border-box;
									background: #ffffff;
								}

								textarea {
									width: 100%;
									min-height: 30px;
									height: auto;
									background: #ffffff;
								}
							}
						}



					}
				}
			}
		}
	}
</style>