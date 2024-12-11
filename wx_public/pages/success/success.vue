<template>
	<view class="content">
		<view class="board">
			<view class="img">
				<image src="/static/success.png" mode="widthFix"></image>
			</view>
			<view class="text">操作成功！</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.board{
	.img{
		margin-top:160rpx;
		text-align: center;
		image{
			width: 120rpx;
			height:120rpx;
			margin-bottom: 30rpx;
		}
	}
	.text{
		margin-bottom: 160rpx;
		font-size: 30rpx;
		text-align: center;
	}
}
</style>
