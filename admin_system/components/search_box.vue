<template>
	<view class="search_box flex flex_start">
		<view class="line flex flex_start" v-show="showCode">
			<view class="tit">{{codeStr?codeStr:"账单编号"}}</view>
			<view class="cont flex flex_start">
				<input type="text" v-model="code" :placeholder="'请输入'+codeStr?codeStr:'账单编号'"
					placeholder-style="font-size:14px;" />
			</view>
		</view>
		<view class="line flex flex_start" v-show="showUser">
			<view class="tit">{{userStr?userStr:"咨询用户"}}</view>
			<view class="cont flex flex_start">
				<input type="text" v-model="userName" placeholder="ID/用户名" placeholder-style="font-size:14px;" />
			</view>
		</view>
		<view class="line flex flex_start" v-show="showEmployee">
			<view class="tit">{{employeeStr?employeeStr:"工人"}}</view>
			<view class="cont flex flex_start">
				<input type="text" v-model="employeeName" placeholder="姓名/手机号/昵称" placeholder-style="font-size:14px;" />
			</view>
		</view>
		<view class="line flex flex_start" v-show="showAccount">
			<view class="tit">账号</view>
			<view class="cont flex flex_start">
				<input type="text" v-model="account" placeholder="姓名/手机号" placeholder-style="font-size:14px;" />
			</view>
		</view>
		<view class="line flex flex_start" v-show="showBroker">
			<view class="tit">公司名称</view>
			<view class="cont flex flex_start">
				<input type="text" v-model="brokerName" placeholder="请输入公司名称" placeholder-style="font-size:14px;" />
			</view>
		</view>
		<view class="line flex flex_start" v-show="showSeleBroker">
			<view class="tit">选择公司</view>
			<view class="cont flex flex_start">
				<uni-data-select v-model="comValue" :localdata="comRange" @change="comChange"></uni-data-select>
			</view>
		</view>
		<view class="line flex flex-start" v-if="showWorkTime">
			<view class="tit">用工日期</view>
			<view class="cont flex flex_start noborder">
				<uni-datetime-picker type="date" :value="workTime" @change="chengeTime" />
			</view>
		</view>
		<view class="line flex flex_start" v-show="showMobile">
			<view class="tit">手机号码</view>
			<view class="cont flex flex_start">
				<input type="text" v-model="mobile" placeholder="请输入手机号码" placeholder-style="font-size:14px;" />
			</view>
		</view>
		<view class="line flex flex_start" v-show="showTemp">
			<view class="tit">模板名称</view>
			<view class="cont flex flex_start">
				<input type="text" v-model="checkinTemp" placeholder="请输入模板名称" placeholder-style="font-size:14px;" />
			</view>
		</view>

		<view class="line flex flex_start" v-show="showCheckin">
			<view class="tit">搜索考勤</view>
			<view class="cont flex flex_start">
				<input type="text" v-model="checkinStr" placeholder="请输入考勤名称/编号" placeholder-style="font-size:14px;" />
			</view>
		</view>
		<view class="line flex flex_start" v-show="showBatch">
			<view class="tit">批次号</view>
			<view class="cont flex flex_start">
				<input type="text" v-model="batchId" placeholder="请输入批次号" placeholder-style="font-size:14px;" />
			</view>
		</view>
		<view class="line flex flex_start" v-show="showSalaryId">
			<view class="tit">工资单号</view>
			<view class="cont flex flex_start">
				<input type="text" v-model="salaryId" placeholder="请输入工资单号" placeholder-style="font-size:14px;" />
			</view>
		</view>
		<view class="line flex flex_start" v-show="showProject">
			<view class="tit">搜索职位</view>
			<view class="cont flex flex_start">
				<input type="text" v-model="projectName" placeholder="请输入职位名称/编号" placeholder-style="font-size:14px;" />
			</view>
		</view>
		<view class="line flex flex_start" v-show="showName">
			<view class="tit">搜索账号</view>
			<view class="cont flex flex_start">
				<input type="text" v-model="keyword" placeholder="请输入账号名称/编号" placeholder-style="font-size:14px;" />
			</view>
		</view>
		<view class="line flex flex_start" v-show="showPlan">
			<view class="tit">搜索计划</view>
			<view class="cont flex flex_start">
				<input type="text" v-model="planName" placeholder="请输入计划名称/编号" placeholder-style="font-size:14px;" />
			</view>
		</view>
		<view class="line flex flex_start" v-show="showContractName">
			<view class="tit">搜索合同模板</view>
			<view class="cont flex flex_start">
				<input type="text" v-model="contractName" placeholder="请输入模板名称" placeholder-style="font-size:14px;" />
			</view>
		</view>
		<view class="line flex flex_start" v-show="showCreatTime">
			<view class="tit">立项时间</view>
			<view class="cont flex flex_start">
				<uni-datetime-picker type="date" :value="createTime" @change="changeCreateTime" />
			</view>
		</view>
		<view class="line flex flex_start" v-show="showLiveAccount">
			<view class="tit">直播账号</view>
			<view class="cont flex flex_start">
				<uni-data-select v-model="liveValue" :localdata="liveRange" @change="liveChange"></uni-data-select>
			</view>
		</view>
		<view class="line flex flex_start" v-show="showAnchor">
			<view class="tit">接入主播</view>
			<view class="cont flex flex_start">
				<uni-data-select v-model="anchorValue" :localdata="anchorRange"
					@change="anchorChange"></uni-data-select>
			</view>
		</view>
		<view class="line flex flex_start" v-show="showPlatform">
			<view class="tit">直播平台</view>
			<view class="cont flex flex_start">
				<uni-data-select v-model="anchorValue" :localdata="anchorRange"
					@change="anchorChange"></uni-data-select>
			</view>
		</view>
		<view class="line flex flex_start" v-show="showKefu">
			<view class="tit">客服名称</view>
			<view class="cont flex flex_start">
				<input type="text" v-model="kefuName" placeholder="请输入客服名称" placeholder-style="font-size:14px;" />
			</view>
		</view>
		<view class="line flex flex_start" v-show="showChannel">
			<view class="tit">频道</view>
			<view class="cont flex flex_start">
				<input type="text" v-model="channelName" placeholder="频道ID/名称" placeholder-style="font-size:14px;" />
			</view>
		</view>
		<view class="line flex flex_start" v-show="showChannelCompany">
			<view class="tit">主体</view>
			<view class="cont flex flex_start">
				<input type="text" v-model="channelCompany" placeholder="所属主体名称" placeholder-style="font-size:14px;" />
			</view>
		</view>
		<view class="line flex flex_start" v-show="showChannelStatus">
			<view class="tit">状态</view>
			<view class="cont flex flex_start">
				<uni-data-select v-model="channelStatusValue" :localdata="channelStatusRange"
					@change="channelStatusChange"></uni-data-select>
			</view>
		</view>
		<view class="line flex flex_start" v-show="showKefuRange">
			<view class="tit">客服名称</view>
			<view class="cont flex flex_start">
				<uni-data-select v-model="kefuValue" :localdata="kefuRange" @change="kefuChange"></uni-data-select>
			</view>
		</view>
		<view class="line flex flex_start" v-show="showPlatform">
			<view class="tit">工人状态</view>
			<view class="cont flex flex_start">
				<uni-data-select v-model="anchorValue" :localdata="anchorRange"
					@change="anchorChange"></uni-data-select>
			</view>
		</view>
		<view class="line flex flex_start" v-show="showLoginStatus">
			<view class="tit">登录权限</view>
			<view class="cont flex flex_start">
				<uni-data-select v-model="loginValue" :localdata="loginRange" @change="loginChange"></uni-data-select>
			</view>
		</view>
		<view class="line flex flex_start" v-show="showVeriStatus">
			<view class="tit">资质情况</view>
			<view class="cont flex flex_start">
				<uni-data-select v-model="veriValue" :localdata="veriRange" @change="veriChange"></uni-data-select>
			</view>
		</view>
		<!-- <view class="line flex flex_start" v-show="showIdCard">
			<view class="tit">身份证号</view>
			<view class="cont flex flex_start">
				<input type="text" v-model="idCard" placeholder="请输入身份证号" placeholder-style="font-size:14px;" />
			</view>
		</view> -->
		<view class="line flex flex_start" v-show="showCreditBillType">
			<view class="tit">账单类型</view>
			<view class="cont flex flex_start">
				<uni-data-select v-model="creditBillType" :localdata="creditBillTypeRange"
					@change="creditBillTypeChange"></uni-data-select>
			</view>
		</view>
		<view class="line flex flex_start" v-show="showRange">
			<view class="tit">{{timeStr}}时间</view>
			<view class="cont flex flex_start" style="width:auto;">
				<uni-datetime-picker v-model="range" type="daterange" rangeSeparator="至" ref="timeStrPicker" />
				<!-- <uni-datetime-picker
					type="date"
					:value="startTime"
					@change="changeStartTime"
				/> -->
			</view>
		</view>
		<view class="line flex flex_start" v-show="showRange2">
			<view class="tit">{{timeStr2}}时间</view>
			<view class="cont flex flex_start" style="width:auto;">
				<uni-datetime-picker v-model="range2" type="daterange" rangeSeparator="至" ref="timeStrPicker2" />
				<!-- <uni-datetime-picker
					type="date"
					:value="startTime"
					@change="changeStartTime"
				/> -->
			</view>
		</view>
		<view class="line flex flex_start" v-show="showRechargeStatus">
			<view class="tit">充值状态</view>
			<view class="cont flex flex_start">
				<uni-data-select v-model="statusValue" :localdata="statusRange"
					@change="statusChange"></uni-data-select>
			</view>
		</view>

		<view class="line flex flex_start" v-show="showTxStatus">
			<view class="tit">提现状态</view>
			<view class="cont flex flex_start">
				<uni-data-select v-model="txValue" :localdata="txRange" @change="txChange"></uni-data-select>
			</view>
		</view>
		<view class="line flex flex_start" v-show="showInvite">
			<view class="tit">邀请方式</view>
			<view class="cont flex flex_start">
				<uni-data-select v-model="inviteValue" :localdata="inviteRange"
					@change="inviteChange"></uni-data-select>
			</view>
		</view>
		<view class="line flex flex_start" v-show="showChatFrom">
			<view class="tit">会话来源</view>
			<view class="cont flex flex_start">
				<uni-data-select v-model="chatFromValue" :localdata="chatRange"
					@change="chatFromChange"></uni-data-select>
			</view>
		</view>
		<view class="line flex flex_start" v-show="showAdMain">
			<view class="tit">广告主平台</view>
			<view class="cont flex flex_start">
				<uni-data-select v-model="adMainValue" :localdata="adMainRange"
					@change="adMainChange"></uni-data-select>
			</view>
		</view>
		<view class="line flex flex_start" v-show="showAdSub">
			<view class="tit">广告子平台</view>
			<view class="cont flex flex_start">
				<uni-data-select v-model="adSubValue" :localdata="adSubRange" @change="adSubChange"></uni-data-select>
			</view>
		</view>
		<!-- <view class="line flex flex_start" v-show="showEnd">
			<view class="tit">{{timeStr}}时间(结束)</view>
			<view class="cont flex flex_start">
				<uni-datetime-picker
					type="date"
					:value="endTime"
					@change="changeEndTime"
				/>
			</view>
		</view> -->
		<view class="line flex flex_start">
			<view class="btn reset" @click="reset">重置</view>
			<view class="btn search" @click="search">搜索</view>
			<view class="btn search" @click="getOut" v-if="showOut" style="margin-left: 15px;">导出</view>
		</view>
	</view>
