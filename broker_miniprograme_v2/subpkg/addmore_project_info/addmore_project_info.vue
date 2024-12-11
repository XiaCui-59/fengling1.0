<template>
	<view class="add_more">
		<customHeader :title="pageName" :showBack="true" :headHeight="headerHeight" @handleBack="getInfo">
		</customHeader>
		<view class="inner" :style="{top:marginTop+tabMargin+'px'}">
			<scroll-view scroll-y="true" class="scroll_box" :style="{height:scrollHeight+'px'}">
				<!-- <tagSelect :tagsObj="tagsObj" @cancel="cancel" @handleBenefit="handleBenefit" @handleInfo="handleInfo"
					:selectBenefit="currentBenefit" :benefitIds="currentBenefitIds" :selectInfo="currentSelectInfo"
					:infoIds="currentInfoIds" v-if="showTag">
				</tagSelect> -->
				<view class="up_box">
					<view class="title">面试联系人</view>
					<view class="input_wrap flex flex_btween">
						<input v-model="interviewer" placeholder="请输入面试联系人" placeholder-style="font-size:28rpx;"
							maxlength="15" />
					</view>
				</view>
				<view class="up_box">
					<view class="title">联系人电话</view>
					<view class="input_wrap flex flex_btween">
						<input v-model="interviewerMobile" placeholder="请输入联系人电话" placeholder-style="font-size:28rpx;"
							maxlength="15" />
					</view>
				</view>
				<!-- 上传视频 -->
				<view class="up_box up_video">
					<view class="title">上传视频</view>
					<view class="up_area">
						<htz-image-upload :max="1" v-model="videoData" @chooseSuccess="uploadVideo"
							:mediaType="'video'"></htz-image-upload>
						<!-- <uni-file-picker v-model="videoValue" fileMediatype="video" :limit="1" mode="grid"
							@select="selectVideo" @progress="progressVideo" @success="successVideo" @fail="failImage" /> -->
					</view>
				</view>
				<view class="up_box up_image" :style="{paddingBottom:subTabHeight+btnBottom+tabMargin+'px'}">
					<view class="title">上传图片</view>
					<view class="up_area">
						<htz-image-upload :max="5" v-model="imageData" @chooseSuccess="uploadImage" :mediaType="'image'"
							@imgDelete="imgDelete" :dataType="1"></htz-image-upload>
						<!-- <uni-file-picker v-model="imageValue" fileMediatype="image" :limit="5" mode="grid"
							@select="selectImage" @progress="progressImage" @success="successImage" @fail="failImage" /> -->
					</view>
				</view>
			</scroll-view>
			<view class="btns flex flex_btween" :style="{paddingBottom:btnBottom+'px'}">
				<view class="btn cancel" :style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px'}"
					@click="getInfo">
					跳过</view>
				<view class="btn" :style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px'}" @click="save">
					保存</view>
			</view>

		</view>
		<customModal title="提示" content="请设置结算费用" cancelText="前往职位列表" confirmText="去设置" v-if="showModal"
			@confirm="handleConfirm" @cancel="handleCancel"></customModal>
	</view>
</template>

