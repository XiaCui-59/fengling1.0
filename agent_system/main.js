import App from './App'
import request from 'common/request.js'
import jsonp from "common/jsonp.js"
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$jsonp = jsonp.jsonp
Vue.prototype.setPageName = function(item, id, status, preStatus, searObj) {
	let href;
	if (!id) {
		if (!status) {
			href = location.href.split("?")[0] + "?page_name=" + item.pageName
		} else {
			href = location.href.split("?")[0] + "?page_name=" + item.pageName + "&status=" + status
		}

	} else {
		if (!status) {
			if (!preStatus) {
				href = location.href.split("?")[0] + "?page_name=" + item.pageName + "&id=" + id
			} else {
				href = location.href.split("?")[0] + "?page_name=" + item.pageName + "&id=" + id + "&pre_stus=" +
					preStatus
			}

		} else {
			if (!preStatus) {
				href = location.href.split("?")[0] + "?page_name=" + item.pageName + "&id=" + id + "&status=" +
					status
			} else {
				href = location.href.split("?")[0] + "?page_name=" + item.pageName + "&id=" + id + "&status=" +
					status + "&pre_stus=" + preStatus
			}

		}
	}
	if ((item.pageName == "project_detail" || item.pageName == "project_list" || item.pageName == "edit_project" ||
			item.pageName == "revision_project") && searObj) {
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