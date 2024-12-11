(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["subpkg/message_detail/message_detail"],{

/***/ 109:
/*!*********************************************************************************************************************!*\
  !*** E:/项目文件/lanfeng5.8/release/broker_miniprograme_v2/main.js?{"page":"subpkg%2Fmessage_detail%2Fmessage_detail"} ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 3);
__webpack_require__(/*! uni-pages */ 25);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 24));
var _message_detail = _interopRequireDefault(__webpack_require__(/*! ./subpkg/message_detail/message_detail.vue */ 110));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_message_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 110:
/*!**************************************************************************************************!*\
  !*** E:/项目文件/lanfeng5.8/release/broker_miniprograme_v2/subpkg/message_detail/message_detail.vue ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message_detail_vue_vue_type_template_id_91454bcc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message_detail.vue?vue&type=template&id=91454bcc&scoped=true& */ 111);
/* harmony import */ var _message_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message_detail.vue?vue&type=script&lang=js& */ 113);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _message_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _message_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _message_detail_vue_vue_type_style_index_0_id_91454bcc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message_detail.vue?vue&type=style&index=0&id=91454bcc&lang=scss&scoped=true& */ 115);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 39);

var renderjs





/* normalize component */

var component = Object(_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _message_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _message_detail_vue_vue_type_template_id_91454bcc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _message_detail_vue_vue_type_template_id_91454bcc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "91454bcc",
  null,
  false,
  _message_detail_vue_vue_type_template_id_91454bcc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "subpkg/message_detail/message_detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 111:
/*!*********************************************************************************************************************************************!*\
  !*** E:/项目文件/lanfeng5.8/release/broker_miniprograme_v2/subpkg/message_detail/message_detail.vue?vue&type=template&id=91454bcc&scoped=true& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_detail_vue_vue_type_template_id_91454bcc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./message_detail.vue?vue&type=template&id=91454bcc&scoped=true& */ 112);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_detail_vue_vue_type_template_id_91454bcc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_detail_vue_vue_type_template_id_91454bcc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_detail_vue_vue_type_template_id_91454bcc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_detail_vue_vue_type_template_id_91454bcc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 112:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/lanfeng5.8/release/broker_miniprograme_v2/subpkg/message_detail/message_detail.vue?vue&type=template&id=91454bcc&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.labels.filter(function (el) {
    return el.value == _vm.info.type
  })
  var g1 = _vm.labels.filter(function (el) {
    return el.value == _vm.info.type
  })
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 113:
/*!***************************************************************************************************************************!*\
  !*** E:/项目文件/lanfeng5.8/release/broker_miniprograme_v2/subpkg/message_detail/message_detail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./message_detail.vue?vue&type=script&lang=js& */ 114);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 114:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/lanfeng5.8/release/broker_miniprograme_v2/subpkg/message_detail/message_detail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var tabbar = function tabbar() {
  Promise.all(/*! require.ensure | components/tabbar */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/tabbar")]).then((function () {
    return resolve(__webpack_require__(/*! @/components/tabbar.vue */ 230));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var customHeader = function customHeader() {
  __webpack_require__.e(/*! require.ensure | components/custom_header */ "components/custom_header").then((function () {
    return resolve(__webpack_require__(/*! @/components/custom_header.vue */ 237));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var app = getApp();
var _default = {
  data: function data() {
    return {
      imgUrl: app.globalData.baseImageUrl,
      currentTab: 0,
      pageName: "消息详情",
      marginTop: 0,
      comValue: "",
      startTime: "",
      endTime: "",
      currentStatus: 0,
      //0：进行中，1：已结束
      comRange: [{
        value: 0,
        text: "成都有职劳务有限公司"
      }, {
        value: 1,
        text: "成都顶呱呱劳务有限公司"
      }],
      labels: [{
        value: "commission",
        text: "佣金"
      }, {
        value: "system",
        text: "系统"
      }],
      info: {
        id: 0,
        type: "commission",
        typeName: "佣金信息",
        title: "爱丽丝顿大酒店-保安 佣金已经到账！",
        content: "尊敬的代理商合作伙伴：为了进一步提升公司尊敬的代理商合作伙伴：为了进一步提升公司尊敬的代理商合作伙伴：为了进一步提升公司",
        time: "2023.03.12",
        status: "unread"
      },
      currentMainTab: 0,
      scrollHeight: 0,
      boxTop: 0,
      headerHeight: 0,
      maskInnerTop: 0
    };
  },
  components: {
    tabbar: tabbar,
    customHeader: customHeader
  },
  onLoad: function onLoad() {
    var _this = this;
    this.getMarginTop();
    setTimeout(function () {
      _this.getElementInfo();
      _this.getTopHeight();
    }, 500);
  },
  methods: {
    changeCom: function changeCom() {},
    changeStartTime: function changeStartTime(e) {},
    changeEndTime: function changeEndTime(e) {},
    changeStatus: function changeStatus(index) {
      this.currentStatus = index;
    },
    getMarginTop: function getMarginTop(e) {
      var menuButtonInfo = uni.getMenuButtonBoundingClientRect();
      this.marginTop = menuButtonInfo.height + menuButtonInfo.top + 10;
      this.maskInnerTop = this.marginTop + 20;
    },
    getTopHeight: function getTopHeight() {
      var percent = 200 / 844;
      var systemInfo = uni.getSystemInfoSync();
      this.headerHeight = Math.floor(systemInfo.screenHeight * percent);
    },
    getElementInfo: function getElementInfo() {
      var _this = this;
      var topHeight = 0;
      var systemInfo = uni.getSystemInfoSync();
      var tabbarHeight = Math.floor(systemInfo.screenHeight * (46 / 844));
      console.log(tabbarHeight, "tabbar");
      var info = uni.createSelectorQuery().select(".top_area");
      info.boundingClientRect(function (data) {
        //data - 各种参数
        topHeight = data.bottom - data.top; // 获取元素高度
        _this.boxTop = _this.marginTop + data.height;
        _this.scrollHeight = systemInfo.screenHeight - _this.boxTop - tabbarHeight - 5;
      }).exec();
    },
    changeMainTab: function changeMainTab(id) {
      this.currentMainTab = id;
    },
    changeTab: function changeTab(id) {
      this.currentTab = id;
    },
    toDetail: function toDetail(id) {
      uni.navigateTo({
        url: "/subpkg/message_detail/message_detail?id=" + id
      });
    },
    openMask: function openMask(type) {
      this.showMask = true;
    },
    close: function close() {
      this.showMask = false;
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 115:
/*!************************************************************************************************************************************************************!*\
  !*** E:/项目文件/lanfeng5.8/release/broker_miniprograme_v2/subpkg/message_detail/message_detail.vue?vue&type=style&index=0&id=91454bcc&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_detail_vue_vue_type_style_index_0_id_91454bcc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./message_detail.vue?vue&type=style&index=0&id=91454bcc&lang=scss&scoped=true& */ 116);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_detail_vue_vue_type_style_index_0_id_91454bcc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_detail_vue_vue_type_style_index_0_id_91454bcc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_detail_vue_vue_type_style_index_0_id_91454bcc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_detail_vue_vue_type_style_index_0_id_91454bcc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_detail_vue_vue_type_style_index_0_id_91454bcc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 116:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/lanfeng5.8/release/broker_miniprograme_v2/subpkg/message_detail/message_detail.vue?vue&type=style&index=0&id=91454bcc&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[109,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRTov6aG555uu5paH5Lu2L2xhbmZlbmc1LjgvcmVsZWFzZS9icm9rZXJfbWluaXByb2dyYW1lX3YyL3N1YnBrZy9tZXNzYWdlX2RldGFpbC9tZXNzYWdlX2RldGFpbC52dWU/NDI0MyIsIndlYnBhY2s6Ly8vRTov6aG555uu5paH5Lu2L2xhbmZlbmc1LjgvcmVsZWFzZS9icm9rZXJfbWluaXByb2dyYW1lX3YyL3N1YnBrZy9tZXNzYWdlX2RldGFpbC9tZXNzYWdlX2RldGFpbC52dWU/MTc0OSIsIndlYnBhY2s6Ly8vRTov6aG555uu5paH5Lu2L2xhbmZlbmc1LjgvcmVsZWFzZS9icm9rZXJfbWluaXByb2dyYW1lX3YyL3N1YnBrZy9tZXNzYWdlX2RldGFpbC9tZXNzYWdlX2RldGFpbC52dWU/YzM4ZSIsIndlYnBhY2s6Ly8vRTov6aG555uu5paH5Lu2L2xhbmZlbmc1LjgvcmVsZWFzZS9icm9rZXJfbWluaXByb2dyYW1lX3YyL3N1YnBrZy9tZXNzYWdlX2RldGFpbC9tZXNzYWdlX2RldGFpbC52dWU/ZTQ4MCIsInVuaS1hcHA6Ly8vc3VicGtnL21lc3NhZ2VfZGV0YWlsL21lc3NhZ2VfZGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vRTov6aG555uu5paH5Lu2L2xhbmZlbmc1LjgvcmVsZWFzZS9icm9rZXJfbWluaXByb2dyYW1lX3YyL3N1YnBrZy9tZXNzYWdlX2RldGFpbC9tZXNzYWdlX2RldGFpbC52dWU/ODVlMSIsIndlYnBhY2s6Ly8vRTov6aG555uu5paH5Lu2L2xhbmZlbmc1LjgvcmVsZWFzZS9icm9rZXJfbWluaXByb2dyYW1lX3YyL3N1YnBrZy9tZXNzYWdlX2RldGFpbC9tZXNzYWdlX2RldGFpbC52dWU/ZGUwZSJdLCJuYW1lcyI6WyJ3eCIsIl9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJjcmVhdGVQYWdlIiwiUGFnZSIsImRhdGEiLCJpbWdVcmwiLCJjdXJyZW50VGFiIiwicGFnZU5hbWUiLCJtYXJnaW5Ub3AiLCJjb21WYWx1ZSIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJjdXJyZW50U3RhdHVzIiwiY29tUmFuZ2UiLCJ2YWx1ZSIsInRleHQiLCJsYWJlbHMiLCJpbmZvIiwiaWQiLCJ0eXBlIiwidHlwZU5hbWUiLCJ0aXRsZSIsImNvbnRlbnQiLCJ0aW1lIiwic3RhdHVzIiwiY3VycmVudE1haW5UYWIiLCJzY3JvbGxIZWlnaHQiLCJib3hUb3AiLCJoZWFkZXJIZWlnaHQiLCJtYXNrSW5uZXJUb3AiLCJjb21wb25lbnRzIiwidGFiYmFyIiwiY3VzdG9tSGVhZGVyIiwib25Mb2FkIiwic2V0VGltZW91dCIsIl90aGlzIiwibWV0aG9kcyIsImNoYW5nZUNvbSIsImNoYW5nZVN0YXJ0VGltZSIsImNoYW5nZUVuZFRpbWUiLCJjaGFuZ2VTdGF0dXMiLCJnZXRNYXJnaW5Ub3AiLCJnZXRUb3BIZWlnaHQiLCJnZXRFbGVtZW50SW5mbyIsImNvbnNvbGUiLCJ0b3BIZWlnaHQiLCJjaGFuZ2VNYWluVGFiIiwiY2hhbmdlVGFiIiwidG9EZXRhaWwiLCJ1bmkiLCJ1cmwiLCJvcGVuTWFzayIsImNsb3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBSEE7QUFDQUEsRUFBRSxDQUFDQyxpQ0FBaUMsR0FBR0MsbUJBQW1CO0FBRzFEQyxVQUFVLENBQUNDLHVCQUFJLENBQUMsQzs7Ozs7Ozs7Ozs7OztBQ0xoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUk7QUFDdkk7QUFDa0U7QUFDTDtBQUNzQzs7O0FBR25HO0FBQzJLO0FBQzNLLGdCQUFnQixvTEFBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSxxR0FBTTtBQUNSLEVBQUUsOEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7QUFBc29CLENBQWdCLDJwQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNnQzFwQjtBQUFBLGVBQ0E7RUFDQUM7SUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUFBO01BQ0FDLFdBQ0E7UUFDQUM7UUFDQUM7TUFDQSxHQUNBO1FBQ0FEO1FBQ0FDO01BQ0EsRUFDQTtNQUNBQyxTQUNBO1FBQ0FGO1FBQ0FDO01BQ0EsR0FDQTtRQUNBRDtRQUNBQztNQUNBLEVBQ0E7TUFDQUU7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7TUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7SUFBQUM7RUFDQTtFQUNBQztJQUNBO0lBQ0E7SUFDQUM7TUFDQUM7TUFDQUE7SUFDQTtFQUVBO0VBQ0FDO0lBQ0FDLGlDQUVBO0lBQ0FDLDhDQUVBO0lBQ0FDLDBDQUVBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBQztNQUNBO01BQ0EzQjtRQUFBO1FBQ0E0QjtRQUNBVjtRQUNBQTtNQUNBO0lBRUE7SUFDQVc7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBQztRQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtFQUNBO0FBQ0E7QUFBQSwyQjs7Ozs7Ozs7Ozs7OztBQ25KQTtBQUFBO0FBQUE7QUFBQTtBQUFpdUMsQ0FBZ0IsOHJDQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBcnZDO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoic3VicGtnL21lc3NhZ2VfZGV0YWlsL21lc3NhZ2VfZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO1xuLy8gQHRzLWlnbm9yZVxud3guX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9zdWJwa2cvbWVzc2FnZV9kZXRhaWwvbWVzc2FnZV9kZXRhaWwudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbWVzc2FnZV9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkxNDU0YmNjJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbWVzc2FnZV9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9tZXNzYWdlX2RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbWVzc2FnZV9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTE0NTRiY2MmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI5MTQ1NGJjY1wiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzdWJwa2cvbWVzc2FnZV9kZXRhaWwvbWVzc2FnZV9kZXRhaWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xNy0wIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUuanMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxccGFnZS1tZXRhLmpzIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9tZXNzYWdlX2RldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTE0NTRiY2Mmc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICB2YXIgZzAgPSBfdm0ubGFiZWxzLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICByZXR1cm4gZWwudmFsdWUgPT0gX3ZtLmluZm8udHlwZVxuICB9KVxuICB2YXIgZzEgPSBfdm0ubGFiZWxzLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICByZXR1cm4gZWwudmFsdWUgPT0gX3ZtLmluZm8udHlwZVxuICB9KVxuICBfdm0uJG1wLmRhdGEgPSBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIHtcbiAgICAgICRyb290OiB7XG4gICAgICAgIGcwOiBnMCxcbiAgICAgICAgZzE6IGcxLFxuICAgICAgfSxcbiAgICB9XG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xMy0xIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc2NyaXB0LmpzIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9tZXNzYWdlX2RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEzLTEhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzY3JpcHQuanMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL21lc3NhZ2VfZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdDxjdXN0b21IZWFkZXIgOnRpdGxlPVwicGFnZU5hbWVcIiA6c2hvd0JhY2s9XCJ0cnVlXCIgOmhlYWRIZWlnaHQ9XCJoZWFkZXJIZWlnaHRcIj48L2N1c3RvbUhlYWRlcj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiY29udFwiIDpzdHlsZT1cInttYXJnaW5Ub3A6bWFyZ2luVG9wKydweCd9XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidG9wX2FyZWFcIiA6c3R5bGU9XCJ7dG9wOm1hcmdpblRvcCsncHgnfVwiPlxyXG5cdFx0XHRcdDxpbWFnZSA6c3JjPVwiaW1nVXJsKycvYnJva2VyL2ljX21lc3NhZ2VfdGl0bGUucG5nJ1wiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3AgZmxleCBmbGV4X2J0d2VlblwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZSBmbGV4IGZsZXgtc3RhcnRcIj5cclxuXHRcdFx0XHRcdFx0PCEtLSDmnKror7vmoIforrAgLS0+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2lyY2xlXCIgdi1pZj1cImluZm8uc3RhdHVzID09ICd1bnJlYWQnXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOexu+Wei+agh+etviAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsYWJlbFwiPnt7bGFiZWxzLmZpbHRlcihlbD0+e3JldHVybiBlbC52YWx1ZSA9PSBpbmZvLnR5cGV9KVswXS50ZXh0fX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidHlwZVwiPnt7bGFiZWxzLmZpbHRlcihlbD0+e3JldHVybiBlbC52YWx1ZSA9PSBpbmZvLnR5cGV9KVswXS50ZXh0fX3kv6Hmga88L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpbWVcIj57e2luZm8udGltZX19PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJveFwiIDpzdHlsZT1cInt0b3A6Ym94VG9wKydweCd9XCI+XHJcblx0XHRcdFx0PGltYWdlIDpzcmM9XCJpbWdVcmwrJy9icm9rZXIvaWNfbWVzc2FnZV9iZzIucG5nJ1wiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHNjcm9sbC12aWV3IDpzY3JvbGwtdG9wPVwic2Nyb2xsVG9wXCIgc2Nyb2xsLXk9XCJ0cnVlXCIgY2xhc3M9XCJzY3JvbGwtWVwiIEBzY3JvbGx0b3VwcGVyPVwidXBwZXJcIiA6c3R5bGU9XCJ7aGVpZ2h0OnNjcm9sbEhlaWdodCsncHgnfVwiXHJcblx0XHRcdFx0XHRAc2Nyb2xsdG9sb3dlcj1cImxvd2VyXCIgQHNjcm9sbD1cInNjcm9sbFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZXNzYWdlX3RpdGxlXCI+e3tpbmZvLnRpdGxlfX08L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHRcIj57e2luZm8uY29udGVudH19PC92aWV3PlxyXG5cdFx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB0YWJiYXIgZnJvbSBcIkAvY29tcG9uZW50cy90YWJiYXIudnVlXCJcclxuXHRpbXBvcnQgY3VzdG9tSGVhZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvY3VzdG9tX2hlYWRlci52dWVcIlxyXG5cdGNvbnN0IGFwcCA9IGdldEFwcCgpXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRpbWdVcmw6YXBwLmdsb2JhbERhdGEuYmFzZUltYWdlVXJsLFxyXG5cdFx0XHRcdGN1cnJlbnRUYWI6MCxcclxuXHRcdFx0XHRwYWdlTmFtZTpcIua2iOaBr+ivpuaDhVwiLFxyXG5cdFx0XHRcdG1hcmdpblRvcDowLFxyXG5cdFx0XHRcdGNvbVZhbHVlOlwiXCIsXHJcblx0XHRcdFx0c3RhcnRUaW1lOlwiXCIsXHJcblx0XHRcdFx0ZW5kVGltZTpcIlwiLFxyXG5cdFx0XHRcdGN1cnJlbnRTdGF0dXM6MCwvLzDvvJrov5vooYzkuK3vvIwx77ya5bey57uT5p2fXHJcblx0XHRcdFx0Y29tUmFuZ2U6W1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2YWx1ZTowLFxyXG5cdFx0XHRcdFx0XHR0ZXh0Olwi5oiQ6YO95pyJ6IGM5Yqz5Yqh5pyJ6ZmQ5YWs5Y+4XCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZhbHVlOjEsXHJcblx0XHRcdFx0XHRcdHRleHQ6XCLmiJDpg73pobblkbHlkbHlirPliqHmnInpmZDlhazlj7hcIlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0bGFiZWxzOltcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dmFsdWU6XCJjb21taXNzaW9uXCIsXHJcblx0XHRcdFx0XHRcdHRleHQ6XCLkvaPph5FcIixcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZhbHVlOlwic3lzdGVtXCIsXHJcblx0XHRcdFx0XHRcdHRleHQ6XCLns7vnu59cIixcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdGluZm86e1xyXG5cdFx0XHRcdFx0aWQ6MCxcclxuXHRcdFx0XHRcdHR5cGU6XCJjb21taXNzaW9uXCIsXHJcblx0XHRcdFx0XHR0eXBlTmFtZTpcIuS9o+mHkeS/oeaBr1wiLFxyXG5cdFx0XHRcdFx0dGl0bGU6XCLniLHkuL3kuJ3pob/lpKfphZLlupct5L+d5a6JIOS9o+mHkeW3sue7j+WIsOi0pu+8gVwiLFxyXG5cdFx0XHRcdFx0Y29udGVudDpcIuWwiuaVrOeahOS7o+eQhuWVhuWQiOS9nOS8meS8tO+8muS4uuS6hui/m+S4gOatpeaPkOWNh+WFrOWPuOWwiuaVrOeahOS7o+eQhuWVhuWQiOS9nOS8meS8tO+8muS4uuS6hui/m+S4gOatpeaPkOWNh+WFrOWPuOWwiuaVrOeahOS7o+eQhuWVhuWQiOS9nOS8meS8tO+8muS4uuS6hui/m+S4gOatpeaPkOWNh+WFrOWPuFwiLFxyXG5cdFx0XHRcdFx0dGltZTpcIjIwMjMuMDMuMTJcIixcclxuXHRcdFx0XHRcdHN0YXR1czpcInVucmVhZFwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Y3VycmVudE1haW5UYWI6MCxcclxuXHRcdFx0XHRzY3JvbGxIZWlnaHQ6MCxcclxuXHRcdFx0XHRib3hUb3A6MCxcclxuXHRcdFx0XHRoZWFkZXJIZWlnaHQ6MCxcclxuXHRcdFx0XHRtYXNrSW5uZXJUb3A6MFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcG9uZW50czp7XHJcblx0XHRcdHRhYmJhcixjdXN0b21IZWFkZXJcclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblx0XHRcdGxldCBfdGhpcyA9IHRoaXNcclxuXHRcdFx0dGhpcy5nZXRNYXJnaW5Ub3AoKVxyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0X3RoaXMuZ2V0RWxlbWVudEluZm8oKVxyXG5cdFx0XHRcdF90aGlzLmdldFRvcEhlaWdodCgpXHJcblx0XHRcdH0sNTAwKVxyXG5cdFx0XHRcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGNoYW5nZUNvbSgpe1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaGFuZ2VTdGFydFRpbWUoZSl7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdGNoYW5nZUVuZFRpbWUoZSl7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdGNoYW5nZVN0YXR1cyhpbmRleCl7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50U3RhdHVzID0gaW5kZXhcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0TWFyZ2luVG9wKGUpe1xyXG5cdFx0XHRcdGxldCBtZW51QnV0dG9uSW5mbyA9IHVuaS5nZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0KClcclxuXHRcdFx0XHR0aGlzLm1hcmdpblRvcCA9IG1lbnVCdXR0b25JbmZvLmhlaWdodCArIG1lbnVCdXR0b25JbmZvLnRvcCArIDEwXHJcblx0XHRcdFx0dGhpcy5tYXNrSW5uZXJUb3AgPSB0aGlzLm1hcmdpblRvcCArIDIwXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldFRvcEhlaWdodCgpe1xyXG5cdFx0XHRcdGxldCBwZXJjZW50ID0gMjAwLzg0NFxyXG5cdFx0XHRcdGxldCBzeXN0ZW1JbmZvID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKClcclxuXHRcdFx0XHR0aGlzLmhlYWRlckhlaWdodCA9TWF0aC5mbG9vcihzeXN0ZW1JbmZvLnNjcmVlbkhlaWdodCAqIHBlcmNlbnQpIFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRFbGVtZW50SW5mbygpe1xyXG5cdFx0XHRcdGxldCBfdGhpcyA9IHRoaXNcclxuXHRcdFx0XHRsZXQgdG9wSGVpZ2h0PTA7XHJcblx0XHRcdFx0bGV0IHN5c3RlbUluZm8gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKVxyXG5cdFx0XHRcdGxldCB0YWJiYXJIZWlnaHQgPU1hdGguZmxvb3Ioc3lzdGVtSW5mby5zY3JlZW5IZWlnaHQgKiAoNDYvODQ0KSkgXHJcblx0XHRcdFx0Y29uc29sZS5sb2codGFiYmFySGVpZ2h0LFwidGFiYmFyXCIpXHJcblx0XHRcdFx0bGV0IGluZm8gPSB1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLnNlbGVjdChcIi50b3BfYXJlYVwiKTtcclxuXHRcdFx0XHRpbmZvLmJvdW5kaW5nQ2xpZW50UmVjdChmdW5jdGlvbihkYXRhKSB7IC8vZGF0YSAtIOWQhOenjeWPguaVsFxyXG5cdFx0XHRcdCAgIHRvcEhlaWdodCA9IGRhdGEuYm90dG9tIC0gZGF0YS50b3AgIC8vIOiOt+WPluWFg+e0oOmrmOW6plxyXG5cdFx0XHRcdCAgIF90aGlzLmJveFRvcCA9IF90aGlzLm1hcmdpblRvcCArIGRhdGEuaGVpZ2h0XHJcblx0XHRcdFx0ICAgX3RoaXMuc2Nyb2xsSGVpZ2h0ID0gc3lzdGVtSW5mby5zY3JlZW5IZWlnaHQgLSBfdGhpcy5ib3hUb3AgLSB0YWJiYXJIZWlnaHQgLSA1XHJcblx0XHRcdFx0fSkuZXhlYygpXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdGNoYW5nZU1haW5UYWIoaWQpe1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudE1haW5UYWIgPSBpZFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaGFuZ2VUYWIoaWQpe1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudFRhYiA9IGlkXHJcblx0XHRcdH0sXHJcblx0XHRcdHRvRGV0YWlsKGlkKXtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6XCIvc3VicGtnL21lc3NhZ2VfZGV0YWlsL21lc3NhZ2VfZGV0YWlsP2lkPVwiK2lkXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0b3Blbk1hc2sodHlwZSl7XHJcblx0XHRcdFx0dGhpcy5zaG93TWFzayA9IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xvc2UoKXtcclxuXHRcdFx0XHR0aGlzLnNob3dNYXNrID0gZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi50b3BfYXJlYXtcclxuXHR3aWR0aDpjYWxjKDEwMCUgLSA5NnJweCk7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGxlZnQ6NDhycHg7XHJcblx0Zm9udC1zaXplOiAwO1xyXG5cdCY+aW1hZ2V7XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdH1cclxuXHQudG9we1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOjMlO1xyXG5cdFx0bGVmdDo1MCU7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblx0XHR3aWR0aDogY2FsYygxMDAlIC0gODBycHgpO1xyXG5cdFx0cGFkZGluZzoxNHJweCAwO1xyXG5cdFx0LnRpdGxle1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdC5jaXJjbGV7XHJcblx0XHRcdFx0d2lkdGg6MTJycHg7XHJcblx0XHRcdFx0aGVpZ2h0OjEycnB4O1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjREQwMDAwO1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogOHJweDtcclxuXHRcdFx0fVxyXG5cdFx0XHQubGFiZWx7XHJcblx0XHRcdFx0d2lkdGg6IDgwcnB4O1xyXG5cdFx0XHRcdGhlaWdodDogNTJycHg7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6NTJycHggO1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjRjdCQzA1O1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRcdFx0XHRmb250LXNpemU6MjhycHg7XHJcblx0XHRcdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiA4cnB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdC50eXBle1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRcdFx0Y29sb3I6IzMzMztcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogNTJycHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC50aW1le1xyXG5cdFx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0XHRjb2xvcjogIzVBNUE1QTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuLmJveHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDk2cnB4KTtcclxuXHRsZWZ0OjQ4cnB4O1xyXG5cdHotaW5kZXg6MztcclxuXHQvLyBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNnJweDtcclxuXHQvLyBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTZycHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRiYWNrZ3JvdW5kOiB1cmwoJGJhY2stZ3JvdW5kLXVybCtcIi9icm9rZXIvaWNfbWVzc2FnZV9iZ192b2lkLnBuZ1wiKSBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtcclxuXHRwYWRkaW5nOjAgNDBycHg7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQmPmltYWdle1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHRcdGxlZnQ6MDtcclxuXHRcdHRvcDoxMCU7XHJcblx0fVxyXG5cdC5tZXNzYWdlX3RpdGxle1xyXG5cdFx0Zm9udC1zaXplOiAzNHJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHQudGV4dHtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRjb2xvcjojNUE1QTVBO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDU2cnB4O1xyXG5cdFx0bWFyZ2luLXRvcDozMHJweDtcclxuXHR9XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXFxcXGRpc3RcXFxcbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcY3NzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzdHlsZVBvc3RMb2FkZXIuanMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHNhc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9tZXNzYWdlX2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05MTQ1NGJjYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxcXFxkaXN0XFxcXGxvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGNzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanM/P3JlZi0tOC1vbmVPZi0xLTEhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcc3R5bGVQb3N0TG9hZGVyLmpzIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFxzYXNzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vbWVzc2FnZV9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTE0NTRiY2MmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTcxNTMwNjA0Mzg0M1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJGOi9hcHBzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=