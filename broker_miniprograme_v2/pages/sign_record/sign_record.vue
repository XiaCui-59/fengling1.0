<template>
	<view class="content">
		<customHeader :title="pageName" :showBack="false" :headHeight="headerHeight"></customHeader>
		<view class="cont" :style="{marginTop:marginTop+'px'}">
			<view class="top_area flex flex_btween" :style="{top:marginTop+tabMargin+'px',height:subTabHeight+'px'}">
				<!-- 项目筛选 -->
				<view class="item">
					<u-search placeholder="搜索职位" v-model="keyword" :disabled="true" :showAction="false"
						:height="subTabHeight+'px'" bgColor="#fff" @click="showPicker"></u-search>
				</view>
				<view class="item">
					<!-- 状态筛选 -->
					<uni-data-select v-model="statusValue" :localdata="status.slice(0,5)" @change="statusChange"
						clear></uni-data-select>
				</view>
			</view>
			<view class="box" :style="{top:boxTop+'px',background:list.length==0?'#fff':'#F3F3F5'}">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y"
					:style="{height:scrollHeight+'px'}" @scrolltolower="lower">
					<view class="item" v-for="(item,index) in list" :key="index" v-if="list.length>0"
						@click.stop="toWorkerDetail(item)">
						<view class="item_top">
							<view class="status_icon">
								<image :src="imgUrl+ status.filter(el => {return el.value == item.status})[0].icon"
									mode="widthFix"></image>
							</view>
							<view class="base_info flex flex_btween">
								<view class="left flex flex-start">
									<image :src="item.worker_avatar" mode=""></image>
									<view class="base">
										<view class="name">{{item.worker_name}}</view>
										<view class="idcard"
											v-if="item.worker_gender || item.worker_nation || item.worker_age">
											{{(item.worker_gender=="male"?"男 · ":(item.worker_gender=="female"?"女 · ":""))+(item.worker_nation?(item.worker_nation+" · "):"")+item.worker_age}}
										</view>
									</view>
								</view>
								<view class="mid_item"
									style="font-size: 0;display: flex;justify-content: space-around;">
									<image :src="imgUrl+'/broker/phone_icon.png'" mode="widthFix"
										@click.stop="makePhoneCall(item.worker_mobile)"></image>
								</view>
							</view>

							<!-- <view class="status" :class="item.status">
								{{workerStatus.filter(el => {return el.value == item.status})[0].text}}
							</view> -->
						</view>
						<view class="item_middle">
							<view class="mid_line">职位：{{item.project_name}}</view>
							<view class="mid_line">报名时间：{{item.create_time}}</view>
						</view>
						<view class="item_bot flex flex_btween">
							<view class="edit_follow flex flex-start" @click.stop="editFollow(item)"><u-icon
									name="edit-pen-fill" size="22" color="#2ED775"></u-icon>写跟进</view>
							<view class="line flex flex_end" v-if="item.status == 'wait_check_in'">
								<view class="opra refuse" @click.stop="checkIn(item,false)">拒绝</view>
								<view class="opra pass" @click.stop="checkIn(item,true)">接收</view>
							</view>
							<view class="line flex flex_end" v-if="item.status == 'check_in'">
								<view class="opra refuse" @click.stop="toSign(item,false)">不通过</view>
								<view class="opra pass" @click.stop="toSign(item,true)">面试通过</view>
							</view>
							<view class="line flex flex_end" v-if="item.status == 'wait_entry'">
								<view class="opra refuse" @click.stop="toEntry(item,false)">未入职</view>
								<view class="opra pass" @click.stop="toEntry(item,true)">确认入职</view>
							</view>
							<view class="line flex flex_end" v-if="item.status == 'entry'">
								<view class="opra pass" @click.stop="depart(item)">离职</view>
							</view>
						</view>

					</view>
					<view class="empty" v-if="list.length == 0">
						<image :src="imgUrl+'/broker/empty.png'" mode="widthFix"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="picker">
			<u-popup :show="showPickerMask" mode="bottom" @close="close" @open="openPicker"
				:customStyle="{bottom:pickerBottom+'px'}">
				<view class="sear_box">
					<input type="text" placeholder="输入职位名称" v-model="pickerKeyword" :showAction="false" @change="change"
						:adjust-position="false" />
					<!-- <u-search placeholder="输入职位名称" v-model="pickerKeyword" :showAction="false" @change="change"
						:adjust-position="false"></u-search> -->
				</view>
				<view class="picker_list_wrap">
					<scroll-view scroll-y="true" class="scroll-Y" :style="{height:'400rpx'}"
						@scrolltolower="gerMorePro">
						<view class="line" v-if="projectList.length > 0" @click="chooseProject({name:'全部职位'})">全部职位
						</view>
						<view class="line" v-for="(item,index) in projectList" :key="index"
							@click="chooseProject(item)">
							{{item.name+"("+item.code+")"}}
						</view>
						<view class="line" v-if="projectList.length == 0">暂无数据~</view>
					</scroll-view>
				</view>
			</u-popup>
		</view>
		<!-- 弹出层 -->
		<u-popup :show="showPop" mode="right" @close="closePop" @open="openPop" :safeAreaInsetTop="true">
			<view class="follow_wrap" style="margin-top: 100rpx;">
				<view class="tit">写跟进（{{currentWorker.worker_name}}）</view>
				<view class="foll_line">
					<view class="subtit">选择跟进状态</view>
					<view class="status_item flex flex-start">
						<view class="u-page__tag-item" v-for="(item, index) in followStatus" :key="index">
							<u-tag :text="status.filter(el=>{return el.value == item.status})[0].text"
								:plain="item.id != curFollowStatus.id" type="warning" @click="radioClick(item)">
							</u-tag>
						</view>
					</view>

				</view>
				<view class="foll_line">
					<view class="subtit">添加跟进记录</view>
					<u--input placeholder="请输入跟进记录" border="surround" v-model="followValue"></u--input>
				</view>
				<view class="foll_line flex flex_btween">
					<u-button type="warning" :plain="true" text="取消"
						:customStyle="{width:'48%',color:'#f9ae3d',marginLeft:'0'}" @click="closePop"></u-button>
					<u-button type="warning" text="确定" :customStyle="{width:'48%',marginRight:'0'}"
						@click="confirmFollow"></u-button>
				</view>
				<view class="tit" style="margin-top: 60rpx;">跟进记录</view>
				<view class="record_list">
					<scroll-view scroll-y="true" class="scroll-Y" :style="{height:recordScroll+'px'}"
						@scrolltolower="gerMoreRecord">
						<view class="foll_line follow_item" v-for="(item,index) in followList" :key="index">
							<view class="follow_cont">{{item.remark}}</view>
							<view class="follow_time flex flex_btween">
								<view class="time">{{item.create_time}}</view>
								<view class="status">
									{{status.filter(el=>{return el.value == item.status})[0].text}}
								</view>
							</view>
						</view>
						<view class="empty" v-if="!followList.length" style="margin-top:15px;color:#0092ff;">暂无跟进记录
						</view>
					</scroll-view>
				</view>

			</view>
		</u-popup>

		<login :showLogin="showLogin" @handleConfirm="getList" @closeLogin="closeLogin" @handleInfo="handleInfo">
		</login>
		<infoFirst :showNameInput="showNameInput" v-if="showAddInfo" @handleName="handleName"
			@closeAddInfo="closeAddInfo"></infoFirst>
		<tabbar current="1" @getTabbarHeight="getTabbarHeight"></tabbar>
	</view>
