(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/aside_user_center"],{3042:function(n,e,o){"use strict";(function(n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=getApp(),u={name:"aside_user_center",props:["userInfo","menuList","showMenu"],data:function(){return{maskStartPoint:{},menuButtonInfo:t.globalData.menuButtonInfo,marginTop:t.globalData.marginTop,imgUrl:t.globalData.baseImageUrl}},methods:{closeMenu:function(){this.$emit("closeMenu")},openMenu:function(){this.$emit("openMenu")},maskStart:function(n){this.maskStartPoint=n.touches[0]},maskEnd:function(n){},handleMaskMove:function(n){this.maskStartPoint.clientX-n.touches[n.touches.length-1].clientX>20&&this.closeMenu()},logout:function(){var e=this;this.$refs.myModal.showModal({title:"确认退出登录？",success:function(o){"confirm"==o&&e.$request("/worker/logout",{},"POST").then((function(o){0==o.code&&(e.closeMenu(),n.removeStorageSync("token"),n.removeStorageSync("userInfo"),n.showToast({title:"已退出登录",icon:"none",duration:2e3}))}))}})},navigate:function(e){n.navigateTo({url:e})},handleClick:function(n){console.log("e：",n),"联系客服"==n.name&&o.openCustomerServiceChat({extInfo:{url:"https://work.weixin.qq.com/kfid/kfc01b1c6e379607409"},corpId:"wwe3ced2e65390ad79",success:function(n){}})}}};e.default=u}).call(this,o("df3c")["default"],o("3223")["default"])},"65df":function(n,e,o){},"7dd4":function(n,e,o){"use strict";o.r(e);var t=o("b7c7"),u=o("e2e6");for(var i in u)["default"].indexOf(i)<0&&function(n){o.d(e,n,(function(){return u[n]}))}(i);o("bbd6");var c=o("828b"),r=Object(c["a"])(u["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],void 0);e["default"]=r.exports},b7c7:function(n,e,o){"use strict";o.d(e,"b",(function(){return u})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return t}));var t={uPopup:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-popup/u-popup")]).then(o.bind(null,"c40c"))},uNavbar:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-navbar/u-navbar")]).then(o.bind(null,"a807"))},uIcon:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(o.bind(null,"ced5"))},uCellGroup:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-cell-group/u-cell-group")]).then(o.bind(null,"c1ca"))},uCell:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-cell/u-cell")]).then(o.bind(null,"648b"))}},u=function(){var n=this.$createElement;this._self._c},i=[]},bbd6:function(n,e,o){"use strict";var t=o("65df"),u=o.n(t);u.a},e2e6:function(n,e,o){"use strict";o.r(e);var t=o("3042"),u=o.n(t);for(var i in t)["default"].indexOf(i)<0&&function(n){o.d(e,n,(function(){return t[n]}))}(i);e["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/aside_user_center-create-component',
    {
        'components/aside_user_center-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("7dd4"))
        })
    },
    [['components/aside_user_center-create-component']]
]);
