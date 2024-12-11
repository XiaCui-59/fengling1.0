<template>
	<view class="content">
		<customHeader :title="pageName" :showBack="true" :headHeight="headerHeight"></customHeader>
		<view class="cont" :style="{marginTop:marginTop+'px'}">
			<view class="box" :style="{top:boxTop+'px',height:boxHeight+'px'}">
				<view class="wrap" :style="{height:wrapHeight+'px'}">
					<view class="base_top">
						<view class="line">
							<view class="tit">职位名称</view>
							<view class="input_wrap flex flex_btween">
								<input v-model="info.name" placeholder="请输入职位名称" placeholder-style="font-size:28rpx;" />
								<image :src="imgUrl+'/broker/ic_close_circle.png'" mode="widthFix"
									@click="reset('name')">
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
								<input type="number" v-model="info.worker_age_min" placeholder="最小年龄" />
								<view class="text">~</view>
								<input type="number" v-model="info.worker_age_max" placeholder="最大年龄" />
								<view class="period">岁</view>
								<!-- <uni-data-select v-model="typeValue" :localdata="typeRange"
									@change="typeChange"></uni-data-select> -->
							</view>
						</view>
						<view class="line">
							<view class="tit">工人薪资</view>
							<view class="input_wrap flex flex-start noborder">
								<input type="text" v-model="info.worker_salary_min" placeholder="最低工资"
									placeholder-style="font-size:28rpx;" />
								<view class="text">~</view>
								<input type="text" v-model="info.worker_salary_max" placeholder="最高工资"
									placeholder-style="font-size:28rpx;" />
								<uni-data-select v-model="info.worker_salary_type" :localdata="typeRange"
									@change="typeChange"></uni-data-select>
							</view>
						</view>
						<!-- <view class="line">
							<view class="tit">工人薪资</view>
							<view class="input_wrap flex flex_btween">
								<input v-model="info.worker_salary" placeholder="请输入工人薪资"
									placeholder-style="font-size:28rpx;" />
								<image :src="imgUrl+'/broker/ic_close_circle.png'" mode="widthFix"
									@click="reset('veri')">
								</image>
							</view>
						</view> -->
						<!-- <view class="line">
							<view class="tit">工人福利</view>
							<view class="input_wrap flex flex_btween">
								<input v-model="info.worker_welfare" placeholder="请输入工人福利"
									placeholder-style="font-size:28rpx;" />
								<image :src="imgUrl+'/broker/ic_close_circle.png'" mode="widthFix"
									@click="reset('veri')">
								</image>
							</view>
						</view> -->
						<view class="line">
							<view class="tit">工作地址</view>
							<view class="input_wrap flex flex_btween" @click="openAddress">
								<image :src="imgUrl+'/broker/ic_posi_yellow.png'" mode="widthFix" class="posi"></image>
								<input v-model="info.work_address.address" placeholder="请输入工作地址"
									placeholder-style="font-size:28rpx;" style="padding-left:80rpx;" />
								<image :src="imgUrl+'/broker/ic_close_circle.png'" mode="widthFix"
									@click.stop="reset('address')">
								</image>
							</view>
						</view>
						<view class="line" style="margin-bottom: 0;">
							<view class="tit">职位详情</view>
						</view>
					</view>
					<view class="base_bot" :style="{height:baseBotHeight+'px'}">
						<textarea v-model="info.content" placeholder="请输入职位详情" maxlength="1000"
							:style="{height:baseBotHeight+'px'}" placeholder-style="font-size:28rpx;" />
					</view>

				</view>
				<view class="btns flex flex_btween" :style="{marginTop:btnBottom+'px'}">
					<view class="btn sure" :style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px'}"
						@click="confirmSet">更新基本信息</view>
					<view class="btn sure active" :style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px'}"
						@click="toEditMore">编辑附加信息</view>
				</view>
			</view>
		</view>
		<!-- <customModal title="职位更新成功" :showCancel="false" confirmText="确定" v-if="showModal" @confirm="handleConfirm">
		</customModal> -->
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
				pageName: "编辑职位",
				currentMainTab: 0,
				scrollHeight: 0,
				boxTop: 0,
				boxHeight: 0,
				headerHeight: 0,
				showActive: false,
				projectName: "",
				salary: "",
				welfare: "",
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
				backId: "",
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
				info: {
					"name": "",
					"id": "",
					"status": "", // 状态
					"worker_salary": "", // 工资
					"worker_welfare": "", // 福利
					"work_address": "", //地址
					"content": "",
					"broker_avatar": "", // 头像
					"broker_mobile": "", // 电话
					"broker_name": "", //名称
				},
				id: ""
			}
		},
		components: {
			tabbar,
			customHeader
		},
		onLoad(param) {
			let _this = this
			this.id = param.id
			this.getInfo()
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
			reset(type) {
				switch (type) {
					case "name":
						this.info.name = ""
						break;
					case "address":
						this.info.work_address.address = ""
						break;
					default:
						break;
				}
			},
			async toEditMore() {
				uni.navigateTo({
					url: "/subpkg/addmore_project_info/addmore_project_info?id=" + this.id
				})
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
						that.info.work_address.address = res.result.formatted_addresses.standard_address
						that.addressObj.province = res.result.address_component.province
						that.addressObj.city = res.result.address_component.city
						that.addressObj.district = res.result.address_component.district
						that.addressObj.location = res.result.location
						that.addressObj.address = res.result.formatted_addresses.standard_address
						console.log(that.addressObj)
					},
					fail: function(res) {
						console.log(res);
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
						_this.reverseGeocodingClick(res.latitude, res.longitude)
						// console.log('位置名称：' + res.name);
						// console.log('详细地址：' + res.address);
						// console.log('纬度：' + res.latitude);
						// console.log('经度：' + res.longitude);
					},
					fail(err) {
						console.error('地图打开失败', err);
					}
				});
			},
			handleConfirm() {
				uni.switchTab({
					url: "/pages/index/index"
				})
			},
			getInfo() {
				let url = "/broker/mini/project/" + this.id + "/info"
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.info = res.data
						this.addressObj = res.data.work_address
						for (let i = 0; i < this.gender.length; i++) {
							if (this.gender[i].value == res.data.worker_gender) {
								this.currentGender = i
							}
						}
					}
				})
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
			confirmSet() {
				let _this = this
				return new Promise(resolve => {
					_this.info.work_address = _this.addressObj
					_this.info.worker_salary_min = Number(_this.info.worker_salary_min)
					_this.info.worker_salary_max = Number(_this.info.worker_salary_max)
					_this.info.worker_age_min = Number(_this.info.worker_age_min)
					_this.info.worker_age_max = Number(_this.info.worker_age_max)
					_this.info.worker_gender = _this.gender[_this.currentGender].value
					// _this.info.job_benefits = []
					// _this.info.job_info = []
					_this.info.videos = []
					_this.info.images = []
					if (_this.info.work_address.address && _this.info.worker_salary_min && _this.info
						.worker_salary_max && _this.info.worker_age_min && _this.info.worker_age_max && _this.info
						.content) {
						_this.$request("/broker/mini/project/" + _this.id, _this.info, "POST").then(res => {
							if (res.code == 0) {
								uni.showToast({
									title: "更新成功",
									duration: 2000
								})
							}
						})
					} else {
						uni.showToast({
							title: "未填写完整",
							icon: "error",
							duration: 2000
						})
					}

				})

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
				width: 48%;
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