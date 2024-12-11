<template>
	<view class="board">
		<view class="box">
			<view class="title">主播账号</view>
			<searchBox :showName="true" @handleSearch="handleSearch">
			</searchBox>
			<view class="table_wrap">
				<view class="tabs flex flex_start">
					<view class="tab" v-for="(item,index) in tabs" :class="currentTab.value==item.value?'active':''"
						@click="changeTab(item)">{{item.text}}</view>
				</view>
				<view class="btns flex flex_end">
					<view class="btn" @click="showAdd('')" style="margin-bottom: 15px;">添加主播账号</view>
				</view>
				<uni-table border stripe emptyText="暂无更多数据">
					<uni-tr style="background: #f6f6f6;">
						<!-- <uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">序号</uni-th> -->
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">主播code</uni-th>
						<!-- <uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">姓名</uni-th> -->
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">艺名</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">联系电话</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">性别</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">状态</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">注册时间</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">操作</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in list" :key="index">
						<uni-td align="center">{{item.code}}</uni-td>
						<!-- <uni-td align="center">{{item.name}}</uni-td> -->
						<uni-td align="center">{{item.stage_name}}</uni-td>
						<uni-td align="center">{{item.mobile}}</uni-td>
						<uni-td align="center">{{gender.filter(el=>{return el.value == item.gender})[0].text}}</uni-td>
						<uni-td align="center">{{item.status=="normal"?"正常":"已冻结"}}</uni-td>
						<uni-td align="center">{{item.create_time}}</uni-td>
						<uni-td align="center" style="padding:8px 0px;">
							<view class="ope flex flex_around">
								<view class="ope_item" :class="item.status == 'normal'?'frozen':'unfrozen'"
									@click="frozen(item)">
									<image
										:src="item.status == 'normal'?'/static/ic_btn_frozen.png':'/static/ic_btn_unfrozen.png'"
										mode="heightFix"></image>
									{{item.status=="normal"?"冻结":"解冻"}}
								</view>
								<view class="ope_item edit" @click="showAdd(item)">
									<image src="/static/ic_btn_edit.png" mode="heightFix"></image>
									编辑
								</view>
							</view>
						</uni-td>
					</uni-tr>
				</uni-table>
				<pageBox :page="pagination" @toNext="toNext"></pageBox>
			</view>
		</view>
		<view class="mask" v-if="showMask">
			<view class="inner" style="width:500px;">
				<view class="title">添加主播账号</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<!-- <view class="line flex flex-start">
						<view class="tit">姓名：</view>
						<view class="input_wrap">
							<input type="text" v-model="name" placeholder="请输入主播真实姓名"
								placeholder-style="font-size:15px;" />
						</view>
					</view> -->
					<view class="line flex flex-start">
						<view class="tit">艺名：</view>
						<view class="input_wrap">
							<input type="text" v-model="artName" placeholder="请输入主播艺名"
								placeholder-style="font-size:15px;" />
						</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">电话：</view>
						<view class="input_wrap">
							<input type="text" v-model="mobile" placeholder="请输入主播手机号"
								placeholder-style="font-size:15px;" />
						</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">性别</view>
						<radio-group @change="genderChange" class="input_wrap flex flex-start" style="border:none;">
							<label class="uni-list-cell uni-list-cell-pd flex flex-start" style="margin-right:80rpx;"
								v-for="(item, index) in gender" :key="item.value">
								<view>
									<radio :value="item.value" :checked="index === currentGender" color="#106afa"
										style="transform:scale(0.8)" />
								</view>
								<view style="font-size:27rpx;">{{item.text}}</view>
							</label>
						</radio-group>
					</view>
					<view class="line flex flex_end">
						<view class="btn save" @click="addAccount">{{updateId?"更新账号":"确认添加"}}</view>
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
				artName: "",
				name: "",
				mobile: "",
				list: [],
				showMask: false,
				searKeyword: "",
				currentPage: 1,
				pagination: {},
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
				currentTab: {
					value: "",
					text: "全部"
				},
				gender: [{
					value: "male",
					text: "男"
				}, {
					value: "female",
					text: "女"
				}],
				currentGender: 0,
				updateId: "",
				currentCount: 15,
			};
		},
		components: {
			searchBox,
			pageBox
		},
		created() {
			this.getList()
		},
		onReady() {

		},
		watch: {

		},
		methods: {
			genderChange(e) {
				for (let i = 0; i < this.gender.length; i++) {
					if (this.gender[i].value == e.detail.value) {
						this.currentGender = i
					}
				}
			},
			changeTab(item) {
				this.currentPage = 1
				this.currentTab = item
				this.setPageName({
					pageName: "anchor_list"
				})
				this.getList()
			},
			showAdd(item) {
				if (item) {
					this.updateId = item.id
					this.name = item.name
					this.artName = item.stage_name
					this.mobile = item.mobile
					for (let i = 0; i < this.gender.length; i++) {
						if (this.gender[i].value == item.gender) {
							this.currentGender = i
						}
					}
				}
				this.showMask = true
			},
			resetData() {
				this.name = ""
				this.artName = ""
				this.mobile = ""
				this.currentGender = 0
				this.updateId = ""
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
				let url = "/admin/live-hosts?page=" + this.currentPage + "&name=" +
					this.searKeyword + "&page_size=" + this.currentCount + "&status=" + this.currentTab.value
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.pagination = res.data.pagination
					}
				})
			},
			handleSearch(e) {
				this.currentPage = 1
				this.searKeyword = e.keyword
				this.getList()
			},
			close() {
				this.showMask = false
				this.resetData()
			},
			addAccount() {
				let data = {
					// "name": this.name,
					"stage_name": this.artName,
					"mobile": this.mobile,
					"gender": this.gender[this.currentGender].value
				}
				let url = ""
				if (this.updateId) {
					url = "/admin/live-host/" + this.updateId
				} else {
					url = "/admin/live-hosts"
				}
				this.$request(url, data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: (this.updateId ? "更新" : "添加") + "账号成功",
							duration: 2000
						})
						this.close()
						this.getList()
					}
				})
			},
			frozen(item) {
				let _this = this
				let url = ""
				let msg = ""
				let tips = ""
				let confirmText = ""
				let confirmColor = ""
				if (item.status == "normal") {
					url = "/admin/live-host/" + item.id + "/freeze"
					msg = "是否确认冻结账号：" + item.stage_name + "？"
					confirmText = "确认冻结"
					confirmColor = "#f00"
					tips = "冻结成功"
				} else {
					url = "/admin/live-host/" + item.id + "/unfreeze"
					msg = "是否确认解冻账号：" + item.stage_name + "？"
					confirmText = "解冻账号"
					confirmColor = "#21af21"
					tips = "解冻成功"
				}
				uni.showModal({
					title: msg,
					confirmText: confirmText,
					confirmColor: confirmColor,
					success(resp) {
						if (resp.confirm) {
							_this.$request(url, {}, "POST").then(res => {
								if (res.code == 0) {
									uni.showToast({
										title: tips,
										showCancel: false
									})
									_this.getList()
								}
							})
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
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
				.line {
					margin: 15px 0 0 0px;
					padding-left: 0;
				}

				.tit {
					white-space: nowrap;
					margin-right: 15px;
				}

				.input_wrap {
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