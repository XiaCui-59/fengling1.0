<template>
	<view class="content">
		<customHeader :title="pageName" :showBack="false" :headHeight="headerHeight"></customHeader>
		<view class="cont" :style="{marginTop:marginTop+'px'}">
			<view class="top_area" :style="{top:marginTop+tabMargin+'px',height:subTabHeight+'px'}">
				<view class="subtabs flex flex-start" :style="{height:subTabHeight+'px'}">
					<view class="subtab flex flex_around" v-for="(item,index) in tabs" :key="index"
						:class="currentTab.value==item.value?'active':''" @click="changeTab(item)">
						{{item.text}}
						<view class="num" v-if="item.count != 0">{{item.count}}</view>
					</view>
				</view>
				<!-- 筛选按钮 -->
				<!-- <view class="sele_box flex flex-start" v-if="list4.length">
					<image :src="imgUrl+'/broker/ic_message.png'" mode="widthFix"></image>
					<view class="text">全部已读</view>
				</view> -->
			</view>
			<view class="box" :style="{top:boxTop+'px',background:list.length==0?'#fff':'#F3F3F5'}">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y"
					:style="{height:scrollHeight+'px'}" @scrolltolower="lower">
					<view class="item" v-for="(item,index) in list" :key="index" @click="toDetail(item)"
						v-if="list.length != 0">
						<view class="top flex flex-start">
							<view class="label">{{currentTab.label}}</view>
							<view class="tit">{{item.title}}</view>
						</view>
						<view class="middle">
							<view class="detail">{{item.content}}</view>
						</view>
						<view class="bottom flex flex_btween">
							<view class="text">{{item.create_time}}</view>
							<view class="opera flex flex_end">
								<view class="">
									{{event.filter(el => {return el.value == item.event}).length >= 1?event.filter(el => {return el.value == item.event})[0].text:"复制网址"}}
								</view>
								<image :src="imgUrl+'/broker/more.png'" mode="widthFix"></image>
							</view>
						</view>
						<!-- <view class="read_label" v-if="item.status == 'read'">
							<image :src="imgUrl+'/broker/ic_message_read.png'" mode="widthFix"></image>
						</view> -->
					</view>
					<view class="empty" v-if="list.length == 0">
						<image :src="imgUrl+'/broker/empty.png'" mode="widthFix"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		<login :showLogin="showLogin" @handleConfirm="getList" @closeLogin="closeLogin" @handleInfo="handleInfo">
		</login>
		<infoFirst :showNameInput="showNameInput" v-if="showAddInfo" @handleName="handleName"
			@closeAddInfo="closeAddInfo"></infoFirst>
		<customModal title="提审" content="是否确认提审该职位？" v-if="showModal" @confirm="handleConfirm" @cancel="handleCancel">
		</customModal>
		<tabbar current="1" @getTabbarHeight="getTabbarHeight" :todo="todo"></tabbar>
	</view>
</template>

