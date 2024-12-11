<template>
	<view class="tabbar">
		<view class="tabbar-item" v-for="(item,index) in list" :key="index" @click="changeTab(index)"
			:style="{height:height+'px',paddingTop:paddingTop+'px',paddingBottom:paddingTop+'px'}">
			<image class="img active" :src="item.selectedIconPath" v-if="current == index"
				:style="{height:seleIcHeight+'px',top:seleTop+'px',width:'auto'}" mode="heightFix"></image>
			<image class="img" :src="item.iconPath" v-else
				:style="{height:icHeight+'px',top:paddingTop+'px',width:'auto'}" mode="heightFix"></image>
			<view class="text active" v-if="current == index"
				:style="{marginTop:marginTop+'px',height:textHeight+'px'}">{{item.text}}</view>
			<view class="text" v-else :style="{marginTop:marginTop+'px',height:textHeight+'px'}">{{item.text}}</view>
			<!-- 消息角标 -->
			<!-- <view class="badge" v-if="(index == 1) && (todo > 0)" :class="current == index?'active':''">{{todo}}</view> -->
		</view>
		<view class="pub" :style="{bottom:height+icHeight+'px'}" @click="showPub" v-if="showPubTabbar">
			<image :src="imgUrl+'/broker/ic_wechat.png'" mode="widthFix"></image>
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
			current: Number,
			todo: Number
		},
		data() {
			return {
				modalTitle: "提示",
				modalContent: "",
				iconPosition: "right",
				modalBg: "/broker/modal_bg.png",
				modalIcon: "/broker/modal_icon.png",
				iconPosition: "right",
				showCancel: true,
				showConfirm: true,
				imageUrl: "",
				imgUrl: app.globalData.baseImageUrl,
				height: 0,
				seleIcHeight: 0,
				icHeight: 0,
				paddingTop: 0,
				marginTop: 0,
				seleTop: 0,
				textHeight: 0,
				timer: null,
				showModal: false,
				showPubTabbar: false,
				timer: null,
				list: [{
						"pagePath": "pages/index/index",
						"text": "职位",
						"iconPath": app.globalData.baseImageUrl + "/broker/icon_pro.png",
						"selectedIconPath": app.globalData.baseImageUrl + "/broker/icon_pro_sele.png"
					},
					{
						"pagePath": "pages/sign_record/sign_record",
						"text": "报名",
						"iconPath": app.globalData.baseImageUrl + "/broker/icon_message.png",
						"selectedIconPath": app.globalData.baseImageUrl + "/broker/icon_message_sele.png"
					},
					{
						"pagePath": "pages/mine/mine",
						"text": "我的",
						"iconPath": app.globalData.baseImageUrl + "/broker/icon_mine.png",
						"selectedIconPath": app.globalData.baseImageUrl + "/broker/icon_mine_sele.png"
					}
				]
			}
		},
		// beforeCreate(){
		// 	this.$request("/broker/mini/info").then(res => {
		// 		if (res.code == 0) {
		// 			console.log(123)
		// 		}
		// 	})
		// },
		created() {
			let _this = this
			uni.hideTabBar()
			// 系统信息
			let systemInfo = uni.getSystemInfoSync()
			// 设计稿tabbar占比
			let percent = 46 / 844
			// 选中icon占tabbar的比例
			let icPercent = 40 / 844
			// 未选中icon占tabbar的比例
			let icPer = 16 / 844
			// 上边距占tabar的比例
			this.textHeight = 20 / 844 * systemInfo.windowHeight
			let paddingPer = 7 / 844
			this.seleIcHeight = Math.floor(systemInfo.windowHeight * icPercent)
			this.icHeight = Math.floor(systemInfo.windowHeight * icPer)
			this.paddingTop = Math.floor(systemInfo.windowHeight * paddingPer)
			this.marginTop = this.icHeight + this.paddingTop
			this.seleTop = this.marginTop - this.seleIcHeight
			this.height = this.seleIcHeight + this.textHeight
			this.$emit("getTabbarHeight", this.height)
			// this.timer = setInterval(async function() {
			// 	let token = uni.getStorageSync("token")
			// 	console.log("timer on")
			// 	if (token) {
			// 		// 判断token是否可用
			// 		let subscribed = await _this.queryPubStatus()
			// 		console.log(_this.showPubTabbar, "tabbar_showpub")
			// 		_this.showPubTabbar = !subscribed
			// 		if (!_this.showPubTabbar) {
			// 			clearInterval(_this.timer)
			// 			console.log("timer off")
			// 		}
			// 	}
			// }, 5000)
		},
		methods: {
			hasChange(count) {
				console.log(count, '改变了')
			},
			changeTab(e) {
				uni.switchTab({
					url: '/' + this.list[e].pagePath,
				})
			},
			closeModal() {
				this.showModal = false
			},
			showPub() {
				this.$request("/broker/mini/wechat/official-account/subscribe-qrcode").then(res => {
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
	image {
		will-change: transform
	}

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
		top: 3rpx;
		right: 30rpx;
		z-index: 100;
		background: #ff2c11;
		width: 30rpx;
		height: 30rpx;
		line-height: 30rpx;
		text-align: center;
		border-radius: 50%;
		color: #fff;
		font-size: 24rpx;
	}

	.tabbar-item .badge.active {
		top: -24rpx;
		right: 37rpx;
	}

	.img {
		/* height: 40upx;
    width: 40upx; */
		position: absolute;
		/* bottom:30rpx; */
		left: 50%;
		transform: translateX(-50%);
		will-change: transform;
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