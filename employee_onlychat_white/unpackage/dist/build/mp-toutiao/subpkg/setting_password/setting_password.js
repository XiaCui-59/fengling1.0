(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpkg/setting_password/setting_password"],{"2c7a":function(t,e,n){"use strict";(function(t,e){var o=n("47a9");n("e32d");o(n("3240"));var i=o(n("f5b7"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(i.default)}).call(this,n("a261")["default"],n("a261")["createPage"])},"7f6a":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=getApp(),i={data:function(){return{imgUrl:o.globalData.baseImageUrl,pageName:"设置密码",marginTop:0,currentMainTab:0,scrollHeight:0,boxTop:0,headerHeight:0,oldPassword:"",newPassword:"",veriPassword:"",showActive:!1,hasOldPassword:!1}},components:{tabbar:function(){n.e("components/tabbar").then(function(){return resolve(n("45f0"))}.bind(null,n)).catch(n.oe)},customHeader:function(){n.e("components/custom_header").then(function(){return resolve(n("8f8a"))}.bind(null,n)).catch(n.oe)}},onLoad:function(){var t=this;this.getMarginTop(),setTimeout((function(){t.getElementInfo(),t.getTopHeight()}),500),this.getInfo()},methods:{checkActive:function(){this.hasOldPassword?this.oldPassword&&this.newPassword&&this.veriPassword?this.showActive=!0:this.showActive=!1:this.newPassword&&this.veriPassword?this.showActive=!0:this.showActive=!1},reset:function(t){"old"==t&&(this.oldPassword=""),"new"==t&&(this.newPassword=""),"veri"==t&&(this.veriPassword=""),this.checkActive()},getMarginTop:function(e){var n=t.getMenuButtonBoundingClientRect();this.marginTop=n.height+n.top+10},getTopHeight:function(){var e=t.getSystemInfoSync();this.headerHeight=Math.floor(e.screenHeight*(200/844))},getElementInfo:function(){var e=this,n=t.getSystemInfoSync(),o=Math.floor(n.screenHeight*(46/844));console.log(o,"tabbar");var i=t.createSelectorQuery().select(".top_area");i.boundingClientRect((function(t){t.bottom-t.top,e.boxTop=e.marginTop+t.height,e.scrollHeight=n.screenHeight-e.boxTop-o-5})).exec()},navigate:function(e){t.navigateTo({url:e})},notSet:function(){t.navigateBack()},getInfo:function(){var t=this;this.$request("/worker/profile").then((function(e){0==e.code&&(t.hasOldPassword=e.data.has_old_password)}))},confirmSet:function(){if(this.showActive){var e={old_password:this.oldPassword,new_password:this.newPassword,new_password_confirmation:this.veriPassword};this.$request("/worker/password",e,"POST").then((function(e){0==e.code&&(t.showModal({title:"密码设置成功",showCancel:!1,duration:2e3}),setTimeout((function(){t.switchTab({url:"/pages/mine/mine"})}),2e3))}))}else t.showToast({title:"填写不完整",icon:"error",duration:2e3})}}};e.default=i}).call(this,n("a261")["default"])},"9c90":function(t,e,n){"use strict";n.r(e);var o=n("7f6a"),i=n.n(o);for(var s in o)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(s);e["default"]=i.a},d084:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var o=function(){var t=this.$createElement;this._self._c},i=[]},ea6d:function(t,e,n){},eedd:function(t,e,n){"use strict";var o=n("ea6d"),i=n.n(o);i.a},f5b7:function(t,e,n){"use strict";n.r(e);var o=n("d084"),i=n("9c90");for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("eedd");var a=n("828b"),r=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,"0685c41c",null,!1,o["a"],void 0);e["default"]=r.exports}},[["2c7a","common/runtime","common/vendor"]]]);