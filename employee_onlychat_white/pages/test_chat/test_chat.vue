<template>
	<view class="ai_wrap" @touchstart="bodyClick">
		<view class="single_page" v-if="ifSingle">
			<view class="intro">
				<view class="title">
					<view class="tit">Hi~</view>
					<view class="tit">我是风铃AI</view>
				</view>
				<view class="text">
					我是专为您服务的客服“风铃AI”，为您提供一对一的工作匹配服务。这里有丰富的工作机会，总会有工作机会能满足您的需要。请问想了解哪些工作呢？操作工、上下货、保安、保洁都有哟，还可以发送语音与我交流哟。
				</view>
				<view class="btn" @click="navigate">
					<text>立即聊天找工作</text>
					<image :src="imgUrl+'/worker/arrow_long.png'" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view class="ai_chat" v-if="!ifSingle">
			<view class="ai_inner" :style="{height:showFullScreen?'100%':'80%'}" v-if="!showWanner && !showReAuth">
				<view class="full_header" :style="{height:marginTop+tabMargin+'px'}" v-if="showFullScreen">
					<view class="page_top"
						:style="{lineHeight:titleHeight+'px',height:titleHeight+'px',bottom:tabMargin+'px'}">
						<view class="page_tit" style="font-size: 19px;">
							{{title}}
						</view>
						<!-- <image
							:src="enableSpeeking?imgUrl+'/worker/ic_voice_white.png':imgUrl+'/worker/ic_voice_mute_white.png'"
							mode="widthFix" @click="openSeepking" style="margin-left: 10rpx;"></image> -->
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
									<view class="cont" :class="item.msg_type == 'text'?'textcont':''">
										<!-- 文字信息 -->
										<text
											v-if="item.msg_type == 'text'">{{item.content.replace(/\\n/g,"\n")}}</text>
										<view class="voice_line flex flex_end">
											<view class="trans" v-show="item.showTranIcon"
												@click.stop="startTrans(item,'his')">
												<image :src="imgUrl+'/worker/ic_trans.png'" mode="widthFix"></image>
											</view>
											<!-- 语音消息 -->
											<view class="voice_wrap flex flex_end" v-if="item.msg_type == 'voice'"
												@tap.stop="handleAudio('his',item,index)"
												@longpress="showTrans(item,'his')"
												:style="{width:Math.ceil(item.voice.second * 20)+'px',maxWidth:'calc(100% - 136rpx)',minWidth:'50px'}">

												<view class="seconds">{{Math.ceil(item.voice.second)}}'</view>
												<view class="voice_icon" :class="[
														{ voice_icon_right: true },
														{ voice_icon_right_an: item.voice.anmitionPlay }
													]"></view>
											</view>
										</view>
										<view class="trans_result text" v-if="item.showTranlate">
											{{item.content}}
										</view>
									</view>
									<image v-if="item.origin == 'customer'" :src="imgUrl+'/worker/user_avatar.png'"
										mode="widthFix" style="margin-left:20rpx;margin-right: 0;">
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
									<view class="cont" :class="item.msg_type == 'text'?'textcont':''">
										<!-- 文字信息 -->
										<text
											v-if="item.msg_type == 'text'">{{item.content.replace(/\\n/g,"\n")}}</text>
										<view class="voice_line flex flex_end">
											<view class="trans" v-show="item.showTranIcon"
												@click.stop="startTrans(item,'qa')">
												<image :src="imgUrl+'/worker/ic_trans.png'" mode="widthFix"></image>
											</view>
											<!-- 语音消息 -->
											<view class="voice_wrap flex flex_end" v-if="item.msg_type == 'voice'"
												@tap.stop="handleAudio('qa',item,index)"
												@longpress="showTrans(item,'qa')"
												:style="{width:Math.ceil(item.voice.second * 20)+'px',maxWidth:'calc(100% - 136rpx)',minWidth:'50px'}">

												<view class="seconds">{{Math.ceil(item.voice.second)}}'</view>
												<view class="voice_icon" :class="[
															{ voice_icon_right: true },
															{ voice_icon_right_an: item.voice.anmitionPlay }
														]"></view>
											</view>
										</view>

										<view class="trans_result text" v-if="item.showTranlate">
											{{item.content}}
										</view>
										<view class="trans_result text" v-if="!item.showTranlate && item.showTransing"
											style="text-align: right;">
											<image :src="imgUrl+'/worker/ic_transing.gif'" mode="widthFix"
												v-if="item.showTransing"></image>
										</view>
									</view>
									<image v-if="item.origin == 'customer'" :src="imgUrl+'/worker/user_avatar.png'"
										mode="widthFix" style="margin-left:20rpx;margin-right: 0;">
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
				<view class="ques_wrap"
					:style="{paddingTop:tabMargin+'px',bottom:inputHeight?inputHeight+'px':2*tabMargin+'px'}"
					:class="inputHeight?'upper':''">
					<view class="input flex flex_btween" v-show="!showRecord">
						<image :src="imgUrl+'/worker/chat_record_icon.png'" @tap="toVoice">
						</image>
						<view class="input_right flex">
							<input type="text" :adjust-position="false" :placeholder="placeHolder" v-model="ques"
								confirm-type="send" @focus="inputBindFocus" @confirm="doSend"
								:style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px'}">
							<view class="confirm_send" @tap="sendQuestion">发送</view>
						</view>
					</view>
					<view class="input flex flex_btween" v-show="showRecord">
						<image :src="imgUrl+'/worker/chat_key_icon.png'" @click="toInput">
						</image>
						<view class="btn in_put press" v-if="showSetting"
							:style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px'}" @click="openSetting">开启语音权限
						</view>
						<view class="btn in_put press" :style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px'}"
							@touchstart="startRecord" @touchend="stopRecord" @touchmove="handleTouchMove"
							@touchcancel.stop="cancelVoice" v-if="!showSetting">
							按住说话
						</view>
					</view>

				</view>
			</view>
			<view class="inputing" :style="{zIndex:showInputing?'110':'-1'}">
				<!-- <view class="inputing" v-show="showInputing"> -->
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
			<!-- <view class="auth flex flex_btween" v-if="showReAuth">
				<view class="btn no" @click="noPosition">不开启</view>
				<view class="btn sure" @click="openSetting">开启定位，推荐适合您的职位</view>
			</view> -->
		</view>
		<login :showLogin="showLogin" pageName="ai_chat" @handleSign="toSign(currentSiging)" @closeLogin="closeLogin">
		</login>
	</view>
