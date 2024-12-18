<template>
	<view class="view_record">
		<!-- 自定义导航 -->
		<u-navbar title="工作浏览记录" @rightClick="rightClick" :autoBack="true" bgColor="#fff"
			titleStyle="color:#010101;font-size: 31rpx;">
			<view class="u-nav-slot" slot="left"
				style="width:57rpx;height:57rpx;text-align: center;line-height: 57rpx;border:1px solid #C5C6CB;border-radius: 50%;">

				<u-icon name="arrow-left" size="19" color="#4E4E52"
					custom-style="display: inline-block;line-height: 57rpx;margin:0 auto;left:-2rpx;"></u-icon>
			</view>
		</u-navbar>
		<view class="cont" :style="{marginTop:marginTop+tabMargin+'px',minHeight:contHeight+'px'}">
			<view class="item" v-for="(item,index) in list" :key="item.id" @click="toDetail(item.id)"
				v-if="list.length != 0">
				<view class="title flex flex_btween" :class="item.status=='running'?'':'grey'">
					<view class="text">{{item.name}}</view>
					<view class="time">{{item.time}}</view>
				</view>
				<view class="middle flex flex_btween">
					<view class="mid_in_item">
						<view class="tit">工资</view>
						<view class="salary flex flex-start" :class="item.status=='running'?'':'grey'">
							{{(item.worker_salary_min == item.worker_salary_max?item.worker_salary_min:(item.worker_salary_min+"-"+item.worker_salary_max))}}
							<text
								class="period">{{"元"+periodList.filter(el=>{return el.value==item.worker_salary_type})[0].text}}</text>
						</view>
					</view>
					<view class="mid_in_item" v-if="item.status == 'running'">
						<image :src="imgUrl+'/worker/new/ic_message.png'" mode="widthFix" style="width: 40rpx;"></image>
					</view>
				</view>
				<view class="status">
					<image
						:src="item.status == 'running'?imgUrl+'/worker/new/ic_hot_lable.png':imgUrl+'/worker/new/ic_end_label.png'"
						mode="widthFix"></image>
				</view>
			</view>
			<view class="empty" v-if="list.length == 0">
				<image :src="imgUrl+'/worker/no_data.png'" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				contHeight: 0,
				periodList: [{
						value: "month",
						text: "/月"
					},
					{
						value: "day",
						text: "/天"
					},
					{
						value: "hour",
						text: "/时"
					}
				],
				list: [{
						name: "希尔顿",
						status: "running",
						worker_salary_max: "6000",
						worker_salary_min: "4000",
						worker_salary_type: "month",
						time: "2024-12-12"
					},
					{
						name: "富士康",
						status: "end",
						worker_salary_max: "7000",
						worker_salary_min: "5000",
						worker_salary_type: "month",
						time: "2024-12-01"
					}
				]
			}
		},
		onLoad() {
			uni.setNavigationBarColor({
				frontColor: '#000000',
				backgroundColor: 'transparent'
			})
			uni.hideShareMenu()
			this.contHeight = app.globalData.systemHeight - this.marginTop - this.tabMargin
		},
		methods: {}
	}
</script>

<style lang="scss">
	::v-deep {}

	.view_record {
		height: 100vh;
		background: #fff;
		color: $base-fontcolor;

		.cont {
			background: #F7F8FA;
			padding: 38rpx 26rpx;
			box-sizing: border-box;

			.item {
				padding: 40rpx 48rpx 23rpx 40rpx;
				border-radius: 16rpx;
				background: #fff;
				box-shadow: 0 2rpx 6rpx 0 rgba(0, 0, 0, 0.15);
				margin-bottom: 24rpx;
				position: relative;

				.status {
					position: absolute;
					top: 0;
					right: 0;
					font-size: 0;

					image {
						width: 96rpx;
					}
				}

				.title {
					padding-left: 22rpx;
					box-sizing: border-box;
					position: relative;
					font-weight: 600;
					font-size: 33rpx;
					color: #333333;

					&.grey {
						color: #686868;

						.time {
							color: #CBCBCB;
						}
					}

					&.grey:before {
						background: #CBCBCB;
					}

					.text {
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						box-sizing: border-box;
						width: calc(100% - 170rpx);
					}

					.time {
						width: 160rpx;
						font-weight: 400;
						font-size: 27rpx;
						color: #5A5A5A;
						text-align: right;
					}

					&:before {
						content: "";
						width: 8rpx;
						height: 36rpx;
						background: #F7BC05;
						position: absolute;
						top: 50%;
						left: 0;
						transform: translateY(-50%);
					}
				}

				.middle {
					font-size: 30rpx;
					margin: 20rpx 0 0 0;
					padding: 17rpx 20rpx;
					box-sizing: border-box;
					background: #F6F6F6;
					border-radius: 8rpx;

					.mid_in_item {
						.tit {
							font-size: 25rpx;
							color: #5A5A5A;
							line-height: 46rpx;
							font-weight: 400;
						}

						view {

							font-weight: 600;
							font-size: 35rpx;
						}

						.salary {
							color: #EA9900;

							&.grey {
								color: #686868;
							}
						}

						.count {
							color: #3780FF;
							text-align: right;
						}

						.period {
							font-size: 23rpx;
							color: #A8A8A8;
							display: inline-block;
							margin-left: 10rpx;
							font-weight: 400;
						}
					}

				}

				.bottom {
					font-size: 23rpx;
					color: #686868;
					height: 60rpx;
					line-height: 60rpx;
				}
			}
		}
	}
</style>