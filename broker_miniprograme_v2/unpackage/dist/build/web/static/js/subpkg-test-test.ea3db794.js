(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["subpkg-test-test"],{2543:function(t,e,i){"use strict";i("7a82");var a=i("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac1f"),i("99af");var n=a(i("fc11")),s=a(i("2e63")),o=a(i("e85c")),r={data:function(){var t;return t={info:{arrival_time:"",broker_company_name:"",checkin_time:"",content:"",contract_template_id:"",contract_template_name:"",contracted_num:0,employer_name:"",id:"",insurance_meal_id:"",insurance_meal_name:"",is_employer_name_public:!1,name:"",need_worker_num:50,pay_salary_setting:{type:"daily",daily:"18:00",weekly:"",monthly:""},project_status:"",qrCode:"",salary_settlement_type:"",salary_unit_price:"",status:"",work_address:"",work_end_time:"",work_start_time:"",work_type:"",work_type_code:"",work_type_id:"",work_type_name:" "},currentTab:{value:"detail",text:"项目详情"},showMask:!1,pageName:"蓝蜂用工",marginTop:0,status:!1,showCode:!1},(0,n.default)(t,"status",o.default.status),(0,n.default)(t,"period",o.default.periodList),(0,n.default)(t,"paySalaryPeriod",o.default.paySalaryPeriod),(0,n.default)(t,"paySalaryWeekly",o.default.paySalaryWeekly),(0,n.default)(t,"tabs",[{value:"detail",text:"项目详情"},{value:"salary",text:"工人情况"}]),(0,n.default)(t,"htmlNodes","<p>工作内容：负责路由器，摄像头组装，手上工</p><p>工作要求：男女不限，16-42岁。</p><p>工作时间：早8:00 -晚20:00（月</p><p>工作地址：成都市新都区石板滩</p><p>工作时间：早8:00 -晚20:00（月</p><p>工作地址：成都市新都区石板滩</p><p>工作时间：早8:00 -晚20:00（月</p><p>工作地址：成都市新都区石板滩</p><p>吃住情况：包住宿，自带床上用品行李，有空</p>"),(0,n.default)(t,"displayType","-webkit-box"),(0,n.default)(t,"showAll",!0),(0,n.default)(t,"scrollHeight",0),(0,n.default)(t,"boxTop",0),(0,n.default)(t,"headerHeight",0),(0,n.default)(t,"currentPage",1),(0,n.default)(t,"contHeight",0),(0,n.default)(t,"scrollPadding",0),(0,n.default)(t,"tabHeight",0),(0,n.default)(t,"id",""),(0,n.default)(t,"list",[]),t},components:{customHeader:s.default},onLoad:function(t){var e=this;this.getMarginTop(),this.getSubtabHeight(),setTimeout((function(){e.getTopHeight()}),500),this.id=t.id,this.changeTab(this.currentTab)},methods:{getMarginTop:function(t){var e=uni.getMenuButtonBoundingClientRect();uni.getSystemInfoSync();this.marginTop=e.height+e.top},getSubtabHeight:function(){var t=uni.getSystemInfoSync();this.tabHeight=Math.floor(t.screenHeight*(44/844))},getTopHeight:function(){var t=uni.getSystemInfoSync();this.headerHeight=Math.floor(t.screenHeight*(200/844))},getElementInfo:function(){var t=this,e=(uni.getSystemInfoSync(),uni.createSelectorQuery().select(".cont")),i=uni.createSelectorQuery().select(".btn"),a=uni.createSelectorQuery().select(".code"),n=uni.createSelectorQuery().select(".subtitle"),s=0;e.boundingClientRect((function(t){t&&(s=t.bottom-t.top)})).exec();var o=0;i.boundingClientRect((function(t){t&&(t.height,o=t.top)})).exec();var r=0;a.boundingClientRect((function(t){t&&(r=t.height)})).exec();var l=0;n.boundingClientRect((function(t){t&&(l=t.bottom-t.top)})).exec(),setTimeout((function(){t.boxTop=t.marginTop+s,t.scrollHeight=o-t.boxTop-l-r-10,uni.hideLoading()}),500)},changeTab:function(t){var e=this;this.currentTab.value=t.value,this.currentTab.text=t.text,"detail"!=t.value&&this.getList(),uni.showLoading({title:"加载中..."}),setTimeout((function(){e.getElementInfo()}),500)},toContractDetail:function(){if("approved"==this.info.status){var t="/worker/contract/"+this.info.contract_id+"/sign-task-url";this.$request(t,{},"POST").then((function(t){if(0==t.code){var e=encodeURIComponent(t.data.sign_task_embed_url);uni.navigateTo({url:"/pagesFace/pages/webview/webview?url="+e})}else uni.showModal({title:t.msg})}))}else"pending"==this.info.status&&uni.showModal({title:"提示",content:"您的报名申请正在审核中，审核通过后才可查看合同签约哦，请耐心等待。",showCancel:!1})},getInfo:function(){var t=this,e="/worker/project/info/"+this.id;this.$request(e).then((function(e){0==e.code?t.info=e.data:uni.showModal({title:e.msg})}))},getList:function(){var t=this,e="/worker/project/"+this.id+"/"+this.currentTab.value+"?page="+this.currentPage;this.$request(e).then((function(e){0==e.code?(console.log(e,"res"),t.list=t.list.concat(e.data.list),t.pagination=e.data.pagination):uni.showModal({title:e.msg})}))},showTotal:function(){this.displayType="block",this.showAll=!1},lower:function(){"detail"!=this.currentTab.value&&(this.list.length<this.pagination.totalCount?(this.currentPage++,this.getList()):uni.showToast({title:"已全部加载~",icon:"none",duration:2e3}))}}};e.default=r},"2e63":function(t,e,i){"use strict";i.r(e);var a=i("f579"),n=i("c71e");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("da34");var o=i("f0c5"),r=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"1ac2b048",null,!1,a["a"],void 0);e["default"]=r.exports},3696:function(t,e,i){"use strict";i.r(e);var a=i("5404"),n=i("c442");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("f4c0");var o=i("f0c5"),r=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"43e933ff",null,!1,a["a"],void 0);e["default"]=r.exports},5404:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("customHeader",{attrs:{title:t.pageName,showBack:!0,headHeight:t.headerHeight}}),i("v-uni-view",{staticClass:"cont",style:{marginTop:t.marginTop+"px"}},[i("v-uni-view",{staticClass:"top_area",style:{top:t.marginTop+"px"}},[i("v-uni-view",{staticClass:"subtabs flex flex-start"},t._l(t.tabs,(function(e,a){return i("v-uni-view",{key:a,staticClass:"subtab",class:t.currentTab.value==e.value?"active":"",style:{height:t.tabHeight+"px",lineHeight:t.tabHeight+"px"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.changeTab(e)}}},[t._v(t._s(e.text))])})),1)],1),i("v-uni-view",{staticClass:"box",style:{top:t.boxTop+"px"}},["detail"==t.currentTab.value&&t.info.qrCode?i("v-uni-view",{staticClass:"code"},[i("v-uni-image",{attrs:{src:"https://static.swiftwd.com/worker/code_bg.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"code_tit"},[t._v(t._s(t.info.name))]),i("v-uni-view",{staticClass:"code_cont"},[i("v-uni-view",{staticClass:"code_img"},[i("v-uni-image",{attrs:{src:t.info.qrCode,mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"tips"},[t._v("请到工作现场出示二维码 扫码签到")])],1)],1):t._e(),"detail"==t.currentTab.value?i("v-uni-view",{staticClass:"subtitle flex flex-start"},[i("v-uni-image",{attrs:{src:"https://static.swiftwd.com/worker/ic_baoming_title_bg.png",mode:"heightFix"}}),i("v-uni-view",{staticClass:"text"},[t._v("项目详情")])],1):t._e(),i("v-uni-scroll-view",{staticClass:"scroll-Y",style:{height:t.scrollHeight+"px"},attrs:{"scroll-top":t.scrollTop,"scroll-y":"true"},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.lower.apply(void 0,arguments)}}},["detail"==t.currentTab.value?i("v-uni-view",{staticStyle:{background:"#fff"}},[i("v-uni-view",{staticClass:"base"},[i("v-uni-view",{staticClass:"line flex flex-start"},[i("v-uni-view",{staticClass:"tit"},[t._v("工作名称：")]),i("v-uni-view",{staticClass:"text"},[t._v(t._s(t.info.name))])],1),i("v-uni-view",{staticClass:"line flex flex-start"},[i("v-uni-view",{staticClass:"tit"},[t._v("用工主体：")]),i("v-uni-view",{staticClass:"text"},[t._v(t._s(t.info.employer_name))])],1),i("v-uni-view",{staticClass:"line flex flex-start"},[i("v-uni-view",{staticClass:"tit"},[t._v("到岗时间：")]),i("v-uni-view",{staticClass:"text"},[t._v(t._s(t.info.arrival_time))])],1),i("v-uni-view",{staticClass:"line flex flex-start"},[i("v-uni-view",{staticClass:"tit"},[t._v("开始时间：")]),i("v-uni-view",{staticClass:"text"},[t._v(t._s(t.info.work_start_time))])],1),i("v-uni-view",{staticClass:"line flex flex-start"},[i("v-uni-view",{staticClass:"tit"},[t._v("结束时间：")]),i("v-uni-view",{staticClass:"text"},[t._v(t._s(t.info.work_end_time))])],1),i("v-uni-view",{staticClass:"line flex flex-start"},[i("v-uni-view",{staticClass:"tit"},[t._v("工作酬劳：")]),i("v-uni-view",{staticClass:"text flex flex_btween"},[i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.info.salary_unit_price)+"元")]),i("v-uni-view",{staticClass:"period"},[t._v("/"+t._s(t.period.filter((function(e){return e.value==t.info.salary_settlement_type}))[0].text))])],1)],1),i("v-uni-view",{staticClass:"line flex flex-start"},[i("v-uni-view",{staticClass:"tit"},[t._v("结算方式：")]),i("v-uni-view",{staticClass:"text"},[t._v(t._s(t.period.filter((function(e){return e.value==t.info.salary_settlement_type}))[0].text))])],1),i("v-uni-view",{staticClass:"line flex flex-start"},[i("v-uni-view",{staticClass:"tit"},[t._v("发薪周期：")]),i("v-uni-view",{staticClass:"text"},[t._v(t._s(t.paySalaryPeriod.filter((function(e){return e.value==t.info.pay_salary_setting.type}))[0].text))])],1),i("v-uni-view",{staticClass:"line flex flex-start"},[i("v-uni-view",{staticClass:"tit"},[t._v("用工人数：")]),i("v-uni-view",{staticClass:"text flex flex_btween"},[i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.info.need_worker_num))]),i("v-uni-view",{staticClass:"period"},[t._v("人")])],1)],1),i("v-uni-view",{staticClass:"line flex flex-start"},[i("v-uni-view",{staticClass:"tit"},[t._v("服务类别：")]),i("v-uni-view",{staticClass:"text"},[t._v(t._s(t.info.work_type_name))])],1),i("v-uni-view",{staticClass:"line flex flex-start"},[i("v-uni-view",{staticClass:"tit"},[t._v("工作地点：")]),i("v-uni-view",{staticClass:"text"},[t._v(t._s(t.info.work_address))])],1)],1),i("v-uni-view",{staticClass:"more"},[i("v-uni-view",{staticClass:"tit"},[t._v("工作详情")]),i("v-uni-view",{staticClass:"textarea",style:{paddingBottom:t.showAll?"auto":t.scrollPadding+"px"}},[i("v-uni-rich-text",{style:{display:t.displayType},attrs:{nodes:t.info.content}}),t.showAll?i("v-uni-view",{staticClass:"showtotal",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showTotal.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"text"},[t._v("展开")]),i("v-uni-image",{attrs:{src:"https://static.swiftwd.com/broker/ic_more.png",mode:"widthFix"}})],1):t._e()],1)],1)],1):t._e(),"salary"==t.currentTab.value?i("v-uni-view",{staticClass:"detail"},[i("v-uni-view",{staticClass:"title flex flex-start"},[i("v-uni-image",{attrs:{src:"https://static.swiftwd.com/broker/ic_project_detail_user.png",mode:"heightFix"}}),i("v-uni-view",{staticClass:"text"},[t._v("工人详情")])],1),i("v-uni-view",{staticClass:"data"},[i("v-uni-view",{staticClass:"line flex flex_btween",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigate.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"left flex flex-start"},[i("v-uni-image",{attrs:{src:"https://static.swiftwd.com/broker/ic_project_detail_users.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"text"},[t._v("已报名")])],1),i("v-uni-view",{staticClass:"right flex flex-start"},[i("v-uni-view",{staticClass:"text orange"},[t._v(t._s(t.workersInfo.pending_num))]),i("v-uni-image",{attrs:{src:"https://static.swiftwd.com/broker/ic_trangle_right.png",mode:"widthFix"}})],1)],1),i("v-uni-view",{staticClass:"line flex flex_btween"},[i("v-uni-view",{staticClass:"left flex flex-start"},[i("v-uni-image",{attrs:{src:"https://static.swiftwd.com/broker/ic_project_detail_in.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"text"},[t._v("在职")])],1),i("v-uni-view",{staticClass:"right flex flex-start"},[i("v-uni-view",{staticClass:"text green"},[t._v(t._s(t.workersInfo.entry_num))]),i("v-uni-image",{attrs:{src:"https://static.swiftwd.com/broker/ic_trangle_right.png",mode:"widthFix"}})],1)],1),i("v-uni-view",{staticClass:"line flex flex_btween"},[i("v-uni-view",{staticClass:"left flex flex-start"},[i("v-uni-image",{attrs:{src:"https://static.swiftwd.com/broker/ic_project_detail_out.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"text"},[t._v("已离职")])],1),i("v-uni-view",{staticClass:"right flex flex-start"},[i("v-uni-view",{staticClass:"text red"},[t._v(t._s(t.workersInfo.depart_num))])],1)],1)],1)],1):t._e(),0==t.list.length&&"detail"!=t.currentTab.value?i("v-uni-view",{staticClass:"empty"},[i("v-uni-image",{attrs:{src:"https://static.swiftwd.com/worker/empty_bg.png",mode:"heightFix"}})],1):t._e()],1)],1),i("v-uni-view",{staticClass:"btn",style:{height:t.tabHeight+"px",lineHeight:t.tabHeight+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toContractDetail.apply(void 0,arguments)}}},[t._v(t._s("approved"==t.info.status?"查看合同并签约":"查看合同"))])],1)],1)},n=[]},6376:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=getApp(),n={name:"custom_header",props:["title","showBack","headHeight","showSecondimage","showScan","backIndex"],data:function(){return{titleHeight:0,marginTop:0,backLeft:0,imgUrl:a.globalData.baseImageUrl}},created:function(){var t=uni.getMenuButtonBoundingClientRect();this.titleHeight=t.height,this.marginTop=t.top},methods:{back:function(){this.backIndex?uni.switchTab({url:"/pages/index/index"}):uni.navigateBack()},scanCode:function(){var t=this;uni.scanCode({onlyFromCamera:!0,scanType:"qrCode",hideAlbum:!0,success:function(e){console.log(e);var i=e.result;t.$request(i,{},"POST").then((function(t){0==t.code&&uni.showModal({title:"工人："+t.data+"，报到核销成功",showCancel:!1})}))}})}}};e.default=n},"9bbe":function(t,e,i){var a=i("deba");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("f47a7f4e",a,!0,{sourceMap:!1,shadowMode:!1})},c442:function(t,e,i){"use strict";i.r(e);var a=i("2543"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},c5e5:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */uni-image[data-v-43e933ff]{width:auto;will-change:transform;height:auto}\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.btn[data-v-43e933ff]{width:100%;text-align:center;height:%?88?%;line-height:%?88?%;background:rgba(33,111,249,.2);box-shadow:0 1px 2px 0 rgba(0,0,0,.15);border-radius:8px;border:1px solid #216ff9;font-size:%?30?%;color:#2669e5;margin-top:%?40?%;box-sizing:border-box;font-weight:700}.cont[data-v-43e933ff]{position:fixed;width:100%;left:0;padding:0 %?28?%;box-sizing:border-box;overflow:hidden}.cont .code[data-v-43e933ff]{position:relative}.cont .code > uni-image[data-v-43e933ff]{width:100%}.cont .code .code_tit[data-v-43e933ff]{position:absolute;top:4%;left:0;width:100%;text-align:center;font-weight:600;font-size:%?30?%;color:#333}.cont .code .code_img[data-v-43e933ff]{position:absolute;top:50%;left:50%;width:67%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.cont .code .code_img uni-image[data-v-43e933ff]{width:100%}.cont .code .tips[data-v-43e933ff]{position:absolute;bottom:%?80?%;width:100%;left:0;text-align:center;font-size:%?24?%;color:#757575}.cont .btn[data-v-43e933ff]{width:calc(100% - %?80?%);left:%?40?%;position:fixed;bottom:%?40?%;background:#216ff9;color:#fff}.cont .box[data-v-43e933ff]{position:fixed;width:calc(100% - %?80?%);left:%?40?%;z-index:3;border-top-left-radius:%?16?%;border-top-right-radius:%?16?%;overflow:hidden;background:#f3f3f5}.cont .box > uni-image[data-v-43e933ff]{width:100%;height:100%}.cont .box .subtitle[data-v-43e933ff]{height:%?80?%;line-height:%?80?%;padding-left:%?56?%;box-sizing:border-box;font-size:%?30?%;color:#333;box-sizing:border-box;background:url(https://static.swiftwd.com/worker/ic_detail_title_bg.png) no-repeat;background-size:100% 100%}.cont .box .subtitle uni-image[data-v-43e933ff]{width:%?32?%;height:%?32?%;margin-right:%?8?%}.cont .box .base[data-v-43e933ff]{padding:0 %?56?%}.cont .box .base .line[data-v-43e933ff]{height:%?88?%;line-height:%?88?%;font-size:%?28?%;border-bottom:1px dashed #dfdfdf}.cont .box .base .line .tit[data-v-43e933ff]{width:%?140?%;color:#5a5a5a}.cont .box .base .line .text[data-v-43e933ff]{width:calc(100% - %?140?%);color:#333}.cont .box .base .line .text .period[data-v-43e933ff]{font-size:%?24?%;color:#a8a8a8}.cont .box .more[data-v-43e933ff]{padding:0 %?56?%}.cont .box .more .tit[data-v-43e933ff]{font-size:%?30?%;color:#216ff9;margin:%?40?% 0 %?10?% 0}.cont .box .more .textarea[data-v-43e933ff]{position:relative;background:#fff;line-height:%?40?%;font-size:%?28?%;color:#5a5a5a;border-radius:%?16?%;padding:%?20?%;box-sizing:border-box}.cont .box .more .textarea p[data-v-43e933ff]{margin-bottom:%?20?%}.cont .box .more .textarea uni-rich-text[data-v-43e933ff]{line-height:%?50?%;-webkit-line-clamp:4;overflow:hidden;text-overflow:ellipsis;height:auto;-webkit-box-orient:vertical;display:-webkit-box}.cont .box .more .textarea .showtotal[data-v-43e933ff]{color:#216ff9;margin:%?20?% auto;text-align:center;position:relative;z-index:100}.cont .box .more .textarea .showtotal uni-image[data-v-43e933ff]{width:%?32?%;height:%?32?%;vertical-align:middle}.salary .item[data-v-43e933ff]{background:#fff;border-radius:%?16?%;padding:%?40?%;box-sizing:border-box;margin-bottom:%?20?%;position:relative}.salary .item .status[data-v-43e933ff]{position:absolute;width:%?100?%;height:%?100?%;top:0;right:0}.salary .item .status uni-image[data-v-43e933ff]{width:%?100?%;height:%?100?%}.salary .item .line[data-v-43e933ff]{margin-bottom:%?24?%;font-size:%?28?%}.salary .item .line[data-v-43e933ff]:last-child{margin-bottom:0}.salary .item .line .tit[data-v-43e933ff]{width:%?160?%;color:#686868}.salary .item .line .text[data-v-43e933ff]{width:calc(100% - %?160?%);color:#333;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.salary .item .line .text.normal[data-v-43e933ff]{color:#2cb074;font-weight:700}.salary .item .line .text.abnormal[data-v-43e933ff]{color:#f9cb3d;font-weight:700}.detail[data-v-43e933ff]{background:url(https://static.swiftwd.com/broker/bg_detail.png) no-repeat;background-size:cover;box-shadow:0 1px 3px 0 rgba(0,0,0,.15);padding-bottom:%?40?%;max-height:calc(100% - %?148?%);overflow:scroll}.detail .data[data-v-43e933ff]{padding:0 %?40?%;box-sizing:border-box}.detail .data .line[data-v-43e933ff]{height:%?100?%;line-height:%?100?%;border-bottom:1px dashed #dfdfdf}.detail .data .line[data-v-43e933ff]:last-child{padding-right:%?30?%;box-sizing:border-box}.detail .data .line .left uni-image[data-v-43e933ff]{width:%?40?%;height:%?34?%;margin-right:%?8?%}.detail .data .line .left .text[data-v-43e933ff]{font-size:%?28?%;color:#333}.detail .data .line .right[data-v-43e933ff]{font-size:%?36?%;font-weight:700}.detail .data .line .right .orange[data-v-43e933ff]{color:#ffa800}.detail .data .line .right .green[data-v-43e933ff]{color:#19c388}.detail .data .line .right .red[data-v-43e933ff]{color:#ef361b}.detail .data .line .right uni-image[data-v-43e933ff]{width:%?14?%;height:%?24?%;margin-left:%?16?%}.detail .title[data-v-43e933ff]{height:%?80?%;padding-left:%?40?%;box-sizing:border-box;background:url(https://static.swiftwd.com/broker/bg_title.png) no-repeat;background-size:cover;font-size:%?30?%;color:#333}.detail .title uni-image[data-v-43e933ff]{width:%?32?%;height:%?32?%;margin-right:%?10?%}',""]),t.exports=e},c71e:function(t,e,i){"use strict";i.r(e);var a=i("6376"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},d118:function(t,e,i){var a=i("c5e5");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("738a95ca",a,!0,{sourceMap:!1,shadowMode:!1})},da34:function(t,e,i){"use strict";var a=i("9bbe"),n=i.n(a);n.a},deba:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */uni-image[data-v-1ac2b048]{width:auto;will-change:transform;height:auto}\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.custom_header[data-v-1ac2b048]{position:fixed;top:0;left:0;width:100%;background:url(https://static.test.swiftwd.com/broker/bg.png) no-repeat;background-size:100% 100%;overflow:hidden;z-index:2}.custom_header > uni-image[data-v-1ac2b048]{width:100%;position:fixed;top:0;left:0;z-index:3;will-change:transform}.custom_header .title[data-v-1ac2b048]{text-align:center;color:#fff;font-size:%?32?%;position:relative;font-weight:700;z-index:10}.custom_header .title .back[data-v-1ac2b048]{position:absolute;left:%?48?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:%?44?%;height:%?44?%}.custom_header .title .back uni-image[data-v-1ac2b048]{width:%?44?%;height:%?44?%;will-change:transform}.custom_header .title .scan[data-v-1ac2b048]{position:absolute;left:%?48?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.custom_header .title .scan uni-image[data-v-1ac2b048]{width:%?32?%;height:%?32?%;margin-right:%?8?%}.custom_header .title .scan uni-text[data-v-1ac2b048]{font-size:%?28?%;color:#fff}',""]),t.exports=e},e85c:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={status:[{value:"pending",text:"待处理"},{value:"rejected",text:"报名拒绝"},{value:"signing_expired",text:"报名过期"},{value:"approved",text:"待签约"},{value:"contracted",text:"签约成功"},{value:"contract_expired",text:"签约过期"},{value:"worker_rejected",text:"签约拒绝"},{value:"quited",text:"已离职"},{value:"end",text:"项目关闭"}],workerStatus:[{value:"enrolled",text:"已报名"},{value:"enroll_expired",text:"报名失效"},{value:"enroll_rejected",text:"报名拒绝"},{value:"wait_check_in",text:"待报到"},{value:"not_check_in",text:"失约"},{value:"check_in",text:"待签约"},{value:"contract_rejected",text:"未签约"},{value:"entry",text:"已入职"},{value:"depart",text:"已离职"},{value:"end",text:"项目完结"}],periodList:[{value:"hour",text:"时"},{value:"day",text:"天"},{value:"week",text:"周"},{value:"month",text:"月"}],paySalaryPeriod:[{value:"daily",text:"按天"},{value:"weekly",text:"按周"},{value:"monthly",text:"按月"}],paySalaryWeekly:[{value:"0",text:"星期天"},{value:"1",text:"星期一"},{value:"2",text:"星期二"},{value:"3",text:"星期三"},{value:"4",text:"星期四"},{value:"5",text:"星期五"},{value:"6",text:"星期六"}]}},f4c0:function(t,e,i){"use strict";var a=i("d118"),n=i.n(a);n.a},f579:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"custom_header",style:{height:t.headHeight+"px"}},[t.showSecondimage?i("v-uni-image",{attrs:{src:t.imgUrl+"/broker/ic_jiedan_header_bg.png",mode:"widthFix"}}):t._e(),i("v-uni-view",{staticClass:"title",style:{lineHeight:t.titleHeight+"px",height:t.titleHeight+"px",marginTop:t.marginTop+"px"}},[t.showBack?i("v-uni-view",{staticClass:"back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:t.imgUrl+"/broker/back.png",mode:""}})],1):t._e(),i("v-uni-view",{staticClass:"text"},[t._v(t._s(t.title))])],1)],1)},n=[]}}]);