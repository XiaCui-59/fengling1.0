(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/waiting_handle/waiting_handle"],{"45e7":function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=getApp(),e={data:function(){return{imgUrl:a.globalData.baseImageUrl,currentTab:{value:"wait-signing-requests",text:"待签约"},pageName:"消息",refreshStatus:!0,isPulling:!1,marginTop:a.globalData.marginTop,tabMargin:a.globalData.tabMargin,subTabHeight:a.globalData.subTabHeight,scrollHeight:0,boxTop:0,headerHeight:a.globalData.highTopHeight,list:[],pagination:{},currentPage:1,tabbarHeight:0}},components:{tabbar:function(){n.e("components/tabbar").then(function(){return resolve(n("45f0"))}.bind(null,n)).catch(n.oe)},customHeader:function(){n.e("components/custom_header").then(function(){return resolve(n("8f8a"))}.bind(null,n)).catch(n.oe)}},onShow:function(){this.isLogin()?(this.currentPage=1,this.getList()):(this.list=[],t.showModal({title:"提示",content:"您当前未登录，或登录状态异常，请重新登录。",success:function(i){i.confirm&&t.navigateTo({url:"/pages/login/login"})}}))},onLoad:function(){this.boxTop=this.marginTop+2*this.tabMargin+20,this.scrollHeight=a.globalData.systemHeight-this.marginTop-2*this.tabMargin-this.tabbarHeight-20},methods:{getTabbarHeight:function(t){this.tabbarHeight=t},readAll:function(){var i=this;0!=this.list.length?t.showModal({title:"是否全部标记为已读。",success:function(t){t.confirm&&i.$request("/worker/notifications/read-all",{},"POST").then((function(t){0==t.code&&(console.log("全部已读"),i.list=[],i.getList())}))}}):t.showToast({title:"暂无消息",icon:"error",duration:3e3})},refreshData:function(){var t=this;this.isPulling||(this.isPulling=!0,this.refreshStatus=!0,this.currentPage=1,this.list=[],this.getList(),setTimeout((function(){t.refreshStatus=!1,t.isPulling=!1}),1e3))},getMore:function(){var t=this,i="/worker/notifications?page="+this.currentPage;this.$request(i).then((function(i){0==i.code&&(t.list=t.list.concat(i.data.list),t.pagination=i.data.pagination)}))},getList:function(){var t=this;this.$request("/worker/notifications?page=1").then((function(i){0==i.code&&(t.list=i.data.list,t.pagination=i.data.pagination)}))},lower:function(){this.list.length<this.pagination.totalCount?(this.currentPage++,this.getMore()):this.list.length>=this.pagination.totalCount&&t.showToast({title:"已经到底啦~",icon:"none",duration:2e3})}}};i.default=e}).call(this,n("4884")["default"])},"54ed":function(t,i,n){"use strict";n.r(i);var a=n("45e7"),e=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(i,t,(function(){return a[t]}))}(o);i["default"]=e.a},"577d":function(t,i,n){"use strict";n.r(i);var a=n("a5f8"),e=n("54ed");for(var o in e)["default"].indexOf(o)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(o);n("ca5b");var s=n("828b"),r=Object(s["a"])(e["default"],a["b"],a["c"],!1,null,"3a0f6342",null,!1,a["a"],void 0);i["default"]=r.exports},"832a":function(t,i,n){"use strict";(function(t,i){var a=n("47a9");n("e32d");a(n("3240"));var e=a(n("577d"));t.__webpack_require_UNI_MP_PLUGIN__=n,i(e.default)}).call(this,n("4884")["default"],n("4884")["createPage"])},a5f8:function(t,i,n){"use strict";n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return e})),n.d(i,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},e=[]},ca5b:function(t,i,n){"use strict";var a=n("d46b"),e=n.n(a);e.a},d46b:function(t,i,n){}},[["832a","common/runtime","common/vendor"]]]);