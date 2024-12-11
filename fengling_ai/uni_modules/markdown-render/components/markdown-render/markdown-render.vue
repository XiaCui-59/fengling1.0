<template>
	<view class="content">
		<view class="rich-content" :class="{ 'show-cursor': showCursor }" ref="rich-content">
			<rich-text space="nbsp" :nodes="nodes" @itemclick="codeCopy"></rich-text>
		</view>
	</view>
</template>

<script>
	import MarkdownIt from '../../static/js/markdown-it.min.js';
	import hljs from '../../static/js/highlight.min.js';
	import parseHtml from '../../static/js/html-parser.js';
	import MarkdownItEmoji from '../../static/js/markdown-it-emoji.min.js';
	let codeDataList = [];
	const markdownIt = MarkdownIt({
		html: true,
		highlight: function(str, lang) {
			let preCode = '';
			try {
				preCode = hljs.highlightAuto(str).value;
			} catch (err) {
				console.log('err', err);
				preCode = markdownIt.utils.escapeHtml(str);
			}
			// 以换行进行分割
			const lines = preCode.split(/\n/).slice(0, -1);
			// 添加自定义行号
			let html = lines
				.map((item, index) => {
					// 去掉空行
					if (item == '') {
						return '';
					}
					return '<li><span data-line="' + (index + 1) + '"></span>' + item + '</li>';
				})
				.join('');
			html = '<ol style="padding: 0px 30px;">' + html + '</ol>';

			// 代码复制
			codeDataList.push(str);
			let htmlCode =
				`<div style="background:#0d1117;margin-top: 5px;color: #888;padding:5px 0;border-radius: 5px;">`; // 外面一层元素背景色要跟代码块保持一致
			// #ifndef MP-WEIXIN
			htmlCode += `<div style="text-align: end;font-size: 12px;">`;
			htmlCode +=
				`${lang}<a class="copy-btn" code-data-index="${codeDataList.length - 1}" style="cursor: pointer;"> 复制代码 </a>`;
			htmlCode += `</div>`;
			// #endif
			htmlCode +=
				`<pre class="hljs" style="padding:0 8px;margin-bottom:5px;overflow: auto;display: block;border-radius: 5px;"><code>${html}</code></pre>`;
			htmlCode += '</div>';
			return htmlCode;
		}
	});
	// Emoji表情
	markdownIt.use(MarkdownItEmoji);

	export default {
		name: 'markdown-render',
		props: {
			// 显示闪烁的效果
			showCursor: {
				type: Boolean,
				default () {
					return false;
				}
			},
			sourceMdContent: {
				type: String,
				default () {
					return '';
				}
			}
		},
		data() {
			return {};
		},
		computed: {
			nodes() {
				if (!this.sourceMdContent) {
					return;
				}
				let htmlString = '';
				if (this.sourceMdContent.split('```').length % 2) {
					let sourceMdContent = this.sourceMdContent;
					if (sourceMdContent[sourceMdContent.length - 1] != '\n') {
						sourceMdContent += '\n';
					}
					sourceMdContent += ' <span class="cursor"></span>';
					htmlString = markdownIt.render(sourceMdContent);
				} else {
					htmlString = markdownIt.render(this.sourceMdContent) + ' \n <span class="cursor"></span>';
				}
				// 微信小程序里面代码块需要自定义类名才可以更改样式
				// #ifdef MP-WEIXIN
				htmlString = htmlString.replace(/\<img/gi, '<img class="my-custom-img"');
				htmlString = htmlString.replace(/\<a/gi, '<a class="my-custom-a"');
				htmlString = htmlString.replace(/\<blockquote/gi, '<blockquote class="my-custom-blockquote"');
				htmlString = htmlString.replace(/\<table/gi, '<table  class="my-custom-table"');
				htmlString = htmlString.replace(/\<td/gi, '<td class="my-custom-table-td"');
				// 只替换<th标签，不替换 thead
				htmlString = htmlString.replace(/(?!.*<thead>)(.*?)<th/g, (match) => match.replace('<th',
					'<th class="my-custom-table-th"'));
				// #endif
				// #ifndef APP-NVUE
				return htmlString;
				// #endif
			}
		},

		methods: {
			codeCopy(e) {
				// 拦截点击事件（只支持 a、img标签，并且H5 (3.2.13+)、App-Vue (3.2.13+)才支持这个事件
				let {
					name,
					attrs
				} = e.detail.node;
				let {
					'code-data-index': index,
					class: className,
					href
				} = attrs;
				if (name == 'a') {
					if (href) {
						// 点击是a标签且有href,就在浏览器打开预览链接
						// #ifdef APP-VUE
						plus.runtime.openURL(href);
						// #endif
						// #ifdef H5
						window.open(href);
						// #endif
					}
					// 点击元素的 className 是复制代码按钮才复制
					if (className == 'copy-btn') {
						uni.setClipboardData({
							data: codeDataList[index],
							showToast: false,
							success() {
								uni.showToast({
									title: '复制成功',
									icon: 'success'
								});
							}
						});
					}
				}
			}
		}
	};
</script>

<style>
	@import '../../static/css/github-dark.min.css';

	.rich-content ::v-deep li,
	.rich-content ::v-deep ul {
		margin-left: 0 !important;
		padding-left: 0 !important;
		text-indent: 0 !important;
	}

	/* .my-custom- 开头的类名都是兼容小程序用的 */

	/* #ifndef APP-NVUE */
	.content {
		overflow: hidden;
		/* padding: 0 10px; */
	}

	/* 代码高亮样式修改 */
	.rich-content ::v-deep pre.hljs {
		padding: 5px 8px;
		margin: 5px 0;
		overflow: auto;
	}

	/* 表格样式修改 start */
	.rich-content ::v-deep table,
	.my-custom-table {
		border-spacing: 0;
	}

	.rich-content ::v-deep .my-custom-table .my-custom-table-th,
	.rich-content ::v-deep .my-custom-table .my-custom-table-td {
		border: 1px solid #666;
		padding: 3px 5px;
	}

	.rich-content ::v-deep th {
		border: 1px solid #666;
		padding: 3px 5px;
	}

	.rich-content ::v-deep td {
		border: 1px solid #666;
		padding: 3px 5px;
	}

	/* 表格样式修改 end */

	/* a标签样式修改 */
	.rich-content ::v-deep a,
	.my-custom-a {
		color: #1890ff;
	}

	/* 图片样式修改 */
	.rich-content ::v-deep img,
	.my-custom-img {
		max-width: 100%;
	}

	/* 引用样式修改 */
	.rich-content ::v-deep blockquote,
	.my-custom-blockquote {
		display: block;
		padding: 10px 5px;
		border-left: 8px solid #dddfe4;
		background-color: #eef0f4;
		overflow: auto;
		word-break: normal;
	}

	.cursor {
		display: none;
	}

	.show-cursor .cursor {
		display: inline-block;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background-color: #222;
		animation: bibibili 1s infinite;
	}

	/* 闪烁 */
	@keyframes bibibili {
		from {
			opacity: 1;
		}

		to {
			opacity: 0;
		}
	}

	/* #endif */
</style>