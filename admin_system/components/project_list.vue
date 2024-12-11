<template>
	<view class="board">
		<view class="box">
			<view class="title">职位列表</view>
			<searchBox :showProject="true" :showRange="true" :showSeleBroker="true" :timeStr="timeStr"
				:searCom="searComId" :searPro="searPro" :searStart="searStartTime" :searEnd="searEndTime"
				@handleSearch="handleSearch">
			</searchBox>
			<view class="table_wrap">
				<view class="tabs flex flex_start">
					<view class="tab" v-for="(item,index) in tabs" :class="currentTab.value==item.value?'active':''"
						@click="changeTab(item)">{{item.text}}</view>
				</view>
				<view class="btns flex flex_end" v-if="currentTab.value=='running'">
					<view class="btn" @click="toAI" style="margin-bottom: 15px;">同步到AI</view>
				</view>
				<uni-table border stripe emptyText="暂无更多数据">
					<uni-tr style="background: #f6f6f6;">
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">序号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位编号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位名称</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">劳务公司</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位经理</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">工人薪资</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">待初筛</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">候选中</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">待面试</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">待入职</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">已入职</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位状态</uni-th>
						<!-- <uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">数据清洗</uni-th> -->
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">创建时间</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位ID</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">操作</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in list" :key="index">
						<uni-td align="center">{{index+1+currentCount*(currentPage - 1)}}</uni-td>
						<uni-td align="center">{{item.code}}</uni-td>
						<uni-td align="center">{{item.name}}</uni-td>
						<uni-td align="center">{{item.broker_company_name}}</uni-td>
						<uni-td align="center">{{item.broker_name}}</uni-td>
						<uni-td
							align="center">{{(item.worker_salary_min == item.worker_salary_max?item.worker_salary_min:(item.worker_salary_min+"-"+item.worker_salary_max))+"元/"+periodList.filter(el=>{return el.value==item.worker_salary_type})[0].text}}
						</uni-td>
						<uni-td align="center">{{item.enrolled_count}}</uni-td>
						<uni-td align="center">{{item.wait_check_in_count}}</uni-td>
						<uni-td align="center">{{item.check_in_count}}</uni-td>
						<uni-td align="center">{{item.wait_entry_count}}</uni-td>
						<uni-td align="center">{{item.on_job_worker_count}}</uni-td>
						<uni-td align="center">
							<view class="status">{{status.filter(el => {return el.value == item.status})[0].text}}
							</view>
							<view class="reason" style="font-size: 12px;color:#f00;"
								v-if="item.status == 'platform_review_rejected'">{{item.platform_review_remark}}</view>
						</uni-td>
						<!-- <uni-td align="center">
							<view class="status">
								{{cleaningStatus.filter(el => {return el.value == item.cleaning_status})[0].text}}
							</view>
						</uni-td> -->
						<uni-td align="center">{{item.create_time}}</uni-td>
						<uni-td align="center">{{item.id}}</uni-td>
						<uni-td align="center" style="padding:8px 0px;">
							<view class="ope flex flex_around">
								<view class="ope_item haibao" @click="creatCode(item)" v-if="item.status == 'running'">
									<image src="/static/ic_btn_haibao.png" mode="heightFix"></image>
									招人
								</view>
								<view class="ope_item haibao" v-if="item.status == 'platform_reviewing'"
									@click="toHandle(item,'running')">
									<image src="/static/ic_btn_haibao.png" mode="heightFix"></image>
									发布
								</view>
								<!-- <view class="ope_item end" v-if="item.status == 'platform_reviewing'"
									@click="passProject(item)">
									<image src="/static/ic_btn_end.png" mode="heightFix"></image>
									通过
								</view> -->
								<view class="ope_item refuse" v-if="item.status == 'platform_reviewing'"
									@click="openReason(item)">
									<image src="/static/ic_btn_refuse.png" mode="heightFix"></image>
									拒绝
								</view>
								<!-- <view class="ope_item" @click="tosetFee(item)"
									v-if="item.status == 'waiting_set_platform_fee'">
									设置费用</view> -->
								<view class="ope_item edit"
									@click="navigate({pageName:'edit_project'},item.id,'',currentTab.value)"
									v-if="item.status !='finished'">
									<image src="/static/ic_btn_edit.png" mode="heightFix"></image>
									编辑
								</view>

								<view class="ope_item end" @click="endProject(item)" v-if="item.status == 'running'">
									<image src="/static/ic_btn_end.png" mode="heightFix"></image>
									完结
								</view>

								<!-- <view class="ope_item reversion"
									v-if="item.cleaning_status != 'cleaning' && (item.status != 'running' && item.status != 'finished')"
									@click="navigate({pageName:'revision_project'},item.id,'',currentTab.value)">
									<image src="/static/ic_btn_reversion.png" mode="heightFix"></image>
									{{item.cleaning_status == "checked_out"?"重新校对":"去校对"}}
								</view> -->

								<view class="ope_item detail"
									@click="navigate({pageName:'project_detail'},item.id,'enrolled',currentTab.value)">
									<image src="/static/ic_btn_detail.png" mode="heightFix"></image>
									详情
								</view>
								<view class="ope_item end" @click="rePubProject(item)" v-if="item.status == 'finished'">
									<image src="/static/ic_btn_end.png" mode="heightFix"></image>
									重新上架
								</view>
							</view>
						</uni-td>
					</uni-tr>
				</uni-table>
				<pageBox :page="pagination" @toNext="toNext"></pageBox>
			</view>
		</view>
		<view class="mask" v-if="showMask">
			<view class="inner" style="width:50%;" v-if="showReason">
				<view class="title">拒绝理由（{{currentProject.name}}）</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<view class="line flex flex-start">
						<view class="tit">理由：</view>
						<view class="input_wrap">
							<input type="text" v-model="refuseReason" placeholder="请输入拒绝理由,不超过20个字" maxlength="20" />
						</view>
					</view>
					<view class="line flex flex_end">
						<view class="btn save" @click="toHandle(currentProject,'platform_review_rejected')">确认拒绝</view>
					</view>
				</view>
			</view>
			<view class="inner" style="width:530px;padding:15px;box-sizing: border-box;" v-if="showHaibao">
				<view class="btns flex flex_end">
					<view class="btn close" @click="close">关闭</view>
					<view class="btn save" @click="save">保存</view>
				</view>
				<l-painter ref="painter" :board="poster" />

			</view>
			<view class="inner" style="width:50%;" v-if="showPlatform">
				<view class="title">选择来源<text
						style="color:#ffff00;position: relative;top:0;font-size: 16px;">（{{currentProject.name}}）</text>
				</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<view class="from_list flex flex_around">
						<view class="from_item" v-for="(item,index) in sourceRange" :key="index"
							:class="currentPlatform.value == item.value?'active':''" @click="choosePlatform(item)">
							<view class="icon">
								<image :src="item.icon" mode="widthFix"></image>
							</view>
							<view class="text">{{item.text}}</view>
						</view>
					</view>
					<view class="line flex flex_end">
						<view class="btn" @click="creatHaibao">确认</view>
					</view>
				</view>
			</view>
			<view class="inner" style="width:50%;" v-if="showSetting">
				<view class="title">设置费用<text
						style="color:#ffff00;position: relative;top:0;font-size: 16px;">（{{currentProject.name}}）</text>
				</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<view class="line flex flex-start">
						<view class="tit">费用单价</view>
						<view class="input_wrap">
							<input type="text" v-model="fee" placeholder="请输入费用单价" />
							<text class="period">元/人/时</text>
						</view>
					</view>
					<view class="line" style="color:#f00;font-size:14px;">提示：费用设置后，将不允许修改，请确认后提交。</view>
					<view class="line flex flex_end">
						<view class="btn" @click="setFee">确认设置</view>
					</view>
				</view>
			</view>
			<view class="inner" style="width:50%;min-height: 300px;" v-if="showEmployeeSearch">
				<view class="title">工人查询</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<view class="line flex flex-start" style="margin-top:0;">
						<view class="tit">已选职位：</view>
						<view class="text" style="font-size: 15px;">
							{{currentProject.name+"（"+currentProject.broker_company_name+"）"}}
						</view>
					</view>
					<view class="line flex flex-start">
						<!-- <view class="tit">搜索工人</view> -->
						<view class="input_wrap" style="position: relative;">
							<input type="text" v-model="employeeName" placeholder="请输入工人姓名或者手机号" @input="inputChange"
								@confirm="searchEm" />
							<view class="result_list" v-if="searchResult.length>0 && showResultList">
								<view class="re_item flex flex-start" v-for="(item,index) in searchResult" :key="index"
									@click="showWorkerDetail(item)">
									<view class="name">{{item.name}}</view>
									<view class="mobile">{{item.mobile}}</view>
								</view>
							</view>
							<view class="result_list" v-if="searchResult.length == 0 && showResultList"
								style="text-align: center;color:#888;">无搜索结果</view>
						</view>
						<view class="btns flex flex-start" style="margin-bottom: 0;">
							<view class="btn" @click="searchEm" style="padding:0 4px;">搜索</view>
							<view class="btn" @click="sureSign" style="padding:0 4px;">确认报名</view>
						</view>

					</view>
					<view class="sear_result" v-if="currentWorkerInfo.name" style="margin-top:20px;">
						<view class="base">
							<view class="out_line flex flex_start">
								<view class="line flex flex_start">
									<view class="tit">姓名：</view>
									<view class="text">{{currentWorkerInfo.name}}</view>
								</view>
								<view class="line flex flex-start">
									<view class="tit">性别：</view>
									<view class="text">
										{{currentWorkerInfo.gender=="male"?"男":(currentWorkerInfo.gender=="female"?"女":"未知")}}
									</view>
								</view>

							</view>
							<view class="out_line flex flex_start">
								<view class="line flex flex-start">
									<view class="tit">年龄：</view>
									<view class="text">
										{{!currentWorkerInfo.age?"无":(currentWorkerInfo.age+"岁")}}
									</view>
								</view>
								<!-- <view class="line flex flex-start">
									<view class="tit">身份证号：</view>
									<view class="text">{{currentWorkerInfo.worker_id_card_number}}</view>
								</view> -->
								<view class="line flex flex-start">
									<view class="tit">手机号码：</view>
									<view class="text">{{currentWorkerInfo.mobile}}</view>
								</view>
							</view>
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
	import commonData from "@/common/commonData"
	import {
		saveAs
	} from 'file-saver'
	const app = getApp()
	export default {
		name: "contract_list",
		data() {
			return {
				refuseReason: "",
				showSetting: false,
				// pageIndex:1,
				timeStr: "立项",
				path: "",
				poster: {
					css: {
						// 根节点若无尺寸，自动获取父级节点
						width: '500px',
					},
					views: []
				},
				currentPlatform: {
					value: "system",
					text: "系统",
					icon: "/static/system_data.png"
				},
				showResultList: false,
				sourceRange: [{
						value: "system",
						text: "系统",
						icon: "/static/system_data.png"
					},
					// {
					// 	value: "wechat_mini_program",
					// 	text: "微信",
					// 	icon: "/static/wechat.png"
					// },
					// {
					// 	value: "douyin",
					// 	text: "抖音",
					// 	icon: "/static/douyin.png"
					// },
					// {
					// 	value: "kuaishou",
					// 	text: "快手",
					// 	icon: "/static/kuaishou.png"
					// }
				],
				periodList: [{
						value: "hour",
						text: "时"
					},
					{
						value: "day",
						text: "天"
					},
					{
						value: "week",
						text: "周"
					},
					{
						value: "month",
						text: "月"
					},
				],
				currentWorkerInfo: {
					name: "",
					gender: "",
					age: 0,
					mobile: ""
				},
				list: [
					// {
					// 	id:"3546436",
					// 	code:"123432",
					// 	name:"富士康招技工",
					// 	salary_unit_price:"5000-6000元/月",
					// 	worker_num:30,
					// 	status:"reviewing",
					// 	create_time:"2024-04-15 11:30:05"
					// },
					// {
					// 	id:"3546436",
					// 	code:"123432",
					// 	name:"富士康招技工41111",
					// 	salary_unit_price:"5000-6000元/月",
					// 	worker_num:30,
					// 	status:"running",
					// 	create_time:"2024-04-15 11:30:05"
					// }
				],
				currentSubTab: 0,
				currentTab: {
					value: "all",
					text: "全部"
				},
				tabs: [{
						value: "all",
						text: "全部"
					},
					{
						value: "reviewing",
						text: "待审核"
					},
					{
						value: "running",
						text: "进行中"
					}, {
						value: "finished",
						text: "已完结"
					}
				],
				status: commonData.projectStatus,
				cleaningStatus: commonData.cleaningStatus,
				showMask: false,
				showHaibao: false,
				showReason: false,
				showPlatform: false,
				showEmployeeSearch: false,
				currentId: "",
				currentMoreId: 0,
				years: "",
				continueFee: "",
				searPro: "",
				searStartTime: "",
				searEndTime: "",
				searComId: "",
				currentPage: 1,
				pagination: {},
				commissionValue: 0,
				currentProject: {},
				fee: "",
				currentCount: 0,
				workerProjectRecordList: [],
				followList: [],
				employeeName: "",
				searchResult: []
			};
		},
		components: {
			searchBox,
			pageBox
		},
		created() {
			let paramArr = []
			if (location.href.indexOf("?") != -1) {
				paramArr = location.href.split("?")[1].split("&")
			}
			for (var i = 0; i < paramArr.length; i++) {
				if (paramArr[i].indexOf("status") != -1) {
					let status = paramArr[i].split("=")[1]
					this.currentTab = this.tabs.filter(el => {
						return el.value == status
					})[0]
				}
				if (paramArr[i].indexOf("company") != -1) {
					this.searComId = paramArr[i].split("=")[1]
				}
				if (paramArr[i].indexOf("searpro") != -1) {
					this.searPro = paramArr[i].split("=")[1]
				}
				if (paramArr[i].indexOf("start") != -1) {
					this.searStartTime = paramArr[i].split("=")[1]
				}
				if (paramArr[i].indexOf("end") != -1) {
					this.searEndTime = paramArr[i].split("=")[1]
				}
				if (paramArr[i].indexOf("pgindex") != -1) {
					this.currentPage = paramArr[i].split("=")[1]
				}
			}
			this.getList()
		},
		onReady() {

		},
		watch: {

		},
		methods: {
			inputChange() {
				if (!this.employeeName) {
					this.showResultList = false
					this.currentWorkerInfo = {
						name: "",
						gender: "",
						age: 0,
						mobile: ""
					}
				}
			},
			searchEm() {
				let url = "/admin/worker/normal?page=1" +
					"&keyword=" + this.employeeName
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.searchResult = res.data.list
						this.showResultList = true
					}
				})
			},
			showWorkerDetail(item) {
				let url = "/admin/worker/" + item.id + "/info"
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.currentWorkerInfo = res.data
						this.showResultList = false
					}
				})

			},
			sureSign() {
				let _this = this
				let url = "/admin/registration-project"
				let data = {
					"worker_id": this.currentWorkerInfo.id,
					"project_id": this.currentProject.id,
				}
				uni.showModal({
					title: "是否给工人：" + this.currentWorkerInfo.name + "，报名职位：" + this
						.currentProject.name,
					success(res) {
						if (res.confirm) {
							_this.$request(url, data, "POST").then(resp => {
								if (resp.code == 0) {
									uni.showToast({
										title: "报名成功",
										duration: 2000
									})
									_this.resetData()
								}
							})
						}
					}
				})

			},
			toAI() {
				this.$request("/admin/projects/ai/sync", {}, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: "同步成功",
							duration: 2000
						})
					}
				})
			},
			choosePlatform(item) {
				this.currentPlatform = item
			},
			setFee() {
				let _this = this
				let data = {
					"price": this.fee
				}
				let url = "/admin/project/" + this.currentProject.id + "/set-fee"
				this.$request(url, data, "POST").then(res => {
					if (res.code == 0) {
						uni.showModal({
							title: "费用结算方式设置成功。",
							showCancel: false,
							success(resp) {
								if (resp.confirm) {
									_this.resetData()
									_this.close()
									_this.getList()
								}
							}
						})
					}
				})
			},
			tosetFee(item) {
				this.currentProject = item
				this.showMask = true
				this.showSetting = true
			},
			resetData() {
				this.fee = ""
				this.refuseReason = ""
				this.employeeName = ""
				this.currentWorkerInfo = {
					name: "",
					gender: "",
					age: 0,
					mobile: ""
				}

			},
			openReason(item) {
				this.currentProject = item
				this.showMask = true
				this.showReason = true
			},
			toNext(e1, e2) {
				this.currentPage = e1
				this.currentCount = e2
				this.getList()
			},
			toHandle(item, status) {
				let _this = this
				let msg = ""
				if (status == "running") {
					msg = "当前审核职位：" + item.name + "，是否确认通过审核？"
				} else {
					msg = "当前审核职位：" + item.name + "，是否确认拒绝该职位？"
				}
				uni.showModal({
					title: msg,
					confirmText: status == "running" ? "通过" : "拒绝",
					success(resp) {
						if (resp.confirm) {
							let url = "/admin/project/" + item.id + "/review"
							let data = {
								"status": status,
								"reason": _this.refuseReason
							}
							_this.$request(url, data, "POST").then(res => {
								if (res.code == 0) {
									uni.showModal({
										title: status == "running" ? "已通过" : "已拒绝",
										showCancel: false
									})
									_this.refuseReason = ""
									_this.getList()
									_this.close()
								}
							})
						}
					}
				})
			},
			save() {
				let _this = this
				console.log(this.$refs.painter)
				this.$refs.painter.canvasToTempFilePathSync({
					fileType: "jpg",
					// 如果返回的是base64是无法使用 saveImageToPhotosAlbum，需要设置 pathType为url
					pathType: 'url',
					quality: 1,
					success: (res) => {
						console.log(res.tempFilePath);
						let fileName = _this.currentPlatform.text + _this.currentProject.name + "_" + _this
							.currentProject.code + "_" + "海报"
						saveAs(res.tempFilePath, fileName);
						// _this.loadimg("project_poster", res.tempFilePath)
					},
					fail: (err) => {
						console.log(err, "err")
					}
				})
			},
			getWorkerProjectRecord() {
				let url = "/admin/worker/" + this.currentWorkerInfo.worker_id + "/request/list"
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.workerProjectRecordList = res.data.list
					}
				})
			},
			getFollowList() {
				let url = "/admin/remarks/" + this.currentWorkerInfo.worker_id + "/" + this.id
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.followList = res.data
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
						url: app.globalData.baseUrl + "/admin/upload/image?type=" + type,
						filePath: filePath,
						name: "file",
						header: header,
						success(resp) {
							var response = JSON.parse(resp.data);
							if (response.code == 0) {
								// window.open(response.data.url)
								saveAs(response.data.url, "海报");
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
			creatCode(item) {
				this.currentProject = item
				this.showMask = true
				this.showPlatform = true
			},
			changeTab(item) {
				this.currentPage = 1
				this.currentTab = item
				this.setPageName({
					pageName: "project_list"
				}, "", item.value)
				this.getList()
			},
			navigate(obj, id, status, preStatus) {
				let searObj = {
					company: this.searComId,
					searPro: this.searPro,
					start: this.searStartTime,
					end: this.searEndTime,
					page: this.currentPage

				}
				this.setPageName(obj, id, status, preStatus, searObj)
				this.$emit("getPageName", obj)
			},
			rePubProject(item) {
				let _this = this
				uni.showModal({
					title: "是否确认重新上架工作：" + item.name + "？",
					confirmText: "确认上架",
					success(res) {
						if (res.confirm) {
							let url = "/admin/project/" + item.id + "/re-publish"
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
			getList() {
				uni.showLoading({
					title: "努力加载中~"
				})
				let url;
				if (this.currentTab.value == "all") {
					// 全部
					url = "/admin/projects?page=" + this.currentPage + "&create_time_start=" + this.searStartTime +
						"&create_time_end=" + this.searEndTime + "&keyword=" + this.searPro + "&company_id=" + this
						.searComId + "&page_size=" + this.currentCount
				} else {
					url = "/admin/projects/" + this.currentTab.value + "?page=" + this.currentPage +
						"&create_time_start=" + this.searStartTime + "&create_time_end=" + this.searEndTime + "&keyword=" +
						this.searPro + "&company_id=" + this.searComId + "&page_size=" + this.currentCount
				}
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.pagination = res.data.pagination
					}
				})
			},
			handleSearch(e) {
				this.currentPage = 1
				this.searPro = e.projectName
				this.searStartTime = e.startTime
				this.searEndTime = e.endTime
				this.searComId = e.comId
				this.getList()
			},
			close() {
				this.showMask = false
				this.showHaibao = false
				this.showReason = false
				this.showSetting = false
				this.showEmployeeSearch = false
			},
			async creatHaibao() {
				this.showMask = false
				this.showPlatform = false
				if (this.currentPlatform.value == "system") {
					// 选择系统内工人
					this.showMask = true
					this.showEmployeeSearch = true
				} else {
					uni.showLoading({
						title: "正在生成海报，请稍后..."
					})
					let codeImg = await this.getCode()
					if (codeImg) {
						uni.hideLoading()
						this.showMask = true
						this.showHaibao = true
						await this.viewHaibao(codeImg)
					}
				}


			},
			endProject(item) {
				let _this = this
				let msg = "您当前准备关闭职位：" + item.name + "，职位关闭后不可恢复，请谨慎操作。是否确认关闭该职位？"
				uni.showModal({
					title: msg,
					confirmColor: "#f00",
					confirmText: "确认关闭",
					success(resp) {
						if (resp.confirm) {
							let url = "/admin/project/" + item.id + "/finish"
							_this.$request(url, {}, "POST").then(res => {
								if (res.code == 0) {
									uni.showModal({
										title: "职位已关闭",
										showCancel: false
									})
									_this.getList()
								}
							})
						}
					}
				})
			},
			changeSubTab(index) {
				this.currentSubTab = index
			},
			submit(item) {
				let _this = this
				let url = "/admin/project/" + item.id + "/submit-review"
				uni.showModal({
					title: "您当前正在提审职位：" + item.name + "，是否确认提审该职位？",
					confirmText: "确认提审",
					success(resp) {
						if (resp.confirm) {
							_this.$request(url, {}, "POST").then(res => {
								if (res.code == 0) {
									uni.showModal({
										title: "提审成功",
										content: "职位已提审，请耐心等待平台审核。",
										showCancel: false
									})
									_this.getList()
								}
							})
						}
					}
				})
			},
			deleteProject(item) {
				let _this = this
				let url = "/admin/project/" + item.id
				uni.showModal({
					title: "您当前正在删除职位：" + item.name + "，是否确认删除该职位？",
					confirmText: "确认删除",
					confirmColor: "#f00",
					success(resp) {
						if (resp.confirm) {
							_this.$request(url, {}, "DELETE").then(res => {
								if (res.code == 0) {
									uni.showModal({
										title: "职位删除成功",
										showCancel: false
									})
									_this.getList()
								}
							})
						}
					}
				})
			},
			async getCode() {
				let url = "/admin/project/" + this.currentProject.id + "/qrcode/recruitment"
				let data = {
					"from_platform": this.currentPlatform.value
				}
				let res = await this.$request(url, data, "POST")
				if (res.code == 0) {
					return res.data.qrcode
				}
			},
			async viewHaibao(imgUrl) {
				let _this = this
				console.log(this.currentProject)
				this.poster.views = [{
						type: 'image',
						src: app.globalData.baseImageUrl + '/broker/toc_haibao.png?time=' + new Date()
							.getTime(),
						css: {
							width: '100%',
							margin: '0 auto'
						}
					},
					{
						type: "view",
						css: {
							width: '90%',
							position: 'absolute',
							bottom: '20px',
							left: '50%',
							transform: 'translateX(-50%)',
						},
						views: [{
								type: 'image',
								src: imgUrl,
								css: {
									width: '160px',
									height: "160px",
									borderRadius: "50%",
									display: "inline-block",
								}
							},
							{
								type: 'text',
								text: "扫码报名",
								css: {
									width: '60%',
									display: "inline-block",
									textAlign: 'right',
									lineHeight: "160px",
									color: "#fff",
									fontSize: "40px",
									fontWeight: 'bold'
								}
							},
						]
					},
					{
						type: 'text',
						text: this.currentProject.name,
						css: {
							// 设置居中对齐
							width: "30%",
							position: 'absolute',
							top: '35%',
							left: '60%',
							fontSize: "32px",
							color: "#000000",
							lineClamp: 2,
							fontWeight: "bold"
						}
					},
					{
						type: 'view',
						css: {
							// 设置居中对齐
							width: "80%",
							textAlign: 'left',
							position: 'absolute',
							top: '57%',
							left: '50%',
							transform: 'translateX(-50%)',
							lineHeight: '60px',
							lineClamp: 1,
						},
						views: [{
								type: "view",
								css: {
									width: "100%",
									display: "block",
									borderBottom: "1px dashed #FFAC3F"
								},
								views: [{
										type: "text",
										text: "工作名称：",
										css: {
											lineClamp: 1,
											display: "inline-block",
											color: "#3D3D3D",
											fontSize: "28px",
											marginRight: "8px",
										}
									},
									{
										type: "text",
										text: _this.currentProject.name,
										css: {
											lineClamp: 1,
											display: "inline-block",
											color: "#000",
											fontSize: "32px",
										}
									}
								]
							},
							{
								type: "view",
								css: {
									display: "block",
									borderBottom: "1px dashed #FFAC3F"
								},
								views: [{
										type: "text",
										text: "工作酬劳：",
										css: {
											display: "inline-block",
											color: "#3D3D3D",
											fontSize: "28px",
											marginRight: "8px",
										}
									},
									{
										type: "text",
										text: _this.currentProject.worker_salary_min + "-" + _this
											.currentProject.worker_salary_max + "/元" + _this.periodList
											.filter(el => {
												return el.value == _this.currentProject
													.worker_salary_type
											})[0].text,
										css: {
											display: "inline-block",
											color: "#FF4800",
											fontSize: "36px",
											fontWeight: "bold",
										}
									}
								]
							},
						]
					},

				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.result_list {
		width: 100%;
		position: absolute;
		top: 101%;
		left: 0px;
		background: #f6f6f6;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		padding: 15px;
		box-sizing: border-box;
		box-shadow: 0 5px 10px 2px #ccc;

		.re_item {
			height: 40px;
			line-height: 40px;
			padding: 0 15px;
			box-sizing: border-box;
			font-size: 14px;

			.name {
				margin-right: 15px;
			}

			.mobile {
				color: #0092ff;
			}

			&:hover {
				cursor: pointer;
				background: #0092ff;
				color: #fff;
			}

			&:hover .mobile {
				color: #fff;
			}
		}
	}

	.table_wrap {

		height: calc(100% - 123px);

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

	.base {
		padding: 0 0 10px 0;
		// height: 100px;
		// overflow: hidden;


		&.showall {
			height: auto;
			overflow: visible;
		}

		.out_line {
			.line {
				width: 40%;

				.tit {
					width: 90px;
				}
			}
		}

		.line {
			margin: 15px 0;

			.text {
				color: #666;
				font-size: 14px;

				.tags {
					padding: 5px 10px;
					box-sizing: border-box;
					background: #f1f1f1;
					border-radius: 4px;
					margin-left: 5px;
					margin-bottom: 5px;
				}
			}
		}
	}

	.mask {
		.inner {
			.tabs {
				margin-bottom: 15px;

				.tab {
					padding: 5px 10px;
					border: 1px solid #ccc;
					margin-right: 15px;
					border-radius: 4px;
					cursor: pointer;

					&.active {
						background: $base-color;
						color: #fff;
						border: 1px solid $base-color;
					}
				}
			}

			.box {
				.from_list {
					margin-top: 15px;

					.from_item {
						text-align: center;
						cursor: pointer;
						padding: 10px 20px;
						border-radius: 8px;

						&.active {
							background: #ebebeb;
							border: 2px solid #0092ff;

							&:nth-child(1) {
								color: #117bec;
							}

							&:nth-child(2) {
								color: #309c29;
							}

							&:nth-child(3) {
								color: #333;
							}

							&:nth-child(4) {
								color: #ff4406;
							}
						}


						.icon {
							margin-bottom: 5px;

							image {
								width: 64px;
							}
						}
					}
				}

				.line {
					margin: 15px 0 0 15px;
				}

				.tit {
					width: 80px;
				}

				.input_wrap {
					width: calc(100% - 80px);
					border: 1px solid #ccc;
					border-radius: 4px;
					position: relative;

					input {
						height: 40px;
						line-height: 40px;
						padding-left: 10px;
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