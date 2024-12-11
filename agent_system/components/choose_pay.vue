<template>
	<view class="board">
		<view class="box">
			<view class="title">选择支付方式</view>
			<view class="in_box">
				<view class="left flex flex-start">
					<view class="item flex flex-start" v-for="(item,index) in payMethods" :key="index"
						:class="currentPay.value == item.value?'active':''" @click="choosePayMethod(item)">
						<image :src="item.img" mode="widthFix"></image>
						<view class="text">
							<view class="tit">{{item.text}}</view>
							<view class="desc">{{item.desc}}</view>
						</view>
					</view>
				</view>
				<view class="right">
					<view class="tit">{{currentPay.text}}</view>
					<view class="input_box flex flex_btween">
						<view class="input_wrap">
							<image src="/static/ic_yen.png" mode="heightFix"></image>
							<input type="number" v-model="mount" placeholder="请输入充值金额"
								placeholder-style="font-size:16px;font-weight:500;color:#888;" />
							<text>元</text>
						</view>
						<view class="btn" @click="surePay">确认充值</view>
					</view>
					<view class="tips">请输入大于0的数字</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import searchBox from "@/components/search_box.vue"
	import pageBox from "@/components/paging_box.vue"
	import commonData from "@/common/commonData"
	export default {
		name: "commission_bill",
		data() {
			return {
				mount: "",
				payMethods: commonData.payMethods,
				currentPay: {
					value: "alipay_pc",
					channel: "alipay",
					text: "支付宝充值",
					img: "/static/ic_pay_alipay.png",
					desc: "实时到账，不支持信用卡"
				}
			};
		},
		components: {
			searchBox,
			pageBox
		},
		created() {
			// this.getList()
		},
		methods: {
			navigate(obj, id) {
				this.setPageName(obj, id)
				this.$emit("getPageName", obj)
			},
			choosePayMethod(item) {
				this.currentPay = item
			},
			surePay() {
				let _this = this
				if (!this.mount) {
					uni.showToast({
						title: "请输入金额",
						icon: "error",
						duration: 2000
					})
					return
				}
				let data = {
					"amount": this.mount,
					"payment_method": this.currentPay.value,
					"return_url": window.location.origin + "/pages/index/index?page_name=financial_account"
				}
				this.$request("/broker/company-recharges", data, "POST").then(res => {
					if (res.code == 0) {
						let pageName = ""
						switch (this.currentPay.value) {
							case "wechat_pc":
								pageName = "wechat_pay"
								this.navigate({
									pageName: pageName
								}, res.data.order_id)
								break;
							case "alipay_pc":
								let url = "/broker/order/" + res.data.order_id + "/pay"
								this.$request(url, {}, "POST").then(resp => {
									if (resp.code == 0) {
										uni.showModal({
											title: "请在跳转后的新页面充值",
											cancelText: "充值成功",
											confirmText: "充值失败",
											cancelColor: "#00C800",
											confirmColor: "#f00",
											success(respone) {
												if (respone.cancel) {
													_this.navigate({
														pageName: "financial_account"
													})
												}
											}
										})
										window.open(resp.data.alipay_pc.pay_url)
									}
								})
								break;
							case "union_pay":
								pageName = "union_pay"
								break;
							default:
								break;
						}
					}
				})

			}
		}
	}
</script>

<style lang="scss">
	.in_box {
		margin-top: 30px;
		align-items: start;

		.left {
			margin-bottom: 30px;

			.item {
				padding: 25px 0;
				// border-bottom: 1px solid #E9E9E9;
				cursor: pointer;
				transition: all .2s;
				margin-right: 60px;

				&.active {
					border-bottom: 3px solid #0F90FF;
				}

				&:hover {
					background: #f6f6f6;
				}

				image {
					width: 51px;
					margin-right: 15px;
				}

				.text {
					.tit {
						font-weight: 600;
						font-size: 14px;
						color: #000000;
						line-height: 20px;
					}

					.desc {
						font-weight: 400;
						font-size: 14px;
						color: rgba(0, 0, 0, 0.45);
						line-height: 20px;
					}
				}
			}
		}

		.right {
			width: 48%;

			.tit {
				font-weight: 600;
				position: relative;
				padding-left: 20px;

				&::before {
					content: "";
					width: 10px;
					height: 10px;
					border-radius: 50%;
					background: #0F90FF;
					position: absolute;
					top: 50%;
					left: 0;
					transform: translateY(-50%);
				}
			}

			.tips {
				font-weight: 400;
				font-size: 14px;
				color: rgba(0, 0, 0, 0.45);
				line-height: 20px;
				margin-top: 10px;
			}

			.input_box {
				margin-top: 50px;

				.input_wrap {
					width: calc(100% - 120px);
					position: relative;

					image {
						width: 20px;
						height: 20px;
						position: absolute;
						top: 50%;
						left: 5px;
						transform: translateY(-50%);
					}

					input {
						height: 40px;
						width: 100%;
						padding: 0 30px;
						text-align: right;
						box-sizing: border-box;
						border: 1px solid #d6d6d6;
						border-radius: 4px;
						font-weight: 800;
						font-size: 30px;
						color: #333;
					}

					text {
						font-weight: 400;
						font-size: 14px;
						color: rgba(0, 0, 0, 0.45);
						position: absolute;
						top: 50%;
						right: 5px;
						transform: translateY(-50%);
					}
				}
			}
		}
	}
</style>