</template>

<script>
	import infoFirst from "@/components/info_first.vue"
	import tabbar from "@/components/tabbar.vue"
	import customHeader from "@/components/custom_header.vue"
	import commonData from "@/common/commonData"
	const app = getApp()
	export default {
		data() {
			return {
				currentWorker: {},
				followStatus: [
					// {
					// 	id: "123",
					// 	status: "wait_check_in"
					// },
					// {
					// 	id: "124",
					// 	status: "check_in"
					// },
					// {
					// 	id: "125",
					// 	status: "wait_check_in"
					// },
					// {
					// 	id: "126",
					// 	status: "check_in"
					// }
				],
				curFollowStatus: "",
				followList: [
					// {
					// 	remark: "报名后不愿意面试",
					// 	create_time: "2024-09-01",
					// 	status: "wait_check_in"
					// },
					// {
					// 	remark: "面试后不想入职",
					// 	create_time: "2024-09-05",
					// 	status: "check_in"
					// },
					// {
					// 	remark: "报名后不愿意面试",
					// 	create_time: "2024-09-01",
					// 	status: "wait_check_in"
					// },
					// {
					// 	remark: "面试后不想入职",
					// 	create_time: "2024-09-05",
					// 	status: "check_in"
					// },
					// {
					// 	remark: "报名后不愿意面试",
					// 	create_time: "2024-09-01",
					// 	status: "wait_check_in"
					// },
					// {
					// 	remark: "面试后不想入职",
					// 	create_time: "2024-09-05",
					// 	status: "check_in"
					// },
					// {
					// 	remark: "报名后不愿意面试",
					// 	create_time: "2024-09-01",
					// 	status: "wait_check_in"
					// },
					// {
					// 	remark: "面试后不想入职",
					// 	create_time: "2024-09-05",
					// 	status: "check_in"
					// }
				],
				followValue: "",
				showPop: false,
				showPickerMask: false,
				showAddInfo: false,
				showNameInput: true,
				showLogin: false,
				imgUrl: app.globalData.baseImageUrl,
				pageName: "报名记录",
				showModal: false,
				marginTop: app.globalData.marginTop,
				mainTabHeight: app.globalData.mainTabHeight,
				subTabHeight: app.globalData.subTabHeight,
				tabMargin: app.globalData.tabMargin,
				keyword: "",
				pickerKeyword: "",
				statusValue: "",
				status: commonData.workerStatus,
				reqStatus: [{
						value: "",
						text: "全部状态"
					}, {
						value: "wait-check-in",
						text: "候选中"
					},
					{
						value: "check-in",
						text: "待面试"
					},
					{
						value: "wait-entry",
						text: "待入职"
					},
					{
						value: "entry",
						text: "已入职"
					}
				],
				list: [
					// 	{
					// 	broker_company_name: "成都灵动世界科技有限公司",
					// 	check_in_time: "",
					// 	create_time: "2024-09-02 13:58:34",
					// 	depart_time: "",
					// 	enrolled_confirm_time: "",
					// 	entry_time: "",
					// 	id: "41012106811796745",
					// 	platform: "wechat_mini_program",
					// 	project_id: "37961012007202057",
					// 	project_name: "蒲江酒盒包装厂长白班",
					// 	remark: "",
					// 	status: "wait_check_in",
					// 	update_time: "2024-09-02 13:58:34",
					// 	worker_age: 30,
					// 	worker_avatar: "",
					// 	worker_gender: "male",
					// 	worker_id: "33494146463362313",
					// 	worker_id_card_number: "",
					// 	worker_mobile: "13023610101",
					// 	worker_name: "欧天天",
					// 	worker_nation: "汉族"
					// },
				],
				scrollHeight: 0,
				boxTop: 0,
				headerHeight: app.globalData.highTopHeight,
				tabbarHeight: 0,
				currentPage: 1,
				pagination: {},
				loginStatus: false,
				userInfo: {},
				projectList: [
					// {
					// 	name: "职位一",
					// 	code: "pj122434"
					// },
					// {
					// 	name: "职位2",
					// 	code: "pj122434"
					// },
					// {
					// 	name: "职位3",
					// 	code: "pj122434"
					// },
					// {
					// 	name: "职位4",
					// 	code: "pj122434"
					// },
					// {
					// 	name: "职位5",
					// 	code: "pj122434"
					// },
					// {
					// 	name: "职位6",
					// 	code: "pj122434"
					// },
					// {
					// 	name: "职位7",
					// 	code: "pj122434"
					// }
				],
				propagination: {},
				currentProPage: 1,
				recordScroll: 0,
				pickerBottom: 0
			}
		},
		components: {
			tabbar,
			customHeader,
			infoFirst
		},
		onLoad() {
			let _this = this
			this.boxTop = this.marginTop + 2 * this.tabMargin + this.subTabHeight
			this.scrollHeight = app.globalData.systemHeight - this.marginTop - 2 * this.tabMargin - this.subTabHeight -
				this.tabbarHeight
			uni.onKeyboardHeightChange(res => {
				console.log(res.height, "键盘高度变化")

				this.pickerBottom = res.height
			})
			if (this.isLogin()) {
				this.loginStatus = true
			}
		},
		watch: {
			// async loginStatus(newValue, oldValue) {
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
				// this.refreshTodo()
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
				this.showLogin = true
				this.loginStatus = false
				this.list = []
			}

		},
		methods: {
			toWorkerDetail(item) {
				let str = encodeURIComponent(JSON.stringify(item))
				uni.navigateTo({
					url: "/subpkg/worker_detail/worker_detail?worker_info=" + str
				})
			},
			getElementInfo(className) {
				let _this = this
				return new Promise((resolve) => {
					let info = uni.createSelectorQuery().select(className);
					info.boundingClientRect(function(data) { //data - 各种参数
						resolve(data)
					}).exec()
				})
			},
			editFollow(item) {
				this.currentWorker = item
				let url = "/broker/log/" + item.worker_id + "/" + item.project_id
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.followStatus = res.data
						this.curFollowStatus = res.data[res.data.length - 1]
						this.openPop()
					}
				})
			},
			radioClick(item) {
				console.log("item", item)
				this.curFollowStatus = item
			},
			async openPop() {
				this.showPop = true
				let info = await this.getElementInfo(".record_list")
				if (info) {
					this.recordScroll = app.globalData.systemHeight - info.top - 15
				}
				this.getFollowList()
			},
			closePop() {
				this.showPop = false
			},
			openPicker() {
				this.pickerKeyword = ""
				this.currentProPage = 1
				this.getProject()
			},
			chooseProject(item) {
				this.close()
				this.keyword = item.name
				this.getList()
			},
			showPicker() {
				console.log(123)
				this.showPickerMask = true
			},
			close() {
				this.showPickerMask = false
				this.currentProPage = 1
			},
			change(e) {
				this.currentProPage = 1
				this.getProject()
			},
			changeItem() {

			},
			statusChange() {
				this.getList()
			},
			handleName() {
				this.showNameInput = false
			},
			closeAddInfo() {
				this.showAddInfo = false
			},
			handleInfo(info) {
				if (!info.company.name) {
					this.showAddInfo = true
				}
				if (info.broker.name) {
					// 隐藏输入姓名
					this.showNameInput = false
				}
			},
			closeLogin() {
				this.showLogin = false
			},
			getTabbarHeight(e) {
				this.tabbarHeight = e
			},
			handleCancel() {
				this.showModal = false
			},
			getFollowList() {
				let url = "/broker/remarks/" + this.currentWorker.worker_id + "/" + this.currentWorker.project_id
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.followList = res.data
					}
				})
			},
			getMore() {
				let url = "/broker/project/signing-requests?page=" + this.currentPage +
					"&page_size=15" + "&project_search=" + (this.keyword == "全部职位" ? "" : this.keyword) + "&status=" +
					this.statusValue
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = this.list.concat(res.data.list)
						this.pagination = res.data.pagination
					}
				})
			},
			gerMorePro() {
				if (this.projectList.length < this.propagination.totalCount) {
					this.currentProPage++
					this.getMoreProjects()
				} else {
					if (this.projectList.length >= this.propagination.totalCount) {
						uni.showToast({
							title: "已经到底啦~",
							icon: "none",
							duration: 2000
						})
					}
				}
			},
			getMoreProjects() {
				let url = "/broker/projects?keyword=" + this.pickerKeyword + "&page=" + this.currentProPage
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.projectList = this.projectList.concat(res.data.list)
						this.propagination = res.data.pagination
					}
				})
			},
			getProject() {
				let url = "/broker/projects?keyword=" + this.pickerKeyword + "&page=" + this.currentProPage
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.projectList = res.data.list
						this.propagination = res.data.pagination
					}
				})
			},
			getList() {
				let url = "/broker/project/signing-requests?page=" + this.currentPage +
					"&page_size=15" + "&project_search=" + (this.keyword == "全部职位" ? "" : this.keyword) + "&status=" +
					this.statusValue
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

			confirmFollow() {
				let data = {
					"worker_id": this.currentWorker.worker_id,
					"project_id": this.currentWorker.project_id,
					"change_log_id": this.curFollowStatus.id,
					"remark": this.followValue
				}
				this.$request("/broker/add/remarks", data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: "添加成功",
							duration: 1000
						})
						this.followValue = ""
						this.closePop()
					}
				})
			},
			checkIn(item, type) {
				let _this = this
				// 判断当前用户余额是否充足
				let arr = []
				arr[0] = item.id
				let data = {
					relation_id: arr
				}
				this.$request("/broker/project/requests-cost", data, "POST").then(resp => {
					console.log(resp)
					if (resp.code == 0) {
						console.log(resp.data)
						if (Number(resp.data.cost) > Number(resp.data.amount)) {
							// 余额不足
							uni.showModal({
								title: "余额不足，请先充值",
								showCancel: false,
								success(respon) {
									if (respon.confirm) {
										// 跳转到充值页面
										uni.navigateTo({
											url: "/subpkg/recharge/recharge"
										})
									}
								}
							})
						} else {
							let message = type ? "接收" : "拒绝"
							uni.showModal({
								title: "提示",
								content: "当前操作" + message + "的工人：" + item.worker_name,
								success(respon) {
									if (respon.confirm) {
										let tips = type ? "已接收" : "已拒绝"
										let arr = []
										arr.push(item.id)
										let data = {
											"relation_id": arr, // 选择数据ID
											"project_id": item.project_id, // 职位ID
											"confirm": type, // true 审核 false 拒绝
											"remark": "" // 备注 （非必填）
										}
										_this.$request("/broker/mini/project/check-in", data, "POST").then(
											res => {
												if (res.code == 0) {
													uni.showModal({
														title: tips,
														showCancel: false
													})
													_this.list = []
													_this.getList()
												}
											})
									}
								}
							})
						}
					}
				})


			},
			toSign(item, type) {
				let _this = this
				let message = type ? "面试通过" : "不通过"
				uni.showModal({
					title: "提示",
					content: "当前标记" + message + "的工人：" + item.worker_name,
					success(respon) {
						if (respon.confirm) {
							let tips = type ? "已通过面试" : "已标记不通过"
							let arr = []
							arr.push(item.id)
							let data = {
								"relation_id": arr, // 选择数据ID
								"project_id": item.project_id, // 职位ID
								"confirm": type, // true 审核 false 拒绝
								"remark": "" // 备注 （非必填）
							}
							_this.$request("/broker/mini/project/contract-confirm", data, "POST").then(res => {
								if (res.code == 0) {
									uni.showModal({
										title: tips,
										showCancel: false
									})
									_this.list = []
									_this.getList()
								}
							})
						}
					}
				})

			},
			toEntry(item, type) {
				let _this = this
				let message = type ? "确认入职" : "未入职"
				uni.showModal({
					title: "提示",
					content: "当前标记" + message + "的工人：" + item.worker_name,
					success(respon) {
						if (respon.confirm) {
							let tips = type ? "已确认入职" : "已标记未入职"
							let arr = []
							arr.push(item.id)
							let data = {
								"relation_id": arr, // 选择数据ID
								"project_id": item.project_id, // 职位ID
								"confirm": type, // true 审核 false 拒绝
								"remark": "" // 备注 （非必填）
							}
							_this.$request("/broker/mini/project/entry-confirm", data, "POST").then(res => {
								if (res.code == 0) {
									uni.showModal({
										title: tips,
										showCancel: false
									})
									_this.list = []
									_this.getList()
								}
							})
						}
					}
				})

			},

			makePhoneCall(mobile) {
				uni.makePhoneCall({
					phoneNumber: mobile
				})
			},
			depart(item) {
				let _this = this
				let arr = []
				arr.push(item.id)
				let data = {
					"relation_id": arr, // 选择数据ID
					"project_id": item.project_id, // 职位ID
					"remark": "" // 备注 （非必填）
				}
				uni.showModal({
					title: "离职操作",
					content: "当前离职正在办理离职的员工为：" + item.worker_name + "，是否确认离职？",
					success(resp) {
						if (resp.confirm) {
							_this.$request("/broker/mini/project/confirm-depart-user", data, "POST").then(res => {
								if (res.code == 0) {
									uni.showModal({
										title: "离职成功",
										showCancel: false
									})
									_this.list = []
									_this.getList()
								}
							})
						}
					}
				})

			}
		}
	}
