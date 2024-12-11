(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"05e2":function(t,e,n){"use strict";(function(t){var i=n("47a9");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("7eb4")),a=i(n("ee10")),r=i(n("b115")),s=getApp(),u={data:function(){return{showAddInfo:!1,showNameInput:!0,showLogin:!1,avatar:s.globalData.baseImageUrl+"/broker/com_default.png",imgUrl:s.globalData.baseImageUrl,showMask:!1,refreshStatus:!0,isPulling:!1,pageName:"灵动优聘",marginTop:s.globalData.marginTop,mainTabHeight:s.globalData.mainTabHeight,subTabHeight:s.globalData.subTabHeight,tabMargin:s.globalData.tabMargin,bannerHeight:s.globalData.bannerHeight,modalTitle:"提示",modalContent:"",iconPosition:"right",modalBg:"/broker/modal_bg.png",modalIcon:"/broker/modal_icon.png",showCancel:!0,showConfirm:!0,imageUrl:"",tabs:[{value:"running",text:"进行中"},{value:"waiting-submit-review",text:"待提审"},{value:"reviewing",text:"审核中"},{value:"finished",text:"已完结"},{value:"",text:"全部"}],currentTab:{value:"running",text:"进行中"},list:[],scrollHeight:0,boxTop:0,headerHeight:s.globalData.highTopHeight,currentPage:1,pagination:{},projectStatics:{create_count:0,accept_count:0},tabbarHeight:0,loginStatus:!1,todo:0,showModal:!1,currentProject:{},periodList:r.default.periodList,userInfo:{}}},components:{tabbar:function(){n.e("components/tabbar").then(function(){return resolve(n("14ab"))}.bind(null,n)).catch(n.oe)},customHeader:function(){n.e("components/custom_header").then(function(){return resolve(n("731d"))}.bind(null,n)).catch(n.oe)},infoFirst:function(){n.e("components/info_first").then(function(){return resolve(n("c320"))}.bind(null,n)).catch(n.oe)}},onLoad:function(){this.boxTop=this.marginTop+this.bannerHeight+3*this.tabMargin+this.subTabHeight,this.scrollHeight=s.globalData.systemHeight-this.marginTop-this.subTabHeight-2*this.tabMargin-this.tabbarHeight-this.bannerHeight,this.isLogin()?this.loginStatus=!0:this.showLogin=!0},watch:{},onShow:function(){var t=this;return(0,a.default)(o.default.mark((function e(){var n;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.isLogin()){e.next=15;break}return t.loginStatus=!0,e.next=4,t.getTodoStatic();case 4:return n=e.sent,t.todo=n.total,t.currentPage=1,t.getList(),e.next=10,t.getInfo();case 10:t.userInfo=e.sent,"waiting_submit"!=t.userInfo.broker.review_status&&"rejected"!=t.userInfo.broker.review_status||(t.showAddInfo=!0),t.userInfo.broker.name&&(t.showNameInput=!1),e.next=17;break;case 15:t.list=[],t.todo=0;case 17:case"end":return e.stop()}}),e)})))()},methods:{handleInfo:function(t){"waiting_submit"==t.broker.review_status&&(this.showAddInfo=!0),t.broker.name&&(this.showNameInput=!1)},handleName:function(){this.showNameInput=!1},closeAddInfo:function(){this.showAddInfo=!1},closeLogin:function(){this.showLogin=!1},closeModal:function(){this.showModal=!1,this.resetData()},resetData:function(){this.imageUrl="",this.showCancel=!0,this.showConfirm=!0,this.content="",this.title="提示"},endProject:function(e){var n=this,i="您当前准备完结职位："+e.name+"，是否确认完结该职位？";t.showModal({title:"提示",content:i,confirmColor:"#f00",confirmText:"确认完结",success:function(i){if(i.confirm){var o="/broker/project/"+e.id+"/finish";n.$request(o,{},"POST").then((function(e){0==e.code&&(t.showModal({title:"职位已完结",showCancel:!1}),n.getList())}))}}})},toset:function(e){t.navigateTo({url:"/subpkg/set_fee/set_fee?id="+e})},toedit:function(e){t.navigateTo({url:"/subpkg/edit_project/edit_project?id="+e})},rePubProject:function(e){var n=this;t.showModal({title:"提示",content:"是否确认重新上架工作："+e.name+"？",confirmText:"确认上架",success:function(i){if(i.confirm){var o="/broker/project/"+e.id+"/re-publish";n.$request(o,{},"POST").then((function(e){0==e.code&&(t.showToast({title:"重新上架成功",duration:2e3}),n.getList())}))}}})},backProject:function(e){var n=this,i="是否确认撤回职位："+e.name+"？";t.showModal({title:"正在撤回",content:i,confirmText:"确认撤回",success:function(i){if(i.confirm){var o="/broker/project/"+e.id+"/revoke-reviewing";n.$request(o,{},"POST").then((function(e){0==e.code&&(t.showModal({title:"职位已撤回",showCancel:!1}),n.getList())}))}}})},handleCancel:function(){this.showModal=!1,this.currentProject={},this.modalTitle="",this.modalContent="",this.resetData()},deleProject:function(t){this.currentProject=t,this.modalTitle="删除",this.modalContent="当前删除职位:"+t.name+"？",this.showModal=!0},handleConfirm:function(){var e=this;if("提审"==this.modalTitle){var n="/broker/mini/project/"+this.currentProject.id+"/submit-review";this.$request(n,{},"POST").then((function(n){0==n.code&&(e.showModal=!1,e.resetData(),t.showToast({title:"提审成功",duration:3e3}),e.currentPage=1,e.getList())}))}else{var i="/broker/mini/project/"+this.currentProject.id;this.$request(i,{},"DELETE").then((function(n){0==n.code&&(e.showModal=!1,t.showToast({title:"已删除",duration:3e3}),e.currentPage=1,e.getList())}))}},submit:function(t){this.currentProject=t,this.modalTitle="提审",this.modalContent="当前提审职位:"+t.name+"？",this.showModal=!0},toadd:function(){var e=this;return(0,a.default)(o.default.mark((function n(){var i;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:i=t.getStorageSync("token"),i?"waiting_submit"==e.userInfo.broker.review_status?t.showModal({title:"您还未提交公司资质",confirmText:"去提交",success:function(e){e.confirm&&t.navigateTo({url:"/subpkg/authentication/authentication"})}}):"rejected"==e.userInfo.broker.review_status?t.showModal({title:"您提交的公司资质审核未通过，请重新提交。",confirmText:"重新提交",success:function(e){e.confirm&&t.navigateTo({url:"/subpkg/authentication/authentication"})}}):t.navigateTo({url:"/subpkg/add_project/add_project"}):e.showLogin=!0;case 2:case"end":return n.stop()}}),n)})))()},refreshData:function(){var t=this;this.isPulling||(this.isPulling=!0,this.refreshStatus=!0,this.currentPage=1,this.getList(),setTimeout((function(){t.refreshStatus=!1,t.isPulling=!1}),1e3))},getTabbarHeight:function(t){this.tabbarHeight=t},changeTab:function(t){this.currentTab=t,this.isLogin()?(this.currentPage=1,this.getList()):this.showLogin=!0},toDetail:function(e){t.navigateTo({url:"/subpkg/project_detail/project_detail?id="+e})},getMore:function(){var t=this,e="/broker/mini/projects"+(this.currentTab.value?"/"+this.currentTab.value:"")+"?page="+this.currentPage;this.$request(e).then((function(e){0==e.code&&(t.list=t.list.concat(e.data.list),t.pagination=e.data.pagination)}))},getList:function(){var t=this,e="/broker/mini/projects"+(this.currentTab.value?"/"+this.currentTab.value:"")+"?page=1";this.$request(e).then((function(e){0==e.code&&(t.list=e.data.list,t.pagination=e.data.pagination)}))},lower:function(){this.list.length<this.pagination.totalCount?(this.currentPage++,this.getMore()):this.list.length>=this.pagination.totalCount&&t.showToast({title:"已经到底啦~",icon:"none",duration:2e3})}}};e.default=u}).call(this,n("df3c")["default"])},"0a40":function(t,e,n){"use strict";n.r(e);var i=n("4261"),o=n("7b58");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("1fa6");var r=n("828b"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"ba500c5c",null,!1,i["a"],void 0);e["default"]=s.exports},"1fa6":function(t,e,n){"use strict";var i=n("fd2e"),o=n.n(i);o.a},"25d1":function(t,e,n){"use strict";(function(t,e){var i=n("47a9");n("226a");i(n("3240"));var o=i(n("0a40"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(o.default)}).call(this,n("3223")["default"],n("df3c")["createPage"])},4261:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.list.length),i=t.list.length,o=t.__map(t.list,(function(e,n){var o=t.__get_orig(e),a=0!=i?t.periodList.filter((function(t){return t.value==e.worker_salary_type})):null;return{$orig:o,g2:a}})),a=t.list.length;t.$mp.data=Object.assign({},{$root:{g0:n,g1:i,l0:o,g3:a}})},o=[]},"7b58":function(t,e,n){"use strict";n.r(e);var i=n("05e2"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},fd2e:function(t,e,n){}},[["25d1","common/runtime","common/vendor"]]]);