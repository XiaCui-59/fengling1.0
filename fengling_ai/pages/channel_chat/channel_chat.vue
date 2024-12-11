<template>
	<view class="single_page" v-if="ifSingle">
		<image :src="imgUrl+'/worker/single_page.png'" mode="widthFix" style="width: 100%;"></image>
	</view>
	<view class="home_page" v-else>
		<!-- 自定义导航栏 -->
		<view class="navbar">
			<u-navbar :safeAreaInsetTop="true" bgColor="rgba(255, 255, 255, 0.25)">
				<view class="u-nav-slot flex flex-start" slot="left">
					<u-icon name="arrow-left" size="21" @click.stop="back"></u-icon>
					<view class="title_wrap flex flex-start">
						<image :src="channel_info.logo.url?channel_info.logo.url:imgUrl+'/worker/channel_default.png'"
							mode="widthFix"></image>
						<view class="">{{channel_info.name}}</view>
					</view>
				</view>
			</u-navbar>
		</view>
		<view class="main_box">
			<!-- 对话页 -->
			<chat ref="chat" :top="statusBarHeight+44" :bottom="botSafe" :historyList="historyList"
				:qaList="channelQaList" :scrollHeight="chatScrollHeight" :answering="answering"
				:answerContinue="answerContinue" :greetingObj="greetingObj" :scrollStr="scrollStr" @sendMsg="sendBtnMsg"
				@moreHis="getMoreHistory" @tocall="toCall">
			</chat>
		</view>
		<view class="input_btn_wrap"
			:style="{bottom:inputHeight?inputHeight+10+'px':'65rpx',background:inputing?(cancelRecord?'#fe697f':'#216ff9'):'#fff'}"
			:class="inputHeight?'upper':''">
			<!-- 不在语音输入状态 -->
			<view v-show="!inputing">
				<!-- 风铃icon -->
				<view class="fl_icon" @click.stop="clickFengling">
					<image :src="imgUrl+'/worker/new/ic_fengling.png'"></image>
				</view>
				<view>
					<!-- 语音按钮区 -->
					<view class="voice_btn_wrap" v-show="showVoice && voicePermisson" @touchstart.stop="startRecord"
						@touchend.stop="stopRecord" @touchmove.stop="handleTouchMove" @touchcancel.stop="cancelVoice">
						{{canSend?"按住 说话":"正在努力思考，请稍后"}}
					</view>
					<view class="voice_btn_wrap" v-show="showVoice && !voicePermisson" @click.stop="openSetting">按住
						说话</view>
					<!-- 键盘输入区 -->
					<view class="input_box" v-show="!showVoice">
						<input type="text" confirm-type="发送" :value="question"
							:placeholder="canSend?'更多工作就问我':'正在努力思考，请稍后'" @focus="inputBindFocus" @confirm="doSend"
							:disabled="!canSend" @input="onInput" :adjust-position="false" />
					</view>
				</view>

				<!-- 右侧输入按钮切换区 -->
				<view class="func_icon" v-show="showSend" @click.stop="doSend">
					<image :src="imgUrl+'/worker/ic_send.png'" style="border:1px solid #D8E6FF;border-radius: 50%;">
					</image>
				</view>
				<view class="func_icon" @click.stop="changeChatMethod" v-show="!showSend">
					<image :src="showVoice?imgUrl+'/worker/ic_keyboard_blue.png':imgUrl+'/worker/ic_voice_blue.png'">
					</image>
				</view>
			</view>
			<view class="voice_inputing" v-show="inputing">
				<image :src="imgUrl+'/worker/new/inputing_wave2.gif'" mode="heightFix"></image>
			</view>
			<!-- 快速按钮 -->
			<view class="btns_wrap flex flex-start"
				v-if="(!inputHeight && !newUser) || (newUser && channelQaList.length>0 &&!inputHeight)">
				<view class="btn_item flex" v-if="!userInfo.is_vip" @click="navigate('/pages/vip/vip')">
					<image :src="imgUrl+'/worker/new/ic_become_vip.png'" mode="widthFix"></image>
					<view class="">成为会员</view>
				</view>
				<view class="btn_item flex " @click="navigate('/pages/invite/invite')">
					<image :src="imgUrl+'/worker/new/ic_gift.png'" mode="widthFix"></image>
					<view class="">邀请有礼</view>
				</view>
			</view>

		</view>
		<myModal ref="myModal">
		</myModal>
		<flMask v-if="showFlMask" @closeFengling="closeFengling" @sendMsg="sendBtnMsg"></flMask>
		<!-- <login :showLogin="showLogin" @closeLogin="closeLogin" @getInfo="getInfo" :shareId="shareId">
		</login> -->
	</view>
