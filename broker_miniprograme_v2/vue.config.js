// 导入fs模块
const fs = require('fs')
// 导入环境变量配置文件
const ENV_CONFIG = require('./config/env.js')
const manifestPath = `${__dirname}/manifest.json`;
let Manifest = fs.readFileSync(manifestPath, {
	encoding: 'utf-8'
})

function replaceManifest(path, value) {
	const arr = path.split('.')
	const len = arr.length
	const lastItem = arr[len - 1]

	let i = 0
	let ManifestArr = Manifest.split(/\n/)

	for (let index = 0; index < ManifestArr.length; index++) {
		const item = ManifestArr[index]
		if (new RegExp(`"${arr[i]}"`).test(item)) ++i
		if (i === len) {
			const hasComma = /,/.test(item)
			ManifestArr[index] = item.replace(
				new RegExp(`"${lastItem}"[\\s\\S]*:[\\s\\S]*`),
				`"${lastItem}": ${value}${hasComma ? ',' : ''}`
			)
			break
		}
	}

	Manifest = ManifestArr.join('\n')
}

// 读取环境变量内容
const wechatAppid = ENV_CONFIG[process.env.UNI_SCRIPT].wechat.appid
if (wechatAppid) {
	replaceManifest('mp-weixin.appid', `"${wechatAppid}"`)
}
module.exports = {
	chainWebpack: config => {
		config
			.plugin('define')
			.tap(args => {
				args[0]['process.env.config'] = JSON.stringify(ENV_CONFIG)
				return args
			})
	}
}