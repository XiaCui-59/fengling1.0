<template>
	<view class="modal" @click="close">
		<view class="mod_inner_box">
			<image :src="imgUrl+bgUrl" mode="widthFix" class="bg"></image>
			<image :src="imgUrl+iconUrl" mode="widthFix" class="icon" :class="iconPosition"></image>
			<view class="info" :style="{top:imageUrl?'65%':'50%'}">
				<image :src="imageUrl" mode="widthFix" v-if="imageUrl" :show-menu-by-longpress="true"></image>
				<view class="info_tit">{{title}}</view>
				<view class="info_cont">{{content}}</view>
			</view>
			<view class="btns flex flex_around">
				<view class="mod_btn" :style="{color:baseColor,background:'#fff',border:'1px solid '+baseColor}"
					@click.stop="handleCancel" v-if="showCancel">
					{{cancelText}}

				</view>
				<view class="mod_btn" :style="{background:baseColor,color:'#fff',border:'1px solid '+baseColor}"
					@click.stop="handleConfirm" v-if="showConfirm">
					{{confirmText}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		name: "custom_modal",
		props: {
			title: {
				type: String,
				default: "提示"
			},
			content: {
				type: String,
				default: ""
			},
			cancelText: {
				type: String,
				default: "取消"
			},
			confirmText: {
				type: String,
				default: "确定"
			},
			bgUrl: {
				type: String,
				default: "/broker/modal_bg.png"
			},
			iconUrl: {
				type: String,
				default: "/broker/modal_icon.png"
			},
			imageUrl: {
				type: String,
				default: ""
			},
			iconPosition: {
				type: String,
				default: "right"
			},
			baseColor: {
				type: String,
				default: "#F7BC05"
			},
			confirmColor: {
				type: String,
				default: "#fff"
			},
			showCancel: {
				type: Boolean,
				default: true
			},
			showConfirm: {
				type: Boolean,
				default: true
			},
		},
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
			};
		},
		methods: {
			handleCancel() {
				this.$emit("cancel")
			},
			handleConfirm() {
				console.log("确定")
				this.$emit("confirm")
			},
			close() {
				this.$emit('closeModal')
			}
		}
	}
</script>

<style lang="scss">
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 100;

		.mod_inner_box {
			width: 71.33%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			.bg {
				width: 100%;
				height: auto;
			}

			.icon {
				position: absolute;
				width: 30%;
				top: 20rpx;

				&.left {
					left: 70rpx;
				}

				&.right {
					right: 70rpx;
				}
			}

			.info {
				width: 100%;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				text-align: center;

				image {
					width: 60%;
					margin-bottom: 14rpx;
				}

				view {
					font-weight: 600;
					font-size: 35rpx;
					color: #FFB103;
					text-align: center;
					padding: 0 20rpx;
					box-sizing: border-box;
				}

				.info_tit {
					margin-bottom: 20rpx;
				}

				.info_cont {
					font-weight: 500;
					font-size: 32rpx;
				}
			}

			.btns {
				width: 100%;
				position: absolute;
				bottom: 10%;
				left: 0;
				padding: 0 50rpx;
				box-sizing: border-box;

				.mod_btn {
					width: 45%;
					height: 85rpx;
					line-height: 85rpx;
					border-radius: 15rpx;
					text-align: center;
					font-weight: 600;
					font-size: 29rpx;
					box-shadow: 0rpx 2rpx 4rpx 0rpx rgba(0, 0, 0, 0.15);
				}
			}
		}
	}
</style>