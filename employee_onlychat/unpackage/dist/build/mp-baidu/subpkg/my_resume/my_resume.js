(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpkg/my_resume/my_resume"],{"05af":function(e,t,i){"use strict";i.r(t);var n=i("658d"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"19ab":function(e,t,i){"use strict";var n=i("228b"),r=i.n(n);r.a},"228b":function(e,t,i){},4733:function(e,t,i){"use strict";i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var n={uniDataPicker:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker")]).then(i.bind(null,"f16b"))}},r=function(){var e=this,t=e.$createElement,i=(e._self._c,e.seleType.length?e.__map(e.seleType,(function(t,i){var n=e.__get_orig(t),r=t.advantages.length?e.formatAdv(t.advantages):null;return{$orig:n,m0:r}})):null);e.$mp.data=Object.assign({},{$root:{l0:i}})},a=[]},"658d":function(e,t,i){"use strict";(function(e){var n=i("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i("7eb4")),a=n(i("af34")),s=n(i("ee10")),o=getApp(),l={data:function(){return{imgUrl:o.globalData.baseImageUrl,marginTop:o.globalData.marginTop,tabMargin:o.globalData.tabMargin,btnHeight:o.globalData.btnHeight,pageName:"我的简历",headerHeight:o.globalData.highTopHeight,scrollHeight:0,baseInfo:{},wannerWork:"",city1:"",city2:"",city3:"",wannerCity:"",cityCount:0,cityData:[],cityArr:[],showMask:!1,showCity:!1,showTag:!1,seleTags:[],seleTagIds:[],introduce:"",workType:[],seleType:[],settleTye:[{value:"daily",text:"日结"},{value:"monthly",text:"月结"}],currentWorkIndex:0,tagsList:[],allTags:[],mission:0}},components:{customHeader:function(){i.e("components/custom_header").then(function(){return resolve(i("eb6c"))}.bind(null,i)).catch(i.oe)},tagSelect:function(){i.e("components/tag_select").then(function(){return resolve(i("493a"))}.bind(null,i)).catch(i.oe)}},watch:{seleType:function(e){}},onLoad:function(e){var t=this;return(0,s.default)(r.default.mark((function i(){var n,s,o,l,u,c;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n=t,e.msg&&(t.introduce=decodeURI(e.msg)),t.getInfo(),i.t0=a.default,i.next=6,t.getTagList();case 6:return i.t1=i.sent,t.workType=(0,i.t0)(i.t1),i.next=10,t.getResume();case 10:for(s=i.sent,n.mission=s.mission,n.cityArr=n.deFormatCity(s.areas),n.sureCity(),n.seleType=s.intentions,n.introduce=s.introduction,o=s.intentions.length,l=n.workType.length,u=0;u<o;u++)for(c=0;c<l;c++)s.intentions[u].job_type_id==n.workType[c].job_type_id&&(n.workType[c]=s.intentions[u],n.$set(t.workType[c],"active",!0));return i.next=21,t.getScrollHeight();case 21:t.scrollHeight=i.sent,t.getCitys();case 23:case"end":return i.stop()}}),i)})))()},methods:{toVoice:function(){var t="";if(this.introduce){var i=encodeURI(this.introduce);t="/subpkg/my_intro/my_intro?msg="+i}else t="/subpkg/my_intro/my_intro";e.navigateTo({url:t})},getScrollHeight:function(){var e=this;return new Promise((function(t){var i=o.globalData.systemHeight-e.marginTop-e.tabMargin;t(i)}))},close:function(){this.showMask=!1,this.showTag=!1},prevDateFun:function(e){e&&(this.introduce=e.msg)},chooseSettleType:function(e,t){this.seleType[t].salary_pay_period=e.value},formatAdv:function(e){for(var t="",i=e.length,n=0;n<i;n++)t+=e[n].name+"、";return t=t.slice(0,t.length-1),t},openTag:function(e,t){this.showMask=!0,this.showTag=!0,this.currentWorkIndex=t,this.seleTags=(0,a.default)(this.seleType[t].advantages);for(var i=[],n=this.seleType[t].advantages.length,r=0;r<n;r++)i.push(this.seleType[t].advantages[r].id);this.seleTagIds=i,this.tagsList=this.allTags.filter((function(t){return t.id==e.job_type_id}))[0].advantages},getCitys:function(){var e=this;this.$request("/common/areas").then((function(t){0==t.code&&(e.cityData=t.data)}))},getTagList:function(){var e=this;return new Promise((function(t){e.$request("/worker/job-types").then((function(i){if(0==i.code){var n=[];e.allTags=i.data;for(var r=i.data.length,a=0;a<r;a++){var s={job_type_id:i.data[a].id,job_type_name:i.data[a].name,active:!1,desired_salary_min:"",desired_salary_max:"",salary_pay_period:"monthly",advantages:[]};n.push(JSON.parse(JSON.stringify(s)))}t(n)}}))}))},handleInfo:function(e){this.seleTags=e.objarr,this.seleTagIds=e.ids,this.seleType[this.currentWorkIndex].advantages=e.objarr,this.close()},onchange1:function(t){t.detail.value.length&&this.hasSimpleCity(t.detail.value[1].value)?e.showToast({title:"该城市已选择",icon:"error",duration:2e3}):this.cityArr[0]=t.detail.value},onchange2:function(t){t.detail.value.length&&this.hasSimpleCity(t.detail.value[1].value)?e.showToast({title:"该城市已选择",icon:"error",duration:2e3}):this.cityArr[1]=t.detail.value},onchange3:function(t){t.detail.value.length&&this.hasSimpleCity(t.detail.value[1].value)?e.showToast({title:"该城市已选择",icon:"error",duration:2e3}):this.cityArr[2]=t.detail.value},hasSimpleCity:function(e){for(var t=this.cityArr.length,i=!1,n=0;n<t;n++)this.cityArr[n]&&this.cityArr[n].length>0&&e==this.cityArr[n][1].value&&(i=!0);return i},chooseWorkType:function(t){if(this.workType[t].active)this.workType[t].active=!1;else{for(var i=this.workType.length,n=0,r=0;r<i;r++)this.workType[r].active&&n++;n>=2?e.showToast({title:"最多选2个",icon:"error",duration:2e3}):this.workType[t].active=!this.workType[t].active}this.seleType=this.workType.filter((function(e){return 1==e.active}))},sureCity:function(){var e=this.cityArr.filter((function(e){return e.length>0}));this.wannerCity="";for(var t=e.length,i=0;i<t;i++)this.wannerCity+=e[i][0].text+"/"+e[i][1].text+"、";this.wannerCity=this.wannerCity.slice(0,this.wannerCity.length-1),this.closeCity()},formatCity:function(){console.log(this.cityArr);for(var e=this.cityArr.length,t=[],i=0;i<e;i++){var n=[];if(this.cityArr[i]&&this.cityArr[i].length)for(var r=0;r<this.cityArr[i].length;r++){var a={id:"",name:""};a.id=this.cityArr[i][r].value,a.name=this.cityArr[i][r].text,n.push(JSON.parse(JSON.stringify(a)))}n.length&&t.push(JSON.parse(JSON.stringify(n)))}return t},deFormatCity:function(e){for(var t=e.length,i=[],n=0;n<t;n++){var r=n+1,a="city"+r;this[a]=e[n][1].id;for(var s=[],o=0;o<e[n].length;o++){var l={value:"",text:""};l.value=e[n][o].id,l.text=e[n][o].name,s.push(JSON.parse(JSON.stringify(l)))}i.push(JSON.parse(JSON.stringify(s)))}return i},getInfo:function(){var e=this;this.$request("/worker/profile").then((function(t){0==t.code&&(e.baseInfo=t.data)}))},openCity:function(){this.showMask=!0,this.showCity=!0},closeCity:function(){this.showMask=!1,this.showCity=!1},getResume:function(){var e=this;return new Promise((function(t){e.$request("/worker/resume").then((function(e){0==e.code&&t(e.data)}))}))},saveMsg:function(){for(var t=this,i=this,n=this.seleType.length,a=0;a<n;a++){if(!this.seleType[a].desired_salary_min||!this.seleType[a].desired_salary_max)return void e.showModal({title:"期望薪资未填写完整",showCancel:!1});if(Number(this.seleType[a].desired_salary_min)>Number(this.seleType[a].desired_salary_max))return void e.showModal({title:"最低薪资不能大于最高工资",showCancel:!1});if(Number(this.seleType[a].desired_salary_min)>2e4||Number(this.seleType[a].desired_salary_max)>2e4)return void e.showModal({title:"薪资不能大于20000",showCancel:!1})}var o={areas:this.formatCity(),intentions:this.seleType,introduction:this.introduce};this.$request("/worker/resume",o,"POST").then(function(){var n=(0,s.default)(r.default.mark((function n(a){var s,o,l,u,c;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(0!=a.code){n.next=13;break}return e.showToast({title:"保存成功",duration:2e3}),n.next=4,t.getResume();case 4:for(s=n.sent,i.mission=s.mission,i.cityArr=i.deFormatCity(s.areas),i.sureCity(),i.seleType=s.intentions,i.introduce=s.introduction,o=s.intentions.length,l=i.workType.length,u=0;u<o;u++)for(c=0;c<l;c++)s.intentions[u].job_type_id==i.workType[c].job_type_id&&(i.workType[c]=s.intentions[u],i.$set(i.workType[c],"active",!0));case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}}};t.default=l}).call(this,i("8fed")["default"])},c24a:function(e,t,i){"use strict";i.r(t);var n=i("4733"),r=i("05af");for(var a in r)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("19ab");var s=i("828b"),o=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);t["default"]=o.exports},cded:function(e,t,i){"use strict";(function(e,t){var n=i("47a9");i("417d");n(i("3240"));var r=n(i("c24a"));e.__webpack_require_UNI_MP_PLUGIN__=i,t(r.default)}).call(this,i("8fed")["default"],i("8fed")["createPage"])}},[["cded","common/runtime","common/vendor"]]]);