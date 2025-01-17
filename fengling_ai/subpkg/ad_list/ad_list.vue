<template>
	<view class="view_record">
		<!-- 自定义导航 -->
		<u-navbar title="热招职位" @leftClick="leftClick" :autoBack="true" bgColor="transparent"
			titleStyle="color:#fff;font-size: 31rpx;">
			<view class="u-nav-slot" slot="left"
				style="width:57rpx;height:57rpx;text-align: center;line-height: 57rpx;border:1px solid #fff;border-radius: 50%;">

				<u-icon name="arrow-left" size="19" color="#fff"
					custom-style="display: inline-block;line-height: 57rpx;margin:0 auto;left:-2rpx;"></u-icon>
			</view>
		</u-navbar>
		<scroll-view scroll-y="true" :style="{height:contHeight+'px',boxSizing:'border-box'}" :show-scrollbar="false"
			refresher-background="transparent">
			<view class="cont" :style="{paddingTop:marginTop+2*tabMargin+'px',paddingBottom:'30rpx'}">
				<view class="item" v-for="(item,index) in list" :key="index" v-if="list.length != 0"
					@click="toDetail(item)">
					<view class="title flex flex_btween">{{item.project_name}}
					</view>
					<view class="middle_wrap">
						<view class="middle flex flex_btween">
							<view class="mid_in_item">
								<!-- <view class="tit">工资</view> -->
								<view class="salary flex flex-start">
									{{(item.worker_salary_min == item.worker_salary_max?item.worker_salary_min:(item.worker_salary_min+"-"+item.worker_salary_max))}}
									<text
										class="period">{{"元"+periodList.filter(el=>{return el.value==item.worker_salary_type})[0].text}}</text>
								</view>
							</view>
							<view class="mid_in_item" @click.stop="toOpen(item)">立即预约</view>
						</view>
						<view class="labels flex" :class="item.highlight.length >2?'flex_btween':'flex-start'"
							v-if="item.highlight.length != 0">
							<view class="label flex" :class="item.highlight.length >2?'':'min_width'"
								v-for="(label,labIndex) in item.highlight.slice(0,3)" :key="labIndex">
								<text></text>{{label}}
							</view>
						</view>
					</view>
					<view class="bottom flex" :class="item.worker_address.address?'flex_btween':'flex_end'">
						<view class="location flex" v-if="item.worker_address.address"><u-icon name="map-fill"
								color="#2675F5" size="13"></u-icon>{{item.worker_address.address}}</view>
						<view class="time">{{item.create_time}}</view>
					</view>
					<view class="status">
						<image :src="imgUrl+'/worker/new/ad_hot.png'" mode="widthFix"></image>
					</view>
				</view>
				<view class="empty" v-if="list.length == 0">
					<image :src="imgUrl+'/worker/no_data.png'" mode="widthFix"></image>
				</view>
			</view>
		</scroll-view>

		<u-popup :show="showForm" mode="bottom" :round="16" :closeable="true" @close="close" @open="open">
			<editForm v-if="showEdit" @close="close" :openid="open_id" :userInfo="workerInfo"
				:currentProject="currentPro" @sure="sureSign">
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
				currentPro: null,
				ad_tracking_id: "",
				imgUrl: app.globalData.baseImageUrl,
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				contHeight: 0,
				periodList: [{
						value: "month",
						text: "/月"
					},
					{
						value: "day",
						text: "/天"
					},
					{
						value: "hour",
						text: "/时"
					}
				],
				list: [],
				currentPage: 1,
				pagination: {},
				open_id: "",
				workerInfo: null,
				param: null
			}
		},
		components: {
			editForm
		},
		// onReachBottom() {
		// 	if (this.currentPage < this.pagination.pageCount) {
		// 		this.currentPage++
		// 		this.getList()
		// 	} else {
		// 		uni.showToast({
		// 			title: "已加载全部",
		// 			icon: "none",
		// 			duration: 2000
		// 		})
		// 	}
		// },
		onLoad(param) {
			// console.log("param", param)
			// this.param = param
			uni.showLoading()
			uni.setNavigationBarColor({
				frontColor: '#000000',
				backgroundColor: 'transparent'
			})
			this.contHeight = app.globalData.systemHeight
		},
		async onShow() {
			let pages = getCurrentPages()
			let currentPage = pages[pages.length - 1]
			let fullPath = currentPage.$page.fullPath
			let urlParamStr = fullPath.split("?").length > 1 ? fullPath.split("?")[1] : ""
			if (urlParamStr) {
				console.log("urlParamStr", urlParamStr)
				this.param = this.getQueryParams(fullPath)
			}
			console.log("param", this.param)
			this.open_id = await this.getOpenid()
			this.workerInfo = await this.getWorderInfo()
			this.ad_tracking_id = await this.postParams(this.param)
			this.getList()
		},
		methods: {
			...mapMutations(["setToken"]),
			leftClick() {
				uni.navigateTo({
					url: "/pages/index/index"
				})
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
			getList() {
				let url = "/guest/worker/hot-jobs?page=" + this.currentPage
				this.$request(url).then(res => {
					if (res.code == 0) {
						uni.hideLoading()
						this.list = res.data
						// this.pagination = res.data.pagination
					}
				})
			},
			toDetail(item) {
				let ad_platform = this.param.ad_platform ? this.param.ad_platform : ""
				let ad_sub_platform = this.param.ad_sub_platform ? this.param.ad_sub_platform : ""
				uni.navigateTo({
					url: "/subpkg/ad_page/ad_page?job_id=" + item.project_id + "&ad_tracking_id=" + this
						.ad_tracking_id + "&from=list" + "&ad_platform=" + ad_platform + "&ad_sub_platform=" +
						ad_sub_platform
				})
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
			sureSign(obj) {
				let _this = this
				let url = "/guest/project/" + this.currentPro.project_id + "/lead-information"
				let data = {
					name: obj.name,
					mobile: obj.mobile,
					ad_tracking_id: this.ad_tracking_id,
					source: "h5"
				}
				this.$request(url, data, "POST").then(res => {
					if (res.code == 0) {
						this.close()
						uni.showToast({
							title: "预约成功",
							duration: 2000
						})
						let lead_information_id = res.data.lead_information_id
						let ad_platform = _this.param.ad_platform ? _this.param.ad_platform : ""
						let ad_sub_platform = _this.param.ad_sub_platform ? _this.param.ad_sub_platform : ""
						setTimeout(function() {
							uni.reLaunch({
								url: "/pages/index/index?from=ad&pro_id=" +
									lead_information_id + "&ad_platform=" + ad_platform +
									"&ad_sub_platform=" + ad_sub_platform
							})
						}, 1000)
					}
				})

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
			toOpen(item) {
				this.currentPro = item
				this.open()
			},
			open() {
				this.showForm = true
				this.showEdit = true
			},
			close() {
				this.showForm = false
				this.showEdit = false
			},
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
			background: url('https://static.swiftwd.com/worker/ad_header_bg.png') no-repeat;
			background-size: cover;
			background-position: center center;
		}

		.uni-page-head-btn,
		.uni-page-head .uni-btn-icon {
			display: none !important;
		}
	}

	page {
		background: #F7F8FA;
	}

	.view_record {
		height: 100vh;
		color: #333;

		.cont {
			background: #F7F8FA;
			padding: 38rpx 26rpx;
			box-sizing: border-box;
			min-height: 100%;

			.item {
				padding: 40rpx 48rpx 23rpx 40rpx;
				border-radius: 16rpx;
				background: #fff;
				box-shadow: 0 2rpx 6rpx 0 rgba(0, 0, 0, 0.15);
				margin-bottom: 24rpx;
				position: relative;

				.status {
					position: absolute;
					top: 0;
					right: 0;
					font-size: 0;

					image {
						width: 96rpx;
					}
				}

				.title {
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					padding-left: 22rpx;
					box-sizing: border-box;
					position: relative;
					font-weight: 600;
					font-size: 33rpx;
					color: #333333;

					&.grey {
						color: #686868;

						.time {
							color: #CBCBCB;
						}
					}

					&.grey:before {
						background: #CBCBCB;
					}

					.text {

						width: calc(100% - 170rpx);
					}



					&:before {
						content: "";
						width: 8rpx;
						height: 36rpx;
						background: #F7BC05;
						position: absolute;
						top: 50%;
						left: 0;
						transform: translateY(-50%);
					}
				}

				.middle_wrap {
					padding: 20rpx;
					box-sizing: border-box;
					background: #F6F6F6;
					border-radius: 8rpx;
					margin: 20rpx 0 0 0;
					font-size: 30rpx;
				}

				.labels {
					margin-top: 28rpx;

					.label {
						font-size: 27rpx;
						color: #686868;

						&.min_width {
							min-width: 33%;
						}

						text {
							display: inline-block;
							width: 12rpx;
							height: 12rpx;
							border-radius: 50%;
							background: #52C41A;
							margin-right: 8rpx;
						}
					}
				}

				.middle {
					.mid_in_item {
						&:last-child {
							width: 173rpx;
							height: 65rpx;
							line-height: 65rpx;
							text-align: center;
							border-radius: 40rpx;
							font-weight: 600;
							font-size: 27rpx;
							background: #2675F5;
							color: #fff;
							// border-bottom: 2rpx dashed #2675F5;
						}

						.tit {
							font-size: 25rpx;
							color: #5A5A5A;
							line-height: 46rpx;
							font-weight: 400;
						}

						view {

							font-weight: 600;
							font-size: 35rpx;
						}

						.salary {
							color: #EA9900;
							font-size: 42rpx;

							&.grey {
								color: #686868;
							}
						}

						.count {
							color: #3780FF;
							text-align: right;
						}

						.period {
							font-size: 23rpx;
							color: #A8A8A8;
							display: inline-block;
							margin-left: 10rpx;
							font-weight: 400;
						}
					}

				}

				.bottom {
					margin-top: 16rpx;
					font-weight: 400;
					font-size: 23rpx;
					color: #5A5A5A;
					// padding-left: 22rpx;
					box-sizing: border-box;
				}
			}
		}
	}
</style>