<template>
	<view class="content">
		<!-- #ifdef MP-WEIXIN -->
		<customHeader :title="pageName" :showBack="true" :headHeight="headerHeight"></customHeader>
		<!-- #endif -->
		<!-- #ifdef MP-KUAISHOU || MP-TOUTIAO -->
		<customHeader :title="pageName" :showBack="true" :headHeight="headerHeight" :backIndex="true"></customHeader>
		<!-- #endif -->
		<view class="cont" :style="{marginTop:marginTop+'px'}">
			<!-- <view class="top_area" :style="{top:marginTop+'px'}" v-if="showSubTab">
				<view class="subtabs flex flex_btween"
					:style="{height:subTabHeight+'px',marginTop:tabMargin+'px',marginBottom:tabMargin+'px'}">
					<view class="subtab flex flex_around" v-for="(item,index) in tabs" :key="index"
						:class="currentTab.value==item.value?'active':''" @click="changeTab(item)" v-if="item.show">
						{{item.text}}
					</view>
				</view>
			</view> -->
			<view class="box" :style="{top:boxTop+'px'}">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y"
					:style="{height:scrollHeight+'px'}" style="padding:28rpx 0 0 0;box-sizing: border-box;">
					<view class="base_box">
						<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"
							v-if="info.videos.length!=0 || info.images.length != 0"
							style="border-radius: 16rpx;overflow: hidden;">
							<swiper-item v-for="(video,videoIndex) in info.videos" :key="video.key"
								v-if="info.videos.length != 0">
								<view class="swiper-item video">
									<video :src="video.url" controls></video>
								</view>
							</swiper-item>
							<swiper-item v-for="(image,imageIndex) in info.images" :key="image.key"
								v-if="info.images.length != 0">
								<view class="swiper-item video">
									<image :src="image.url" mode="widthFix" @click="prevImage"></image>
								</view>
							</swiper-item>
						</swiper>
						<view class="base base_top"
							:style="{marginTop:(info.videos.length !=0||info.images.length!=0)?'76rpx':'0px'}">
							<view class="base_border">
								<view class="base_tit">{{info.name}}</view>
								<view class="base_salary">
									{{(info.worker_salary_min == info.worker_salary_max?info.worker_salary_min:(info.worker_salary_min+"-"+info.worker_salary_max))}}
									<text
										class="period">{{"元"+periodList.filter(el=>{return el.value==info.worker_salary_type})[0].text}}</text>
								</view>
								<!-- <view class="line labels flex flex-start"
								v-if="info.job_benefits.length!=0|| info.job_info.length!=0">
								<view class="label" v-for="(item,index) in info.job_benefits" :key="item.id">
									{{item.name}}
								</view>
								<view class="label" v-for="(item2,index2) in info.job_info" :key="item2.id">
									{{item2.name}}
								</view>
							</view> -->
							</view>
						</view>
						<view class="base" :style="{paddingBottom:!info.sign?subTabHeight+2*tabMargin+'px':0}">
							<view class="line flex flex-start" v-if="!info.interview_contact_mobile">
								<image :src="info.broker_avatar"
									style="width:50rpx;height:50rpx;border-radius:50%;margin-right: 8rpx;">
								</image>
								<view class="text" style="font-size: 23rpx;color: #686868;">{{info.broker_name}}</view>
								<image :src="imgUrl+'/worker/phone_icon.png'" mode="widthFix" class="phone_call"
									@click="makePhoneCall(info.broker_mobile)">
								</image>
							</view>
							<view class="line flex flex-start" v-if="info.interview_contact_mobile">
								<view class="text" style="font-size: 23rpx;color: #686868;">
									{{info.interview_contact_name}}
								</view>
								<image :src="imgUrl+'/worker/phone_icon.png'" mode="widthFix" class="phone_call"
									@click="makePhoneCall(info.interview_contact_mobile)">
								</image>
							</view>
							<view class="line base_top base_top_2 address flex flex_btween"
								style="border-bottom: none;margin-top:37rpx;">
								<view class="base_tit">工作地址</view>
								<view class="tips" v-if="!info.sign">（报名后可查看地址）</view>
							</view>
							<view class="map_area" @click="openAddress"
								v-if="info.work_address.location.lat && info.sign">
								<map style="width: 100%; height: 100px;" :latitude="info.work_address.location.lat"
									:longitude="info.work_address.location.lng" :markers="marker" @tap="openAddress">
								</map>
								<view class="tips flex flex-start">
									<image :src="imgUrl+'/broker/ic_position.png'" mode="widthFix"></image>
									<view class="text">
										{{info.work_address.address}}
									</view>
								</view>
							</view>
							<view class="map_area" v-if="!info.sign">
								<view class="tips flex flex-start">
									<image :src="imgUrl+'/broker/ic_position.png'" mode="widthFix"></image>
									<view class="text">
										{{info.sign?info.work_address.address:(info.work_address.city+info.work_address.district)}}
									</view>
								</view>
							</view>
							<view class="line base_top base_top_2" style="border-bottom: none;">
								<view class="base_tit">工作详情</view>
							</view>
							<view class="textarea">
								<text>{{info.content}}</text>
								<!-- <rich-text :nodes="info.content" :style="{display:displayType}"></rich-text> -->
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="sign_btn" v-if="!info.sign" @click="signIn">
				<view class="btn"
					:style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px',margin:tabMargin+'px auto'}">马上报名
				</view>
			</view>
		</view>
		<login :showLogin="showLogin" pageName="project_detail" @handleSign="signIn" @closeLogin="closeLogin"></login>
		<addBase :showAddBase="showAddBase" @closeBase="closeBase"></addBase>
	</view>
