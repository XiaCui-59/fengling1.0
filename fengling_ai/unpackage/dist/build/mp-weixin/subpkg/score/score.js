(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpkg/score/score"],{"10f7":function(e,t,n){"use strict";(function(e,t){var r=n("47a9");n("7cc7");r(n("3240"));var i=r(n("7c9a"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(i.default)}).call(this,n("3223")["default"],n("df3c")["createPage"])},"5f40":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var r={uNavbar:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-navbar/u-navbar")]).then(n.bind(null,"a807"))},uIcon:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(n.bind(null,"ced5"))}},i=function(){var e=this,t=e.$createElement,n=(e._self._c,e.ifSingle?null:e.__map(e.list,(function(t,n){var r=e.__get_orig(t),i=e.list.length,a=i>0?Number(t.credit):null,o=i>0?Number(t.credit):null,c=i>0?t.credit.indexOf("-"):null,u=i>0&&-1!=c?t.credit.slice(1):null;return{$orig:r,g0:i,m0:a,m1:o,g1:c,g2:u}}))),r=e.ifSingle?null:e.list.length;e.$mp.data=Object.assign({},{$root:{l0:n,g3:r}})},a=[]},"7c9a":function(e,t,n){"use strict";n.r(t);var r=n("5f40"),i=n("ffe9");for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("87d8");var o=n("828b"),c=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);t["default"]=c.exports},"87d8":function(e,t,n){"use strict";var r=n("d785"),i=n.n(r);i.a},d785:function(e,t,n){},e0f9:function(e,t,n){"use strict";(function(e){var r=n("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("7eb4")),a=r(n("ee10")),o=getApp(),c={data:function(){return{ifSingle:1154==o.globalData.scene,showMask:!1,amount:"",name:"",imgUrl:o.globalData.baseImageUrl,marginTop:o.globalData.marginTop,tabMargin:o.globalData.tabMargin,scrollHeight:0,list:[],creditSeries:[],totalScore:0,currentPage:1,pagination:{},jobNeedCredit:0}},onLoad:function(){var t=this;return(0,a.default)(i.default.mark((function n(){var r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.setNavigationBarColor({frontColor:"#000000",backgroundColor:"transparent"}),e.hideShareMenu(),!t.ifSingle){n.next=4;break}return n.abrupt("return");case 4:if(!t.isLogin()){n.next=12;break}return n.next=7,t.getElementInfo();case 7:r=n.sent,console.log("data",r),r&&(t.scrollHeight=o.globalData.systemHeight-r.bottom-60),n.next=13;break;case 12:e.reLaunch({url:"/pages/index/index"});case 13:t.getList(),t.getCreditSeries(),t.getCredit();case 16:case"end":return n.stop()}}),n)})))()},methods:{getElementInfo:function(){return new Promise((function(t){var n=e.createSelectorQuery().select(".top");n.boundingClientRect((function(e){t(e)})).exec()}))},getList:function(){var e=this,t="/worker/credit/info?page="+this.currentPage+"&page_size=15";this.$request(t).then((function(t){0==t.code&&(e.list=e.list.concat(t.data.list),e.pagination=t.data.pagination,e.totalScore=t.data.totalCredit)}))},getCreditSeries:function(){var e=this,t="/worker/credit/subscription?page="+this.currentPage+"&page_size=15";this.$request(t).then((function(t){0==t.code&&(e.creditSeries=t.data.list)}))},scrolltolower:function(){this.currentPage<this.pagination.pageCount?(this.currentPage++,this.getList()):e.showToast({title:"到底啦~",icon:"none",duration:2e3})},open:function(){this.showMask=!0},close:function(){this.showMask=!1},getCredit:function(){var e=this;this.$request("/worker/credit/project").then((function(t){0==t.code&&(e.jobNeedCredit=t.data.job_worth_credit)}))},toRule:function(){e.navigateTo({url:"/subpkg/score_rule/score_rule"})},confirm:function(){var t=this,n=e.getSystemInfoSync();"ios"==n.osName?this.$request("/ios/status").then((function(e){0==e.code&&(e.data?t.surePay():t.$refs.myModal.showModal({title:"由于相关规范，iOS成为会员功能暂不可用。",showCancel:!1}))})):this.surePay()},surePay:function(){var t=this;return(0,a.default)(i.default.mark((function n(){var r,a,o;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t,n.next=3,t.creatOrder();case 3:a=n.sent,a&&(o="/worker/credit/"+a+"/pay",t.$request(o,{},"POST").then((function(t){if(0==t.code){var n=t.data.wechat_mini_program;e.requestPayment({appId:n.appId,timeStamp:n.timeStamp,nonceStr:n.nonceStr,package:n.package,signType:n.signType,paySign:n.paySign,success:function(){r.$refs.myModal.showModal({title:"支付成功",showCancel:!1,success:function(e){"confirm"==e&&(r.getList(),r.close())}})},fail:function(t){console.log(t,"err"),e.showToast({title:"支付已取消",icon:"error",duration:2e3}),r.close()}})}})));case 5:case"end":return n.stop()}}),n)})))()},creatOrder:function(){var e=this;return new Promise((function(t){var n={credit_package_id:e.creditSeries[0].id};e.$request("/worker/credit/order",n,"POST").then((function(e){0==e.code&&t(e.data.order_id)}))}))}}};t.default=c}).call(this,n("df3c")["default"])},ffe9:function(e,t,n){"use strict";n.r(t);var r=n("e0f9"),i=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a}},[["10f7","common/runtime","common/vendor"]]]);