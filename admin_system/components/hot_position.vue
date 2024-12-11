<template>
	<view class="board">
		<view class="box">
			<view class="title">热招职位</view>
			<view class="flex flex_btween" style="align-items: end;">
				<searchBox :showProject="true" :showChannelStatus="true" :showRange="true" :searStart="searStart"
					:searEnd="searEnd" timeStr="生成" @handleSearch="handleSearch">
				</searchBox>
				<view class="btn" @click="openAdd" style="margin-bottom: 15px;">新增</view>
			</view>

			<view class="table_wrap">
				<uni-table border stripe emptyText="暂无更多数据">
					<uni-tr style="background: #f6f6f6;">
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">序号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位ID</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位名称</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位薪资</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">推荐状态</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">生成时间</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">操作</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in list">
						<uni-td align="center">{{index+1+currentCount*(currentPage - 1)}}</uni-td>
						<uni-td align="center">{{item.project_id }}</uni-td>
						<uni-td align="center">{{item.project_name?item.project_name:item.project_id}}</uni-td>
						<uni-td
							align="center">{{item.worker_salary_min+"-"+item.worker_salary_max+typeRange.filter(el=>{return el.value==item.worker_salary_type})[0].text}}</uni-td>
						<uni-td align="center">{{status.filter(el=>{return el.value == item.status})[0].text}}</uni-td>
						<uni-td align="center">{{item.create_time}}</uni-td>
						<!-- <uni-td align="center">{{item.create_time}}</uni-td> -->
						<uni-td style="padding:8px 0px;">
							<view class="ope flex flex_around">
								<view class="ope_item" @click="handleChannel(item)"
									:class="item.status == 'already_online'?'frozen':'unfrozen'">
									<image
										:src="item.status == 'already_online'?'/static/ic_btn_frozen.png':'/static/ic_btn_unfrozen.png'"
										mode="heightFix"></image>
									{{item.status=="already_online"?"下线":"上线"}}
								</view>
								<view class="ope_item refuse" v-if="item.status != 'already_online'"
									@click="deleteChannel(item)">
									<image src="/static/ic_btn_refuse.png" mode="heightFix"></image>
									删除
								</view>

							</view>
						</uni-td>
					</uni-tr>
				</uni-table>
				<pageBox :page="pagination" @toNext="toNext"></pageBox>
			</view>
		</view>
		<view class="mask" v-if="showMask">
			<view class="inner" v-if="showAdd" style="width:80%;max-height: 800px;">
				<view class="title">新增</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box" style="padding-top:20px;">
					<!-- 检索区 -->
					<view class="mask_sear_box flex flex-start">
						<input type="text" v-model="maskKeyword" placeholder="请输入职位id/名称/关键词" />
						<view class="btn" @click="searchPositon">搜索</view>
					</view>
					<!-- 表格区 -->
					<view class="mask_table_box flex flex_btween">
						<!-- 左侧检索结果区 -->
						<view class="mask_table_item">
							<view class="table_tit">搜索结果</view>
							<scroll-view scroll-y="true" style="height:300px;">
								<uni-table border stripe emptyText="暂无更多数据">
									<uni-tr>
										<uni-th align="center">职位id</uni-th>
										<uni-th align="center">职位名称</uni-th>
										<uni-th align="center">创建时间</uni-th>
										<uni-th align="center">操作</uni-th>
									</uni-tr>
									<uni-tr v-for="(item,index) in searchResult">
										<uni-td align="center">{{item.id}}</uni-td>
										<uni-td align="center">
											<view style="color:#0092ff;cursor: pointer;" @click="showContent(item)">
												{{item.name}}
											</view>
										</uni-td>
										<uni-td align="center">{{item.create_time}}</uni-td>
										<uni-td>
											<view class="search_btn flex flex_around" style="cursor: pointer;"
												v-if="!item.isSele" @click="addRecord(item,index)">添加</view>
											<view class=" flex flex_around" style="color:#999;" v-if="item.isSele">已选
											</view>
										</uni-td>
									</uni-tr>
								</uni-table>
							</scroll-view>
							<view class="inner_page flex flex_around">
								<view class="flex" style="align-items: center;">
									<view class="page_btn" @click="innerBefore">&lt;&lt;</view>
									<view class="page_btn">{{currentInnerPage}}</view>
									<view class="page_btn" @click="innerNext">&gt;&gt;</view>
								</view>

							</view>
						</view>
						<!-- 右侧已选区 -->
						<view class="mask_table_item">
							<view class="table_tit">已选数据（{{selectedArr.length}}）</view>
							<scroll-view scroll-y="true" style="height:348px;">
								<uni-table border stripe emptyText="暂无更多数据">
									<uni-tr>
										<uni-th align="center">职位id</uni-th>
										<uni-th align="center">职位名称</uni-th>
										<uni-th align="center">创建时间</uni-th>
										<uni-th align="center">操作</uni-th>
									</uni-tr>
									<uni-tr v-for="(item,index) in selectedArr">
										<uni-td align="center">{{item.id}}</uni-td>
										<uni-td align="center">
											<view style="color:#0092ff;cursor: pointer;" @click="showContent(item)">
												{{item.name}}
											</view>
										</uni-td>
										<uni-td align="center">{{item.create_time}}</uni-td>
										<uni-td>
											<view class="search_btn flex flex_around" style="cursor: pointer;"
												@click="deleteRecord(item)">移除</view>
										</uni-td>
									</uni-tr>
								</uni-table>
							</scroll-view>
						</view>
					</view>
					<view class="line flex flex_end">
						<view class="btn" @click="confirmAdd">确认创建</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 详情遮罩 -->
		<view class="mask two_mask" v-if="showTwoMask">
			<view class="inner" style="width:60%;height: 800px;">
				<view class="title">职位详情（职位id:{{currentDetail.id}}）</view>
				<view class="close" @click="closeTwoMask">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view style="padding:15px 30px;">
					<textarea v-model="currentDetail.content" placeholder="" disabled
						style="width: 100%;height:700px;display: block;font-size: 16px;line-height: 28px;" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import searchBox from "@/components/search_box.vue"
	import pageBox from "@/components/paging_box.vue"
	import commonData from "../common/commonData"
	const app = getApp()
	export default {
		name: "broker_list",
		data() {
			return {
				typeRange: [{
						value: "month",
						text: "元/月"
					},
					{
						value: "day",
						text: "元/天"
					},
					{
						value: "hour",
						text: "元/时"
					}
				],
				maskKeyword: "",
				list: [],
				pagination: {},
				showMask: false,
				showAdd: false,
				currentPage: 1,
				channelStatusValue: "",
				searStart: "",
				searEnd: "",
				searPro: "",
				currentCount: 15,
				currentChannel: {

				},
				status: commonData.channelStatus,
				searchResult: [],
				selectedArr: [

				],
				showTwoMask: false,
				currentDetail: {},
				currentInnerPage: 1,
				currentInnerPagination: {}
			};
		},
		components: {
			searchBox,
			pageBox
		},
		created() {
			console.log("时间1：", this.searStart, this.searEnd)
			let paramArr = []
			if (location.href.indexOf("?") != -1) {
				paramArr = location.href.split("?")[1].split("&")
			}
			for (var i = 0; i < paramArr.length; i++) {
				if (paramArr[i].indexOf("status") != -1) {
					this.channelStatusValue = paramArr[i].split("=")[1]

				}
				if (paramArr[i].indexOf("start") != -1) {
					this.searStart = paramArr[i].split("=")[1]
				}
				if (paramArr[i].indexOf("end") != -1) {
					this.searEnd = paramArr[i].split("=")[1]
				}
				if (paramArr[i].indexOf("pgindex") != -1) {
					this.currentPage = paramArr[i].split("=")[1]
				}
			}
			this.getList()
		},
		methods: {
			searchPositon() {
				let url = "/admin/hot-jobs/available-projects?keyword=" + this.maskKeyword + "&page=" + this
					.currentInnerPage
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.searchResult = res.data.list
						this.currentInnerPagination = res.data.pagination
					}
				})
			},
			showContent(item) {
				let url = "/admin/project/" + item.id
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.currentDetail = res.data
						this.showTwoMask = true
					}
				})
			},
			closeTwoMask() {
				this.showTwoMask = false
			},
			innerBefore() {
				if (this.currentInnerPage == 1) {
					uni.showToast({
						title: "已经是第一页了",
						icon: "error",
						duration: 2000
					})
					return
				} else {
					this.currentInnerPage--
				}
				this.searchPositon()
			},
			innerNext() {
				if (this.currentInnerPage < this.currentInnerPagination.pageCount) {
					this.currentInnerPage++
				} else {
					uni.showToast({
						title: "没有下一页了",
						icon: "error",
						duration: 2000
					})
					return
				}
				this.searchPositon()
			},
			addRecord(item, index) {
				// 查询已选列表中是否存在该数据
				let len = this.selectedArr.length
				let isSele = false
				let obj = JSON.parse(JSON.stringify(item))
				for (var i = 0; i < len; i++) {
					if (item.id == this.selectedArr[i].id) {
						// 已存在
						isSele = true
					}
				}
				if (isSele) {
					uni.showToast({
						title: "该职位已添加",
						icon: "error",
						duration: 2000
					})
				} else {
					this.selectedArr.push(item)
					obj.isSele = true
					this.$set(this.searchResult, index, obj)
				}
			},
			deleteRecord(item) {
				// 从已选数据中删除
				this.selectedArr = this.selectedArr.filter(el => {
					return el.id != item.id
				})
				// 若搜索结果中包含该职位，设置选择状态
				let len = this.searchResult.length
				let index = -1
				let obj = JSON.parse(JSON.stringify(item))
				obj.isSele = false
				for (let i = 0; i < len; i++) {
					if (item.id == this.searchResult[i].id) {
						index = i
					}
				}
				if (index > -1) {
					this.$set(this.searchResult, index, obj)
				}

			},
			openAdd() {
				this.showMask = true
				this.showAdd = true
			},
			handleChannel(item) {
				let _this = this
				let url = "/admin/hot-jobs/" + item.id + "/status"
				let data = {
					status: ""
				}
				if (item.status == "pending_online") {
					// 上线操作
					data.status = "already_online"
					uni.showModal({
						title: "是否确认上线该职位：" + item.project_name + "？",
						confirmText: "确认上线",
						confirmColor: "#0092ff",
						success(resp) {
							if (resp.confirm) {
								_this.$request(url, data, "POST").then(res => {
									if (res.code == 0) {
										uni.showToast({
											title: "上线成功",
											icon: "none",
											duration: 3000
										})
										_this.getList()
									}
								})
							}
						}
					})
				} else {
					// 下线操作
					data.status = "pending_online"
					uni.showModal({
						title: "是否确认下线该职位：" + item.project_name + "？",
						confirmText: "确认下线",
						confirmColor: "#f00",
						success(resp) {
							if (resp.confirm) {
								_this.$request(url, data, "POST").then(res => {
									if (res.code == 0) {
										uni.showToast({
											title: "下线成功",
											icon: "none",
											duration: 3000
										})
										_this.getList()
									}
								})
							}
						}
					})
				}
			},
			confirmAdd() {
				let ids = []
				this.selectedArr.forEach(el => {
					ids.push(el.id)
				})
				let data = {
					"project_ids": ids
				}
				console.log(data)
				let url = "/admin/hot-jobs"
				this.$request(url, data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: "创建成功",
							duration: 3000
						})
						this.getList()
						this.resetData()
						this.close()
					}
				})
			},
			resetData() {
				this.maskKeyword = ""
				this.selectedArr = []
				this.searchResult = []
			},
			toNext(e1, e2) {
				this.currentPage = e1
				this.currentCount = e2
				this.getList()
			},
			navigate(obj, id, status, preStatus) {
				this.setPageName(obj, id)
				this.$emit("getPageName", obj)
				let searObj = {
					start: this.searStart,
					end: this.searEnd,
					page: this.currentPage

				}
				this.setPageName(obj, id, status, preStatus, searObj)
				this.$emit("getPageName", obj)
			},
			deleteChannel(item) {
				let _this = this
				let url = "/admin/hot-jobs/" + item.id
				uni.showModal({
					title: "是否将职位（" + item.project_name + "）从热招列表中删除？",
					confirmText: "确认删除",
					confirmColor: "#f00",
					success(res) {
						if (res.confirm) {
							_this.$request(url, {}, "DELETE").then(res => {
								if (res.code == 0) {
									uni.showToast({
										title: "删除成功",
										duration: 2000
									})
									_this.getList()
								}
							})
						}
					}
				})

			},
			getList() {
				uni.showLoading({
					title: "努力加载中~"
				})
				let url = "/admin/hot-jobs?page=" + this.currentPage +
					"&create_time_start=" + this.searStart + "&create_time_end=" + this.searEnd + "&status=" + this
					.channelStatusValue +
					"&page_size=" + this.currentCount + "&keyword=" + this.searPro
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.pagination = res.data.pagination
					}
				})
			},
			handleSearch(e) {
				this.currentPage = 1
				this.channelStatusValue = e.channelStatusValue
				this.searStart = e.startTime
				this.searEnd = e.endTime
				this.searPro = e.projectName
				this.getList()
			},
			close() {
				this.showMask = false
				this.showAdd = false
				this.resetData()
			},
		}
	}
