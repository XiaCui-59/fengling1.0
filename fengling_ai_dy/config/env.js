// 测试环境
const dytest = {
	apiUrl: "https://api.test.swiftwd.com",
	aiApiUrl: "https://api.test.ai.swiftwd.com",
	// wssUrl: "wss://api.test.swiftwd.com/chat",
	wssUrl: "wss://api.test.ai.swiftwd.com/api/chat/",
	voiceUrl: "https://api.test.ai.swiftwd.com/api/chat/audio",
	imageUrl: "https://static.test.swiftwd.com",
	appid: 'tt762f0092e91e13f201',
	qqMapKey: "B7QBZ-ED46A-THIKR-CIG5N-EYPME-T2FNI"
}

// 生产环境
const dyproduction = {
	apiUrl: "https://api.swiftwd.com",
	aiApiUrl: "https://api.ai.swiftwd.com",
	// wssUrl: "wss://api.swiftwd.com/chat",
	wssUrl: "wss://api.ai.swiftwd.com/api/chat/",
	voiceUrl: "https://api.ai.swiftwd.com/api/chat/audio",
	imageUrl: "https://flash.static.swiftwd.com",
	appid: 'tt762f0092e91e13f201',
	qqMapKey: "LVNBZ-LELKA-K4YKN-CDAVY-FDIMQ-H3F2X"
}
// 注意:这里的属性名要和上面package.json中定义的扩展节点编译名称相同
const ENV_CONFIG = {
	dytest,
	dyproduction
}

module.exports = ENV_CONFIG