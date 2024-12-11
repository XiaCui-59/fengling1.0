<template>
	<view class="board">
		<view class="box">
			<view class="title">工人列表</view>
			<view class="flex flex_btween" style="align-items: start;">
				<searchBox :showEmployee="true" @handleSearch="handleSearch">
				</searchBox>
				<view class="btn" @click="toAdd">新增</view>
			</view>

			<view class="table_wrap">
				<view class="tabs flex flex_start">
					<view class="tab" v-for="(item,index) in tabs" :class="currentTab.value==item.value?'active':''"
						@click="changeTab(item)">{{item.text}}</view>
				</view>
				<uni-table border stripe emptyText="暂无更多数据">
					<uni-tr style="background: #f6f6f6;">
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">序号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">工人姓名</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">昵称</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">手机号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">性别</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">年龄</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">民族</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">来源</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">状态</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">钱包余额</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">是否会员</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">会员有效期</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">注册时间</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">操作</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in list" :key="index">
						<uni-td align="center">{{index+1+currentCount*(currentPage - 1)}}</uni-td>
						<uni-td align="center">
							<view style="cursor: pointer;color:#1E8EEE;" @click="showWorkerDetail(item)">
								{{item.name}}
							</view>
						</uni-td>
						<uni-td align="center">{{item.wechat_nickname?item.wechat_nickname:"无"}}</uni-td>
						<uni-td align="center">{{item.mobile}}</uni-td>
						<uni-td align="center">{{item.gender == "male"?"男":(item.gender == "female"?"女":"未知")}}</uni-td>
						<uni-td align="center">{{item.age}}</uni-td>
						<uni-td align="center">{{item.nation}}</uni-td>
						<uni-td
							align="center">{{workerFrom.filter(el=>{return el.value == item.from_platform})[0].text}}</uni-td>
						<uni-td align="center">
							<view class="status">{{item.status == "normal"?"正常":"已冻结"}}</view>
						</uni-td>
						<uni-td align="center">{{item.balance.total_amount}}</uni-td>
						<uni-td align="center">{{item.is_vip?"是":"否"}}</uni-td>
						<uni-td align="center">{{item.vip_start_time+"~"+item.vip_end_time}}</uni-td>
						<uni-td align="center">{{item.create_time}}</uni-td>
						<uni-td align="center" style="padding:8px 0px;" v-if="currentTab.value!=2">
							<view class="ope flex flex_around">

								<view class="ope_item edit" @click="edit(item)" v-if="item.status == 'normal'">
									<image src="/static/ic_btn_edit.png" mode="heightFix"></image>编辑
								</view>
								<view class="ope_item" @click="handleAccount(item)"
									:class="item.status == 'normal'?'frozen':'unfrozen'">
									<image
										:src="item.status == 'normal'?'/static/ic_btn_frozen.png':'/static/ic_btn_unfrozen.png'"
										mode="heightFix"></image>{{item.status=="normal"?"冻结":"解冻"}}
								</view>
								<view class="ope_item detail" @click="showWorkerDetail(item)">
									<image src="/static/ic_btn_detail.png" mode="heightFix"></image>详情
								</view>
							</view>
						</uni-td>
					</uni-tr>

				</uni-table>
				<pageBox :page="pagination" @toNext="toNext"></pageBox>
			</view>
		</view>
		<!-- <view class="mask" v-if="showMask2" style="z-index:101;">
			<view class="inner" v-if="showFirst">
				<view class="title" style="margin-bottom: 0;">身份证预览</view>
				<view class="close" @click="closeId">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box flex flex_btween">
					<view class="img" style="width:46%;">
						<image :src="currentWorkerInfo.id_card_front_image" mode="widthFix" style="width:100%;"></image>
					</view>
					<view class="img" style="width:46%;">
						<image :src="currentWorkerInfo.id_card_back_image" mode="widthFix" style="width:100%;"></image>
					</view>
				</view>
			</view>
		</view> -->
		<view class="mask" v-if="showMask" style="z-index:100;">
			<view class="inner" v-if="showEdit" style="width: 500px;">
				<view class="title" style="margin-bottom: 0;">编辑信息（{{currentWorkerInfo.name}}）</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<view class="line flex flex-start">
						<view class="tit">姓名：</view>
						<view class="input_wrap">
							<input type="text" v-model="workerName" placeholder="请输入工人姓名" />
						</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">性别：</view>
						<radio-group @change="genderChange" class=" flex flex-start">
							<label class="uni-list-cell uni-list-cell-pd flex flex-start" style="margin-right:80rpx;"
								v-for="(item, index) in gender" :key="item.value">
								<view>
									<radio :value="item.value" :checked="index === currentGender" color="#106afa"
										style="transform:scale(0.8)" />
								</view>
								<view style="font-size:27rpx;">{{item.text}}</view>
							</label>
						</radio-group>
					</view>
					<view class="line flex flex-start">
						<view class="tit">年龄：</view>
						<view class="input_wrap">
							<input type="number" v-model="workerAge" placeholder="请输入工人年龄" />
						</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">民族</view>
						<view class="input_wrap" style="padding-left: 10px;">
							<picker mode="selector" :value="value" :range="nationArry" @change="changeNation">
								<view>{{nation}}</view>
							</picker>
						</view>
					</view>
					<view class="btns flex flex_end">
						<view class="btn cancel"
							style="background:#fff;color:#0092ff;border:1px solid #0092ff;margin-right:15px;"
							@click="close">取消</view>
						<view class="btn confirm" @click="submitEdit">确定</view>
					</view>
				</view>
			</view>
			<view class="inner" v-if="showAdd" style="width: 500px;">
				<view class="title" style="margin-bottom: 0;">新增工人</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<view class="line flex flex-start">
						<view class="tit">姓名：</view>
						<view class="input_wrap">
							<input type="text" v-model="workerName" placeholder="请输入姓名" />
						</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">手机号：</view>
						<view class="input_wrap">
							<input type="text" v-model="mobile" placeholder="请输入手机号" />
						</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">性别：</view>
						<radio-group @change="genderChange" class=" flex flex-start">
							<label class="uni-list-cell uni-list-cell-pd flex flex-start" style="margin-right:80rpx;"
								v-for="(item, index) in gender" :key="item.value">
								<view>
									<radio :value="item.value" :checked="index === currentGender" color="#106afa"
										style="transform:scale(0.8)" />
								</view>
								<view style="font-size:27rpx;">{{item.text}}</view>
							</label>
						</radio-group>
					</view>
					<view class="line flex flex-start">
						<view class="tit">年龄：</view>
						<view class="input_wrap">
							<input type="number" v-model="workerAge" placeholder="请输入年龄" />
						</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">民族</view>
						<view class="input_wrap" style="padding-left: 10px;">
							<picker mode="selector" :value="value" :range="nationArry" @change="changeNation">
								<view>{{nation}}</view>
							</picker>
						</view>
					</view>
					<view class="btns flex flex_end">
						<view class="btn cancel"
							style="background:#fff;color:#0092ff;border:1px solid #0092ff;margin-right:15px;"
							@click="close">取消</view>
						<view class="btn confirm" @click="submitAdd">确定新增</view>
					</view>
				</view>
			</view>
			<view class="inner" v-if="showThird">
				<view class="title" style="margin-bottom: 0;">工人详情{{"（"+currentWorkerInfo.id+")"}}</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<view class="base">
						<view class="out_line flex flex_start">
							<view class="line flex flex_start">
								<view class="tit">工人姓名：</view>
								<view class="text">{{currentWorkerInfo.name}}</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">工人性别：</view>
								<view class="text">
									{{currentWorkerInfo.gender == "male"?"男":(currentWorkerInfo.gender == "female"?"女":"未知")}}
								</view>
							</view>

						</view>
						<view class="out_line flex flex_start">
							<!-- <view class="line flex flex-start">
								<view class="tit">身份证号：</view>
								<view class="text">{{currentWorkerInfo.id_card_number}}</view>
							</view> -->
							<view class="line flex flex-start">
								<view class="tit">年龄：</view>
								<view class="text">{{currentWorkerInfo.age}}</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">手机号码：</view>
								<view class="text">{{currentWorkerInfo.mobile}}</view>
							</view>
						</view>
						<!-- <view class="out_line flex flex_start">
							
							<view class="line flex flex-start">
								<view class="tit">身份证：</view>
								<view class="text" style="cursor: pointer;" @click="showIdCard">
									<image src="/static/id_card_icon.png" mode="widthFix"
										style="width:40px;height:40px;"></image>
								</view>
							</view>
						</view> -->
						<view class="out_line flex flex_start">
							<view class="line flex flex-start">
								<view class="tit">状态：</view>
								<view class="text">{{currentWorkerInfo.status == "normal"?"正常":"已冻结"}}</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">注册时间：</view>
								<view class="text">{{currentWorkerInfo.create_time}}
									<text
										style="color:#1E8EEE;">（来自：{{workerFrom.filter(el=>{return el.value == currentWorkerInfo.from_platform})[0].text}}）</text>
								</view>
							</view>
						</view>
					</view>
					<view class="tabs flex flex_start">
						<view class="tab" :class="currentSubTab==0?'active':''" @click="changeSubTab(0)">履职记录</view>
						<view class="tab" :class="currentSubTab==1?'active':''" @click="changeSubTab(1)">工人简历</view>
					</view>
					<view class="table_wrap" v-if="currentSubTab==0">
						<uni-table border stripe emptyText="暂无更多数据">
							<uni-tr style="background: #f6f6f6;">
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">职位名称</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">归属公司</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">报名时间</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">入职时间</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">服务地址</uni-th>
								<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">状态</uni-th>
							</uni-tr>
							<uni-tr v-for="(item,index) in workerProjectRecordList" :key="index">
								<uni-td align="center">{{item.project_name}}</uni-td>
								<uni-td align="center">{{item.broker_company_name}}</uni-td>
								<uni-td align="center">{{item.create_time}}</uni-td>
								<uni-td align="center">{{item.entry_time}}</uni-td>
								<uni-td align="center">{{item.work_address}}</uni-td>
								<uni-td align="center">
									<view class="status">
										{{status.filter(el => {return el.value == item.status})[0].text}}
									</view>
								</uni-td>
							</uni-tr>
						</uni-table>
						<pageBox :page="maskPagination" @toMaskNext="toMaskNext" :type="pageType"></pageBox>
					</view>
					<view class="resume" v-if="currentSubTab==1">
						<view class="resume_box">
							<view class="re_tit">工作意向</view>
							<view class="inner_info">
								<view class="line flex flex-start">
									<view class="tit">意向工种：</view>
									<view class="lables flex flex-start" v-if="currentResumeInfo.intentions.length">
										<view class="label" v-for="(item,index) in currentResumeInfo.intentions"
											:key="index">{{item.job_type_name}}</view>
									</view>
									<view class="text" v-if="!currentResumeInfo.intentions.length">未填写</view>
								</view>
								<view class="line city flex flex-start">
									<view class="tit">意向城市：</view>
									<view class="lables flex flex-start" v-if="currentResumeInfo.areas.length">
										<view class="label" v-for="(item,index) in currentResumeInfo.areas"
											:key="index">{{item[0].name+item[1].name}}</view>
									</view>
									<view class="text" v-if="!currentResumeInfo.areas.length">未填写</view>
								</view>
							</view>
						</view>
						<view class="resume_box">
							<view class="re_tit">工作偏好</view>
							<view class="inner_info">
								<view class="vote_item" v-for="(item,index) in currentResumeInfo.intentions"
									v-if="currentResumeInfo.intentions.length">
									<view class="sub_tit">{{item.job_type_name}}</view>
									<view class="line flex flex-start">
										<view class="tit">期望薪资</view>
										<view class="text">
											{{item.desired_salary_min+"~"+item.desired_salary_max+"元"+settleStatus.filter(el => {return el.value == item.salary_pay_period})[0].text}}
										</view>
									</view>
									<view class="line flex flex-start" v-if="item.advantages.length">
										<view class="tit">我的优势</view>
										<view class="lables flex flex-start">
											<view class="label" v-for="(item2,index2) in item.advantages" :key="index2">
												{{item2.name}}
											</view>
										</view>
									</view>
								</view>
								<view class="" v-if="!currentResumeInfo.intentions.length">未填写</view>
							</view>
						</view>
						<view class="resume_box">
							<view class="re_tit">自我介绍</view>
							<view class="inner_info">
								{{!currentResumeInfo.introduction?"未填写":currentResumeInfo.introduction}}
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
	import commonData from "@/common/commonData.js"
	export default {
		name: "employee_list",
		data() {
			return {
				workerAge: "",
				workerName: "",
				timeStr: "报名",
				pageType: "mask",
				gender: [{
					value: "male",
					text: "男"
				}, {
					value: "female",
					text: "女"
				}],
				currentGender: 0,
				list: [],
				tabs: [{
						value: "all",
						text: "全部"
					},
					{
						value: "normal",
						text: "正常"
					},
					{
						value: "freeze",
						text: "冻结"
					}
				],
				showMask2: false,
				status: commonData.workerStatus,
				pagination: {},
				showMask: false,
				showEdit: false,
				showFirst: false,
				showAdd: false,
				showSecond: false,
				showThird: false,
				seleAll: false,
				selectedIds: [],
				selectedIndex: [],
				currentTab: {
					value: "all",
					text: "全部"
				},
				currentPage: 1,
				id: "",
				mobile: "",
				currentInfo: {
					"broker_mobile": "",
					"broker_name": "",
					"code": "",
					"content": "",
					"id": "",
					"name": "",
					"work_address": "",
					"worker_salary": "",
					"worker_welfare": ""
				},
				waitDepartList: [], //待离职名单
				searEmployee: "",
				searStart: "",
				searEnd: "",
				currentWorker: {},
				currentWorkerInfo: {},
				workerCheckinList: [],
				workerProjectRecordList: [],
				workerSalaryList: [],
				currentSubTab: 0,
				maskPageIndex: 1,
				maskPagination: {},
				checkStatus: [{
						value: "to_be_settled",
						text: "待结算"
					},
					{
						value: "to_be_issued",
						text: "待发放"
					},
					{
						value: "issued",
						text: "已发放"
					},
					{
						value: "voided",
						text: "已作废"
					},
				],
				salaryHandlePeriod: commonData.paySalaryPeriod,
				period: commonData.periodList,
				showMoreInfo: false,
				moreText: "展开全部",
				currentWorkerId: "",
				currentResumeInfo: {},
				settleStatus: [{
						value: "daily",
						text: "(按天结算)"
					},
					{
						value: "monthly",
						text: "(按月结算)"
					}
				],
				workerFrom: commonData.workerFrom,
				value: 0,
				nation: "汉族",
				nationArry: ["汉族", "蒙古族", "回族", "藏族", "维吾尔族", "苗族", "彝族", "壮族", "布依族", "朝鲜族",
					"满族", "侗族", "瑶族", "白族", "土家族", "哈尼族", "哈萨克族", "傣族", "黎族", "傈僳族",
					"佤族", "畲族", "高山族", "拉祜族", "水族", "东乡族", "纳西族", "景颇族", "柯尔克孜族", "土族",
					"达斡尔族", "仫佬族", "羌族", "布朗族", "撒拉族", "毛难族", "仡佬族", "锡伯族", "阿昌族", "普米族",
					"塔吉克族", "怒族", "乌孜别克族", "俄罗斯族", "鄂温克族", "崩龙族", "保安族", "裕固族", "京族", "塔塔尔族",
					"独龙族", "鄂伦春族", "赫哲族", "门巴族", "珞巴族", "基诺族", "其他", "外国血统"
				],
				currentCount: 15,
				currentMaskCount: 15
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
				if (paramArr[i].indexOf("id") != -1) {
					this.id = paramArr[i].split("=")[1]
				}
			}
			this.getList()
		},
		methods: {
			changeNation(e) {
				console.log(e)
				this.nation = this.nationArry[e.detail.value]
			},
			genderChange(e) {
				for (let i = 0; i < this.gender.length; i++) {
					if (this.gender[i].value == e.detail.value) {
						this.currentGender = i
					}
				}
			},
			edit(item) {
				this.currentWorkerInfo = item
				this.workerName = item.name
				this.workerAge = item.age ? item.age : ""
				for (let i = 0; i < this.gender.length; i++) {
					if (this.gender[i].value == item.gender) {
						this.currentGender = i
					}
				}
				this.nation = item.nation ? item.nation : "汉族"
				this.showMask = true
				this.showEdit = true
			},
			toAdd() {
				this.showMask = true
				this.showAdd = true
			},
			toNext(e1, e2) {
				this.currentPage = e1
				this.currentCount = e2
				this.getList()
			},
			closeId() {
				this.showFirst = false
				this.showMask2 = false
			},
			submitEdit() {
				let _this = this
				let data = {
					"gender": this.gender[this.currentGender].value,
					"age": Number(this.workerAge),
					"name": this.workerName,
					"nation": this.nation
				}
				let url = "/admin/worker/" + this.currentWorkerInfo.id + "/profile"
				this.$request(url, data, "POST").then(res => {
					if (res.code == 0) {
						uni.showModal({
							title: "编辑成功",
							showCancel: false,
							success(resp) {
								if (resp.confirm) {
									_this.close()
									_this.getList()
								}
							}
						})
					}
				})
			},
			submitAdd() {
				let _this = this
				let data = {
					"gender": this.gender[this.currentGender].value,
					"age": Number(this.workerAge),
					"name": this.workerName,
					"nation": this.nation,
					"mobile": this.mobile
				}
				for (let key in data) {
					if (!data[key]) {
						uni.showToast({
							title: "内容不完整",
							icon: "error",
							duration: 1000
						})
						return
					}
				}
				let url = "/admin/workers"
				this.$request(url, data, "POST").then(res => {
					if (res.code == 0) {
						uni.showModal({
							title: "新增成功",
							showCancel: false,
							success(resp) {
								if (resp.confirm) {
									_this.close()
									_this.getList()
								}
							}
						})
					}
				})
			},
			showIdCard() {
				this.showMask2 = true
				this.showFirst = true
			},
			toMaskNext(e1, e2) {
				this.maskPageIndex = e1
				this.currentMaskCount = e2
				this.getWorkerProjectRecord()
			},
			showWorkerDetail(item) {
				this.currentWorkerId = item.id
				let url = "/admin/worker/" + item.id + "/info"
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.currentWorkerInfo = res.data
						this.showMask = true
						this.showThird = true
						this.getWorkerProjectRecord()
						this.getResume()
					}
				})

			},
			changeSubTab(index) {
				this.currentSubTab = index
				console.log(this.currentResumeInfo)
				// if (index == 1) {
				// 	// 获取工人简历
				// 	this.getResume()
				// 	console.log(this.currentResumeInfo)
				// }
			},
			getResume() {
				let url = "/admin/worker/" + this.currentWorkerId + "/resume"
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.currentResumeInfo = res.data
					}
				})
			},
			getWorkerProjectRecord() {
				let url = "/admin/worker/" + this.currentWorkerId + "/sign-request?page=" + this.maskPageIndex +
					"&page_size=" + this.currentMaskCount
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.workerProjectRecordList = res.data.list
						this.maskPagination = res.data.pagination
					}
				})
			},
			handleAccount(item) {
				let _this = this
				let url = "/admin/worker/freeze-or-thawing"
				let data = {}
				if (item.status == "normal") {
					data = {
						"id": item.account_id, // 雇工账号Id
						"freeze": true // true 冻结 fasle 解冻
					}
					uni.showModal({
						title: "是否确认冻结账户：" + item.name + "？",
						success(resp) {
							if (resp.confirm) {
								_this.$request(url, data, "POST").then(res => {
									if (res.code == 0) {
										uni.showToast({
											title: "该账户已冻结",
											icon: "none",
											duration: 3000
										})
										_this.getList()
									}
								})
							}
						}
					})
				} else {
					data = {
						"id": item.account_id, // 雇工账号Id
						"freeze": false // true 冻结 fasle 解冻
					}
					uni.showModal({
						title: "是否确认解冻账户：" + item.name + "？",
						success(resp) {
							if (resp.confirm) {
								_this.$request(url, data, "POST").then(res => {
									if (res.code == 0) {
										uni.showToast({
											title: "该账户已解冻",
											icon: "none",
											duration: 3000
										})
										_this.getList()
									}
								})
							}
						}
					})
				}
			},
			changeTab(item) {
				this.currentPage = 1
				this.currentTab.value = item.value
				this.currentTab.text = item.text
				this.getList()
			},
			getList() {
				let url = "/admin/worker/" + this.currentTab.value + "?page=" + this.currentPage +
					"&keyword=" + this.searEmployee + "&page_size=" + this.currentCount
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.pagination = res.data.pagination
					}
				})
			},
			handleSearch(e) {
				this.currentPage = 1
				this.searEmployee = e.employeeName
				this.searStart = e.startTime
				this.searEnd = e.endTime
				this.getList()
			},
			close() {
				this.showMask = false
				this.showFirst = false
				this.showSecond = false
				this.showEdit = false
				this.showThird = false
				this.showAdd = false
				this.currentWorkerId = ""
				this.currentResumeInfo = {}
				this.currentSubTab = 0
				this.currentWorkerInfo = {}
				this.workerAge = ""
				this.workerName = ""
				this.currentGender = 0
				this.mobile = ""
				this.nation = ""
				this.value = 0
			},
		}
	}
