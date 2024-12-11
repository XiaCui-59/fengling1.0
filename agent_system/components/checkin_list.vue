<template>
	<view class="board">
		<view class="box">
			<view class="title">考勤列表</view>
			<searchBox :showRange="true" :timeStr="timeStr" :showCheckin="true" :showProject="true"
				@handleSearch="handleSearch"></searchBox>
			<view class="table_wrap">
				<view class="tabs flex flex_start">
					<view class="tab" v-for="(item,index) in tabs" :class="currentTab.value==item.value?'active':''"
						@click="changeTab(item)">{{item.text}}
					</view>
				</view>
				<view class="btns flex flex_end" v-if="currentTab.value=='waiting-confirm'">
					<view class="btn" @click="merge">生成账单</view>
					<view class="btn" @click="invalid('')">批量作废</view>
				</view>
				<uni-table border stripe emptyText="暂无更多数据">
					<uni-tr style="background: #f6f6f6;">
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;"
							v-if="currentTab.value=='waiting-confirm'">
							<view class="flex flex_around">
								<image :src="seleAll?'/static/selected.png':'/static/unselect.png'" mode="widthFix"
									style="width:18px;height:18px;margin-right: 5px;" @click="checkAll"></image>
								<text>全选</text>
							</view>
						</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">考勤编号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">考勤名称</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位编号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位名称</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位经理</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">考勤人数</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">状态</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">上传时间</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">操作时间</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">操作</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in list" :key="index">
						<uni-td align="center" v-if="currentTab.value=='waiting-confirm'">
							<!-- <image
								:src="selectedIds.indexOf(item.id) == -1?'/static/unselect.png':'/static/selected.png'"
								mode="widthFix" style="width:18px;height:18px;margin-right: 5px;"
								v-if="item.status != 'signing_expired' && item.status != 'rejected'"
								@click="addToList(item)"></image> -->
							<image :src="selectedArr.includes(item)?'/static/selected.png':'/static/unselect.png'"
								mode="widthFix" style="width:18px;height:18px;margin-right: 5px;"
								v-if="item.status != 'signing_expired' && item.status != 'rejected'"
								@click="addToList(item)"></image>
						</uni-td>
						<uni-td align="center">{{item.code}}</uni-td>
						<uni-td align="center">{{item.record_name}}</uni-td>
						<uni-td align="center">{{item.project_code}}</uni-td>
						<uni-td align="center">{{item.project_name}}</uni-td>
						<uni-td align="center">{{item.broker_name}}</uni-td>
						<uni-td align="center">{{item.worker_count}}</uni-td>
						<uni-td align="center">
							<view class="status">{{status.filter(el => {return el.value == item.status})[0].text}}
							</view>
						</uni-td>
						<uni-td align="center">{{item.create_time}}</uni-td>
						<uni-td align="center">{{item.update_time}}</uni-td>
						<uni-td align="center" style="padding:8px 0px;">
							<view class="ope flex flex_around">
								<view class="ope_item" @click="viewRecord(item)">查看数据</view>
								<view class="ope_item" @click="invalid(item)" v-if="item.status == 'waiting_confirm'">作废
								</view>
							</view>
						</uni-td>
					</uni-tr>

				</uni-table>
				<pageBox :page="pagination" @toNext="toNext"></pageBox>
			</view>
		</view>
		<view class="mask" v-if="showMask">
			<view class="inner" v-if="showFirst">
				<view class="title">考勤详情({{curCheckinDetail.record.record_name}}) <text class="download"
						style="cursor: pointer;"
						@click="downLoad(curCheckinDetail.record.original_data_file)">下载原始考勤表</text></view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<view class="table_wrap">
						<uni-table border stripe emptyText="暂无更多数据" style="height:500px;">
							<uni-tr style="background: #f6f6f6;">
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">职位名称</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">工人姓名</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">身份证号码</uni-th>
								<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">手机号</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">考勤方式</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">工作时长</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">开始时间</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">结束时间</uni-th>
								<!-- <uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">状态</uni-th> -->
							</uni-tr>
							<uni-tr v-for="(item,index) in curCheckinDetail.list" :key="index">
								<uni-td>{{item.project_name}}</uni-td>
								<uni-td>{{item.worker_name}}</uni-td>
								<uni-td>{{item.worker_id_card_number}}</uni-td>
								<uni-td>{{item.worker_mobile}}</uni-td>
								<uni-td>{{item.working_type}}</uni-td>
								<uni-td>{{item.working_time}}</uni-td>
								<uni-td>{{item.start_time}}</uni-td>
								<uni-td>{{item.end_time}}</uni-td>
								<!-- <uni-td>{{status.filter(el => {return el.value == item.status})[0].text}}</uni-td> -->
							</uni-tr>
						</uni-table>
						<!-- <pageBox :page="pagination"  @toNext="toNext"></pageBox> -->
					</view>
				</view>
			</view>
			<view class="inner" v-if="showSecond">
				<view class="title">考勤合并</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<view class="table_wrap">
						<view class="btns flex flex_end" v-if="currentTab.value=='waiting-confirm'">
							<view class="btn" @click="confirm">确认生成账单</view>
						</view>
						<uni-table border stripe emptyText="暂无更多数据" style="height:500px;">
							<uni-tr style="background: #f6f6f6;">
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">职位名称</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">工人姓名</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">身份证号码</uni-th>
								<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">手机号</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">考勤方式</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">工作时长</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">开始时间</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">结束时间</uni-th>
								<!-- <uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">状态</uni-th> -->
							</uni-tr>
							<uni-tr v-for="(item,index) in mergeList" :key="index">
								<uni-td>{{item.project_name}}</uni-td>
								<uni-td>{{item.worker_name}}</uni-td>
								<uni-td>{{item.worker_id_card_number}}</uni-td>
								<uni-td>{{item.worker_mobile}}</uni-td>
								<uni-td>{{item.working_type}}</uni-td>
								<uni-td>{{item.working_time}}</uni-td>
								<uni-td>{{item.start_time}}</uni-td>
								<uni-td>{{item.end_time}}</uni-td>
								<!-- <uni-td>{{status.filter(el => {return el.value == item.status})[0].text}}</uni-td> -->
							</uni-tr>
						</uni-table>
						<!-- <pageBox :page="pagination"  @toNext="toNext"></pageBox> -->
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import searchBox from "@/components/search_box.vue"
	import pageBox from "@/components/paging_box.vue"
	export default {
		name: "checkin_list",
		data() {
			return {
				timeStr: "上传",
				list: [],
				tabs: [

					{
						value: "",
						text: "全部"
					},
					{
						value: "waiting-confirm",
						text: "待确认"
					},
					{
						value: "confirmed",
						text: "已确认"
					},
					{
						value: "abandoned",
						text: "已作废"
					}
				],
				status: [{
						value: "waiting_confirm",
						text: "待确认"
					},
					{
						value: "confirmed",
						text: "已确认"
					},
					{
						value: "abandoned",
						text: "已作废"
					}
				],
				pagination: {},
				showMask: false,
				showFirst: false,
				showSecond: false,
				allRise: 0,
				allDown: 0,
				seleAll: false,
				selectedIds: [],
				selectedIndex: [],
				currentTab: {
					value: "",
					text: "全部"
				},
				currentPage: 1,
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
				searCheckin: "",
				searPro: "",
				searStart: "",
				searEnd: "",
				curCheckinDetail: {},
				mergeList: [],
				selectedArr: []
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
			}
			this.getList()
		},
		methods: {
			toNext(e) {
				this.currentPage = e
				this.resetSeleData()
				this.getList()
			},
			changeTab(item) {
				this.currentTab = item
				this.setPageName({
					pageName: "checkin_list"
				}, "", item.value)
				this.resetSeleData()
				this.getList()
			},
			addToList(item) {
				if (this.selectedArr.includes(item)) {
					this.selectedArr.splice(this.selectedArr.indexOf(item), 1)
				} else {
					this.selectedArr.push(item)
				}
				if (this.selectedArr.length == 0) {
					this.seleAll = false
				}
				if (this.selectedArr.length == this.list.length) {
					this.seleAll = true
				}
				let id = item.id
				if (this.selectedIds.indexOf(id) == -1) {
					this.selectedIds.push(id)
				} else {
					this.selectedIds.splice(this.selectedIds.indexOf(id), 1)
				}
				if (this.selectedIds.length == this.list.length) {
					this.seleAll = true
				} else {
					this.seleAll = false
				}
				console.log(this.selectedArr)
			},
			resetSeleData() {
				this.selectedIds = [];
				this.selectedIndex = [];
				this.seleAll = false
				this.selectedArr = []
			},
			checkAll() {
				this.seleAll = !this.seleAll
				if (this.seleAll) {
					let len = this.list.length;
					let arr = []
					let itemArr = []
					let indexArr = []
					for (var i = 0; i < len; i++) {
						arr.push(this.list[i].id)
						indexArr.push(i)
						itemArr.push(this.list[i])
					}
					this.selectedIds = arr
					this.selectedIndex = indexArr
					this.selectedArr = itemArr
				} else {
					this.selectedIds = []
					this.selectedIndex = []
					this.selectedArr = []
				}
				console.log(this.selectedArr)
			},
			navigate(obj, id) {
				this.setPageName(obj, id)
			},
			viewRecord(item) {
				let url = "/broker/attendance-record/" + item.id + "/details"
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.curCheckinDetail = res.data
						this.showMask = true
						this.showFirst = true
					}
				})
			},
			getList() {
				uni.showLoading({
					title: "努力加载中~"
				})
				let url = "/broker/attendance-records" + (!this.currentTab.value ? "" : ("/" + this.currentTab.value)) +
					"?record=" + this.searCheckin +
					"&project=" + this.searPro + "&upload_start_date=" + this.searStart + "&upload_end_date=" + this
					.searEnd + "&page=" + this.currentPage
				this.$request(url, {}, "GET", this.header).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.pagination = res.data.pagination
					}
				})
			},
			handleSearch(e) {
				this.searCheckin = e.checkinStr
				this.searPro = e.projectName
				this.searStart = e.startTime
				this.searEnd = e.endTime
				this.getList()
			},
			close() {
				this.showMask = false
				this.showFirst = false
				this.showSecond = false
				this.resetSeleData()
			},
			merge() {
				// 判断是否存在相同职位
				let proArr = []
				let seleArrLen = this.selectedArr.length
				for (let i = 0; i < seleArrLen; i++) {
					if (proArr.indexOf(this.selectedArr[i].project_id)) {
						proArr.push(this.selectedArr[i].project_id)
					}
				}
				if (proArr.length > 1) {
					uni.showModal({
						title: "请选择相同职位的考勤进行合并。",
						showCancel: false,
					})
				} else {
					if (this.selectedIds.length < 1) {
						uni.showToast({
							title: "您还未勾选数据",
							icon: "error",
							duration: 2000
						})
					} else {
						// 考勤合并
						let data = {
							"ids": this.selectedIds
						}
						this.$request("/broker/attendance-record/merge", data, "POST").then(res => {
							if (res.code == 0) {
								this.showMask = true
								this.showSecond = true
								this.mergeList = res.data.list
							}
						})
					}
				}

			},
			confirm() {
				let _this = this
				let data = {
					"ids": this.selectedIds
				}
				this.$request("/broker/generate-project-bill", data, "POST").then(res => {
					if (res.code == 0) {
						uni.showModal({
							title: "已成功生成账单，可前往账单管理-费用清单确认。",
							success(resp) {
								if (resp.confirm) {
									_this.setPageName({
										pageName: "cost_bill"
									})
									_this.$emit("getPageName", {
										pageName: "cost_bill"
									})
								} else {
									_this.close()
									_this.getList()
								}
								_this.resetSeleData()
							}
						})
					}
				})
			},
			downLoad(url) {
				window.open(url)
			},
			invalid(item) {
				if (!item) {
					if (this.selectedIds.length == 0) {
						uni.showToast({
							title: "没有选择数据",
							icon: "error",
							duration: 2000
						})
						return
					}
				}
				let _this = this
				let msg = !item ? "是否批量作废考勤记录？作废后不可恢复，请谨慎操作。" : ("是否作废考勤记录：" + item.record_name + "？作废后不可恢复，请谨慎操作。")
				uni.showModal({
					title: msg,
					confirmText: "确定作废",
					confirmColor: "#f00",
					success(resp) {
						if (resp.confirm) {
							let arr = []
							let data;
							if (item) {
								arr.push(item.id)
								data = {
									"ids": arr
								}
							} else {
								data = {
									"ids": _this.selectedIds
								}
							}
							_this.$request("/broker/attendance-record/abandoned", data, "POST").then(res => {
								if (res.code == 0) {
									uni.showToast({
										title: "作废成功",
										duration: 2000,
										icon: "none"
									})
									_this.resetSeleData()
									_this.getList()
								}
							})
						}
					}
				})

			}
		}
	}
