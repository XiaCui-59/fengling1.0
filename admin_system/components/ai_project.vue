<template>
	<view class="board">
		<view class="box">
			<view class="title">AI职位</view>
			<view class="table_wrap">
				<uni-table border stripe emptyText="暂无更多数据">
					<uni-tr style="background: #f6f6f6;">
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">序号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位ID</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位编号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位名称</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">工人薪资</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">性别要求</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">年龄要求</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in list" :key="index">
						<uni-td align="center">{{index+1+currentCount*(currentPage - 1)}}</uni-td>
						<uni-td align="center">{{item.id}}</uni-td>
						<uni-td align="center">{{item.code}}</uni-td>
						<uni-td align="center">{{item.name}}</uni-td>
						<uni-td
							align="center">{{(item.worker_salary_min == item.worker_salary_max?item.worker_salary_min:(item.worker_salary_min+"-"+item.worker_salary_max))+"元"+ periodList.filter(el=>{return el.value == item.worker_salary_type})[0].text}}
						</uni-td>
						<uni-td
							align="center">{{gender.filter(el=>{return el.value == item.worker_gender})[0].text}}</uni-td>
						<uni-td align="center">{{item.worker_age_min+"-"+item.worker_age_max+"岁"}}</uni-td>
					</uni-tr>
				</uni-table>
				<view class="paging_box flex flex_end">
					<view class="inner flex flex_end">
						<view class="total">共{{pagination.totalCount}} 条，总共{{pagination.pageCount}}页</view>
						<view class="sele_count" style="margin-left:10px;">
							<uni-data-select :placement="place" v-model="count" :localdata="countList"
								@change="countChange" :clear="false"></uni-data-select>
						</view>
						<view class="opera flex flex_start">
							<view class="item btn" @click="toBefore">
								<image src="/static/left.png" mode="widthFix"></image>
							</view>
							<view class="item">{{pagination.page}}</view>
							<view class="item btn" @click="toNext">
								<image src="/static/right.png" mode="widthFix"></image>
							</view>
						</view>
						<!-- <view class="input flex flex_start">
							<view class="text">前往第</view>
							<input type="text" v-model="inputPage" />
							<view class="text">页</view>
							<view class="btn" @click="toPage">确定</view>
						</view> -->
					</view>
				</view>
				<!-- // <pageBox :page="pagination" @toNext="toNext"></pageBox> -->
			</view>
		</view>
	</view>
</template>

<script>
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
				periodList: commonData.periodList,
				inputPage: 1,
				place: "top",
				count: 15,
				countList: [{
						value: 15,
						text: "15条/页"
					},
					{
						value: 30,
						text: "30条/页"
					},
					{
						value: 60,
						text: "60条/页"
					},
				],
				currentPlatform: {
					value: "wechat_mini_program",
					text: "微信",
					icon: "/static/wechat.png"
				},
				gender: [{
						value: "male",
						text: "男"
					}, {
						value: "female",
						text: "女"
					},
					{
						value: "both",
						text: "不限"
					}
				],
				list: [],
				status: commonData.projectStatus,
				cleaningStatus: commonData.cleaningStatus,
				currentId: "",
				currentMoreId: 0,
				years: "",
				continueFee: "",
				currentPage: 1,
				pagination: {},
				currentCount: 15,
				next_page_offset: ""
			};
		},
		components: {
			pageBox
		},
		created() {
			this.getList()
		},
		onReady() {

		},
		watch: {

		},
		methods: {
			countChange(e) {
				this.currentCount = e
				this.currentPage = 1
				this.getList()
			},
			toNext() {
				if (this.currentPage < this.pagination.pageCount) {
					this.currentPage++
					this.inputPage = this.currentPage
					this.getList()

				} else {
					uni.showToast({
						title: "没有下一页了~",
						icon: "none"
					})
				}
			},
			toBefore() {
				if (this.currentPage > 1) {
					this.currentPage--
					this.inputPage = this.currentPage
					this.getList()
				} else {
					uni.showToast({
						title: "已经是第一页了~",
						icon: "none"
					})
				}
			},
			toPage() {
				if (this.inputPage == this.pagination.page) {
					uni.showToast({
						title: "正在第" + this.inputPage + "页~",
						icon: "none"
					})
					return
				}
				if (this.inputPage <= this.pagination.pageCount) {
					this.getList()
				} else {
					uni.showToast({
						title: "只有" + this.pagination.pageCount + "页哦~",
						icon: "none"
					})
				}
			},
			getList() {
				uni.showLoading({
					title: "努力加载中~"
				})
				this.next_page_offset = (this.currentPage == 1) ? "" : this.next_page_offset
				let url = "/admin/projects/ai?next_page_offset=" + this.next_page_offset + "&page=" + this.currentPage +
					"&page_size=" + this
					.currentCount
				// let url = "/admin/projects/ai?page=" + this.currentPage + "&page_size=" + this.currentCount

				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.pagination = res.data.pagination
						this.next_page_offset = res.data.next_page_offset
					}
				})
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

		.uni-table-tr:nth-child(2n + 3) .uni-table-td:last-child {
			position: relative;
			background: #fafafa;
		}


	}

	.paging_box {
		width: 100%;
		// position: fixed;
		// bottom: 40px;
		// right: 0;
		height: 50px;
		line-height: 50px;
		border-top: 1px solid #e7e7e7;
		position: relative;
		margin-top: 15px;

		// z-index: 99;
		.inner {
			font-size: 14px;
			color: #666;
			position: relative;
			top: 0;
			left: 0;
			transform: translate(0, 0);

			.opera {
				margin: 0 20px;

				.item {
					width: 30px;
					height: 30px;
					text-align: center;
					line-height: 30px;
					border-radius: 2px;
					border: 1px solid #d4d4d4;
					margin: 0 5px;

					image {
						width: 15px;
						vertical-align: middle;
					}

					&.btn {
						background: #fff;
					}
				}
			}

			.input {

				.btn,
				input {
					width: 30px;
					height: 30px;
					text-align: center;
					line-height: 30px;
					border-radius: 2px;
					border: 1px solid #d4d4d4;
					margin: 0 5px;
					font-size: 14px;
				}

				.btn {
					width: 60px;
					background: $base-color;
					color: #fff;
					border: 1px solid transparent;
					border-radius: 8px;
				}
			}
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