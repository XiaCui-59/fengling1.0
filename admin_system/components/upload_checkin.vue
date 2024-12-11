<template>
	<view class="board" @click="colsePro">
		<view class="box">
			<view class="title">上传考勤</view>
			<view class="down_area">
				<view class="down" @click="downloadExcel" style="width:150px;">点此下载考勤模板</view>
				<view class="tips">(请先下载系统提供的考勤模板，然后按照系统提供的格式填写考勤数据后再上传到系统，请勿擅自修改文件格式。已经下载的无需重复下载。)</view>
			</view>
			<view class="line">
				<view class="tit">职位名称</view>
				<view class="input_wrap" @click.stop="showPro">
					<input type="text" v-model="projectName" placeholder="请选择职位" maxlength="32"
						@input="filterProject" />
					<!-- <uni-data-select v-model="proValue" :localdata="proRange" @change="changePro"
						placeholder="请选择职位"></uni-data-select> -->
				</view>
				<!-- 展示公司列表 -->
				<view class="com_mask" v-if="showComMask">
					<view class="com_item" v-for="(item,index) in proList" :key="item.id" @click="chooseProject(item)">
						{{"("+item.code+")"+item.name}}
					</view>
				</view>
			</view>
			<!-- <view class="line">
				<view class="tit">选择模板</view>
				<view class="input_wrap noborder flex flex-start">
					<uni-data-select v-model="tempValue" :localdata="tempRange" @change="changeTemp"
						placeholder="请选择模板"></uni-data-select>
					<view class="btn add" @click="add">新增</view>
				</view>
			</view> -->
			<view class="line">
				<view class="tit">附件上传</view>
				<view class="input_wrap noborder">
					<view class="file flex flex-start" v-if="fileName">
						<view class="name flex flex-start" style="color:#0092ff;">
							<image src="/static/file_icon.png" mode="widthFix"
								style="height:18px;width:18px;margin-right:5px;"></image>
							<view class="">{{fileName}}</view>
						</view>
						<view class="btn dele" @click="deleFile">删除</view>
					</view>
					<!-- 文件上传区域 -->
					<view class="file_upload" @click="loadFile" v-if="!fileName">
						<view class="file_btn">
							<image src="/static/upload_icon.png" mode="widthFix" style="width:35px;height:35px;">
							</image>
							<view>点击上传</view>
						</view>
					</view>
				</view>
			</view>
			<view class="line">
				<view class="tit">文件示例</view>
				<view class="input_wrap noborder">
					<image src="/static/example.png" mode="widthFix" style="width: 100%;" @click="previewImage"></image>
				</view>
			</view>
			<!-- <view class="tempinfo" v-if="tempValue != 0">
				<view class="line">
					<view class="tit">数据起始行</view>
					<view class="input_wrap  flex flex_btween">第<text class="mark">{{currentTemp.start_line}}</text>行
					</view>
				</view>
				<view class="line">
					<view class="tit" style="width: 130px;">考勤字段对应列：</view>
				</view>
				<view class="wrap flex flex_btween">
					<view class="line">
						<view class="tit">工人名称：</view>
						<view class="input_wrap  flex flex_btween">第<text
								class="mark">{{currentTemp.worker_name_row}}</text>列
						</view>
					</view>
					<view class="line">
						<view class="tit">身份证号：</view>
						<view class="input_wrap  flex flex_btween">第<text
								class="mark">{{currentTemp.id_card_row}}</text>列</view>
					</view>
				</view>
				<view class="wrap flex flex_btween">
					<view class="line">
						<view class="tit">起始时间：</view>
						<view class="input_wrap  flex flex_btween">第<text
								class="mark">{{currentTemp.start_time_row}}</text>列
						</view>
					</view>
					<view class="line">
						<view class="tit">结束时间：</view>
						<view class="input_wrap  flex flex_btween">第<text
								class="mark">{{currentTemp.end_time_row}}</text>列
						</view>
					</view>
				</view>
				<view class="wrap flex flex_btween">
					<view class="line">
						<view class="tit">工作时长：</view>
						<view class="input_wrap  flex flex_btween">第<text
								class="mark">{{currentTemp.working_time_row}}</text>列
						</view>
					</view>
					<view class="line">
						<view class="tit">计时类型：</view>
						<view class="input_wrap  flex flex_btween">第<text
								class="mark">{{currentTemp.working_type_row}}</text>列
						</view>
					</view>
				</view>
			</view> -->
			<view class="line">
				<view class="btn" @click="submit">开始解析</view>
			</view>
		</view>
		<view class="mask" v-if="showMask">
			<view class="inner" v-if="showAdd">
				<view class="title" style="margin-bottom: 30px;">新增考勤模板</view>
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
					<view class="btn" style="margin:0 auto;" @click="sureAdd">新增</view>
				</view>
			</view>
			<view class="inner" v-if="showResult">
				<view class="title">考勤记录数据校验</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<view class="subtit">正常<text class="active">{{resultData.success_count}}</text>条/异常<text
							class="disable">{{resultData.fail_count}}</text>条</view>
					<view class="table_wrap">
						<!-- <view class="btn" style="margin-bottom: 15px;float: right;">导出</view> -->
						<uni-table border stripe emptyText="暂无更多数据">
							<uni-tr style="background: #f6f6f6;">
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">工人名称</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">身份证号码</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">开始时间</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">结束时间</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">考勤方式</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">工作时长</uni-th>
								<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">备注</uni-th>
							</uni-tr>
							<uni-tr v-for="(item,index) in resultData.list" :key="index">
								<uni-td align="center"
									:style="{color:item.errors.length?'#f00':'#333'}">{{item.worker_name}}</uni-td>
								<uni-td align="center"
									:style="{color:item.errors.length?'#f00':'#333'}">{{item.id_card_number}}</uni-td>
								<uni-td align="center"
									:style="{color:item.errors.length?'#f00':'#333'}">{{item.start_time}}</uni-td>
								<uni-td align="center"
									:style="{color:item.errors.length?'#f00':'#333'}">{{item.end_time}}</uni-td>
								<uni-td align="center"
									:style="{color:item.errors.length?'#f00':'#333'}">{{item.working_type}}</uni-td>
								<uni-td align="center"
									:style="{color:item.errors.length?'#f00':'#333'}">{{item.working_time}}</uni-td>
								<uni-td align="center" :style="{color:item.errors.length?'#f00':'#333'}">
									<view v-for="(item2,index2) in item.errors">{{item2}}</view>
								</uni-td>
							</uni-tr>
						</uni-table>
						<!-- <pageBox :page="pagination" @toNext="toNext"></pageBox> -->
					</view>
					<view class="btns flex flex_around" style="margin-top:20px;">
						<view class="btn"
							style="height:40px;line-height: 40px;background: transparent;border:1px solid #999;color:#333;"
							@click="close">取消</view>
						<view class="btn" style="height:40px;line-height: 40px;"
							:style="{background:resultData.fail_count>0?'#ccc':'#1E8EEE'}" @click="confirm">确认上传</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		name: "upload_checkin",
		data() {
			return {
				showComMask: false,
				proValue: 0,
				proRange: [],
				tempValue: 0,
				tempRange: [],
				showMask: false,
				showAdd: false,
				showResult: false,
				startRow: 1,
				nameC: "A",
				idcardC: "A",
				startTimeC: "A",
				endTimeC: "A",
				timeC: "A",
				tempName: "",
				typeC: "",
				currentPage: 1,
				list: [],
				tempList: [],
				fileName: "",
				currentTemp: {

				},
				tempFilePaths: [],
				resultData: [], //解析后的结果,
				proResultList: [],
				proList: [],
				currentProject: {},
				projectName: ""
			};
		},
		created() {
			this.getList()
			// this.getTempList()
		},
		methods: {
			showPro() {
				this.showComMask = true
			},
			colsePro() {
				this.showComMask = false
			},
			chooseProject(item) {
				this.currentProject = item
				this.projectName = "(" + item.code + ")" + item.name
				this.showComMask = false
			},
			filterProject(e) {
				let value = e.detail.value
				if (!value) {
					this.proList = [...this.proResultList]
				} else {
					this.proList = this.proResultList.filter(el => {
						return el.name.indexOf(value) != -1
					})
				}

			},
			previewImage() {
				let arr = ["/static/example.png"]
				uni.previewImage({
					urls: arr
				})
			},
			downloadExcel() {
				window.open(
					"https://bluebeelabors.oss-cn-chengdu.aliyuncs.com/%E8%80%83%E5%8B%A4%E6%A8%A1%E6%9D%BF20240507%E7%89%88.xlsx"
				)
			},
			changePro(e) {
				console.log(this.proValue)
			},
			changeTemp(e) {
				this.currentTemp = this.tempList.filter(el => {
					return el.id == e
				})[0]
				console.log(this.tempValue)
			},
			close() {
				this.showMask = false
				this.showAdd = false
				this.showResult = false
			},
			getList() {
				this.$request("/admin/projects/all").then(res => {
					if (res.code == 0) {
						this.proList = res.data.list
						this.proResultList = res.data.list
					}
				})
			},
			// getTempList() {
			// 	this.tempList = []
			// 	this.tempRange = []
			// 	uni.showLoading({
			// 		title: "努力加载中~"
			// 	})
			// 	let url = "/broker/attendance-record-temps"
			// 	this.$request(url).then(res => {
			// 		if (res.code == 0) {
			// 			this.tempList = res.data.list
			// 			this.pagination = res.data.pagination
			// 			let len = this.tempList.length
			// 			let obj = {
			// 				value: "",
			// 				text: ""
			// 			}
			// 			for (var i = 0; i < len; i++) {
			// 				obj.value = this.tempList[i].id
			// 				obj.text = this.tempList[i].name
			// 				this.tempRange.push(JSON.parse(JSON.stringify(obj)))
			// 			}
			// 			console.log(this.tempRange)
			// 		}
			// 	})
			// },
			loadFile() {
				let _this = this
				// 先判断是否选择了职位和模板
				if (!this.projectName) {
					uni.showModal({
						title: "请先选择职位",
						showCancel: false
					})
					return
				}
				// if (!this.tempValue) {
				// 	uni.showModal({
				// 		title: "请先选择模板",
				// 		showCancel: false
				// 	})
				// 	return
				// }
				uni.chooseFile({
					count: 1, //默认100
					// extension:['.zip','.doc'],
					success: function(res) {
						_this.tempFilePaths = res.tempFilePaths
						_this.fileName = res.tempFiles[0].name
					}
				});
			},
			add() {
				this.showMask = true
				this.showAdd = true
			},
			resetData() {
				this.fileName = ""
				this.tempName = ""
				this.startRow = ""
				this.nameC = ""
				this.idcardC = ""
				this.startTimeC = ""
				this.endTimeC = ""
				this.timeC = ""
				this.typeC = ""
				this.projectName = ""
				this.currentProject = {}
				this.tempValue = ""
				this.tempFilePaths = []
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
				this.$request("/admin/attendance-record-temp", data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: "模板新增成功",
							duration: 2000
						})
						this.close()
						this.getTempList()
						this.resetData()
					}
				})
			},
			deleFile() {
				this.fileName = ""
			},
			submit() {
				if (!this.projectName) {
					uni.showToast({
						title: "未选择职位",
						icon: "error",
						duration: 2000
					})
					return
				}
				// if (!this.tempValue) {
				// 	uni.showToast({
				// 		title: "未选择模板",
				// 		icon: "error",
				// 		duration: 2000
				// 	})
				// 	return
				// }
				if (!this.tempFilePaths[0]) {
					uni.showToast({
						title: "未上传考勤",
						icon: "error",
						duration: 2000
					})
					return
				}
				uni.showLoading({
					title: "解析中，请稍后..."
				})
				let _this = this
				let header = {
					"Authorization": "bearer " + uni.getStorageSync("token"),
					"accept": "application/json"
				}
				let data = {
					"project_id": this.currentProject.id,
					"template_id": this.tempValue,
					"file": this.tempFilePaths[0]
				}
				uni.uploadFile({
					url: app.globalData.baseUrl + '/admin/attendance-record/parse', //仅为示例，非真实的接口地址
					filePath: _this.tempFilePaths[0],
					name: 'file',
					header: header,
					formData: data,
					success: (uploadFileRes) => {
						let result = JSON.parse(uploadFileRes.data)
						uni.hideLoading()
						console.log(result)
						if (result.code == 0) {
							_this.showMask = true
							_this.showResult = true
							_this.resultData = result.data
							console.log(_this.resultList)
						} else {
							uni.showModal({
								title: result.msg
							})
						}
					}
				});
			},
			confirm() {
				if (this.resultData.fail_count > 0) {
					uni.showToast({
						title: "数据校验有误",
						icon: "error",
						duration: 2000
					})
					return
				}
				let _this = this
				let url = "/admin/attendance-record-parse-result/" + this.resultData.result_id + "/confirm"
				this.$request(url, {}, "POST").then(res => {
					if (res.code == 0) {
						uni.showModal({
							title: "上传成功",
							content: "考勤数据上传成功，是否跳转考勤页面继续操作？",
							cancelText: "不继续",
							confirmText: "继续",
							success(resp) {
								if (resp.confirm) {
									_this.setPageName({
										pageName: "checkin_list"
									})
									_this.$emit("getPageName", {
										pageName: "checkin_list"
									})
								} else {
									_this.close()
									_this.resetData()
								}
							}
						})
					}
				})
			}
			// ondrop(e){
			// 	// console.log('ondrop',e)
			// 	const { files } = e.detail;
			// 	uni.uploadFile({
			// 		url:'...',
			// 		//filePath:this.getTempFilePath(file[0]),
			// 		files,
			// 		success:(res)=>{
			// 			console.log('uploadFile',res);
			// 		}
			// 	});
			// },
			// getTempFilePath(file){
			// 	let path;
			// 	if(window.createObjectURL) path=window.createObjectURL(file);
			// 	else if(window.webkitURL) path=window.webkitURL.createObjectURL(file);
			// 	else if(window.URL) path=window.URL.createObjectURL(file);
			// 	else console.error('getTempFilePath has error');
			// 	return path;
			// }
		}
	}