</script>

<style lang="scss" scoped>
	.follow_wrap {
		width: 83vw;
		overflow-y: scroll;
		padding: 0 25rpx;
		box-sizing: border-box;

		.follow_item {
			margin-bottom: 20px;
			padding-left: 20px;
			box-sizing: border-box;
			position: relative;

			&::before {
				content: "";
				width: 10px;
				height: 10px;
				background: #F7BC05;
				border-radius: 50%;
				position: absolute;
				top: 5px;
				left: 0;
			}

			.follow_cont {
				color: #333;
				font-size: 28rpx;
				margin-bottom: 10rpx;
			}

			.follow_time {
				font-size: 28rpx;
				color: #5a5a5a;

				.status {
					margin-left: 10px;
					color: #0092ff;
				}
			}
		}

		.tit {
			font-size: 32rpx;
			font-weight: 600;
			color: #333;
			margin-bottom: 40rpx;
		}

		.foll_line {
			margin-bottom: 30rpx;
		}

		.subtit {
			position: relative;
			padding-left: 14rpx;
			font-size: 28rpx;
			margin-bottom: 25rpx;

			&::before {
				content: "";
				width: 6rpx;
				height: 80%;
				background: #F7BC05;
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
			}
		}

		.status_item {
			flex-wrap: wrap;
		}
	}

	.opra {
		width: 154rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		border-radius: 8rpx;
		margin-left: 20rpx;
		font-size: 27rpx;

		&.refuse {
			color: #FF5353;
			border: 1px solid #FF5353;
		}

		&.pass {
			border: 1px solid #216FF9;
			color: #216FF9;
		}
	}

	.sear_box {
		padding: 50rpx 30rpx 0 30rpx;
		box-sizing: border-box;

		input {
			border: 1px solid #ddd;
			border-radius: 8rpx;
			height: 70rpx;
			padding: 0 10rpx;
			box-sizing: border-box;
			font-size: 30rpx;
		}
	}

	.picker_list_wrap {
		height: 400rpx;

		.line {
			height: 70rpx;
			line-height: 70rpx;
			text-align: center;
		}
	}

	::v-deep {
		.u-page__tag-item {
			width: 23.5%;
			text-align: center;
			margin-right: 2%;
			margin-bottom: 20rpx;

			&:nth-child(4n) {
				margin-right: 0;
			}
		}

		.u-tag--medium {
			padding: 0 !important;
			line-height: 26px !important;
		}

		.u-tag {
			display: block !important;
			font-size: 28rpx;
		}

		.u-search__content {
			border-radius: 4px !important;
		}

		.uni-select {
			border: none;
			background: #fff;
			height: 88rpx;
			font-size: 28rpx;
			border-radius: 4px;
			padding: 0 40rpx;
		}

		.uni-icons {
			display: none;
		}

		.uni-select__input-placeholder {
			font-size: 28rpx;
		}

		.uni-date-x--border {
			height: 88rpx;
			line-height: 88rpx;
			padding: 0 40rpx;
			background: #fff;
			border-radius: 8rpx;
			box-sizing: border-box;
			border: none;
		}

		.uni-datetime-picker--btn,
		.uni-calendar-item__weeks-box .uni-calendar-item--checked {
			background: #F7BC05;
		}

		.uni-datetime-picker-btn-text {
			color: #F7BC05;
		}
	}

	.subtabs .subtab {
		position: relative;

		.num {
			position: absolute;
			top: 0;
			right: 0;
			width: 30rpx;
			height: 30rpx;
			text-align: center;
			line-height: 30rpx;
			font-size: 23rpx;
			background: #ff2c11;
			color: #fff;
			border-radius: 50%;
		}
	}

	.top_area {
		width: calc(100% - 96rpx);
		position: fixed;
		left: 48rpx;
		z-index: 100;

		.item {
			width: 49%;
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

		.item {
			padding: 40rpx;
			border-radius: 16rpx;
			background: #fff;
			box-shadow: 0 2rpx 6rpx 0 rgba(0, 0, 0, 0.15);
			margin-bottom: 20rpx;
			position: relative;


			.item_top {
				align-items: start;
				position: relative;
				background: #F6F6F6;
				border-radius: 8rpx;
				padding: 19rpx;

				.base_info {
					.mid_item {
						margin-right: 30rpx;

						image {
							width: 60rpx;
						}
					}

				}

				.status_icon {
					position: absolute;
					font-size: 0;
					top: 0;
					right: 0;

					image {
						width: 74rpx;
						height: 74rpx;
					}
				}

				.left {
					image {
						width: 88rpx;
						height: 88rpx;
						border-radius: 50%;
						margin-right: 19rpx;
						background: #ccc;
					}

					.base {
						color: #333333;

						.name {
							font-size: 33rpx;
							margin-bottom: 10rpx;
						}

						.idcard {
							font-size: 27rpx;
							color: #777;
						}
					}
				}

				.status {
					width: 100rpx;
					height: 46rpx;
					background: #216FF9;
					border-radius: 4rpx;
					font-size: 24rpx;
					color: #FFFFFF;
					line-height: 46rpx;
					text-align: center;

					&.entry {
						background: #EA9900;
					}

					&.wait_check_in {
						background: #2ED775;
					}

					&.check_in {
						background: #FFDE9F;
						color: #EA9900;
					}

					&.depart {
						background: #FF5353;
					}
				}
			}

			.item_bot {
				margin-top: 30rpx;

				.edit_follow {
					font-size: 27rpx;
					color: #2ED775;
					border-bottom: 2rpx dashed #2ED775;
				}

				.line {
					margin-top: 0;
				}
			}

			.item_middle {
				margin: 19rpx 0;
				border-bottom: 2rpx solid #E9E9E9;

				.mid_line {
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					margin-bottom: 16rpx;
					font-size: 30rpx;

					&:nth-child(2) {
						font-size: 24rpx;
						color: #777;
					}
				}
			}
		}
	}
</style>