// 测试环境
const test = {
	apiUrl: "https://api.test.swiftwd.com",
	imageUrl: "https://static.test.swiftwd.com",
	wechat: {
		appid: "wxaefe465c891721e8",
		qqMapKey: "ASQBZ-F6HWL-6CPPO-MDQDC-5TKFS-6NFT5"
	},
	kaishou: {
		appid: "ks703687445049880929",
		qqMapKey: ""
	}
}

// 生产环境
const production = {
	apiUrl: "https://api.swiftwd.com",
	imageUrl: "https://static.swiftwd.com",
	wechat: {
		appid: "wxb97fbf3edffb4398",
		qqMapKey: "ASQBZ-F6HWL-6CPPO-MDQDC-5TKFS-6NFT5"
	},
	kaishou: {
		appid: "ks703687445049880929",
		qqMapKey: ""
	}
}
// 注意:这里的属性名要和上面package.json中定义的扩展节点编译名称相同
const ENV_CONFIG = {
	test,
	production
}

module.exports = ENV_CONFIG