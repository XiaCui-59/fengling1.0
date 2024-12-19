<template>
	<view class="board">
		<view class="box">
			<view class="title">企业微信群聊</view>
			<!-- <view class="flex flex_btween" style="align-items: end;">
				<searchBox :showChannelStatus="true" :showRange="true" :seleStatus="channelStatusValue"
					:searStart="searStart" :searEnd="searEnd" timeStr="生成" @handleSearch="handleSearch">
				</searchBox>
			</view> -->

			<view class="table_wrap">
				<uni-table border stripe emptyText="暂无更多数据">
					<uni-tr style="background: #f6f6f6;">
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">序号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">群聊ID</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">群名称</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">群成员数</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">群二维码</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">群公告</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">操作</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in list">
						<uni-td align="center">{{index+1+currentCount*(currentPage - 1)}}</uni-td>
						<uni-td align="center">{{item.id}}</uni-td>
						<uni-td align="center">{{item.name}}</uni-td>
						<uni-td align="center">{{item.member_count}}</uni-td>
						<uni-td align="center">
							<view class="qrcode" @click="prevImage(item)" style="cursor: pointer;">
								<image :src="item.qrcode" mode="widthFix" style="width:100px;"></image>
							</view>
						</uni-td>
						<uni-td align="center">
							<view class="notice"
								style="width:200px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;cursor: pointer;color:#0092ff;"
								@click="showNotice(item)">
								{{item.notice}}
							</view>
						</uni-td>
						<uni-td style="padding:8px 0px;">
							<view class="ope flex flex_around">
								<view class="ope_item edit" @click="toUpdateQrcode(item)">
									<image src="/static/ic_btn_sign.png" mode="heightFix"></image>
									更新二维码
								</view>
							</view>
						</uni-td>
					</uni-tr>
				</uni-table>
				<pageBox :page="pagination" @toNext="toNext"></pageBox>
			</view>
		</view>
		<view class="mask" v-if="showMask">
			<view class="inner" v-if="showAdd" style="width:40%;max-height: 800px;">
				<view class="title">更新二维码（{{currentDetail.name}}）</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box" style="padding-top:20px;">
					<view class="upload" @click="uploadImg('wework_external_group_qrcode')">
						<view class="loadimg" v-if="currentCode.url">
							<image :src="currentCode.url" mode="widthFix"></image>
						</view>
						<view class="innerimg" v-if="!currentCode.url">
							<image src="/static/add.png" style="width:50px;height:50px;"></image>
							<view class="text" style="white-space: nowrap;">上传群聊二维码</view>
						</view>
					</view>
					<view class="line flex flex_end" style="margin-top:15px;">
						<view class="btn" @click="confirmAdd" style="width:200px;">确认创建</view>
					</view>
				</view>
			</view>
			<view class="inner" v-if="showNote" style="width:40%;max-height: 800px;">
				<view class="title">群公告（{{currentDetail.name}}）</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box" style="padding-top:20px;">
					<view style="line-height: 30px;text-indent: 2rem;">{{currentDetail.notice}}</view>
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
				list: [],
				pagination: {},
				showMask: false,
				showAdd: false,
				showNote: false,
				currentPage: 1,
				searStart: "",
				searEnd: "",
				currentCount: 15,
				currentDetail: {},
				currentCode: {
					url: "",
					key: ""
				}
			};
		},
		components: {
			searchBox,
			pageBox
		},
		created() {
			// console.log("时间1：", this.searStart, this.searEnd)
			// let paramArr = []
			// if (location.href.indexOf("?") != -1) {
			// 	paramArr = location.href.split("?")[1].split("&")
			// }
			// for (var i = 0; i < paramArr.length; i++) {
			// 	if (paramArr[i].indexOf("status") != -1) {
			// 		this.channelStatusValue = paramArr[i].split("=")[1]

			// 	}
			// 	if (paramArr[i].indexOf("start") != -1) {
			// 		this.searStart = paramArr[i].split("=")[1]
			// 	}
			// 	if (paramArr[i].indexOf("end") != -1) {
			// 		this.searEnd = paramArr[i].split("=")[1]
			// 	}
			// 	if (paramArr[i].indexOf("pgindex") != -1) {
			// 		this.currentPage = paramArr[i].split("=")[1]
			// 	}
			// }
			this.getList()
		},
		methods: {
			toUpdateQrcode(item) {
				this.showMask = true
				this.showAdd = true
				this.currentDetail = item
			},
			showNotice(item) {
				this.currentDetail = item
				this.showMask = true
				this.showNote = true
			},
			confirmAdd() {
				let url = "/admin/wework/external/group/" + this.currentDetail.id +
					"/qrcode"
				let data = {
					"qrcode": this.currentCode.key
				}
				this.$request(url, data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: "更新成功",
							duration: 2000
						})
						this.close()
						this.getList()
						this.resetData()
					}
				})
			},
			prevImage(item) {
				let urls = []
				urls.push(item.qrcode)
				uni.previewImage({
					urls: urls
				})
			},
			uploadImg(type) {
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
								_this.currentCode = response.data
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
			resetData() {
				this.currentDetail = {}
				this.currentCode = {
					url: "",
					key: ""
				}
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
				let url = "/admin/wework/external/groups?page=" + this.currentPage + "&page_size=" + this.currentCount
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.pagination = res.data.pagination
					}
				})
			},
			handleSearch(e) {
				this.currentPage = 1
				this.channelStatusValue = e.channelStatusValue
				this.searStart = e.startTime
				this.searEnd = e.endTime
				this.getList()
			},
			close() {
				this.showMask = false
				this.showAdd = false
				this.showNote = false
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

	.upload {
		width: 200px;
		height: 200px;
		margin: 0 auto;
		border: 1px solid #e9e9e9;
		border-radius: 20px;
		position: relative;

		.loadimg {
			width: 100%;

			image {
				width: 100%;
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

	.inner_page {
		margin-top: 15px;

		.page_btn {
			padding: 5px 15px;
			border-radius: 4px;
			border: 1px solid #d4d4d4;
			margin-right: 15px;
			cursor: pointer;

			&:not(:nth-child(2)):hover {
				border: 1px solid #226FF9;
				color: #226FF9;
			}

			&:last-child {
				margin-right: 0;
			}
		}
	}

	.search_btn:hover {
		color: #226FF9;
		font-weight: 600;
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

	.table_wrap {

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