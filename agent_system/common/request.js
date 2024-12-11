// const BASE_URL = "https://api.test.swiftwd.com" //开发环境
const BASE_URL = "https://api.swiftwd.com" //正式环境
// import JSONbig from 'json-bigint'
const request = (url = '', date = {}, type = 'GET', header = {
	"Content-Type": "application/json",
	"Authorization": "bearer " + uni.getStorageSync("token"),
	"accept": "application/json"
}) => {
	return new Promise((resolve, reject) => {
		uni.request({
			method: type,
			url: BASE_URL + url,
			data: date,
			header: header,
			dataType: 'text',
		}).then((response) => {
			setTimeout(function() {
				uni.hideLoading();
			}, 200);
			let [error, res] = response;
			if (res.statusCode == 500) {
				uni.showModal({
					title: "系统内部发生错误",
					showCancel: false
				})
			}
			// const jsonBigint = require('json-bigint')({
			// 	storeAsString: true
			// });
			// res = jsonBigint.parse(res.data);
			let respon = JSON.parse(res.data)
			if (respon.code == -1) {
				uni.showModal({
					title: "登录状态异常，请重新登录。",
					showCancel: false,
					success(resp) {
						if (resp.confirm) {
							uni.clearStorage()
							uni.redirectTo({
								url: "/pages/login/login"
							})
						}
					}
				})
			} else if (respon.code == 2000100) {
				// 经纪人账号被冻结
				uni.showModal({
					title: "您的账号已被冻结，无法使用系统。",
					showCancel: false,
					success(resp) {
						if (resp.confirm) {
							uni.clearStorage()
							uni.redirectTo({
								url: "/pages/login/login"
							})
						}
					}
				})
			} else if (respon.code != 0) {
				uni.showModal({
					title: respon.msg,
					showCancel: false
				})
			}
			resolve(respon);
		}).catch(error => {
			let [err, res] = error;
			reject(err)
		})
	});
}
export default request