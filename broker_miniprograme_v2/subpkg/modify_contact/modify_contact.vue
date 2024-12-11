<template>
	<view class="content">
		<view class="box">
			<view class="line flex flex-start">
				<view class="tit">姓名</view>
				<view class="input_wrap">
					<input type="text" v-model="name" placeholder="请输入联系人姓名"/>
				</view>
			</view>
			<view class="line flex flex-start">
				<view class="tit">手机号码</view>
				<view class="input_wrap">
					<input type="text" v-model="mobile" placeholder="请输入联系人手机号码"/>
				</view>
			</view>
			<view class="btn">确认修改</view>
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
.box{
	background: #fff;
	padding:20rpx;
	border-radius: 10rpx;
	
}
</style>
