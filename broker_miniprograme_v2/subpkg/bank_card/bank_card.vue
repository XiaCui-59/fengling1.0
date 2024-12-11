<template>
	<view class="content">
		<!-- 未添加 -->
		<view class="box" v-if="!hasBank">
			<view class="title">添加银行卡</view>
			<view class="item">
				<view class="line flex flex-start">
					<view class="tit">银行卡号</view>
					<view class="input_wrap">
						<input type="text" v-model="bank_num" placeholder="请输入银行卡号"/>
					</view>
				</view>
				<view class="line flex flex-start">
					<view class="tit">银行名称</view>
					<view class="input_wrap">
						<input type="text" v-model="bank_name" placeholder="请输入开户行名称"/>
					</view>
				</view>
				<view class="line flex flex-start">
					<view class="tit">姓名</view>
					<view class="input_wrap">
						<input type="text" v-model="name" placeholder="请输入开户人姓名"/>
					</view>
				</view>
				<view class="btn">确认提交</view>
			</view>
		</view>
		<!-- 已添加 -->
		<view class="box" v-if="hasBank">
			<view class="title">当前银行卡</view>
			<view class="item">
				<view class="line flex flex-start">
					<view class="tit">银行卡号</view>
					<view class="input_wrap noborder">61422421216586232324</view>
				</view>
				<view class="line flex flex-start">
					<view class="tit">银行名称</view>
					<view class="input_wrap noborder">中国农业银行龙泉驿支行</view>
				</view>
				<view class="line flex flex-start">
					<view class="tit">姓名</view>
					<view class="input_wrap noborder">夏天</view>
				</view>
				<view class="btn">修改</view>
			</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		data() {
			return {
				imgUrl:app.globalData.baseImageUrl,
				hasBank:true
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.line{
		margin-top:30rpx;
	}
.input_wrap{
	width:calc(100% - 170rpx);
	border-bottom:1px solid #ddd;
	&.noborder{
		border-bottom: none;
	}
}
.btn{
	width:100%;
	height:76rpx;
	line-height:76rpx;
	text-align: center;
	border-radius: 70rpx;
	background: $base-color;
	color:#fff;
	margin-top:50rpx;
	margin-bottom: 30rpx;
}
</style>
