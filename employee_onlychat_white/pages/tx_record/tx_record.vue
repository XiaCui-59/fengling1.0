<template>
	<view class="tx_record">
		<view class="single_page" v-if="ifSingle">
			<image :src="imgUrl+'/worker/single_page.png'" mode="widthFix" style="width: 100%;"></image>
		</view>
		<view class="" v-else>
			<!-- 自定义导航 -->
			<u-navbar title="提现记录" @rightClick="rightClick" :autoBack="true" bgColor="#F7F8FA"
				titleStyle="color: #010101;font-size: 31rpx;">
				<view class="u-nav-slot" slot="left">
					<!-- <image :src="imgUrl+'/worker/back_white_circle.png'" mode="widthFix" style="width: 58rpx;"></image> -->
					<u-icon name="arrow-left" size="19"></u-icon>
				</view>
			</u-navbar>
			<view class="cont" :style="{marginTop:marginTop+tabMargin+'px',paddingTop:'15px'}" v-if="list.length>0">
				<view class="top_select">
					<uni-data-select v-model="txStatus" :localdata="statusRange" @change="statusChange"
						:clear="false"></uni-data-select>
				</view>
				<scroll-view scroll-y="true" :style="{height:scrollHeight+'px'}" @scrolltolower="scrolltolower">
					<view class="list">
						<view class="list_item flex flex_btween" v-for="(item,index) in list" :key="index">
							<view class="left">
								<view class="year">{{item.create_time.slice(0,10)}}</view>
								<view class="time">{{item.create_time.slice(11)}}</view>
							</view>
							<view class="right" :class="item.status" :style="{paddingTop:list.length == 1?'0':'auto'}">
								<view class="right_inner flex flex_btween">
									<view class="le">
										<view class="mount">&yen; {{item.actual_amount}}</view>
										<view class="tips">提现方式：{{item.type == "wechat"?"微信转账":"无"}}</view>
									</view>
									<view class="ri">
										<view>{{statusRange.filter(el=>{return el.value == item.status})[0].text}}
										</view>
										<view class="reason" v-if="item.status == 'failed'">({{item.fail_reason}})
										</view>
									</view>
								</view>

							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="empty" v-if="list.length == 0">
				<image :src="imgUrl+'/worker/no_data.png'" mode="widthFix"></image>
			</view>
		</view>

	</view>
</template>

<script>
	import commonData from '@/common/commonData'
	const app = getApp()
	export default {
		data() {
			return {
				ifSingle: app.globalData.scene == 1154 ? true : false,
				txStatus: "",
				statusRange: commonData.txStatus,
				imgUrl: app.globalData.baseImageUrl,
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				scrollHeight: 0,
				list: [],
				pagination: {},
				currentPage: 1,
			}
		},
		async onLoad() {
			uni.setNavigationBarColor({
				frontColor: '#000000',
				backgroundColor: '#ff0000'
			})
			uni.hideShareMenu()
			if (this.ifSingle) {
				return
			}
			if (this.isLogin()) {
				let topArea = await this.getElementInfo(".top_select")
				console.log("topArea", topArea)
				if (topArea) {
					let topAreaBottom = topArea.bottom
					this.scrollHeight = app.globalData.systemHeight - topAreaBottom - 15
				}
				this.getList()
			} else {
				uni.reLaunch({
					url: "/pages/index/index"
				})
			}
		},
		methods: {
			statusChange() {
				this.getList()
			},
			getList() {
				let url = "/worker/withdraws?page=" + this.currentPage + "&status=" + this.txStatus
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = this.list.concat(res.data.list)
						this.pagination = res.data.pagination
					}
				})
			},
			getElementInfo(className) {
				let _this = this
				return new Promise((resolve) => {
					let info = uni.createSelectorQuery().select(className);
					info.boundingClientRect(function(data) { //data - 各种参数
						resolve(data)
					}).exec()
				})
			},
			scrolltolower() {
				if (this.currentPage < this.pagination.pageCount) {
					this.currentPage++
					this.getList()
				} else {
					uni.showToast({
						title: "到底啦~",
						icon: "none",
						duration: 2000
					})
				}

			}
		}
	}
</script>

<style lang="scss">
	::v-deep {
		.uni-select {
			border: none !important;
			border-bottom: none !important;
			height: 96rpx !important;
			background: #FFFFFF;
			border-radius: 25rpx !important;
			font-weight: 400 !important;
			font-size: 31rpx !important;
			color: #333333 !important;
		}
	}

	.empty {
		text-align: center;

		image {
			width: 100%;
		}
	}

	.tx_record {
		height: 100vh;
		background: #F7F8FA;
		color: #333333;
		padding: 0 28rpx;
		box-sizing: border-box;

		.cont {
			.list {
				margin-top: 30rpx;

				.list_item {
					&:first-child {
						.right {
							padding: 0rpx 0rpx 0rpx 30rpx;
						}
					}

					&:last-child {
						.right {
							padding: 30rpx 0rpx 0rpx 30rpx;
						}
					}

					.left {
						width: 25%;
						font-weight: 400;
						font-size: 27rpx;
						color: #555555;

						.year {
							color: #333;
							margin-bottom: 4rpx;
						}
					}

					.right {
						width: 75%;
						padding: 30rpx 0rpx 0rpx 30rpx;
						box-sizing: border-box;
						border-left: 2rpx solid rgba(117, 80, 34, 0.2);
						position: relative;

						.mount {
							font-family: Arial, Arial;
						}

						&::before {
							content: "";
							width: 16rpx;
							height: 16rpx;
							border-radius: 50%;
							position: absolute;
							top: 50%;
							left: -9rpx;
						}

						.right_inner {
							padding: 30rpx 40rpx;
							background: #FFFFFF;
							border-radius: 15rpx;
							box-sizing: border-box;
						}

						&.pending {


							.mount,
							.ri {
								color: #755022;
							}
						}

						&.pending::before {
							background: #755022;
						}

						&.success {

							.mount,
							.ri {
								color: #52C41A;
							}
						}

						&.success::before {
							background: #52C41A;
						}

						&.failed {

							.mount,
							.ri {
								color: #D90305;
							}
						}

						&.failed::before {
							background: #D90305;
						}

						.le {
							.mount {
								font-weight: 800;
								font-size: 29rpx;
							}


							.tips {
								font-weight: 400;
								font-size: 23rpx;
								color: #555555;
								margin-top: 8rpx;
							}
						}

						.ri {
							font-weight: 600;
							font-size: 29rpx;
							text-align: center;

							.reason {
								font-weight: 400;
								font-size: 23rpx;
								color: #333333;
							}
						}
					}
				}
			}
		}
	}
</style>