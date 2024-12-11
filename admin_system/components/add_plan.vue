<template>
	<view class="board" @click="close">
		<view class="box">
			<view class="title">新增计划</view>
			<view class="handle_area flex flex_btween" style="align-items: start;flex-wrap: wrap;">
				<view class="sub_box">
					<view class="line">
						<view class="tit"><text>*</text>计划名称</view>
						<view class="input_wrap">
							<input type="text" v-model="planInfo.plan_name" placeholder="请输入计划名称,不超10个字"
								maxlength="10" />
						</view>
					</view>
					<view class="line">
						<view class="tit"><text>*</text>计划时间</view>
						<view class="input_wrap noborder flex flex-start">
							<uni-datetime-picker type="date" v-model="planInfo.plan_start_time"
								@change="changeStartTime" :start="start1" />
							<view class="symbol" style="margin:0 15px;">-</view>
							<uni-datetime-picker type="date" v-model="planInfo.plan_end_time" @change="changeEndTime"
								:start="start2" />
						</view>
					</view>
					<view class="line">
						<view class="tit"><text>*</text>计划渠道</view>
						<view class="input_wrap noborder flex flex-start">
							<uni-data-select v-model="planInfo.platform" :localdata="sourceRange"
								@change="changeSource"></uni-data-select>
						</view>
					</view>
					<view class="line">
						<view class="tit"><text>*</text>责任人</view>
						<view class="input_wrap noborder flex flex-start">
							<input type="text" v-model="planInfo.user_name" placeholder="请输入责任人" />
						</view>
					</view>
					<view class="line">
						<view class="tit"><text>*</text>关联职位</view>
						<view class="input_wrap" @click.stop="openSele" style="height:auto;">
							<view class="text"
								style="padding:0 15px;box-sizing: border-box;min-height:30px;line-height:30px;"
								v-if="!planInfo.projects.length">
								请选择关联职位
							</view>
							<view class="sele_list" v-if="planInfo.projects.length">
								<view class="sele_item flex flex_btween" v-for="(item,index) in planInfo.projects"
									:key="index">
									<view class="text">{{item.project_code +" "+ item.project_name}}</view>
									<view class="dele" @click.stop="deleProject(item)">-</view>
								</view>
							</view>
							<multiSelect :localdata="projectRange" :projectIds="projectIds" :selectedObjs="selectedObjs"
								:pagination="pagination" @change="change" @getProject="changePage" @close="close"
								v-if="showSele">
							</multiSelect>
						</view>
					</view>
				</view>
				<view class="sub_box">
					<view class="line">
						<view class="tit"><text>*</text>预计投入成本</view>
						<view class="input_wrap">
							<input type="number" v-model="planInfo.expected_cost" placeholder="请输入预计投入成本" />
						</view>
					</view>
					<view class="line">
						<view class="tit"><text>*</text>预计产出线索数</view>
						<view class="input_wrap">
							<input type="number" v-model="planInfo.expected_user_num" placeholder="请输入预计产出线索数" />
						</view>
					</view>
					<view class="line">
						<view class="tit"><text>*</text>计划内容</view>
						<view class="input_wrap noborder" style="height:auto;">
							<textarea v-model="planInfo.content" placeholder="请输入计划内容" style="height:245px;" />
						</view>
					</view>
				</view>
				<view class="btn" @click="submit" style="width:150px;margin:0 auto;">提交</view>
			</view>
		</view>
	</view>
</template>

