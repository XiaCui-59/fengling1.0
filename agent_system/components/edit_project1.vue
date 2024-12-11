<template>
	<view class="board">
		<view class="back" style="font-weight:500;color:#1E8EEE;font-size:16px;cursor: pointer;" @click="back">
			<image src="/static/back_blue.png" mode="widthFix" style="width:18px;height:18px;margin-right:5px;">
			</image>
			<text>返回</text>
		</view>
		<view class="box">
			<view class="title">编辑职位</view>
			<view class="handle_area flex flex_btween" style="align-items: start;flex-wrap: wrap;">
				<view class="sub_box">
					<view class="line">
						<view class="tit">职位名称</view>
						<view class="input_wrap">
							<input type="text" v-model="currentInfo.name" placeholder="请输入职位名称" maxlength="32" />
						</view>
					</view>
					<view class="line">
						<view class="tit">职位地址</view>
						<view class="input_wrap">
							<input type="text" v-model="currentInfo.work_address" placeholder="请输入工作地址" />
						</view>
					</view>
					<view class="line">
						<view class="tit">工人薪资</view>
						<view class="input_wrap">
							<input type="text" v-model="currentInfo.worker_salary" placeholder="请输入工人薪资" />
						</view>
					</view>
					<view class="line">
						<view class="tit">工人福利</view>
						<view class="input_wrap">
							<input type="text" v-model="currentInfo.worker_welfare" placeholder="请输入工人福利" />
						</view>
					</view>
				</view>
				<view class="sub_box">
					<view class="line">
						<view class="tit">职位描述</view>
						<view class="input_wrap noborder" style="height:auto;">
							<textarea v-model="currentInfo.content" placeholder="请输入详细需求" style="height:245px;"
								maxlength="1000" />
						</view>
					</view>
				</view>
				<view class="line" style="width: 100%;">
					<view class="btn" @click="submit" style="width:150px;">提交</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "add_require",
		data() {
			return {
				id: "",
				currentInfo: {
					"broker_company_name": "",
					"content": "",
					"contracted_num": 0,
					"employer_name": "",
					"arrival_time": "",
					"checkin_time": "",
					"id": 0,
					"is_employer_name_public": false,
					"name": "",
					"need_worker_num": 1,
					"pay_salary_setting": {
						"type": "",
						"daily": "",
						"weekly": "",
						"monthly": ""
					},
					"salary_settlement_type": "",
					"salary_unit_price": "",
					"work_address": "",
					"work_end_time": "",
					"work_start_time": "",
					"work_type": "",
					"work_type_code": "",
					"work_type_id": 0,
					"work_type_name": ""
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
		methods: {
			back() {
				this.setPageName({
					pageName: "project_list"
				})
				this.$emit("getPageName", {
					pageName: "project_list"
				})
			},
			getInfo() {
				let url = "/broker/project/" + this.id
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.currentInfo = res.data
					}
				})
			},
			submit() {
				let _this = this
				console.log(this.currentInfo)
				let url = "/broker/project/" + this.id
				this.$request(url, this.currentInfo, "POST").then(res => {
					if (res.code == 0) {
						uni.showModal({
							title: "更新成功",
							showCancel: false,
							success(resp) {
								if (resp.confirm) {
									_this.setPageName({
										pageName: "project_list"
									}, "", "all")
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
	}
</script>

<style lang="scss">
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

		.uni-select {
			height: 30px;
			font-size: 14px;
		}
	}

	.box {
		.sub_box {
			width: 48%;
		}

		.line {
			margin-bottom: 20px;

			&.scope {
				align-items: start;
			}

			.tit {
				color: rgba(0, 0, 0, 0.85);
				line-height: 22px;
			}

			.input_wrap {
				width: 460px;
				height: 30px;
				border-radius: 2px;
				position: relative;
				border: 1px solid #D9D9D9;
				margin-top: 8px;

				.more {
					.subt {
						white-space: nowrap;
						color: #f47106;
					}

					uni-picker {
						color: #f47106;
					}

					.month {
						input {
							width: 40px;
							height: 30px;
							text-align: center;
							border: 1px solid #ccc;
							padding: 0;
							border-radius: 4px;
							margin-right: 5px;
							color: #f47106;
						}
					}
				}

				&.age {
					input {
						border: 1px solid #e9e9e9;
						width: 140px;
						border-radius: 5px;
					}

					text {
						display: inline-block;
						margin: 0 10px;
					}
				}

				.work_type {
					position: relative;

					.work {
						height: 30px;
						line-height: 30px;
						padding-left: 15px;
						cursor: pointer;
						font-size: 14px;
					}

					.work_wrap {
						min-width: 100%;
						position: absolute;
						top: 100%;
						left: 0;
						z-index: 99;
						background: #fff;
						box-shadow: 0 0 5px 5px #e8e8e8;
						padding: 10px;
						box-sizing: border-box;
						height: 300px;
						overflow: scroll;
					}

					.contract_wrap {
						height: 110px;
						padding: 0;

						.item {
							font-size: 14px;
							height: 30px;
							line-height: 30px;
							padding: 0 10px;
							box-sizing: border-box;

							&:hover {
								cursor: pointer;
								background: #e8e8e8;
								color: $base-color;
							}
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
					height: 30px;
					padding-left: 15px;
					font-size: 14px;
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
					width: 100%;
					padding: 15px;
					border: 1px solid #D9D9D9;
					font-size: 14px;
					overflow-y: scroll;
				}
			}
		}
	}
</style>