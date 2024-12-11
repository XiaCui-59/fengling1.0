<template>
	<view class="content">
		<customHeader :title="pageName" :showBack="true" :headHeight="headerHeight"></customHeader>
		<view class="cont" :style="{marginTop:marginTop+'px'}">
			<view class="box" :style="{top:boxTop+'px',height:boxHeight+'px'}">
				<view class="wrap" :style="{height:wrapHeight+'px'}">
					<view class="base_top">
						<view class="line">
							<view class="tit flex flex_btween">
								<text>职位名称</text>
								<text>{{projectName.length+"/15"}}</text>
							</view>
							<view class="input_wrap flex flex_btween">
								<input v-model="projectName" placeholder="请输入职位名称" placeholder-style="font-size:28rpx;"
									maxlength="15" />
								<image :src="imgUrl+'/broker/ic_close_circle.png'" mode="widthFix"
									@click="reset('new')">
								</image>
							</view>
						</view>
						<view class="line">
							<view class="tit">性别要求</view>
							<radio-group @change="genderChange" class="flex flex-start noborder">
								<label class="uni-list-cell uni-list-cell-pd flex flex-start"
									style="margin-right:80rpx;" v-for="(item, index) in gender" :key="item.value">
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
								<input type="number" v-model="minAge" placeholder="最小年龄" />
								<view class="text">~</view>
								<input type="number" v-model="maxAge" placeholder="最大年龄" />
								<view class="period">岁</view>
								<!-- <uni-data-select v-model="typeValue" :localdata="typeRange"
									@change="typeChange"></uni-data-select> -->
							</view>
						</view>
						<view class="line">
							<view class="tit">工人薪资</view>
							<view class="input_wrap salary flex flex-start noborder">
								<input type="text" v-model="minSalary" placeholder="最低工资"
									placeholder-class="salary_place" />
								<view class="text">~</view>
								<input type="text" v-model="maxSalary" placeholder="最高工资"
									placeholder-class="salary_place" />
								<uni-data-select v-model="typeValue" :localdata="typeRange"
									@change="typeChange"></uni-data-select>
							</view>
						</view>
						<view class="line">
							<view class="tit">工作地址</view>
							<view class="input_wrap flex flex_btween" @click="openAddress">
								<image :src="imgUrl+'/broker/ic_posi_yellow.png'" mode="widthFix" class="posi"></image>
								<input v-model="address" placeholder="请输入工作地址" placeholder-style="font-size:28rpx;"
									style="padding-left:80rpx;" />
								<image :src="imgUrl+'/broker/ic_close_circle.png'" mode="widthFix"
									@click="reset('veri')">
								</image>
							</view>
						</view>
						<view class="line" style="margin-bottom: 0;">
							<view class="tit">职位详情</view>
						</view>
					</view>
					<view class="base_bot" :style="{height:baseBotHeight+'px'}">
						<textarea v-model="content" placeholder="请输入职位详情" maxlength="1000"
							:style="{height:baseBotHeight-tabMargin+'px'}" placeholder-style="font-size:28rpx;" />
					</view>

				</view>
				<view class="btns flex flex_btween" :style="{marginTop:btnBottom+'px'}">
					<view class="btn sure active" :style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px'}"
						@click="confirmSet">发布职位</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import tabbar from "@/components/tabbar.vue"
	import customHeader from "@/components/custom_header.vue"
	import qqmapsdk from "@/utils/qqmap-wx-jssdk.min.js";
	const app = getApp()
	export default {
		data() {
			return {
				canClick: true,
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
				minAge: "",
				maxAge: "",
				imgUrl: app.globalData.baseImageUrl,
				pageName: "发布职位",
				currentMainTab: 0,
				scrollHeight: 0,
				boxTop: 0,
				boxHeight: 0,
				showActive: false,
				projectName: "",
				minSalary: "",
				maxSalary: "",
				typeValue: "month",
				typeRange: [{
						value: "month",
						text: "元/月"
					},
					// {
					// 	value: "day",
					// 	text: "元/天"
					// },
					// {
					// 	value: "hour",
					// 	text: "元/时"
					// }
				],
				address: "",
				addressObj: {
					province: "",
					city: "",
					district: "",
					address: "",
					location: {
						lat: 124,
						lng: 123
					}
				},
				content: "",
				subTabHeight: app.globalData.subTabHeight,
				tabMargin: app.globalData.tabMargin,
				headerHeight: app.globalData.topHeight,
				marginTop: app.globalData.marginTop,
				btnBottom: app.globalData.btnBottom,
				wrapHeight: 0,
				baseBotHeight: 0,
				showModal: false,
				modelData: {

				},
				backId: "",

				salaryList: [{
						value: "monthly",
						text: "按月",
						children: [{
								value: "1",
								text: "3000以下"
							},
							{
								value: "2",
								text: "3000元~5000元"
							},
							{
								value: "3",
								text: "5000元~6000元"
							},
							{
								value: "4",
								text: "6000元~7000元"
							},
							{
								value: "5",
								text: "7000元~8000元"
							},
							{
								value: "6",
								text: "8000元~9000元"
							},
							{
								value: "7",
								text: "9000元~10000元"
							},
							{
								value: "8",
								text: "10000元以上"
							}
						]
					},
					{
						value: "daily",
						text: "按日",
						children: [{
								value: "9",
								text: "100以下"
							},
							{
								value: "10",
								text: "100元~200元"
							},
							{
								value: "11",
								text: "200元~300元"
							},
							{
								value: "12",
								text: "300元~400元"
							},
							{
								value: "13",
								text: "400元以上"
							}
						]
					},
					{
						value: "hour",
						text: "按时",
						children: [{
								value: "14",
								text: "10以下"
							},
							{
								value: "15",
								text: "10元~20元"
							},
							{
								value: "16",
								text: "20元~30元"
							},
							{
								value: "17",
								text: "30元~40元"
							},
							{
								value: "18",
								text: "40元~50元"
							},
							{
								value: "19",
								text: "50元以上"
							},
						]
					}
				],

			}
		},
		components: {
			tabbar,
			customHeader
		},
		onLoad() {
			let _this = this
			this.boxTop = this.marginTop + this.tabMargin
			this.boxHeight = app.globalData.systemHeight - this.marginTop - this.tabMargin - this.btnBottom
			this.wrapHeight = this.boxHeight - this.subTabHeight - this.btnBottom
			setTimeout(function() {
				_this.getElementInfo()
			}, 500)
		},
		methods: {
			genderChange(e) {
				for (let i = 0; i < this.gender.length; i++) {
					if (this.gender[i].value == e.detail.value) {
						this.currentGender = i
					}
				}
			},
			typeChange(e) {

			},
			// 地址反向编码解析地址
			reverseGeocodingClick(latitude, longitude) {
				const QQMapWX = new qqmapsdk({
					//腾讯地图  需要用户自己去申请key
					key: app.globalData.qqMapKey
				});
				let that = this;

				QQMapWX.reverseGeocoder({
					location: {
						latitude: latitude,
						longitude: longitude
					},
					success: function(res) {
						that.address = res.result.formatted_addresses.standard_address
						that.addressObj.province = res.result.address_component.province
						that.addressObj.city = res.result.address_component.city
						that.addressObj.district = res.result.address_component.district
						that.addressObj.location = res.result.location
						that.addressObj.address = res.result.formatted_addresses.standard_address
						console.log(that.addressObj)
					},
					fail: function(res) {
						uni.showModal({
							title: res.message,
							showCancel: false
						})
					},
					complete: function(res) {
						console.log(res);
					}
				});
			},
			openAddress() {
				let _this = this
				uni.chooseLocation({
					success: function(res) {
						console.log(res, "res")
						_this.reverseGeocodingClick(res.latitude, res.longitude)
						// console.log('位置名称：' + res.name);
						// console.log('详细地址：' + res.address);
						// console.log('纬度：' + res.latitude);
						// console.log('经度：' + res.longitude);
					},
					fail(err) {
						uni.showModal({
							title: err.errMsg,
							showCancel: false
						})
						console.error('地图打开失败', err);
					}
				});
			},
			onchange(e) {
				console.log(e, "onchange")
			},
			onnodeclick(e) {
				console.log(e, "onnodeclick")
			},
			cancel() {
				this.showTag = false
			},
			tagChoose(type) {
				this.currentTagType = type
				if (type == "welfare") {
					this.tagTitle = "工作福利"
					this.currentSelected = this.welfareArr
					this.currentSeleIds = this.welIds
				}
				if (type == "work_info") {
					this.tagTitle = "工作环境"
					this.currentSelected = this.workArr
					this.currentSeleIds = this.workIds
				}
				this.showTag = true
			},
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

			getElementInfo() {
				let _this = this
				let systemInfo = uni.getSystemInfoSync()
				let info = uni.createSelectorQuery().select(".base_top");
				info.boundingClientRect(function(data) { //data - 各种参数
					if (data) {
						console.log(data)
						_this.baseBotHeight = _this.wrapHeight - data.height
					}
				}).exec()

			},
			navigate(url) {
				uni.navigateTo({
					url: url
				})
			},
			notSet() {
				uni.navigateBack()
			},
			confirmSet() {
				if (!this.canClick) {
					uni.showToast({
						title: "请勿重复点击",
						icon: "error",
						duration: 200
					})
					return
				}
				if (this.projectName && this.minAge && this.maxAge && this.typeValue && this.minSalary && this.maxSalary &&
					this.addressObj.address && this.content) {
					let data = {
						"name": this.projectName,
						"worker_age_min": Number(this.minAge),
						"worker_age_max": Number(this.maxAge),
						"worker_gender": this.gender[this.currentGender].value,
						"worker_salary_type": this.typeValue,
						"worker_salary_min": Number(this.minSalary),
						"worker_salary_max": Number(this.maxSalary),
						"work_address": this.addressObj,
						"content": this.content,
					}
					console.log(data)
					this.$request("/broker/mini/projects", data, "POST").then(res => {
						if (res.code == 0) {
							this.canClick = false
							this.backId = res.data.id
							uni.redirectTo({
								url: "/subpkg/addmore_project_info/addmore_project_info?id=" +
									res
									.data.id
							})
							// uni.showToast({
							// 	title: "请继续完善信息",
							// 	duration: 2000
							// })
							// setTimeout(function() {

							// }, 3000)

						}
					})
				} else {
					uni.showToast({
						title: "未填写完整",
						icon: "error",
						duration: 2000
					})
				}

			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep {
		.input-value-border {
			border: none;
		}

		.input-value {
			padding-left: 40rpx;
			padding-right: 20rpx;
		}

		.uniui-clear {
			display: inline-block;
			position: relative;
			font-size: 14px;
		}

		.uni-select__selector-empty,
		.uni-select__selector-item {
			white-space: nowrap;
			font-size: 23rpx;
			display: block;
			padding: 0;
			text-align: center;
		}

		.uni-select {
			border: 1px solid #F7BB05;

		}

		.uni-select__input-text {
			font-size: 23rpx;
			color: #A8A8A8;
		}

		.uniui-clear:before {
			content: "\e6b8";

		}

		.period {
			color: #5a5a5a;
			font-size: 28rpx;
		}

		.selected-item {
			width: 50%;
		}

		.uni-data-tree-dialog {
			top: 40%;
		}

		.input-value .selected-area .selected-item {
			width: auto;
		}

	}

	.box {
		position: fixed;
		width: calc(100% - 96rpx);
		left: 48rpx;
		z-index: 3;

		.wrap {
			padding: 0 40rpx;
			box-sizing: border-box;
			background: #fff;
			box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.15);
			border-radius: 20rpx;

			.base_top {
				padding-top: 40rpx;
			}

			.base_bot {
				textarea {
					width: 100%;
					font-size: 28rpx;
					padding: 30rpx 40rpx;
					box-sizing: border-box;
					background: #F9F9F9;
				}
			}

			.line {
				margin-bottom: 40rpx;

				.tit {
					font-size: 28rpx;
					color: #5A5A5A;
				}

				.input_wrap {
					width: 100%;
					height: 88rpx;
					background: #F9F9F9;
					border-radius: 4px;
					position: relative;
					border-bottom: none;

					&.salary {
						input {
							font-weight: 600;
							font-size: 29rpx;
							color: #EA9900;
						}


					}

					.posi {
						position: absolute;
						top: 50%;
						left: 40rpx;
						transform: translateY(-50%);
						width: 40rpx;
						height: 40rpx;
					}

					input {
						height: 88rpx;
						line-height: 88rpx;
						width: calc(100% - 60rpx);
						padding: 0 40rpx;
						font-size: 28rpx;
						color: #333;
					}

					image {
						width: 40rpx;
						height: 40rpx;
						margin-right: 20rpx;
					}
				}
			}
		}

		.btns {
			.btn {
				width: 100%;
				font-weight: 600;
				font-size: 29rpx;
				border-radius: 8px;
				text-align: center;
				margin-top: 0;
				margin-bottom: 0;

				&.sure {
					background: #FFFFFF;
					box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
					border: 1px solid #F7BB05;
					color: #F7BB05;
				}

				&.active {
					background: #F7BC05;
					color: #fff;
				}

				&.not {
					border: 1px solid #C9C9C9;
					color: #333;
					background: transparent;
				}
			}
		}
	}
</style>