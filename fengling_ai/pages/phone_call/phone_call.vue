<template>
	<view class="mask">
		<view class="top">
			<view class="avatar">
				<image :src="imgUrl+'/worker/new/index_ai_logo.png'" mode="widthFix">
				</image>
			</view>
			<view class="gif_area" v-show="aiThrinking">
				<!-- 思考中 -->
				<image :src="imgUrl+'/worker/new/ai_thrinking.gif'" mode="widthFix" class="noinput"
					:class="aiThrinking?'show':''">
				</image>
			</view>
		</view>
		<view class="middle">
			<view class="input_tips" v-show="!inputStatus">
				<view class="text_wrap" v-show="aiThrinking">
					<!-- <view class="">好的</view> -->
					<view class="">请稍等，马上回复您</view>
				</view>
				<view class="text_wrap" v-show="aiSpeeking">
					<scrollText width="80%" v-if="!isWelcome && aiSpeeking" :receiveEnd="receiveEnd"></scrollText>
					<view v-show="isWelcome">您好呀！</view>
					<view v-show="isWelcome">{{status=="interview"?"即将开始面试":"想找什么类型的工作呀？"}}</view>
					<view v-show="isWelcome">{{status=="interview"?"请稍等":"都可以和我聊一聊哦"}}</view>
					<!-- AI正在说话 -->
					<image :src="imgUrl+'/worker/new/speeking.gif'" mode="widthFix" style="width:200rpx;"
						class="inputing">
					</image>
				</view>

			</view>
			<view class="input_tips" v-show="inputStatus">
				<view class="text_wrap">您请讲，我正在听</view>
				<!-- 用户没有说话 -->
				<image :src="imgUrl+'/worker/new/noinput3.png'" mode="widthFix" style="width:700rpx;" class="inputing"
					v-show="!hasVoice">
				</image>
				<!-- 用户正在说话 -->
				<image :src="imgUrl+'/worker/new/inputing_wave2.gif'" style="width:700rpx;" mode="widthFix"
					class="inputing" v-show="hasVoice">
				</image>
			</view>
		</view>
		<view class="bot">

			<view class="btn_area flex flex_around" @click="close">
				<image :src="imgUrl+'/worker/new/close_chat.png'" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import urlSetting from "../../url_setting";
	import scrollText from "@/components/scrollText.vue"
	const BASE_URL = urlSetting.urls.voiceUrl
	import {
		mapState,
		mapMutations
	} from "vuex"
	// import * as TextEncoding from "text-encoding-shim"
	const app = getApp()
	export default {
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
				inputStatus: false, //用户输入状态
				hasVoice: false, //用户是否有声音输入，根据分贝大小动态改变
				aiSpeeking: false, //AI正在说话
				aiThrinking: true, //AI正在思考
				audioCtx: wx.createWebAudioContext(), //创建音频播放上下文
				lowVoiceCount: 0, //低分贝（连续低于20）次数,
				highVoiceCount: 0, //高分贝（连续大于55）次数,由此判定用户是否有输入过语音
				currentPlayIndex: 0,
				index: 0, //接收的音频片段序号，当index=1时表示接收到第一条语音，开始播放音频
				resultArrayBuffer: [], //AI回复的未处理片段
				arrayBufferLength: 0,
				result: [], //AI回复的音频片段缓存数组
				longTimeNoInput: false, //用户长时间未输入语音标志
				action: "", //audio_call_user_long_time_without_talking 语音通话用户长时间不响应,
				welcomeVoice: [app.globalData.baseImageUrl + "/worker/call_wel01.mp3", app.globalData.baseImageUrl +
					"/worker/call_wel02.mp3"
				],
				receiveEnd: false,
				currentTransIndex: 0,
				closeStatus: false,
				errorVoice: app.globalData.baseImageUrl + "/worker/error.mp3?time=" + (new Date()).getTime(),
				requestTask: null,
				receiveCount: 0,
				transTimer: null,
				playTimer: null,
				isWelcome: true,
				status: "", //记录当前场景：普通（normal）;面试（interview)
				job_id: "", //记录当前面试的职位id，
				errorTimer: null, //异常判断
				getResponeTime: 0 //记录等待返回第一个音频的时间
			}
		},
		components: {
			scrollText
		},
		async onLoad(params) {
			this.setInCall()
			//音频停止事件
			app.globalData.Audio.onPlay(e => {
				this.aiSpeeking = true
				this.aiThrinking = false
				this.inputStatus = false
				this.hasVoice = false
			});
			//音频停止事件
			app.globalData.Audio.onStop(e => {
				// console.log("通话页停止")
			});

			//音频播放结束事件
			app.globalData.Audio.onEnded(e => {
				// console.log("通话页结束")
				this.isWelcome = false
				this.startRecord()
			});

			// 判断当前场景
			this.status = params.status ? params.status : ""
			this.job_id = params.job_id ? params.job_id : ""
			switch (this.status) {
				case "interview":
					this.action = "audio_interview";
					this.isWelcome = false
					this.handleAutoAction()
					break;
				case "findjob":
					this.action = "audio_look_for_job"
					this.userEnter()
					break;
				case "surejob":
					this.action = "audio_want_application"
					this.isWelcome = false
					this.handleAutoAction()
					break;
				default:
					this.userEnter()
					break;
			}


		},
		onShow() {
			this.initRecord()
		},
		onHide() {
			app.globalData.Audio.pause()
			// 移除Audio的各种监听
			app.globalData.Audio.offPlay()
			app.globalData.Audio.offPause()
			app.globalData.Audio.offStop()
			app.globalData.Audio.offEnded()
			app.globalData.manager.stop()
			app.globalData.Audio.stop()
			if (!this.closeStatus) {
				this.close()
			}
		},
		watch: {
			lowVoiceCount(newVaL) {
				let _this = this
				if (_this.highVoiceCount > 2) {
					// 有输入
					if (newVaL > 10) {
						app.globalData.manager.stop()
					}
				} else {
					// 无输入
					if (newVaL > 20) {
						app.globalData.manager.stop()
					}
				}

			},
			highVoiceCount(newVal) {
				if (newVal > 2) {
					// 有输入根据状态显示action
					if (this.status == "interview") {
						this.action = "audio_interview"
					} else if (this.status == "findjob") {
						this.action = "audio_look_for_job"
					} else if (this.status == "surejob") {
						this.action = "audio_want_application"
					} else {
						this.action = ""
					}
				} else {
					this.action = "audio_call_user_long_time_without_talking"
				}
			},
			inputStatus(newVal) {
				if (newVal) {
					this.resetData()
				}
			},
			resultArrayBuffer(newVal) {
				let _this = this
				// 监听接收到1个之后开始转换音频
				this.arrayBufferLength = newVal.length
				// console.log("接收元数据长度：", this.arrayBufferLength)
				// if (this.arrayBufferLength == 1) {
				// 	this.startTrans()
				// }
			},
			result(newVal) {
				// console.log("转换后音频长度：", newVal.length)
			}
		},
		computed: {
			...mapState(["answering", "connected", "connecting", "canSend", "inChannel", "answerContinue", "channelQaLen",
				"channelId", "channelQaList", "location", "token", "callContent", "incallEnroll", "incallJobId",
				"hangUpFirst"
			])
		},
		methods: {
			...mapMutations(["setInCall", "clearCallContent", "setAiSpeekingEnd", "resetAiSpeekingEnd",
				"resetIncallEnroll", "resetIncallJobId", "resetHangUpFirst"
			]),
			handleAutoAction() {
				// 处理我要报名和我要面试，由AI说第一句话
				let jobId = this.job_id ? this.job_id : this.incallJobId
				console.log("incallJobId：", jobId)
				// 面试场景
				let time = new Date().getTime()
				let id = uni.getStorageSync("openid") + time
				let other = id + "@@@" + this.channelId + "@@@" + jobId + "@@@" + this.action + "@@@"
				let sendData = this.concatBuffer(other, "")
				this.sendMessage(sendData)
			},
			close() {
				this.closeStatus = true
				this.clearCallContent()
				this.resetIncallEnroll()
				this.resetIncallJobId()
				if (this.audioCtx) {
					// 停止音频播放
					this.audioCtx.close();
					// 清除 WebAudioContext 对象
					this.audioCtx = null;
				}
				if (app.globalData.Audio) {
					//关闭录音
					app.globalData.Audio.stop()
				}
				if (app.globalData.manager) {
					//关闭录音
					app.globalData.manager.stop()
				}
				if (this.requestTask) {
					this.requestTask.offChunkReceived() //取消监听数据返回函数
					this.requestTask.abort() // 取消请求任务
				}
				if (this.transTimer) {
					clearInterval(this.transTimer)
				}
				if (this.playTimer) {
					clearInterval(this.playTimer)
				}
				let pages = getCurrentPages();
				// prevPage 是获取上个页面的js里面的pages的所有信息，-2是上个页面，-3是上上个页面 以此类推
				let prevPage = pages[pages.length - 2];
				// 在本页面修改上一个页面的 data
				if (prevPage && prevPage.$vm.changeTab) {
					prevPage.$vm.changeTab(1)
				}
				setTimeout(function() {
					uni.navigateBack()
				}, 500)

			},
			resetData() {
				//关闭录音
				this.currentPlayIndex = 0
				this.highVoiceCount = 0
				this.longTimeNoInput = false
				this.lowVoiceCount = 0
				this.result = []
				this.receiveEnd = false
				this.resultArrayBuffer = []
				this.arrayBufferLength = 0
				this.currentTransIndex = 0
				this.receiveCount = 0
			},
			startRecord() {
				if (this.closeStatus) {
					return
				}
				app.globalData.manager.start({
					format: 'PCM',
					sampleRate: 8000,
					numberOfChannels: 2,
					encodeBitRate: 16000,
					frameSize: 4,
					duration: 600000
				})
			},
			initRecord() {
				//录音开始事件
				app.globalData.manager.onStart(e => {
					// console.log("录音开始")
					this.playTipsVoice()
					// uni.vibrateShort({
					// 	success: function() {}
					// });
					this.inputStatus = true //开启用户输入
					this.aiSpeeking = false //关闭ai动效
					this.aiThrinking = false //关闭ai动效
					this.hasVoice = true
				});
				//录音结束事件
				app.globalData.manager.onStop(res => {
					let _this = this
					// console.log("录音结束：", res)
					_this.inputStatus = false
					_this.hasVoice = false
					_this.aiThrinking = true //开启ai思考动效
					_this.aiSpeeking = false
					if (!_this.closeStatus) {
						// 录音结束，发送语音数据给后台
						this.handleRecorder(res)
					}

				});
				app.globalData.manager.onError(res => {
					let _this = this
					// console.log("phonecall录音出错：", res.errMsg)
				})
				app.globalData.manager.onFrameRecorded((res) => {
					let _this = this
					const {
						frameBuffer
					} = res;
					let uint16Array = new Int16Array(frameBuffer)
					let len = uint16Array.length
					let squareSum = 0
					uint16Array.forEach(uint16 => {
						squareSum += uint16 * uint16
					})
					if (squareSum < 10000) return
					let recordVolume = squareSum / len
					let db = parseInt(10 * Math.log10(recordVolume))
					// console.log("当前分贝值：", db)
					if (db < 60) {
						// 分贝太小
						_this.hasVoice = false
						_this.lowVoiceCount++
					} else {
						_this.hasVoice = true
						_this.lowVoiceCount = 0
						_this.highVoiceCount++
					}
				})
			},
			userEnter() {
				// 用户进入页面，随机播放一条欢迎音频
				let i = Math.floor(Math.random() * this.welcomeVoice.length)
				app.globalData.Audio.src = this.welcomeVoice[i];
				app.globalData.Audio.play();
			},
			playError() {
				if (this.closeStatus) {
					return
				}
				app.globalData.Audio.src = this.errorVoice;
				app.globalData.Audio.play();
				this.clearCallContent()
				this.aiSpeeking = true
				this.aiThrinking = false
				this.inputStatus = false
				this.hasVoice = false
			},
			// 处理录音数据
			handleRecorder({
				tempFilePath,
				duration
			}) {
				let _this = this
				wx.getFileSystemManager().readFile({
					filePath: tempFilePath,
					success: function(res) {
						let jobId = _this.job_id ? _this.job_id : _this.incallJobId
						let time = new Date().getTime()
						let id = uni.getStorageSync("openid") + time
						let other = id + "@@@" + _this.channelId + "@@@" + jobId + "@@@" + _this
							.action +
							"@@@"
						let sendData = _this.concatBuffer(other, res.data)
						_this.sendMessage(sendData)
					},
					fail: function(error) {
						console.error('读取文件失败：', error);
						_this.playError()
					}
				});
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
			playTipsVoice() {
				let source = this.audioCtx.createOscillator()
				let gain = this.audioCtx.createGain();

				source.connect(gain);
				gain.connect(this.audioCtx.destination);
				source.type = 'sine'; // 使用正弦波
				source.frequency.value = 300.50; // 调高音调到C6
				gain.gain.setValueAtTime(2, this.audioCtx.currentTime); // 降低音量
				gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.5); // 延长衰减时间

				source.start();
				source.stop(this.audioCtx.currentTime + 0.5);
			},
			concatBuffer(other, data) {
				let midata = new Uint8Array(data)
				let binaryId = this.stringToUint8Array(other)
				// 输出拼接后的 Uint8Array
				// 计算总长度
				const totalLength = binaryId.length + midata.length;
				// 创建一个新的 Uint8Array，长度为所有数组的总和
				let mergedArray = new Uint8Array(totalLength);
				// 使用 set 方法将每个 Uint8Array 的数据填充到新的 Uint8Array 中
				let offset = 0;
				mergedArray.set(binaryId, offset);
				offset += binaryId.length;
				mergedArray.set(midata, offset);
				return mergedArray.buffer
			},
			sendMessage(data) {
				console.log("用户发送了语音")
				let _this = this
				this.requestTask = wx.request({
					url: BASE_URL,
					enableChunked: true,
					header: {
						'content-type': 'application/json',
						"app-id": urlSetting.urls.appid,
						"open-id": uni.getStorageSync("openid") ? uni.getStorageSync("openid") : "",
						"address": encodeURIComponent(JSON.stringify(_this.location)),
						"Authorization": "bearer " + uni.getStorageSync("token"),
						"Content-Type": "application/octet-stream"
					},
					responseType: 'arraybuffer',
					method: 'POST',
					data: data,
					success: res => {
						console.log("发送成功")
					},
					fail: res => {
						console.error('request fail', res)
						// 链接出现问题
						_this.requestTask.offChunkReceived() //取消监听数据返回函数
						app.globalData.Audio.stop()
						setTimeout(function() {
							console.log("request请求失败或超时")
							_this.playError()
						}, 500)

					}
				})
				this.errorTimer = setInterval(function() {
					if (_this.getResponeTime < 15) {
						// 10秒内是否返回第一段音频
						if (_this.receiveCount > 0) {
							clearInterval(_this.errorTimer)
							app.globalData.Audio.stop()
						} else {
							_this.getResponeTime++
						}
					} else {
						_this.getResponeTime = 0
						clearInterval(_this.errorTimer)
					}

				}, 1000)
				this.requestTask.onChunkReceived((res) => {
					_this.receiveCount++
					if (_this.receiveCount == 1) {
						console.log("接收到第一条数据")
						_this.transFirst(res.data)
					}
					_this.resultArrayBuffer.push(res.data)

					const uint8Array = new Uint8Array(res.data);
					// 判断接收到的片段是否包含 "[DONE]" 标记
					const doneMarker = new Uint8Array([91, 68, 79, 78, 69, 93]);
					// const doneMarker = new Uint8Array([0x5B, 0x44, 0x4F, 0x4E, 0x45, 0x5D]); // 对应 "[DONE]"
					const containsDoneMarker = _this.containsDoneMarker(uint8Array, doneMarker);

					if (containsDoneMarker) {
						// 处理完成
						console.log("检测到 [DONE] 标记");
						_this.receiveEnd = true
						_this.requestTask.offChunkReceived() //取消监听数据返回函数
					}

				})
			},
			transFirst(data) {
				let _this = this
				// 解码第一条数据
				_this.audioCtx.decodeAudioData(data, buffer => {
					_this.currentTransIndex++
					if (_this.currentTransIndex == 1) {
						_this.resetAiSpeekingEnd()
						_this.playFirst(buffer)
						_this.isWelcome = false
						_this.playTipsVoice()
					}
					_this.result.push(buffer)
					_this.startTrans()

				}, err => {
					// 音频转换失败，重新转换
					// console.log("当前解码失败索引：", _this.currentTransIndex, data)
					console.error('decodeAudioData fail', err)
					// 将第一条从原始数据中移除
					_this.resultArrayBuffer.splice(0, 1)
					_this.startTrans()
				})

			},
			startTrans() {
				let _this = this
				if (_this.currentTransIndex < _this.arrayBufferLength) {
					let data = _this.resultArrayBuffer[_this.currentTransIndex]
					_this.audioCtx.decodeAudioData(data, buffer => {
						_this.currentTransIndex++
						if (_this.currentTransIndex == 1) {
							_this.resetAiSpeekingEnd()
							_this.playFirst(buffer)
							_this.isWelcome = false
							_this.playTipsVoice()
						}
						_this.result.push(buffer)
						_this.startTrans()

					}, err => {
						// 音频转换失败，重新转换
						console.error('decodeAudioData fail', err)
						_this.resultArrayBuffer.splice(_this.currentTransIndex, 1)
						// _this.currentTransIndex++
						_this.startTrans()
					})
				} else {
					if (_this.receiveEnd) {
						// 转换完毕
						// console.log("转换完毕：", _this.result.length, _this.arrayBufferLength)
					} else {
						// 轮询是否已经转换完毕
						_this.transTimer = setInterval(function() {
							if (_this.currentTransIndex < _this.arrayBufferLength) {
								_this.startTrans()
								clearInterval(_this.transTimer)
							}
						}, 500)
					}

				}

			},
			// 检查 Uint8Array 的最后部分是否包含 [DONE] 标记
			containsDoneMarker(uint8Array, doneMarker) {
				const markerLength = doneMarker.length;
				// 检查 uint8Array 的最后部分是否与 doneMarker 匹配
				if (uint8Array.length < markerLength) return false; // 如果数据长度小于标记长度，直接返回 false
				for (let i = 0; i < markerLength; i++) {
					if (uint8Array[uint8Array.length - markerLength + i] !== doneMarker[i]) {
						return false; // 如果不匹配，返回 false
					}
				}
				return true; // 匹配成功
			},
			playFirst(data) {
				let _this = this
				_this.aiSpeeking = true
				_this.aiThrinking = false
				_this.inputStatus = false
				_this.hasVoice = false
				let source = this.audioCtx.createBufferSource()
				source.connect(this.audioCtx.destination)
				source.buffer = data
				source.start()
				source.onended = function() {
					// console.log('片段播放结束');
					_this.currentPlayIndex++
					_this.play()
				};
			},
			play() {
				let _this = this
				let len = this.result.length
				// console.log(_this.currentPlayIndex, len, _this.arrayBufferLength, _this.receiveEnd)
				if (_this.currentPlayIndex == len) {
					// 当前播放与转义后数组长度相同，再判断
					if ((len == _this.arrayBufferLength) && _this.receiveEnd) {
						// 语音播放完毕，判断如果是报名成功立即进入面试流程。否则数据重置，并重新开启用户语音输入
						// console.log("播放完毕")
						_this.resetData()
						_this.setAiSpeekingEnd()
						_this.clearCallContent()
						console.log("语音对话中报名了吗：", _this.incallEnroll)
						if (_this.incallEnroll) {
							// 用户报名成功，进入面试流程
							_this.action = "audio_interview"
							_this.status = "interview"
							_this.aiSpeeking = false
							_this.aiThrinking = true
							_this.handleAutoAction()
						} else {
							if (_this.hangUpFirst) {
								//主动挂断电话
								_this.resetHangUpFirst()
								_this.close()
							} else {
								_this.startRecord()
							}
						}


					} else {
						// 轮询是否有新数据返回
						_this.playTimer = setInterval(function() {
							if (_this.currentPlayIndex < _this.result.length) {
								_this.play()
								clearInterval(_this.playTimer)
							}
						}, 500)
					}
					return
				}
				_this.aiSpeeking = true
				_this.aiThrinking = false
				_this.inputStatus = false
				_this.hasVoice = false
				let source = this.audioCtx.createBufferSource()
				source.connect(this.audioCtx.destination)
				source.buffer = this.result[this.currentPlayIndex]
				source.start()
				source.onended = function() {
					// console.log('片段播放结束');
					_this.currentPlayIndex++
					_this.play()
				};
			}
		}
	}
