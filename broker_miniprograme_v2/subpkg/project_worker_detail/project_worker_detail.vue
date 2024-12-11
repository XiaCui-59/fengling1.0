<template>
	<view class="content">
		<customHeader :title="pageName" :showBack="true" :headHeight="headerHeight"></customHeader>
		<view class="cont" :style="{marginTop:marginTop+'px'}">
			<view class="box" :style="{top:marginTop+10+'px',background:list.length==0?'#fff':'#F3F3F5'}">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y"
					:style="{height:scrollHeight+'px'}" refresher-enabled="true" :refresher-triggered="refreshStatus"
					@refresherpulling="refreshData" @scrolltolower="lower" @scroll="scroll">
					<view class="item" v-for="(item,index) in list" :key="index">
						<view class="item_top flex flex_btween">
							<view class="status_icon">
								<image
									:src="imgUrl+ workerStatus.filter(el => {return el.value == item.status})[0].icon"
									mode="widthFix"></image>
							</view>
							<view class="left flex flex-start">
								<image :src="item.worker_avatar" mode=""></image>
								<view class="base">
									<view class="name">{{item.worker_name}}</view>
									<view class="idcard">{{item.worker_id_card_number}}</view>
								</view>
							</view>
							<!-- <view class="status" :class="item.status">
								{{workerStatus.filter(el => {return el.value == item.status})[0].text}}
							</view> -->
						</view>
						<view class="item_middle flex flex_around">
							<view class="mid_item">{{item.worker_gender=="male"?"男":"女"}}</view>
							<view class="mid_item">{{item.worker_nation}}</view>
							<view class="mid_item">{{item.worker_age}}<text class="period">岁</text>
							</view>
							<view class="mid_item" style="font-size: 0;display: flex;justify-content: space-around;">
								<image :src="imgUrl+'/broker/phone_icon.png'" mode=""
									@click="makePhoneCall(item.worker_mobile)"></image>
							</view>
						</view>
						<view class="item_bot">
							<!-- <view class="line flex flex_btween"
								v-if="type == 'enrolled-signing-requests' && item.status == 'enrolled'">
								<view class="opra refuse" @click="pass(item,false)">拒绝</view>
								<view class="opra pass" @click="pass(item,true)">通过</view>
							</view> -->
							<view class="line flex flex_btween" v-if="item.status == 'wait_check_in'">
								<view class="opra refuse" @click="checkIn(item,false)">拒绝</view>
								<view class="opra pass" @click="checkIn(item,true)">接收</view>
							</view>
							<view class="line flex flex_btween" v-if="item.status == 'check_in'">
								<view class="opra refuse" @click="toSign(item,false)">不通过</view>
								<view class="opra pass" @click="toSign(item,true)">面试通过</view>
							</view>
							<view class="line flex flex_btween" v-if="item.status == 'wait_entry'">
								<view class="opra refuse" @click="toEntry(item,false)">未入职</view>
								<view class="opra pass" @click="toEntry(item,true)">确认入职</view>
							</view>
							<view class="line flex flex_btween" v-if="item.status == 'entry'">
								<view class="opra pass" @click="depart(item)">离职</view>
							</view>
						</view>

					</view>
					<view class="empty" v-if="list.length == 0">
						<image :src="imgUrl+'/broker/empty.png'" mode="widthFix"></image>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import customHeader from "@/components/custom_header.vue"
	import commonData from "@/common/commonData"
	const app = getApp()
	export default {
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
				pageName: "已报名",
				marginTop: 0,
				comValue: "",
				startTime: "",
				endTime: "",
				workerStatus: commonData.workerStatus,
				list: [],
				scrollHeight: 0,
				headerHeight: 0,
				maskInnerTop: 0,
				id: "",
				type: "",
				currentPage: 1,
				pagination: {},
				refreshStatus: true,
				isPulling: false,
				status: [{
						value: "wait_check_in",
						text: "候选中",
						icon: "/broker/ic_checkin.png"
					},
					{
						value: "check_in",
						text: "待面试",
						icon: "/broker/ic_sign_in.png"
					},
					{
						value: "wait_entry",
						text: "待入职",
						icon: "/broker/ic_sign_in.png"
					},
					{
						value: "entry",
						text: "已入职",
						icon: "/broker/ic_sign_in.png"
					},
					{
						value: "depart",
						text: "已离职",
						icon: "/broker/ic_depart.png"
					}
				]
			}
		},
		components: {
			customHeader
		},
		onLoad(param) {
			this.id = param.id
			this.type = param.type
			this.pageName = this.status.filter(el => {
				return el.value == param.type
			})[0].text
			let _this = this
			this.getMarginTop()
			setTimeout(function() {
				_this.getElementInfo()
				_this.getTopHeight()
			}, 500)
			this.getList()
		},
		methods: {
			refreshData() {
				let _this = this
				if (!this.isPulling) {
					this.isPulling = true
					this.refreshStatus = true
					this.currentPage = 1
					this.list = []
					this.getList()
					setTimeout(function() {
						_this.refreshStatus = false
						_this.isPulling = false
					}, 1000);
				}
			},
			getMarginTop(e) {
				let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
				this.marginTop = menuButtonInfo.height + menuButtonInfo.top
				this.maskInnerTop = this.marginTop + 20
			},
			getTopHeight() {
				let percent = 200 / 844
				let systemInfo = uni.getSystemInfoSync()
				this.headerHeight = Math.floor(systemInfo.screenHeight * percent)
			},
			getElementInfo() {
				let _this = this
				let topHeight = 0;
				let systemInfo = uni.getSystemInfoSync()
				let tabbarHeight = Math.floor(systemInfo.screenHeight * (46 / 844))
				console.log(tabbarHeight, "tabbar")
				_this.scrollHeight = systemInfo.screenHeight - _this.marginTop - tabbarHeight - 5
			},
			getList() {
				// let url = "/broker/mini/project/" + this.id + "/" + this.type + "?page=" + this.currentPage
				let url = "/broker/mini/project/signing-requests?page=" + this.currentPage + "&project_id=" + this.id +
					"&status=" + this.type
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = this.list.concat(res.data.list)
						this.pagination = res.data.pagination
					}
				})
			},
			lower() {
				if (this.list.length < this.pagination.totalCount) {
					this.currentPage++
					this.getList()
				} else {
					if (this.list.length >= this.pagination.totalCount) {
						uni.showToast({
							title: "已经到底啦~",
							icon: "none",
							duration: 2000
						})
					}
				}
			},
			pass(item, type) {
				let _this = this
				let message = type ? "通过" : "拒绝"
				uni.showModal({
					title: "提示",
					content: "当前" + message + "的工人：" + item.worker_name,
					success(respon) {
						if (respon.confirm) {
							let tips = type ? "已通过" : "已拒绝"
							let arr = []
							arr.push(item.id)
							let data = {
								"relation_id": arr, // 选择数据ID
								"project_id": _this.id, // 职位ID
								"confirm": type, // true 审核 false 拒绝
								"remark": "" // 备注 （非必填）
							}
							_this.$request("/broker/mini/project/enroll-confirm", data, "POST").then(res => {
								if (res.code == 0) {
									uni.showModal({
										title: tips,
										showCancel: false
									})
									_this.list = []
									_this.getList()
								}
							})
						}
					}
				})

			},
			checkIn(item, type) {
				let _this = this
				let message = type ? "接收" : "拒绝"
				uni.showModal({
					title: "提示",
					content: "当前操作" + message + "的工人：" + item.worker_name,
					success(respon) {
						if (respon.confirm) {
							let tips = type ? "已接收" : "已拒绝"
							let arr = []
							arr.push(item.id)
							let data = {
								"relation_id": arr, // 选择数据ID
								"project_id": _this.id, // 职位ID
								"confirm": type, // true 审核 false 拒绝
								"remark": "" // 备注 （非必填）
							}
							_this.$request("/broker/mini/project/check-in", data, "POST").then(res => {
								if (res.code == 0) {
									uni.showModal({
										title: tips,
										showCancel: false
									})
									_this.list = []
									_this.getList()
								}
							})
						}
					}
				})

			},
			toSign(item, type) {
				let _this = this
				let message = type ? "面试通过" : "不通过"
				uni.showModal({
					title: "提示",
					content: "当前标记" + message + "的工人：" + item.worker_name,
					success(respon) {
						if (respon.confirm) {
							let tips = type ? "已通过面试" : "已标记不通过"
							let arr = []
							arr.push(item.id)
							let data = {
								"relation_id": arr, // 选择数据ID
								"project_id": _this.id, // 职位ID
								"confirm": type, // true 审核 false 拒绝
								"remark": "" // 备注 （非必填）
							}
							_this.$request("/broker/mini/project/contract-confirm", data, "POST").then(res => {
								if (res.code == 0) {
									uni.showModal({
										title: tips,
										showCancel: false
									})
									_this.list = []
									_this.getList()
								}
							})
						}
					}
				})

			},
			toEntry(item, type) {
				let _this = this
				let message = type ? "确认入职" : "未入职"
				uni.showModal({
					title: "提示",
					content: "当前标记" + message + "的工人：" + item.worker_name,
					success(respon) {
						if (respon.confirm) {
							let tips = type ? "已确认入职" : "已标记未入职"
							let arr = []
							arr.push(item.id)
							let data = {
								"relation_id": arr, // 选择数据ID
								"project_id": _this.id, // 职位ID
								"confirm": type, // true 审核 false 拒绝
								"remark": "" // 备注 （非必填）
							}
							_this.$request("/broker/mini/project/entry-confirm", data, "POST").then(res => {
								if (res.code == 0) {
									uni.showModal({
										title: tips,
										showCancel: false
									})
									_this.list = []
									_this.getList()
								}
							})
						}
					}
				})

			},
			makePhoneCall(mobile) {
				uni.makePhoneCall({
					phoneNumber: mobile
				})
			},
			depart(item) {
				let _this = this
				let arr = []
				arr.push(item.id)
				let data = {
					"relation_id": arr, // 选择数据ID
					"project_id": this.id, // 职位ID
					"remark": "" // 备注 （非必填）
				}
				uni.showModal({
					title: "离职操作",
					content: "当前离职正在办理离职的员工为：" + item.worker_name + "，是否确认离职？",
					success(resp) {
						if (resp.confirm) {
							_this.$request("/broker/mini/project/confirm-depart-user", data, "POST").then(res => {
								if (res.code == 0) {
									uni.showModal({
										title: "离职成功",
										showCancel: false
									})
									_this.list = []
									_this.getList()
								}
							})
						}
					}
				})

			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep {
		.uni-select {
			border: none;
			background: #fff;
			height: 88rpx;
			font-size: 28rpx;
			border-radius: 8rpx;
			padding: 0 40rpx;
		}

		.uni-icons {
			display: none;
		}

		.uni-select__input-placeholder {
			font-size: 28rpx;
		}

		.uni-date-x--border {
			height: 88rpx;
			line-height: 88rpx;
			padding: 0 40rpx;
			background: #fff;
			border-radius: 8rpx;
			box-sizing: border-box;
			border: none;
		}

		.uni-datetime-picker--btn,
		.uni-calendar-item__weeks-box .uni-calendar-item--checked {
			background: #F7BC05;
		}

		.uni-datetime-picker-btn-text {
			color: #F7BC05;
		}
	}

	.opra {
		width: 154rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		border-radius: 8rpx;
		margin-left: 20rpx;
		font-size: 27rpx;

		&.refuse {
			color: #FF5353;
			border: 1px solid #FF5353;
		}

		&.pass {
			border: 1px solid #216FF9;
			color: #216FF9;
		}
	}

	.top_area {
		width: calc(100% - 96rpx);
		position: fixed;
		left: 48rpx;

		.sele_box {
			margin: 0 20rpx 20rpx 0;

			.text {
				font-size: 28rpx;
				color: #fff;
				font-weight: bold;
			}

			image {
				width: 34rpx;
				margin-right: 8rpx;
			}
		}
	}

	.box {
		position: fixed;
		width: calc(100% - 96rpx);
		left: 48rpx;
		z-index: 3;
		border-top-left-radius: 16rpx;
		border-top-right-radius: 16rpx;
		overflow: hidden;

		.item {
			padding: 40rpx;
			border-radius: 16rpx;
			background: #fff;
			box-shadow: 0 2rpx 6rpx 0 rgba(0, 0, 0, 0.15);
			margin-bottom: 20rpx;
			position: relative;


			.item_top {
				align-items: start;
				position: relative;
				background: #F6F6F6;
				border-radius: 8rpx;
				padding: 19rpx;

				.status_icon {
					position: absolute;
					font-size: 0;
					top: 0;
					right: 0;

					image {
						width: 74rpx;
						height: 74rpx;
					}
				}

				.left {
					image {
						width: 88rpx;
						height: 88rpx;
						border-radius: 50%;
						margin-right: 19rpx;
						background: #ccc;
					}

					.base {
						color: #333333;

						.name {
							font-size: 33rpx;
							margin-bottom: 10rpx;
						}

						.idcard {
							font-size: 27rpx;
						}
					}
				}

				.status {
					width: 100rpx;
					height: 46rpx;
					background: #216FF9;
					border-radius: 4rpx;
					font-size: 24rpx;
					color: #FFFFFF;
					line-height: 46rpx;
					text-align: center;

					&.entry {
						background: #EA9900;
					}

					&.wait_check_in {
						background: #2ED775;
					}

					&.check_in {
						background: #FFDE9F;
						color: #EA9900;
					}

					&.depart {
						background: #FF5353;
					}
				}
			}

			.item_middle {
				margin: 19rpx 0;
				border-bottom: 2rpx solid #E9E9E9;
				height: 76rpx;
				line-height: 76rpx;

				.mid_item {
					width: 33%;
					text-align: center;
					font-size: 27rpx;
					color: #000000;
					position: relative;

					.period {
						font-weight: 400;
						font-size: 23rpx;
						color: #686868;
						display: inline-block;
						margin-left: 6rpx;
					}

					&::after {
						content: "";
						width: 2rpx;
						height: 35rpx;
						background: #E9E9E9;
						position: absolute;
						top: 50%;
						right: 0;
						transform: translateY(-50%);
					}

					&:last-child::after {
						display: none;
					}

					image {
						width: 50rpx;
						height: 50rpx;
					}
				}
			}
		}
	}
</style>