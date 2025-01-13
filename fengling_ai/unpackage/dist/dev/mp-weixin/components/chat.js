(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/chat"],{

/***/ 352:
/*!***********************************************************!*\
  !*** E:/项目文件/fengling1.0/fengling_ai/components/chat.vue ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_vue_vue_type_template_id_53e335da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.vue?vue&type=template&id=53e335da& */ 353);
/* harmony import */ var _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.vue?vue&type=script&lang=js& */ 355);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.vue?vue&type=style&index=0&lang=scss& */ 357);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 36);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chat_vue_vue_type_template_id_53e335da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chat_vue_vue_type_template_id_53e335da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _chat_vue_vue_type_template_id_53e335da___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 353:
/*!******************************************************************************************!*\
  !*** E:/项目文件/fengling1.0/fengling_ai/components/chat.vue?vue&type=template&id=53e335da& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_53e335da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=template&id=53e335da& */ 354);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_53e335da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_53e335da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_53e335da___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_53e335da___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 354:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/fengling1.0/fengling_ai/components/chat.vue?vue&type=template&id=53e335da& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    markdownRender: function () {
      return Promise.all(/*! import() | uni_modules/markdown-render/components/markdown-render/markdown-render */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/markdown-render/components/markdown-render/markdown-render")]).then(__webpack_require__.bind(null, /*! @/uni_modules/markdown-render/components/markdown-render/markdown-render.vue */ 473))
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
  var l0 = _vm.__map(_vm.historyList, function (item, index) {
    var $orig = _vm.__get_orig(item)
    var g0 = item.msg_type == "voice" ? Math.ceil(item.voice.second * 20) : null
    var g1 = item.msg_type == "voice" ? Math.ceil(item.voice.second) : null
    return {
      $orig: $orig,
      g0: g0,
      g1: g1,
    }
  })
  var g2 = _vm.historyList.length
  var g3 = _vm.qaList.length
  var l1 =
    g3 != 0
      ? _vm.__map(_vm.qaList, function (item, index) {
          var $orig = _vm.__get_orig(item)
          var g4 =
            item.msg_type == "text" && item.origin != "customer"
              ? index == _vm.qaList.length - 1 && _vm.answerContinue
              : null
          var g5 =
            item.msg_type == "voice" ? Math.ceil(item.voice.second * 20) : null
          var g6 =
            item.msg_type == "voice" ? Math.ceil(item.voice.second) : null
          var g7 = item.may_ask
            ? item.may_ask.length > 0 &&
              index == _vm.qaList.length - 1 &&
              !_vm.answerContinue
            : null
          var g8 = _vm.qaList.length
          var g9 = _vm.qaList.length
          var g10 = _vm.qaList.length
          return {
            $orig: $orig,
            g4: g4,
            g5: g5,
            g6: g6,
            g7: g7,
            g8: g8,
            g9: g9,
            g10: g10,
          }
        })
      : null
  if (!_vm._isMounted) {
    _vm.e0 = function ($event, askItem) {
      var _temp = arguments[arguments.length - 1].currentTarget.dataset,
        _temp2 = _temp.eventParams || _temp["event-params"],
        askItem = _temp2.askItem
      var _temp, _temp2
      $event.stopPropagation()
      return (function () {
        return _vm.sendMsg(askItem, "tip")
      })($event)
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        g2: g2,
        g3: g3,
        l1: l1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 355:
/*!************************************************************************************!*\
  !*** E:/项目文件/fengling1.0/fengling_ai/components/chat.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=script&lang=js& */ 356);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 356:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/fengling1.0/fengling_ai/components/chat.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _vuex = __webpack_require__(/*! vuex */ 41);
var _name$props$data$comp;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var cardKefu = function cardKefu() {
  __webpack_require__.e(/*! require.ensure | components/chat_card_kefu */ "components/chat_card_kefu").then((function () {
    return resolve(__webpack_require__(/*! @/components/chat_card_kefu.vue */ 484));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var cardRecharge = function cardRecharge() {
  __webpack_require__.e(/*! require.ensure | components/chat_card_recharge */ "components/chat_card_recharge").then((function () {
    return resolve(__webpack_require__(/*! @/components/chat_card_recharge.vue */ 491));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var app = getApp();
var _default = (_name$props$data$comp = {
  name: "welcome",
  props: ["top", "bottom", "historyList", "qaList", "scrollHeight", "answering", "greetingObj", "answerContinue", "scrollStr"],
  data: function data() {
    return {
      imgUrl: app.globalData.baseImageUrl,
      tipList: [{
        text: "我想找个长白班的工作。"
      }, {
        text: "请问哪些工作是提供吃住的？"
      }, {
        text: "有没有适合我的工作，轻松一点的。"
      }],
      historyId: 0,
      loadAllHistory: false,
      scrollView: "fenge_line",
      Audio: app.globalData.Audio,
      currentPlayType: "",
      currentPlayIndex: 0,
      currentContHeight: 0,
      freshing: false,
      trigger: false,
      cardDoubleClick: false,
      //防止卡片连续点击,
      showHand: true
    };
  },
  computed: _objectSpread({}, (0, _vuex.mapState)(["showInterviewCard", "inChannel", "channelId", "showChannelInterviewCard", "sureJobName", "sureJobId"])),
  components: {
    cardKefu: cardKefu,
    cardRecharge: cardRecharge
  },
  created: function created() {
    var _this2 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //音频停止事件
              _this2.Audio.onStop(function (e) {
                _this2.closeAnmition();
              });

              //音频播放结束事件
              _this2.Audio.onEnded(function (e) {
                _this2.closeAnmition();
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  watch: {
    // 深度监听list数组的变化
    qaList: {
      handler: function handler(newVal, oldVal) {
        var _this = this;
        this.showHand = true;
        this.getElementHeight();
        // 当最后一条消息是用户时，关闭面试卡片
        if (newVal[newVal.length - 1].origin == 'customer') {
          // this.closeInterviewCard()
        }
      },
      deep: true // 开启深度监听
    },
    currentContHeight: function currentContHeight(newVal) {
      var _this = this;
      console.log("currentContHeight改变了");
      // console.log("currentContHeight:", newVal)
      // _this.toScroll()
      if (this.answerContinue) {
        // 正在回答问题时高度变化滚动
        setTimeout(function () {
          _this.toScroll();
        }, 1000);
      }
    },
    // },
    scrollHeight: function scrollHeight(newVal) {
      console.log("新窗口高度：", newVal);
      this.toScroll();
    },
    answerContinue: function answerContinue(newVal) {
      console.log("answerContinue改变了");
      if (!newVal) {
        this.toScroll();
      }
    },
    answering: function answering(newVal) {
      console.log("answering改变了");
      if (newVal) {
        this.toScroll();
      }
    },
    scrollStr: function scrollStr(newVal) {
      console.log("scrollStr改变了");
      var _this = this;
      _this.scrollView = "";
      this.$nextTick(function () {
        _this.scrollView = newVal;
      });
    }
  }
}, (0, _defineProperty2.default)(_name$props$data$comp, "components", {}), (0, _defineProperty2.default)(_name$props$data$comp, "methods", {
  // ...mapMutations(["closeInterviewCard"]),
  getElementHeight: function getElementHeight() {
    var _this = this;
    var query = uni.createSelectorQuery().in(this);
    var idStr = "#cont" + (this.qaList.length - 1);
    query.select(idStr).boundingClientRect(function (data) {
      if (data) {
        _this.currentContHeight = data.height;
      }
    }).exec();
  },
  setScrollHeight: function setScrollHeight() {
    this.$emit("setScrollHeight");
  },
  closeHand: function closeHand() {
    this.showHand = false;
  },
  refreshRestore: function refreshRestore() {
    this.freshing = false;
    this.trigger = false;
    console.log("freshing/trigger：", this.freshing, this.trigger);
  },
  getMoreHistory: function getMoreHistory() {
    if (this.freshing) return;
    this.freshing = true;
    this.trigger = true;
    this.$emit("moreHis");
  },
  clickSureCard: function clickSureCard(item) {
    var _this3 = this;
    var _this = this;
    if (this.cardDoubleClick) {
      uni.showToast({
        title: "请勿连续点击",
        icon: "error",
        duration: 2000
      });
      return;
    }
    this.cardDoubleClick = true;
    setTimeout(function () {
      _this.cardDoubleClick = false;
    }, 2000);
    var url = "/api/chat/job/" + item.card.job_id + "/is-interviewed";
    this.$aiRequest(url).then(function (res) {
      if (res.code == 0) {
        if (res.data.is_interviewed) {
          uni.showToast({
            title: "该职位您已面试",
            icon: "error",
            duration: 2000
          });
        } else {
          var obj = {
            type: "interview",
            job_id: item.card.job_id
          };
          _this3.$emit("tocall", obj);
        }
      }
    });
  },
  sendMsg: function sendMsg(msg, type) {
    var obj = {
      msg: msg,
      type: type
    };
    console.log("chat obj", obj);
    this.$emit("sendMsg", obj);
  },
  //控制播放还是暂停音频文件
  handleAudio: function handleAudio(type, item, index) {
    this.currentPlayType = type;
    this.currentPlayIndex = index;
    // this.playAudio(item)
    this.Audio.paused ? this.playAudio(item) : this.stopAudio(item);
  },
  //播放音频
  playAudio: function playAudio(item) {
    var _this4 = this;
    this.Audio.src = item.voice.media.url;
    this.Audio.id = item.id;
    this.Audio.play();
    if (this.currentPlayType == "his") {
      this.historyList.forEach(function (el, index) {
        if (el.msg_type == "voice") {
          if (index == _this4.currentPlayIndex) {
            _this4.historyList[_this4.currentPlayIndex].voice.anmitionPlay = true;
          } else {
            _this4.historyList[index].voice.anmitionPlay = false;
          }
        }
      });
      this.qaList.forEach(function (el, index) {
        if (el.msg_type == "voice") {
          _this4.qaList[index].voice.anmitionPlay = false;
        }
      });
    } else {
      this.qaList.forEach(function (el, index) {
        if (el.msg_type == "voice") {
          if (index == _this4.currentPlayIndex) {
            _this4.qaList[_this4.currentPlayIndex].voice.anmitionPlay = true;
          } else {
            _this4.qaList[index].voice.anmitionPlay = false;
          }
        }
      });
      this.historyList.forEach(function (el, index) {
        if (el.msg_type == "voice") {
          _this4.historyList[index].voice.anmitionPlay = false;
        }
      });
    }

    // item.anmitionPlay = true;
  },
  //停止音频
  stopAudio: function stopAudio(item) {
    var _this5 = this;
    if (this.currentPlayType == "his") {
      this.historyList[this.currentPlayIndex].voice.anmitionPlay = false;
      this.qaList.forEach(function (el, index) {
        if (el.msg_type == "voice") {
          _this5.qaList[index].voice.anmitionPlay = false;
        }
      });
    } else {
      this.qaList[this.currentPlayIndex].voice.anmitionPlay = false;
      this.historyList.forEach(function (el, index) {
        if (el.msg_type == "voice") {
          _this5.historyList[index].voice.anmitionPlay = false;
        }
      });
    }
    // item.anmitionPlay = false;
    this.Audio.src = '';
    this.Audio.stop();
  },
  stopCurAudio: function stopCurAudio() {
    this.Audio.src = '';
    this.Audio.stop();
  },
  //关闭动画
  closeAnmition: function closeAnmition() {
    var _this6 = this;
    var id = this.Audio.id;
    var item;
    if (this.currentPlayType == "his") {
      this.historyList.forEach(function (el, index) {
        if (el.msg_type == "voice") {
          if (el.id == id) {
            _this6.historyList[index].voice.anmitionPlay = false;
          }
        }
      });
      // item = this.historyList.find(it => it.id == id);
    } else {
      this.qaList.forEach(function (el, index) {
        if (el.msg_type == "voice") {
          if (el.id == id) {
            _this6.qaList[index].voice.anmitionPlay = false;
          }
        }
      });
      // item = this.qaList.find(it => it.id == id);
    }

    this.currentPlayType = "";
    this.currentPlayIndex = 0;
    // item.anmitionPlay = false;
  },
  formatResultStr: function formatResultStr(str) {
    if (str) {
      this.speeking(str);
    }
  },
  toCall: function toCall() {
    var _this = this;
    if (this.cardDoubleClick) {
      uni.showToast({
        title: "请勿连续点击",
        icon: "error",
        duration: 2000
      });
      return;
    }
    this.cardDoubleClick = true;
    setTimeout(function () {
      _this.cardDoubleClick = false;
    }, 2000);
    var obj = {
      type: "interview",
      job_id: this.sureJobId
    };
    this.$emit("tocall", obj);
    // uni.navigateTo({
    // 	url: "/pages/phone_call/phone_call?status=interview&job_id=" + this.sureJobId
    // })
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
  showTrans: function showTrans(item, type) {
    if (item.showTranlate) {
      return;
    }
    if (type == "his") {
      this.historyList.forEach(function (el, index) {
        if (el.id == item.id) {
          el.showTranIcon = true;
        }
      });
    } else {
      this.qaList.forEach(function (el, index) {
        if (el.id == item.id) {
          el.showTranIcon = true;
        }
      });
    }
  },
  startTrans: function startTrans(item, type) {
    var _this = this;
    item.showTranIcon = false;
    if (type == "his") {
      this.historyList.forEach(function (el, index) {
        if (el.id == item.id) {
          el.showTranlate = true;
        }
      });
    } else {
      if (!item.showTranlate) {
        _this.qaList.forEach(function (el, index) {
          if (el.id == item.id) {
            el.showTransing = true;
          }
        });
        var url = "/api/chat/voice/" + item.id + "/recognize/result";
        var t = setInterval(function () {
          _this.$aiRequest(url).then(function (res) {
            console.log(res, "查询结果");
            if (res.code == 0) {
              if (res.data.content) {
                item.content = res.data.content;
                _this.qaList.forEach(function (el, index) {
                  if (el.id == item.id) {
                    el.showTranlate = true;
                    el.showTransing = false;
                  }
                });
                clearInterval(t);
              }
            } else {
              clearInterval(t);
              uni.hideLoading();
            }
          });
        }, 1000);
      }
    }
  },
  toScroll: function toScroll() {
    var _this7 = this;
    var _this = this;
    _this.scrollView = "";
    this.$nextTick(function () {
      if (_this7.answering) {
        console.log("正在回答");
        _this.scrollView = "answering";
      } else {
        if (_this.qaList.length == 0) {
          _this.scrollView = "fenge_line";
          // var num = _this.historyList.length;
          // if (num > 0) {
          // 	setTimeout(function() {
          // 		_this.scrollView = "his" + (_this.historyList.length - 1)
          // 		uni.hideLoading()
          // 	}, 500)

          // }
        } else {
          // console.log("qalist长度大于0")
          _this.scrollView = "continue";
          uni.hideLoading();
          // var num2 = _this.qaList.length - 1;
          // setTimeout(function() {
          // 	_this.scrollView = "qa" + num2
          // 	uni.hideLoading()
          // }, 500)
        }
      }
    });
  }
}), _name$props$data$comp);
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 357:
/*!*********************************************************************************************!*\
  !*** E:/项目文件/fengling1.0/fengling_ai/components/chat.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=style&index=0&lang=scss& */ 358);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 358:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/fengling1.0/fengling_ai/components/chat.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/chat.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/chat-create-component',
    {
        'components/chat-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(352))
        })
    },
    [['components/chat-create-component']]
]);
