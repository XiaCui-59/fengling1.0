(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/ai_chat"],{

/***/ 188:
/*!************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_miniprograme_new/components/ai_chat.vue ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ai_chat_vue_vue_type_template_id_ed54abb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ai_chat.vue?vue&type=template&id=ed54abb8& */ 189);
/* harmony import */ var _ai_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ai_chat.vue?vue&type=script&lang=js& */ 191);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ai_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ai_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ai_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ai_chat.vue?vue&type=style&index=0&lang=scss& */ 194);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 36);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ai_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ai_chat_vue_vue_type_template_id_ed54abb8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ai_chat_vue_vue_type_template_id_ed54abb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _ai_chat_vue_vue_type_template_id_ed54abb8___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/ai_chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 189:
/*!*******************************************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_miniprograme_new/components/ai_chat.vue?vue&type=template&id=ed54abb8& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ai_chat_vue_vue_type_template_id_ed54abb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ai_chat.vue?vue&type=template&id=ed54abb8& */ 190);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ai_chat_vue_vue_type_template_id_ed54abb8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ai_chat_vue_vue_type_template_id_ed54abb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ai_chat_vue_vue_type_template_id_ed54abb8___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ai_chat_vue_vue_type_template_id_ed54abb8___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 190:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/langeng5.11/release/employee_miniprograme_new/components/ai_chat.vue?vue&type=template&id=ed54abb8& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uniDataPicker: function () {
      return Promise.all(/*! import() | uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker.vue */ 235))
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
  var l0 =
    _vm.showChat && !_vm.showWanner && !_vm.showReAuth
      ? _vm.__map(_vm.historyList, function (item, index) {
          var $orig = _vm.__get_orig(item)
          var g0 =
            item.type == "str" ||
            item.type == "remind_resume" ||
            item.type == "bind_mobile" ||
            item.type == "need_bind_mobile" ||
            item.type == "greeting"
              ? item.content.replace(/\\n/g, "\n")
              : null
          return {
            $orig: $orig,
            g0: g0,
          }
        })
      : null
  var l2 =
    _vm.showChat && _vm.showWanner && !_vm.showReAuth
      ? _vm.__map(_vm.typeTags, function (item, index) {
          var $orig = _vm.__get_orig(item)
          var l1 = _vm.__map(item.tags, function (tag, tagindex) {
            var $orig = _vm.__get_orig(tag)
            var g1 = _vm.seleTypeIds.indexOf(tag.id)
            var g2 = _vm.seleTypeIds.indexOf(tag.id)
            return {
              $orig: $orig,
              g1: g1,
              g2: g2,
            }
          })
          return {
            $orig: $orig,
            l1: l1,
          }
        })
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        l2: l2,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 191:
/*!*************************************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_miniprograme_new/components/ai_chat.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ai_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ai_chat.vue?vue&type=script&lang=js& */ 192);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ai_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ai_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ai_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ai_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ai_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 192:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/langeng5.11/release/employee_miniprograme_new/components/ai_chat.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _qqmapWxJssdkMin = _interopRequireDefault(__webpack_require__(/*! @/utils/qqmap-wx-jssdk.min.js */ 193));
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
      placeHolder: "请输入您的问题",
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
      showFullScreen: false,
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
      showSetting: false
    };
  },
  created: function created(param) {
    var _this = this;
    this.scrollHeight = app.globalData.systemHeight * 0.8 - this.tabMargin - 2 * this.subTabHeight;
    this.scrollHeight2 = app.globalData.systemHeight * 0.8 - 1 * this.subTabHeight;
    this.getCitys();
    setTimeout(function () {
      if (!_this.showChat) {
        _this.showAichat();
      }
    }, 10000);
  },
  methods: {
    getSetting: function getSetting() {
      var _this = this;
      uni.getSetting({
        success: function success(res) {
          console.log(res.authSetting, "getSetting");
          if (!res.authSetting['scope.userLocation']) {
            _this.showReAuth = true;
            var data = {
              content: "",
              type: "hot_job",
              source: "user"
            };
            _this.send(data);
          } else {
            _this.getLocation();
          }
        }
      });
    },
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

          if (res.authSetting['scope.userLocation']) {
            _this.showReAuth = false;
            _this.getLocation();
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
      var _this2 = this;
      manager.onStart = function (res) {
        _this2.recordContent = "";
        _this2.showInputing = true;
      };
      //有新的识别内容返回，则会调用此事件  
      manager.onRecognize = function (res) {
        _this2.recordContent += res.result;
      };

      // 识别结束事件  
      manager.onStop = function (res) {
        console.log(res.result);
        _this2.recordContent += res.result;
        _this2.showInputing = false;
        var data = {
          content: _this2.recordContent,
          source: "user",
          type: "str"
        };
        _this2.send(data);
      };
      // 识别出错
      manager.onError = function (res) {
        console.log(res, "err");
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
        uni.showModal({
          title: errMsg,
          showCancel: false
        });
      };
    },
    startRecord: function startRecord() {
      this.showInputing = true;
      manager.start({
        duration: 60000,
        lang: "zh_CN"
      });
    },
    stopRecord: function stopRecord() {
      this.showInputing = false;
      manager.stop();
    },
    // 地址反向编码解析地址
    reverseGeocodingClick: function reverseGeocodingClick(latitude, longitude) {
      var QQMapWX = new _qqmapWxJssdkMin.default({
        //腾讯地图  需要用户自己去申请key
        key: app.globalData.qqMapKey
      });
      var that = this;
      QQMapWX.reverseGeocoder({
        location: {
          latitude: latitude,
          longitude: longitude
        },
        success: function success(res) {
          console.log(res, "addrRes");
          var city = res.result.address_component.city;
          var data = {
            content: city,
            source: "user",
            type: "hot_job"
          };
          that.send(data);
        },
        fail: function fail(res) {
          console.log(res);
        },
        complete: function complete(res) {
          console.log(res);
        }
      });
    },
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
    getphonenumber: function getphonenumber(e) {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _this, url;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this = _this4;
                _context.next = 3;
                return _this4.getOpenId();
              case 3:
                _this4.getPhoneData.open_id = _context.sent;
                if (e.detail.errMsg == 'getPhoneNumber:ok') {
                  url = "";
                  _this4.getPhoneData.code = e.detail.code;
                  url = "/auth/worker/wechat/mini/login";
                  _this.$request(url, _this4.getPhoneData, "POST").then(function (resp) {
                    if (resp.code == 0) {
                      var postMsg = {
                        content: resp.data.mobile,
                        source: "user",
                        type: "bind_mobile"
                      };
                      _this.send(postMsg);
                    }
                  });
                } else {
                  uni.showModal({
                    title: e.detail.errMsg
                  });
                }
              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    chooseWork: function chooseWork(obj, item) {
      console.log(obj, item);
    },
    changeScreen: function changeScreen() {
      this.showFullScreen = !this.showFullScreen;
      if (this.showFullScreen) {
        this.scrollHeight = app.globalData.systemHeight - 2 * this.subTabHeight - 2 * this.tabMargin - this.marginTop;
      } else {
        this.scrollHeight = app.globalData.systemHeight * 0.8 - this.tabMargin - 2 * this.subTabHeight;
      }
    },
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
                uni.authorize({
                  scope: 'scope.userLocation',
                  success: function success(res) {
                    console.log(res, 'success');
                  },
                  fail: function fail(err) {
                    _this.getSetting();
                  }
                });
                _context2.next = 9;
                return _this5.getHistory();
              case 9:
                _this5.historyList = _context2.sent;
                _this5.toScroll();
                _this5.creatConnect();
                _this5.initRecord();
                _this5.showChat = true;
              case 14:
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
        var url = "/ai/chat/record?id=" + _this.historyId;
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
        var url = "/ai/chat/record?id=" + this.historyId;
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
        source: "user",
        type: "get_job_detail"
      };
      this.send(data);
    },
    sendQuestion: function sendQuestion() {
      var _this = this;
      _this.curStrIndex = 0;
      if (!this.ques) {
        uni.showToast({
          icon: "none",
          title: "请输入您的问题"
        });
      } else {
        if (this.canSend) {
          this.canSend = false;
          var data = {
            content: this.ques,
            type: "str",
            source: "user"
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
        uni.showModal({
          content: '正在连接或者已经连接，请勿重复连接',
          showCancel: false
        });
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
        console.log('onOpen', res);
      });
      this.socketTask.onError(function (err) {
        _this9.connecting = false;
        _this9.connected = false;
        _this9.canSend = true;
        uni.hideLoading();
        uni.showModal({
          content: '连接失败，请稍后再试',
          showCancel: false
        });
        console.log('onError', err);
      });
      this.socketTask.onMessage(function (res) {
        var respone = JSON.parse(res.data);
        uni.hideLoading();
        console.log(respone, "respone");
        if (respone.code == 0) {
          _this.canSend = true;
          _this.placeHolder = "请输入您的问题";
          _this.toScroll();
          // _this.noInput()
          var len = respone.data.length;
          if (_this.enableSpeeking) {
            _this.formatResultStr(respone.data);
          }
          for (var i = 0; i < len; i++) {
            _this.qaList.push(respone.data[i]);
          }
          // _this.qaList.push({
          // 	content: "1111",
          // 	source: "system",
          // 	type: "str"
          // })

          // _this.close()
        } else {
          uni.showModal({
            title: respone.msg
          });
        }
      });
      this.socketTask.onClose(function (res) {
        uni.hideLoading();
        _this9.connected = false;
        _this9.socketTask = false;
        console.log('onClose', res);
        var data = {
          content: "链接已关闭，如需重新对话，请重新打开窗口。",
          source: "system",
          type: "str"
        };
        _this9.qaList.push(data);
      });
      console.log('task', this.socketTask);
    },
    // 间隔一定时间判断用户是否没有输入
    noInput: function noInput() {
      var _this = this;
      this.timer = setTimeout(function () {
        var data = {
          content: "ping",
          type: "check",
          source: "user"
        };
        _this.send(data);
      }, 30000);
    },
    formatResultStr: function formatResultStr(data) {
      var len = data.length;
      var str = "";
      for (var i = 0; i < len; i++) {
        if (data[i].type == "str" || data[i].type == "remind_resume") {
          str += data[i].content;
        }
        if (data[i].type == "job_recommend" || data[i].type == "hot_job") {
          var conLen = data[i].content.length;
          for (var j = 0; j < conLen; j++) {
            str += data[i].content[j].name;
          }
        }
        if (data[i].type == "job_detail") {
          for (key in data[i].content) {
            str += data[i].content[key];
          }
        }
      }
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
      clearTimeout(this.timer);
      this.socketTask.send({
        data: JSON.stringify(data),
        success: function success(res) {
          uni.showLoading({
            title: "思考中，请稍后..."
          });
          console.log(data, "data");
          if (data.type != "hot_job" && data.type != "check") {
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
        source: "user",
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
            source: "user",
            type: "str"
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
            var _key = "city" + k;
            _this11[_key] = _this11.cityArr[j][1].value;
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

/***/ 194:
/*!**********************************************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_miniprograme_new/components/ai_chat.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ai_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ai_chat.vue?vue&type=style&index=0&lang=scss& */ 195);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ai_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ai_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ai_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ai_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ai_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 195:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/langeng5.11/release/employee_miniprograme_new/components/ai_chat.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/ai_chat.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ai_chat-create-component',
    {
        'components/ai_chat-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(188))
        })
    },
    [['components/ai_chat-create-component']]
]);
