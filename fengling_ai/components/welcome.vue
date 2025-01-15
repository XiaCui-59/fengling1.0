<template>
	<view class="content_body body_bg" :style="{paddingTop:top+'px',paddingBottom:bottom+'px'}">
		<view class="top_wrap">
			<view class="banner">
				<view class="ban_top">
					<view class="tit">{{currentPlay.project_name}}</view>
					<view class="salary flex flex-start">
						<text>{{currentPlay.worker_salary_max}}</text>
						<text
							class="period">元{{period.filter(el=>{return el.value == currentPlay.worker_salary_type})[0]?period.filter(el=>{return el.value == currentPlay.worker_salary_type})[0].text:""}}
						</text>
					</view>
				</view>
				<view class="ban_bot">
					<scroll-view scroll-y="true" class="cont" style="height:260rpx;" :scroll-with-animation="true"
						:scroll-top="scrollTop" @touchstart="touchStart" @scrolltolower="scrollLower">
						{{currentPlay.content}}
					</scroll-view>
				</view>
				<image :src="imgUrl+'/worker/new/banner_ai.png'" :lazy-load="true" mode="widthFix"></image>
				<view class="voice_control" @click.stop="handleAudio">
					<image :src="imgUrl+'/worker/new/ic_index_voice_muted.png'" mode="heightFix"
						:style="{display:muted?'inline-block':'none'}"></image>
					<image :src="imgUrl+'/worker/new/ic_index_voice_play.png'" mode="heightFix"
						:style="{display:muted?'none':'inline-block'}"></image>
				</view>
				<view class="surein" v-show="showSureJob" @click.stop="toChat('surejob')">
					<image :src="imgUrl+'/worker/new/ic_heart.png'" mode="widthFix"></image>
					<text>立即报名</text>
				</view>
			</view>
			<view class="tips_wrap flex flex_btween">
				<view class="tip_list">
					<view class="item" v-for="(item,index) in currentPlay.may_ask" :key="index"
						@click="sendMsg(item,'tip')">
						<view class="text">{{item}}</view>
					</view>
				</view>
				<view class="change" @click="changeNext" v-show="showSureJob">下一个&gt;</view>
			</view>
		</view>
		<view class="iwant_wrap" :style="{bottom:bottom+10+'px'}">
			<view class="img flex flex_btween">
				<image :src="imgUrl+'/worker/new/iwant_slogan.png'" mode="widthFix"></image>
				<!-- <image :src="imgUrl+'/worker/new/ic_telephone.png'" mode="widthFix" style="width: 77rpx;"
					@click="toCall('')"></image> -->
			</view>
			<view class="iwant_list flex flex_btween">
				<view class="iwant_item" @click="toInvite">
					<view class="iwant_tips">
						<view class="tit" style="text-align: center;">邀请有礼</view>
						<view class="tips_list">
							<view class="tips" style="text-align: center;">邀请好友，充值返现</view>
						</view>
					</view>
				</view>
				<view class="iwant_item flex flex_btween" @click="toChat('findjob')">
					<view class="iwant_tips">
						<view class="tit">我要找工作</view>
						<view class="tips_list">
							<view class="tips">优质高效</view>
							<view class="tips">我最懂你</view>
						</view>
					</view>
					<view class="icon">
						<image :src="imgUrl+'/worker/new/iwant02.png'" mode="widthFix"></image>
					</view>
				</view>
				<!-- <view class="iwant_item flex flex_btween" @click="toChat('findjob')">
					<view class="iwant_tips">
						<view class="tit">我要找工作</view>
						<view class="tips_list">
							<view class="tips">优质高效</view>
							<view class="tips">我最懂你</view>
						</view>
					</view>
					<view class="icon">
						<image :src="imgUrl+'/worker/new/iwant02.png'" mode="widthFix"></image>
					</view>
				</view> -->
			</view>
		</view>
		<myModal ref="myModal">
		</myModal>
		<view class="new_user_steps" v-show="showUserStep" :style="{paddingTop:top+'px',paddingBottom:bottom+'px'}"
			@click="nextStep">
			<view class="top_wrap">
				<view class="banner" :style="{opacity:currentStep == 1?1:0}">
					<view class="ban_top">
						<view class="tit">{{currentPlay.project_name}}</view>
						<view class="salary flex flex-start">
							<text>{{currentPlay.worker_salary_max}}</text>
							<text
								class="period">元{{period.filter(el=>{return el.value == currentPlay.worker_salary_type})[0]?period.filter(el=>{return el.value == currentPlay.worker_salary_type})[0].text:""}}
							</text>
						</view>
					</view>
					<view class="ban_bot">
						<scroll-view scroll-y="true" class="cont" style="height:260rpx;" :scroll-with-animation="true"
							:scroll-top="scrollTop" @touchstart="touchStart" @scrolltolower="scrollLower">
							{{currentPlay.content}}
						</scroll-view>
					</view>
					<image :src="imgUrl+'/worker/new/banner_ai.png'" mode="widthFix"></image>
					<view class="voice_control">
						<image :src="imgUrl+'/worker/new/ic_index_voice_muted.png'" mode="heightFix"
							:style="{display:muted?'inline-block':'none'}"></image>
						<image :src="imgUrl+'/worker/new/ic_index_voice_play.png'" mode="heightFix"
							:style="{display:muted?'none':'inline-block'}"></image>
					</view>
					<view class="surein">
						<image :src="imgUrl+'/worker/new/ic_heart.png'" mode="widthFix"></image>
						<text>立即报名</text>
					</view>
					<view class="step_tips">
						<view class="step_line" style="text-align: right;padding-right: 80rpx;">
							<image :src="imgUrl+'/worker/new/step_line.png'" mode="widthFix"></image>
						</view>
						<view class="step_top">
							<view class="step_tit">点击“立即报名”，了解当前播报工作详情</view>
							<view class="step_text flex flex_btween">
								<view class="text">听语音播报，好工作不容错过</view>
								<view class="step_btn">下一步(1/6)</view>
							</view>
						</view>
						<view class="ai_avatar">
							<image :src="imgUrl+'/worker/new/step_ai_logo.png'" mode="widthFix"></image>
						</view>
					</view>
				</view>
				<view class="tips_wrap flex flex_btween" :style="{opacity:currentStep == 2?1:0}">
					<view class="tip_list">
						<view class="item" v-for="(item,index) in currentPlay.may_ask" :key="index"
							:style="{marginBottom:index==2?0:'16rpx'}">
							<view class="text" style="background:#fff;">{{item}}</view>
						</view>
					</view>
					<view class="change">下一个&gt;</view>
					<view class="step_tips" style="top:auto;top:100%;bottom:auto;">
						<view class="step_line" style="padding-left: 80rpx;">
							<image :src="imgUrl+'/worker/new/step_line.png'" mode="widthFix"></image>
						</view>
						<view class="step_top">
							<view class="step_tit">点击这里，可能会有您想问的问题哟</view>
							<view class="step_text flex flex_btween">
								<view class="text">深入了解当前播报职位信息</view>
								<view class="step_btn">下一步(2/6)</view>
							</view>
						</view>
						<view class="ai_avatar" style="top:auto;bottom:-60rpx;">
							<image :src="imgUrl+'/worker/new/step_ai_logo.png'" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
			<view class="iwant_wrap" :style="{bottom:bottom+10+'px'}">
				<view class="iwant_list flex flex_btween">
					<view class="iwant_item" :style="{opacity:currentStep == 3?1:0}">
						<view class="iwant_tips">
							<view class="tit" style="text-align: center;">邀请有礼</view>
							<view class="tips_list">
								<view class="tips" style="text-align: center;">邀请好友，充值返现</view>
							</view>
						</view>
						<view class="step_tips">
							<view class="step_top">
								<view class="step_tit">点击“邀请有礼”，转发给好友</view>
								<view class="step_text flex flex_btween" style="align-items: flex-end;">
									<view class="text">
										<view class="">好友首次充值后</view>
										<view class="">立即返现</view>
									</view>
									<view class="step_btn">下一步(3/6)</view>
								</view>
							</view>
							<view class="step_line" style="text-align: left;padding-left: 100rpx;">
								<image :src="imgUrl+'/worker/new/step_line.png'" mode="widthFix"></image>
							</view>
							<view class="ai_avatar">
								<image :src="imgUrl+'/worker/new/step_ai_logo.png'" mode="widthFix"></image>
							</view>
						</view>
						<view class="step_hand" style="bottom:-80rpx;left:50%;transform: translateX(-40%);">
							<image :src="imgUrl+'/worker/new/step_hand.png'" mode="widthFix"></image>
						</view>
					</view>
					<view class="iwant_item flex flex_btween" :style="{opacity:currentStep == 4?1:0}">
						<view class="iwant_tips">
							<view class="tit">我要找工作</view>
							<view class="tips_list">
								<view class="tips">优质高效</view>
								<view class="tips">我最懂你</view>
							</view>
						</view>
						<view class="icon">
							<image :src="imgUrl+'/worker/new/iwant02.png'" mode="widthFix"></image>
						</view>
						<view class="step_tips" :style="{left:'auto',right:0}">
							<view class="step_top">
								<view class="step_tit">点击“我要找工作”，快速入职合适工作</view>
								<view class="step_text flex flex_btween">
									<view class="text">优质工作，我最懂你</view>
									<view class="step_btn">下一步(4/6)</view>
								</view>
							</view>
							<view class="step_line" style="text-align: right;padding-right: 100rpx;">
								<image :src="imgUrl+'/worker/new/step_line.png'" mode="widthFix"></image>
							</view>
							<view class="ai_avatar">
								<image :src="imgUrl+'/worker/new/step_ai_logo.png'" mode="widthFix"></image>
							</view>
						</view>
						<view class="step_hand" style="bottom:-80rpx;right:-60rpx;">
							<image :src="imgUrl+'/worker/new/step_hand.png'" mode="widthFix"></image>
						</view>
					</view>

				</view>
			</view>
			<view class="input_btn_wrap" style="bottom:65rpx;"
				:style="{background:currentStep == 5?'transparent':'#fff',opacity:(currentStep == 5 || currentStep == 6)?1:0}">

				<view class="fl_icon" :style="{opacity:(currentStep == 5 || currentStep == 6)?1:0}">
					<image :src="imgUrl+'/worker/new/ic_fengling.png'"></image>
				</view>
				<view :style="{opacity:currentStep == 6?1:0}">
					<view class="voice_btn_wrap">按住 说话</view>
				</view>
				<view class="func_icon" :style="{opacity:currentStep == 6?1:0}">
					<image :src="imgUrl+'/worker/ic_keyboard_blue.png'">
					</image>
				</view>
				<view class="step_tips" style="width:80%;left:50%;transform: translateX(-50%);"
					:style="{opacity:currentStep == 6?1:0}">
					<view class="step_top">
						<view class="step_tit">您还可以用语音这样说~</view>
						<view class="step_text">
							<view class="text" style="font-size: 27rpx;line-height: 48rpx;">—“有没有适合我的工作呢？”</view>
							<view class="text" style="font-size: 27rpx;line-height: 48rpx;">—“想找个近点的工作，轻松一点的？”</view>
							<view class="text" style="font-size: 27rpx;line-height: 48rpx;">—“我想找个长白班的工作，最好包吃住。”</view>
							<view class="flex flex_end" style="margin-top: 20rpx;">
								<view class="step_btn">完成(6/6)</view>
							</view>
						</view>
					</view>
					<view class="step_line">
						<image :src="imgUrl+'/worker/new/step_line.png'" mode="widthFix"></image>
					</view>
					<view class="ai_avatar">
						<image :src="imgUrl+'/worker/new/step_ai_logo.png'" mode="widthFix"></image>
					</view>
				</view>
				<view class="step_tips" style="width:85%;left:0;" :style="{opacity:currentStep == 5?1:0}">
					<view class="step_top">
						<view class="step_tit">点击"风铃"图标，查看更多热招工作</view>
						<view class="step_text flex flex_btween" style="align-items:flex-end;">
							<view class="list">
								<view class="text flex" style="margin-top:0;">
									<view>新津区域宁德时代招聘</view>
								</view>
								<view class="text flex">
									<view>新津-事丰医疗厂</view>
								</view>
								<view class="text flex">
									<view>崇州大东鞋厂长白班</view>
								</view>
								<view class="text" style="font-size: 19rpx;color: #FFFFFF;">提示：以上为示例职位，仅供参考</view>
							</view>
							<view class="step_btn">下一步(5/6)</view>
						</view>
					</view>
					<view class="step_line" style="padding-left: 40rpx;">
						<image :src="imgUrl+'/worker/new/step_line.png'" mode="widthFix"></image>
					</view>
					<view class="ai_avatar">
						<image :src="imgUrl+'/worker/new/step_ai_logo.png'" mode="widthFix"></image>
					</view>
				</view>
				<view class="step_hand" style="bottom:-80rpx;" :style="{left:currentStep==5?'52rpx':'75%'}">
					<image :src="imgUrl+'/worker/new/step_hand.png'" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import commonData from "@/common/commonData.js"
	import commonMethods from "@/common/commMethods.js"
	import {
		mapState,
		mapMutations
	} from "vuex"
	const app = getApp();
	export default {
		name: "welcome",
		props: ["top", "bottom", "canPlay", "showUserStep"],
		data() {
			return {
				showSureJob: false,
				scrollTop: 0,
				period: commonData.periodList,
				current: 0, // 当前激活的swiper-item索引
				dots: 2, // 指示点的数量，可以根据swiper-item的数量动态计算
				imgUrl: app.globalData.baseImageUrl,
				recommendList: [],
				currentPlay: {
					"project_id": "",
					"content": "",
					"may_ask": [],
					"project_name": "",
					"voice": "",
					"worker_salary_max": "",
					"worker_salary_min": "",
					"worker_salary_type": ""
				},
				currentPlayIndex: 0,
				muted: false, //是否静音
				systemHeight: app.globalData.systemHeight,
				// Audio: app.globalData.Audio,
				animationActive: true,
				animationTimer: null,
				welcomeVoiceList: [app.globalData.baseImageUrl + "/worker/wel01.mp3", app.globalData.baseImageUrl +
					"/worker/wel02.mp3", app.globalData.baseImageUrl + "/worker/wel03.mp3"
				],
				lastClickTime: 0, // 记录上次点击的时间
				requestTimer: null,
				reConnectCount: 0, //记录网络异常重连次数,
				mayAskCount: 0, //记录mayAsk异常重连次数,
				bannerImageInfo: null,
				bannerHeight: 0,
				// showUserStep: false,
				currentStep: 1,
				firstEnd: false,
				isWelcome: true,
				clickProject: {
					"project_id": "",
					"content": "",
					"may_ask": [],
					"project_name": "",
					"voice": "",
					"worker_salary_max": "",
					"worker_salary_min": "",
					"worker_salary_type": ""
				}
			};
		},
		computed: {
			...mapState(["city", "aiReady"])
		},
		created() {
			let _this = this
			//音频停止事件
			app.globalData.Audio.onPlay(e => {
				if (!this.isWelcome) {
					this.textAnimation()
				}

			});

			//音频停止事件
			app.globalData.Audio.onStop(e => {});

			//音频播放结束事件
			app.globalData.Audio.onEnded(e => {
				if (this.canPlay) {
					if (this.firstEnd) {
						this.playNext()
					} else {
						this.playFirst()
					}

				}
			});
		},
		watch: {
			animationActive(newVal) {
				if (newVal) {
					// this.textAnimation()
				} else {
					this.stopInterval()
				}
			},
			canPlay(newVal) {
				if (!newVal) {
					app.globalData.Audio.pause()
					this.muted = true
				} else {
					this.stopInterval()
				}
			},
			city(newVal) {
				console.log("newCity:", newVal)
				this.getRecommend()
			},
			currentPlayIndex(newVal) {
				// 根据不同的职位请求最新的may_ask
				this.getMayAsk()
			}
		},
		methods: {
			toInvite() {
				uni.navigateTo({
					url: "/pages/invite/invite"
				})
			},
			toChat(type) {
				this.clickProject = {
					...this.currentPlay
				}
				let action = type == "surejob" ? "text_want_application" : (type == "findjob" ? "text_look_for_job" :
					"text_interview")
				let jobId = type == "surejob" ? this.clickProject.project_id : ""
				let msg = type == "surejob" ? ("我对" + this.clickProject.project_name + "（职位ID：" + this.clickProject
					.project_id + "）很感兴趣，能为我介绍一下吗？") : (type == "findjob" ?
					"我正在找工作，能帮我推荐一些合适的职位吗？" :
					"我可以开始面试了，什么时候安排？")
				let obj = {
					msg: msg,
					type: type,
					job_id: jobId,
					action: action,
					name: this.clickProject.project_name ? this.clickProject.project_name : ""
				}
				this.$emit("sendMsg", obj)
			},
			toCall(type) {
				let obj = {
					type: type,
					job_id: type == "surejob" ? this.currentPlay.project_id : ""
				}
				this.$emit("tocall", obj)
			},
			nextStep() {
				if (this.currentStep < 6) {
					this.currentStep++
				} else {
					// 存储已阅读新手指引状态
					uni.setStorageSync("readsteps", 1)
					if (this.canPlay) {
						this.playWelcome()
					}
					this.$emit("closeStep")
				}
			},
			changeNext() {
				let len = this.recommendList.length
				if (this.currentPlayIndex == len - 1) {
					let obj = {
						msg: "我正在找工作，能帮我推荐一些合适的职位吗？",
						type: "",
						job_id: ""
					}
					this.$emit("sendMsg", obj)
				} else {
					app.globalData.Audio.stop()
					this.playNext()
				}

			},
			playFirst() {
				this.firstEnd = true
				this.isWelcome = false
				// app.globalData.Audio.stop()
				if (this.canPlay && !this.muted) {
					this.playAudio()
				}
			},
			// 播放下一个工作
			playNext() {
				let _this = this
				let len = this.recommendList.length
				if (this.currentPlayIndex < len - 1) {
					this.currentPlayIndex++
					this.currentPlay = this.recommendList[this.currentPlayIndex]
				} else {
					this.currentPlayIndex = 0
					this.currentPlay = this.recommendList[this.currentPlayIndex]
					this.currentPlayIndex++
				}
				// this.playAudio()
				setTimeout(function() {
					if (_this.canPlay && !_this.muted) {
						_this.playAudio()
					}

				}, 50)

			},
			stopInterval() {
				if (this.animationTimer) {
					clearInterval(this.animationTimer);
					this.animationTimer = null;
					this.scrollTop = 0
				}
			},
			//控制播放还是暂停音频文件
			handleAudio() {
				this.$emit("openCanPlay")
				app.globalData.Audio.paused ? this.playAudio() : this.pauseAudio();
			},
			//播放工作音频
			playAudio() {
				if (this.canPlay) {
					app.globalData.Audio.src = this.currentPlay.voice;
					app.globalData.Audio.play();
					this.muted = false
				}

			},
			//播放工作音频
			playWelcome() {
				let i = Math.floor(Math.random() * this.welcomeVoiceList.length)
				app.globalData.Audio.src = this.welcomeVoiceList[i];
				app.globalData.Audio.play();
				this.muted = false
			},
			//停止音频
			stopAudio() {
				app.globalData.Audio.src = '';
				app.globalData.Audio.stop();
			},
			// 暂停音频
			pauseAudio() {
				app.globalData.Audio.pause()
				this.muted = true
			},
			async getMayAsk() {
				let url = "/homepage/may_ask/" + this.currentPlay.project_id
				try {
					let res = await this.$request(url)
					this.currentPlay.may_ask = res.data.list.may_ask
				} catch (error) {
					if (this.mayAskCount < 5) {
						this.getMayAsk()
						this.mayAskCount++
					} else {
						this.mayAskCount = 0
					}
				}

				// this.$request(url).then(res => {
				// 	if (res.code == 0) {
				// 		this.currentPlay.may_ask = res.data.list.may_ask
				// 	}
				// })
			},
			async getRecommend() {
				let _this = this
				let data = {
					city: this.city
					// city: "眉山"
				}
				try {
					let res = await this.$request("/homepage", data, "POST")
					this.$emit("setGreetStatus")
					if (res.data.list.length > 0) {
						this.currentPlay = res.data.list[0]
						this.recommendList = res.data.list
						this.showSureJob = true
						this.getMayAsk()
						if (!this.showUserStep && this.canPlay) {
							this.playWelcome()
						}

					} else {
						this.$refs.myModal.showModal({
							title: "暂无推荐职位信息",
							showCancel: false
						})
					}

				} catch (error) {
					console.error('An error occurred:', error);
					// 处理错误
					if (_this.reConnectCount < 10) {
						_this.reConnectCount++
						_this.getRecommend()
					} else {
						uni.showModal({
							title: "网络超时，请重新进入小程序。",
							showCancel: false,
							success(resp) {
								if (resp.confirm) {
									_this.reConnectCount = 0
									uni.reLaunch({
										url: '/pages/index/index'
									})
								}
							}
						})
					}

				}
			},
			sendMsg(msg, type) {
				this.clickProject = {
					...this.currentPlay
				}
				let obj = {
					msg: this.clickProject.project_name + "（职位id：" + this.clickProject.project_id + "）" + msg,
					type: type,
					job_id: this.clickProject.project_id,
					name: this.clickProject.project_name
				}
				this.$emit("sendMsg", obj)
			},
			textAnimation() {
				let _this = this
				_this.scrollTop = 0
				if (!this.animationTimer) {
					this.animationTimer = setInterval(function() {
						_this.scrollTop += 2
					}, 300)
				}

			},
			touchStart() {
				this.animationActive = false
			},
			getPosition() {
				return new Promise((resolve, reject) => {
					let url = "https://apis.map.qq.com/ws/location/v1/ip?key=" + app.globalData.qqMapKey
					uni.request({
						url: url,
						method: "GET",
						success(res) {
							resolve(res.data.result.ad_info.city)
						},
						fail(err) {
							console.log(err)
							reject(err)
						}
					})
				})

			},
			scrollLower() {
				if (this.animationActive) {
					this.scrollTop = 0
				}

			}
		}
	}
