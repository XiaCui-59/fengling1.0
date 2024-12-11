<template>
	<view class="ai_wrap">
		<view class="ai_chat">
			<view class="ai_inner" :style="{height:showFullScreen?'100%':'80%'}" v-if="!showWanner && !showReAuth">
				<view class="full_header" :style="{height:marginTop+tabMargin+'px'}" v-if="showFullScreen">
					<view class="page_top flex"
						:style="{lineHeight:titleHeight+'px',height:titleHeight+'px',bottom:tabMargin+'px'}">
						<view class="page_tit">
							风铃AI
						</view>
						<image
							:src="enableSpeeking?imgUrl+'/worker/ic_voice_white.png':imgUrl+'/worker/ic_voice_mute_white.png'"
							mode="widthFix" @click="openSeepking" style="margin-left: 10rpx;"></image>
					</view>

				</view>
				<!-- 聊天框 -->
				<scroll-view class="chat_wrap" :scroll-into-view="scrollView"
					:style="{height:scrollHeight+'px',marginTop:marginTop+tabMargin+'px'}" :scroll-y="true"
					id="chatwrap" @scrolltoupper="getMoreHistory">
					<!-- 历史记录 -->
					<view class="history list">
						<view class="qa_item" v-for="(item,index) in historyList" :key="item.id" :id="'his'+index">
							<view class="line" :class="item.origin == 'customer'?'right':'left'">
								<view class="inline_box flex">
									<image v-if="item.origin != 'customer'" :src="imgUrl+'/worker/yoyo_avatar.png'"
										mode="widthFix"></image>
									<view class="cont">
										<text>{{item.content.replace(/\\n/g,"\n")}}</text>
									</view>
									<image v-if="item.origin == 'customer'" :src="imgUrl+'/worker/user_avatar.png'"
										mode="widthFix" style="margin-left:20rpx;margin-right: 0;width:60rpx;">
									</image>
								</view>
							</view>
						</view>
					</view>
					<view class="list" id="listWrap">
						<view class="qa_item" v-for="(item,index) in qaList" :key="item.id" :id="'qa'+index">
							<view class="line" :class="item.origin == 'customer'?'right':'left'">
								<view class="inline_box flex">
									<image v-if="item.origin != 'customer'" :src="imgUrl+'/worker/yoyo_avatar.png'"
										mode="widthFix"></image>
									<view class="cont">
										<text>{{item.content.replace(/\\n/g,"\n")}}</text>
									</view>
									<image v-if="item.origin == 'customer'" :src="imgUrl+'/worker/user_avatar.png'"
										mode="widthFix" style="margin-left:20rpx;margin-right: 0;width:60rpx;">
									</image>
								</view>
							</view>
						</view>
						<transition name="fade">
							<view class="qa_item" v-if="showAnswering">
								<view class="line left">
									<view class="inline_box flex" style="align-items: center;">
										<image :src="imgUrl+'/worker/yoyo_avatar.png'" mode="widthFix"></image>
										<view class="cont" style="background:transparent;">
											<image :src="imgUrl+'/worker/answering.gif'" mode="widthFix"
												style="width:100rpx;"></image>
										</view>
									</view>
								</view>
							</view>
						</transition>
						<view :id="hold" style="height:10rpx;width:100%;"></view>
					</view>
				</scroll-view>

				<!-- 提问框 -->
				<view class="ques_wrap" :style="{paddingTop:tabMargin+'px',bottom:inputHeight?inputHeight+'px':'auto'}"
					:class="inputHeight?'upper':''">
					<view class="input flex flex_btween" v-if="!showRecord">
						<image :src="imgUrl+'/worker/chat_record_icon.png'" @tap="toVoice">
						</image>
						<view class="input_right flex">
							<input type="text" :adjust-position="false" :placeholder="placeHolder" v-model="ques"
								confirm-type="send" @focus="inputBindFocus" @confirm="doSend"
								:style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px'}">
							<view class="confirm_send" @tap="sendQuestion">发送</view>
						</view>
					</view>
					<view class="input flex flex_btween" v-if="showRecord">
						<image :src="imgUrl+'/worker/chat_key_icon.png'" @click="toInput">
						</image>
						<view class="btn in_put press" v-if="showSetting"
							:style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px'}" @click="openSetting">开启语音权限
						</view>
						<view class="btn in_put press" :style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px'}"
							@touchstart="startRecord" @touchend="stopRecord" @touchmove="handleTouchMove"
							v-if="!showSetting">
							按住说话
						</view>
					</view>

				</view>
			</view>
			<view class="inputing" v-show="showInputing">
				<image :src="imgUrl+'/worker/inputing.gif'" mode="widthFix"></image>
				<text>{{secondText}}</text>
				<view class="bot_bg">
					<view class="text" v-if="cancelRecord">松开 取消</view>
					<image :src="cancelRecord?imgUrl+'/worker/cancel_sure_icon.png':imgUrl+'/worker/cancel_icon.png'"
						mode="widthFix" style="width: 140rpx;" class="cancel_icon"></image>
					<view class="text" :style="{opacity:cancelRecord?0:1}">松开 发送</view>
					<image :src="cancelRecord?imgUrl+'/worker/cancel_bot_bg.png':imgUrl+'/worker/input_bot_bg.png'"
						mode="widthFix"></image>
				</view>
			</view>
			<view class="auth flex flex_btween" v-if="showReAuth">
				<view class="btn no" @click="noPosition">不开启</view>
				<view class="btn sure" @click="openSetting">开启定位，推荐适合您的职位</view>
			</view>
		</view>
	</view>
