<template>
	<view class="content">
		<view class="list">
			<view class="item" v-for="(item,index) in list" :key="index">
				<view class="top">合同编号：NO.{{item.code}} <text>详情</text></view>
				<view class="info">
					<view class="line flex flex-start">
						<view class="tit">工作名称</view>
						<view class="text">{{item.work_name}}</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">开始时间</view>
						<view class="text">{{item.work_start_time}}</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">结束时间</view>
						<view class="text">{{item.work_end_time}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="empty" v-if="list.length == 0">
			<!-- <image src="../../static/blank@2x.png" mode="widthFix"></image> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentPage:1,
				list:[
					{
						code:"97237463875",
						work_name:"希尔顿招临时保安",
						work_start_time:"2024-03-12 09:00",
						work_end_time:"2024-04-12 09:00"
					},{
						code:"97237463875",
						work_name:"希尔顿招临时保安",
						work_start_time:"2024-03-12 09:00",
						work_end_time:"2024-04-12 09:00"
					}
				]
			}
		},
		onLoad() {
			// this.getList()
		},
		methods: {
			navigateTo(url){
				uni.navigateTo({
					url:url
				})
			},
			getList(){
				let url = "/worker/contracts/fulfilled?page="+this.currentPage
				this.$request(url).then(res => {
					if(res.code == 0){
						if(JSON.stringify(this.list) != JSON.stringify(res.data.list)){
							this.list = this.list.concat(res.data.list)
						}
					}else{
						uni.showModal({
							title:res.msg
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
.content{
	background: #f8f8f8;
	.list{
		.item{
			margin-bottom:30rpx;
			padding:20rpx;
			background: #fff;
			border-radius: 20rpx;
			color:#0f0f0f;
			font-size: 30rpx;
			.top{
				padding:20rpx;
				border-bottom:1px dashed #eee;
				position: relative;
				&:before{
					content:"";
					width:2px;
					height:30rpx;
					background: #279CF4;
					position: absolute;
					left:0;
					top:50%;
					transform: translateY(-50%);
				}
				text{
					position: absolute;
					top:50%;
					right:0;
					transform: translateY(-50%);
					color:$base-color;
					font-size: 28rpx;
				}
			}
			.info{
				.line{
					margin:20rpx 0;
					.tit{
						width: 160rpx;
					}
					.text{
						width: calc(100% - 160rpx);
						color:#666;
						font-size: 30rpx;
					}
				}
			}
			.btns{
				margin-top:40rpx;
				.btn{
					width:160rpx;
					height:54rpx;
					line-height: 54rpx;
					text-align: center;
					border-radius: 170rpx;
					border:1px solid #dedede;
					margin-left: 20rpx;
					font-size: 26rpx;
				}
			}
		}
	}
}
</style>
