<template>
	<view class="content">
		<customHeader :title="pageName" :showBack="true" :headHeight="headerHeight"></customHeader>
		<view class="cont" :style="{marginTop:marginTop+'px'}">
			<view class="top_area" :style="{top:marginTop+tabMargin+'px'}">
				<!-- <view class="tabs flex flex_btween" :style="{marginTop:tabMargin+'px',marginBottom:tabMargin+'px'}">
					<view class="tab" :style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px'}"
						:class="currentTab==0?'active':'finished'" @click="changeTab(0)">公司信息</view>
					<view class="tab" :style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px'}"
						:class="currentTab==1?'active':'finished'" @click="changeTab(1)">法人信息</view>
					<view class="tab" :style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px'}"
						:class="currentTab==2?'active':''" @click="changeTab(2)">联系人信息</view>
				</view> -->
				<view class="item">
					<view class="title flex flex-start"
						:style="{height:detailTitleHeight+'px',lineHeight:detailTitleHeight+'px'}">
						<image :src="imgUrl+'/broker/ic_title.png'" mode="widthFix"></image>
						<text>公司信息</text>
						<text
							style="margin-left: 30rpx;font-size: 24rpx;color:#f00;">（{{baseStatus.filter(el=>{return el.value == info.broker.review_status})[0].text}}）</text>
					</view>
					<view class="img_wrap">
						<view class="flex flex_btween">
							<view class="upload"
								:style="{width:info.company.human_resources_permit_image.url?'49%':'100%'}">
								<view class="top">
									<image :src="info.company.business_license_image.url" mode="widthFix"
										@click="toPrev">
									</image>
								</view>
								<view class="bot">营业执照</view>
							</view>
							<view class="upload"
								:style="{width:info.company.human_resources_permit_image.url?'49%':'0'}"
								v-if="info.company.human_resources_permit_image.url">
								<view class="top">
									<image :src="info.company.human_resources_permit_image.url" mode="widthFix"
										@click="toPrev">
									</image>
								</view>
								<view class="bot">人力资源许可</view>
							</view>
						</view>

						<view class="info_wrap">
							<view class="line flex flex-start"
								:style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px'}">
								<view class="tit">公司名称：</view>
								<view class="text">{{info.company.name}}</view>
							</view>
							<view class="line flex flex-start"
								:style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px'}">
								<view class="tit">信用代码：</view>
								<view class="text">{{info.company.unified_social_credit_code}}</view>
							</view>
							<view class="line flex flex-start"
								:style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px'}">
								<view class="tit">公司类型：</view>
								<view class="text">{{info.company.type}}</view>
							</view>
							<view class="line flex flex-start"
								:style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px'}">
								<view class="tit">办公地址：</view>
								<view class="text">{{info.company.business_address}}</view>
							</view>
							<view class="line flex flex-start"
								:style="{height:subTabHeight+'px',lineHeight:subTabHeight+'px'}">
								<view class="tit">法人姓名：</view>
								<view class="text">{{info.company.legal_person_name}}</view>
							</view>
						</view>
					</view>
				</view>
				<view class="btn" style="background: rgba(247, 188, 5, 1);color:#fff;"
					v-if="info.broker.review_status == 'rejected'" @click="navigate">重新认证</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	import customHeader from "@/components/custom_header.vue"
	import commonData from "@/common/commonData.js"
	const app = getApp()
	export default {
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
				pageName: "公司信息",
				currentTab: 0,
				marginTop: app.globalData.marginTop,
				subTabHeight: app.globalData.subTabHeight,
				tabMargin: app.globalData.tabMargin,
				detailTitleHeight: app.globalData.detailTitleHeight,
				scrollHeight: 0,
				boxTop: 0,
				headerHeight: app.globalData.topHeight,
				baseStatus: commonData.baseStatus,
				info: {
					business_address: "",
					business_license_image: "",
					legal_person_mobile: "",
					legal_person_name: "",
					logo: "",
					name: "",
					status: "",
					unified_social_credit_code: ""
				}
			}
		},
		components: {
			customHeader
		},
		async onShow() {
			let _this = this
			// this.getMarginTop()
			// setTimeout(function(){
			// 	_this.getElementInfo()
			// 	_this.getTopHeight()
			// },500)
			this.info = await this.getInfo()
		},
		methods: {
			toPrev() {
				let urls = []
				if (this.info.company.business_license_image.url) {
					urls.push(this.info.company.business_license_image.url)
				}
				if (this.info.company.human_resources_permit_image.url) {
					urls.push(this.info.company.human_resources_permit_image.url)
				}
				if (urls.length > 0) {
					uni.previewImage({
						urls: urls
					})
				}

			},
			navigate() {
				uni.navigateTo({
					url: "/subpkg/authentication/authentication"
				})
			},
			changeTab(index) {
				this.currentTab = index
			},
			getMarginTop(e) {
				let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
				this.marginTop = menuButtonInfo.height + menuButtonInfo.top + 10
				this.maskInnerTop = this.marginTop + 20
			},
			getTopHeight() {
				let percent = 200 / 844
				let systemInfo = uni.getSystemInfoSync()
				this.headerHeight = Math.floor(systemInfo.screenHeight * percent)
			},
			getElementInfo() {
				let _this = this
				let topHeight = 0;
				let systemInfo = uni.getSystemInfoSync()
				let tabbarHeight = Math.floor(systemInfo.screenHeight * (46 / 844))
				console.log(tabbarHeight, "tabbar")
				let info = uni.createSelectorQuery().select(".top_area");
				info.boundingClientRect(function(data) { //data - 各种参数
					topHeight = data.bottom - data.top // 获取元素高度
					_this.boxTop = _this.marginTop + data.height
					_this.scrollHeight = systemInfo.screenHeight - _this.boxTop - tabbarHeight - 5
				}).exec()

			},
		}
	}
