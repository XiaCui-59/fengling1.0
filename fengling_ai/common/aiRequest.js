import urlSetting from "../url_setting";
const BASE_URL = urlSetting.urls.aiApiUrl
const aiRequest = (url = '', date = {}, type = 'GET', header = {
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
			console.log("response", response)
			let [error, res] = response;
			if (res.statusCode == 500) {
				console.log("系统内部发生错误")
			}
			// uni.hideLoading();
			resolve(res.data);
		}).catch(error => {
			let [err, res] = error;
			reject(err)
		})
	});
}
export default aiRequest