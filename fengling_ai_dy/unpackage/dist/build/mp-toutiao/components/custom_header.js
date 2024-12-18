(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/custom_header"],{"4dab":function(t,n,e){},"4f3f":function(t,n,e){"use strict";e.r(n);var a=e("7910"),i=e.n(a);for(var c in a)["default"].indexOf(c)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(c);n["default"]=i.a},"55c3":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},i=[]},7910:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=getApp(),a={name:"custom_header",props:["title","showBack","headHeight","showSecondimage","backIndex"],data:function(){return{imgUrl:e.globalData.baseImageUrl,titleHeight:0,marginTop:0,backLeft:0}},created:function(){var n=t.getMenuButtonBoundingClientRect();this.titleHeight=n.height,this.marginTop=n.top},methods:{back:function(){this.backIndex?t.switchTab({url:"/pages/work/work"}):t.navigateBack()}}};n.default=a}).call(this,e("a261")["default"])},"8f8a":function(t,n,e){"use strict";e.r(n);var a=e("55c3"),i=e("4f3f");for(var c in i)["default"].indexOf(c)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(c);e("b25c");var u=e("828b"),o=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);n["default"]=o.exports},b25c:function(t,n,e){"use strict";var a=e("4dab"),i=e.n(a);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/custom_header-create-component',
    {
        'components/custom_header-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('a261')['createComponent'](__webpack_require__("8f8a"))
        })
    },
    [['components/custom_header-create-component']]
]);
