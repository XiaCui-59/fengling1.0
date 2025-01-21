<template>
	<view class="edit">
		<!-- 自定义导航 -->
		<u-navbar title="工作详情" @leftClick="leftClick" :autoBack="true" bgColor="transparent"
			titleStyle="color:#fff;font-size: 31rpx;">
			<view class="u-nav-slot" slot="left"
				style="width:57rpx;height:57rpx;text-align: center;line-height: 57rpx;border:1px solid #fff;border-radius: 50%;">

				<u-icon name="arrow-left" size="19" color="#fff"
					custom-style="display: inline-block;line-height: 57rpx;margin:0 auto;left:-2rpx;"></u-icon>
			</view>
		</u-navbar>
		<scroll-view scroll-y="true" :style="{height:contHeight+'px'}" :show-scrollbar="false"
			refresher-background="transparent">
			<view class="cont" :style="{paddingTop:marginTop+2*tabMargin+'px'}">
				<view class="box" :style="{marginBottom:tabMargin+'px'}">
					<view class="base_info">
						<view class="title">{{info.name}}</view>
						<view class="salary">
							{{info.worker_salary_min == info.worker_salary_max?info.worker_salary_max:(info.worker_salary_min+'-'+info.worker_salary_max)}}元/{{type.filter(el=>{return el.value == info.worker_salary_type})[0].text}}
						</view>
						<view class="labels flex" v-if="info.highlight.length > 0">
							<view class="label" v-for="(item,index) in info.highlight" :key="index">{{item}}</view>
						</view>
					</view>
					<view class="address">
						<view class="subtit">工作地址</view>
						<view class="flex flex_start">
							<u-icon name="map" color="#216FF9" size="18"></u-icon>
							<text>{{info.work_address.address}}</text>
						</view>
					</view>
				</view>
				<view class="box top" :style="{paddingBottom:'60px'}">
					<view class="subtit">工作介绍</view>
					<view>
						<text
							style="line-height: 50rpx;height:100%;width:100%;display: inline-block;">{{info.content}}</text>
					</view>

				</view>



				<view class="btn"
					:style="{height:'40px',lineHeight:'40px',position:'fixed',bottom:'15px',left:'50%',transform:'translateX(-50%)',width:'80%',minWidth:'320rpx'}"
					@click="open">立即预约</view>
			</view>
		</scroll-view>

		<u-popup :show="showForm" mode="bottom" :round="16" :closeable="true" @close="close" @open="open">
			<editForm v-if="showEdit" @close="close" :openid="open_id" :userInfo="workerInfo" @sure="sureSign">
			</editForm>
		</u-popup>

	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from "vuex"
	import editForm from "@/components/edit_form.vue"
	const app = getApp()
	export default {
		data() {
			return {
				showForm: false,
				showEdit: false,
				imgUrl: app.globalData.baseImageUrl,
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				contHeight: 0,
				scrollHeight: 0,
				topHeight: 0,
				type: [{
						value: "month",
						text: "月"
					},
					{
						value: "day",
						text: "天"
					},
					{
						value: "hour",
						text: "时"
					}
				],
				info: {
					"id": "",
					"work_address": {
						"province": "",
						"city": "",
						"district": "",
						"address": "",
						"location": {
							"lat": 30.688674,
							"lng": 103.821993
						}
					},
					"name": "",
					"content": "",
					"broker_name": "",
					"worker_salary_min": "",
					"worker_salary_max": "",
					"worker_salary_type": "",
					"worker_age_min": 0,
					"worker_age_max": 0,
					"worker_gender": "both",
					"is_applied": false
				},
				id: "",
				ad_tracking_id: "",
				open_id: "",
				workerInfo: null,
				params: null
			}
		},
		async onLoad(param) {
			// let _this = this
			// this.params = param
			uni.setNavigationBarColor({
				frontColor: '#000000',
				backgroundColor: 'transparent'
			})
			// uni.hideShareMenu()



		},
		async onShow() {
			let _this = this
			let pages = getCurrentPages()
			let currentPage = pages[pages.length - 1]
			let fullPath = currentPage.$page.fullPath
			let urlParamStr = fullPath.split("?").length > 1 ? fullPath.split("?")[1] : ""
			if (urlParamStr) {
				console.log("urlParamStr", urlParamStr)
				this.params = this.getQueryParams(fullPath)
			}
			console.log("param", this.params)
			this.id = this.params.job_id
			this.info = await this.getInfo()
			this.contHeight = app.globalData.systemHeight
			// setTimeout(function() {
			// 	_this.getElementInfo()
			// }, 500)
			this.open_id = await this.getOpenid()
			this.workerInfo = await this.getWorderInfo()
			if (this.params.from != "list") {
				this.ad_tracking_id = await this.postParams(this.params)
			} else {
				this.ad_tracking_id = this.params.ad_tracking_id
			}

		},
		components: {
			editForm
		},
		methods: {
			...mapMutations(["setToken"]),
			leftClick() {
				let pages = getCurrentPages()
				let prev = pages[pages.length - 2]
				if (!prev) {
					let ad_platform = this.params.ad_platform ? this.params.ad_platform : ""
					let ad_sub_platform = this.params.ad_sub_platform ? this.params.ad_sub_platform : ""
					uni.reLaunch({
						url: "/pages/index/index?ad_platform=" + ad_platform + "&ad_sub_platform=" +
							ad_sub_platform
					})
				}
			},
			getQueryParams(url) {
				// 解析URL中的查询字符串
				const queryString = url.split('?')[1];
				if (!queryString) {
					return {};
				}

				// 将查询字符串分割成键值对数组
				const keyValuePairs = queryString.split('&');

				// 将键值对数组转换为对象
				const params = {};
				keyValuePairs.forEach((pair) => {
					if (pair) {
						const [key, value] = pair.split('=');
						params[decodeURIComponent(key)] = decodeURIComponent(value || '');
					}
				});

				return params;
			},
			postParams(params) {
				return new Promise(resolve => {
					this.$request("/ad/tracking", params, "POST").then(res => {
						if (res.code == 0) {
							resolve(res.data.ad_tracking_id)
						}
					})
				})

			},
			getElementInfo() {
				let _this = this
				let info = uni.createSelectorQuery().select(".top");
				info.boundingClientRect(function(data) { //data - 各种参数
					if (data) {
						console.log(data)
						_this.topHeight = app.globalData.systemHeight - data.top - _this.tabMargin
						_this.scrollHeight = app.globalData.systemHeight - data.bottom - _this.tabMargin - 55
					} else {
						_this.scrollHeight = _this.contHeight - 55
					}
				}).exec()
			},
			open() {
				this.showForm = true
				this.showEdit = true
			},
			sureSign(obj) {
				let _this = this

				let url = "/guest/project/" + this.id + "/lead-information"
				let data = {
					name: obj.name,
					mobile: obj.mobile,
					ad_tracking_id: this.ad_tracking_id,
					source: "wechat_mini_program"
				}
				this.$request(url, data, "POST").then(res => {
					if (res.code == 0) {
						this.close()
						let lead_information_id = res.data.lead_information_id
						let ad_platform = _this.params.ad_platform ? _this.params.ad_platform : ""
						let ad_sub_platform = _this.params.ad_sub_platform ? _this.params.ad_sub_platform : ""
						uni.showModal({
							title: "预约成功，将进入小程序报名和确认。",
							showCancel: false,
							success(resp) {
								if (resp.confirm) {
									uni.reLaunch({
										url: "/pages/index/index?from=ad&pro_id=" +
											lead_information_id + "&ad_platform=" + ad_platform +
											"&ad_sub_platform=" + ad_sub_platform
									})
								}
							}
						})
					}
				})

			},
			close() {
				this.showForm = false
				this.showEdit = false
			},
			getWorderInfo() {
				return new Promise(resolve => {
					this.$request("/worker/profile").then(res => {
						resolve(res.data)
					})
				})

			},
			getOpenid() {
				let _this = this
				return new Promise(resolve => {
					uni.login({
						success: (res) => {
							if (res.errMsg == 'login:ok') {
								let url = ""
								let data = {
									code: res.code,
									share_id: ""
								}
								url = "/auth/worker/wechat/mini/openid"
								_this.$request(url, data, "POST").then(resp => {
									if (resp.code == 0) {
										uni.setStorage({
											key: "openid",
											data: resp.data.open_id
										})
										_this.setToken(resp.data.token)
										uni.setStorageSync("token", resp.data.token)
										uni.setStorageSync("loginStatus", "in")
										resolve(resp.data.open_id)
									}
								})
							}
						},
						fail(err) {}
					});
				})
			},
			getPhoneNumber(e) {
				let data = {
					encrypted_data: "",
					iv: "",
					code: "",
					openid: ""
				};
				if (e.detail.errMsg == 'getPhoneNumber:ok') {
					data.encrypted_data = e.detail.encryptedData;
					data.iv = e.detail.iv;
					data.code = e.detail.code;
					data.open_id = uni.getStorageSync("openid")
					this.$request("/auth/worker/wechat/mini/login", data, "POST").then(resp => {
						if (resp.code == 0) {
							this.info.mobile = resp.data.mobile
							uni.setStorageSync("token", resp.data.token)
						}
					})
				}
			},
			getInfo() {
				uni.showLoading()
				let _this = this
				let url = "/guest/project/" + this.id
				return new Promise(resolve => {
					_this.$request(url).then(res => {
						if (res.code == 0) {
							uni.hideLoading()
							resolve(res.data)
						}
					})
				})

			},
			clear(key) {
				this.$set(this.info, key, "")
			}
		}
	}
