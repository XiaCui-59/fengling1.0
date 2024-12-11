export default {
	status: [{
			value: "pending",
			text: "待处理"
		},
		{
			value: "rejected",
			text: "报名拒绝"
		},
		{
			value: "signing_expired",
			text: "报名过期"
		},
		{
			value: "approved",
			text: "待签约"
		},
		{
			value: "contracted",
			text: "签约成功"
		},
		{
			value: "contract_expired",
			text: "签约过期"
		},
		{
			value: "worker_rejected",
			text: "签约拒绝"
		},
		{
			value: "quited",
			text: "已离职"
		},
		{
			value: "end",
			text: "职位关闭"
		}
	],
	workerStatus: [{
			value: "",
			text: "全部状态",
			icon: "/broker/ic_checkin.png",
			checked: false
		}, {
			value: "wait_check_in",
			text: "候选中",
			icon: "/broker/ic_checkin.png",
			checked: false
		},
		{
			value: "check_in",
			text: "待面试",
			icon: "/broker/ic_wait_sign.png",
			checked: false
		},
		{
			value: "wait_entry",
			text: "待入职",
			icon: "/broker/ic_wait_entry.png",
			checked: false
		},
		{
			value: "entry",
			text: "已入职",
			icon: "/broker/ic_entry.png",
			checked: false
		},
		{
			value: "not_check_in",
			text: "候选拒绝",
			icon: "/broker/ic_not_come.png",
			checked: false
		},
		{
			value: "contract_rejected",
			text: "面试未通过",
			icon: "/broker/ic_not_sign.png",
			checked: false
		},
		{
			value: "depart",
			text: "已离职",
			icon: "/broker/ic_depart.png",
			checked: false
		},
		{
			value: "not_entry",
			text: "未入职",
			icon: "/broker/ic_depart.png",
			checked: false
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
	paySalaryPeriod: [{
			value: "daily",
			text: "按天"
		},
		{
			value: "weekly",
			text: "按周"
		},
		{
			value: "monthly",
			text: "按月"
		}
	],
	paySalaryWeekly: [{
			value: "0",
			text: "星期天"
		},
		{
			value: "1",
			text: "星期一"
		},
		{
			value: "2",
			text: "星期二"
		},
		{
			value: "3",
			text: "星期三"
		},
		{
			value: "4",
			text: "星期四"
		},
		{
			value: "5",
			text: "星期五"
		},
		{
			value: "6",
			text: "星期六"
		}
	],
	baseStatus: [{
			value: "reviewing",
			text: "审核中",
			btnText: ""
		},
		{
			value: "approved",
			text: "已认证",
			btnText: ""
		},
		{
			value: "rejected",
			text: "认证失败",
			btnText: "重新认证"
		},
		{
			value: "waiting_submit",
			text: "待认证",
			btnText: "去认证"
		}
	],
}