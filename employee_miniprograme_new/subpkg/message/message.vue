<template>
	<view class="content">
		<view class="tabs flex flex-start">
			<view class="tab" :class="currentTab==0?'active':''" @click="changeTab(0)">消息</view>
			<view class="tab" :class="currentTab==1?'active':''" @click="changeTab(1)">代办（5）</view>
			<view class="mark">全部已读</view>
		</view>
		<view class="message" v-if="currentTab==0">
			<view class="item" v-for="(item,index) in list" :key="index" @click="toDetail(item.ix)">
				<view class="text">{{item.msg}}</view>
				<view class="time">{{item.time}}</view>
				<view class="status" v-if="!item.status"></view>
			</view>
		</view>
		<view class="message" v-if="currentTab==1">
			<view class="item" v-for="(item,index) in list2" :key="index" @click="toHandle(item.id)">
				<view class="text">{{item.msg}}</view>
				<view class="time">{{item.time}}</view>
				<view class="status" v-if="!item.status"></view>
			</view>
		</view>
		<tabbar current="1"></tabbar>
	</view>
</template>

<script>
	import tabbar from "@/components/tabbar.vue"
	export default {
		data() {
			return {
				currentTab:0,
				list:[
					{
						id:1,
						msg:"十分抱歉，您的报名未审核通过。",
						time:"2024-03-12 09:30:24",
						status:false
					},
					{
						id:2,
						msg:"叮~你本月的工资已到账，请注意查收。",
						time:"2024-03-12 08:30:24",
						status:true
					}
				],
				list2:[
					{
						id:1,
						msg:"您有一条待签约记录，请及时处理。",
						time:"2024-03-12 09:30:24",
						status:false
					}
				]
			}
		},
		components:{
			tabbar
		},
		onLoad() {
		},
		methods: {
			changeTab(index){
				this.currentTab = index
				console.log(this.currentTab)
			},
			toDetail(id){
				uni.navigateTo({
					url:"/subpkg/message_detail/message_detail?id="+id
				})
			},
			toHandle(id){
				uni.navigateTo({
					url:"/subpkg/project_detail/project_detail?id="+id
				})
			}
		}
	}
</script>

<style lang="scss">
	.tabs{
		position: relative;
		.mark{
			position: absolute;
			top:50%;
			right:0;
			transform: translateY(-50%);
			font-size: 28rpx;
			color:$base-color;
		}
	}
	.message{
		font-size: 28rpx;
		.item{
			margin-top:30rpx;
			border-bottom:1px dashed #ccc;
			padding-bottom: 20rpx;
			position: relative;
			.status{
				position: absolute;
				top:50%;
				right:25rpx;
				transform: translateY(-50%);
				width:10rpx;
				height:10rpx;
				border-radius: 50%;
				background:#f00;
			}
			.text{
				margin-right: 10rpx;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			.time{
				color:#999;
				margin-top:10rpx;
			}
		}
		
	}
</style>
