<template>
	<view class="board">
		<view class="back"
			style="font-weight:500;color:#1E8EEE;font-size:16px;cursor: pointer;margin-left:10px;margin-bottom: 15px;"
			@click="back">
			<image src="/static/back_blue.png" mode="widthFix" style="width:18px;height:18px;margin-right:5px;">
			</image>
			<text>返回</text>
		</view>
		<view class="box">
			<view class="title">客户详情<text class="tips" style="font-size:14px;color:#f00;">（{{veriValues.filter(el=>{return el.value == userInfo.broker.review_status})[0].text}}）</text> </view>
			<view class="btns flex flex_end" v-if="userInfo.broker.review_status == 'reviewing'">
				<view class="btn" @click="toRefuse">拒绝</view>
				<view class="btn" @click="confirm('approved')">通过</view>
			</view>
			<view class="inner_box flex flex_btween" style="align-items: start">
				<view class="box_item" style="width: 300px;">
					<!-- 基本信息 -->
					<view class="sub_tit">账号信息</view>
					<view class="item">
						<view class="line flex flex-start">
							<view class="tit">客户头像</view>
							<view class="input_wrap" style="width:80px;height:80px;border-radius: 50%;overflow: hidden;">
								<image :src="userInfo.broker.avatar.url" mode="widthFix" style="width:80px;"></image>
							</view>
						</view>
						<view class="line flex flex-start">
							<view class="tit">客户名称</view>
							<view class="input_wrap">{{userInfo.broker.name?userInfo.broker.name:"无"}}</view>
						</view>
						<view class="line flex flex-start">
							<view class="tit">身份证号</view>
							<view class="input_wrap">{{userInfo.broker.id_card_number?userInfo.broker.id_card_number:"无"}}</view>
						</view>
						<view class="line flex flex-start">
							<view class="tit">手机号码</view>
							<view class="input_wrap">{{userInfo.broker.mobile}}</view>
						</view>
						<view class="line flex flex-start">
							<view class="tit">账号余额</view>
							<view class="input_wrap">{{userInfo.broker.balance}}</view>
						</view>
						<view class="line flex flex-start">
							<view class="tit">登录权限</view>
							<view class="input_wrap">
								{{loginValues.filter(el=>{return el.value == userInfo.broker.status})[0].text}}
							</view>
						</view>
						<view class="line flex flex-start">
							<view class="tit">资质情况</view>
							<view class="input_wrap">
								{{veriValues.filter(el=>{return el.value == userInfo.broker.review_status})[0].text}}
							</view>
						</view>
					</view>
				</view>
				<view class="box_item" v-if="userInfo.company.name">
					<!-- 基本信息 -->
					<view class="sub_tit">公司信息</view>
					<view class="item">
						<view class="line_item flex flex_btween">
							<view class="line img_line flex flex-start" style="margin-bottom:20px;">
								<view class="tit">营业执照</view>
								<view class="input_wrap uploadCard flex flex-start">
									<view class="loadimg idcardImg">
										<image :src="userInfo.company.business_license_image.url" mode="heightFix"
											@click="preView"></image>
									</view>
								</view>
							</view>
							<view class="line img_line flex flex-start" style="margin-bottom:20px;" v-if="userInfo.company.human_resources_permit_image.url">
								<view class="tit">人力资源许可</view>
								<view class="input_wrap uploadCard flex flex-start">
									<view class="loadimg idcardImg">
										<image :src="userInfo.company.human_resources_permit_image.url" mode="heightFix"
											@click="preView"></image>
									</view>
								</view>
							</view>
						</view>
						<view class="line_item">
							<view class="line flex flex-start">
								<view class="tit">公司名称</view>
								<view class="input_wrap">{{userInfo.company.name}}</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">统一信用代码</view>
								<view class="input_wrap">{{userInfo.company.unified_social_credit_code}}</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">公司类型</view>
								<view class="input_wrap">{{userInfo.company.type}}</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">办公地址</view>
								<view class="input_wrap">{{userInfo.company.business_address}}</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">法人姓名</view>
								<view class="input_wrap">{{userInfo.company.legal_person_name}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="mask" v-if="showMask">
			<view class="inner" v-if="showRefuse" style="width:50%;">
				<view class="title">拒绝理由</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<textarea v-model="remark" placeholder="请输入拒绝理由" />
					<view class="line flex flex_end">
						<view class="btn" @click="confirm('rejected')" style="margin-top:15px;">确认拒绝</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import searchBox from "@/components/search_box.vue"
	import pageBox from "@/components/paging_box.vue"
	import commonData from "../common/commonData";
	const app = getApp()
	export default {
		name: "broker_detail",
		data() {
			return {
				remark: "",
				loginValues: commonData.loginStatus,
				veriValues: commonData.veriStatus,
				currentMainTab: 1,
				showConfirm: true,
				showRefuse: false,
				list: [],
				tabs: [{
						value: "",
						text: "全部"
					},
					{
						value: "normal",
						text: "正常"
					},
					{
						value: "frozen",
						text: "冻结"
					}
				],
				addType: "add",
				currentTab: {
					value: "",
					text: "全部"
				},
				userInfo: {
					"broker": {
						"id": "",
						"name": "",
						"id_card_number": "",
						"mobile": "",
						"balance": "",
						"status": "",
						"review_status": ""
					},
					"company": {
						"name": "",
						"unified_social_credit_code": "",
						"type": "",
						"legal_person_name": "",
						"business_address": "",
						"business_license_image": "",
						"human_resources_permit_image": ""
					}
				},
				showMask: false,
				currentPage: 1,
				currentCount: 15,
				pagination: {},
				searAccount: "",
				id: "",
				name: "",
				idCard: "",
				mobile: "",
				city: "",
				currentBroker: {}
			};
		},
		created() {
			let paramArr = []
			if (location.href.indexOf("?") != -1) {
				paramArr = location.href.split("?")[1].split("&")
			}
			for (var i = 0; i < paramArr.length; i++) {
				if (paramArr[i].indexOf("id") != -1) {
					this.id = paramArr[i].split("=")[1]
				}
			}
			this.getInfo()
			// this.getList()
		},
		components: {
			searchBox,
			pageBox
		},
		methods: {
			preView() {
				let urls = []
				urls.push(this.userInfo.company.business_license_image.url)
				if(this.userInfo.company.human_resources_permit_image.url){
					urls.push(this.userInfo.company.human_resources_permit_image.url)
				}
				uni.previewImage({
					urls: urls
				})
			},
			back() {
				this.setPageName({
					pageName: "account_list"
				})
				this.$emit("getPageName", {
					pageName: "account_list"
				})
			},
			toRefuse() {
				this.showMask = true
				this.showRefuse = true
			},
			close() {
				this.showMask = false
				this.showRefuse = false
				this.resetData()
			},
			confirm(type) {
				if (type == "rejected" && !this.remark) {
					uni.showToast({
						title: "请填写拒绝理由",
						icon: "error",
						duration: 2000
					})
					return
				}
				let data = {
					"status": type,
					"remark": this.remark
				}
				let url = "/admin/broker/" + this.id + "/review"
				this.$request(url, data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: "操作成功",
							duration: 2000
						})
						this.getInfo()
						this.close()
					}
				})

			},
			resetData() {
				this.remark = ""
			},
			getInfo() {
				let url = "/admin/broker/" + this.id
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.userInfo = res.data
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	textarea {
		display: block;
		width: 100%;
		border: 1px solid #ccc;
		border-radius: 5px;
		padding: 15px;
		box-sizing: border-box;
	}

	.box {
		.btns {
			margin-top: 20px;

			.btn {
				margin-right: 15px;

				&:nth-child(1) {
					border: 1px solid #1491ff;
					color: #1491ff;
					background: transparent;
				}
			}
		}

		.inner_box {
			margin-top: 30px;

			.box_item {
				margin-right: 10px;
				padding: 30px 15px;
				box-sizing: border-box;
				border: 1px solid #ccc;
				border-radius: 5px;
				&:nth-child(2){
					width:calc(100% - 310px);
				}
				

				.sub_tit {
					font-weight: 600;
					margin-bottom: 20px;
				}

				.item {
					align-items: start;
					.line_item{
						.img_line{
							width:49%;
							position: relative;
							.tit{
								position: absolute;
								bottom:0;
								left:0;
								height:35px;
								line-height: 35px;
								text-align: center;
								width: 100%;
								background:rgba(165, 188, 217, 0.5);
								color:#fff;
								z-index:100;
								border-bottom-left-radius:10px;
								border-bottom-right-radius: 10px;
							}
							.input_wrap{
								width: 100% !important;
							}
						}
					}
					.line {
						margin-bottom: 22px;
						position: relative;

						.preview {
							position: absolute;
							bottom: 20px;
							left: 100%;
							cursor: pointer;
							color: $base-color;
							white-space: nowrap;

							&:hover {
								color: #1491ff;
								font-weight: 600;
							}
						}

						.tips {
							white-space: nowrap;
							position: absolute;
							left: 100%;
							top: 50%;
							transform: translateY(-50%);
						}

						&.scope {
							align-items: start;
						}

						.tit {
							width: 110px;
						}

						.input_wrap {
							width: calc(100% - 150px);
							position: relative;

							&.uploadCard {
								height: 200px;
								border: 1px solid #e9e9e9;
								border-radius: 10px;
								position: relative;

								.loadimg {
									width: 100%;

									&.idcardImg {
										image {
											height: 200px;
											width: auto;
											margin: 0 auto;
											display: block;
										}
									}
								}

								.innerimg {
									position: absolute;
									top: 50%;
									left: 50%;
									transform: translate(-50%, -50%);
									text-align: center;
									cursor: pointer;

									image {
										width: 50px;
										height: 50px;
										margin-bottom: 15px;
									}
								}
							}

							.abso {
								position: absolute;
								top: 50%;
								right: 15px;
								transform: translateY(-50%);
							}

							&.noborder {
								border: none;
							}

							input {
								width: 100%;
								height: 40px;
								padding-left: 15px;
							}

							.option {
								margin-right: 20px;
								cursor: pointer;

								image {
									width: 20px;
									height: 20px;
									margin-right: 5px;
								}
							}

							.long {
								image {
									width: 20px;
									height: 20px;
									margin-right: 5px;
									cursor: pointer;
								}
							}

							textarea {
								padding: 15px;
								height: 70px;
							}
						}
					}
				}
			}


		}
	}
</style>