</template>

<script>
	import customHeader from "@/components/custom_header.vue"
	import commonData from "@/common/commonData.js"
	import addBase from "@/components/add_base_info.vue"
	const app = getApp()
	export default {
		data() {
			return {
				showLogin: false,
				showAddBase: false,
				imgUrl: app.globalData.baseImageUrl,
				info: {
					sign: true,
					arrival_time: "",
					broker_company_name: "",
					checkin_time: "",
					content: "",
					contract_template_id: "",
					contract_template_name: "",
					contracted_num: 0,
					employer_name: "",
					id: "",
					insurance_meal_id: "",
					insurance_meal_name: "",
					is_employer_name_public: false,
					name: "",
					need_worker_num: 50,
					pay_salary_setting: {
						type: "daily",
						daily: "18:00",
						weekly: "",
						monthly: ""
					},
					project_status: "",
					qrCode: "",
					salary_settlement_type: "",
					salary_unit_price: "",
					status: "",
					work_address: "",
					work_end_time: "",
					work_start_time: "",
					work_type: "",
					work_type_code: "",
					work_type_id: "",
					work_type_name: " ",
				},
				currentTab: {
					value: "detail",
					text: "项目详情"
				},
				showMask: false,
				pageName: "灵动优聘",
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				subTabHeight: app.globalData.subTabHeight,
				btnBottom: app.globalData.btnBottom,
				detailTitleHeight: app.globalData.detailTitleHeight,
				codeHeight: app.globalData.codeHeight,
				status: false,
				showCode: false,
				status: commonData.status,
				periodList: commonData.periodList,
				paySalaryPeriod: commonData.paySalaryPeriod,
				paySalaryWeekly: commonData.paySalaryWeekly,
				tabs: [{
						value: "detail",
						text: "项目详情",
						show: true
					},
					{
						value: "salary",
						text: "工资单",
						show: true
					},
					{
						value: "insurances",
						text: "保险记录",
						show: true
					},
				],
				htmlNodes: "<p>工作内容：负责路由器，摄像头组装，手上工</p><p>工作要求：男女不限，16-42岁。</p><p>工作时间：早8:00 -晚20:00（月</p><p>工作地址：成都市新都区石板滩</p><p>工作时间：早8:00 -晚20:00（月</p><p>工作地址：成都市新都区石板滩</p><p>工作时间：早8:00 -晚20:00（月</p><p>工作地址：成都市新都区石板滩</p><p>吃住情况：包住宿，自带床上用品行李，有空</p>",
				displayType: "-webkit-box",
				showAll: true,
				scrollHeight: 0,
				boxTop: 0,
				headerHeight: app.globalData.topHeight,
				currentPage: 1,
				contHeight: 0,
				scrollPadding: 0,
				tabHeight: 0,
				id: "",
				list: [],
				refreshStatus: true,
				isPulling: false,
				timer: null,
				showSubTab: true,
				boxHeight: 0,
				signed: false,
				marker: [],
				from: ""
			}
		},
		components: {
			customHeader,
			addBase
		},
		async onLoad(param) {
			this.id = param.id
			if (param.from) {
				this.from = param.from
			}
			this.info = await this.getInfo()
			uni.showShareMenu({
				title: "灵动优聘",
				content: this.info.name,
				path: "/subpkg/project_detail/project_detail?id=" + this.id + "&from=share"
			});
			this.marker = [{
				id: 1,
				latitude: this.info.work_address.location.lat,
				longitude: this.info.work_address.location.lng,
				iconPath: this.imgUrl + "/broker/ic_posi_red.png",
				width: 25,
				height: 25,
				// label: {
				// 	content: this.info.work_address.address,
				// 	color: "#f00",
				// 	fontSize: 14,
				// }
			}]
			this.signed = this.info.sign
			this.boxTop = this.marginTop + this.tabMargin
			this.scrollHeight = app.globalData.systemHeight - this.marginTop - this.tabMargin
			// this.boxHeight = app.globalData.systemHeight - this.boxTop - this.btnBottom
			// this.getElementInfo()
			// this.scrollHeight = app.globalData.systemHeight - this.marginTop -
			// 	this.detailTitleHeight - 1 * this.btnBottom - this.tabMargin
		},
		onHide() {
			clearInterval(this.timer)
		},
		onUnload() {
			clearInterval(this.timer)
		},
		// onPullDownRefresh() {
		// 	this.currentPage = 1
		// 	this.currentTab={
		// 			value:"detail",
		// 			text:"项目详情"
		// 	},
		// 	this.getInfo()
		// 	this.list = []
		// },
		methods: {
			closeBase() {
				this.showAddBase = false
				uni.showToast({
					title: "报名成功",
					duration: 3000
				})
			},
			prevImage() {
				let arr = []
				let len = this.info.images.length
				for (let i = 0; i < len; i++) {
					arr.push(this.info.images[i].url)
				}

				uni.previewImage({
					urls: arr
				})
			},
			openAddress() {
				let _this = this
				// 打开内置地图
				uni.openLocation({
					latitude: _this.info.work_address.location.lat, // 目标位置的纬度，浮点数，范围为90~-90
					longitude: _this.info.work_address.location.lng, // 目标位置的经度，浮点数，范围为180~-180。
					scale: 18, // 缩放比例，范围5~18
					name: _this.info.work_address.address, // 位置名
					address: _this.info.work_address.address, // 地址的详细说明
					success() {
						console.log('地图打开成功');
					},
					fail(err) {
						console.error('地图打开失败', err);
					}
				});
			},
			makePhoneCall(mobile) {
				if (this.signed) {
					uni.makePhoneCall({
						phoneNumber: mobile
					})
				} else {
					uni.showModal({
						title: "报名后才可拨打电话。",
						showCancel: false
					})
				}

			},
			closeLogin() {
				this.showLogin = false
			},
			signIn() {
				let _this = this
				if (this.isLogin()) {
					_this.sureSign()
				} else {
					_this.showLogin = true
				}
			},
			sureSign() {
				let url = "/worker/accept/project/" + this.info.id
				this.$request(url, {}, "POST").then(async res => {
					if (res.code == 0) {
						this.signed = true
						this.closeLogin()
						this.info = await this.getInfo()
						let info = await this.getUsrInfo()
						// 判断是否填写个人资料
						if (info.gender == "unknown") {
							this.showAddBase = true
						} else {
							uni.showToast({
								title: "报名成功",
								duration: 3000
							})
						}
						// uni.showModal({
						// 	title: "报名成功",
						// 	content: "您已成功报名该项目，是否进入首页？",
						// 	success(resp) {
						// 		if (resp.confirm) {
						// 			uni.switchTab({
						// 				url: "/pages/index/index"
						// 			})
						// 		}
						// 	}
						// })
					}
				})
			},
			getElementInfo() {
				let _this = this
				let systemInfo = uni.getSystemInfoSync()
				let info = uni.createSelectorQuery().select(".base_box");
				info.boundingClientRect(function(data) { //data - 各种参数
					if (data) {
						console.log(data)
						if (_this.info.sign) {
							_this.scrollHeight = app.globalData.systemHeight - _this.marginTop - _this.tabMargin -
								_this
								.btnBottom - data.height
						} else {
							_this.scrollHeight = app.globalData.systemHeight - _this.marginTop - _this.tabMargin -
								2 * _this
								.btnBottom - data.height - _this.subTabHeight
						}

					}
				}).exec()

			},
			getInfo() {
				let _this = this
				return new Promise(resolve => {
					if (this.isLogin()) {
						let url = "/worker/project/info/" + this.id
						this.$request(url).then(res => {
							if (res.code == 0) {
								resolve(res.data)
							}
						})
					} else {
						let url = "/common/project/info/" + this.id
						this.$request(url).then(res => {
							if (res.code == 0) {
								resolve(res.data)
							}
						})
					}

				})

			}
		}
	}
