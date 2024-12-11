<template>
	<view class="board">
		<view class="box">
			<view class="title">发布职位</view>
			<view class="handle_area flex flex_btween" style="align-items: start;flex-wrap: wrap;">
				<view class="sub_box">
					<view class="line">
						<view class="tit"><text>*</text>职位描述</view>
						<view class="input_wrap noborder" style="height:auto;width:95%;">
							<textarea v-model="content" placeholder="请输入详细需求" style="height:529px;" maxlength="1000" />
							<view class="word_len">{{content.length+"/1000"}}</view>
						</view>
					</view>

				</view>
				<view class="sub_box">
					<view class="line">
						<view class="tit">职位名称</view>
						<view class="input_wrap">
							<input type="text" v-model="projectName" placeholder="请输入职位名称" maxlength="32" />
						</view>
					</view>
					<view class="line">
						<view class="tit">职位地址</view>
						<view class="input_wrap wrap" @click="openAddress">{{address?address:"请输入工作地址"}}</view>
					</view>
					<view class="line">
						<view class="tit">性别要求</view>
						<radio-group @change="genderChange" class="input_wrap flex flex-start noborder">
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
					<view class="line">
						<view class="tit">年龄要求</view>
						<view class="input_wrap flex flex-start noborder">
							<input type="number" v-model="minAge" placeholder="最小年龄(请输入数字)" />
							<view class="text">~</view>
							<input type="number" v-model="maxAge" placeholder="最大年龄(请输入数字)" />
							<view class="period">岁</view>
							<!-- <uni-data-select v-model="typeValue" :localdata="typeRange"
								@change="typeChange"></uni-data-select> -->
						</view>
					</view>
					<view class="line">
						<view class="tit">工人薪资</view>
						<view class="input_wrap flex flex-start noborder">
							<input type="number" v-model="minSalary" placeholder="最低工资(请输入数字)" />
							<view class="text">~</view>
							<input type="number" v-model="maxSalary" placeholder="最高工资(请输入数字)" />
							<!-- <view class="period">/月</view> -->
							<uni-data-select v-model="typeValue" :localdata="typeRange"
								@change="typeChange"></uni-data-select>
						</view>
					</view>
					<!-- <view class="line">
						<view class="tit">工作福利</view>
						<view class="wrap" @click="tagChoose('welfare')">{{welfare?welfare:"请选择工作福利"}}</view>
					</view>
					<view class="line">
						<view class="tit">工作信息</view>
						<view class="wrap" @click="tagChoose('work_info')">{{work_info?work_info:"请选择工作信息"}}</view>
					</view> -->
					<view class="line">
						<view class="tit">面试联系人</view>
						<view class="input_wrap">
							<input type="text" v-model="interviewer" placeholder="请输入面试联系人姓名" maxlength="32" />
						</view>
					</view>
					<view class="line">
						<view class="tit">联系人电话</view>
						<view class="input_wrap">
							<input type="text" v-model="interviewerMobile" placeholder="请输入面试联系人电话" maxlength="32" />
						</view>
					</view>
					<!-- <view class="line">
						<view class="tit">上传图片 <text
								style="font-size: 14px;color:#999;font-weight: 500;">(最多可传5张，每张不超过5M)</text> </view>
						<view class="input_wrap noborder" style="height:auto;">
							<uni-file-picker v-model="imageValue" fileMediatype="image" :limit="5" mode="grid"
								@select="selectImage" @delete="deleteImage" :auto-upload="false" />
						</view>
					</view>
					<view class="line">
						<view class="tit">上传视频</view>
						<view class="input_wrap noborder" style="height:auto;">
							<uni-file-picker v-model="videoValue" fileMediatype="video" :limit="1" mode="grid"
								@select="selectVideo" :auto-upload="false" />
							<view class="video" v-if="videoKeys[0]?videoKeys[0].url:videoKeys[0]"
								style="margin-top: 15px;">
								<video :src="videoKeys[0].url" controls style="width:100%;"></video>
							</view>
						</view>
					</view> -->
				</view>
				<view class="line" style="width: 100%;">
					<view class="btn" @click="submit" style="width:150px;margin:0 auto;">提交</view>
				</view>
			</view>
		</view>
		<view class="mask" v-if="showMask">
			<!-- <view class="inner" style="width:50%;" v-if="showSetting">
				<view class="title">设置费用</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<view class="line flex flex-start">
						<view class="tit">费用单价</view>
						<view class="input_wrap flex flex_btween">
							<input type="text" v-model="fee" placeholder="请输入费用单价" style="width: 100%;" />
							<text class="period" style="white-space: nowrap;">元/人/时</text>
						</view>
					</view>
					<view class="line" style="color:#f00;font-size:14px;">提示：费用设置后，将不允许修改，请确认后提交。</view>
					<view class="line flex flex_end">
						<view class="btn" @click="confirm">确认设置</view>
					</view>
				</view>
			</view> -->
			<view class="inner" style="width:50%;" v-if="showMap">
				<view class="title">选择地址</view>
				<view class="close" @click="closeAddress">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<view class="line flex flex-start" style="position: relative;padding-left:0;">
						<view class="tit" style="width: 90px;">搜索地址</view>
						<view class="input_wrap" style="margin-top: 0;height:40px;">
							<input type="text" v-model="searAddress" placeholder="请输入职位地址"
								style="height:40px;line-height: 40px;" @input="getLocation" />
						</view>
						<view class="btn" style="margin-left: 10px;" @click="sureAddr">确定</view>
						<view class="area_wrap" v-if="areaList.length != 0">
							<view class="area_item" v-for="(item,index) in areaList" @click="chooseAddress(item)">
								{{item.title+"("+item.address+")"}}
							</view>
						</view>
					</view>
					<view class="map_area">
						<map :latitude="addressObj.location.lat" :longitude="addressObj.location.lng" :markers="markers"
							@regionchange="posChange" @begin="posChange" @end="posChange"
							style="width:100%;height:400px;"></map>
					</view>
				</view>
			</view>
		</view>
		<tagSelect :list="list" :title="tagTitle" @cancel="cancel" @handleConfirm="handleTagConfirm" v-if="showTag"
			:selected="currentSelected" :selectedIds="currentSeleIds">
		</tagSelect>
	</view>
