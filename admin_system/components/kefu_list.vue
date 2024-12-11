<template>
	<view class="board">
		<view class="box">
			<view class="title">客服列表</view>
			<searchBox :showKefu="true" @handleSearch="handleSearch"></searchBox>
			<view class="table_wrap">
				<!-- <view class="tabs flex flex_start">
					<view class="tab" v-for="(item,index) in tabs" :class="currentTab.value==item.value?'active':''"
						@click="changeTab(item)">{{item.text}}</view>
				</view> -->
				<view class="btns flex flex_end">
					<view class="btn" @click="toAdd">添加客服</view>
				</view>
				<uni-table border stripe emptyText="暂无更多数据">
					<uni-tr style="background: #f6f6f6;">
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">客服ID</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">客服头像</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">客服名称</uni-th>
						<!-- <uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">创建时间</uni-th> -->
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">操作</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in list">
						<uni-td align="center">{{item.open_kfid}}</uni-td>
						<uni-td align="center">
							<image :src="item.avatar" mode="heightFix" style="height:40px;"></image>
						</uni-td>
						<uni-td align="center">{{item.name}}</uni-td>

						<!-- <uni-td align="center">{{item.create_time}}</uni-td> -->
						<uni-td style="padding:8px 0px;">
							<view class="ope flex flex_around">
								<view class="ope_item detail" @click="toDetail(item)">
									<image src="/static/ic_btn_detail.png" mode="heightFix"></image>详情
								</view>
								<view class="ope_item detail" @click="toCreate(item)">
									<image src="/static/ic_btn_add.png" mode="heightFix"></image>生成链接
								</view>
								<view class="ope_item delete" @click="toDelete(item)">
									<image src="/static/ic_btn_delete.png" mode="heightFix"></image>删除
								</view>
							</view>
						</uni-td>
					</uni-tr>
				</uni-table>
				<!-- <pageBox :page="pagination" @toNext="toNext"></pageBox> -->
			</view>
		</view>
		<view class="mask" v-if="showMask">
			<view class="inner" v-if="showCreate" style="width:50%;z-index:100;">
				<view class="title">生成链接（{{currentKefu.name}}）</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<view class="line flex flex-start">
						<view class="tit">场景值</view>
						<view class="input_wrap">
							<uni-data-select v-model="sceneValue" :localdata="sceneRange"
								@change="sceneChange"></uni-data-select>
						</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">直播间</view>
						<view class="input_wrap">
							<uni-data-select v-model="liveValue" :localdata="liveRange"
								@change="liveChange"></uni-data-select>
						</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">主播名</view>
						<view class="input_wrap">
							<uni-data-select v-model="anchorValue" :localdata="anchorRange"
								@change="anchorChange"></uni-data-select>
						</view>
					</view>
					<view class="line flex flex_end">
						<view class="btn cancel"
							style="background: #fff;border:1px solid #226FF9;color:#226FF9;margin-right: 10px;"
							@click="close">取消</view>
						<view class="btn" @click="createLink">生成链接</view>
					</view>
				</view>
			</view>
			<view class="inner" v-if="showAdd" style="width:50%;z-index:100;">
				<view class="title">{{currentKefu.name?"编辑":"添加"}}客服</view>
				<view class="close" @click="closeAdd">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<view class="line flex flex-start">
						<view class="tit">头像</view>
						<view class="input_wrap uploadCard flex flex-start" @click="uploadImg">
							<view class="loadimg" v-if="showAvatar">
								<image :src="imageUrl" mode="widthFix"></image>
							</view>
							<view class="innerimg" v-if="!showAvatar">
								<image src="/static/add.png" style="width:50px;height:50px;"></image>
								<view class="text">上传客服头像</view>
							</view>
						</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">名称</view>
						<view class="input_wrap">
							<input type="text" v-model="name" placeholder="请输入业务员姓名" />
						</view>
					</view>
					<view class="line flex flex_end">
						<view class="btn cancel"
							style="background: #fff;border:1px solid #226FF9;color:#226FF9;margin-right: 10px;"
							@click="close">取消</view>
						<view class="btn" @click="confirmAdd">确认{{currentKefu.name?"修改":"添加"}}</view>
					</view>
				</view>
			</view>
			<view class="inner" v-if="showDetail" style="width:50%;z-index:80;">
				<view class="title">客服详情</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<view class="line flex flex-start">
						<view class="avatar">
							<image :src="currentKefu.avatar" mode="" style="width:50px;height:50px;">
							</image>
						</view>
						<view class="name">{{currentKefu.name}}</view>
						<view class="edit" @click="toAdd">修改</view>
					</view>
					<view class="line">
						<view class="tit">接入链接</view>
						<view class="text flex flex-start" style="margin-top: 15px;color:#5a5a5a;">{{currentKefuLink}}
							<view class="copy" @click="copyLink">复制</view>
						</view>

					</view>
					<view class="line">
						<view class="tit">接待人员</view>
						<view class="kf_list flex flex-start">
							<view class="kf" v-for="(item,index) in sele_kf_list" :key="index">{{item.name}}</view>
						</view>
						<view class="edit" style="margin-left: 0;padding: 0px 15px;" @click="editReceper">修改</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">接待比例</view>
						<view class="input_wrap flex flex-start">
							<input type="text" v-model="aiRate" placeholder="请输入AI接待比例" style="text-align: center;" />
							<text>-</text>
							<input type="text" v-model="receptionistRate" placeholder="请输入人工接待比例"
								style="text-align: center;" />
						</view>
						<view class="edit" @click="editPercent">修改</view>
					</view>
					<!-- <view class="line flex flex_end">
						<view class="btn" @click="confirmSet">确认设置</view>
					</view> -->
				</view>
			</view>
			<view class="inner" v-if="showKf" style="width:50%;z-index:100;">
				<view class="title">选择部门或成员</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box kf_box flex flex_btween" style="align-items: start;margin-top:15px;">
					<view class="left in_box">
						<view class="in_tit">所有成员</view>
						<view class="in_list">
							<view class="in_kf" v-for="(item,index) in kf_list" :key="index"
								:class="item.ifSele?'active':''" @click="checkKf(item,index)">{{item.name}}
							</view>
						</view>
					</view>
					<view class="right in_box">
						<view class="in_tit">已选人员（{{sele_kf_list.length}}）</view>
						<view class="in_list">
							<view class="in_kf_sele flex flex_btween" v-for="(item,index) in sele_kf_list" :key="index">
								{{item.name}}
								<image src="/static/kf_dele_icon.png" mode="" style="width:25px;height:25px;"
									@click="deleKf(item,index)"></image>
							</view>
						</view>
						<view class="btns flex flex_end">
							<view class="btn cancel" @click="close">取消</view>
							<view class="btn confirm" @click="confirmKefu">确定</view>
						</view>
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
	const app = getApp()
	export default {
		name: "broker_list",
		data() {
			return {
				sceneRange: [{
					value: "live_room",
					text: "直播间"
				}],
				sceneValue: "",
				aiRate: "",
				liverName: "",
				receptionistRate: "",
				imageUrl: "",
				showAvatar: false,
				list: [],
				pagination: {},
				showMask: false,
				showAdd: false,
				showDetail: false,
				showCreate: false,
				showKf: false,
				currentPage: 1,
				id: "",
				currentKefu: {},
				kefuName: "",
				name: "",
				sele_kf_list: [],
				sele_kf_ids: [],
				dele_kf_ids: [],
				currentKefuLink: "",
				media_id: "",
				account: "",
				kf_list: [],
				currentCount: 15,
				anchorValue: "",
				anchorRange: [],
				liveValue: "",
				liveRange: [],
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
			sceneChange(e) {
				console.log(this.sceneValue)
			},
			checkKf(item, index) {
				if (this.sele_kf_ids.indexOf(item.id) == -1) {
					// 未选择
					this.sele_kf_ids.push(item.id)
					this.sele_kf_list.push(item)
					this.kf_list[index].ifSele = true
				}
			},
			copyLink() {
				uni.setClipboardData({
					data: this.currentKefuLink,
					success() {
						uni.showToast({
							title: "复制成功",
							duration: 2000
						})
					}
				})
			},
			deleKf(item, index) {
				this.sele_kf_list.splice(index, 1)
				this.sele_kf_ids.splice(index, 1)
				if (this.dele_kf_ids.indexOf(item.id) == -1) {
					this.dele_kf_ids.push(item.id)
				}
				let kfLen = this.kf_list.length
				for (let i = 0; i < kfLen; i++) {
					if (this.kf_list[i].id == item.id) {
						this.kf_list[i].ifSele = false
					}
				}
			},
			toDetail(item) {
				this.currentKefu = item
				this.showMask = true
				this.showDetail = true
				this.showKf = false
				this.getPercent()
				this.getReceperLink()
				this.getReceper()
			},
			editPercent() {
				let url = "/admin/wework/customer-service/" + this.currentKefu.open_kfid + "/chat-kf"
				let data = {
					"receptionist_rate": Number(this.receptionistRate), // 人工比例
					"ai_rate": Number(this.aiRate) // AI 比例
				}
				this.$request(url, data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: "接待比例修改成功",
							duration: 2000
						})
						this.getPercent()
					}
				})
			},
			getPercent() {
				let url = "/admin/wework/customer-service/" + this.currentKefu.open_kfid + "/chat-kf"
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.aiRate = res.data.ai_rate
						this.receptionistRate = res.data.receptionist_rate
					}
				})
			},
			editReceper() {
				// 获取公司全部成员
				this.$request("/admin/wework/contact/users").then(res => {
					if (res.code == 0) {
						this.showDetail = false
						this.showKf = true
						this.kf_list = res.data
						let len = res.data.length
						let seleLen = this.sele_kf_ids.length
						for (let i = 0; i < len; i++) {
							this.kf_list[i].ifSele = false
							for (let j = 0; j < seleLen; j++) {
								if (res.data[i].id == this.sele_kf_ids[j]) {
									this.kf_list[i].ifSele = true
								}
							}
						}
						console.log(this.kf_list, this.sele_kf_ids, "kf_list")
					}
				})

			},
			// 获取接待人员
			getReceper() {
				this.sele_kf_list = []
				this.sele_kf_ids = []
				let url = "/admin/wework/customer-service/" + this.currentKefu.open_kfid + "/receptions"
				this.$request(url).then(res => {
					if (res.code == 0) {
						let len = res.data.length
						for (let i = 0; i < len; i++) {
							let obj = {
								id: res.data[i].userid,
								name: res.data[i].name
							}
							this.sele_kf_list.push(JSON.parse(JSON.stringify(obj)))
							this.sele_kf_ids.push(res.data[i].userid)
						}
					}
				})
			},
			// 获取接待人员链接
			getReceperLink() {
				let url = "/admin/wework/customer-service/account/" + this.currentKefu.open_kfid + "/link-url"
				this.$request(url, {
					scene: ""
				}, "POST").then(res => {
					if (res.code == 0) {
						this.currentKefuLink = res.data
					}
				})
			},
			uploadImg() {
				let _this = this
				uni.chooseImage({
					count: 1,
					sizeType: ["original", "compressed"],
					sourceType: ["album", "camera"],
					success: (res) => {
						const tempFilePaths = res.tempFilePaths;
						uni.showLoading({
							title: "上传中，请稍后"
						})
						_this.showAvatar = true
						_this.imageUrl = tempFilePaths[0]
						_this.loadimg(tempFilePaths[0])

					},
					fail(res) {
						console.log(res)
					}
				})
			},
			async loadimg(filePath) {
				var _this = this;
				let header = {
					"Authorization": "bearer " + uni.getStorageSync("token"),
					"accept": "application/json",
				}
				return new Promise((resolve, reject) => {
					uni.uploadFile({
						url: app.globalData.baseUrl + "/admin/wework/upload-img",
						filePath: filePath,
						name: "file",
						header: header,
						success(resp) {
							var response = JSON.parse(resp.data);
							if (response.code == 0) {
								uni.showToast({
									title: "图片上传成功"
								})
								_this.media_id = response.data

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
				})
			},
			confirmKefu() {
				let _this = this
				let url = "/admin/wework/customer-service/" + this.currentKefu.open_kfid + "/receptions"
				let deleData = {
					"user_id_list": this.dele_kf_ids
				}
				let postData = {
					"user_id_list": this.sele_kf_ids
				}
				console.log(this.sele_kf_ids, this.dele_kf_ids)
				if (this.dele_kf_ids.length > 0) {
					this.$request(url, deleData, "DELETE").then(res => {
						if (res.code == 0) {
							if (_this.sele_kf_ids.length > 0) {
								_this.$request(url, postData, "POST").then(resp => {
									if (resp.code == 0) {
										uni.showToast({
											title: "设置成功",
											duration: 2000
										})
										_this.showKf = false
										_this.showDetail = true
										_this.getReceper()
									}
								})
							} else {
								uni.showToast({
									title: "设置成功",
									duration: 2000
								})
								_this.showKf = false
								_this.showDetail = true
								_this.getReceper()
							}


						}
					})
				} else {
					if (_this.sele_kf_ids.length > 0) {
						_this.$request(url, postData, "POST").then(resp => {
							if (resp.code == 0) {
								uni.showToast({
									title: "设置成功",
									duration: 2000
								})
								_this.showKf = false
								_this.showDetail = true
								_this.getReceper()
							}
						})
					} else {
						uni.showToast({
							title: "还未选择人员",
							icon: "error"
						})
					}
				}

			},
			confirmAdd() {
				let data = {
					"name": this.name,
					"media_id": this.media_id
				}
				let url;
				let msg = ""
				if (this.currentKefu.name) {
					url = "/admin/wework/customer-service/" + this.currentKefu.open_kfid
					msg = "修改保存成功"
				} else {
					url = "/admin/wework/customer-service/add"
					msg = "客服添加成功"
				}

				this.$request(url, data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: msg,
							duration: 3000
						})
						this.getList()
						this.resetData()
						this.close()
					}
				})
			},
			async toCreate(item) {
				this.currentKefu = item
				this.anchorRange = await this.getAnchors()
				this.liveRange = await this.getLive()
				this.showMask = true
				this.showCreate = true
			},
			liveChange(e) {},
			anchorChange(e) {},
			toDelete(item) {
				let _this = this
				uni.showModal({
					title: "是否确定删除客服人员：" + item.name + "？",
					confirmColor: "#f00",
					confirmText: "确定删除",
					success(res) {
						if (res.confirm) {
							let url = "/admin/wework/customer-service/" + item.open_kfid
							_this.$request(url, {}, "DELETE").then(resp => {
								if (resp.code == 0) {
									uni.showToast({
										title: "删除客服成功",
										duration: 2000
									})
									_this.getList()
								}
							})
						}
					}

				})
			},
			resetData() {
				this.currentKefu = {}
				this.sele_kf_list = []
				this.sele_kf_ids = []
				this.name = ""
				this.media_id = ""
				this.imageUrl = ""
				this.showAvatar = false
				this.liveValue = ""
				this.anchorValue = ""
			},
			toNext(e1, e2) {
				this.currentPage = e1
				this.currentCount = e2
				this.getList()
			},
			toAdd() {
				this.showMask = true
				this.showAdd = true
				if (this.currentKefu.name) {
					this.showAvatar = true
					this.name = this.currentKefu.name
					this.imageUrl = this.currentKefu.avatar
				}
			},
			createLink() {
				let _this = this
				let url = "/admin/wework/customer-service/account/" + this.currentKefu.open_kfid + "/link-url"
				let data = {
					scene: this.sceneValue,
					live_account_code: this.liveValue,
					live_host_code: this.anchorValue
				}
				this.$request(url, data, "POST").then(res => {
					if (res.code == 0) {
						// uni.showToast({
						// 	title: "创建成功",
						// 	duration: 2000
						// })
						uni.showModal({
							title: "创建成功,链接为：" + res.data,
							confirmText: "复制链接",
							success(resp) {
								if (resp.confirm) {
									uni.setClipboardData({
										data: res.data
									})

								}
								_this.close()
							}
						})

					}
				})
			},

			getList() {
				uni.showLoading({
					title: "努力加载中~"
				})
				let url = "/admin/wework/customer-service/accounts?page=" + this.currentPage + "&page_size=" + this
					.currentCount
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = res.data
						this.pagination = res.data.pagination
					}
				})
			},
			handleSearch(e) {
				this.currentPage = 1
				this.kefuName = e.kefuName
				this.getList()
			},
			close() {
				this.showMask = false
				this.showAdd = false
				this.showSet = false
				this.showDetail = false
				this.showCreate = false
				this.resetData()
			},
			closeAdd() {
				if (!this.showDetail) {
					this.showMask = false
				}
				this.showAdd = false
			}
		}
	}