</script>

<style lang="scss">
	::v-deep {
		uni-picker {
			width: 100%;
			padding: 0 15px;
			height: 40px;
			line-height: 40px;
			border: 1px solid #e9e9e9;
			border-radius: 5px;
			margin-right: 20px;
		}

		.uni-select__input-placeholder {
			font-size: 16px;
		}

		.uni-select {
			height: 40px;
			font-size: 16px;
		}
	}

	.down_area {
		margin: 15px 0;

		.down {
			color: $base-color;
			text-decoration: underline;
			cursor: pointer;
		}

		.tips {
			font-size: 14px;
			color: #f00;
			margin-top: 15px;
		}
	}

	.box {
		.tempinfo {
			width: 400px;

			.line {
				.input_wrap {
					height: 32px;
					color: rgba(0, 0, 0, 0.4);

					.mark {
						color: #333;
					}
				}
			}

			.wrap {
				.line {
					width: 48%;
				}
			}
		}

		.line {
			max-width: 400px;
			margin-bottom: 20px;
			position: relative;

			.com_mask {
				max-height: 300px;
				overflow-y: scroll;
				position: absolute;
				width: 400px;
				top: 100%;
				left: 0;
				box-shadow: 0px 2px 5px 2px #eee;
				background: #fff;
				z-index: 10;
				padding: 15px 0;

				.com_item {
					height: 30px;
					line-height: 30px;
					padding-left: 15px;
					box-sizing: border-box;
					font-size: 14px;
					cursor: pointer;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;

					&:hover {
						background: #d7e6f8;
					}
				}
			}

			&.scope {
				align-items: start;
			}

			.tit {
				margin-bottom: 10px;
			}

			.input_wrap {
				border: 1px solid #e9e9e9;
				border-radius: 4px;
				position: relative;
				padding: 0 12px;
				box-sizing: border-box;

				input {
					height: 35px;
					line-height: 35px;
				}

				&.noborder {
					border: none;
				}

				.dele {
					border: 1px solid #f00;
					background: transparent;
					color: #f00;
					margin-left: 15px;
					width: 60px;
				}

				.file_upload {
					margin-top: 15px;
					height: 120px;
					text-align: center;
					border: 1px solid #e9e9e9;
					border-radius: 6px;
					position: relative;
					cursor: pointer;

					.file_btn {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);

						image {
							margin-bottom: 5px;
						}

						view {
							font-size: 14px;
						}
					}
				}

				.add {
					min-width: 80px;
					margin-left: 15px;
				}

			}
		}
	}

	.mask {
		.inner {
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