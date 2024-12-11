import App from './App'
import request from 'common/request.js'
import jsonp from "common/jsonp.js"
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$jsonp = jsonp.jsonp
Vue.prototype.getAnchors = function() {
	return new Promise(resolve => {
		let anchorRange = []
		this.$request("/admin/live-hosts/all").then(res => {
			if (res.code == 0) {
				let len = res.data.list.length
				for (let i = 0; i < len; i++) {
					let obj = {
						value: res.data.list[i].code,
						text: res.data.list[i].stage_name
					}
					anchorRange.push(JSON.parse(JSON.stringify(obj)))
				}
				resolve(anchorRange)
			}
		})
	})

}
Vue.prototype.getLive = function() {
	return new Promise(resolve => {
		let liveRange = []
		this.$request("/admin/live-accounts/all").then(res => {
			if (res.code == 0) {
				let len = res.data.list.length
				for (let i = 0; i < len; i++) {
					let obj = {
						value: res.data.list[i].code,
						text: res.data.list[i].name
					}
					liveRange.push(JSON.parse(JSON.stringify(obj)))
				}
				resolve(liveRange)
			}
		})
	})

}
Vue.prototype.getKefu = function() {
	return new Promise(resolve => {
		let kefuRange = []
		let url = "/admin/wework/customer-service/accounts?page=1&page_size=20"
		this.$request(url).then(res => {
			if (res.code == 0) {
				let len = res.data.length
				for (let i = 0; i < len; i++) {
					let obj = {
						value: res.data[i].open_kfid,
						text: res.data[i].name
					}
					kefuRange.push(JSON.parse(JSON.stringify(obj)))
				}
				resolve(kefuRange)
			}
		})

	})

}
Vue.prototype.setPageName = function(item, id, status, preStatus, searObj) {
	let href = location.href.split("?")[0] + "?page_name=" + item.pageName;
	if (id) {
		href = href + "&id=" + id
	}
	if (status) {
		href = href + "&status=" + status
	}
	if (preStatus) {
		href = href + "&pre_stus=" + preStatus
	}
	if ((item.pageName == "recommend_detail" || item.pageName == "recommend_position" || item.pageName ==
			"project_detail" || item.pageName == "project_list" || item.pageName == "edit_project" ||
			item.pageName == "revision_project" || item.pageName == "collect_project" || item.pageName ==
			"edit_collect_project") && searObj) {
		if (searObj.company) {
			href = href + "&company=" + searObj.company
		}
		if (searObj.searPro) {
			href = href + "&searpro=" + searObj.searPro
		}
		if (searObj.start) {
			href = href + "&start=" + searObj.start +
				"&end=" + searObj.end
		}
		if (searObj.page) {
			href = href + "&pgindex=" + searObj.page
		}
	}
	// 修改URL而不刷新页面
	window.history.pushState({}, "", href);
}
// Vue.prototype.setPageName = function(item, id, status, preStatus, searObj) {
// 	let href;
// 	if (!id) {
// 		if (!status) {
// 			href = location.href.split("?")[0] + "?page_name=" + item.pageName
// 		} else {
// 			href = location.href.split("?")[0] + "?page_name=" + item.pageName + "&status=" + status
// 		}

// 	} else {
// 		if (!status) {
// 			if (!preStatus) {
// 				href = location.href.split("?")[0] + "?page_name=" + item.pageName + "&id=" + id
// 			} else {
// 				href = location.href.split("?")[0] + "?page_name=" + item.pageName + "&id=" + id + "&pre_stus=" +
// 					preStatus
// 			}

// 		} else {
// 			if (!preStatus) {
// 				href = location.href.split("?")[0] + "?page_name=" + item.pageName + "&id=" + id + "&status=" +
// 					status
// 			} else {
// 				href = location.href.split("?")[0] + "?page_name=" + item.pageName + "&id=" + id + "&status=" +
// 					status + "&pre_stus=" + preStatus
// 			}

// 		}
// 	}
// 	if ((item.pageName == "recommend_detail" || item.pageName == "recommend_position" || item.pageName ==
// 			"project_detail" || item.pageName == "project_list" || item.pageName == "edit_project" ||
// 			item.pageName == "revision_project" || item.pageName == "collect_project" || item.pageName ==
// 			"edit_collect_project") && searObj) {
// 		if (searObj.company) {
// 			href = href + "&company=" + searObj.company
// 		}
// 		if (searObj.searPro) {
// 			href = href + "&searpro=" + searObj.searPro
// 		}
// 		if (searObj.start) {
// 			href = href + "&start=" + searObj.start +
// 				"&end=" + searObj.end
// 		}
// 		if (searObj.page) {
// 			href = href + "&pgindex=" + searObj.page
// 		}
// 	}
// 	// 修改URL而不刷新页面
// 	window.history.pushState({}, "", href);
// }
App.mpType = 'app'
const app = new Vue({
	...App,
})
app.$mount()