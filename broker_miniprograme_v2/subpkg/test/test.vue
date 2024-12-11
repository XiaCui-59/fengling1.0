<template>
	<view class="content">
		<customHeader :title="pageName" :showBack="true" :headHeight="headerHeight"></customHeader>
		<view class="cont" :style="{marginTop:marginTop+'px'}">
			<view class="top_area" :style="{top:marginTop+'px'}">
				<view class="subtabs flex flex-start">
					<view class="subtab" :style="{height:tabHeight+'px',lineHeight:tabHeight+'px'}" v-for="(item,index) in tabs" :key="index" :class="currentTab.value==item.value?'active':''" @click="changeTab(item)">{{item.text}}</view>
				</view>
			</view>
			<view class="box":style="{top:boxTop+'px'}">
				<!-- 二维码核销区域 -->
				<view class="code" v-if="currentTab.value == 'detail' && info.qrCode">
					<image src="https://static.swiftwd.com/worker/code_bg.png" mode="widthFix"></image>
					<view class="code_tit">{{info.name}}</view>
					<view class="code_cont">
						<view class="code_img">
							<image :src="info.qrCode" mode="widthFix"></image>
						</view>
						<view class="tips">请到工作现场出示二维码 扫码签到</view>
					</view>
				</view>
				<view class="subtitle flex flex-start" v-if="currentTab.value == 'detail'">
					<image src="https://static.swiftwd.com/worker/ic_baoming_title_bg.png" mode="heightFix"></image>
					<view class="text">职位详情</view>
				</view>
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" :style="{height:scrollHeight+'px'}"
					@scrolltolower="lower">
					<view style="background: #fff;" v-if="currentTab.value == 'detail'">
						<view class="base">
							<view class="line flex flex-start">
								<view class="tit">工作名称：</view>
								<view class="text">{{info.name}}</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">用工主体：</view>
								<view class="text">{{info.employer_name}}</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">到岗时间：</view>
								<view class="text">{{info.arrival_time}}</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">开始时间：</view>
								<view class="text">{{info.work_start_time}}</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">结束时间：</view>
								<view class="text">{{info.work_end_time}}</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">工作酬劳：</view>
								<view class="text flex flex_btween">
									<view class="num">{{info.salary_unit_price}}元</view>
									<view class="period">/{{period.filter(el=>{return el.value == info.salary_settlement_type})[0].text}}</view>
								</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">结算方式：</view>
								<view class="text">{{period.filter(el=>{return el.value == info.salary_settlement_type})[0].text}}</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">发薪周期：</view>
								<view class="text">{{paySalaryPeriod.filter(el=>{return el.value == info.pay_salary_setting.type})[0].text}}</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">用工人数：</view>
								<view class="text flex flex_btween">
									<view class="num">{{info.need_worker_num}}</view>
									<view class="period">人</view>
								</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">服务类别：</view>
								<view class="text">{{info.work_type_name}}</view>
							</view>
							<view class="line flex flex-start">
								<view class="tit">工作地点：</view>
								<view class="text">{{info.work_address}}</view>
							</view>
						</view>
						<view class="more">
							<view class="tit">工作详情</view>
							<view class="textarea" :style="{paddingBottom:!showAll?scrollPadding+'px':'auto'}">
								<rich-text :nodes="info.content"  :style="{display:displayType}"></rich-text>
								<view class="showtotal" @click="showTotal" v-if="showAll">
									<text class="text">展开</text>
									<image src="https://static.swiftwd.com/broker/ic_more.png" mode="widthFix"></image>
								</view>
							</view>
						</view>
					</view>
					<!-- 工人情况 -->
					<view class="detail" v-if="currentTab.value == 'salary'">
						<view class="title flex flex-start">
							<image src="https://static.swiftwd.com/broker/ic_project_detail_user.png" mode="heightFix"></image>
							<view class="text">工人详情</view>
						</view>
						<view class="data">
							<view class="line flex flex_btween" @click="navigate">
								<view class="left flex flex-start">
									<image src="https://static.swiftwd.com/broker/ic_project_detail_users.png" mode="widthFix"></image>
									<view class="text">已报名</view>
								</view>
								<view class="right flex flex-start">
									<view class="text orange">{{workersInfo.pending_num}}</view>
									<image src="https://static.swiftwd.com/broker/ic_trangle_right.png" mode="widthFix"></image>
								</view>
							</view>
							<view class="line flex flex_btween">
								<view class="left flex flex-start">
									<image src="https://static.swiftwd.com/broker/ic_project_detail_in.png" mode="widthFix"></image>
									<view class="text">在职</view>
								</view>
								<view class="right flex flex-start">
									<view class="text green">{{workersInfo.entry_num}}</view>
									<image src="https://static.swiftwd.com/broker/ic_trangle_right.png" mode="widthFix"></image>
								</view>
							</view>
							<view class="line flex flex_btween">
								<view class="left flex flex-start">
									<image src="https://static.swiftwd.com/broker/ic_project_detail_out.png" mode="widthFix"></image>
									<view class="text">已离职</view>
								</view>
								<view class="right flex flex-start">
									<view class="text red">{{workersInfo.depart_num}}</view>
								</view>
							</view>
						</view>
					</view>
					<view class="empty" v-if="list.length == 0 && currentTab.value != 'detail'">
						<image src="https://static.swiftwd.com/worker/empty_bg.png" mode="heightFix"></image>
					</view>
				</scroll-view>
			</view>
			<view class="btn" :style="{height:tabHeight+'px',lineHeight:tabHeight+'px'}" @click="toContractDetail">{{info.status == "approved"?"查看合同并签约":"查看合同"}}</view>
		</view>
	</view>
