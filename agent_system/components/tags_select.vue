<template>
	<view class="tags">
		<view class="tags_box">
			<view class="title">{{title}}（多选）
				<view class="close">
					<image src="/static/close_white.png" mode="widthFix" @click="cancel"></image>
				</view>
			</view>
			<view class="item_wrap" v-if="title =='工作信息'">
				<view class="item" v-for="(item,index) in list">
					<view class="tit">{{item.category}}</view>
					<view class="tag_container flex flex-start">
						<view class="tag" v-for="(tag,index) in item.tags"
							:class="ids.indexOf(tag.id) != -1?'active':''" @click="chooseTag(tag)">{{tag.name}}
						</view>
					</view>
				</view>
			</view>
			<view class="item_wrap" v-if="title =='工作福利'">
				<view class="item">
					<view class="tag_container flex flex-start">
						<view class="tag" v-for="(tag,index) in list" :class="ids.indexOf(tag.id) != -1?'active':''"
							@click="chooseTag(tag)">{{tag.name}}
						</view>
					</view>
				</view>
			</view>
			<view class="btns flex flex_end">
				<view class="btn cancel" @click="cancel">取消</view>
				<view class="btn" @click="confirm">确认</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		name: "tags_select",
		props: ["list", "title", "selected", 'selectedIds'],
		data() {
			return {
				select: [],
				ids: [],
			}
		},
		created() {
			this.ids = this.selectedIds
			this.select = this.selected
		},
		methods: {
			chooseTag(tag) {
				if (this.ids.indexOf(tag.id) != -1) {
					// 已经选过了，再次点击取消选择
					this.select.splice(this.ids.indexOf(tag.id), 1)
					this.ids.splice(this.ids.indexOf(tag.id), 1)

				} else {
					this.select.push(tag)
					this.ids.push(tag.id)

				}
				console.log(this.select, "obj")
			},
			cancel() {
				this.$emit("cancel")
			},
			confirm() {
				let obj = {
					objarr: this.select,
					ids: this.ids
				}
				this.$emit("handleConfirm", obj)
			}
		}
	}
</script>

<style lang="scss">
	.tags {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 100;
		background: rgba(0, 0, 0, .5);

		.tags_box {
			width: 50%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			border-radius: 10px;
			background: #fff;

			.title {
				height: 50px;
				line-height: 50px;
				text-align: center;
				font-weight: 600;
				background: url("/static/mask_title_bg.png") no-repeat;
				background-size: cover;
				color: #fff;
				position: relative;

				.close {
					position: absolute;
					top: 50%;
					right: 20px;
					transform: translateY(-50%);
					cursor: pointer;

					image {
						width: 20px;
						height: 20px;
					}
				}
			}

			.btns {
				padding-right: 20px;

				.btn {
					margin-top: 0;
					margin-bottom: 20px;
					margin-left: 15px;

					&.cancel {
						background: #fff;
						border: 1px solid #ccc;
						color: #333;
					}
				}

			}

			.item_wrap {
				padding: 15px 20px;
				box-sizing: border-box;
				font-size: 14px;

				.item {
					margin-bottom: 15px;

					.tit {
						height: 40px;
						line-height: 40px;
						font-weight: 600;
					}

					.tag_container {
						padding: 0 15px;
						box-sizing: border-box;
						flex-wrap: wrap;

						.tag {
							padding: 5px 10px;
							border-radius: 4px;
							background: #f3f3f3;
							margin: 0 10px 15px 10px;
							cursor: pointer;

							// &:hover {
							// 	background: #37a2ff;
							// 	color: #fff;
							// }

							&.active {
								background: #37a2ff;
								color: #fff;
							}
						}
					}
				}
			}
		}

	}
</style>