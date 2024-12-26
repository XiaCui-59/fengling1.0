import App from './App'
import request from 'common/request.js'
import aiRequest from 'common/aiRequest.js'
import myModal from "@/components/myModal.vue"
// 全局引用分享功能
import share from '@/mixins/share.js'
import store from "@/store/store.js"
import Vue from 'vue'
Vue.mixin(share)
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
Vue.component("myModal", myModal)
Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$aiRequest = aiRequest
Vue.prototype.$store = store
Vue.prototype.isLogin = function() {
	let loginStatus = uni.getStorageSync("loginStatus") == "in" ? true : false
	if (loginStatus) {
		// 登录
		return true
	} else {
		return false
	}
}
App.mpType = 'app'
const app = new Vue({
	store,
	...App,
})
app.$mount()