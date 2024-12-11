<template>
	<view class="invite">
		<view class="single_page" v-if="ifSingle">
			<image :src="imgUrl+'/worker/single_page.png'" mode="widthFix" style="width: 100%;"></image>
		</view>
		<view class="" v-else>
			<!-- 自定义导航 -->
			<u-navbar title="邀请有礼" @rightClick="rightClick" :autoBack="true" bgColor="rgba(247, 248, 250, 0.3)"
				titleStyle="color:#010101;font-size: 31rpx;">
				<view class="u-nav-slot flex flex-start" slot="left">
					<!-- <image :src="imgUrl+'/worker/back_white_circle.png'" mode="widthFix" style="width: 58rpx;"></image> -->
					<u-icon name="arrow-left" size="19" color="#010101"></u-icon>
					<!-- <u-line direction="column" :hairline="false" length="16" margin="0 8px"></u-line>
					<u-icon name="home" size="20" color="#fff" @click="toHome"></u-icon> -->
				</view>
			</u-navbar>
			<view class="cont">
				<view class="cont_header">
					<view class="top_wrap">
						<view class="top flex flex-start">
							<view class="top_item">
								<view class="tit">邀请奖励</view>
								<view class="text flex">
									<text
										style="color:#EFD8BB;font-weight: bolder;display: inline-block;margin-right: 8rpx;margin-top: 4rpx;">¥</text>
									<text class="num">{{staticsInfo['vip_reward_amount ']}}</text>
									<text class="period">元</text>
								</view>
							</view>
							<view class="top_item">
								<view class="tit">成为会员</view>
								<view class="text flex ">
									<text class="num">{{staticsInfo.vip_total_num}}</text>
									<text class="period">人</text>
								</view>
							</view>
						</view>
						<view class="bot">我已邀请人数 {{staticsInfo.invitation_total}} 人</view>
					</view>
				</view>
				<view class="cont_bot" :style="{height:contBotHeight+'px'}">
					<view class="cont_bot_fixed">
						<view class="btn" @click="chooseMethod">邀请好友</view>
						<image :src="imgUrl+'/worker/invite_rule_btn.png'" mode="heightFix" style="height:50rpx;"
							@click="readRule"></image>
					</view>
					<view class="record">
						<scroll-view scroll-y="true"
							:style="{height:scrollHeight+'px',padding:'0 30rpx',boxSizing:'border-box'}"
							@scrolltolower="scrolltolower">
							<view class="item flex flex_btween" v-for="(item,index) in list" key="index"
								v-if="list.length>0">
								<view class="left">
									<view class="remark">{{item.username}}</view>
									<view class="time">{{item.create_time}}</view>
								</view>
								<view class="right num">
									<text :class="item.is_vip?'green':'red'">{{item.is_vip?"会员":"非会员"}}</text>
								</view>
							</view>
							<view class="empty" v-if="list.length==0">
								<image :src="imgUrl+'/worker/no_data.png'" mode="widthFix"></image>
							</view>
						</scroll-view>
					</view>

				</view>

				<!-- <view class="btn" style="color:#333;" @click="creatHaibao">生成海报</view> -->
				<view class="mask" v-show="showMask" @click="closeAll">
					<view class="inner method" v-show="showMethods" @click.stop="">
						<view class="close" @click.stop="closeMethods">
							<image :src="imgUrl+'/worker/ic_post_close.png'" mode="widthFix"></image>
						</view>
						<view class="cost">
							<text>&yen;</text>
							<text class="count">9.0</text>
						</view>
						<image :src="imgUrl+'/worker/share_rule.png'" mode="heightFix" @click="readRule"></image>
						<view class="bot">
							<u-grid :border="false" customStyle="position: relative;top:-50%;" col="4">
								<u-grid-item v-for="(listItem,index) in shareList.slice(0,1)" :key="index"
									v-if="hasLogin">
									<button class="button" open-type="share">
										<image :src="listItem.icon" mode="widthFix" style="width:90rpx;"></image>
										<!-- <u-icon :customStyle="{paddingTop:20+'rpx'}" :name="baseListItem.name"
																			:size="22"></u-icon> -->
										<text class="grid-text" style="font-weight: 600;
										font-size: 30rpx;
										color: #333;margin-top:10rpx;">{{listItem.title}}</text>
									</button>
								</u-grid-item>
								<u-grid-item v-for="(listItem,index) in shareList.slice(0,1)" :key="index"
									v-if="!hasLogin" @click="handleClick(listItem)">
									<image :src="listItem.icon" mode="widthFix" style="width:90rpx;"></image>
									<!-- <u-icon :customStyle="{paddingTop:20+'rpx'}" :name="baseListItem.name"
																		:size="22"></u-icon> -->
									<text class="grid-text" style="font-weight: 600;
									font-size: 30rpx;
									color: #333;margin-top:10rpx;">{{listItem.title}}</text>
								</u-grid-item>
								<u-grid-item v-for="(listItem,index) in shareList.slice(1)" :key="index"
									@click="handleClick(listItem)">
									<image :src="listItem.icon" mode="widthFix" style="width:90rpx;"></image>
									<!-- <u-icon :customStyle="{paddingTop:20+'rpx'}" :name="baseListItem.name"
																		:size="22"></u-icon> -->
									<text class="grid-text" style="font-weight: 600;
									font-size: 30rpx;
									color: #333;margin-top:10rpx;">{{listItem.title}}</text>
								</u-grid-item>
							</u-grid>
						</view>
					</view>
					<view class="inner haibao" v-if="showHaibao" @click.stop="">
						<view class="close" @click.stop="closeHaibao">
							<image :src="imgUrl+'/worker/ic_post_close.png'" mode="widthFix"></image>
						</view>
						<l-painter ref="painter" :board="poster" @longpress="handleLongPress" />
						<view class="download" @click.stop="save">
							<image :src="imgUrl+'/worker/ic_post_download.png'" mode="widthFix"></image>
							<view class="save">保存到相册</view>
						</view>
					</view>
					<view class="inner friend" v-if="showTips" :style="{top:marginTop+'px'}" @click.stop="">
						<image :src="imgUrl+'/worker/friend_tip.png'" mode="widthFix"></image>
					</view>
				</view>
			</view>
		</view>
		<login :showLogin="showLogin" @closeLogin="closeLogin" @getInfo="handleLogin" :shareId="shareId">
		</login>
		<myModal ref="myModal">
		</myModal>
	</view>
