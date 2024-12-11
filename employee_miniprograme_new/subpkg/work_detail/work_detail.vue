<template>
	<view class="content">
		<customHeader :title="pageName" :showBack="true" :headHeight="headHeight" :showSecondimage="true"
			:backIndex="true"></customHeader>
		<view class="bg_right">
			<image :src="imgUrl+'/worker/ic_baoming_right.png'" mode="heightFix" :style="{height:headHeight+'px'}">
			</image>
		</view>
		<view class="bg_bottom">
			<image :src="imgUrl+'/worker/ic_baoming_left.png'" mode="heightFix" :style="{height:headHeight+'px'}">
			</image>
		</view>
		<view class="middle_bg" :style="{top:headHeight+'px'}">
			<image :src="imgUrl+'/worker/ic_baoming_bg1.png'" mode="widthFix"></image>
		</view>
		<view class="cont" :style="{top:marginTop+tabMargin+'px',height:contHeight+'px'}">
			<view class="inner">
				<view class="subtitle flex flex-start" :style="{height:detailTitleHeight+'px'}">
					<image :src="imgUrl+'/worker/ic_baoming_title_bg.png'" mode="heightFix"></image>
					<view class="text">项目详情</view>
					<!-- <button class="share_icon" open-type="share">
						<image :src="imgUrl+'/worker/share_icon.png'" mode="heightFix"></image>
					</button> -->
				</view>
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" show-scrollbar="false"
					:style="{height:scrollHeight+'px'}">
					<view class="base">
						<view class="line flex flex-start">
							<view class="tit">工作名称：</view>
							<view class="text">{{info.name}}</view>
						</view>
						<view class="line flex flex-start">
							<view class="tit">项目经理：</view>
							<view class="text">{{info.broker_name}}</view>
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
						<view class="line address" style="border-bottom: none;">
							<view class="tit">工作地址</view>
						</view>
						<view class="" style="font-size: 28rpx;color:#686868;">{{info.work_address.address}}</view>
					</view>
					<view class="more">
						<view class="tit">工作详情</view>
						<view class="textarea">
							<rich-text :nodes="info.content" :style="{display:displayType}"></rich-text>
							<!-- <view class="showtotal" @click="showTotal" v-if="showAll">
								<text class="text">展开</text>
								<image :src="imgUrl+'/broker/ic_more.png'" mode="widthFix"></image>
							</view> -->
						</view>
					</view>
				</scroll-view>
				<view class="bot flex flex_btween" :style="{bottom:btnBottom+'px'}">
					<view class="btn" @click="toSign">
						<image :src="imgUrl+'/worker/ic_jiedan_btn_bg.png'"
							:style="{height:btnHeight+'px',width:'100%'}"></image>
						<text>我要报名</text>
					</view>
				</view>
			</view>
		</view>
		<login :showLogin="showLogin" pageName="work_detail" @handleSign="toSign" @closeLogin="closeLogin"></login>
		<addBase :showAddBase="showAddBase" @closeBase="closeBase"></addBase>
		<l-painter ref="sharePainter" :board="sharePoster" hidden />
		<!-- <view class="mask" v-if="showMask" @click="close">
			<view class="inner" @click.stop="openInner1" v-if="showInner1">
				<image :src="imgUrl+'/broker/ic_jiedan_mask_bg.png'" mode="widthFix" class="bg"></image>
				<view class="tit">实名认证</view>
				<view class="info">
					<view class="text">您还未提交公司认证信息 请认证公司信息后</view>
					<view class="btn blue" @click.stop="copyLink">去认证</view>
				</view>
			</view>
			<view class="inner" @click.stop="openInner2" v-if="showInner2">
				<image :src="imgUrl+'/broker/ic_jiedan_mask_inner2_bg.png'" mode="widthFix" class="bg"></image>
				<view class="info">
					<view class="tit2">认证成功</view>
					<view class="text">恭喜你认证成功 开始你的蓝峰之旅吧</view>
					<view class="btn yellow" @click.stop="copyLink">去发单</view>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	import commonData from "@/common/commonData.js"
	import customHeader from "@/components/custom_header.vue"
	import urlSetting from "@/url_setting";
	import addBase from "@/components/add_base_info.vue"
	const app = getApp()
	export default {
		data() {
			return {
				showAddBase: false,
				showLogin: false,
				sharePoster: {
					css: {
						// 根节点若无尺寸，自动获取父级节点
						width: '',

					},
					views: [{
						type: 'image',
						src: 'https://static.test.swiftwd.com/broker/share_c_bg.jpg',
						css: {
							width: '100%',
							margin: '0 auto',

						}
					}, ]
				},
				imgUrl: app.globalData.baseImageUrl,
				pageName: "我要报名",
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				detailTitleHeight: app.globalData.detailTitleHeight,
				btnBottom: app.globalData.btnBottom,
				info: {
					broker_mobile: "",
					broker_name: "",
					code: "",
					content: "",
					id: "",
					name: "",
					platform_fee_price: "",
					work_address: "",
					worker_salary: "",
					worker_welfare: "",
				},
				displayType: "-webkit-box",
				showAll: true,
				id: "",
				isLogin: false,
				url: "",
				scrollHeight: 0,
				contHeight: 0,
				showMask: false,
				showInner1: false,
				showInner2: false,
				headHeight: app.globalData.highTopHeight,
				btnHeight: app.globalData.btnHeight,
				pb_id: 0,
				paramFrom: "",
				postFrom: "",
				status: commonData.status,
				period: commonData.periodList,
				paySalaryPeriod: commonData.paySalaryPeriod,
				paySalaryWeekly: commonData.paySalaryWeekly,
				fromArr: [{
						value: "ks",
						text: "kuaishou"
					},
					{
						value: "dy",
						text: "douyin"
					},
					{
						value: "wx",
						text: "wechat_mini_program"
					}
				]
			}
		},
		components: {
			customHeader,
			addBase
		},
		async onShareAppMessage(e) {
			let shareobj;
			let param = "p=" + this.pb_id + "&f=" + this.paramFrom
			const imageUrl = await this.shareSave();
			console.log(imageUrl, "imageUrl")
			shareobj = {
				title: this.info.name, //分享的标题
				path: '/subpkg/work_detail/work_detail?scene=' + encodeURIComponent(param), //好友点击分享之后跳转的页面
				imageUrl: imageUrl, //分享的图片  支持PNG及JPG。显示图片长宽比是 5:4。
			}
			return shareobj //一定要返回对象
		},
		async onShareTimeline(e) {
			let shareobj;
			let param = "p=" + this.pb_id + "&f=" + this.paramFrom
			const imageUrl = await this.shareSave();
			console.log(imageUrl, "imageUrl")
			shareobj = {
				title: this.info.name, //分享的标题
				path: '/subpkg/work_detail/work_detail?scene=' + encodeURIComponent(param), //好友点击分享之后跳转的页面
				imageUrl: imageUrl, //分享的图片  支持PNG及JPG。显示图片长宽比是 5:4。
			}
			return shareobj //一定要返回对象
		},
		onLoad(param) {
			this.contHeight = app.globalData.systemHeight - this.marginTop - this.tabMargin - this.btnBottom
			this.scrollHeight = this.contHeight - this.btnHeight - 2 * this.btnBottom - this.detailTitleHeight
			console.log(param, 'param')
			if (param.scene) {
				let scene = decodeURIComponent(param.scene)
				let arr = scene.split("&")
				for (var i = 0; i < arr.length; i++) {
					if (arr[i].indexOf("p") != -1) {
						this.pb_id = arr[i].split("=")[1]
					}
					if (arr[i].indexOf("f") != -1) {
						this.paramFrom = arr[i].split("=")[1]
						this.postFrom = this.fromArr.filter(el => {
							return el.value == (arr[i].split("=")[1])
						})[0].text
					}
				}
			}
		},
		onShow() {
			console.log(this.pb_id, "onshow")
			let url = "/share-to-worker/project/" + this.pb_id
			this.$request(url).then(res => {
				if (res.code == 0) {
					this.info = res.data
					this.viewShareHaibao()
				}
			})
		},
		methods: {
			closeBase() {
				this.showAddBase = false
				uni.showToast({
					title: "报名成功",
					duration: 3000
				})
			},
			shareSave() {
				let _this = this
				return new Promise(resolve => {
					_this.$refs.sharePainter.canvasToTempFilePathSync({
						fileType: "jpg",
						quality: 1,
						success: (res) => {
							let data = {
								"file": res.tempFilePath,
								"type": "toc" // tob是B端，toc是C端
							}
							let url = "/share-to-worker/project/" + _this.pb_id + "/poster-url"
							_this.$request(url, data, "POST").then(resp => {
								if (resp.code == 0) {
									resolve(resp.data.url)
								}
							})
						},
						fail: (err) => {
							console.log(err, "err")
						}
					})
				})

			},
			showTotal() {
				console.log(1234)
				this.displayType = "block";
				this.showAll = false;
			},
			back() {
				uni.switchTab({
					url: "/pages/index/index"
				})
			},
			async viewShareHaibao() {
				let _this = this
				console.log(this.info, "viewsharehaibao")
				this.sharePoster.views = [{
						type: 'image',
						src: _this.imgUrl + '/broker/share_c_bg.jpg',
						css: {
							width: '100%',
							margin: '0 auto',

						}
					},
					{
						type: 'view',
						css: {
							// 设置居中对齐
							width: "59.6%",
							textAlign: 'left',
							position: 'absolute',
							top: '14.5%',
							left: '50%',
							transform: 'translateX(-50%)',
							lineHeight: '54rpx',
							lineClamp: 1,

						},
						views: [{
								type: "view",
								css: {
									display: "block",
									color: "#fff",
									padding: "8rpx 0",
									marginBottom: "10rpx",
									borderBottom: "1px dashed #FFAC3F",

								},
								views: [{
										type: "text",
										text: "工作名称：",
										css: {
											width: "35%",
											textAlign: "center",
											display: "inline-block",
											background: "#fff",
											fontWeight: "600",
											color: "#3D3D3D",
											fontSize: "30rpx",
											borderRadius: "8rpx",
											marginRight: "16rpx",
											padding: "0 8rpx",

										}
									},
									{
										type: "text",
										text: _this.info.name,
										css: {
											fontFamily: "Verdana, Verdana",
											fontWeight: "bold",
											color: "#DA5233",
											textShadow: "0px 2px 2px #5A1100",
											display: "inline-block",
											fontSize: "40rpx",

										}
									}
								]
							},
							{
								type: "view",
								css: {
									display: "block",
									color: "#fff",
									padding: "8rpx 0",
									marginBottom: "10rpx",
									borderBottom: "1px dashed #FFAC3F",

								},
								views: [{
										type: "text",
										text: "工作酬劳：",
										css: {
											width: "35%",
											textAlign: "center",
											display: "inline-block",
											background: "#fff",
											fontWeight: "600",
											color: "#3D3D3D",
											fontSize: "30rpx",
											borderRadius: "8rpx",
											marginRight: "16rpx",
											padding: "0 8rpx",

										}
									},
									{
										type: "text",
										text: _this.info.worker_salary,
										css: {
											fontFamily: "Verdana, Verdana",
											fontWeight: "bold",
											color: "#DA5233",
											textShadow: "0px 2px 2px #5A1100",
											display: "inline-block",
											fontSize: "40rpx",

										}
									}
								]
							},
							{
								type: "view",
								css: {
									display: "block",
									color: "#fff",
									padding: "8rpx 0",
									marginBottom: "10rpx",
									borderBottom: "1px dashed #FFAC3F",

								},
								views: [{
										type: "text",
										text: "工作福利：",
										css: {
											width: "35%",
											textAlign: "center",
											display: "inline-block",
											background: "#fff",
											fontWeight: "600",
											color: "#3D3D3D",
											fontSize: "30rpx",
											borderRadius: "8rpx",
											marginRight: "16rpx",
											padding: "0 8rpx",

										}
									},
									{
										type: "text",
										text: _this.info.worker_welfare,
										css: {
											fontFamily: "Verdana, Verdana",
											fontWeight: "bold",
											color: "#DA5233",
											textShadow: "0px 2px 2px #5A1100",
											display: "inline-block",
											fontSize: "40rpx",

										}
									}
								]
							},
						]
					},

				]
			},
			toSign() {
				let _this = this
				let token = uni.getStorageSync("token")
				if (!token) {
					this.showLogin = true
				} else {
					_this.sureSign()
				}
			},
			closeLogin() {
				this.showLogin = false
			},
			sureSign() {
				let header = {
					"Content-Type": "application/json",
					"Authorization": "bearer " + uni.getStorageSync("token"),
					"accept": "application/json",
					"app-id": urlSetting.urls.appid,
					"open-id": !uni.getStorageSync("openid") ? "" : uni.getStorageSync("openid"),
					"from-platform": this.postFrom
				}
				let url = "/worker/accept/project/" + this.pb_id
				this.$request(url, {}, "POST", header).then(async res => {
					if (res.code == 0) {
						this.closeLogin()
						let info = await this.getUsrInfo()
						// 判断是否填写个人资料
						if (info.gender == "unknown") {
							this.showAddBase = true
						} else {
							uni.showModal({
								title: "报名成功",
								content: "您已成功报名该项目，是否进入首页？",
								success(resp) {
									if (resp.confirm) {
										uni.switchTab({
											url: "/pages/index/index"
										})
									}
								}
							})
						}

					}
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.bg_right {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 100;
	}

	.bg_bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 100;
		font-size: 0;
	}

	.middle_bg {
		position: fixed;
		width: 100%;
		left: 0;

		image {
			width: 100%;
			will-change: transform;
		}
	}

	// .custom_header{
	// 	position: fixed;
	// 	top:0;
	// 	left:0;
	// 	width:100%;
	// 	// background: url($back-ground-url+"/worker/ic_baoming_header_bg.png") no-repeat;
	// 	background-size:100% 100%;
	// 	overflow: hidden;
	// 	z-index:2;
	// 	&>image{
	// 		width:100%;
	// 		position: fixed;
	// 		top:0;
	// 		left:0;
	// 		z-index:3;
	// 		will-change: transform;
	// 	}
	// 	.title{
	// 		text-align: center;
	// 		color:#fff;
	// 		font-size: 32rpx;
	// 		position: relative;
	// 		font-weight: bold;
	// 		z-index: 10;
	// 		.back{
	// 			position: absolute;
	// 			left:48rpx;
	// 			top:50%;
	// 			transform: translateY(-50%);
	// 			width:44rpx;
	// 			height:44rpx;
	// 			image{
	// 				width:44rpx;
	// 				height:44rpx;
	// 			}
	// 		}
	// 	}
	// 	.subtit{
	// 		padding:0 48rpx;
	// 		margin-top:24rpx;
	// 		color: #FFFFFF;
	// 		.hello{
	// 			font-size: 72rpx;
	// 			line-height: 100rpx;
	// 			font-weight: bold;
	// 		}
	// 		.tips{
	// 			font-size: 32rpx;
	// 			line-height: 44rpx;
	// 		}
	// 	}
	// }
	.cont {
		position: fixed;
		width: 100%;
		left: 0;
		padding: 0 28rpx;
		box-sizing: border-box;
		overflow: hidden;

		.inner {
			height: 100%;
			position: relative;
			background: url($back-ground-url+"/worker/ic_baoming_bg2.png") no-repeat;
			background-size: cover;
			border-top-left-radius: 16rpx;
			border-top-right-radius: 16rpx;

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
				background: url($back-ground-url+"/worker/ic_tit_bg.png") no-repeat;
				background-size: 100% 100%;
				position: relative;

				.share_icon {
					position: fixed;
					top: 12%;
					right: 125rpx;
					font-size: 0;
					border: none;
					background: transparent;
					padding: 0;
					z-index: 200;

					&::after {
						border: none;
					}

					image {
						width: 40rpx;
						height: 40rpx;
					}
				}

				image {
					width: 32rpx;
					height: 32rpx;
					margin-right: 8rpx;
				}
			}

			.base {
				padding: 0 56rpx;

				.line {
					height: 88rpx;
					line-height: 88rpx;
					font-size: 28rpx;
					border-bottom: 1px dashed #DFDFDF;

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

					.tit {
						width: 140rpx;
						color: #5A5A5A;
					}

					.text {
						width: calc(100% - 140rpx);
						color: #333;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;

						.period {
							font-size: 24rpx;
							color: #A8A8A8;
						}
					}
				}
			}

			.more {
				padding: 0 56rpx;

				.tit {
					font-size: 30rpx;
					color: #F7BB05;
					margin: 40rpx 0 10rpx 0;
				}

				.textarea {
					position: relative;
					background: #fff;
					line-height: 40rpx;
					font-size: 28rpx;
					color: #5A5A5A;
					border-radius: 16rpx;
					padding: 20rpx;
					box-sizing: border-box;

					p {
						margin-bottom: 20rpx;
					}

					rich-text {
						line-height: 50rpx;
						// -webkit-line-clamp: 4;
						// overflow: hidden;
						// text-overflow: ellipsis;
						// height: auto;
						// -webkit-box-orient: vertical;
						// display: -webkit-box;
					}

					.showtotal {
						color: #F7BB05;
						margin: 20rpx auto;
						text-align: center;
						position: relative;
						z-index: 100;

						image {
							width: 32rpx;
							height: 32rpx;
							vertical-align: middle;
						}
					}
				}
			}

			.bot {
				width: calc(100% - 80rpx);
				left: 40rpx;
				position: absolute;

				.btn {
					width: 48%;
					position: relative;
					font-size: 0;
					margin: 0 auto;
					padding: 0;

					&::after {
						border: none;
					}

					image {
						width: 100%;
						will-change: transform;
					}

					text {
						position: absolute;
						top: 45%;
						left: 50%;
						width: 100%;
						text-align: center;
						transform: translate(-50%, -50%);
						color: #fff;
						font-weight: bold;
						font-size: 30rpx;
					}
				}
			}
		}
	}

	.mask {
		.inner {
			width: 71%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			text-align: center;

			.bg {
				width: 100%;
				position: relative;
				top: 0;
				left: 0;
			}

			.tit {
				font-size: 36rpx;
				color: #fff;
				font-weight: bold;
				position: absolute;
				top: 13%;
				left: 10%;
			}

			.info {
				position: absolute;
				top: 44%;
				left: 50%;
				transform: translateX(-50%);
				width: 75%;

				.tit2 {
					font-size: 36rpx;
					color: #FFB103;
					font-weight: bold;
				}

				.text {
					margin: 20rpx auto 56rpx auto;
					font-size: 28rpx;
					color: #333333;
					width: 80%;
				}

				.btn {
					height: 88rpx;
					line-height: 88rpx;
					box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
					border-radius: 16rpx;
					color: #fff;
				}

				.blue {
					background: #3780FF;
				}

				.yellow {
					background: #FFB103;
				}
			}

		}
	}
</style>