</script>

<style lang="scss">
	.top_area {
		width: calc(100% - 96rpx);
		position: fixed;
		left: 48rpx;

		.btns {
			margin-top: 60rpx;

			.btn {
				width: 47%;
				height: 88rpx;
				line-height: 88rpx;
				text-align: center;
				background: #FFFFFF;
				box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
				border-radius: 16rpx;
				border: 1px solid #F7BC05;
				font-size: 30rpx;
				color: #F7BC05;

				&.next {
					background: #F7BC05;
					color: #fff;

					&.long {
						width: 100%;
					}
				}
			}
		}

		.tabs {
			background: #FFFFFF;
			box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.15);
			border-radius: 16rpx;
			padding: 0 40rpx;
			box-sizing: border-box;

			.tab {
				font-size: 30rpx;
				color: #9E9E9E;
				text-align: center;
				position: relative;

				&.active {
					font-weight: bold;
					color: #F7BB05;
				}

				&.finished {
					color: #333333;
				}

				&.active::after {
					content: "";
					width: 28rpx;
					height: 10rpx;
					background: url($back-ground-url+"/broker/arrow_down_yellow.png") no-repeat;
					background-size: 100% 100%;
					position: absolute;
					bottom: 8rpx;
					left: 50%;
					transform: translateX(-50%);
				}

				image {
					width: 34rpx;
					height: 32rpx;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
				}
			}
		}

		.item {
			background: #FFFFFF;
			box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.15);
			border-radius: 16rpx;
			overflow: hidden;
			margin-bottom: 40rpx;

			.title {
				height: 80rpx;
				line-height: 80rpx;
				padding: 0 40rpx;
				background: url($back-ground-url+"/broker/bg_title.png") no-repeat;
				background-size: 100% 100%;
				font-size: 30rpx;
				color: #333;

				image {
					width: 32rpx;
					height: 32rpx;
					margin-right: 8rpx;
				}
			}

			.img_wrap {
				padding: 40rpx;
				background: #FFFFFF;
				box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.15);

				.info_wrap {
					margin-top: 30rpx;

					.line {
						font-size: 28rpx;
						border-bottom: 1px dashed #DFDFDF;
						margin-top: 0;

						&:last-child {
							border-bottom: none;
						}

						.tit {
							width: 140rpx;
							color: #5A5A5A;
						}

						.text {
							width: calc(100% - 140rpx);
							color: #333333;
							position: relative;
							white-space: nowrap;
							text-overflow: ellipsis;
							overflow: hidden;
						}
					}
				}

				.upload {
					background: #F5F5F5;
					border-radius: 8rpx;

					.up_item {
						width: 49%;
						background: #F5F5F5;
						border-radius: 8rpx;
					}

					.top {
						text-align: center;
						position: relative;
						padding: 28rpx 0;
						height: 200rpx;
						overflow: hidden;

						&>image {
							width: 100%;
						}
					}

					.bot {
						height: 52rpx;
						line-height: 52rpx;
						background: rgba(247, 188, 5, .1);
						border-radius: 8rpx;
						font-size: 28rpx;
						color: #333;
						text-align: center;
					}
				}
			}
		}
	}
</style>