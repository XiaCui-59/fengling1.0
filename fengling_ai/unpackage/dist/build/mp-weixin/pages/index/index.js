(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"22b9":function(e,t,n){"use strict";var o=n("ed6e"),i=n.n(o);i.a},"475d":function(e,t,n){"use strict";n.r(t);var o=n("9eb2"),i=n("d140");for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("22b9");var r=n("828b"),s=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);t["default"]=s.exports},"8f0f":function(e,t,n){"use strict";(function(e,o){var i=n("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("7eb4")),r=i(n("ee10")),s=i(n("7ca3")),c=i(n("1956")),u=i(n("6290")),l=n("8f59");function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,s.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=getApp(),g={data:function(){return{showUserStep:!1,showProPop:!1,showFlMask:!1,canPlay:!0,greetingObj:{logo:f.globalData.baseImageUrl+"/worker/new/index_ai_logo.png",title:"您好呀！我是您的职位推荐官风铃。",content:"您可以将您想找的工作、期望的薪资、福利待遇的要求等等发送给我，我会为您推荐合适的职位，快来与我互动吧。"},showLoading:!0,showSend:!1,newUser:!1,ifSingle:1154==f.globalData.scene,menuButtonInfo:f.globalData.menuButtonInfo,marginTop:f.globalData.marginTop,maskStartPoint:{},maskEndPoint:{},showMenu:!1,manager:f.globalData.manager,menuList:[{text:"已报名工作",url:"/subpkg/sign_record/sign_record",icon:"",value:"1"},{text:"工作浏览记录",url:"/subpkg/view_record/view_record",icon:"",value:"13条"},{text:"积分管理",url:"/subpkg/score/score",icon:"",value:"充值"},{text:"钱包余额",url:"/pages/balance/balance",icon:"rmb-circle-fill",value:"0"},{text:"邀请有礼",url:"/pages/invite/invite",icon:"share-fill",value:"立即返现"},{text:"关于我们",url:"/pages/about/about",icon:"info-circle-fill",value:""},{text:"联系客服",url:"",icon:"info-circle-fill",value:""}],imgUrl:f.globalData.baseImageUrl,list4:[{name:"风铃"},{name:"对话"},{name:"频道"}],currentTabIndex:0,statusBarHeight:f.globalData.statusBarHeight,botSafe:0,userInfo:{is_vip:!1},showVoice:!1,inputing:!1,voicePermisson:!1,showLogin:!1,shareId:"",params:null,openid:"",cancelRecord:!1,touchStartTime:"",touchEndTime:"",secondTimer:null,num:1,hold:"h1",question:"",qaList:[],currentQalength:0,curRespone:{content:"",origin:"ai",msg_type:"text",card:null},responseStr:"",responCount:0,prinTimer:null,historyList:[],historyId:0,loadAllHistory:!1,inputHeight:0,chatScrollHeight:0,btnInfo:null,bodyStartPoint:null,bodyEndPoint:null,moveDirection:"",printTimer1:null,printTimer2:null,printTimer3:null,hasChannel:!1,scrollStr:"",jobId:"",noMayAsk:!1,greetingReady:!1,action:"",currentProjectDetail:{id:"",name:"",worker_salary_min:"",worker_salary_max:"",worker_salary_type:""},pro_id:"",pro_name:"",loadWorkInfo:null}},computed:d(d({},(0,l.mapState)(["answering","connected","connecting","canSend","inChannel","answerContinue","channelQaLen","channelId","channelQaList","location","token","inCall","responEnd","aiReady","ad_tracking_id","callBackCount"])),{},{indexReady:function(){return this.aiReady&&this.greetingReady&&e.hideLoading(),this.aiReady&&this.greetingReady}}),onLoad:function(t){var n=this;return(0,r.default)(a.default.mark((function o(){var i,s,l,h,d;return a.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(e.setNavigationBarColor({frontColor:"#000000",backgroundColor:"transparent"}),i=n,console.log("params",t),s=t.scene?decodeURIComponent(t.scene).split("=")[1]:"",n.shareId=t.share_id?t.share_id:s||"",n.params=t,l=e.getStorageSync("readsteps")?e.getStorageSync("readsteps"):"",!t.job_id){o.next=15;break}return e.setStorageSync("readsteps",1),n.canPlay=!1,o.next=12,n.getProjectDetail();case 12:n.currentProjectDetail=o.sent,o.next=16;break;case 15:n.showUserStep=!l;case 16:return n.resetCity(),n.resetCallBackCount(),e.getNetworkType({success:function(t){"none"==t.networkType.toString()&&e.showModal({title:"当前无网络，请检查您的网络设置，并重启小程序。",showCancel:!1})},fail:function(e){console.log("网络判断error",e)}}),e.onNetworkStatusChange(function(){var t=(0,r.default)(a.default.mark((function t(n){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("网络变化了：",n.isConnected,n.networkType),"none"==n.networkType.toString()?e.showModal({title:"当前无网络，请检查您的网络设置，并重启小程序。",showCancel:!1}):(e.reLaunch({url:"/pages/index/index"}),e.offNetworkStatusChange());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),o.next=22,c.default.getElementInfo(".input_btn_wrap");case 22:return n.btnInfo=o.sent,n.btnInfo&&(n.botSafe=f.globalData.systemHeight-n.btnInfo.top,n.chatScrollHeight=n.btnInfo.top-n.statusBarHeight-44),o.next=26,n.getPosition();case 26:return h=o.sent,n.setLocation(h),d=e.getStorageSync("token")?e.getStorageSync("token"):"",n.header={"content-type":"application/json","app-id":u.default.urls.appid,"open-id":e.getStorageSync("openid")?e.getStorageSync("openid"):"",address:i.location?encodeURIComponent(JSON.stringify(i.location)):"",Authorization:"bearer "+d,"ad-platform":t.ad_platform?t.ad_platform:"","ad-sub-platform":t.ad_sub_platform?t.ad_sub_platform:"","job-id":n.currentProjectDetail.id?n.currentProjectDetail.id:t.pro_id?t.pro_id:""},o.next=32,n.getOpenid();case 32:if(n.openid=o.sent,"ad"!=t.from){o.next=42;break}return e.setStorageSync("readsteps",1),n.canPlay=!1,n.pro_id=t.pro_id,o.next=39,n.getWorkInfo();case 39:n.loadWorkInfo=o.sent,o.next=43;break;case 42:n.showUserStep=!l;case 43:n.creatConnect(n.header),n.postParams(),n.getSetting(),n.isLogin()&&n.getInfo();case 47:case"end":return o.stop()}}),o)})))()},onUnload:function(){console.log("执行了onUnload"),this.canPlay=!1,this.close()},onShow:function(){var t=this;return(0,r.default)(a.default.mark((function n(){var o;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:o=t,t.closeAnswering(),t.initRecord(),e.onKeyboardHeightChange(t.listenKeyBoard),1==t.currentTabIndex&&t.$nextTick((function(){o.$refs.chatRef.toScroll()}));case 5:case"end":return n.stop()}}),n)})))()},onHide:function(){f.globalData.Audio.stop(),f.globalData.Audio.offPlay(),f.globalData.Audio.offPause(),f.globalData.Audio.offStop(),f.globalData.Audio.offEnded(),this.canPlay=!1,e.offKeyboardHeightChange(this.listenKeyBoard)},mounted:function(){},components:{login:function(){Promise.all([n.e("common/vendor"),n.e("components/login")]).then(function(){return resolve(n("1f52"))}.bind(null,n)).catch(n.oe)},welcome:function(){Promise.all([n.e("common/vendor"),n.e("components/welcome")]).then(function(){return resolve(n("13e2"))}.bind(null,n)).catch(n.oe)},chat:function(){n.e("components/chat").then(function(){return resolve(n("5cb1"))}.bind(null,n)).catch(n.oe)},channel:function(){n.e("components/channel").then(function(){return resolve(n("a96e"))}.bind(null,n)).catch(n.oe)},flMask:function(){n.e("components/flmask").then(function(){return resolve(n("b8c8"))}.bind(null,n)).catch(n.oe)},asideUserCenter:function(){n.e("components/aside_user_center").then(function(){return resolve(n("7dd4"))}.bind(null,n)).catch(n.oe)},projectPopup:function(){n.e("components/load_project_popup").then(function(){return resolve(n("5d64"))}.bind(null,n)).catch(n.oe)}},watch:{currentTabIndex:function(e,t){var n=this,o=this;if(0!=e&&(this.canPlay=!1,this.isLogin()?1==e&&this.$nextTick((function(){o.$refs.chatRef.toScroll()})):this.showLogin=!0),0==e&&(this.canPlay=!0),1==e&&0==this.callBackCount&&this.ad_tracking_id){var i={ad_tracking_id:this.ad_tracking_id};this.$request("/worker/ad/callback",i,"POST").then((function(e){0==e.code&&(console.log("执行回传"),n.setCallBackCount())}))}},question:function(e){this.showSend=!!e}},methods:d(d({},(0,l.mapMutations)(["openAnswering","closeAnswering","setConnected","unConnected","setConnecting","unConnecting","openCansend","closeCansend","notChannel","isChannel","addChannelQaList","openAnswerContinue","closeAnswerContinue","updateChannelQaList","setChannelId","setLocation","setToken","clearChannelQaList","notInCall","setCallContent","setRespEnd","notRespEnd","setInterviewCard","setIncallEnroll","setIncallJobId","resetIncallEnroll","closeInterviewCard","setAiReady","resetAiReady","resetCity","setChannelInterviewCard","closeChannelInterviewCard","setJobName","resetJobName","setJobId","resetJobId","setHangUpFirst","setQunCode","setAdTrackingId","setCallBackCount","resetCallBackCount"])),{},{setScrollHeight:function(){this.chatScrollHeight=this.btnInfo.top-this.statusBarHeight-44},backHome:function(){this.currentTabIndex=0},postParams:function(){var e=this;this.$request("/ad/tracking",this.params,"POST").then((function(t){0==t.code&&e.setAdTrackingId(t.data.ad_tracking_id)}))},closeStep:function(){this.showUserStep=!1},getProjectDetail:function(){var e=this;return new Promise((function(t){var n="/guest/project/"+e.params.job_id;e.$request(n).then((function(e){0==e.code&&t(e.data)}))}))},onInput:function(e){this.question=e.target.value},openCanPlay:function(){this.canPlay=!0},closeProPop:function(){this.showProPop=!1,this.currentProjectDetail.id="",this.currentProjectDetail.name=""},toCall:function(t){if(this.aiReady){if(this.answering||this.answerContinue)return e.showToast({title:"回答中，请稍后",icon:"error",duration:2e3}),void(this.currentTabIndex=1);var n="",o="";t&&(n=t.type,o=t.job_id);var i=this;this.isLogin()?e.authorize({scope:"scope.record",success:function(t){i.voicePermisson=!0,i.canPlay=!1,e.navigateTo({url:"/pages/phone_call/phone_call?status="+n+"&job_id="+o})},fail:function(t){i.voicePermisson=!1,i.$refs.myModal.showModal({title:"请先开启语音输入权限。",showCancel:!1,confirmText:"好的",success:function(t){"confirm"==t&&e.openSetting({success:function(t){t.authSetting["scope.record"]&&(i.voicePermisson=!0,i.canPlay=!1,e.navigateTo({url:"/pages/phone_call/phone_call?status="+n+"&job_id="+o}))},fail:function(e){i.voicePermisson=!1}})}})},complete:function(){e.setStorageSync("voiceAuth",!0)}}):this.showLogin=!0}else e.showToast({title:"连接中，请稍后",icon:"error",duration:2e3})},listenKeyBoard:function(e){0==e.height?(this.inputHeight=0,this.chatScrollHeight=this.btnInfo.top-this.statusBarHeight-44):this.chatScrollHeight=f.globalData.systemHeight-this.statusBarHeight-44-e.height-this.btnInfo.height-10},handleChannelStatus:function(e){this.hasChannel=e},clickFengling:function(){this.showFlMask=!0},closeFengling:function(){this.showFlMask=!1},getPosition:function(){var e=this;return new Promise((function(t,n){e.$request("/guest/location").then((function(e){0==e.code&&t(e.data)}))}))},getOpenid:function(){var t=this;return new Promise((function(n){e.login({success:function(o){if("login:ok"==o.errMsg){var i={code:o.code,share_id:t.shareId};"/auth/worker/wechat/mini/openid",t.$request("/auth/worker/wechat/mini/openid",i,"POST",t.header).then((function(o){0==o.code&&(e.setStorage({key:"openid",data:o.data.open_id}),t.header["open-id"]=o.data.open_id,t.header["Authorization"]="bearer "+o.data.token,t.setToken(o.data.token),e.setStorageSync("token",o.data.token),e.setStorageSync("loginStatus","in"),n(o.data.open_id))}))}},fail:function(e){}})}))},printResponse:function(){var e=this,t=0;this.prinTimer=setInterval((function(){var n=e.responseStr.length;t<n?(e.curRespone.content+=e.responseStr[t],e.inChannel?e.updateChannelQaList(e.curRespone):e.inCall||e.$set(e.qaList,e.currentQalength,e.curRespone),t++):e.responEnd&&(e.curRespone.card&&(e.curRespone.card.showCard=!0),clearInterval(e.prinTimer),e.openCansend(),e.resetData(),e.closeAnswerContinue())}),30)},getMayAsk:function(){var e=this,t={job_channel_id:this.channelId},n=0,o={};console.log("执行了mayask"),this.$aiRequest("/api/chat/suggested-questions",t,"POST").then((function(t){e.channelId?(n=e.channelQaList.length-1,o=e.channelQaList[n],o.may_ask=t.questions,e.updateChannelQaList(o)):(n=e.qaList.length-1,o=e.qaList[n],o.may_ask=t.questions,e.$set(e.qaList,n,o))}))},setGreetStatus:function(){this.greetingReady=!0},handleConnectErr:function(){var e=this.qaList.length;if(e>0&&"customer"==this.qaList[e-1].origin){this.closeAnswering(),this.openCansend(),this.closeAnswerContinue(),this.resetData(),clearInterval(this.prinTimer);this.qaList.push({content:"抱歉！刚才打了个盹儿，没理解到您的意思，请重新发送一下您的问题。",printStr:"",msg_type:"text",origin:"ai",jobs:[],may_ask:[]})}},getHistory:function(){var e=this;return console.log("获取历史记录"),new Promise((function(t){var n="/api/chat/histories?last_message_id="+e.historyId+"&job_channel_id=";e.$aiRequest(n,"","GET",e.header).then((function(n){if(0==n.code){0==n.data.length?e.newUser=!0:e.newUser=!1;var o=n.data.reverse(),i=n.data.length;i>0&&(e.historyId=n.data[0].id),o=e.handleList(o),t(o)}}))}))},getMoreHistory:function(){var t=this,n=this;if(this.loadAllHistory)e.showToast({title:"已加载全部",icon:"none",duration:2e3}),setTimeout((function(){n.$refs.chatRef.refreshRestore()}),500);else{if(!this.historyId){if(this.answerContinue||this.answering)return void this.$refs.chatRef.refreshRestore();this.qaList=[]}e.showLoading();var o="/api/chat/histories?last_message_id="+this.historyId+"&job_channel_id=";this.$aiRequest(o).then((function(n){if(0==n.code){var o=n.data.length;if(e.hideLoading(),t.$refs.chatRef.refreshRestore(),o>0){var i=n.data.reverse(),a=t.handleList(i);t.historyList=a.concat(t.historyList),t.scrollStr="his"+n.data[o-1].id,t.historyId=n.data[0].id}else t.loadAllHistory=!0}else t.$refs.chatRef.refreshRestore()}))}},handleList:function(e){for(var t=e.length,n=0;n<t;n++)"voice"==e[n].msg_type&&(e[n].voice.anmitionPlay=!1,e[n].showTranlate=!1,e[n].showTranIcon=!1);return e},bodyTouchStart:function(e){this.bodyStartPoint=e.touches[0]},bodyTouchEnd:function(e){"left"==this.moveDirection?this.currentTabIndex<this.list4.length-1&&this.currentTabIndex++:"right"==this.moveDirection&&this.currentTabIndex>0&&this.currentTabIndex--,this.moveDirection=""},bodyTouchMove:function(e){this.bodyStartPoint.clientX-e.touches[e.touches.length-1].clientX>160&&(this.moveDirection="left"),e.touches[e.touches.length-1].clientX-this.bodyStartPoint.clientX>160&&(this.moveDirection="right")},navigate:function(t){e.navigateTo({url:t+"?shareid="+this.shareId})},sendBtnMsg:function(t){var n=this;return(0,r.default)(a.default.mark((function o(){var i,r,s;return a.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(console.log("sendBtnMsg被调用：",t),i=n,t.job_id&&(n.currentProjectDetail.id=t.job_id,n.currentProjectDetail.name=t.name),n.isLogin()){o.next=6;break}return n.showLogin=!0,o.abrupt("return");case 6:if(n.aiReady){o.next=9;break}return e.showToast({title:"连接中，请稍后",icon:"error",duration:2e3}),o.abrupt("return");case 9:if(!n.answerContinue){o.next=12;break}return e.showToast({title:"回答中，请稍后",icon:"error",duration:2e3}),o.abrupt("return");case 12:n.closeProPop(),n.jobId=t.job_id,n.action=t.action,"job"==t.type?(r=[],r.push("请介绍一下"+t.msg),r.push("我对"+t.msg+"感兴趣，可以介绍一下吗？"),r.push(t.msg+"的工作内容是什么呢？福利待遇怎么样？"),r.push(t.msg+"这个工作看着还不错，请为我介绍下吧"),r.push(t.msg+"这个工作的详细信息可以说一下吗？"),s=Math.floor(Math.random()*r.length),n.question=r[s]):n.question=t.msg,1!=n.currentTabIndex?(n.currentTabIndex=1,setTimeout((function(){i.sendQuestion()}),500)):n.sendQuestion();case 17:case"end":return o.stop()}}),o)})))()},handleBtnMsg:function(e){var t=this;return new Promise((function(n){t.$request("/ai/refine/question",{text:e},"POST").then((function(e){0==e.code?n(e.data):n("error")}))}))},inputBindFocus:function(e){this.isLogin()?(this.currentTabIndex=1,e.detail.height&&(this.inputHeight=e.detail.height)):this.showLogin=!0},initRecord:function(){var t=this;this.manager.onStart((function(e){t.inputing=!0})),this.manager.onStop((function(n){var o=t;t.inputing=!1,clearInterval(o.secondTimer),t.touchEndTime-t.touchStartTime>1e3?t.handleRecorder(n):e.showToast({title:"长按时间过短",icon:"error"})})),this.manager.onError((function(e){var n=t;t.inputing=!1,clearInterval(n.secondTimer)}))},handleRecorder:function(t){var n=t.tempFilePath,i=t.duration;this.inputing=!1;var a=this;i<600?e.showToast({title:"说话时间过短",icon:"error",duration:2e3}):this.cancelRecord?this.cancelRecord=!1:o.getFileSystemManager().readFile({filePath:n,success:function(t){var o=t.data,r=new Uint8Array(o),s=(new Date).getTime(),c=e.getStorageSync("openid")+s,u=a.stringToUint8Array(c+"@@@@@@"+a.jobId+"@@@@@@"),l=u.length+r.length,h=new Uint8Array(l),d=0;h.set(u,d),d+=u.length,h.set(r,d);var f={id:c,content:"",origin:"customer",msg_type:"voice",voice:{media:{key:"",url:n},second:i/1e3,anmitionPlay:!1},showTranIcon:!1,showTranlate:!1,showTransing:!1};a.send(h.buffer,f,"voice")},fail:function(e){console.error("读取文件失败：",e)}})},stringToUint8Array:function(e){for(var t=unescape(encodeURIComponent(e)),n=t.length,o=new Uint8Array(n),i=0;i<n;i++)o[i]=t.charCodeAt(i);return o},send:function(t,n,o){var i=this;this.aiReady?this.answering||this.answerContinue?this.$refs.myModal.showModal({title:"目前有正在回复的对话，请稍后重试",showCancel:!1,confirmText:"好的"}):this.canSend&&(0==this.historyList.length&&e.showLoading(),this.question="",this.notChannel(),this.notInCall(),f.globalData.socketTask.send({data:"voice"==o?t:JSON.stringify({content:t,job_channel_id:"",job_id:i.jobId,action_type:i.action}),success:function(o){i.currentProjectDetail.id="",i.currentProjectDetail.name="",i.loadWorkInfo=null,i.jobId="",i.action="",i.noMayAsk=!1,i.closeInterviewCard(),i.closeChannelInterviewCard(),i.$set(i,"question",""),e.hideLoading(),"ping"!=t&&(i.cancelRecord||(i.openAnswering(),n.printStr="",i.$set(i.qaList,i.qaList.length,n),i.num++,i.hold="h"+i.num,i.closeCansend()))},fail:function(e){i.jobId="",i.currentProjectDetail.id="",i.currentProjectDetail.name=""}})):e.showToast({title:"连接中，请稍后",icon:"error",duration:2e3})},creatConnect:function(e){var t=this;return(0,r.default)(a.default.mark((function n(){var o;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t,!f.globalData.socketTask){n.next=5;break}return n.next=4,t.close();case 4:return n.abrupt("return",!1);case 5:if(console.log("connected：",t.connected),!t.connected&&!t.connecting){n.next=8;break}return n.abrupt("return",!1);case 8:return t.setConnecting(),n.next=11,t.connectWebsocket(e);case 11:o=n.sent,"connectSocket:ok"==o.errMsg&&t.initWebsocket();case 13:case"end":return n.stop()}}),n)})))()},connectWebsocket:function(t){var n=this;return e.showLoading({title:"正在连接风铃"}),new Promise((function(o){f.globalData.socketTask=e.connectSocket({url:f.globalData.wssUrl,header:t,method:"GET",success:function(e){o(e)},fail:function(e){console.log("err:",e),n.$refs.myModal.showModal({title:e.errMsg,showCancel:!1})}})}))},initWebsocket:function(){var e=this,t=this;f.globalData.socketTask.onOpen((function(n){if(e.unConnecting(),e.setConnected(),e.closeAnswering(),e.closeAnswerContinue(),e.openCansend(),e.setAiReady(),t.currentProjectDetail.id&&!t.answerContinue&&(t.showProPop=!0),console.log("已成功建立链接onOpen",n),e.loadWorkInfo&&e.loadWorkInfo.project_id){var o={job_id:e.loadWorkInfo.project_id,name:e.loadWorkInfo.project_name,msg:"你好，我叫"+e.loadWorkInfo.name+"，电话"+e.loadWorkInfo.mobile+"，对职位"+e.loadWorkInfo.project_name+"(职位ID："+e.loadWorkInfo.project_id+")感兴趣，请问如何报名呢？"};e.sendBtnMsg(o)}})),f.globalData.socketTask.onError((function(n){f.globalData.socketTask=null,clearInterval(t.timer),e.unConnected(),e.unConnecting(),e.resetAiReady(),(e.answering||e.answerContinue)&&e.handleConnectErr(),setTimeout((function(){t.creatConnect(t.header)}),2e3)})),f.globalData.socketTask.onMessage((function(e){t.openAnswerContinue(),t.closeAnswering();var n=JSON.parse(e.data);if(t.inCall)"audio_call_start_interview"==n.type?(t.setIncallJobId(n.job_id?n.job_id:""),t.setIncallEnroll()):t.resetIncallEnroll(),"audio_call_end"==n.type&&t.setHangUpFirst(),"[DONE]"!=n.message?t.setCallContent(n.message):(t.setRespEnd(),t.openCansend(),t.resetData(),t.closeAnswerContinue());else{if("QCODE"==n.type){t.curRespone.card=JSON.parse(JSON.stringify({type:"QCODE"}))}if("score_not_enough"==n.type){t.setJobName(n.job_name),t.curRespone.card=JSON.parse(JSON.stringify({type:"score_not_enough"}))}"[DONE]"!=n.message?(t.responCount++,t.responseStr+=n.message,1==t.responCount&&(t.currentQalength=t.qaList.length,t.printResponse(),"QCODE"==n.type&&t.getQrcode(n.job_id))):(t.setRespEnd(),n.need_mayask&&t.getMayAsk())}})),f.globalData.socketTask.onClose((function(n){console.log("onClose",n),f.globalData.socketTask=null,e.unConnected(),e.unConnecting(),e.resetAiReady(),clearInterval(t.timer),setTimeout((function(){t.creatConnect(t.header)}),2e3),(e.answering||e.answerContinue)&&e.handleConnectErr()}))},getWorkInfo:function(){var t=this,n="/worker/lead-information/"+this.pro_id;return new Promise((function(o){t.$request(n).then((function(t){0==t.code&&(e.hideLoading(),o(t.data))}))}))},getQrcode:function(e){var t=this;if(e){var n="/worker/project/"+e+"/wework/external/group/qrcode";this.$request(n).then((function(e){0==e.code&&t.setQunCode(e.data.qrcode_url)}))}},doSend:function(e,t){e.ctrlKey&&13===e.keyCode?this.question+="\n":void 0!==e&&(this.sendQuestion(),e.preventDefault())},sendQuestion:function(){if(this.question){this.inputHeight=0;var e={content:this.question,origin:"customer",msg_type:"text"};this.send(this.question,e,"")}},handleTouchMove:function(e){if(this.canSend){var t=e.touches[e.touches.length-1].clientY<this.btnInfo.top;this.cancelRecord=!!t}},noInput:function(){var e=this;this.timer=setInterval((function(){e.send("ping","","")}),1e4)},resetData:function(){this.cancelRecord=!1,this.curRespone={content:"",origin:"ai",msg_type:"text",card:null},this.responCount=0,this.responseStr="",this.notRespEnd()},close:function(){return new Promise((function(e){f.globalData.socketTask&&f.globalData.socketTask.close()}))},startRecord:function(t){this.isLogin()?this.aiReady?this.canSend?(this.currentTabIndex=1,this.canSend&&(this.touchStartTime=t.timeStamp,this.$refs.chatRef.stopCurAudio(),e.vibrateShort({success:function(){}}),this.cancelRecord=!1,this.manager.start({duration:6e4,lang:"zh_CN"}))):e.showToast({title:"正在回答请稍后",icon:"error",duration:2e3}):e.showToast({title:"连接中，请稍后",icon:"error",duration:2e3}):this.showLogin=!0},getSetting:function(){var t=this;e.getSetting({success:function(e){e.authSetting["scope.record"]?t.voicePermisson=!0:t.voicePermisson=!1},fail:function(e){}})},stopRecord:function(e){var t=this;this.inputing=!1,this.touchEndTime=e.timeStamp,this.touchEndTime-this.touchStartTime>1e3?this.manager.stop():setTimeout((function(){t.manager.stop()}),1e3)},cancelVoice:function(e){this.inputing=!1,this.manager.stop()},changeTab:function(e){this.isLogin()?this.currentTabIndex=e:this.showLogin=!0},openSetting:function(){if(this.isLogin()){var t=this,n=e.getStorageSync("voiceAuth");n?e.openSetting({success:function(e){e.authSetting["scope.record"]&&(t.voicePermisson=!0,t.showVoice=!0)},fail:function(e){t.voicePermisson=!1}}):e.authorize({scope:"scope.record",success:function(e){t.voicePermisson=!0,t.showVoice=!0},fail:function(e){t.voicePermisson=!1},complete:function(){e.setStorageSync("voiceAuth",!0)}})}else this.showLogin=!0},changeChatMethod:function(){this.isLogin()?(this.currentTabIndex=1,this.showVoice?this.showVoice=!1:this.voicePermisson?this.showVoice=!0:this.openSetting()):this.showLogin=!0},maskStart:function(e){this.maskStartPoint=e.touches[0]},maskEnd:function(e){},handleMaskMove:function(e){this.maskStartPoint.clientX-e.touches[e.touches.length-1].clientX>20&&this.closeMenu()},closeMenu:function(){this.showMenu=!1},openMenu:function(){this.isLogin()?(this.showMenu=!0,this.getSignList(),this.getViewList(),this.getInfo()):this.showLogin=!0},closeLogin:function(){this.showLogin=!1},getSignList:function(){var e=this;this.$request("/worker/register_record?page=1").then((function(t){0==t.code&&(e.menuList[0].value=String(t.data.pagination.totalCount))}))},getViewList:function(){var e=this;this.$request("/worker/browse_record?page=1").then((function(t){0==t.code&&(e.menuList[1].value=t.data.pagination.totalCount+"条")}))},getInfo:function(t){var n=this;return(0,r.default)(a.default.mark((function o(){var i;return a.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n.$request("/worker/profile").then((function(t){0==t.code&&(e.setStorageSync("userInfo",JSON.stringify(t.data)),n.userInfo=t.data,n.menuList[3].value=t.data.balance.total_amount)})),n.currentProjectDetail.id&&"login"==t&&(i={type:"job",msg:n.currentProjectDetail.name+"(ID:"+n.currentProjectDetail.id+")"},n.sendBtnMsg(i)),n.historyId=0,o.next=5,n.getHistory();case 5:n.historyList=o.sent;case 6:case"end":return o.stop()}}),o)})))()}})};t.default=g}).call(this,n("df3c")["default"],n("3223")["default"])},"9eb2":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var o={uNavbar:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-navbar/u-navbar")]).then(n.bind(null,"a807"))}},i=function(){var e=this.$createElement;this._self._c},a=[]},ae29:function(e,t,n){"use strict";(function(e,t){var o=n("47a9");n("7cc7");o(n("3240"));var i=o(n("475d"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(i.default)}).call(this,n("3223")["default"],n("df3c")["createPage"])},d140:function(e,t,n){"use strict";n.r(t);var o=n("8f0f"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},ed6e:function(e,t,n){}},[["ae29","common/runtime","common/vendor"]]]);