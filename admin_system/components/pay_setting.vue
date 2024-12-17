<template>
	<view class="board">
		<view class="box">
			<view class="title">支付设置</view>
			<view class="box_line">
				<view class="line">
					<view class="tit">ios支付开关</view>
					<view class="text">
						<radio-group @change="radioChange" class="flex flex-start">
							<label class="uni-list-cell uni-list-cell-pd flex flex-start"
								v-for="(item, index) in iosSwitch" :key="index" style="margin-right: 20px;">
								<view>
									<radio :value="item.value" :checked="index === curIosIndex" />
								</view>
								<view>{{item.text}}</view>
							</label>
						</radio-group>
					</view>
				</view>
				<view class="line">
					<view class="tit">邀请好友首次充值返现</view>
					<view class="text flex flex-start">
						<input type="text" v-model="firstAward" placeholder="请输入首次充值返现金额" />
						<view class="btn">保存</view>
					</view>
				</view>
				<view class="line">
					<view class="tit">报名工作扣除积分</view>
					<view class="text flex flex-start">
						<input type="text" v-model="signRequireScore" placeholder="请输入报名需扣除的积分值" />
						<view class="btn">保存</view>
					</view>
				</view>
				<view class="line">
					<view class="tit">积分套餐</view>
					<view class="text">
						<view class="flex flex_end" style="margin-bottom: 15px;">
							<view class="btn" @click="showAdd">新增套餐</view>
						</view>
						<uni-table stripe emptyText="暂无更多数据" style="max-height:400px;">
							<uni-tr>
								<uni-th align="center">序号</uni-th>
								<uni-th align="center">套餐名称</uni-th>
								<uni-th align="center">套餐价格</uni-th>
								<uni-th align="center">优惠价格</uni-th>
								<uni-th align="center">兑换积分</uni-th>
								<uni-th align="center">状态</uni-th>
								<uni-th align="center">操作</uni-th>
							</uni-tr>
							<uni-tr v-for="(item,index) in series" :key="index">
								<uni-td>{{item.package_name}}</uni-td>
								<uni-td>{{item.package_name}}</uni-td>
								<uni-td>{{item.package_price}}</uni-td>
								<uni-td>{{item.discounted_price}}</uni-td>
								<uni-td>{{item.exchange_credit}}</uni-td>
								<uni-td>{{status.filter(el=>{return el.value == item.status})[0].text}}</uni-td>
								<uni-td>
									<view class="ope flex flex_around">
										<view class="ope_item" @click="handleChannel(item)"
											:class="item.status == 'already_online'?'frozen':'unfrozen'"
											v-if="item.status != 'already_deleted'">
											<image
												:src="item.status == 'already_online'?'/static/ic_btn_frozen.png':'/static/ic_btn_unfrozen.png'"
												mode="heightFix"></image>
											{{item.status=="already_online"?"下线":"上线"}}
										</view>
										<!-- <view class="ope_item refuse" v-if="item.channel_status == 'pending_online'"
											@click="deleteChannel(item)">
											<image src="/static/ic_btn_refuse.png" mode="heightFix"></image>
											删除
										</view> -->

									</view>
								</uni-td>
							</uni-tr>
						</uni-table>
					</view>
				</view>
			</view>
		</view>
		<view class="mask" v-show="showMask">
			<view class="inner">
				<view class="title">新增积分套餐</view>
				<view class="close" @click="close">
					<image src="/static/close_white.png" mode="widthFix"></image>
				</view>
				<view class="box" style="padding-top:0;">
					<view class="line flex flex-start">
						<view class="subtit">套餐名称</view>
						<view class="input_wrap">
							<input type="text" v-model="seriesName" placeholder="请输入2~15字的套餐名称" />
						</view>
					</view>
					<view class="line flex flex-start">
						<view class="subtit">套餐原价</view>
						<view class="input_wrap">
							<input type="text" v-model="seriesOldPrice" placeholder="请输入套餐原价" />
						</view>
					</view>
					<view class="line flex flex-start">
						<view class="subtit">优惠价格</view>
						<view class="input_wrap">
							<input type="text" v-model="seriesNewPrice" placeholder="请输入套餐优惠价格" />
						</view>
					</view>
					<view class="line flex flex-start">
						<view class="subtit">兑换积分</view>
						<view class="input_wrap">
							<input type="text" v-model="seriesScore" placeholder="请输入套餐对应积分数" />
						</view>
					</view>
					<view class="flex flex_end">
						<view class="btn" @click="sureSeries">确认新增</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		name: "contract_list",
		data() {
			return {
				iosSwitch: [{
						value: "open",
						text: "开"
					},
					{
						value: "close",
						text: "关"
					}
				],
				status: [{
						value: "already_online",
						text: "已上线"
					},
					{
						value: "wait_line",
						text: "待上线"
					}
				],
				curIosIndex: 1,
				firstAward: "",
				signRequireScore: "",
				series: [],
				showMask: false,
				seriesName: "",
				seriesOldPrice: "",
				seriesNewPrice: "",
				seriesScore: ""
			};
		},
		created() {
			this.getStatus()
			this.getSeries()
		},
		onReady() {

		},
		watch: {

		},
		methods: {
			getStatus() {
				this.$request("/admin/ios/status").then(res => {
					if (res.code == 0) {
						if (res.data) {
							// 当前为开启状态
							this.curIosIndex = 0
						} else {
							// 当前为关闭状态
							this.curIosIndex = 1
						}
					}
				})
			},
			radioChange(e) {
				let data = {
					status: false
				}
				let url = "/admin/ios/status"
				let tips = ""
				if (e.detail.value == "open") {
					data.status = true
					tips = "已开启"
				} else {
					data.status = false
					tips = "已关闭"
				}
				this.$request(url, data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: tips
						})
					}
				})
			},
			showAdd() {
				this.showMask = true
			},
			close() {
				this.showMask = false
			},
			sureSeries() {
				if (!seriesName || !seriesOldPrice || !seriesNewPrice || !seriesScore) {
					uni.showToast({
						title: "未填写完整",
						icon: "error",
						duration: 2000
					})
					return
				}
				let data = {
					"package_name": this.seriesName,
					"package_price": Number(this.seriesOldPrice),
					"discounted_price": Number(this.seriesNewPrice),
					"exchange_credit": Number(this.seriesScore)
				}
				this.$request("/admin/credit/subscription", data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: "新增套餐成功",
							duration: 2000
						})
						this.getSeries()
						this.close()
					}
				})
			},
			getSeries() {
				this.$request("/admin/credit/subscription").then(res => {
					if (res.code == 0) {
						this.series = res.data.list
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.line {
		margin-bottom: 30px;

		.subtit {
			margin-right: 10px;
			white-space: nowrap;
		}

		&:first-child {
			margin-top: 30px;
		}

		&:last-child {
			margin-bottom: 0;
		}

		.tit {
			margin-bottom: 10px;
			font-weight: 600;
			color: #444;
			position: relative;
			padding-left: 15px;

			&:before {
				content: "";
				width: 7px;
				height: 7px;
				background: #226FF9;
				position: absolute;
				top: 50%;
				left: 0;
				transform: translateY(-50%);
			}
		}

		.text {
			input {
				height: 40px;
				line-height: 40px;
				border: 1px solid #d3d3d3;
				border-radius: 4px;
				padding: 0 10px;
				margin-right: 15px;
			}
		}
	}
</style>