</template>

<script>
	// #ifdef MP-WEIXIN
	const plugin = requirePlugin("WechatSI")
	let manager = plugin.getRecordRecognitionManager()
	// #endif
	import urlSetting from "@/url_setting";
	import qqmapsdk from "@/utils/qqmap-wx-jssdk.min.js";
	const app = getApp();
	export default {
		data() {
			return {
				showLogin: false,
				historyId: 0,
				loadAllHistory: false,
				showReAuth: false,
				imgUrl: app.globalData.baseImageUrl,
				scrollView: "",
				gender: [{
					value: "male",
					text: "男"
				}, {
					value: "female",
					text: "女"
				}],
				currentGender: 0,
				age: "",
				ques: "",
				hold: "h1",
				qaList: [],
				socketOpen: false,
				socketMsgQueue: [],
				answerMsg: "",
				canSend: true,
				placeHolder: "想了解什么工作，请告诉我吧",
				qaListLen: 0,
				historyList: [],
				appInfo: {},
				scroll: 0,
				chatShareId: 0,
				timeShareId: 0,
				header: {},
				sid: 0,
				connected: false,
				connecting: false,
				socketTask: false,
				num: 1,
				curStrIndex: 0,
				curText: "",
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				scrollHeight: 0,
				scrollHeight2: 0,
				subTabHeight: app.globalData.subTabHeight,
				showVoice: false,
				showRecord: true,
				showChat: false,
				showFullScreen: true,
				showWanner: false,
				cityData: [],
				city1: "",
				city2: "",
				city3: "",
				cityArr: [],
				typeTags: [],
				seleTypeIds: [],
				selectType: [],
				open_id: "",
				getPhoneData: {},
				showInputing: false,
				recordContent: "",
				enableSpeeking: false,
				timer: null,
				currentSiging: {},
				showSetting: false,
				openid: "",
				startPoint: {}, //记录长按录音开始点信息,用于后面计算滑动距离。
				cancelRecord: false,
				titleHeight: 0,
				showAnswering: false,
				inputHeight: 0,
				recordSecond: 0,
				secondText: "00:00",
				secondTimer: null,
				cancelIconLeft: 0,
				cancelIconRight: 0,
				cancelIconBottom: 0,
				cancelIconTop: 0,
			}
		},
		onShareAppMessage() {
			return {
				title: "风铃AI",
				content: "海量岗位，等你来",
				path: "/pages/index/index",
				imageUrl: app.globalData.baseImageUrl + "/worker/logo.png"
			}
		},
		onShareTimeline() {
			return {
				title: "风铃AI",
				content: "海量岗位，等你来",
				path: "/pages/index/index",
				imageUrl: app.globalData.baseImageUrl + "/worker/logo.png"
			}
		},
		async onLoad(param) {
			var _this = this;
			this.scrollHeight = app.globalData.systemHeight - 4 * this.tabMargin - this.subTabHeight - this
				.marginTop
			this.scrollHeight2 = app.globalData.systemHeight - 1 * this.subTabHeight
			this.openid = await this.getOpenId()
			let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			this.titleHeight = menuButtonInfo.height
			uni.onKeyboardHeightChange(res => {
				console.log(res.height, "键盘高度变化")
				if (res.height == 0) {
					this.inputHeight = 0
				}
			})
			this.getHistory()
			this.showAichat()
			// this.getCitys()
			// setTimeout(function() {
			// 	if (!_this.showChat) {
			// 		_this.showAichat()
			// 	}
			// }, 10000)
		},
		onUnload() {
			// let _this = this
			// clearInterval(_this.timer)
			this.close()
		},
		mounted() {
			// this.getIconPosition()
		},
		methods: {
			getOpenId() {
				let _this = this
				return new Promise(resolve => {
					uni.login({
						success: (res) => {
							console.log(res, "dyres")
							if (res.errMsg == 'login:ok') {
								let url = ""
								let data = {
									code: res.code
								}
								// #ifdef MP-WEIXIN
								url = "/auth/worker/wechat/mini/openid"
								// #endif
								// #ifdef MP-KUAISHOU
								url = "/auth/worker/kuaishou/openid"
								// #endif
								// #ifdef MP-TOUTIAO
								url = "/auth/worker/douyin/openid"
								data.anonymous_code = res.anonymousCode
								// #endif
								this.$request(url, data, "POST").then(resp => {
									if (resp.code == 0) {
										uni.setStorage({
											key: "openid",
											data: resp.data.open_id
										})
										resolve(resp.data.open_id)
									}
								})
							}
						},
						fail(err) {
							console.log(err, "接口调用失败")
							// uni.showModal({
							// 	title: "登录失败",
							// 	content: "授权登录失败，将无法使用部分功能",
							// 	showCancel: false
							// })
						}
					});
				})
			},
			getIconPosition() {
				let _this = this
				const query = uni.createSelectorQuery().in(_this);
				query.select('.cancel_icon').boundingClientRect(data => {
					console.log("querydata", data)
					if (data) {
						console.log('元素的位置信息：', data);
						_this.cancelIconTop = data.top
						_this.cancelIconBottom = data.top + data.width
						_this.cancelIconLeft = data.left
						_this.cancelIconRight = data.right
					}
				}).exec();

			},
			keyboardHeightChange(e) {
				console.log(e, "键盘")
			},
			inputBindFocus(e) {
				if (e.detail.height) {
					this.inputHeight = e.detail.height //这个高度就是软键盘的高度
				}
			},
			// 录音计时
			startCount() {
				let _this = this
				this.secondTimer = setInterval(function() {
					if (_this.recordSecond < 60) {
						_this.recordSecond++
						if (_this.recordSecond < 10) {
							_this.secondText = "00:0" + _this.recordSecond
						} else {
							_this.secondText = "00:" + _this.recordSecond
						}
					} else {
						clearInterval(_this.secondTimer)
						uni.showToast({
							title: "最多发送60s",
							duration: 3000,
							icon: "none"
						})
						_this.stopRecord()
					}
				}, 1000)
			},
			handleTouchMove(e) {
				// var moveLenght = e.touches[e.touches.length - 1].clientY - this.startPoint.clientY; //移动距离
				// if (Math.abs(moveLenght) > 70) {
				// 	this.stopRecord()
				// 	this.cancelRecord = true
				// 	console.log("cancelRecord", this.cancelRecord)
				// }

				let exp1 = (e.touches[e.touches.length - 1].clientX > this.cancelIconLeft) && (e.touches[e.touches.length -
					1].clientX < this.cancelIconRight)
				let exp2 = (e.touches[e.touches.length - 1].clientY > this.cancelIconTop) && (e.touches[e.touches.length -
					1].clientY < this.cancelIconBottom)
				if (exp1 && exp2) {
					this.cancelRecord = true
				} else {
					this.cancelRecord = false
				}
			},
			back() {
				uni.navigateBack()
			},
			// getSetting() {
			// 	let _this = this
			// 	uni.getSetting({
			// 		success(res) {
			// 			console.log(res.authSetting, "getSetting")
			// 			if (!res.authSetting['scope.userLocation']) {
			// 				_this.showReAuth = true
			// 				let data = {
			// 					content: "",
			// 					origin: "customer"
			// 				}
			// 				_this.send(data)
			// 			} else {
			// 				_this.getLocation()
			// 			}
			// 		}
			// 	})
			// },
			closeLogin() {
				this.showLogin = false
			},
			openSetting() {
				let _this = this
				uni.openSetting({
					success(res) {
						console.log(res.authSetting, "res.authSetting")
						if (res.authSetting['scope.record']) {
							// _this.showInputing = false
							_this.showSetting = false
							// _this.showRecord = true
						}
					},
					fail(openErr) {
						console.log(openErr, 'openerr')
					},
					complete() {
						this.showReAuth = false
					}
				});
			},
			initRecord: function() {
				manager.onStart = res => {
					this.recordContent = ""
					this.showInputing = true
					this.startCount()
					this.getIconPosition()
				};
				//有新的识别内容返回，则会调用此事件  
				manager.onRecognize = (res) => {
					this.recordContent += res.result;
				}

				// 识别结束事件  
				manager.onStop = (res) => {
					uni.hideLoading()
					this.recordContent += res.result;
					this.showInputing = false
					let data = {
						content: this.recordContent,
						origin: "customer",
					}
					console.log(data)
					console.log(this.cancelRecord)
					this.recordSecond = 0
					this.secondText = "00:00"
					clearInterval(this.secondTimer)
					if (!this.cancelRecord) {
						this.send(data)
					} else {
						this.cancelRecord = false
					}

				}
				// 识别出错
				manager.onError = (res) => {
					console.log(res, "err")
					this.cancelRecord = false
					this.showInputing = false
					this.recordSecond = 0
					this.secondText = "00:00"
					clearInterval(this.secondTimer)
					uni.hideLoading()
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

					// uni.showModal({
					// 	title: errMsg,
					// 	showCancel: false
					// })
				}
			},
			startRecord(e) {
				this.startPoint = e.touches[0]; //记录长按时开始点信息，后面用于计算上划取消时手指滑动的距离。
				this.showInputing = true
				this.cancelRecord = false
				manager.start({
					duration: 60000,
					lang: "zh_CN"
				});

			},
			stopRecord: function() {
				clearInterval(this.secondTimer)
				this.showInputing = false
				if (!this.cancelRecord) {
					uni.showLoading({
						title: "正在取消"
					})

				}
				manager.stop();
			},
			chooseWork(obj, item) {
				console.log(obj, item)
			},
			// changeScreen() {
			// 	this.showFullScreen = !this.showFullScreen
			// 	if (this.showFullScreen) {
			// 		this.scrollHeight = app.globalData.systemHeight - 2 * this.subTabHeight -
			// 			2 * this.tabMargin - this.marginTop
			// 	} else {
			// 		this.scrollHeight = app.globalData.systemHeight * 0.8 - this.tabMargin - 2 * this
			// 			.subTabHeight
			// 	}
			// },
			async showAichat() {
				this.historyId = 0
				this.historyList = []
				this.loadAllHistory = false
				this.qaList = []
				let _this = this
				uni.authorize({
					scope: 'scope.record',
					success(res) {
						console.log(res, 'success')
					},
					fail(err) {
						_this.showSetting = true
						console.log(err, 'err')
					}
				})
				this.historyList = await this.getHistory()
				this.toScroll()
				this.creatConnect()
				this.initRecord()
				this.showChat = true


			},
			openSeepking() {
				this.enableSpeeking = !this.enableSpeeking
			},
			closeAichat() {
				this.showChat = false
				this.historyId = 0
				this.enableSpeeking = false
				wx.stopBackgroundAudio()
				this.close()
			},
			toInput() {
				this.showRecord = false
			},
			toVoice() {
				this.showRecord = true
			},
			doSend(e, text) {
				// console.log(text);
				if (e.ctrlKey && e.keyCode === 13) {
					//用户点击了ctrl+enter触发
					this.ques += '\n';
				} else {
					//用户点击了enter触发    执行一些逻辑方法
					if (e !== undefined) {
						//发送消息的方法
						this.sendQuestion();
						// 阻止浏览器默认的敲击回车换行的方法
						e.preventDefault();
					}
				}
			},
			getLocation() {
				let _this = this
				uni.getLocation({
					success: function(res) {
						_this.reverseGeocodingClick(res.latitude, res.longitude)
					},
					fail(err) {
						console.error('定位失败', err);
					}
				})
			},
			legal() {
				if (this.age) {
					if (!Number(this.age)) {
						uni.showModal({
							title: "输入不合法，请输入大于18的数字。",
							showCancel: false
						})
					}
				}

			},
			getHistory() {
				let _this = this
				return new Promise(resolve => {
					let url = "/ai/chat/histories?id=" + _this.historyId
					_this.$request(url).then(res => {
						if (res.code == 0) {
							let newArr = res.data.reverse()
							let len = res.data.length
							if (len > 0) {
								_this.historyId = res.data[0].id
							}
							resolve(newArr)
						}
					})
				})

			},
			getMoreHistory() {
				if (!this.loadAllHistory) {
					let url = "/ai/chat/histories?id=" + this.historyId
					this.$request(url).then(res => {
						if (res.code == 0) {
							this.historyList = res.data.reverse().concat(this.historyList)
							let len = res.data.length
							if (len > 0) {
								this.historyId = res.data[0].id
							} else {
								this.loadAllHistory = true
							}
						}
					})
				} else {
					uni.showToast({
						title: "已加载全部",
						icon: "none",
						duration: 2000
					})
				}

			},
			toScroll() {
				let _this = this
				this.$nextTick(() => {
					console.log(123)
					if (_this.qaList.length == 0) {
						var num = _this.historyList.length - 1;
						if (num >= 0) {
							_this.scrollView = "his" + num
						}

					} else {
						var num2 = _this.qaList.length - 1;
						_this.scrollView = "qa" + num2
						// this.scrollView = this.hold
						// console.log(this.scrollView)
					}
					console.log(_this.scrollView, "scrollView")
				})
			},
			getDetail(item) {
				let data = {
					content: item,
					origin: "customer"
				}
				this.send(data)

			},
			sendQuestion() {
				var _this = this;
				_this.curStrIndex = 0;
				if (!this.ques) {
					uni.showToast({
						icon: "none",
						title: "想了解什么工作，请告诉我吧"
					})
				} else {
					this.inputHeight = 0
					if (this.canSend) {

						this.canSend = false;
						var data = {
							content: this.ques,
							origin: "customer"
						}
						this.send(data)
					}
				}
			},
			genderChange(e) {
				for (let i = 0; i < this.gender.length; i++) {
					if (this.gender[i].value == e.detail.value) {
						this.currentGender = i
					}
				}
			},
			onchange1(e) {
				if (e.detail.value.length) {
					if (this.hasSimpleCity(e.detail.value[1].value)) {
						uni.showToast({
							title: "该城市已选择",
							icon: "error",
							duration: 2000
						})
						// this.$refs.pickerOne.clear()
						return
					}
				}
				this.cityArr[0] = e.detail.value

			},
			onchange2(e) {
				if (e.detail.value.length) {
					if (this.hasSimpleCity(e.detail.value[1].value)) {
						uni.showToast({
							title: "该城市已选择",
							icon: "error",
							duration: 2000
						})
						// this.$refs.pickerTwo.clear()
						return
					}
				}

				this.cityArr[1] = e.detail.value
			},
			onchange3(e) {
				if (e.detail.value.length) {
					if (this.hasSimpleCity(e.detail.value[1].value)) {
						uni.showToast({
							title: "该城市已选择",
							icon: "error",
							duration: 2000
						})
						// this.$refs.pickerThree.clear()
						return
					}
				}
				this.cityArr[2] = e.detail.value
			},
			sureCity() {
				let newCityArr = this.cityArr.filter(el => {
					return el.length > 0
				})
				let wannerCity = ""
				let len = newCityArr.length
				for (let i = 0; i < len; i++) {
					wannerCity += newCityArr[i][1].text + "、"
				}
				wannerCity = wannerCity.slice(0, wannerCity.length - 1)
				return wannerCity
			},
			hasSimpleCity(value) {
				// 对比二级城市id是否有相同
				let len = this.cityArr.length
				let hasSimple = false
				for (let i = 0; i < len; i++) {
					if (this.cityArr[i] && this.cityArr[i].length > 0) {
						if (value == this.cityArr[i][1].value) {
							hasSimple = true
						}
					}

				}
				return hasSimple

			},
			getCitys() {
				this.$request("/common/areas").then(res => {
					if (res.code == 0) {
						this.cityData = res.data
					}
				})
			},
			creatConnect() {
				var _this = this;
				if (this.connected || this.connecting) {
					return false
				}
				this.connecting = true
				console.log(app.globalData.wssUrl, "wss")
				this.socketTask = uni.connectSocket({
					url: app.globalData.wssUrl,
					header: {
						'content-type': 'application/json',
						"app-id": urlSetting.urls.appid,
						"open-id": uni.getStorageSync("openid")
					},
					method: 'GET',
					success(res) {
						// 这里是接口调用成功的回调，不是连接成功的回调，请注意
					},
					fail(err) {
						// 这里是接口调用失败的回调，不是连接失败的回调，请注意
					}
				})
				this.connect()
				console.log(this.socketTask, "socketTask");
			},
			toSign(item) {
				let _this = this
				this.currentSiging = item
				if (this.isLogin()) {
					uni.showModal({
						title: "正在报名",
						success(resp) {
							if (resp.confirm) {
								_this.sureSign(item.content.id)
							}
						}
					})
				} else {
					_this.showLogin = true
				}
			},
			sureSign(id) {
				let url = "/worker/accept/project/" + id
				this.$request(url, {}, "POST").then(async res => {
					if (res.code == 0) {
						uni.showToast({
							title: "报名成功",
							duration: 3000
						})
						this.signed = true
						this.closeLogin()
					}
				})
			},
			connect() {
				let _this = this
				this.socketTask.onOpen((res) => {
					this.connecting = false
					this.connected = true
					this.noInput()

					console.log('onOpen', res);
				})
				this.socketTask.onError((err) => {
					this.connecting = false
					this.connected = false
					this.canSend = true
					uni.hideLoading()
					// uni.showModal({
					// 	content: '连接失败，请稍后再试',
					// 	showCancel: false
					// })
					console.log('onError', err);
					this.creatConnect()
				})
				this.socketTask.onMessage((res) => {
					let respone = JSON.parse(res.data)
					uni.hideLoading()
					_this.showAnswering = false
					console.log(respone, "respone")
					if (respone.code == 0) {
						_this.toScroll();
						if (_this.enableSpeeking && respone.data.content != "pong") {
							_this.formatResultStr(respone.data.content)
						}
						if (respone.data.content != "pong") {
							_this.qaList.push({
								content: respone.data.content,
								source: "system"
							})
						}
					} else {
						uni.showModal({
							title: respone.msg
						})
					}
					this.resetData()
				})
				this.socketTask.onClose((res) => {
					uni.hideLoading()
					this.connected = false
					this.socketTask = false
					console.log('onClose', res)
					clearInterval(_this.timer)
					this.creatConnect()
					// let data = {
					// 	content: "链接已关闭，如需重新对话，请重新打开窗口。",
					// 	origin: "system",
					// }
					// this.qaList.push(data)
				})
				console.log('task', this.socketTask)
			},
			resetData() {
				this.canSend = true
				this.placeHolder = "想了解什么工作，请告诉我吧"
				this.cancelRecord = false
			},
			// 间隔一定时间判断用户是否没有输入
			noInput() {
				let _this = this
				this.timer = setInterval(function() {
					let data = {
						content: "ping",
						origin: "customer",
					}
					_this.send(data)
				}, 10000)
			},
			formatResultStr(str) {
				// let len = data.length
				// let str = ""
				// for (let i = 0; i < len; i++) {
				// 	if (data[i].type == "str" || data[i].type == "remind_resume") {
				// 		str += data[i].content
				// 	}
				// 	if (data[i].type == "job_recommend" || data[i].type == "hot_job") {
				// 		let conLen = data[i].content.length
				// 		for (let j = 0; j < conLen; j++) {
				// 			str += data[i].content[j].name
				// 		}
				// 	}
				// 	if (data[i].type == "job_detail") {
				// 		for (key in data[i].content) {
				// 			str += data[i].content[key]
				// 		}
				// 	}
				// }
				if (str) {
					this.speeking(str)
				}
			},
			speeking(str) {
				console.log(str, "播报内容")
				plugin.textToSpeech({
					lang: "zh_CN",
					content: str,
					success: function(res) {
						if (res.retcode == 0) {
							console.log("result", res.result)
							wx.playBackgroundAudio({
								dataUrl: res.filename,
								title: '',
							})
						} else {
							console.warn("翻译失败", res)
						}
					},
					fail: function(res) {
						console.log("网络失败", res)
					}
				})
			},
			send(data) {
				let _this = this
				this.socketTask.send({
					data: JSON.stringify(data),
					success(res) {
						// uni.showLoading({
						// 	title: "思考中，请稍后..."
						// })
						_this.showAnswering = true

						console.log(data, "data")
						if (data.content != "ping") {
							_this.qaList.push(data)
							_this.num++
							_this.hold = "h" + _this.num
							_this.toScroll()
							_this.ques = "";
							_this.placeHolder = "正在回答中，请稍后..."
							_this.qaListLen = _this.qaList.length
						}

					},
					fail(err) {
						console.log(err);
					}
				})
			},
			close() {
				if (this.socketTask && this.socketTask.close) {
					// this.send('{"type":"close"}');
					this.socketTask.close()
				}
			},
			dislike(content) {
				console.log(content, "content")
				let data = {
					origin: "customer",
					content: "不喜欢",
					type: "str"
				}
				this.send(data)
			},
			cancel() {
				this.showWanner = false
				this.toScroll()
			},
			formatCity() {
				console.log(this.cityArr)
				let len = this.cityArr.length
				let newArr = []
				for (let i = 0; i < len; i++) {
					let newArrItem = []
					if (this.cityArr[i] && this.cityArr[i].length) {
						for (let j = 0; j < this.cityArr[i].length; j++) {
							let newObj = {
								id: "",
								name: ""
							}
							newObj.id = this.cityArr[i][j].value
							newObj.name = this.cityArr[i][j].text
							newArrItem.push(JSON.parse(JSON.stringify(newObj)))
						}
					}
					if (newArrItem.length) {
						newArr.push(JSON.parse(JSON.stringify(newArrItem)))
					}
				}
				return newArr
			},
			deFormatCity(arr) {
				let len = arr.length
				let newArr = []
				for (let i = 0; i < len; i++) {
					let index = i + 1
					let param = "city" + index
					this[param] = arr[i][1].id

					let newArrItem = []
					for (let j = 0; j < arr[i].length; j++) {
						let newObj = {
							value: "",
							text: ""
						}
						newObj.value = arr[i][j].id
						newObj.text = arr[i][j].name
						newArrItem.push(JSON.parse(JSON.stringify(newObj)))
					}
					newArr.push(JSON.parse(JSON.stringify(newArrItem)))
				}
				return newArr
			},
			finishSele() {
				console.log(this.selectType, "selectType")
				let postMsg = this.gender[this.currentGender].text + "," + this.age + ","
				postMsg += `
` + this.sureCity()
				let typeLen = this.selectType.length
				postMsg += `
`
				for (let j = 0; j < typeLen; j++) {
					for (let k = 0; k < this.selectType[j].tags.length; k++) {
						postMsg += this.selectType[j].tags[k].name + "/"
					}
				}
				let newCityArr = this.formatCity(this.cityArr)
				let data = {
					"age": Number(this.age),
					"gender": this.gender[this.currentGender].text,
					"areas": newCityArr,
					"type_tags": this.selectType,
					"all_ags": this.typeTags
				}
				this.$request("/ai/resume", data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: "保存成功",
							duration: 2000
						})
						this.showWanner = false
						let postStr = {
							content: postMsg,
							origin: "customer",
						}
						this.send(postStr)
					}
				})

			},
			addWanner() {
				let _this = this
				this.$request("/ai/resume").then(res => {
					if (res.code == 0) {
						this.typeTags = res.data.all_tags
						this.selectType = !res.data.type_tags ? [] : res.data.type_tags
						console.log(this.selectType, "selectType")
						for (let m = 0; m < this.selectType.length; m++) {
							for (let n = 0; n < _this.selectType[m].tags.length; n++) {
								_this.seleTypeIds.push(_this.selectType[m].tags[n].id)
							}
						}
						this.showWanner = true
						this.age = !res.data.age ? "" : res.data.age
						for (let i = 0; i < this.gender.length; i++) {
							if (this.gender[i].text == res.data.gender) {
								this.currentGender = i
							}
						}
						this.cityArr = !res.data.areas ? [] : this.deFormatCity(res.data.areas)
						for (let j = 0; j < this.cityArr.length; j++) {
							let k = j + 1
							let key = "city" + k
							this[key] = this.cityArr[j][1].value

						}
					}
				})

			},
			chooseTag(item, tag) {
				console.log(item, tag, "item&tag")
				let obj = JSON.parse(JSON.stringify(item))
				obj.tags = []
				let hasObj = false
				let objIndex = 0
				let len2 = this.selectType.length
				// 首先判断是否选择过第一层级
				for (let k = 0; k < len2; k++) {
					if (obj.id == this.selectType[k].id) {
						hasObj = true
						objIndex = k
					}
				}
				if (hasObj) {
					// 已经选过该大类,判断tags中是否包含该tag.id
					let arr = this.selectType[objIndex].tags.filter(el => {
						return el.id == tag.id
					})
					if (JSON.stringify(arr) == "[]") {
						this.selectType[objIndex].tags.push(tag)
					} else if (arr.length > 0) {
						// 包含该tag.id
						this.selectType[objIndex].tags = this.selectType[objIndex].tags.filter(el => {
							return el.id != tag.id
						})
					}
				} else {
					// 无该大类
					obj.tags.push(tag)
					this.selectType.push(JSON.parse(JSON.stringify(obj)))
				}
				console.log(this.seleTypeIds, this.seleTypeIds.indexOf(tag.id))
				if (this.seleTypeIds.indexOf(tag.id) != -1) {
					this.seleTypeIds.splice(this.seleTypeIds.indexOf(tag.id), 1)

				} else {
					this.seleTypeIds.push(tag.id)
				}
				this.selectType = this.selectType.filter(el => {
					return JSON.stringify(el.tags) != "[]"
				})
			},
			noPosition() {
				this.showReAuth = false
			}
		}
	}
