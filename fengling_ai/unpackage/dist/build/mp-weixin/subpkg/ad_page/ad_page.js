(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpkg/ad_page/ad_page"],{5119:function(e,t,n){"use strict";var a=n("8448"),r=n.n(a);r.a},5230:function(e,t,n){"use strict";(function(e,t){var a=n("47a9");n("7cc7");a(n("3240"));var r=a(n("e14b"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(r.default)}).call(this,n("3223")["default"],n("df3c")["createPage"])},"688e":function(e,t,n){"use strict";n.r(t);var a=n("8237"),r=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=r.a},8237:function(e,t,n){"use strict";(function(e){var a=n("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("7eb4")),o=a(n("34cf")),i=a(n("7ca3")),c=a(n("ee10")),u=n("8f59");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=getApp(),f={data:function(){return{showForm:!1,showEdit:!1,imgUrl:d.globalData.baseImageUrl,marginTop:d.globalData.marginTop,tabMargin:d.globalData.tabMargin,contHeight:0,scrollHeight:0,topHeight:0,type:[{value:"month",text:"月"},{value:"day",text:"天"},{value:"hour",text:"时"}],info:{id:"",work_address:{province:"",city:"",district:"",address:"",location:{lat:30.688674,lng:103.821993}},name:"",content:"",broker_name:"",worker_salary_min:"",worker_salary_max:"",worker_salary_type:"",worker_age_min:0,worker_age_max:0,worker_gender:"both",is_applied:!1},id:"",ad_tracking_id:"",open_id:"",workerInfo:null,params:null}},onLoad:function(t){return(0,c.default)(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.setNavigationBarColor({frontColor:"#000000",backgroundColor:"transparent"});case 1:case"end":return t.stop()}}),t)})))()},onShow:function(){var e=this;return(0,c.default)(r.default.mark((function t(){var n,a,o,i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e,n=getCurrentPages(),a=n[n.length-1],o=a.$page.fullPath,i=o.split("?").length>1?o.split("?")[1]:"",i&&(console.log("urlParamStr",i),e.params=e.getQueryParams(o)),console.log("param",e.params),e.id=e.params.job_id,t.next=10,e.getInfo();case 10:return e.info=t.sent,e.contHeight=d.globalData.systemHeight,t.next=14,e.getOpenid();case 14:return e.open_id=t.sent,t.next=17,e.getWorderInfo();case 17:if(e.workerInfo=t.sent,"list"==e.params.from){t.next=24;break}return t.next=21,e.postParams(e.params);case 21:e.ad_tracking_id=t.sent,t.next=25;break;case 24:e.ad_tracking_id=e.params.ad_tracking_id;case 25:case"end":return t.stop()}}),t)})))()},components:{editForm:function(){n.e("components/edit_form").then(function(){return resolve(n("621c"))}.bind(null,n)).catch(n.oe)}},methods:l(l({},(0,u.mapMutations)(["setToken"])),{},{leftClick:function(){var t=getCurrentPages(),n=t[t.length-2];if(!n){var a=this.params.ad_platform?this.params.ad_platform:"",r=this.params.ad_sub_platform?this.params.ad_sub_platform:"";e.reLaunch({url:"/pages/index/index?ad_platform="+a+"&ad_sub_platform="+r})}},getQueryParams:function(e){var t=e.split("?")[1];if(!t)return{};var n=t.split("&"),a={};return n.forEach((function(e){if(e){var t=e.split("="),n=(0,o.default)(t,2),r=n[0],i=n[1];a[decodeURIComponent(r)]=decodeURIComponent(i||"")}})),a},postParams:function(e){var t=this;return new Promise((function(n){t.$request("/ad/tracking",e,"POST").then((function(e){0==e.code&&n(e.data.ad_tracking_id)}))}))},getElementInfo:function(){var t=this,n=e.createSelectorQuery().select(".top");n.boundingClientRect((function(e){e?(console.log(e),t.topHeight=d.globalData.systemHeight-e.top-t.tabMargin,t.scrollHeight=d.globalData.systemHeight-e.bottom-t.tabMargin-55):t.scrollHeight=t.contHeight-55})).exec()},open:function(){this.showForm=!0,this.showEdit=!0},sureSign:function(t){var n=this,a=this,r="/guest/project/"+this.id+"/lead-information",o={name:t.name,mobile:t.mobile,ad_tracking_id:this.ad_tracking_id,source:"wechat_mini_program"};this.$request(r,o,"POST").then((function(t){if(0==t.code){n.close();var r=t.data.lead_information_id,o=a.params.ad_platform?a.params.ad_platform:"",i=a.params.ad_sub_platform?a.params.ad_sub_platform:"";e.showModal({title:"预约成功，将进入小程序报名和确认。",showCancel:!1,success:function(t){t.confirm&&e.reLaunch({url:"/pages/index/index?from=ad&pro_id="+r+"&ad_platform="+o+"&ad_sub_platform="+i})}})}}))},close:function(){this.showForm=!1,this.showEdit=!1},getWorderInfo:function(){var e=this;return new Promise((function(t){e.$request("/worker/profile").then((function(e){t(e.data)}))}))},getOpenid:function(){var t=this;return new Promise((function(n){e.login({success:function(a){if("login:ok"==a.errMsg){var r={code:a.code,share_id:""};"/auth/worker/wechat/mini/openid",t.$request("/auth/worker/wechat/mini/openid",r,"POST").then((function(a){0==a.code&&(e.setStorage({key:"openid",data:a.data.open_id}),t.setToken(a.data.token),e.setStorageSync("token",a.data.token),e.setStorageSync("loginStatus","in"),n(a.data.open_id))}))}},fail:function(e){}})}))},getPhoneNumber:function(t){var n=this,a={encrypted_data:"",iv:"",code:"",openid:""};"getPhoneNumber:ok"==t.detail.errMsg&&(a.encrypted_data=t.detail.encryptedData,a.iv=t.detail.iv,a.code=t.detail.code,a.open_id=e.getStorageSync("openid"),this.$request("/auth/worker/wechat/mini/login",a,"POST").then((function(t){0==t.code&&(n.info.mobile=t.data.mobile,e.setStorageSync("token",t.data.token))})))},getInfo:function(){e.showLoading();var t=this,n="/guest/project/"+this.id;return new Promise((function(a){t.$request(n).then((function(t){0==t.code&&(e.hideLoading(),a(t.data))}))}))},clear:function(e){this.$set(this.info,e,"")}})};t.default=f}).call(this,n("df3c")["default"])},8448:function(e,t,n){},ce20:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var a={uNavbar:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-navbar/u-navbar")]).then(n.bind(null,"a807"))},uIcon:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(n.bind(null,"ced5"))},uPopup:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-popup/u-popup")]).then(n.bind(null,"c40c"))}},r=function(){var e=this,t=e.$createElement,n=(e._self._c,e.type.filter((function(t){return t.value==e.info.worker_salary_type}))),a=e.info.highlight.length;e.$mp.data=Object.assign({},{$root:{g0:n,g1:a}})},o=[]},e14b:function(e,t,n){"use strict";n.r(t);var a=n("ce20"),r=n("688e");for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("5119");var i=n("828b"),c=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=c.exports}},[["5230","common/runtime","common/vendor"]]]);