</template>

<script>
	const plugin = requirePlugin("WechatSI")
	let translater = plugin.getRecordRecognitionManager()
	import urlSetting from "@/url_setting";
	const app = getApp();
	export default {
		data() {
			return {
				title: "",
				historyId: 0,
				loadAllHistory: false,
				showReAuth: false,
				imgUrl: app.globalData.baseImageUrl,
				showTranIcon: false,
				scrollView: "",
				ques: "",
				hold: "h1",
				qaList: [],
				socketOpen: false,
				socketMsgQueue: [],
				canSend: true,
				placeHolder: "想了解什么工作，请告诉我吧",
				qaListLen: 0,
				historyList: [],
				scroll: 0,
				connected: false,
				connecting: false,
				socketTask: false,
				num: 1,
				curStrIndex: 0,
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				// scrollHeight: 0,
				subTabHeight: app.globalData.subTabHeight,
				showRecord: true,
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
				manager: uni.getRecorderManager(),
				voiceTime: 0, //总共录音时长,
				Audio: uni.createInnerAudioContext(),
				AudioExam: null, //正在播放音频的实例,
				currentPlayType: "",
				currentPlayIndex: 0,
				touchStartTime: 0,
				touchEndTime: 0,
				canRecord: true,
				contentHeight: 0,
				ifSingle: app.globalData.scene == 1154 ? true : false
			}
		},
		onShareAppMessage() {
			return {
				title: "AI找工作，两句话的事儿",
				path: "/pages/index/index",
				imageUrl: app.globalData.baseImageUrl + "/worker/mini_share.jpg"
			}
		},
		onShareTimeline() {
			return {
				title: "AI找工作，两句话的事儿",
				path: "/pages/index/index",
				imageUrl: app.globalData.baseImageUrl + "/worker/mini_share.jpg"
			}
		},
		computed: {
			scrollHeight() {
				// 根据内容的高度动态设置scroll-view的高度
				return this.contentHeight || 300; // 默认高度或根据实际情况设置
			}
		},
		async onLoad(param) {
			var _this = this;
			console.log(this.ifSingle, "ifsingle")
			if (this.ifSingle) {
				return
			}

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
			this.openid = await this.getOpenId()
			this.historyList = await this.getHistory()

			// this.scrollHeight = app.globalData.systemHeight - 4 * this.tabMargin - this.subTabHeight - this
			// 	.marginTop
			this.toScroll()
			this.creatConnect()
			let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			this.titleHeight = menuButtonInfo.height
			this.title = "风铃AI"
			uni.onKeyboardHeightChange(res => {
				console.log(res.height, "键盘高度变化")
				if (res.height == 0) {
					this.inputHeight = 0
				}
			})


			// this.getHistory()
			//录音开始事件
			this.manager.onStart(e => {
				console.log("录音开始")
				this.showInputing = true
				this.recordSecond = 0
				this.secondText = "00:00"
				this.startCount()
				this.getIconPosition()
			});
			//录音结束事件
			this.manager.onStop(res => {
				let _this = this
				console.log("录音结束")
				this.showInputing = false
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
				this.showInputing = false
				clearInterval(_this.secondTimer)
				console.log("录音出错：", res.errMsg)
			})
			//音频停止事件
			this.Audio.onStop(e => {
				this.closeAnmition();
			});

			//音频播放结束事件
			this.Audio.onEnded(e => {
				this.closeAnmition();
			});

		},
		onUnload() {
			this.close()
		},
		mounted() {
			this.$nextTick(() => {
				// 假设获取内容高度的逻辑
				this.getContentHeight();
			});
		},
		methods: {
			getContentHeight() {
				// 示例中假设获取内容高度的逻辑
				this.contentHeight = app.globalData.systemHeight - 5 * this.tabMargin - this.subTabHeight - this
					.marginTop; // 假设内容高度是1000px
			},
			showTrans(item, type) {
				if (item.showTranlate) {
					return
				}
				if (type == "his") {
					this.historyList.forEach((el, index) => {
						if (el.id == item.id) {
							el.showTranIcon = true
						}
					})
				} else {
					this.qaList.forEach((el, index) => {
						if (el.id == item.id) {
							el.showTranIcon = true
						}
					})
				}
			},
			bodyClick() {
				this.historyList.forEach((el, index) => {
					el.showTranIcon = false
				})
				this.qaList.forEach((el, index) => {
					el.showTranIcon = false
				})
			},
			startTrans(item, type) {
				let _this = this
				item.showTranIcon = false
				if (type == "his") {
					this.historyList.forEach((el, index) => {
						if (el.id == item.id) {
							el.showTranlate = true
						}
					})
				} else {
					if (!item.showTranlate) {
						_this.qaList.forEach((el, index) => {
							if (el.id == item.id) {
								el.showTransing = true
							}
						})
						let url = "/ai/voice/" + item.id + "/recognize/result"
						let t = setInterval(function() {
							_this.$request(url).then(res => {
								console.log(res, "查询结果")
								if (res.code == 0) {
									if (res.data.content) {
										item.content = res.data.content
										_this.qaList.forEach((el, index) => {
											if (el.id == item.id) {
												el.showTranlate = true
												el.showTransing = false
											}
										})
										clearInterval(t)
									}
								} else {
									clearInterval(t)
									uni.hideLoading()
								}
							})
						}, 1000)
					}

				}
			},
			//控制播放还是暂停音频文件
			handleAudio(type, item, index) {
				this.AudioExam = item;
				this.currentPlayType = type
				this.currentPlayIndex = index
				// this.playAudio(item)
				this.Audio.paused ? this.playAudio(item) : this.stopAudio(item);
			},
			//播放音频
			playAudio(item) {
				this.Audio.src = item.voice.media.url;
				this.Audio.id = item.id;
				this.Audio.play();
				if (this.currentPlayType == "his") {
					this.historyList.forEach((el, index) => {
						if (el.msg_type == "voice") {
							if (index == this.currentPlayIndex) {
								this.historyList[this.currentPlayIndex].voice.anmitionPlay = true
							} else {
								this.historyList[index].voice.anmitionPlay = false
							}
						}

					})
					this.qaList.forEach((el, index) => {
						if (el.msg_type == "voice") {
							this.qaList[index].voice.anmitionPlay = false
						}

					})

				} else {
					this.qaList.forEach((el, index) => {
						if (el.msg_type == "voice") {
							if (index == this.currentPlayIndex) {
								this.qaList[this.currentPlayIndex].voice.anmitionPlay = true
							} else {
								this.qaList[index].voice.anmitionPlay = false
							}
						}

					})
					this.historyList.forEach((el, index) => {
						if (el.msg_type == "voice") {
							this.historyList[index].voice.anmitionPlay = false
						}

					})

				}


				// item.anmitionPlay = true;
			},
			//停止音频
			stopAudio(item) {
				if (this.currentPlayType == "his") {
					this.historyList[this.currentPlayIndex].voice.anmitionPlay = false
					this.qaList.forEach((el, index) => {
						if (el.msg_type == "voice") {
							this.qaList[index].voice.anmitionPlay = false
						}

					})
				} else {
					this.qaList[this.currentPlayIndex].voice.anmitionPlay = false
					this.historyList.forEach((el, index) => {
						if (el.msg_type == "voice") {
							this.historyList[index].voice.anmitionPlay = false
						}

					})
				}
				// item.anmitionPlay = false;
				this.Audio.src = '';
				this.Audio.stop();
			},
			//关闭动画
			closeAnmition() {
				const id = this.Audio.id;
				let item;
				if (this.currentPlayType == "his") {
					this.historyList.forEach((el, index) => {
						if (el.msg_type == "voice") {
							if (el.id == id) {
								this.historyList[index].voice.anmitionPlay = false
							}
						}

					})
					// item = this.historyList.find(it => it.id == id);
				} else {
					this.qaList.forEach((el, index) => {
						if (el.msg_type == "voice") {
							if (el.id == id) {
								this.qaList[index].voice.anmitionPlay = false
							}
						}


					})
					// item = this.qaList.find(it => it.id == id);
				}
				this.currentPlayType = ""
				this.currentPlayIndex = 0
				// item.anmitionPlay = false;
			},
			// 处理录音数据
			handleRecorder({
				tempFilePath,
				duration
			}) {
				let _this = this

				console.log("tempFilePath", tempFilePath)
				console.log("duration", duration)
				this.voiceTime = 0;
				if (duration < 600) {
					uni.showToast({
						title: "说话时间过短",
						icon: "error",
						duration: 2000
					})
					// setTimeout(() => {
					// 	_this.showInputing = false;
					// }, 200)
					return;
				}
				// contentDuration = duration / 1000;
				this.showInputing = false;
				// let showData = {
				// 	id: new Date().getTime(),
				// 	content: "",
				// 	origin: "customer",
				// 	voice: {
				// 		media: {
				// 			key: "",
				// 			url: tempFilePath
				// 		},
				// 		second: duration / 1000,
				// 		anmitionPlay: false
				// 	}
				// }
				// if (!this.cancelRecord) {
				// 	this.qaList.push(showData)
				// }
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
							let binaryId = _this.stringToUint8Array(id + "@@@")
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
				this.recordSecond = 0
				let _this = this
				this.secondTimer = setInterval(function() {
					console.log("recordSecond:", _this.recordSecond)
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
			startRecord(e) {
				this.touchStartTime = e.timeStamp
				if (!this.Audio.paused) {
					//如果音频正在播放 先暂停。
					this.stopAudio(this.AudioExam)
				}
				uni.vibrateShort({
					success: function() {
						console.log('success');
					}
				});
				this.startPoint = e.touches[0]; //记录长按时开始点信息，后面用于计算上划取消时手指滑动的距离。
				// this.showInputing = true
				this.cancelRecord = false
				this.manager.start({
					duration: 60000,
					lang: "zh_CN"
				});
			},
			stopRecord(e) {
				let _this = this
				this.touchEndTime = e.timeStamp
				if ((this.touchEndTime - this.touchStartTime) > 1000) {
					this.showInputing = false
					this.manager.stop()
				} else {
					setTimeout(function() {
						_this.manager.stop();
					}, 1000)
				}


			},
			//录音被打断
			cancelVoice(e) {
				console.log("touch取消")
				this.voiceTime = 0;
				// this.canSend = false;
				this.manager.stop();
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
				// this.initRecord()

			},
			openSeepking() {
				this.enableSpeeking = !this.enableSpeeking
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
				uni.showLoading()
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
							newArr = _this.handleList(newArr)
							resolve(newArr)
						}
					})
				})

			},
			getMoreHistory() {
				if (!this.loadAllHistory) {
					uni.showLoading()
					let url = "/ai/chat/histories?id=" + this.historyId
					this.$request(url).then(res => {
						if (res.code == 0) {
							uni.hideLoading()
							let resArr = res.data.reverse()
							let newArr = this.handleList(resArr)
							this.historyList = newArr.concat(this.historyList)
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
			toScroll() {
				let _this = this
				this.$nextTick(() => {
					console.log(123)
					if (_this.qaList.length == 0) {
						var num = _this.historyList.length - 1;
						if (num >= 0) {
							setTimeout(function() {
								_this.scrollView = "his" + num
								uni.hideLoading()
							}, 500)

						}

					} else {
						var num2 = _this.qaList.length - 1;
						setTimeout(function() {
							_this.scrollView = "qa" + num2
							uni.hideLoading()
						}, 500)

						// this.scrollView = this.hold
						// console.log(this.scrollView)
					}
					console.log(_this.scrollView, "scrollView")
				})
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
						var showData = {
							content: this.ques,
							origin: "customer",
							msg_type: "text"
						}
						this.send(this.ques, showData, "")
					}
				}
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
						console.log("链接成功")
					},
					fail(err) {
						uni.showModal({
							title: err.errMsg
						})
						// 这里是接口调用失败的回调，不是连接失败的回调，请注意
					}
				})
				this.connect()
				console.log(this.socketTask, "socketTask");
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
						if (respone.data.content != "pong" && respone.data.content) {
							_this.qaList.push(respone.data)
							_this.toScroll();
							if (_this.enableSpeeking) {
								_this.formatResultStr(respone.data.content)
							}
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
					let data = "ping"
					_this.send(data, "", "")
				}, 10000)
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
			send(data, param, type) {
				let _this = this

				this.socketTask.send({
					data: type == "voice" ? data : JSON.stringify({
						content: data
					}),
					success(res) {
						console.log(data, "data")
						if (data != "ping") {
							if (!_this.cancelRecord) {
								_this.showAnswering = true
								_this.qaList.push(param)
								_this.num++
								_this.hold = "h" + _this.num
								_this.toScroll()
								_this.ques = "";
								_this.placeHolder = "正在回答中，请稍后..."
								_this.qaListLen = _this.qaList.length
							}

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
			cancel() {
				this.showWanner = false
				this.toScroll()
			},
			noPosition() {
				this.showReAuth = false
			}
		}
	}
</script>

<style lang="scss">
	.single_page {
		width: 100%;
		height: 100vh;
		background: url($back-ground-url+"/worker/welcome_pink.png") no-repeat;
		background-size: cover;
		position: relative;

		.intro {
			width: 75%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			.title {
				margin-bottom: 27rpx;

				.tit {
					font-family: YEFONTTangYingHei;
					font-size: 46rpx;
					color: #fff;
					line-height: 65rpx;
					font-weight: 600;
				}
			}

			.text {
				font-family: PingFangSC, PingFang SC;
				font-weight: 400;
				font-size: 31rpx;
				color: #333333;
				line-height: 60rpx;
			}

			.btn {
				background: linear-gradient(136deg, #FFFFFF 0%, #FFE8C2 100%);
				box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(78, 28, 100, 0.43);
				border-radius: 8rpx;
				font-family: STHeiti;
				font-size: 35rpx;
				color: #333333;
				height: 88rpx;
				text-align: center;
				line-height: 88rpx;
				letter-spacing: 1px;
				margin-top: 80rpx;

				image {
					width: 48rpx;
					margin-left: 34rpx;
					vertical-align: middle;
				}
			}
		}
	}

	.voice_icon {
		height: 34rpx;
		width: 34rpx;
		background-repeat: no-repeat;
		background-size: 100%;
		flex-shrink: 0;
	}

	.voice_icon_right {
		background-image: url($back-ground-url+'/worker/voice-left-3.png');
		margin-left: 10rpx;
	}

	.voice_icon_right_an {
		animation: voiceAn_right 1s linear alternate infinite;
	}

	@keyframes voiceAn_right {
		0% {
			background-image: url($back-ground-url+'/worker/voice-left-1.png');
		}

		50% {
			background-image: url($back-ground-url+'/worker/voice-left-2.png');
		}

		100% {
			background-image: url($back-ground-url+'/worker/voice-left-3.png');
		}
	}

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
			font-size: 30rpx;
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
		width: 100%;
		height: 100vh;
		// position: fixed;
		// top: 0;
		// left: 0;
		// right: 0;
		// bottom: 0;
		// background: rgba(0, 0, 0, .6);
		// z-index: 105;

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
			height: 100%;
			background: #fff;
			border-top-left-radius: 16rpx;
			border-top-right-radius: 16rpx;
			box-sizing: border-box;
			// position: absolute;
			// left: 0;
			// bottom: 0;

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
					width: 100%;
					text-align: center;

					image {
						width: 40rpx;
					}
				}
			}
		}
	}



	.ques_wrap {
		width: calc(100% - 80rpx);
		position: fixed;
		bottom: 0;
		left: 40rpx;
		max-width: 700px;
		// border: 1px solid $base-color;
		// border-bottom: 1px solid #04babe;
		background: #fff;
		border-radius: 10rpx;
		margin: 0 auto;
		// padding: 0 16rpx;
		box-sizing: border-box;
		z-index: 100;

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
						width: calc(100% - 85rpx);

						&>image {
							width: 65rpx;
							height: 65rpx;
							flex-shrink: 0;
							vertical-align: top;
							margin-left: 0;
							border-radius: 50%;
						}

						.cont {
							display: inline-block;
							// max-width: calc(100% - 110rpx);
							overflow: hidden;
							line-height: 42rpx;
							// color: #fff;
							font-size: 30rpx;
							font-family: "微软雅黑";
							// background: #106afa;
							text-align: left;

							text {
								padding: 20rpx;
								border-radius: 16rpx;
								box-sizing: border-box;
								display: block;
							}



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
							text {
								color: #333;
								background: #fff;
							}

						}
					}

					&.right {
						display: flex;
						justify-content: flex-end;

						.inline_box {
							align-items: start;
							justify-content: flex-end;

							.cont {
								width: 100%;
								position: relative;
								overflow: visible;

								&.textcont {
									width: auto;
									max-width: 100%;
								}

								// display: flex;
								// justify-content: flex-end;
								// flex-wrap: wrap;
								// align-items: center;

								text {
									background: linear-gradient(117deg, #4F85FD 0%, #72BAFF 100%);
									color: #fff;
								}

								.trans {
									image {
										width: 120rpx !important;
										margin-right: 16rpx;
										margin-left: 0;
										flex-shrink: 0;
									}

									// position: absolute;
									// bottom: 100%;
									// right: 0;
									// background: #e4f2fd;
									// width: 68rpx;
									// height: 68rpx;
									// line-height: 68rpx;
									// text-align: center;
									// border-radius: 50%;
									// // padding: 6rpx 10rpx;
									// font-size: 26rpx;
									// color: #0548fd;
									// z-index: 130;
									// transform: translateY(-3px);
								}
							}

							.voice_wrap {

								text-align: center;
								background: linear-gradient(117deg, #4F85FD 0%, #72BAFF 100%);
								color: #fff;
								padding: 20rpx;
								border-radius: 16rpx;
								box-sizing: border-box;

								image {
									width: 20rpx !important;
									vertical-align: middle;
									flex-shrink: 0;

									&.gif {
										width: 50rpx !important;
									}
								}

							}

							.trans_result {
								// width: 100%;
								padding: 20rpx;
								border-radius: 16rpx;
								box-sizing: border-box;
								// display: block;
								background: #fff;
								margin-top: 10rpx;
								font-size: 28rpx;
								// flex-shrink: 0;
								float: right;

								image {
									width: 80rpx;
								}
							}
						}

						// .cont {
						// 	background: linear-gradient(117deg, #4F85FD 0%, #72BAFF 100%);
						// 	color: #fff;
						// }
					}
				}
			}
		}
	}
</style>