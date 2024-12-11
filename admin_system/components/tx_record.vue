<template>
	<view class="board">
		<view class="box">
			<view class="title">提现记录</view>
			<view class="flex flex_btween" style="align-items: start;">
				<searchBox :showEmployee="true" :showTxStatus="true" :showRange="true" :showRange2="true"
					:searStart="searStart" :searEnd="searEnd" :timeStr="timeStr" timeStr2="处理" employeeStr="用户名称"
					@handleSearch="handleSearch">
				</searchBox>
			</view>

			<view class="table_wrap">
				<uni-table border stripe emptyText="暂无更多数据">
					<uni-tr style="background: #f6f6f6;">
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">序号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">提现编号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">用户名称</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">提现实名</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">手机号码</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">提现金额</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">提现方式</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">提现状态</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">申请时间</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">处理时间</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">操作</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in list" :key="index">
						<uni-td align="center">{{index+1+currentCount*(currentPage - 1)}}</uni-td>
						<uni-td align="center">
							<view style="cursor: pointer;color:#1E8EEE;" @click="showWorkerDetail(item)">
								{{item.id}}
							</view>
						</uni-td>
						<uni-td align="center">{{item.worker_name}}</uni-td>
						<uni-td align="center">{{item.real_name}}</uni-td>
						<uni-td align="center">{{item.worker_mobile}}</uni-td>
						<uni-td align="center">{{item.amount}}</uni-td>
						<uni-td align="center">{{item.type=="wechat"?"微信":""}}</uni-td>
						<uni-td align="center">
							<view class="">{{txStatus.filter(el=>{return el.value == item.status})[0].text}}</view>
							<view class="" v-if="item.status == 'failed'">{{item.fail_reason}}</view>
						</uni-td>
						<uni-td align="center">{{item.create_time}}</uni-td>
						<uni-td align="center">{{item.status_update_time}}</uni-td>
						<uni-td align="center" style="padding:8px 0px;">
							<view class="ope flex flex_around">
								<view class="ope_item edit" v-if="item.status == 'pending' || item.status == 'failed'"
									@click="openMask(item)">
									<image src="/static/ic_btn_edit.png" mode="heightFix"></image>
									编辑实名
								</view>
								<view class="ope_item refuse" @click="getBack(item)"
									v-if="item.status == 'pending' || item.status == 'failed'">
									<image src="/static/ic_btn_refuse.png" mode="heightFix"></image>
									撤回
								</view>
							</view>
						</uni-td>
					</uni-tr>
				</uni-table>
				<pageBox :page="pagination" @toNext="toNext"></pageBox>
			</view>
		</view>
		<view class="mask" v-if="showMask">
			<view class="inner" style="width:50%;" v-if="showEdit">
				<view class="title">修改实名（当前实名：{{currentRecord.real_name}}）</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<view class="line flex flex-start">
						<view class="tit">实名信息</view>
						<view class="input_wrap">
							<input type="text" v-model="realName" placeholder="请输入需要更改的实名" maxlength="20" />
						</view>
					</view>
					<view class="line flex flex_end">
						<view class="btn save" @click="confirm">确认修改</view>
					</view>
				</view>
			</view>
			<view class="inner" style="width:50%;" v-if="showReason">
				<view class="title">撤回提现【已选数据：{{currentRecord.real_name+" （"+currentRecord.id+"）"}}】</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<view class="line flex flex-start">
						<view class="tit">撤回原因</view>
						<view class="input_wrap">
							<input type="text" v-model="reason" placeholder="请输入撤回原因" maxlength="50" />
						</view>
					</view>
					<view class="line flex flex_end">
						<view class="btn save" @click="confirmGetBack">确认撤回</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import searchBox from "@/components/search_box.vue"
	import pageBox from "@/components/paging_box.vue"
	import commonData from "@/common/commonData.js"
	export default {
		name: "employee_list",
		data() {
			return {
				showMask: false,
				showEdit: false,
				showReason: false,
				reason: "",
				realName: "",
				currentRecord: {},
				txStatus: commonData.txStatus,
				timeStr: "提现",
				list: [{
					"id": "41316783352737398",
					"create_time": "2024-09-04 16:25:15",
					"status_update_time": "2024-09-04 16:35:56",
					"fail_reason": "",
					"amount": "0.31",
					"actual_amount": "0.31",
					"type": "wechat",
					"status": "failed"
				}, ],
				pagination: {},
				currentPage: 1,
				searEmployee: "",
				searStart: "",
				searEnd: "",
				searStart2: "",
				searEnd2: "",
				txValue: "",
				currentCount: 15

			};
		},
		components: {
			searchBox,
			pageBox
		},
		created() {
			this.getList()
		},
		methods: {
			toNext(e1, e2) {
				this.currentPage = e1
				this.currentCount = e2
				this.getList()
			},
			openMask(item) {
				this.currentRecord = item
				this.showMask = true
				this.showEdit = true
			},
			close() {
				this.showMask = false
				this.showEdit = false
				this.currentRecord = {}
				this.realName = ""
			},
			confirm() {
				if (!this.realName) {
					uni.showToast({
						title: "请输入实名",
						icon: "error",
						duration: 2000
					})
					return
				}
				let data = {
					"real_name": this.realName
				}
				let url = "/admin/withdraw/" + this.currentRecord.id + "/real-name"
				this.$request(url, data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: "更新成功",
							duration: 2000
						})
						this.close()
						this.getList()
					}
				})
			},
			confirmGetBack() {
				let _this = this
				let data = {
					"reason": this.reason
				}
				uni.showModal({
					title: "是否确认撤回给用户：" + _this.currentRecord.worker_name + "(实名：" + _this.currentRecord
						.real_name + ")" +
						"的转账？",
					success(res) {
						if (res.confirm) {
							let url = "/admin/withdraw/" + _this.currentRecord.id + "/revoke"
							_this.$request(url, data, "POST").then(resp => {
								if (resp.code == 0) {
									uni.showModal({
										title: "已撤回",
										showCancel: false
									})
									_this.close()
									_this.getList()
								}
							})
						}
					}
				})
			},
			getBack(item) {
				this.currentRecord = item
				this.showMask = true
				this.showReason = true
			},
			getList() {
				let url = "/admin/withdraws?page=" + this.currentPage +
					"&worker_search=" + this.searEmployee + "&page_size=" + this.currentCount + "&create_time_start=" +
					this
					.searStart + "&create_time_end=" + this.searEnd + "&status_update_time_start=" +
					this
					.searStart2 + "&status_update_time_end=" + this.searEnd2 + "&status=" + this.txValue
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.pagination = res.data.pagination
					}
				})
			},
			handleSearch(e) {
				this.currentPage = 1
				this.searEmployee = e.employeeName
				this.searStart = e.startTime
				this.searEnd = e.endTime
				this.searStart2 = e.startTime2
				this.searEnd2 = e.endTime2
				this.txValue = e.txValue
				this.getList()
			},
		}
	}
</script>

<style lang="scss">
	// ::v-deep {

	// 	.uni-table-tr .uni-table-th:last-child {
	// 		background: rgb(246, 246, 246);
	// 	}

	// 	.uni-table-tr .uni-table-td:last-child {
	// 		position: relative;
	// 		background: #fff;

	// 	}

	// 	.uni-table-tr:hover .uni-table-td:last-child,
	// 	.uni-table-tr:nth-child(2n + 3):hover .uni-table-td:last-child {
	// 		background: #8fc9f5;
	// 	}

	// 	.uni-table-tr:nth-child(2n + 3) .uni-table-td:last-child {
	// 		position: relative;
	// 		background: #fafafa;
	// 	}


	// }

	::v-deep {
		.search_box {
			margin: 0;
		}
	}

	.table_wrap {
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
</style>