</template>

<script>
	import commonData from "@/common/commonData"
	export default {
		props: ["showMobile", "showIdCard", "showCode", "showEmployee", "showBroker", "showWorkTime", "showRange",
			"showEnd", "showTemp", "showProject", "showCheckin", "showBatch", "showSalaryId", "showCreatTime",
			"showOut", "showAccount",
			"timeStr", "showContractName", "showPlan", "showKefu", "showProgress", "showSeleBroker",
			"searCom", "searPro", "searStart", "searEnd", "showName", "showUser", "showLiveAccount", "showAnchor",
			"showPlatform", "showKefuRange", "showRechargeStatus", "showChatFrom", "showAdMain", "showAdSub",
			"showVeriStatus",
			"showLoginStatus", "userStr", "employeeStr", "showTxStatus", "showRange2", "timeStr2", "showInvite",
			"showChannelCompany",
			"showChannel", "showChannelStatus", "seleStatus", "codeStr", "showCreditBillType"
		],
		data() {
			return {
				channelStatusRange: commonData.channelStatus.slice(0, 3),
				channelStatusValue: "",
				channelCompany: "",
				channelName: "",
				inviteValue: "",
				inviteRange: commonData.inviteMethods,
				txValue: "",
				txRange: commonData.txStatus,
				veriValue: "",
				veriRange: commonData.veriStatus,
				loginValue: "",
				loginRange: commonData.loginStatus,
				comRange: [],
				adMainRange: commonData.adMainPlat,
				adMainValue: "",
				adSubRange: commonData.adSubPlat,
				adSubValue: "",
				chatRange: commonData.chatFrom,
				chatFromValue: "",
				statusValue: "",
				statusRange: commonData.rechargeStatus,
				userName: "",
				anchorValue: "",
				anchorRange: [],
				kefuValue: "",
				kefuRange: [],
				liveValue: "",
				liveRange: [],
				keyword: "",
				comValue: "",
				companyName: "",
				contactName: "",
				mobile: "",
				idCard: "",
				name: "",
				code: "",
				employeeName: "",
				brokerName: "",
				workTime: "",
				startTime: "",
				endTime: "",
				startTime2: "",
				endTime2: "",
				checkinTemp: "",
				projectName: "",
				checkinStr: "",
				batchId: "",
				salaryId: "",
				createTime: "",
				contractName: "",
				range: ["", ""],
				range2: ["", ""],
				account: "",
				planName: "",
				kefuName: "",
				liveName: "",
				anchorName: "",
				creditBillTypeRange: [{
						value: "",
						text: "全部"
					}, {
						value: "recharge_credit",
						text: "充值积分"
					},
					{
						value: "sign_cost",
						text: "报名扣除"
					}
				],
				creditBillType: ""
			}
		},
		watch: {
			range(newval) {
				console.log("范围选:", this.range);
			},
		},
		async created() {
			this.comValue = this.searCom ? this.searCom : ""
			this.range[0] = this.searStart ? this.searStart : ""
			this.range[1] = this.searEnd ? this.searEnd : ""
			this.range2[0] = this.searStart2 ? this.searStart2 : ""
			this.range2[1] = this.searEnd2 ? this.searEnd2 : ""
			this.projectName = this.searPro ? decodeURIComponent(this.searPro) : ""
			this.channelStatusValue = this.seleStatus ? this.seleStatus : ""
			if (this.showAnchor) {
				this.anchorRange = await this.getAnchors()

			}
			if (this.showLiveAccount) {
				this.liveRange = await this.getLive()
			}

			if (this.showKefuRange) {
				this.kefuRange = await this.getKefu()
			}
			if (this.showSeleBroker) {
				this.comRange = await this.getCompany()
				this.$emit("getCompany", this.comRange)

			}
			// this.$emit("getSeleData", this.anchorRange, this.liveRange)
		},
		methods: {
			creditBillTypeChange() {},
			channelStatusChange() {

			},
			statusChange() {

			},
			txChange() {

			},
			inviteChange() {},
			chatFromChange() {

			},
			veriChange() {},
			loginChange() {},
			getCompany() {
				let _this = this
				return new Promise(resolve => {
					_this.$request("/admin/companies/all").then(res => {
						if (res.code == 0) {
							let len = res.data.list.length
							let arr = []
							for (let i = 0; i < len; i++) {
								let obj = {
									value: res.data.list[i].id,
									text: res.data.list[i].name
								}
								arr.push(JSON.parse(JSON.stringify(obj)))
							}
							resolve(arr)
						}
					})
				})

			},
			adSubChange() {},
			adMainChange() {},
			liveChange(e) {
				console.log(e)
				if (!e) {
					this.liveValue = ""
					this.liveName = ""
				} else {
					this.liveName = this.liveRange.filter(el => {
						return el.value == e
					})[0].text
				}


			},
			kefuChange(e) {
				console.log(this.kefuValue, "kefu")
				// if (!e) {
				// 	this.anchorValue = ""
				// 	this.anchorName = ""
				// } else {
				// 	this.anchorName = this.anchorRange.filter(el => {
				// 		return el.value == e
				// 	})[0].text
				// }

			},
			anchorChange(e) {
				console.log(this.anchorValue, "anchor")
				// if (!e) {
				// 	this.anchorValue = ""
				// 	this.anchorName = ""
				// } else {
				// 	this.anchorName = this.anchorRange.filter(el => {
				// 		return el.value == e
				// 	})[0].text
				// }

			},
			search() {
				let searchObj = {
					companyName: "",
					companyCode: "",
					contactName: this.contactName,
					mobile: this.mobile,
					name: this.name,
					idCard: this.idCard,
					code: this.code,
					employeeName: this.employeeName,
					workTime: this.workTime,
					brokerName: this.brokerName,
					startTime: this.range[0] ? this.range[0] : "",
					endTime: this.range[1] ? this.range[1] : "",
					startTime2: this.range2[0] ? this.range2[0] : "",
					endTime2: this.range2[1] ? this.range2[1] : "",
					searTempName: this.checkinTemp,
					projectName: this.projectName,
					checkinStr: this.checkinStr,
					batchId: this.batchId,
					salaryId: this.salaryId,
					createTime: this.createTime,
					contractName: this.contractName,
					account: this.account,
					planName: this.planName,
					kefuName: this.kefuName,
					comId: this.comValue,
					keyword: this.keyword,
					liveName: this.liveName,
					anchorName: this.anchorValue,
					userName: this.userName,
					kefuValue: this.kefuValue,
					rechargeStatus: this.statusValue,
					chatFrom: this.chatFromValue,
					adMain: this.adMainValue,
					adSub: this.adSubValue,
					loginStatus: this.loginValue,
					veriStatus: this.veriValue,
					txValue: this.txValue,
					inviteValue: this.inviteValue,
					channelCompany: this.channelCompany,
					channelName: this.channelName,
					channelStatusValue: this.channelStatusValue,
					creditBillType: this.creditBillType
				}
				let reg = /[0-9]/
				if (reg.test(this.companyName)) {
					// 包含数字为统一信用代码
					searchObj.companyCode = this.companyName
				} else {
					searchObj.companyName = this.companyName
				}
				this.$emit("handleSearch", searchObj)
			},
			comChange(e) {
				console.log(e, this.comValue)
			},
			getOut() {
				let obj = {
					companyName: "",
					companyCode: "",
					contactName: this.contactName,
					mobile: this.mobile,
					name: this.name,
					idCard: this.idCard,
					code: this.code,
					employeeName: this.employeeName,
					workTime: this.workTime,
					brokerName: this.brokerName,
					startTime: this.range[0] ? this.range[0] : "",
					endTime: this.range[1] ? this.range[1] : "",
					searTempName: this.checkinTemp,
					projectName: this.projectName,
					checkinStr: this.checkinStr,
					batchId: this.batchId,
					salaryId: this.salaryId,
					createTime: this.createTime,
					contractName: this.contractName,
					account: this.account,
					planName: this.planName,
					kefuName: this.kefuName,
					comId: this.comValue,
					keyword: this.keyword,
					liveName: this.liveName,
					anchorName: this.anchorName,
					userName: this.userName,
					adMain: this.adMainValue,
					adSub: this.adSubValue,
					loginStatus: this.loginValue,
					veriStatus: this.veriValue,

				}
				this.$emit("putout", obj)
			},
			chengeTime(e) {
				this.workTime = e
			},
			changeStartTime(e) {
				this.startTime = e
			},
			changeEndTime(e) {
				this.endTime = e
			},
			changeCreateTime(e) {
				this.endTime = e
			},
			reset() {
				this.keyword = ""
				this.companyName = ""
				this.contactName = ""
				this.mobile = ""
				this.idCard = ""
				this.name = ""
				this.code = ""
				this.employeeName = ""
				this.brokerName = ""
				this.workTime = ""
				this.startTime = ""
				this.endTime = ""
				this.checkinTemp = ""
				this.projectName = ""
				this.checkinStr = ""
				this.batchId = ""
				this.salaryId = ""
				this.createTime = ""
				this.contractName = ""
				this.account = ""
				this.planName = ""
				this.kefuName = ""
				this.comValue = ""
				this.liveName = ""
				this.anchorName = ""
				this.liveValue = ""
				this.anchorValue = ""
				this.userName = ""
				this.kefuValue = ""
				this.statusValue = ""
				this.chatFromValue = ""
				this.adMainValue = ""
				this.adSubValue = ""
				this.loginValue = ""
				this.veriValue = ""
				this.txValue = ""
				this.inviteValue = ""
				this.channelCompany = ""
				this.channelName = ""
				this.channelStatusValue = ""
				this.creditBillType = ""
				this.range = ["", ""]
				this.range2 = ["", ""]
				this.$refs.timeStrPicker.clear()
				this.$refs.timeStrPicker2.clear()
				this.search()
				// 
			}
		}
	}
