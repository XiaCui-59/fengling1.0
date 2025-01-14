<template>
	<view class="board">
		<view class="box">
			<view class="title">留资记录</view>
			<searchBox :showRange="true" :showProject="true" :showEmployee="true" :timeStr="timeStr"
				@handleSearch="handleSearch" @putout="handlePutout">
			</searchBox>
			<view class="table_wrap">
				<uni-table border stripe emptyText="暂无更多数据">
					<uni-tr style="background: #f6f6f6;">
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">序号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">姓名</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">手机号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位名称</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">留资页面</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">广告来源</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">留资时间</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">备注信息</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">操作</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in list" :key="index">
						<uni-td align="center">{{index+1+currentCount*(currentPage - 1)}}</uni-td>
						<uni-td align="center">{{item.name}}</uni-td>
						<!-- <uni-td align="center">{{item.worker_id_card_number}}</uni-td> -->
						<uni-td align="center">{{item.mobile}}</uni-td>
						<uni-td align="center">
							<view style="cursor: pointer;color:#1E8EEE;" @click="showProjectDetail(item)">
								{{item.project_name?item.project_name:item.project_id}}
							</view>
						</uni-td>
						<uni-td align="center">{{item.source=="h5"?"h5":"小程序"}}</uni-td>
						<uni-td
							align="center">{{adMainPlat.filter(el=>{return el.value == item.ad_platform})[0].text}}</uni-td>
						<uni-td align="center">{{item.create_time}}</uni-td>
						<uni-td align="center">
							<view style="cursor: pointer;color:#f00;font-size: 12px;"
								v-for="(markItem,markIndex) in item.remarks">
								{{markItem.remark+"("+markItem.create_time+")"}}
							</view>
						</uni-td>
						<uni-td align="center" style="padding:8px 0px;">
							<view class="ope flex flex_around">
								<view class="ope_item pass" @click="toMark(item)">
									<image src="/static/ic_btn_pass.png" mode="heightFix"></image>
									添加备注
								</view>
							</view>
						</uni-td>
					</uni-tr>

				</uni-table>
				<pageBox :page="pagination" @toNext="toNext"></pageBox>
			</view>
		</view>
		<view class="mask" v-if="showMask">
			<view class="inner" v-if="showSecond" style="overflow: hidden;height: 600px;">
				<view class="inner_top">
					<view class="title" style="margin-bottom: 0;">职位详情{{"（"+currentInfo.name+"—"+currentInfo.id+")"}}
					</view>
					<view class="close" @click="close">
						<image src="/static/close_white.png" mode="widthFix"></image>
					</view>
				</view>

				<view class="box">
					<scroll-view scroll-y="true" style="height:100%;
					box-sizing: border-box;">
						<view class="base_box" style="width:50%;">
							<view class="line flex flex_start">
								<view class="tit">职位名称：</view>
								<view class="text">{{currentInfo.name}}</view>
							</view>
							<view class="line flex flex_start">
								<view class="tit">工人薪资：</view>
								<view class="text">
									<!-- {{currentInfo.worker_salary_min}}~{{currentInfo.worker_salary_max}} -->
									{{currentInfo.worker_salary_min==currentInfo.worker_salary_max?"":(currentInfo.worker_salary_min+"~")}}{{currentInfo.worker_salary_max+typeRange.filter(el=>{return el.value == currentInfo.worker_salary_type})[0].text}}
								</view>
							</view>
							<view class="line flex flex_start" style="align-items: start;">
								<view class="tit">职位亮点：</view>
								<view class="text flex flex-start"
									v-if="currentInfo.cleaning_result.highlights.length != 0">
									<view class="tags" v-for="(item,index) in currentInfo.cleaning_result.highlights">
										{{item}}
									</view>
								</view>
								<view class="text flex flex-start"
									v-if="currentInfo.cleaning_result.highlights.length == 0">未添加</view>
							</view>
							<view class="line flex flex_start" style="align-items: start;">
								<view class="tit">负面信息：</view>
								<view class="text flex flex-start"
									v-if="currentInfo.cleaning_result.negative_rules.length != 0">
									<view class="tags"
										v-for="(item,index) in currentInfo.cleaning_result.negative_rules">
										{{item}}
									</view>
								</view>
								<view class="text flex flex-start"
									v-if="currentInfo.cleaning_result.negative_rules.length == 0">未添加</view>
							</view>
							<view class="line flex flex_start">
								<view class="tit">工作地址：</view>
								<view class="text">{{currentInfo.work_address.address}}</view>
							</view>
						</view>
						<view class="base_box" style="width:50%;">
							<view class="line flex flex_start">
								<view class="tit">职位经理：</view>
								<view class="text">{{currentInfo.broker_name+"（"+currentInfo.broker_mobile+"）"}}</view>
							</view>
							<view class="line flex flex_start">
								<view class="tit" style="width: auto;">面试联系人：</view>
								<view class="text">
									{{currentInfo.interview_contact_name?currentInfo.interview_contact_name:"无"}}
								</view>
							</view>
							<view class="line flex flex_start">
								<view class="tit" style="width: auto;">联系人电话：</view>
								<view class="text">
									{{currentInfo.interview_contact_mobile?currentInfo.interview_contact_mobile:"无"}}
								</view>
							</view>
							<view class="line flex flex_start">
								<view class="tit" style="width: auto;">年龄要求：</view>
								<view class="text">{{currentInfo.worker_age_min + "~" + currentInfo.worker_age_max+"岁"}}
								</view>
							</view>
							<view class="line flex flex_start">
								<view class="tit" style="width: auto;">性别要求：</view>
								<view class="text">
									{{currentInfo.worker_gender == "male"?"男":(currentInfo.worker_gender == "both"?"不限":"女")}}
								</view>
							</view>
						</view>
						<view class="line" style="width:100%;margin-top:20px;">
							<view class="tit" style="margin-bottom: 15px;">原始描述：</view>
							<view class="text"
								style="line-height: 28px;white-space: pre-wrap;border:1px solid #ccc;border-radius: 5px;font-size: 14px;padding:10px;box-sizing: border-box;color:#666;">
								{{currentInfo.content}}
							</view>
						</view>
						<view class="line" style="width:100%;">
							<view class="tit" style="margin-bottom: 15px;">职位视频：</view>
							<view class="text">
								<video v-if="currentInfo.videos[0]" :src="currentInfo.videos[0].url" controls
									style="width: 60%;height:260px;"></video>
								<text v-if="!currentInfo.videos[0]">未上传视频</text>
							</view>
						</view>
						<view class="line" style="width:100%;">
							<view class="tit" style="margin-bottom: 15px;">职位图片：</view>
							<view class="text flex flex-start" v-if="currentInfo.images.length != 0">
								<image v-for="(img,index) in currentInfo.images" :src="img.url" mode="widthFix"
									style="width:200px;margin-right:15px;"></image>
							</view>
							<view class="text flex flex-start" v-if="currentInfo.images.length == 0">未上传图片</view>
						</view>
					</scroll-view>

				</view>
			</view>
			<view class="inner" v-if="showMark">
				<view class="inner_top">
					<view class="title" style="margin-bottom: 0;">
						添加备注{{"（"+currentMarkRecord.name+currentMarkRecord.mobile+")"}}
					</view>
					<view class="close" @click="close">
						<image src="/static/close_white.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="box">
					<view class="line flex flex-start">
						<view class="tit">备注</view>
						<view class="input_wrap">
							<input type="text" v-model="remark" placeholder="请添加备注信息" />
						</view>
					</view>
					<view class="flex flex_end">
						<view class="btn" @click="addRemark">确认添加</view>
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
		name: "contract_list",
		data() {
			return {
				remark: "",
				timeStr: "留资",
				list: [],
				adMainPlat: commonData.adMainPlat,
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
				ifSele: false,
				status: commonData.workerStatus,
				workerStatus: "all",
				pagination: {},
				showMask: false,
				showSecond: false,
				showMark: false,
				currentPage: 1,
				currentInfo: {
					"broker_mobile": "",
					"broker_name": "",
					"code": "",
					"content": "",
					"id": "",
					"name": "",
					"work_address": "",
					"worker_salary": "",
					"worker_welfare": ""
				},
				searEmployee: "",
				searPro: "",
				searStart: "",
				searEnd: "",
				currentCount: 15,
				currentMarkRecord: null
				// selectProId: []
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
			showProjectDetail(item) {
				let url = "/admin/project/" + item.project_id
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.currentInfo = res.data
						this.showMask = true
						this.showSecond = true
					}
				})
			},
			toMark(item) {
				this.currentMarkRecord = item
				this.showMask = true
				this.showMark = true
			},
			toNext(e1, e2) {
				this.currentPage = e1
				this.currentCount = e2
				this.getList()
			},
			navigate(obj, id) {
				this.setPageName(obj, id)
			},
			getList() {
				let url = "/admin/lead-information?page=" + this.currentPage + "&page_size=" + this.currentCount +
					"&worker_keyword=" + this.searEmployee + "&project_keyword=" + this.searPro + "&create_time_start=" +
					this.searStart + "&create_time_end=" + this.searEnd
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.pagination = res.data.pagination
					}
				})
			},
			addRemark() {
				let url = "/admin/lead-information/" + this.currentMarkRecord.id + "/remarks"
				let data = {
					"remark": this.remark
				}
				this.$request(url, data, "POST").then(res => {
					if (res.code == 0) {
						uni.showModal({
							title: "添加成功",
							showCancel: false
						})
						this.close()
						this.getList()
					}
				})
			},
			handleSearch(e) {
				this.currentPage = 1
				this.searEmployee = e.employeeName
				this.searPro = e.projectName
				this.searStart = e.startTime
				this.searEnd = e.endTime
				this.getList()
			},

			close() {
				this.showMask = false
				this.showSecond = false
				this.showMark = false
				this.remark = ""
			},
		}
	}