</template>

<script>
	import flMask from "@/components/flmask.vue"
	import login from "@/components/login.vue"
	import chat from "@/components/chat.vue"
	import commonMethods from "@/common/commMethods.js"
	import urlSetting from "@/url_setting";
	import {
		mapState,
		mapMutations
	} from "vuex"
	const app = getApp();
	export default {
		data() {
			return {
				showFlMask: false,
				greetingObj: {
					logo: "",
					title: "",
					content: ""
				},
				showSend: false,
				newUser: false,
				ifSingle: app.globalData.scene == 1154 ? true : false,
				menuButtonInfo: app.globalData.menuButtonInfo,
				manager: app.globalData.manager,
				// manager: uni.getRecorderManager(),
				imgUrl: app.globalData.baseImageUrl,
				statusBarHeight: app.globalData.statusBarHeight,
				botSafe: 0,
				userInfo: {
					is_vip: false
				},
				showVoice: true,
				inputing: false,
				voicePermisson: false,
				showLogin: false,
				shareId: "",
				params: null,
				openid: "",
				startPoint: null,
				cancelRecord: false,
				touchStartTime: "",
				touchEndTime: "",
				secondTimer: null,
				// showAnswering: app.globalData.showAnswering,
				num: 1,
				hold: "h1",
				placeHolder: "您想找什么工作,都可以问我",
				question: "",
				// canSend: true,
				// qaList: app.globalData.channelQaList,
				historyList: [],
				historyId: 0,
				loadAllHistory: false,
				inputHeight: 0,
				chatScrollHeight: 0,
				btnInfo: null,
				channel_info: {
					logo: {
						key: "",
						url: ""
					},
					name: "",
					id: ""
				},
				scrollStr: "",
				jobId: "",
			}
		},
		computed: {
			...mapState(["answering", "connected", "connecting", "canSend", "inChannel", "channelQaList",
				"answerContinue"
			])
		},
		async onLoad(params) {
			uni.setNavigationBarColor({
				frontColor: '#000000',
				backgroundColor: 'transparent'
			})
			this.channel_info = JSON.parse(decodeURIComponent(params.channel_info))
			this.historyList = await this.getHistory()
			this.$refs.chat.toScroll()
			this.closeAnswering()
			this.openCansend()
			this.clearChannelQaList()
			this.closeInterviewCard()
			this.closeChannelInterviewCard()
			this.btnInfo = await commonMethods.getElementInfo(".input_btn_wrap")
			if (this.btnInfo) {
				this.botSafe = app.globalData.systemHeight - this.btnInfo.top
				this.chatScrollHeight = this.btnInfo.top - this.statusBarHeight - 84
			}
			console.log("params", params)
			// 扫码进入
			let scanId = params.scene ? decodeURIComponent(params.scene).split("=")[1] : ""

			this.setChannelId(this.channel_info.id)
			this.greetingObj.logo = this.channel_info.logo.url
			this.greetingObj.title = this.channel_info.name
			this.greetingObj.content = this.channel_info.content
			console.log(this.greetingObj)
			this.shareId = params.share_id ? params.share_id : (scanId ? scanId : "")
			this.params = params
			var _this = this;
			this.handleGreeting()
			this.getSetting()
			this.getInfo()
		},
		async onShow() {
			// 录音初始化
			this.initRecord()
			// this.openid = await this.getOpenid()
			uni.onKeyboardHeightChange(this.listenKeyBoard)
		},
		onHide() {
			uni.offKeyboardHeightChange(this.listenKeyBoard)
		},
		mounted() {},
		components: {
			login,
			chat,
			flMask
		},
		watch: {
			question(newValue) {
				if (!newValue) {
					this.showSend = false
				} else {
					this.showSend = true
				}
			},
		},
		methods: {
			...mapMutations(["openAnswering", "closeAnswering", "openCansend", "closeCansend", "isChannel",
				"clearChannelQaList", "addChannelQaList",
				"calcChannelQaLen", "setChannelId", "notInCall", "closeInterviewCard", "closeChannelInterviewCard"
			]),
			onInput(e) {
				this.question = e.target.value
			},
			async handleGreeting() {
				// let msg = await this.handleBtnMsg(this.channel_info.name)
				let msg = "欢迎进入" + this.channel_info.name + "频道，" + this.channel_info.content
				var showData = {
					content: msg,
					origin: "ai",
					msg_type: "text"
				}
				this.addChannelQaList(showData)
			},
			listenKeyBoard(res) {
				if (res.height == 0) {
					this.inputHeight = 0
					this.chatScrollHeight = this.btnInfo.top - this.statusBarHeight - 84
				} else {
					this.chatScrollHeight = app.globalData.systemHeight - this.statusBarHeight - 44 - res
						.height -
						this.btnInfo.height - 10
				}
			},
			back() {
				uni.navigateBack()
			},
			toCall(obj) {
				let status = ""
				let job_id = ""
				if (obj) {
					// 有参数
					status = obj.type
					job_id = obj.job_id
				}
				let _this = this
				// 获取语音权限
				uni.authorize({
					scope: 'scope.record',
					success(res) {
						// console.log(res, 'success')
						_this.voicePermisson = true
						uni.navigateTo({
							url: "/pages/phone_call/phone_call?status=" + status + "&job_id=" + job_id
						})
					},
					fail(err) {
						// 弹出麦克风授权
						_this.voicePermisson = false
						console.log(err, 'err')
						_this.$refs.myModal.showModal({
							title: "请先开启语音输入权限。",
							showCancel: false,
							confirmText: "好的",
							success(resp) {
								if (resp == "confirm") {
									uni.openSetting({
										success(respone) {
											// console.log(res.authSetting, "res.authSetting")
											if (respone.authSetting['scope.record']) {
												_this.voicePermisson = true
												uni.navigateTo({
													url: "/pages/phone_call/phone_call?status=" +
														status + "&job_id=" + job_id
												})
											}
										},
										fail(openErr) {
											console.log(openErr, 'openerr')
											_this.voicePermisson = false
										}
									});
								}
							}
						})
					},
					complete() {
						uni.setStorageSync("voiceAuth", true)
					}
				})
			},
			clickFengling() {
				// this.showFlMask = true
				this.$refs.myModal.showModal({
					title: "即将上线，敬请期待~",
					showCancel: false,
					confirmText: "好的"
				})
			},
			closeFengling() {
				this.showFlMask = false
			},
			getHistory() {
				uni.showLoading()
				let _this = this
				return new Promise(resolve => {
					let url = "/api/chat/histories?last_message_id=" + _this.historyId + "&job_channel_id=" + _this
						.channel_info
						.id
					_this.$aiRequest(url).then(res => {
						if (res.code == 0) {
							uni.hideLoading()
							if (res.data.length == 0) {
								// 新用户
								_this.newUser = true
							} else {
								_this.newUser = false
							}
							let newArr = res.data.reverse()
							let len = res.data.length
							if (len > 0) {
								_this.historyId = res.data[0].id
							}
							newArr = _this.handleList(newArr)
							resolve(newArr)
						}
					})
				})

			},
			getInfo() {
				this.$request("/worker/profile").then(response => {
					if (response.code == 0) {
						uni.hideLoading()
						uni.setStorageSync("userInfo", JSON.stringify(response.data))
						this.userInfo = response.data
					}
				})
			},
			getMoreHistory() {
				let _this = this
				if (!this.loadAllHistory) {
					if (!this.historyId) {
						if (this.answerContinue || this.answering) {
							this.$refs.chat.refreshRestore()
							return
						} else {
							this.clearChannelQaList()
						}
					}
					uni.showLoading()
					let url = "/api/chat/histories?last_message_id=" + this.historyId + "&job_channel_id=" + this
						.channel_info.id
					this.$aiRequest(url).then(res => {
						if (res.code == 0) {
							let len = res.data.length
							uni.hideLoading()
							this.$refs.chat.refreshRestore()
							if (len > 0) {
								let resArr = res.data.reverse()
								let newArr = this.handleList(resArr)
								this.historyList = newArr.concat(this.historyList)
								this.scrollStr = "his" + res.data[len - 1].id
								this.historyId = res.data[0].id
							} else {
								this.loadAllHistory = true
							}
						} else {
							this.$refs.chat.refreshRestore()
						}
					})
				} else {
					uni.showToast({
						title: "已加载全部",
						icon: "none",
						duration: 2000
					})
					setTimeout(function() {
						_this.$refs.chat.refreshRestore()
					}, 500)
				}

			},
			// 给聊天记录添加字段
			handleList(arr) {
				let len = arr.length
				for (let i = 0; i < len; i++) {
					if (arr[i].msg_type == "voice") {
						// 语音记录，添加是否播放状态,默认为false
						arr[i].voice.anmitionPlay = false
						arr[i].showTranlate = false
						arr[i].showTranIcon = false
					}
				}
				console.log("arr:", arr)
				return arr
			},
			navigate(url) {
				uni.navigateTo({
					url: url + "?shareid=" + this.shareId
				})
			},
			async sendBtnMsg(obj) {
				if (this.answerContinue) {
					uni.showToast({
						title: "回答中，请稍后",
						icon: "error",
						duration: 2000
					})
					return
				}
				this.jobId = obj.job_id
				if (obj.type == "job") {
					// 词语润色
					let strArr = []
					strArr.push("请介绍一下" + obj.msg)
					strArr.push("我对" + obj.msg + "感兴趣，可以介绍一下吗？")
					strArr.push(obj.msg + "的工作内容是什么呢？福利待遇怎么样？")
					strArr.push(obj.msg + "这个工作看着还不错，请为我介绍下吧")
					strArr.push(obj.msg + "这个工作的详细信息可以说一下吗？")
					let random = Math.floor(Math.random() * strArr.length)
					this.question = strArr[random]
				} else {
					this.question = obj.msg
				}

				this.currentTabIndex = 1
				this.sendQuestion()
			},
			handleBtnMsg(msg) {
				let _this = this
				return new Promise((resolve) => {
					_this.$request("/ai/refine/question", {
						"text": msg
					}, "POST").then(res => {
						if (res.code == 0) {
							resolve(res.data)
						} else {
							resolve("error")
						}
					})
				})
			},
			inputBindFocus(e) {
				if (e.detail.height) {
					this.inputHeight = e.detail.height //这个高度就是软键盘的高度
				}
			},
			initRecord() {
				//录音开始事件
				this.manager.onStart(e => {
					console.log("录音开始")
					this.inputing = true
				});
				//录音结束事件
				this.manager.onStop(res => {
					let _this = this
					console.log("录音结束")
					this.inputing = false
					clearInterval(_this.secondTimer)
					console.log("时间间隔:", this.touchEndTime - this.touchStartTime)
					if ((this.touchEndTime - this.touchStartTime) > 1000) {
						this.handleRecorder(res);
					} else {
						uni.showToast({
							title: "长按时间过短",
							icon: "error"
						})
					}

				});
				this.manager.onError(res => {
					let _this = this
					this.inputing = false
					clearInterval(_this.secondTimer)
					console.log("channel录音出错：", res.errMsg)
				})
			},
			// 处理录音数据
			handleRecorder({
				tempFilePath,
				duration
			}) {
				let _this = this
				console.log("tempFilePath", tempFilePath)
				console.log("duration", duration)
				if (duration < 600) {
					uni.showToast({
						title: "说话时间过短",
						icon: "error",
						duration: 2000
					})
					return;
				}
				this.inputing = false;
				if (!this.cancelRecord) {
					wx.getFileSystemManager().readFile({
						filePath: tempFilePath,
						success: function(res) {
							// res.data是录音文件的二进制数据
							const binaryData = res.data;
							let midata = new Uint8Array(binaryData)
							let time = new Date().getTime()
							let id = uni.getStorageSync("openid") + time
							// let encoder = new TextEncoder();
							// let binaryId = encoder.encode(id + "@@@")
							let binaryId = _this.stringToUint8Array(id + "@@@" + _this.channel_info.id +
								"@@@" +
								_this.jobId + "@@@@@@")
							// 输出拼接后的 Uint8Array
							console.log(binaryId.length, midata.length);
							// 计算总长度
							const totalLength = binaryId.length + midata.length;
							// 创建一个新的 Uint8Array，长度为所有数组的总和
							let mergedArray = new Uint8Array(totalLength);
							// 使用 set 方法将每个 Uint8Array 的数据填充到新的 Uint8Array 中
							let offset = 0;
							mergedArray.set(binaryId, offset);
							offset += binaryId.length;

							mergedArray.set(midata, offset);
							// offset += data.length;
							let showData = {
								id: id,
								content: "",
								origin: "customer",
								msg_type: "voice",
								voice: {
									media: {
										key: "",
										url: tempFilePath
									},
									second: duration / 1000,
									anmitionPlay: false
								},
								showTranIcon: false,
								showTranlate: false,
								showTransing: false
							}
							_this.send(mergedArray.buffer, showData, "voice")
							// 接下来你可以对binaryData进行需要的操作
						},
						fail: function(error) {
							console.error('读取文件失败：', error);
						}
					});
				} else {
					this.cancelRecord = false
				}


				// this.canSend && this.sendMsg(params);
			},
			stringToUint8Array(str) {
				const utf8 = unescape(encodeURIComponent(str)); // 将字符串编码为 UTF-8
				const len = utf8.length;
				const arr = new Uint8Array(len);
				for (let i = 0; i < len; i++) {
					arr[i] = utf8.charCodeAt(i);
				}
				return arr;
			},
			send(data, param, type) {
				let _this = this
				// 先判断是否是可发送状态
				console.log("cha answerContinue:", this.answerContinue)
				if (this.answering || this.answerContinue) {
					this.$refs.myModal.showModal({
						title: "目前有正在回复的对话，请稍后重试",
						showCancel: false,
						confirmText: "好的"
					})
					return
				}
				if (!this.canSend) {
					return
				} else {
					// 如果无历史记录显示加载中
					if (this.historyList.length == 0) {
						uni.showLoading()
					}
					this.question = ""
					this.isChannel()
					this.notInCall()
					app.globalData.socketTask.send({
						data: type == "voice" ? data : JSON.stringify({
							content: data,
							job_channel_id: _this.channel_info.id,
							job_id: _this.jobId
						}),
						success(res) {
							_this.jobId = ""
							_this.closeInterviewCard()
							_this.closeChannelInterviewCard()
							console.log(data, "data")
							if (data != "ping") {
								if (!_this.cancelRecord) {
									// _this.showAnswering = true
									_this.openAnswering()
									_this.addChannelQaList(param)
									_this.calcChannelQaLen()
									_this.num++
									_this.hold = "h" + _this.num
									_this.closeCansend()
									uni.hideLoading()
									// _this.placeHolder = "正在努力思考，请稍后..."
								}

							}

						},
						fail(err) {
							_this.jobId = ""
							console.log(err);
						}
					})
				}

			},
			doSend(e, text) {
				// console.log(text);
				if (e.ctrlKey && e.keyCode === 13) {
					//用户点击了ctrl+enter触发
					this.question += '\n';
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
			sendQuestion() {
				var _this = this;
				if (!this.question) {
					return
					// uni.showToast({
					// 	icon: "error",
					// 	title: "无输入"
					// })
				} else {
					this.inputHeight = 0
					var showData = {
						content: this.question,
						origin: "customer",
						msg_type: "text"
					}
					this.send(this.question, showData, "")
				}
			},
			handleTouchMove(e) {
				// 先判断是否是可发送状态
				if (!this.canSend) {
					return
				}
				// let exp1 = (e.touches[e.touches.length - 1].clientX > this.cancelIconLeft) && (e.touches[e.touches.length -
				// 	1].clientX < this.cancelIconRight)
				let exp = e.touches[e.touches.length - 1].clientY < this.btnInfo.top
				if (exp) {
					this.cancelRecord = true
				} else {
					this.cancelRecord = false
				}
			},
			// 间隔一定时间判断用户是否没有输入
			noInput() {
				let _this = this
				this.timer = setInterval(function() {
					let data = "ping"
					_this.send(data, "", "")
				}, 10000)
			},
			resetData() {
				// this.canSend = true
				// this.placeHolder = "想了解什么工作，请告诉我吧"
				this.cancelRecord = false
			},
			formatResultStr(str) {
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
			close() {
				if (app.globalData.socketTask && app.globalData.socketTask.close) {
					// this.send('{"type":"close"}');
					app.globalData.socketTask.close()
				}
			},
			startRecord(e) {
				let _this = this
				// 先判断是否是可发送状态
				if (!this.canSend) {
					uni.showToast({
						title: "正在回答请稍后",
						icon: "error",
						duration: 2000
					})
					return
				}
				if (this.showVoice) {
					// 判断是否有麦克风授权
					if (_this.voicePermisson) {
						_this.touchStartTime = e.timeStamp
						_this.$refs.chat.stopCurAudio()
						// if (!this.Audio.paused) {
						// 	//如果音频正在播放 先暂停。
						// 	this.stopAudio(this.AudioExam)
						// }
						uni.vibrateShort({
							success: function() {
								console.log('success');
							}
						});
						_this.startPoint = e.touches[0]; //记录长按时开始点信息，后面用于计算上划取消时手指滑动的距离。
						// this.showInputing = true
						_this.cancelRecord = false
						_this.manager.start({
							duration: 60000,
							lang: "zh_CN"
						});
					} else {
						uni.authorize({
							scope: 'scope.record',
							success(res) {
								console.log(res, 'success')
								_this.voicePermisson = true
							},
							fail(err) {
								// 弹出麦克风授权
								_this.voicePermisson = false
								console.log(err, 'err')

							}
						})
					}

				}

			},
			getSetting() {
				let _this = this
				uni.getSetting({
					success(res) {
						if (!res.authSetting['scope.record']) {
							console.log('用户尚未授权语音权限');
							_this.voicePermisson = false
							// 可以在这里引导用户去设置中开启权限
						} else {
							console.log('用户已授权语音权限');
							_this.voicePermisson = true
							// 用户已授权，可以继续进行后续操作
						}
					},
					fail(err) {
						console.log('获取设置失败', err);
					}
				});
			},
			stopRecord(e) {
				// 先判断是否是可发送状态
				if (!this.canSend) {
					return
				}
				let _this = this
				this.touchEndTime = e.timeStamp
				this.inputing = false
				if ((this.touchEndTime - this.touchStartTime) > 1000) {
					this.manager.stop()
				} else {
					setTimeout(function() {
						_this.manager.stop()
					}, 1000)
				}


			},
			//录音被打断
			cancelVoice(e) {
				console.log("touch取消")
				this.showInputing = false
				// this.canSend = false;
				this.manager.stop();
			},
			handleClick(e) {
				console.log(e)
			},
			openSetting() {
				let _this = this
				let ifAuth = uni.getStorageSync("voiceAuth")
				if (ifAuth) {
					uni.openSetting({
						success(res) {
							console.log(res.authSetting, "res.authSetting")
							if (res.authSetting['scope.record']) {
								_this.voicePermisson = true
							}
						},
						fail(openErr) {
							console.log(openErr, 'openerr')
							_this.voicePermisson = false
						}
					});
				} else {
					uni.authorize({
						scope: 'scope.record',
						success(res) {
							console.log(res, 'success')
							_this.voicePermisson = true
						},
						fail(err) {
							// 弹出麦克风授权
							_this.voicePermisson = false
							console.log(err, 'err')
						},
						complete() {
							uni.setStorageSync("voiceAuth", true)
						}
					})
				}


			},
			changeChatMethod() {
				this.showVoice = !this.showVoice
			},
		}
	}
</script>

<style lang="scss">
	::v-deep {
		.u-tabs__wrapper__nav__line {
			bottom: 0 !important;
		}

		.u-avatar {
			margin: 0 auto;
		}

		.inner .u-navbar--fixed {
			width: 83vw;
		}


	}

	.title_wrap {
		margin-left: 50rpx;

		image {
			width: 69rpx;
			flex-shrink: 0;
			margin-right: 12rpx;
			border-radius: 50%;
		}

		view {
			font-weight: 400;
			font-size: 31rpx;
			color: #010101;
		}
	}

	.inner {
		padding: 0 28rpx;
		width: 83vw;
		box-sizing: border-box;
		background: #fff;
		color: #4C4C53;
		height: 100%;
	}


	.input_btn_wrap {
		width: calc(100% - 56rpx);
		position: fixed;
		left: 28rpx;
		bottom: 24rpx;
		height: 100rpx;
		box-sizing: border-box;
		background: #FFFFFF;
		box-shadow: 0rpx 0rpx 4rpx 0rpx rgba(0, 0, 0, 0.1);
		border-radius: 63rpx;
		z-index: 10;

		.voice_inputing {
			text-align: center;

			image {
				height: 100rpx;
			}
		}

		.btns_wrap {
			position: absolute;
			bottom: calc(100% + 10px);
			left: 0;

			.btn_item {
				width: 180rpx;
				text-align: center;
				height: 30px;
				line-height: 30px;
				background: #F7F8FA;
				border-radius: 63rpx;
				font-size: 27rpx;
				color: #7D8488;
				margin-right: 15rpx;
				justify-content: center;

				image {
					width: 28rpx;
					margin-right: 6rpx;
				}
			}
		}

		&.upper {
			// position: fixed;
			// width: calc(100% - 80rpx);
			// left: 40rpx;
			// z-index: 105;
			// background: #fff;
			// border: 1rpx solid #216FF9;

			// .btns_wrap {
			// 	.btn_item {
			// 		background: #F7F8FA;
			// 		color: #7D8488;
			// 		// border: 1rpx solid #216FF9;
			// 	}
			// }
		}

		.voice_btn_wrap {
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
		}

		.input_box {
			input {
				height: 100rpx;
				line-height: 100rpx;
				font-size: 30rpx;
				color: #0F2A4F;
			}

			padding: 0 75rpx 0 100rpx;
			box-sizing: border-box;
		}

		.fl_icon {
			position: absolute;
			top: 8rpx;
			left: 11rpx;

			image {
				width: 86rpx;
				height: 86rpx;
			}
		}

		.func_icon {
			position: absolute;
			top: 20rpx;
			right: 15rpx;
			z-index: 100;

			image {
				width: 60rpx;
				height: 60rpx;
			}
		}
	}
</style>