<template>
	<view class="single_page" v-if="ifSingle">
		<image :src="imgUrl+'/worker/single_page.png'" mode="widthFix" style="width: 100%;"></image>
	</view>
	<view class="home_page body_bg" v-else @touchstart="bodyTouchStart" @touchmove="bodyTouchMove"
		@touchend="bodyTouchEnd">
		<!-- 自定义导航栏 -->
		<view class="navbar">
			<u-navbar :safeAreaInsetTop="true" bgColor="rgba(255, 255, 255, 0.25)">
				<view class="u-nav-slot flex flex-start" slot="left">
					<view class="ic_menu" @click="openMenu">
						<image :src="imgUrl+'/worker/new/ic_menu.png'" mode="widthFix"></image>
					</view>
					<view class="tabs flex flex-start">
						<view class="tab" v-for="(item,index) in list4" :class="currentTabIndex==index?'active':''"
							@click.stop="changeTab(index)">
							{{item.name}}
						</view>
					</view>
				</view>
			</u-navbar>
		</view>
		<view class="main_box">
			<!-- 风铃页 -->
			<welcome ref="welcome" v-show="currentTabIndex == 0" :top="statusBarHeight+44" :bottom="botSafe"
				:canPlay="canPlay" @sendMsg="sendBtnMsg" @openCanPlay="openCanPlay" @setGreetStatus="setGreetStatus"
				@tocall="toCall">
			</welcome>
			<chat ref="chatRef" v-show="currentTabIndex == 1" :top="statusBarHeight+44" :bottom="botSafe"
				:historyList="historyList" :qaList="qaList" :scrollHeight="chatScrollHeight" :answering="answering"
				:greetingObj="greetingObj" :answerContinue="answerContinue" :scrollStr="scrollStr" @sendMsg="sendBtnMsg"
				@moreHis="getMoreHistory" @tocall="toCall">
			</chat>
			<!-- 频道页 -->
			<channel :top="statusBarHeight+44" :bottom="botSafe" v-show="currentTabIndex == 2"
				@handleChannelStatus="handleChannelStatus"></channel>
		</view>
		<asideUserCenter @closeMenu="closeMenu" @openMenu="openMenu" :userInfo="userInfo" :menuList="menuList"
			:showMenu="showMenu">
		</asideUserCenter>
		<!-- 侧边栏 -->
		<!-- <u-popup :show="showMenu" mode="left" @close="closeMenu" @open="openMenu" bgColor="#ffffff">
			<view class="inner" @touchstart="maskStart" @touchend="maskEnd" @touchmove="handleMaskMove">
				<view class="user_base_out">
					<u-navbar title="个人中心" bgColor="transparent" @rightClick="rightClick" :autoBack="true"
						titleStyle="color:#010101;font-size: 31rpx;width:83vw;" :height="menuButtonInfo.height+8"
						style="width: 83vw;">
						<view class="u-nav-slot" slot="left" @click="closeMenu"
							style="width:57rpx;height:57rpx;text-align: center;line-height: 57rpx;border:1px solid #fff;border-radius: 50%;">

							<u-icon name="arrow-left" size="19" color="#fff"
								custom-style="display: inline-block;line-height: 57rpx;margin:0 auto;left:-2rpx;"></u-icon>
						</view>
					</u-navbar>
					<view class="user_base" :style="{marginTop:marginTop+15+'px'}"
						@click="navigate('/subpkg/edit_info/edit_info')">
						<view class="user_box" :style="{paddingBottom:userInfo.is_vip?'40rpx':'auto'}">
							<view class="user flex flex-start">
								<image :src="userInfo.avatar.url?userInfo.avatar.url:imgUrl+'/worker/avatar.png'"
									mode="widthFix"></image>
								<view class="user_base_info">
									<view class="line flex flex_btween">
										<view class=" flex flex-start">
											<view class="gender" v-if="userInfo.gender">
												{{userInfo.gender == "male"?"男":"女"}}
											</view>
											<view class="name">{{userInfo.name}}</view>
										</view>
										<view class="edit flex">编辑资料<u-icon name="arrow-right" color="#fff" size="13"
												custom-style="line-height:auto;margin-top:1rpx;"></u-icon>
										</view>
									</view>
									<view class="line flex flex-start">
										<view class="text">{{userInfo.age}}岁</view>
										<view class="text">{{userInfo.nation}}</view>
									</view>
								</view>
							</view>
						</view>
						<view class="labels" style="height:42rpx;margin-top:30rpx;">
						</view>
					</view>
				</view>
				<u-cell-group :border="false">
					<u-cell v-for="(item,index) in menuList" :class="item.icon"
						:custom-style="{backgroundColor: 'transparent'}" :key="index" size="large" :title="item.text"
						:name="item.text" :border="false" :titleStyle="{color:'#4C4C53'}"
						:value="index==3?'¥ '+item.value:item.value" :clickable="false" :url="item.url" isLink
						@click="handleClick"></u-cell>
				</u-cell-group>
				<view class="logout" @click="logout">退出登录</view>
			</view>

		</u-popup> -->
		<view class="input_btn_wrap"
			:style="{bottom:inputHeight?inputHeight+10+'px':'65rpx',background:inputing?(cancelRecord?'#fe697f':'#216ff9'):'#fff'}"
			:class="inputHeight?'upper':''" v-show="currentTabIndex !== 2">
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
							:disabled="!canSend" @input="onInput" :adjust-position="false"
							style="padding-left: 20rpx;" />
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
			<!-- <view class="btns_wrap flex flex-start" v-if="!inputHeight && currentTabIndex==1">
				<view class="btn_item flex" v-if="!userInfo.is_vip" @click="navigate('/pages/vip/vip')">
					<image :src="imgUrl+'/worker/new/ic_become_vip.png'" mode="widthFix"></image>
					<view class="">成为会员</view>
				</view>
				<view class="btn_item flex " @click="navigate('/pages/invite/invite')">
					<image :src="imgUrl+'/worker/new/ic_gift.png'" mode="widthFix"></image>
					<view class="">邀请有礼</view>
				</view>
			</view> -->
			<!-- 电话按钮 -->
			<!-- <view v-show="currentTabIndex == 1 && !inputHeight" class="phone_icon"
				:style="{bottom:inputHeight?inputHeight+60+'px':'128rpx'}" @click="toCall">
				<image :src="imgUrl+'/worker/new/ic_telephone.png'" mode="widthFix"></image>
			</view> -->
		</view>
		<login :showLogin="showLogin" @closeLogin="closeLogin" @getInfo="getInfo" :shareId="shareId">
		</login>
		<myModal ref="myModal">
		</myModal>
		<flMask v-if="showFlMask" @closeFengling="closeFengling" @sendMsg="sendBtnMsg"></flMask>
	</view>
