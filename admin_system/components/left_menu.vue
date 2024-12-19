<template>
	<view class="left_menu" :style="{width:width+'px'}">
		<view class="icon" @click="changeWidth">
			<image :src="showWider?'/static/icon_zhedie.png':'/static/icon_zhankai.png'"
				style="width:25px;height:25px;"></image>
		</view>
		<view class="left_top">
			<view class="line" v-for="(item,index) in menuList" :key="index" @click="handleMainNav(item,index)">
				<view class="main_menu flex flex_btween"
					:class="curMainName == 'home'&&item.pageName=='home'?'active':''">
					<view class="left flex flex_start">
						<image :src="item.icon"></image>
						<text>{{item.text}}</text>
					</view>
					<image src="../static/arrow_down.png" style="width: 10px;height:10px;"></image>
				</view>
				<view class="sub_menu" v-if="item.showSub">
					<view class="sub_line flex flex_start" v-for="(subItem,subIndex) in item.subList" :index="subIndex"
						@click.stop="handleSubNav(item,subItem,subIndex)"
						:class="curSubName == subItem.pageName?'active':''">
						<text>{{subItem.text}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="left_bot">
			<image src="/static/left_bot_img.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: "left_menu",
		props: ["pageName"],
		data() {
			return {
				showWider: true,
				width: 200,
				// pageName: "",
				curMainName: "",
				curSubName: "",
				menuList: [
					// {
					// 	pid: 0,
					// 	id: 1,
					// 	pageName: "home",
					// 	icon: "/static/ic_home.png",
					// 	selectIcon: "/static/ic_home_sele.png",
					// 	text: "首页",
					// 	showSub: false
					// },
					{
						pid: 0,
						id: 2,
						pageName: "project",
						icon: "/static/ic_project.png",
						selectIcon: "/static/ic_project_sele.png",
						text: "职位管理",
						showSub: false,
						subList: [{
								pid: 2,
								id: 3,
								pageName: "release_project",
								text: "发布职位"
							},
							{
								pid: 2,
								id: 4,
								pageName: "project_list",
								text: "职位列表"
							},
							{
								pid: 2,
								id: 4,
								pageName: "ai_project",
								text: "AI职位"
							},
							{
								pid: 2,
								id: 4,
								pageName: "sign_record",
								text: "报名记录"
							},
							{
								pid: 2,
								id: 4,
								pageName: "collect_project",
								text: "采集职位"
							}
						]
					},
					{
						pid: 0,
						id: 5,
						pageName: "check_in",
						icon: "/static/ic_check_in.png",
						selectIcon: "/static/ic_check_in_sele.png",
						text: "频道管理",
						showSub: false,
						subList: [{
							pid: 5,
							id: 6,
							pageName: "channel_list",
							text: "频道列表"
						}]
					},
					{
						pid: 0,
						id: 9,
						pageName: "finance",
						icon: "/static/ic_financial.png",
						selectIcon: "/static/ic_finacial_sele.png",
						text: "账单管理",
						showSub: false,
						subList: [{
								pid: 9,
								id: 10,
								pageName: "recharge_record",
								text: "充值记录(企业)"
							},
							{
								pid: 9,
								id: 11,
								pageName: "cost_record",
								text: "费用账单(企业)"
							},
							{
								pid: 9,
								id: 11,
								pageName: "vip_record",
								text: "会员记录(工人)"
							},
							{
								pid: 9,
								id: 11,
								pageName: "pay_award",
								text: "支付奖励(工人)"
							},
							{
								pid: 9,
								id: 11,
								pageName: "tx_record",
								text: "提现记录(工人)"
							},
						]
					},
					{
						pid: 0,
						id: 12,
						pageName: "broker",
						icon: "/static/ic_broker.png",
						selectIcon: "/static/ic_broker.png",
						text: "劳务公司",
						showSub: false,
						subList: [
							// {
							// 	pid: 12,
							// 	id: 13,
							// 	pageName: "add_broker",
							// 	text: "添加公司"
							// },
							{
								pid: 12,
								id: 14,
								pageName: "broker_list",
								text: "公司列表"
							},
							{
								pid: 12,
								id: 14,
								pageName: "account_list",
								text: "客户管理"
							}
						]
					},
					{
						pid: 0,
						id: 15,
						pageName: "employee",
						icon: "/static/ic_worker.png",
						selectIcon: "/static/ic_worker.png",
						text: "工人管理",
						showSub: false,
						subList: [{
							pid: 15,
							id: 16,
							pageName: "employee_list",
							text: "工人列表"
						}, {
							pid: 15,
							id: 16,
							pageName: "invite_list",
							text: "邀请列表"
						}]
					},
					{
						pid: 0,
						id: 17,
						pageName: "kefu",
						icon: "/static/ic_kefu_manage.png",
						selectIcon: "/static/ic_kefu_manage.png",
						text: "AI会话",
						showSub: false,
						subList: [
							// {
							// 	pid: 17,
							// 	id: 18,
							// 	pageName: "kefu_list",
							// 	text: "客服列表"
							// },
							{
								pid: 17,
								id: 19,
								pageName: "chat_record",
								text: "会话记录"
							},
							{
								pid: 17,
								id: 20,
								pageName: "chat_statistics",
								text: "会话统计"
							}
						]
					},
					{
						pid: 0,
						id: 16,
						pageName: "setting",
						icon: "/static/ic_plan.png",
						selectIcon: "/static/ic_plan.png",
						text: "小程序配置",
						showSub: false,
						subList: [{
								pid: 16,
								id: 21,
								pageName: "recom_position",
								text: "播报推荐"
							},
							{
								pid: 16,
								id: 22,
								pageName: "hot_position",
								text: "热招推荐"
							},
							{
								pid: 16,
								id: 23,
								pageName: "pay_setting",
								text: "支付设置"
							}
						]
					},
					{
						pid: 0,
						id: 16,
						pageName: "comwx_setting",
						icon: "/static/ic_setting.png",
						selectIcon: "/static/ic_setting.png",
						text: "企业微信配置",
						showSub: false,
						subList: [{
							pid: 16,
							id: 21,
							pageName: "group_chat",
							text: "企微群聊列表"
						}]
					},
				]
			};
		},
		created() {
			this.changeLeftTab()
		},
		watch: {
			pageName(newValue, oldValue) {
				console.log(newValue, oldValue, "pageName")
				this.changeLeftTab()
			}
		},
		methods: {
			changeLeftTab() {
				var len = this.menuList.length
				for (var i = 0; i < len; i++) {
					if (this.pageName == this.menuList[i].pageName) {
						this.curMainName = this.pageName
					} else {
						if (this.menuList[i].subList) {
							for (var j = 0; j < this.menuList[i].subList.length; j++) {
								if (this.pageName == this.menuList[i].subList[j].pageName) {
									this.curMainName = this.menuList[i].pageName
									this.curSubName = this.menuList[i].subList[j].pageName
									let obj = {
										id: this.menuList[i].id,
										pageName: this.menuList[i].pageName,
										icon: this.menuList[i].icon,
										selectIcon: this.menuList[i].selectIcon,
										text: this.menuList[i].text,
										showSub: true,
										subList: this.menuList[i].subList
									}
									console.log(obj, "obj")
									this.$set(this.menuList, i, obj)
									// this.handleMainNav(this.menuList[i],i)
								} else if (this.pageName == "broker_detail" || this.pageName == "edit_broker" || this
									.pageName == "add_broker") {
									this.curMainName = "broker"
									this.curSubName = "broker_list"
									this.$set(this.menuList[2], "showSub", true)
								} else if (this.pageName == "project_detail" || this.pageName == "revision_project") {
									this.curMainName = "project"
									this.curSubName = "project_list"
									this.$set(this.menuList[0], "showSub", true)
								} else if (this.pageName == "plan_detail") {
									this.curMainName = "plan"
									this.curSubName = "live_data_list"
									this.$set(this.menuList[5], "showSub", true)
								} else if (this.pageName == "edit_collect_project") {
									this.curMainName = "project"
									this.curSubName = "collect_project"
									this.$set(this.menuList[0], "showSub", true)
								}
							}
						}
					}
				}
				console.log(this.curMainName, this.pageName)
			},
			changeWidth() {
				this.showWider = !this.showWider
				if (this.showWider) {
					this.width = 200
				} else {
					this.width = 42
				}
				this.$emit("getLeftWidth", this.width)
			},
			handleMainNav(item, index) {
				this.curMainName = item.pageName
				if (!item.subList) {
					this.setPageName(item)
					this.$emit("getPageName", item)
					this.curSubName = ""
				} else {
					if (item.showSub) {
						let obj = {
							id: item.id,
							icon: item.icon,
							pageName: item.pageName,
							selectIcon: item.selectIcon,
							text: item.text,
							showSub: false,
							subList: item.subList
						}
						this.$set(this.menuList, index, obj)
					} else {
						let obj2 = {
							id: item.id,
							pageName: item.pageName,
							icon: item.icon,
							selectIcon: item.selectIcon,
							text: item.text,
							showSub: true,
							subList: item.subList
						}
						this.$set(this.menuList, index, obj2)
					}
				}

			},
			handleSubNav(item, subitem, index) {
				this.curMainName = item.pageName
				this.curSubName = subitem.pageName
				console.log(subitem, "handlesub")
				if (subitem.pageName == "project_list") {
					this.setPageName(subitem, "", "all")
				} else if (subitem.pageName == "sign_record") {
					this.setPageName(subitem, "", "enrolled")
				} else if (subitem.pageName == "collect_project") {
					this.setPageName(subitem, "", "wait_released")
				} else {
					this.setPageName(subitem)
				}
				this.$emit("getPageName", subitem)
			},
		}
	}
