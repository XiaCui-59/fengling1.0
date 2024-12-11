// 测试环境
const test = {
	apiUrl: "https://api.test.swiftwd.com",
	wssUrl: "wss://api.test.swiftwd.com/chat",
	imageUrl: "https://static.test.swiftwd.com",
	appid: 'wx4c07bc53643db85e',
	qqMapKey: "B7QBZ-ED46A-THIKR-CIG5N-EYPME-T2FNI"
}

// 生产环境
const production = {
	apiUrl: "https://api.swiftwd.com",
	wssUrl: "wss://api.swiftwd.com/chat",
	imageUrl: "https://static.swiftwd.com",
	appid: 'wxba7ae6c3643ac944',
	qqMapKey: "LVNBZ-LELKA-K4YKN-CDAVY-FDIMQ-H3F2X"
}
const kstest = {
	apiUrl: "https://api.test.swiftwd.com",
	imageUrl: "https://static.test.swiftwd.com",
	appid: "ks703687445049880929",
	qqMapKey: ""
}
const ksproduction = {
	apiUrl: "https://api.swiftwd.com",
	imageUrl: "https://static.swiftwd.com",
	appid: "ks703687445049880929",
	qqMapKey: ""
}
const dytest = {
	apiUrl: "https://api.test.swiftwd.com",
	imageUrl: "https://static.test.swiftwd.com",
	appid: "tt762f0092e91e13f201",
	qqMapKey: ""
}
const dyproduction = {
	apiUrl: "https://api.swiftwd.com",
	imageUrl: "https://static.swiftwd.com",
	appid: "tt762f0092e91e13f201",
	qqMapKey: ""
}
const bdproduction = {
	apiUrl: "https://api.test.swiftwd.com",
	imageUrl: "https://static.test.swiftwd.com",
	// apiUrl: "https://api.swiftwd.com",
	// imageUrl: "https://static.swiftwd.com",
	appid: "60673337",
	qqMapKey: ""
}
// 注意:这里的属性名要和上面package.json中定义的扩展节点编译名称相同
const ENV_CONFIG = {
	test,
	production,
	kstest,
	ksproduction,
	dytest,
	dyproduction,
	bdproduction
}

module.exports = ENV_CONFIG