</template>

<script>
	import flMask from "@/components/flmask.vue"
	import asideUserCenter from "@/components/aside_user_center.vue"
	import login from "@/components/login.vue"
	import welcome from "@/components/welcome.vue"
	import chat from "@/components/chat.vue"
	import channel from "@/components/channel.vue"
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
				canPlay: true,
				greetingObj: {
					logo: app.globalData.baseImageUrl + "/worker/new/index_ai_logo.png",
					title: "您好呀！我是您的职位推荐官风铃。",
					content: "您可以将您想找的工作、期望的薪资、福利待遇的要求等等发送给我，我会为您推荐合适的职位，快来与我互动吧。"
				},
				showLoading: true,
				showSend: false,
				newUser: false,
				ifSingle: app.globalData.scene == 1154 ? true : false,
				menuButtonInfo: app.globalData.menuButtonInfo,
				marginTop: app.globalData.marginTop,
				maskStartPoint: {},
				maskEndPoint: {},
				showMenu: false,
				manager: app.globalData.manager,
				menuList: [
					// {
					// 	text: "已报名工作",
					// 	url: "/subpkg/sign_record/sign_record",
					// 	icon: "",
					// 	value: "1"
					// },
					// {
					// 	text: "工作浏览记录",
					// 	url: "/subpkg/view_record/view_record",
					// 	icon: "",
					// 	value: "13条"
					// }, {
					// 	text: "积分管理",
					// 	url: "/subpkg/score/score",
					// 	icon: "",
					// 	value: "充值"
					// },
					{
						text: "钱包余额",
						url: "/pages/balance/balance",
						icon: "rmb-circle-fill",
						value: "0"
					},
					{
						text: "邀请有礼",
						url: "/pages/invite/invite",
						icon: "share-fill",
						value: "立即返现"
					},
					{
						text: "关于我们",
						url: "/pages/about/about",
						icon: "info-circle-fill",
						value: ""
					}, {
						text: "联系客服",
						url: "",
						icon: "info-circle-fill",
						value: ""
					}
				],
				imgUrl: app.globalData.baseImageUrl,
				list4: [{
						name: '风铃'
					}, {
						name: '对话',
					},
					{
						name: '频道'
					},
				],
				currentTabIndex: 0,
				statusBarHeight: app.globalData.statusBarHeight,
				botSafe: 0,
				userInfo: {
					is_vip: false
				},
				showVoice: false,
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
				num: 1,
				hold: "h1",
				question: "",
				qaList: [],
				currentQalength: 0,
				curRespone: {
					content: "",
					origin: "ai",
					msg_type: "text",
					card: null
				},
				responseStr: "",
				responCount: 0, //用于第一次接收到信息时，开启打字效果
				prinTimer: null,
				historyList: [],
				historyId: 0,
				loadAllHistory: false,
				inputHeight: 0,
				chatScrollHeight: 0,
				btnInfo: null,
				bodyStartPoint: null,
				bodyEndPoint: null,
				moveDirection: "",
				printTimer1: null,
				printTimer2: null,
				printTimer3: null,
				hasChannel: false,
				scrollStr: "",
				jobId: "",
				noMayAsk: false, //记录用户是否报名成功
				greetingReady: false,
				action: "" //记录当前状态
			}
		},
		computed: {
			...mapState(["answering", "connected", "connecting", "canSend", "inChannel", "answerContinue", "channelQaLen",
				"channelId", "channelQaList", "location", "token", "inCall", "responEnd", "aiReady"
			])
		},
		async onLoad(params) {
			var _this = this;
			let location;
			this.resetCity()
			// 网络状态判断
			uni.getNetworkType({
				success(res) {
					if (res.networkType.toString() == "none") {
						// 无网络
						uni.showModal({
							title: "当前无网络，请检查您的网络设置，并重启小程序。",
							showCancel: false
						})
					}
				},
				fail(err) {
					console.log("网络判断error", err)
				}
			})
			// 监听网络变化
			uni.onNetworkStatusChange(async function(res) {
				console.log("网络变化了：", res.isConnected, res.networkType)
				if (res.networkType.toString() == "none") {
					// 监听到无网络
					uni.showModal({
						title: "当前无网络，请检查您的网络设置，并重启小程序。",
						showCancel: false
					})
				} else {
					uni.reLaunch({
						url: "/pages/index/index"
					})
					uni.offNetworkStatusChange()
				}
			});
			this.btnInfo = await commonMethods.getElementInfo(".input_btn_wrap")
			if (this.btnInfo) {
				this.botSafe = app.globalData.systemHeight - this.btnInfo.top
				this.chatScrollHeight = this.btnInfo.top - this.statusBarHeight - 44
			}
			console.log("params", params)
			// 扫码进入
			let scanId = params.scene ? decodeURIComponent(params.scene).split("=")[1] : ""
			this.shareId = params.share_id ? params.share_id : (scanId ? scanId : "")
			this.params = params

			location = await this.getPosition()
			this.setLocation(location)
			let token = uni.getStorageSync("token") ? uni.getStorageSync("token") : ""
			this.header = {
				'content-type': 'application/json',
				"app-id": urlSetting.urls.appid,
				"open-id": uni.getStorageSync("openid") ? uni.getStorageSync("openid") : "",
				"address": _this.location ? encodeURIComponent(JSON.stringify(_this.location)) : "",
				"Authorization": "bearer " + token,
			}
			this.openid = await this.getOpenid()
			this.getSetting()
			if (this.isLogin()) {
				this.getInfo()
				// this.closeInterviewCard()
				// this.closeChannelInterviewCard()
			}

		},
		onUnload() {
			console.log("执行了onUnload")
			this.canPlay = false
			this.close()
		},
		async onShow() {
			let _this = this
			this.closeAnswering()
			// 录音初始化
			this.initRecord()
			// if (!this.answerContinue && !this.answering) {
			// 	this.qaList = []
			// 	this.resetData()
			// }
			uni.onKeyboardHeightChange(this.listenKeyBoard)

			if (this.currentTabIndex == 1) {
				this.$nextTick(() => {
					_this.$refs.chatRef.toScroll()
				})
			}
		},
		onHide() {
			// 移除Audio的各种监听
			app.globalData.Audio.stop()
			app.globalData.Audio.offPlay()
			app.globalData.Audio.offPause()
			app.globalData.Audio.offStop()
			app.globalData.Audio.offEnded()
			this.canPlay = false
			uni.offKeyboardHeightChange(this.listenKeyBoard)
		},
		mounted() {},
		components: {
			login,
			welcome,
			chat,
			channel,
			flMask,
			asideUserCenter
		},
		watch: {
			greetingReady(newValue) {
				if (newValue) {
					uni.hideLoading()
					// this.closeAnswerContinue()
				}
			},
			currentTabIndex(newValue, oldValue) {
				let _this = this
				if (newValue != 0) {
					// 关闭首页语音播放
					this.canPlay = false
				}
				if (newValue == 0) {
					this.canPlay = true
				}
				if (this.isLogin()) {
					if (newValue == 1) {
						this.$nextTick(() => {
							_this.$refs.chatRef.toScroll()
						})

					}
				} else {
					this.showLogin = true
				}
			},
			question(newVal) {
				if (!newVal) {
					this.showSend = false
				} else {
					this.showSend = true
				}
			}
		},
		methods: {
			...mapMutations(["openAnswering", "closeAnswering", "setConnected", "unConnected", "setConnecting",
				"unConnecting", "openCansend", "closeCansend", "notChannel", "isChannel", "addChannelQaList",
				"openAnswerContinue", "closeAnswerContinue", "updateChannelQaList", "setChannelId", "setLocation",
				"setToken", "clearChannelQaList", "notInCall", "setCallContent", "setRespEnd", "notRespEnd",
				"setInterviewCard", "setIncallEnroll", "setIncallJobId", "resetIncallEnroll", "closeInterviewCard",
				"setAiReady", "resetAiReady", "resetCity", "setChannelInterviewCard", "closeChannelInterviewCard",
				"setJobName", "resetJobName", "setJobId", "resetJobId", "setHangUpFirst"
			]),
			onInput(e) {
				this.question = e.target.value
			},
			// onBlur() {
			// 	this.question = ""
			// },
			openCanPlay() {
				this.canPlay = true
			},
			toCall(obj) {
				if (!this.aiReady) {
					uni.showToast({
						title: "连接中，请稍后",
						icon: "error",
						duration: 2000
					})
					return
				}
				if (this.answering || this.answerContinue) {
					uni.showToast({
						title: "回答中，请稍后",
						icon: "error",
						duration: 2000
					})
					this.currentTabIndex = 1
					return
				}
				let status = ""
				let job_id = ""
				if (obj) {
					// 有参数
					status = obj.type
					job_id = obj.job_id
				}
				let _this = this
				if (this.isLogin()) {
					// 获取语音权限
					uni.authorize({
						scope: 'scope.record',
						success(res) {
							_this.voicePermisson = true
							_this.canPlay = false
							uni.navigateTo({
								url: "/pages/phone_call/phone_call?status=" + status + "&job_id=" + job_id
							})
						},
						fail(err) {
							// 弹出麦克风授权
							_this.voicePermisson = false
							_this.$refs.myModal.showModal({
								title: "请先开启语音输入权限。",
								showCancel: false,
								confirmText: "好的",
								success(resp) {
									if (resp == "confirm") {
										uni.openSetting({
											success(respone) {
												if (respone.authSetting['scope.record']) {
													_this.voicePermisson = true
													_this.canPlay = false
													uni.navigateTo({
														url: "/pages/phone_call/phone_call?status=" +
															status + "&job_id=" + job_id
													})
												}
											},
											fail(openErr) {
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

				} else {
					this.showLogin = true
				}
			},
			listenKeyBoard(res) {
				if (res.height == 0) {
					this.inputHeight = 0
					this.chatScrollHeight = this.btnInfo.top - this.statusBarHeight - 44
				} else {
					this.chatScrollHeight = app.globalData.systemHeight - this.statusBarHeight - 44 - res
						.height -
						this.btnInfo.height - 10
				}
			},
			handleChannelStatus(e) {
				this.hasChannel = e
			},
			clickFengling() {
				this.showFlMask = true
			},
			closeFengling() {
				this.showFlMask = false
			},
			getPosition() {
				return new Promise((resolve, reject) => {
					let url = "https://apis.map.qq.com/ws/location/v1/ip?key=" + app.globalData.qqMapKey
					uni.request({
						url: url,
						method: "GET",
						success(res) {
							console.log(res)
							resolve(res.data.result)
						},
						fail(err) {
							reject("error")
						}
					})
				})

			},
			getOpenid() {
				let _this = this
				return new Promise(resolve => {
					uni.login({
						success: (res) => {
							if (res.errMsg == 'login:ok') {
								let url = ""
								let data = {
									code: res.code,
									share_id: _this.shareId
								}
								url = "/auth/worker/wechat/mini/openid"
								_this.$request(url, data, "POST", _this.header).then(resp => {
									if (resp.code == 0) {
										uni.setStorage({
											key: "openid",
											data: resp.data.open_id
										})
										_this.header["open-id"] = resp.data.open_id
										_this.header["Authorization"] = "bearer " + resp.data
											.token
										_this.setToken(resp.data.token)
										_this.creatConnect(_this.header)
										resolve(resp.data.open_id)
									}
								})
							}
						},
						fail(err) {}
					});
				})
			},
			printResponse() {
				let _this = this
				let index = 0
				let noOutCount = 0
				this.prinTimer = setInterval(function() {
					let len = _this.responseStr.length
					if (index < len) {
						_this.curRespone.content += _this.responseStr[index]
						if (_this.inChannel) {
							_this.updateChannelQaList(_this.curRespone)
						} else {
							// 不在通话页
							if (!_this.inCall) {
								_this.$set(_this.qaList, _this.currentQalength, _this.curRespone)
							}
						}

						index++
					} else {
						if (_this.responEnd) {
							if (_this.curRespone.card) {
								_this.curRespone.card.showCard = true
							}
							clearInterval(_this.prinTimer)
							_this.openCansend()
							_this.resetData()
							_this.closeAnswerContinue()
							// 如果用户是报名成功则推送面试卡片
							// if (_this.noMayAsk) {
							// 	if (_this.inChannel) {
							// 		_this.setChannelInterviewCard()
							// 	} else {
							// 		_this.setInterviewCard()
							// 	}

							// }
						}
						// else {
						// 	if (noOutCount > 999) {
						// 		// 如果出现链接异常，未接收到结束标识符[DONE]时，超时30s则自动清除定时器
						// 		clearInterval(_this.prinTimer)
						// 		_this.openCansend()
						// 		_this.resetData()
						// 		_this.closeAnswerContinue()
						// 	} else {
						// 		noOutCount++
						// 	}
						// }
					}
				}, 30)

			},
			getMayAsk() {

				let data = {
					"job_channel_id": this.channelId
				}
				let index = 0
				let obj = {}
				console.log("执行了mayask")
				this.$aiRequest("/api/chat/suggested-questions", data, "POST").then(res => {
					if (this.channelId) {
						// 频道内
						index = this.channelQaList.length - 1
						obj = this.channelQaList[index]
						obj.may_ask = res.questions
						this.updateChannelQaList(obj)
					} else {
						index = this.qaList.length - 1
						obj = this.qaList[index]
						obj.may_ask = res.questions
						this.$set(this.qaList, index, obj)
					}

				})
			},
			setGreetStatus() {
				this.greetingReady = true
			},
			handleConnectErr() {
				// 当链接断开或者出错时提示用户重新发送
				let len = this.qaList.length
				if ((len > 0) && (this.qaList[len - 1].origin == "customer")) {
					this.closeAnswering()
					this.openCansend()
					this.closeAnswerContinue()
					this.resetData()
					clearInterval(this.prinTimer)
					// 上一条是用户发送的数据时
					let data = {
						content: "抱歉！刚才打了个盹儿，没理解到您的意思，请重新发送一下您的问题。",
						printStr: "",
						msg_type: "text",
						origin: "ai",
						jobs: [],
						may_ask: []
					}
					this.qaList.push(data)
				}

			},
			getHistory() {
				let _this = this
				console.log("获取历史记录")
				return new Promise(resolve => {
					let url = "/api/chat/histories?last_message_id=" + _this.historyId + "&job_channel_id="
					_this.$aiRequest(url, "", "GET", _this.header).then(res => {
						if (res.code == 0) {
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
			getMoreHistory() {
				let _this = this
				if (!this.loadAllHistory) {
					if (!this.historyId) {
						if (this.answerContinue || this.answering) {
							this.$refs.chatRef.refreshRestore()
							return
						} else {
							this.qaList = []
						}
					}
					uni.showLoading()
					let url = "/api/chat/histories?last_message_id=" + this.historyId + "&job_channel_id="
					this.$aiRequest(url).then(res => {
						if (res.code == 0) {
							let len = res.data.length
							uni.hideLoading()
							this.$refs.chatRef.refreshRestore()
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
							this.$refs.chatRef.refreshRestore()
						}
					})
				} else {
					uni.showToast({
						title: "已加载全部",
						icon: "none",
						duration: 2000
					})
					setTimeout(function() {
						_this.$refs.chatRef.refreshRestore()
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
				return arr
			},
			bodyTouchStart(e) {
				this.bodyStartPoint = e.touches[0]
			},
			bodyTouchEnd(e) {
				if (this.moveDirection == "left") {
					if (this.currentTabIndex < this.list4.length - 1) {
						this.currentTabIndex++
					}
				} else if (this.moveDirection == "right") {
					if (this.currentTabIndex > 0) {
						this.currentTabIndex--
					}
				}
				this.moveDirection = ""
			},
			bodyTouchMove(e) {
				if (this.bodyStartPoint.clientX - e.touches[e.touches.length - 1].clientX > 160) {

					// 左滑了
					this.moveDirection = "left"

				}
				if (e.touches[e.touches.length - 1].clientX - this.bodyStartPoint.clientX > 160) {
					// 有滑了
					this.moveDirection = "right"

				}
			},
			navigate(url) {
				uni.navigateTo({
					url: url + "?shareid=" + this.shareId
				})
			},
			async sendBtnMsg(obj) {
				if (!this.isLogin()) {
					this.showLogin = true
					return
				}
				if (!this.aiReady) {
					uni.showToast({
						title: "连接中，请稍后",
						icon: "error",
						duration: 2000
					})
					return
				}
				// 如果正在回答问题
				if (this.answerContinue) {
					uni.showToast({
						title: "回答中，请稍后",
						icon: "error",
						duration: 2000
					})
					this.currentTabIndex = 1
					return
				}
				this.jobId = obj.job_id
				this.action = obj.action
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
				if (!this.isLogin()) {
					this.showLogin = true
					return
				}
				this.currentTabIndex = 1
				if (e.detail.height) {
					this.inputHeight = e.detail.height //这个高度就是软键盘的高度
				}
			},
			initRecord() {
				//录音开始事件
				this.manager.onStart(e => {
					this.inputing = true
				});
				//录音结束事件
				this.manager.onStop(res => {
					let _this = this
					this.inputing = false
					clearInterval(_this.secondTimer)
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
				})
			},
			// 处理录音数据
			handleRecorder({
				tempFilePath,
				duration
			}) {
				this.inputing = false;
				let _this = this
				if (duration < 600) {
					uni.showToast({
						title: "说话时间过短",
						icon: "error",
						duration: 2000
					})
					return;
				}

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
							let binaryId = _this.stringToUint8Array(id + "@@@@@@" + _this.jobId + "@@@@@@")
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
				if (!this.aiReady) {
					uni.showToast({
						title: "连接中，请稍后",
						icon: "error",
						duration: 2000
					})
					return
				}
				// 回答完成后才能发下一条信息
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
					// 设置非频道
					this.notChannel()
					// 设置非通话页
					this.notInCall()
					app.globalData.socketTask.send({
						data: type == "voice" ? data : JSON.stringify({
							"content": data,
							"job_channel_id": "",
							"job_id": _this.jobId,
							"action_type": _this.action
						}),
						success(res) {
							_this.jobId = ""
							_this.action = ""
							_this.noMayAsk = false
							_this.closeInterviewCard()
							_this.closeChannelInterviewCard()
							_this.$set(_this, "question", "")
							uni.hideLoading()
							if (data != "ping") {
								if (!_this.cancelRecord) {
									_this.openAnswering()
									param.printStr = ""
									_this.$set(_this.qaList, _this.qaList.length, param)
									_this.num++
									_this.hold = "h" + _this.num
									_this.closeCansend()
									// _this.placeHolder = "正在努力思考，请稍后..."
								}

							}

						},
						fail(err) {
							_this.jobId = ""

						}
					})
				}

			},
			async creatConnect(header) {
				var _this = this;
				if (app.globalData.socketTask) {
					// 关闭之前的链接
					await this.close()
					return false
				}
				console.log("connected：", this.connected)
				if (this.connected || this.connecting) {
					return false
				}
				// 两个链接状态都为false才开始创建链接
				this.setConnecting()
				let res = await this.connectWebsocket(header)
				if (res.errMsg == "connectSocket:ok") {
					this.initWebsocket()
				}
			},
			connectWebsocket(header) {
				let _this = this
				return new Promise((resolve) => {
					app.globalData.socketTask = uni.connectSocket({
						url: app.globalData.wssUrl,
						header: header,
						method: 'GET',
						success(res) {
							resolve(res)
						},
						fail(err) {
							console.log("err:", err)
							_this.$refs.myModal.showModal({
								title: err.errMsg,
								showCancel: false
							})
							// 这里是接口调用失败的回调，不是连接失败的回调，请注意
						}
					})
				})
			},
			initWebsocket() {
				let _this = this
				app.globalData.socketTask.onOpen((res) => {
					this.unConnecting()
					this.setConnected()
					this.closeAnswering()
					this.closeAnswerContinue()
					this.openCansend()
					this.setAiReady()
					console.log('已成功建立链接onOpen', res);
				})
				app.globalData.socketTask.onError((err) => {
					app.globalData.socketTask = null
					clearInterval(_this.timer)
					this.unConnected()
					this.unConnecting()
					this.resetAiReady()
					if (this.answering || this.answerContinue) {
						this.handleConnectErr()
					}
					setTimeout(function() {
						_this.creatConnect(_this.header)
					}, 2000)
				})
				app.globalData.socketTask.onMessage((res) => {
					_this.openAnswerContinue()
					_this.closeAnswering()
					let respData = JSON.parse(res.data)
					// console.log("websocket返回：", respData)
					if (_this.inCall) {
						// 对话页
						if (respData.type == "audio_call_start_interview") {
							// console.log("返回的job_id：", respData.job_id)
							_this.setIncallJobId(respData.job_id ? respData.job_id : "")
							// 用户报名了
							_this.setIncallEnroll()

						} else {
							_this.resetIncallEnroll()
						}
						if (respData.type == "audio_call_end") {
							_this.setHangUpFirst()

						}
						if (respData.message != "[DONE]") {
							_this.setCallContent(respData.message)
						} else {
							_this.setRespEnd()
							_this.openCansend()
							_this.resetData()
							_this.closeAnswerContinue()
						}

					} else {
						if (respData.type == "QCODE") {
							// 推送客服微信
							let card = {
								type: "QCODE"
							}
							_this.curRespone.card = JSON.parse(JSON.stringify(card))
							_this.noMayAsk = true
						} else {
							_this.noMayAsk = false
						}
						if (respData.message != "[DONE]") {
							_this.responCount++
							_this.responseStr += respData.message
							if (_this.responCount == 1) {
								_this.currentQalength = _this.qaList.length
								_this.printResponse()
							}
						} else {
							_this.setRespEnd()
							if (respData.need_mayask) {
								_this.getMayAsk()
							}
						}
					}
				})
				app.globalData.socketTask.onClose((res) => {
					// uni.hideLoading()
					console.log('onClose', res)
					app.globalData.socketTask = null
					this.unConnected()
					this.unConnecting()
					this.resetAiReady()
					clearInterval(_this.timer)
					setTimeout(function() {
						_this.creatConnect(_this.header)
					}, 2000)
					if (this.answering || this.answerContinue) {
						this.handleConnectErr()
					}

				})
			},
			doSend(e, text) {
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
				this.cancelRecord = false
				this.curRespone = {
					content: "",
					origin: "ai",
					msg_type: "text",
					card: null
				}
				this.responCount = 0
				this.responseStr = ""
				this.notRespEnd()
			},
			close() {
				return new Promise((resolve) => {
					if (app.globalData.socketTask) {
						app.globalData.socketTask.close()
					}
				})
			},
			startRecord(e) {
				if (!this.isLogin()) {
					this.showLogin = true
					return
				}
				if (!this.aiReady) {
					uni.showToast({
						title: "连接中，请稍后",
						icon: "error",
						duration: 2000
					})
					return
				}
				if (!this.canSend) {
					uni.showToast({
						title: "正在回答请稍后",
						icon: "error",
						duration: 2000
					})
					return
				}
				let _this = this
				this.currentTabIndex = 1
				// 先判断是否是可发送状态
				if (!this.canSend) {
					return
				}
				if (this.showVoice) {
					// 判断是否有麦克风授权
					if (_this.voicePermisson) {
						_this.touchStartTime = e.timeStamp
						_this.$refs.chatRef.stopCurAudio()
						uni.vibrateShort({
							success: function() {}
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
								_this.voicePermisson = true
							},
							fail(err) {
								// 弹出麦克风授权
								_this.voicePermisson = false

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
							_this.voicePermisson = false
							// 可以在这里引导用户去设置中开启权限
						} else {
							_this.voicePermisson = true
							// 用户已授权，可以继续进行后续操作
						}
					},
					fail(err) {}
				});
			},
			stopRecord(e) {
				let _this = this
				this.inputing = false
				this.touchEndTime = e.timeStamp
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
				this.inputing = false
				// this.canSend = false;
				this.manager.stop();
			},

			changeTab(index) {
				if (this.isLogin()) {
					this.currentTabIndex = index
				} else {
					this.showLogin = true
				}

			},
			openSetting() {
				if (!this.isLogin()) {
					this.showLogin = true
					return
				}
				let _this = this
				let ifAuth = uni.getStorageSync("voiceAuth")
				if (ifAuth) {
					uni.openSetting({
						success(res) {
							if (res.authSetting['scope.record']) {
								_this.voicePermisson = true
							}
						},
						fail(openErr) {
							_this.voicePermisson = false
						}
					});
				} else {
					uni.authorize({
						scope: 'scope.record',
						success(res) {
							_this.voicePermisson = true
						},
						fail(err) {
							// 弹出麦克风授权
							_this.voicePermisson = false
						},
						complete() {
							uni.setStorageSync("voiceAuth", true)
						}
					})
				}


			},
			changeChatMethod() {
				if (!this.isLogin()) {
					this.showLogin = true
					return
				}
				this.showVoice = !this.showVoice
			},
			maskStart(e) {
				this.maskStartPoint = e.touches[0]
			},
			maskEnd(e) {

			},
			handleMaskMove(e) {
				// console.log(e)
				// 判断左滑
				if (this.maskStartPoint.clientX - e.touches[e.touches.length - 1].clientX > 20) {
					this.closeMenu()
				}
			},
			closeMenu() {
				this.showMenu = false
			},
			openMenu() {
				// 判断是否登录
				if (this.isLogin()) {
					// 已登录
					this.showMenu = true
				} else {
					// 未登录显示登录弹窗
					this.showLogin = true
				}
			},
			logout() {
				let _this = this
				this.$refs.myModal.showModal({
					title: "确认退出登录？",
					success(res) {
						if (res == "confirm") {
							_this.$request("/worker/logout", {}, "POST").then(resp => {
								if (resp.code == 0) {
									_this.showMenu = false
									uni.removeStorageSync("token")
									uni.removeStorageSync("userInfo")
									uni.showToast({
										title: "已退出登录",
										icon: "none",
										duration: 2000
									})
								}
							})
						}
					}
				})
			},
			closeLogin() {
				this.showLogin = false
			},
			async getInfo() {
				this.$request("/worker/profile").then(response => {
					if (response.code == 0) {
						// uni.hideLoading()
						uni.setStorageSync("userInfo", JSON.stringify(response.data))
						this.userInfo = response.data
						this.menuList[0].value = response.data.balance.total_amount
					}
				})
				this.historyId = 0
				this.historyList = await this.getHistory()
				console.log("historyList：", this.historyList)
			}
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

		.u-cell-group {
			padding: 0 28rpx;
		}

		.u-cell__body--large {
			background: #F7F8FA;
			;
			border-radius: 25rpx;
			// border: 1rpx solid #28272C;
			margin-bottom: 20rpx;
		}

		.u-cell__value--large {
			font-weight: 900;
			font-size: 38rpx !important;
			color: #755022 !important;
		}

		// .u-cell:nth-child(1) .u-cell__body--large {
		// 	background: linear-gradient(131deg, #E5EEFE 0%, #4E8EFF 100%);
		// 	font-weight: 600;
		// 	position: relative;
		// 	z-index: 9;
		// }

		// .u-cell:nth-child(1) .u-cell__body--large::before {
		// 	content: "";
		// 	width: 100px;
		// 	height: 100%;
		// 	background: url($back-ground-url+"/worker/new/ic_sign_menu.png") no-repeat;
		// 	background-size: auto 100%;
		// 	position: absolute;
		// 	top: 0;
		// 	left: 0;
		// 	z-index: -1;
		// }

		// .u-cell:nth-child(1) .u-cell__value--large {
		// 	color: #fff !important;
		// 	display: inline-block;
		// 	position: relative;
		// 	margin-right: 46rpx;
		// 	font-family: Arial;
		// }

		// .u-cell:nth-child(1) .u-cell__value--large::after {
		// 	content: "份";
		// 	position: absolute;
		// 	top: 0;
		// 	right: -34rpx;
		// 	font-size: 27rpx;
		// 	font-weight: 400;
		// }

		// .u-cell:nth-child(1) .u-cell__right-icon-wrap {
		// 	display: none;
		// }

		// .u-cell:nth-child(2) .u-cell__value--large,
		// .u-cell:nth-child(5) .u-cell__value--large {
		// 	font-weight: 400 !important;
		// 	font-size: 27rpx !important;
		// 	color: #755022 !important;
		// 	height: 58rpx;
		// 	line-height: 58rpx;
		// }

		// .u-cell:nth-child(3) .u-cell__value--large {
		// 	font-size: 31rpx !important;
		// }
		.u-cell:nth-child(2) .u-cell__value--large {
			font-weight: 400 !important;
			font-size: 27rpx !important;
			color: #755022 !important;
			height: 58rpx;
			line-height: 58rpx;
		}
	}

	.tabs {
		// margin-left: 30rpx;

		.tab {
			// margin-right: 40rpx;
			padding: 0 20rpx;
			height: 44px;
			line-height: 44px;
			font-weight: 500;
			font-size: 35rpx;
			color: #7aa5c8;

			&.active {
				font-weight: 600;
				font-size: 46rpx;
				color: #0F2A4F;
				position: relative;

				&::after {
					content: "";
					width: 29rpx;
					height: 6rpx;
					background: #0F2A4F;
					border-radius: 4rpx;
					position: absolute;
					bottom: -4rpx;
					left: 50%;
					transform: translateX(-50%);
				}
			}
		}
	}

	.logout {
		position: fixed;
		width: calc(83vw - 56rpx);
		bottom: 30rpx;
		text-align: center;
		left: 28rpx;
		height: 96rpx;
		line-height: 96rpx;
		border-radius: 25rpx;
		border: 1rpx solid #D8E6FF;
		font-size: 31rpx;
		color: #8F8F99;
		background: #fff;
	}

	.inner {
		width: 83vw;
		box-sizing: border-box;
		background: #fff;
		color: #4C4C53;
		height: 100%;
	}

	.user_base_out {
		position: relative;
		padding: 0 28rpx 40rpx 28rpx;
		margin-bottom: 38rpx;
		background: url($back-ground-url+"/worker/new/my_info_cover.png") no-repeat;
		background-size: cover;
		background-position: center center;
	}

	.user_base {
		background-size: 100% 100%;
		box-sizing: border-box;
		border-radius: 25rpx;
		overflow: hidden;



		.tips {
			margin-top: 20rpx;
			background: rgba(255, 255, 255, 0.15);


			image {
				width: 200rpx;
			}

			.tip {
				width: calc(100% - 200rpx);
				font-weight: 400;
				font-size: 23rpx;
				color: #282319;
				text-align: center;
			}
		}

		&>image {
			width: 100%;
		}



		.user_box {

			.user {
				margin-top: 10rpx;

				&>image {
					width: 120rpx;
					border-radius: 50%;
					margin-right: 28rpx;
				}

				.user_base_info {
					width: calc(100% - 148rpx);

					.line {
						margin-bottom: 20rpx;

						&:last-child {
							margin-bottom: 0;
						}

						.edit {
							font-weight: 400;
							font-size: 27rpx;
							color: #FFFFFF;
						}

						.text {
							font-weight: 400;
							font-size: 31rpx;
							color: #333333;
							margin-right: 20rpx;
						}

						.gender {
							width: 62rpx;
							height: 35rpx;
							background: rgba(33, 111, 249, 0.09);
							border-radius: 8rpx;
							border: 2rpx solid #216FF9;
							font-size: 27rpx;
							color: #216FF9;
							line-height: 35rpx;
							text-align: center;
							margin-right: 16rpx;
						}

						.name {
							font-weight: 600;
							font-size: 31rpx;
							color: #333333;
						}
					}
				}
			}
		}




	}

	.ic_menu {
		width: 58rpx;
		height: 58rpx;
		margin-right: 20rpx;
		flex-shrink: 0;

		image {
			width: 58rpx;
		}
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

		.phone_icon {
			position: absolute;
			right: 0;
			font-size: 0;

			image {
				width: 77rpx;
			}
		}

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
				position: relative;
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
			padding: 0 15rpx 0 30rpx;
			height: 100rpx;
			top: 0rpx;
			right: 0rpx;
			z-index: 100;

			image {
				width: 60rpx;
				height: 60rpx;
				margin-top: 20rpx;
			}
		}
	}
</style>