</script>

<style lang="scss">
	.left_menu {
		width: 200px;
		height: 100vh;
		color: #fff;
		padding-top: 50px;
		box-sizing: border-box;
		overflow-x: visible;
		background: url("/static/left_bg.png") no-repeat;
		background-size: 100% 100%;
		position: relative;
		font-family: PangMenZhengDaoBiaoTiTiMianFeiBan, PangMenZhengDaoBiaoTiTiMianFeiBan;

		.icon {
			position: absolute;
			top: 15px;
			left: 15px;
			z-index: 99;
			cursor: pointer;
		}

		.left_bot {
			width: 164px;
			height: 180px;
			position: absolute;
			bottom: 10px;
			left: 50%;
			transform: translateX(-50%);
			background: rgba(0, 36, 82, 0.5);
			border-radius: 17px;

			image {
				position: fixed;
				width: 294px;
				bottom: 0px;
				left: 0px;
				z-index: 100;
			}
		}

		.left_top {
			max-height: calc(100vh - 260px);
			overflow-y: scroll;

			&::-webkit-scrollbar {
				width: 0;
			}
		}

		.line {
			min-height: 60px;
			line-height: 60px;
			box-sizing: border-box;
			// margin-bottom: 20px;
			flex-wrap: wrap;

			.main_menu {
				width: 200px;
				padding: 0 15px;
				box-sizing: border-box;
				font-size: 17px;
				font-weight: 600;

				&:hover {
					cursor: pointer;
					background: #002452;
					cursor: pointer;
				}

				&.active {
					background: #002452;
					color: #fff;
					position: relative;
				}

				image {
					width: 18px;
					height: 18px;
				}
			}

			.left {
				image {
					width: 18px;
					margin-right: 10px;
				}
			}

			.sub_menu {
				width: 100%;

				.sub_line {
					height: 50px;
					line-height: 50px;
					padding-left: 40px;
					color: #fff;
					font-size: 15px;

					&:hover {
						background: #002452;
						cursor: pointer;
					}

					&.active {
						background: #002452;
						color: #fff;
						position: relative;
					}

					&.active::before {
						content: "";
						width: 4px;
						height: 4px;
						border-radius: 50%;
						background: #fff;
						position: absolute;
						top: 50%;
						left: 20px;
						transform: translateY(-50%);
					}

					image {
						width: 15px;
						margin-right: 10px;
					}
				}
			}
		}
	}
</style>