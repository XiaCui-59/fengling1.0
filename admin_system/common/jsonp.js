export default {
	jsonp: function jsonp(url, data, callback) {
		// 创建script标签
		let script = document.createElement('script')
		// 定义一个随机回调函数名
		let callbackName = 'jsonp_callback_' + parseInt(Math.random() * 100000)
		// 把回调函数名传到服务器
		data.callback = callbackName
		// 把回调函数名传到url上
		let params = []
		for (let key in data) {
			params.push(key + '=' + encodeURIComponent(data[key]))
		}
		url += '?' + params.join('&')
		// 定义回调函数
		window[callbackName] = function(data) {
			callback(data)
			document.body.removeChild(script)
		}
		// 插入script标签
		script.src = url
		document.body.appendChild(script)
	}
}