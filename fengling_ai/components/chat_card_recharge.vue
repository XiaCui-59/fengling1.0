<template>
	<view class="card_recharge">
		<view class="top flex flex_btween">
			<view class="top_left">
				<view class="tit">温馨提醒,当前积分不足</view>
				<view class="text">精选工作岗位只需2.5积分，即可报名</view>
			</view>
			<image :src="imgUrl+'/worker/new/card_ic_jinbi.png'" mode="widthFix"></image>
		</view>
		<view class="bot_wrap">
			<view class="bot">
				<view class="flex flex_start">
					<view class="left flex">
						<image :src="imgUrl+'/worker/new/card_ic_zan.png'" mode="widthFix"></image>
						<view class="text">精选工作</view>
					</view>
					<view class="name">郫县食品包装厂招聘制袋工备份</view>
				</view>
				<view class="sure_btn">立即支付 9.9元（10积分）</view>
			</view>
		</view>

	</view>
</template>

<script>
	const app = getApp();
	export default {
		name: "chat_card_recharge",
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
			};
		},
		created() {},
		methods: {}
	}
</script>

<style lang="scss">
	.card_recharge {
		margin-top: 30rpx;
		background: url($back-ground-url+"/worker/new/card_ic_bg.png") no-repeat;
		background-size: 100% 100%;


		.top {
			padding: 20rpx 20rpx 0 70rpx;

			.top_left {
				.tit {
					font-size: 38rpx;
					color: #FFFFFF;
					text-shadow: 0px 1px 2px rgba(32, 32, 32, 0.8);
					margin-bottom: 6rpx;
					font-family: "也字工厂";
				}

				.text {
					font-weight: 400;
					font-size: 23rpx;
					color: #333333;
				}
			}

			image {
				width: 120rpx;
			}
		}

		.bot_wrap {
			padding: 0 30rpx 30rpx 30rpx;
			margin-top: 10rpx;
		}

		.bot {
			background: #FFFFFF;
			border-radius: 15rpx;
			padding: 30rpx 25rpx 23rpx 25rpx;

			.left {
				width: 165rpx;
				padding: 6rpx 15rpx 6rpx 10rpx;
				background: rgba(239, 197, 98, 0.3);
				border-radius: 12rpx;
				margin-right: 10rpx;
				white-space: nowrap;
				flex-shrink: 0;
				box-sizing: border-box;

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

			.name {
				width: calc(100% - 175rpx);
				font-weight: 600;
				font-size: 31rpx;
				color: #020202;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
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
				text-align: center;
				margin-top: 25rpx;
			}
		}
	}
</style>