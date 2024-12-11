console.log(process.env.config[process.env.ENV_TYPE], "process.env.NODE_ENV")
export default {
	urls: {
		aiApiUrl: process.env.config[process.env.ENV_TYPE].aiApiUrl,
		apiUrl: process.env.config[process.env.ENV_TYPE].apiUrl,
		imageUrl: process.env.config[process.env.ENV_TYPE].imageUrl,
		appid: process.env.config[process.env.ENV_TYPE].appid,
		wssUrl: process.env.config[process.env.ENV_TYPE].wssUrl,
		qqMapKey: process.env.config[process.env.ENV_TYPE].qqMapKey,
		voiceUrl: process.env.config[process.env.ENV_TYPE].voiceUrl,
		jobList: process.env.config[process.env.ENV_TYPE].jobList,
	}
}