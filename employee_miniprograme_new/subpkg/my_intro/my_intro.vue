<template>
	<view class="content">
		<!-- <customHeader :title="pageName" :showBack="true" :headHeight="headerHeight"></customHeader> -->
		<!-- #ifdef MP-WEIXIN || MP-KUAISHOU -->
		<view class="custom_header" :style="{height:headerHeight+'px'}">
			<view class="title" :style="{lineHeight:titleHeight+'px',height:titleHeight+'px',top:headerTop+'px'}">
				<view class="back" @click="save">
					<image :src="imgUrl+'/broker/back.png'" mode=""></image>
				</view>
				<view class="text">{{pageName}}</view>
			</view>
		</view>
		<!-- #endif -->
		<view class="box" :style="{top:marginTop+tabMargin+'px'}">
			<scroll-view scroll-y="true" :style="{height:scrollHeight+'px'}">
				<view class="text_area">
					<textarea v-model="content" placeholder="请输入自我介绍,限300字" maxlength="300" />
					<view class="count">{{content.length}} <text>/300</text></view>
				</view>
			</scroll-view>
		</view>
		<view class="btns flex flex_btween" :style="{bottom:2*tabMargin+'px'}">
			<view class="btn save" :style="{width:(showRecord || showSetting)?'48%':'100%'}" v-if="content.length"
				@click="save">保存
			</view>
			<view class="btn in_put" :style="{width:content.length?'48%':'100%'}" @touchstart="startRecord"
				@touchend="stopRecord" v-if="showRecord">{{content.length?"继续长按录入":"长按语音录入"}}
			</view>
			<view class="btn in_put" :style="{width:content.length?'48%':'100%'}" v-if="showSetting"
				@click="openSetting">开启语音录入权限</view>
		</view>
		<view class="inputing" v-if="showInputing">
			<image :src="imgUrl+'/worker/inputing.gif'" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	import customHeader from "@/components/custom_header.vue"
	// #ifdef MP-WEIXIN
	const plugin = requirePlugin("WechatSI")
	let manager = plugin.getRecordRecognitionManager()
	// #endif
	const app = getApp()
	export default {
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				btnHeight: app.globalData.btnHeight,
				pageName: "自我介绍",
				headerHeight: app.globalData.topHeight,
				scrollHeight: 0,
				content: "",
				showInputing: false,
				titleHeight: 0,
				headerTop: 0,
				showRecord: false,
				showSetting: false
			}
		},
		components: {
			customHeader
		},
		onLoad(param) {
			if (param.msg) {
				this.content = decodeURI(param.msg)
			}
			let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			this.titleHeight = menuButtonInfo.height
			this.headerTop = menuButtonInfo.top
			this.scrollHeight = app.globalData.systemHeight - this.marginTop - this.tabMargin - 2 * this.btnHeight
			this.initRecord()

		},
		onShow() {
			let _this = this
			uni.authorize({
				scope: 'scope.record',
				success(res) {
					_this.showRecord = true
					console.log(res, 'success')
				},
				fail(err) {
					_this.showRecord = false
					_this.showSetting = true
					console.log(err, 'err')
				}
			})
		},
		methods: {
			openSetting() {
				let _this = this
				uni.openSetting({
					success(res) {
						console.log(res.authSetting)
						if (res.authSetting['scope.record']) {
							_this.showSetting = false
							_this.showRecord = true
						}
					},
					fail(openErr) {
						console.log(openErr, 'openerr')
					}
				});
			},
			initRecord: function() {
				manager.onStart = res => {
					this.showInputing = true
				};
				//有新的识别内容返回，则会调用此事件  
				manager.onRecognize = (res) => {
					uni.hideLoading()
					this.content += res.result;
				}

				// 识别结束事件  
				manager.onStop = (res) => {
					console.log(res.result)
					this.content += res.result;
					this.showInputing = false
					uni.hideLoading()
				}
				// 识别出错
				manager.onError = (res) => {
					console.log(res, "err")
					let errMsg = ""
					switch (res.retcode) {
						case -30003:
							errMsg = "未获取到录音数据，请尽可能提高音量。";
							break;
						case -30006:
							errMsg = "录音识别超时，请重试。";
							break;
						case -30008:
							errMsg = "网络链接失败，请重试。";
							break;
						case -30004:
							errMsg = "未识别到结果，请尽可能提高音量。";
							break;
						case -40001:
							errMsg = "达到接口调用频率限制，请联系管理员。";
							break;
						default:
							errMsg = "录音功能出错，请联系管理员。"
							break;
					}
					uni.hideLoading()
					uni.showModal({
						title: errMsg,
						showCancel: false
					})
				}
			},
			startRecord: function() {
				this.showInputing = true
				manager.start({
					duration: 60000,
					lang: "zh_CN"
				});
			},
			stopRecord: function() {
				this.showInputing = false
				uni.showLoading({
					title: "识别中，请稍后"
				})
				manager.stop();
			},
			save() {
				// let msg = encodeURI(this.content)
				let pages = getCurrentPages(); // 当前页页⾯实例
				let nowPage = pages[pages.length - 1]; //当前页⾯实例
				let prevPage = pages[pages.length - 2]; // 上一页面实例
				// 需要返回 上一页的数据 Object
				let backMsg = {
					msg: this.content
				};

				prevPage.$vm.prevDateFun(backMsg) // 调用上一页 定义的方法

				// 返回 上一页
				uni.navigateBack({
					delta: 1 // 可以不写，默认值为 1
				})

				// uni.redirectTo({
				// 	url: "/subpkg/my_resume/my_resume?msg=" + msg
				// })
			}
		}
	}
