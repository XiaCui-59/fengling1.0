<template>
	<view class="tabbar">
		<view class="tabbar-item" v-for="(item,index) in list" :key="index" @click="changeTab(index)"
			:style="{height:height+'px',paddingTop:paddingTop+'px'}">
			<!-- #ifdef MP-WEIXIN -->
			<image class="img active" :src="item.selectedIconPath" v-if="current == index"
				:style="{height:seleIcHeight+'px',top:seleTop+'px',width:'auto'}" mode="heightFix"></image>
			<image class="img" :src="item.iconPath" v-else
				:style="{height:icHeight+'px',top:paddingTop-2+'px',width:'auto'}" mode="heightFix"></image>
			<!-- #endif -->
			<!-- #ifdef MP-KUAISHOU -->
			<image class="img active" :src="item.selectedIconPath" v-if="current == index"
				:style="{height:seleIcHeight+'px',top:seleTop+'px',width:seleIcHeight+'px'}" mode="heightFix"></image>
			<image class="img" :src="item.iconPath" v-else
				:style="{height:icHeight+'px',top:paddingTop-2+'px',width:icHeight+'px'}" mode="heightFix"></image>
			<!-- #endif -->
			<view class="text active" v-if="current == index" :style="{marginTop:marginTop-5+'px'}">{{item.text}}</view>
			<view class="text" v-else :style="{marginTop:marginTop-5+'px'}">{{item.text}}</view>
			<!-- 消息角标 -->
			<!-- <view class="badge" v-if="index == 2">5</view> -->
		</view>
		<view class="pub" :style="{bottom:height+icHeight+'px'}" @click="showPub" v-if="showPubTabbar">
			<image :src="imgUrl+'/worker/ic_wechat.png'" mode="widthFix"></image>
			<text>点击此按钮关注公众号，更多附近工作推荐</text>
		</view>
		<customModal :title="modalTitle" :content="modalContent" :bgUrl="modalBg" :iconUrl="modalIcon"
			:imageUrl="imageUrl" :iconPosition="iconPosition" v-if="showModal" :showCancel="showCancel"
			:showConfirm="showConfirm" @confirm="handleConfirm" @cancel="handleCancel" @closeModal="closeModal">
		</customModal>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		name: "tabbar",
		props: {
			current: Number
		},
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
				modalTitle: "提示",
				modalContent: "",
				iconPosition: "right",
				modalBg: "/broker/modal_bg.png",
				modalIcon: "/broker/modal_icon.png",
				iconPosition: "right",
				showCancel: true,
				showConfirm: true,
				imageUrl: "",
				height: 0,
				seleIcHeight: 0,
				icHeight: 0,
				paddingTop: 0,
				marginTop: 0,
				seleTop: 0,
				showModal: false,
				showPubTabbar: false,
				timer: null,
				list: [{
						"pagePath": "pages/work/work",
						"text": "找工作",
						"iconPath": app.globalData.baseImageUrl + "/worker/ic_worker_1.png",
						"selectedIconPath": app.globalData.baseImageUrl + "/worker/ic_work_active_1.png"
					},
					// #ifdef MP-WEIXIN
					{
						"pagePath": "pages/index/index",
						"text": "工作",
						"iconPath": app.globalData.baseImageUrl + "/worker/ic_work_normal_1.png",
						"selectedIconPath": app.globalData.baseImageUrl + "/worker/ic_work_sele_1.png"
					},
					{
						"pagePath": "pages/waiting_handle/waiting_handle",
						"text": "消息",
						"iconPath": app.globalData.baseImageUrl + "/worker/ic_message_normal_1.png",
						"selectedIconPath": app.globalData.baseImageUrl + "/worker/ic_message_sele_1.png"
					},
					// #endif
					{
						"pagePath": "pages/mine/mine",
						"text": "我的",
						"iconPath": app.globalData.baseImageUrl + "/worker/ic_mine_normal_1.png",
						"selectedIconPath": app.globalData.baseImageUrl + "/worker/ic_mine_sele_1.png"
					}
				]
			}
		},
		created() {
			let _this = this
			// #ifdef MP-WEIXIN || MP-KUAISHOU
			uni.hideTabBar()
			// #endif
			// 系统信息
			let systemInfo = uni.getSystemInfoSync()
			// 设计稿tabbar占比
			let percent = 46 / 844
			// 选中icon占tabbar的比例
			let icPercent = 40 / 46
			// 未选中icon占tabbar的比例
			let icPer = 18 / 46
			// 上边距占tabar的比例
			let paddingPer = 8 / 46
			this.height = Math.floor(percent * systemInfo.screenHeight)
			this.seleIcHeight = Math.floor(this.height * icPercent)
			this.icHeight = Math.floor(this.height * icPer)
			this.paddingTop = Math.floor(this.height * paddingPer)
			this.marginTop = this.icHeight + this.paddingTop
			this.seleTop = this.marginTop - this.seleIcHeight
			this.$emit("getTabbarHeight", this.height)
			console.log(this.height, this.seleIcHeight, this.icHeight)
			// #ifdef MP-WEIXIN
			// this.timer = setInterval(async function() {
			// 	let token = uni.getStorageSync("token")
			// 	console.log("timer on")
			// 	if (token) {
			// 		let subscribed = await _this.queryPubStatus()
			// 		console.log(_this.showPubTabbar, "tabbar_showpub")
			// 		_this.showPubTabbar = !subscribed
			// 		if (!_this.showPubTabbar) {
			// 			clearInterval(_this.timer)
			// 			console.log("timer off")
			// 		}
			// 	}
			// }, 5000)
			// #endif

		},
		methods: {
			changeTab(e) {
				uni.switchTab({
					url: '/' + this.list[e].pagePath,
				})
			},
			closeModal() {
				this.showModal = false
			},
			showPub() {
				this.$request("/worker/wechat/official-account/subscribe-qrcode").then(res => {
					if (res.code == 0) {
						this.showModal = true
						this.modalBg = "/broker/modal_bg_2.png"
						this.modalIcon = "/broker/modal_icon_2.png"
						this.iconPosition = "left"
						this.showCancel = false
						this.showConfirm = false
						this.modalTitle = "长按关注公众号"
						this.imageUrl = res.data.qrcode
					}
				})
			},
		}
	}
