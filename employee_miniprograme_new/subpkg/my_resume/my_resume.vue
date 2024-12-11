<template>
	<view class="content">
		<!-- #ifdef MP-WEIXIN || MP-KUAISHOU -->
		<customHeader :title="pageName" :showBack="true" :headHeight="headerHeight"></customHeader>
		<!-- #endif -->
		<view class="box" :style="{top:marginTop+tabMargin+'px'}">
			<scroll-view scroll-y="true" :style="{height:scrollHeight+'px'}">
				<view class="head flex flex_btween">
					<view class="avatar flex flex-start">
						<image :src="baseInfo.avatar" mode="widthFix"></image>
						<view>{{baseInfo.name}}</view>
					</view>
					<view class="finish">
						<view>简历完成度</view>
						<view class="fini_status">{{mission}}</view>
					</view>
				</view>
				<view class="body" :style="{marginTop:tabMargin+'px',paddingBottom:btnHeight+3*tabMargin+'px'}">
					<view class="body_box">
						<view class="title">基本信息</view>
						<view class="info" style="margin-top:0;">
							<view class="line flex flex-start">
								<view class="tit">性别：</view>
								<view class="text">{{baseInfo.gender=="female"?"女":"男"}}</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">年龄：</view>
								<view class="text">{{baseInfo.age}}</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">手机号：</view>
								<view class="text">{{baseInfo.mobile}}</view>
							</view>
						</view>
					</view>
					<view class="body_box">
						<view class="title">工作意向</view>
						<view class="info">
							<view class="input_line">
								<view class="tit">意向城市</view>
								<view class="input_wrap flex flex_btween" @click="openCity">
									<view class="city" style="width: calc(100% - 13rpx);">
										{{wannerCity?wannerCity:"请选择意向城市"}}
									</view>
									<image :src="imgUrl+'/worker/ic_arrow_right_yellow.png'" mode="widthFix"
										class="arrow">
									</image>
								</view>
							</view>
							<view class="input_line">
								<view class="tit">意向工种</view>
								<view class="labels flex flex_btween">
									<view class="label" v-for="(item,index) in workType" :key="index"
										:class="item.active?'active':''" @click="chooseWorkType(index)">
										{{item.job_type_name}}
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="body_box" v-if="seleType.length">
						<view class="title">工作偏好</view>
						<view class="info">
							<view class="input_line" v-for="(item,index) in seleType" :key="index">
								<view class="subtit">{{item.job_type_name}}</view>
								<view class="input_line">
									<view class="tit">期望薪资</view>
									<view class="input_wrap salary flex flex_btween">
										<input type="number" v-model="item.desired_salary_min" placeholder="最低薪资" />
										<view class="">~</view>
										<input type="number" v-model="item.desired_salary_max" placeholder="最高薪资" />
										<view class="period">元</view>
									</view>
								</view>
								<view class="input_line">
									<view class="tit">结算方式</view>
									<view class="input_wrap flex flex_around">
										<view class="radio_item flex flex-start" v-for="(item2,index2) in settleTye"
											:key="index2" @click="chooseSettleType(item2,index)">
											<image
												:src="item.salary_pay_period==item2.value?imgUrl+'/worker/ic_circle_fill.png':imgUrl+'/worker/ic_circle_void.png'"
												mode=""></image>
											<view class="">{{item2.text}}</view>
										</view>
									</view>
								</view>
								<view class="input_line">
									<view class="tit">我的优势</view>
									<view class="input_wrap adv"
										:style="{color:item.advantages.length?'#333':'#9E9E9E'}"
										@click="openTag(item,index)">
										{{!item.advantages.length?"请选择工作优势":formatAdv(item.advantages)}}
										<image :src="imgUrl+'/worker/ic_arrow_right_yellow.png'" mode="widthFix">
										</image>
									</view>
								</view>

							</view>
						</view>
					</view>
					<view class="body_box">
						<view class="title">自我介绍</view>
						<view class="info">
							<view class="input_wrap intro" @click="toVoice">{{!introduce?"点击录入自我介绍":introduce}}
								<image :src="imgUrl+'/worker/ic_voice.png'" mode="width" class="voice"></image>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="mask" v-if="showMask">
			<view class="inner" :style="{paddingTop:marginTop+tabMargin+'px'}" v-if="showCity">
				<view class="title">选择意向城市<text>(最多可选三个)</text></view>
				<view class="line flex flex-start">
					<view class="tit">城市一</view>
					<view class="wrap">
						<uni-data-picker ref="pickerOne" :localdata="cityData" v-model="city1" placeholder="请选择地址"
							popup-title="请选择城市" @change="onchange1" :map="{text:'name',value:'id'}">
						</uni-data-picker>
					</view>
				</view>
				<view class="line flex flex-start">
					<view class="tit">城市二</view>
					<view class="wrap">
						<uni-data-picker ref="pickerTwo" :localdata="cityData" v-model="city2" placeholder="请选择地址"
							popup-title="请选择城市" @change="onchange2" :map="{text:'name',value:'id'}">
						</uni-data-picker>
					</view>
				</view>
				<view class="line flex flex-start">
					<view class="tit">城市三</view>
					<view class="wrap">
						<uni-data-picker ref="pickerThree" :localdata="cityData" v-model="city3" placeholder="请选择地址"
							popup-title="请选择城市" @change="onchange3" :map="{text:'name',value:'id'}">
						</uni-data-picker>
					</view>
				</view>
				<view class="btns flex flex_btween">
					<view class="btn cancel" @click="closeCity">取消</view>
					<view class="btn sure" @click="sureCity">确定</view>
				</view>
			</view>
			<view class="inner" v-if="showTag">
				<tagSelect :tags="tagsList" :selectInfo="seleTags" :infoIds="seleTagIds" @handleInfo="handleInfo"
					@close="close">
				</tagSelect>
			</view>
		</view>
		<view class="fixed_btn">
			<view class="btn" :style="{height:btnHeight+'px',lineHeight:btnHeight+'px',margin:tabMargin + 'px 0px'}"
				@click="saveMsg">保存
			</view>
		</view>
	</view>
