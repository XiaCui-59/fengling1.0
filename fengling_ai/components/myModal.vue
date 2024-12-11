<template>
	<view class="modal" v-if="showMyModal">
		<view class="modal_inner_box">
			<view class="text_area">
				<view class="title" v-if="info.title">{{info.title}}</view>
				<view class="cont" v-if="info.content">{{info.content}}</view>
			</view>
			<view class="btn_area flex flex_btween" :style="{justifyContent:!info.showCancel?'center':'between'}">
				<view class="btn_item cancel" @click="cancel" v-if="info.showCancel"
					:style="{borderColor:'#CFCFCF',color:info.cancelColor}">
					{{info.cancelText?info.cancelText:"取消"}}
				</view>
				<view class="btn_item confirm" @click="confirm"
					:style="{borderColor:info.confirmColor,color:info.confirmColor}">
					{{info.confirmText?info.confirmText:"确定"}}
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "myModal",
		props: ["title", "content", "confirmText", "cancelText", "showCancel"],
		data() {
			return {
				showMyModal: false,
				info: {
					title: "",
					content: "",
					showCancel: true,
					confirmText: "确定",
					cancelText: "取消",
					confirmColor: "#216FF9",
					cancelColor: "#213B56",
					success: () => {}
				}
			};
		},
		methods: {
			showModal(param) {
				this.showMyModal = true
				this.info.title = param.title ? param.title : ""
				this.info.content = param.content ? param.content : ""
				this.info.showCancel = String(param.showCancel) != "undefined" ? param.showCancel : true
				this.info.confirmText = param.confirmText ? param.confirmText : "确定"
				this.info.cancelText = param.cancelText ? param.cancelText : "取消"
				this.info.confirmColor = param.confirmColor ? param.confirmColor : "#216FF9"
				this.info.cancelColor = param.cancelColor ? param.cancelColor : "#213B56"
				this.info.success = (type) => {
					if (typeof param.success == "function") {
						param.success(type)
					}

				}
			},
			hideModal() {
				this.showMyModal = false
			},
			cancel() {
				this.info.success("cancel")
				this.hideModal()
			},
			confirm() {
				this.info.success("confirm")
				this.hideModal()
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
		background: rgba(0, 0, 0, .6);
		z-index: 20000;

		.modal_inner_box {
			width: 69.2%;
			position: absolute;
			top: 55%;
			left: 50%;
			transform: translate(-50%, -50%);
			background: url($back-ground-url+'/worker/new/modal_bg.png') no-repeat;
			background-size: 100% 100%;
			border-radius: 21rpx;
			overflow: hidden;

			padding: 88rpx 40rpx 48rpx 40rpx;
			box-sizing: border-box;

			.text_area {
				.title {
					font-weight: 400;
					font-size: 35rpx;
					color: #213B56;
					text-align: center;
					line-height: 56rpx;
				}


			}

			.btn_area {
				margin-top: 53rpx;

				.btn_item {
					width: 40%;
					height: 69rpx;
					line-height: 69rpx;
					text-align: center;
					font-weight: 400;
					font-size: 27rpx;
					color: #213B56;
					border-radius: 35rpx;
					border-width: 2rpx;
					border-style: solid;
					border-color: #CFCFCF;
				}

			}
		}
	}
</style>