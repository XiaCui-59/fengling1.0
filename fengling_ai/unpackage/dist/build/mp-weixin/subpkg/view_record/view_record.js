(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpkg/view_record/view_record"],{"0618":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var a={uNavbar:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-navbar/u-navbar")]).then(e.bind(null,"a807"))},uIcon:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(e.bind(null,"ced5"))}},r=function(){var t=this,n=t.$createElement,e=(t._self._c,t.list.length),a=t.__map(t.list,(function(n,a){var r=t.__get_orig(n),o=0!=e?t.periodList.filter((function(t){return t.value==n.worker_salary_type})):null;return{$orig:r,g1:o}})),r=t.list.length;t.$mp.data=Object.assign({},{$root:{g0:e,l0:a,g2:r}})},o=[]},"412d":function(t,n,e){"use strict";e.r(n);var a=e("0618"),r=e("954a");for(var o in r)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(o);e("5de5");var i=e("828b"),u=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);n["default"]=u.exports},"5de5":function(t,n,e){"use strict";var a=e("77df"),r=e.n(a);r.a},"77df":function(t,n,e){},"954a":function(t,n,e){"use strict";e.r(n);var a=e("f053"),r=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=r.a},ed58:function(t,n,e){"use strict";(function(t,n){var a=e("47a9");e("7cc7");a(e("3240"));var r=a(e("412d"));t.__webpack_require_UNI_MP_PLUGIN__=e,n(r.default)}).call(this,e("3223")["default"],e("df3c")["createPage"])},f053:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=getApp(),a={data:function(){return{imgUrl:e.globalData.baseImageUrl,marginTop:e.globalData.marginTop,tabMargin:e.globalData.tabMargin,contHeight:0,periodList:[{value:"month",text:"/月"},{value:"day",text:"/天"},{value:"hour",text:"/时"}],list:[{name:"希尔顿",status:"running",worker_salary_max:"6000",worker_salary_min:"4000",worker_salary_type:"month",time:"2024-12-12"},{name:"富士康",status:"end",worker_salary_max:"7000",worker_salary_min:"5000",worker_salary_type:"month",time:"2024-12-01"}]}},onLoad:function(){t.setNavigationBarColor({frontColor:"#000000",backgroundColor:"transparent"}),t.hideShareMenu(),this.contHeight=e.globalData.systemHeight-this.marginTop-this.tabMargin},methods:{}};n.default=a}).call(this,e("df3c")["default"])}},[["ed58","common/runtime","common/vendor"]]]);