(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpkg/view_record/view_record"],{"412d":function(t,n,e){"use strict";e.r(n);var a=e("4814"),o=e("954a");for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e("5de5");var r=e("828b"),u=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);n["default"]=u.exports},4814:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var a={uNavbar:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-navbar/u-navbar")]).then(e.bind(null,"a807"))},uIcon:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(e.bind(null,"ced5"))}},o=function(){var t=this,n=t.$createElement,e=(t._self._c,t.list.length),a=t.__map(t.list,(function(n,a){var o=t.__get_orig(n),i=0!=e?n.create_time.slice(0,10):null,r=0!=e?t.periodList.filter((function(t){return t.value==n.worker_salary_type})):null,u=0!=e?n.create_time.slice(0,16):null;return{$orig:o,g1:i,g2:r,g3:u}})),o=t.list.length;t.$mp.data=Object.assign({},{$root:{g0:e,l0:a,g4:o}})},i=[]},"5de5":function(t,n,e){"use strict";var a=e("77df"),o=e.n(a);o.a},"77df":function(t,n,e){},"954a":function(t,n,e){"use strict";e.r(n);var a=e("f053"),o=e.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=o.a},ed58:function(t,n,e){"use strict";(function(t,n){var a=e("47a9");e("7cc7");a(e("3240"));var o=a(e("412d"));t.__webpack_require_UNI_MP_PLUGIN__=e,n(o.default)}).call(this,e("3223")["default"],e("df3c")["createPage"])},f053:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=getApp(),a={data:function(){return{imgUrl:e.globalData.baseImageUrl,marginTop:e.globalData.marginTop,tabMargin:e.globalData.tabMargin,contHeight:0,periodList:[{value:"month",text:"/月"},{value:"day",text:"/天"},{value:"hour",text:"/时"}],list:[],currentPage:1,pagination:{}}},onReachBottom:function(){this.currentPage<this.pagination.pageCount?(this.currentPage++,this.getList()):t.showToast({title:"已加载全部",icon:"none",duration:2e3})},onLoad:function(){t.setNavigationBarColor({frontColor:"#000000",backgroundColor:"transparent"}),t.hideShareMenu(),this.contHeight=e.globalData.systemHeight-this.marginTop-this.tabMargin,this.getList()},methods:{getList:function(){var t=this,n="/worker/browse_record?page="+this.currentPage;this.$request(n).then((function(n){0==n.code&&(t.list=t.list.concat(n.data.list),t.pagination=n.data.pagination)}))},toChat:function(n){console.log(n);var e=getCurrentPages(),a=e[e.length-2];t.navigateBack(),a&&a.$vm&&"function"===typeof a.$vm.changeTab&&(a.$vm.changeTab(1),a.$vm.closeMenu()),setTimeout((function(){if(a&&a.$vm&&"function"===typeof a.$vm.sendBtnMsg){var t={type:"job",msg:n.project_name+"(ID:"+n.project_id+")"};a.$vm.sendBtnMsg(t)}}),1e3)}}};n.default=a}).call(this,e("df3c")["default"])}},[["ed58","common/runtime","common/vendor"]]]);