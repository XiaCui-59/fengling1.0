<template>
	<view class="invite">
		<!-- 自定义导航 -->
		<u-navbar title="邀请有礼" @rightClick="rightClick" :autoBack="true" bgColor="rgba(66, 74, 78, 0.2)"
			titleStyle="color:#fff;font-size: 31rpx;">
			<view class="u-nav-slot" slot="left">
				<image :src="imgUrl+'/worker/back_white_circle.png'" mode="widthFix" style="width: 58rpx;"></image>
				<!-- <u-icon name="arrow-left" size="19"></u-icon> -->
			</view>
		</u-navbar>
		<view class="cont" :style="{marginTop:marginTop+tabMargin+'px'}">
		</view>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
				marginTop: app.globalData.marginTop,
				tabMargin: app.globalData.tabMargin,
			}
		},
		methods: {
			creatCode(item) {
				// this.currentProject = item
				// this.showMask = true
				// this.showPlatform = true
			},
			async loadimg(type, filePath) {
				var _this = this;
				let header = {
					"Authorization": "bearer " + uni.getStorageSync("token"),
					"accept": "application/json"
				}
				return new Promise((resolve, reject) => {
					uni.uploadFile({
						url: app.globalData.baseUrl + "/admin/upload/image?type=" + type,
						filePath: filePath,
						name: "file",
						header: header,
						success(resp) {
							var response = JSON.parse(resp.data);
							if (response.code == 0) {
								// window.open(response.data.url)
								saveAs(response.data.url, "海报");
							} else {
								uni.showModal({
									title: response.msg,
									showCancel: false
								})
							}
						},
						complete() {
							uni.hideLoading();
						}
					})
					resolve(_this.reponsefiles)
				})
			},
			save() {
				let _this = this
				console.log(this.$refs.painter)
				this.$refs.painter.canvasToTempFilePathSync({
					fileType: "jpg",
					// 如果返回的是base64是无法使用 saveImageToPhotosAlbum，需要设置 pathType为url
					pathType: 'url',
					quality: 1,
					success: (res) => {
						console.log(res.tempFilePath);
						let fileName = _this.currentPlatform.text + _this.currentProject.name + "_" + _this
							.currentProject.code + "_" + "海报"
						saveAs(res.tempFilePath, fileName);
						// _this.loadimg("project_poster", res.tempFilePath)
					},
					fail: (err) => {
						console.log(err, "err")
					}
				})
			},
			async creatHaibao() {
				this.showMask = false
				this.showPlatform = false
				if (this.currentPlatform.value == "system") {
					// 选择系统内工人
					this.showMask = true
					this.showEmployeeSearch = true
				} else {
					uni.showLoading({
						title: "正在生成海报，请稍后..."
					})
					let codeImg = await this.getCode()
					if (codeImg) {
						uni.hideLoading()
						this.showMask = true
						this.showHaibao = true
						await this.viewHaibao(codeImg)
					}
				}
			},
			async getCode() {
				let url = "/admin/project/" + this.currentProject.id + "/qrcode/recruitment"
				let data = {
					"from_platform": this.currentPlatform.value
				}
				let res = await this.$request(url, data, "POST")
				if (res.code == 0) {
					return res.data.qrcode
				}
			},
			async viewHaibao(imgUrl) {
				let _this = this
				console.log(this.currentProject)
				this.poster.views = [{
						type: 'image',
						src: app.globalData.baseImageUrl + '/broker/toc_haibao.png?time=' + new Date()
							.getTime(),
						css: {
							width: '100%',
							margin: '0 auto'
						}
					},
					{
						type: "view",
						css: {
							width: '90%',
							position: 'absolute',
							bottom: '20px',
							left: '50%',
							transform: 'translateX(-50%)',
						},
						views: [{
								type: 'image',
								src: imgUrl,
								css: {
									width: '160px',
									height: "160px",
									borderRadius: "50%",
									display: "inline-block",
								}
							},
							{
								type: 'text',
								text: "扫码报名",
								css: {
									width: '60%',
									display: "inline-block",
									textAlign: 'right',
									lineHeight: "160px",
									color: "#fff",
									fontSize: "40px",
									fontWeight: 'bold'
								}
							},
						]
					},
					{
						type: 'text',
						text: this.currentProject.name,
						css: {
							// 设置居中对齐
							width: "30%",
							position: 'absolute',
							top: '35%',
							left: '60%',
							fontSize: "32px",
							color: "#000000",
							lineClamp: 2,
							fontWeight: "bold"
						}
					},
					{
						type: 'view',
						css: {
							// 设置居中对齐
							width: "80%",
							textAlign: 'left',
							position: 'absolute',
							top: '57%',
							left: '50%',
							transform: 'translateX(-50%)',
							lineHeight: '60px',
							lineClamp: 1,
						},
						views: [{
								type: "view",
								css: {
									width: "100%",
									display: "block",
									borderBottom: "1px dashed #FFAC3F"
								},
								views: [{
										type: "text",
										text: "工作名称：",
										css: {
											lineClamp: 1,
											display: "inline-block",
											color: "#3D3D3D",
											fontSize: "28px",
											marginRight: "8px",
										}
									},
									{
										type: "text",
										text: _this.currentProject.name,
										css: {
											lineClamp: 1,
											display: "inline-block",
											color: "#000",
											fontSize: "32px",
										}
									}
								]
							},
							{
								type: "view",
								css: {
									display: "block",
									borderBottom: "1px dashed #FFAC3F"
								},
								views: [{
										type: "text",
										text: "工作酬劳：",
										css: {
											display: "inline-block",
											color: "#3D3D3D",
											fontSize: "28px",
											marginRight: "8px",
										}
									},
									{
										type: "text",
										text: _this.currentProject.worker_salary_min + "-" + _this
											.currentProject.worker_salary_max + "/元" + _this.periodList
											.filter(el => {
												return el.value == _this.currentProject
													.worker_salary_type
											})[0].text,
										css: {
											display: "inline-block",
											color: "#FF4800",
											fontSize: "36px",
											fontWeight: "bold",
										}
									}
								]
							},
						]
					},

				]
			}
		}
	}
</script>

<style lang="scss">
	.invite {
		height: 100vh;
		background: $base-bgcolor;
		color: #fff;
	}
</style>