<script>
	import multiSelect from "@/components/multi_data_select.vue"

	function getToday() {
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
		return year + "-" + month + "-" + day
	}
	const app = getApp()
	export default {
		name: "add_plan",
		data() {
			return {
				planInfo: {
					"plan_name": "", // 计划名称
					"plan_start_time": "", // 计划开始时间
					"plan_end_time": "", // 计划结束时间
					"platform": "", //  渠道
					"user_name": "", // 负责人
					"expected_cost": "", // 计划成本
					"expected_user_num": "", // 计划线索
					"content": "", // 计划内容
					"projects": []


				},
				sourceRange: [{
						value: "douyin",
						text: "抖音直播"
					},
					{
						value: "kuaishou",
						text: "快手直播"
					},
					{
						value: "wechat_mini_program",
						text: "微信"
					}
				],
				projectRange: [],
				projectIds: [],
				selectedObjs: [],
				pagination: {},
				projectStr: "",
				showSele: false,
				currentPage: 1,
				keyword: "",
				id: "",
				start2: getToday(),
				start1: getToday()
			};
		},
		components: {
			multiSelect
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
			}
			if (this.id) {
				let resPlanInfo = await this.getPlanInfo()
				this.planInfo.plan_name = resPlanInfo.plan_name
				this.planInfo.plan_start_time = resPlanInfo.plan_start_time, // 计划开始时间
					this.planInfo.plan_end_time = resPlanInfo.plan_end_time, // 计划结束时间
					this.planInfo.platform = resPlanInfo.platform, //  渠道
					this.planInfo.user_name = resPlanInfo.user_name, // 负责人
					this.planInfo.expected_cost = resPlanInfo.expected_cost, // 计划成本
					this.planInfo.expected_user_num = resPlanInfo.expected_user_num, // 计划线索
					this.planInfo.content = resPlanInfo.content, // 计划内容
					this.planInfo.projects = resPlanInfo.projects
				let len = this.planInfo.projects.length
				this.projectStr = ""
				for (let i = 0; i < len; i++) {
					this.projectStr += this.planInfo.projects[i].project_name + "、"
					this.projectIds.push(this.planInfo.projects[i].project_id)
					let obj = {
						id: this.planInfo.projects[i].project_id,
						name: this.planInfo.projects[i].project_name,
						code: this.planInfo.projects[i].project_code
					}
					this.selectedObjs.push(JSON.parse(JSON.stringify(obj)))
				}
				this.projectStr = this.projectStr.slice(0, this.projectStr.length - 1)
				console.log(this.projectIds)
			}
			this.getProjects()
		},
		methods: {
			changeStartTime(e) {
				console.log(e)
			},
			changeEndTime(e) {

			},
			changeSource() {

			},
			getPlanInfo() {
				let _this = this
				return new Promise(resolve => {
					let url = "/admin/plan/" + _this.id + "/info"
					_this.$request(url).then(res => {
						if (res.code == 0) {
							resolve(res.data)
						}
					})
				})

			},
			change(e) {
				console.log(e, "返回")
				this.projectStr = ""
				this.projectIds = e.ids
				this.planInfo.projects = []
				let len = e.objs.length
				for (let i = 0; i < len; i++) {
					let obj = {
						"project_id": e.objs[i].id, // 职位ID
						"project_name": e.objs[i].name, // 职位名称
						"project_code": e.objs[i].code // 职位编码
					}
					this.projectStr += e.objs[i].name + "、"
					this.planInfo.projects.push(JSON.parse(JSON.stringify(obj)))
				}
				this.projectStr = this.projectStr.slice(0, this.projectStr.length - 1)
			},
			openSele() {
				this.showSele = true
			},
			close(e) {
				console.log(e)
				this.showSele = false
			},
			changePage(e) {
				this.currentPage = e.page
				this.keyword = e.keyword
				this.getProjects()
			},
			getProjects() {
				let url = "/admin/plan/can-add-project?page=" + this.currentPage + "&keyword=" + this.keyword +
					"&plan_id=" + this.id
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.projectRange = res.data.list
						this.pagination = res.data.pagination
					}
				})
			},
			resetData() {
				this.planInfo = {
					"plan_name": "", // 计划名称
					"plan_start_time": "", // 计划开始时间
					"plan_end_time": "", // 计划结束时间
					"platform": "", //  渠道
					"user_name": "", // 负责人
					"expected_cost": "", // 计划成本
					"expected_user_num": "", // 计划线索
					"content": "", // 计划内容
					"projects": []


				}
			},
			deleProject(item) {
				let _this = this
				uni.showModal({
					title: "当前删除关联职位：" + item.project_name + "(" + item.project_code + ")，是否确认移除？",
					success(res) {
						if (res.confirm) {
							_this.planInfo.projects = _this.planInfo.projects.filter(el => {
								return el.project_id != item.project_id
							})
							_this.selectedObjs.splice(_this.projectIds.indexOf(item.project_id), 1)
							_this.projectIds.splice(_this.projectIds.indexOf(item.project_id), 1)
							console.log(_this.projectIds, _this.selectedObjs, "删除后")
						}
					}
				})
			},
			submit() {
				console.log(this.planInfo)
				let _this = this
				// 非空校验
				for (var key in this.planInfo) {
					console.log(typeof this.planInfo[key])
					if (typeof this.planInfo[key] == "string" && !this.planInfo[key]) {
						uni.showToast({
							title: "信息不完整",
							icon: "error",
							duration: 2000
						})
						return
					}
					if (typeof this.planInfo[key] == "object" && !this.planInfo[key].length) {
						uni.showToast({
							title: "信息不完整",
							icon: "error",
							duration: 2000
						})
						return
					}
				}
				// 日期合法校验
				let startDate = new Date(_this.planInfo.plan_start_time)
				let endDate = new Date(_this.planInfo.plan_end_time)

				if (startDate.getTime() > endDate.getTime()) {
					uni.showModal({
						title: "结束日期必须在开始日期之后。",
						showCancel: false
					})
					return
				}
				this.planInfo.expected_cost = Number(this.planInfo.expected_cost)
				this.planInfo.expected_user_num = Number(this.planInfo.expected_user_num)

				uni.showModal({
					title: "是否确认" + (_this.id ? "修改" : "新增") + "计划？",
					success(resp) {
						if (resp.confirm) {
							let url;
							let tips = ""
							if (!_this.id) {
								url = "/admin/plan/add"
								tips = "计划新增成功，是否前往计划列表？"
							} else {
								url = "/admin/plan/" + _this.id + "/update"
								tips = "计划修改成功，是否前往计划列表？"
							}
							_this.$request(url, _this.planInfo, "POST").then(res => {
								if (res.code == 0) {
									uni.showModal({
										title: tips,
										success(respon) {
											if (respon.confirm) {
												_this.resetData()
												_this.setPageName({
													pageName: "plan_list"
												}, "", "all")
												_this.$emit("getPageName", {
													pageName: "plan_list"
												})
											} else {
												if (!_this.id) {
													_this.resetData()
												}

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
		.sub_box {
			width: 48%;
		}

		.line {
			margin-bottom: 20px;
			position: relative;

			.com_mask {
				max-height: 200px;
				overflow-y: scroll;
				position: absolute;
				width: 460px;
				top: 100%;
				left: 0;
				box-shadow: 0px 2px 5px 2px #eee;
				background: #fff;
				z-index: 10;
				padding: 15px 0;

				.com_item {
					height: 30px;
					line-height: 30px;
					padding-left: 15px;
					box-sizing: border-box;
					font-size: 14px;
					cursor: pointer;

					&:hover {
						background: #d7e6f8;
					}
				}
			}

			&.scope {
				align-items: start;
			}

			.tit {
				color: rgba(0, 0, 0, 0.85);
				line-height: 22px;

				text {
					font-weight: 600;
					color: #f00;
					display: inline-block;
					font-size: 18px;
					margin-right: 5px;
					margin-top: 5px;
				}
			}

			.area_wrap {
				position: absolute;
				width: 100%;
				top: 100%;
				left: 0;
				z-index: 100;
				background: #fff;
				border-radius: 10px;
				padding: 15px;
				box-sizing: border-box;
				box-shadow: 0 5px 5px 3px #eee;

				.area_item {
					height: 35px;
					line-height: 35px;
					font-size: 14px;
					color: #666;
					cursor: pointer;
					padding: 0 8px;
					box-sizing: border-box;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;

					&:hover {
						background: #d7e6f8;
					}
				}
			}

			.wrap {
				width: 460px;
				min-height: 30px;
				border-radius: 2px;
				border: 1px solid #D9D9D9;
				padding: 0 15px;
				box-sizing: border-box;
				font-size: 14px;
				line-height: 30px;
			}

			.input_wrap {
				width: 460px;
				height: 30px;
				border-radius: 2px;
				border: 1px solid #D9D9D9;
				position: relative;
				margin-top: 8px;



				.period {
					position: absolute;
					top: 50%;
					right: 5px;
					transform: translateY(-50%);
					font-size: 14px;
					color: #5a5a5a;
				}

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

				.abso {
					position: absolute;
					top: 50%;
					right: 15px;
					transform: translateY(-50%);
				}

				&.noborder {
					border: none;

					.text {
						margin: 0 10px;
					}

					input {
						border: 1px solid #e9e9e9;
					}
				}

				input {
					width: 100%;
					height: 30px;
					padding-left: 15px;
					font-size: 14px;
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
					width: 100%;
					padding: 15px;
					border: 1px solid #D9D9D9;
					font-size: 14px;
					box-sizing: border-box;
					// overflow-y: scroll;
				}

				.word_len {
					position: absolute;
					bottom: 5px;
					right: 5px;
					font-size: 14px;
					color: #5297ff;
					font-weight: 600;
				}
			}
		}
	}
</style>