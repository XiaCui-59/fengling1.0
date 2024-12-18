<template>
	<view class="content_body">
		<view class="inner">
			<view class="image">
				<image :src="imgUrl+'/worker/new/error_server.png'" mode="widthFix"></image>
			</view>
			<view class="tit">服务器开小差了</view>
			<view class="text">紧急修复中，请耐心等待</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content_body {
		background: linear-gradient(#4290FF 0%, #91BAFF 8%, #F0F5FE 100%);
		position: relative;

		.inner {
			width: 80%;
			position: absolute;
			top: 20%;
			left: 50%;
			transform: translateX(-50%);
			text-align: center;

			.image {
				font-size: 0;

				image {
					width: 100%;
				}
			}

			.tit {
				font-size: 35rpx;
				color: #333333;
				margin-bottom: 20rpx;
			}

			.text {
				font-size: 27rpx;
				color: #6C6C6C;
			}
		}
	}
</style>