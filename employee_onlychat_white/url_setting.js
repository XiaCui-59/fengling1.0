console.log(process.env.config[process.env.ENV_TYPE], "process.env.NODE_ENV")
export default {
	urls: {
		apiUrl: process.env.config[process.env.ENV_TYPE].apiUrl,
		imageUrl: process.env.config[process.env.ENV_TYPE].imageUrl,
		appid: process.env.config[process.env.ENV_TYPE].appid,
		wssUrl: process.env.config[process.env.ENV_TYPE].wssUrl,
		qqMapKey: process.env.config[process.env.ENV_TYPE].qqMapKey
	}
}