<script>
	import tagSelect from "@/components/tag_select.vue"
	import htzImageUpload from '@/components/htz-image-upload/htz-image-upload.vue'
	import customHeader from "@/components/custom_header.vue"
	const app = getApp()
	export default {
		data() {
			return {
				interviewerMobile: "",
				interviewer: "",
				showModal: false,
				pageName: "完善职位信息",
				headerHeight: app.globalData.topHeight,
				subTabHeight: app.globalData.subTabHeight,
				tabMargin: app.globalData.tabMargin,
				marginTop: app.globalData.marginTop,
				btnBottom: app.globalData.btnBottom,
				welfareArr: [],
				welIds: [],
				welfare: "",
				workArr: [],
				workIds: [],
				work_info: "",
				currentBenefit: [],
				currentTagType: "",
				currentBenefitIds: [],
				currentSelectInfo: [],
				currentInfoIds: [],
				showTag: false,
				tagsObj: {},
				scrollHeight: 0,
				videoValue: [],
				imageValue: [],
				videoData: [],
				videoKeys: [{
					key: "",
					url: ""
				}],
				imageKeys: [],
				imageData: [],
				id: ""
			}
		},
		components: {
			tagSelect,
			customHeader,
			htzImageUpload
		},
		async onLoad(param) {
			this.id = param.id
			this.scrollHeight = app.globalData.systemHeight - this.marginTop -
				this.tabMargin
			// this.getTagsList()
			let info = await this.loadInfo()
			// this.currentSelectInfo = info.job_info
			// this.currentBenefit = info.job_benefits
			// for (let i = 0; i < info.job_info.length; i++) {
			// 	this.currentInfoIds.push(info.job_info[i].id)
			// }
			// for (let j = 0; j < info.job_benefits.length; j++) {
			// 	this.currentBenefitIds.push(info.job_benefits[j].id)
			// }
			// this.showTag = true
			for (let k = 0; k < info.images.length; k++) {
				let obj = {
					type: 0,
					url: info.images[k].url,
					index: k
				}
				this.imageData.push(obj)
				this.imageKeys = info.images
			}
			for (let m = 0; m < info.videos.length; m++) {
				this.videoData.push(info.videos[m].url)
				this.videoKeys[0].key = info.videos[0].key
				this.videoKeys[0].url = info.videos[0].url
			}
			this.interviewer = info.interview_contact_name
			this.interviewerMobile = info.interview_contact_mobile
			console.log(this.currentInfoIds, this.currentBenefitIds)
		},
		methods: {
			// getTagsList() {
			// 	this.$request("/broker/mini/tags/project-edit").then(res => {
			// 		if (res.code == 0) {
			// 			this.tagsObj = res.data
			// 		}
			// 	})
			// },
			handleCancel() {
				uni.switchTab({
					url: "/pages/index/index"
				})
			},
			handleConfirm() {
				uni.redirectTo({
					url: "/subpkg/set_fee/set_fee?id=" + this.id
				})
			},
			uploadVideo(e) {
				this.videoData = e
				this.loadimg("project_video", e[0])
				console.log(e)
			},
			uploadImage(e) {
				console.log(e)
				let len = e.length
				for (let i = 0; i < len; i++) {
					let obj = {
						type: 0,
						url: e[i],
						index: this.imageKeys.length
					}
					this.loadimg("project_image", e[i])
					this.imageData.push(obj)
				}
				// this.imageData = this.imageData.concat(e)
			},
			imgDelete(e) {
				console.log(e.del.index)

				if (e.del.index < this.imageKeys.length) {
					// this.imageData.splice(e.del.index, 1)
					this.imageKeys.splice(e.del.index, 1)
				} else if (e.del.index == this.imageKeys.length) {
					// this.imageData.splice(e.del.index - 1, 1)
					this.imageKeys.splice(e.del.index - 1, 1)
				}

			},
			// handleBenefit(e) {
			// 	console.log("福利", e)
			// 	this.currentBenefitIds = e.ids
			// 	this.currentBenefit = e.objarr
			// },
			// handleInfo(e) {
			// 	console.log("信息", e)
			// 	this.currentInfoIds = e.ids
			// 	this.currentSelectInfo = e.objarr
			// },
			async loadimg(type, filePath) {
				var _this = this;
				let header = {
					"Authorization": "bearer " + uni.getStorageSync("token"),
					"accept": "application/json",
					// "content-type": "multipart/form-data"
				}
				return new Promise((resolve, reject) => {
					uni.uploadFile({
						url: app.globalData.baseUrl + "/broker/upload?type=" + type,
						filePath: filePath,
						name: 'file',
						header: header,
						success(resp) {
							var response = JSON.parse(resp.data);
							if (response.code == 0) {
								if (type == "project_video") {
									_this.$set(_this.videoKeys[0], "key", response.data.key)
									_this.$set(_this.videoKeys[0], "url", response.data.url)
									// _this.videoKeys[0] = response.data
								}
								if (type == "project_image") {
									_this.imageKeys.push(response.data)
								}
								console.log(_this.videoKeys, _this.imageKeys)
							} else {
								uni.showModal({
									title: "上传失败",
									content: response.msg
								})
							}
						},
						complete() {
							// uni.hideLoading();
						}
					})
				})
			},
			loadInfo() {
				let _this = this
				return new Promise(resolve => {
					let url = "/broker/mini/project/" + _this.id + "/info"
					_this.$request(url).then(res => {
						if (res.code == 0) {
							resolve(res.data)
						}
					})
				})


			},
			getInfo() {
				let url = "/broker/mini/project/" + this.id + "/info"
				this.$request(url).then(res => {
					if (res.code == 0) {
						uni.switchTab({
							url: "/pages/index/index"
						})
						// if (res.data.platform_fee_price == "0" || !res.data.platform_fee_price) {
						// 	// 未设置佣金
						// 	this.showModal = true
						// } else {

						// }
					}
				})
			},
			save() {
				console.log(this.videoKeys, this.imageKeys, "savevie")
				let data = {
					"interview_contact_name": this.interviewer,
					"interview_contact_mobile": this.interviewerMobile,
					// "job_benefits": this.currentBenefitIds,
					// "job_info": this.currentInfoIds,
					"videos": this.videoKeys,
					"images": this.imageKeys
				}
				let url = "/broker/mini/project/" + this.id + "/option-fields"
				this.$request(url, data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: "保存成功",
							duration: 3000
						})
						this.getInfo()
					}
				})

			}
		}
	}
