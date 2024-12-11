<template>
	<view class="ai_wrap">
		<view class="ai_icon" v-if="!showChat" @click="showAichat">
			<image :src="imgUrl+'/worker/ai_logo.png'" mode="widthFix"></image>
		</view>
		<view class="ai_chat" v-if="showChat">
			<view class="ai_inner" :style="{height:showFullScreen?'100%':'80%'}" v-if="!showWanner && !showReAuth">
				<view class="full_header" :style="{height:marginTop+tabMargin+'px'}" v-if="showFullScreen"></view>
				<view class="back flex flex_btween" :style="{height:subTabHeight+'px'}">
					<image :src="showFullScreen?imgUrl+'/worker/ic_small.png':imgUrl+'/worker/ic_full.png'"
						mode="heightFix" @click="changeScreen"></image>
					<view class="right flex flex_end">
						<image :src="enableSpeeking?imgUrl+'/worker/ic_voive.png':imgUrl+'/worker/ic_voice_null.png'"
							mode="heightFix" @click="openSeepking"></image>
						<image :src="imgUrl+'/worker/ic_close_blue.png'" mode="heightFix" @click="closeAichat"></image>
					</view>
				</view>
				<!-- 聊天框 -->
				<scroll-view class="chat_wrap" :scroll-into-view="scrollView" :style="{height:scrollHeight+'px'}"
					:scroll-y="true" id="chatwrap" @scrolltoupper="getMoreHistory">
					<!-- 历史记录 -->
					<view class="history list">
						<view class="qa_item" v-for="(item,index) in historyList" :key="item.id" :id="'his'+index">
							<view class="line" :class="item.source == 'system'?'left':'right'">
								<view class="inline_box flex">
									<image v-if="item.source == 'system'" :src="imgUrl+'/worker/ic_ai.png'"
										mode="widthFix"></image>
									<view class="cont">
										<view class="list"
											v-if="item.type == 'job_recommend' || item.type == 'hot_job'">
											<view class="tips flex flex-start">
												<image :src="imgUrl+'/worker/ic_hot.png'" mode="widthFix"
													v-if="item.type == 'hot_job'"></image>
												<image :src="imgUrl+'/worker/ic_recom.png'" mode="widthFix"
													v-if="item.type == 'job_recommend'"></image>
												<view class="text">灵动优聘为您推荐</view>
											</view>
											<view class="tips" v-if="item.type == 'hot_job'">
												<image :src="imgUrl+'/worker/ic_hot_today.png'" mode="widthFix"
													style="width:150rpx;">
												</image>
											</view>
											<view class="item flex flex_btween" v-for="(item2,index2) in item.content"
												:key="item2.id" @click="getDetail(item2)">
												<view class="name">{{item2.name}}</view>
												<image :src="imgUrl+'/worker/ic_arrow_right_grey.png'" mode="widthFix">
												</image>
											</view>
										</view>
										<view class="" v-if="item.type == 'get_job_detail'">{{item.content.name}}</view>
										<view class="detail" v-if="item.type == 'job_detail'">
											<!-- <view class="tit">{{item.content.tags}}</view> -->
											<view class="de_line flex flex-start"
												v-if="item.content.tags.industry && (item.content.tags.industry != '？')">
												<view class="subtit">行业：</view>
												<view class="text">{{item.content.tags.industry}}</view>
											</view>
											<view class="de_line flex flex-start"
												v-if="item.content.tags.work_type && (item.content.tags.work_type != '？')">
												<view class="subtit">工种：</view>
												<view class="text">{{item.content.tags.work_type}}</view>
											</view>
											<view class="de_line flex flex-start"
												v-if="item.content.tags.work_description && (item.content.tags.work_description != '？')">
												<view class="subtit">工作内容：</view>
												<view class="text">{{item.content.tags.work_description}}</view>
											</view>
											<view class="de_line flex flex-start"
												v-if="item.content.tags.work_location && (item.content.tags.work_location != '？')">
												<view class="subtit">工作地点：</view>
												<view class="text">{{item.content.tags.work_location}}</view>
											</view>
											<view class="de_line flex flex-start"
												v-if="item.content.tags.settlement && (item.content.tags.settlement != '？')">
												<view class="subtit">结算方式：</view>
												<view class="text">{{item.content.tags.settlement}}</view>
											</view>
											<view class="de_line flex flex-start"
												v-if="item.content.tags.payment_method && (item.content.tags.payment_method != '？')">
												<view class="subtit">发薪方式：</view>
												<view class="text">{{item.content.tags.payment_method}}
												</view>
											</view>
											<view class="btns flex flex_btween">
												<view class="btn sign" @click.stop="toSign(item)" style="width:100%;">
													马上报名
												</view>
											</view>
										</view>
										<view
											v-if="item.type == 'str' || item.type == 'remind_resume' || item.type == 'bind_mobile'|| item.type == 'need_bind_mobile'||item.type == 'greeting'">
											{{item.content.replace(/\\n/g,"\n")}}
										</view>
										<button class="btn wanner bind" open-type="getPhoneNumber"
											v-if="item.type == 'need_bind_mobile'"
											@getphonenumber="getphonenumber">使用微信手机号</button>
										<view class="btn wanner" v-if="item.type == 'remind_resume'"
											@click.stop="addWanner(item)">填写工作意向</view>
									</view>
									<image v-if="item.source == 'user'" :src="imgUrl+'/worker/ic_me.png'"
										mode="widthFix" style="margin-left:20rpx;margin-right: 0;width:60rpx;">
									</image>
								</view>
							</view>
						</view>
					</view>
					<view class="list" id="listWrap">
						<view class="qa_item" v-for="(item,index) in qaList" :key="item.id" :id="'qa'+index">
							<view class="line" :class="item.source == 'system'?'left':'right'">
								<view class="inline_box flex">
									<image v-if="item.source == 'system'" :src="imgUrl+'/worker/ic_ai.png'"
										mode="widthFix"></image>
									<view class="cont">
										<view class="list"
											v-if="item.type == 'job_recommend' || item.type == 'hot_job'">
											<view class="tips flex flex-start">
												<image :src="imgUrl+'/worker/ic_hot.png'" mode="widthFix"
													v-if="item.type == 'hot_job'"></image>
												<image :src="imgUrl+'/worker/ic_recom.png'" mode="widthFix"
													v-if="item.type == 'job_recommend'"></image>
												<view class="text">灵动优聘为您推荐</view>
											</view>
											<view class="tips" v-if="item.type == 'hot_job'">
												<image :src="imgUrl+'/worker/ic_hot_today.png'" mode="widthFix"
													style="width:150rpx;">
												</image>
											</view>
											<view class="item flex flex_btween" v-for="(item2,index2) in item.content"
												:key="item2.id" @click="getDetail(item2)">
												<view class="name">{{item2.name}}</view>
												<image :src="imgUrl+'/worker/ic_arrow_right_grey.png'" mode="widthFix">
												</image>
											</view>
										</view>
										<view class="" v-if="item.type == 'get_job_detail'">{{item.content.name}}</view>
										<view class="detail"
											v-if="item.type == 'job_detail' && item.source == 'system'">
											<!-- <view class="tit">{{item.content.tags}}</view> -->
											<view class="de_line flex flex-start"
												v-if="item.content.tags.industry && (item.content.tags.industry != '？')">
												<view class="subtit">行业：</view>
												<view class="text">{{item.content.tags.industry}}</view>
											</view>
											<view class="de_line flex flex-start"
												v-if="item.content.tags.work_type && (item.content.tags.work_type != '？')">
												<view class="subtit">工种：</view>
												<view class="text">{{item.content.tags.work_type}}</view>
											</view>
											<view class="de_line flex flex-start"
												v-if="item.content.tags.work_description && (item.content.tags.work_description != '？')">
												<view class="subtit">工作内容：</view>
												<view class="text">{{item.content.tags.work_description}}</view>
											</view>
											<view class="de_line flex flex-start"
												v-if="item.content.tags.work_location && (item.content.tags.work_location != '？')">
												<view class="subtit">工作地点：</view>
												<view class="text">{{item.content.tags.work_location}}</view>
											</view>
											<view class="de_line flex flex-start"
												v-if="item.content.tags.settlement && (item.content.tags.settlement != '？')">
												<view class="subtit">结算方式：</view>
												<view class="text">{{item.content.tags.settlement}}</view>
											</view>
											<view class="de_line flex flex-start"
												v-if="item.content.tags.payment_method && (item.content.tags.payment_method != '？')">
												<view class="subtit">发薪方式：</view>
												<view class="text">{{item.content.tags.payment_method}}
												</view>
											</view>
											<view class="btns flex flex_btween">
												<view class="btn no" @click.stop="dislike(item.content)">不喜欢
												</view>
												<view class="btn sign" @click.stop="toSign(item)">马上报名
												</view>
											</view>
										</view>

										<view
											v-if="item.type == 'greeting' || item.type == 'str' || item.type == 'remind_resume' || item.type == 'bind_mobile' || item.type == 'need_bind_mobile'"
											v-html="item.content">
											<!-- {{item.content}} -->
										</view>
										<button class="btn wanner bind" open-type="getPhoneNumber"
											v-if="item.type == 'need_bind_mobile'"
											@getphonenumber="getphonenumber">使用微信手机号</button>
										<view class="btn wanner" v-if="item.type == 'remind_resume'"
											@click.stop="addWanner(item)">填写工作意向</view>
									</view>
									<image v-if="item.source == 'user'" :src="imgUrl+'/worker/ic_me.png'"
										mode="widthFix" style="margin-left:20rpx;margin-right: 0;width:60rpx;">
									</image>
								</view>
							</view>
						</view>
						<view :id="hold" style="height:10rpx;width:100%;"></view>
					</view>
				</scroll-view>

				<!-- 提问框 -->
				<view class="ques_wrap" :style="{height:subTabHeight+'px'}">
					<view class="input flex flex_btween" v-if="!showRecord">
						<input type="text" :placeholder="placeHolder" v-model="ques" confirm-type="send"
							@confirm="doSend">
						<view class="imgs flex flex_end">
							<image :src="imgUrl+'/worker/ic_send.png'" mode="heightFix" @tap="sendQuestion">
							</image>
							<image :src="imgUrl+'/worker/ic_record.png'" mode="heightFix" @tap="toVoice">
							</image>
						</view>

					</view>
					<view class="input flex flex_btween" v-if="showRecord">
						<view class="btn in_put" v-if="showSetting" @click="openSetting">开启语音权限</view>
						<view class="btn in_put" @touchstart="startRecord" @touchend="stopRecord" v-if="!showSetting">
							按住说话
						</view>
						<image :src="imgUrl+'/worker/ic_keyboard.png'" mode="heightFix" @click="toInput">
						</image>
					</view>

				</view>
			</view>
			<view class="inputing" v-if="showInputing">
				<image :src="imgUrl+'/worker/inputing.gif'" mode="widthFix"></image>
			</view>
			<view class="ai_inner" :style="{height:showFullScreen?'100%':'80%'}" v-if="showWanner && !showReAuth">
				<view class="full_header" :style="{height:marginTop+tabMargin+'px'}" v-if="showFullScreen"></view>
				<view class="back flex flex_btween" :style="{height:subTabHeight+'px'}">
					<view class="btn cancel" @click="cancel">取消</view>
					<view class="btn finish" @click="finishSele">确定</view>
				</view>
				<scroll-view scroll-y="true" :style="{height:scrollHeight2+'px'}">
					<view class="body">
						<view class="body_box">
							<view class="title">基本信息</view>
							<view class="info" style="margin-top:0;">
								<view class="line flex flex-start">
									<view class="tit" style="margin-bottom:0;">性别：</view>
									<radio-group @change="genderChange" class=" flex flex-start">
										<label class="uni-list-cell uni-list-cell-pd flex flex-start"
											style="margin-right:80rpx;" v-for="(item, index) in gender"
											:key="item.value">
											<view>
												<radio :value="item.value" :checked="index === currentGender"
													color="#106afa" style="transform:scale(0.8)" />
											</view>
											<view style="font-size:27rpx;">{{item.text}}</view>
										</label>
									</radio-group>
								</view>
								<view class="line flex flex-start">
									<view class="tit" style="margin-bottom:0;white-space: nowrap;">年龄：</view>
									<view class="input_wrap" style="width: 100%;">
										<input type="number" v-model="age" placeholder="请输入年龄" @input="legal"
											placeholder-style="font-size:27rpx;" />
									</view>
								</view>
							</view>
						</view>
						<view class="body_box">
							<view class="title">工作意向</view>
							<view class="info">
								<view class="input_line">
									<view class="tit">意向城市</view>
									<view class="input_wrap">
										<view class="line flex flex-start">
											<view class="tit">城市一</view>
											<view class="wrap">
												<uni-data-picker ref="pickerOne" :localdata="cityData" v-model="city1"
													placeholder="请选择地址" popup-title="请选择城市" @change="onchange1"
													:map="{text:'name',value:'id'}">
												</uni-data-picker>
											</view>
										</view>
										<view class="line flex flex-start">
											<view class="tit">城市二</view>
											<view class="wrap">
												<uni-data-picker ref="pickerTwo" :localdata="cityData" v-model="city2"
													placeholder="请选择地址" popup-title="请选择城市" @change="onchange2"
													:map="{text:'name',value:'id'}">
												</uni-data-picker>
											</view>
										</view>
										<view class="line flex flex-start">
											<view class="tit">城市三</view>
											<view class="wrap">
												<uni-data-picker ref="pickerThree" :localdata="cityData" v-model="city3"
													placeholder="请选择地址" popup-title="请选择城市" @change="onchange3"
													:map="{text:'name',value:'id'}">
												</uni-data-picker>
											</view>
										</view>
									</view>
								</view>
								<view class="input_line">
									<view class="tit">意向工种</view>
									<view class="item_wrap">
										<view class="item" v-for="(item,index) in typeTags" :key="item.id">
											<view class="tit">{{item.name}}</view>
											<view class="tags flex flex-start">
												<view class="tag" v-for="(tag,tagindex) in item.tags" :key="tag.id"
													:class="seleTypeIds.indexOf(tag.id) != -1?'active':''"
													@click="chooseTag(item,tag)">
													{{tag.name}}
													<image :src="imgUrl+'/worker/ic_work_sele_1.png'" mode="widthFix"
														v-if="seleTypeIds.indexOf(tag.id) != -1"></image>
												</view>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="auth flex flex_btween" v-if="showReAuth">
				<view class="btn no" @click="noPosition">不开启</view>
				<view class="btn sure" @click="openSetting">开启定位，推荐适合您的职位</view>
				<!-- <button class="btn" open-type="openSetting">开启定位，推荐适合您的职位</button> -->
			</view>
		</view>
		<login :showLogin="showLogin" pageName="ai_chat" @handleSign="toSign(currentSiging)" @closeLogin="closeLogin">
		</login>
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
				placeHolder: "请输入您的问题",
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
				showFullScreen: false,
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
				showSetting: false
			}
		},
		created(param) {
			var _this = this;
			this.scrollHeight = app.globalData.systemHeight * 0.8 - this.tabMargin - 2 * this.subTabHeight
			this.scrollHeight2 = app.globalData.systemHeight * 0.8 - 1 * this.subTabHeight
			this.getCitys()
			setTimeout(function() {
				if (!_this.showChat) {
					_this.showAichat()
				}
			}, 10000)
		},
		methods: {
			getSetting() {
				let _this = this
				uni.getSetting({
					success(res) {
						console.log(res.authSetting, "getSetting")
						if (!res.authSetting['scope.userLocation']) {
							_this.showReAuth = true
							let data = {
								content: "",
								type: "hot_job",
								source: "user"
							}
							_this.send(data)
						} else {
							_this.getLocation()
						}
					}
				})
			},
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
						if (res.authSetting['scope.userLocation']) {
							_this.showReAuth = false
							_this.getLocation()
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
				};
				//有新的识别内容返回，则会调用此事件  
				manager.onRecognize = (res) => {
					this.recordContent += res.result;
				}

				// 识别结束事件  
				manager.onStop = (res) => {
					console.log(res.result)
					this.recordContent += res.result;
					this.showInputing = false
					let data = {
						content: this.recordContent,
						source: "user",
						type: "str"
					}
					this.send(data)
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
				manager.stop();
			},
			// 地址反向编码解析地址
			reverseGeocodingClick(latitude, longitude) {
				const QQMapWX = new qqmapsdk({
					//腾讯地图  需要用户自己去申请key
					key: app.globalData.qqMapKey
				});
				let that = this;

				QQMapWX.reverseGeocoder({
					location: {
						latitude: latitude,
						longitude: longitude
					},
					success: function(res) {
						console.log(res, "addrRes")
						let city = res.result.address_component.city
						let data = {
							content: city,
							source: "user",
							type: "hot_job"
						}
						that.send(data)
					},
					fail: function(res) {
						console.log(res);
					},
					complete: function(res) {
						console.log(res);
					}
				});
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
			async getphonenumber(e) {
				let _this = this
				this.getPhoneData.open_id = await this.getOpenId();
				if (e.detail.errMsg == 'getPhoneNumber:ok') {
					let url = ""
					// #ifdef MP-WEIXIN
					this.getPhoneData.code = e.detail.code;
					url = "/auth/worker/wechat/mini/login"
					// #endif
					// #ifdef MP-KUAISHOU
					this.getPhoneData.encrypted_data = e.detail.encryptedData;
					this.getPhoneData.iv = e.detail.iv;
					url = "/auth/worker/kuaishou/login"
					// #endif
					// #ifdef MP-TOUTIAO
					this.getPhoneData.encrypted_data = e.detail.encryptedData;
					this.getPhoneData.iv = e.detail.iv;
					url = "/auth/worker/douyin/login"
					// #endif
					_this.$request(url, this.getPhoneData, "POST").then(resp => {
						if (resp.code == 0) {
							let postMsg = {
								content: resp.data.mobile,
								source: "user",
								type: "bind_mobile"
							}
							_this.send(postMsg)
						}
					})
				} else {
					uni.showModal({
						title: e.detail.errMsg
					})
				}
			},
			chooseWork(obj, item) {
				console.log(obj, item)
			},
			changeScreen() {
				this.showFullScreen = !this.showFullScreen
				if (this.showFullScreen) {
					this.scrollHeight = app.globalData.systemHeight - 2 * this.subTabHeight -
						2 * this.tabMargin - this.marginTop
				} else {
					this.scrollHeight = app.globalData.systemHeight * 0.8 - this.tabMargin - 2 * this
						.subTabHeight
				}
			},
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
				uni.authorize({
					scope: 'scope.userLocation',
					success(res) {
						console.log(res, 'success')
					},
					fail(err) {
						_this.getSetting()
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
					let url = "/ai/chat/record?id=" + _this.historyId
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
					let url = "/ai/chat/record?id=" + this.historyId
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
					source: "user",
					type: "get_job_detail"
				}
				this.send(data)

			},
			sendQuestion() {
				var _this = this;
				_this.curStrIndex = 0;
				if (!this.ques) {
					uni.showToast({
						icon: "none",
						title: "请输入您的问题"
					})
				} else {
					if (this.canSend) {

						this.canSend = false;
						var data = {
							content: this.ques,
							type: "str",
							source: "user"
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
					uni.showModal({
						content: '正在连接或者已经连接，请勿重复连接',
						showCancel: false
					})
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

					console.log('onOpen', res);
				})
				this.socketTask.onError((err) => {
					this.connecting = false
					this.connected = false
					this.canSend = true
					uni.hideLoading()
					uni.showModal({
						content: '连接失败，请稍后再试',
						showCancel: false
					})
					console.log('onError', err);
				})
				this.socketTask.onMessage((res) => {
					let respone = JSON.parse(res.data)
					uni.hideLoading()
					console.log(respone, "respone")
					if (respone.code == 0) {
						_this.canSend = true;
						_this.placeHolder = "请输入您的问题";
						_this.toScroll();
						// _this.noInput()
						let len = respone.data.length
						if (_this.enableSpeeking) {
							_this.formatResultStr(respone.data)
						}
						for (let i = 0; i < len; i++) {
							_this.qaList.push(respone.data[i])
						}
						// _this.qaList.push({
						// 	content: "1111",
						// 	source: "system",
						// 	type: "str"
						// })

						// _this.close()
					} else {
						uni.showModal({
							title: respone.msg
						})
					}
				})
				this.socketTask.onClose((res) => {
					uni.hideLoading()
					this.connected = false
					this.socketTask = false
					console.log('onClose', res)
					let data = {
						content: "链接已关闭，如需重新对话，请重新打开窗口。",
						source: "system",
						type: "str"
					}
					this.qaList.push(data)
				})
				console.log('task', this.socketTask)
			},
			// 间隔一定时间判断用户是否没有输入
			noInput() {
				let _this = this
				this.timer = setTimeout(function() {
					let data = {
						content: "ping",
						type: "check",
						source: "user"
					}
					_this.send(data)
				}, 30000)
			},
			formatResultStr(data) {
				let len = data.length
				let str = ""
				for (let i = 0; i < len; i++) {
					if (data[i].type == "str" || data[i].type == "remind_resume") {
						str += data[i].content
					}
					if (data[i].type == "job_recommend" || data[i].type == "hot_job") {
						let conLen = data[i].content.length
						for (let j = 0; j < conLen; j++) {
							str += data[i].content[j].name
						}
					}
					if (data[i].type == "job_detail") {
						for (key in data[i].content) {
							str += data[i].content[key]
						}
					}
				}
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
				clearTimeout(this.timer)
				this.socketTask.send({
					data: JSON.stringify(data),
					success(res) {
						uni.showLoading({
							title: "思考中，请稍后..."
						})
						console.log(data, "data")
						if (data.type != "hot_job" && data.type != "check") {
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
					source: "user",
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
							source: "user",
							type: "str"
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
	.inputing {
		position: fixed;
		// top: 50%;
		// left: 50%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 100;
		background: rgba(0, 0, 0, .5);

		image {
			width: 80%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
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

	.body {
		background: #fff;
		border-radius: 16rpx;
		padding: 40rpx 50rpx;
		box-sizing: border-box;

		.body_box {
			margin-bottom: 58rpx;

			&:last-child {
				margin-bottom: 0;
			}

			.title {
				font-size: 29rpx;
				color: #333333;
				position: relative;
				padding-left: 16rpx;
				box-sizing: border-box;
				font-weight: 600;

				&::before {
					content: "";
					position: absolute;
					width: 8rpx;
					height: 27rpx;
					background: #216FF9;
					border-radius: 2rpx;
					left: 0;
					top: 50%;
					transform: translateY(-50%);
				}
			}

			.info {
				margin-top: 20rpx;

				.tit {
					font-size: 27rpx;
					color: #5A5A5A;
					font-weight: 600;
					margin-bottom: 20rpx;
				}

				.line {
					height: 84rpx;
					line-height: 84rpx;
					font-weight: 400;
					border-bottom: 2rpx dashed #DFDFDF;

					&:last-child {
						border-bottom: none;
					}

					.text {
						font-size: 25rpx;
						color: #333333;
					}
				}

				.input_wrap {
					background: #F9F9F9;
					border-radius: 8rpx;
					padding: 0 40rpx;
					box-sizing: border-box;
					margin-top: 8rpx;

					input {
						height: 80rpx;
						box-sizing: border-box;
					}

					.line {
						margin-bottom: 30rpx;

						.tit {
							width: 120rpx;
							font-size: 28rpx;
							color: #5a5a5a;
							margin-bottom: 0;

						}

						.wrap {
							width: calc(100% - 120rpx);
							background: #F9F9F9;
							border-radius: 8rpx;
						}
					}

				}

				.input_line {
					margin-bottom: 38rpx;

					.subtit {
						height: 58rpx;
						line-height: 58rpx;
						text-align: center;
						background: rgba(33, 111, 249, 0.2);
						border-radius: 2rpx;
						font-weight: 600;
						font-size: 27rpx;
						color: #216FF9;
						margin-bottom: 19rpx;
					}

					.item_wrap {
						font-size: 14px;


						.item {


							.tit {
								font-weight: 500;
								margin-bottom: 20rpx;
							}

							.tags {
								flex-wrap: wrap;
							}
						}

						.tag {
							height: 65rpx;
							line-height: 65rpx;
							width: calc(32% - 6rpx);
							border-radius: 4rpx;
							background: #F9F9F9;
							border: 2rpx solid #F9F9F9;
							margin: 0rpx 2% 20rpx 0;
							cursor: pointer;
							position: relative;
							font-size: 23rpx;
							color: #333333;
							text-align: center;

							&:nth-child(3n) {
								margin-right: 0;
							}

							image {
								position: absolute;
								top: 0;
								right: 0;
								width: 38rpx;
								height: 38rpx;
							}

							&.active {
								font-weight: 600;
								border: 2rpx solid #216FF9;
								color: #216FF9;
							}
						}
					}

					.labels {
						margin-top: 8rpx;

						.label {
							width: 30%;
							height: 85rpx;
							line-height: 85rpx;
							text-align: center;
							background: #F9F9F9;
							border-radius: 6rpx;
							font-weight: 400;
							font-size: 27rpx;
							color: #333333;
							border: 2rpx solid #F9F9F9;

							&.active {
								border: 2rpx solid #216FF9;
								font-weight: 600;
								font-size: 27rpx;
								color: #216FF9;
								position: relative;
							}

							&.active::after {
								content: "";
								width: 38rpx;
								height: 38rpx;
								position: absolute;
								top: 0;
								right: 0;
								background: url($back-ground-url+"/worker/ic_work_sele_1.png") no-repeat;
								background-size: 100% 100%;
							}

						}
					}

					.input_wrap {
						background: #F9F9F9;
						border-radius: 8rpx;
						padding: 0 40rpx;
						box-sizing: border-box;
						margin-top: 8rpx;


						.arrow {
							width: 13rpx;
							height: 23rpx;
						}

						.city {
							font-size: 27rpx;
							color: #333333;
						}

						input {
							height: 84rpx;
							font-weight: 400;
							font-size: 27rpx;
							color: #333333;
						}
					}
				}
			}
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
				background: url($back-ground-url+"/worker/top_header_bg.png") no-repeat;
				background-size: cover;
			}
		}
	}

	.back {
		padding: 0 40rpx;
		box-sizing: border-box;
		border-bottom: 1px solid #f6f6f6;

		.btn {
			font-weight: 600;

			&.cancel {
				color: #5a5a5a;
			}

			&.finish {
				color: $base-color;
			}
		}

		&>image {

			transform: rotate(180deg);
		}

		image {
			width: 20px;
			height: 20px;
		}

		.right {
			image {
				margin-left: 20rpx;
			}
		}
	}


	.ques_wrap {
		width: calc(100% - 80rpx);
		max-width: 700px;
		border: 1px solid $base-color;
		// border-bottom: 1px solid #04babe;
		background: #fff;
		border-radius: 10rpx;
		margin: 0 auto;
		padding: 0 16rpx;
		box-sizing: border-box;

		.input {
			height: 100%;

			input {
				width: 100%;
				height: 100%;
				font-size: 30rpx;
			}

			.btn {
				width: 100%;
				text-align: center;
				line-height: 100%;
			}

			image {
				width: 30px;
				height: 30px;
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
		padding: 40rpx;
		box-sizing: border-box;

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
							width: 90rpx;
							height: 90rpx;
							vertical-align: top;
							margin-left: 0;
						}

						.cont {
							display: inline-block;
							max-width: calc(100% - 110rpx);
							overflow: hidden;
							line-height: 50rpx;
							color: #fff;
							font-size: 30rpx;
							font-family: "微软雅黑";
							background: #106afa;
							padding: 20rpx;
							border-radius: 16rpx;
							box-sizing: border-box;

							.wanner {
								background: $base-color;
								color: #fff;
								// padding: 5rpx 15rpx;
								border-radius: 6rpx;
								text-align: center;
								line-height: 70rpx;
								height: 70rpx;
								font-size: 30rpx;

								&.bind {
									background: #05b605;
								}
							}

							.detail {
								.tit {
									font-weight: 600;
								}

								.de_line {
									font-size: 27rpx;
									align-items: start;

									.subtit {
										white-space: nowrap;
									}
								}

								.btns {
									margin-top: 20rpx;

									.btn {
										width: 48%;
										border-radius: 4rpx;
										font-size: 24rpx;
										text-align: center;
										line-height: 70rpx;
										height: 70rpx;
										font-size: 30rpx;

										&.no {
											background: #ffffff;
										}

										&.sign {
											background: $base-color;
											color: #ffffff;
										}
									}
								}
							}

							.list {
								padding: 0 20rpx;
								box-sizing: border-box;
								background: #fff;
								border-radius: 10rpx;
								font-size: 28rpx;

								.tips {
									font-size: 30rpx;
									padding-top: 16rpx;
									// align-items: start;

									image {
										width: 36rpx;
										height: 36rpx;
										margin-right: 10rpx;
									}
								}

								.item {
									// margin-bottom: 20rpx;
									padding: 20rpx 0;
									border-bottom: 1px solid #f1f1f1;

									&:last-child {
										border-bottom: none;
									}

									image {
										width: 20rpx;
										height: 20rpx;
									}
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
							color: #333;
							background: #e6e6e6;

						}
					}

					&.right {
						display: flex;
						justify-content: flex-end;

						.inline_box {
							align-items: start;
							justify-content: flex-end;
						}
					}
				}
			}
		}
	}
</style>