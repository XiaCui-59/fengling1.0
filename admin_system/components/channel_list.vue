<template>
	<view class="board">
		<view class="box">
			<view class="title">频道列表</view>
			<view class="flex flex_btween" style="align-items: end;">
				<searchBox :showChannel="true" :showChannelCompany="true" :showChannelStatus="true" :showRange="true"
					timeStr="创建" @handleSearch="handleSearch"></searchBox>
				<view class="btn" @click="openAdd" style="margin-bottom: 15px;">新增</view>
			</view>

			<view class="table_wrap">
				<uni-table border stripe emptyText="暂无更多数据">
					<uni-tr style="background: #f6f6f6;">
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">序号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">频道ID</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">频道名称</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">Logo</uni-th>
						<uni-th align="center" width="200"
							style="font-size: 14px;font-weight: 600;color:#333;">频道描述</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">频道状态</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">所属主体</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">创建时间</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">操作</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in list">
						<uni-td align="center">{{index+1+currentCount*(currentPage - 1)}}</uni-td>
						<uni-td align="center">{{item.id}}</uni-td>
						<uni-td align="center">{{item.name}}</uni-td>
						<uni-td align="center">
							<image :src="item.logo&&item.logo.url?item.logo.url:''" mode="heightFix"
								style="height:50px;"></image>
						</uni-td>
						<uni-td align="center" width="200">
							<view class="desc">{{item.content}}</view>
						</uni-td>
						<uni-td
							align="center">{{status.filter(el=>{return el.value == item.channel_status})[0].text}}</uni-td>
						<uni-td align="center">{{item.company_name}}</uni-td>
						<uni-td align="center">{{item.create_time}}</uni-td>
						<uni-td style="padding:8px 0px;">
							<view class="ope flex flex_around">
								<view class="ope_item detail" @click="showDetail(item)">
									<image src="/static/ic_btn_detail.png" mode="heightFix"></image>详情
								</view>
								<view class="ope_item" @click="handleChannel(item)"
									:class="item.channel_status == 'already_online'?'frozen':'unfrozen'"
									v-if="item.channel_status != 'already_deleted'">
									<image
										:src="item.channel_status == 'already_online'?'/static/ic_btn_frozen.png':'/static/ic_btn_unfrozen.png'"
										mode="heightFix"></image>
									{{item.channel_status=="already_online"?"下线":"上线"}}
								</view>
								<view class="ope_item refuse" v-if="item.channel_status == 'pending_online'"
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
			<view class="inner" v-if="showAdd" style="width:50%;">
				<view class="title">添加频道</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<view class="line flex flex-start">
						<view class="tit">Logo</view>
						<view class="input_wrap uploadCard flex flex-start" @click="uploadImg('avatar')">
							<view class="loadimg" v-if="showlogo">
								<image :src="logoImg.url" mode="heightFix"></image>
							</view>
							<view class="innerimg" v-if="!showlogo">
								<image src="/static/add.png" style="width:50px;height:50px;"></image>
								<view class="text">上传频道logo</view>
							</view>
						</view>
						<!-- <view class="tips">（上传执照后自动识别并填充下方信息，请仔细核对是否有误）</view> -->
						<!-- <view class="preview" v-if="showyyzz" @click="toView('yyzz')">预览</view> -->
					</view>
					<view class="line flex flex-start">
						<view class="tit">频道名称</view>
						<view class="input_wrap">
							<input type="text" v-model="name" placeholder="请输入频道名称" />
						</view>
					</view>
					<view class="line flex flex-start" style="flex-wrap: wrap;">
						<view class="tit">所属主体</view>
						<view class="input_wrap">
							<uni-data-select v-model="comValue" :localdata="comRange"
								@change="comChange"></uni-data-select>
						</view>
						<view class="tips" style="width: 100%;">注：若不选择主体，主体将会默认为“风铃官方”</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">频道描述</view>
						<view class="input_wrap" style="height:auto;">
							<textarea v-model="content" placeholder="请输入频道描述"
								style="height: auto;width:100%;min-height: 80px;" />
						</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">Prompt</view>
						<view class="input_wrap" style="height:auto;">
							<textarea v-model="prompt" placeholder="请输入频道prompt"
								style="height: auto;width:100%;min-height: 80px;" />
						</view>
					</view>
					<view class="line flex flex_end">
						<view class="btn" @click="confirmAdd">确认添加</view>
					</view>
				</view>
			</view>
			<view class="inner" v-if="showEdit" style="width:50%;">
				<view class="title">{{editEnable?"编辑频道":"频道详情"}}（{{currentChannel.name}}）</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<view class="line flex flex-start">
						<view class="tit">Logo</view>
						<view class="input_wrap uploadCard flex flex-start" @click="uploadImg('avatar')">
							<view class="loadimg" v-if="currentChannel.logo&&currentChannel.logo.url?true:false">
								<image :src="currentChannel.logo&&currentChannel.logo.url?currentChannel.logo.url:''"
									mode="heightFix"></image>
							</view>
							<view class="innerimg" v-if="currentChannel.logo&&currentChannel.logo.url?false:true">
								<image src="/static/add.png" style="width:50px;height:50px;"></image>
								<view class="text">上传频道logo</view>
							</view>
						</view>
						<!-- <view class="tips">（上传执照后自动识别并填充下方信息，请仔细核对是否有误）</view> -->
						<!-- <view class="preview" v-if="showyyzz" @click="toView('yyzz')">预览</view> -->
					</view>
					<view class="line flex flex-start">
						<view class="tit">频道名称</view>
						<view class="input_wrap" @click="jugeEdit">
							<input type="text" v-model="currentChannel.name" placeholder="请输入频道名称"
								:disabled="!editEnable" />
						</view>
					</view>
					<view class="line flex flex-start" style="flex-wrap: wrap;">
						<view class="tit">所属主体</view>
						<view class="input_wrap" @click="jugeEdit">
							<uni-data-select v-model="comValue" :localdata="comRange"
								@change="comChange"></uni-data-select>
						</view>
						<view class="tips" style="width: 100%;">注：若不选择主体，主体将会默认为“风铃官方”</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">频道描述</view>
						<view class="input_wrap" style="height:auto;" @click="jugeEdit">
							<textarea v-model="currentChannel.content" placeholder="请输入频道描述"
								style="height: auto;width:100%;min-height: 80px;" :disabled="!editEnable" />
						</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">Prompt</view>
						<view class="input_wrap" style="height:auto;" @click="jugeEdit">
							<textarea v-model="currentChannel.prompt" placeholder="请输入频道prompt"
								style="height: auto;width:100%;min-height: 80px;" :disabled="!editEnable" />
						</view>
					</view>
					<view class="line flex flex_end">
						<view class="btn" @click="confirmEdit">{{editEnable?"确认修改":"修改"}}</view>
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
				name: "",
				comValue: "",
				comRange: [{
					value: "",
					text: "风铃官方"
				}],
				prompt: "",
				content: "",
				list: [],
				pagination: {},
				showMask: false,
				showAdd: false,
				showEdit: false,
				currentPage: 1,
				searCompany: "",
				channelName: "",
				channelStatusValue: "",
				searStart: "",
				searEnd: "",
				editEnable: false,
				currentCount: 15,
				showlogo: false,
				logoImg: {
					key: "",
					url: ""
				},
				currentChannel: {

				},
				status: commonData.channelStatus
			};
		},
		components: {
			searchBox,
			pageBox
		},
		created() {
			this.getCompanyList()
			this.getList()
		},
		methods: {
			openAdd() {
				this.showMask = true
				this.showAdd = true
			},
			comChange(e) {},
			showDetail(item) {
				let url = "/admin/channel/channel_info/" + item.id
				this.$request(url).then(res => {
					if (res.code == 0) {
						let company = this.comRange.filter(el => {
							return el.text == res.data.company_name
						})
						this.currentChannel = res.data
						this.currentChannel.id = item.id
						this.comValue = company.length > 0 ? company[0].value : ""
						this.showMask = true
						this.showEdit = true
					}
				})
			},
			getCompanyList() {
				this.$request("/admin/companies/all").then(res => {
					if (res.code == 0) {
						res.data.list.map(el => {
							el.value = el.id
							el.text = el.name
						})
						this.comRange = this.comRange.concat(res.data.list)
					}
				})
			},
			deleteChannel(item) {
				let _this = this
				let url = "/admin/channel/soft_delete/" + item.id
				uni.showModal({
					title: "是否确认删除频道：" + item.name + "？",
					confirmText: "确认删除",
					confirmColor: "#f00",
					success(resp) {
						if (resp.confirm) {
							_this.$request(url, {}, "POST").then(res => {
								if (res.code == 0) {
									uni.showToast({
										title: "该频道已删除",
										icon: "none",
										duration: 3000
									})
									_this.getList()
								}
							})
						}
					}
				})
			},
			handleChannel(item) {
				let _this = this
				let url = ""
				if (item.channel_status == "pending_online") {
					// 上线操作
					url = "/admin/channel/online/" + item.id
					uni.showModal({
						title: "是否确认上线频道：" + item.name + "？",
						confirmText: "确认上线",
						confirmColor: "#0092ff",
						success(resp) {
							if (resp.confirm) {
								_this.$request(url, {}, "POST").then(res => {
									if (res.code == 0) {
										uni.showToast({
											title: "该频道已上线",
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
					url = "/admin/channel/offline/" + item.id
					uni.showModal({
						title: "是否确认下线频道：" + item.name + "？",
						confirmText: "确认下线",
						confirmColor: "#f00",
						success(resp) {
							if (resp.confirm) {
								_this.$request(url, {}, "POST").then(res => {
									if (res.code == 0) {
										uni.showToast({
											title: "该频道已下线",
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
			jugeEdit() {
				let _this = this
				if (this.showEdit && !this.editEnable) {
					uni.showModal({
						title: "是否要编辑该频道？",
						confirmText: "编辑",
						success(res) {
							if (res.confirm) {
								_this.confirmEdit()
							}
						}
					})
					return false
				} else {
					return true
				}
			},
			uploadImg(type) {
				if (this.jugeEdit()) {
					uni.chooseImage({
						count: 1,
						sizeType: ["original", "compressed"],
						sourceType: ["album", "camera"],
						success: (res) => {
							const tempFilePaths = res.tempFilePaths;
							uni.showLoading({
								title: "上传中，请稍后"
							})
							this.loadimg(type, tempFilePaths[0])
						},
						fail(res) {
							console.log(res)
						}
					})
				}



			},
			async loadimg(type, filePath) {
				var _this = this;
				let header = {
					"Authorization": "bearer " + uni.getStorageSync("token"),
					"accept": "application/json"
				}
				return new Promise((resolve, reject) => {
					uni.uploadFile({
						url: app.globalData.baseUrl + "/admin/upload?type=" + type,
						filePath: filePath,
						name: "file",
						header: header,
						success(resp) {
							var response = JSON.parse(resp.data);
							if (response.code == 0) {
								uni.showToast({
									title: "图片上传成功"
								})
								if (_this.editEnable) {
									_this.currentChannel.logo = response.data
								} else {
									_this.showlogo = true
									_this.logoImg = response.data
								}

							} else {
								uni.showModal({
									title: response.msg,
									showCancel: false
								})
							}
						},
						complete() {
							uni.hideLoading();
						}
					})
					resolve(_this.reponsefiles)
				})
			},
			confirmEdit() {
				if (this.editEnable) {
					let company = this.comRange.filter(el => {
						return el.value == this.comValue
					})
					let data = {
						"channel_name": this.currentChannel.name,
						"company_id": this.comValue,
						"company_name": company.length > 0 ? company[0].text : "",
						"content": this.currentChannel.content,
						"prompt": this.currentChannel.prompt,
						"logo": this.currentChannel.logo
					}
					let url = "/admin/channel/edit_channel/" + this.currentChannel.id
					this.$request(url, data, "POST").then(res => {
						if (res.code == 0) {
							uni.showToast({
								title: "修改成功",
								duration: 3000
							})
							this.getList()
							this.resetData()
							this.close()
						}
					})
				} else {
					this.editEnable = true
				}

			},
			confirmAdd() {
				let company = this.comRange.filter(el => {
					return el.value == this.comValue
				})
				let data = {
					"channel_name": this.name,
					"company_id": this.comValue,
					"company_name": company.length > 0 ? company[0].name : "",
					"content": this.content,
					"prompt": this.prompt,
					"logo": this.logoImg
				}
				let url = "/admin/channel/add"
				this.$request(url, data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: "频道添加成功",
							duration: 3000
						})
						this.getList()
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
				this.comValue = ""
				this.content = ""
				this.prompt = ""
				this.editEnable = false
				this.showlogo = false
				this.logoImg = {
					key: "",
					url: ""
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
				let url = "/admin/channel/list?page=" + this.currentPage + "&company_name=" + this.searCompany +
					"&channel_id_or_name=" + this.channelName +
					"&start_time=" + this.searStart + "&end_time=" + this.searEnd + "&channel_status=" + this
					.channelStatusValue +
					"&page_size=" + this.currentCount
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.pagination = res.data.pagination
					}
				})
			},
			handleSearch(e) {
				this.currentPage = 1
				this.searCompany = e.channelCompany
				this.channelName = e.channelName
				this.channelStatusValue = e.channelStatusValue
				this.searStart = e.startTime
				this.searEnd = e.endTime
				this.getList()
			},
			close() {
				this.showMask = false
				this.showAdd = false
				this.showEdit = false
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