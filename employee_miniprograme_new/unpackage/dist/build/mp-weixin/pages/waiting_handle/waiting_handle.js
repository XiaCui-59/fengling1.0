(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/waiting_handle/waiting_handle"],{"5e53":function(t,i,n){"use strict";n.r(i);var e=n("9528"),a=n.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(o);i["default"]=a.a},"68b9":function(t,i,n){"use strict";n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){}));var e=function(){var t=this.$createElement,i=(this._self._c,this.list.length),n=this.list.length,e=this.list.length;this.$mp.data=Object.assign({},{$root:{g0:i,g1:n,g2:e}})},a=[]},7528:function(t,i,n){"use strict";n.r(i);var e=n("68b9"),a=n("5e53");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(i,t,(function(){return a[t]}))}(o);n("e15c");var s=n("828b"),r=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"5a7ef19d",null,!1,e["a"],void 0);i["default"]=r.exports},"77b4":function(t,i,n){"use strict";(function(t,i){var e=n("47a9");n("417d");e(n("3240"));var a=e(n("7528"));t.__webpack_require_UNI_MP_PLUGIN__=n,i(a.default)}).call(this,n("3223")["default"],n("df3c")["createPage"])},9528:function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=getApp(),a={data:function(){return{imgUrl:e.globalData.baseImageUrl,currentTab:{value:"wait-signing-requests",text:"待签约"},pageName:"消息",refreshStatus:!0,isPulling:!1,marginTop:e.globalData.marginTop,tabMargin:e.globalData.tabMargin,subTabHeight:e.globalData.subTabHeight,scrollHeight:0,boxTop:0,headerHeight:e.globalData.highTopHeight,list:[],pagination:{},currentPage:1,tabbarHeight:0}},components:{tabbar:function(){Promise.all([n.e("common/vendor"),n.e("components/tabbar")]).then(function(){return resolve(n("0183"))}.bind(null,n)).catch(n.oe)},customHeader:function(){n.e("components/custom_header").then(function(){return resolve(n("eb6c"))}.bind(null,n)).catch(n.oe)}},onShow:function(){this.isLogin()?(this.currentPage=1,this.getList()):this.list=[]},onLoad:function(){this.boxTop=this.marginTop+2*this.tabMargin+20,this.scrollHeight=e.globalData.systemHeight-this.marginTop-2*this.tabMargin-this.tabbarHeight-20},methods:{getTabbarHeight:function(t){this.tabbarHeight=t},readAll:function(){var i=this;0!=this.list.length?t.showModal({title:"是否全部标记为已读。",success:function(t){t.confirm&&i.$request("/worker/notifications/read-all",{},"POST").then((function(t){0==t.code&&(console.log("全部已读"),i.list=[],i.getList())}))}}):t.showToast({title:"暂无消息",icon:"error",duration:3e3})},refreshData:function(){var t=this;this.isPulling||(this.isPulling=!0,this.refreshStatus=!0,this.currentPage=1,this.list=[],this.getList(),setTimeout((function(){t.refreshStatus=!1,t.isPulling=!1}),1e3))},getMore:function(){var t=this,i="/worker/notifications?page="+this.currentPage;this.$request(i).then((function(i){0==i.code&&(t.list=t.list.concat(i.data.list),t.pagination=i.data.pagination)}))},getList:function(){var t=this;this.$request("/worker/notifications?page=1").then((function(i){0==i.code&&(t.list=i.data.list,t.pagination=i.data.pagination)}))},lower:function(){this.list.length<this.pagination.totalCount?(this.currentPage++,this.getMore()):this.list.length>=this.pagination.totalCount&&t.showToast({title:"已经到底啦~",icon:"none",duration:2e3})}}};i.default=a}).call(this,n("df3c")["default"])},d599:function(t,i,n){},e15c:function(t,i,n){"use strict";var e=n("d599"),a=n.n(e);a.a}},[["77b4","common/runtime","common/vendor"]]]);