</script>

<style lang="scss">
	.mask {
		background: rgba(0, 0, 0, .9);

		.top {
			position: absolute;
			top: 230rpx;
			left: 50%;
			transform: translateX(-50%);

			.avatar {
				font-size: 0;

				image {
					width: 400rpx;
				}
			}

			.gif_area {
				position: absolute;
				top: 65rpx;
				right: -70rpx;
				background: #fff;
				padding: 30rpx 30rpx;
				box-sizing: border-box;
				border-radius: 40rpx;
				box-shadow: 0 0 2rpx 5rpx #f1f1f1;

				image {
					width: 86rpx;
					display: none;

					&.show {
						display: block;
					}
				}
			}
		}

		.middle {
			width: 100%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateX(-50%);

			.input_tips {
				text-align: center;
				font-size: 31rpx;
				color: #C5C5C5;

				.text_wrap {
					line-height: 50rpx;
					margin-bottom: 60rpx;
				}

				image {
					width: 100rpx;

				}

				.sque {
					width: 38rpx;
					height: 38rpx;
					border-radius: 8rpx;
					margin: 0 auto 23rpx auto;
					background: #d4d4d4;

				}

			}
		}

		.bot {
			position: absolute;
			bottom: 70rpx;
			left: 50%;
			transform: translateX(-50%);

			.btn_area {
				margin-top: 150rpx;

				image {
					width: 138rpx;
				}
			}
		}

		// image {
		// 	width: 70%;
		// 	position: absolute;
		// 	top: 50%;
		// 	left: 50%;
		// 	transform: translate(-50%, -50%);
		// 	display: none;

		// 	&.show {
		// 		display: block;
		// 	}
		// }
	}
</style>