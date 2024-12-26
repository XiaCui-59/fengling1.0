export default {
	rechargeStatus: [{
			value: "processing",
			text: "充值中"
		},
		{
			value: "success",
			text: "充值成功"
		},
		{
			value: "failed",
			text: "充值失败"
		},
	],
	payChannel: [{
			value: "wechat",
			text: "微信支付"
		},
		{
			value: "creditpay",
			text: "积分支付"
		}
	],
	channelStatus: [{
			value: "",
			text: "全部"
		},
		{
			value: "pending_online",
			text: "待上线"
		}, {
			value: "already_online",
			text: "已上线"
		},
		{
			value: "already_deleted",
			text: "已删除"
		},
	],
	inviteMethods: [{
			value: "",
			text: "全部"
		},
		{
			value: "wechat_friend",
			text: "微信聊天"
		}, {
			value: "wechat_moment",
			text: "朋友圈"
		},
		{
			value: "qrcode",
			text: "二维码海报"
		},
		{
			value: "link",
			text: "小程序链接"
		}
	],
	txStatus: [{
			value: "",
			text: "全部"
		}, {
			value: "pending",
			text: "待转账"
		}, {
			value: "transferring",
			text: "转账中"
		},
		{
			value: "success",
			text: "转账成功"
		},
		{
			value: "failed",
			text: "转账失败"
		},
		{
			value: "revoked",
			text: "已撤回"
		}
	],
	payMethods: [{
		value: "wechat_pc",
		channel: "wechat",
		text: "微信充值",
		img: "/static/ic_pay_wechat.png",
		desc: "实时到账，不支持信用卡"
	}, {
		value: "alipay_pc",
		channel: "alipay",
		text: "支付宝充值",
		img: "/static/ic_pay_alipay.png",
		desc: "实时到账，不支持信用卡"
	}, {
		value: "union_pay",
		channel: "union",
		text: "企业网银",
		img: "/static/ic_pay_union.png",
		desc: "实时到账，不支持信用卡"
	}],
	scene: [{
			value: "none",
			text: "无场景"
		},
		{
			value: "homepage",
			text: "视频号主页"
		},
		{
			value: "live_room_product",
			text: "商品列表页"
		},
		{
			value: "product_showcase",
			text: "商品橱窗页"
		},
		{
			value: "shop_product_detail",
			text: "视频号主页"
		},
		{
			value: "live_room_product",
			text: "商品详情页"
		},
		{
			value: "shop_order",
			text: "小店订单页"
		}
	],
	livePlatform: [{
			value: "wechat_video_channel",
			text: "视频号"
		},
		{
			value: "douyin",
			text: "抖音"
		},
		{
			value: "kuaishou",
			text: "快手"
		}
	],
	workerStatus: [{
			value: "enrolled",
			text: "待初筛",
			count: 0
		}, {
			value: "wait_check_in",
			text: "候选中",
			count: 0
		},
		{
			value: "check_in",
			text: "待面试",
			count: 0
		},
		{
			value: "wait_entry",
			text: "待入职",
			count: 0
		},
		{
			value: "entry",
			text: "已入职",
			count: 0
		},
		{
			value: "",
			text: "全部",
			count: 0
		},
		{
			value: "depart",
			text: "已离职",
			count: 0
		},
		{
			value: "enroll_rejected",
			text: "初筛拒绝",
			count: 0
		},
		{
			value: "not_check_in",
			text: "候选拒绝",
			count: 0
		},
		{
			value: "contract_rejected",
			text: "面试未通过",
			count: 0
		},
		{
			value: "not_entry",
			text: "未入职",
			count: 0
		},
	],
	projectStatus: [{
			value: "waiting_set_platform_fee",
			text: "待设置费用"
		},
		{
			value: "waiting_submit_platform_review",
			text: "待提审"
		},
		{
			value: "platform_reviewing",
			text: "审核中"
		},
		{
			value: "platform_review_rejected",
			text: "审核拒绝"
		},
		{
			value: "running",
			text: "进行中"
		},
		{
			value: "finished",
			text: "已完结"
		}
	],
	collectProStatus: [{
			value: "wait_released",
			text: "待发布"
		}, {
			value: "released",
			text: "已发布"
		},
		{
			value: "",
			text: "全部"
		}
	],
	cleaningStatus: [{
			value: "cleaning",
			text: "清洗中"
		},
		{
			value: "waiting_check_out",
			text: "待校对"
		},
		{
			value: "checked_out",
			text: "已校对"
		}
	],
	planStatus: [{
			value: "to_be_started",
			text: "待启动"
		},
		{
			value: "started",
			text: "进行中"
		},
		{
			value: "done",
			text: "完结"
		}
	],
	periodList: [{
			value: "hour",
			text: "/时"
		},
		{
			value: "day",
			text: "/天"
		},
		{
			value: "week",
			text: "周"
		},
		{
			value: "month",
			text: "/月"
		},
	],
	workerFrom: [{
			value: "wechat_mini_program",
			text: "微信小程序"
		},
		{
			value: "kuaishou",
			text: "快手"
		},
		{
			value: "wechat_official_account",
			text: "微信公众号"
		},
		{
			value: "douyin",
			text: "抖音"
		},
		{
			value: "baidu",
			text: "百度小程序"
		},
		{
			value: "web",
			text: "网页"
		},
		{
			value: "wework",
			text: "企业微信"
		},
		{
			value: "system",
			text: "系统"
		},
		{
			value: "wechat_video_channel",
			text: "微信视频号"
		}
	],
	chatFrom: [{
			value: "wework",
			text: "企业微信客服"
		},
		{
			value: "wechat_mini_program",
			text: "微信小程序"
		},
	],
	adMainPlat: [{
			value: "kuaishou",
			text: "快手"
		},
		{
			value: "tencent",
			text: "腾讯"
		},
		{
			value: "douyin",
			text: "抖音"
		},
		{
			value: "netbar",
			text: "网吧"
		}
	],
	adSubPlat: [{
			value: "wechat_pyq",
			text: "微信朋友圈"
		},
		{
			value: "wechat_mp",
			text: "微信公众号"
		},
		{
			value: "qq",
			text: "QQ"
		},
		{
			value: "desktop",
			text: "电脑桌面"
		}
	],
	loginStatus: [{
			value: "",
			text: "全部"
		},
		{
			value: "normal",
			text: "允许登录"
		},
		{
			value: "frozen",
			text: "禁止登录"
		}
	],
	veriStatus: [{
			value: "",
			text: "全部"
		},
		{
			value: "waiting_submit",
			text: "待提交"
		},
		{
			value: "reviewing",
			text: "审核中"
		},
		{
			value: "approved",
			text: "已通过"
		},
		{
			value: "rejected",
			text: "已拒绝"
		}
	]
}