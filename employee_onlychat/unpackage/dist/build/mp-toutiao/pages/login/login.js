(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"403b":function(t,e,n){"use strict";n.r(e);var o=n("c4d4"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"4a84":function(t,e,n){"use strict";n.r(e);var o=n("ac17"),a=n("403b");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("d817");var r=n("828b"),s=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"f0fc2d12",null,!1,o["a"],void 0);e["default"]=s.exports},ac17:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var o=function(){var t=this.$createElement;this._self._c},a=[]},c4d4:function(t,e,n){"use strict";(function(t){var o=n("47a9");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("7eb4")),i=o(n("ee10")),r=getApp(),s={data:function(){return{showMask:!1,imgUrl:r.globalData.baseImageUrl,policyStatus:!1,showOtherLogin:!1,mobile:"",veri_code:"",password:"",currentTab:0,getPhoneData:{},canSend:!0,tipsText:"发送验证码",headHeight:r.globalData.loginHeadHeight,marginTop:r.globalData.marginTop,titleHeight:0,headTop:0,boxHeight:0,loginAreaTop:r.globalData.loginAreaTop,btnBottom:r.globalData.btnBottom,openid:""}},onLoad:function(e){var n=this;return(0,i.default)(a.default.mark((function e(){var o;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n,o=t.getMenuButtonBoundingClientRect(),n.titleHeight=o.height,n.headTop=o.top,n.boxHeight=r.globalData.systemHeight-n.loginAreaTop-n.btnBottom,e.next=7,n.getOpenId();case 7:n.openid=e.sent;case 8:case"end":return e.stop()}}),e)})))()},methods:{showPolicy:function(){this.showMask=!0},closeMask:function(){this.showMask=!1},changeTab:function(t){this.currentTab=t},checkPolicy:function(){this.policyStatus=!this.policyStatus},chooseLoginMethod:function(){this.showOtherLogin=!this.showOtherLogin},checkTab:function(t){this.currentTab=t},handlePolicy:function(){return!!this.policyStatus||(t.showToast({title:"请先勾选隐私协议",icon:"none",duration:2e3}),!1)},getOpenId:function(){var e=this;return new Promise((function(n){t.login({success:function(o){if(console.log(o,"dyres"),"login:ok"==o.errMsg){var a={code:o.code};"/auth/worker/douyin/openid",a.anonymous_code=o.anonymousCode,e.$request("/auth/worker/douyin/openid",a,"POST").then((function(e){0==e.code&&(t.setStorage({key:"openid",data:e.data.open_id}),n(e.data.open_id))}))}},fail:function(){t.showModal({title:"登录失败",content:"授权登录失败，将无法使用部分功能",showCancel:!1})}})}))},getPhoneNumber:function(e){var n=this;return(0,i.default)(a.default.mark((function o(){var i,r;return a.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(n.handlePolicy()){o.next=2;break}return o.abrupt("return");case 2:return i="",r=n,console.log(e,"getPhoneNumber"),o.next=7,n.getOpenId();case 7:n.getPhoneData.open_id=o.sent,console.log(n.getPhoneData),"getPhoneNumber:ok"==e.detail.errMsg?(n.getPhoneData.encrypted_data=e.detail.encryptedData,n.getPhoneData.iv=e.detail.iv,i="/auth/worker/douyin/login",r.$request(i,n.getPhoneData,"POST").then((function(e){0==e.code&&(t.showToast({title:"授权成功"}),t.setStorageSync("token",e.data),t.navigateBack())}))):t.showModal({title:e.detail.errMsg});case 10:case"end":return o.stop()}}),o)})))()},getMessageCode:function(){var e=this,n=this;if(this.canSend){var o={mobile:this.mobile};this.$request("/auth/send-sms-verify-code",o,"POST").then((function(t){if(0==t.code){e.canSend=!1;var o=60;e.tipsText=o+"s";var a=setInterval((function(){o>0?(o--,n.tipsText=o+"s"):(n.canSend=!0,n.tipsText="重新获取",clearInterval(a))}),1e3)}}))}else t.showModal({title:"验证码已发送，请稍后重试",showCancel:!1})},codeLogin:function(){if(this.handlePolicy()){var e={mobile:this.mobile,sms_verify_code:this.veri_code};this.$request("/auth/worker/login/sms",e,"POST").then((function(e){0==e.code&&(t.showToast({title:"登录成功",duration:2e3}),t.setStorageSync("token",e.data.token),t.navigateBack())}))}},passwordLogin:function(){if(this.handlePolicy()){var e={mobile:this.mobile,password:this.password};this.$request("/auth/worker/login/password",e,"POST").then((function(e){0==e.code&&(t.showToast({title:"登录成功",duration:2e3}),t.setStorageSync("token",e.data.token),t.navigateBack())}))}},back:function(){t.switchTab({url:"/pages/index/index"})}}};e.default=s}).call(this,n("a261")["default"])},d817:function(t,e,n){"use strict";var o=n("fb40"),a=n.n(o);a.a},e8c5:function(t,e,n){"use strict";(function(t,e){var o=n("47a9");n("e32d");o(n("3240"));var a=o(n("4a84"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(a.default)}).call(this,n("a261")["default"],n("a261")["createPage"])},fb40:function(t,e,n){}},[["e8c5","common/runtime","common/vendor"]]]);