</script>

<style scoped>
	.pub {
		position: fixed;
		width: 80%;
		height: 65rpx;
		line-height: 65rpx;
		background: #FFE000;
		box-shadow: 0rpx 2rpx 4rpx 0rpx rgba(101, 101, 101, 0.3);
		border-radius: 33rpx;
		text-align: center;
		font-weight: 400;
		font-size: 23rpx;
		color: #333333;
		z-index: 99;
		left: 50%;
		transform: translateX(-50%);
	}

	.pub image {
		width: 46rpx;
		height: 40rpx;
		margin-right: 8rpx;
		vertical-align: middle;
	}

	image {
		will-change: transform
	}

	.tabbar {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 99;
		width: 100%;
		/* height: 92upx; */
		display: flex;
		align-items: center;
		background: #fff;
		justify-content: space-around;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		/* padding: 20rpx 0; */
		box-shadow: 0px -8rpx 12rpx 0px rgba(0, 0, 0, 0.1);
		border-top-left-radius: 28rpx;
		border-top-right-radius: 28rpx;
		box-sizing: border-box;
	}

	,
	.tabbar-item {
		padding: 0 40rpx;
		position: relative;
		text-align: center;
		box-sizing: border-box;
	}

	.tabbar-item .badge {
		position: absolute;
		top: -20rpx;
		right: 0rpx;
		z-index: 100;
		background: #ff2c11;
		width: 40rpx;
		height: 40rpx;
		line-height: 40rpx;
		text-align: center;
		border-radius: 50%;
		color: #fff;
		font-size: 24rpx;
	}

	.img {
		/* height: 40upx;
      width: 40upx; */
		position: absolute;
		/* bottom:30rpx; */
		left: 50%;
		transform: translateX(-50%);
	}

	/*  .img.active{
  	  width:90rpx;
  	  height:90rpx;
    } */
	.text {
		font-size: 28upx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		color: #333;
		line-height: 27upx;
		/* margin-top:40rpx; */
	}

	.text.active {
		color: #333;
	}
</style>