</template>

<script>
	import tagSelect from "@/components/tags_select.vue"
	const app = getApp()
	export default {
		name: "add_require",
		props: ["info"],
		data() {
			return {
				interviewer: "",
				interviewerMobile: "",
				minAge: "",
				maxAge: "",
				projectName: "",
				address: "",
				addressObj: {
					province: "",
					city: "",
					district: "",
					address: "",
					location: {
						lat: 39.906551,
						lng: 116.332039
					}
				},
				content: "",
				minSalary: "",
				maxSalary: "",
				showMask: false,
				fee: "",
				currentId: "",
				tagTitle: "工作信息",
				currentTagType: "",
				currentSelected: [],
				showTag: false,
				showSetting: false,
				showMap: false,
				searAddress: "",
				showAreaWrap: true,
				markers: [],
				list: [],
				// tagsObj: {},
				welfareArr: [],
				welIds: [],
				welfare: "",
				workArr: [],
				workIds: [],
				work_info: "",
				currentSeleIds: [],
				imageValue: [],
				imageKeys: [],
				videoValue: [],
				videoKeys: [{
					key: "",
					url: ""
				}],
				areaList: [],
				typeValue: "month",
				typeRange: [{
						value: "month",
						text: "元/月"
					},
					{
						value: "day",
						text: "元/天"
					},
					{
						value: "hour",
						text: "元/时"
					}
				],
				gender: [{
						value: "male",
						text: "男"
					}, {
						value: "female",
						text: "女"
					},
					{
						value: "both",
						text: "不限"
					}
				],
				currentGender: 0,
			};
		},
		components: {
			tagSelect
		},
		async created() {
			let _this = this
			// 判断是否提交公司认证，未完成则先完成公司认证
			if (this.info.broker.review_status == "waiting_submit") {
				uni.showModal({
					title: "请先提交公司资质认证。",
					showCancel: false,
					success(res) {
						if (res.confirm) {
							_this.setPageName({
								pageName: "company_info"
							}, "", "all")
							_this.$emit("getPageName", {
								pageName: "company_info"
							})
						}
					}
				})
			}
			if (this.info.broker.review_status == "rejected") {
				uni.showModal({
					title: "您提交的公司资质未通过审核，请先重新提交。",
					showCancel: false,
					success(res) {
						if (res.confirm) {
							_this.setPageName({
								pageName: "company_info"
							}, "", "all")
							_this.$emit("getPageName", {
								pageName: "company_info"
							})
						}
					}
				})
			}
			// this.getTagList()
			// this.getCurrentLocation()
		},
		methods: {
			genderChange(e) {
				for (let i = 0; i < this.gender.length; i++) {
					if (this.gender[i].value == e.detail.value) {
						this.currentGender = i
					}
				}
			},
			getCurrentLocation() {
				let _this = this
				uni.getLocation({
					async success(res) {
						if (res.errMsg == "getLocation:ok") {
							_this.addressObj.location.lat = res.latitude
							_this.addressObj.location.lng = res.longitude
							let transAddress = await _this.transPosition(res.latitude, res.longitude)
							_this.addressObj.address = transAddress.result.address
							_this.address = transAddress.result.address
							_this.addressObj.province = transAddress.result.address_component.province
							_this.addressObj.city = transAddress.result.address_component.city
							_this.addressObj.district = transAddress.result.address_component.district
							_this.searAddress = transAddress.result.address
							_this.markers = [{
								id: 1,
								latitude: res.latitude,
								longitude: res.longitude,
								iconPath: app.globalData.baseImageUrl + "/broker/ic_posi_red.png",
								title: transAddress.result.formatted_addresses.recommend,
								width: 30,
								height: 30
							}]
							console.log(_this.markers)
							console.log(transAddress, "transAddress")
						}
					}
				})
			},
			async posChange(e) {
				let _this = this
				console.log(e)
				if (e.type == "end") {
					console.log(e.detail.centerLocation.latitude, e.detail
						.centerLocation
						.longitude)
					let transAddress = await _this.transPosition(e.detail.centerLocation.latitude, e.detail
						.centerLocation
						.longitude)
					_this.addressObj.address = transAddress.result.address
					_this.address = transAddress.result.address
					_this.addressObj.province = transAddress.result.address_component.province
					_this.addressObj.city = transAddress.result.address_component.city
					_this.addressObj.district = transAddress.result.address_component.district
					_this.searAddress = transAddress.result.address
					_this.markers = [{
						id: 1,
						latitude: transAddress.result.location.lat,
						longitude: transAddress.result.location.lng,
						iconPath: app.globalData.baseImageUrl + "/broker/ic_posi_red.png",
						title: transAddress.result.formatted_addresses.recommend,
						width: 30,
						height: 30
					}]

				}
			},
			transPosition(lat, lng) {
				let _this = this
				return new Promise(resolve => {
					_this.$jsonp("https://apis.map.qq.com/ws/geocoder/v1/", {
							location: lat + "," + lng,
							key: "UT2BZ-MDXCN-26UFM-SEUG3-W3ZDE-DHFBA",
							output: "jsonp"
						},
						function(res) {
							resolve(res)
						})
				})

			},
			typeChange(e) {

			},
			deleteImage(e) {
				this.imageKeys.splice(e.index, 1)
				console.log(this.imageKeys, "dele")
				console.log(e, "delete")
			},
			// getTagList() {
			// 	this.$request("/broker/tags/project-edit").then(res => {
			// 		if (res.code == 0) {
			// 			this.tagsObj = res.data
			// 		}
			// 	})
			// },
			chooseAddress(item) {
				this.addressObj.province = item.province
				this.addressObj.city = item.city
				this.addressObj.district = item.district
				this.addressObj.address = item.address
				this.searAddress = item.title + "(" + item.address + ")"
				this.addressObj.location = item.location
				this.address = item.title + "(" + item.address + ")"
				this.markers = [{
					id: 1,
					latitude: item.location.lat,
					longitude: item.location.lng,
					iconPath: app.globalData.baseImageUrl + "/broker/ic_posi_red.png",
					title: item.title,
					width: 30,
					height: 30
				}]
				this.areaList = []

			},
			async loadimg(type, filePath) {
				console.log(filePath, "file")
				var _this = this;
				let header = {
					"Authorization": "bearer " + uni.getStorageSync("token"),
					"accept": "application/json",
					// "content-type": "multipart/form-data"
				}
				return new Promise((resolve, reject) => {
					uni.uploadFile({
						url: app.globalData.baseUrl + "/broker/upload?type=" + type,
						filePath: filePath,
						name: 'file',
						header: header,
						success(resp) {
							var response = JSON.parse(resp.data);
							if (response.code == 0) {
								if (type == "project_video") {
									_this.$set(_this.videoKeys[0], "key", response.data.key)
									_this.$set(_this.videoKeys[0], "url", response.data.url)
									// _this.videoKeys[0] = response.data
								}
								if (type == "project_image") {
									_this.imageKeys.push(response.data)
								}
								console.log(_this.videoKeys, _this.imageKeys)
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
			sureAddr() {
				this.showMap = false
				this.showMask = false
			},
			getLocation() {
				let _this = this
				this.$jsonp("https://apis.map.qq.com/ws/place/v1/suggestion", {
					keyword: _this.searAddress,
					key: "UT2BZ-MDXCN-26UFM-SEUG3-W3ZDE-DHFBA",
					output: "jsonp"
				}, function(res) {
					_this.areaList = res.data
				})
			},
			openAddress() {
				this.showMask = true
				this.showMap = true
			},
			close() {
				this.showMask = false
				this.showMap = false
				this.showSetting = false
				this.resetData()
			},
			closeAddress() {
				this.showMask = false
				this.showMap = false
			},
			resetData() {
				this.projectName = ""
				this.welIds = []
				this.welfare = ""
				this.work_info = ""
				this.workIds = []
				this.content = ""
				this.typeValue = "month"
				this.minSalary = ""
				this.maxSalary = ""
				this.minAge = ""
				this.maxAge = ""
				this.fee = ""
				this.videoKeys = []
				this.videoValue = []
				this.imageValue = []
				this.imageKeys = []
				// this.getCurrentLocation()
			},
			cancel() {
				this.showTag = false
			},
			// tagChoose(type) {
			// 	this.currentTagType = type
			// 	if (type == "welfare") {
			// 		this.list = this.tagsObj.job_benefits
			// 		this.tagTitle = "工作福利"
			// 		this.currentSelected = this.welfareArr
			// 		this.currentSeleIds = this.welIds
			// 	}
			// 	if (type == "work_info") {
			// 		this.list = this.tagsObj.job_info
			// 		this.tagTitle = "工作信息"
			// 		this.currentSelected = this.workArr
			// 		this.currentSeleIds = this.workIds
			// 	}
			// 	this.showTag = true
			// },
			handleTagConfirm(e) {
				console.log(e)
				let msg = ""
				let len = e.objarr.length
				for (var i = 0; i < len; i++) {
					msg += e.objarr[i].name + "、"
				}
				if (this.currentTagType == "welfare") {
					this.welfareArr = e.objarr
					this.welIds = e.ids
					this.welfare = msg.slice(0, msg.length - 1)
				}
				if (this.currentTagType == "work_info") {
					this.workArr = e.objarr
					this.workIds = e.ids
					this.work_info = msg.slice(0, msg.length - 1)
				}
				this.showTag = false
			},
			// 获取上传状态
			selectImage(e) {
				console.log('选择图片：', e)
				let files = e.tempFilePaths
				let filesLen = e.tempFilePaths.length
				for (let i = 0; i < filesLen; i++) {
					this.loadimg("project_image", e.tempFilePaths[i])
				}
			},
			selectVideo(e) {
				console.log('选择视频：', e)
				this.loadimg("project_video", e.tempFilePaths[0])
			},
			submit() {
				let _this = this
				let data = {
					"name": this.projectName,
					"worker_gender": this.gender[this.currentGender].value,
					"worker_age_min": Number(this.minAge),
					"worker_age_max": Number(this.maxAge),
					"worker_salary_type": this.typeValue,
					"worker_salary_min": Number(this.minSalary),
					"worker_salary_max": Number(this.maxSalary),
					"interview_contact_name": this.interviewer,
					"interview_contact_mobile": this.interviewerMobile,
					// "job_benefits": this.welIds,
					// "job_info": this.workIds,
					"work_address": this.addressObj,
					"content": this.content,
					"videos": this.videoKeys,
					"images": this.imageKeys
				}
				console.log(data)
				this.$request("/broker/projects", data, "POST").then(res => {
					if (res.code == 0) {
						uni.showModal({
							title: "职位创建成功",
							showCancel: false,
							confirmText: "前往职位列表",
							success(resp) {
								if (resp.confirm) {
									_this.resetData()
									_this.setPageName({
										pageName: "project_list"
									}, "", "all")
									_this.$emit("getPageName", {
										pageName: "project_list"
									})
								}
							}
						})
					}
				})
			},
			// confirm() {
			// 	let _this = this
			// 	let data = {
			// 		"price": this.fee
			// 	}
			// 	let url = "/broker/project/" + this.currentId + "/set-fee"
			// 	this.$request(url, data, "POST").then(res => {
			// 		if (res.code == 0) {
			// 			uni.showModal({
			// 				title: "提示",
			// 				content: "费用结算方式设置成功，请前往职位列表。",
			// 				success(resp) {
			// 					if (resp.confirm) {
			// 						_this.close()
			// 						_this.setPageName({
			// 							pageName: "project_list"
			// 						}, "", "all")
			// 						_this.$emit("getPageName", {
			// 							pageName: "project_list"
			// 						})
			// 					} else {
			// 						_this.close()
			// 					}
			// 				}
			// 			})
			// 		}
			// 	})
			// }
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep {
		uni-picker {
			width: 100%;
			padding: 0 15px;
			height: 30px;
			line-height: 30px;
			border: 1px solid #e9e9e9;
			border-radius: 5px;
			margin-right: 20px;
		}

		.uni-stat__select {
			margin-left: 10px;
		}

		.uni-select {
			height: 30px;
			font-size: 14px;
		}
	}

	.box {
		.sub_box {
			width: 48%;
		}

		.line {
			margin-bottom: 20px;
			position: relative;

			.com_mask {
				max-height: 200px;
				overflow-y: scroll;
				position: absolute;
				width: 460px;
				top: 100%;
				left: 0;
				box-shadow: 0px 2px 5px 2px #eee;
				background: #fff;
				z-index: 10;
				padding: 15px 0;

				.com_item {
					height: 30px;
					line-height: 30px;
					padding-left: 15px;
					box-sizing: border-box;
					font-size: 14px;
					cursor: pointer;

					&:hover {
						background: #d7e6f8;
					}
				}
			}

			&.scope {
				align-items: start;
			}

			.tit {
				color: rgba(0, 0, 0, 0.85);
				line-height: 22px;

				text {
					font-weight: 600;
					color: #f00;
					display: inline-block;
					font-size: 18px;
					margin-right: 5px;
					margin-top: 5px;
				}
			}

			.area_wrap {
				position: absolute;
				width: 100%;
				top: 100%;
				left: 0;
				z-index: 100;
				background: #fff;
				border-radius: 10px;
				padding: 15px;
				box-sizing: border-box;
				box-shadow: 0 5px 5px 3px #eee;

				.area_item {
					height: 35px;
					line-height: 35px;
					font-size: 14px;
					color: #666;
					cursor: pointer;
					padding: 0 8px;
					box-sizing: border-box;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;

					&:hover {
						background: #d7e6f8;
					}
				}
			}

			.wrap {
				width: 460px;
				min-height: 30px;
				border-radius: 2px;
				border: 1px solid #D9D9D9;
				padding: 0 15px;
				box-sizing: border-box;
				font-size: 14px;
				line-height: 30px;
			}

			.input_wrap {
				width: 460px;
				height: 30px;
				border-radius: 2px;
				border: 1px solid #D9D9D9;
				position: relative;
				margin-top: 8px;



				.period {
					// position: absolute;
					// top: 50%;
					// right: 5px;
					// transform: translateY(-50%);
					margin-left: 15px;
					font-size: 14px;
					color: #5a5a5a;
				}

				.more {
					.subt {
						white-space: nowrap;
						color: #f47106;
					}

					uni-picker {
						color: #f47106;
					}

					.month {
						input {
							width: 40px;
							height: 30px;
							text-align: center;
							border: 1px solid #ccc;
							padding: 0;
							border-radius: 4px;
							margin-right: 5px;
							color: #f47106;
						}
					}
				}

				&.age {
					input {
						border: 1px solid #e9e9e9;
						width: 140px;
						border-radius: 5px;
					}

					text {
						display: inline-block;
						margin: 0 10px;
					}
				}

				.abso {
					position: absolute;
					top: 50%;
					right: 15px;
					transform: translateY(-50%);
				}

				&.noborder {
					border: none;

					.text {
						margin: 0 10px;
					}

					input {
						border: 1px solid #e9e9e9;
					}
				}

				input {
					// width: 100%;
					height: 30px;
					padding-left: 15px;
					font-size: 14px;
					box-sizing: border-box;
				}

				.option {
					margin-right: 20px;
					cursor: pointer;

					image {
						width: 20px;
						height: 20px;
						margin-right: 5px;
					}
				}

				.long {
					image {
						width: 20px;
						height: 20px;
						margin-right: 5px;
						cursor: pointer;
					}
				}

				textarea {
					width: 100%;
					padding: 15px;
					border: 1px solid #D9D9D9;
					font-size: 14px;
					box-sizing: border-box;
					// overflow-y: scroll;
				}

				.word_len {
					position: absolute;
					bottom: 5px;
					right: 5px;
					font-size: 14px;
					color: #5297ff;
					font-weight: 600;
				}
			}
		}
	}
</style>