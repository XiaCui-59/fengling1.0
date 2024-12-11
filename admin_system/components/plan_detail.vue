<template>
	<view class="board">
		<view class="back" style="font-weight:500;color:#1E8EEE;font-size:16px;cursor: pointer;margin-bottom: 15px;"
			@click="back">
			<image src="/static/back_blue.png" mode="widthFix" style="width:18px;height:18px;margin-right:5px;">
			</image>
			<text>返回</text>
		</view>
		<view class="box">
			<view class="title">计划详情</view>
			<view class="handle_area flex flex_btween" style="align-items: start;flex-wrap: wrap;">
				<view class="sub_box">
					<view class="line flex flex-start">
						<view class="tit">计划名称</view>
						<view class="input_wrap">{{planInfo.plan_name}}</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">计划时间</view>
						<view class="input_wrap">
							{{planInfo.plan_start_time}}-{{planInfo.plan_end_time}}
						</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">计划渠道</view>
						<view class="input_wrap">
							{{sourceRange.filter(el=>{return el.value == planInfo.platform})[0].text}}
						</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">责任人</view>
						<view class="input_wrap">{{planInfo.user_name}}</view>
					</view>
					<view class="line">
						<view class="tit">关联职位</view>
						<view class="input_wrap" style="height:auto;">
							<view class="sele_list" v-if="planInfo.projects.length">
								<view class="sele_item flex flex_btween" v-for="(item,index) in planInfo.projects"
									:key="index">
									<view class="text">{{item.project_code +" "+ item.project_name}}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="sub_box">
					<view class="line flex flex-start">
						<view class="tit">预计投入成本</view>
						<view class="input_wrap">{{planInfo.expected_cost}}</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">预计产出线索数</view>
						<view class="input_wrap">{{planInfo.expected_user_num}}</view>
					</view>
					<view class="line">
						<view class="tit">计划内容</view>
						<view class="input_wrap" style="height:auto;">
							<textarea :value="planInfo.content" disabled />
						</view>
					</view>
					<view class="line flex flex-start" v-if="planInfo.status == 'done'">
						<view class="tit">实际投入成本</view>
						<view class="input_wrap">{{planInfo.real_cost}}</view>
					</view>
					<view class="line flex flex-start" v-if="planInfo.status == 'done'">
						<view class="tit">实际产出线索数</view>
						<view class="input_wrap">{{planInfo.real_user_num}}</view>
					</view>
					<view class="line" v-if="planInfo.status == 'done'">
						<view class="tit">活动总结</view>
						<view class="input_wrap">{{planInfo.summarize}}</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">创建时间</view>
						<view class="input_wrap">{{planInfo.create_time}}</view>
					</view>
					<view class="line flex flex-start" v-if="planInfo.status == 'started'">
						<view class="tit">启动时间</view>
						<view class="input_wrap">{{planInfo.real_start_time}}</view>
					</view>
					<view class="line flex flex-start" v-if="planInfo.status == 'done'">
						<view class="tit">完结时间</view>
						<view class="input_wrap">{{planInfo.real_end_time}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		name: "add_plan",
		data() {
			return {
				planInfo: {
					"plan_name": "", // 计划名称
					"plan_start_time": "", // 计划开始时间
					"plan_end_time": "", // 计划结束时间
					"platform": "", //  渠道
					"user_name": "", // 负责人
					"expected_cost": "", // 计划成本
					"expected_user_num": "", // 计划线索
					"content": "", // 计划内容
					"projects": []
				},
				sourceRange: [{
						value: "douyin",
						text: "抖音直播"
					},
					{
						value: "kuaishou",
						text: "快手直播"
					},
					{
						value: "wechat_mini_program",
						text: "微信"
					}
				],
				id: "",
				preStatus: ""
			};
		},
		created() {
			let paramArr = []
			if (location.href.indexOf("?") != -1) {
				paramArr = location.href.split("?")[1].split("&")
			}
			for (var i = 0; i < paramArr.length; i++) {
				if (paramArr[i].indexOf("id") != -1) {
					this.id = paramArr[i].split("=")[1]
				}
			}
			for (var k = 0; k < paramArr.length; k++) {
				if (paramArr[k].indexOf("pre_stus") != -1) {
					this.preStatus = paramArr[k].split("=")[1]
				}
			}
			this.getPlanInfo()
		},
		methods: {
			back() {
				// window.history.back()
				console.log(this.preStatus)
				this.setPageName({
					pageName: "plan_list"
				}, "", this.preStatus, "")
				this.$emit("getPageName", {
					pageName: "plan_list"
				})
			},
			getPlanInfo() {
				let _this = this
				return new Promise(resolve => {
					let url = "/admin/plan/" + _this.id + "/info"
					_this.$request(url).then(res => {
						if (res.code == 0) {
							this.planInfo = res.data
						}
					})
				})

			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep {
		uni-picker {
			width: 100%;
			padding: 0 15px;
			height: 30px;
			line-height: 30px;
			border: 1px solid #e9e9e9;
			border-radius: 5px;
			margin-right: 20px;
		}

		.uni-stat__select {
			margin-left: 10px;
		}

		.uni-select {
			height: 30px;
			font-size: 14px;
		}
	}

	.sele_list {
		padding: 15px;
		box-sizing: border-box;

		.sele_item {
			margin-bottom: 10px;
			font-size: 14px;

			.dele {
				width: 20px;
				height: 15px;
				text-align: center;
				line-height: 15px;
				border: 1px solid #f00;
				color: #f00;
				font-size: 18px;
				font-weight: bold;
				border-radius: 2px;

				&:hover {
					background: #f00;
					color: #fff;
					cursor: pointer;
				}
			}
		}
	}

	.box {
		.sub_box {
			width: 48%;
		}

		.line {
			margin-bottom: 20px;
			position: relative;

			.tit {
				color: rgba(0, 0, 0, 0.85);
				line-height: 22px;
				margin-right: 15px;
				white-space: nowrap;
			}

			.input_wrap {
				width: 100%;
				position: relative;
				margin-top: 8px;
				background: #f8f8fa;
				padding: 10px;
				box-sizing: border-box;
				border-radius: 4px;

				textarea {
					width: 100%;
					line-height: 25px;
					overflow-y: scroll;
				}
			}
		}
	}
</style>