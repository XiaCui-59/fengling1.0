(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["subpkg-my_contracts-my_contracts"],{"19f7":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"custom_header",style:{height:t.headHeight+"px"}},[t.showSecondimage?i("v-uni-image",{attrs:{src:t.imgUrl+"/worker/ic_baoming_header_bg.png",mode:"widthFix"}}):t._e(),i("v-uni-view",{staticClass:"title",style:{lineHeight:t.titleHeight+"px",height:t.titleHeight+"px",top:t.marginTop+"px"}},[t.showBack?i("v-uni-view",{staticClass:"back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:t.imgUrl+"/broker/back.png",mode:""}})],1):t._e(),i("v-uni-view",{staticClass:"text"},[t._v(t._s(t.title))])],1)],1)},a=[]},"2f12":function(t,e,i){"use strict";i.r(e);var n=i("454c"),a=i("63e3");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("9943");var s=i("f0c5"),o=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"38bdf728",null,!1,n["a"],void 0);e["default"]=o.exports},"3b12":function(t,e,i){"use strict";i("7a82");var n=i("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("99af");var a=n(i("7dcd")),r=getApp(),s={data:function(){return{imgUrl:r.globalData.baseImageUrl,pageName:"我的合同",marginTop:r.globalData.marginTop,tabMargin:r.globalData.tabMargin,btnBottom:r.globalData.btnBottom,list:[],scrollHeight:0,boxTop:0,headerHeight:r.globalData.topHeight,currentPage:1,refreshStatus:!0,isPulling:!1}},components:{customHeader:a.default},onLoad:function(){this.scrollHeight=r.globalData.systemHeight-this.marginTop-this.tabMargin-this.btnBottom,this.getList()},methods:{refreshData:function(){var t=this;this.isPulling||(this.isPulling=!0,this.refreshStatus=!0,this.currentPage=1,this.list=[],this.getList(),setTimeout((function(){t.refreshStatus=!1,t.isPulling=!1}),1e3))},toDetail:function(t){var e="/worker/contract/"+t+"/detail-url";this.$request(e).then((function(t){0==t.code?uni.navigateTo({url:"/pages/webview/webview?url="+encodeURIComponent(t.data.contract_url)}):uni.showModal({title:t.msg})}))},getList:function(){var t=this,e="/worker/contracts?page="+this.currentPage;this.$request(e).then((function(e){0==e.code?(t.list=t.list.concat(e.data.list),t.pagination=e.data.pagination):uni.showModal({title:e.msg})}))},lower:function(){this.list.length<this.pagination.totalCount?(this.currentPage++,this.getList()):this.list.length>=this.pagination.totalCount&&uni.showToast({title:"已经到底啦~",icon:"none",duration:2e3})}}};e.default=s},"454c":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("customHeader",{attrs:{title:t.pageName,showBack:!0,headHeight:t.headerHeight}}),i("v-uni-view",{staticClass:"cont",style:{marginTop:t.marginTop+"px"}},[i("v-uni-view",{staticClass:"box",style:{top:t.marginTop+t.tabMargin+"px",background:0==t.list.length?"#fff":"#F3F3F5"}},[i("v-uni-scroll-view",{staticClass:"scroll-Y",style:{height:t.scrollHeight+"px"},attrs:{"scroll-y":"true","refresher-enabled":"true","refresher-triggered":t.refreshStatus},on:{refresherpulling:function(e){arguments[0]=e=t.$handleEvent(e),t.refreshData.apply(void 0,arguments)},scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.lower.apply(void 0,arguments)}}},[t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail(e.id)}}},[i("v-uni-view",{staticClass:"top flex flex_btween"},[i("v-uni-view",{staticClass:"title"},[t._v("合同编号：NO."+t._s(e.code))]),i("v-uni-image",{attrs:{src:t.imgUrl+"/worker/ic_arrow_right.png",mode:""}})],1),i("v-uni-view",{staticClass:"middle"},[i("v-uni-view",{staticClass:"line flex flex-start"},[i("v-uni-view",{staticClass:"tit"},[t._v("工作名称：")]),i("v-uni-view",{staticClass:"text"},[t._v(t._s(e.project_name))])],1),i("v-uni-view",{staticClass:"line flex flex-start"},[i("v-uni-view",{staticClass:"tit"},[t._v("开始时间：")]),i("v-uni-view",{staticClass:"text"},[t._v(t._s(e.signed_time))])],1),i("v-uni-view",{staticClass:"line flex flex-start"},[i("v-uni-view",{staticClass:"tit"},[t._v("结束时间：")]),i("v-uni-view",{staticClass:"text"},[t._v(t._s(e.work_end_time))])],1)],1)],1)})),0==t.list.length?i("v-uni-view",{staticClass:"empty"},[i("v-uni-image",{attrs:{src:t.imgUrl+"/worker/empty_bg.png",mode:"heightFix"}})],1):t._e()],2)],1)],1)],1)},a=[]},"4c85":function(t,e,i){"use strict";var n=i("609e"),a=i.n(n);a.a},"609e":function(t,e,i){var n=i("da18");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6f682584",n,!0,{sourceMap:!1,shadowMode:!1})},"63e3":function(t,e,i){"use strict";i.r(e);var n=i("3b12"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"7dcd":function(t,e,i){"use strict";i.r(e);var n=i("19f7"),a=i("b61b");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("4c85");var s=i("f0c5"),o=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"72c6ca28",null,!1,n["a"],void 0);e["default"]=o.exports},9943:function(t,e,i){"use strict";var n=i("9f76"),a=i.n(n);a.a},"9f76":function(t,e,i){var n=i("ecf3");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("d4fe3ef2",n,!0,{sourceMap:!1,shadowMode:!1})},b61b:function(t,e,i){"use strict";i.r(e);var n=i("e811"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},da18:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.custom_header[data-v-72c6ca28]{position:fixed;top:0;left:0;width:100%;background:url(https://static.test.swiftwd.com/worker/top_header_bg.png) no-repeat;background-size:100% 100%;overflow:hidden;z-index:2}.custom_header uni-image[data-v-72c6ca28]{will-change:transform}.custom_header > uni-image[data-v-72c6ca28]{width:100%}.custom_header .title[data-v-72c6ca28]{text-align:center;color:#fff;font-size:%?32?%;position:fixed;font-weight:700;width:100%;z-index:10}.custom_header .title .back[data-v-72c6ca28]{position:absolute;left:%?40?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:%?44?%;height:%?44?%}.custom_header .title .back uni-image[data-v-72c6ca28]{width:%?44?%;height:%?44?%}',""]),t.exports=e},e811:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=getApp(),a={name:"custom_header",props:["title","showBack","headHeight","showSecondimage","backIndex"],data:function(){return{imgUrl:n.globalData.baseImageUrl,titleHeight:0,marginTop:0,backLeft:0}},created:function(){var t=uni.getMenuButtonBoundingClientRect();this.titleHeight=t.height,this.marginTop=t.top},methods:{back:function(){this.backIndex?uni.switchTab({url:"/pages/index/index"}):uni.navigateBack()}}};e.default=a},ecf3:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.box[data-v-38bdf728]{position:fixed;width:calc(100% - %?80?%);left:%?40?%;z-index:3;border-top-left-radius:%?16?%;border-top-right-radius:%?16?%;overflow:hidden;background:#f3f3f5}.box .item[data-v-38bdf728]{padding:0 %?40?% %?40?% %?40?%;border-radius:%?16?%;background:#fff;box-shadow:0 %?2?% %?6?% 0 rgba(0,0,0,.15);margin-bottom:%?20?%}.box .item .top[data-v-38bdf728]{padding:%?40?% 0;border-bottom:1px dashed #dfdfdf}.box .item .top .title[data-v-38bdf728]{font-size:%?36?%;position:relative;font-weight:700;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:calc(100% - %?30?%)}.box .item .top uni-image[data-v-38bdf728]{width:%?30?%;height:%?30?%}.box .item .middle[data-v-38bdf728]{margin-top:%?28?%}.box .item .line[data-v-38bdf728]{margin-top:%?16?%;font-size:%?28?%}.box .item .line .tit[data-v-38bdf728]{width:%?160?%;color:#686868}.box .item .line .text[data-v-38bdf728]{width:calc(100% - %?160?%);color:#333;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}',""]),t.exports=e}}]);