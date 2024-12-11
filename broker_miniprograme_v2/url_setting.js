console.log(process.env.config[process.env.ENV_TYPE], "process.env.NODE_ENV")
export default {
	urls: {
		apiUrl: process.env.config[process.env.ENV_TYPE].apiUrl,
		imageUrl: process.env.config[process.env.ENV_TYPE].imageUrl,
		mapKey: process.env.config[process.env.ENV_TYPE].wechat.qqMapKey
	}
}