</script>

<style lang="scss" scoped>
	.period {
		font-size: 24rpx;
		color: #A8A8A8;
		font-weight: 400;
	}



	.video {
		max-height: 346rpx;
		border-radius: 16rpx;
		overflow: hidden;
		font-size: 0;
		margin-bottom: 30rpx;
		text-align: center;

		video {
			width: 100%;
			height: 346rpx;
		}

		image {
			width: 100%;
			// height: 346rpx;
		}
	}

	.map_area {
		position: relative;
		padding-bottom: 58rpx;

		.tips {
			position: absolute;
			width: 100%;
			min-height: 58rpx;
			// line-height: 58rpx;
			bottom: 0;
			left: 0;
			background: #216FF9;
			border-radius: 0rpx 0rpx 15rpx 15rpx;
			border: 2rpx solid #216FF9;
			padding: 0 20rpx;
			box-sizing: border-box;


			image {
				width: 31rpx;
				height: 34rpx;
				margin-right: 10rpx;
			}

			.text {
				width: calc(100% - 41rpx);
				font-weight: 600;
				font-size: 23rpx;
				color: #FFFFFF;
			}
		}
	}

	.cont {
		position: fixed;
		width: 100%;
		left: 0;
		padding: 0 28rpx;
		box-sizing: border-box;
		overflow: hidden;

		.code {
			position: relative;

			&>image {
				width: 100%;
				will-change: transform;
			}

			.code_tit {
				position: absolute;
				top: 4%;
				left: 0;
				width: 100%;
				text-align: center;
				font-weight: 600;
				font-size: 30rpx;
				color: #333333;
				white-space: nowrap;
				text-overflow: ellipsis;
				padding: 0 20rpx;
				box-sizing: border-box;
				overflow: hidden;
			}

			.code_img {
				position: absolute;
				top: 50%;
				left: 50%;
				width: 67%;
				transform: translate(-50%, -50%);

				image {
					width: 100%;
					will-change: transform;
				}
			}

			.tips {
				position: absolute;
				bottom: 6%;
				width: 100%;
				left: 0;
				text-align: center;
				font-size: 24rpx;
				color: #757575;
			}
		}

		.btn {
			width: calc(100% - 80rpx);
			left: 40rpx;
			position: fixed;
			background: #216FF9;
			color: #FFFFFF;
		}

		.sign_btn {
			width: 100%;
			position: fixed;
			left: 0;
			bottom: 0;
			background: #fff;
			z-index: 100;
			box-shadow: 0rpx 0rpx 4rpx 0rpx rgba(0, 0, 0, 0.1);

			.btn {
				position: relative;
				text-align: center;
				left: 0;
				bottom: 0;
				width: calc(100% - 80rpx);
				background: linear-gradient(180deg, #FFDB01 0%, #F77A0B 100%);
				box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
				color: #fff;
				border-radius: 15rpx;
				border: none;
			}

		}

		.box {
			position: fixed;
			width: calc(100% - 76rpx);
			padding: 0 38rpx;
			box-sizing: border-box;
			left: 38rpx;
			z-index: 3;
			border-radius: 16rpx;
			overflow: hidden;
			// background: url($back-ground-url+"/worker/new_detail_bg.png") no-repeat;
			// background-size: 100% 100%;
			background: #fff;
			// box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.15);

			&>image {
				width: 100%;
				height: 100%;
			}

			.subtitle {
				height: 80rpx;
				line-height: 80rpx;
				padding-left: 56rpx;
				box-sizing: border-box;
				font-size: 30rpx;
				color: #333;
				box-sizing: border-box;
				background: url($back-ground-url+"/worker/ic_detail_title_bg.png") no-repeat;
				background-size: 100% 100%;
				position: relative;

				.view_contract {
					position: absolute;
					top: 50%;
					right: 56rpx;
					transform: translateY(-50%);
					font-size: 28rpx;
					color: #216FF9;
					height: 50rpx;
					line-height: 50rpx;
					border-bottom: 1px dashed #216FF9;
					z-index: 99;
				}

				image {
					width: 32rpx;
					height: 32rpx;
					margin-right: 8rpx;
				}
			}

			.base_box {
				.base_top {
					font-size: 29rpx;
					margin-top: 76rpx;

					&.base_top_2 {
						margin-top: 57rpx;

						.tips {
							font-weight: 400;
							font-size: 23rpx;
							color: #DD0000;
						}
					}

					.base_tit {
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						position: relative;
						padding-left: 16rpx;
						box-sizing: border-box;

						font-size: 29rpx;
						color: #333333;

						&:before {
							content: "";
							position: absolute;
							top: 50%;
							left: 0;
							transform: translateY(-50%);
							width: 8rpx;
							height: 27rpx;
							background: #216FF9;
							border-radius: 2rpx;
						}
					}

					.base_border {
						border-bottom: 2rpx dashed #DFDFDF;
					}



					.base_salary {
						margin: 20rpx 0;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						font-weight: 600;
						color: #EA9900;
						text-align: right;
					}
				}
			}

			.base {
				.line {
					height: 85rpx;
					line-height: 85rpx;
					font-size: 27rpx;
					border-bottom: 2rpx dashed #DFDFDF;
					position: relative;

					&.labels {
						flex-wrap: wrap;
						height: auto;
						line-height: auto;
						padding-top: 20rpx;
						border-bottom: none;

						.label {
							width: 22%;
							height: 46rpx;
							margin-bottom: 20rpx;
							text-align: center;
							line-height: 46rpx;
							background: rgba(234, 153, 0, 0.06);
							border-radius: 6rpx;
							border: 1rpx solid #EA9900;
							font-size: 23rpx;
							color: #EA9900;
							margin-right: 3%;

							&:nth-child(4n) {
								margin-right: 0;
							}
						}
					}

					&.address {
						height: auto;
						// border-bottom: none;

						.address_text {
							width: calc(100% - 140rpx);
							display: -webkit-box;
							-webkit-line-clamp: 2;
							-webkit-box-orient: vertical;
							overflow: hidden;
							text-overflow: ellipsis;
							line-height: 32rpx;
							white-space: wrap;
						}

						.text {
							width: 100%;
							white-space: wrap;
							overflow: visible;
						}
					}

					.phone_call {
						width: 50rpx;
						height: 50rpx;
						position: absolute;
						top: 50%;
						right: 0rpx;
						transform: translateY(-50%);
					}

					.tit {
						width: 140rpx;
						color: #6E6E6E;
					}

					.text {
						width: calc(100% - 140rpx);
						color: #333;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;


					}
				}
			}

			.textarea {
				position: relative;
				line-height: 38rpx;
				font-size: 27rpx;
				color: #5A5A5A;
				border-radius: 16rpx;
				padding: 20rpx;
				background: #f6f6f6;
				border-radius: 15rpx;
				box-sizing: border-box;

				p {
					margin-bottom: 20rpx;
				}

				rich-text {
					line-height: 50rpx;
				}
			}
		}
	}

	.salary {
		.item {
			background: #FFFFFF;
			border-radius: 16rpx;
			padding: 40rpx;
			box-sizing: border-box;
			margin-bottom: 20rpx;
			position: relative;

			.status {
				position: absolute;
				width: 100rpx;
				height: 100rpx;
				top: 0;
				right: 0;

				image {
					width: 100rpx;
					height: 100rpx;
				}
			}

			.line {
				margin-bottom: 24rpx;
				font-size: 28rpx;

				&:last-child {
					margin-bottom: 0;
				}

				.tit {
					width: 160rpx;
					color: #686868;
				}

				.text {
					width: calc(100% - 160rpx);
					color: #333333;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;

					&.in_line {
						color: #2CB074;
						font-weight: bold;
					}

					&.off_line {
						color: #216FF9;
						font-weight: bold;
					}
				}
			}
		}
	}
</style>