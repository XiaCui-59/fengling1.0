(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/login"],{"4e4a":function(e,t,n){"use strict";var o=n("e748"),a=n.n(o);a.a},"7acb":function(e,t,n){"use strict";(function(e){var o=n("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("7eb4")),r=o(n("ee10")),i=o(n("7ca3")),c=n("8f59");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var u={name:"login",props:["showLogin","shareId"],data:function(){return{showPolicy:!1,getPhoneData:{}}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},(0,c.mapState)(["token","ad_tracking_id"])),methods:{readPolicy:function(){this.showPolicy=!0},getShareParams:function(t){this.$request("/worker/shares",{},"GET",t).then((function(t){0==t.code&&e.setStorageSync("shareParams",JSON.stringify(t.data))}))},closePolicy:function(){this.showPolicy=!1},refuse:function(){console.log("关闭"),this.$emit("closeLogin")},getPhoneNumber:function(t){var n=this;return(0,r.default)(a.default.mark((function o(){var r,i,c;return a.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:r="",i=n,console.log(t,"getPhoneNumber"),e.showLoading(),n.refuse(),n.getPhoneData.open_id=e.getStorageSync("openid"),n.getPhoneData.share_id=n.shareId,"getPhoneNumber:ok"==t.detail.errMsg?(console.log(t.detail,"e.detail"),n.getPhoneData.encrypted_data=t.detail.encryptedData,n.getPhoneData.iv=t.detail.iv,n.getPhoneData.code=t.detail.code,n.getPhoneData.ad_tracking_id=n.ad_tracking_id,r="/auth/worker/wechat/mini/login",i.$request(r,n.getPhoneData,"POST").then((function(t){if(0==t.code){i.$emit("closeLogin"),e.setStorageSync("token",t.data.token),e.setStorageSync("loginStatus","in");var n={Authorization:"bearer "+t.data.token,accept:"application/json","open-id":e.getStorageSync("openid")?e.getStorageSync("openid"):""};i.getShareParams(n),i.$emit("getInfo","login")}e.hideLoading()}))):(e.hideLoading(),i.$emit("closeLogin"),e.setStorageSync("loginStatus","in"),e.setStorageSync("token",i.token),c={Authorization:"bearer "+i.token,accept:"application/json","open-id":e.getStorageSync("openid")?e.getStorageSync("openid"):""},i.getShareParams(c),i.$emit("getInfo","login"));case 8:case"end":return o.stop()}}),o)})))()}}};t.default=u}).call(this,n("df3c")["default"])},bbff:function(e,t,n){"use strict";n.r(t);var o=n("f8e5"),a=n("dcb2");for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("4e4a");var i=n("828b"),c=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,"5c14f1a4",null,!1,o["a"],void 0);t["default"]=c.exports},dcb2:function(e,t,n){"use strict";n.r(t);var o=n("7acb"),a=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=a.a},e748:function(e,t,n){},f8e5:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var o=function(){var e=this.$createElement;this._self._c},a=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/login-create-component',
    {
        'components/login-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("bbff"))
        })
    },
    [['components/login-create-component']]
]);
