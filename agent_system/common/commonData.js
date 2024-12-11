export default {
	workerStatus: [{
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
	payMethods: [{
			value: "wechat_pc",
			channel: "wechat",
			text: "微信充值",
			img: "/static/ic_pay_wechat.png",
			desc: "实时到账，不支持信用卡"
		},
		{
			value: "alipay_pc",
			channel: "alipay",
			text: "支付宝充值",
			img: "/static/ic_pay_alipay.png",
			desc: "实时到账，不支持信用卡"
		},
		// {
		// 	value: "union_pay",
		// 	channel: "union",
		// 	text: "企业网银",
		// 	img: "/static/ic_pay_union.png",
		// 	desc: "实时到账，不支持信用卡"
		// },
	],
	projectStatus: [{
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
}