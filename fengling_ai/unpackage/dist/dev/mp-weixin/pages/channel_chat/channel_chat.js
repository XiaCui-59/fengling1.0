(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/channel_chat/channel_chat"],{

/***/ 205:
/*!**********************************************************************************************!*\
  !*** D:/灵动世界/fengling1.0/fengling_ai/main.js?{"page":"pages%2Fchannel_chat%2Fchannel_chat"} ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _channel_chat = _interopRequireDefault(__webpack_require__(/*! ./pages/channel_chat/channel_chat.vue */ 206));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_channel_chat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 206:
/*!***************************************************************************!*\
  !*** D:/灵动世界/fengling1.0/fengling_ai/pages/channel_chat/channel_chat.vue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _channel_chat_vue_vue_type_template_id_581e4ef4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./channel_chat.vue?vue&type=template&id=581e4ef4& */ 207);
/* harmony import */ var _channel_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./channel_chat.vue?vue&type=script&lang=js& */ 209);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _channel_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _channel_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _channel_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./channel_chat.vue?vue&type=style&index=0&lang=scss& */ 211);
/* harmony import */ var _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 36);

var renderjs





/* normalize component */

var component = Object(_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _channel_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _channel_chat_vue_vue_type_template_id_581e4ef4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _channel_chat_vue_vue_type_template_id_581e4ef4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _channel_chat_vue_vue_type_template_id_581e4ef4___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/channel_chat/channel_chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 207:
/*!**********************************************************************************************************!*\
  !*** D:/灵动世界/fengling1.0/fengling_ai/pages/channel_chat/channel_chat.vue?vue&type=template&id=581e4ef4& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_channel_chat_vue_vue_type_template_id_581e4ef4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./channel_chat.vue?vue&type=template&id=581e4ef4& */ 208);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_channel_chat_vue_vue_type_template_id_581e4ef4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_channel_chat_vue_vue_type_template_id_581e4ef4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_channel_chat_vue_vue_type_template_id_581e4ef4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_channel_chat_vue_vue_type_template_id_581e4ef4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 208:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/灵动世界/fengling1.0/fengling_ai/pages/channel_chat/channel_chat.vue?vue&type=template&id=581e4ef4& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uNavbar: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-navbar/u-navbar */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-navbar/u-navbar")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-navbar/u-navbar.vue */ 309))
    },
    uIcon: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-icon/u-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-icon/u-icon.vue */ 373))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 209:
/*!****************************************************************************************************!*\
  !*** D:/灵动世界/fengling1.0/fengling_ai/pages/channel_chat/channel_chat.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_channel_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./channel_chat.vue?vue&type=script&lang=js& */ 210);