<script>
	import infoFirst from "@/components/info_first.vue"
	import tabbar from "@/components/tabbar.vue"
	import customHeader from "@/components/custom_header.vue"
	const app = getApp()
	export default {
		data() {
			return {
				showAddInfo: false,
				showNameInput: true,
				showLogin: false,
				imgUrl: app.globalData.baseImageUrl,
				currentTab: {
					value: "project",
					text: "职位管理",
					label: "职位"
				},
				pageName: "消息",
				showModal: false,
				marginTop: app.globalData.marginTop,
				mainTabHeight: app.globalData.mainTabHeight,
				subTabHeight: app.globalData.subTabHeight,
				tabMargin: app.globalData.tabMargin,
				tabs: [{
						value: "project",
						text: "职位管理",
						label: "职位",
						count: 0
					}, {
						value: "attendance_record",
						text: "考勤相关",
						label: "考勤",
						count: 0
					},
					{
						value: "project_bill",
						text: "费用账单",
						label: "费用",
						count: 0
					}
				],
				event: [{
						value: "project_waiting_set_platform_fee",
						text: "去设置"
					},
					{
						value: "project_waiting_submit_platform_review",
						text: "点击提审"
					},
					{
						value: "project_platform_review_rejected",
						text: "去编辑"
					},
					{
						value: "project_has_worker_enroll",
						text: "去确认"
					}
				],
				list: [],
				scrollHeight: 0,
				boxTop: 0,
				headerHeight: app.globalData.highTopHeight,
				tabbarHeight: 0,
				currentPage: 1,
				pagination: {},
				targetId: "",
				todo: 0,
				loginStatus: false,
				userInfo: {}
			}
		},
		components: {
			tabbar,
			customHeader,
			infoFirst
		},
		onLoad() {
			let _this = this
			this.boxTop = this.marginTop + 2 * this.tabMargin + this.subTabHeight
			this.scrollHeight = app.globalData.systemHeight - this.marginTop - 2 * this.tabMargin - this.subTabHeight -
				this.tabbarHeight
			if (this.isLogin()) {
				this.loginStatus = true
			}
		},
		watch: {
			// async loginStatus(newValue, oldValue) {
			// 	console.log(newValue, oldValue)
			// 	if (newValue) {
			// 		this.list = []
			// 		this.getList()
			// 	}
			// }
		},
		async onShow() {
			if (this.isLogin()) {
				this.loginStatus = true
				this.refreshTodo()
				this.currentPage = 1
				this.getList()
				this.userInfo = await this.getInfo()
				// 判断有没有公司信息
				if (this.userInfo.broker.review_status == "waiting_submit" || this.userInfo.broker
					.review_status == "rejected") {
					this.showAddInfo = true
				}
				if (this.userInfo.broker.name) {
					this.showNameInput = false
				}
			} else {
				this.showLogin = true
				this.loginStatus = false
				this.list = []
				this.todo = 0
				this.tabs[0].count = 0
				this.tabs[1].count = 0
				this.tabs[2].count = 0
				// uni.showModal({
				// 	title: "提示",
				// 	content: "您当前未登录，或登录状态异常，请重新登录。",
				// 	success(res) {
				// 		if (res.confirm) {
				// 			uni.navigateTo({
				// 				url: "/pages/login/login"
				// 			})
				// 		}
				// 	}
				// })
			}

		},
		methods: {
			handleName() {
				this.showNameInput = false
			},
			closeAddInfo() {
				this.showAddInfo = false
			},
			handleInfo(info) {
				if (!info.company.name) {
					this.showAddInfo = true
				}
				if (info.broker.name) {
					// 隐藏输入姓名
					this.showNameInput = false
				}
			},
			closeLogin() {
				this.showLogin = false
			},
			getTabbarHeight(e) {
				this.tabbarHeight = e
			},
			async refreshTodo() {
				let todoStatic = await this.getTodoStatic()
				this.todo = todoStatic.total
				this.tabs[0].count = todoStatic.project
				this.tabs[1].count = todoStatic.attendance_record
				this.tabs[2].count = todoStatic.project_bill
			},
			changeTab(item) {
				this.currentPage = 1
				this.currentTab = item
				this.refreshTodo()
				this.getList()
			},
			handleCancel() {
				this.showModal = false
			},
			handleConfirm() {
				let url = "/broker/mini/project/" + this.targetId + "/submit-review"
				this.$request(url, {}, "POST").then(res => {
					if (res.code == 0) {
						this.showModal = false
						uni.showToast({
							title: "提审成功",
							duration: 3000
						})
						this.refreshTodo()
						this.currentPage = 1
						this.getList()
					}
				})
			},
			getMore() {
				let url = "/broker/mini/todos?page=" + this.currentPage + "&target=" + this.currentTab.value
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = this.list.concat(res.data.list)
						this.pagination = res.data.pagination
					}
				})
			},
			getList() {
				let url = "/broker/mini/todos?page=1" + "&target=" + this.currentTab.value
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.pagination = res.data.pagination
					}
				})
			},
			toDetail(item) {
				if (item.event == "project_waiting_set_platform_fee" || item.event == "project_platform_review_rejected" ||
					item.event == "project_has_worker_enroll") {
					uni.navigateTo({
						url: item.extra.url
					})
				} else if (item.event == "project_waiting_submit_platform_review") {
					this.targetId = item.target_id
					this.showModal = true
				} else {
					// 复制web端网址
					uni.setClipboardData({
						data: "https://es.swiftwd.com",
						success(res) {

						}
					})
				}
			},
			lower() {
				if (this.list.length < this.pagination.totalCount) {
					this.currentPage++
					this.getMore()
				} else {
					if (this.list.length >= this.pagination.totalCount) {
						uni.showToast({
							title: "已经到底啦~",
							icon: "none",
							duration: 2000
						})
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep {
		.uni-select {
			border: none;
			background: #fff;
			height: 88rpx;
			font-size: 28rpx;
			border-radius: 8rpx;
			padding: 0 40rpx;
		}

		.uni-icons {
			display: none;
		}

		.uni-select__input-placeholder {
			font-size: 28rpx;
		}

		.uni-date-x--border {
			height: 88rpx;
			line-height: 88rpx;
			padding: 0 40rpx;
			background: #fff;
			border-radius: 8rpx;
			box-sizing: border-box;
			border: none;
		}

		.uni-datetime-picker--btn,
		.uni-calendar-item__weeks-box .uni-calendar-item--checked {
			background: #F7BC05;
		}

		.uni-datetime-picker-btn-text {
			color: #F7BC05;
		}
	}

	.subtabs .subtab {
		position: relative;

		.num {
			position: absolute;
			top: 0;
			right: 0;
			width: 30rpx;
			height: 30rpx;
			text-align: center;
			line-height: 30rpx;
			font-size: 23rpx;
			background: #ff2c11;
			color: #fff;
			border-radius: 50%;
		}
	}

	.top_area {
		width: calc(100% - 96rpx);
		position: fixed;
		left: 48rpx;

		.sele_box {
			margin: 0 20rpx 20rpx 0;

			.text {
				font-size: 28rpx;
				color: #fff;
				font-weight: bold;
			}

			image {
				width: 34rpx;
				margin-right: 8rpx;
			}
		}
	}

	.box {
		position: fixed;
		width: calc(100% - 96rpx);
		left: 48rpx;
		z-index: 3;
		border-top-left-radius: 16rpx;
		border-top-right-radius: 16rpx;
		overflow: hidden;

		.item {
			padding: 0 0rpx 40rpx 0rpx;
			border-radius: 16rpx;
			background: #fff;
			box-shadow: 0 2rpx 6rpx 0 rgba(0, 0, 0, 0.15);
			margin-bottom: 20rpx;
			position: relative;

			.top {
				padding: 14rpx 40rpx;
				border-bottom: 2rpx dashed #DFDFDF;
				font-size: 27rpx;

				.label {
					width: 80rpx;
					height: 52rpx;
					line-height: 52rpx;
					text-align: center;
					background: #F7BC05;
					border-radius: 4px;
					color: #FFFFFF;
					margin-right: 8rpx;
				}

				.tit {
					width: calc(100% - 88rpx);
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					font-weight: 600;
					color: #333333;
				}
			}

			.middle {
				font-size: 24rpx;
				padding: 24rpx 40rpx;

				.tit {
					font-weight: bold;
					font-size: 28rpx;
					margin-bottom: 12rpx;
				}

				.detail {
					color: #5A5A5A;
					line-height: 40rpx;
				}

				.mark {
					font-size: 36rpx;
					color: #333;
					margin-right: 8rpx;
				}

				.yellow {
					color: #F7BC05;
				}
			}

			.bottom {
				width: calc(100% - 80rpx);
				margin: 0 auto;
				padding: 0 23rpx;
				height: 60rpx;
				border-radius: 6rpx;
				line-height: 60rpx;
				background: #F6F6F6;
				font-size: 23rpx;
				color: #5A5A5A;

				.opera {
					font-weight: 600;
					color: #F7BC05;
				}

				image {
					width: 20rpx;
					height: 20rpx;
				}
			}

			.read_label {
				position: absolute;
				top: 0;
				right: 0;

				image {
					width: 74rpx;
					height: 74rpx;
				}
			}
		}
	}
</style>