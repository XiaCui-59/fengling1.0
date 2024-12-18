<template>
	<view class="mask">
		<view class="top">
			<view class="avatar">
				<image :src="imgUrl+'/worker/new/index_ai_logo.png'" mode="widthFix">
				</image>
			</view>
			<view class="gif_area">
				<image :src="imgUrl+'/worker/new/noinput.webp'" mode="widthFix" class="noinput"
					:class="aiSpeeking?'':'show'">
				</image>
				<image :src="imgUrl+'/worker/answering.gif'" mode="widthFix" class="inputing"
					:class="aiSpeeking?'show':''"></image>
			</view>
		</view>
		<view class="bot">
			<view class="input_tips" v-show="inputStatus">
				<image :src="imgUrl+'/worker/answering.gif'" mode="widthFix" class="inputing">
				</image>
				<view class="">请讲，正在听</view>
			</view>
			<!-- <view class="input_tips" v-show="!inputStatus" @click="interrupt">
				<view class="sque" v-show="aiSpeeking"></view>
				<view class="" v-show="aiSpeeking">点击打断</view>
			</view> -->
			<view class="btn_area flex flex_around" @click="close">
				<image :src="imgUrl+'/worker/new/close_chat.png'" mode="widthFix"></image>
			</view>
		</view>
		<!-- <image :src="imgUrl+'/worker/new/noinput.webp'" mode="widthFix" class="noinput" :class="inputStatus?'':'show'">
		</image>
		<image :src="imgUrl+'/worker/new/inputing_wave2.gif'" mode="widthFix" class="inputing"
			:class="inputStatus?'show':''"></image> -->
	</view>
</template>