</script>

<style lang="scss">
	.custom_header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background: url($back-ground-url+"/worker/top_header_bg3.png") no-repeat;
		background-size: 100% 100%;
		overflow: hidden;
		z-index: 2;

		image {
			will-change: transform
		}

		&>image {
			width: 100%;
			// position: fixed;
			// top:0;
			// left:0;
			// z-index:3;
		}

		.title {
			text-align: center;
			color: #fff;
			font-size: 32rpx;
			position: fixed;
			font-weight: bold;
			width: 100%;
			z-index: 10;

			.back {
				position: absolute;
				left: 40rpx;
				top: 50%;
				transform: translateY(-50%);
				width: 44rpx;
				height: 44rpx;

				image {
					width: 44rpx;
					height: 44rpx;
				}
			}
		}
	}

	.inputing {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 15;
		width: 80%;

		image {
			width: 100%;
		}
	}

	.box {
		position: fixed;
		width: calc(100% - 92rpx);
		left: 46rpx;
		z-index: 10;
		background: #fff;
		border-radius: 16rpx;

		.text_area {
			height: 100%;
			padding: 40rpx;
			box-sizing: border-box;
			position: relative;

			.count {
				position: absolute;
				bottom: 20rpx;
				right: 40rpx;
				font-size: 27rpx;
				color: #216FF9;

				text {
					color: #5A5A5A;
				}
			}

			textarea {
				width: 100%;
				height: 100%;
				font-weight: 400;
				font-size: 27rpx;
				color: #5A5A5A;
				line-height: 54rpx;
			}
		}
	}

	.btns {
		position: fixed;
		width: calc(100% - 92rpx);
		left: 46rpx;
		z-index: 10;

		.btn {
			width: 48%;
			height: 84rpx;
			line-height: 84rpx;
			text-align: center;
			background: linear-gradient(180deg, #FFDB01 0%, #F77A0B 100%);
			box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
			color: #fff;
			border: none;
			border-radius: 15rpx;
			// border: 2rpx solid #216FF9;
			font-weight: 600;
			font-size: 29rpx;
			color: #FFFFFF;
		}
	}
</style>