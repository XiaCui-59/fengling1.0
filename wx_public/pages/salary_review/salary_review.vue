<template>
	<view class="content">
		<view class="board">
			<view class="title">项目工资单审批</view>
			<view class="wrap">
				<view class="line flex flex_start">
					<view class="tit">工资单号</view>
					<view class="text">{{projectInfo.salary_code}}</view>
				</view>
				<view class="line flex flex_start">
					<view class="tit">项目名称</view>
					<view class="text">{{projectInfo.project_name}}</view>
				</view>
				<view class="line flex flex_start">
					<view class="tit">雇主名称</view>
					<view class="text">{{projectInfo.employer_name}}</view>
				</view>
			<!-- 	<view class="line flex flex_start">
					<view class="tit">结算方式</view>
					<view class="text">{{projectInfo.employer_name}}</view>
				</view> -->
				<view class="line flex flex_start">
					<view class="tit">服务时间</view>
					<view class="text">{{projectInfo.work_start_time}} ~ {{projectInfo.work_end_time}}</view>
				</view>
			</view>
			<view class="tips">人数：{{projectInfo.worker_count}}人，应发：{{projectInfo.need_pay_salary}}元，实发：{{projectInfo.real_pay_salary}}元</view>
			<!-- 雇工列表 -->
			<uni-table stripe emptyText="暂无更多数据">
				<uni-tr>
					<uni-th align="left">姓名</uni-th>
					<uni-th align="left">身份证号</uni-th>
					<uni-th align="left">手机号</uni-th>
					<uni-th align="left">工作时长</uni-th>
					<uni-th align="left">应发工资</uni-th>
					<uni-th align="left">实发工资</uni-th>
				</uni-tr>
				<uni-tr v-for="(item,index) in list" :key="index">
					<uni-td>{{item.worker_name}}</uni-td>
					<uni-td>{{item.worker_id_card_number}}</uni-td>
					<uni-td>{{item.worker_mobile}}</uni-td>
					<uni-td>{{item.working_time}}</uni-td>
					<uni-td>{{item.need_pay_salary}}</uni-td>
					<uni-td>{{item.real_pay_salary}}</uni-td>
				</uni-tr>
			</uni-table>
			<view class="reject_box" v-if="showReason">
				<view class="tit">拒绝理由</view>
				<view class="reason">
					<textarea v-model="reason" placeholder="请输入拒绝理由" placeholder-style="font-size:26rpx;"/>
				</view>
			</view>
			<view class="btns flex flex_btween" v-if="(manager_type =='project_manager' && batch.status == 'submit') || (manager_type =='financial_manager' && batch.status == 'manager_approved')">
				<view class="btn refuse" @click="bindAgree('rejected')">拒绝</view>
				<view class="btn pass" @click="bindAgree('approved')">通过</view>
			</view>
			<view class="btns tips" v-if="manager_type =='project_manager'　&& batch.status == 'manager_rejected'">该审批信息已拒绝</view>
			<view class="btns tips" v-if="batch.status == 'project_manager_expired'">该审批信息未处理，已过期</view>
			<view class="btns tips" v-if="manager_type =='project_manager' && batch.status == 'manager_approved'">该审批信息您已通过</view>
			<view class="btns tips" v-if="manager_type =='financial_manager' && batch.status == 'finance_rejected'">该审批信息已拒绝</view>
			<view class="btns tips" v-if="manager_type =='financial_manager' && batch.status == 'finance_manager_expired'">该审批信息未处理，已过期</view>
			<view class="btns tips" v-if="batch.status == 'finance_approved'">该审批信息您已通过</view>
			<view class="btns tips" v-if="batch.status == 'success'">该批工资已发薪</view>
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
		// onReachBottom() {
		// 	if(this.list.length < this.pagination.totalCount){
		// 		this.currentPage++
		// 		this.getInfo()
		// 	}else{
		// 		uni.showToast({
		// 			title:"已全部加载",
		// 			icon:"none",
		// 			duration:2000
		// 		})
		// 	}
		// },
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
				let url = "/wechatweb/salary-review/detail?manager_type="+this.manager_type+"&token="+this.token+"&page="+this.currentPage
				this.$request(url).then(res => {
					if(res.code == 0){
						this.projectInfo = res.data
						this.list = res.data.details
						this.batch.status = res.data.status
						this.pagination = res.data.pagination
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
				let url = "/wechatweb/salary-review/review"
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
	.tips{
		font-size: 28rpx;
		text-align: center;
	}
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