<script>
	import urlSetting from "../../url_setting";
	const BASE_URL = urlSetting.urls.voiceUrl
	import {
		mapState,
		mapMutations
	} from "vuex"
	const app = getApp()
	export default {
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
				inputStatus: false, //用户输入状态
				manager: uni.getRecorderManager(),
				lowVoiceCount: 0, //低分贝（连续低于20）次数,
				audioCtx: wx.createWebAudioContext(),
				currentPlayIndex: 0,
				source: null,
				aiSpeeking: true,
				index: 0,
				result: [],
				tipsText: "请讲，正在听",
				closeStatus: false,
				highVoiceCount: 0, //高分贝（连续大于55）次数,由此判定用户是否有输入过语音
				longTimeNoInput: false, //用户长时间未输入语音标志
				action: "audio_call_user_enter" //记录当前用户的动作：audio_call_user_enter 进入语音通话；audio_call_user_long_time_without_talking 语音通话用户长时间不响应
			}
		},
		async onLoad() {
			// 设置用户动作为进入通话
			// this.action = "audio_call_user_enter"
			// 发送用户进入会话动作给服务器
			this.userEnter()
			this.initRecord()
			// this.startRecord()
		},
		onUnload: function() {
			this.close()
		},
		watch: {
			lowVoiceCount(newVaL) {
				if (newVaL > 30) {
					// 50的阈值大概8-10秒左右
					if (this.highVoiceCount < 20) {
						this.longTimeNoInput = true //长时间未输入
						this.action = "audio_call_user_long_time_without_talking"
					}
					this.inputStatus = false
					this.manager.stop()
				}
			},
			highVoiceCount(newVaL) {
				if (newVaL > 20) {
					// 50的阈值大概8-10秒左右
					this.longTimeNoInput = false
				}
			},
			inputStatus(newVal) {
				if (newVal) {
					this.resetData()
					this.startRecord()
				}
			}
		},
		computed: {
			...mapState(["answering", "connected", "connecting", "canSend", "inChannel", "answerContinue", "channelQaLen",
				"channelId", "channelQaList", "location", "token"
			])
		},
		methods: {
			close() {
				this.closeStatus = true
				//关闭录音
				this.manager.stop()
				if (this.audioCtx) {
					// 停止音频播放
					this.audioCtx.close();
					// 清除 WebAudioContext 对象
					this.audioCtx = null;
				}
				uni.navigateBack()
			},
			interrupt() {
				if (this.aiSpeeking) {
					this.audioCtx.close();
					this.resetData()
				}
			},
			resetData() {
				this.highVoiceCount = 0
				this.longTimeNoInput = false
				this.action = ""
				this.lowVoiceCount = 0
				this.index = 0
				this.result = []
				this.aiSpeeking = false
				this.inputStatus = true
			},
			startRecord() {
				this.manager.start({
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
				this.manager.onStart(e => {
					console.log("录音开始")
					this.inputStatus = true
				});
				//录音结束事件
				this.manager.onStop(res => {
					let _this = this
					console.log("录音结束：", res)
					_this.inputStatus = false
					// 录音结束，发送语音数据给后台
					if (!this.closeStatus) {
						this.handleRecorder(res)
					}
				});
				this.manager.onError(res => {
					let _this = this
					this.aiSpeeking = false
					this.inputStatus = true
					console.log("call录音出错：", res.errMsg)
				})
				this.manager.onFrameRecorded((res) => {
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
					console.log("db:", db)
					if (db < 55) {
						_this.lowVoiceCount++
					} else {
						_this.lowVoiceCount = 0
						_this.highVoiceCount++
					}
				})
			},
			userEnter() {
				let _this = this
				const binaryData = ""; //无语音输入
				let midata = new Uint8Array(binaryData)
				let time = new Date().getTime()
				let id = uni.getStorageSync("openid") + time
				let binaryId = _this.stringToUint8Array(id + "@@@" + _this.channelId + "@@@" + _this.action)
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
				_this.sendMessage(mergedArray.buffer)
			},
			// 处理录音数据
			handleRecorder({
				tempFilePath,
				duration
			}) {
				let _this = this
				// _this.sendMessage(data)
				wx.getFileSystemManager().readFile({
					filePath: tempFilePath,
					success: function(res) {
						// res.data是录音文件的二进制数据
						const binaryData = res.data;
						let midata = new Uint8Array(binaryData)
						let time = new Date().getTime()
						let id = uni.getStorageSync("openid") + time
						let binaryId = _this.stringToUint8Array(id + "@@@" + _this.channelId + "@@@" + _this
							.action)
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
						_this.sendMessage(mergedArray.buffer)
					},
					fail: function(error) {
						console.error('读取文件失败：', error);
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
			sendMessage(data) {
				let _this = this
				const requestTask = wx.request({
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
						console.log('接收完毕', _this.result)
					},
					fail: res => {
						console.error('request fail', res)
						// reject()
					}
				})
				requestTask.onChunkReceived((res) => {
					console.log("接收数据:", res.data)
					_this.aiSpeeking = true
					_this.audioCtx.decodeAudioData(res.data, buffer => {
						_this.index++
						console.log("buffer:", buffer)
						_this.result.push(buffer)
						if (_this.index == 1) {
							_this.play()
						}
					}, err => {
						console.error('decodeAudioData fail', err)
					})
				})
			},
			play() {
				let _this = this
				let len = this.result.length
				console.log("播放", this.currentPlayIndex, len)
				let source = this.audioCtx.createBufferSource()
				source.connect(this.audioCtx.destination)
				source.buffer = this.result[this.currentPlayIndex]
				if (_this.currentPlayIndex == len) {
					_this.currentPlayIndex = 0
					_this.aiSpeeking = false
					_this.inputStatus = true
					_this.result = []
					source.end()
					console.log("inputStatus:", _this.inputStatus)
					console.log("aiSpeeking:", _this.aiSpeeking)
				}
				source.start()
				source.onended = function() {
					console.log('音频播放结束');
					if (_this.currentPlayIndex < len) {
						_this.currentPlayIndex++
						_this.play()
					}
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
				top: 32rpx;
				right: -30rpx;
				background: #fff;
				padding: 0rpx 20rpx;
				box-sizing: border-box;
				border-radius: 40rpx;
				box-shadow: 0 0 2rpx 5rpx #f1f1f1;

				image {
					width: 100rpx;
					display: none;

					&.show {
						display: block;
					}
				}
			}
		}

		.bot {
			position: absolute;
			bottom: 70rpx;
			left: 50%;
			transform: translateX(-50%);

			.input_tips {
				text-align: center;
				font-size: 31rpx;
				color: #C5C5C5;

				image {
					width: 100rpx;
					// margin-bottom: 20rpx;
				}

				.sque {
					width: 38rpx;
					height: 38rpx;
					border-radius: 8rpx;
					margin: 0 auto 23rpx auto;
					background: #d4d4d4;

				}

			}

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