/* harmony import */ var _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_channel_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_channel_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_channel_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_channel_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_channel_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 210:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/灵动世界/fengling1.0/fengling_ai/pages/channel_chat/channel_chat.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _commMethods = _interopRequireDefault(__webpack_require__(/*! @/common/commMethods.js */ 170));
var _url_setting = _interopRequireDefault(__webpack_require__(/*! @/url_setting */ 33));
var _vuex = __webpack_require__(/*! vuex */ 41);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var flMask = function flMask() {
  __webpack_require__.e(/*! require.ensure | components/flmask */ "components/flmask").then((function () {
    return resolve(__webpack_require__(/*! @/components/flmask.vue */ 324));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var login = function login() {
  Promise.all(/*! require.ensure | components/login */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/login")]).then((function () {
    return resolve(__webpack_require__(/*! @/components/login.vue */ 338));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var chat = function chat() {
  __webpack_require__.e(/*! require.ensure | components/chat */ "components/chat").then((function () {
    return resolve(__webpack_require__(/*! @/components/chat.vue */ 352));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var app = getApp();
var _default = {
  data: function data() {
    return {
      showFlMask: false,
      greetingObj: {
        logo: "",
        title: "",
        content: ""
      },
      showSend: false,
      newUser: false,
      ifSingle: app.globalData.scene == 1154 ? true : false,
      menuButtonInfo: app.globalData.menuButtonInfo,
      manager: app.globalData.manager,
      // manager: uni.getRecorderManager(),
      imgUrl: app.globalData.baseImageUrl,
      statusBarHeight: app.globalData.statusBarHeight,
      botSafe: 0,
      userInfo: {
        is_vip: false
      },
      showVoice: true,
      inputing: false,
      voicePermisson: false,
      showLogin: false,
      shareId: "",
      params: null,
      openid: "",
      startPoint: null,
      cancelRecord: false,
      touchStartTime: "",
      touchEndTime: "",
      secondTimer: null,
      // showAnswering: app.globalData.showAnswering,
      num: 1,
      hold: "h1",
      placeHolder: "您想找什么工作,都可以问我",
      question: "",
      // canSend: true,
      // qaList: app.globalData.channelQaList,
      historyList: [],
      historyId: 0,
      loadAllHistory: false,
      inputHeight: 0,
      chatScrollHeight: 0,
      btnInfo: null,
      channel_info: {
        logo: {
          key: "",
          url: ""
        },
        name: "",
        id: ""
      },
      scrollStr: "",
      jobId: ""
    };
  },
  computed: _objectSpread({}, (0, _vuex.mapState)(["answering", "connected", "connecting", "canSend", "inChannel", "channelQaList", "answerContinue"])),
  onLoad: function onLoad(params) {
    var _this2 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var scanId, _this;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              uni.setNavigationBarColor({
                frontColor: '#000000',
                backgroundColor: 'transparent'
              });
              _this2.channel_info = JSON.parse(decodeURIComponent(params.channel_info));
              _context.next = 4;
              return _this2.getHistory();
            case 4:
              _this2.historyList = _context.sent;
              _this2.$refs.chat.toScroll();
              _this2.closeAnswering();
              _this2.openCansend();
              _this2.clearChannelQaList();
              _this2.closeInterviewCard();
              _this2.closeChannelInterviewCard();
              _context.next = 13;
              return _commMethods.default.getElementInfo(".input_btn_wrap");
            case 13:
              _this2.btnInfo = _context.sent;
              if (_this2.btnInfo) {
                _this2.botSafe = app.globalData.systemHeight - _this2.btnInfo.top;
                _this2.chatScrollHeight = _this2.btnInfo.top - _this2.statusBarHeight - 44;
              }
              console.log("params", params);
              // 扫码进入
              scanId = params.scene ? decodeURIComponent(params.scene).split("=")[1] : "";
              _this2.setChannelId(_this2.channel_info.id);
              _this2.greetingObj.logo = _this2.channel_info.logo.url;
              _this2.greetingObj.title = _this2.channel_info.name;
              _this2.greetingObj.content = _this2.channel_info.content;
              console.log(_this2.greetingObj);
              _this2.shareId = params.share_id ? params.share_id : scanId ? scanId : "";
              _this2.params = params;
              _this = _this2;
              _this2.handleGreeting();
              _this2.getSetting();
              _this2.getInfo();
            case 28:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  onShow: function onShow() {
    var _this3 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // 录音初始化
              _this3.initRecord();
              // this.openid = await this.getOpenid()
              uni.onKeyboardHeightChange(_this3.listenKeyBoard);
            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  onHide: function onHide() {
    uni.offKeyboardHeightChange(this.listenKeyBoard);
  },
  mounted: function mounted() {},
  components: {
    login: login,
    chat: chat,
    flMask: flMask
  },
  watch: {
    question: function question(newValue) {
      if (!newValue) {
        this.showSend = false;
      } else {
        this.showSend = true;
      }
    }
  },
  methods: _objectSpread(_objectSpread({}, (0, _vuex.mapMutations)(["openAnswering", "closeAnswering", "openCansend", "closeCansend", "isChannel", "clearChannelQaList", "addChannelQaList", "calcChannelQaLen", "setChannelId", "notInCall", "closeInterviewCard", "closeChannelInterviewCard"])), {}, {
    onInput: function onInput(e) {
      this.question = e.target.value;
    },
    handleGreeting: function handleGreeting() {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var msg, showData;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // let msg = await this.handleBtnMsg(this.channel_info.name)
                msg = "欢迎进入" + _this4.channel_info.name + "频道，" + _this4.channel_info.content;
                showData = {
                  content: msg,
                  origin: "ai",
                  msg_type: "text"
                };
                _this4.addChannelQaList(showData);
              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    listenKeyBoard: function listenKeyBoard(res) {
      if (res.height == 0) {
        this.inputHeight = 0;
        this.chatScrollHeight = this.btnInfo.top - this.statusBarHeight - 44;
      } else {
        this.chatScrollHeight = app.globalData.systemHeight - this.statusBarHeight - 44 - res.height - this.btnInfo.height - 10;
      }
    },
    back: function back() {
      uni.navigateBack();
    },
    toCall: function toCall(obj) {
      var status = "";
      var job_id = "";
      if (obj) {
        // 有参数
        status = obj.type;
        job_id = obj.job_id;
      }
      var _this = this;
      // 获取语音权限
      uni.authorize({
        scope: 'scope.record',
        success: function success(res) {
          // console.log(res, 'success')
          _this.voicePermisson = true;
          uni.navigateTo({
            url: "/pages/phone_call/phone_call?status=" + status + "&job_id=" + job_id
          });
        },
        fail: function fail(err) {
          // 弹出麦克风授权
          _this.voicePermisson = false;
          console.log(err, 'err');
          _this.$refs.myModal.showModal({
            title: "请先开启语音输入权限。",
            showCancel: false,
            confirmText: "好的",
            success: function success(resp) {
              if (resp == "confirm") {
                uni.openSetting({
                  success: function success(respone) {
                    // console.log(res.authSetting, "res.authSetting")
                    if (respone.authSetting['scope.record']) {
                      _this.voicePermisson = true;
                      uni.navigateTo({
                        url: "/pages/phone_call/phone_call?status=" + status + "&job_id=" + job_id
                      });
                    }
                  },
                  fail: function fail(openErr) {
                    console.log(openErr, 'openerr');
                    _this.voicePermisson = false;
                  }
                });
              }
            }
          });
        },
        complete: function complete() {
          uni.setStorageSync("voiceAuth", true);
        }
      });
    },
    clickFengling: function clickFengling() {
      // this.showFlMask = true
      this.$refs.myModal.showModal({
        title: "即将上线，敬请期待~",
        showCancel: false,
        confirmText: "好的"
      });
    },
    closeFengling: function closeFengling() {
      this.showFlMask = false;
    },
    getHistory: function getHistory() {
      uni.showLoading();
      var _this = this;
      return new Promise(function (resolve) {
        var url = "/api/chat/histories?last_message_id=" + _this.historyId + "&job_channel_id=" + _this.channel_info.id;
        _this.$aiRequest(url).then(function (res) {
          if (res.code == 0) {
            uni.hideLoading();
            if (res.data.length == 0) {
              // 新用户
              _this.newUser = true;
            } else {
              _this.newUser = false;
            }
            var newArr = res.data.reverse();
            var len = res.data.length;
            if (len > 0) {
              _this.historyId = res.data[0].id;
            }
            newArr = _this.handleList(newArr);
            resolve(newArr);
          }
        });
      });
    },
    getInfo: function getInfo() {
      var _this5 = this;
      this.$request("/worker/profile").then(function (response) {
        if (response.code == 0) {
          uni.hideLoading();
          uni.setStorageSync("userInfo", JSON.stringify(response.data));
          _this5.userInfo = response.data;
        }
      });
    },
    getMoreHistory: function getMoreHistory() {
      var _this6 = this;
      var _this = this;
      if (!this.loadAllHistory) {
        if (!this.historyId) {
          if (this.answerContinue || this.answering) {
            this.$refs.chat.refreshRestore();
            return;
          } else {
            this.clearChannelQaList();
          }
        }
        uni.showLoading();
        var url = "/api/chat/histories?last_message_id=" + this.historyId + "&job_channel_id=" + this.channel_info.id;
        this.$aiRequest(url).then(function (res) {
          if (res.code == 0) {
            var len = res.data.length;
            uni.hideLoading();
            _this6.$refs.chat.refreshRestore();
            if (len > 0) {
              var resArr = res.data.reverse();
              var newArr = _this6.handleList(resArr);
              _this6.historyList = newArr.concat(_this6.historyList);
              _this6.scrollStr = "his" + res.data[len - 1].id;
              _this6.historyId = res.data[0].id;
            } else {
              _this6.loadAllHistory = true;
            }
          } else {
            _this6.$refs.chat.refreshRestore();
          }
        });
      } else {
        uni.showToast({
          title: "已加载全部",
          icon: "none",
          duration: 2000
        });
        setTimeout(function () {
          _this.$refs.chat.refreshRestore();
        }, 500);
      }
    },
    // 给聊天记录添加字段
    handleList: function handleList(arr) {
      var len = arr.length;
      for (var i = 0; i < len; i++) {
        if (arr[i].msg_type == "voice") {
          // 语音记录，添加是否播放状态,默认为false
          arr[i].voice.anmitionPlay = false;
          arr[i].showTranlate = false;
          arr[i].showTranIcon = false;
        }
      }
      console.log("arr:", arr);
      return arr;
    },
    navigate: function navigate(url) {
      uni.navigateTo({
        url: url + "?shareid=" + this.shareId
      });
    },
    sendBtnMsg: function sendBtnMsg(obj) {
      var _this7 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var strArr, random;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!_this7.answerContinue) {
                  _context4.next = 3;
                  break;
                }
                uni.showToast({
                  title: "回答中，请稍后",
                  icon: "error",
                  duration: 2000
                });
                return _context4.abrupt("return");
              case 3:
                _this7.jobId = obj.job_id;
                if (obj.type == "job") {
                  // 词语润色
                  strArr = [];
                  strArr.push("请介绍一下" + obj.msg);
                  strArr.push("我对" + obj.msg + "感兴趣，可以介绍一下吗？");
                  strArr.push(obj.msg + "的工作内容是什么呢？福利待遇怎么样？");
                  strArr.push(obj.msg + "这个工作看着还不错，请为我介绍下吧");
                  strArr.push(obj.msg + "这个工作的详细信息可以说一下吗？");
                  random = Math.floor(Math.random() * strArr.length);
                  _this7.question = strArr[random];
                } else {
                  _this7.question = obj.msg;
                }
                _this7.currentTabIndex = 1;
                _this7.sendQuestion();
              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    handleBtnMsg: function handleBtnMsg(msg) {
      var _this = this;
      return new Promise(function (resolve) {
        _this.$request("/ai/refine/question", {
          "text": msg
        }, "POST").then(function (res) {
          if (res.code == 0) {
            resolve(res.data);
          } else {
            resolve("error");
          }
        });
      });
    },
    inputBindFocus: function inputBindFocus(e) {
      if (e.detail.height) {
        this.inputHeight = e.detail.height; //这个高度就是软键盘的高度
      }
    },
    initRecord: function initRecord() {
      var _this8 = this;
      //录音开始事件
      this.manager.onStart(function (e) {
        console.log("录音开始");
        _this8.inputing = true;
      });
      //录音结束事件
      this.manager.onStop(function (res) {
        var _this = _this8;
        console.log("录音结束");
        _this8.inputing = false;
        clearInterval(_this.secondTimer);
        console.log("时间间隔:", _this8.touchEndTime - _this8.touchStartTime);
        if (_this8.touchEndTime - _this8.touchStartTime > 1000) {
          _this8.handleRecorder(res);
        } else {
          uni.showToast({
            title: "长按时间过短",
            icon: "error"
          });
        }
      });
      this.manager.onError(function (res) {
        var _this = _this8;
        _this8.inputing = false;
        clearInterval(_this.secondTimer);
        console.log("channel录音出错：", res.errMsg);
      });
    },
    // 处理录音数据
    handleRecorder: function handleRecorder(_ref) {
      var tempFilePath = _ref.tempFilePath,
        duration = _ref.duration;
      var _this = this;
      console.log("tempFilePath", tempFilePath);
      console.log("duration", duration);
      if (duration < 600) {
        uni.showToast({
          title: "说话时间过短",
          icon: "error",
          duration: 2000
        });
        return;
      }
      this.inputing = false;
      if (!this.cancelRecord) {
        wx.getFileSystemManager().readFile({
          filePath: tempFilePath,
          success: function success(res) {
            // res.data是录音文件的二进制数据
            var binaryData = res.data;
            var midata = new Uint8Array(binaryData);
            var time = new Date().getTime();
            var id = uni.getStorageSync("openid") + time;
            // let encoder = new TextEncoder();
            // let binaryId = encoder.encode(id + "@@@")
            var binaryId = _this.stringToUint8Array(id + "@@@" + _this.channel_info.id + "@@@" + _this.jobId + "@@@@@@");
            // 输出拼接后的 Uint8Array
            console.log(binaryId.length, midata.length);
            // 计算总长度
            var totalLength = binaryId.length + midata.length;
            // 创建一个新的 Uint8Array，长度为所有数组的总和
            var mergedArray = new Uint8Array(totalLength);
            // 使用 set 方法将每个 Uint8Array 的数据填充到新的 Uint8Array 中
            var offset = 0;
            mergedArray.set(binaryId, offset);
            offset += binaryId.length;
            mergedArray.set(midata, offset);
            // offset += data.length;
            var showData = {
              id: id,
              content: "",
              origin: "customer",
              msg_type: "voice",
              voice: {
                media: {
                  key: "",
                  url: tempFilePath
                },
                second: duration / 1000,
                anmitionPlay: false
              },
              showTranIcon: false,
              showTranlate: false,
              showTransing: false
            };
            _this.send(mergedArray.buffer, showData, "voice");
            // 接下来你可以对binaryData进行需要的操作
          },

          fail: function fail(error) {
            console.error('读取文件失败：', error);
          }
        });
      } else {
        this.cancelRecord = false;
      }

      // this.canSend && this.sendMsg(params);
    },
    stringToUint8Array: function stringToUint8Array(str) {
      var utf8 = unescape(encodeURIComponent(str)); // 将字符串编码为 UTF-8
      var len = utf8.length;
      var arr = new Uint8Array(len);
      for (var i = 0; i < len; i++) {
        arr[i] = utf8.charCodeAt(i);
      }
      return arr;
    },
    send: function send(data, param, type) {
      var _this = this;
      // 先判断是否是可发送状态
      console.log("cha answerContinue:", this.answerContinue);
      if (this.answering || this.answerContinue) {
        this.$refs.myModal.showModal({
          title: "目前有正在回复的对话，请稍后重试",
          showCancel: false,
          confirmText: "好的"
        });
        return;
      }
      if (!this.canSend) {
        return;
      } else {
        // 如果无历史记录显示加载中
        if (this.historyList.length == 0) {
          uni.showLoading();
        }
        this.question = "";
        this.isChannel();
        this.notInCall();
        app.globalData.socketTask.send({
          data: type == "voice" ? data : JSON.stringify({
            content: data,
            job_channel_id: _this.channel_info.id,
            job_id: _this.jobId
          }),
          success: function success(res) {
            _this.jobId = "";
            _this.closeInterviewCard();
            _this.closeChannelInterviewCard();
            console.log(data, "data");
            if (data != "ping") {
              if (!_this.cancelRecord) {
                // _this.showAnswering = true
                _this.openAnswering();
                _this.addChannelQaList(param);
                _this.calcChannelQaLen();
                _this.num++;
                _this.hold = "h" + _this.num;
                _this.closeCansend();
                uni.hideLoading();
                // _this.placeHolder = "正在努力思考，请稍后..."
              }
            }
          },
          fail: function fail(err) {
            _this.jobId = "";
            console.log(err);
          }
        });
      }
    },
    doSend: function doSend(e, text) {
      // console.log(text);
      if (e.ctrlKey && e.keyCode === 13) {
        //用户点击了ctrl+enter触发
        this.question += '\n';
      } else {
        //用户点击了enter触发    执行一些逻辑方法
        if (e !== undefined) {
          //发送消息的方法
          this.sendQuestion();
          // 阻止浏览器默认的敲击回车换行的方法
          e.preventDefault();
        }
      }
    },
    sendQuestion: function sendQuestion() {
      var _this = this;
      if (!this.question) {
        return;
        // uni.showToast({
        // 	icon: "error",
        // 	title: "无输入"
        // })
      } else {
        this.inputHeight = 0;
        var showData = {
          content: this.question,
          origin: "customer",
          msg_type: "text"
        };
        this.send(this.question, showData, "");
      }
    },
    handleTouchMove: function handleTouchMove(e) {
      // 先判断是否是可发送状态
      if (!this.canSend) {
        return;
      }
      // let exp1 = (e.touches[e.touches.length - 1].clientX > this.cancelIconLeft) && (e.touches[e.touches.length -
      // 	1].clientX < this.cancelIconRight)
      var exp = e.touches[e.touches.length - 1].clientY < this.btnInfo.top;
      if (exp) {
        this.cancelRecord = true;
      } else {
        this.cancelRecord = false;
      }
    },
    // 间隔一定时间判断用户是否没有输入
    noInput: function noInput() {
      var _this = this;
      this.timer = setInterval(function () {
        var data = "ping";
        _this.send(data, "", "");
      }, 10000);
    },
    resetData: function resetData() {
      // this.canSend = true
      // this.placeHolder = "想了解什么工作，请告诉我吧"
      this.cancelRecord = false;
    },
    formatResultStr: function formatResultStr(str) {
      if (str) {
        this.speeking(str);
      }
    },
    speeking: function speeking(str) {
      console.log(str, "播报内容");
      plugin.textToSpeech({
        lang: "zh_CN",
        content: str,
        success: function success(res) {
          if (res.retcode == 0) {
            console.log("result", res.result);
            wx.playBackgroundAudio({
              dataUrl: res.filename,
              title: ''
            });
          } else {
            console.warn("翻译失败", res);
          }
        },
        fail: function fail(res) {
          console.log("网络失败", res);
        }
      });
    },
    close: function close() {
      if (app.globalData.socketTask && app.globalData.socketTask.close) {
        // this.send('{"type":"close"}');
        app.globalData.socketTask.close();
      }
    },
    startRecord: function startRecord(e) {
      var _this = this;
      // 先判断是否是可发送状态
      if (!this.canSend) {
        uni.showToast({
          title: "正在回答请稍后",
          icon: "error",
          duration: 2000
        });
        return;
      }
      if (this.showVoice) {
        // 判断是否有麦克风授权
        if (_this.voicePermisson) {
          _this.touchStartTime = e.timeStamp;
          _this.$refs.chat.stopCurAudio();
          // if (!this.Audio.paused) {
          // 	//如果音频正在播放 先暂停。
          // 	this.stopAudio(this.AudioExam)
          // }
          uni.vibrateShort({
            success: function success() {
              console.log('success');
            }
          });
          _this.startPoint = e.touches[0]; //记录长按时开始点信息，后面用于计算上划取消时手指滑动的距离。
          // this.showInputing = true
          _this.cancelRecord = false;
          _this.manager.start({
            duration: 60000,
            lang: "zh_CN"
          });
        } else {
          uni.authorize({
            scope: 'scope.record',
            success: function success(res) {
              console.log(res, 'success');
              _this.voicePermisson = true;
            },
            fail: function fail(err) {
              // 弹出麦克风授权
              _this.voicePermisson = false;
              console.log(err, 'err');
            }
          });
        }
      }
    },
    getSetting: function getSetting() {
      var _this = this;
      uni.getSetting({
        success: function success(res) {
          if (!res.authSetting['scope.record']) {
            console.log('用户尚未授权语音权限');
            _this.voicePermisson = false;
            // 可以在这里引导用户去设置中开启权限
          } else {
            console.log('用户已授权语音权限');
            _this.voicePermisson = true;
            // 用户已授权，可以继续进行后续操作
          }
        },
        fail: function fail(err) {
          console.log('获取设置失败', err);
        }
      });
    },
    stopRecord: function stopRecord(e) {
      // 先判断是否是可发送状态
      if (!this.canSend) {
        return;
      }
      var _this = this;
      this.touchEndTime = e.timeStamp;
      this.inputing = false;
      if (this.touchEndTime - this.touchStartTime > 1000) {
        this.manager.stop();
      } else {
        setTimeout(function () {
          _this.manager.stop();
        }, 1000);
      }
    },
    //录音被打断
    cancelVoice: function cancelVoice(e) {
      console.log("touch取消");
      this.showInputing = false;
      // this.canSend = false;
      this.manager.stop();
    },
    handleClick: function handleClick(e) {
      console.log(e);
    },
    openSetting: function openSetting() {
      var _this = this;
      var ifAuth = uni.getStorageSync("voiceAuth");
      if (ifAuth) {
        uni.openSetting({
          success: function success(res) {
            console.log(res.authSetting, "res.authSetting");
            if (res.authSetting['scope.record']) {
              _this.voicePermisson = true;
            }
          },
          fail: function fail(openErr) {
            console.log(openErr, 'openerr');
            _this.voicePermisson = false;
          }
        });
      } else {
        uni.authorize({
          scope: 'scope.record',
          success: function success(res) {
            console.log(res, 'success');
            _this.voicePermisson = true;
          },
          fail: function fail(err) {
            // 弹出麦克风授权
            _this.voicePermisson = false;
            console.log(err, 'err');
          },
          complete: function complete() {
            uni.setStorageSync("voiceAuth", true);
          }
        });
      }
    },
    changeChatMethod: function changeChatMethod() {
      this.showVoice = !this.showVoice;
    }
  })
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 211:
/*!*************************************************************************************************************!*\
  !*** D:/灵动世界/fengling1.0/fengling_ai/pages/channel_chat/channel_chat.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_channel_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./channel_chat.vue?vue&type=style&index=0&lang=scss& */ 212);
/* harmony import */ var _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_channel_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_channel_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_channel_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_channel_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_channel_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 212:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/灵动世界/fengling1.0/fengling_ai/pages/channel_chat/channel_chat.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[205,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/channel_chat/channel_chat.js.map