</script>

<style lang="scss">
	::v-deep {
		.u-radio-group {
			justify-content: flex-end;

		}

		.u-popup__content {
			background: linear-gradient(180deg, #CEDFFF 0%, #FFFFFF 20%);
		}

		.u-navbar--fixed {
			background: url($back-ground-url+'/worker/ad_header_bg.png') no-repeat;
			background-size: cover;
			background-position: center center;
		}
	}

	page {
		background: #F7F8FA;
	}

	.edit {
		height: 100vh;
		overflow: hidden;
		color: $base-fontcolor;

		.cont {
			background: #F7F8FA;
			padding: 0rpx 26rpx;
			color: #333;
			font-size: 29rpx;
			min-height: 100%;
			box-sizing: border-box;

			.box {
				background: #fff;
				border-radius: 22rpx;
				padding: 30rpx;
				box-sizing: border-box;

				.base_info {

					border-bottom: 2rpx dashed #E2E2E2;
					padding-bottom: 20rpx;
				}

				.title {
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					font-size: 42rpx;
					line-height: 60rpx;
					font-weight: 600;

				}

				.text {
					font-size: 28rpx;
					line-height: 50rpx;
				}

				.salary {
					font-size: 42rpx;
					color: #216FF9;
					line-height: 60rpx;
					font-weight: 600;
				}

				.labels {
					margin-top: 10rpx;
					flex-wrap: wrap;

					.label {
						width: 32%;
						margin-bottom: 16rpx;
						text-align: center;
						background: rgba(33, 111, 249, 0.1);
						border-radius: 4rpx;
						font-size: 27rpx;
						color: #216FF9;
						margin-right: 2%;
						height: 54rpx;
						line-height: 54rpx;

						&:nth-child(3n) {
							margin-right: 0;
						}
					}
				}

				.address {

					padding: 20rpx 0 0 0;

					text {
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						font-size: 28rpx;
						line-height: 50rpx;
					}
				}

				.subtit {
					font-size: 29rpx;
					font-weight: 600;
					line-height: 60rpx;
					color: #161616;
				}
			}

			.btn {
				text-align: center;
				height: 85rpx;
				background: #216FF9;
				box-shadow: 0rpx 2rpx 4rpx 0rpx rgba(0, 0, 0, 0.15);
				border-radius: 15rpx;
				color: #fff;
				font-weight: 600;
				font-size: 29rpx;
				line-height: 85rpx;
				margin-top: 57rpx;
			}

			.info {
				background: #FFFFFF;
				box-shadow: 0rpx 2rpx 6rpx 0rpx rgba(0, 0, 0, 0.15);
				padding: 2rpx 40rpx 40rpx 40rpx;
				box-sizing: border-box;
				border-radius: 28rpx;
				position: relative;

				.line {
					margin-top: 38rpx;

					&:last-child {
						.input_wrap {
							padding: 0 20rpx;
						}
					}

					.input_wrap {
						width: 100%;
						height: 85rpx;
						background: #F9F9F9;
						border-radius: 8rpx;
						padding: 0 0 0 20rpx;
						box-sizing: border-box;
						border-bottom: none;
						position: relative;



						.mark {
							position: absolute;
							top: 50%;
							right: 20rpx;
							transform: translateY(-50%);
							font-size: 24rpx;
							color: #999;
						}

						button {
							width: 100%;
							height: 85rpx;
							line-height: 85rpx;
							border: none;
							font-size: 14px;
							text-align: left;
							color: #999;
							margin-left: 0;
							border-radius: 0;
							background-color: transparent;
							padding-left: 0;
							padding-right: 0;

							&::after {
								display: none;
							}
						}

						input {
							width: calc(100% - 40rpx);
							height: 100%;
							font-size: 27rpx;
						}

						.focus:focus {
							border: 2rpx solid #F7BC05;
						}

						.image_box {
							height: 85rpx;
							flex-shrink: 0;
							font-size: 0;
							padding: 0 20rpx;

							image {
								width: 40rpx;
								margin-top: 22rpx;
							}
						}


					}
				}
			}
		}
	}
</style>