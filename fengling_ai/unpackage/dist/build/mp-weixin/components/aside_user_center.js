(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/aside_user_center"],{3042:function(n,e,t){"use strict";(function(n,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=getApp(),u={name:"aside_user_center",props:["userInfo","menuList","showMenu"],data:function(){return{maskStartPoint:{},menuButtonInfo:o.globalData.menuButtonInfo,marginTop:o.globalData.marginTop,imgUrl:o.globalData.baseImageUrl}},methods:{closeMenu:function(){this.$emit("closeMenu")},openMenu:function(){this.$emit("openMenu")},maskStart:function(n){this.maskStartPoint=n.touches[0]},maskEnd:function(n){},handleMaskMove:function(n){this.maskStartPoint.clientX-n.touches[n.touches.length-1].clientX>20&&this.closeMenu()},logout:function(){var e=this;this.$refs.myModal.showModal({title:"确认退出登录？",success:function(t){"confirm"==t&&(n.setStorageSync("loginStatus","out"),e.closeMenu(),e.$emit("backHome"),n.showToast({title:"已退出登录",icon:"none",duration:2e3}))}})},navigate:function(e){n.navigateTo({url:e})},handleClick:function(n){console.log("e：",n),"联系客服"==n.name&&t.openCustomerServiceChat({extInfo:{url:"https://work.weixin.qq.com/kfid/kfc01b1c6e379607409"},corpId:"wwe3ced2e65390ad79",success:function(n){}})}}};e.default=u}).call(this,t("df3c")["default"],t("3223")["default"])},"65df":function(n,e,t){},"7dd4":function(n,e,t){"use strict";t.r(e);var o=t("da2c"),u=t("e2e6");for(var i in u)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return u[n]}))}(i);t("bbd6");var c=t("828b"),a=Object(c["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);e["default"]=a.exports},bbd6:function(n,e,t){"use strict";var o=t("65df"),u=t.n(o);u.a},da2c:function(n,e,t){"use strict";t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return o}));var o={uPopup:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-popup/u-popup")]).then(t.bind(null,"c40c"))},uNavbar:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-navbar/u-navbar")]).then(t.bind(null,"a807"))},uIcon:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(t.bind(null,"ced5"))},uCellGroup:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-cell-group/u-cell-group")]).then(t.bind(null,"c1ca"))},uCell:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-cell/u-cell")]).then(t.bind(null,"648b"))}},u=function(){var n=this.$createElement,e=(this._self._c,this.userInfo.name.indexOf("@")),t=-1!=e?this.userInfo.name.slice(0,6):null;this.$mp.data=Object.assign({},{$root:{g0:e,g1:t}})},i=[]},e2e6:function(n,e,t){"use strict";t.r(e);var o=t("3042"),u=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/aside_user_center-create-component',
    {
        'components/aside_user_center-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("7dd4"))
        })
    },
    [['components/aside_user_center-create-component']]
]);