</script>

<style lang="scss">
	::v-deep {
		.up_video .htz-image-upload-Item {
			width: 100%;
			height: 346rpx;
			background: #F9F9F9;
			border-radius: 8rpx;
			border: 2rpx dashed #D5D5D5;
		}

		.up_image .htz-image-upload-Item {
			width: 45%;
			height: 231rpx;
			background: #F9F9F9;
			border-radius: 8rpx;
			border: 2rpx dashed #D5D5D5;
		}

		// button[size=mini],
		// button[type=primary] {
		// 	width: 100%;
		// 	height: 346rpx;
		// 	background: #F9F9F9;
		// 	border-radius: 8rpx;
		// 	border: 2rpx solid #D5D5D5;
		// 	background-color: #F9F9F9;
		// }
	}

	.inner {
		position: fixed;
		width: calc(100% - 92rpx);
		height: 100vh;
		left: 46rpx;
		z-index: 99;

		.scroll_box {
			background: #fff;
			box-shadow: 0rpx 2rpx 6rpx 0rpx rgba(0, 0, 0, 0.15);
			border-radius: 16rpx;
			overflow: hidden;
			padding: 38rpx;
			box-sizing: border-box;

		}

		.up_box {
			margin-top: 20rpx;

			.title {
				font-weight: 400;
				font-size: 27rpx;
				color: #5A5A5A;
				line-height: 38rpx;
			}

			.input_wrap {
				width: 100%;
				height: 88rpx;
				background: #F9F9F9;
				border-radius: 4px;
				border-bottom: none;
				margin-top: 16rpx;

				input {
					width: 100%;
					height: 100%;
					font-size: 28rpx;
					padding: 0 10rpx;
					box-sizing: border-box;
				}
			}
		}

		.btns {
			position: fixed;
			width: 100%;
			left: 0rpx;
			bottom: 0;
			z-index: 100;
			padding: 0 46rpx;
			box-sizing: border-box;
			background: #fff;

			.btn {
				width: 48%;
				margin-top: 0;
				background: #F7BC05;
				border: 1px solid #F7BC05;
				box-shadow: 0rpx 2rpx 4rpx 0rpx rgba(0, 0, 0, 0.15);
				border-radius: 15rpx;
				font-weight: 600;
				font-size: 29rpx;
				color: #FFFFFF;
				margin-bottom: 0;

				&.cancel {
					background: #fff;
					color: #666;
					border: 1px solid #ccc;
				}
			}
		}

	}
</style>