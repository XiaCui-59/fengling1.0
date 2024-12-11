<template>
	<view class="moreinfo">
		<view class="text" :style="{display:cssDisplay}">{{moreInfo}}</view>
		<view class="show_more flex flex-end" @click="showMore" v-if="showMoreBtn">查看更多<image src="/static/show_more.png"></image> </view>
	</view>
</template>

<script>
	export default {
		props:["moreInfo"],
		name:"moreinfo",
		data() {
			return {
				showMoreBtn:true,
				cssDisplay:"-webkit-box",
			};
		},
		methods:{
			showMore(){
				this.cssDisplay = "block"
				this.showMoreBtn = false
			},
		}
	}
</script>

<style lang="scss">
.moreinfo{
			margin-top:30rpx;
			border-radius: 10rpx;
			box-sizing: border-box;
			font-size: 30rpx;
			line-height: 56rpx;
			.text{
				display: -webkit-box; /* 必须指定display属性 */
				overflow: hidden; /* 超出部分进行隐藏 */
				text-overflow: ellipsis; /* 当内容被修剪时显示省略号 */
				-webkit-line-clamp: 4; /* 最大显示行数 */
				-webkit-box-orient: vertical; /* 垂直布局 */
			}
			.show_more{
				color:$base-color;
				image{
					width:30rpx;
					height:30rpx;
					vertical-align: middle;
				}
			}
		}
</style>