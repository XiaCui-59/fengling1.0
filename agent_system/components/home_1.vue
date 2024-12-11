<template>
	<view class="board">
		<!-- <view class="data_wrap flex flex_btween">
			<view class="data_item">
				<image src="/static/home_icon_01.png" mode="widthFix"></image>
				<view class="subtit flex flex-start">
					<image src="/static/home_mall_icon_01.png" style="width:15px;height:17px;"></image>
					<text>职位进行中</text>
				</view>
				<view class="middle flex">
					<view class="num">{{dataInfo.project_count}}</view>
					<view class="period">个</view>
				</view>
			</view>
			<view class="data_item">
				<image src="/static/home_icon_02.png" mode="widthFix"></image>
				<view class="subtit flex flex-start">
					<image src="/static/home_mall_icon_02.png" style="width:15px;height:17px;"></image>
					<text>合作中介</text>
				</view>
				<view class="middle flex">
					<view class="num">{{dataInfo.broker_count}}</view>
					<view class="period">个</view>
				</view>
			</view>
			<view class="data_item">
				<image src="/static/home_icon_03.png" mode="widthFix"></image>
				<view class="subtit flex flex-start">
					<image src="/static/home_mall_icon_03.png" style="width:15px;height:17px;"></image>
					<text>在职人数</text>
				</view>
				<view class="middle flex">
					<view class="num">{{dataInfo.worker_count}}</view>
					<view class="period">个</view>
				</view>
			</view>
			<view class="data_item">
				<image src="/static/home_icon_04.png" mode="widthFix"></image>
				<view class="subtit flex flex-start">
					<image src="/static/home_mall_icon_04.png" style="width:15px;height:17px;"></image>
					<text>工人工资</text>
				</view>
				<view class="middle flex">
					<view class="num">{{dataInfo.salary_total}}</view>
					<view class="period">元</view>
				</view>
			</view>
		</view> -->
		<view class="box">
			<view class="tabs flex flex-start">
				<view class="tab" v-for="(item,index) in tabs" :class="currentTab.value==item.value?'active':''"
					@click="changeTab(item)">{{item.text}}
					<view class="count">{{item.count}}</view>
				</view>
			</view>
		</view>
		<view class="list_wrap">
			<view class="list_item flex flex_btween" v-for="(item,index) in list" @click="toDetail(item)">
				<view class="left flex flex-start">
					<image src="/static/home_message_icon.png" mode="heightFix"></image>
					<view class="tit">{{item.title}}</view>
				</view>
				<view class="right flex flex_btween">
					<view class="time">{{item.create_time}}</view>
					<image src="/static/icon_right_trangle.png" style="width:9px;height:11px;"></image>
				</view>
			</view>
			<!-- <view class="list_item flex flex_btween">
				<view class="left flex flex-start">
					<image src="/static/home_message_icon.png" mode="heightFix"></image>
					<view class="tit">您有一个职位待提审发布，请前往操作</view>
				</view>
				<view class="right flex flex_btween">
					<view class="time">2021-11-08 08:57:54</view>
					<image src="/static/icon_right_trangle.png" style="width:9px;height:11px;"></image>
				</view>
			</view> -->
			<pageBox :page="pagination" @toNext="toNext"></pageBox>
		</view>
		<!-- <view class="box" style="padding:15px;">
			<view class="title">基本信息</view>
			<view class="base_info">
				<view class="line flex flex-start">
					<view class="tit">公司名称：</view>
					<view class="text">{{info.company_name}}</view>
				</view>
				<view class="line flex flex-start">
					<view class="tit">纳税代码：</view>
					<view class="text">{{info.unified_social_credit_code}}</view>
				</view>
				<view class="line flex flex-start">
					<view class="tit">花费总额：</view>
					<view class="text">0</view>
				</view>
				<view class="line flex flex-start">
					<view class="tit">账户余额：</view>
					<view class="text">{{accountInfo.balance}}</view>
				</view>
				<view class="line flex flex-start">
					<view class="tit">审核状态：</view>
					<view class="text flex flex_start">
						<view class="sta flex flex-start">
							<view class="text">基本信息</view>
							<view class="text" v-if="info.basic_verify_status != 'approved'">{{base_status.filter(el => {return el.value == info.basic_verify_status})[0].text}}</view>
							<image src="/static/checked.png" v-if="info.basic_verify_status == 'approved'"></image>
						</view>
						<view class="sta flex flex-start">
							<view class="text">两证信息</view>
							<view class="text" v-if="info.two_certificates_verify_status != 'approved'">{{two_status.filter(el => {return el.value == info.two_certificates_verify_status})[0].text}}</view>
							<image src="/static/checked.png" v-if="info.two_certificates_verify_status == 'approved'"></image>
						</view>
					</view>
				</view>
			</view>
		</view> -->
		<!-- <view class="box">
			<view class="title">代办事项</view>
			<view class="waiting">
				<view class="tabs flex flex_start">
					<view class="tab" :class="curTab == 0?'active':''" @click="changeTab(0)">
						<text>职位</text>
						<text class="mark" v-if="itemWaitList.length!=0"></text>
					</view>
					<view class="tab" :class="curTab == 1?'active':''" @click="changeTab(1)">
						<text>签约</text>
						<text class="mark" v-if="signWaitList.length!=0"></text>
					</view>
					<view class="tab" :class="curTab == 2?'active':''" @click="changeTab(2)">
						<text>保险</text>
						<text class="mark" v-if="insureWaitList.length!=0"></text>
					</view>
					<view class="tab" :class="curTab == 3?'active':''" @click="changeTab(3)">
						<text>薪资</text>
						<text class="mark" v-if="salayWaitList.length!=0"></text>
					</view>
				</view>
			</view>
		</view> -->
		<botFooter></botFooter>
	</view>
