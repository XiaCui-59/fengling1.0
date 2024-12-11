<template>
	<view class="content">
		<view class="board">
			<view class="title flex flex_btween">
				<text>{{type == "project_manager"?"项目经理绑定":"财务经理绑定"}}</text>
				<text v-if="type == 'project_manager' &&　projectInfo.project_manager_bind" class="status">已绑定</text>
				<text v-if="type == 'financial_manager' &&　projectInfo.financial_manager_bind" class="status">已绑定</text>
			</view>
			<view class="wrap">
				<view class="line flex flex_start">
					<view class="tit">项目名称</view>
					<view class="text">{{projectInfo.name}}</view>
				</view>
				<view class="line flex flex_start">
					<view class="tit">雇主名称</view>
					<view class="text">{{projectInfo.employer_name}}</view>
				</view>
				<view class="line flex flex_start">
					<view class="tit">项目内容</view>
					<view class="text">{{projectInfo.content}}</view>
				</view>
				<view class="line flex flex_start">
					<view class="tit">项目地址</view>
					<view class="text">{{projectInfo.work_address}}</view>
				</view>
				<view class="line flex flex_start">
					<view class="tit">服务时间</view>
					<view class="text">{{projectInfo.work_start_time}} ~ {{projectInfo.work_end_time}}</view>
				</view>
			</view>
			<view class="btn" @click="bindAgree" v-if="type == 'project_manager' &&　!projectInfo.project_manager_bind">同意绑定为项目负责人</view>
			<view class="btn" @click="bindAgree" v-if="type == 'financial_manager' &&　!projectInfo.financial_manager_bind">同意绑定为财务负责人</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				projectInfo:{
					"content": "",
					"employer_name": "",
					"name": "",
					"work_address": "",
					"work_end_time": "",
					"work_start_time": ""
				},
				token:"",
				type:""
			}
		},
		onLoad() {
			let href = location.href.split("?")
			if(href.length > 1){
				// 有参数
				let paramArr = href[1].split("&")
				let len = paramArr.length
				for(var i=0;i<len;i++){
					if(paramArr[i].indexOf("token") != -1){
						// 存在id
						this.token = paramArr[i].split("=")[1]
						this.getInfo()
					}
					if(paramArr[i].indexOf("bind_type") != -1){
						// 存在id
						this.type = paramArr[i].split("=")[1]
					}
				}
			}
		},
		methods: {
			getInfo(){
				let url = "/wechatweb/wechat-bind/project/detail?token="+this.token
				this.$request(url).then(res => {
					if(res.code == 0){
						this.projectInfo = res.data
					}else{
						uni.showModal({
							title:res.msg
						})
					}
				})
			},
			bindAgree(){
				let url = "/wechatweb/wechat-bind/project/responsible-person?token="+this.token
				this.$request(url,{},"POST").then(res => {
					if(res.code == 0){
						uni.showToast({
							title:"绑定成功",
							duration:2000
						})
						uni.redirectTo({
							url:"/pages/success/success"
						})
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

<style>
</style>
