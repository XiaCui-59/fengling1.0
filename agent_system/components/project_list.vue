<template>
	<view class="board">
		<view class="box">
			<view class="title">职位列表</view>
			<searchBox :showProject="true" :showRange="true" :timeStr="timeStr" :searCom="searComId" :searPro="searPro"
				:searStart="searStartTime" :searEnd="searEndTime" @handleSearch="handleSearch">
			</searchBox>
			<view class="table_wrap">
				<view class="tabs flex flex_start">
					<view class="tab" v-for="(item,index) in tabs" :class="currentTab.value==item.value?'active':''"
						@click="changeTab(item)">{{item.text}}</view>
				</view>
				<uni-table border stripe emptyText="暂无更多数据">
					<uni-tr style="background: #f6f6f6;">
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位编号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位名称</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">工人薪资</uni-th>
						<!-- <uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">报名待确认</uni-th> -->
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">候选中</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">待面试</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">待入职</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">已入职</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位状态</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">创建时间</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">操作</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in list" :key="index">
						<uni-td align="center">{{item.code}}</uni-td>
						<uni-td align="center">{{item.name}}</uni-td>
						<uni-td
							align="center">{{(item.worker_salary_min == item.worker_salary_max?item.worker_salary_min:(item.worker_salary_min+"-"+item.worker_salary_max))+"元/"+periodList.filter(el=>{return el.value==item.worker_salary_type})[0].text}}
						</uni-td>
						<!-- <uni-td align="center">{{item.enrolled_count}}</uni-td> -->
						<uni-td align="center">{{item.wait_check_in_count}}</uni-td>
						<uni-td align="center">{{item.check_in_count}}</uni-td>
						<uni-td align="center">{{item.wait_entry_count}}</uni-td>
						<uni-td align="center">{{item.on_job_worker_count}}</uni-td>
						<uni-td align="center">
							<view class="status">{{status.filter(el => {return el.value == item.status})[0].text}}
							</view>
							<view class="reason" style="font-size: 12px;color:#f00;"
								v-if="item.status == 'platform_review_rejected'">{{item.platform_review_remark}}</view>
						</uni-td>
						<uni-td align="center">{{item.create_time}}</uni-td>
						<uni-td align="center" style="padding:8px 0px;">
							<view class="ope flex flex_around">
								<view class="ope_item edit"
									@click="navigate({pageName:'edit_project'},item.id,'',currentTab.value)"
									v-if="item.status =='waiting_submit_platform_review' || item.status == 'platform_review_rejected'">
									<image src="/static/ic_btn_edit.png" mode="heightFix"></image>
									编辑
								</view>
								<view class="ope_item end" @click="endProject(item)" v-if="item.status == 'running'">
									<image src="/static/ic_btn_end.png" mode="heightFix"></image>
									完结
								</view>
								<view class="ope_item detail"
									@click="navigate({pageName:'project_detail'},item.id,'wait_check_in',currentTab.value)">
									<image src="/static/ic_btn_detail.png" mode="heightFix"></image>
									详情
								</view>
								<view class="ope_item end" @click="backProject(item)"
									v-if="item.status == 'platform_reviewing'">
									<image src="/static/ic_btn_end.png" mode="heightFix"></image>
									撤回审核
								</view>
								<view class="ope_item end" @click="submit(item)"
									v-if="item.status == 'waiting_submit_platform_review' || item.status == 'platform_review_rejected'">
									<image src="/static/ic_btn_end.png" mode="heightFix"></image>
									提交审核
								</view>
								<view class="ope_item end" @click="rePubProject(item)" v-if="item.status == 'finished'">
									<image src="/static/ic_btn_end.png" mode="heightFix"></image>
									重新上架
								</view>
							</view>
						</uni-td>
					</uni-tr>
				</uni-table>
				<pageBox :page="pagination" @toNext="toNext"></pageBox>
			</view>
		</view>
	</view>
</template>

