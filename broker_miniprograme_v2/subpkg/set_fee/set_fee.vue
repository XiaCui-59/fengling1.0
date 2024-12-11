<template>
	<view class="content">
		<customHeader :title="pageName" :showBack="true" :headHeight="headerHeight"></customHeader>
		<view class="cont" :style="{marginTop:marginTop+'px'}">
			<view class="box" :style="{top:marginTop+tabMargin+'px'}">
				<view class="wrap">
					<view class="line">
						<view class="tit">职位名称</view>
						<view class="input_wrap flex flex-start">{{info.name}}</view>
					</view>
					<view class="line">
						<view class="tit">结算方式</view>
						<view class="input_wrap flex flex-start">
							<image :src="imgUrl+'/broker/radio_sele.png'" mode="widthFix"
								style="margin-right: 10rpx;vertical-align: middle;margin-left: 40%;"></image>
							<text>周期性</text>
						</view>
					</view>
					<view class="line" style="margin-bottom: 0;">
						<view class="tit">费用单价</view>
						<view class="input_wrap flex flex_btween">
							<input v-model="unitFee" placeholder="请填写费用单价" placeholder-style="font-size:28rpx;" />
							<text style="display: inline-block;margin-right:40rpx;">元/时/人次</text>
						</view>
					</view>
					<view class="line tips">请输入大于0的数字，支持一位小数</view>
				</view>
				<view class="btns flex flex_btween">
					<view class="btn sure active" @click="confirmSet">确认</view>
				</view>
			</view>
		</view>
		<customModal title="费用设置成功" :showCancel="false" confirmText="确定" v-if="showModal" @confirm="handleConfirm">
		</customModal>
	</view>
</template>

<script>
	import tabbar from "@/components/tabbar.vue"
	import customHeader from "@/components/custom_header.vue"
	const app = getApp()
	export default {
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
				pageName: "设置费用",
				headerHeight: app.globalData.topHeight,
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				currentMainTab: 0,
				scrollHeight: 0,
				boxTop: 0,
				projectId: "",
				unitFee: "",
				showModal: false,
				info: {
					name: ""
				}
			}
		},
		components: {
			tabbar,
			customHeader
		},
		onLoad(param) {
			let _this = this
			this.projectId = param.id
			this.getInfo()
		},
		methods: {
			handleConfirm() {
				uni.switchTab({
					url: "/pages/index/index"
				})
			},
			getInfo() {
				let url = "/broker/mini/project/" + this.projectId + "/info"
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.info = res.data
					}
				})
			},
			confirmSet() {
				let data = {
					"price": this.unitFee,
				}
				let url = "/broker/mini/project/" + this.projectId + "/set-fee"
				this.$request(url, data, "POST").then(res => {
					if (res.code == 0) {
						this.showModal = true
					}
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.box {
		position: fixed;
		width: calc(100% - 96rpx);
		left: 48rpx;
		z-index: 3;

		.wrap {
			padding: 40rpx;
			box-sizing: border-box;
			background: #fff;
			box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.15);
			border-radius: 20rpx;

			.line {
				margin-bottom: 40rpx;

				&.tips {
					font-size: 23rpx;
					color: #8A8A8A;
					margin-top: 0;
					margin-bottom: 0;
				}

				.tit {
					font-size: 28rpx;
					color: #5A5A5A;
					margin-bottom: 8rpx;
				}

				.input_wrap {
					width: 100%;
					height: 85rpx;
					background: #F9F9F9;
					border-radius: 4px;
					position: relative;
					border-bottom: none;
					font-size: 28rpx;

					input {
						height: 85rpx;
						line-height: 85rpx;
						width: calc(100% - 60rpx);
						padding: 0 40rpx;
						font-size: 28rpx;
						color: #333;
					}

					image {
						width: 30rpx;
						height: 30rpx;
						margin-right: 20rpx;
					}

					text {
						font-size: 29rpx;
						color: #8A8A8A;
						text-align: right;
						white-space: nowrap;
					}
				}
			}
		}

		.btns {
			.btn {
				width: 100%;
				height: 88rpx;
				line-height: 88rpx;
				font-size: 30rpx;
				border-radius: 8px;
				text-align: center;

				&.sure {
					background: #FFFFFF;
					box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
					border: 1px solid #F7BB05;
					color: #F7BB05;
				}

				&.active {
					background: #F7BC05;
					color: #fff;
				}

				&.not {
					border: 1px solid #C9C9C9;
					color: #333;
					background: transparent;
				}
			}
		}
	}
</style>