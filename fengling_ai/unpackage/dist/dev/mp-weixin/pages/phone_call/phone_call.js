(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/phone_call/phone_call"],{

/***/ 181:
/*!******************************************************************************************!*\
  !*** D:/灵动世界/fengling1.0/fengling_ai/main.js?{"page":"pages%2Fphone_call%2Fphone_call"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _phone_call = _interopRequireDefault(__webpack_require__(/*! ./pages/phone_call/phone_call.vue */ 182));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_phone_call.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 182:
/*!***********************************************************************!*\
  !*** D:/灵动世界/fengling1.0/fengling_ai/pages/phone_call/phone_call.vue ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _phone_call_vue_vue_type_template_id_999a8034___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone_call.vue?vue&type=template&id=999a8034& */ 183);
/* harmony import */ var _phone_call_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone_call.vue?vue&type=script&lang=js& */ 185);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _phone_call_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _phone_call_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _phone_call_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phone_call.vue?vue&type=style&index=0&lang=scss& */ 187);
/* harmony import */ var _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 36);

var renderjs





/* normalize component */

var component = Object(_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _phone_call_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _phone_call_vue_vue_type_template_id_999a8034___WEBPACK_IMPORTED_MODULE_0__["render"],
  _phone_call_vue_vue_type_template_id_999a8034___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _phone_call_vue_vue_type_template_id_999a8034___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/phone_call/phone_call.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 183:
/*!******************************************************************************************************!*\
  !*** D:/灵动世界/fengling1.0/fengling_ai/pages/phone_call/phone_call.vue?vue&type=template&id=999a8034& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_call_vue_vue_type_template_id_999a8034___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./phone_call.vue?vue&type=template&id=999a8034& */ 184);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_call_vue_vue_type_template_id_999a8034___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_call_vue_vue_type_template_id_999a8034___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_call_vue_vue_type_template_id_999a8034___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_call_vue_vue_type_template_id_999a8034___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 184:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/灵动世界/fengling1.0/fengling_ai/pages/phone_call/phone_call.vue?vue&type=template&id=999a8034& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 185:
/*!************************************************************************************************!*\
  !*** D:/灵动世界/fengling1.0/fengling_ai/pages/phone_call/phone_call.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_call_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./phone_call.vue?vue&type=script&lang=js& */ 186);
