<template>
	<view class="tags">
		<view class="tags_box">
			<view class="title" style="margin-bottom: 30rpx;">工作福利<text>（多选）</text>
			</view>
			<view class="item_wrap">
				<view class="item">
					<view class="tag_container flex flex-start">
						<view class="tag" v-for="(tag,index1) in tagsObj.job_benefits" :key="tag.id"
							:class="beneIds.indexOf(tag.id) != -1?'active':''" @click="chooseBenifitTag(tag)">
							{{tag.name}}
							<image :src="imgUrl+'/broker/ic_right_checked.png'" mode="widthFix"
								v-if="beneIds.indexOf(tag.id) != -1"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="tags_box">
			<view class="title">工作信息<text>（多选）</text>
			</view>
			<view class="item_wrap">
				<view class="item" v-for="(item,index) in tagsObj.job_info" :key="index">
					<view class="tit">{{item.category}}</view>
					<view class="tag_container flex flex-start">
						<view class="tag" v-for="(tag,index1) in item.tags" :key="index1"
							:class="inIds.indexOf(tag.id) != -1?'active':''" @click="chooseInfoTag(tag)">
							{{tag.name}}
							<image :src="imgUrl+'/broker/ic_right_checked.png'" mode="widthFix"
								v-if="inIds.indexOf(tag.id) != -1"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		name: "tags_select",
		props: ["tagsObj", "title", "selectBenefit", 'benefitIds', "selectInfo", "infoIds"],
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
				selectBene: [],
				beneIds: [],
				selectIn: [],
				inIds: [],
			}
		},

		created() {

		},
		mounted() {
			this.selectBene = this.selectBenefit
			this.beneIds = this.benefitIds
			this.selectIn = this.selectInfo
			this.inIds = this.infoIds
			console.log(this.inIds, this.beneIds, "create")
		},
		methods: {
			fo(item) {
				console.log(item, "item")
			},
			chooseBenifitTag(tag) {
				if (this.beneIds.indexOf(tag.id) != -1) {
					// 已经选过了，再次点击取消选择
					this.selectBene.splice(this.beneIds.indexOf(tag.id), 1)
					this.beneIds.splice(this.beneIds.indexOf(tag.id), 1)

				} else {
					this.selectBene.push(tag)
					this.beneIds.push(tag.id)

				}
				let obj = {
					objarr: this.selectBene,
					ids: this.beneIds
				}
				this.$emit("handleBenefit", obj)
			},
			chooseInfoTag(tag) {
				if (this.inIds.indexOf(tag.id) != -1) {
					// 已经选过了，再次点击取消选择
					this.selectIn.splice(this.inIds.indexOf(tag.id), 1)
					this.inIds.splice(this.inIds.indexOf(tag.id), 1)

				} else {
					this.selectIn.push(tag)
					this.inIds.push(tag.id)

				}
				let obj = {
					objarr: this.selectIn,
					ids: this.inIds
				}
				this.$emit("handleInfo", obj)
			},
		}
	}
</script>

<style lang="scss">
	.tags {
		.tags_box {
			width: 100%;
			background: #fff;

			.title {
				font-weight: 600;
				position: relative;
				margin-bottom: 50rpx;

				text {
					font-weight: 400;
					font-size: 27rpx;
					color: #A8A8A8;
				}

				.close {
					position: absolute;
					top: 50%;
					right: 0px;
					transform: translateY(-50%);
					cursor: pointer;

					image {
						width: 42rpx;
						height: 42rpx;
					}
				}
			}

			.btns {
				.btn {
					width: 100%;
					height: 86rpx;
					line-height: 86rpx;
					text-align: center;
					background: #F7BC05;
					box-shadow: 0 2rpx 4rpx 0 rgba(0, 0, 0, .15);
					color: #fff;
					border-radius: 15rpx;
					font-size: 29rpx;
					font-weight: 600;
				}

			}

			.item_wrap {
				font-size: 14px;

				.item {
					margin-bottom: 64rpx;

					.tit {
						font-weight: 600;
					}

					.tag_container {
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
								border: 2rpx solid #EA9900;
								color: #EA9900;
							}
						}
					}
				}
			}
		}

	}
</style>