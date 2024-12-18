(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/add_base_info"],{"03ac":function(e,t,n){"use strict";var a=n("63ea"),r=n.n(a);r.a},"0a20":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){}));var a=function(){var e=this.$createElement;this._self._c},r=[]},"63ea":function(e,t,n){},"75f4":function(e,t,n){"use strict";n.r(t);var a=n("d0d2"),r=n.n(a);for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=r.a},a59d:function(e,t,n){"use strict";n.r(t);var a=n("0a20"),r=n("75f4");for(var u in r)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("03ac");var i=n("828b"),o=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=o.exports},d0d2:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"add_base_info",props:["showAddBase"],data:function(){return{name:"",age:"",gender:[{value:"male",text:"男"},{value:"female",text:"女"}],currentGender:0,currentGenderText:"male"}},methods:{genderChange:function(e){this.currentGenderText=e.detail.value},refuse:function(){this.$emit("closeBase")},saveBase:function(){var t=this,n={gender:this.currentGenderText,name:this.name,age:Number(this.age)};this.$request("/worker/profile",n,"POST").then((function(n){0==n.code&&(t.$emit("closeBase"),e.showToast({title:"报名成功",duration:2e3}))}))}}};t.default=n}).call(this,n("8fed")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/add_base_info-create-component',
    {
        'components/add_base_info-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('8fed')['createComponent'](__webpack_require__("a59d"))
        })
    },
    [['components/add_base_info-create-component']]
]);
