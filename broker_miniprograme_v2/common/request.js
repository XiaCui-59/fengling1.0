import urlSetting from "../url_setting";
const BASE_URL = urlSetting.urls.apiUrl
const request = (url = '', date = {}, type = 'GET', header = {
	"Content-Type": "application/json",
	"Authorization": "bearer " + uni.getStorageSync("token"),
	"accept": "application/json",
	"app-id": process.env.config[process.env.ENV_TYPE].wechat.appid
}) => {
	return new Promise((resolve, reject) => {
		uni.request({
			method: type,
			url: BASE_URL + url,
			data: date,
			header: header,
			dataType: 'json',
		}).then((response) => {
			setTimeout(function() {
				uni.hideLoading({
					noConflict: true
				});
			}, 200);
			let [error, res] = response;
			if (res.statusCode == 500) {
				uni.showModal({
					title: "系统内部发生错误",
					showCancel: false
				})
			}
			if (res.data.code == -1) {
				uni.clearStorage()
				// uni.showModal({
				// 	title: "提示",
				// 	content: "您未登录或登录状态已过期，请重新登录。",
				// 	success(resp) {
				// 		if (resp.confirm) {
				// 			uni.navigateTo({
				// 				url: "/pages/login/login"
				// 			})
				// 		}
				// 	}
				// })
			} else if (res.data.code == 2000100) {
				// 经纪人账号被冻结
				uni.showModal({
					title: "账号被冻结",
					content: "您的账号已被冻结，无法使用系统。",
					showCancel: false,
					success(resp) {
						if (resp.confirm) {
							uni.clearStorage()
							// uni.redirectTo({
							// 	url: "/pages/login/login"
							// })
						}
					}
				})
			} else if (res.data.code != 0) {
				uni.showModal({
					title: res.data.msg,
					showCancel: false
				})
			}
			resolve(res.data);
		}).catch(error => {
			let [err, res] = error;
			reject(err)
		})
	});
}
export default request