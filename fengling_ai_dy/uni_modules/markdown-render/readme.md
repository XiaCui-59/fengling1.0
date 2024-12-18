# markdown-render

### 简介

**markdown文档解析，提供流式输出效果的简单案例**

### 使用方法

**符合`easycom`组件模式，导入 `uni_modules` 后直接使用即可**

在`template`中使用代码块即可:`<markdown-render :sourceMdContent="sourceMdContent" :showCursor="false"></markdown-render>`

**也可以导入示例项目体验**

### 参数

| 参数									| 类型		| 默认值| 描述																																																						|
| :--------								| :--------	| :---	| :--------------------																																																		|
| sourceMdContent						| String	|   	| markdown文本		
| showCursor						    | Boolean	| false	| 流式输出的时候结尾是否显示闪烁效果		

## Tips

### markdown渲染emoji字符串

使用了`markdown-it-emoji`，它是`markdown-it`的一个插件,需要搭配使用

具体使用方法:[https://github.com/markdown-it](https://github.com/markdown-it)

在`general-parse.vue`文件切换下面的引用，可以查看`markdown-it-emoji`的所有表情

```javascript
import emojies_defs from '@/uni_modules/markdown-render/static/full-light.json';
// import emojies_defs from '@/uni_modules/markdown-render/static/full.mjs';
```

### 怎么预览流式输出效果

示例项目的`stream-parse.vue`文件提供了一个调用AI助手接口的简单示例，由于`uni.request()`只在微信小程序上支持流式响应，所以在APP端(H5)使用了`renderjs`，如下：

``` javascript
<script module="streamMd" lang="renderjs">
 // 省略...
fetch(config.baseUrl, {
	method: 'POST',
	headers: {
		Authorization: 'Bearer '+ config.key,
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		model: 'moonshot-v1-8k',
		messages: this.historyMsgList,
		temperature: 0.3,
		stream: true
	})
}).then(async res => {
  // 省略...
}).catch(err => {
	console.log('error:', err);
})
 // 省略...
</script>
```
我这里使用了`Kimi`助手的API(不是广告🙉🙉🙉!)，目前我的key还有一些余额，可以供大家预览看效果，也可以直接替换成你自己的key，如果是其它平台的账号，比如gpt，请自行替换根目录下`config.js`文件参数配置，根据各平台接口返回的stream流进行解析即可

```javascript
 {
	"id": "chatcmpl-e979406c090d4c3bbbfea0ef39c01cd4",
	"object": "chat.completion.chunk",
	"created": 88888,
	"model": "moonshot-v1-8k",
	"choices": [{
		"index": 0,
		"delta": {
			"content": " sorted"
		},
		"finish_reason": null
	}]
}
```

其中`content`字段就是需要渲染的markdown文档字符串，可能有些平台它的返回结果字段不一致，需要自己修改一下`stream-parse.vue`里面`resviceMsg`方法拼接字符串的逻辑

### 关于markdown某些样式在小程序不生效问题

比如我自定义了a链接的颜色，我在css中这样定义，在APP、H5是正常改变了颜色，但是在小程序中预览没有效果

```css
.rich-content ::v-deep a {
	color: #1890ff;
}
```

解决方法,添加类名,再单独写样式,如下:

``` js
// 微信小程序里面代码块需要自定义类名才可以更改样式
// #ifdef MP-WEIXIN
htmlString = htmlString.replace(/\<img/gi, '<img class="my-custom-img"');
htmlString = htmlString.replace(/\<a/gi, '<a class="my-custom-a"');
htmlString = htmlString.replace(/\<blockquote/gi, '<blockquote class="my-custom-blockquote"');
htmlString = htmlString.replace(/\<table/gi, '<table  class="my-custom-table"');
htmlString = htmlString.replace(/\<td/gi, '<td class="my-custom-table-td"');
// 只替换<th标签，不替换 thead
htmlString = htmlString.replace(/(?!.*<thead>)(.*?)<th/g, (match) => match.replace('<th', '<th class="my-custom-table-th"'));
// #endif
```

``` css
.rich-content ::v-deep a,
.my-custom-a {
	color: #1890ff;
}
```

### 完结撒花 ✿✿ヽ(°▽°)ノ✿
