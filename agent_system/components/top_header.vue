<template>
	<view class="top_header flex flex_btween" :style="{width:topWidth+'px',left:left?left+'px':'200px'}">
		<view class="logo flex flex_start">
			<image src="../static/logo.png"></image>
			<text>灵动优聘企业管理控制台</text>
		</view>
		<view class="user_box flex flex_end">
			<view class="item flex flex_start">
				<image src="/static/kefu_icon.png"></image>
				<text>客服微信：yikaoka</text>
			</view>
			<view class="item flex flex_start logclass" @click.stop="showLog">
				<image :src="info.broker.avatar.url" v-if="info.broker.avatar.url" style="border-radius: 50%;"></image>
				<text>{{info.broker.name?info.broker.name:info.broker.mobile}}</text>
				<image src="../static/arrow_down.png"></image>
				<view class="logout" v-if="showLogout" @click="logout">退出登录</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
	} from 'vuex'
	export default {
		name: "top_header",
		props: ['info', "topWidth", "left", "showLogout"],
		data() {
			return {
				// showLogout: false,

			};
		},
		created() {},
		computed: {
			...mapState('user', ['header']),
		},
		methods: {
			showLog() {
				this.$emit("changeShowLogout", !this.showLogout)
			},

			logout() {
				let _this = this;
				uni.showModal({
					title: "是否退出登录？",
					success(resp) {
						if (resp.confirm) {
							_this.$request("/broker/logout", {}, "POST").then(res => {
								if (res.code == 0) {
									uni.showToast({
										title: "退出登录成功",
										icon: "none",
										duration: 2000
									})
									uni.clearStorageSync()
									uni.redirectTo({
										url: "/pages/login/login"
									})
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
	.top_header {
		height: 50px;
		background: #FFFFFF;
		box-shadow: 0px 2px 12px 5px rgba(138, 149, 156, 0.2);
		color: #333333;
		padding: 0 20px;
		width: 100%;
		box-sizing: border-box;
		// min-width: 1200px;
		position: fixed;
		left: 200px;
		top: 0;
		z-index: 100;

		// color:#f8f801;
		.logo {
			image {
				width: 26px;
				height: 26px;
				margin-right: 15px;
			}

			text {
				font-size: 23px;
			}
		}

		.user_box {
			font-size: 14px;

			.item {
				margin-left: 40px;

				image {
					width: 20px;
					height: 20px;
					margin-right: 6px;
				}

				&.logclass {
					position: relative;
					cursor: pointer;

					text {
						display: inline-block;
						margin: 0 5px;
					}

					image {
						width: 30px;
						height: 30px;

						&:nth-child(3) {
							width: 13px;
							height: 13px;
						}
					}

					.logout {
						width: 100%;
						height: 30px;
						line-height: 30px;
						text-align: center;
						position: absolute;
						top: 150%;
						left: 0;
						background: $base-color;
						z-index: 100;
						font-size: 14px;
						color: #fff;

						&:hover {
							background: #0e4b84;
							cursor: pointer;
						}
					}
				}
			}
		}
	}
</style>