<template>
	<view class="content" @click="closeLoginout">
		<view class="main flex flex_start">
			<!-- 左侧菜单栏 -->
			<leftMenu @getLeftWidth="getLeftWidth" @getPageName="getPageName" :pageName="pageName"></leftMenu>
			<!-- 右侧操作页 -->
			<view class="right" :style="{width:width+'px'}">
				<topHeader :topWidth="width" :left="left" :showLogout="showLogout" @changeShowLogout="changeShowLogout">
				</topHeader>
				<!-- <home v-if="pageName == 'home'"></home> -->
				<projectList v-if="pageName == 'project_list'" @getPageName="getPageName"></projectList>
				<collectProject v-if="pageName == 'collect_project'" @getPageName="getPageName"></collectProject>
				<addBroker v-if="pageName == 'add_broker'" @getPageName="getPageName"></addBroker>
				<editBroker v-if="pageName == 'edit_broker'" @getPageName="getPageName"></editBroker>
				<brokerList v-if="pageName == 'broker_list'" @getPageName="getPageName"></brokerList>
				<brokerDetail v-if="pageName == 'broker_detail'" @getPageName="getPageName"></brokerDetail>
				<addProject v-if="pageName == 'release_project'" @getPageName="getPageName"></addProject>
				<editProject v-if="pageName == 'edit_project'" @getPageName="getPageName"></editProject>
				<proDetail v-if="pageName == 'project_detail'" @getPageName="getPageName"></proDetail>
				<rechargeRecord v-if="pageName == 'recharge_record'"></rechargeRecord>
				<costRecord v-if="pageName == 'cost_record'"></costRecord>
				<employeeList v-if="pageName == 'employee_list'"></employeeList>
				<uploadCheckin v-if="pageName == 'upload_checkin'" @getPageName="getPageName"></uploadCheckin>
				<checkinList v-if="pageName == 'checkin_list'" @getPageName="getPageName"></checkinList>
				<liveDataList v-if="pageName == 'live_data_list'" @getPageName="getPageName"></liveDataList>
				<revisionPro v-if="pageName == 'revision_project'" @getPageName="getPageName"></revisionPro>
				<keftList v-if="pageName == 'kefu_list'" @getPageName="getPageName"></keftList>
				<chatRecord v-if="pageName == 'chat_record'" @getPageName="getPageName"></chatRecord>
				<aiProject v-if="pageName == 'ai_project'"></aiProject>
				<signRecord v-if="pageName == 'sign_record'"></signRecord>
				<liveList v-if="pageName == 'live_list'"></liveList>
				<anchorList v-if="pageName == 'anchor_list'"></anchorList>
				<chatStatistic v-if="pageName == 'chat_statistics'"></chatStatistic>
				<editCollectPro v-if="pageName == 'edit_collect_project'" @getPageName="getPageName"></editCollectPro>
				<accountList v-if="pageName == 'account_list'" @getPageName="getPageName"></accountList>
				<accountDetail v-if="pageName == 'account_detail'" @getPageName="getPageName"></accountDetail>
				<vipRecord v-if="pageName == 'vip_record'" @getPageName="getPageName"></vipRecord>
				<payAward v-if="pageName == 'pay_award'" @getPageName="getPageName"></payAward>
				<txRecord v-if="pageName == 'tx_record'" @getPageName="getPageName"></txRecord>
				<inviteList v-if="pageName == 'invite_list'" @getPageName="getPageName"></inviteList>
				<channelList v-if="pageName == 'channel_list'" @getPageName="getPageName"></channelList>
				<recommendPosi v-if="pageName == 'recom_position'" @getPageName="getPageName"></recommendPosi>
				<hotPosition v-if="pageName == 'hot_position'" @getPageName="getPageName"></hotPosition>
				<recommendDetail v-if="pageName == 'recom_detail'" @getPageName="getPageName"></recommendDetail>
				<paySetting v-if="pageName == 'pay_setting'" @getPageName="getPageName"></paySetting>
			</view>
		</view>
	</view>
</template>

