<template>
	<view class="board">
		<view class="title flex flex-start" style="margin-bottom:15px;font-size:20px;font-weight:600;">
			<view>{{userInfo.name}}</view>
			<view class="back" style="font-weight:500;color:#1E8EEE;font-size:16px;cursor: pointer;margin-left:10px;"
				@click="back">
				<image src="/static/back_blue.png" mode="widthFix" style="width:18px;height:18px;margin-right:5px;">
				</image>
				<text>返回</text>
			</view>
		</view>
		<view class="box flex flex-start" style="align-items: start;padding-left:0;">
			<view class="box_item">
				<view class="l_tabs">
					<!-- <view class="l_tab" :class="currentMainTab==0?'active':''" @click="changeMainTab(0)">账号管理</view> -->
					<view class="l_tab" :class="currentMainTab==1?'active':''" @click="changeMainTab(1)">基本信息</view>
					<!-- <view class="l_tab" :class="currentMainTab==2?'active':''" @click="changeMainTab(2)">两证信息</view> -->
				</view>
			</view>
			<!-- <view class="box_item box_right" v-if="currentMainTab == 0">
				<view class="title">账号管理</view>
				<searchBox :showAccount="true" @handleSearch="handleSearch"></searchBox>
				<view class="table_wrap">
					<view class="tabs flex flex_start">
						<view class="tab" v-for="(item,index) in tabs" :class="currentTab.value==item.value?'active':''"
							@click="changeTab(item)">{{item.text}}</view>
					</view>
					<view class="btns flex flex_end">
						<view class="btn" @click="add" style="color:#fff;margin-bottom:15px;">新增</view>
					</view>
					<uni-table border stripe emptyText="暂无更多数据">
						<uni-tr style="background: #f6f6f6;">
							<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">用户姓名</uni-th>
							<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">身份证号</uni-th>
							<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">手机号</uni-th>
							<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">所在城市</uni-th>
							<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">状态</uni-th>
							<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">创建时间</uni-th>
							<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">操作时间</uni-th>
							<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">操作</uni-th>
						</uni-tr>
						<uni-tr v-for="(item,index) in list">
							<uni-td align="center">{{item.name}}</uni-td>
							<uni-td align="center">{{item.id_card_number}}</uni-td>
							<uni-td align="center">{{item.mobile}}</uni-td>
							<uni-td align="center">{{item.city}}</uni-td>
							<uni-td align="center">{{item.status=="normal"?"正常":"已冻结"}}</uni-td>
							<uni-td align="center">{{item.create_time}}</uni-td>
							<uni-td align="center">{{item.operation_time}}</uni-td>
							<uni-td style="padding:8px 0px;">
								<view class="ope flex flex_around">
									<view class="ope_item" @click="handleAccount(item)">
										{{item.status=="normal"?"冻结":"解冻"}}
									</view>
									<view class="ope_item" v-if="item.status=='normal'" @click="toEdit(item)">编辑
									</view>
								</view>
							</uni-td>
						</uni-tr>
					</uni-table>
					<pageBox :page="pagination" @toNext="toNext"></pageBox>
				</view>
			</view> -->
			<view class="box_item box_right" v-if="currentMainTab == 1">
				<view class="title">基本信息</view>
				<view class="wrap">
					<view class="box">
						<!-- 基本信息 -->
						<view class="item flex flex_btween">
							<view class="item_box">
								<view class="line flex flex-start" style="margin-bottom:20px;">
									<view class="tit">营业执照</view>
									<view class="input_wrap uploadCard flex flex-start">
										<view class="loadimg idcardImg">
											<image :src="userInfo.business_license_image.url" mode="heightFix"></image>
										</view>
									</view>
								</view>
								<view class="line flex flex-start">
									<view class="tit">公司logo</view>
									<view class="input_wrap uploadCard flex flex-start">
										<view class="loadimg idcardImg">
											<image :src="userInfo.logo.url" mode="heightFix"></image>
										</view>
									</view>
								</view>
							</view>
							<view class="item_box">
								<view class="line flex flex-start">
									<view class="tit">公司名称</view>
									<view class="input_wrap">{{userInfo.name}}</view>
								</view>
								<view class="line flex flex-start">
									<view class="tit">统一信用代码</view>
									<view class="input_wrap">{{userInfo.unified_social_credit_code}}</view>
								</view>
								<view class="line flex flex-start">
									<view class="tit">公司类型</view>
									<view class="input_wrap">{{userInfo.type}}</view>
								</view>
								<view class="line flex flex-start">
									<view class="tit">所在城市</view>
									<view class="input_wrap">{{userInfo.city}}</view>
								</view>
								<view class="line flex flex-start">
									<view class="tit">办公地址</view>
									<view class="input_wrap">{{userInfo.business_address}}</view>
								</view>
								<view class="line flex flex-start">
									<view class="tit">法人姓名</view>
									<view class="input_wrap">{{userInfo.legal_person_name}}</view>
								</view>
								<view class="line flex flex-start">
									<view class="tit">联系电话</view>
									<view class="input_wrap">{{userInfo.legal_person_mobile}}</view>
								</view>
							</view>
						</view>
					</view>
					<view class="btns flex flex_around">
						<view class="btn" @click="navigate">修改资料</view>
					</view>
				</view>
			</view>
			<!-- <view class="box_item box_right" v-if="currentMainTab == 2">
				<view class="title">两证信息 <text class="tips">（劳务派遣证、人力资源许可证）</text> </view>
				<view class="wrap two_card flex flex_btween">
					<view class="item">
						<view class="uploadCard">
							<view class="loadimg idcardImg">
								<image :src="userInfo.labor_dispatch_permit_image" mode="heightFix"></image>
							</view>
						</view>
					</view>
					<view class="item">
						<view class="uploadCard">
							<view class="loadimg idcardImg">
								<image :src="userInfo.human_resources_permit_image" mode="heightFix"></image>
							</view>
						</view>
					</view>
				</view>
				<view class="btns flex flex_around">
					<view class="btn" @click="navigate" style="width: 160px;color:#fff;">修改资料</view>
				</view>
			</view> -->
		</view>
		<view class="mask" v-if="showMask">
			<view class="inner">
				<view class="title">{{addType=="add"?"添加":"编辑"}}账号（{{userInfo.name}}）</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<view class="line flex flex-start">
						<view class="tit">姓名</view>
						<view class="input_wrap">
							<input type="text" v-model="name" placeholder="请输入业务员姓名" />
						</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">身份证号</view>
						<view class="input_wrap">
							<input type="text" v-model="idCard" placeholder="请输入业务员身份证号" />
						</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">电话</view>
						<view class="input_wrap">
							<input type="text" v-model="mobile" placeholder="请输入业务员电话" />
						</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">城市</view>
						<view class="input_wrap">
							<input type="text" v-model="city" placeholder="请输入业务员所在城市" />
						</view>
					</view>
					<view class="line flex flex_end">
						<view class="btn" style="color:#fff;" @click="confirmAdd">确认{{addType=="add"?"添加":"更新"}}</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import searchBox from "@/components/search_box.vue"
	import pageBox from "@/components/paging_box.vue"
	// import pickerAddress from '@/components/pickaddress.vue';
	function getToday(parm) {
		let date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
		if (month < 10) {
			month = "0" + month
		}
		if (day < 10) {
			day = "0" + day
		}
		if (parm == "month") {
			return year + "-" + month
		} else {
			return year + "-" + month + "-" + day
		}


	}
	const app = getApp()
	export default {
		name: "broker_detail",
		data() {
			return {
				currentMainTab: 1,
				showConfirm: true,
				list: [],
				tabs: [{
						value: "",
						text: "全部"
					},
					{
						value: "normal",
						text: "正常"
					},
					{
						value: "frozen",
						text: "冻结"
					}
				],
				addType: "add",
				currentTab: {
					value: "",
					text: "全部"
				},
				userInfo: {
					"business_address": "",
					"business_license_image": "",
					"city": "",
					"create_time": "",
					"id": "",
					"legal_person_mobile": "",
					"legal_person_name": "",
					"logo": "",
					"name": "",
					"status": "",
					"type": "",
					"unified_social_credit_code": ""
				},
				showMask: false,
				currentPage: 1,
				currentCount: 15,
				pagination: {},
				searAccount: "",
				id: "",
				name: "",
				idCard: "",
				mobile: "",
				city: "",
				currentBroker: {}
			};
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
			}
			this.getInfo()
			this.getList()
		},
		components: {
			searchBox,
			pageBox
		},
		methods: {
			back() {
				this.setPageName({
					pageName: "broker_list"
				})
				this.$emit("getPageName", {
					pageName: "broker_list"
				})
			},
			toNext(e1, e2) {
				this.currentPage = e1
				this.currentCount = e2
				this.getList()
			},
			changeMainTab(index) {
				this.currentMainTab = index
			},
			toEdit(item) {
				this.addType = "edit"
				this.currentBroker = item
				this.showMask = true
				this.name = item.name
				this.mobile = item.mobile
				this.idCard = item.id_card_number
				this.city = item.city

			},
			close() {
				this.showMask = false
				this.resetData()
			},
			add() {
				this.showMask = true
			},
			changeTab(item) {
				this.currentPage = 1
				this.currentTab = item
				this.getList()
			},
			navigate() {
				this.setPageName({
					pageName: "edit_broker"
				}, this.id)
				this.$emit("getPageName", {
					pageName: "edit_broker"
				})
			},
			confirmAdd() {
				let data = {
					"name": this.name,
					"id_card_number": this.idCard,
					"mobile": this.mobile,
					"city": this.city
				}
				if (this.addType == "edit") {
					let url = "/admin/broker/" + this.currentBroker.id
					this.$request(url, data, "POST").then(res => {
						if (res.code == 0) {
							uni.showToast({
								title: "更新成功",
								duration: 3000
							})
							this.getList()
							this.close()
						}
					})
				} else {
					let url = "/admin/company/" + this.userInfo.id + "/brokers"
					this.$request(url, data, "POST").then(res => {
						if (res.code == 0) {
							uni.showToast({
								title: "添加成功",
								duration: 3000
							})
							this.getList()
							this.close()
						}
					})
				}

			},
			resetData() {
				this.name = ""
				this.idCard = ""
				this.city = ""
				this.mobile = ""
				this.addType = "add"
				this.currentBroker = {}
			},
			handleAccount(item) {
				let _this = this
				let url = ""
				if (item.status == "normal") {
					url = "/admin/broker/" + item.id + "/freeze"
					uni.showModal({
						title: "是否确认冻结账户：" + item.name + "？",
						success(resp) {
							if (resp.confirm) {
								_this.$request(url, {}, "POST").then(res => {
									if (res.code == 0) {
										uni.showToast({
											title: "该账户已冻结",
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
					url = "/admin/broker/" + item.id + "/unfreeze"
					uni.showModal({
						title: "是否确认解冻账户：" + item.name + "？",
						success(resp) {
							if (resp.confirm) {
								_this.$request(url, {}, "POST").then(res => {
									if (res.code == 0) {
										uni.showToast({
											title: "该账户已解冻",
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
			handleSearch(e) {
				this.currentPage = 1
				this.searAccount = e.account
				this.getList()
			},
			getInfo() {
				let url = "/admin/company/" + this.id
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.userInfo = res.data
					}
				})
			},
			getList() {
				uni.showLoading({
					title: "努力加载中~"
				})
				let url = "/admin/company/" + this.id + "/brokers?page=" + this.currentPage + "&status=" + this.currentTab
					.value + "&keyword=" + this.searAccount + "&page_size=" + this.currentCount
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.pagination = res.data.pagination
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	::v-deep {
		uni-picker {
			width: 50%;
			padding: 0 15px;
			height: 40px;
			line-height: 40px;
			border: 1px solid #e9e9e9;
			border-radius: 5px;
			margin-right: 20px;
		}

		.uni-select__input-placeholder {
			font-size: 16px;
		}
	}

	.btn {
		margin-right: 10px;
		color: $base-color;
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}
	}

	.edit_btn {
		height: 40px;
		line-height: 40px;
		width: 120px;
		text-align: center;
		border-radius: 6px;
		background: $base-color;
		color: #fff;
		cursor: pointer;
	}

	.img_view {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 100;
		background: rgba(0, 0, 0, 0.6);

		.inner {
			width: 80%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			padding: 15px;
			background: #fff;
			border-radius: 10px;
			box-sizing: border-box;

			.close {
				position: absolute;
				top: 15px;
				right: 15px;
				width: 40px;
				height: 40px;
				z-index: 100;
				cursor: pointer;

				image {
					width: 100%;
					height: 100%;

					&:hover {
						transform: rotate(180deg);
						transition: all 1s;
					}
				}
			}

			.img {
				image {
					width: 100%;
				}
			}
		}
	}

	.board {
		.tips {
			font-size: 16px;
			font-weight: normal;
			color: #f00;
		}

		.box {

			// padding-left: 0;
			.box_item {
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

		.two_card {
			.item {
				width: 49%;

				.uploadCard {
					width: 100%;
					height: 200px;
					border: 1px solid #e9e9e9;
					border-radius: 20px;
					position: relative;
					margin-bottom: 20px;

					.loadimg {
						width: 100%;

						&.idcardImg {
							image {
								height: 200px;
								width: auto;
								max-width: 100%;
								margin: 0 auto;
								display: block;
							}
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
			}
		}

		.wrap {
			max-width: 1200px;
			background: #ffffff;
			padding: 15px;
			border-radius: 10px;
			box-sizing: border-box;

			.tabs {
				width: 100%;
				margin: 20rpx 0;

				.tab {
					width: 100px;
					height: 50px;
					line-height: 50px;
					text-align: center;
					margin-right: 20px;
					white-space: nowrap;

					&.active {
						font-weight: 600;
						color: #1890FF;
						border-bottom: 2px solid #1890FF;
					}
				}
			}

			.btn {
				width: 160px;
				text-align: center;
				height: 40px;
				line-height: 40px;
				border-radius: 10px;
				background: $base-color;
				color: #fff;
				margin: 0 auto;
			}

			.box {
				padding: 20px 0;
				align-items: start;

				.item {
					width: 100%;
					align-items: start;

					.item_box {
						width: 48%;
					}

					&.left {
						margin-left: 80px;
						width: 40%;
					}

					.line {
						margin-bottom: 22px;
						position: relative;

						.preview {
							position: absolute;
							bottom: 20px;
							left: 100%;
							cursor: pointer;
							color: $base-color;
							white-space: nowrap;

							&:hover {
								color: #1491ff;
								font-weight: 600;
							}
						}

						.tips {
							white-space: nowrap;
							position: absolute;
							left: 100%;
							top: 50%;
							transform: translateY(-50%);
						}

						&.scope {
							align-items: start;
						}

						.tit {
							width: 110px;
						}

						.input_wrap {
							width: calc(100% - 150px);
							position: relative;

							&.uploadCard {
								height: 200px;
								border: 1px solid #e9e9e9;
								border-radius: 20px;
								position: relative;

								.loadimg {
									width: 100%;

									&.idcardImg {
										image {
											height: 200px;
											width: auto;
											margin: 0 auto;
											display: block;
										}
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

							.abso {
								position: absolute;
								top: 50%;
								right: 15px;
								transform: translateY(-50%);
							}

							&.noborder {
								border: none;
							}

							input {
								width: 100%;
								height: 40px;
								padding-left: 15px;
							}

							.option {
								margin-right: 20px;
								cursor: pointer;

								image {
									width: 20px;
									height: 20px;
									margin-right: 5px;
								}
							}

							.long {
								image {
									width: 20px;
									height: 20px;
									margin-right: 5px;
									cursor: pointer;
								}
							}

							textarea {
								padding: 15px;
								height: 70px;
							}
						}
					}
				}
			}
		}
	}
</style>