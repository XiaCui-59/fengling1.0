<template>
	<view class="tags" :style="{marginTop:marginTop+tabMargin+'px'}">
		<view class="tags_box">
			<view class="title">我的优势<text>（多选）</text>
			</view>
			<view class="item_wrap flex flex-start">
				<view class="tag" v-for="(item,index) in tags" :key="index"
					:class="inIds.indexOf(item.id) != -1?'active':''" @click="chooseTag(item)">
					{{item.name}}
					<image :src="imgUrl+'/worker/ic_work_sele_1.png'" mode="widthFix"
						v-if="inIds.indexOf(item.id) != -1"></image>
				</view>
			</view>
			<view class="btns flex flex_btween">
				<view class="btn cancel" @click="close">关闭</view>
				<view class="btn sure" @click="sure">确定</view>
			</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		name: "tags_select",
		props: ["tags", "infoIds", "selectInfo"],
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				selectIn: [],
				inIds: [],
			}
		},

		created() {

		},
		mounted() {
			this.selectIn = this.selectInfo
			this.inIds = this.infoIds
		},
		methods: {
			fo(item) {
				console.log(item, "item")
			},
			chooseTag(item) {
				if (this.inIds.indexOf(item.id) != -1) {
					// 已经选过了，再次点击取消选择
					this.selectIn.splice(this.inIds.indexOf(item.id), 1)
					this.inIds.splice(this.inIds.indexOf(item.id), 1)

				} else {
					this.selectIn.push(item)
					this.inIds.push(item.id)

				}
			},
			close() {
				this.$emit("close")
			},
			sure() {
				let obj = {
					objarr: this.selectIn,
					ids: this.inIds
				}
				this.$emit("handleInfo", obj)
			}
		}
	}
</script>

<style lang="scss">
	.tags {
		.tags_box {
			width: 100%;

			.title {
				font-weight: 600;
				position: relative;
				margin-bottom: 50rpx;

				text {
					font-weight: 400;
					font-size: 27rpx;
					color: #A8A8A8;
				}
			}

			.btns {
				margin-top: 80rpx;

				.btn {
					width: 48%;
					height: 84rpx;
					line-height: 84rpx;
					text-align: center;
					border: 1px solid #216FF9;
					border-radius: 16rpx;

					&.cancel {
						color: #216FF9;
					}

					&.sure {
						background: #216FF9;
						color: #fff;
					}
				}
			}

			.item_wrap {
				font-size: 14px;
				flex-wrap: wrap;

				.tag {
					height: 76rpx;
					line-height: 76rpx;
					width: calc(32% - 6rpx);
					border-radius: 6rpx;
					background: #F9F9F9;
					border: 2rpx solid #F9F9F9;
					margin-right: 2%;
					margin-top: 28rpx;
					cursor: pointer;
					position: relative;
					font-size: 23rpx;
					color: #333333;
					text-align: center;

					&:nth-child(3n) {
						margin-right: 0;
					}

					image {
						position: absolute;
						top: 0;
						right: 0;
						width: 38rpx;
						height: 38rpx;
					}

					&.active {
						font-weight: 600;
						border: 2rpx solid #216FF9;
						color: #216FF9;
					}
				}
			}
		}

	}
</style>