</template>

<script>
	import login from "@/components/login.vue"
	const app = getApp()
	export default {
		data() {
			return {
				shareId: "",
				showLogin: false,
				ifSingle: app.globalData.scene == 1154 ? true : false,
				fromSingle: app.globalData.scene == 1155 ? true : false,
				showTips: false,
				showMask: true,
				showMethods: true,
				showHaibao: false,
				poster: {
					css: {
						// 根节点若无尺寸，自动获取父级节点
					},
					views: []
				},
				imgUrl: app.globalData.baseImageUrl,
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				shareParams: {
					"way_wechat_friend": "",
					"way_wechat_moment": "",
					"way_qrcode": ""
				},
				shareList: [{
						icon: app.globalData.baseImageUrl + "/worker/ic_share_chat.png",
						title: '微信好友'
					}, {
						icon: app.globalData.baseImageUrl + "/worker/ic_share_friend.png",
						title: '朋友圈'
					}, {
						icon: app.globalData.baseImageUrl + "/worker/ic_share_code.png",
						title: '生成海报'
					},
					{
						icon: app.globalData.baseImageUrl + "/worker/ic_share_link.png",
						title: '专属链接'
					}
				],
				list: [],
				topAreaBottom: 0,
				contBotHeight: 0,
				scrollHeight: 0,
				currentPage: 1,
				pagination: {},
				staticsInfo: {
					"invitation_total": 0,
					"vip_reward_amount ": "0",
					"vip_total_num": 0
				},
				hasLogin: false
			}
		},
		components: {
			login
		},
		async onLoad(params) {
			uni.setNavigationBarColor({
				frontColor: '#000000',
				backgroundColor: 'transparent'
			})
			this.shareId = params.share_id ? params.share_id : ""
			if (this.ifSingle) {
				// 单页模式
				return
			}
			if (this.fromSingle) {
				// 单页模式打开小程序，跳转至首页
				app.globalData.scene = 0
				uni.redirectTo({
					url: "/pages/index/index?share_id=" + this.shareId
				})

				return
			}
			let topArea = await this.getElementInfo(".cont_header")
			if (topArea) {
				this.topAreaBottom = topArea.bottom
				this.contBotHeight = app.globalData.systemHeight - this.topAreaBottom
			}
			let tabTitle = await this.getElementInfo(".cont_bot_fixed")
			if (tabTitle) {
				this.scrollHeight = app.globalData.systemHeight - tabTitle.bottom - 15
			}
			// 判断用户是否登录，未登录跳转到首页
			if (this.isLogin()) {
				this.hasLogin = true
				this.getStatics()
				this.getList()
			} else {
				this.hasLogin = false
				// uni.reLaunch({
				// 	url: "/pages/index/index"
				// })
			}


			// this.getShareParams()
		},
		methods: {
			handleLogin() {
				this.getList()
				this.chooseMethod()
				this.hasLogin = true
			},
			closeLogin() {
				this.showLogin = false
			},
			handleClick(item) {
				let _this = this
				if (!this.isLogin()) {
					this.showLogin = true
					return
				}
				console.log(item)
				if (item.title == "生成海报") {
					this.creatHaibao()
				} else if (item.title == "专属链接") {
					this.$request("/worker/share/link", {}, "POST").then(res => {
						if (res.code == 0) {
							uni.setClipboardData({
								data: res.data.link,
								showToast: true,
								success() {
									uni.hideToast();
									_this.$refs.myModal.showModal({
										title: "链接已复制。请每隔一周重新复制最新链接。",
										confirmText: "好的",
										showCancel: false
									})
								}
							})
						}
					})
				} else {
					this.closeMethods()
					this.showMask = true
					this.showTips = true
				}
			},
			handleLongPress() {
				let _this = this
				this.$refs.myModal.showModal({
					title: "是否保存海报到相册？",
					confirmText: "保存",
					success(res) {
						if (res == "confirm") {
							_this.save()
						}
					}
				})
			},
			closeAll() {
				this.showMask = false
				this.showMethods = false
				this.showHaibao = false
				this.showTips = false
			},
			chooseMethod() {
				if (!this.isLogin()) {
					this.showLogin = true
					return
				}
				this.showMask = true
				this.showMethods = true
			},
			readRule() {
				uni.navigateTo({
					url: "/pages/invite_rule/invite_rule"
				})
			},
			getList() {
				let url = "/worker/invite-list?page=" + this.currentPage
				this.$request(url).then(res => {
					if (res.code == 0) {
						console.log(res.data.list)
						this.list = this.list.concat(res.data.list)
						this.pagination = res.data.pagination
					}
				})
			},
			getStatics() {
				let url = "/worker/invite-statistics"
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.staticsInfo = res.data
					}
				})
			},
			getElementInfo(className) {
				let _this = this
				return new Promise((resolve) => {
					let info = uni.createSelectorQuery().select(className);
					info.boundingClientRect(function(data) { //data - 各种参数
						resolve(data)
					}).exec()
				})
			},
			getShareParams() {
				return new Promise(resolve => {
					this.$request("/worker/shares").then(res => {
						if (res.code == 0) {
							resolve(res.data)
						}
					})
				})

			},
			closeHaibao() {
				this.showMask = false
				this.showHaibao = false
			},
			scrolltolower() {
				if (this.currentPage < this.pagination.pageCount) {
					this.currentPage++
					this.getList()
				} else {
					uni.showToast({
						title: "到底啦~",
						icon: "none",
						duration: 2000
					})
				}
			},
			save() {
				let _this = this
				console.log(this.$refs.painter)
				this.$refs.painter.canvasToTempFilePathSync({
					fileType: "jpg",
					// 如果返回的是base64是无法使用 saveImageToPhotosAlbum，需要设置 pathType为url
					pathType: 'url',
					quality: 1,
					success: (res) => {
						let tempFilePath = res.tempFilePath
						console.log("tempFilePath:", res.tempFilePath);
						uni.saveImageToPhotosAlbum({
							filePath: tempFilePath,
							success: function() {
								uni.showToast({
									title: "图片已保存",
									duration: 2000
								})
							},
							fail(err) {
								this.$refs.myModal.showModal({
									title: "保存失败",
									showCancel: false
								})
							}
						});
					},
					fail: (err) => {
						console.log(err, "err")
					}
				})
			},
			async creatHaibao() {
				this.closeMethods()
				uni.showLoading({
					title: "海报加载中"
				})
				this.shareParams = await this.getShareParams()
				let codeImg = this.shareParams.way_qrcode
				console.log(codeImg)
				if (codeImg) {
					this.viewHaibao(codeImg)
				} else {
					uni.hideLoading()
					this.$refs.myModal.showModal({
						title: "海报加载失败，请重试。",
						confirmText: "好的",
						showCancel: false
					})
				}
			},
			closeMethods() {
				this.showMask = false
				this.showMethods = false
			},
			viewHaibao(imgUrl) {
				let _this = this
				this.poster.views = [{
						type: 'image',
						src: app.globalData.baseImageUrl + '/worker/worker_poster.png?time=' + new Date()
							.getTime(),
						css: {
							width: '100%',
							margin: '0 auto'
						}
					},
					{
						type: "view",
						css: {
							width: '90%',
							position: 'absolute',
							top: '30%',
							left: '50%',
							transform: 'translateX(-50%)'
						},
						views: [{
							type: 'image',
							src: imgUrl,
							css: {
								width: '45%',
								// height: "80px",
								borderRadius: "50%",
								display: "inline-block",
								position: 'absolute',
								top: '40%',
								left: '50%',
								transform: 'translateX(-50%)'
							}
						}]
					},
				]
				this.$nextTick(() => {
					// 这里的代码会在DOM更新完成后执行
					console.log('DOM 更新完成');
					this.showMask = true
					this.showHaibao = true
					uni.hideLoading()
				});

			}
		}
	}
