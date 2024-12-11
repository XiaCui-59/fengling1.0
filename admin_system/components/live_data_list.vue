<template>
	<view class="board">
		<view class="box">
			<view class="title">计划列表</view>
			<searchBox :showAnchor="true" :showLiveAccount="true" :showRange="true" :timeStr="timeStr"
				@handleSearch="handleSearch" @getSeleData="getSeleData">
			</searchBox>
			<view class="table_wrap">
				<view class="btns flex flex_end" style="margin-bottom: 15px;">
					<view class="btn" @click="toAdd">新增数据</view>
				</view>
				<uni-table border stripe emptyText="暂无更多数据">
					<uni-tr style="background: #f6f6f6;">
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">直播账号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">主播账号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">直播平台</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">直播时间段</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">曝光人数</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">最高在线人数</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">平均停留时长(s)</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">直播场观（进入率）</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">直播互动（互动率）</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">新增关注（关注率）</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">线索量（线索率）</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">进入AI（点击率）</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">AI沟通（咨询率）</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">报名人数（转化率）</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">创建时间</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in list" :key="index">
						<uni-td align="center">{{item.live_account_name}}</uni-td>
						<uni-td align="center">{{item.live_host_stage_name}}</uni-td>
						<uni-td align="center">{{platformRange.filter(el=>{return el.value == item.platform})[0].text}}
						</uni-td>
						<uni-td align="center">{{item.begin_time+" - "+item.end_time}}</uni-td>
						<uni-td align="center">{{item.impression_count}}</uni-td>
						<uni-td align="center">{{item.max_online_watch_count}}</uni-td>
						<uni-td align="center">{{item.average_watch_seconds_per_audience}}</uni-td>
						<uni-td align="center">{{item.total_watch_count}}（<text
								style="color:#0092ff;">{{item.enter_rate+"%"}}</text>）</uni-td>
						<uni-td align="center">{{item.interaction_count}}（<text
								style="color:#0092ff;">{{item.interaction_rate+"%"}}</text>）</uni-td>
						<uni-td align="center">{{item.new_follow_count}}（<text
								style="color:#0092ff;">{{item.new_follow_rate+"%"}}</text>）</uni-td>
						<uni-td align="center">{{item.clue_count}}（<text
								style="color:#0092ff;">{{item.clue_rate+"%"}}</text>）</uni-td>
						<uni-td align="center">{{item.enter_ai_session_count}}（<text
								style="color:#0092ff;">{{item.enter_ai_session_rate+"%"}}</text>）</uni-td>
						<uni-td align="center">{{item.ai_interaction_count}}（<text
								style="color:#0092ff;">{{item.ai_interaction_rate+"%"}}</text>）</uni-td>
						<uni-td align="center">{{item.enrollment_count}}（<text
								style="color:#0092ff;">{{item.enrollment_rate+"%"}}</text>）</uni-td>
						<uni-td align="center">{{item.create_time}}</uni-td>
					</uni-tr>
				</uni-table>
				<pageBox :page="pagination" @toNext="toNext"></pageBox>
			</view>
		</view>
		<view class="mask" v-if="showMask">
			<view class="inner" style="width:1000px;">
				<view class="title">新增直播数据</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<view class="box_top flex flex_btween">
						<view class="box_item">
							<view class="line flex flex-start">
								<view class="tit">直播账号：</view>
								<view class="input_wrap">
									<uni-data-select v-model="liveValue" :localdata="liveRange"
										@change="liveChange"></uni-data-select>
								</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">主播账号：</view>
								<view class="input_wrap">
									<uni-data-select v-model="anchorValue" :localdata="anchorRange"
										@change="anchorChange"></uni-data-select>
								</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">直播平台：</view>
								<view class="input_wrap">
									<uni-data-select v-model="platformValue" :localdata="platformRange"
										@change="platformChange"></uni-data-select>
								</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">直播时段：</view>
								<view class="input_wrap flex flex-start">
									<uni-datetime-picker type="datetime" :value="liveStartTime"
										@change="changeStartTime" :clear-icon="false" />
									<text style="display: inline-block;margin-right: 10px;">-</text>
									<uni-datetime-picker type="datetime" :value="liveEndTime" @change="changeEndTime"
										:clear-icon="false" />
								</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">曝光人数：</view>
								<view class="input_wrap">
									<input type="number" v-model="exposureNumber" placeholder="请输入曝光人数" />
								</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">最高人数：</view>
								<view class="input_wrap">
									<input type="number" v-model="mostNumber" placeholder="请输入最高在线人数" />
								</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">平均时长：</view>
								<view class="input_wrap">
									<input type="number" v-model="averageLong" placeholder="请输入平均停留时长（s）" />
								</view>
							</view>
						</view>
						<view class="box_item">
							<view class="line flex flex-start">
								<view class="tit">场观人数：</view>
								<view class="input_wrap">
									<input type="number" v-model="viewCount" placeholder="请输入场观人数" />
								</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">进入率(%)：</view>
								<view class="input_wrap">
									<input type="number" v-model="entryRate" placeholder="直播场观 / 曝光人数*100%" disabled />
								</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">互动人数：</view>
								<view class="input_wrap">
									<input type="number" v-model="activeCount" placeholder="请输入互动人数" />
								</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">互动率(%)：</view>
								<view class="input_wrap">
									<input type="number" v-model="activeRate" placeholder="互动人数 / 直播场观*100%" disabled />
								</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">新增关注：</view>
								<view class="input_wrap">
									<input type="number" v-model="followCount" placeholder="请输入新增关注人数" />
								</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">关注率(%)：</view>
								<view class="input_wrap">
									<input type="number" v-model="followRate" placeholder="新增关注 / 直播场观*100%" disabled />
								</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">线索量：</view>
								<view class="input_wrap">
									<input type="number" v-model="inCount" placeholder="请输入线索量" />
								</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">线索率(%)：</view>
								<view class="input_wrap">
									<input type="number" v-model="inRate" placeholder="线索量 / 直播场观*100%" disabled />
								</view>
							</view>
						</view>
					</view>
					<view class="line flex flex_end">
						<view class="btn save" @click="sureAdd">确认新增数据</view>
					</view>
				</view>
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
				// pageIndex:1,
				anchorValue: "",
				anchorRange: [],
				liveValue: "",
				liveRange: [],
				platformValue: "",
				platformRange: commonData.livePlatform,
				liveStartTime: "",
				liveEndTime: "",
				exposureNumber: "",
				mostNumber: "",
				averageLong: "",
				viewCount: "",
				activeCount: "",
				followCount: "",
				inCount: "",
				timeStr: "创建",
				list: [],
				showMask: false,
				searLive: "",
				searAnchor: "",
				searStartTime: "",
				searEndTime: "",
				currentPage: 1,
				pagination: {},
				currentCount: 15,
				canAdd: true
			};
		},
		components: {
			searchBox,
			pageBox
		},
		computed: {
			entryRate: function() {
				return (this.viewCount / this.exposureNumber * 100).toFixed(2)
			},
			activeRate: function() {
				return (this.activeCount / this.viewCount * 100).toFixed(2)
			},
			followRate: function() {
				return (this.followCount / this.viewCount * 100).toFixed(2)
			},
			inRate: function() {
				return (this.inCount / this.viewCount * 100).toFixed(2)
			},
		},
		async created() {
			// this.anchorRange = await this.getAnchors()
			// this.liveRange = await this.getLive()
			// console.log(this.anchorRange)
			this.getList()
		},
		onReady() {

		},
		watch: {

		},
		methods: {
			liveChange(e) {
				console.log(e)

			},
			anchorChange(e) {
				console.log(e)
			},
			platformChange(e) {
				console.log(e)
			},
			changeStartTime(e) {
				this.liveStartTime = e
			},
			changeEndTime(e) {
				this.liveEndTime = e
			},
			resetData() {
				this.liveValue = ""
				this.anchorValue = ""
				this.platformValue = ""
				this.liveStartTime = ""
				this.liveEndTime = ""
				this.exposureNumber = ""
				this.mostNumber = ""
				this.averageLong = ""
				this.viewCount = ""
				this.entryRate = ""
				this.activeCount = ""
				this.activeRate = ""
				this.followCount = ""
				this.followRate = ""
				this.inCount = ""
				this.inRate = ""
			},
			getSeleData(anchor, live) {
				this.anchorRange = anchor
				this.liveRange = live
			},
			toNext(e1, e2) {
				this.currentPage = e1
				this.currentCount = e2
				this.getList()
			},
			getList() {
				uni.showLoading({
					title: "努力加载中~"
				})
				let url = "/admin/live-data?page=" + this.currentPage +
					"&create_time_start=" + this.searStartTime + "&create_time_end=" + this.searEndTime + "&page_size=" +
					this.currentCount + "&live_account_name=" + this.searLive + "&live_host_code=" + this.searAnchor
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.pagination = res.data.pagination
					}
				})
			},
			handleSearch(e) {
				this.currentPage = 1
				this.searLive = e.liveName
				this.searAnchor = e.anchorName
				this.searStartTime = e.startTime
				this.searEndTime = e.endTime
				this.getList()
			},
			close() {
				this.showMask = false
				this.resetData()
			},
			toAdd() {
				this.showMask = true
			},
			sureAdd() {

				let data = {
					"live_account_code": this.liveValue,
					"live_host_code": this.anchorValue,
					"platform": "wechat_video_channel",
					"begin_time": this.liveStartTime,
					"end_time": this.liveEndTime,
					"impression_count": Number(this.exposureNumber),
					"max_online_watch_count": Number(this.mostNumber),
					"average_watch_seconds_per_audience": Number(this.averageLong),
					"total_watch_count": Number(this.viewCount),
					"interaction_count": Number(this.activeCount),
					"new_follow_count": Number(this.followCount),
					"clue_count": Number(this.inCount)
				}
				let hasEmpty = false
				let _this = this
				for (let key in data) {
					if (!data[key]) {
						hasEmpty = true
					}
				}
				if (!this.canAdd) {
					uni.showToast({
						title: "请勿重复操作",
						duration: 2000,
						icon: "error"
					})
					return
				}
				if (hasEmpty) {
					uni.showToast({
						title: "信息不完整",
						duration: 2000,
						icon: "error"
					})
					return
				}
				this.canAdd = false
				uni.showModal({
					title: "直播数据提交后无法修改，请仔细核对数据是否填写正确。是否确认提交？",
					confirmText: "确认提交",
					success(res) {
						if (res.confirm) {
							_this.$request("/admin/live-data", data, "POST").then(resp => {
								if (resp.code == 0) {
									uni.showToast({
										title: "新增成功",
										duration: 2000
									})
									_this.close()
									_this.getList()
									_this.canAdd = true
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
	::v-deep {
		.uni-select__input-placeholder {
			font-size: 16px;
		}

		.uniui-calendar:before {
			display: none;
		}

		.uni-date__x-input {
			padding-left: 0;
		}

		.uni-select,
		.uni-date-x--border {
			border: none;
			height: auto;
			padding-left: 0;
		}

		.uni-date-x {
			background-color: transparent;
		}

		.uni-date-x--border {}

		.uni-table-tr .uni-table-th:last-child,
		.uni-table-tr .uni-table-td:last-child {
			position: relative;
		}

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

	.table_wrap {

		// height:500px;
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
				.box_top {
					align-items: start;

					.box_item {
						width: 48%;
					}
				}

				.line {
					margin: 15px 0 0 0px;
					padding-left: 0;
				}

				.tit {
					width: 90px;
					white-space: nowrap;
					font-weight: 600;
				}

				.input_wrap {
					width: calc(100% - 90px);
					border: 1px solid #ccc;
					border-radius: 4px;
					position: relative;
					padding: 0 15px;
					box-sizing: border-box;

					input {
						padding-left: 0;
						height: 40px;
						line-height: 40px;
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