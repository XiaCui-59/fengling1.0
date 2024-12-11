<template>
	<view class="content">
		<customHeader :title="pageName" :showBack="false" :headHeight="headerHeight" :showScan="true"></customHeader>
		<view class="cont" :style="{marginTop:marginTop+'px'}">
			<view class="top_area" :style="{top:marginTop+tabMargin+'px'}">
				<view class="banner" :style="{height:bannerHeight+'px'}" @click="toadd">
					<view class="banner_info">
						<view class="tit">招贤纳士</view>
						<view class="tips">快来发布你的职位，寻找能人</view>
						<view class="banner_btn">发布职位</view>
					</view>
				</view>
				<view class="subtabs flex flex-start"
					:style="{height:subTabHeight+'px',marginTop:tabMargin+'px',marginBottom:tabMargin+'px'}">
					<view class="subtab flex flex_around" v-for="(item,index) in tabs" :key="index"
						:class="currentTab.value==item.value?'active':''" @click="changeTab(item)">{{item.text}}</view>
				</view>
			</view>
			<view class="box" :style="{top:boxTop+'px',background:list.length==0?'#fff':'#F3F3F5'}">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y"
					:style="{height:scrollHeight+'px'}" refresher-enabled="true" :refresher-triggered="refreshStatus"
					@refresherpulling="refreshData" @scrolltolower="lower">
					<view class="item" v-for="(item,index) in list" :key="item.id" @click="toDetail(item.id)"
						v-if="list.length != 0">
						<view class="title">
							<view class="text"
								:class="(item.status == 'waiting_submit_platform_review'||item.status == 'waiting_set_platform_fee'||item.status == 'platform_review_rejected')?'small':''">
								{{item.name}}
							</view>
							<image :src="imgUrl+'/broker/ic_dele.png'" mode="widthFix"
								v-if="item.status == 'waiting_submit_platform_review'||item.status == 'waiting_set_platform_fee'||item.status == 'platform_review_rejected'"
								@click.stop="deleProject(item)">
							</image>
						</view>
						<view class="middle flex flex_btween">
							<view class="mid_in_item">
								<view class="tit">工资</view>
								<view class="salary flex flex-start">
									{{(item.worker_salary_min == item.worker_salary_max?item.worker_salary_min:(item.worker_salary_min+"-"+item.worker_salary_max))}}
									<text
										class="period">{{"元"+periodList.filter(el=>{return el.value==item.worker_salary_type})[0].text}}</text>
								</view>
							</view>
							<view class="mid_in_item">
								<view class="tit">在职人数</view>
								<view class="count flex flex_end">{{item.on_job_worker_count}} <text
										class="period">人</text></view>
							</view>
						</view>
						<view class="bottom flex flex_btween"
							:style="{borderBottom: currentTab.value== 'waiting-submit-review'?'2rpx dashed #F6F6F6':'none',padding:currentTab.value== 'waiting-submit-review'?'20rpx 0':'20rpx 0 0 0'}">
							<view class="left flex flex-start">
								<image :src="item.broker.avatar?item.broker.avatar:avatar" mode=""
									style="width:56rpx;height:56rpx;border-radius:50%;border:1px solid #ccc;margin-right: 16rpx;"
									:lazy-load="true">
								</image>
								<view class="count">{{item.broker.name}}</view>
							</view>
						</view>
						<view class="opera flex flex_end">
							<!-- <view class="ope_item set flex flex-start" v-if="item.status == 'waiting_set_platform_fee'"
								@click.stop="toset(item.id)">
								<image :src="imgUrl+'/broker/ic_set.png'" mode="widthFix"></image>
								<text>设置费用</text>
							</view> -->
							<view class="ope_item sub flex flex-start"
								v-if="item.status == 'waiting_submit_platform_review'" @click.stop="submit(item)">
								<image :src="imgUrl+'/broker/ic_submit_lg.png'" mode="widthFix"></image>
								<text>提交审核</text>
							</view>
							<view class="ope_item sub flex flex-start" @click.stop="backProject(item)"
								v-if="item.status == 'platform_reviewing'">
								<image :src="imgUrl+'/broker/ic_submit_lg.png'" mode="widthFix"></image>
								<text>撤回审核</text>
							</view>
							<view class="ope_item sub flex flex-start" @click.stop="rePubProject(item)"
								v-if="item.status == 'finished'">
								<image :src="imgUrl+'/broker/ic_submit_lg.png'" mode="widthFix"></image>
								<text>重新上架</text>
							</view>
							<view class="ope_item sub flex flex-start" @click.stop="endProject(item)"
								v-if="item.status == 'running'">
								<image :src="imgUrl+'/broker/ic_submit_lg.png'" mode="widthFix"></image>
								<text>完结</text>
							</view>
							<view class="ope_item edit flex flex-start"
								v-if="item.status == 'waiting_submit_platform_review'||item.status == 'waiting_set_platform_fee'||item.status == 'platform_review_rejected'"
								@click.stop="toedit(item.id)">
								<image :src="imgUrl+'/broker/ic_edit.png'" mode="widthFix"></image>
								<text>编辑</text>
							</view>
						</view>
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
		<customModal :title="modalTitle" :content="modalContent" :bgUrl="modalBg" :iconUrl="modalIcon"
			:imageUrl="imageUrl" :iconPosition="iconPosition" v-if="showModal" :showCancel="showCancel"
			:showConfirm="showConfirm" @confirm="handleConfirm" @cancel="handleCancel" @closeModal="closeModal">
		</customModal>
		<tabbar current="0" @getTabbarHeight="getTabbarHeight" :todo="todo"></tabbar>
	</view>
