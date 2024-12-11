<template>
	<view class="board">
		<view class="box">
			<view class="title">费用清单</view>
			<searchBox :showCode="true" :showRange="true" :timeStr="timeStr" :showProject="true"
				@handleSearch="handleSearch">
			</searchBox>
			<view class="table_wrap">
				<view class="tabs flex flex_start">
					<view class="tab" v-for="(item,index) in tabs" :class="currentTab.value==item.value?'active':''"
						@click="changeTab(item)">{{item.text}}
					</view>
				</view>
				<view class="btns flex flex_end" v-if="currentTab.value == 'waiting-settlement'">
					<view class="btn" @click="batchConfirm('')">批量确认</view>
					<view class="btn" @click="invalid('')">批量作废</view>
				</view>
				<uni-table border stripe emptyText="暂无更多数据">
					<uni-tr style="background: #f6f6f6;">
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">
							<view class="flex flex_around" v-if="currentTab.value == 'waiting-settlement'">
								<image :src="seleAll?'/static/selected.png':'/static/unselect.png'" mode="widthFix"
									style="width:18px;height:18px;margin-right: 5px;" @click="checkAll"></image>
								<text>全选</text>
							</view>
						</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">账单编号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位编号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位名称</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位经理</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">工人名称</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">手机号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">结算金额（元）</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">状态</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">创建时间</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">操作时间</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">操作</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in list">
						<uni-td align="center">
							<image
								:src="selectedIds.indexOf(item.id) == -1?'/static/unselect.png':'/static/selected.png'"
								mode="widthFix" style="width:18px;height:18px;margin-right: 5px;"
								@click="addToList(item)" v-if="item.status == 'waiting_settlement'"></image>
						</uni-td>
						<uni-td align="center">{{item.code}}</uni-td>
						<uni-td align="center">{{item.project_code}}</uni-td>
						<uni-td align="center">{{item.project_name}}</uni-td>
						<uni-td align="center">{{item.broker_name}}</uni-td>
						<uni-td align="center">{{item.worker_name}}</uni-td>
						<uni-td align="center">{{item.worker_mobile}}</uni-td>
						<uni-td align="center">{{item.settlement_amount}}</uni-td>
						<uni-td
							align="center">{{status.filter(el => {return el.value == item.status})[0].text}}</uni-td>
						<uni-td align="center">{{item.create_time}}</uni-td>
						<uni-td align="center">{{item.update_time}}</uni-td>
						<uni-td align="center" style="padding:8px 0px;">
							<view class="ope flex flex_around">
								<view class="ope_item pass" @click="batchConfirm(item.id)"
									v-if="item.status == 'waiting_settlement'">
									<image src="/static/ic_btn_pass.png" mode="heightFix"></image>确认
								</view>
								<view class="ope_item refuse" @click="invalid(item)"
									v-if="item.status == 'waiting_settlement'">
									<image src="/static/ic_btn_refuse.png" mode="heightFix"></image>作废
								</view>
								<!-- <view class="ope_item" @click="viewRecord(item)">详情</view> -->
							</view>
						</uni-td>
					</uni-tr>

				</uni-table>
				<pageBox :page="pagination" @toNext="toNext"></pageBox>
			</view>
		</view>
		<view class="mask" v-if="showMask">
			<view class="inner" v-if="showFirst">
				<view class="title">账单详情（职位名称：{{currentBill.project_name}}；账单编号：{{currentBill.code}}）</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<view class="table_wrap">
						<uni-table border stripe emptyText="暂无更多数据">
							<uni-tr style="background: #f6f6f6;">
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">工人姓名</uni-th>
								<!-- <uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">身份证号码</uni-th> -->
								<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">手机号</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">工作时长</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">结算总额（元）</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">开始时间</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">结束时间</uni-th>
							</uni-tr>
							<uni-tr v-for="(item,index) in curCheckinDetail" :key="index">
								<uni-td align="center">{{item.worker_name}}</uni-td>
								<!-- <uni-td align="center">{{item.worker_id_card_number}}</uni-td> -->
								<uni-td align="center">{{item.worker_mobile}}</uni-td>
								<uni-td align="center">{{item.work_hours}}</uni-td>
								<uni-td align="center">{{item.settlement_amount}}</uni-td>
								<uni-td align="center">{{item.start_time}}</uni-td>
								<uni-td align="center">{{item.end_time}}</uni-td>
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
		name: "commission_bill",
		data() {
			return {
				timeStr: "创建",
				list: [],
				tabs: [{
						value: "",
						text: "全部"
					},
					{
						value: "waiting-settlement",
						text: "待确认"
					},
					{
						value: "settled",
						text: "已确认"
					},
					{
						value: "abandoned",
						text: "已作废"
					}
				],
				status: [{
						value: "waiting_settlement",
						text: "待确认"
					},
					{
						value: "settled",
						text: "已确认"
					},
					{
						value: "abandoned",
						text: "已作废"
					},
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
				selectedProjectIds: [],
				currentTab: {
					value: "",
					text: "全部"
				},
				currentPage: 1,
				id: "",
				searCode: "",
				searPro: "",
				searStart: "",
				searEnd: "",
				curCheckinDetail: {},
				currentBill: {},
				mergeList: [],
				currentCount: 15
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
			toNext(e1, e2) {
				this.currentPage = e1
				this.currentCount = e2
				this.resetSeleData()
				this.getList()
			},
			changeTab(item) {
				this.currentPage = 1
				this.currentTab = item
				this.setPageName({
					pageName: "cost_bill"
				}, "", item.value)
				this.resetSeleData()
				this.getList()
			},
			addToList(item) {
				let id = item.id
				if (this.selectedProjectIds.indexOf(item.project_id) == -1) {
					this.selectedProjectIds.push(item.project_id)
				} else {
					this.selectedProjectIds.splice(this.selectedProjectIds.indexOf(item.project_id), 1)
				}
				console.log(id)
				// 如果存在就移除，不存在就push
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
				console.log(this.selectedIds)
			},
			resetSeleData() {
				this.selectedIds = [];
				this.selectedIndex = [];
				this.seleAll = false
				this.selectedProjectIds = []
			},
			checkAll() {
				this.seleAll = !this.seleAll
				if (this.seleAll) {
					let len = this.list.length;
					let arr = []
					let indexArr = []
					for (var i = 0; i < len; i++) {
						arr.push(this.list[i].id)
						indexArr.push(i)
						if (this.selectedProjectIds.indexOf(this.list[i].project_id) == -1) {
							this.selectedProjectIds.push(this.list[i].project_id)
						}
					}
					this.selectedIds = arr
					this.selectedIndex = indexArr
				} else {
					this.selectedIds = []
					this.selectedIndex = []
				}
			},
			navigate(obj, id) {
				this.setPageName(obj, id)
			},
			viewRecord(item) {
				this.currentBill = item
				let url = "/admin/project-bill/" + item.id + "/info"
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.curCheckinDetail = res.data.list
						this.showMask = true
						this.showFirst = true
					}
				})
			},
			getList() {
				uni.showLoading({
					title: "努力加载中~"
				})
				let url = "/admin/project-bills" + (!this.currentTab.value ? "" : ("/" + this.currentTab.value)) +
					"?bill=" + this.searCode +
					"&project=" + this.searPro + "&create_time_start=" + this.searStart + "&create_time_end=" + this
					.searEnd + "&page=" + this.currentPage + "&page_size=" + this.currentCount
				this.$request(url, {}, "GET", this.header).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.pagination = res.data.pagination
					}
				})
			},
			handleSearch(e) {
				this.currentPage = 1
				this.searCode = e.code
				this.searPro = e.projectName
				this.searStart = e.startTime
				this.searEnd = e.endTime
				this.getList()
			},
			close() {
				this.showMask = false
				this.showFirst = false
				this.showSecond = false
				this.currentBill = {}
				this.resetSeleData()
			},
			downLoad(url) {
				window.open(url)
			},
			batchConfirm(id) {
				let arr = []
				let data = {
					"ids": [], // 选择数据ID
				}
				if (id) {
					arr.push(id)
					data.ids = arr
				} else {
					data.ids = this.selectedIds
				}
				this.$request("/admin/confirm-project-bill", data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: "确认成功",
							duration: 2000,
							icon: "none"
						})
						this.resetSeleData()
						this.getList()
					}
				})
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
				let msg = !item ? "是否批量作废账单？作废后不可恢复，请谨慎操作。" : ("是否作废账单：" + item.code + "？作废后不可恢复，请谨慎操作。")
				uni.showModal({
					title: "提示",
					content: msg,
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
							_this.$request("/admin/void-project-bill", data, "POST").then(res => {
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