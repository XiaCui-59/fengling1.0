(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tx_record/tx_record"],{"0b32":function(t,e,n){"use strict";var a=n("5440"),i=n.n(a);i.a},"12d7":function(t,e,n){"use strict";(function(t){var a=n("47a9");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("7eb4")),r=a(n("ee10")),o=a(n("8ab3")),u=getApp(),l={data:function(){return{ifSingle:1154==u.globalData.scene,txStatus:"",statusRange:o.default.txStatus,imgUrl:u.globalData.baseImageUrl,marginTop:u.globalData.marginTop,tabMargin:u.globalData.tabMargin,scrollHeight:0,list:[],pagination:{},currentPage:1}},onLoad:function(){var e=this;return(0,r.default)(i.default.mark((function n(){var a,r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.setNavigationBarColor({frontColor:"#000000",backgroundColor:"transparent"}),t.hideShareMenu(),!e.ifSingle){n.next=4;break}return n.abrupt("return");case 4:if(!e.isLogin()){n.next=13;break}return n.next=7,e.getElementInfo(".top_select");case 7:a=n.sent,console.log("topArea",a),a&&(r=a.bottom,e.scrollHeight=u.globalData.systemHeight-r-15),e.getList(),n.next=14;break;case 13:t.reLaunch({url:"/pages/index/index"});case 14:case"end":return n.stop()}}),n)})))()},methods:{statusChange:function(){this.getList()},getList:function(){var t=this,e="/worker/withdraws?page="+this.currentPage+"&status="+this.txStatus;this.$request(e).then((function(e){0==e.code&&(t.list=t.list.concat(e.data.list),t.pagination=e.data.pagination)}))},getElementInfo:function(e){return new Promise((function(n){var a=t.createSelectorQuery().select(e);a.boundingClientRect((function(t){n(t)})).exec()}))},scrolltolower:function(){this.currentPage<this.pagination.pageCount?(this.currentPage++,this.getList()):t.showToast({title:"到底啦~",icon:"none",duration:2e3})}}};e.default=l}).call(this,n("df3c")["default"])},5440:function(t,e,n){},"5bff":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uNavbar:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-navbar/u-navbar")]).then(n.bind(null,"b7ff"))},uIcon:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(n.bind(null,"d659"))},uniDataSelect:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-data-select/components/uni-data-select/uni-data-select")]).then(n.bind(null,"ff3b"))}},i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.ifSingle?null:t.list.length),a=!t.ifSingle&&n>0?t.__map(t.list,(function(e,n){var a=t.__get_orig(e),i=e.create_time.slice(0,10),r=e.create_time.slice(11),o=t.list.length,u=t.statusRange.filter((function(t){return t.value==e.status}));return{$orig:a,g1:i,g2:r,g3:o,g4:u}})):null,i=t.ifSingle?null:t.list.length;t.$mp.data=Object.assign({},{$root:{g0:n,l0:a,g5:i}})},r=[]},"9e2d":function(t,e,n){"use strict";n.r(e);var a=n("5bff"),i=n("e881");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("0b32");var o=n("828b"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=u.exports},c2e4:function(t,e,n){"use strict";(function(t,e){var a=n("47a9");n("f01c");a(n("3240"));var i=a(n("9e2d"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(i.default)}).call(this,n("3223")["default"],n("df3c")["createPage"])},e881:function(t,e,n){"use strict";n.r(e);var a=n("12d7"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a}},[["c2e4","common/runtime","common/vendor"]]]);