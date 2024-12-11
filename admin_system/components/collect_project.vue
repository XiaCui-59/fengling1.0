<template>
	<view class="board">
		<view class="box">
			<view class="title">采集职位</view>
			<searchBox :showProject="true" :showRange="true" :timeStr="timeStr" :searPro="searPro"
				:searStart="searStartTime" :searEnd="searEndTime" @handleSearch="handleSearch">
			</searchBox>
			<view class="table_wrap">
				<view class="tabs flex flex_start">
					<view class="tab" v-for="(item,index) in tabs" :class="currentTab.value==item.value?'active':''"
						@click="changeTab(item)">{{item.text}}</view>
				</view>
				<view class="btns flex flex_end" v-if="currentTab.value=='running'">
					<view class="btn" @click="toAI" style="margin-bottom: 15px;">同步到AI</view>
				</view>
				<uni-table border stripe emptyText="暂无更多数据">
					<uni-tr style="background: #f6f6f6;">
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">序号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位编号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">原始数据</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">来源群</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">状态</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">采集时间</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">发布时间</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">操作</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in list" :key="index">
						<uni-td align="center">{{index+1+currentCount*(currentPage - 1)}}</uni-td>
						<uni-td align="center">{{item.id}}</uni-td>
						<uni-td align="center">
							<view class="origin_data" @click="showDetail(item)">
								{{item.content}}
							</view>
						</uni-td>
						<uni-td align="center">{{item.source}}</uni-td>
						<uni-td align="center">{{tabs.filter(el=>{return el.value == item.status})[0].text}}</uni-td>
						<uni-td align="center">{{item.collection_time}}</uni-td>
						<uni-td align="center">{{item.release_time}}</uni-td>
						<uni-td align="center" style="padding:8px 0px;">
							<view class="ope flex flex_around">
								<view class="ope_item edit" v-if="item.status == 'wait_released'"
									@click="navigate({pageName:'edit_collect_project'},item.id,'',currentTab.value)">
									<image src="/static/ic_btn_edit.png" mode="heightFix"></image>
									发布
								</view>
								<view class="ope_item refuse" v-if="item.status == 'wait_released'"
									@click="deleteProject(item)">
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
			<view class="inner" style="width:50%;overflow: hidden;height: 500px;" v-if="showReason">
				<view class="title">原始内容（{{currentProject.id}}）</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<scroll-view scroll-y="true" style="height: calc(100% - 50px);padding:30px;box-sizing: border-box;">
					<view class="box" style="padding:0;">
						<text style="line-height: 28px;">{{currentProject.content}}</text>
					</view>
				</scroll-view>

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
				timeStr: "采集",
				list: [],
				currentTab: {
					value: "",
					text: "全部"
				},
				tabs: commonData.collectProStatus,
				status: commonData.projectStatus,
				showReason: false,
				searPro: "",
				searStartTime: "",
				searEndTime: "",
				currentPage: 1,
				pagination: {},
				currentCount: 0,
				showMask: false
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
				if (paramArr[i].indexOf("status") != -1) {
					let status = paramArr[i].split("=")[1]
					this.currentTab = this.tabs.filter(el => {
						return el.value == status
					})[0]
				}
				if (paramArr[i].indexOf("searpro") != -1) {
					this.searPro = paramArr[i].split("=")[1]
				}
				if (paramArr[i].indexOf("start") != -1) {
					this.searStartTime = paramArr[i].split("=")[1]
				}
				if (paramArr[i].indexOf("end") != -1) {
					this.searEndTime = paramArr[i].split("=")[1]
				}
				if (paramArr[i].indexOf("pgindex") != -1) {
					this.currentPage = paramArr[i].split("=")[1]
				}
			}
			this.getList()
		},
		onReady() {

		},
		watch: {

		},
		methods: {
			showDetail(item) {
				this.currentProject = item
				this.showMask = true
				this.showReason = true
			},
			toNext(e1, e2) {
				this.currentPage = e1
				this.currentCount = e2
				this.getList()
			},
			changeTab(item) {
				this.currentPage = 1
				this.currentTab = item
				this.setPageName({
					pageName: "collect_project"
				}, "", item.value)
				this.getList()
			},
			navigate(obj, id, status, preStatus) {
				let searObj = {
					searPro: this.searPro,
					start: this.searStartTime,
					end: this.searEndTime,
					page: this.currentPage
				}
				this.setPageName(obj, id, status, preStatus, searObj)
				this.$emit("getPageName", obj)
			},
			getList() {
				uni.showLoading({
					title: "努力加载中~"
				})
				let url = "/admin/project/collection?page=" + this.currentPage +
					"&create_time_start=" + this.searStartTime + "&create_time_end=" + this.searEndTime + "&keyword=" +
					this.searPro + "&page_size=" + this.currentCount + "&status=" + this.currentTab.value
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.pagination = res.data.pagination
					}
				})
			},
			handleSearch(e) {
				this.currentPage = 1
				this.searPro = e.projectName
				this.searStartTime = e.startTime
				this.searEndTime = e.endTime
				this.getList()
			},
			close() {
				this.showMask = false
				this.showReason = false
				this.currentProject = {}
			},
			deleteProject(item) {
				let _this = this
				uni.showModal({
					title: "是否确认删除该职位（" + item.id + "）？",
					confirmText: "删除",
					confirmColor: "#f00",
					success(res) {
						if (res.confirm) {
							let url = "/admin/project/collection/" + item.id + "/info"
							_this.$request(url, {}, "DELETE").then(resp => {
								if (resp.code == 0) {
									uni.showToast({
										title: "职位已删除",
										icon: "error",
										duration: 2000
									})
									_this.getList()
								}
							})
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.origin_data {
		max-width: 340px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		cursor: pointer;

		&:hover {
			color: #2149ff;
		}
	}

	.table_wrap {

		height: calc(100% - 123px);

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

	.base {
		padding: 0 0 10px 0;
		// height: 100px;
		// overflow: hidden;


		&.showall {
			height: auto;
			overflow: visible;
		}

		.out_line {
			.line {
				width: 40%;

				.tit {
					width: 90px;
				}
			}
		}

		.line {
			margin: 15px 0;

			.text {
				color: #666;
				font-size: 14px;

				.tags {
					padding: 5px 10px;
					box-sizing: border-box;
					background: #f1f1f1;
					border-radius: 4px;
					margin-left: 5px;
					margin-bottom: 5px;
				}
			}
		}
	}

	.mask {
		.inner {
			.tabs {
				margin-bottom: 15px;

				.tab {
					padding: 5px 10px;
					border: 1px solid #ccc;
					margin-right: 15px;
					border-radius: 4px;
					cursor: pointer;

					&.active {
						background: $base-color;
						color: #fff;
						border: 1px solid $base-color;
					}
				}
			}

			.box {


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
</style>