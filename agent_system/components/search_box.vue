<template>
	<view class="search_box flex flex_start">
		<view class="line flex flex_start" v-show="showCode">
			<view class="tit">账单编号</view>
			<view class="cont flex flex_start">
				<input type="text" v-model="code" placeholder="请输入账单编号" placeholder-style="font-size:14px;" />
			</view>
		</view>
		<view class="line flex flex_start" v-show="showEmployee">
			<view class="tit">工人</view>
			<view class="cont flex flex_start">
				<input type="text" v-model="employeeName" placeholder="姓名/手机号" placeholder-style="font-size:14px;" />
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
		<view class="line flex flex_start" v-show="showKefu">
			<view class="tit">客服名称</view>
			<view class="cont flex flex_start">
				<input type="text" v-model="kefuName" placeholder="请输入客服名称" placeholder-style="font-size:14px;" />
			</view>
		</view>
		<view class="line flex flex_start" v-show="showUser">
			<view class="tit">咨询客户</view>
			<view class="cont flex flex_start">
				<input type="text" v-model="userName" placeholder="请输入咨询客户名称" placeholder-style="font-size:14px;" />
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
		<!-- <view class="line flex flex_start" v-show="showIdCard">
			<view class="tit">身份证号</view>
			<view class="cont flex flex_start">
				<input type="text" v-model="idCard" placeholder="请输入身份证号" placeholder-style="font-size:14px;" />
			</view>
		</view> -->
		<view class="line flex flex_start" v-show="showRange">
			<view class="tit">{{timeStr}}时间</view>
			<view class="cont flex flex_start" style="width:auto;">
				<uni-datetime-picker v-model="range" type="daterange" rangeSeparator="至" />
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
			"timeStr", "showContractName", "showPlan", "showKefu", "showProgress", "showSeleBroker", "comRange",
			"searCom", "searPro", "searStart", "searEnd", "showName", "showUser", "showLiveAccount", "showAnchor",
			"showPlatform", "showRechargeStatus"
		],
		data() {
			return {
				statusValue: "",
				statusRange: commonData.rechargeStatus,
				userName: "",
				anchorValue: "",
				anchorRange: [],
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
				checkinTemp: "",
				projectName: "",
				checkinStr: "",
				batchId: "",
				salaryId: "",
				createTime: "",
				contractName: "",
				range: ["", ""],
				account: "",
				planName: "",
				kefuName: "",
				liveName: "",
				anchorName: ""
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
			this.projectName = this.searPro ? decodeURIComponent(this.searPro) : ""
			if (this.showAnchor) {
				this.anchorRange = await this.getAnchors()
			}
			if (this.showLiveAccount) {
				this.liveRange = await this.getLive()
			}
		},
		methods: {
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
			statusChange() {

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
					rechargeStatus: this.statusValue
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
					userName: this.userName
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
				this.statusValue = ""
				this.$set(this.range, 0, "")
				this.$set(this.range, 1, "")
				this.search()
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
				width: 210px;
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