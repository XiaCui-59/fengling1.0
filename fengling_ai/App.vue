<script>
	import urlSetting from "./url_setting";
	export default {
		globalData: {
			wssUrl: urlSetting.urls.wssUrl,
			baseUrl: urlSetting.urls.apiUrl, //测试环境,接口域名
			baseImageUrl: urlSetting.urls.imageUrl, //测试环境，静态资源域名
			qqMapKey: urlSetting.urls.qqMapKey,
			highTopHeight: 0,
			topHeight: 0,
			subTabHeight: 0,
			tabMargin: 0,
			marginTop: 0,
			tabbarHeight: 0,
			systemHeight: 0,
			mineCardHeight: 0,
			mineTop: 0,
			btnBottom: 0,
			detailTitleHeight: 0,
			getTop: 0,
			getBottomHeight: 0,
			avatarHeight: 0,
			codeHeight: 0,
			btnHeight: 0,
			loginHeadHeight: 0,
			loginAreaTop: 0,
			bannerHeight: 0,
			scene: 0,
			menuButtonInfo: {},
			statusBarHeight: 0,
			socketTask: null,
			Audio: uni.createInnerAudioContext(),
			manager: uni.getRecorderManager(),
		},
		watch: {
			showAnswering(newVal) {
				this.globalData.showAnswering = newVal
			}
		},
		async onLaunch(params) {
			uni.setNavigationBarColor({
				frontColor: '#000000',
				backgroundColor: 'transparent'
			})
			// 设置屏幕常亮不息屏
			uni.setKeepScreenOn({
				keepScreenOn: true
			});

			this.globalData.scene = params.scene
			uni.hideTabBar()
			// 版本更新提示
			if (params.scene != 1154) {
				const updateManager = uni.getUpdateManager();
				updateManager.onCheckForUpdate(res => {
					// console.log('res==>', res);
					// 请求完新版本信息的回调
					if (res.hasUpdate) {
						updateManager.onUpdateReady(res2 => {
							uni.showModal({
								title: '更新提示',
								content: '小程序有新的版本，请更新后使用哟~',
								showCancel: false,
								success(res2) {
									if (res2.confirm) {
										// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
										updateManager.applyUpdate();
									}
								}
							});
						});
					}
				});
				updateManager.onUpdateFailed(res => {
					// 新的版本下载失败
					uni.showModal({
						title: '已经有新版本了哟~',
						content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
					});
				});
			}


			// 计算两个topHeight的高度
			let systemInfo = uni.getSystemInfoSync()
			this.globalData.statusBarHeight = systemInfo.statusBarHeight
			// #ifdef MP-WEIXIN || MP-KUAISHOU
			this.globalData.systemHeight = systemInfo.screenHeight
			// #endif
			// #ifdef MP-TOUTIAO
			this.globalData.systemHeight = systemInfo.windowHeight
			// #endif
			let highPercent = 230 / 844
			let percent = 170 / 844
			this.globalData.highTopHeight = Math.floor(systemInfo.screenHeight * highPercent)
			this.globalData.topHeight = Math.floor(systemInfo.screenHeight * percent)
			// 计算tab高度
			let subTabPercent = 58 / 844
			this.globalData.subTabHeight = Math.floor(systemInfo.screenHeight * subTabPercent)
			// 计算tab之间的margin
			let marginPercent = 10 / 844
			this.globalData.tabMargin = Math.floor(systemInfo.screenHeight * marginPercent)
			// 计算胶囊底部到顶部的距离
			this.globalData.menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			// #ifdef MP-WEIXIN || MP-KUAISHOU
			this.globalData.marginTop = this.globalData.menuButtonInfo.height + this.globalData.menuButtonInfo.top
			// #endif
			// 计算tabbar的高度
			this.globalData.tabbarHeight = Math.floor(systemInfo.screenHeight * (46 / 844))
			console.log(this.globalData.systemHeight, this.globalData.tabbarHeight)
			// 计算个人中心顶部高度
			this.globalData.mineCardHeight = Math.floor(systemInfo.screenHeight * (174 / 844))
			this.globalData.mineTop = Math.floor(systemInfo.screenHeight * (200 / 844))
			this.globalData.avatarHeight = Math.floor(systemInfo.screenHeight * (56 / 844))
			// 计算详情页面按钮安全距离
			this.globalData.btnBottom = Math.floor(systemInfo.screenHeight * (30 / 844))
			this.globalData.detailTitleHeight = Math.floor(systemInfo.screenHeight * (40 / 844))
			this.globalData.codeHeight = Math.floor(systemInfo.screenHeight * (360 / 844))
			// 计算我要报名页面顶部距离
			this.globalData.getTop = Math.floor(systemInfo.screenHeight * (67 / 844))
			this.globalData.getBottomHeight = Math.floor(systemInfo.screenHeight * (226 / 844))
			this.globalData.btnHeight = Math.floor(systemInfo.screenHeight * (50 / 844))
			//计算登录页高度
			this.globalData.loginHeadHeight = Math.floor(systemInfo.screenHeight * (292 / 844))
			this.globalData.loginAreaTop = Math.floor(systemInfo.screenHeight * (218 / 844))
			this.globalData.bannerHeight = Math.floor(systemInfo.screenHeight * (100 / 844))
			if (this.isLogin()) {
				this.globalData.showPubTabbar = await this.queryPubStatus()
				console.log(this.globalData.showPubTabbar, "!!!!")
			}
		},
		onShow: function() {
			console.log('App Show')
			// #ifdef MP-WEIXIN || MP-KUAISHOU
			uni.hideTabBar()
			// #endif
		},
		onHide: function() {
			console.log('App Hide')
		},
		onUnload() {
			this.globalData.Audio.destroy()
		}
	}
</script>

<style lang="scss">
	@font-face {
		font-family: '也字工厂';
		src: url('https://static.test.swiftwd.com/font/YeZiGongChangTangYingHei.ttf') format('truetype');
	}

	@import "@/uni_modules/uview-ui/index.scss";

	::-webkit-scrollbar {
		width: 0upx !important;
		height: 0upx !important;

	}

	/*每个页面公共css */
	.single_page {
		width: 100%;
		height: 100vh;

		image {
			margin-top: 40rpx;
		}

	}

	.body_bg {
		background: url($back-ground-url+"/worker/new/chat_bg.png") no-repeat;
		background-size: cover;
	}

	.content_body {
		// padding:30rpx;
		box-sizing: border-box;
		font-size: 32rpx;
		min-height: 100vh;
		color: #333;
		// background: #F3F3F5;
		font-family: PingFang SC-Regular, PingFang SC;

		image {
			will-change: transform;
		}
	}

	::-webkit-scrollbar {
		width: 0upx !important;
		height: 0upx !important;

	}

	.flex {
		display: flex;
		align-items: center;
	}

	.flex_start {
		justify-content: flex-start;
	}

	.flex_end {
		justify-content: flex-end;
	}

	.flex_btween {
		justify-content: space-between;
	}

	.flex_around {
		justify-content: space-around;
	}

	.disable {
		color: #bdbdbd;
	}

	.yellow {
		color: #FFA800;
	}

	.blue {
		color: #3780FF;
	}

	.bold {
		font-weight: bold;
	}

	.top_area {
		position: fixed;
		width: calc(100% - 80rpx);
		left: 40rpx;
	}

	.empty {
		width: 60%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;

		image {
			width: 85% !important;
		}
	}

	.mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 100;
	}
</style>