</script>

<style lang="scss">
	.resume {
		.resume_box {
			margin-top: 30px;

			.re_tit {
				font-weight: 600;
				position: relative;
				padding-left: 10px;

				&::before {
					content: "";
					width: 4px;
					height: 80%;
					background: #0092ff;
					position: absolute;
					top: 50%;
					left: 0;
					transform: translateY(-50%);
				}
			}

			.inner_info {
				margin-top: 15px;

				.line {
					.tit {
						white-space: nowrap;
						margin-right: 10px;
					}

					.lables {
						.label {
							margin: 0px 15px 0px 0;
							padding: 5px 10px;
							background: #e1e1e1;
							border-radius: 4px;
							font-size: 14px;
							color: #0092ff;
						}
					}

					&.city {
						.lables {
							.label {
								color: #f49c04;
								background: #fff;
								border: 1px solid #f49c04;
							}
						}
					}
				}

				.vote_item {
					background: #f6f6f6;
					padding: 15px;
					border-radius: 4px;

					.sub_tit {
						position: relative;
						padding-left: 20px;
						margin-bottom: 15px;

						&:before {
							content: "";
							width: 10px;
							height: 10px;
							background: #f49c04;
							position: absolute;
							top: 50%;
							left: 0;
							transform: translateY(-50%);
							border-radius: 50%;
						}
					}

					.line {
						padding: 0;
						font-size: 14px;
					}
				}
			}
		}
	}

	::v-deep {
		.search_box {
			margin: 0;
		}
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

	.showmore {
		width: 100%;
		text-align: center;
		margin: 15px 0;
		cursor: pointer;

		view {
			display: inline-block;
			color: #0F90FF;
		}

		image {
			width: 20px;
			vertical-align: middle;
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
				margin-top: 0;

				.tit {
					width: 100px;
				}
			}
		}

		.line {
			margin: 15px 0;

			.text {
				color: #666;
				font-size: 14px;
			}
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

	.box {
		.box_item {
			&:nth-child(2) {
				padding-left: 20px;

				.title {
					height: 40px;
					line-height: 40px;
					margin: 0;
					padding-left: 0;

					&:before {
						display: none;
					}
				}
			}

			.l_tabs {
				.l_tab {
					padding-left: 15px;
					width: 80px;
					height: 40px;
					line-height: 40px;

					&:hover {
						color: #1890FF;
						cursor: pointer;
					}

					&.active {
						background: #E7F7FF;
						color: #1890FF;
						border-right: 3px solid #1890FF;
					}

					.mark {
						display: inline-block;
						margin-left: 10px;
						color: #f00;
					}
				}
			}
		}

		.box_right {
			width: calc(100% - 80px);
		}
	}

	.mask {
		.inner {
			.title {
				position: relative;
				margin-bottom: 30px;
				font-weight: 600;

				text {
					position: absolute;
					font-size: 14px;
					top: 50%;
					right: 0;
					transform: translateY(-50%);
					color: $base-color;
				}
			}

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

			.setting_box {
				width: 100%;
				height: 100%;
				background: rgba(0, 0, 0, 0.5);
				position: absolute;
				top: 0;
				left: 0;
				z-index: 100;

				.set_inner {
					width: 230px;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					z-index: 100;
					background: #fff;
					padding: 20px;
					border-radius: 6px;

					.subtit {
						font-size: 18px;
					}

					.line {
						padding-left: 10px;
						margin: 20px 0;

						.tit {
							width: 70px;
						}

						.input_wrap {
							width: calc(100% - 70px);
							height: 40px;
							line-height: 40px;
							border: 1px solid #eee;

							input {
								height: 40px;
								padding-left: 10px;
							}
						}
					}
				}

			}
		}
	}
</style>