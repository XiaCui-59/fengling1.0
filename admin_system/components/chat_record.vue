<template>
	<view class="board">
		<view class="box">
			<view class="title">会话记录</view>
			<searchBox :showUser="true" :showRange="true" :timeStr="timeStr" @handleSearch="handleSearch">
			</searchBox>
			<!-- <searchBox :showUser="true" :showLiveAccount="true" :showRange="true" :timeStr="timeStr" :showAnchor="true"
				:showKefuRange="true" :showChatFrom="true" @handleSearch="handleSearch">
			</searchBox> -->
			<view class="table_wrap">
				<uni-table border stripe emptyText="暂无更多数据">
					<uni-tr style="background: #f6f6f6;">
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">序号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">会话ID</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">uid</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">用户ID</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">咨询用户</uni-th>
						<!-- <uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">客服账号</uni-th> -->
						<!-- <uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">接入视频号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">接入主播</uni-th> -->
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">初次接入时间</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">今日开始时间</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">会话来源</uni-th>
						<!-- <uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">广告主平台</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">广告子平台</uni-th> -->
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">操作</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in list" :key="index">
						<uni-td align="center">{{index+1+currentCount*(currentPage - 1)}}</uni-td>
						<uni-td align="center">{{item.id}}</uni-td>
						<uni-td align="center">{{item.worker_account_id}}</uni-td>
						<uni-td align="center">{{item.worker_id}}</uni-td>
						<uni-td align="center">{{item.customer_nickname}}</uni-td>
						<!-- <uni-td align="center">{{item.open_kf_name}}</uni-td> -->
						<!-- <uni-td align="center">{{item.live_account_name}}</uni-td>
						<uni-td align="center">{{item.live_host_stage_name}}</uni-td> -->
						<uni-td align="center">{{item.begin_time}}</uni-td>
						<uni-td align="center">{{item.today_chat_start_time}}</uni-td>
						<uni-td align="center">微信小程序</uni-td>
						<!-- <uni-td
							align="center">{{chatFrom.filter(el=>{return el.value == item.platform})[0].text}}</uni-td> -->
						<!-- <uni-td
							align="center">{{adMainPlat.filter(el=>{return el.value == item.ad_platform}).length>0?adMainPlat.filter(el=>{return el.value == item.ad_platform})[0].text:"无"}}</uni-td>
						<uni-td
							align="center">{{adSubPlat.filter(el=>{return el.value == item.ad_sub_platform}).length>0?adSubPlat.filter(el=>{return el.value == item.ad_sub_platform})[0].text:"无"}}</uni-td> -->
						<uni-td align="center" style="padding:8px 0px;">
							<view class="ope flex flex_around">
								<view class="ope_item detail" @click="viewRecord(item)">
									<image src="/static/ic_btn_detail.png" mode="heightFix"></image>详情
								</view>
							</view>
						</uni-td>
					</uni-tr>

				</uni-table>
				<pageBox :page="pagination" @toNext="toNext"></pageBox>
			</view>
		</view>
		<view class="mask" v-if="showMask">
			<view class="inner" v-if="showFirst">
				<view class="inner_top">
					<view class="title">
						{{currentChat.customer_nickname+"（"+currentChat.customer_id+"）"
						+"（工人ID："+currentChat.worker_id+"）"
						}}
					</view>
					<view class="close" @click="close">
						<image src="/static/close_white.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="box">
					<scroll-view scroll-y="true" style="height:100%;
				padding-bottom: 40px;
				box-sizing: border-box;" :scroll-into-view="scrollView">
						<view class="item flex" v-for="(item,index) in chatDetail" :key="index"
							:class="item.origin == 'customer'?'from_customer flex-start':'from_system flex_end'"
							v-if="item.origin != 'system_event'" :id="'item'+index">
							<image src="/static/user_avatar.png" mode="widthFix" v-if="item.origin =='customer'">
							</image>
							<view class="line">
								<view class="time" style="font-size: 12px;">{{item.create_time}}
								</view>
								<view class="item_top flex" :class="item.origin == 'customer'?'flex-start':'flex_end'">
									<view class="name">
										{{item.origin=="ai"?item.open_kf_name:(item.origin=="customer"?item.customer_nickname:(item.origin=="receptionist"?item.receptionist_name:"系统事件"))}}
									</view>
									<view class="time">{{item.send_time}}</view>
								</view>
								<view class="item_bot"><text>{{item.msg_type=="voice"?"（语音）":""}}</text>{{item.content}}
								</view>
							</view>
							<image src="/static/yoyo_avatar.png" mode="widthFix"
								v-if="item.origin=='ai' || item.origin == 'system_event'"></image>
						</view>
					</scroll-view>

				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	import searchBox from "@/components/search_box.vue"
	import pageBox from "@/components/paging_box.vue"
	import commonData from "@/common/commonData.js"
	import {
		saveAs
	} from 'file-saver'
	let app = getApp()
	export default {
		name: "commission_record",
		data() {
			return {
				adMainPlat: commonData.adMainPlat,
				adSubPlat: commonData.adSubPlat,
				chatFrom: commonData.chatFrom,
				scrollView: "",
				pageType: "mask",
				timeStr: "今日接入",
				list: [],
				type: [{
						value: "created",
						text: "会话创建"
					},
					{
						value: "reception",
						text: "人工接待"
					},
					{
						value: "ai",
						text: "AI自动接待"
					}
				],
				scene: commonData.scene,
				pagination: {},
				showMask: false,
				showFirst: false,
				showSecond: false,
				allRise: 0,
				allDown: 0,
				seleAll: false,
				selectedIds: [],
				selectedIndex: [],
				selectedProjectIds: [],
				currentPage: 1,
				id: "",
				searUser: "",
				searAdMain: "",
				searAdSub: "",
				searStart: "",
				searEnd: "",
				searKefu: "",
				searChatFrom: "",
				chatDetail: [],
				mergeList: [],
				currentChat: "",
				maskPageIndex: 1,
				maskPagination: {},
				currentCount: 15
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
			toNext(e1, e2) {
				this.currentPage = e1
				this.currentCount = e2
				this.getList()
			},
			changeTab(item) {
				this.currentPage = 1
				this.currentTab.value = item.value
				this.currentTab.text = item.text
				this.setPageName({
					pageName: "checkin_list"
				}, "", item.value)
				this.getList()
			},
			navigate(obj, id) {
				this.setPageName(obj, id)
			},
			viewRecord(item) {
				this.currentChat = item
				this.getDetailList()
			},
			getDetailList() {
				// let url = "/admin/wework/chat/" + this.currentChat.id + "/detail"
				let url = "/admin/chat/session/" + this.currentChat.id + "/messages"
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.chatDetail = res.data
						this.showMask = true
						this.showFirst = true
						let index = res.data.length - 1
						this.scrollView = 'item' + index
					}
				})
			},
			getList() {
				uni.showLoading({
					title: "努力加载中~"
				})
				// let url = "/admin/wework/chat/list?page=" + this.currentPage + "&page_size=" + this.currentCount +
				// 	"&customer_nickname=" + this.searUser + "&live_account_name=" + this.searLive + "&live_host_code=" +
				// 	this.searAnchor + "&today_chat_start_time=" + this.searStart + "&today_chat_end_time=" + this.searEnd +
				// 	"&open_kf_id=" + this.searKefu
				let url = "/admin/chat/sessions?page=" + this.currentPage + "&page_size=" + this.currentCount +
					"&customer_nickname=" + this.searUser + "&today_chat_start_time=" + this.searStart +
					"&today_chat_end_time=" + this.searEnd +
					"&open_kf_id=" + this.searKefu + "&platform=" + this.searChatFrom + "&ad_platform=" + this.searAdMain +
					"&ad_sub_platform=" + this.searAdSub
				this.$request(url, {}, "GET", this.header).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.pagination = res.data.pagination
					}
				})
			},
			handleSearch(e) {
				this.currentPage = 1
				this.searUser = e.userName
				this.searAdMain = e.adMain
				this.searAdSub = e.adSub
				this.searStart = e.startTime
				this.searEnd = e.endTime
				this.searKefu = e.kefuValue
				this.searChatFrom = e.chatFrom
				this.getList()
			},
			close() {
				this.showMask = false
				this.showFirst = false
				this.showSecond = false
			},

		}
	}
