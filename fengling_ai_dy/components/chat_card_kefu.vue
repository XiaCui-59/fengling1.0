<template>
	<view class="card_kefu">
		<image :src="imgUrl" mode="widthFix" :show-menu-by-longpress="true" @click="prev"></image>
		<view class="text">长按图片识别二维码，添加专属客服</view>
		<view class="step_hand" v-show="showHand">
			<image :src="imageUrl+'/worker/new/step_hand.png'" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	const app = getApp();
	export default {
		props: ["showHand"],
		name: "chat_card_kefu",
		data() {
			return {
				imageUrl: app.globalData.baseImageUrl,
				imgUrl: app.globalData.baseImageUrl + "/worker/kefu_code.jpg?time=" + (new Date()).getTime()
			};
		},
		created() {
			let _this = this
			if (this.showHand) {
				setTimeout(function() {
					_this.$emit("closeHand")
				}, 3000)
			}
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
	@keyframes scaleChange {
		0% {
			scale: 1;
		}

		50% {
			scale: 0.7
		}

		100% {
			scale: 1
		}
	}

	.card_kefu {
		background: #F1F8FF;
		border-radius: 4rpx 44rpx 44rpx 44rpx;
		margin-top: 30rpx;
		text-align: center;
		padding: 26rpx 30rpx;
		box-sizing: border-box;
		position: relative;
		z-index: 2;

		&>image {
			width: 260rpx;
		}

		.text {
			font-weight: 400;
			font-size: 31rpx;
			color: #223756;
			line-height: 46rpx;
		}

		.step_hand {
			position: absolute;
			font-size: 0;
			top: 40%;
			left: 50%;
			animation: scaleChange 3s linear forwards infinite;
			z-index: 1;

			image {
				width: 200rpx;
			}
		}
	}
</style>