</script>

<style lang="scss">
	/* 定义过渡效果 */
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 1s;
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}

	.inputing {
		position: fixed;
		// top: 50%;
		// left: 50%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 110;
		background: rgba(0, 0, 0, .7);

		text {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateX(-50%);
			color: #fff;
			font-size: 29rpx;
		}

		&>image {
			width: 80%;
			position: absolute;
			top: 35%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		.bot_bg {
			position: absolute;
			bottom: -10px;
			left: 0;
			width: 100%;
			text-align: center;
			overflow: hidden;

			.text {
				font-size: 29rpx;
				color: #FFFFFF;
				line-height: 40rpx;
				text-align: center;
				margin: 30rpx 0;
			}

			image {
				width: 100%;
			}
		}
	}

	::-webkit-input-placeholder {
		font-weight: 400;
		font-size: 27rpx;
		color: #9E9E9E;
	}

	::v-deep {

		.input-value-border,
		.input-value {
			border: none !important;
			height: 84rpx !important;
			font-size: 28rpx !important;
		}
	}

	.ai_inner {
		overflow: scroll;
	}

	.ai_icon {
		position: fixed;
		bottom: 25%;
		right: 10rpx;
		z-index: 100;

		image {
			width: 120rpx;
			// height: 90rpx;
		}
	}

	.ai_chat {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, .6);
		z-index: 105;

		.auth {
			position: absolute;
			width: 100%;
			padding: 30rpx;
			box-sizing: border-box;
			bottom: 0;
			left: 0;
			background: #fff;

			.btn {
				width: 48%;
				height: 70rpx;
				line-height: 70rpx;
				text-align: center;
				background: #f6f6f6;
				color: #333;
				border-radius: 10rpx;
				font-size: 28rpx;
			}

			.sure {
				background: $base-color;
				border: 1px solid $base-color;
				color: #fff;
			}
		}

		.ai_inner {
			width: 100%;
			height: 80%;
			background: #fff;
			border-top-left-radius: 16rpx;
			border-top-right-radius: 16rpx;
			box-sizing: border-box;
			position: absolute;
			left: 0;
			bottom: 0;

			.full_header {
				background: url($back-ground-url+"/worker/chat_top_bg.png") no-repeat;
				background-size: cover;
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				z-index: 105;


				.page_top {
					position: absolute;
					left: 30rpx;
					color: #fff;
					font-weight: 600;

					image {
						width: 40rpx;
					}
				}
			}
		}
	}



	.ques_wrap {
		width: calc(100% - 80rpx);
		max-width: 700px;
		// border: 1px solid $base-color;
		// border-bottom: 1px solid #04babe;
		background: #fff;
		border-radius: 10rpx;
		margin: 0 auto;
		// padding: 0 16rpx;
		box-sizing: border-box;

		&.upper {
			position: fixed;
			width: 100%;
			left: 0;
			z-index: 105;
		}

		.input {
			height: 100%;



			.input_right {
				width: calc(100% - 50rpx);

				input {
					width: calc(100% - 126rpx);
					height: 100%;
					font-size: 30rpx;
					border-radius: 42rpx;
					box-shadow: 0 2rpx 7rpx 0rpx #DDDDDD;
					padding: 0 20rpx;
					box-sizing: border-box;

					// text-align: center;

				}

				.confirm_send {
					width: 110rpx;
					height: 62rpx;
					line-height: 62rpx;
					background: linear-gradient(135deg, #4F86FD 0%, #71BAFF 100%);
					border-radius: 10rpx;
					font-size: 29rpx;
					color: #FFFFFF;
					margin-left: 16rpx;
					text-align: center;
				}
			}



			.btn {
				width: 100%;
				height: 80rpx;
				text-align: center;
				line-height: 100%;
				border-radius: 42rpx;
				font-size: 29rpx;
				box-shadow: 0 2rpx 7rpx 0rpx #DDDDDD;

				&.press {
					width: calc(100% - 50rpx);
				}
			}

			image {
				width: 30px;
				height: 30px;
				margin-right: 20rpx;
				flex-shrink: 0;
			}

			.imgs {
				image {
					margin-left: 20rpx;

					&:nth-child(2) {
						width: 26px;
						height: 26px;
					}
				}
			}


		}

	}

	.chat_wrap {
		padding: 40rpx 30rpx;
		box-sizing: border-box;
		background: #F4F9FF;

		.list {
			// padding: 30rpx;

			.qa_item {
				.line {
					margin-top: 41rpx;
					text-align: right;

					image {
						margin-left: 20rpx;
					}

					.inline_box {
						width: 80%;

						image {
							width: 65rpx;
							height: 65rpx;
							vertical-align: top;
							margin-left: 0;
						}

						.cont {
							display: inline-block;
							max-width: calc(100% - 110rpx);
							overflow: hidden;
							line-height: 42rpx;
							color: #fff;
							font-size: 27rpx;
							font-family: "微软雅黑";
							background: #106afa;
							padding: 20rpx;
							border-radius: 16rpx;
							box-sizing: border-box;
							text-align: left;

						}
					}

					&.left {
						.inline_box {
							justify-content: flex-start;
							align-items: start;
						}

						text-align: left;

						image {
							margin-right: 20rpx;
						}

						.cont {
							color: #333;
							background: #fff;

						}
					}

					&.right {
						display: flex;
						justify-content: flex-end;

						.inline_box {
							align-items: start;
							justify-content: flex-end;
						}

						.cont {
							background: linear-gradient(117deg, #4F85FD 0%, #72BAFF 100%);
							color: #fff;
						}
					}
				}
			}
		}
	}
</style>