</script>

<style lang="scss">
	::v-deep {
		.search_box {
			margin: 0;
		}



		// .uni-table-tr .uni-table-th:last-child,
		// .uni-table-tr .uni-table-td:last-child {
		// 	position: relative;
		// 	background-color: #fff;
		// }

		.uni-select {
			border: none;
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

	.mask {
		.inner {
			overflow: hidden;
			height: 800px;

			.inner_top {
				height: 50px;
			}

			.box {
				height: calc(100% - 50px);
				max-height: calc(100% - 50px);
				box-sizing: border-box;

				::v-deep {
					.uni-scroll-view-content {
						padding: 25px 30px;
						box-sizing: border-box;
					}
				}

				.item {
					align-items: start;

					image {
						width: 35px;
						height: 35px;
						border-radius: 50%;
					}

					&.from_customer {
						.line {
							max-width: 70%;

							.time {
								text-align: left;
							}

							.item_bot {
								padding: 10px;
								box-sizing: border-box;
								border-radius: 10px;
								// text-align: left;
								background: #f6f6f6;

							}
						}

						// float: left;


					}

					&.from_system {
						.line {
							max-width: 70%;
							padding: 0 10px;
							box-sizing: border-box;

							.time {
								text-align: right;
							}

							.item_top {
								text-align: right;
							}

							.item_bot {
								padding: 10px;
								box-sizing: border-box;
								border-radius: 10px;
								// text-align: left;
								background: #EBF5FF;

							}
						}

						// float: right;
					}
				}
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

	.mask {
		.inner {
			.box {
				padding: 0;

				.item {
					margin-bottom: 15px;

					.item_top {
						margin-bottom: 5px;
						font-size: 12px;
						color: #919191;

						.name {
							margin-right: 10px;
							font-weight: 600;
							color: #444;
						}
					}

					.item_bot {
						font-weight: 400;
						font-size: 15px;
						color: #333333;
						line-height: 27px;
						white-space: pre-wrap;

						text {
							color: #ff6105;
						}
					}
				}
			}
		}
	}
</style>