<script>
	import topHeader from "@/components/top_header.vue"
	import leftMenu from "@/components/left_menu.vue"
	import botFooter from "@/components/bot_footer.vue"
	import home from "@/components/home.vue"
	import addBroker from "@/components/add_broker.vue"
	import addProject from "@/components/add_project.vue"
	import projectList from "@/components/project_list.vue"
	import proDetail from "@/components/project_detail.vue"
	import editProject from "@/components/edit_project.vue"
	import brokerList from "@/components/broker_list.vue"
	import brokerDetail from "@/components/broker_detail.vue"
	import editBroker from "@/components/edit_broker.vue"
	import rechargeRecord from "@/components/recharge_record.vue"
	import costRecord from "@/components/cost_record.vue"
	import employeeList from "@/components/employee_list.vue"
	import uploadCheckin from "@/components/upload_checkin.vue"
	import checkinList from "@/components/checkin_list.vue"
	import liveDataList from "@/components/live_data_list.vue"
	import revisionPro from "@/components/revision_project.vue"
	import keftList from "@/components/kefu_list.vue"
	import chatRecord from "@/components/chat_record.vue"
	import aiProject from "@/components/ai_project.vue"
	import signRecord from "@/components/sign_record.vue"
	import liveList from "@/components/live_list.vue"
	import anchorList from "@/components/anchor_list.vue"
	import chatStatistic from "@/components/chat_statistics.vue"
	import collectProject from "@/components/collect_project.vue"
	import editCollectPro from "@/components/edit_collect_project.vue"
	import accountList from "@/components/account_list.vue"
	import accountDetail from "@/components/account_detail.vue"
	import vipRecord from "@/components/vip_record.vue"
	import payAward from "@/components/pay_award.vue"
	import txRecord from "@/components/tx_record.vue"
	import inviteList from "@/components/invite_list.vue"
	import channelList from "@/components/channel_list.vue"
	import recommendPosi from "@/components/recom_position.vue"
	import recommendDetail from "@/components/recom_detail.vue"
	import hotPosition from "@/components/hot_position.vue"
	import paySetting from "@/components/pay_setting.vue"
	export default {
		data() {
			return {
				width: 0,
				left: 0,
				title: '',
				pagination: {},
				pageName: "",
				showLogout: false
			}
		},
		components: {
			liveList,
			anchorList,
			topHeader,
			leftMenu,
			botFooter,
			home,
			addBroker,
			addProject,
			projectList,
			proDetail,
			brokerDetail,
			editBroker,
			editProject,
			brokerList,
			rechargeRecord,
			costRecord,
			employeeList,
			uploadCheckin,
			checkinList,
			liveDataList,
			revisionPro,
			keftList,
			chatRecord,
			aiProject,
			signRecord,
			chatStatistic,
			collectProject,
			editCollectPro,
			accountList,
			accountDetail,
			vipRecord,
			payAward,
			txRecord,
			inviteList,
			channelList,
			recommendPosi,
			recommendDetail,
			hotPosition,
			paySetting
		},
		onLoad() {
			// 设置本地存储tabs
			// uni.setStorageSync("tabs",[])
			// 获取page_name
			let systemInfo = uni.getSystemInfoSync()
			this.width = systemInfo.windowWidth - 200
			var token = uni.getStorageSync("token");
			if (!token) {
				uni.showModal({
					title: "请先登录",
					showCancel: false,
					success(res) {
						if (res.confirm) {
							uni.redirectTo({
								url: "/pages/login/login"
							})
						}
					}
				})
				return
			}
			let paramArr = []
			if (location.href.indexOf("?") != -1) {
				paramArr = location.href.split("?")[1].split("&")
			}
			for (var i = 0; i < paramArr.length; i++) {
				if (paramArr[i].indexOf("page_name") != -1) {
					this.pageName = paramArr[i].split("=")[1]
				}
			}
		},
		methods: {
			changeShowLogout(e) {
				this.showLogout = e
			},
			closeLoginout() {
				this.showLogout = false
			},
			getLeftWidth(e) {
				let systemInfo = uni.getSystemInfoSync()
				console.log(systemInfo.windowWidth, e)
				this.width = systemInfo.windowWidth - e
				this.left = e
			},
			getPageName(e) {
				console.log(e)
				this.pageName = e.pageName
				this.showLogout = false
			},
			handlePage(e) {
				this.pagination = e
			},
			getInfo() {
				let _this = this
				this.$request("/broker/info").then(res => {
					if (res.code == 0) {
						uni.setStorageSync("userInfo", res.data)
						if (this.pageName != "base_info") {
							if (res.data.id == 0) {
								uni.showModal({
									title: "请先提交公司基本信息，其他功能才可正常使用。",
									confirmText: "去提交",
									showCancel: false,
									success(resp) {
										if (resp.confirm) {
											_this.setPageName({
												pageName: "base_info"
											})
										}
									}
								})
							}
						}

					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.main {
		align-items: start;

		.right {
			width: calc(100% - 200px);
			height: 100vh;
			background: #F2F2F2;
			box-sizing: border-box;
			position: relative;
			overflow-y: scroll;
		}
	}
</style>