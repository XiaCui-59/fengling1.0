<template>
	<view class="content" @click="closeLoginout">
		<view class="main flex flex_start">
			<!-- 左侧菜单栏 -->
			<leftMenu @getLeftWidth="getLeftWidth" @getPageName="getPageName" :pageName="pageName"></leftMenu>
			<!-- 右侧操作页 -->
			<view class="right" :style="{width:width+'px'}">
				<topHeader :topWidth="width" :left="left" :showLogout="showLogout" @changeShowLogout="changeShowLogout"
					:info="userInfo">
				</topHeader>
				<home v-if="pageName == 'home'" @getPageName="getPageName" :info="userInfo"></home>
				<addProject v-if="pageName == 'add_project'" @getPageName="getPageName" :info="userInfo"></addProject>
				<editProject v-if="pageName == 'edit_project'" @getPageName="getPageName"></editProject>
				<projectList v-if="pageName == 'project_list'" @getPageName="getPageName"></projectList>
				<proDetail v-if="pageName == 'project_detail'" @getPageName="getPageName"></proDetail>
				<rechargeRecord v-if="pageName == 'recharge_record'"></rechargeRecord>
				<costRecord v-if="pageName == 'cost_record'"></costRecord>
				<uploadCheckin v-if="pageName == 'upload_checkin'" @getPageName="getPageName"></uploadCheckin>
				<checkinList v-if="pageName == 'checkin_list'" @getPageName="getPageName"></checkinList>
				<checkinTemp v-if="pageName == 'checkin_temp'"></checkinTemp>
				<signRecord v-if="pageName == 'sign_record'" @getPageName="getPageName"></signRecord>
				<financialAccount v-if="pageName == 'financial_account'" @getPageName="getPageName"></financialAccount>
				<choosePay v-if="pageName == 'choose_pay'" @getPageName="getPageName"></choosePay>
				<wechatPay v-if="pageName == 'wechat_pay'" @getPageName="getPageName"></wechatPay>
				<aliPay v-if="pageName == 'alipay_page'" @getPageName="getPageName"></aliPay>
				<baseInfo v-if="pageName == 'company_info'" @getPageName="getPageName" @updateUserInfo="getInfo"
					:info="userInfo"></baseInfo>
				<myInfo v-if="pageName == 'person_info'" @getPageName="getPageName" @updateUserInfo="getInfo"
					:info="userInfo"></myInfo>
				<setPassword v-if="pageName == 'set_password'" @getPageName="getPageName" :info="userInfo">
				</setPassword>
			</view>
		</view>
	</view>
</template>

<script>
	import topHeader from "@/components/top_header.vue"
	import leftMenu from "@/components/left_menu.vue"

	import home from "@/components/home.vue"
	import addProject from "@/components/add_project.vue"
	import projectList from "@/components/project_list.vue"
	import proDetail from "@/components/project_detail.vue"
	import editProject from "@/components/edit_project.vue"
	import uploadCheckin from "@/components/upload_checkin.vue"
	import checkinList from "@/components/checkin_list.vue"
	import checkinTemp from "@/components/checkin_temp.vue"
	import rechargeRecord from "@/components/recharge_record.vue"
	import costRecord from "@/components/cost_record.vue"
	import signRecord from "@/components/sign_record.vue"
	import financialAccount from "@/components/financial_account.vue"
	import choosePay from "@/components/choose_pay.vue"
	import wechatPay from "@/components/wechat_pay.vue"
	import aliPay from "@/components/alipay_page.vue"
	import baseInfo from "@/components/base_info.vue"
	import myInfo from "@/components/my_info.vue"
	import setPassword from "@/components/set_password.vue"
	export default {
		data() {
			return {
				width: 0,
				left: 0,
				title: '',
				pagination: {},
				pageName: "",
				showLogout: false,
				userInfo: {
					"broker": {
						"id": "",
						"name": "",
						"id_card_number": "",
						"mobile": "",
						"avatar": "",
						"balance": "",
						"status": "",
						"review_status": ""
					},
					"company": {
						"name": "",
						"unified_social_credit_code": "",
						"type": "",
						"legal_person_name": "",
						"business_address": "",
						"business_license_image": "",
						"human_resources_permit_image": ""
					}
				}
			}
		},
		components: {
			topHeader,
			leftMenu,
			home,
			addProject,
			projectList,
			proDetail,
			editProject,
			uploadCheckin,
			checkinList,
			checkinTemp,
			rechargeRecord,
			costRecord,
			signRecord,
			financialAccount,
			choosePay,
			wechatPay,
			aliPay,
			baseInfo,
			myInfo,
			setPassword
		},
		onLoad() {
			this.getInfo()
			let systemInfo = uni.getSystemInfoSync()
			this.width = systemInfo.windowWidth - 200
			// 设置本地存储tabs
			// uni.setStorageSync("tabs",[])
			// 获取page_name
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
			updateUerInfo(e) {
				this.userInfo = e
			},
			getUerInfo(e) {

			},
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
			toNext(e) {
				console.log(e)
				this.currentPage = e
			},
			handlePage(e) {
				this.pagination = e
			},
			getInfo() {
				let _this = this
				this.$request("/broker/info").then(res => {
					if (res.code == 0) {
						this.userInfo = res.data
						uni.setStorageSync("userInfo", res.data)
						// 判断是否提交公司信息
						switch (this.userInfo.broker.review_status) {
							case "waiting_submit":
								// 待提交资料
								uni.showModal({
									title: "您还未提交公司资质，请先完成公司认证",
									success(res) {
										if (res.confirm) {
											_this.setPageName({
												pageName: "company_info"
											})
											_this.getPageName({
												pageName: "company_info"
											})
										}
									}
								})
								break;
							case "rejected":
								// 资料被拒绝
								uni.showModal({
									title: "您提交的公司资质未通过审核，请重新提交资质认证",
									success(res) {
										if (res.confirm) {
											_this.setPageName({
												pageName: "company_info"
											})
											_this.getPageName({
												pageName: "company_info"
											})
										}
									}
								})
								break;
							default:
								break;
						}
					}
				})
			},
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
			overflow-y: scroll;
			// padding-top: 50px;
			// padding-bottom: 50px;
			box-sizing: border-box;
			position: relative;
		}
	}
</style>