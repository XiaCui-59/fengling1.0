<template>
	<view class="mask">
		<view class="inner">
			<view class="title">可选职位</view>

			<searchBox :showProject="true" @handleSearch="handleSearch">
			</searchBox>
			<view class="table_wrap">
				<view class="btns flex flex_end" style="margin-bottom: 15px;">
					<view class="btn" style="margin-right: 15px;background: #fff;color:#333;border:1px solid #ddd;"
						@click.stop="close">取消
					</view>
					<view class="btn" @click.stop="sure">确定</view>
				</view>
				<uni-table border stripe emptyText="暂无更多数据">
					<uni-tr style="background: #f6f6f6;">
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;"></uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位编号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位名称</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位经理</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">劳务公司</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">工人薪资</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">报名总人数</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">招聘进度</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">创建时间</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in localdata" :key="index">
						<uni-td align="center">
							<view class="icon_default" :class="projectIds.indexOf(item.id) != -1?'icon_active':''"
								@click="choose(item)">
								<view class="icon_inner"></view>
							</view>
						</uni-td>
						<uni-td align="center">{{item.code}}</uni-td>
						<uni-td align="center">{{item.name}}</uni-td>
						<uni-td align="center">{{item.broker_name}}</uni-td>
						<uni-td
							align="center">{{(item.worker_salary_min == item.worker_salary_max?item.worker_salary_min:(item.worker_salary_min+"-"+item.worker_salary_max))}}
						</uni-td>
						<uni-td align="center">{{item.broker_company_name}}</uni-td>
						<uni-td align="center">{{item.all_count}}</uni-td>
						<uni-td align="center">{{item.on_job_worker_count}}</uni-td>
						<uni-td align="center">{{item.create_time}}</uni-td>
					</uni-tr>
				</uni-table>
				<view class="pagination flex flex_end">
					<view class="prev" @click="toPrev">&lt;&lt;</view>
					<view class="page">{{pagination.page}}</view>
					<view class="after" @click="toAfter">&gt;&gt;</view>
				</view>
			</view>
		</view>
		<!-- <view class="item" v-for="(item,index) in localdata" :key="index" @click="choose(item)">
			<view class="icon_default" :class="projectIds.indexOf(item.id) != -1?'icon_active':''">
				<view class="icon_inner"></view>
			</view>
			<view class="text">{{item.code+" "+item.name}}</view>
		</view>
		<view class="pagination flex flex_end">
			<view class="prev" @click="toPrev">&lt;&lt;</view>
			<view class="page">{{pagination.page}}</view>
			<view class="after" @click="toAfter">&gt;&gt;</view>
		</view> -->

	</view>
</template>

<script>
	import searchBox from "@/components/search_box.vue"
	export default {
		name: "multi_data_select",
		props: {
			localdata: {
				type: Array,
				default () {
					return []
				}
			},
			projectIds: {
				type: Array,
				default () {
					return []
				}
			},
			pagination: {
				type: Object,
				default () {
					return {}
				}
			},
			selectedObjs: {
				type: Array,
				default () {
					return []
				}
			},
			placeholder: {
				type: String,
				default: '请选择'
			},
			clear: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				keyword: "",
				emitObj: {},
				id: ""
			};
		},
		components: {
			searchBox
		},
		created() {
			console.log(this.projectIds, "creat")
		},
		methods: {
			choose(item) {
				// 判断是否为已选
				if (this.projectIds.indexOf(item.id) != -1) {
					this.selectedObjs.splice(this.projectIds.indexOf(item.id), 1)
					this.projectIds.splice(this.projectIds.indexOf(item.id), 1)
				} else {
					this.projectIds.push(item.id)
					this.selectedObjs.push(item)
				}
			},
			close() {
				this.$emit("close", "12")
			},
			sure() {
				this.emitObj = {
					ids: this.projectIds,
					objs: this.selectedObjs
				}
				this.$emit("change", this.emitObj)
				this.$emit("close", "12")
			},
			toPrev() {
				if (this.pagination.page == 1) {
					uni.showToast({
						title: "没有上一页了",
						duration: 2000,
						icon: "error"
					})
				} else {
					let page = this.pagination.page - 1
					this.$emit("getProject", {
						page: page,
						keyword: this.keyword
					})
				}
			},
			toAfter() {
				console.log(this.projectIds, "123")
				if (this.pagination.page >= this.pagination.pageCount) {
					uni.showToast({
						title: "没有下一页了",
						duration: 2000,
						icon: "error"
					})
				} else {
					let page = this.pagination.page + 1
					this.$emit("getProject", {
						page: page,
						keyword: this.keyword
					})
				}
			},
			handleSearch(e) {
				this.currentPage = 1
				this.keyword = e.projectName
				this.$emit("getProject", {
					page: this.pagination.page,
					keyword: this.keyword
				})
			}
		}
	}
</script>

<style lang="scss">
	::v-deep {

		.uni-table-tr .uni-table-th:last-child,
		.uni-table-tr .uni-table-td:last-child {
			position: relative !important;
			background: transparent;
		}
	}

	.inner {
		// width: 60%;
		// position: fixed;
		// top: 50%;
		// left: 0;
		// max-height: 300px;
		// box-shadow: 0 0 5px 2px #f5f5f5;
		padding: 0px 15px;

		// box-sizing: border-box;
		// background: #fff;
		// z-index: 9;
		// overflow-y: scroll;
		.title {
			background: #fff !important;
			color: #333;
			padding: 0 12px;
		}

		.pagination {
			margin: 15px 15px 0 15px;

			view {
				font-size: 14px;
				margin-left: 10px;
				color: #0092ff;
			}

			.prev,
			.after {
				width: 30px;
				text-align: center;
				border: 1px solid #ddd;
				cursor: pointer;

				&:hover {
					background: #0092ff;
					color: #fff;
				}
			}

			.page {
				font-weight: 600;
				color: #333;
			}
		}

		.close {
			position: absolute;
			top: 25px;
			right: 25px;
			color: #0092ff;
			cursor: pointer;
			transition: all .5s;
			z-index: 20;

			&:hover {
				font-weight: 600;
			}
		}

		.icon_default {
			width: 15px;
			height: 15px;
			padding: 2px;
			border: 1px solid #ccc;
			border-radius: 2px;
			margin: auto;
			box-sizing: border-box;

			&.icon_active {
				border: 1px solid #0092ff;

				.icon_inner {
					width: 100%;
					height: 100%;
					background: #0092ff;
					border-radius: 2px;
				}
			}

			.icon_inner {}
		}
	}
</style>