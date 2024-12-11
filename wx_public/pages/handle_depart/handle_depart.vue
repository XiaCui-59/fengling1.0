<template>
	<view class="content">
		<view class="board">
			<view class="title">离职申请审批</view>
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
			<!-- 雇工列表 -->
			<uni-table stripe emptyText="暂无更多数据" style="width: 100%;">
				<uni-tr>
					<uni-th align="left">姓名</uni-th>
					<uni-th align="left">身份证号码</uni-th>
					<uni-th align="left">手机号</uni-th>
					<uni-th align="left">来源</uni-th>
					<uni-th align="left">入职时间</uni-th>
				</uni-tr>
				<uni-tr v-for="(item,index) in list" :key="index">
					<uni-td>{{item.worker_name}}</uni-td>
					<uni-td>{{item.price+insurePeriod.filter(el => { return el.value == item.buy_type})[0].text}}</uni-td>
					<uni-td>{{item.real_pay_money}}</uni-td>
					<uni-td>{{item.coverage_start_time+"-"+item.coverage_end_time}}</uni-td>
					<uni-td>{{item.real_pay_money}}</uni-td>
				</uni-tr>
			</uni-table>
			<view class="reject_box" v-if="showReason">
				<view class="tit">拒绝理由</view>
				<view class="reason">
					<textarea v-model="reason" placeholder="请输入拒绝理由" placeholder-style="font-size:26rpx;"/>
				</view>
			</view>
			<view class="btns flex flex_btween" v-if="batch.status == 'wait_approve'">
				<view class="btn refuse" @click="('rejected')">拒绝</view>
				<view class="btn pass" @click="bindAgree('approved')">通过</view>
			</view>
			<view class="btns tips" v-if="batch.status == 'reject'">该审批信息已拒绝</view>
			<!-- <view class="btns tips" v-if="batch.status == 'project_manager_expired'">该审批信息未处理，已过期</view>
			<view class="btns tips" v-if="manager_type =='project_manager' && (batch.status == 'finance_manager_rejected' || batch.status == 'finance_manager_expired' || batch.status == 'approved')">该审批信息您已通过</view>
			<view class="btns tips" v-if="manager_type =='financial_manager' && batch.status == 'finance_manager_rejected'">该审批信息已拒绝</view>
			<view class="btns tips" v-if="manager_type =='financial_manager' && batch.status == 'finance_manager_expired'">该审批信息未处理，已过期</view> -->
			<view class="btns tips" v-if="batch.status == 'approved'">该审批信息您已通过</view>
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
				showReason:false,
				reason:"",
				currentPage:1,
				list:[],
				insurePeriod:[
					{
						value:"by_month",
						text:"/月"
					},
					{
						value:"by_day",
						text:"/天"
					}
				],
				token:"",
				manager_type:"",
				pagination:{},
				batch:{
					status:""
				}
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
					if(paramArr[i].indexOf("manager_type") != -1){
						// 存在id
						this.manager_type = paramArr[i].split("=")[1]
					}
				}
			}
		},
		methods: {
			getInfo(){
				let url = "/wechatweb/depart-review/detail?manager_type="+this.manager_type+"&token="+this.token+"&page="+this.currentPage
				this.$request(url).then(res => {
					if(res.code == 0){
						this.projectInfo = res.data
						this.list = res.data.details
						this.batch.status = res.data.status
					}else{
						uni.showModal({
							title:res.msg
						})
					}
				})
			},
			bindAgree(type){
				if(type == "rejected"){
					if(this.showReason){
						if(!this.reason){
							uni.showModal({
								title:"请填写拒绝理由",
								showCancel:false
							})
							return 
						}
					}else{
						this.showReason = true
						return
					}
					
				}
				let data = {
					"token":this.token,
					"manager_type": this.manager_type,
					"operate":type,
					"reason":this.reason
				}
				let url = "/wechatweb/depart-review/review"
				this.$request(url,data,"POST").then(res => {
					if(res.code == 0){
						uni.showToast({
							title:"处理成功",
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

<style lang="scss">
	.board{
		height: calc(100vh - 150rpx);
		.btns{
			position: fixed;
			width: 100%;
			padding:0 30rpx;
			bottom:20rpx;
			left:0;
			box-sizing: border-box;
			&.tips{
				text-align: center;
				color:#0092ff;
				font-weight: 600;
			}
			.btn{
				width:40%;
				&.refuse{
					background: transparent;
					color:#f00;
					border:1px solid #f00;
				}
			}
		}
		.reject_box{
			textarea{
				display: block;
				width: 100%;
				padding:20rpx;
				border:1px solid #ccc;
				border-radius: 10rpx;
				box-sizing: border-box;
				margin-top:20rpx;
				height:160rpx;
			}
		}
	}
</style>
