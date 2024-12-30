<template>
	<view class="login" v-if="showLogin">
		<view class="inner" v-if="!showPolicy">
			<view class="title">登录前请仔细阅读以下内容：</view>
			<view class="tips">感谢选择灵动优聘小程序，我们非常重视您的个人信息安全和隐私保护。依据最新法律要求，使用我们的产品前，请仔细阅读并同意 <text
					@click="readPolicy">《灵动优聘服务协议和隐私政策》</text>
				，以便我们向您提供更优质的服务！我们承诺将尽全力保护您个人信息及合法权益，再次感谢您的信任！
			</view>
			<view class="btns flex flex_btween">
				<view class="cancel btn" @click="refuse">拒绝</view>
				<button class="agree btn" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">同意并继续</button>
			</view>
		</view>
		<view class="inner policy" v-if="showPolicy">
			<view class="close" @click="closePolicy">&times;</view>
			<view class="info">
				<view class="title">灵动优聘用户隐私协议</view>
				<view class="pa">
					尊敬的平台用户,《隐私政策》是平台协议的重要组成部分。依据《中华人民共和国民法典》、《网络安全法》等法律法规对个人信息保护要求，平台会以"合法、正当、必要"原则收集、使用个人信息，并会对您的个人信息严格保密。
				</view>
				<view class="subtit">一、信息的收集</view>
				<view class="pa">您同意授权平台收集以下与您相关的信息：</view>
				<view class="pa">
					（1）在您注册账号时填写的个人信息，包括用户姓名、电话号码，头像、昵称、地理位置信息，上述信息主要用于验证您的身份真实性。如果您不提供上述信息，平台将无法向您提供需完成注册后方可使用的服务。
				</view>
				<view class="pa">
					（2）在您使用需要身份认证的功能或相关服务时，根据相关法律法规，可能需要提供您的真实身份信息，包括真实姓名、身份证号码、电话号码，以完成实名认证。如您不提供上述信息，平台将无法向您提供需完成实名认证后方可使用的服务。在部分业务场景下，出于法律法规或安全风控要求，可能会使用您的人脸信息进行实名认证，平台可能会将您提供的实名认证信息向合法留存您的信息的国家机关、金融机构、企事业单位进行核对，以验证您提交信息的真实性与准确性。
				</view>
				<view class="pa">
					（3）当您在平台中使用第三方提供的服务时，第三方可能会获取您的昵称、头像等公开信息；如您已明示同意该第三方可以获取您的地理位置信息，平台将授予该第三方获得终端地理位置信息接口，其可以通过该接口获得您的具体位置信息；在经过您的明示同意，第三方可获取您的手机号等信息；对于您在使用第三方提供的服务时主动提供给第三方的相关信息，平台将视为您允许该第三方获取上述此类信息；对于您在使用该第三方服务时产生的信息，应由您与该第三方依法约定上述信息的收集和使用事项，平台不为其他网站的隐私权保护规定负责。如您拒绝第三方在提供服务时收集、使用或者传递上述信息，将可能会导致您无法在平台中使用第三方的相应服务，但这不影响您使用平台的其他功能。
				</view>
				<view class="pa">
					（4）在部分业务场景中，出于维护您的信息、账户或资金安全或基于法律法规、监管规定要求必须人脸识别的，或出于业务管理或风险控制等需求场景时，您需要通过人脸识别验证服务进行身份的核验，具体核验方式为：通过摄像头对您的人脸进行拍照及/或录制音视频在活体检测通过后，平台将当次采集的人脸信息与基准人脸信息进行比对，并根据比对结果是否一致来核验您的真实身份。在必要时，平台还会将您提交的身份信息及人脸照片信息提供给法律法规允许或政府机关授权的权威机构（包括但不限于中国人民银行、公安部及其授权的机构）以验证您的身份。如您拒绝授权，平台将无法向您提供需要通过人脸识别完成实名认证后方可使用的服务。
				</view>
				<view class="pa">（5）在您使用平台服务时，为了维护服务的安全稳定运行。平台通过cookies、webbeacon或其他方式自动收集相关信息并存储为服务日志信息，包括设备型号、
					IP地址、搜索信息、查看信息，服务故障信息、引荐网址信息、通讯日志信息。
				</view>
				<view class="pa">
					（6）在您使用与位置有关的服务时，平台会在取得您授权同意的前提下收集记录您设备所在的位置信息，通过IP地址、GPS、WiFi或基站获取您的地理位置信息或您在使用平台产品或服务时提供的信息中可能包含的地理位置信息。
				</view>
				<view class="pa">
					（7）在您使用有关相机（摄像头）服务时，如在扫一扫、刷脸身份验证、我要反馈场景中，需要您开启摄像头，将获取的人脸图像、与个人信息相关的图片和视频数据加密后存储于系统后台的数据库中。
				</view>
				<view class="pa">（8）在您使用消息服务，为帮助您更好地实现即时沟通，平台需要收集您的音频、视频、照片。</view>
				<view class="pa">
					（9）您可以有选择性地完善性别、出生日期、所属国别、家庭地址、家庭电话、个人邮箱、职务、部门、公司地址、公司邮箱、公司电话以及其他个人简历信息（以平台具体设计为准）。这些信息均为选填项，是否需要具体填写视您使用具体业务功能的情况而定。
				</view>
				<view class="subtit">二、信息的使用</view>
				<view class="pa">平台会在保护您个人信息安全的前提下，在以下情形中使用您的信息：</view>
				<view class="pa">（1）平台会根据本政策的约定并为实现平台产品与/或服务功能对所收集的个人信息进行使用。</view>
				<view class="pa">（2）为了保障服务的稳定性、安全性、有效性和可执行性,平台会将您的信息用于身份验证、安全防范、诈骗监测、预防或禁止非法/违规活动、降低风险、存档和备份用途等。
				</view>
				<view class="pa">（3）根据法律法规、监管要求或国家有权机构要求向相关部门进行报告。</view>
				<view class="pa">（4）邀请您参与平台产品或服务有关的客户调研。</view>
				<view class="pa">（5）平台会将您的信息进行去标识化或匿名化后进行综合统计、分析加工,以便帮助平台评估、改善或设计产品、服务及运营活动等。</view>
				<view class="pa">
					（6）平台会对产品与/或服务使用情况进行统计，并可能会与公众或第三方共享这些统计信息，以展示产品与/或服务的整体使用趋势。但这些统计信息原则上不涉及您的个人信息。如涉及您的个人信息,将在您同意的前提下使用。
				</view>
				<view class="pa">
					（7）平台可能使用您提供的个人信息中的联系方式与您通信，例如通知您有关您的账户、安全性更新、产品和服务信息，向您及时发送重要通知，如软件更新、本协议条款的变更。
				</view>
				<view class="pa">
					（8）为了使您知悉使用平台产品或服务的情况或使您进一步了解平台服务，平台会向您发送服务状态通知以及相关产品或服务的商业性信息，平台将向您推荐您可能感兴趣的内容,包括但不限于通过系统向您展示个性化的第三方推广信息，或者会根据本条款与平台的合作伙伴共享信息以便他们向您发送有关其产品和服务的信息。若您想关闭平台的个性化推荐内容,可前往"我的"界面,点击"设置"-消息设置",找到个性化推荐按钮进行关闭。
				</view>
				<view class="pa">
					（9）在平台上创建的某一分类信息交易中，如交易任何一方履行或部分履行了交易义务并提出信息按露请求的，平台有权可以决定向该您提供其交易对方的联络方式等必要信息，以促成交易的完成或纠纷的解决。
				</view>
				<view class="pa">
					（10）平台及其合作的第三方承诺严格遵守国家法律法规规定，并仅可基于服务于本次业务之必要目的，查询和收集本人的信息。除非根据法律规定或有权机关要求，不得向任何人提供、泄露或出售。
				</view>
				<view class="subtit">三、信息共享与转让</view>
				<view class="pa">（1）除非获得您的明确同意或授权，平台不会向其他任何公司、组织和个人共享或转让您的个人信息。</view>
				<view class="pa">
					（2）如业务需要对外共享或转让您的个人信息，平台会向您告知共享或转让个人信息的目的、数据接收方的类型,并征得您的授权同意。涉及敏感信息的，平台还会告知敏感信息的类型、数据接收方的身份和数据安全能力，并征得您的明示授权同意。
				</view>
				<view class="pa">（3）根据法律法规和商业惯例，在合并、收购、资产转让等类似交易中，如涉及到个人信息转让，平台会要求新的持有您个人信息的公司、组织继续受本隐私政策的约束。
				</view>
				<view class="subtit">四、信息共享免责情况</view>
				<view class="pa">平台不会超出提供服务目的使用您的信息，也不会向第三方共享您的信息。但以下情况除外：</view>
				<view class="pa">（1）您同意让第三方共享资料。</view>
				<view class="pa">（2）与国家安全、国防安全直接相关的。</view>
				<view class="pa">（3）与公共安全、公共卫生、重大公共利益直接相关的。</view>
				<view class="pa">（4）与犯罪侦查、起诉、审判和判决执行等直接相关的。</view>
				<view class="pa">（5）出于维护个人信息主体或其他个人的生命、财产等重大合法权益但又难以迅速得到本人同意的。 </view>
				<view class="pa">（6）所收集的个人信息是您自行向社会公众公开的。 </view>
				<view class="pa">（7）从合法公开披露的信息中收集的您的个人信息的，如合法的新闻报道、政府信息公开等渠道。</view>
				<view class="pa">（8）根据您的要求签订和履行合同所必需的。</view>
				<view class="pa">（9）用于维护所提供的产品或服务的安全稳定运行所必需的，例如发现、处置产品或服务的故障。</view>
				<view class="pa">（10）出于公共利益开展统计或学术研究所必要，且对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的。</view>
				<view class="pa">（11）法律法规规定的其他情形。</view>
				<view class="subtit">五、本政策如何更新</view>
				<view class="pa">（1）我们的服务发生以下变化时,我们将及时对本《隐私政策》进行相应的修订:</view>
				<view class="pa">平台服务所涉业务功能发生变更,导致处理个人信息的目的,类型、使用方式发生变更；</view>
				<view class="pa">您参与个人信息处理方面的权利及其行使方式发生重大变化；</view>
				<view class="pa">我们负责处理您的个人信息安全的部门的联络方式发生变更；</view>
				<view class="pa">发生其他可能影响用户个人信息安全或影响用户隐私权利的变更等</view>
				<view class="pa">（2）《隐私政策》修订后平台服务相关界面发布最新版本并以弹窗、推送通知等合理的方式告知用户，以便用户及时了解《隐私政策》的最新版本。</view>
				<view class="pa">（3）如无特殊说明，修订后的《隐私政策》自公布之日起生效。</view>
				<view class="subtit">六、法律文书送达地址确认</view>
				<view class="pa">（1）您在此确认，司法机关（包括但不限于人民法院)可以手机短信或电子邮件等现代通讯方式或邮寄方式向您送达法律文书(包括诉讼文书）。</view>
				<view class="pa">
					（2）您确认您同意邮寄地址为您身份证所示户口所在地，您在此确认本地址真实、有效、若本地址发生变更的，您应该及时通知平台。若您提供的送达地址不真实、不准确，或未及时向平台或司法机关告知变更后的地址，导致平台或司法机关向您发送的法律文书未被实际接收的，平台或司法机关以前述任一送达地址发出法律文书均视为送达，您应该承担由此产生的相应法律后果。
				</view>
				<view class="subtit">七、其他</view>
				<view class="pa">（1）如果您认为我们的个人信息处理行为损害了您的合法权益，您也可向有关政府部门进行反映。</view>
				<view class="pa">（2）在平台公布本《隐私政策》或向您提供服务均视为本《隐私政策》生效。平台停止运营或永久停止提供服务时本《隐私政策》失效。</view>

			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from "vuex"
	export default {
		name: "login",
		props: ["showLogin", "shareId"],
		data() {
			return {
				showPolicy: false,
				getPhoneData: {}
			};
		},
		computed: {
			...mapState(["token", "ad_tracking_id"])
		},
		methods: {
			// #ifdef MP-BAIDU
			getLoginCode(e) {
				let _this = this
				return new Promise(resolve => {
					swan.getLoginCode({
						success(res) {
							let data = {
								code: res.code
							}
							let url = "/auth/worker/baidu/openid"
							// 请求
							_this.$request(url, data, "POST").then(resp => {
								if (resp.code == 0) {
									uni.setStorage({
										key: "openid",
										data: resp.data.open_id
									})
									resolve(resp.data.open_id)
								}
							})
						},
						fail(err) {
							console.log(err, "getLoginCode调用出错啦")
						}
					})
				})
			},
			// #endif
			readPolicy() {
				this.showPolicy = true
			},
			getShareParams(header) {
				this.$request("/worker/shares", {}, "GET", header).then(res => {
					if (res.code == 0) {
						uni.setStorageSync("shareParams", JSON.stringify(res.data))
					}
				})
			},
			closePolicy() {
				this.showPolicy = false
			},
			refuse() {
				console.log("关闭")
				this.$emit("closeLogin")
			},
			async getPhoneNumber(e) {
				let url = ""
				let _this = this
				console.log(e, "getPhoneNumber")
				uni.showLoading()
				this.refuse()
				// #ifdef MP-WEIXIN
				this.getPhoneData.open_id = uni.getStorageSync("openid");
				this.getPhoneData.share_id = this.shareId;
				// #endif
				// #ifdef MP-BAIDU
				this.getPhoneData.open_id = await this.getLoginCode()
				// #endif
				if (e.detail.errMsg == 'getPhoneNumber:ok') {
					console.log(e.detail, "e.detail")
					this.getPhoneData.encrypted_data = e.detail.encryptedData;
					this.getPhoneData.iv = e.detail.iv;
					// #ifdef MP-WEIXIN
					this.getPhoneData.code = e.detail.code;
					this.getPhoneData.ad_tracking_id = this.ad_tracking_id
					url = "/auth/worker/wechat/mini/login"
					// #endif
					// #ifdef MP-KUAISHOU
					url = "/auth/worker/kuaishou/login"
					// #endif
					// #ifdef MP-TOUTIAO
					url = "/auth/worker/douyin/login"
					// #endif
					// #ifdef MP-BAIDU
					url = "/auth/worker/baidu/login"
					// #endif
					_this.$request(url, this.getPhoneData, "POST").then(resp => {
						if (resp.code == 0) {
							_this.$emit("closeLogin")
							uni.setStorageSync("token", resp.data.token)
							uni.setStorageSync("loginStatus", "in")
							let header = {
								"Authorization": "bearer " + resp.data.token,
								"accept": "application/json",
								"open-id": !uni.getStorageSync("openid") ? "" : uni.getStorageSync(
									"openid")
							}
							_this.getShareParams(header)
							_this.$emit("getInfo", "login")
						}
						uni.hideLoading()
					})
				} else {
					uni.hideLoading()
					_this.$emit("closeLogin")
					uni.setStorageSync("loginStatus", "in")
					uni.setStorageSync("token", _this.token)
					let header = {
						"Authorization": "bearer " + _this.token,
						"accept": "application/json",
						"open-id": !uni.getStorageSync("openid") ? "" : uni.getStorageSync(
							"openid")
					}
					_this.getShareParams(header)
					_this.$emit("getInfo", "login")

				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: rgba(0, 0, 0, 0.6);
		z-index: 200;

		.inner {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			background: $base-bgcolor;
			border-top-right-radius: 16rpx;
			border-top-left-radius: 16rpx;
			padding: 40rpx;
			box-sizing: border-box;
			font-size: 30rpx;
			color: $base-fontcolor;
			height: auto;

			&.policy {
				width: 85%;
				height: 80%;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				border-radius: 16rpx;

				font-size: 28rpx;
				line-height: 50rpx;

				.close {
					width: 50rpx;
					height: 50rpx;
					text-align: center;
					line-height: 50rpx;
					font-size: 60rpx;
					background: #f6f6f6;
					color: #333;
					position: absolute;
					top: 10rpx;
					right: 10rpx;
					border-radius: 50%;
				}

				.info {
					margin-top: 20rpx;
					height: calc(100% - 50rpx);
					overflow-y: scroll;
				}
			}

			.title {
				font-weight: 600;
				margin-bottom: 30rpx;
			}

			.tips {
				line-height: 50rpx;
				font-size: 28rpx;

				text {
					color: #216FF9;
				}
			}

			.btns {
				margin-top: 30rpx;

				.btn {
					width: 48%;
					height: 80rpx;
					line-height: 80rpx;
					font-size: 32rpx;
					text-align: center;
					border-radius: 10rpx;
					margin: 0;

					&.cancel {
						background: #f6f6f6;
						border: 1px solid #ccc;
						color: #777;
					}

					&.agree {
						background: #216FF9;
						color: #fff;
						border: 1px solid #216FF9;
					}
				}
			}
		}
	}
</style>