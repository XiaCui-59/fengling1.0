<template>
	<view class="board">
		<view class="box">
			<view class="title">考勤模板</view>
			<searchBox :showTemp="true" @handleSearch="handleSearch"></searchBox>
			<view class="table_wrap">
				<view class="btns flex flex_end">
					<view class="btn" @click="add">新增</view>
				</view>
				<uni-table border stripe emptyText="暂无更多数据" style="height:600px;">
					<uni-tr style="background: #f6f6f6;">
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">模板编号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">模板名称</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">数据起始行</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">工人名称</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">身份证号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">起始时间</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">结束时间</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">工作时长</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">计时类型</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">创建时间</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">操作</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in list" :key="index">
						<uni-td align="center">{{item.id}}</uni-td>
						<uni-td align="center">{{item.name}}</uni-td>
						<uni-td align="center">{{item.start_line}}</uni-td>
						<uni-td align="center">{{item.worker_name_row}}</uni-td>
						<uni-td align="center">{{item.id_card_row}}</uni-td>
						<uni-td align="center">{{item.start_time_row}}</uni-td>
						<uni-td align="center">{{item.end_time_row}}</uni-td>
						<uni-td align="center">{{item.working_time_row}}</uni-td>
						<uni-td align="center">{{item.working_type_row}}</uni-td>
						<uni-td align="center">{{item.create_time}}</uni-td>
						<!-- <uni-td>删除</uni-td> -->
						<uni-td align="center" style="padding:8px 0px;">
							<view class="ope flex flex_around">
								<view class="ope_item" @click="deleteTemp(item)">删除</view>
							</view>
						</uni-td>
					</uni-tr>
				</uni-table>
				<!-- <pageBox :page="pagination" @toNext="toNext"></pageBox> -->
			</view>
		</view>
		<!-- 弹出层 -->
		<view class="mask" v-if="showMask">
			<view class="inner" v-if="showAdd">
				<view class="title">新增考勤模板</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<view class="line flex flex-start">
						<view class="tit">模板名称：</view>
						<view class="input_wrap">
							<input type="text" v-model="tempName" placeholder="请输入模板名称" />
						</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit">数据起始行</view>
						<view class="input_wrap noborder flex flex-start">第 <input type="text" v-model="startRow"
								style="width: 60px;background: #eee;text-align: center;padding-left: 0;margin:0 10px;" />
							行</view>
					</view>
					<view class="line flex flex-start">
						<view class="tit" style="width: 130px;">考勤字段对应列：</view>
					</view>
					<view class="wrap flex flex-start">
						<view class="line flex flex-start" style="margin-right: 50px;">
							<view class="tit">工人名称：</view>
							<view class="input_wrap noborder flex flex-start">第 <input type="text" v-model="nameC"
									style="width: 60px;background: #eee;text-align: center;padding-left: 0;margin:0 10px;" />
								列</view>
						</view>
						<view class="line flex flex-start">
							<view class="tit">身份证号：</view>
							<view class="input_wrap noborder flex flex-start">第 <input type="text" v-model="idcardC"
									style="width: 60px;background: #eee;text-align: center;padding-left: 0;margin:0 10px;" />
								列</view>
						</view>
					</view>
					<view class="wrap flex flex-start">
						<view class="line flex flex-start" style="margin-right: 50px;">
							<view class="tit">起始时间：</view>
							<view class="input_wrap noborder flex flex-start">第 <input type="text" v-model="startTimeC"
									style="width: 60px;background: #eee;text-align: center;padding-left: 0;margin:0 10px;" />
								列</view>
						</view>
						<view class="line flex flex-start">
							<view class="tit">结束时间：</view>
							<view class="input_wrap noborder flex flex-start">第 <input type="text" v-model="endTimeC"
									style="width: 60px;background: #eee;text-align: center;padding-left: 0;margin:0 10px;" />
								列</view>
						</view>
					</view>
					<view class="wrap flex flex-start">
						<view class="line flex flex-start" style="margin-right: 50px;">
							<view class="tit">工作时长：</view>
							<view class="input_wrap noborder flex flex-start">第 <input type="text" v-model="timeC"
									style="width: 60px;background: #eee;text-align: center;padding-left: 0;margin:0 10px;" />
								列</view>
						</view>
						<view class="line flex flex-start" style="margin-right: 50px;">
							<view class="tit">计时类型：</view>
							<view class="input_wrap noborder flex flex-start">第 <input type="text" v-model="typeC"
									style="width: 60px;background: #eee;text-align: center;padding-left: 0;margin:0 10px;" />
								列</view>
						</view>
					</view>
					<view class="tips" style="color:#f00;">起始行只允许填写数字，对应列只允许填写1位英文字母。</view>
					<view class="btn" style="float: right;" @click="sureAdd">新增</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import searchBox from "@/components/search_box.vue"
	import pageBox from "@/components/paging_box.vue"
	export default {
		name: "contract_list",
		data() {
			return {
				list: [],
				status: [{
						value: "active",
						text: "已启用"
					},
					{
						value: "disable",
						text: "已禁用"
					}
				],
				pagination: {},
				showMask: false,
				showAdd: false,
				startRow: 1,
				nameC: "A",
				idcardC: "A",
				startTimeC: "A",
				endTimeC: "A",
				timeC: "A",
				tempName: "",
				typeC: "",
				searTempName: ""
			};
		},
		components: {
			searchBox,
			pageBox
		},
		created() {
			this.getList()
		},
		watch: {

		},
		methods: {
			getList() {
				uni.showLoading({
					title: "努力加载中~"
				})
				let url = "/broker/attendance-record-temps?name=" + this.searTempName
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.pagination = res.data.pagination
					}
				})
			},
			handleSearch(e) {
				this.searTempName = e.searTempName
				this.getList()
			},
			close() {
				this.showMask = false
				this.showAdd = false
			},
			add() {
				this.showMask = true
				this.showAdd = true
			},
			sureAdd() {
				let data = {
					"name": this.tempName,
					"start_line": Number(this.startRow),
					"worker_name_row": this.nameC,
					"id_card_row": this.idcardC,
					"start_time_row": this.startTimeC,
					"end_time_row": this.endTimeC,
					"working_time_row": this.timeC,
					"working_type_row": this.typeC
				}
				this.$request("/broker/attendance-record-temp", data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: "模板新增成功",
							duration: 4000
						})
						this.close()
						this.getList()
						this.resetData()
					}
				})
			},
			resetData() {
				this.tempName = ""
				this.startRow = ""
				this.nameC = ""
				this.idcardC = ""
				this.startTimeC = ""
				this.endTimeC = ""
				this.timeC = ""
				this.typeC = ""
			},
			deleteTemp(item) {
				let _this = this
				uni.showModal({
					title: "是否作废考勤模板：" + item.name + "？作废后不可恢复，请谨慎操作。",
					confirmText: "确定删除",
					confirmColor: "#f00",
					success(resp) {
						if (resp.confirm) {
							let url = "/broker/attendance-record-temp/" + item.id
							_this.$request(url, {}, "DELETE").then(res => {
								if (res.code == 0) {
									uni.showToast({
										title: "作废成功",
										duration: 2000,
										icon: "none"
									})
									_this.getList()
								}
							})
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	::v-deep {
		.search_box {
			margin: 0;
		}
	}

	.active {
		color: #0da81f;
	}

	.disable {
		color: #f00;
	}

	.disable {
		color: #f00;
	}

	.ope {
		position: relative;
		padding: 0 10px;
		width: 100%;
		box-sizing: border-box;

		.more {
			position: absolute;
			top: calc(100% + 8px);
			left: 0;
			width: 100%;
			z-index: 9;
			background: #fff;
			border-radius: 5px;
			box-shadow: 2px 2px 5px 3px #ddd;
			padding: 5px 0;

			.opera {
				text-align: center;
				height: 30px;
				line-height: 30px;
				cursor: pointer;
			}
		}
	}

	.base {
		padding: 0 0 10px 0;

		.line {
			margin: 15px 0;
		}
	}

	.table_wrap {

		// height:500px;
		.btns {
			margin-bottom: 15px;

			.btn {
				margin-left: 15px;
			}
		}

		.table_top {
			margin-bottom: 15px;

			.btn {
				width: 100px;
				margin-left: 15px;
			}
		}

		.tips {
			margin-bottom: 20px;

			view {
				margin-right: 15px;
				font-size: 14px;

				text {
					color: #0092ff;
				}
			}

			.tip {
				color: #f00;
			}
		}
	}

	.mask {
		.inner {
			.title {
				margin-bottom: 30px;
			}

			.box {
				.line {
					margin-bottom: 15px;

					.tit {
						width: 90px;
					}

					.input_wrap {
						width: calc(100% - 90px);
						height: 40px;
						line-height: 40px;
						border-radius: 6px;
						border: 1px solid #ccc;

						&.noborder {
							border: none;
						}

						input {
							height: 40px;
							padding-left: 10px;
							box-sizing: border-box;
						}
					}
				}

				.subtit {
					font-size: 18px;
					text-align: center;
					margin-bottom: 30px;

					text {
						font-weight: 600;
						display: inline-block;
						margin: 0 10px;
					}
				}
			}
		}
	}
</style>