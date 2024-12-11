(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/chat/chat"],{

/***/ 226:
/*!**************************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_onlychat_white/main.js?{"page":"pages%2Fchat%2Fchat"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _chat = _interopRequireDefault(__webpack_require__(/*! ./pages/chat/chat.vue */ 227));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_chat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 227:
/*!*******************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_onlychat_white/pages/chat/chat.vue ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_vue_vue_type_template_id_bf16e7f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.vue?vue&type=template&id=bf16e7f4& */ 228);
/* harmony import */ var _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.vue?vue&type=script&lang=js& */ 230);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.vue?vue&type=style&index=0&lang=scss& */ 233);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 36);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chat_vue_vue_type_template_id_bf16e7f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chat_vue_vue_type_template_id_bf16e7f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _chat_vue_vue_type_template_id_bf16e7f4___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/chat/chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 228:
/*!**************************************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_onlychat_white/pages/chat/chat.vue?vue&type=template&id=bf16e7f4& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_bf16e7f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=template&id=bf16e7f4& */ 229);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_bf16e7f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_bf16e7f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_bf16e7f4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_bf16e7f4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 229:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/langeng5.11/release/employee_onlychat_white/pages/chat/chat.vue?vue&type=template&id=bf16e7f4& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var l0 =
    !_vm.showWanner && !_vm.showReAuth
      ? _vm.__map(_vm.historyList, function (item, index) {
          var $orig = _vm.__get_orig(item)
          var g0 = item.content.replace(/\\n/g, "\n")
          return {
            $orig: $orig,
            g0: g0,
          }
        })
      : null
  var l1 =
    !_vm.showWanner && !_vm.showReAuth
      ? _vm.__map(_vm.qaList, function (item, index) {
          var $orig = _vm.__get_orig(item)
          var g1 = item.content.replace(/\\n/g, "\n")
          return {
            $orig: $orig,
            g1: g1,
          }
        })
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        l1: l1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 230:
/*!********************************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_onlychat_white/pages/chat/chat.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=script&lang=js& */ 231);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 231:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/langeng5.11/release/employee_onlychat_white/pages/chat/chat.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _url_setting = _interopRequireDefault(__webpack_require__(/*! @/url_setting */ 33));
var _qqmapWxJssdkMin = _interopRequireDefault(__webpack_require__(/*! @/utils/qqmap-wx-jssdk.min.js */ 232));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var plugin = requirePlugin("WechatSI");
var manager = plugin.getRecordRecognitionManager();
var app = getApp();
var _default = {
  data: function data() {
    return {
      showLogin: false,
      historyId: 0,
      loadAllHistory: false,
      showReAuth: false,
      imgUrl: app.globalData.baseImageUrl,
      scrollView: "",
      gender: [{
        value: "male",
        text: "男"
      }, {
        value: "female",
        text: "女"
      }],
      currentGender: 0,
      age: "",
      ques: "",
      hold: "h1",
      qaList: [],
      socketOpen: false,
      socketMsgQueue: [],
      answerMsg: "",
      canSend: true,
      placeHolder: "想了解什么工作，请告诉我吧",
      qaListLen: 0,
      historyList: [],
      appInfo: {},
      scroll: 0,
      chatShareId: 0,
      timeShareId: 0,
      header: {},
      sid: 0,
      connected: false,
      connecting: false,
      socketTask: false,
      num: 1,
      curStrIndex: 0,
      curText: "",
      marginTop: app.globalData.marginTop,
      tabMargin: app.globalData.tabMargin,
      scrollHeight: 0,
      scrollHeight2: 0,
      subTabHeight: app.globalData.subTabHeight,
      showVoice: false,
      showRecord: true,
      showChat: false,
      showFullScreen: true,
      showWanner: false,
      cityData: [],
      city1: "",
      city2: "",
      city3: "",
      cityArr: [],
      typeTags: [],
      seleTypeIds: [],
      selectType: [],
      open_id: "",
      getPhoneData: {},
      showInputing: false,
      recordContent: "",
      enableSpeeking: false,
      timer: null,
      currentSiging: {},
      showSetting: false,
      openid: "",
      startPoint: {},
      //记录长按录音开始点信息,用于后面计算滑动距离。
      cancelRecord: false,
      titleHeight: 0,
      showAnswering: false,
      inputHeight: 0,
      recordSecond: 0,
      secondText: "00:00",
      secondTimer: null,
      cancelIconLeft: 0,
      cancelIconRight: 0,
      cancelIconBottom: 0,
      cancelIconTop: 0
    };
  },
  onShareAppMessage: function onShareAppMessage() {
    return {
      title: "风铃AI",
      content: "海量岗位，等你来",
      path: "/pages/index/index",
      imageUrl: app.globalData.baseImageUrl + "/worker/logo.png"
    };
  },
  onShareTimeline: function onShareTimeline() {
    return {
      title: "风铃AI",
      content: "海量岗位，等你来",
      path: "/pages/index/index",
      imageUrl: app.globalData.baseImageUrl + "/worker/logo.png"
    };
  },
  onLoad: function onLoad(param) {
    var _this2 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _this, menuButtonInfo;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this = _this2;
              _this2.scrollHeight = app.globalData.systemHeight - 4 * _this2.tabMargin - _this2.subTabHeight - _this2.marginTop;
              _this2.scrollHeight2 = app.globalData.systemHeight - 1 * _this2.subTabHeight;
              _context.next = 5;
              return _this2.getOpenId();
            case 5:
              _this2.openid = _context.sent;
              menuButtonInfo = uni.getMenuButtonBoundingClientRect();
              _this2.titleHeight = menuButtonInfo.height;
              uni.onKeyboardHeightChange(function (res) {
                console.log(res.height, "键盘高度变化");
                if (res.height == 0) {
                  _this2.inputHeight = 0;
                }
              });
              _this2.getHistory();
              _this2.showAichat();
              // this.getCitys()
              // setTimeout(function() {
              // 	if (!_this.showChat) {
              // 		_this.showAichat()
              // 	}
              // }, 10000)
            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  onUnload: function onUnload() {
    // let _this = this
    // clearInterval(_this.timer)
    this.close();
  },
  mounted: function mounted() {
    // this.getIconPosition()
  },
  methods: {
    getOpenId: function getOpenId() {
      var _this3 = this;
      var _this = this;
      return new Promise(function (resolve) {
        uni.login({
          success: function success(res) {
            console.log(res, "dyres");
            if (res.errMsg == 'login:ok') {
              var url = "";
              var data = {
                code: res.code
              };
              url = "/auth/worker/wechat/mini/openid";
              _this3.$request(url, data, "POST").then(function (resp) {
                if (resp.code == 0) {
                  uni.setStorage({
                    key: "openid",
                    data: resp.data.open_id
                  });
                  resolve(resp.data.open_id);
                }
              });
            }
          },
          fail: function fail(err) {
            console.log(err, "接口调用失败");
            // uni.showModal({
            // 	title: "登录失败",
            // 	content: "授权登录失败，将无法使用部分功能",
            // 	showCancel: false
            // })
          }
        });
      });
    },
    getIconPosition: function getIconPosition() {
      var _this = this;
      var query = uni.createSelectorQuery().in(_this);
      query.select('.cancel_icon').boundingClientRect(function (data) {
        console.log("querydata", data);
        if (data) {
          console.log('元素的位置信息：', data);
          _this.cancelIconTop = data.top;
          _this.cancelIconBottom = data.top + data.width;
          _this.cancelIconLeft = data.left;
          _this.cancelIconRight = data.right;
        }
      }).exec();
    },
    keyboardHeightChange: function keyboardHeightChange(e) {
      console.log(e, "键盘");
    },
    inputBindFocus: function inputBindFocus(e) {
      if (e.detail.height) {
        this.inputHeight = e.detail.height; //这个高度就是软键盘的高度
      }
    },
    // 录音计时
    startCount: function startCount() {
      var _this = this;
      this.secondTimer = setInterval(function () {
        if (_this.recordSecond < 60) {
          _this.recordSecond++;
          if (_this.recordSecond < 10) {
            _this.secondText = "00:0" + _this.recordSecond;
          } else {
            _this.secondText = "00:" + _this.recordSecond;
          }
        } else {
          clearInterval(_this.secondTimer);
          uni.showToast({
            title: "最多发送60s",
            duration: 3000,
            icon: "none"
          });
          _this.stopRecord();
        }
      }, 1000);
    },
    handleTouchMove: function handleTouchMove(e) {
      // var moveLenght = e.touches[e.touches.length - 1].clientY - this.startPoint.clientY; //移动距离
      // if (Math.abs(moveLenght) > 70) {
      // 	this.stopRecord()
      // 	this.cancelRecord = true
      // 	console.log("cancelRecord", this.cancelRecord)
      // }

      var exp1 = e.touches[e.touches.length - 1].clientX > this.cancelIconLeft && e.touches[e.touches.length - 1].clientX < this.cancelIconRight;
      var exp2 = e.touches[e.touches.length - 1].clientY > this.cancelIconTop && e.touches[e.touches.length - 1].clientY < this.cancelIconBottom;
      if (exp1 && exp2) {
        this.cancelRecord = true;
      } else {
        this.cancelRecord = false;
      }
    },
    back: function back() {
      uni.navigateBack();
    },
    // getSetting() {
    // 	let _this = this
    // 	uni.getSetting({
    // 		success(res) {
    // 			console.log(res.authSetting, "getSetting")
    // 			if (!res.authSetting['scope.userLocation']) {
    // 				_this.showReAuth = true
    // 				let data = {
    // 					content: "",
    // 					origin: "customer"
    // 				}
    // 				_this.send(data)
    // 			} else {
    // 				_this.getLocation()
    // 			}
    // 		}
    // 	})
    // },
    closeLogin: function closeLogin() {
      this.showLogin = false;
    },
    openSetting: function openSetting() {
      var _this = this;
      uni.openSetting({
        success: function success(res) {
          console.log(res.authSetting, "res.authSetting");
          if (res.authSetting['scope.record']) {
            // _this.showInputing = false
            _this.showSetting = false;
            // _this.showRecord = true
          }
        },
        fail: function fail(openErr) {
          console.log(openErr, 'openerr');
        },
        complete: function complete() {
          this.showReAuth = false;
        }
      });
    },
    initRecord: function initRecord() {
      var _this4 = this;
      manager.onStart = function (res) {
        _this4.recordContent = "";
        _this4.showInputing = true;
        _this4.startCount();
        _this4.getIconPosition();
      };
      //有新的识别内容返回，则会调用此事件  
      manager.onRecognize = function (res) {
        _this4.recordContent += res.result;
      };

      // 识别结束事件  
      manager.onStop = function (res) {
        uni.hideLoading();
        _this4.recordContent += res.result;
        _this4.showInputing = false;
        var data = {
          content: _this4.recordContent,
          origin: "customer"
        };
        console.log(data);
        console.log(_this4.cancelRecord);
        _this4.recordSecond = 0;
        _this4.secondText = "00:00";
        clearInterval(_this4.secondTimer);
        if (!_this4.cancelRecord) {
          _this4.send(data);
        } else {
          _this4.cancelRecord = false;
        }
      };
      // 识别出错
      manager.onError = function (res) {
        console.log(res, "err");
        _this4.cancelRecord = false;
        _this4.showInputing = false;
        _this4.recordSecond = 0;
        _this4.secondText = "00:00";
        clearInterval(_this4.secondTimer);
        uni.hideLoading();
        var errMsg = "";
        switch (res.retcode) {
          case -30003:
            errMsg = "未获取到录音数据，请尽可能提高音量。";
            break;
          case -30006:
            errMsg = "录音识别超时，请重试。";
            break;
          case -30008:
            errMsg = "网络链接失败，请重试。";
            break;
          case -30004:
            errMsg = "未识别到结果，请尽可能提高音量。";
            break;
          case -40001:
            errMsg = "达到接口调用频率限制，请联系管理员。";
            break;
          default:
            errMsg = "录音功能出错，请联系管理员。";
            break;
        }

        // uni.showModal({
        // 	title: errMsg,
        // 	showCancel: false
        // })
      };
    },
    startRecord: function startRecord(e) {
      this.startPoint = e.touches[0]; //记录长按时开始点信息，后面用于计算上划取消时手指滑动的距离。
      this.showInputing = true;
      this.cancelRecord = false;
      manager.start({
        duration: 60000,
        lang: "zh_CN"
      });
    },
    stopRecord: function stopRecord() {
      clearInterval(this.secondTimer);
      this.showInputing = false;
      if (!this.cancelRecord) {
        uni.showLoading({
          title: "正在取消"
        });
      }
      manager.stop();
    },
    chooseWork: function chooseWork(obj, item) {
      console.log(obj, item);
    },
    // changeScreen() {
    // 	this.showFullScreen = !this.showFullScreen
    // 	if (this.showFullScreen) {
    // 		this.scrollHeight = app.globalData.systemHeight - 2 * this.subTabHeight -
    // 			2 * this.tabMargin - this.marginTop
    // 	} else {
    // 		this.scrollHeight = app.globalData.systemHeight * 0.8 - this.tabMargin - 2 * this
    // 			.subTabHeight
    // 	}
    // },
    showAichat: function showAichat() {
      var _this5 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var _this;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this5.historyId = 0;
                _this5.historyList = [];
                _this5.loadAllHistory = false;
                _this5.qaList = [];
                _this = _this5;
                uni.authorize({
                  scope: 'scope.record',
                  success: function success(res) {
                    console.log(res, 'success');
                  },
                  fail: function fail(err) {
                    _this.showSetting = true;
                    console.log(err, 'err');
                  }
                });
                _context2.next = 8;
                return _this5.getHistory();
              case 8:
                _this5.historyList = _context2.sent;
                _this5.toScroll();
                _this5.creatConnect();
                _this5.initRecord();
                _this5.showChat = true;
              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    openSeepking: function openSeepking() {
      this.enableSpeeking = !this.enableSpeeking;
    },
    closeAichat: function closeAichat() {
      this.showChat = false;
      this.historyId = 0;
      this.enableSpeeking = false;
      wx.stopBackgroundAudio();
      this.close();
    },
    toInput: function toInput() {
      this.showRecord = false;
    },
    toVoice: function toVoice() {
      this.showRecord = true;
    },
    doSend: function doSend(e, text) {
      // console.log(text);
      if (e.ctrlKey && e.keyCode === 13) {
        //用户点击了ctrl+enter触发
        this.ques += '\n';
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
    getLocation: function getLocation() {
      var _this = this;
      uni.getLocation({
        success: function success(res) {
          _this.reverseGeocodingClick(res.latitude, res.longitude);
        },
        fail: function fail(err) {
          console.error('定位失败', err);
        }
      });
    },
    legal: function legal() {
      if (this.age) {
        if (!Number(this.age)) {
          uni.showModal({
            title: "输入不合法，请输入大于18的数字。",
            showCancel: false
          });
        }
      }
    },
    getHistory: function getHistory() {
      var _this = this;
      return new Promise(function (resolve) {
        var url = "/ai/chat/histories?id=" + _this.historyId;
        _this.$request(url).then(function (res) {
          if (res.code == 0) {
            var newArr = res.data.reverse();
            var len = res.data.length;
            if (len > 0) {
              _this.historyId = res.data[0].id;
            }
            resolve(newArr);
          }
        });
      });
    },
    getMoreHistory: function getMoreHistory() {
      var _this6 = this;
      if (!this.loadAllHistory) {
        var url = "/ai/chat/histories?id=" + this.historyId;
        this.$request(url).then(function (res) {
          if (res.code == 0) {
            _this6.historyList = res.data.reverse().concat(_this6.historyList);
            var len = res.data.length;
            if (len > 0) {
              _this6.historyId = res.data[0].id;
            } else {
              _this6.loadAllHistory = true;
            }
          }
        });
      } else {
        uni.showToast({
          title: "已加载全部",
          icon: "none",
          duration: 2000
        });
      }
    },
    toScroll: function toScroll() {
      var _this = this;
      this.$nextTick(function () {
        console.log(123);
        if (_this.qaList.length == 0) {
          var num = _this.historyList.length - 1;
          if (num >= 0) {
            _this.scrollView = "his" + num;
          }
        } else {
          var num2 = _this.qaList.length - 1;
          _this.scrollView = "qa" + num2;
          // this.scrollView = this.hold
          // console.log(this.scrollView)
        }

        console.log(_this.scrollView, "scrollView");
      });
    },
    getDetail: function getDetail(item) {
      var data = {
        content: item,
        origin: "customer"
      };
      this.send(data);
    },
    sendQuestion: function sendQuestion() {
      var _this = this;
      _this.curStrIndex = 0;
      if (!this.ques) {
        uni.showToast({
          icon: "none",
          title: "想了解什么工作，请告诉我吧"
        });
      } else {
        this.inputHeight = 0;
        if (this.canSend) {
          this.canSend = false;
          var data = {
            content: this.ques,
            origin: "customer"
          };
          this.send(data);
        }
      }
    },
    genderChange: function genderChange(e) {
      for (var i = 0; i < this.gender.length; i++) {
        if (this.gender[i].value == e.detail.value) {
          this.currentGender = i;
        }
      }
    },
    onchange1: function onchange1(e) {
      if (e.detail.value.length) {
        if (this.hasSimpleCity(e.detail.value[1].value)) {
          uni.showToast({
            title: "该城市已选择",
            icon: "error",
            duration: 2000
          });
          // this.$refs.pickerOne.clear()
          return;
        }
      }
      this.cityArr[0] = e.detail.value;
    },
    onchange2: function onchange2(e) {
      if (e.detail.value.length) {
        if (this.hasSimpleCity(e.detail.value[1].value)) {
          uni.showToast({
            title: "该城市已选择",
            icon: "error",
            duration: 2000
          });
          // this.$refs.pickerTwo.clear()
          return;
        }
      }
      this.cityArr[1] = e.detail.value;
    },
    onchange3: function onchange3(e) {
      if (e.detail.value.length) {
        if (this.hasSimpleCity(e.detail.value[1].value)) {
          uni.showToast({
            title: "该城市已选择",
            icon: "error",
            duration: 2000
          });
          // this.$refs.pickerThree.clear()
          return;
        }
      }
      this.cityArr[2] = e.detail.value;
    },
    sureCity: function sureCity() {
      var newCityArr = this.cityArr.filter(function (el) {
        return el.length > 0;
      });
      var wannerCity = "";
      var len = newCityArr.length;
      for (var i = 0; i < len; i++) {
        wannerCity += newCityArr[i][1].text + "、";
      }
      wannerCity = wannerCity.slice(0, wannerCity.length - 1);
      return wannerCity;
    },
    hasSimpleCity: function hasSimpleCity(value) {
      // 对比二级城市id是否有相同
      var len = this.cityArr.length;
      var hasSimple = false;
      for (var i = 0; i < len; i++) {
        if (this.cityArr[i] && this.cityArr[i].length > 0) {
          if (value == this.cityArr[i][1].value) {
            hasSimple = true;
          }
        }
      }
      return hasSimple;
    },
    getCitys: function getCitys() {
      var _this7 = this;
      this.$request("/common/areas").then(function (res) {
        if (res.code == 0) {
          _this7.cityData = res.data;
        }
      });
    },
    creatConnect: function creatConnect() {
      var _this = this;
      if (this.connected || this.connecting) {
        return false;
      }
      this.connecting = true;
      console.log(app.globalData.wssUrl, "wss");
      this.socketTask = uni.connectSocket({
        url: app.globalData.wssUrl,
        header: {
          'content-type': 'application/json',
          "app-id": _url_setting.default.urls.appid,
          "open-id": uni.getStorageSync("openid")
        },
        method: 'GET',
        success: function success(res) {
          // 这里是接口调用成功的回调，不是连接成功的回调，请注意
        },
        fail: function fail(err) {
          // 这里是接口调用失败的回调，不是连接失败的回调，请注意
        }
      });
      this.connect();
      console.log(this.socketTask, "socketTask");
    },
    toSign: function toSign(item) {
      var _this = this;
      this.currentSiging = item;
      if (this.isLogin()) {
        uni.showModal({
          title: "正在报名",
          success: function success(resp) {
            if (resp.confirm) {
              _this.sureSign(item.content.id);
            }
          }
        });
      } else {
        _this.showLogin = true;
      }
    },
    sureSign: function sureSign(id) {
      var _this8 = this;
      var url = "/worker/accept/project/" + id;
      this.$request(url, {}, "POST").then( /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(res) {
          return _regenerator.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (res.code == 0) {
                    uni.showToast({
                      title: "报名成功",
                      duration: 3000
                    });
                    _this8.signed = true;
                    _this8.closeLogin();
                  }
                case 1:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    },
    connect: function connect() {
      var _this9 = this;
      var _this = this;
      this.socketTask.onOpen(function (res) {
        _this9.connecting = false;
        _this9.connected = true;
        _this9.noInput();
        console.log('onOpen', res);
      });
      this.socketTask.onError(function (err) {
        _this9.connecting = false;
        _this9.connected = false;
        _this9.canSend = true;
        uni.hideLoading();
        // uni.showModal({
        // 	content: '连接失败，请稍后再试',
        // 	showCancel: false
        // })
        console.log('onError', err);
        _this9.creatConnect();
      });
      this.socketTask.onMessage(function (res) {
        var respone = JSON.parse(res.data);
        uni.hideLoading();
        _this.showAnswering = false;
        console.log(respone, "respone");
        if (respone.code == 0) {
          _this.toScroll();
          if (_this.enableSpeeking && respone.data.content != "pong") {
            _this.formatResultStr(respone.data.content);
          }
          if (respone.data.content != "pong") {
            _this.qaList.push({
              content: respone.data.content,
              source: "system"
            });
          }
        } else {
          uni.showModal({
            title: respone.msg
          });
        }
        _this9.resetData();
      });
      this.socketTask.onClose(function (res) {
        uni.hideLoading();
        _this9.connected = false;
        _this9.socketTask = false;
        console.log('onClose', res);
        clearInterval(_this.timer);
        _this9.creatConnect();
        // let data = {
        // 	content: "链接已关闭，如需重新对话，请重新打开窗口。",
        // 	origin: "system",
        // }
        // this.qaList.push(data)
      });

      console.log('task', this.socketTask);
    },
    resetData: function resetData() {
      this.canSend = true;
      this.placeHolder = "想了解什么工作，请告诉我吧";
      this.cancelRecord = false;
    },
    // 间隔一定时间判断用户是否没有输入
    noInput: function noInput() {
      var _this = this;
      this.timer = setInterval(function () {
        var data = {
          content: "ping",
          origin: "customer"
        };
        _this.send(data);
      }, 10000);
    },
    formatResultStr: function formatResultStr(str) {
      // let len = data.length
      // let str = ""
      // for (let i = 0; i < len; i++) {
      // 	if (data[i].type == "str" || data[i].type == "remind_resume") {
      // 		str += data[i].content
      // 	}
      // 	if (data[i].type == "job_recommend" || data[i].type == "hot_job") {
      // 		let conLen = data[i].content.length
      // 		for (let j = 0; j < conLen; j++) {
      // 			str += data[i].content[j].name
      // 		}
      // 	}
      // 	if (data[i].type == "job_detail") {
      // 		for (key in data[i].content) {
      // 			str += data[i].content[key]
      // 		}
      // 	}
      // }
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
    send: function send(data) {
      var _this = this;
      this.socketTask.send({
        data: JSON.stringify(data),
        success: function success(res) {
          // uni.showLoading({
          // 	title: "思考中，请稍后..."
          // })
          _this.showAnswering = true;
          console.log(data, "data");
          if (data.content != "ping") {
            _this.qaList.push(data);
            _this.num++;
            _this.hold = "h" + _this.num;
            _this.toScroll();
            _this.ques = "";
            _this.placeHolder = "正在回答中，请稍后...";
            _this.qaListLen = _this.qaList.length;
          }
        },
        fail: function fail(err) {
          console.log(err);
        }
      });
    },
    close: function close() {
      if (this.socketTask && this.socketTask.close) {
        // this.send('{"type":"close"}');
        this.socketTask.close();
      }
    },
    dislike: function dislike(content) {
      console.log(content, "content");
      var data = {
        origin: "customer",
        content: "不喜欢",
        type: "str"
      };
      this.send(data);
    },
    cancel: function cancel() {
      this.showWanner = false;
      this.toScroll();
    },
    formatCity: function formatCity() {
      console.log(this.cityArr);
      var len = this.cityArr.length;
      var newArr = [];
      for (var i = 0; i < len; i++) {
        var newArrItem = [];
        if (this.cityArr[i] && this.cityArr[i].length) {
          for (var j = 0; j < this.cityArr[i].length; j++) {
            var newObj = {
              id: "",
              name: ""
            };
            newObj.id = this.cityArr[i][j].value;
            newObj.name = this.cityArr[i][j].text;
            newArrItem.push(JSON.parse(JSON.stringify(newObj)));
          }
        }
        if (newArrItem.length) {
          newArr.push(JSON.parse(JSON.stringify(newArrItem)));
        }
      }
      return newArr;
    },
    deFormatCity: function deFormatCity(arr) {
      var len = arr.length;
      var newArr = [];
      for (var i = 0; i < len; i++) {
        var index = i + 1;
        var param = "city" + index;
        this[param] = arr[i][1].id;
        var newArrItem = [];
        for (var j = 0; j < arr[i].length; j++) {
          var newObj = {
            value: "",
            text: ""
          };
          newObj.value = arr[i][j].id;
          newObj.text = arr[i][j].name;
          newArrItem.push(JSON.parse(JSON.stringify(newObj)));
        }
        newArr.push(JSON.parse(JSON.stringify(newArrItem)));
      }
      return newArr;
    },
    finishSele: function finishSele() {
      var _this10 = this;
      console.log(this.selectType, "selectType");
      var postMsg = this.gender[this.currentGender].text + "," + this.age + ",";
      postMsg += "\n" + this.sureCity();
      var typeLen = this.selectType.length;
      postMsg += "\n";
      for (var j = 0; j < typeLen; j++) {
        for (var k = 0; k < this.selectType[j].tags.length; k++) {
          postMsg += this.selectType[j].tags[k].name + "/";
        }
      }
      var newCityArr = this.formatCity(this.cityArr);
      var data = {
        "age": Number(this.age),
        "gender": this.gender[this.currentGender].text,
        "areas": newCityArr,
        "type_tags": this.selectType,
        "all_ags": this.typeTags
      };
      this.$request("/ai/resume", data, "POST").then(function (res) {
        if (res.code == 0) {
          uni.showToast({
            title: "保存成功",
            duration: 2000
          });
          _this10.showWanner = false;
          var postStr = {
            content: postMsg,
            origin: "customer"
          };
          _this10.send(postStr);
        }
      });
    },
    addWanner: function addWanner() {
      var _this11 = this;
      var _this = this;
      this.$request("/ai/resume").then(function (res) {
        if (res.code == 0) {
          _this11.typeTags = res.data.all_tags;
          _this11.selectType = !res.data.type_tags ? [] : res.data.type_tags;
          console.log(_this11.selectType, "selectType");
          for (var m = 0; m < _this11.selectType.length; m++) {
            for (var n = 0; n < _this.selectType[m].tags.length; n++) {
              _this.seleTypeIds.push(_this.selectType[m].tags[n].id);
            }
          }
          _this11.showWanner = true;
          _this11.age = !res.data.age ? "" : res.data.age;
          for (var i = 0; i < _this11.gender.length; i++) {
            if (_this11.gender[i].text == res.data.gender) {
              _this11.currentGender = i;
            }
          }
          _this11.cityArr = !res.data.areas ? [] : _this11.deFormatCity(res.data.areas);
          for (var j = 0; j < _this11.cityArr.length; j++) {
            var k = j + 1;
            var key = "city" + k;
            _this11[key] = _this11.cityArr[j][1].value;
          }
        }
      });
    },
    chooseTag: function chooseTag(item, tag) {
      console.log(item, tag, "item&tag");
      var obj = JSON.parse(JSON.stringify(item));
      obj.tags = [];
      var hasObj = false;
      var objIndex = 0;
      var len2 = this.selectType.length;
      // 首先判断是否选择过第一层级
      for (var k = 0; k < len2; k++) {
        if (obj.id == this.selectType[k].id) {
          hasObj = true;
          objIndex = k;
        }
      }
      if (hasObj) {
        // 已经选过该大类,判断tags中是否包含该tag.id
        var arr = this.selectType[objIndex].tags.filter(function (el) {
          return el.id == tag.id;
        });
        if (JSON.stringify(arr) == "[]") {
          this.selectType[objIndex].tags.push(tag);
        } else if (arr.length > 0) {
          // 包含该tag.id
          this.selectType[objIndex].tags = this.selectType[objIndex].tags.filter(function (el) {
            return el.id != tag.id;
          });
        }
      } else {
        // 无该大类
        obj.tags.push(tag);
        this.selectType.push(JSON.parse(JSON.stringify(obj)));
      }
      console.log(this.seleTypeIds, this.seleTypeIds.indexOf(tag.id));
      if (this.seleTypeIds.indexOf(tag.id) != -1) {
        this.seleTypeIds.splice(this.seleTypeIds.indexOf(tag.id), 1);
      } else {
        this.seleTypeIds.push(tag.id);
      }
      this.selectType = this.selectType.filter(function (el) {
        return JSON.stringify(el.tags) != "[]";
      });
    },
    noPosition: function noPosition() {
      this.showReAuth = false;
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 233:
/*!*****************************************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_onlychat_white/pages/chat/chat.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=style&index=0&lang=scss& */ 234);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 234:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/langeng5.11/release/employee_onlychat_white/pages/chat/chat.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[226,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/chat/chat.js.map