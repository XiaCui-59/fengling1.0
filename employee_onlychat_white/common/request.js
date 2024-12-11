import urlSetting from "../url_setting";
const BASE_URL = urlSetting.urls.apiUrl
const request = (url = '', date = {}, type = 'GET', header = {
	"Content-Type": "application/json",
	"Authorization": "bearer " + uni.getStorageSync("token"),
	"accept": "application/json",
	"app-id": urlSetting.urls.appid,
	"open-id": !uni.getStorageSync("openid") ? "" : uni.getStorageSync("openid")
}) => {
	// if (url.indexOf("is-entry") == -1) {
	// 	uni.showLoading({
	// 		title: "加载中"
	// 	})
	// }
	return new Promise((resolve, reject) => {
		uni.request({
			method: type,
			url: BASE_URL + url,
			data: date,
			header: header,
			dataType: 'json',
		}).then((response) => {
			let [error, res] = response;
			if (res.statusCode == 500) {
				uni.showModal({
					title: "系统内部发生错误",
					showCancel: false
				})
			}
			console.log(res.data.code, "datacode")
			if (res.data.code == -1) {
				uni.removeStorageSync("token")
				// uni.showModal({
				// 	title: "提示",
				// 	content: "您还未登录，或登录已过期，请重新登录。",
				// 	success(resp) {
				// 		if (resp.confirm) {
				// 			uni.navigateTo({
				// 				url: "/pages/login/login"
				// 			})
				// 		}
				// 	}
				// })
			}
			//  else if (res.data.code == 4000100) {
			// 	// 未实名认证
			// 	uni.showModal({
			// 		title: res.data.msg,
			// 		confirmText: "去认证",
			// 		success(resp) {
			// 			if (resp.confirm) {
			// 				uni.navigateTo({
			// 					url: "/subpkg/authentication/authentication"
			// 				})
			// 			}
			// 		}
			// 	})
			// } 
			else if (res.data.code == 3000100) {
				uni.showToast({
					title: "账号被冻结",
					icon: "error",
					duration: 3000
				})
				uni.removeStorageSync("token")
				setTimeout(function() {
					uni.redirectTo({
						url: "/pages/work/work"
					})
				}, 3000)
			} else if (res.data.code != 0) {
				console.log("出错啦")
				uni.showModal({
					title: res.data.msg,
					showCancel: false
				})
			}
			// uni.hideLoading();
			resolve(res.data);
		}).catch(error => {
			let [err, res] = error;
			reject(err)
		})
	});
}
export default request