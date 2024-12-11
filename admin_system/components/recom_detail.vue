<template>
	<view class="board">
		<view class="back" style="font-weight:500;color:#1E8EEE;font-size:16px;cursor: pointer;margin-bottom: 15px;"
			@click="back">
			<image src="/static/back_blue.png" mode="widthFix" style="width:18px;height:18px;margin-right:5px;">
			</image>
			<text>返回</text>
		</view>
		<view class="box">
			<view class="title">职位推荐详情（记录ID：{{id}}）</view>
			<view class="flex flex_btween" style="align-items: end;">
				<searchBox :showProject="true" :showChannelStatus="true" @handleSearch="handleSearch">
				</searchBox>
			</view>

			<view class="table_wrap">
				<uni-table border stripe emptyText="暂无更多数据">
					<uni-tr style="background: #f6f6f6;">
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">序号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位ID</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位名称</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位薪资</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">展示人数</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">推荐状态</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">操作</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in list">
						<uni-td align="center">{{item.seq_num}}</uni-td>
						<uni-td align="center">{{item.project_id }}</uni-td>
						<uni-td align="center">{{item.project_name?item.project_name:item.project_id}}</uni-td>
						<uni-td
							align="center">{{item.worker_salary_min+"-"+item.worker_salary_max+ "元"+type.filter(el=>{return el.value==item.worker_salary_type})[0].text}}</uni-td>
						<uni-td align="center">{{item.display_counts}}</uni-td>
						<uni-td align="center">{{status.filter(el=>{return el.value == item.status})[0].text}}</uni-td>
						<!-- <uni-td align="center">{{item.create_time}}</uni-td> -->
						<uni-td style="padding:8px 0px;">
							<view class="ope flex flex_around">
								<view class="ope_item detail" @click="showDetail(item)">
									<image src="/static/ic_btn_detail.png" mode="heightFix"></image>详情
								</view>
								<view class="ope_item" @click="handleChannel(item)"
									:class="item.status == 'already_online'?'frozen':'unfrozen'"
									v-if="currentRecord.status == 'already_online'">
									<image
										:src="item.status == 'already_online'?'/static/ic_btn_frozen.png':'/static/ic_btn_unfrozen.png'"
										mode="heightFix"></image>
									{{item.status=="already_online"?"下线":"上线"}}
								</view>
								<!-- <view class="ope_item refuse" v-if="item.channel_status == 'pending_online'"
									@click="deleteChannel(item)">
									<image src="/static/ic_btn_refuse.png" mode="heightFix"></image>
									删除
								</view> -->

							</view>
						</uni-td>
					</uni-tr>
				</uni-table>
				<pageBox :page="pagination" @toNext="toNext"></pageBox>
			</view>
		</view>
		<view class="mask" v-if="showMask">
			<view class="inner" v-if="showAdd" style="width:60%;height: 800px;padding:0;">
				<view class="title">职位详情</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box" style="height:auto;">
					<view class="mask_table_box flex flex_btween">
						<view class="mask_table_item" style="height:700px;">
							<view class="table_tit">职位描述</view>
							<textarea v-model="currentDetail.content"
								style="display: block;width:100%;height:640px;line-height: 26px;" disabled></textarea>
						</view>
						<view class="mask_table_item" style="height:700px;">
							<view class="table_tit flex flex-start">
								<view class="" style="margin-right: 10px;">播报文本</view>
								<audio style="text-align: left;" :src="currentDetail.audio_key" controls
									height="30px"></audio>
							</view>
							<textarea v-model="currentDetail.audio_sheet"
								style="display: block;width:100%;height:640px;line-height: 26px;" disabled></textarea>
						</view>
					</view>
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
				list: [],
				pagination: {},
				showMask: false,
				showAdd: false,
				currentPage: 1,
				channelStatusValue: "",
				searPro: "",
				preStart: "",
				preEnd: "",
				prePage: "",
				currentCount: 15,
				currentChannel: {

				},
				status: commonData.channelStatus,
				id: "",
				type: commonData.periodList,
				currentDetail: {
					content: "",
					audio_key: "",
					audio_sheet: ""
				},
				currentRecord: {
					id: "",
					status: ""
				}
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
				if (paramArr[i].indexOf("id") != -1) {
					this.id = paramArr[i].split("=")[1]
				}
				if (paramArr[i].indexOf("start") != -1) {
					this.preStart = paramArr[i].split("=")[1]
				}
				if (paramArr[i].indexOf("end") != -1) {
					this.preEnd = paramArr[i].split("=")[1]
				}
				if (paramArr[i].indexOf("pgindex") != -1) {
					this.prePage = paramArr[i].split("=")[1]
				}
				if (paramArr[i].indexOf("pre_stus") != -1) {
					this.preStatus = paramArr[i].split("=")[1]
				}
			}
			this.getList()
		},
		methods: {
			back() {
				// window.history.back()
				console.log(this.preStatus)
				let preSear = {
					start: this.preStart,
					end: this.preEnd,
					page: this.prePage
				}
				this.setPageName({
					pageName: "recom_position"
				}, "", this.preStatus, "", preSear)
				this.$emit("getPageName", {
					pageName: "recom_position"
				})
			},
			openAdd() {
				this.showMask = true
				this.showAdd = true
			},
			showDetail(item) {
				let url = "/admin/homepage/projects/info/" + item.id
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.currentDetail = res.data[0]
						this.showMask = true
						this.showAdd = true
					}
				})
			},
			toNext(e1, e2) {
				this.currentPage = e1
				this.currentCount = e2
				this.getList()
			},
			handleChannel(item) {
				let _this = this
				let url = ""
				if (item.status == "pending_online") {
					// 上线操作
					url = "/admin/homepage/projects/online/" + item.project_id
					uni.showModal({
						title: "是否确认上线该职位：" + item.project_name + "？",
						confirmText: "确认上线",
						confirmColor: "#0092ff",
						success(resp) {
							if (resp.confirm) {
								_this.$request(url, {}, "POST").then(res => {
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
					url = "/admin/homepage/projects/offline/" + item.project_id
					uni.showModal({
						title: "是否确认下线该职位：" + item.project_name + "？",
						confirmText: "确认下线",
						confirmColor: "#f00",
						success(resp) {
							if (resp.confirm) {
								_this.$request(url, {}, "POST").then(res => {
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
			getList() {
				uni.showLoading({
					title: "努力加载中~"
				})
				let url = "/admin/homepage/projects_display/info/" + this.id + "?page=" + this.currentPage +
					"&status=" + this
					.channelStatusValue +
					"&page_size=" + this.currentCount + "&key_words=" + this.searPro
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.currentRecord = res.data.record
						this.pagination = res.data.pagination
					}
				})
			},
			handleSearch(e) {
				this.currentPage = 1
				this.channelStatusValue = e.channelStatusValue
				this.searPro = e.projectName
				this.getList()
			},
			close() {
				console.log(111)
				this.showMask = false
				this.showAdd = false
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

		.uni-audio-default,
		.uni-audio-left,
		.uni-audio-right,
		.uni-audio-button {
			height: 35px !important;
		}

		.uni-audio-left,
		.uni-audio-button {
			width: 35px;
			margin: 0;
		}

		.uni-audio-time {
			margin-top: 0;
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
		margin: 20px 0 0 0;
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