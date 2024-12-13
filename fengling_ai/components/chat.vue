<template>
	<view class="content_body body_bg" :style="{paddingTop:top+'px',paddingBottom:bottom+'px'}">
		<!-- 有聊天对话区 -->
		<view class="chat_area">
			<scroll-view class="chat_wrap" :scroll-into-view="scrollView" :style="{height:scrollHeight+'px'}"
				:scroll-y="true" id="chatwrap" :refresher-enabled="true" :refresher-triggered="trigger"
				@refresherrefresh="getMoreHistory">
				<!-- 历史记录 -->
				<view class="history list">
					<view class="qa_item" v-for="(item,index) in historyList" :key="item.id" :id="'his'+item.id">
						<view class="line" :class="item.origin == 'customer'?'right':'left'">
							<view class="inline_box">
								<view class="cont" :class="item.msg_type == 'text'?'textcont':''">
									<!-- 文字信息 -->
									<rich-text :nodes="item.content"
										:class="item.origin == 'customer'?'customer_text':'ai_text'"
										v-if="item.msg_type == 'text'  && item.origin == 'customer'"></rich-text>
									<markdown-render :sourceMdContent="item.content" :showCursor="false" class="ai_text"
										v-if="item.origin == 'ai'"></markdown-render>
									<view class="voice_line flex flex_end">
										<view class="trans" v-show="item.showTranIcon"
											@click.stop="startTrans(item,'his')">
											<image :src="imgUrl+'/worker/ic_trans.png'" mode="widthFix"></image>
										</view>
										<!-- 语音消息 -->
										<view class="voice_wrap flex flex_end" v-if="item.msg_type == 'voice'"
											@tap.stop="handleAudio('his',item,index)" @longpress="showTrans(item,'his')"
											:style="{width:Math.ceil(item.voice.second * 20)+'px',maxWidth:'calc(100% - 136rpx)',minWidth:'60px'}">

											<view class="seconds">{{Math.ceil(item.voice.second)}}'</view>
											<view class="voice_icon" :class="[
													{ voice_icon_right: true },
													{ voice_icon_right_an: item.voice.anmitionPlay }
												]"></view>
										</view>
									</view>
									<rich-text :nodes="item.content" class="trans_result text"
										v-if="item.showTranlate"></rich-text>
								</view>
								<!-- 添加客服微信 -->
								<cardKefu v-show="item.msg_type == 'card' && item.card && item.card.type == 'QCODE'">
								</cardKefu>
							</view>
						</view>
					</view>

					<view class="fenge flex flex_around" id="fenge_line" v-show="historyList.length>0">
						<view class="fgline"></view>
						<view class="text">以上是历史记录</view>
						<view class="fgline"></view>
					</view>
				</view>

				<view class="list" id="listWrap" v-if="qaList.length!=0">
					<!-- <view class="list" id="listWrap" :style="{paddingBottom:subTabHeight+30+'px',boxSizing:'border-box'}"> -->
					<view class="qa_item" v-for="(item,index) in qaList" :key="item.id" :id="'qa'+index">
						<view class="line" :class="item.origin == 'customer'?'right':'left'">
							<view class="inline_box">
								<view class="cont" :class="item.msg_type == 'text'?'textcont':''" :id="'cont'+index">
									<!-- 文字信息 -->
									<rich-text :nodes="item.content"
										:class="item.origin == 'customer'?'customer_text':'ai_text'"
										v-if="item.msg_type == 'text'  && item.origin == 'customer'"></rich-text>
									<markdown-render :sourceMdContent="item.content" :showCursor="false" class="ai_text"
										:class="index == (qaList.length - 1) && answerContinue?'last_ai_text':''"
										v-if="item.msg_type == 'text' && item.origin != 'customer'"></markdown-render>
									<view class="voice_line flex flex_end">
										<view class="trans" v-show="item.showTranIcon"
											@click.stop="startTrans(item,'qa')">
											<image :src="imgUrl+'/worker/ic_trans.png'" mode="widthFix"></image>
										</view>
										<!-- 语音消息 -->
										<view class="voice_wrap flex flex_end" v-if="item.msg_type == 'voice'"
											@tap.stop="handleAudio('qa',item,index)" @longpress="showTrans(item,'qa')"
											:style="{width:Math.ceil(item.voice.second * 20)+'px',maxWidth:'calc(100% - 136rpx)',minWidth:'60px'}">

											<view class="seconds">{{Math.ceil(item.voice.second)}}'</view>
											<view class="voice_icon" :class="[
														{ voice_icon_right: true },
														{ voice_icon_right_an: item.voice.anmitionPlay }
													]"></view>
										</view>
									</view>
									<rich-text :nodes="item.content" class="trans_result text"
										v-if="item.showTranlate"></rich-text>
								</view>
								<!-- 您还可以这样问 -->
								<view class="may_ask"
									v-if="item.may_ask?(item.may_ask.length>0&&index == qaList.length -1 && (!answerContinue)):false">
									<!-- <view class="tit">{{item.printMayAsk.title}}</view> -->
									<view class="may_ask_list">
										<view class="ask_item flex flex-start"
											v-for="(askItem,askIndex) in item.may_ask" :key="`ask${askIndex}`">
											<view class="text" @click.stop="()=>sendMsg(askItem,'tip')">{{askItem}}
											</view>
										</view>
									</view>
								</view>
								<!-- 添加客服微信 -->
								<cardKefu v-if="item.card && item.card.type == 'QCODE' && !answerContinue"></cardKefu>

							</view>
						</view>
					</view>
				</view>
				<view class="list">
					<view class="qa_item" :style="{paddingBottom: '20rpx',display:answering?'block':'none'}"
						id="answering">
						<view class="line left">
							<view class="inline_box flex" style="align-items: center;">
								<view class="cont flex " style="width:400rpx;text-align: center;">
									<text>正在努力思考</text>
									<image :src="imgUrl+'/worker/answering.gif'" mode="widthFix"
										style="width:100rpx;margin-left:10rpx;margin-right: 0; vertical-align: middle;">
									</image>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="list">
					<view class="qa_item" :style="{paddingBottom: '20rpx'}" id="continue">
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	// import commonMethods from "@/common/commMethods.js"
	import {
		mapState,
		mapMutations
	} from "vuex"
	import cardKefu from "@/components/chat_card_kefu.vue"
	const app = getApp();
	export default {
		name: "welcome",
		props: ["top", "bottom", "historyList", "qaList", "scrollHeight", "answering", "greetingObj", "answerContinue",
			"scrollStr"
		],
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
				tipList: [{
					text: "我想找个长白班的工作。"
				}, {
					text: "请问哪些工作是提供吃住的？"
				}, {
					text: "有没有适合我的工作，轻松一点的。"
				}],
				historyId: 0,
				loadAllHistory: false,
				scrollView: "fenge_line",
				Audio: app.globalData.Audio,
				currentPlayType: "",
				currentPlayIndex: 0,
				currentContHeight: 0,
				freshing: false,
				trigger: false,
				cardDoubleClick: false //防止卡片连续点击
			};
		},
		computed: {
			...mapState(["showInterviewCard", "inChannel", "channelId", "showChannelInterviewCard", "sureJobName",
				"sureJobId"
			])
		},
		components: {
			cardKefu
		},
		async created() {

			//音频停止事件
			this.Audio.onStop(e => {
				this.closeAnmition();
			});

			//音频播放结束事件
			this.Audio.onEnded(e => {
				this.closeAnmition();
			});
		},
		watch: {
			// 深度监听list数组的变化
			qaList: {
				handler: function(newVal, oldVal) {
					let _this = this
					this.getElementHeight()
					// 当最后一条消息是用户时，关闭面试卡片
					if (newVal[newVal.length - 1].origin == 'customer') {
						// this.closeInterviewCard()
					}
				},
				deep: true, // 开启深度监听
			},
			currentContHeight(newVal) {
				let _this = this
				console.log("currentContHeight改变了")
				// console.log("currentContHeight:", newVal)
				// _this.toScroll()
				if (this.answerContinue) {
					// 正在回答问题时高度变化滚动
					setTimeout(function() {
						_this.toScroll()
					}, 1000)
				}

			},

			// },
			scrollHeight(newVal) {
				console.log("新窗口高度：", newVal)
				this.toScroll()
			},
			answerContinue(newVal) {
				console.log("answerContinue改变了")
				if (!newVal) {
					this.toScroll()
				}
			},
			answering(newVal) {
				console.log("answering改变了")
				if (newVal) {
					this.toScroll()
				}
			},
			scrollStr(newVal) {
				console.log("scrollStr改变了")
				let _this = this
				_this.scrollView = ""
				this.$nextTick(() => {
					_this.scrollView = newVal
				})
			}
		},
		components: {},
		methods: {
			// ...mapMutations(["closeInterviewCard"]),
			getElementHeight() {
				let _this = this
				const query = uni.createSelectorQuery().in(this);
				let idStr = "#cont" + (this.qaList.length - 1)
				query.select(idStr).boundingClientRect(data => {
					if (data) {
						_this.currentContHeight = data.height;
					}
				}).exec();
			},
			refreshRestore() {
				this.freshing = false
				this.trigger = false
				console.log("freshing/trigger：", this.freshing, this.trigger)
			},
			getMoreHistory() {
				if (this.freshing) return
				this.freshing = true
				this.trigger = true
				this.$emit("moreHis")
			},
			clickSureCard(item) {
				let _this = this
				if (this.cardDoubleClick) {
					uni.showToast({
						title: "请勿连续点击",
						icon: "error",
						duration: 2000
					})
					return
				}
				this.cardDoubleClick = true
				setTimeout(function() {
					_this.cardDoubleClick = false
				}, 2000)
				let url = "/api/chat/job/" + item.card.job_id + "/is-interviewed"
				this.$aiRequest(url).then(res => {
					if (res.code == 0) {
						if (res.data.is_interviewed) {
							uni.showToast({
								title: "该职位您已面试",
								icon: "error",
								duration: 2000
							})
						} else {
							let obj = {
								type: "interview",
								job_id: item.card.job_id
							}
							this.$emit("tocall", obj)
						}
					}
				})
			},
			sendMsg(msg, type) {
				let obj = {
					msg: msg,
					type: type
				}
				console.log("chat obj", obj)
				this.$emit("sendMsg", obj)
			},
			//控制播放还是暂停音频文件
			handleAudio(type, item, index) {
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
			stopCurAudio() {
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
			formatResultStr(str) {
				if (str) {
					this.speeking(str)
				}
			},
			toCall() {
				let _this = this
				if (this.cardDoubleClick) {
					uni.showToast({
						title: "请勿连续点击",
						icon: "error",
						duration: 2000
					})
					return
				}
				this.cardDoubleClick = true
				setTimeout(function() {
					_this.cardDoubleClick = false
				}, 2000)
				let obj = {
					type: "interview",
					job_id: this.sureJobId
				}
				this.$emit("tocall", obj)
				// uni.navigateTo({
				// 	url: "/pages/phone_call/phone_call?status=interview&job_id=" + this.sureJobId
				// })
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
						let url = "/api/chat/voice/" + item.id + "/recognize/result"
						let t = setInterval(function() {
							_this.$aiRequest(url).then(res => {
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
			toScroll() {
				let _this = this
				_this.scrollView = ""
				this.$nextTick(() => {
					if (this.answering) {
						console.log("正在回答")
						_this.scrollView = "answering"
					} else {
						if (_this.qaList.length == 0) {
							_this.scrollView = "fenge_line"
							// var num = _this.historyList.length;
							// if (num > 0) {
							// 	setTimeout(function() {
							// 		_this.scrollView = "his" + (_this.historyList.length - 1)
							// 		uni.hideLoading()
							// 	}, 500)

							// }

						} else {
							// console.log("qalist长度大于0")
							_this.scrollView = "continue"
							uni.hideLoading()
							// var num2 = _this.qaList.length - 1;
							// setTimeout(function() {
							// 	_this.scrollView = "qa" + num2
							// 	uni.hideLoading()
							// }, 500)
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	::v-deep {
		li {
			margin-left: 0 !important;
			padding-left: 0 !important;
			text-indent: 0 !important;
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

	.circle {
		width: 12rpx;
		height: 12rpx;
		background: #020202;
		border-radius: 50%;
		margin-right: 15rpx;
	}

	.apply_user_info {
		padding: 0 30rpx 30rpx 30rpx;
		box-sizing: border-box;

		.apply_line {
			margin-top: 15rpx;
			font-weight: 400;
			font-size: 31rpx;

			.tit {
				color: #020202;
			}

			.user_info_text {
				color: #333333;
			}
		}
	}

	.job_list {
		padding: 0 20rpx 40rpx 20rpx;
		box-sizing: border-box;

		.job_item {
			height: 77rpx;
			line-height: 77rpx;
			background: #FFFFFF;
			border-radius: 38rpx;
			padding: 0 59rpx;
			box-sizing: border-box;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			margin-top: 19rpx;



			.job_text {
				font-weight: 400;
				font-size: 31rpx;
				color: #020202;
			}
		}
	}

	.may_ask {
		margin-top: 19rpx;


		.tit {
			font-weight: 400;
			font-size: 27rpx;
			color: #798DAA;
			margin-bottom: 10rpx;
		}

		.ask_item {
			margin-bottom: 18rpx;

			.text {
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
				padding: 0 20rpx;
				box-sizing: border-box;
				height: 56rpx;
				line-height: 56rpx;
				background: #F5F8FF;
				border-radius: 63rpx;
				font-weight: 400;
				font-size: 27rpx;
				color: #213B56;
			}
		}
	}

	.content_body {
		// background: url($back-ground-url+"/worker/new/chat_bg.png") no-repeat;
		// background-size: cover;
		padding: 0 28rpx;
		box-sizing: border-box;

		.greeting {
			margin-top: 30rpx;

			.avatar {
				text-align: center;
				width: 280rpx;
				height: 280rpx;
				margin: 0 auto;
				border-radius: 50%;
				overflow: hidden;

				image {
					width: 280rpx;
				}
			}

			.title {
				font-weight: 400;
				font-size: 35rpx;
				color: #020202;
				text-align: center;
				margin-bottom: 38rpx;
				margin-top: 16rpx;
			}

			.tips {
				font-weight: 400;
				font-size: 31rpx;
				color: #223756;
				line-height: 54rpx;
				background: #F1F8FF;
				border-radius: 4rpx 44rpx 44rpx 44rpx;
				padding: 23rpx 30rpx;
				box-sizing: border-box;
			}
		}

		.fenge {
			margin-top: 20rpx;

			.fgline {
				width: calc(50% - 110rpx);
				border-top: 2rpx solid #C2D3E5;
			}

			.text {
				width: 200rpx;
				font-weight: 400;
				font-size: 26rpx;
				color: #93A4B7;
				text-align: center;
			}
		}

		.tips_wrap {
			position: fixed;
			left: 28rpx;

			.title {
				font-weight: 600;
				font-size: 30rpx;
				color: #2F2F2F;
				margin-bottom: 16rpx;
			}

			.tip_list {
				.item {
					display: flex;
					margin-bottom: 12rpx;

					.text {
						height: 58rpx;
						line-height: 58rpx;
						background: rgba(255, 255, 255, 0.6);
						border-radius: 63rpx;
						border: 1rpx solid #D7D9EE;
						padding: 0 40rpx 0 20rpx;
						box-sizing: border-box;
						font-weight: 400;
						font-size: 28rpx;
						color: #213B56;
					}
				}
			}
		}

		.chat_wrap {
			padding: 20rpx 0rpx;
			box-sizing: border-box;

			.list {

				// padding: 30rpx;
				.sure_card {
					margin-top: 30rpx;
					padding: 34rpx 25rpx 20rpx 25rpx;
					width: 100%;
					background: linear-gradient(180deg, #82C7FF 0%, #FFFFFF 100%);
					box-shadow: 0rpx 4rpx 4rpx 0rpx rgba(0, 0, 0, 0.15);
					border-radius: 15rpx;
					box-sizing: border-box;
					position: relative;

					.text_img {
						padding-left: 25rpx;
						box-sizing: border-box;

						image {
							width: 310rpx;
						}
					}

					.sure_icon {
						position: absolute;
						top: 0;
						right: 0;

						image {
							width: 200rpx;
						}
					}

					.bot_box {
						background: #FFFFFF;
						border-radius: 15rpx;
						padding: 23rpx 26rpx;
						box-sizing: border-box;
						margin-top: 21rpx;

						.name {
							margin-top: 10rpx;

							.label {
								width: 138rpx;
								height: 42rpx;
								text-align: center;
								line-height: 42rpx;
								background: rgba(33, 111, 249, 0.08);
								border-radius: 12rpx;
								border: 2rpx solid #216FF9;
								font-weight: 600;
								font-size: 23rpx;
								color: #216FF9;
								flex-shrink: 0;
							}

							.text {
								margin-left: 12rpx;
								font-weight: 600;
								font-size: 31rpx;
								color: #020202;
								white-space: nowrap;
								overflow: hidden;
								text-overflow: ellipsis;
							}
						}

						.sure_btn {
							margin-top: 36rpx;

							image {
								width: 100%;
							}
						}
					}
				}

				.qa_item {
					transition: all 1s;


					.line {
						margin-top: 38rpx;
						text-align: right;

						image {
							margin-left: 20rpx;
						}

						.inline_box {
							// width: calc(100% - 85rpx);

							.ai_name {
								color: #606166;
								margin-bottom: 20rpx;

								image {
									width: 65rpx;
									height: 65rpx;
									flex-shrink: 0;
									vertical-align: top;
									margin-left: 0;
									border-radius: 50%;
									transform: rotateY(-180deg);
								}
							}



							.cont {
								display: inline-block;
								max-width: 100%;
								overflow: hidden;
								font-size: 31rpx;
								font-family: "微软雅黑";
								text-align: left;
								transition: height 2s;

								.ai_text,
								.customer_text {
									padding: 26rpx 30rpx;
									// border-radius: 16rpx;
									box-sizing: border-box;
									display: block;
									line-height: 60rpx;
									word-break: break-all;

									&.last_ai_text {
										padding: 26rpx 30rpx 50rpx 30rpx;
									}
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
								background: #F1F8FF;
								border-radius: 4rpx 35rpx 35rpx 35rpx;
								color: #213B56;

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
									// background: #216FF9;
									// color: #fff;

									&.textcont {
										width: auto;
										max-width: 100%;
									}

									// display: flex;
									// justify-content: flex-end;
									// flex-wrap: wrap;
									// align-items: center;

									.customer_text {
										background: #216FF9;
										border-radius: 35rpx 35rpx 4rpx 35rpx;
										// background: linear-gradient(117deg, #4F85FD 0%, #72BAFF 100%);
										// color: #213B56;
										color: #fff;
										font-weight: 600;
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
									background: #216FF9;
									border-radius: 35rpx 35rpx 4rpx 35rpx;
									padding: 28rpx;
									// border-radius: 16rpx;
									box-sizing: border-box;
									color: #fff;

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
	}
</style>