</template>

<script>
	import tabbar from "@/components/tabbar.vue"
	import customHeader from "@/components/custom_header.vue"
	import commonData from "@/common/commonData"
	import infoFirst from "@/components/info_first.vue"
	const app = getApp()
	export default {
		data() {
			return {
				showAddInfo: false,
				showNameInput: true,
				showLogin: false,
				avatar: app.globalData.baseImageUrl + "/broker/com_default.png",
				imgUrl: app.globalData.baseImageUrl,
				showMask: false,
				refreshStatus: true,
				isPulling: false,
				pageName: "灵动优聘",
				marginTop: app.globalData.marginTop,
				mainTabHeight: app.globalData.mainTabHeight,
				subTabHeight: app.globalData.subTabHeight,
				tabMargin: app.globalData.tabMargin,
				bannerHeight: app.globalData.bannerHeight,
				modalTitle: "提示",
				modalContent: "",
				iconPosition: "right",
				modalBg: "/broker/modal_bg.png",
				modalIcon: "/broker/modal_icon.png",
				showCancel: true,
				showConfirm: true,
				imageUrl: "",
				tabs: [{
						value: "running",
						text: "进行中"
					}, {
						value: "waiting-submit-review",
						text: "待提审"
					},
					{
						value: "reviewing",
						text: "审核中"
					}, {
						value: "finished",
						text: "已完结"
					},
					{
						value: "",
						text: "全部"
					},
				],
				currentTab: {
					value: "running",
					text: "进行中"
				},
				list: [],
				scrollHeight: 0,
				boxTop: 0,
				headerHeight: app.globalData.highTopHeight,
				currentPage: 1,
				pagination: {},
				projectStatics: {
					"create_count": 0, // 创建数量
					"accept_count": 0 // 接单数量
				},
				tabbarHeight: 0,
				loginStatus: false,
				todo: 0,
				showModal: false,
				currentProject: {},
				periodList: commonData.periodList,
				userInfo: {}
			}
		},
		components: {
			tabbar,
			customHeader,
			infoFirst
		},
		onLoad() {
			this.boxTop = this.marginTop + this.bannerHeight + 3 * this.tabMargin + this.subTabHeight
			this.scrollHeight = app.globalData.systemHeight - this.marginTop - this.subTabHeight - 2 * this.tabMargin -
				this.tabbarHeight - this.bannerHeight
			if (this.isLogin()) {
				this.loginStatus = true
			} else {
				this.showLogin = true
			}

		},
		watch: {
			// loginStatus(newValue, oldValue) {
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
				let todoStatic = await this.getTodoStatic()
				this.todo = todoStatic.total
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
				this.list = []
				this.todo = 0
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
			handleInfo(info) {
				if (info.broker.review_status == "waiting_submit") {
					this.showAddInfo = true
				}
				if (info.broker.name) {
					// 隐藏输入姓名
					this.showNameInput = false
				}
			},
			handleName() {
				this.showNameInput = false
			},
			closeAddInfo() {
				this.showAddInfo = false
			},
			closeLogin() {
				this.showLogin = false
			},
			closeModal() {
				this.showModal = false
				this.resetData()
			},
			resetData() {
				this.imageUrl = ""
				this.showCancel = true
				this.showConfirm = true
				this.content = ""
				this.title = "提示"
			},
			endProject(item) {
				let _this = this
				let msg = "您当前准备完结职位：" + item.name + "，是否确认完结该职位？"
				uni.showModal({
					title: "提示",
					content: msg,
					confirmColor: "#f00",
					confirmText: "确认完结",
					success(resp) {
						if (resp.confirm) {
							let url = "/broker/project/" + item.id + "/finish"
							_this.$request(url, {}, "POST").then(res => {
								if (res.code == 0) {
									uni.showModal({
										title: "职位已完结",
										showCancel: false
									})
									_this.getList()
								}
							})
						}
					}
				})
			},
			toset(id) {
				uni.navigateTo({
					url: "/subpkg/set_fee/set_fee?id=" + id
				})
			},
			toedit(id) {
				uni.navigateTo({
					url: "/subpkg/edit_project/edit_project?id=" + id
				})
			},
			rePubProject(item) {
				let _this = this
				uni.showModal({
					title: "提示",
					content: "是否确认重新上架工作：" + item.name + "？",
					confirmText: "确认上架",
					success(res) {
						if (res.confirm) {
							let url = "/broker/project/" + item.id + "/re-publish"
							_this.$request(url, {}, "POST").then(resp => {
								if (resp.code == 0) {
									uni.showToast({
										title: "重新上架成功",
										duration: 2000
									})
									_this.getList()
								}
							})
						}
					}
				})
			},
			backProject(item) {
				let _this = this
				let msg = "是否确认撤回职位：" + item.name + "？"
				uni.showModal({
					title: "正在撤回",
					content: msg,
					confirmText: "确认撤回",
					success(resp) {
						if (resp.confirm) {
							let url = "/broker/project/" + item.id + "/revoke-reviewing"
							_this.$request(url, {}, "POST").then(res => {
								if (res.code == 0) {
									uni.showModal({
										title: "职位已撤回",
										showCancel: false
									})
									_this.getList()
								}
							})
						}
					}
				})
			},
			handleCancel() {
				this.showModal = false
				this.currentProject = {}
				this.modalTitle = ""
				this.modalContent = ""
				this.resetData()
			},
			deleProject(item) {
				this.currentProject = item
				this.modalTitle = "删除"
				this.modalContent = '当前删除职位:' + item.name + '？'
				this.showModal = true
			},
			handleConfirm() {
				if (this.modalTitle == "提审") {
					let url = "/broker/mini/project/" + this.currentProject.id + "/submit-review"
					this.$request(url, {}, "POST").then(res => {
						if (res.code == 0) {
							this.showModal = false
							this.resetData()
							uni.showToast({
								title: "提审成功",
								duration: 3000
							})
							this.currentPage = 1
							this.getList()
						}
					})
				} else {
					let url = "/broker/mini/project/" + this.currentProject.id
					this.$request(url, {}, "DELETE").then(res => {
						if (res.code == 0) {
							this.showModal = false
							uni.showToast({
								title: "已删除",
								duration: 3000
							})
							this.currentPage = 1
							this.getList()
						}
					})
				}

			},
			submit(item) {
				this.currentProject = item
				this.modalTitle = "提审"
				this.modalContent = '当前提审职位:' + item.name + '？'
				this.showModal = true
			},
			async toadd() {
				let token = uni.getStorageSync("token")
				if (!token) {
					this.showLogin = true
				} else {
					if (this.userInfo.broker.review_status == "waiting_submit") {
						uni.showModal({
							title: "您还未提交公司资质",
							confirmText: "去提交",
							success(res) {
								if (res.confirm) {
									uni.navigateTo({
										url: "/subpkg/authentication/authentication"
									})
								}
							}
						})
					} else if (this.userInfo.broker.review_status == "rejected") {
						uni.showModal({
							title: "您提交的公司资质审核未通过，请重新提交。",
							confirmText: "重新提交",
							success(res) {
								if (res.confirm) {
									uni.navigateTo({
										url: "/subpkg/authentication/authentication"
									})
								}
							}
						})
					} else {
						uni.navigateTo({
							url: "/subpkg/add_project/add_project"
						})
					}

				}
			},

			refreshData() {
				let _this = this
				if (!this.isPulling) {
					this.isPulling = true
					this.refreshStatus = true
					this.currentPage = 1
					this.getList()
					setTimeout(function() {
						_this.refreshStatus = false
						_this.isPulling = false
					}, 1000);
				}
			},
			getTabbarHeight(e) {
				this.tabbarHeight = e
			},
			changeTab(item) {
				this.currentTab = item
				if (this.isLogin()) {
					this.currentPage = 1
					this.getList()
				} else {
					this.showLogin = true
					// uni.showModal({
					// 	title: "未登录",
					// 	content: "您当前还未登录，无法查看数据，是否现在登录？",
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
			toDetail(id) {
				uni.navigateTo({
					url: "/subpkg/project_detail/project_detail?id=" + id
				})
			},
			// getProjectStatics() {
			// 	this.$request("/broker/mini/project/stat").then(res => {
			// 		if (res.code == 0) {
			// 			// uni.hideLoading()
			// 			this.$set(this.mainTab[0], "count", res.data.running_count)
			// 			this.$set(this.mainTab[1], "count", res.data.finished_count)
			// 		}
			// 	})
			// },
			getMore() {
				let url = "/broker/mini/projects" + (this.currentTab.value ? "/" + this.currentTab.value : "") + "?page=" +
					this.currentPage
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = this.list.concat(res.data.list)
						this.pagination = res.data.pagination
					}
				})
			},
			getList() {
				let url = "/broker/mini/projects" + (this.currentTab.value ? "/" + this.currentTab.value : "") + "?page=1"
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.pagination = res.data.pagination
					}
				})
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
			},
		}
	}
