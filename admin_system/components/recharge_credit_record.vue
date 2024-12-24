<template>
	<view class="board">
		<view class="box">
			<view class="title">积分充值记录</view>
			<view class="flex flex_btween" style="align-items: start;">
				<searchBox :showCode="true" codeStr="套餐ID" :showEmployee="true" :showRange="true" :searStart="searStart"
					:searEnd="searEnd" :timeStr="timeStr" employeeStr="用户名称" @handleSearch="handleSearch">
				</searchBox>
			</view>

			<view class="table_wrap">
				<uni-table border stripe emptyText="暂无更多数据">
					<uni-tr style="background: #f6f6f6;">
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">序号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">支付编号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">用户名称</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">手机号码</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">充值套餐ID</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">支付金额</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">支付方式</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">支付时间</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in list" :key="index">
						<uni-td align="center">{{index+1+currentCount*(currentPage - 1)}}</uni-td>
						<uni-td align="center">{{item.id}}</uni-td>
						<uni-td align="center">{{item.worker_name}}</uni-td>
						<uni-td align="center">{{item.worker_mobile}}</uni-td>
						<uni-td align="center">{{item.id}}</uni-td>
						<uni-td align="center">{{item.amount}}</uni-td>
						<uni-td align="center">{{item.channel=="wechat"?"微信支付":""}}</uni-td>
						<uni-td align="center">{{item.pay_time}}</uni-td>
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
				timeStr: "支付",
				list: [],
				pagination: {},
				currentPage: 1,
				searEmployee: "",
				searStart: "",
				searEnd: "",
				currentCount: 15
			};
		},
		components: {
			searchBox,
			pageBox
		},
		created() {
			// this.getList()
		},
		methods: {
			toNext(e1, e2) {
				this.currentPage = e1
				this.currentCount = e2
				this.getList()
			},
			getList() {
				let url = "/admin/credit/charge_record?page=" + this.currentPage +
					"&keyword=" + this.searEmployee + "&page_size=" + this.currentCount + "&pay_time_start=" + this
					.searStart + "&pay_time_end=" + this.searEnd
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
			// position: relative;
			background: #fff;

		}

		.uni-table-tr:hover .uni-table-td:last-child,
		.uni-table-tr:nth-child(2n + 3):hover .uni-table-td:last-child {
			background: #8fc9f5;
		}

		.uni-table-tr:nth-child(2n + 3) .uni-table-td:last-child {
			// position: relative;
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