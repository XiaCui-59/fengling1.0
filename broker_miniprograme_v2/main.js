import App from './App'
import request from 'common/request.js'
import customModal from "@/components/custom_modal.vue"
import login from "@/components/login.vue"
import uView from '@/uni_modules/uview-ui'
import Vue from 'vue'
Vue.use(uView)
Vue.component("customModal", customModal)
Vue.component("login", login)
Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.isLogin = function() {
	let token = uni.getStorageSync("token")
	if (!token) {
		return false
	} else {
		return true
	}
}
Vue.prototype.getTodoStatic = function() {
	return new Promise(resolve => {
		this.$request("/broker/mini/todo/stat").then(res => {
			if (res.code == 0) {
				let response = {
					"attendance_record": res.data.attendance_record,
					"project": res.data.project,
					"project_bill": res.data.project_bill,
					"total": res.data.attendance_record + res.data.project + res.data
						.project_bill
				}
				resolve(response)
			}
		})
	})
}
Vue.prototype.queryPubStatus = function() {
	return new Promise(resolve => {
		let token = uni.getStorageSync("token")
		if (token) {
			console.log("sdfdsgdfg")
			this.$request("/broker/mini/wechat/official-account/is-subscribe").then(res => {
				if (res.code == 0) {
					resolve(res.data.subscribed)
				}
			})
		}
	})
}
Vue.prototype.getInfo = function() {
		return new Promise(resolve => {
			this.$request("/broker/info").then(res => {
				if (res.code == 0) {
					resolve(res.data)
				}
			})
		})

	},
	Vue.prototype.loadImage = function(baseUrl, type, filePath) {
		let header = {
			"Authorization": "bearer " + uni.getStorageSync("token"),
			"accept": "application/json",
			// "content-type": "multipart/form-data"
		}
		uni.showLoading()
		return new Promise((resolve, reject) => {
			uni.uploadFile({
				url: baseUrl + "/broker/upload?type=" + type,
				filePath: filePath,
				name: "file",
				header: header,
				success(resp) {
					var response = JSON.parse(resp.data);
					if (response.code == 0) {
						uni.showToast({
							title: "图片上传成功"
						})
						resolve(response.data)
					} else {
						uni.showModal({
							title: "上传失败",
							content: response.msg
						})
					}
				},
				complete() {
					uni.hideLoading();
				}
			})
		})
	}
App.mpType = 'app'
const app = new Vue({
	...App,
})
app.$mount()
// console.log(App.globalData.showPubTabbar, "App")