</script>

<style lang="scss" scoped>
	.pub_ic {
		position: fixed;
		right: 20rpx;
		font-size: 0;
		z-index: 200;

		image {
			width: 60rpx;
			height: 60rpx;

		}
	}

	.top_area {
		width: calc(100% - 92rpx);
		left: 46rpx;
		position: fixed;

		.banner {
			position: relative;
			width: 100%;
			background: url($back-ground-url+'/broker/index_banner.png') no-repeat;
			background-size: cover;
			border-radius: 15.38rpx;
			overflow: hidden;

			.banner_info {
				position: absolute;
				top: 50%;
				right: 58rpx;
				transform: translateY(-50%);
				text-align: right;

				.tit {
					font-weight: 600;
					font-size: 27rpx;
					color: #333333;
					line-height: 38rpx;
				}

				.tips {
					font-weight: 400;
					font-size: 19rpx;
					color: #ABABAB;
					line-height: 27rpx;
				}

				.banner_btn {
					margin-top: 15rpx;
					width: 212rpx;
					height: 62rpx;
					line-height: 62rpx;
					text-align: center;
					background: #3780FF;
					border-radius: 35rpx;
					font-weight: 600;
					font-size: 29rpx;
					color: #FFFFFF;
					float: right;
				}
			}
		}

		.tabs {

			// margin-top:30rpx;
			.tab {
				width: 332rpx;
				padding: 12rpx 24rpx;
				background: url($back-ground-url+"/broker/rect_normal.png") no-repeat;
				background-size: 100% 100%;
				box-sizing: border-box;
				border-radius: 20rpx;
				overflow: hidden;

				&.active {
					background: url($back-ground-url+"/broker/rect_sele.png") no-repeat;
					background-size: 100% 100%;
				}

				.icon {
					font-size: 0;

					image {
						will-change: transform;
						height: 100rpx;
					}
				}

				.info {
					text-align: center;

					.tit {
						font-size: 30rpx;
						// line-height: 42rpx;
					}

					.count {
						font-size: 34rpx;
						color: #fff;
						font-weight: bold;
						// line-height: 56rpx;
					}
				}
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
		background: #F3F3F5;

		.item {
			padding: 40rpx 40rpx 23rpx 40rpx;
			border-radius: 16rpx;
			background: #fff;
			box-shadow: 0 2rpx 6rpx 0 rgba(0, 0, 0, 0.15);
			margin-bottom: 20rpx;

			.title {
				font-size: 34rpx;
				padding-left: 22rpx;
				box-sizing: border-box;
				position: relative;

				.text {
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					box-sizing: border-box;

					&.small {
						width: calc(100% - 56rpx);
					}
				}

				image {
					width: 50rpx;
					height: 50rpx;
					height: auto;
					position: absolute;
					top: 50%;
					right: 0rpx;
					transform: translateY(-50%);
				}

				&:before {
					content: "";
					width: 8rpx;
					height: 36rpx;
					background: #F7BC05;
					position: absolute;
					top: 50%;
					left: 0;
					transform: translateY(-50%);
				}
			}

			.middle {
				font-size: 30rpx;
				margin: 20rpx 0 0 0;
				padding: 17rpx 20rpx;
				box-sizing: border-box;
				background: #F6F6F6;
				border-radius: 8rpx;

				.mid_in_item {
					.tit {
						font-size: 25rpx;
						color: #5A5A5A;
						line-height: 46rpx;
					}

					view {

						font-weight: 600;
						font-size: 35rpx;
					}

					.salary {
						color: #EA9900;
					}

					.count {
						color: #3780FF;
						text-align: right;
					}

					.period {
						font-size: 23rpx;
						color: #A8A8A8;
						display: inline-block;
						margin-left: 10rpx;
					}
				}

			}

			.bottom {
				font-size: 23rpx;
				color: #686868;
				height: 60rpx;
				line-height: 60rpx;
			}

			.opera {
				margin-top: 20rpx;

				.ope_item {
					margin-left: 10%;

					image {
						width: 50rpx;
						height: 50rpx;
					}

					text {
						font-weight: 400;
						font-size: 27rpx;
						color: #333333;
					}
				}
			}
		}
	}
</style>