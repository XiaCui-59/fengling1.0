(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpkg/work_detail/work_detail"],{"0e86":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}));var o={lPainter:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/lime-painter/components/l-painter/l-painter")]).then(n.bind(null,"671a"))}},a=function(){var e=this.$createElement;this._self._c},r=[]},"45a4":function(e,t,n){"use strict";(function(e,t){var o=n("47a9");n("417d");o(n("3240"));var a=o(n("9159"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n("8fed")["default"],n("8fed")["createPage"])},7906:function(e,t,n){"use strict";n.r(t);var o=n("a524"),a=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=a.a},9159:function(e,t,n){"use strict";n.r(t);var o=n("0e86"),a=n("7906");for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("d532");var i=n("828b"),s=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,"5ac975ff",null,!1,o["a"],void 0);t["default"]=s.exports},a524:function(e,t,n){"use strict";(function(e){var o=n("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("7eb4")),r=o(n("ee10")),i=o(n("0b3f")),s=o(n("6ed3")),l=getApp(),c={data:function(){return{showAddBase:!1,showLogin:!1,sharePoster:{css:{width:""},views:[{type:"image",src:"https://static.test.swiftwd.com/broker/share_c_bg.jpg",css:{width:"100%",margin:"0 auto"}}]},imgUrl:l.globalData.baseImageUrl,pageName:"我要报名",marginTop:l.globalData.marginTop,tabMargin:l.globalData.tabMargin,detailTitleHeight:l.globalData.detailTitleHeight,btnBottom:l.globalData.btnBottom,info:{broker_mobile:"",broker_name:"",code:"",content:"",id:"",name:"",platform_fee_price:"",work_address:"",worker_salary:"",worker_welfare:""},displayType:"-webkit-box",showAll:!0,id:"",isLogin:!1,url:"",scrollHeight:0,contHeight:0,showMask:!1,showInner1:!1,showInner2:!1,headHeight:l.globalData.highTopHeight,btnHeight:l.globalData.btnHeight,pb_id:0,paramFrom:"",postFrom:"",status:i.default.status,period:i.default.periodList,paySalaryPeriod:i.default.paySalaryPeriod,paySalaryWeekly:i.default.paySalaryWeekly,fromArr:[{value:"ks",text:"kuaishou"},{value:"dy",text:"douyin"},{value:"wx",text:"wechat_mini_program"}]}},components:{customHeader:function(){n.e("components/custom_header").then(function(){return resolve(n("eb6c"))}.bind(null,n)).catch(n.oe)},addBase:function(){n.e("components/add_base_info").then(function(){return resolve(n("a59d"))}.bind(null,n)).catch(n.oe)}},onShareAppMessage:function(e){var t=this;return(0,r.default)(a.default.mark((function e(){var n,o,r;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o="p="+t.pb_id+"&f="+t.paramFrom,e.next=3,t.shareSave();case 3:return r=e.sent,console.log(r,"imageUrl"),n={title:t.info.name,path:"/subpkg/work_detail/work_detail?scene="+encodeURIComponent(o),imageUrl:r},e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))()},onShareTimeline:function(e){var t=this;return(0,r.default)(a.default.mark((function e(){var n,o,r;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o="p="+t.pb_id+"&f="+t.paramFrom,e.next=3,t.shareSave();case 3:return r=e.sent,console.log(r,"imageUrl"),n={title:t.info.name,path:"/subpkg/work_detail/work_detail?scene="+encodeURIComponent(o),imageUrl:r},e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))()},onLoad:function(e){var t,n=this;(this.contHeight=l.globalData.systemHeight-this.marginTop-this.tabMargin-this.btnBottom,this.scrollHeight=this.contHeight-this.btnHeight-2*this.btnBottom-this.detailTitleHeight,console.log(e,"param"),e.scene)&&function(){var o=decodeURIComponent(e.scene),a=o.split("&");for(t=0;t<a.length;t++)-1!=a[t].indexOf("p")&&(n.pb_id=a[t].split("=")[1]),-1!=a[t].indexOf("f")&&(n.paramFrom=a[t].split("=")[1],n.postFrom=n.fromArr.filter((function(e){return e.value==a[t].split("=")[1]}))[0].text)}()},onShow:function(){var e=this;console.log(this.pb_id,"onshow");var t="/share-to-worker/project/"+this.pb_id;this.$request(t).then((function(t){0==t.code&&(e.info=t.data,e.viewShareHaibao())}))},methods:{closeBase:function(){this.showAddBase=!1,e.showToast({title:"报名成功",duration:3e3})},shareSave:function(){var e=this;return new Promise((function(t){e.$refs.sharePainter.canvasToTempFilePathSync({fileType:"jpg",quality:1,success:function(n){var o={file:n.tempFilePath,type:"toc"},a="/share-to-worker/project/"+e.pb_id+"/poster-url";e.$request(a,o,"POST").then((function(e){0==e.code&&t(e.data.url)}))},fail:function(e){console.log(e,"err")}})}))},showTotal:function(){console.log(1234),this.displayType="block",this.showAll=!1},back:function(){e.switchTab({url:"/pages/index/index"})},viewShareHaibao:function(){var e=this;return(0,r.default)(a.default.mark((function t(){var n;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e,console.log(e.info,"viewsharehaibao"),e.sharePoster.views=[{type:"image",src:n.imgUrl+"/broker/share_c_bg.jpg",css:{width:"100%",margin:"0 auto"}},{type:"view",css:{width:"59.6%",textAlign:"left",position:"absolute",top:"14.5%",left:"50%",transform:"translateX(-50%)",lineHeight:"54rpx",lineClamp:1},views:[{type:"view",css:{display:"block",color:"#fff",padding:"8rpx 0",marginBottom:"10rpx",borderBottom:"1px dashed #FFAC3F"},views:[{type:"text",text:"工作名称：",css:{width:"35%",textAlign:"center",display:"inline-block",background:"#fff",fontWeight:"600",color:"#3D3D3D",fontSize:"30rpx",borderRadius:"8rpx",marginRight:"16rpx",padding:"0 8rpx"}},{type:"text",text:n.info.name,css:{fontFamily:"Verdana, Verdana",fontWeight:"bold",color:"#DA5233",textShadow:"0px 2px 2px #5A1100",display:"inline-block",fontSize:"40rpx"}}]},{type:"view",css:{display:"block",color:"#fff",padding:"8rpx 0",marginBottom:"10rpx",borderBottom:"1px dashed #FFAC3F"},views:[{type:"text",text:"工作酬劳：",css:{width:"35%",textAlign:"center",display:"inline-block",background:"#fff",fontWeight:"600",color:"#3D3D3D",fontSize:"30rpx",borderRadius:"8rpx",marginRight:"16rpx",padding:"0 8rpx"}},{type:"text",text:n.info.worker_salary,css:{fontFamily:"Verdana, Verdana",fontWeight:"bold",color:"#DA5233",textShadow:"0px 2px 2px #5A1100",display:"inline-block",fontSize:"40rpx"}}]},{type:"view",css:{display:"block",color:"#fff",padding:"8rpx 0",marginBottom:"10rpx",borderBottom:"1px dashed #FFAC3F"},views:[{type:"text",text:"工作福利：",css:{width:"35%",textAlign:"center",display:"inline-block",background:"#fff",fontWeight:"600",color:"#3D3D3D",fontSize:"30rpx",borderRadius:"8rpx",marginRight:"16rpx",padding:"0 8rpx"}},{type:"text",text:n.info.worker_welfare,css:{fontFamily:"Verdana, Verdana",fontWeight:"bold",color:"#DA5233",textShadow:"0px 2px 2px #5A1100",display:"inline-block",fontSize:"40rpx"}}]}]}];case 3:case"end":return t.stop()}}),t)})))()},toSign:function(){var t=e.getStorageSync("token");t?this.sureSign():this.showLogin=!0},closeLogin:function(){this.showLogin=!1},sureSign:function(){var t=this,n={"Content-Type":"application/json",Authorization:"bearer "+e.getStorageSync("token"),accept:"application/json","app-id":s.default.urls.appid,"open-id":e.getStorageSync("openid")?e.getStorageSync("openid"):"","from-platform":this.postFrom},o="/worker/accept/project/"+this.pb_id;this.$request(o,{},"POST",n).then(function(){var n=(0,r.default)(a.default.mark((function n(o){var r;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(0!=o.code){n.next=6;break}return t.closeLogin(),n.next=4,t.getUsrInfo();case 4:r=n.sent,"unknown"==r.gender?t.showAddBase=!0:e.showModal({title:"报名成功",content:"您已成功报名该项目，是否进入首页？",success:function(t){t.confirm&&e.switchTab({url:"/pages/index/index"})}});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}}};t.default=c}).call(this,n("8fed")["default"])},ac26:function(e,t,n){},d532:function(e,t,n){"use strict";var o=n("ac26"),a=n.n(o);a.a}},[["45a4","common/runtime","common/vendor"]]]);