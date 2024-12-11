<template>
	<view class="board">
		<view class="box">
			<view class="title">支付设置</view>
			<view class="box_line">
				<view class="line flex flex-start">
					<view class="tit">ios支付设置</view>
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
				curIosIndex: 1
			};
		},
		created() {
			this.getStatus()
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
			}
		}
	}
</script>

<style lang="scss" scoped>
	.line {
		.tit {
			margin-right: 30px;
		}
	}
</style>