(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpkg/edit_info/edit_info"],{"08c8":function(e,n,t){"use strict";var o=t("967d"),r=t.n(o);r.a},"3ef6":function(e,n,t){"use strict";t.r(n);var o=t("8f596"),r=t.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n["default"]=r.a},"6e68":function(e,n,t){"use strict";t.r(n);var o=t("8504"),r=t("3ef6");for(var a in r)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(a);t("08c8");var i=t("828b"),u=Object(i["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=u.exports},8504:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return o}));var o={uNavbar:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-navbar/u-navbar")]).then(t.bind(null,"a807"))},uIcon:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(t.bind(null,"ced5"))},uRadioGroup:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-radio-group/u-radio-group")]).then(t.bind(null,"9e8f"))},uRadio:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-radio/u-radio")]).then(t.bind(null,"e37e"))}},r=function(){var e=this.$createElement;this._self._c},a=[]},"8f596":function(e,n,t){"use strict";(function(e){var o=t("47a9");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t("7ca3"));function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}var i=getApp(),u={data:function(){return{imgUrl:i.globalData.baseImageUrl,marginTop:i.globalData.marginTop,tabMargin:i.globalData.tabMargin,contHeight:0,gender:[{value:"male",text:"男"},{value:"female",text:"女"}],info:{name:"",age:"",gender:"",nation:"",mobile:""}}},onLoad:function(){e.setNavigationBarColor({frontColor:"#000000",backgroundColor:"transparent"}),e.hideShareMenu(),this.contHeight=i.globalData.systemHeight-this.marginTop-this.tabMargin,this.getInfo()},methods:{confirm:function(){var n=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},this.info);n.gender="男"==n.gender?"male":"female",n.age=Number(n.age),n.nation=-1!=n.nation.indexOf("族")?n.nation:n.nation+"族",this.$request("/worker/profile",n,"POST").then((function(n){if(0==n.code){e.showToast({title:"保存成功",duration:3e3});var t=getCurrentPages(),o=t[t.length-2];o&&o.$vm.getInfo&&o.$vm.getInfo()}}))},getPhoneNumber:function(n){var t=this,o={encrypted_data:"",iv:"",code:"",openid:""};"getPhoneNumber:ok"==n.detail.errMsg&&(o.encrypted_data=n.detail.encryptedData,o.iv=n.detail.iv,o.code=n.detail.code,o.open_id=e.getStorageSync("openid"),this.$request("/auth/worker/wechat/mini/login",o,"POST").then((function(n){0==n.code&&(t.info.mobile=n.data.mobile,e.setStorageSync("token",n.data.token))})))},getInfo:function(){var n=this;this.$request("/worker/profile").then((function(t){0==t.code&&(e.setStorageSync("userInfo",JSON.stringify(t.data)),n.info.name=t.data.name,n.info.gender=n.gender.filter((function(e){return e.value==t.data.gender}))[0]?n.gender.filter((function(e){return e.value==t.data.gender}))[0].text:"",n.info.age=t.data.age?t.data.age:"",n.info.nation=t.data.nation,n.info.mobile=t.data.mobile)}))},clear:function(e){this.$set(this.info,e,"")}}};n.default=u}).call(this,t("df3c")["default"])},"967d":function(e,n,t){},f496:function(e,n,t){"use strict";(function(e,n){var o=t("47a9");t("7cc7");o(t("3240"));var r=o(t("6e68"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(r.default)}).call(this,t("3223")["default"],t("df3c")["createPage"])}},[["f496","common/runtime","common/vendor"]]]);