</script>

<style lang="scss">
	::v-deep .uni-select {
		border-bottom: none !important;
		border: none;
	}

	::v-deep {
		.uni-select__selector {
			max-height: 120px;
			overflow-y: scroll;
		}

		.search_box {
			margin: 0;
		}
	}

	.active {
		color: #226FF9;
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
			.box {
				position: relative;

				&.kf_box::after {
					content: "";
					width: 1px;
					height: 100%;
					background: #ccc;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
				}

				.in_box {
					width: 50%;
					padding: 0 20px 20px 20px;
					box-sizing: border-box;

					.btns {
						position: absolute;
						bottom: 0;
						right: 20px;

						.cancel {
							background: #fff;
							border: 1px solid #226FF9;
							color: #226FF9;
							margin-right: 15px;
						}
					}

					.in_tit {
						font-weight: 600;
						margin-bottom: 20px;
					}

					.in_list {

						.in_kf,
						.in_kf_sele {
							line-height: 40px;
							cursor: pointer;
							position: relative;

							&.active::after {
								content: "";
								width: 30px;
								height: 30px;
								background: url("/static/kf_checked_icon.png") no-repeat;
								background-size: 100% 100%;
								position: absolute;
								top: 50%;
								right: 10px;
								transform: translateY(-50%);
							}
						}
					}
				}

				.line {
					.avatar {
						margin-right: 20px;
					}

					.kf_list {
						margin-top: 10px;

						.kf {
							padding: 5px 15px;
							border-radius: 4px;
							border: 1px solid #ccc;
							margin-right: 10px;
							margin-bottom: 10px;
							font-size: 14px;
						}
					}


					.name {}

					.edit,
					.copy {
						color: #226FF9;
						cursor: pointer;
						margin-left: 20px;
						white-space: nowrap;
					}

					.tit {
						width: auto;
						font-weight: 600;
						margin-right: 20px;
						white-space: nowrap;
					}
				}
			}

			.input_wrap {
				input {
					width: 100%;
				}

				&.uploadCard {
					width: 200px;
					height: 200px;
					border: 1px solid #e9e9e9;
					border-radius: 10px;
					position: relative;

					.loadimg {
						width: 200px;

						image {
							width: 100%;
						}
					}

					.innerimg {
						width: 200px;
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