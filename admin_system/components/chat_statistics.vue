<template>
	<view class="board">
		<view class="box">
			<view class="title">会话统计</view>
			<searchBox :showRange="true" :timeStr="timeStr" :showChatFrom="true" :showAdMain="false" :showAdSub="false"
				@handleSearch="handleSearch">
			</searchBox>
			<view class="table_wrap">
				<uni-table border stripe emptyText="暂无更多数据">
					<uni-tr style="background: #f6f6f6;">
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">序号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">统计日期</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">进入会话数</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">用户互动（互动率）</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">报名成功（报名率）</uni-th>
						<!-- <uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">会话来源</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">广告主平台</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">广告子平台</uni-th> -->
					</uni-tr>
					<uni-tr v-for="(item,index) in list" :key="index">
						<uni-td align="center">{{index+1+currentCount*(currentPage - 1)}}</uni-td>
						<uni-td align="center">{{item.date}}</uni-td>
						<uni-td align="center">{{item.enter_session_count}}</uni-td>
						<uni-td align="center">{{item.interaction_count}}（<text
								style="color:#10ba21;">{{item.interaction_rate}}%</text>）</uni-td>
						<uni-td align="center">{{item.enrollment_count}}（<text
								style="color:#0aa1e6;">{{item.enrollment_rate}}%</text>）</uni-td>
						<!-- <uni-td align="center">{{item.enrollment_count}}（<text
								style="color:#0aa1e6;">{{item.enrollment_rate}}%</text>）</uni-td>
						<uni-td
							align="center">{{adMainPlat.filter(el=>{return el.value == item.ad_platform}).length>0?adMainPlat.filter(el=>{return el.value == item.ad_platform})[0].text:"无"}}</uni-td>
						<uni-td
							align="center">{{adSubPlat.filter(el=>{return el.value == item.ad_sub_platform}).length>0?adSubPlat.filter(el=>{return el.value == item.ad_sub_platform})[0].text:"无"}}</uni-td> -->
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
	import {
		saveAs
	} from 'file-saver'
	const app = getApp()
	export default {
		name: "contract_list",
		data() {
			return {
				adMainPlat: commonData.adMainPlat,
				adSubPlat: commonData.adSubPlat,
				chatFrom: commonData.chatFrom,
				timeStr: "统计",
				list: [],
				currentPage: 1,
				pagination: {},
				currentCount: 15,
				searStart: "",
				searEnd: ""
			};
		},
		components: {
			pageBox,
			searchBox
		},
		created() {
			this.getList()
		},
		onReady() {

		},
		watch: {

		},
		methods: {
			toNext(e1, e2) {
				this.currentPage = e1
				this.currentCount = e2
				this.getList()
			},
			getList() {
				uni.showLoading({
					title: "努力加载中~"
				})
				// let url = "/admin/wework/chat/session/stats?page=" + this.currentPage + "&page_size=" + this.currentCount +
				// 	"&date_start=" + this.searStart + "&date_end=" + this.searEnd
				let url = "/admin/chat/session/stats?page=" + this.currentPage + "&page_size=" + this.currentCount +
					"&date_start=" + this.searStart + "&date_end=" + this.searEnd

				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.pagination = res.data.pagination
					}
				})
			},
			handleSearch(e) {
				this.currentPage = 1
				this.searStart = e.startTime
				this.searEnd = e.endTime
				this.getList()
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep {

		.uni-table-tr .uni-table-th:last-child {
			background: rgb(246, 246, 246);
		}

		.uni-table-tr .uni-table-td:last-child {
			position: relative;
			background: #fff;
		}

		.uni-table .uni-table-tr:nth-child(n + 2):hover,
		.uni-table-tr:nth-child(2n + 3) .uni-table-td:last-child:hover,
		.uni-table-tr .uni-table-td:last-child:hover {
			background-color: #d7e9ff !important;
		}

		.uni-table-tr:nth-child(2n + 3) .uni-table-td:last-child {
			position: relative;
			background: #fafafa;
		}


	}

	.table_wrap {

		// height: calc(100% - 123px);

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