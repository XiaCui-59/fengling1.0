<template>
	<view class="board">
		<view class="box">
			<view class="title">账户信息</view>
			<view class="base_info flex flex-start">
				<view class="base_left">
					<view class="line flex flex-start">
						<view class="line_tit">公司名称</view>
						<view class="line_text">{{info.company.name?info.company.name:"无公司信息"}}</view>
						<view class="btn" style="margin-left: 15px;background: #fff;color:#226FF9;" @click="navigate({
							pageName:'company_info'})"
							v-if="info.broker.review_status=='waiting_submit'||info.broker.review_status=='rejected'">
							{{info.broker.review_status=='waiting_submit'?"去认证":"重新认证"}}</view>
					</view>
					<view class="line flex flex-start" style="margin-top:15px;">
						<view class="line_tit">账户名称</view>
						<view class="line_text">{{info.broker.name}}</view>
					</view>
				</view>

				<view class="line flex flex-start">
					<view class="line_tit">账户余额</view>
					<view class="line_text flex flex-start">
						<text
							style="font-size: 30px;color:#FAAD14;font-weight: 600;font-family: 'Times New Roman', Times, serif;">&yen;{{info.broker.balance}}</text>
						<text class="btn" style="margin-left:25px;font-size: 16px;font-weight: 500;"
							@click="navigate({pageName:'choose_pay'})">充值</text>
					</view>
				</view>
			</view>
			<view class="title">余额变动记录</view>
			<searchBox :showRange="true" :timeStr="timeStr" @handleSearch="handleSearch">
			</searchBox>
			<view class="table_wrap">
				<uni-table border stripe emptyText="暂无更多数据">
					<uni-tr style="background: #f6f6f6;">
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">编号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">用户信息</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">类型</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">类目</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">金额（元）</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">描述</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">记录时间</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in list" :key="index">
						<uni-td align="center">{{item.id}}</uni-td>
						<uni-td align="center">{{item.broker_name}}</uni-td>
						<uni-td align="center">{{item.amount.indexOf("-") != -1?"出账":"入账"}}</uni-td>
						<uni-td align="center">{{item.type=="recharge"?"充值":"购买简历"}}</uni-td>
						<uni-td align="center">{{item.amount}}</uni-td>
						<uni-td align="center">{{item.remark}}</uni-td>
						<uni-td align="center">{{item.create_time}}</uni-td>
					</uni-tr>

				</uni-table>
				<pageBox :page="pagination" @toNext="toNext"></pageBox>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	import searchBox from "@/components/search_box.vue"
	import pageBox from "@/components/paging_box.vue"
	import {
		saveAs
	} from 'file-saver'
	export default {
		name: "commission_record",
		props: ["info"],
		data() {
			return {
				timeStr: "记录",
				list: [],
				pagination: {},
				currentPage: 1,
				currentCount: 15,
				accountInfo: {
					name: "",
					account: 0
				},
				searStart: "",
				searEnd: "",
			};
		},
		components: {
			searchBox,
			pageBox
		},
		created() {

			// this.getInfo()
			this.getList()

		},
		methods: {

			toNext(e1, e2) {
				this.currentPage = e1
				this.currentCount = e2
				this.getList()
			},
			navigate(obj) {
				this.setPageName(obj)
				this.$emit("getPageName", obj)
			},
			getInfo() {
				this.$request("/broker/company/amount").then(res => {
					if (res.code == 0) {
						this.accountInfo = res.data
					}
				})
			},
			getList() {
				uni.showLoading({
					title: "努力加载中~"
				})
				let url = "/broker/company/amount-logs?page=" + this.currentPage + "&page_size=" + this.currentCount +
					"&create_time_start=" + this.searStart + "&create_time_end=" + this.searEnd
				this.$request(url, {}, "GET", this.header).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.pagination = res.data.pagination
					}
				})
			},
			handleSearch(e) {
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

		// .uni-table-scroll {
		// 	height: calc(100vh - 360px);
		// }
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

	.base_info {
		margin: 30px 0;
		align-items: end;

		.line {
			.line_tit {
				margin-right: 15px;
				background: #f6f6f6;
				border-radius: 6px;
				padding: 10px;
				box-sizing: border-box;
			}

			.line_text {
				font-size: 22px;
				font-weight: 600;
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
</style>