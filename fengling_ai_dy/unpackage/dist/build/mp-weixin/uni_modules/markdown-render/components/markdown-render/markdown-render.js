(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/markdown-render/components/markdown-render/markdown-render"],{"17bf":function(t,e,n){"use strict";n.r(e);var a=n("c481"),o=n("8253");for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("ccaf");var c=n("828b"),s=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=s.exports},8253:function(t,e,n){"use strict";n.r(e);var a=n("e8bf"),o=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=o.a},c481:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},o=[]},ccaf:function(t,e,n){"use strict";var a=n("dd04"),o=n.n(a);o.a},dd04:function(t,e,n){},e8bf:function(t,e,n){"use strict";(function(t){var a=n("47a9");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("b37e")),r=a(n("c9f7")),c=(a(n("bd7a")),a(n("51d3"))),s=[],u=(0,o.default)({html:!0,highlight:function(t,e){var n="";try{n=r.default.highlightAuto(t).value}catch(l){console.log("err",l),n=u.utils.escapeHtml(t)}var a=n.split(/\n/).slice(0,-1),o=a.map((function(t,e){return""==t?"":'<li><span data-line="'+(e+1)+'"></span>'+t+"</li>"})).join("");o='<ol style="padding: 0px 30px;">'+o+"</ol>",s.push(t);var c='<div style="background:#0d1117;margin-top: 5px;color: #888;padding:5px 0;border-radius: 5px;">';return c+='<pre class="hljs" style="padding:0 8px;margin-bottom:5px;overflow: auto;display: block;border-radius: 5px;"><code>'.concat(o,"</code></pre>"),c+="</div>",c}});u.use(c.default);var l={name:"markdown-render",props:{showCursor:{type:Boolean,default:function(){return!1}},sourceMdContent:{type:String,default:function(){return""}}},data:function(){return{}},computed:{nodes:function(){if(this.sourceMdContent){var t="";if(this.sourceMdContent.split("```").length%2){var e=this.sourceMdContent;"\n"!=e[e.length-1]&&(e+="\n"),e+=' <span class="cursor"></span>',t=u.render(e)}else t=u.render(this.sourceMdContent)+' \n <span class="cursor"></span>';return t=t.replace(/\<img/gi,'<img class="my-custom-img"'),t=t.replace(/\<a/gi,'<a class="my-custom-a"'),t=t.replace(/\<blockquote/gi,'<blockquote class="my-custom-blockquote"'),t=t.replace(/\<table/gi,'<table  class="my-custom-table"'),t=t.replace(/\<td/gi,'<td class="my-custom-table-td"'),t=t.replace(/(?!.*<thead>)(.*?)<th/g,(function(t){return t.replace("<th",'<th class="my-custom-table-th"')})),t}}},methods:{codeCopy:function(e){var n=e.detail.node,a=n.name,o=n.attrs,r=o["code-data-index"],c=o.class;o.href;"a"==a&&"copy-btn"==c&&t.setClipboardData({data:s[r],showToast:!1,success:function(){t.showToast({title:"复制成功",icon:"success"})}})}}};e.default=l}).call(this,n("df3c")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/markdown-render/components/markdown-render/markdown-render-create-component',
    {
        'uni_modules/markdown-render/components/markdown-render/markdown-render-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("17bf"))
        })
    },
    [['uni_modules/markdown-render/components/markdown-render/markdown-render-create-component']]
]);