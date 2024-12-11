<template>
	<view class="board">
		<view class="box">
			<view class="title">公司列表</view>
			<view class="flex flex_btween" style="align-items: end;">
				<searchBox :showBroker="true" @handleSearch="handleSearch"></searchBox>
				<view class="btn" @click="navigate({pageName:'add_broker'})" style="margin-bottom: 15px;">新增</view>
			</view>

			<view class="table_wrap">
				<!-- <view class="tabs flex flex_start">
					<view class="tab" v-for="(item,index) in tabs" :class="currentTab.value==item.value?'active':''"
						@click="changeTab(item)">{{item.text}}</view>
				</view> -->
				<uni-table border stripe emptyText="暂无更多数据">
					<uni-tr style="background: #f6f6f6;">
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">序号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">ID</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">公司名称</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">信用代码</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">法人姓名</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">创建时间</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">操作</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in list">
						<uni-td align="center">{{index+1+currentCount*(currentPage - 1)}}</uni-td>
						<uni-td align="center">{{item.id}}</uni-td>
						<uni-td align="center">{{item.name}}</uni-td>
						<uni-td align="center">{{item.unified_social_credit_code}}</uni-td>
						<uni-td align="center">{{item.legal_person_name}}</uni-td>
						<uni-td align="center">{{item.create_time}}</uni-td>
						<uni-td style="padding:8px 0px;">
							<view class="ope flex flex_around">
								<!-- <view class="ope_item add" @click="toAdd(item)" v-if="item.status == 'normal'">
									<image src="/static/ic_btn_add.png" mode="heightFix"></image>添加账号
								</view> -->
								<!-- <view class="ope_item checkin" @click="toSet(item)" v-if="item.status == 'normal'">
									<image src="/static/ic_btn_checkin.png" mode="heightFix"></image>设置费用
								</view> -->
								<!-- <view class="ope_item" @click="handleAccount(item)"
									:class="item.status == 'normal'?'frozen':'unfrozen'">
									<image
										:src="item.status == 'normal'?'/static/ic_btn_frozen.png':'/static/ic_btn_unfrozen.png'"
										mode="heightFix"></image>
									{{item.status=="normal"?"冻结":"解冻"}}
								</view> -->
								<view class="ope_item detail" @click="navigate({pageName:'broker_detail'},item.id)">
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
			<view class="inner" v-if="showAdd" style="width:50%;">
				<view class="title">添加账号 <text
						style="color:#ffff00;position: relative;top:0;font-size: 16px;">（{{currentCompany.name}}）</text>
				</view>
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
							<input type="text" v-model="idcard" placeholder="请输入业务员身份证号" />
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
						<view class="btn" @click="confirmAdd">确认添加</view>
					</view>
				</view>
			</view>
			<view class="inner" v-if="showSet" style="width:50%;">
				<view class="title">设置费用 <text
						style="color:#ffff00;position: relative;top:0;font-size: 16px;">（{{currentCompany.name}}）</text>
				</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<view class="line flex flex-start">
						<view class="tit">单价</view>
						<view class="input_wrap flex flex_btween">
							<input type="text" v-model="price" placeholder="请输入费用单价" />
							<text class="period">元/人</text>
						</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">账期</view>
						<view class="input_wrap flex flex_btween">
							<input type="text" v-model="dateline" placeholder="请输入结算账期" />
							<text class="period">天</text>
						</view>
					</view>
					<view class="line flex flex_end">
						<view class="btn" @click="confirmSet">确认设置</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import searchBox from "@/components/search_box.vue"
	import pageBox from "@/components/paging_box.vue"
	export default {
		name: "broker_list",
		data() {
			return {
				price: "",
				dateline: "",
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
				pagination: {},
				showMask: false,
				showAdd: false,
				showSet: false,
				currentTab: {
					value: "",
					text: "全部"
				},
				currentPage: 1,
				id: "",
				searCompany: "",
				name: "",
				idcard: "",
				mobile: "",
				city: "",
				currentCompany: {

				},
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
			handleAccount(item) {
				let _this = this
				let url = ""
				if (item.status == "normal") {
					url = "/admin/company/" + item.id + "/freeze"
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
					url = "/admin/company/" + item.id + "/unfreeze"
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
			confirmAdd() {
				let data = {
					"name": this.name,
					"id_card_number": this.idcard,
					"mobile": this.mobile,
					"city": this.city
				}
				let url = "/admin/company/" + this.currentCompany.id + "/brokers"
				this.$request(url, data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: "业务员添加成功",
							duration: 3000
						})
						this.resetData()
						this.close()
					}
				})
			},
			confirmSet() {
				let data = {
					"platform_fee_price": Number(this.price),
					"payment_days": Number(this.dateline),
				}
				let url = "/admin/company/" + this.currentCompany.id + "/cost"
				this.$request(url, data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: "费用设置成功",
							duration: 3000
						})
						this.resetData()
						this.close()
					}
				})
			},
			resetData() {
				this.name = ""
				this.idcard = ""
				this.city = ""
				this.mobile = ""
				this.price = ""
				this.dateline = ""
				this.currentCompany = {

				}
			},
			toNext(e1, e2) {
				this.currentPage = e1
				this.currentCount = e2
				this.getList()
			},
			toSet(item) {
				this.showMask = true
				this.showSet = true
				this.currentCompany = item
				let url = "/admin/company/" + item.id + "/cost"
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.price = res.data.platform_fee_price
						this.dateline = res.data.payment_days
					} else {
						this.price = item.platform_fee_price ? item.platform_fee_price : ""
						this.dateline = item.payment_days ? item.payment_days : ""
					}
				})
			},
			changeTab(item) {
				this.currentPage = 1
				this.currentTab = item
				this.setPageName({
					pageName: "broker_list"
				})
				this.getList()
			},
			navigate(obj, id) {
				this.setPageName(obj, id)
				this.$emit("getPageName", obj)
			},
			getList() {
				uni.showLoading({
					title: "努力加载中~"
				})
				let url = "/admin/companies?page=" + this.currentPage + "&status=" + this.currentTab.value + "&name=" +
					this.searCompany + "&page_size=" + this.currentCount
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.pagination = res.data.pagination
					}
				})
			},
			handleSearch(e) {
				this.currentPage = 1
				this.searCompany = e.brokerName
				this.getList()
			},
			close() {
				this.showMask = false
				this.showAdd = false
				this.showSet = false
			},
		}
	}
</script>

<style lang="scss">
	::v-deep {
		.search_box {
			margin: 0;
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

	.mask {
		.inner {
			.input_wrap {
				input {
					width: 100%;
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