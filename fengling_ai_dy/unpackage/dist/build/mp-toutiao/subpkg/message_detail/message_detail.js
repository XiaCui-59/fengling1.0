(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpkg/message_detail/message_detail"],{"01b1":function(t,e,n){"use strict";var a=n("66ac"),o=n.n(a);o.a},"084e":function(t,e,n){"use strict";(function(t,e){var a=n("47a9");n("e32d");a(n("3240"));var o=a(n("b243"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(o.default)}).call(this,n("a261")["default"],n("a261")["createPage"])},"593a":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=getApp(),o={data:function(){return{imgUrl:a.globalData.baseImageUrl,currentTab:0,pageName:"消息详情",marginTop:a.globalData.marginTop,tabMargin:a.globalData.tabMargin,comValue:"",startTime:"",endTime:"",currentStatus:0,comRange:[{value:0,text:"成都有职劳务有限公司"},{value:1,text:"成都顶呱呱劳务有限公司"}],labels:[{value:"commission",text:"佣金"},{value:"system",text:"系统"}],info:{},currentMainTab:0,scrollHeight:0,boxTop:0,headerHeight:a.globalData.highTopHeight,maskInnerTop:0,btnBottom:a.globalData.btnBottom}},components:{tabbar:function(){n.e("components/tabbar").then(function(){return resolve(n("45f0"))}.bind(null,n)).catch(n.oe)},customHeader:function(){n.e("components/custom_header").then(function(){return resolve(n("8f8a"))}.bind(null,n)).catch(n.oe)}},onLoad:function(t){this.boxTop=this.marginTop+this.tabMargin,this.scrollHeight=a.globalData.systemHeight-this.marginTop-this.tabMargin-this.btnBottom,this.info=JSON.parse(t.item);var e="/broker/todo/"+this.info.id+"/read";this.$request(e,{},"POST").then((function(t){0==t.code&&console.log("已读")}))},methods:{changeCom:function(){},changeStartTime:function(t){},changeEndTime:function(t){},changeStatus:function(t){this.currentStatus=t},getMarginTop:function(e){var n=t.getMenuButtonBoundingClientRect();this.marginTop=n.height+n.top+10,this.maskInnerTop=this.marginTop+20},getTopHeight:function(){var e=t.getSystemInfoSync();this.headerHeight=Math.floor(e.screenHeight*(230/844))},getElementInfo:function(){var e=this,n=t.getSystemInfoSync(),a=Math.floor(n.screenHeight*(46/844));console.log(a,"tabbar");var o=t.createSelectorQuery().select(".top_area");o.boundingClientRect((function(t){t.bottom-t.top,e.boxTop=e.marginTop+t.height,e.scrollHeight=n.screenHeight-e.boxTop-a-5})).exec()},changeMainTab:function(t){this.currentMainTab=t},changeTab:function(t){this.currentTab=t},toDetail:function(e){t.navigateTo({url:"/subpkg/message_detail/message_detail?id="+e})},openMask:function(t){this.showMask=!0},close:function(){this.showMask=!1}}};e.default=o}).call(this,n("a261")["default"])},"5c05":function(t,e,n){"use strict";n.r(e);var a=n("593a"),o=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"66ac":function(t,e,n){},b243:function(t,e,n){"use strict";n.r(e);var a=n("fa7f"),o=n("5c05");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("01b1");var r=n("828b"),c=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"7325612f",null,!1,a["a"],void 0);e["default"]=c.exports},fa7f:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},o=[]}},[["084e","common/runtime","common/vendor"]]]);