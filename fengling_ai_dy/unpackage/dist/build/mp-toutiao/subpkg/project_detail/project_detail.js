(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpkg/project_detail/project_detail"],{"21cc":function(e,t,a){"use strict";a.r(t);var n=a("ef63"),o=a("5dd3");for(var i in o)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(i);a("c243");var r=a("828b"),l=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"be48dda0",null,!1,n["a"],void 0);t["default"]=l.exports},"5dd3":function(e,t,a){"use strict";a.r(t);var n=a("a2c9"),o=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=o.a},a2c9:function(e,t,a){"use strict";(function(e){var n=a("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("7eb4")),i=n(a("ee10")),r=n(a("7ca3")),l=n(a("425e")),s=getApp(),u={data:function(){var e;return e={imgUrl:s.globalData.baseImageUrl,info:{sign:!0,arrival_time:"",broker_company_name:"",checkin_time:"",content:"",contract_template_id:"",contract_template_name:"",contracted_num:0,employer_name:"",id:"",insurance_meal_id:"",insurance_meal_name:"",is_employer_name_public:!1,name:"",need_worker_num:50,pay_salary_setting:{type:"daily",daily:"18:00",weekly:"",monthly:""},project_status:"",qrCode:"",salary_settlement_type:"",salary_unit_price:"",status:"",work_address:"",work_end_time:"",work_start_time:"",work_type:"",work_type_code:"",work_type_id:"",work_type_name:" "},currentTab:{value:"detail",text:"项目详情"},showMask:!1,pageName:"灵动优聘",marginTop:s.globalData.marginTop,tabMargin:s.globalData.tabMargin,subTabHeight:s.globalData.subTabHeight,btnBottom:s.globalData.btnBottom,detailTitleHeight:s.globalData.detailTitleHeight,codeHeight:s.globalData.codeHeight,status:!1,showCode:!1},(0,r.default)(e,"status",l.default.status),(0,r.default)(e,"periodList",l.default.periodList),(0,r.default)(e,"paySalaryPeriod",l.default.paySalaryPeriod),(0,r.default)(e,"paySalaryWeekly",l.default.paySalaryWeekly),(0,r.default)(e,"tabs",[{value:"detail",text:"项目详情",show:!0},{value:"salary",text:"工资单",show:!0},{value:"insurances",text:"保险记录",show:!0}]),(0,r.default)(e,"htmlNodes","<p>工作内容：负责路由器，摄像头组装，手上工</p><p>工作要求：男女不限，16-42岁。</p><p>工作时间：早8:00 -晚20:00（月</p><p>工作地址：成都市新都区石板滩</p><p>工作时间：早8:00 -晚20:00（月</p><p>工作地址：成都市新都区石板滩</p><p>工作时间：早8:00 -晚20:00（月</p><p>工作地址：成都市新都区石板滩</p><p>吃住情况：包住宿，自带床上用品行李，有空</p>"),(0,r.default)(e,"displayType","-webkit-box"),(0,r.default)(e,"showAll",!0),(0,r.default)(e,"scrollHeight",0),(0,r.default)(e,"boxTop",0),(0,r.default)(e,"headerHeight",s.globalData.topHeight),(0,r.default)(e,"currentPage",1),(0,r.default)(e,"contHeight",0),(0,r.default)(e,"scrollPadding",0),(0,r.default)(e,"tabHeight",0),(0,r.default)(e,"id",""),(0,r.default)(e,"list",[]),(0,r.default)(e,"refreshStatus",!0),(0,r.default)(e,"isPulling",!1),(0,r.default)(e,"timer",null),(0,r.default)(e,"showSubTab",!0),(0,r.default)(e,"boxHeight",0),(0,r.default)(e,"signed",!1),(0,r.default)(e,"marker",[]),(0,r.default)(e,"from",""),e},components:{customHeader:function(){a.e("components/custom_header").then(function(){return resolve(a("8f8a"))}.bind(null,a)).catch(a.oe)}},onLoad:function(t){var a=this;return(0,i.default)(o.default.mark((function n(){return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a.id=t.id,t.from&&(a.from=t.from),n.next=4,a.getInfo();case 4:a.info=n.sent,e.showShareMenu({title:"灵动优聘",content:a.info.name,path:"/subpkg/project_detail/project_detail?id="+a.id+"&from=share"}),a.marker=[{id:1,latitude:a.info.work_address.location.lat,longitude:a.info.work_address.location.lng,iconPath:a.imgUrl+"/broker/ic_posi_red.png",width:25,height:25}],a.signed=a.info.sign,a.boxTop=a.marginTop+a.tabMargin,a.scrollHeight=s.globalData.systemHeight-a.marginTop-a.tabMargin;case 10:case"end":return n.stop()}}),n)})))()},onHide:function(){clearInterval(this.timer)},onUnload:function(){clearInterval(this.timer)},methods:{prevImage:function(){for(var t=[],a=this.info.images.length,n=0;n<a;n++)t.push(this.info.images[n].url);e.previewImage({urls:t})},openAddress:function(){e.openLocation({latitude:this.info.work_address.location.lat,longitude:this.info.work_address.location.lng,scale:18,name:this.info.work_address.address,address:this.info.work_address.address,success:function(){console.log("地图打开成功")},fail:function(e){console.error("地图打开失败",e)}})},makePhoneCall:function(t){this.signed?e.makePhoneCall({phoneNumber:t}):e.showModal({title:"报名后才可拨打电话。",showCancel:!1})},signIn:function(){var t=this;this.isLogin()?e.showModal({title:"正在报名",content:"是否确认报名项目："+t.info.name+"？",success:function(a){if(a.confirm){var n="/worker/accept/project/"+t.info.id;t.$request(n,{},"POST").then(function(){var a=(0,i.default)(o.default.mark((function a(n){return o.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(0!=n.code){a.next=6;break}return e.showToast({title:"已报名",duration:3e3}),a.next=4,t.getInfo();case 4:t.info=a.sent,t.signed=!0;case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())}}}):e.showModal({title:"请先登录",success:function(t){t.confirm&&e.navigateTo({url:"/pages/login/login"})}})},getElementInfo:function(){var t=this,a=(e.getSystemInfoSync(),e.createSelectorQuery().select(".base_box"));a.boundingClientRect((function(e){e&&(console.log(e),t.info.sign?t.scrollHeight=s.globalData.systemHeight-t.marginTop-t.tabMargin-t.btnBottom-e.height:t.scrollHeight=s.globalData.systemHeight-t.marginTop-t.tabMargin-2*t.btnBottom-e.height-t.subTabHeight)})).exec()},getInfo:function(){var e=this;return new Promise((function(t){if(e.isLogin()){var a="/worker/project/info/"+e.id;e.$request(a).then((function(e){0==e.code&&t(e.data)}))}else{var n="/common/project/info/"+e.id;e.$request(n).then((function(e){0==e.code&&t(e.data)}))}}))}}};t.default=u}).call(this,a("a261")["default"])},bc04:function(e,t,a){"use strict";(function(e,t){var n=a("47a9");a("e32d");n(a("3240"));var o=n(a("21cc"));e.__webpack_require_UNI_MP_PLUGIN__=a,t(o.default)}).call(this,a("a261")["default"],a("a261")["createPage"])},c243:function(e,t,a){"use strict";var n=a("cfc2"),o=a.n(n);o.a},cfc2:function(e,t,a){},ef63:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,a=(e._self._c,e.periodList.filter((function(t){return t.value==e.info.worker_salary_type})));e.$mp.data=Object.assign({},{$root:{g0:a}})},o=[]}},[["bc04","common/runtime","common/vendor"]]]);