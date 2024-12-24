<template>
	<view class="mask">
		<view class="pop_inner">
			<view class="close" @click.stop="close">
				<image :src="imgUrl+'/worker/ic_post_close.png'" mode="widthFix"></image>
			</view>
			<view class="wrap">
				<view class="title">您有一份优质工作，请查收</view>
				<view class="outer">
					<view class="top flex">
						<image :src="imgUrl+'/worker/new/card_ic_zan.png'" mode="widthFix"></image>
						<view class="text">精选工作</view>
					</view>
					<view class="in_box">
						<view class="text">{{project.name}}</view>
						<view class="text">
							{{project.worker_salary_min}}-{{project.worker_salary_max}}元{{periodList.filter(el=>{return el.value == project.worker_salary_type})[0].text}}
						</view>
						<view class="sure_btn" @click="toChat">了解详情</view>
					</view>
				</view>
			</view>
			<view class="pop_bottom">
				<image :src="imgUrl+'/worker/new/index_pro_bot.png'" mode="widthFix"></image>
			</view>
		</view>

	</view>
</template>

<script>
	const app = getApp();
	export default {
		name: "load_project_popup",
		props: ["project"],
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
				periodList: [{
						value: "hour",
						text: "/时"
					},
					{
						value: "day",
						text: "/天"
					},
					{
						value: "week",
						text: "/周"
					},
					{
						value: "month",
						text: "/月"
					},
				],
			};
		},
		methods: {
			close() {
				this.$emit("closeProPop")
			},
			toChat() {
				let obj = {
					type: "job",
					msg: this.project.name + "(ID:" + this.project.id + ")"
				}
				this.$emit("sendMsg", obj)
			}
		}
	}
</script>

<style lang="scss">
	.pop_inner {
		width: 88%;
		height: auto;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		&>.pop_bottom {
			width: 100%;
			font-size: 0;
			position: absolute;
			left: 0;
			top: 95%;
			z-index: 102;
			transform: translateY(-50%);

			image {
				width: 100%;
			}
		}

		.close {
			position: absolute;
			font-size: 0;
			top: -68rpx;
			right: 4.5%;

			image {
				width: 58rpx;
			}

		}

		.wrap {
			width: 90.5%;
			margin: 0 auto;
			background: #FFFFFF;
			border-radius: 37rpx;
			padding: 30rpx;
			box-sizing: border-box;

			.title {
				font-weight: 600;
				font-size: 38rpx;
				color: #282319;
				text-align: center;
				margin-bottom: 25rpx;
			}

			.outer {
				padding: 20rpx 25rpx 0 25rpx;
				background: url($back-ground-url+"/worker/new/index_pro_bg1.png") no-repeat;
				background-size: 100% 100%;

				.top {
					width: 165rpx;
					padding: 6rpx 15rpx 6rpx 10rpx;
					background: #fff;
					border-radius: 12rpx;
					margin-left: 20rpx;
					white-space: nowrap;
					flex-shrink: 0;
					box-sizing: border-box;
					margin-bottom: 20rpx;

					.text {
						font-weight: 600;
						font-size: 23rpx;
						color: #AA691B;
					}

					image {
						width: 50rpx;
						margin-right: 6rpx;
					}
				}

				.in_box {
					background: #FFFFFF url($back-ground-url+"/worker/new/index_pro_bg2.png") no-repeat;
					background-size: 100% auto;
					background-position: center bottom;
					border-radius: 15rpx;
					padding: 26rpx 32rpx 70rpx 32rpx;
					text-align: center;
					width: 100%;
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
					box-sizing: border-box;

					.text {
						font-weight: 600;
						font-size: 31rpx;
						color: #020202;

						&:nth-child(2) {
							font-family: Arial;
							font-weight: 900;
							font-size: 35rpx;
							color: #020202;
							margin-top: 15rpx;
							margin-bottom: 25rpx;
						}
					}

					.sure_btn {
						height: 81rpx;
						background: #EFC562;
						box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(104, 78, 0, 0.5);
						border-radius: 15rpx;
						font-weight: 600;
						font-size: 29rpx;
						color: #282319;
						line-height: 81rpx;
						position: relative;
						z-index: 200;
					}
				}
			}
		}
	}
</style>