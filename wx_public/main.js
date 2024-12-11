import App from './App'
import request from 'common/request.js'
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$request = request
App.mpType = 'app'
const app = new Vue({
  ...App,
})
app.$mount()