</template>

<script>
	import customHeader from "@/components/custom_header.vue"
	import commonData from "@/common/commonData.js"
	export default {
		data() {
			return {
				info:{
					arrival_time: "",
					broker_company_name: "",
					checkin_time: "",
					content: "",
					contract_template_id: "",
					contract_template_name: "",
					contracted_num: 0,
					employer_name: "",
					id: "",
					insurance_meal_id: "",
					insurance_meal_name: "",
					is_employer_name_public: false,
					name: "",
					need_worker_num: 50,
					pay_salary_setting: {type: "daily", daily: "18:00", weekly: "", monthly: ""},
					project_status: "",
					qrCode: "",
					salary_settlement_type: "",
					salary_unit_price: "",
					status: "",
					work_address: "",
					work_end_time: "",
					work_start_time: "",
					work_type: "",
					work_type_code: "",
					work_type_id: "",
					work_type_name: " ",
				},
				currentTab:{
					value:"detail",
					text:"职位详情"
				},
				showMask:false,
				pageName:"灵动优聘",
				marginTop:0,
				status:false,
				showCode:false,
				status:commonData.status,
				period:commonData.periodList,
				paySalaryPeriod:commonData.paySalaryPeriod,
				paySalaryWeekly:commonData.paySalaryWeekly,
				tabs:[
					{
						value:"detail",
						text:"职位详情"
					},
					{
						value:"salary",
						text:"工人情况"
					},
				],
				htmlNodes:"<p>工作内容：负责路由器，摄像头组装，手上工</p><p>工作要求：男女不限，16-42岁。</p><p>工作时间：早8:00 -晚20:00（月</p><p>工作地址：成都市新都区石板滩</p><p>工作时间：早8:00 -晚20:00（月</p><p>工作地址：成都市新都区石板滩</p><p>工作时间：早8:00 -晚20:00（月</p><p>工作地址：成都市新都区石板滩</p><p>吃住情况：包住宿，自带床上用品行李，有空</p>",
				displayType:"-webkit-box",
				showAll:true,
				scrollHeight:0,
				boxTop:0,
				headerHeight:0,
				currentPage:1,
				contHeight:0,
				scrollPadding:0,
				tabHeight:0,
				id:"",
				list:[]
			}
		},
		components:{
			customHeader
		},
		onLoad(param) {
			let _this = this
			this.getMarginTop()
			this.getSubtabHeight()
			setTimeout(function(){
				// _this.getElementInfo()
				_this.getTopHeight()
				
			},500)
			this.id = param.id
			// this.getInfo()
			this.changeTab(this.currentTab)
		},
		methods: {
			getMarginTop(e){
				let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
				let systemInfo = uni.getSystemInfoSync()
				this.marginTop = menuButtonInfo.height + menuButtonInfo.top 
				
			},
			getSubtabHeight(){
				let percent = 44/844
				let systemInfo = uni.getSystemInfoSync()
				this.tabHeight =Math.floor(systemInfo.screenHeight * percent) 
			},
			getTopHeight(){
				let percent = 200/844
				let systemInfo = uni.getSystemInfoSync()
				this.headerHeight =Math.floor(systemInfo.screenHeight * percent) 
			},
			getElementInfo(){
				let _this = this
				let systemInfo = uni.getSystemInfoSync()
				let info = uni.createSelectorQuery().select(".cont");
				let info2 = uni.createSelectorQuery().select(".btn");
				let info3 = uni.createSelectorQuery().select(".code");
				let info4 = uni.createSelectorQuery().select(".subtitle");
				let topHeight=0;
				info.boundingClientRect(function(data) { //data - 各种参数
					if(data){
						topHeight = data.bottom - data.top  // 获取元素高度
					}
				   // _this.scrollHeight = systemInfo.screenHeight - _this.boxTop
				}).exec()
				let btnHeight = 0;
				let btnTop = 0;
				info2.boundingClientRect(function(data) { //data - 各种参数
					if(data){
						btnHeight = data.height
						btnTop = data.top
						// _this.scrollHeight = _this.scrollHeight - data.height - 60
					}
				}).exec()
				let codeHeight = 0;
				info3.boundingClientRect(function(data) { //data - 各种参数
					if(data){
						codeHeight = data.height
						// _this.scrollHeight = _this.scrollHeight - data.height - 60
					}
				}).exec()
				let titleHeight=0;
				info4.boundingClientRect(function(data) { //data - 各种参数
					if(data){
						titleHeight = data.bottom - data.top  // 获取元素高度
					}
				}).exec()
				setTimeout(function(){
					_this.boxTop = _this.marginTop + topHeight
					// _this.contHeight = systemInfo.screenHeight - _this.boxTop
					_this.scrollHeight = btnTop - _this.boxTop - titleHeight - codeHeight - 10
					uni.hideLoading()
				},500)
			},
			changeTab(item){
				let _this = this
				this.currentTab.value = item.value
				this.currentTab.text = item.text
				if(item.value != 'detail'){
					this.getList()
				}
				uni.showLoading({
					title:"加载中..."
				})
				setTimeout(function(){
					_this.getElementInfo()
				},500)
				
			},
			toContractDetail(){
				if(this.info.status == "approved"){
					// 跳转法大大签署界面
					let url = "/worker/contract/"+this.info.contract_id+"/sign-task-url"
					this.$request(url,{},"POST").then(res => {
						if(res.code == 0){
							let jumpUrl = encodeURIComponent(res.data.sign_task_embed_url)
							uni.navigateTo({
							  url: "/pagesFace/pages/webview/webview?url=" + jumpUrl,
							})
						}else{
							uni.showModal({
								title:res.msg
							})
						}
					})
				}else if(this.info.status == "pending"){
					uni.showModal({
						title:"提示",
						content:"您的报名申请正在审核中，审核通过后才可查看合同签约哦，请耐心等待。",
						showCancel:false
					})
				}
				// uni.navigateTo({
				// 	url:"/subpkg/contract_detail/contract_detail?id="+this.info.id
				// })
			},
			getInfo(){
				let url = "/worker/project/info/"+this.id
				this.$request(url).then(res =>{
					if(res.code == 0){
						this.info = res.data
					}else{
						uni.showModal({
							title:res.msg
						})
					}
				})
			},
			getList(){
				let url = "/worker/project/"+this.id+"/"+this.currentTab.value+"?page="+this.currentPage
				this.$request(url).then(res => {
					if(res.code == 0){
						console.log(res,'res')
						this.list = this.list.concat(res.data.list)
						this.pagination = res.data.pagination
					}else{
						uni.showModal({
							title:res.msg
						})
					}
				})
			},
			showTotal(){
				this.displayType = "block";
				this.showAll = false;
			},
			lower(){
				if(this.currentTab.value != 'detail'){
					if(this.list.length < this.pagination.totalCount){
						this.currentPage++
						this.getList()
					}else{
						uni.showToast({
							title:"已全部加载~",
							icon:"none",
							duration:2000
						})
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.btn{
		width: 100%;
		text-align: center;
		height:88rpx;
		line-height: 88rpx;
		background: rgba(33,111,249,0.2);
		box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.15);
		border-radius: 8px;
		border: 1px solid #216FF9;
		font-size: 30rpx;
		color: #2669E5;
		margin-top:40rpx;
		box-sizing: border-box;
		font-weight: bold;
	}
.cont{
	position: fixed;
	width:100%;
	left:0;
	padding:0 28rpx;
	box-sizing: border-box;
	overflow: hidden;
	.code{
		position: relative;
		&>image{
			width: 100%;
		}
		.code_tit{
			position: absolute;
			top:4%;
			left:0;
			width: 100%;
			text-align: center;
			font-weight: 600;
			font-size: 30rpx;
			color: #333333;
		}
		.code_img{
			position: absolute;
			top:50%;
			left:50%;
			width: 67%;
			transform: translate(-50%,-50%);
			image{
				width: 100%;
			}
		}
		.tips{
			position: absolute;
			bottom:80rpx;
			width: 100%;
			left:0;
			text-align: center;
			font-size: 24rpx;
			color: #757575;
		}
	}
	.btn{
		width: calc(100% - 80rpx);
		left:40rpx;
		position: fixed;
		bottom:40rpx;
		background: #216FF9;
		color: #FFFFFF;
	}
	.box{
		position: fixed;
			width: calc(100% - 80rpx);
			left:40rpx;
			z-index:3;
			border-top-left-radius: 16rpx;
			border-top-right-radius: 16rpx;
			overflow: hidden;
			background: #F3F3F5;
		// position: relative;
		// background: #fff;
		// background: url("https://static.swiftwd.com/worker/ic_baoming_bg2.png") no-repeat;
		// background-size:cover;
		// border-top-left-radius: 16rpx;
		// border-top-right-radius: 16rpx;
		// margin-top:20rpx;
		&>image{
			width: 100%;
			height:100%;
		}
		.subtitle{
			height:80rpx;
			line-height: 80rpx;
			padding-left:56rpx;
			box-sizing: border-box;
			font-size: 30rpx;
			color:#333;
			box-sizing: border-box;
			background: url("https://static.swiftwd.com/worker/ic_detail_title_bg.png") no-repeat;
			background-size:100% 100%;
			image{
				width: 32rpx;
				height:32rpx;
				margin-right: 8rpx;
			}
		}
		.base{
			padding:0 56rpx;
			.line{
				height:88rpx;
				line-height: 88rpx;
				font-size:28rpx;
				border-bottom: 1px dashed #DFDFDF;
				.tit{
					width:140rpx;
					color:#5A5A5A;
				}
				.text{
					width: calc(100% - 140rpx);
					color:#333;
					.period{
						font-size: 24rpx;
						color: #A8A8A8;
					}
				}
			}
		}
		.more{
			padding:0 56rpx;
			.tit{
				font-size: 30rpx;
				color: #216FF9;
				margin:40rpx 0 10rpx 0;
			}
			.textarea{
				position: relative;
				background: #fff;
				line-height: 40rpx;
				font-size:28rpx;
				color:#5A5A5A;
				border-radius: 16rpx;
				padding:20rpx;
				box-sizing: border-box;
				p{
					margin-bottom: 20rpx;
				}
				rich-text{
					line-height: 50rpx;
					-webkit-line-clamp: 4;
					overflow: hidden;
					text-overflow: ellipsis;
					height: auto;
					-webkit-box-orient: vertical;
					display: -webkit-box;
				}
				.showtotal{
					color: #216FF9;
					margin:20rpx auto;
					text-align: center;
					position: relative;
					z-index: 100;
					image{
						width: 32rpx;
						height:32rpx;
						vertical-align: middle;
					}
				}
			}
		}
	}
}
.salary{
		.item{
			background: #FFFFFF;
			border-radius: 16rpx;
			padding:40rpx;
			box-sizing: border-box;
			margin-bottom: 20rpx;
			position: relative;
			.status{
				position: absolute;
				width: 100rpx;
				height:100rpx;
				top:0;
				right:0;
				image{
					width: 100rpx;
					height:100rpx;
				}
			}
			.line{
				margin-bottom: 24rpx;
				font-size: 28rpx;
				&:last-child{
					margin-bottom: 0;
				}
				.tit{
					width: 160rpx;
					color: #686868;
				}
				.text{
					width: calc(100% - 160rpx);
					color: #333333;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					&.normal{
						color: #2CB074;
						font-weight: bold;
					}
					&.abnormal{
						color: #F9CB3D;
						font-weight: bold;
					}
				}
			}
		}
	}
.detail{
		background: url("https://static.swiftwd.com/broker/bg_detail.png") no-repeat;
		background-size:cover;
		box-shadow: 0 1px 3px 0 rgba(0,0,0,0.15);
		padding-bottom:40rpx ;
		max-height: calc(100% - 148rpx);
		overflow: scroll;
		.data{
			padding:0 40rpx;
			box-sizing: border-box;
			.line{
				height:100rpx;
				line-height: 100rpx;
				border-bottom: 1px dashed #DFDFDF;
				&:last-child{
					padding-right:30rpx;
					box-sizing: border-box;
				}
				.left{
					image{
						width:40rpx;
						height:34rpx;
						margin-right: 8rpx;
					}
					.text{
						font-size: 28rpx;
						color:#333;
					}
				}
				.right{
					font-size: 36rpx;
					font-weight: bold;
					.orange{
						color:#FFA800;
					}
					.green{
						color:#19C388;
					}
					.red{
						color:#EF361B;
					}
					image{
						width:14rpx;
						height:24rpx;
						margin-left:16rpx;
					}
				}
			}
		}
		.title{
			height:80rpx;
			padding-left: 40rpx;
			box-sizing: border-box;
			background: url("https://static.swiftwd.com/broker/bg_title.png") no-repeat;
			background-size:cover;
			font-size: 30rpx;
			color:#333;
			image{
				width:32rpx;
				height:32rpx;
				margin-right: 10rpx;
			}
		}
	}
</style>