</script>

<style lang="scss">
	::v-deep .uni-select {
		border-bottom: none !important;
		border: none;
	}

	::v-deep uni-picker {
		width: 100%;
	}

	::v-deep .uni-select__input-placeholder {
		font-size: 14px;
	}

	::v-deep .uni-date-x--border {
		border: none;
	}

	::v-deep .uni-date-x {
		background: transparent;
	}

	::v-deep {
		.uni-scroll-view-content {
			padding: 0 !important;
		}

		.uni-select__selector-item text {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}

	.search_box {
		background: #fff;
		border-radius: 8px;
		margin: 20px 0 0 0;
		flex-wrap: wrap;

		.line {
			margin-right: 15px;
			margin-bottom: 15px;

			.tit {
				font-size: 16px;
				color: #333;
				margin-right: 15px;
				font-weight: bold;
			}

			.cont {
				min-width: 230px;
				height: 40px;
				line-height: 40px;
				box-sizing: border-box;
				padding: 10px;
				// border: 1px solid #d4d4d4;
				font-size: 14px;
				color: #666;
				position: relative;
				background: #EFF0F1;
				border-radius: 4px;


				image {
					width: 15px;
					position: absolute;
					top: 50%;
					right: 10px;
					transform: translateY(-50%);
				}

				input {
					width: 100%;
					height: 100%;
				}

				.conect {
					margin: 0 10px;
					color: #333;
				}

			}

			.btn {
				height: 38px;
				line-height: 38px;
				width: 80px;
				text-align: center;
				border-radius: 4px;
				cursor: pointer;
			}

			.reset {
				border: 1px solid #d4d4d4;
				margin-right: 15px;

				&:hover {
					background: #f0f0f0;
					color: #0092ff;
					cursor: pointer;
				}
			}

			.search {
				background: #0092ff;
				color: #fff;

				&:hover {
					background: #0ec8f1;
					cursor: pointer;
				}
			}
		}
	}
</style>