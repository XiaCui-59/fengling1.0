<template>
	<view class="content">
		<customHeader :title="pageName" :showBack="true" :headHeight="headerHeight"></customHeader>
		<view class="cont" :style="{marginTop:marginTop+'px'}">
			<view class="top_area" :style="{top:marginTop+'px'}">
				<view class="subtabs flex flex-start"
					:style="{height:subTabHeight+'px',marginTop:tabMargin+'px',marginBottom:tabMargin+'px'}">
					<view class="subtab flex flex_around" v-for="(item,index) in tabs" :key="index"
						:class="currentTab.value==item.value?'active':''" @click="changeTab(item)">{{item.text}}</view>
				</view>
				<!-- <view class="subtabs flex flex-start" :style="{marginTop:tabMargin+'px',marginBottom:tabMargin+'px'}">
					<view class="subtab" :style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px'}"
						v-for="(item,index) in tabs" :key="index" :class="currentTab.value==item.value?'active':''"
						@click="changeTab(item)">{{item.text}}</view>
				</view> -->
			</view>
			<view class="box" :style="{top:boxTop+'px'}" v-if="currentTab.value == 'detail'">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y"
					:style="{height:scrollHeight+'px'}" style="padding:28rpx 28rpx 0 28rpx;box-sizing: border-box;">
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
						<view class="base base_top">
							<view class="base_border flex flex_btween">
								<view class="base_tit">{{info.name}}</view>
								<view class="base_salary">
									{{(info.worker_salary_min == info.worker_salary_max?info.worker_salary_min:(info.worker_salary_min+"-"+info.worker_salary_max))}}
									<text
										class="period">{{"元"+periodList.filter(el=>{return el.value==info.worker_salary_type})[0].text}}</text>
								</view>
							</view>
						</view>
						<view class="base">
							<view class="line flex flex-start">
								<image :src="info.broker_avatar"
									style="width:50rpx;height:50rpx;border-radius:50%;margin-right: 8rpx;">
								</image>
								<view class="text" style="font-size: 23rpx;color: #686868;">{{info.broker_name}}</view>
								<!-- <image :src="imgUrl+'/worker/phone_icon.png'" mode="widthFix" class="phone_call"
								@click="makePhoneCall(info.broker_mobile)">
							</image> -->
							</view>
							<view class="line  flex flex_btween" v-if="info.interview_contact_name">
								<view class="tit">面试联系人</view>
								<view class="text" style="width: auto;">{{info.interview_contact_name}}</view>
							</view>
							<view class="line  flex flex_btween" v-if="info.interview_contact_mobile">
								<view class="tit">联系人电话</view>
								<view class="text" style="width: auto;">{{info.interview_contact_mobile}}</view>
							</view>
							<!-- <view class="line labels flex flex-start"
								v-if="info.job_benefits.length != 0 || info.job_info.length != 0">
								<view class="label" v-for="(item,index) in info.job_benefits" :key="item.id">
									{{item.name}}
								</view>
								<view class="label" v-for="(item2,index2) in info.job_info" :key="item2.id">
									{{item2.name}}
								</view>
							</view> -->
							<view class="line address" style="border-bottom: none;">
								<view class="tit">工作地址</view>
							</view>
							<view class="map_area" @click="openAddress" v-if="info.work_address.location.lat">
								<map style="width: 100%; height: 100px;" :latitude="info.work_address.location.lat"
									:longitude="info.work_address.location.lng" :markers="marker" @tap="openAddress">
								</map>
								<view class="tips flex flex-start">
									<image :src="imgUrl+'/broker/ic_position.png'" mode="widthFix"></image>
									<view class="text">{{info.work_address.address}}</view>
								</view>
							</view>
							<view class="" style="font-size: 28rpx;color:#686868;"
								v-if="!info.work_address.location.lat">
								{{info.work_address.address}}
							</view>
							<view class="line"
								style="height:40rpx;line-height:40rpx;font-size: 29rpx;color: #F7BB05;border-bottom: none;margin-top: 55rpx;">
								工作详情</view>
							<view class="textarea">
								<text>{{info.content}}</text>
								<!-- <rich-text :nodes="info.content" :style="{display:displayType}"></rich-text> -->
							</view>
						</view>
					</view>
				</scroll-view>

			</view>
			<view class="box" :style="{top:boxTop+'px'}">
				<!-- 工人情况 -->
				<view class="detail" v-if="currentTab.value == 'employee'">
					<view class="title flex flex-start">
						<image :src="imgUrl+'/broker/ic_project_detail_user.png'" mode="heightFix"></image>
						<view class="text">工人详情</view>
					</view>
					<view class="data">
						<!-- <view class="line flex flex_btween" @click="toDetail('enrolled-signing-requests')">
							<view class="left flex flex-start">
								<image :src="imgUrl+'/broker/ic_project_detail_users.png'" mode="widthFix"></image>
								<view class="text">已报名</view>
							</view>
							<view class="right flex flex-start">
								<view class="text orange">{{employeeInfo.enroll_num}}</view>
								<image :src="imgUrl+'/broker/ic_trangle_right.png'" mode="widthFix"></image>
							</view>
						</view> -->
						<view class="line flex flex_btween" @click="toDetail('wait_check_in')">
							<view class="left flex flex-start">
								<image :src="imgUrl+'/broker/ic_project_detail_users.png'" mode="widthFix"></image>
								<view class="text">候选中</view>
							</view>
							<view class="right flex flex-start">
								<view class="text orange">{{employeeInfo.wait_check_in_num}}</view>
								<image :src="imgUrl+'/broker/ic_trangle_right.png'" mode="widthFix"></image>
							</view>
						</view>
						<view class="line flex flex_btween" @click="toDetail('check_in')">
							<view class="left flex flex-start">
								<image :src="imgUrl+'/broker/ic_wait_sign_1.png'" mode="widthFix"></image>
								<view class="text">待面试</view>
							</view>
							<view class="right flex flex-start">
								<view class="text orange">{{employeeInfo.check_in_num}}</view>
								<image :src="imgUrl+'/broker/ic_trangle_right.png'" mode="widthFix"></image>
							</view>
						</view>
						<view class="line flex flex_btween" @click="toDetail('wait_entry')">
							<view class="left flex flex-start">
								<image :src="imgUrl+'/broker/ic_wait_in.png'" mode="widthFix"></image>
								<view class="text">待入职</view>
							</view>
							<view class="right flex flex-start">
								<view class="text orange">{{employeeInfo.wait_entry_num}}</view>
								<image :src="imgUrl+'/broker/ic_trangle_right.png'" mode="widthFix"></image>
							</view>
						</view>
						<view class="line flex flex_btween" @click="toDetail('entry')">
							<view class="left flex flex-start">
								<image :src="imgUrl+'/broker/ic_project_detail_in.png'" mode="widthFix"></image>
								<view class="text">已入职</view>
							</view>
							<view class="right flex flex-start">
								<view class="text green">{{employeeInfo.entry_num}}</view>
								<image :src="imgUrl+'/broker/ic_trangle_right.png'" mode="widthFix"></image>
							</view>
						</view>
						<view class="line flex flex_btween" @click="toDetail('depart')">
							<view class="left flex flex-start">
								<image :src="imgUrl+'/broker/ic_project_detail_out.png'" mode="widthFix"></image>
								<view class="text">已离职</view>
							</view>
							<view class="right flex flex-start">
								<view class="text red">{{employeeInfo.depart_num}}</view>
								<image :src="imgUrl+'/broker/ic_trangle_right.png'" mode="widthFix"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- <view class="btns flex flex_btween" :style="{bottom:btnBottom+'px'}">
				<view class="btn tob" :style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px',margin:'0'}" @click="tob">发单</view>
				<view class="btn" :style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px',margin:'0'}" @click="toc">招人</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	import customHeader from "@/components/custom_header.vue"
	import commonData from "@/common/commonData.js"
	const app = getApp()
	export default {
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
				poster: {
					css: {
						// 根节点若无尺寸，自动获取父级节点
						width: '',
					},
					views: []
				},
				sharePoster: {
					css: {
						// 根节点若无尺寸，自动获取父级节点
						width: '',

					},
					views: []
				},
				info: {
					broker_avatar: "",
					broker_mobile: "",
					broker_name: "",
					content: "",
					id: "",
					name: "",
					status: "",
					work_address: "",
					worker_salary: "",
					worker_welfare: "",
				},
				currentTab: {
					value: "employee",
					text: "工人情况"
				},
				showMask: false,
				pageName: "灵动优聘",
				marginTop: app.globalData.marginTop,
				subTabHeight: app.globalData.subTabHeight,
				tabMargin: app.globalData.tabMargin,
				status: false,
				showCode: false,
				status: commonData.status,
				periodList: commonData.periodList,
				paySalaryPeriod: commonData.paySalaryPeriod,
				paySalaryWeekly: commonData.paySalaryWeekly,
				tabs: [{
						value: "employee",
						text: "工人情况"
					},
					{
						value: "detail",
						text: "职位详情"
					},
				],
				displayType: "-webkit-box",
				showAll: true,
				scrollHeight: 0,
				boxTop: 0,
				headerHeight: app.globalData.topHeight,
				btnBottom: app.globalData.btnBottom,
				detailTitleHeight: app.globalData.detailTitleHeight,
				currentPage: 1,
				contHeight: 0,
				scrollPadding: 0,
				tabHeight: 0,
				id: "",
				employeeInfo: {
					check_in_num: 0,
					depart_num: 0,
					enroll_num: 0,
					entry_num: 0,
					wait_check_in_num: 0,
				},
				showMask: false,
				showCommission: false,
				showHaibao: false,
				showMethods: false,
				showShareHaibao: false,
				commission: "0",
				curShareType: "",
				shareImage: "",
				currentCommission: 0,
				marker: []
			}
		},
		async onShareAppMessage(e) {
			let shareobj;
			let param = "pb_id=" + this.info.project_broker_id
			// this.viewShareHaibao()
			const imageUrl = await this.shareSave();
			console.log(imageUrl, "imageUrl")
			if (this.curShareType == "tob") {
				shareobj = {
					title: this.info.name, //分享的标题
					path: '/subpkg/work_detail/work_detail?scene=' + encodeURIComponent(param) +
						"&open_type=tob", //好友点击分享之后跳转的页面
					imageUrl: imageUrl, //分享的图片  支持PNG及JPG。显示图片长宽比是 5:4。
				}
			} else {
				shareobj = {
					title: this.info.name, //分享的标题
					path: '/subpkg/work_detail/work_detail?scene=' + encodeURIComponent(param) +
						"&open_type=toc", //好友点击分享之后跳转的页面
					imageUrl: imageUrl, //分享的图片  支持PNG及JPG。显示图片长宽比是 5:4。
				}
			}
			this.close()
			return shareobj //一定要返回对象
		},
		components: {
			customHeader
		},
		async onLoad(param) {
			let _this = this
			this.id = param.id
			this.info = await this.getInfo()
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
			this.boxTop = this.marginTop + this.subTabHeight + 2 * this.tabMargin
			this.scrollHeight = app.globalData.systemHeight - this.marginTop - 1 * this.subTabHeight - 2 * this
				.tabMargin

			// let _this = this
			// this.getMarginTop()
			// this.getSubtabHeight()
			// setTimeout(function(){
			// 	// _this.getElementInfo()
			// 	_this.getTopHeight()

			// },500)
		},
		onShow() {
			this.getEmplyee()
		},
		methods: {
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
			// scanCode() {
			// 	let _this = this
			// 	uni.scanCode({
			// 		onlyFromCamera: true,
			// 		scanType: "qrCode",
			// 		hideAlbum: true,
			// 		success: function(res) {
			// 			console.log(res)
			// 			let url = res.result
			// 			_this.$request(url, {}, "POST").then(resp => {
			// 				if (resp.code == 0) {
			// 					uni.showModal({
			// 						title: "报到核销成功",
			// 						showCancel: false
			// 					})
			// 				}
			// 			})
			// 		}
			// 	});
			// },
			// getElementInfo() {
			// 	let _this = this
			// 	let systemInfo = uni.getSystemInfoSync()
			// 	let info = uni.createSelectorQuery().select(".base_box");
			// 	console.log(info, "info")
			// 	info.boundingClientRect(function(data) { //data - 各种参数
			// 		console.log(data, "data")
			// 		if (data) {
			// 			console.log(data)
			// 			_this.scrollHeight = app.globalData.systemHeight - _this.marginTop - 2 * _this.tabMargin -
			// 				_this.btnBottom - data.height - _this.subTabHeight
			// 		}
			// 	}).exec()

			// },
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
			changeTab(item) {
				let _this = this
				this.currentTab.value = item.value
				this.currentTab.text = item.text
				// setTimeout(function() {
				// 	_this.getElementInfo()
				// }, 500)

			},
			toDetail(type) {
				uni.navigateTo({
					url: "/subpkg/project_worker_detail/project_worker_detail?id=" + this.id + "&type=" + type
				})
			},
			getEmplyee() {
				let url = "/broker/mini/project/" + this.id + "/worker-count"
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.employeeInfo = res.data
					}
				})
			},
			getInfo() {
				let _this = this
				return new Promise(resolve => {
					let url = "/broker/mini/project/" + _this.id + "/info"
					this.$request(url).then(res => {
						if (res.code == 0) {
							resolve(res.data)
						}
					})
				})

			},
			showTotal() {
				this.displayType = "block";
				this.showAll = false;
			},
			lower() {

			},
			close() {
				this.showCommission = false
				this.showMask = false
				this.showHaibao = false
				this.showShareHaibao = false
			},
		}
	}
