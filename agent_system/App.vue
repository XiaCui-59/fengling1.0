<script>
	export default {
		globalData: {
			// baseUrl: "https://api.test.swiftwd.com", //测试环境
			// baseImageUrl: "https://static.test.swiftwd.com", //测试环境
			baseUrl: "https://api.swiftwd.com", //正式环境
			baseImageUrl: "https://static.swiftwd.com" //测试环境
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	/* 在全局样式文件中添加以下代码 */
	body,
	p,
	span,
	div,
	a,
	li,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		-webkit-user-select: text;
		-moz-user-select: text;
		-ms-user-select: text;
		user-select: text;
	}



	::v-deep {
		.uni-table-tr .uni-table-th:last-child {
			position: sticky;
			right: 0;
			top: 0;
			background-color: rgb(210, 229, 241);
			z-index: 10;
		}

		.uni-table-tr .uni-table-td:last-child {
			position: sticky;
			right: 0;
			top: 0;
			background-color: rgb(210, 229, 241);
			z-index: 10;
		}

		.uni-table-th,
		.uni-table-td {
			white-space: nowrap;
		}

		.mask {
			.uni-table-tr .uni-table-th:last-child {
				position: relative;
				right: 0;
				top: 0;
				background-color: #fff;
				z-index: 10;
			}

			.uni-table-tr .uni-table-td:last-child {
				position: relative;
				right: 0;
				top: 0;
				background-color: #fff;
				z-index: 10;
			}
		}
	}

	.content {
		width: 100%;
		height: 100vh;
		overflow: hidden;
	}

	.flex {
		display: flex;
		align-items: center;
	}

	.flex_start {
		justify-content: flex-start;
	}

	.flex_end {
		justify-content: flex-end;
	}

	.flex_btween {
		justify-content: space-between;
	}

	.flex_around {
		justify-content: space-around;
	}

	.active {
		color: #0da81f;
	}

	.disable {
		color: #f00;
	}

	.ope {
		position: relative;
		padding: 0 10px;
		width: 100%;
		box-sizing: border-box;

		.ope_item {
			cursor: pointer;
			margin-right: 15px;

			&:hover {
				color: $base-color;
			}

			display: flex;
			align-items: center;
			border-width: 1px;
			border-radius: 4px;
			border-style: solid;
			padding: 0 5px;

			image {
				// vertical-align: middle;
				height: 15px;
				margin-right: 4px;
			}

			&.edit,
			&.detail,
			&.pass,
			&.record,
			&.sign,
			&.add,
			&.unfrozen {
				color: #1678F1;
				border-color: #1678F1;
			}

			&.haibao,
			&.end,
			&.write,
			&.reversion,
			&.checkin {
				color: #00D600;
				border-color: #00D600;
			}

			&.end {
				color: #9600D6;
				border-color: #9600D6;
			}

			&.refuse,
			&.nocheckin,
			&.nosign,
			&.frozen,
			&.delete {
				color: #FE5C02;
				border-color: #FE5C02;
			}
		}
	}

	.btn {
		min-width: 80px;
		max-width: 120px;
		padding: 0 10px;
		box-sizing: border-box;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border-radius: 4px;
		background: $base-color;
		color: #fff;
		cursor: pointer;

		&:hover {
			opacity: 0.8;
		}
	}

	.board {
		padding: 0 20px;
		color: #333;
		min-height: calc(100vh - 60px);
		box-sizing: border-box;
		margin-top: 60px;

		.box {
			min-height: calc(100vh - 60px);
			background: #fff;
			padding: 20px;
			border-radius: 10px;
			// margin-bottom: 20px;
			box-sizing: border-box;

			.title {
				font-size: 18px;
				font-weight: 600;
				margin: 15px 0;
				padding-left: 12px;
				position: relative;

				&::before {
					content: "";
					width: 4px;
					height: 20px;
					background: $base-color;
					border-radius: 2px;
					position: absolute;
					left: 0;
					top: 50%;
					transform: translateY(-50%);
				}
			}

			.base {
				.line {
					.tit {
						width: 80px;
					}

					.text {
						width: calc(100% - 80px);
						flex-wrap: wrap;
					}
				}
			}
		}
	}

	.mask {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 101;

		&.mask2 {
			z-index: 105;
		}

		.inner {
			width: 40%;
			max-height: 800px;
			overflow: scroll;

			&::-webkit-scrollbar {
				width: 0;
			}


			border-radius: 10px;
			position: absolute;
			top:50%;
			left:50%;
			transform: translate(-50%, -50%);
			box-sizing: border-box;
			background: #fff;

			.close {
				position: absolute;
				top: 15px;
				right: 15px;
				color: #fff;

				&:hover {
					cursor: pointer;
				}

				image {
					width: 20px;
					height: 20px;
				}
			}

			.title {
				font-size: 18px;
				height: 50px;
				line-height: 50px;
				padding: 0px 30px;
				background: url("/static/mask_title_bg.png") no-repeat;
				background-size: cover;
				color: #fff;
				position: relative;
			}

			.box {
				min-height: auto;
				height: auto;
				padding: 25px 30px;
				border-radius: 0;
				border-bottom-left-radius: 10px;
				border-bottom-right-radius: 10px;

				.line {
					.tit {
						width: 100px;
					}
				}
			}
		}
	}

	.table_wrap {

		// height:500px;
		.tabs {
			margin: 15px 0;
			// border-bottom: 2px solid $base-color;
			background: rgba(22, 120, 241, .1);
			border-radius: 6px;
			font-size: 15px;
			color: #333333;

			.tab {
				width: 130px;
				height: 46px;
				line-height: 46px;
				text-align: center;
				// padding: 10px 15px;
				cursor: pointer;

				&:hover {
					color: $base-color;
				}

				&.active {
					background: linear-gradient(180deg, rgba(49, 176, 249, .1) 0%, rgba(22, 120, 241, .1) 100%);
					border-radius: 2px;
					color: #1678F1;
					font-weight: bold;
					border-bottom: 4px solid #1678F1;
				}
			}
		}
	}

	.mask {
		.inner {
			.title {
				text {
					position: absolute;
					font-size: 14px;
					top: 50%;
					right: 0;
					transform: translateY(-50%);
					color: $base-color;
				}
			}

			.setting_box {
				width: 100%;
				height: 100%;
				background: rgba(0, 0, 0, 0.5);
				position: absolute;
				top: 0;
				left: 0;
				z-index: 100;

				.set_inner {
					width: 230px;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					z-index: 100;
					background: #fff;
					padding: 20px;
					border-radius: 6px;

					.subtit {
						font-size: 18px;
					}

					.line {
						padding-left: 10px;
						margin: 20px 0;

						.tit {
							width: 70px;
						}

						.input_wrap {
							width: calc(100% - 70px);
							height: 40px;
							line-height: 40px;
							border: 1px solid #eee;

							input {
								height: 40px;
								padding-left: 10px;
							}
						}
					}
				}

			}
		}
	}
</style>