</script>

<style lang="scss">
	::v-deep {
		.search_box {
			margin: 0;
		}

		.uni-table .uni-table-tr:nth-child(n + 2):hover {
			background-color: #dce4fa;
			cursor: pointer;
		}

		.uni-stat__select {
			width: 130px;
			display: block;
			flex: 0.2;
		}

		.uni-select {
			font-size: 15px;
			height: 50px;
		}
	}

	.sele_area {
		width: 100px;
	}

	.report {
		::v-deep {
			.uni-scroll-view-content {
				display: block;
			}
		}

		.report_item {
			margin-bottom: 40px;

			&:last-child {
				margin-bottom: 0;
			}

			.tit {
				font-weight: 600;
				font-size: 15px;
				margin-bottom: 15px;
			}

			.list {
				.item {
					align-items: start;

					image {
						width: 35px;
						height: 35px;
						border-radius: 50%;
					}

					.item_bot {
						padding: 10px;
						box-sizing: border-box;
						border-radius: 10px;
					}

					.line {
						max-width: 70%;
						padding: 0 10px;
						box-sizing: border-box;
						margin-bottom: 20px
					}

					&.from_customer {
						.line {
							.item_bot {
								background: #f6f6f6;

							}
						}

						// float: left;


					}

					&.from_system {
						.line {
							.item_top {
								text-align: right;
							}

							.item_bot {
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

	.labels {
		.label {
			padding: 5px 15px;
			background: #e7ebef;
			border-radius: 6px;
			margin-right: 15px;
			font-size: 14px;
			cursor: pointer;

			&.active {
				background: #0092ff;
				color: #fff;
			}
		}
	}

	.text_area {
		margin-top: 15px;

		textarea {
			min-height: 60px;
			border: 1px solid #ddd;
			width: 100%;
			padding: 10px;
			box-sizing: border-box;
			border-radius: 6px;
		}
	}

	.btns {
		margin-top: 15px;

		.btn {
			margin-left: 15px;

			&.cancel {
				background: #e7ebef;
				color: #333;
			}
		}
	}

	.add_follow {
		input {
			height: 40px;
			width: 340px;
			border: 1px solid #ccc;
			border-radius: 6px;
			outline: none;
			padding: 0 10px;
			margin-right: 15px;
		}
	}

	.follow_record {
		margin-top: 30px;
		position: relative;

		&::before {
			content: "";
			width: 2px;
			height: 100%;
			background: #ddd;
			position: absolute;
			top: 0;
			left: 4px;
		}

		.follow_item {
			margin-bottom: 20px;
			padding-left: 20px;
			box-sizing: border-box;
			position: relative;

			&::before {
				content: "";
				width: 10px;
				height: 10px;
				background: #0092ff;
				border-radius: 50%;
				position: absolute;
				top: 5px;
				left: 0;
			}

			.follow_cont {
				color: #333;
				margin-bottom: 8px;
			}

			.follow_time {
				font-size: 14px;
				color: #5a5a5a;

				.status {
					margin-left: 10px;
					color: #ff8b07;
				}
			}
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

	.showmore {
		width: 100%;
		text-align: center;
		margin: 15px 0;
		cursor: pointer;

		view {
			display: inline-block;
			color: #0F90FF;
		}

		image {
			width: 20px;
			vertical-align: middle;
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

	.box {
		.line {
			.tit {
				width: auto;
				white-space: nowrap;
				font-weight: 600;
				margin-right: 10px;
			}
		}

		.box_item {
			.tit {
				width: auto;
				white-space: nowrap;
			}

			&:nth-child(2) {
				padding-left: 20px;

				.title {
					height: 40px;
					line-height: 40px;
					margin: 0;
					padding-left: 0;

					&:before {
						display: none;
					}
				}
			}

			.l_tabs {
				.l_tab {
					padding-left: 15px;
					width: 80px;
					height: 40px;
					line-height: 40px;

					&:hover {
						color: #1890FF;
						cursor: pointer;
					}

					&.active {
						background: #E7F7FF;
						color: #1890FF;
						border-right: 3px solid #1890FF;
					}

					.mark {
						display: inline-block;
						margin-left: 10px;
						color: #f00;
					}
				}
			}
		}

		.box_right {
			width: calc(100% - 80px);
		}
	}

	.mask {
		.inner {
			.title {
				position: relative;
				margin-bottom: 30px;
				font-weight: 600;

				text {
					position: absolute;
					font-size: 14px;
					top: 50%;
					right: 0;
					transform: translateY(-50%);
					color: $base-color;
				}
			}

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

			.setting_box {
				width: 100%;
				height: 100%;
				background: rgba(0, 0, 0, 0.5);
				position: absolute;
				top: 0;
				left: 0;
				z-index: 100;

				.set_inner {
					width: 230px;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					z-index: 100;
					background: #fff;
					padding: 20px;
					border-radius: 6px;

					.subtit {
						font-size: 18px;
					}

					.line {
						padding-left: 10px;
						margin: 20px 0;

						.tit {
							width: 90px;
						}

						.input_wrap {
							width: calc(100% - 70px);
							height: 40px;
							line-height: 40px;
							border: 1px solid #eee;

							input {
								height: 40px;
								padding-left: 10px;
							}
						}
					}
				}

			}
		}
	}

	.mask {
		.inner {
			padding-top: 50px;

			.inner_top {
				width: 100%;
				height: 50px;
				position: absolute;
				top: 0;
				left: 0;
			}

			.box {
				height: calc(100% - 50px);
				max-height: calc(100% - 50px);
				box-sizing: border-box;

				.report {
					::v-deep {
						.uni-scroll-view-content {
							display: block;
						}
					}
				}

				::v-deep {
					.uni-scroll-view-content {
						display: flex;
						justify-content: flex-start;
						align-items: start;
						flex-wrap: wrap;
					}
				}
			}

		}
	}
</style>