</template>

<script>
	import botFooter from "@/components/bot_footer.vue"
	import pageBox from "@/components/paging_box.vue"
	export default {
		name: "admin",
		data() {
			return {
				currentTab: {
					value: "project",
					text: "职位管理",
					label: "职位",
					count: 0
				},
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
				currentPage: 1,
				dataInfo: {},
				pagination: {},
				list: []
			};
		},
		components: {
			botFooter,
			pageBox
		},
		created() {
			// this.getData()
			this.getStatic()
			this.getList()
		},
		methods: {
			changeTab(item) {
				this.currentTab = item
				this.getList()
			},
			toNext(e) {
				this.currentPage = e
				this.list = []
				this.getList()
			},
			getData() {
				this.$request("/broker/home/static").then(res => {
					if (res.code == 0) {
						this.dataInfo = res.data
					}
				})
			},
			toDetail(item) {
				let _this = this
				if (item.event == "project_waiting_submit_platform_review" || item.event ==
					"project_waiting_set_platform_fee" || item.event == "project_platform_review_rejected") {
					// 跳转职位列表，待提审
					_this.setPageName({
						pageName: "project_list"
					}, "", "waiting-submit-review")
					_this.$emit("getPageName", {
						pageName: "project_list"
					})
					// 待提审
					// uni.showModal({
					// 	title: "提审",
					// 	content: "是否提审该职位？",
					// 	cancelText: "前往职位列表",
					// 	confirmText: "立即提审",
					// 	success(res) {
					// 		if (res.confirm) {
					// 			let url = "/broker/project/" + item.target_id + "/submit-review"
					// 			_this.$request(url, {}, "POST").then(resp => {
					// 				if (resp.code == 0) {
					// 					uni.showToast({
					// 						title: "提审成功",
					// 						duration: 3000
					// 					})
					// 					_this.getList()
					// 					_this.getStatic()
					// 				}
					// 			})
					// 		} else {
					// 			_this.setPageName({
					// 				pageName: "project_list"
					// 			}, "", "all")
					// 			_this.$emit("getPageName", {
					// 				pageName: "project_list"
					// 			})
					// 		}
					// 	}
					// })
				} else if (item.event == "project_has_worker_enroll") {
					// 有工人报名
					_this.setPageName({
						pageName: "project_detail"
					}, item.target_id, "enrolled-signing-requests")
					_this.$emit("getPageName", {
						pageName: "project_detail"
					})
				} else if (item.event == "attendance_record_waiting_generate_bill" || item.event ==
					"process_bill_abandoned") {
					_this.setPageName({
						pageName: "checkin_list"
					}, "", "waiting-confirm")
					_this.$emit("getPageName", {
						pageName: "checkin_list"
					})
				} else if (item.event == "project_bill_created") {
					_this.setPageName({
						pageName: "cost_bill"
					}, "", "waiting-settlement")
					_this.$emit("getPageName", {
						pageName: "cost_bill"
					})
				}

			},
			getStatic() {
				this.$request("/broker/todo/stat").then(res => {
					if (res.code == 0) {
						this.tabs[0].count = res.data.project
						this.tabs[1].count = res.data.attendance_record
						this.tabs[2].count = res.data.project_bill
					}
				})
			},
			getList() {
				let url = "/broker/todos?page=" + this.currentPage + "&target=" + this.currentTab.value
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.pagination = res.data.pagination
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.board {
		.data_wrap {
			margin-bottom: 16px;

			.data_item {
				width: 24%;
				position: relative;
				font-size: 0;

				&>image {
					width: 100%;
				}

				&:nth-child(1) {
					color: #216FF9;
				}

				&:nth-child(2) {
					color: #27B470;
				}

				&:nth-child(3) {
					color: #20A9DD;
				}

				&:nth-child(4) {
					color: #FF6C1E;
				}

				.subtit {
					position: absolute;
					top: 16px;
					left: 32px;
					font-weight: 600;
					font-size: 16px;

					image {
						margin-right: 5px;
					}
				}

				.middle {
					position: absolute;
					top: 50%;
					left: 32px;
					transform: translateY(-50%);

					.num {
						font-size: 44px;
						font-weight: 600;
						font-family: "Times New Roman";
					}

					.period {
						color: #333;
						font-size: 15px;
						margin-left: 10px;
					}
				}
			}
		}

		.list_wrap {
			.list_item {
				height: 60px;
				line-height: 60px;
				background: #fff;
				border-radius: 8px;
				font-size: 15px;
				color: #333333;
				margin-bottom: 5px;
				cursor: pointer;
				transition: all .3s;
				font-weight: 600;

				&:hover {
					box-shadow: 0 2px 5px 2px #ddd;
					color: #20A9DD;
				}

				.left {
					image {
						height: 60px;
						margin-right: 20px;
					}
				}

				.right {
					padding-right: 20px;

					image {
						margin-left: 70px;
					}
				}
			}
		}

		.box {
			padding: 0;
			height: auto;
			min-height: auto;

			.tabs {
				height: 60px;
				line-height: 60px;

				.tab {
					width: 150px;
					height: 60px;
					text-align: center;
					position: relative;
					z-index: 99;
					cursor: pointer;

					.count {
						width: 20px;
						height: 20px;
						border-radius: 50%;
						text-align: center;
						line-height: 20px;
						font-size: 14px;
						background: #f00;
						color: #fff;
						position: absolute;
						top: 18%;
						right: 9%;
						transform: translateY(-50%);
					}

					&:hover {
						color: #216FFf;
					}

					&::before {
						content: "";
						width: 0px;
						height: 23%;
						border-right: 1px dashed #333;
						position: absolute;
						top: 50%;
						left: 0;
						transform: translateY(-50%);
					}

					&:nth-child(1)::before {
						display: none;
					}

					&.active {
						color: #fff;

						&+.tab::before {
							display: none;
						}

						&::after {
							content: "";
							width: 100%;
							height: 70%;
							position: absolute;
							top: 50%;
							left: 0px;
							transform: translateY(-50%);
							background: url("/static/tab_sele.png") no-repeat;
							background-size: 100% 100%;
							z-index: -1;
						}

						&::before {
							display: none;
						}
					}
				}
			}

			.base_info {
				.line {
					margin: 15px 0;

					.sta {
						margin-right: 15px;

						image {
							width: 20px;
							height: 20px;
							margin-left: 5px;
						}
					}
				}
			}

			// .waiting {
			// 	.tabs {
			// 		margin: 15px 0;

			// 		.tab {
			// 			margin-right: 15px;
			// 			display: flex;
			// 			justify-content: flex-start;
			// 			align-items: center;
			// 			cursor: pointer;

			// 			&.active {
			// 				color: $base-color;
			// 				font-weight: 600;
			// 			}

			// 			&:hover {
			// 				color: $base-color;
			// 			}

			// 			.mark {
			// 				display: inline-block;
			// 				width: 6px;
			// 				height: 6px;
			// 				background: $base-color;
			// 				border-radius: 50%;
			// 				margin-left: 5px;
			// 			}
			// 		}
			// 	}
			// }
		}
	}
</style>