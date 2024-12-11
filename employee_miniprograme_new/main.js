import App from './App'
import request from 'common/request.js'
import customModal from "@/components/custom_modal.vue"
import aiChat from "@/components/ai_chat.vue"
import login from "@/components/login.vue"
import Vue from 'vue'
Vue.component("customModal", customModal)
Vue.component("aiChat", aiChat)
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
Vue.prototype.getUsrInfo = function() {
	return new Promise(resolve => {
		this.$request("/worker/profile").then(res => {
			if (res.code == 0) {
				uni.setStorageSync("userInfo", res.data)
				resolve(res.data)
			}
		})
	})
}
Vue.prototype.queryPubStatus = function() {
	return new Promise(resolve => {
		let token = uni.getStorageSync("token")
		if (token) {
			console.log("sdfdsgdfg")
			this.$request("/worker/wechat/official-account/is-subscribe").then(res => {
				if (res.code == 0) {
					resolve(res.data.subscribed)
				}
			})
		}
	})
}
App.mpType = 'app'
const app = new Vue({
	...App,
})
app.$mount()