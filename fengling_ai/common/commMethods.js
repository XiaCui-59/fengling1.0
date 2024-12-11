import request from "@/common/request.js"
export default {
	getElementInfo: function(className) {
		return new Promise((resolve) => {
			let info = uni.createSelectorQuery().select(className);
			info.boundingClientRect(function(data) { //data - 各种参数
				resolve(data)
			}).exec()
		})
	},
	getOpenid: function(header) {
		return new Promise(resolve => {
			uni.login({
				success: (res) => {
					if (res.errMsg == 'login:ok') {
						let url = ""
						let data = {
							code: res.code,
						}
						url = "/auth/worker/wechat/mini/openid"
						request(url, data, "POST", header).then(resp => {
							if (resp.code == 0) {
								uni.setStorage({
									key: "openid",
									data: resp.data.open_id
								})
								resolve(resp.data.open_id)
							}
						})
					}
				},
				fail(err) {
					console.log(err, "接口调用失败")
				}
			});
		})
	}
}