</script>

<style lang="scss">
	.record {
		.item {
			margin-top: 20rpx;
			background: #f7f8fa;
			border-radius: 16rpx;
			padding: 38rpx 26rpx;
			box-sizing: border-box;

			.left {
				.remark {
					font-weight: 600;
					font-size: 29rpx;
					color: #333333;
					margin-bottom: 8rpx;
				}

				.time {
					font-weight: 400;
					font-size: 23rpx;
					color: #5B5B5B;
				}
			}

			.right {
				&.num {
					font-family: Arial;
					font-weight: 900;
					font-size: 29rpx;
					text-align: right;
				}

				.red {
					color: #CC0002;
				}

				.green {
					color: #52C41A;
				}
			}

		}
	}

	.button {
		height: auto;
		width: auto;
		background: transparent;
		line-height: 1;
		padding-left: 0;
		padding-right: 0;
		text-align: center;

		image {
			display: block;
			margin: 0 auto 4rpx auto;
		}

		&::after {
			display: none;
		}
	}

	.download {
		margin-top: 30rpx;
		text-align: center;
		font-weight: 600;
		font-size: 27rpx;
		color: #FFFFFF;

		image {
			display: block;
			margin: 0 auto 16rpx auto;
			width: 100rpx;
		}
	}

	.invite {
		height: 100vh;
		background: $base-bgcolor;
		color: #fff;

		.cont_header {
			height: 460rpx;
			background: url($back-ground-url+'/worker/invite_top_bg.png') no-repeat;
			background-size: 100% 100%;
			padding: 0 50rpx;
			box-sizing: border-box;
			position: relative;

			.top_wrap {
				width: calc(100% - 100rpx);
				position: absolute;
				bottom: 0;
				left: 50rpx;
				background: url($back-ground-url+'/worker/invite_title_bg.png') no-repeat;
				background-size: 100% 100%;
				padding: 53rpx 0 30rpx 0;

				.bot {
					font-size: 27rpx;
					color: #855921;
					text-align: center;
					margin-top: 30rpx;
				}

				.top {
					.top_item {
						width: 50%;
						text-align: center;
						position: relative;

						&:first-child::after {
							content: "";
							position: absolute;
							right: -1rpx;
							top: 50%;
							transform: translateY(-50%);
							height: 80%;
							border-right: 2rpx dashed #4A2612;
						}

						.tit {
							margin-bottom: 15rpx;
							font-size: 35rpx;
							color: #72402B;
						}

						.text {
							font-size: 50rpx;
							justify-content: center;

							.num {
								font-family: Arial, Arial;
								font-weight: 900;
								text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
							}

							.period {
								font-weight: 400;
								font-size: 29rpx;
								color: #7E7E7E;
								display: inline-block;
								margin-left: 15rpx;
							}
						}

						&:first-child {
							.text {
								.num {
									color: #F0BA78;
								}
							}
						}

						&:last-child {
							.text {
								.num {
									color: #83561E;
								}
							}
						}

					}
				}
			}
		}

		.cont_bot {
			background: url($back-ground-url+'/worker/invite_body_bg.png') no-repeat;
			background-size: 100% 100%;

			.cont_bot_fixed {
				padding: 46rpx 30rpx 0 30rpx;
			}
		}

		.u-demo-block__content {
			color: #333;
			font-weight: 400;
			font-size: 29rpx;
		}

		.btn {
			height: 96rpx;
			line-height: 96rpx;
			text-align: center;
			background: #EFC562;
			border-radius: 48rpx;
			font-weight: 600;
			font-size: 31rpx;
			color: #282319;
			margin: 0rpx auto 46rpx auto;
			width: calc(100% - 40rpx);
			box-sizing: border-box;
		}

		.mask {
			box-sizing: border-box;

			.inner {
				width: calc(100% - 96rpx);
				position: absolute;
				top: 15%;
				left: 50%;
				transform: translateX(-50%);

				.close {
					position: absolute;
					top: -56rpx;
					right: 0;

					image {
						width: 50rpx;
					}
				}

				// &.haibao {
				// 	.close {
				// 		top: 6rpx;
				// 		right: 6rpx;
				// 	}
				// }
				&.friend {
					image {
						width: 400rpx;
						float: right;
					}
				}

				&.method {
					height: 800rpx;
					background: url($back-ground-url+'/worker/share_bg.png') no-repeat;
					background-size: 100% 100%;

					.cost {
						position: absolute;
						top: 31%;
						left: 50%;
						transform: translateX(-50%);
						/* 创建一个水平方向的颜色渐变 */
						background: linear-gradient(90deg, #FE5531 0%, #FF1945 100%);
						/* 将文本透明度设置为0，以便背景渐变可见 */
						color: transparent;
						/* 使用背景渐变来填充文本背景 */
						-webkit-background-clip: text;
						background-clip: text;
						font-weight: 600;
						font-size: 63rpx;


						.count {
							font-weight: 900;
							font-size: 130rpx;
							font-family: "也字工厂";
						}
					}

					&>image {
						position: absolute;
						height: 40rpx;
						top: 57%;
						left: 50%;
						transform: translateX(-50%);
					}

					.bot {
						padding-top: 180rpx;
						box-sizing: border-box;
						position: absolute;
						bottom: 0;
						left: 0;
						width: 100%;
						height: 300rpx;
						background: url($back-ground-url+'/worker/share_bg2.png') no-repeat;
						background-size: 100% 100%;
					}
				}
			}
		}
	}
</style>