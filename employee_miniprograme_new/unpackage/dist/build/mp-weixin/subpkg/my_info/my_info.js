(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpkg/my_info/my_info"],{2699:function(e,t,n){"use strict";n.r(t);var i=n("b98b"),a=n("979b");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("dffa");var r=n("828b"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"1ee095b8",null,!1,i["a"],void 0);t["default"]=c.exports},"6e53":function(e,t,n){},"979b":function(e,t,n){"use strict";n.r(t);var i=n("f5e4"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},b98b:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var i=function(){var e=this.$createElement;this._self._c},a=[]},dffa:function(e,t,n){"use strict";var i=n("6e53"),a=n.n(i);a.a},ea71:function(e,t,n){"use strict";(function(e,t){var i=n("47a9");n("417d");i(n("3240"));var a=i(n("2699"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n("3223")["default"],n("df3c")["createPage"])},f5e4:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=getApp(),a={data:function(){return{imgUrl:i.globalData.baseImageUrl,pageName:"我的资料",marginTop:i.globalData.marginTop,tabMargin:i.globalData.tabMargin,scrollHeight:0,boxTop:0,headerHeight:i.globalData.topHeight,showMask:!1,info:{gender:"",id_card_back_image:"",id_card_front_image:"",id_card_number:"",name:"",verified:!1}}},components:{customHeader:function(){n.e("components/custom_header").then(function(){return resolve(n("eb6c"))}.bind(null,n)).catch(n.oe)}},onLoad:function(){this.scrollHeight=i.globalData.systemHeight-this.marginTop-this.tabMargin,this.getInfo()},methods:{getMarginTop:function(t){var n=e.getMenuButtonBoundingClientRect();this.marginTop=n.height+n.top+10},getTopHeight:function(){var t=e.getSystemInfoSync();this.headerHeight=Math.floor(t.screenHeight*(200/844))},getElementInfo:function(){var t=this,n=e.getSystemInfoSync(),i=e.createSelectorQuery().select(".top_area");i.boundingClientRect((function(e){e&&(e.height,t.boxTop=t.marginTop+e.height),t.scrollHeight=n.screenHeight-t.boxTop-5})).exec()},confirm:function(){var t={gender:"男"==this.gender?"male":"female",name:this.name,ethnicity:this.nation,id_card_number:this.idcardNumber,id_card_front:this.idcardFront.key,id_card_back:this.idcardBack.key};this.$request("/worker/profile",t,"POST").then((function(t){0==t.code&&(e.showToast({title:"提交成功"}),e.navigateBack())}))},openMask:function(){this.showMask=!0},close:function(){this.showMask=!1},getInfo:function(){var e=this;this.$request("/worker/profile").then((function(t){0==t.code&&(e.info=t.data)}))}}};t.default=a}).call(this,n("df3c")["default"])}},[["ea71","common/runtime","common/vendor"]]]);