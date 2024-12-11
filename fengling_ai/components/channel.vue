<template>
	<view class="content_body body_bg" :style="{paddingTop:top+'px',paddingBottom:bottom+'px'}">
		<scroll-view scroll-y="true" :style="{height:scrollHeight+'px'}" @scrolltolower="getMore">
			<view class="item flex flex_btween" v-for="(item,index) in list" :key="index" @click="navigate(item)">
				<view class="left flex flex-start">
					<view class="cover">
						<image :src="item.logo.url?item.logo.url:imgUrl+'/worker/channel_default.png'" mode="widthFix">
						</image>
					</view>
					<view class="info">
						<view class="title">{{item.name}}</view>
						<view class="desc">{{item.content}}</view>
						<view class="desc">@{{item.company_name}}</view>
					</view>
				</view>
				<view class="right flex">
					<u-icon name="chat" size="22" color="#2675F5"></u-icon>
				</view>
			</view>
			<view class="empty" v-if="list.length==0">
				<image :src="imgUrl+'/worker/no_data.png'" mode="widthFix"></image>
			</view>
		</scroll-view>

	</view>
</template>

<script>
	const app = getApp();
	export default {
		name: "welcome",
		props: ["top", "bottom"],
		data() {
			return {
				scrollHeight: 0,
				imgUrl: app.globalData.baseImageUrl,
				currentPage: 1,
				list: [],
				pagination: {}
			};
		},
		async created() {
			this.scrollHeight = app.globalData.systemHeight - this.top - 20
			this.getList()
		},
		methods: {
			navigate(item) {
				let data = JSON.stringify(item)
				uni.navigateTo({
					url: "/pages/channel_chat/channel_chat?channel_info=" + encodeURIComponent(data)
				})
			},
			getList() {
				let url = "/ai/channel/list?page=" + this.currentPage
				this.$request(url).then(res => {
					this.list = this.list.concat(res.data.list)
					this.pagination = res.data.pagination
					let hasData = this.list.length > 0 ? true : false
					this.$emit("handleChannelStatus", hasData)
				})
			},
			getMore() {
				if (this.currentPage < this.pagination.pageCount) {
					this.currentPage++
					this.getList()
				} else {
					uni.showToast({
						title: "已加载全部",
						icon: "none",
						duration: 2000
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.content_body {
		// background: url($back-ground-url+"/worker/new/chat_bg.png") no-repeat;
		// background-size: cover;
		padding: 0 28rpx;
		box-sizing: border-box;

		.item {
			margin-top: 60rpx;

			.right {
				width: 65rpx;
				height: 65rpx;
				text-align: center;
				line-height: 65rpx;
				background: #CDE2FF;
				border-radius: 50%;
				flex-shrink: 0;
				justify-content: center;
			}

			.left {
				// align-items: start;

				.cover {
					margin-right: 15rpx;
					width: 119rpx;
					height: 119rpx;
					overflow: hidden;
					border-radius: 50%;
					flex-shrink: 0;

					image {
						width: 119rpx;
					}
				}

				.info {
					.title {
						font-weight: 500;
						font-size: 31rpx;
						color: #16244F;
						// margin-bottom: 10rpx;
					}

					.desc {
						font-weight: 400;
						font-size: 27rpx;
						color: #8999AF;
						line-height: 38rpx;
						display: -webkit-box;
						-webkit-line-clamp: 1;
						-webkit-box-orient: vertical;
						overflow: hidden;
						text-overflow: ellipsis;
						margin-top: 10rpx;
					}
				}
			}
		}


	}
</style>