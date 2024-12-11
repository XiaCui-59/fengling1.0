<template>
	<view class="paging_box flex flex_end">
		<view class="inner flex flex_end">
			<view class="total">共{{page.totalCount}} 条，总共{{page.pageCount}}页</view>
			<view class="sele_count" style="margin-left:10px;">
				<uni-data-select :placement="place" v-model="count" :localdata="countList" @change="countChange"
					:clear="false"></uni-data-select>
			</view>
			<view class="opera flex flex_start">
				<view class="item btn" @click="toBefore">
					<image src="/static/left.png" mode="widthFix"></image>
				</view>
				<view class="item">{{page.page}}</view>
				<view class="item btn" @click="toNext">
					<image src="/static/right.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="input flex flex_start">
				<view class="text">前往第</view>
				<input type="text" v-model="inputPage" />
				<view class="text">页</view>
				<view class="btn" @click="toPage">确定</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["page", "type"],
		data() {
			return {
				inputPage: 1,
				place: "top",
				count: 15,
				countList: [{
						value: 15,
						text: "15条/页"
					},
					{
						value: 30,
						text: "30条/页"
					},
					{
						value: 60,
						text: "60条/页"
					},
				]
			}
		},
		watch: {
			page(val) {
				this.inputPage = val.page
			}
		},
		methods: {
			countChange(e) {
				console.log(e)
				if (this.type == "mask") {
					this.$emit("toMaskNext", 1, this.count)
				} else {
					this.$emit("toNext", 1, this.count)
				}
			},
			toNext() {
				let currentPage = this.page.page
				if (currentPage < this.page.pageCount) {
					currentPage = this.page.page + 1
					this.inputPage = currentPage
					if (this.type == "mask") {
						this.$emit("toMaskNext", currentPage, this.count)
					} else {
						this.$emit("toNext", currentPage, this.count)
					}

				} else {
					uni.showToast({
						title: "没有下一页了~",
						icon: "none"
					})
				}
			},
			toBefore() {
				let currentPage = this.page.page
				if (currentPage > 1) {
					currentPage = this.page.page - 1
					this.inputPage = currentPage
					if (this.type == "mask") {
						this.$emit("toMaskNext", currentPage, this.count)
					} else {
						this.$emit("toNext", currentPage, this.count)
					}
				} else {
					uni.showToast({
						title: "已经是第一页了~",
						icon: "none"
					})
				}
			},
			toPage() {
				if (this.inputPage == this.page.page) {
					uni.showToast({
						title: "正在第" + this.inputPage + "页~",
						icon: "none"
					})
					return
				}
				if (this.inputPage <= this.page.pageCount) {
					if (this.type == "mask") {
						this.$emit("toMaskNext", this.inputPage)
					} else {
						this.$emit("toNext", this.inputPage, this.count)
					}
				} else {
					uni.showToast({
						title: "只有" + this.page.pageCount + "页哦~",
						icon: "none"
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	::v-deep {

		.uni-select,
		.uni-select__input-text {
			font-size: 14px;
			color: #666;
			height: auto !important;
		}

		.uni-select__selector {
			top: unset;
			bottom: calc(100% + 12px);
		}
	}

	.btn {
		cursor: pointer;
	}

	.btn:hover {
		background: #f6f6f6;
	}

	.paging_box {
		width: 100%;
		// position: fixed;
		// bottom: 40px;
		// right: 0;
		height: 50px;
		line-height: 50px;
		border-top: 1px solid #e7e7e7;
		position: relative;
		margin-top: 15px;

		// z-index: 99;
		.inner {
			font-size: 14px;
			color: #666;
			position: relative;
			top: 0;
			left: 0;
			transform: translate(0, 0);

			.opera {
				margin: 0 20px;

				.item {
					width: 30px;
					height: 30px;
					text-align: center;
					line-height: 30px;
					border-radius: 2px;
					border: 1px solid #d4d4d4;
					margin: 0 5px;

					image {
						width: 15px;
						vertical-align: middle;
					}

					&.btn {
						background: #fff;
					}
				}
			}

			.input {

				.btn,
				input {
					width: 30px;
					height: 30px;
					text-align: center;
					line-height: 30px;
					border-radius: 2px;
					border: 1px solid #d4d4d4;
					margin: 0 5px;
					font-size: 14px;
				}

				.btn {
					width: 60px;
					background: $base-color;
					color: #fff;
					border: 1px solid transparent;
					border-radius: 8px;
				}
			}
		}
	}
</style>