<template>
	<view class="board">
		<view class="box">
			<view class="title">邀请记录</view>
			<view class="flex flex_btween" style="align-items: start;">
				<searchBox :showEmployee="true" :showUser="true" :showInvite="true" :showRange="true"
					:searStart="searStart" :searEnd="searEnd" :timeStr="timeStr" employeeStr="受邀人" userStr="邀请人"
					@handleSearch="handleSearch">
				</searchBox>
			</view>

			<view class="table_wrap">
				<uni-table border stripe emptyText="暂无更多数据">
					<uni-tr style="background: #f6f6f6;">
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">序号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">邀请人</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">邀请人电话</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">受邀人</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">受邀人电话</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">邀请方式</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">邀请时间</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in list" :key="index">
						<uni-td align="center">{{index+1+currentCount*(currentPage - 1)}}</uni-td>
						<!-- <uni-td align="center">
							<view style="cursor: pointer;color:#1E8EEE;" @click="showWorkerDetail(item)">
								{{item.id}}
							</view>
						</uni-td> -->
						<uni-td align="center">{{item.inviter}}</uni-td>
						<uni-td align="center">{{item.inviter_mobile}}</uni-td>
						<uni-td align="center">{{item.invitee}}</uni-td>
						<uni-td align="center">{{item.invitee_mobile}}</uni-td>
						<uni-td align="center">{{inviteWay.filter(el=>{return el.value == item.way})[0].text}}</uni-td>
						<uni-td align="center">{{item.time}}</uni-td>
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
	import commonData from "@/common/commonData.js"
	export default {
		name: "employee_list",
		data() {
			return {
				timeStr: "邀请",
				list: [],
				pagination: {},
				currentPage: 1,
				searEmployee: "",
				searUser: "",
				searStart: "",
				searEnd: "",
				searWay: "",
				currentCount: 15,
				inviteWay: commonData.inviteMethods,
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
			getList() {
				let url = "/admin/invite-list?page=" + this.currentPage +
					"&invitee=" + this.searEmployee + "&inviter=" + this.searUser + "&page_size=" + this.currentCount +
					"&start_time=" + this
					.searStart + "&end_time=" + this.searEnd + "&way=" + this.searWay
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
				this.searUser = e.userName
				this.searWay = e.inviteValue
				this.getList()
			},
		}
	}
</script>

<style lang="scss">
	::v-deep {

		.uni-table-tr .uni-table-th:last-child {
			background: rgb(246, 246, 246);
		}

		.uni-table-tr .uni-table-td:last-child {
			position: relative;
			background: #fff;

		}

		.uni-table-tr:hover .uni-table-td:last-child,
		.uni-table-tr:nth-child(2n + 3):hover .uni-table-td:last-child {
			background: #8fc9f5;
		}

		.uni-table-tr:nth-child(2n + 3) .uni-table-td:last-child {
			position: relative;
			background: #fafafa;
		}


	}

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