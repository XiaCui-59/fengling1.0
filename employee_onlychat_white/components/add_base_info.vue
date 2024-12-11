<template>
	<view class="add_base_info" v-if="showAddBase">
		<view class="inner">
			<view class="title">完善基本信息</view>
			<view class="base">
				<view class="line flex flex-start">
					<view class="tit">姓名</view>
					<view class="input_wrap">
						<input type="text" v-model="name" />
					</view>
				</view>
				<view class="line flex flex-start">
					<view class="tit">性别</view>
					<radio-group @change="genderChange" class=" flex flex-start">
						<label class="uni-list-cell uni-list-cell-pd flex flex-start" style="margin-right:80rpx;"
							v-for="(item, index) in gender" :key="item.value">
							<view>
								<radio :value="item.value" :checked="index === currentGender" color="#106afa"
									style="transform:scale(0.8)" />
							</view>
							<view style="font-size:27rpx;">{{item.text}}</view>
						</label>
					</radio-group>
				</view>
				<view class="line flex flex-start">
					<view class="tit">年龄</view>
					<view class="input_wrap">
						<input type="number" v-model="age" />
					</view>
				</view>
				<view class="line flex flex-start">
					<view class="tit">民族</view>
					<view class="input_wrap">
						<picker mode="selector" :value="value" :range="nationArry" @change="changeNation">
							<view>{{nation}}</view>
						</picker>
					</view>
				</view>
			</view>
			<view class="btns flex flex_btween">
				<view class="cancel btn" @click="refuse">取消</view>
				<view class="agree btn" @click="saveBase">保存</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "add_base_info",
		props: ["showAddBase"],
		data() {
			return {
				name: "",
				age: "",
				gender: [{
					value: "male",
					text: "男"
				}, {
					value: "female",
					text: "女"
				}],
				currentGender: 0,
				currentGenderText: "male",
				value: 0,
				nation: "汉族",
				nationArry: ["汉族", "蒙古族", "回族", "藏族", "维吾尔族", "苗族", "彝族", "壮族", "布依族", "朝鲜族",
					"满族", "侗族", "瑶族", "白族", "土家族", "哈尼族", "哈萨克族", "傣族", "黎族", "傈僳族",
					"佤族", "畲族", "高山族", "拉祜族", "水族", "东乡族", "纳西族", "景颇族", "柯尔克孜族", "土族",
					"达斡尔族", "仫佬族", "羌族", "布朗族", "撒拉族", "毛难族", "仡佬族", "锡伯族", "阿昌族", "普米族",
					"塔吉克族", "怒族", "乌孜别克族", "俄罗斯族", "鄂温克族", "崩龙族", "保安族", "裕固族", "京族", "塔塔尔族",
					"独龙族", "鄂伦春族", "赫哲族", "门巴族", "珞巴族", "基诺族", "其他", "外国血统"
				]
			};
		},
		methods: {
			changeNation(e) {
				console.log(e)
				this.nation = this.nationArry[e.detail.value]
			},
			genderChange(e) {
				this.currentGenderText = e.detail.value
			},
			refuse() {
				this.$emit("closeBase")
			},
			saveBase() {
				let data = {
					"gender": this.currentGenderText,
					"name": this.name,
					"age": Number(this.age),
					"nation": this.nation
				}
				this.$request("/worker/profile", data, "POST").then(res => {
					if (res.code == 0) {
						this.$emit("closeBase")
						uni.showToast({
							title: "报名成功",
							duration: 2000
						})
					}
				})
			}
		}

	}
</script>

<style lang="scss">
	.add_base_info {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: rgba(0, 0, 0, 0.6);
		z-index: 200;

		.inner {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			background: #fff;
			border-top-right-radius: 16rpx;
			border-top-left-radius: 16rpx;
			padding: 40rpx;
			box-sizing: border-box;
			font-size: 30rpx;

			.title {
				font-weight: 600;
				margin-bottom: 60rpx;
				text-align: center;
				font-size: 32rpx;
			}

			.base {
				.line {
					margin-top: 30rpx;
					font-size: 28rpx;

					.tit {
						width: 90rpx;
						white-space: nowrap;
						color: #5a5a5a;
					}

					.input_wrap {
						width: calc(100% - 90rpx);
						border: 1px solid #ccc;
						border-radius: 10rpx;
						padding: 0 10rpx;
						box-sizing: border-box;

						input,
						picker {
							height: 70rpx;
							line-height: 70rpx;
						}
					}
				}
			}

			.btns {
				margin-top: 30rpx;

				.btn {
					width: 48%;
					height: 76rpx;
					line-height: 76rpx;
					font-size: 30rpx;
					text-align: center;
					border-radius: 10rpx;
					margin: 0;

					&.cancel {
						background: #f6f6f6;
						border: 1px solid #f6f6f6;
					}

					&.agree {
						background: $base-color;
						color: #fff;
						border: 1px solid $base-color;
					}
				}
			}
		}
	}
</style>