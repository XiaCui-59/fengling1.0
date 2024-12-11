// 测试环境
const test = {
	apiUrl: "https://api.test.swiftwd.com",
	aiApiUrl: "https://api.test.ai.swiftwd.com",
	// wssUrl: "wss://api.test.swiftwd.com/chat",
	wssUrl: "wss://api.test.ai.swiftwd.com/api/chat/",
	voiceUrl: "https://api.test.ai.swiftwd.com/api/chat/audio",
	imageUrl: "https://static.test.swiftwd.com",
	appid: 'wx4c07bc53643db85e',
	qqMapKey: "B7QBZ-ED46A-THIKR-CIG5N-EYPME-T2FNI"
}

// 生产环境
const production = {
	apiUrl: "https://api.swiftwd.com",
	aiApiUrl: "https://api.ai.swiftwd.com",
	// wssUrl: "wss://api.swiftwd.com/chat",
	wssUrl: "wss://api.ai.swiftwd.com/api/chat/",
	voiceUrl: "https://api.ai.swiftwd.com/api/chat/audio",
	imageUrl: "https://flash.static.swiftwd.com",
	appid: 'wxba7ae6c3643ac944',
	qqMapKey: "LVNBZ-LELKA-K4YKN-CDAVY-FDIMQ-H3F2X"
}
// 注意:这里的属性名要和上面package.json中定义的扩展节点编译名称相同
const ENV_CONFIG = {
	test,
	production
}

module.exports = ENV_CONFIG