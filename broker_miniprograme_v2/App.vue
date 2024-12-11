<script>
	import bank_cardVue from "./subpkg/bank_card/bank_card.vue";
	import urlSetting from "./url_setting";
	export default {
		globalData: {
			baseUrl: urlSetting.urls.apiUrl, //测试环境,接口域名
			baseImageUrl: urlSetting.urls.imageUrl, //测试环境，静态资源域名
			qqMapKey: urlSetting.urls.mapKey,
			highTopHeight: 0,
			topHeight: 0,
			mainTabHeight: 0,
			subTabHeight: 0,
			tabMargin: 0,
			marginTop: 0,
			tabbarHeight: 0,
			systemHeight: 0,
			commiCardHeight: 0,
			mineCardHeight: 0,
			mineTop: 0,
			btnBottom: 0,
			detailTitleHeight: 0,
			getTop: 0,
			getBottomHeight: 0,
			loginHeadHeight: 0,
			loginAreaTop: 0,
			bannerHeight: 0,
			timer: null,
			timer2: null,
			showPubTabbar: false,
			count: 0
		},

		async onLaunch() {
			console.log('App Launch')
			// 版本更新提示
			const updateManager = uni.getUpdateManager();
			updateManager.onCheckForUpdate(function(res) {
				// console.log('res==>', res);
				// 请求完新版本信息的回调
				if (res.hasUpdate) {
					updateManager.onUpdateReady(function(res1) {
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
			updateManager.onUpdateFailed(function(res) {
				// 新的版本下载失败
				uni.showModal({
					title: '已经有新版本了哟~',
					content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
				});
			});

			// 计算两个topHeight的高度
			let systemInfo = uni.getSystemInfoSync()
			this.globalData.systemHeight = systemInfo.screenHeight
			let highPercent = 292 / 844
			let percent = 200 / 844
			this.globalData.highTopHeight = Math.floor(systemInfo.screenHeight * highPercent)
			this.globalData.topHeight = Math.floor(systemInfo.screenHeight * percent)
			// 计算tab高度
			let mainTabPercent = 60 / 844
			let subTabPercent = 44 / 844
			this.globalData.mainTabHeight = Math.floor(systemInfo.screenHeight * mainTabPercent) >= 55 ?
				Math.floor(
					systemInfo.screenHeight * mainTabPercent) : 55
			this.globalData.subTabHeight = Math.floor(systemInfo.screenHeight * subTabPercent) >= 40 ? Math
				.floor(
					systemInfo.screenHeight * subTabPercent) : 40
			// 计算tab之间的margin
			let marginPercent = 10 / 844
			this.globalData.tabMargin = Math.floor(systemInfo.screenHeight * marginPercent)
			// 计算胶囊底部到顶部的距离
			let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			this.globalData.marginTop = menuButtonInfo.height + menuButtonInfo.top
			// 计算tabbar的高度
			this.globalData.tabbarHeight = Math.floor(systemInfo.screenHeight * (46 / 844))
			console.log(this.globalData.systemHeight, this.globalData.tabbarHeight)
			// 计算佣金统计部分高度
			this.globalData.commiCardHeight = Math.floor(systemInfo.screenHeight * (161 / 844))
			// 计算个人中心顶部高度
			this.globalData.mineCardHeight = Math.floor(systemInfo.screenHeight * (174 / 844))
			this.globalData.mineTop = Math.floor(systemInfo.screenHeight * (99 / 844))
			// 计算详情页面按钮安全距离
			this.globalData.btnBottom = Math.floor(systemInfo.screenHeight * (30 / 844))
			this.globalData.detailTitleHeight = Math.floor(systemInfo.screenHeight * (40 / 844)) >= 35 ?
				Math.floor(
					systemInfo.screenHeight * (40 / 844)) : 35
			// 计算我要接单页面顶部距离
			this.globalData.getTop = Math.floor(systemInfo.screenHeight * (67 / 844))
			this.globalData.getBottomHeight = Math.floor(systemInfo.screenHeight * (226 / 844))
			//计算登录页高度
			this.globalData.loginHeadHeight = Math.floor(systemInfo.screenHeight * (292 / 844))
			this.globalData.loginAreaTop = Math.floor(systemInfo.screenHeight * (218 / 844))
			this.globalData.bannerHeight = Math.floor(systemInfo.screenHeight * (100 / 844))
			if (this.isLogin()) {
				this.globalData.showPubTabbar = await this.queryPubStatus()
				console.log(this.globalData.showPubTabbar, "!!!!")
			}
		},
		onShow() {
			console.log('App Show')

			uni.hideTabBar()
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			watch: function(method) {
				var obj = this.globalData;
				Object.defineProperty(obj, "count", {
					configurable: true,
					enumerable: true,
					set: function(value) {
						method(value);
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	@import "@/uni_modules/uview-ui/index.scss";

	.salary_place {
		color: #909399;
		font-size: 29rpx;
		font-weight: 400 !important;
	}

	/*每个页面公共css */
	.content {
		// padding:30rpx;
		box-sizing: border-box;
		font-size: 32rpx;
		min-height: 100vh;
		color: #333;
		background: #F3F3F5;
		font-family: PingFang SC-Regular, PingFang SC;

		image {
			will-change: transform;
		}

		.cont {
			padding: 0 46rpx;
			z-index: 2;
			position: relative;
			// overflow: hidden;
			// max-height: calc(100vh - 338px);
			// overflow: scroll;
		}
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
		color: #F7BB05;
	}

	.blue {
		color: #3780FF;
	}

	.green {
		color: #34A752;
	}

	.bold {
		font-weight: bold;
	}

	.subtabs {
		background: #fff;
		border-radius: 16rpx;
		position: relative;
		padding: 8rpx;
		box-sizing: border-box;

		.subtab {
			width: 50%;
			height: 100%;
			text-align: center;
			position: relative;
			font-size: 30rpx;

			// &:not(:first-child)::after {
			// 	content: "";
			// 	width: 1px;
			// 	height: 30rpx;
			// 	background: #DFDFDF;
			// 	position: absolute;
			// 	top: 50%;
			// 	left: 0;
			// 	transform: translateY(-50%);
			// }

			&.active {
				background: #F7BC05;
				border-radius: 12rpx;
				color: #fff;
				font-weight: bold;
			}
		}
	}

	.empty {
		width: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;

		image {
			width: 85% !important;
			height: auto;
		}
	}

	::-webkit-scrollbar {
		width: 0upx !important;
		height: 0upx !important;

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