/* harmony import */ var _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_call_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_call_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_call_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_call_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_call_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 186:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/灵动世界/fengling1.0/fengling_ai/pages/phone_call/phone_call.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var _url_setting = _interopRequireDefault(__webpack_require__(/*! ../../url_setting */ 33));
var _vuex = __webpack_require__(/*! vuex */ 41);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var scrollText = function scrollText() {
  __webpack_require__.e(/*! require.ensure | components/scrollText */ "components/scrollText").then((function () {
    return resolve(__webpack_require__(/*! @/components/scrollText.vue */ 366));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var BASE_URL = _url_setting.default.urls.voiceUrl;
// import * as TextEncoding from "text-encoding-shim"
var app = getApp();
var _default = {
  data: function data() {
    return {
      imgUrl: app.globalData.baseImageUrl,
      inputStatus: false,
      //用户输入状态
      hasVoice: false,
      //用户是否有声音输入，根据分贝大小动态改变
      aiSpeeking: false,
      //AI正在说话
      aiThrinking: true,
      //AI正在思考
      audioCtx: wx.createWebAudioContext(),
      //创建音频播放上下文
      lowVoiceCount: 0,
      //低分贝（连续低于20）次数,
      highVoiceCount: 0,
      //高分贝（连续大于55）次数,由此判定用户是否有输入过语音
      currentPlayIndex: 0,
      index: 0,
      //接收的音频片段序号，当index=1时表示接收到第一条语音，开始播放音频
      resultArrayBuffer: [],
      //AI回复的未处理片段
      arrayBufferLength: 0,
      result: [],
      //AI回复的音频片段缓存数组
      longTimeNoInput: false,
      //用户长时间未输入语音标志
      action: "",
      //audio_call_user_long_time_without_talking 语音通话用户长时间不响应,
      welcomeVoice: [app.globalData.baseImageUrl + "/worker/call_wel01.mp3", app.globalData.baseImageUrl + "/worker/call_wel02.mp3"],
      receiveEnd: false,
      currentTransIndex: 0,
      closeStatus: false,
      errorVoice: app.globalData.baseImageUrl + "/worker/error.mp3?time=" + new Date().getTime(),
      requestTask: null,
      receiveCount: 0,
      transTimer: null,
      playTimer: null,
      isWelcome: true,
      status: "",
      //记录当前场景：普通（normal）;面试（interview)
      job_id: "",
      //记录当前面试的职位id，
      errorTimer: null,
      //异常判断
      getResponeTime: 0 //记录等待返回第一个音频的时间
    };
  },

  components: {
    scrollText: scrollText
  },
  onLoad: function onLoad(params) {
    var _this2 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this2.setInCall();
              //音频停止事件
              app.globalData.Audio.onPlay(function (e) {
                _this2.aiSpeeking = true;
                _this2.aiThrinking = false;
                _this2.inputStatus = false;
                _this2.hasVoice = false;
              });
              //音频停止事件
              app.globalData.Audio.onStop(function (e) {
                // console.log("通话页停止")
              });

              //音频播放结束事件
              app.globalData.Audio.onEnded(function (e) {
                // console.log("通话页结束")
                _this2.isWelcome = false;
                _this2.startRecord();
              });

              // 判断当前场景
              _this2.status = params.status ? params.status : "";
              _this2.job_id = params.job_id ? params.job_id : "";
              _context.t0 = _this2.status;
              _context.next = _context.t0 === "interview" ? 9 : _context.t0 === "findjob" ? 13 : _context.t0 === "surejob" ? 16 : 20;
              break;
            case 9:
              _this2.action = "audio_interview";
              _this2.isWelcome = false;
              _this2.handleAutoAction();
              return _context.abrupt("break", 22);
            case 13:
              _this2.action = "audio_look_for_job";
              _this2.userEnter();
              return _context.abrupt("break", 22);
            case 16:
              _this2.action = "audio_want_application";
              _this2.isWelcome = false;
              _this2.handleAutoAction();
              return _context.abrupt("break", 22);
            case 20:
              _this2.userEnter();
              return _context.abrupt("break", 22);
            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  onShow: function onShow() {
    this.initRecord();
  },
  onHide: function onHide() {
    app.globalData.Audio.pause();
    // 移除Audio的各种监听
    app.globalData.Audio.offPlay();
    app.globalData.Audio.offPause();
    app.globalData.Audio.offStop();
    app.globalData.Audio.offEnded();
    app.globalData.manager.stop();
    app.globalData.Audio.stop();
    if (!this.closeStatus) {
      this.close();
    }
  },
  watch: {
    lowVoiceCount: function lowVoiceCount(newVaL) {
      var _this = this;
      if (_this.highVoiceCount > 2) {
        // 有输入
        if (newVaL > 10) {
          app.globalData.manager.stop();
        }
      } else {
        // 无输入
        if (newVaL > 20) {
          app.globalData.manager.stop();
        }
      }
    },
    highVoiceCount: function highVoiceCount(newVal) {
      if (newVal > 2) {
        // 有输入根据状态显示action
        if (this.status == "interview") {
          this.action = "audio_interview";
        } else if (this.status == "findjob") {
          this.action = "audio_look_for_job";
        } else if (this.status == "surejob") {
          this.action = "audio_want_application";
        } else {
          this.action = "";
        }
      } else {
        this.action = "audio_call_user_long_time_without_talking";
      }
    },
    inputStatus: function inputStatus(newVal) {
      if (newVal) {
        this.resetData();
      }
    },
    resultArrayBuffer: function resultArrayBuffer(newVal) {
      var _this = this;
      // 监听接收到1个之后开始转换音频
      this.arrayBufferLength = newVal.length;
      // console.log("接收元数据长度：", this.arrayBufferLength)
      // if (this.arrayBufferLength == 1) {
      // 	this.startTrans()
      // }
    },
    result: function result(newVal) {
      // console.log("转换后音频长度：", newVal.length)
    }
  },
  computed: _objectSpread({}, (0, _vuex.mapState)(["answering", "connected", "connecting", "canSend", "inChannel", "answerContinue", "channelQaLen", "channelId", "channelQaList", "location", "token", "callContent", "incallEnroll", "incallJobId", "hangUpFirst"])),
  methods: _objectSpread(_objectSpread({}, (0, _vuex.mapMutations)(["setInCall", "clearCallContent", "setAiSpeekingEnd", "resetAiSpeekingEnd", "resetIncallEnroll", "resetIncallJobId", "resetHangUpFirst"])), {}, {
    handleAutoAction: function handleAutoAction() {
      // 处理我要报名和我要面试，由AI说第一句话
      var jobId = this.job_id ? this.job_id : this.incallJobId;
      console.log("incallJobId：", jobId);
      // 面试场景
      var time = new Date().getTime();
      var id = uni.getStorageSync("openid") + time;
      var other = id + "@@@" + this.channelId + "@@@" + jobId + "@@@" + this.action + "@@@";
      var sendData = this.concatBuffer(other, "");
      this.sendMessage(sendData);
    },
    close: function close() {
      this.closeStatus = true;
      this.clearCallContent();
      this.resetIncallEnroll();
      this.resetIncallJobId();
      if (this.audioCtx) {
        // 停止音频播放
        this.audioCtx.close();
        // 清除 WebAudioContext 对象
        this.audioCtx = null;
      }
      if (app.globalData.Audio) {
        //关闭录音
        app.globalData.Audio.stop();
      }
      if (app.globalData.manager) {
        //关闭录音
        app.globalData.manager.stop();
      }
      if (this.requestTask) {
        this.requestTask.offChunkReceived(); //取消监听数据返回函数
        this.requestTask.abort(); // 取消请求任务
      }

      if (this.transTimer) {
        clearInterval(this.transTimer);
      }
      if (this.playTimer) {
        clearInterval(this.playTimer);
      }
      var pages = getCurrentPages();
      // prevPage 是获取上个页面的js里面的pages的所有信息，-2是上个页面，-3是上上个页面 以此类推
      var prevPage = pages[pages.length - 2];
      // 在本页面修改上一个页面的 data
      if (prevPage && prevPage.$vm.changeTab) {
        prevPage.$vm.changeTab(1);
      }
      setTimeout(function () {
        uni.navigateBack();
      }, 500);
    },
    resetData: function resetData() {
      //关闭录音
      this.currentPlayIndex = 0;
      this.highVoiceCount = 0;
      this.longTimeNoInput = false;
      this.lowVoiceCount = 0;
      this.result = [];
      this.receiveEnd = false;
      this.resultArrayBuffer = [];
      this.arrayBufferLength = 0;
      this.currentTransIndex = 0;
      this.receiveCount = 0;
    },
    startRecord: function startRecord() {
      if (this.closeStatus) {
        return;
      }
      app.globalData.manager.start({
        format: 'PCM',
        sampleRate: 8000,
        numberOfChannels: 2,
        encodeBitRate: 16000,
        frameSize: 4,
        duration: 600000
      });
    },
    initRecord: function initRecord() {
      var _this3 = this;
      //录音开始事件
      app.globalData.manager.onStart(function (e) {
        // console.log("录音开始")
        _this3.playTipsVoice();
        // uni.vibrateShort({
        // 	success: function() {}
        // });
        _this3.inputStatus = true; //开启用户输入
        _this3.aiSpeeking = false; //关闭ai动效
        _this3.aiThrinking = false; //关闭ai动效
        _this3.hasVoice = true;
      });
      //录音结束事件
      app.globalData.manager.onStop(function (res) {
        var _this = _this3;
        // console.log("录音结束：", res)
        _this.inputStatus = false;
        _this.hasVoice = false;
        _this.aiThrinking = true; //开启ai思考动效
        _this.aiSpeeking = false;
        if (!_this.closeStatus) {
          // 录音结束，发送语音数据给后台
          _this3.handleRecorder(res);
        }
      });
      app.globalData.manager.onError(function (res) {
        var _this = _this3;
        // console.log("phonecall录音出错：", res.errMsg)
      });

      app.globalData.manager.onFrameRecorded(function (res) {
        var _this = _this3;
        var frameBuffer = res.frameBuffer;
        var uint16Array = new Int16Array(frameBuffer);
        var len = uint16Array.length;
        var squareSum = 0;
        uint16Array.forEach(function (uint16) {
          squareSum += uint16 * uint16;
        });
        if (squareSum < 10000) return;
        var recordVolume = squareSum / len;
        var db = parseInt(10 * Math.log10(recordVolume));
        // console.log("当前分贝值：", db)
        if (db < 60) {
          // 分贝太小
          _this.hasVoice = false;
          _this.lowVoiceCount++;
        } else {
          _this.hasVoice = true;
          _this.lowVoiceCount = 0;
          _this.highVoiceCount++;
        }
      });
    },
    userEnter: function userEnter() {
      // 用户进入页面，随机播放一条欢迎音频
      var i = Math.floor(Math.random() * this.welcomeVoice.length);
      app.globalData.Audio.src = this.welcomeVoice[i];
      app.globalData.Audio.play();
    },
    playError: function playError() {
      if (this.closeStatus) {
        return;
      }
      app.globalData.Audio.src = this.errorVoice;
      app.globalData.Audio.play();
      this.clearCallContent();
      this.aiSpeeking = true;
      this.aiThrinking = false;
      this.inputStatus = false;
      this.hasVoice = false;
    },
    // 处理录音数据
    handleRecorder: function handleRecorder(_ref) {
      var tempFilePath = _ref.tempFilePath,
        duration = _ref.duration;
      var _this = this;
      wx.getFileSystemManager().readFile({
        filePath: tempFilePath,
        success: function success(res) {
          var jobId = _this.job_id ? _this.job_id : _this.incallJobId;
          var time = new Date().getTime();
          var id = uni.getStorageSync("openid") + time;
          var other = id + "@@@" + _this.channelId + "@@@" + jobId + "@@@" + _this.action + "@@@";
          var sendData = _this.concatBuffer(other, res.data);
          _this.sendMessage(sendData);
        },
        fail: function fail(error) {
          console.error('读取文件失败：', error);
          _this.playError();
        }
      });
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
    playTipsVoice: function playTipsVoice() {
      var source = this.audioCtx.createOscillator();
      var gain = this.audioCtx.createGain();
      source.connect(gain);
      gain.connect(this.audioCtx.destination);
      source.type = 'sine'; // 使用正弦波
      source.frequency.value = 300.50; // 调高音调到C6
      gain.gain.setValueAtTime(2, this.audioCtx.currentTime); // 降低音量
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.5); // 延长衰减时间

      source.start();
      source.stop(this.audioCtx.currentTime + 0.5);
    },
    concatBuffer: function concatBuffer(other, data) {
      var midata = new Uint8Array(data);
      var binaryId = this.stringToUint8Array(other);
      // 输出拼接后的 Uint8Array
      // 计算总长度
      var totalLength = binaryId.length + midata.length;
      // 创建一个新的 Uint8Array，长度为所有数组的总和
      var mergedArray = new Uint8Array(totalLength);
      // 使用 set 方法将每个 Uint8Array 的数据填充到新的 Uint8Array 中
      var offset = 0;
      mergedArray.set(binaryId, offset);
      offset += binaryId.length;
      mergedArray.set(midata, offset);
      return mergedArray.buffer;
    },
    sendMessage: function sendMessage(data) {
      console.log("用户发送了语音");
      var _this = this;
      this.requestTask = wx.request({
        url: BASE_URL,
        enableChunked: true,
        header: {
          'content-type': 'application/json',
          "app-id": _url_setting.default.urls.appid,
          "open-id": uni.getStorageSync("openid") ? uni.getStorageSync("openid") : "",
          "address": encodeURIComponent(JSON.stringify(_this.location)),
          "Authorization": "bearer " + uni.getStorageSync("token"),
          "Content-Type": "application/octet-stream"
        },
        responseType: 'arraybuffer',
        method: 'POST',
        data: data,
        success: function success(res) {
          console.log("发送成功");
        },
        fail: function fail(res) {
          console.error('request fail', res);
          // 链接出现问题
          _this.requestTask.offChunkReceived(); //取消监听数据返回函数
          app.globalData.Audio.stop();
          setTimeout(function () {
            console.log("request请求失败或超时");
            _this.playError();
          }, 500);
        }
      });
      this.errorTimer = setInterval(function () {
        if (_this.getResponeTime < 15) {
          // 10秒内是否返回第一段音频
          if (_this.receiveCount > 0) {
            clearInterval(_this.errorTimer);
            app.globalData.Audio.stop();
          } else {
            _this.getResponeTime++;
          }
        } else {
          _this.getResponeTime = 0;
          clearInterval(_this.errorTimer);
        }
      }, 1000);
      this.requestTask.onChunkReceived(function (res) {
        _this.receiveCount++;
        if (_this.receiveCount == 1) {
          console.log("接收到第一条数据");
          _this.transFirst(res.data);
        }
        _this.resultArrayBuffer.push(res.data);
        var uint8Array = new Uint8Array(res.data);
        // 判断接收到的片段是否包含 "[DONE]" 标记
        var doneMarker = new Uint8Array([91, 68, 79, 78, 69, 93]);
        // const doneMarker = new Uint8Array([0x5B, 0x44, 0x4F, 0x4E, 0x45, 0x5D]); // 对应 "[DONE]"
        var containsDoneMarker = _this.containsDoneMarker(uint8Array, doneMarker);
        if (containsDoneMarker) {
          // 处理完成
          console.log("检测到 [DONE] 标记");
          _this.receiveEnd = true;
          _this.requestTask.offChunkReceived(); //取消监听数据返回函数
        }
      });
    },
    transFirst: function transFirst(data) {
      var _this = this;
      // 解码第一条数据
      _this.audioCtx.decodeAudioData(data, function (buffer) {
        _this.currentTransIndex++;
        if (_this.currentTransIndex == 1) {
          _this.resetAiSpeekingEnd();
          _this.playFirst(buffer);
          _this.isWelcome = false;
          _this.playTipsVoice();
        }
        _this.result.push(buffer);
        _this.startTrans();
      }, function (err) {
        // 音频转换失败，重新转换
        // console.log("当前解码失败索引：", _this.currentTransIndex, data)
        console.error('decodeAudioData fail', err);
        // 将第一条从原始数据中移除
        _this.resultArrayBuffer.splice(0, 1);
        _this.startTrans();
      });
    },
    startTrans: function startTrans() {
      var _this = this;
      if (_this.currentTransIndex < _this.arrayBufferLength) {
        var data = _this.resultArrayBuffer[_this.currentTransIndex];
        _this.audioCtx.decodeAudioData(data, function (buffer) {
          _this.currentTransIndex++;
          if (_this.currentTransIndex == 1) {
            _this.resetAiSpeekingEnd();
            _this.playFirst(buffer);
            _this.isWelcome = false;
            _this.playTipsVoice();
          }
          _this.result.push(buffer);
          _this.startTrans();
        }, function (err) {
          // 音频转换失败，重新转换
          console.error('decodeAudioData fail', err);
          _this.resultArrayBuffer.splice(_this.currentTransIndex, 1);
          // _this.currentTransIndex++
          _this.startTrans();
        });
      } else {
        if (_this.receiveEnd) {
          // 转换完毕
          // console.log("转换完毕：", _this.result.length, _this.arrayBufferLength)
        } else {
          // 轮询是否已经转换完毕
          _this.transTimer = setInterval(function () {
            if (_this.currentTransIndex < _this.arrayBufferLength) {
              _this.startTrans();
              clearInterval(_this.transTimer);
            }
          }, 500);
        }
      }
    },
    // 检查 Uint8Array 的最后部分是否包含 [DONE] 标记
    containsDoneMarker: function containsDoneMarker(uint8Array, doneMarker) {
      var markerLength = doneMarker.length;
      // 检查 uint8Array 的最后部分是否与 doneMarker 匹配
      if (uint8Array.length < markerLength) return false; // 如果数据长度小于标记长度，直接返回 false
      for (var i = 0; i < markerLength; i++) {
        if (uint8Array[uint8Array.length - markerLength + i] !== doneMarker[i]) {
          return false; // 如果不匹配，返回 false
        }
      }

      return true; // 匹配成功
    },
    playFirst: function playFirst(data) {
      var _this = this;
      _this.aiSpeeking = true;
      _this.aiThrinking = false;
      _this.inputStatus = false;
      _this.hasVoice = false;
      var source = this.audioCtx.createBufferSource();
      source.connect(this.audioCtx.destination);
      source.buffer = data;
      source.start();
      source.onended = function () {
        // console.log('片段播放结束');
        _this.currentPlayIndex++;
        _this.play();
      };
    },
    play: function play() {
      var _this = this;
      var len = this.result.length;
      // console.log(_this.currentPlayIndex, len, _this.arrayBufferLength, _this.receiveEnd)
      if (_this.currentPlayIndex == len) {
        // 当前播放与转义后数组长度相同，再判断
        if (len == _this.arrayBufferLength && _this.receiveEnd) {
          // 语音播放完毕，判断如果是报名成功立即进入面试流程。否则数据重置，并重新开启用户语音输入
          // console.log("播放完毕")
          _this.resetData();
          _this.setAiSpeekingEnd();
          _this.clearCallContent();
          console.log("语音对话中报名了吗：", _this.incallEnroll);
          if (_this.incallEnroll) {
            // 用户报名成功，进入面试流程
            _this.action = "audio_interview";
            _this.status = "interview";
            _this.aiSpeeking = false;
            _this.aiThrinking = true;
            _this.handleAutoAction();
          } else {
            if (_this.hangUpFirst) {
              //主动挂断电话
              _this.resetHangUpFirst();
              _this.close();
            } else {
              _this.startRecord();
            }
          }
        } else {
          // 轮询是否有新数据返回
          _this.playTimer = setInterval(function () {
            if (_this.currentPlayIndex < _this.result.length) {
              _this.play();
              clearInterval(_this.playTimer);
            }
          }, 500);
        }
        return;
      }
      _this.aiSpeeking = true;
      _this.aiThrinking = false;
      _this.inputStatus = false;
      _this.hasVoice = false;
      var source = this.audioCtx.createBufferSource();
      source.connect(this.audioCtx.destination);
      source.buffer = this.result[this.currentPlayIndex];
      source.start();
      source.onended = function () {
        // console.log('片段播放结束');
        _this.currentPlayIndex++;
        _this.play();
      };
    }
  })
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 187:
/*!*********************************************************************************************************!*\
  !*** D:/灵动世界/fengling1.0/fengling_ai/pages/phone_call/phone_call.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_call_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./phone_call.vue?vue&type=style&index=0&lang=scss& */ 188);
/* harmony import */ var _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_call_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_call_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_call_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_call_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_d_HBuilderX_3_3_13_20220314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_call_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 188:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/灵动世界/fengling1.0/fengling_ai/pages/phone_call/phone_call.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[181,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/phone_call/phone_call.js.map