</script>

<style lang="scss">
	::v-deep {
		.search_box {
			margin: 0;
		}

		.uni-table-scroll {
			height: calc(100vh - 400px);
		}
	}

	.active {
		color: #0da81f;
	}

	.disable {
		color: #f00;
	}

	.disable {
		color: #f00;
	}

	.mask {
		.inner {
			.title {
				.download {
					position: absolute;
					top: 50%;
					right: 60px;
					color: #fff;
					transform: translateY(-50%);
				}
			}
		}
	}

	.ope {
		position: relative;
		padding: 0 10px;
		width: 100%;
		box-sizing: border-box;

		.more {
			position: absolute;
			top: calc(100% + 8px);
			left: 0;
			width: 100%;
			z-index: 9;
			background: #fff;
			border-radius: 5px;
			box-shadow: 2px 2px 5px 3px #ddd;
			padding: 5px 0;

			.opera {
				text-align: center;
				height: 30px;
				line-height: 30px;
				cursor: pointer;
			}
		}
	}

	.base {
		padding: 0 0 10px 0;

		.line {
			margin: 15px 0;
		}
	}

	.table_wrap {

		// height:500px;
		// .tabs{
		// 	margin: 15px 0;
		// 	border-bottom: 2px solid $base-color;
		// 	.tab{
		// 		padding:10px 15px;
		// 		cursor: pointer;	
		// 		&:hover{
		// 			color:$base-color;
		// 		}
		// 		&.active{
		// 			background: $base-color;
		// 			color:#fff;
		// 			border-top-left-radius: 4px;
		// 			border-top-right-radius: 4px;
		// 		}
		// 	}
		// }
		.btns {
			margin-bottom: 15px;

			.btn {
				margin-left: 15px;
			}
		}

		.table_top {
			margin-bottom: 15px;

			.btn {
				width: 100px;
				margin-left: 15px;
			}
		}

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

	// .mask {
	// 	.inner {
	// 		.title {
	// 			position: relative;
	// 			margin-bottom: 30px;

	// 			text {
	// 				position: absolute;
	// 				font-size: 14px;
	// 				top: 50%;
	// 				right: 0;
	// 				transform: translateY(-50%);
	// 				color: $base-color;
	// 			}
	// 		}

	// 		.setting_box {
	// 			width: 100%;
	// 			height: 100%;
	// 			background: rgba(0, 0, 0, 0.5);
	// 			position: absolute;
	// 			top: 0;
	// 			left: 0;
	// 			z-index: 100;

	// 			.set_inner {
	// 				width: 230px;
	// 				position: absolute;
	// 				top: 50%;
	// 				left: 50%;
	// 				transform: translate(-50%, -50%);
	// 				z-index: 100;
	// 				background: #fff;
	// 				padding: 20px;
	// 				border-radius: 6px;

	// 				.subtit {
	// 					font-size: 18px;
	// 				}

	// 				.line {
	// 					padding-left: 10px;
	// 					margin: 20px 0;

	// 					.tit {
	// 						width: 70px;
	// 					}

	// 					.input_wrap {
	// 						width: calc(100% - 70px);
	// 						height: 40px;
	// 						line-height: 40px;
	// 						border: 1px solid #eee;

	// 						input {
	// 							height: 40px;
	// 							padding-left: 10px;
	// 						}
	// 					}
	// 				}
	// 			}

	// 		}
	// 	}
	// }
</style>