<template>
	<view class="card_kefu">
		<image :src="imgUrl" mode="widthFix" :show-menu-by-longpress="true" @click="prev"></image>
		<view class="text">长按图片识别二维码，添加专属客服</view>
	</view>
</template>

<script>
	const app = getApp();
	export default {
		name: "chat_card_kefu",
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl + "/worker/kefu_code.jpg"
			};
		},
		methods: {
			prev() {
				let urls = []
				urls.push(this.imgUrl)
				uni.previewImage({
					urls: urls
				})
			}
		}
	}
</script>

<style lang="scss">
	.card_kefu {
		background: #F1F8FF;
		border-radius: 4rpx 44rpx 44rpx 44rpx;
		margin-top: 30rpx;
		text-align: center;
		padding: 26rpx 30rpx;
		box-sizing: border-box;

		image {
			width: 260rpx;
		}

		.text {
			font-weight: 400;
			font-size: 31rpx;
			color: #223756;
			line-height: 46rpx;
		}
	}
</style>