</script>

<style lang="scss" scoped>
	// .subtabs {
	// 	position: relative;

	// 	&::after {
	// 		content: "";
	// 		width: 2rpx;
	// 		height: 29rpx;
	// 		background: #DFDFDF;
	// 		position: absolute;
	// 		top: 50%;
	// 		left: 50%;
	// 		transform: translate(-50%, -50%);
	// 	}
	// }

	// .subtabs .subtab.active {
	// 	background: #fff;
	// 	color: #F7BC05;
	// 	position: relative;

	// 	&::after {
	// 		content: "";
	// 		width: 27rpx;
	// 		height: 10rpx;
	// 		background: url($back-ground-url+"/broker/arrow_down_yellow.png") no-repeat;
	// 		background-size: 100% 100%;
	// 		position: absolute;
	// 		bottom: 0rpx;
	// 		left: 50%;
	// 		transform: translateX(-50%);
	// 	}
	// }
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
			background: #F7BC05;
			border-radius: 0rpx 0rpx 15rpx 15rpx;
			border: 2rpx solid #F7BC05;
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

	.btn {
		text-align: center;
		height: 88rpx;
		line-height: 88rpx;
		background: #FFFFFF;
		box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
		border-radius: 16rpx;
		border: 1px solid #F7BC05;
		font-size: 30rpx;
		color: #F7BC05;
		margin-bottom: 30rpx;
		box-sizing: border-box;
		font-weight: bold;

		image {
			width: 40rpx;
			height: 40rpx;
			margin-right: 8rpx;
			vertical-align: middle;
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
			}

			.code_img {
				position: absolute;
				top: 50%;
				left: 50%;
				width: 67%;
				transform: translate(-50%, -50%);

				image {
					width: 100%;
				}
			}

			.tips {
				position: absolute;
				bottom: 80rpx;
				width: 100%;
				left: 0;
				text-align: center;
				font-size: 24rpx;
				color: #757575;
			}
		}

		.btns {
			width: calc(100% - 80rpx);
			left: 40rpx;
			position: fixed;
			bottom: 40rpx;
			z-index: 99;

			.btn {
				width: 49%;

				&.tob {
					background: #F7BC05;
					color: #fff;
				}
			}
		}

		.box {
			position: fixed;
			width: calc(100% - 56rpx);
			left: 28rpx;
			z-index: 3;
			border-top-left-radius: 16rpx;
			border-top-right-radius: 16rpx;
			overflow: hidden;
			// background: url($back-ground-url+"/broker/pro_detail_bg.png") no-repeat;
			// background-size: 100% 100%;
			background: #fff;
			box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);

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
				background: url($back-ground-url+"/broker/bg_title.png") no-repeat;
				background-size: 100% 100%;

				image {
					width: 32rpx;
					height: 32rpx;
					margin-right: 8rpx;
				}
			}

			.base_box {
				.base_top {
					height: 76rpx;
					line-height: 76rpx;
					font-size: 29rpx;

					.base_border {
						border-bottom: 1px dashed #DFDFDF;
					}

					.base_tit {
						width: calc(100% - 330rpx);
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
							background: #F7BC05;
							border-radius: 2rpx;
						}
					}

					.base_salary {
						width: 330rpx;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						font-weight: 600;
						color: #EA9900;
						text-align: right;

						.period {
							font-size: 24rpx;
							color: #A8A8A8;
							font-weight: 500;
						}
					}
				}

				.base {
					// padding: 0 56rpx;

					.line {
						height: 85rpx;
						line-height: 85rpx;
						font-size: 28rpx;
						border-bottom: 1px dashed #DFDFDF;
						margin-top: 0;
						position: relative;

						&.labels {
							flex-wrap: wrap;
							height: auto;
							line-height: auto;
							padding-top: 20rpx;

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
							width: 40rpx;
							height: 40rpx;
							position: absolute;
							top: 50%;
							right: 0rpx;
							transform: translateY(-50%);
						}

						.tit {
							width: 140rpx;
							color: #5A5A5A;
						}

						.text {
							width: calc(100% - 140rpx);
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
							color: #333;


						}
					}
				}

			}

		}
	}

	.detail {
		// background: url($back-ground-url+"/broker/bg_detail.png") no-repeat;
		// background-size: cover;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
		padding-bottom: 40rpx;
		max-height: calc(100% - 148rpx);
		overflow: scroll;
		background: #fff;
		border-radius: 16rpx;

		.data {
			padding: 0 40rpx;
			box-sizing: border-box;

			.btn {
				background: #F7BC05;
				color: #fff;
				text-align: center;
			}

			.line {
				height: 100rpx;
				line-height: 100rpx;
				border-bottom: 1px dashed #DFDFDF;

				// &:last-child {
				// 	padding-right: 30rpx;
				// 	box-sizing: border-box;
				// }

				.left {
					image {
						width: 40rpx;
						height: 34rpx;
						margin-right: 8rpx;
					}

					.text {
						font-size: 28rpx;
						color: #333;
					}
				}

				.right {
					font-size: 36rpx;
					font-weight: 600;
					font-size: 29rpx;
					color: #333333;

					// .orange {
					// 	color: #FFA800;
					// }

					// .green {
					// 	color: #19C388;
					// }

					// .red {
					// 	color: #EF361B;
					// }

					image {
						width: 14rpx;
						height: 24rpx;
						margin-left: 16rpx;
					}
				}
			}
		}

		.title {
			height: 80rpx;
			padding-left: 40rpx;
			box-sizing: border-box;
			background: url($back-ground-url+"/broker/bg_title.png") no-repeat;
			background-size: cover;
			font-size: 30rpx;
			color: #333;

			image {
				width: 32rpx;
				height: 32rpx;
				margin-right: 10rpx;
			}
		}
	}
</style>