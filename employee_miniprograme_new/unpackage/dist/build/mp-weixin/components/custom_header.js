(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/custom_header"],{"04fd":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},i=[]},"0f6f":function(t,e,n){"use strict";var a=n("a49c"),i=n.n(a);i.a},a28a:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=getApp(),a={name:"custom_header",props:["title","showBack","headHeight","showSecondimage","backIndex"],data:function(){return{imgUrl:n.globalData.baseImageUrl,titleHeight:0,marginTop:0,backLeft:0}},created:function(){var e=t.getMenuButtonBoundingClientRect();this.titleHeight=e.height,this.marginTop=e.top},methods:{back:function(){this.backIndex?t.switchTab({url:"/pages/index/index"}):t.navigateBack()}}};e.default=a}).call(this,n("df3c")["default"])},a49c:function(t,e,n){},e063:function(t,e,n){"use strict";n.r(e);var a=n("a28a"),i=n.n(a);for(var c in a)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=i.a},eb6c:function(t,e,n){"use strict";n.r(e);var a=n("04fd"),i=n("e063");for(var c in i)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(c);n("0f6f");var u=n("828b"),o=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=o.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/custom_header-create-component',
    {
        'components/custom_header-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("eb6c"))
        })
    },
    [['components/custom_header-create-component']]
]);
