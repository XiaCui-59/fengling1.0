<template>
	<view class="board">
		<view class="box">
			<view class="title">直播账号</view>
			<searchBox :showName="true" @handleSearch="handleSearch">
			</searchBox>
			<view class="table_wrap">
				<view class="btns flex flex_end">
					<view class="btn" @click="showAdd" style="margin-bottom: 15px;">添加账号</view>
				</view>
				<uni-table border stripe emptyText="暂无更多数据">
					<uni-tr style="background: #f6f6f6;">
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">直播code</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">账号名称</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">创建时间</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">操作</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in list" :key="index">
						<uni-td align="center">{{item.code}}</uni-td>
						<uni-td align="center">{{item.name}}</uni-td>
						<uni-td align="center">{{item.create_time}}</uni-td>
						<uni-td align="center" style="padding:8px 0px;">
							<view class="ope flex flex_around">
								<view class="ope_item delete" @click="deleteLive(item)">
									<image src="/static/ic_btn_delete.png" mode="heightFix"></image>删除
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
				<view class="title">添加账号</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<view class="line flex flex-start">
						<view class="tit">账号名称：</view>
						<view class="input_wrap">
							<input type="text" v-model="accountName" placeholder="请输入直播账号名称"
								placeholder-style="font-size:15px;" />
						</view>
					</view>
					<view class="line flex flex_end">
						<view class="btn save" @click="addAccount">确认添加</view>
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
				accountName: "",
				list: [],
				showMask: false,
				searKeyword: "",
				currentPage: 1,
				pagination: {},
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
		onReady() {

		},
		watch: {

		},
		methods: {
			showAdd() {
				this.showMask = true
			},
			resetData() {
				this.accountName = ""
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
				let url = "/admin/live-accounts?page=" + this.currentPage + "&name=" +
					this.searKeyword + "&page_size=" + this.currentCount
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
					"name": this.accountName
				}
				this.$request("/admin/live-accounts", data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: "添加账号成功",
							duration: 2000
						})
						this.close()
						this.getList()
					}
				})
			},
			deleteLive(item) {
				let _this = this
				let url = "/admin/live-account/" + item.id
				uni.showModal({
					title: "您当前正在删除直播账号账号：" + item.name + "，是否确认删除该账号？",
					confirmText: "确认删除",
					confirmColor: "#f00",
					success(resp) {
						if (resp.confirm) {
							_this.$request(url, {}, "DELETE").then(res => {
								if (res.code == 0) {
									uni.showModal({
										title: "账号已删除",
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