</script>

<style lang="scss">
	::v-deep {
		.search_box {
			margin: 0;
		}

		.uni-select {
			border-bottom: none !important;
			border: none;
			font-size: 16px;
		}

		.uni-select__input-placeholder {
			font-size: 16px !important;
		}

		.uni-table-td {
			white-space: pre-wrap;

		}
	}

	.inner_page {
		margin-top: 15px;

		.page_btn {
			padding: 5px 15px;
			border-radius: 4px;
			border: 1px solid #d4d4d4;
			margin-right: 15px;
			cursor: pointer;

			&:not(:nth-child(2)):hover {
				border: 1px solid #226FF9;
				color: #226FF9;
			}

			&:last-child {
				margin-right: 0;
			}
		}
	}

	.search_btn:hover {
		color: #226FF9;
		font-weight: 600;
	}

	.mask_sear_box {
		input {
			width: 300px;
			height: 40px;
			border: 1px solid #e6e6e6;
			border-radius: 5px;
			padding: 0 10px;
			box-sizing: border-box;
			margin-right: 10px;
		}

		.btn {
			border: 1px solid #226FF9;
			color: #226FF9;
			background: #fff;
			font-weight: 600;
		}
	}

	.mask_table_box {
		margin: 20px 0;
		align-items: start;

		.mask_table_item {
			width: 48%;
			padding: 15px;
			box-sizing: border-box;
			border-radius: 4px;

			&:nth-child(1) {
				background: #f6f6f6;
			}

			&:nth-child(2) {
				background: #e7eef6;
			}

			.table_tit {
				font-weight: 600;
				margin-bottom: 15px;
				font-size: 14px;
			}
		}
	}

	.desc {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
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

	.mask .inner .box .line .input_wrap {
		width: calc(100% - 72px);
	}

	.mask {
		.inner {
			.line {
				.tips {
					padding-left: 71px;
					// text-align: center;
					color: #f00;
					font-size: 14px;
					box-sizing: border-box;
				}
			}


			.input_wrap {


				&.uploadCard {
					width: 100%;
					height: 200px;
					border: 1px solid #e9e9e9;
					border-radius: 20px;
					position: relative;
					margin-bottom: 20px;

					.loadimg {
						width: 100%;
						text-align: center;

						image {
							height: 200px;
						}
					}

					.innerimg {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						text-align: center;
						cursor: pointer;

						image {
							width: 50px;
							height: 50px;
							margin-bottom: 15px;
						}
					}
				}

				input {
					width: 100%;
				}

				textarea {
					padding: 10px;
				}
			}
		}
	}

	.period {
		white-space: nowrap;
		color: #5a5a5a;
		display: inline-block;
		margin-right: 10px;
		font-size: 14px;
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