</script>

<style lang="scss">
	.top_wrap {
		margin-top: 42rpx;

		.tips_wrap {
			margin-top: 20rpx;
			align-items: flex-start;
			position: relative;

			.change {
				margin-top: 10rpx;
				margin-right: 28rpx;
				// width: 108rpx;
				// text-align: right;
				font-weight: 400;
				font-size: 27rpx;
				flex-shrink: 0;
				color: #213B56;
				border-bottom: 2rpx dotted #213B56;
			}

			.tip_list {
				max-width: calc(100% - 115rpx);

				.item {
					display: flex;
					margin-bottom: 16rpx;

					&:last-child {
						margin-bottom: 28rpx;
					}

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
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
					}
				}
			}
		}

		.banner {
			box-sizing: border-box;
			position: relative;
			background: url($back-ground-url+'/worker/new/banner_bg.png') no-repeat;
			background-size: 100% auto;
			background-position: center top;
			border-bottom-left-radius: 40rpx;
			border-bottom-right-radius: 40rpx;
			padding: 28rpx;
			box-sizing: border-box;

			&>image {
				width: 320rpx;
				position: absolute;
				bottom: 0;
				right: -20rpx;
				z-index: 10;
			}

			.ban_top {
				width: 60%;
				padding-bottom: 15rpx;
				border-bottom: 2rpx dotted rgba(255, 255, 255, 0.7);

				.tit {
					font-weight: 600;
					font-size: 31rpx;
					color: #223756;
					width: 80%;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
				}

				.salary {
					font-weight: 900;
					font-size: 38rpx;
					color: #223756;
					font-family: Arial, Arial;

					.period {
						font-weight: 400;
						font-size: 23rpx;
						color: #223756;
					}
				}
			}

			.ban_bot {
				width: 54%;
				padding-top: 25rpx;
				font-weight: 400;
				font-size: 29rpx;
				color: #FFFFFF;
				line-height: 46rpx;
			}

			.voice_control {
				position: absolute;
				bottom: 20rpx;
				left: 20rpx;
				box-sizing: border-box;
				z-index: 100;
				font-size: 0;

				image {
					height: 50rpx;
				}
			}

			.surein {
				position: absolute;
				bottom: 20rpx;
				right: 20rpx;
				width: 163rpx;
				height: 58rpx;
				line-height: 58rpx;
				text-align: center;
				background: rgba(255, 255, 255, 0.9);
				border-radius: 29rpx;
				z-index: 100;

				image {
					width: 30rpx;
					vertical-align: middle;
				}

				text {
					font-weight: 400;
					font-size: 27rpx;
					color: #213B56;
				}
			}
		}
	}

	.iwant_wrap {
		width: calc(100% - 56rpx);
		position: fixed;
		left: 28rpx;

		.img {
			font-size: 0;
			align-items: flex-end;

			image {
				width: 290rpx;
			}
		}

		.iwant_list {
			margin-top: 34rpx;

			.iwant_item {
				height: 146rpx;
				// margin-right: 2%;
				padding: 20rpx 9rpx 20rpx 19rpx;
				box-sizing: border-box;
				border-radius: 10rpx;
				margin-top: 10rpx;
				// align-items: flex-start;

				&:nth-child(1) {
					width: 33%;
					flex-shrink: 0;
					margin-right: 3%;
					background: url($back-ground-url+"/worker/new/index_invite_bg.png") no-repeat;
					background-size: 100% 100%;
				}

				&:nth-child(2) {
					padding: 20rpx 30rpx 20rpx 30rpx;
					border: 2rpx solid #FFFFFF;
					width: 64%;
					background: linear-gradient(164deg, #E7F9EC 0%, #FFFFFF 45%, #FFFFFF 100%);
				}

				&:last-child {
					background: linear-gradient(164deg, #E7E7FA 0%, #FFFFFF 45%, #FFFFFF 100%);
					margin-right: 0;
				}



				.iwant_tips {


					.tit {
						font-weight: 600;
						font-size: 29rpx;
						color: #253E60;
						margin-bottom: 16rpx;
					}

					.tips_list {
						line-height: 34rpx;

						.tips {
							font-weight: 400;
							font-size: 22rpx;
							color: #5B5B5B;
						}

					}
				}

				.icon {
					font-size: 0;

					image {
						width: 160rpx;
					}

				}
			}
		}
	}

	.content_body,
	.new_user_steps {
		background: url($back-ground-url+"/worker/new/welcome_bg.png") no-repeat;
		background-size: cover;
		padding: 0 28rpx;
		box-sizing: border-box;

		.step_hand {
			font-size: 0;
			position: absolute;
			z-index: 200;

			image {
				width: 120rpx;
			}
		}

		&.new_user_steps {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 1000;
			background: rgba(0, 0, 0, 0.60);

			.step_tips {
				position: absolute;
				bottom: 100%;
				left: 0;

				.step_top {
					background: linear-gradient(131deg, #DDB2DA 0%, #3C95ED 51%, #B3E7FC 100%);
					padding: 40rpx 18rpx 40rpx 18rpx;
					box-sizing: border-box;
					border-radius: 14rpx;

					.step_tit {
						font-weight: 600;
						font-size: 31rpx;
						color: #FFFFFF;
						line-height: 42rpx;
						white-space: nowrap;
					}

					.step_text {
						margin-top: 20rpx;

						.text {
							font-weight: 400;
							font-size: 23rpx;
							color: rgba(255, 255, 255, 0.6);
							line-height: 33rpx;
						}

						.step_btn {
							width: 154rpx;
							height: 46rpx;
							background: #FFFFFF;
							border-radius: 23rpx;
							font-weight: 400;
							font-size: 23rpx;
							color: #216FF9;
							line-height: 46rpx;
							text-align: center;
						}

						.list {
							.text {
								margin-top: 10rpx;


								view {
									padding: 0 25rpx;
									box-sizing: border-box;
									height: 46rpx;
									line-height: 46rpx;
									background: rgba(255, 255, 255, 0.3);
									border-radius: 23rpx;
									border: 1rpx solid rgba(255, 255, 255, 0.6);
									font-size: 23rpx;
									color: #FFFFFF;

								}

							}
						}
					}
				}

				.step_line {
					padding-left: 100rpx;
					font-size: 0;

					image {
						width: 30rpx;
					}
				}

				.ai_avatar {
					font-size: 0;
					position: absolute;
					top: -60rpx;
					left: 0;
					bottom: auto;
					z-index: 200;

					image {
						width: 120rpx;
					}

				}
			}

			.banner {
				.step_tips {
					bottom: auto;
					top: 100%;
					left: auto;
					right: 0;

					.ai_avatar {
						font-size: 0;
						position: absolute;
						top: auto;
						bottom: -60rpx;
						left: 0;

						image {
							width: 120rpx;
						}

					}
				}
			}

			.iwant_wrap {
				.iwant_list {
					.iwant_item {
						position: relative;
					}
				}
			}
		}


		.greeting {
			margin-top: 42rpx;

			.avatar {
				text-align: center;
				width: 280rpx;
				height: 280rpx;
				margin: 0 auto 46rpx auto;
				border-radius: 50%;
				// overflow: hidden;
				position: relative;

				&>image {
					width: 280rpx;
				}

				.play_box {
					position: absolute;
					width: 86rpx;
					height: 54rpx;
					background: #FFFFFF;
					box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(0, 0, 0, 0.5);
					border-radius: 21rpx;
					bottom: 0;
					right: 0;
					text-align: center;

					image {
						height: 54rpx;
					}
				}
			}

			.tips {
				// height: 424rpx;
				overflow: hidden;
				background: #F1F8FF;
				border-radius: 4rpx 44rpx 44rpx 44rpx;
				padding: 0rpx 30rpx 23rpx 30rpx;
				box-sizing: border-box;
				position: relative;

				.title {
					padding: 23rpx 0;
					background: #F1F8FF;
					border-bottom: 2rpx dashed rgba(34, 55, 86, 0.2);
					position: relative;
					z-index: 100;

					.name {
						font-weight: 600;
						font-size: 38rpx;
						color: #223756;
						max-width: calc(100% - 380rpx);
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
					}

					.sala_box {
						max-width: 360rpx;

						.count {
							font-weight: 600;
							font-size: 42rpx;
							color: #223756;
							white-space: nowrap;
						}

						.period {
							font-weight: 400;
							font-size: 24rpx;
							color: #223756;
							margin-left: 8rpx;
						}
					}
				}

				.cont {
					font-weight: 400;
					font-size: 31rpx;
					color: #223756;
					line-height: 50rpx;
					position: relative;
					padding-top: 20rpx;
					padding-bottom: 0rpx;

					box-sizing: border-box;

					.animation_box {
						padding-bottom: 100rpx;
					}
				}

				.voice_control {
					width: 100%;
					text-align: right;
					position: absolute;
					bottom: 0rpx;
					right: 0rpx;
					padding: 0 28rpx 18rpx 0;
					box-sizing: border-box;
					z-index: 100;

					image {
						height: 50rpx;
					}
				}


			}
		}

		// .tips_wrap {
		// 	position: fixed;
		// 	left: 28rpx;

		// 	// margin-top: 40rpx;
		// 	// align-items: flex-start;
		// 	.tip_list {
		// 		// max-width: calc(100% - 85rpx);

		// 		.item {
		// 			display: flex;
		// 			margin-bottom: 16rpx;

		// 			&:last-child {
		// 				margin-bottom: 28rpx;
		// 			}

		// 			.text {
		// 				height: 58rpx;
		// 				line-height: 58rpx;
		// 				background: rgba(255, 255, 255, 0.6);
		// 				border-radius: 63rpx;
		// 				border: 1rpx solid #D7D9EE;
		// 				padding: 0 40rpx 0 20rpx;
		// 				box-sizing: border-box;
		// 				font-weight: 400;
		// 				font-size: 28rpx;
		// 				color: #213B56;
		// 				white-space: nowrap;
		// 				text-overflow: ellipsis;
		// 				overflow: hidden;
		// 			}
		// 		}
		// 	}
		// }


	}
</style>