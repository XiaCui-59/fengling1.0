<template>
	<view class="container" :style="{width:width}">
		<scroll-view :scroll-y="true" style="height:100px;padding-bottom: 5px;" :scroll-into-view="scrollView">
			<view class="result_text">{{result}}</view>
			<view id="bot" style="width:100%;height:10px;"></view>
		</scroll-view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from "vuex"
	export default {
		name: "scrollText",
		props: ["receiveEnd", "width"],
		data() {
			return {
				result: "",
				printIndex: 0,
				printTimer: null,
				scrollView: "",
				changeCount: 0
			};
		},
		computed: {
			...mapState(["callContent", "aiSpeekingEnd"])
		},
		watch: {
			result(newVal) {
				this.toScroll()
			},
		},
		created() {
			this.printIndex = 0
			this.changeCount = 0
			this.scrollView = ""
			this.result = ""
			if (this.printTimer) {
				clearInterval(this.printTimer)
			}
			this.printWords()
		},
		methods: {
			printWords() {
				let _this = this
				this.printTimer = setInterval(function() {
					let len = _this.callContent.length
					if (_this.printIndex < len) {
						_this.result += _this.callContent[_this.printIndex]
						_this.printIndex++
					} else {
						if ((_this.printIndex == len) && _this.aiSpeekingEnd) {
							// 接收完毕
							console.log("文字打印完毕")
							// _this.toScroll()
							clearInterval(_this.printTimer)
						}
					}
				}, 100)

			},
			getElementHeight() {
				let _this = this
				const query = uni.createSelectorQuery().in(this);
				query.select(".result_text").boundingClientRect(data => {
					if (data) {
						_this.currentContHeight = data.height;
					}
				}).exec();
			},
			toScroll() {
				let _this = this
				_this.scrollView = ""
				this.$nextTick(() => {
					_this.scrollView = "bot"
				})
			}
		}
	}
</script>

<style lang="scss">
	.container {
		// width: 80%;
		margin: 0 auto;

		.result_text {
			line-height: 56rpx;
			text-align: left;
		}
	}
</style>