<script>
	import searchBox from "@/components/search_box.vue"
	import pageBox from "@/components/paging_box.vue"
	import commonData from "@/common/commonData"
	const app = getApp()
	export default {
		name: "contract_list",
		data() {
			return {
				refuseReason: "",
				timeStr: "立项",
				periodList: [{
						value: "hour",
						text: "时"
					},
					{
						value: "day",
						text: "天"
					},
					{
						value: "week",
						text: "周"
					},
					{
						value: "month",
						text: "月"
					},
				],
				list: [],
				currentTab: {
					value: "all",
					text: "全部"
				},
				tabs: [{
						value: "all",
						text: "全部"
					},
					{
						value: "waiting-submit-review",
						text: "待提审"
					},
					{
						value: "reviewing",
						text: "待审核"
					},
					{
						value: "running",
						text: "进行中"
					}, {
						value: "finished",
						text: "已完结"
					}
				],
				status: commonData.projectStatus,
				searPro: "",
				searStartTime: "",
				searEndTime: "",
				searComId: "",
				currentPage: 1,
				pagination: {},
				comRange: [],
				currentCount: 15,
			};
		},
		components: {
			searchBox,
			pageBox
		},
		created() {
			let paramArr = []
			if (location.href.indexOf("?") != -1) {
				paramArr = location.href.split("?")[1].split("&")
			}
			for (var i = 0; i < paramArr.length; i++) {
				if (paramArr[i].indexOf("status") != -1) {
					let status = paramArr[i].split("=")[1]
					this.currentTab = this.tabs.filter(el => {
						return el.value == status
					})[0]
				}
				if (paramArr[i].indexOf("company") != -1) {
					this.searComId = paramArr[i].split("=")[1]
				}
				if (paramArr[i].indexOf("searpro") != -1) {
					this.searPro = paramArr[i].split("=")[1]
				}
				if (paramArr[i].indexOf("start") != -1) {
					this.searStartTime = paramArr[i].split("=")[1]
				}
				if (paramArr[i].indexOf("end") != -1) {
					this.searEndTime = paramArr[i].split("=")[1]
				}
				if (paramArr[i].indexOf("pgindex") != -1) {
					this.currentPage = paramArr[i].split("=")[1]
				}
			}
			this.getList()
		},
		onReady() {

		},
		watch: {

		},
		methods: {
			resetData() {
				this.fee = ""
				this.refuseReason = ""
			},
			toNext(e1, e2) {
				this.currentPage = e1
				this.currentCount = e2
				this.getList()
			},
			toHandle(item, status) {
				let _this = this
				let msg = ""
				if (status == "running") {
					msg = "当前审核职位：" + item.name + "，是否确认通过审核？"
				} else {
					msg = "当前审核职位：" + item.name + "，是否确认拒绝该职位？"
				}
				uni.showModal({
					title: msg,
					confirmText: status == "running" ? "通过" : "拒绝",
					success(resp) {
						if (resp.confirm) {
							let url = "/broker/project/" + item.id + "/review"
							let data = {
								"status": status,
								"reason": _this.refuseReason
							}
							_this.$request(url, data, "POST").then(res => {
								if (res.code == 0) {
									uni.showModal({
										title: status == "running" ? "已通过" : "已拒绝",
										showCancel: false
									})
									_this.refuseReason = ""
									_this.getList()
									_this.close()
								}
							})
						}
					}
				})
			},

			changeTab(item) {
				this.currentPage = 1
				this.currentTab = item
				this.setPageName({
					pageName: "project_list"
				}, "", item.value)
				this.getList()
			},
			navigate(obj, id, status, preStatus) {
				let searObj = {
					company: this.searComId,
					searPro: this.searPro,
					start: this.searStartTime,
					end: this.searEndTime,
					page: this.currentPage

				}
				this.setPageName(obj, id, status, preStatus, searObj)
				this.$emit("getPageName", obj)
			},
			rePubProject(item) {
				let _this = this
				uni.showModal({
					title: "是否确认重新上架工作：" + item.name + "？",
					confirmText: "确认上架",
					success(res) {
						if (res.confirm) {
							let url = "/broker/project/" + item.id + "/re-publish"
							_this.$request(url, {}, "POST").then(resp => {
								if (resp.code == 0) {
									uni.showToast({
										title: "重新上架成功",
										duration: 2000
									})
									_this.getList()
								}
							})
						}
					}
				})
			},
			getList() {
				uni.showLoading({
					title: "努力加载中~"
				})
				let url;
				if (this.currentTab.value == "all") {
					// 全部
					url = "/broker/projects?page=" + this.currentPage + "&create_time_start=" + this.searStartTime +
						"&create_time_end=" + this.searEndTime + "&keyword=" + this.searPro + "&company_id=" + this
						.searComId + "&page_size=" + this.currentCount
				} else {
					url = "/broker/projects/" + this.currentTab.value + "?page=" + this.currentPage +
						"&create_time_start=" + this.searStartTime + "&create_time_end=" + this.searEndTime + "&keyword=" +
						this.searPro + "&company_id=" + this.searComId + "&page_size=" + this.currentCount
				}
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.pagination = res.data.pagination
					}
				})
			},
			handleSearch(e) {
				this.currentPage = 1
				this.searPro = e.projectName
				this.searStartTime = e.startTime
				this.searEndTime = e.endTime
				this.searComId = e.comId
				this.getList()
			},
			endProject(item) {
				let _this = this
				let msg = "您当前准备完结职位：" + item.name + "，是否确认完结该职位？"
				uni.showModal({
					title: msg,
					confirmColor: "#f00",
					confirmText: "确认完结",
					success(resp) {
						if (resp.confirm) {
							let url = "/broker/project/" + item.id + "/finish"
							_this.$request(url, {}, "POST").then(res => {
								if (res.code == 0) {
									uni.showModal({
										title: "职位已完结",
										showCancel: false
									})
									_this.getList()
								}
							})
						}
					}
				})
			},
			backProject(item) {
				let _this = this
				let msg = "是否确认撤回职位：" + item.name + "？"
				uni.showModal({
					title: msg,
					confirmText: "确认撤回",
					success(resp) {
						if (resp.confirm) {
							let url = "/broker/project/" + item.id + "/revoke-reviewing"
							_this.$request(url, {}, "POST").then(res => {
								if (res.code == 0) {
									uni.showModal({
										title: "职位已撤回",
										showCancel: false
									})
									_this.getList()
								}
							})
						}
					}
				})
			},
			submit(item) {
				let _this = this
				let url = "/broker/project/" + item.id + "/submit-review"
				uni.showModal({
					title: "您当前正在提审职位：" + item.name + "，是否确认提审该职位？",
					confirmText: "确认提审",
					success(resp) {
						if (resp.confirm) {
							_this.$request(url, {}, "POST").then(res => {
								if (res.code == 0) {
									uni.showModal({
										title: "职位已提审，请耐心等待平台审核。",
										showCancel: false
									})
									_this.getList()
								}
							})
						}
					}
				})
			},
			deleteProject(item) {
				let _this = this
				let url = "/broker/project/" + item.id
				uni.showModal({
					title: "您当前正在删除职位：" + item.name + "，是否确认删除该职位？",
					confirmText: "确认删除",
					confirmColor: "#f00",
					success(resp) {
						if (resp.confirm) {
							_this.$request(url, {}, "DELETE").then(res => {
								if (res.code == 0) {
									uni.showModal({
										title: "职位删除成功",
										showCancel: false
									})
									_this.getList()
								}
							})
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.table_wrap {

		height: calc(100% - 123px);

		.tips {
			margin-bottom: 20px;

			view {
				margin-right: 15px;
				font-size: 14px;

				text {
					color: #0092ff;
				}
			}

			.tip {
				color: #f00;
			}
		}


	}

	.mask {
		.inner {
			.box {
				.from_list {
					margin-top: 15px;

					.from_item {
						text-align: center;
						cursor: pointer;
						padding: 10px 20px;
						border-radius: 8px;

						&.active {
							background: #ebebeb;
							border: 2px solid #0092ff;

							&:nth-child(2) {
								color: #333;
							}

							&:nth-child(3) {
								color: #ff4406;
							}
						}


						.icon {
							margin-bottom: 5px;

							image {
								width: 64px;
							}
						}
					}
				}

				.line {
					margin: 15px 0 0 15px;
				}

				.tit {
					width: 80px;
				}

				.input_wrap {
					width: calc(100% - 80px);
					border: 1px solid #ccc;
					border-radius: 4px;
					position: relative;

					input {
						height: 40px;
						line-height: 40px;
						padding-left: 10px;
						box-sizing: border-box;
					}

					.period {
						position: absolute;
						top: 50%;
						right: 15px;
						transform: translateY(-50%);
						font-size: 14px;
					}
				}
			}

			.btns {
				margin-bottom: 15px;

				.btn {
					position: relative;
					left: 0;
					top: 0;
					border: 1px solid $base-color;
					margin-left: 15px;
				}

				.close {
					background: transparent;
					color: $base-color;
				}
			}
		}
	}

	// .mask {
	// 	position: fixed;
	// 	top: 0;
	// 	left: 0;
	// 	width: 100%;
	// 	height: 100%;
	// 	background: rgba(0, 0, 0, 0.5);
	// 	z-index: 100;

	// 	.inner {
	// 		width: 530px;
	// 		position: absolute;
	// 		top: 50%;
	// 		left: 50%;
	// 		transform: translate(-50%, -50%);
	// 		padding: 15px 15px 50px 15px;
	// 		border-radius: 10px;
	// 		background: #fff;

	// 		.cont {
	// 			margin: 30px 0 50px 0;

	// 			.tit {
	// 				width: 80px;
	// 			}

	// 			.input_wrap {
	// 				width: calc(100% - 80px);
	// 				border: 1px solid #ccc;
	// 				border-radius: 4px;
	// 				position: relative;

	// 				input {
	// 					height: 40px;
	// 					line-height: 40px;
	// 					padding-left: 10px;
	// 					box-sizing: border-box;
	// 				}

	// 				.period {
	// 					position: absolute;
	// 					top: 50%;
	// 					right: 15px;
	// 					transform: translateY(-50%);
	// 					font-size: 14px;
	// 				}
	// 			}
	// 		}

	// 		.btns {
	// 			margin-bottom: 15px;

	// 			.btn {
	// 				position: relative;
	// 				left: 0;
	// 				top: 0;
	// 				border: 1px solid $base-color;
	// 				margin-left: 15px;
	// 			}

	// 			.close {
	// 				background: transparent;
	// 				color: $base-color;
	// 			}
	// 		}
	// 	}
	// }
</style>