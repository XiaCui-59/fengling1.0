<template>
	<view class="board">
		<view class="box">
			<view class="title">费用账单</view>
			<searchBox :showRange="true" :timeStr="timeStr" @handleSearch="handleSearch">
			</searchBox>
			<view class="table_wrap">
				<uni-table border stripe emptyText="暂无更多数据">
					<uni-tr style="background: #f6f6f6;">
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">账单编号</uni-th>
						<!-- <uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">用户名称</uni-th> -->
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">费用金额（元）</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">支付方式</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">状态</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">账单描述</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">账单时间</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in list">
						<uni-td align="center">{{item.id}}</uni-td>
						<uni-td align="center">{{item.amount}}</uni-td>
						<uni-td align="center">{{item.type == "balance"?"余额支付":""}}</uni-td>
						<uni-td align="center">{{item.status == "success"?"成功":"失败"}}</uni-td>
						<uni-td align="center">{{item.remark}}</uni-td>
						<uni-td align="center">{{item.create_time}}</uni-td>
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
	export default {
		name: "commission_bill",
		data() {
			return {
				timeStr: "账单",
				list: [],
				pagination: {},
				currentPage: 1,
				currentCount: 15,
				searStatus: "",
				searStart: "",
				searEnd: "",
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
			toNext(e) {
				this.currentPage = e
				this.getList()
			},
			navigate(obj, id) {
				this.setPageName(obj, id)
			},
			getList() {
				uni.showLoading({
					title: "努力加载中~"
				})
				let url = "/broker/company/bill?page=" + this.currentPage +
					"&page_size=" + this.currentCount + "&create_time_start=" + this.searStart + "&create_time_end=" + this
					.searEnd
				this.$request(url, {}, "GET", this.header).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.pagination = res.data.pagination
					}
				})
			},
			handleSearch(e) {
				this.searStatus = e.rechargeStatus
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
			position: relative;
			background: #fff;
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
</style>