</template>

<script>
	import customHeader from "@/components/custom_header.vue"
	import tagSelect from "@/components/tag_select.vue"
	// import cityData from "@/common/cityData.js"
	const app = getApp()
	export default {
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				btnHeight: app.globalData.btnHeight,
				pageName: "我的简历",
				headerHeight: app.globalData.highTopHeight,
				scrollHeight: 0,
				baseInfo: {},
				wannerWork: "",
				city1: "",
				city2: "",
				city3: "",
				wannerCity: "",
				cityCount: 0,
				cityData: [],
				cityArr: [],
				showMask: false,
				showCity: false,
				showTag: false,
				seleTags: [],
				seleTagIds: [],
				introduce: "",
				workType: [],
				seleType: [],
				settleTye: [{
						value: "daily",
						text: "日结"
					},
					{
						value: "monthly",
						text: "月结"
					}
				],
				currentWorkIndex: 0,
				tagsList: [],
				allTags: [],
				mission: 0
			}
		},
		components: {
			customHeader,
			tagSelect
		},
		watch: {
			seleType(newValue) {}
		},
		async onLoad(param) {
			// uni.showLoading({
			// 	title: "加载中"
			// })
			let _this = this
			if (param.msg) {
				this.introduce = decodeURI(param.msg)
			}
			this.getInfo()
			// let arr = await this.getTagList()
			this.workType = [...await this.getTagList()]
			let resumeInfo = await this.getResume()
			_this.mission = resumeInfo.mission
			_this.cityArr = _this.deFormatCity(resumeInfo.areas)
			_this.sureCity()
			_this.seleType = resumeInfo.intentions
			_this.introduce = resumeInfo.introduction
			let len = resumeInfo.intentions.length
			let workLen = _this.workType.length
			for (let i = 0; i < len; i++) {
				for (let j = 0; j < workLen; j++) {
					if (resumeInfo.intentions[i].job_type_id == _this.workType[j]
						.job_type_id) {
						_this.workType[j] = resumeInfo.intentions[i]
						_this.$set(this.workType[j], "active", true)
					}
				}
			}
			this.scrollHeight = await this.getScrollHeight()
			// setTimeout(function() {
			// 	_this.scrollHeight = app.globalData.systemHeight - _this.marginTop - _this.tabMargin
			// 	uni.hideLoading()
			// }, 500)

			this.getCitys()
		},
		methods: {
			toVoice() {
				let url = ""
				if (!this.introduce) {
					url = "/subpkg/my_intro/my_intro"
				} else {
					let msg = encodeURI(this.introduce)
					url = "/subpkg/my_intro/my_intro?msg=" + msg
				}
				uni.navigateTo({
					url: url
				})
			},
			getScrollHeight() {
				let _this = this
				return new Promise(resolve => {
					let height = app.globalData.systemHeight - _this.marginTop - _this.tabMargin
					resolve(height)
				})
			},
			close() {
				this.showMask = false
				this.showTag = false
			},
			prevDateFun(object) {
				if (object) {
					this.introduce = object.msg
				} else {
					return
				}
			},
			chooseSettleType(item, index) {
				this.seleType[index].salary_pay_period = item.value
			},
			formatAdv(adv) {
				let str = ""
				let advLen = adv.length;
				for (let i = 0; i < advLen; i++) {
					str += adv[i].name + "、"
				}
				str = str.slice(0, str.length - 1)
				return str
			},
			openTag(item, index) {
				this.showMask = true
				this.showTag = true
				this.currentWorkIndex = index
				this.seleTags = [...this.seleType[index].advantages]
				let arr = []
				let len = this.seleType[index].advantages.length
				for (let i = 0; i < len; i++) {
					arr.push(this.seleType[index].advantages[i].id)
				}
				this.seleTagIds = arr
				this.tagsList = this.allTags.filter(el => {
					return el.id == item.job_type_id
				})[0].advantages
			},
			getCitys() {
				this.$request("/common/areas").then(res => {
					if (res.code == 0) {
						this.cityData = res.data
					}
				})
			},
			getTagList() {
				let _this = this
				return new Promise(resolve => {
					_this.$request("/worker/job-types").then(res => {
						if (res.code == 0) {
							let arr = []
							_this.allTags = res.data
							let len = res.data.length
							for (let i = 0; i < len; i++) {
								let obj = {
									job_type_id: res.data[i].id,
									job_type_name: res.data[i].name,
									active: false,
									desired_salary_min: "",
									desired_salary_max: "",
									salary_pay_period: "monthly",
									advantages: []
								}
								arr.push(JSON.parse(JSON.stringify(obj)))
							}
							resolve(arr)
						}
					})
				})

			},
			handleInfo(e) {
				this.seleTags = e.objarr
				this.seleTagIds = e.ids
				this.seleType[this.currentWorkIndex].advantages = e.objarr
				this.close()
			},
			onchange1(e) {
				if (e.detail.value.length) {
					if (this.hasSimpleCity(e.detail.value[1].value)) {
						uni.showToast({
							title: "该城市已选择",
							icon: "error",
							duration: 2000
						})
						// this.$refs.pickerOne.clear()
						return
					}
				}
				this.cityArr[0] = e.detail.value

			},
			onchange2(e) {
				if (e.detail.value.length) {
					if (this.hasSimpleCity(e.detail.value[1].value)) {
						uni.showToast({
							title: "该城市已选择",
							icon: "error",
							duration: 2000
						})
						// this.$refs.pickerTwo.clear()
						return
					}
				}

				this.cityArr[1] = e.detail.value
			},
			onchange3(e) {
				if (e.detail.value.length) {
					if (this.hasSimpleCity(e.detail.value[1].value)) {
						uni.showToast({
							title: "该城市已选择",
							icon: "error",
							duration: 2000
						})
						// this.$refs.pickerThree.clear()
						return
					}
				}
				this.cityArr[2] = e.detail.value
			},
			hasSimpleCity(value) {
				// 对比二级城市id是否有相同
				let len = this.cityArr.length
				let hasSimple = false
				for (let i = 0; i < len; i++) {
					if (this.cityArr[i] && this.cityArr[i].length > 0) {
						if (value == this.cityArr[i][1].value) {
							hasSimple = true
						}
					}

				}
				return hasSimple

			},
			chooseWorkType(index) {

				if (this.workType[index].active) {
					this.workType[index].active = false
				} else {
					let len = this.workType.length
					let count = 0
					for (let i = 0; i < len; i++) {
						if (this.workType[i].active) {
							count++
						}
					}
					if (count >= 2) {
						uni.showToast({
							title: "最多选2个",
							icon: "error",
							duration: 2000
						})
					} else {
						this.workType[index].active = !this.workType[index].active
					}
				}
				this.seleType = this.workType.filter(el => {
					return el.active == true
				})
			},
			sureCity() {
				let newCityArr = this.cityArr.filter(el => {
					return el.length > 0
				})
				this.wannerCity = ""
				let len = newCityArr.length
				for (let i = 0; i < len; i++) {
					this.wannerCity += newCityArr[i][0].text + "/" + newCityArr[i][1].text + "、"
				}
				this.wannerCity = this.wannerCity.slice(0, this.wannerCity.length - 1)
				this.closeCity()
			},
			formatCity() {
				console.log(this.cityArr)
				let len = this.cityArr.length
				let newArr = []
				for (let i = 0; i < len; i++) {
					let newArrItem = []
					if (this.cityArr[i] && this.cityArr[i].length) {
						for (let j = 0; j < this.cityArr[i].length; j++) {
							let newObj = {
								id: "",
								name: ""
							}
							newObj.id = this.cityArr[i][j].value
							newObj.name = this.cityArr[i][j].text
							newArrItem.push(JSON.parse(JSON.stringify(newObj)))
						}
					}
					if (newArrItem.length) {
						newArr.push(JSON.parse(JSON.stringify(newArrItem)))
					}
				}
				return newArr
			},
			deFormatCity(arr) {
				let len = arr.length
				let newArr = []
				for (let i = 0; i < len; i++) {
					let index = i + 1
					let param = "city" + index
					this[param] = arr[i][1].id

					let newArrItem = []
					for (let j = 0; j < arr[i].length; j++) {
						let newObj = {
							value: "",
							text: ""
						}
						newObj.value = arr[i][j].id
						newObj.text = arr[i][j].name
						newArrItem.push(JSON.parse(JSON.stringify(newObj)))
					}
					newArr.push(JSON.parse(JSON.stringify(newArrItem)))
				}
				return newArr
			},
			getInfo() {
				this.$request("/worker/profile").then(res => {
					if (res.code == 0) {
						this.baseInfo = res.data
					}
				})
			},
			openCity() {
				this.showMask = true
				this.showCity = true
			},
			closeCity() {
				this.showMask = false
				this.showCity = false
			},
			getResume() {
				let _this = this
				return new Promise(resolve => {
					_this.$request("/worker/resume").then(res => {
						if (res.code == 0) {
							resolve(res.data)
						}
					})
				})

			},
			saveMsg() {
				let _this = this
				// 判断是否已填写工作偏好
				let len = this.seleType.length
				for (let i = 0; i < len; i++) {
					if (!this.seleType[i].desired_salary_min || !this.seleType[i].desired_salary_max) {
						// 未填写工资
						uni.showModal({
							title: "期望薪资未填写完整",
							showCancel: false
						})
						return
					}
					if (Number(this.seleType[i].desired_salary_min) > Number(this.seleType[i].desired_salary_max)) {
						// 最低大于最高
						uni.showModal({
							title: "最低薪资不能大于最高工资",
							showCancel: false
						})
						return
					}
					if ((Number(this.seleType[i].desired_salary_min) > 20000) || (Number(this.seleType[i]
							.desired_salary_max) > 20000)) {
						// 最低大于最高
						uni.showModal({
							title: "薪资不能大于20000",
							showCancel: false
						})
						return
					}
				}
				let data = {
					"areas": this.formatCity(),
					"intentions": this.seleType,
					"introduction": this.introduce
				}
				this.$request("/worker/resume", data, "POST").then(async res => {
					if (res.code == 0) {
						uni.showToast({
							title: "保存成功",
							duration: 2000
						})
						let resumeInfo = await this.getResume()
						_this.mission = resumeInfo.mission
						_this.cityArr = _this.deFormatCity(resumeInfo.areas)
						_this.sureCity()
						_this.seleType = resumeInfo.intentions
						_this.introduce = resumeInfo.introduction
						let len = resumeInfo.intentions.length
						let workLen = _this.workType.length
						for (let i = 0; i < len; i++) {
							for (let j = 0; j < workLen; j++) {
								if (resumeInfo.intentions[i].job_type_id == _this.workType[j]
									.job_type_id) {
									_this.workType[j] = resumeInfo.intentions[i]
									_this.$set(_this.workType[j], "active", true)
								}
							}
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	::-webkit-input-placeholder {
		font-weight: 400;
		font-size: 27rpx;
		color: #9E9E9E;
	}

	::v-deep {

		.input-value-border,
		.input-value {
			border: none !important;
			height: 84rpx !important;
			font-size: 28rpx !important;
		}
	}

	.fixed_btn {
		position: fixed;
		width: 100%;
		bottom: 0;
		left: 0;
		z-index: 11;
		background: #fff;
		padding: 0 38rpx;
		box-sizing: border-box;
		box-shadow: 0rpx 0rpx 4rpx 0rpx rgba(0, 0, 0, 0.1);

		.btn {
			width: 100%;
			background: linear-gradient(180deg, #FFDB01 0%, #F77A0B 100%);
			box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
			color: #fff;
			border: none;
			border-radius: 15rpx;
			// border: 2rpx solid #216FF9;
			font-weight: 600;
			font-size: 29rpx;
			color: #FFFFFF;
			text-align: center;
		}
	}

	.mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.6);
		z-index: 15;

		.inner {
			width: 80%;
			height: 100%;
			background: #fff;
			position: absolute;
			top: 0;
			right: 0;
			box-sizing: border-box;
			padding-left: 40rpx;
			padding-right: 40rpx;

			.title {
				font-size: 30rpx;
				font-weight: 600;
				margin-bottom: 40rpx;

				text {
					color: #f00;
					font-size: 24rpx;
					font-weight: 500;
				}
			}

			.line {
				margin-bottom: 30rpx;

				.tit {
					width: 120rpx;
					font-size: 28rpx;
					color: #5a5a5a;


				}

				.wrap {
					width: calc(100% - 120rpx);
					height: 84rpx;
					background: #F9F9F9;
					border-radius: 8rpx;
				}
			}

			.btns {
				margin-top: 80rpx;

				.btn {
					width: 48%;
					height: 84rpx;
					line-height: 84rpx;
					text-align: center;
					border: 1px solid #F77A0B;
					border-radius: 16rpx;

					&.cancel {
						color: #F77A0B;
					}

					&.sure {
						background: linear-gradient(180deg, #FFDB01 0%, #F77A0B 100%);
						box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
						color: #fff;
						border: none;
					}
				}
			}
		}
	}

	.box {
		position: fixed;
		width: calc(100% - 92rpx);
		left: 46rpx;
		z-index: 10;

		.head {
			// #ifdef MP-TOUTIAO
			padding: 20rpx;
			box-sizing: border-box;
			background: url($back-ground-url+"/worker/top_header_bg.png") no-repeat;
			background-size: 100% 100%;
			border-radius: 16rpx;

			// #endif
			.avatar {
				image {
					width: 139rpx;
					height: 139rpx;
					margin-right: 28rpx;
					border-radius: 50%;
				}

				view {
					font-weight: 600;
					font-size: 33rpx;
					color: #FFFFFF;
					text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
				}
			}

			.finish {
				font-weight: 400;
				font-size: 23rpx;
				color: #FFFFFF;
				text-align: center;

				.fini_status {
					width: 135rpx;
					height: 44rpx;
					line-height: 44rpx;
					background: rgba(255, 255, 255, 0.2);
					border-radius: 4rpx;
					font-family: Arial, Arial;
					font-weight: 900;
					font-size: 35rpx;
					color: #FFFFFF;
					margin-top: 10rpx;
				}
			}
		}

		.body {
			background: #fff;
			border-radius: 16rpx;
			padding: 40rpx 50rpx;
			box-sizing: border-box;

			.body_box {
				margin-bottom: 58rpx;

				&:last-child {
					margin-bottom: 0;
				}

				.title {
					font-size: 29rpx;
					color: #333333;
					position: relative;
					padding-left: 16rpx;
					box-sizing: border-box;

					&::before {
						content: "";
						position: absolute;
						width: 8rpx;
						height: 27rpx;
						background: #216FF9;
						border-radius: 2rpx;
						left: 0;
						top: 50%;
						transform: translateY(-50%);
					}
				}

				.info {
					margin-top: 20rpx;

					.tit {
						font-size: 27rpx;
						color: #5A5A5A;
					}

					.line {
						height: 84rpx;
						line-height: 84rpx;
						font-weight: 400;
						border-bottom: 2rpx dashed #DFDFDF;

						&:last-child {
							border-bottom: none;
						}

						.text {
							font-size: 25rpx;
							color: #333333;
						}
					}

					&>.input_wrap {
						height: 84rpx;
						background: #F9F9F9;
						border-radius: 8rpx;
						padding: 0 40rpx;
						box-sizing: border-box;
						margin-top: 8rpx;

						&.intro {
							position: relative;
							padding: 20rpx 70rpx 20rpx 40rpx;
							height: auto;
							line-height: 40rpx;
							font-weight: 400;
							font-size: 27rpx;
							color: #5A5A5A;

							image {
								width: 30rpx;
								height: 42rpx;
								position: absolute;
								top: 20rpx;
								right: 40rpx;
							}
						}
					}

					.input_line {
						margin-bottom: 38rpx;

						.subtit {
							height: 58rpx;
							line-height: 58rpx;
							text-align: center;
							background: rgba(33, 111, 249, 0.2);
							border-radius: 2rpx;
							font-weight: 600;
							font-size: 27rpx;
							color: #216FF9;
							margin-bottom: 19rpx;
						}

						.labels {
							margin-top: 8rpx;

							.label {
								width: 30%;
								height: 85rpx;
								line-height: 85rpx;
								text-align: center;
								background: #F9F9F9;
								border-radius: 6rpx;
								font-weight: 400;
								font-size: 27rpx;
								color: #333333;
								border: 2rpx solid #F9F9F9;

								&.active {
									border: 2rpx solid #F77A0B;
									font-weight: 600;
									font-size: 27rpx;
									color: #F77A0B;
									position: relative;
								}

								&.active::after {
									content: "";
									width: 38rpx;
									height: 38rpx;
									position: absolute;
									top: 0;
									right: 0;
									background: url($back-ground-url+"/worker/ic_checked_orange.png") no-repeat;
									background-size: 100% 100%;
								}

							}
						}

						.input_wrap {
							height: 84rpx;
							background: #F9F9F9;
							border-radius: 8rpx;
							padding: 0 40rpx;
							box-sizing: border-box;
							margin-top: 8rpx;


							.arrow {
								width: 13rpx;
								height: 23rpx;
							}

							&.adv {
								height: auto;
								padding: 20rpx 55rpx 20rpx 40rpx;
								line-height: 40rpx;
								font-weight: 400;
								font-size: 27rpx;
								color: #9E9E9E;
								position: relative;

								image {
									width: 13rpx;
									height: 23rpx;
									position: absolute;
									top: 50%;
									right: 40rpx;
									transform: translateY(-50%);
								}
							}

							&.salary {
								.period {
									font-weight: 400;
									font-size: 29rpx;
									color: #A8A8A8;
								}

								input {

									text-align: center;
								}
							}

							.city {
								font-size: 27rpx;
								color: #333333;
							}

							input {
								height: 84rpx;
								font-weight: 400;
								font-size: 27rpx;
								color: #333333;
							}

							.radio_item {
								font-size: 27rpx;
								color: #333333;

								image {
									width: 38rpx;
									height: 38rpx;
									margin-right: 8rpx;
								}
							}
						}
					}
				}
			}
		}
	}
</style>