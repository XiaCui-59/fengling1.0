(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/checkin_list"],{

/***/ 128:
/*!****************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/agent_system/components/checkin_list.vue ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkin_list_vue_vue_type_template_id_07efe02b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkin_list.vue?vue&type=template&id=07efe02b& */ 129);
/* harmony import */ var _checkin_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkin_list.vue?vue&type=script&lang=js& */ 131);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _checkin_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _checkin_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _checkin_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkin_list.vue?vue&type=style&index=0&lang=scss& */ 133);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _checkin_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _checkin_list_vue_vue_type_template_id_07efe02b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _checkin_list_vue_vue_type_template_id_07efe02b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _checkin_list_vue_vue_type_template_id_07efe02b___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/checkin_list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 129:
/*!***********************************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/agent_system/components/checkin_list.vue?vue&type=template&id=07efe02b& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkin_list_vue_vue_type_template_id_07efe02b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./checkin_list.vue?vue&type=template&id=07efe02b& */ 130);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkin_list_vue_vue_type_template_id_07efe02b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkin_list_vue_vue_type_template_id_07efe02b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkin_list_vue_vue_type_template_id_07efe02b___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkin_list_vue_vue_type_template_id_07efe02b___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 130:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/langeng5.11/release/agent_system/components/checkin_list.vue?vue&type=template&id=07efe02b& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uniTable: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-table/components/uni-table/uni-table */ "uni_modules/uni-table/components/uni-table/uni-table").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-table/components/uni-table/uni-table.vue */ 223))
    },
    uniTr: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-table/components/uni-tr/uni-tr */ "uni_modules/uni-table/components/uni-tr/uni-tr").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-table/components/uni-tr/uni-tr.vue */ 230))
    },
    uniTh: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-table/components/uni-th/uni-th */ "uni_modules/uni-table/components/uni-th/uni-th").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-table/components/uni-th/uni-th.vue */ 237))
    },
    uniTd: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-table/components/uni-td/uni-td */ "uni_modules/uni-table/components/uni-td/uni-td").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-table/components/uni-td/uni-td.vue */ 244))
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
  var l0 = _vm.__map(_vm.list, function (item, index) {
    var $orig = _vm.__get_orig(item)
    var g0 =
      _vm.currentTab.value == "waiting-confirm" &&
      item.status != "signing_expired" &&
      item.status != "rejected"
        ? _vm.selectedArr.includes(item)
        : null
    var g1 = _vm.status.filter(function (el) {
      return el.value == item.status
    })
    return {
      $orig: $orig,
      g0: g0,
      g1: g1,
    }
  })
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 131:
/*!*****************************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/agent_system/components/checkin_list.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkin_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./checkin_list.vue?vue&type=script&lang=js& */ 132);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkin_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkin_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkin_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkin_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkin_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 132:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/langeng5.11/release/agent_system/components/checkin_list.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var searchBox = function searchBox() {
  Promise.all(/*! require.ensure | components/search_box */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/search_box")]).then((function () {
    return resolve(__webpack_require__(/*! @/components/search_box.vue */ 251));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var pageBox = function pageBox() {
  __webpack_require__.e(/*! require.ensure | components/paging_box */ "components/paging_box").then((function () {
    return resolve(__webpack_require__(/*! @/components/paging_box.vue */ 191));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  name: "checkin_list",
  data: function data() {
    return {
      timeStr: "上传",
      list: [],
      tabs: [{
        value: "",
        text: "全部"
      }, {
        value: "waiting-confirm",
        text: "待确认"
      }, {
        value: "confirmed",
        text: "已确认"
      }, {
        value: "abandoned",
        text: "已作废"
      }],
      status: [{
        value: "waiting_confirm",
        text: "待确认"
      }, {
        value: "confirmed",
        text: "已确认"
      }, {
        value: "abandoned",
        text: "已作废"
      }],
      pagination: {},
      showMask: false,
      showFirst: false,
      showSecond: false,
      allRise: 0,
      allDown: 0,
      seleAll: false,
      selectedIds: [],
      selectedIndex: [],
      currentTab: {
        value: "",
        text: "全部"
      },
      currentPage: 1,
      id: "",
      currentInfo: {
        "broker_company_name": "",
        "content": "",
        "contracted_num": 0,
        "employer_name": "",
        "arrival_time": "",
        "checkin_time": "",
        "id": 0,
        "is_employer_name_public": false,
        "name": "",
        "need_worker_num": 1,
        "pay_salary_setting": {
          "type": "",
          "daily": "",
          "weekly": "",
          "monthly": ""
        },
        "salary_settlement_type": "",
        "salary_unit_price": "",
        "work_address": "",
        "work_end_time": "",
        "work_start_time": "",
        "work_type": "",
        "work_type_code": "",
        "work_type_id": 0,
        "work_type_name": ""
      },
      searCheckin: "",
      searPro: "",
      searStart: "",
      searEnd: "",
      curCheckinDetail: {},
      mergeList: [],
      selectedArr: []
    };
  },
  components: {
    searchBox: searchBox,
    pageBox: pageBox
  },
  created: function created() {
    var _this2 = this;
    var paramArr = [];
    if (location.href.indexOf("?") != -1) {
      paramArr = location.href.split("?")[1].split("&");
    }
    for (var i = 0; i < paramArr.length; i++) {
      if (paramArr[i].indexOf("status") != -1) {
        (function () {
          var status = paramArr[i].split("=")[1];
          _this2.currentTab = _this2.tabs.filter(function (el) {
            return el.value == status;
          })[0];
        })();
      }
    }
    this.getList();
  },
  methods: {
    toNext: function toNext(e) {
      this.currentPage = e;
      this.resetSeleData();
      this.getList();
    },
    changeTab: function changeTab(item) {
      this.currentTab = item;
      this.setPageName({
        pageName: "checkin_list"
      }, "", item.value);
      this.resetSeleData();
      this.getList();
    },
    addToList: function addToList(item) {
      if (this.selectedArr.includes(item)) {
        this.selectedArr.splice(this.selectedArr.indexOf(item), 1);
      } else {
        this.selectedArr.push(item);
      }
      if (this.selectedArr.length == 0) {
        this.seleAll = false;
      }
      if (this.selectedArr.length == this.list.length) {
        this.seleAll = true;
      }
      var id = item.id;
      if (this.selectedIds.indexOf(id) == -1) {
        this.selectedIds.push(id);
      } else {
        this.selectedIds.splice(this.selectedIds.indexOf(id), 1);
      }
      if (this.selectedIds.length == this.list.length) {
        this.seleAll = true;
      } else {
        this.seleAll = false;
      }
      console.log(this.selectedArr);
    },
    resetSeleData: function resetSeleData() {
      this.selectedIds = [];
      this.selectedIndex = [];
      this.seleAll = false;
      this.selectedArr = [];
    },
    checkAll: function checkAll() {
      this.seleAll = !this.seleAll;
      if (this.seleAll) {
        var len = this.list.length;
        var arr = [];
        var itemArr = [];
        var indexArr = [];
        for (var i = 0; i < len; i++) {
          arr.push(this.list[i].id);
          indexArr.push(i);
          itemArr.push(this.list[i]);
        }
        this.selectedIds = arr;
        this.selectedIndex = indexArr;
        this.selectedArr = itemArr;
      } else {
        this.selectedIds = [];
        this.selectedIndex = [];
        this.selectedArr = [];
      }
      console.log(this.selectedArr);
    },
    navigate: function navigate(obj, id) {
      this.setPageName(obj, id);
    },
    viewRecord: function viewRecord(item) {
      var _this3 = this;
      var url = "/broker/attendance-record/" + item.id + "/details";
      this.$request(url).then(function (res) {
        if (res.code == 0) {
          _this3.curCheckinDetail = res.data;
          _this3.showMask = true;
          _this3.showFirst = true;
        }
      });
    },
    getList: function getList() {
      var _this4 = this;
      uni.showLoading({
        title: "努力加载中~"
      });
      var url = "/broker/attendance-records" + (!this.currentTab.value ? "" : "/" + this.currentTab.value) + "?record=" + this.searCheckin + "&project=" + this.searPro + "&upload_start_date=" + this.searStart + "&upload_end_date=" + this.searEnd + "&page=" + this.currentPage;
      this.$request(url, {}, "GET", this.header).then(function (res) {
        if (res.code == 0) {
          _this4.list = res.data.list;
          _this4.pagination = res.data.pagination;
        }
      });
    },
    handleSearch: function handleSearch(e) {
      this.searCheckin = e.checkinStr;
      this.searPro = e.projectName;
      this.searStart = e.startTime;
      this.searEnd = e.endTime;
      this.getList();
    },
    close: function close() {
      this.showMask = false;
      this.showFirst = false;
      this.showSecond = false;
      this.resetSeleData();
    },
    merge: function merge() {
      var _this5 = this;
      // 判断是否存在相同项目
      var proArr = [];
      var seleArrLen = this.selectedArr.length;
      for (var i = 0; i < seleArrLen; i++) {
        if (proArr.indexOf(this.selectedArr[i].project_id)) {
          proArr.push(this.selectedArr[i].project_id);
        }
      }
      if (proArr.length > 1) {
        uni.showModal({
          title: "请选择相同项目的考勤进行合并。",
          showCancel: false
        });
      } else {
        if (this.selectedIds.length < 1) {
          uni.showToast({
            title: "您还未勾选数据",
            icon: "error",
            duration: 2000
          });
        } else {
          // 考勤合并
          var data = {
            "ids": this.selectedIds
          };
          this.$request("/broker/attendance-record/merge", data, "POST").then(function (res) {
            if (res.code == 0) {
              _this5.showMask = true;
              _this5.showSecond = true;
              _this5.mergeList = res.data.list;
            }
          });
        }
      }
    },
    confirm: function confirm() {
      var _this = this;
      var data = {
        "ids": this.selectedIds
      };
      this.$request("/broker/generate-project-bill", data, "POST").then(function (res) {
        if (res.code == 0) {
          uni.showModal({
            title: "已成功生成账单，可前往账单管理-费用清单确认。",
            success: function success(resp) {
              if (resp.confirm) {
                _this.setPageName({
                  pageName: "cost_bill"
                });
                _this.$emit("getPageName", {
                  pageName: "cost_bill"
                });
              } else {
                _this.close();
                _this.getList();
              }
              _this.resetSeleData();
            }
          });
        }
      });
    },
    downLoad: function downLoad(url) {
      window.open(url);
    },
    invalid: function invalid(item) {
      if (!item) {
        if (this.selectedIds.length == 0) {
          uni.showToast({
            title: "没有选择数据",
            icon: "error",
            duration: 2000
          });
          return;
        }
      }
      var _this = this;
      var msg = !item ? "是否批量作废考勤记录？作废后不可恢复，请谨慎操作。" : "是否作废考勤记录：" + item.record_name + "？作废后不可恢复，请谨慎操作。";
      uni.showModal({
        title: msg,
        confirmText: "确定作废",
        confirmColor: "#f00",
        success: function success(resp) {
          if (resp.confirm) {
            var arr = [];
            var data;
            if (item) {
              arr.push(item.id);
              data = {
                "ids": arr
              };
            } else {
              data = {
                "ids": _this.selectedIds
              };
            }
            _this.$request("/broker/attendance-record/abandoned", data, "POST").then(function (res) {
              if (res.code == 0) {
                uni.showToast({
                  title: "作废成功",
                  duration: 2000,
                  icon: "none"
                });
                _this.resetSeleData();
                _this.getList();
              }
            });
          }
        }
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 133:
/*!**************************************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/agent_system/components/checkin_list.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkin_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./checkin_list.vue?vue&type=style&index=0&lang=scss& */ 134);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkin_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkin_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkin_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkin_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkin_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 134:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/langeng5.11/release/agent_system/components/checkin_list.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/checkin_list.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/checkin_list-create-component',
    {
        'components/checkin_list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(128))
        })
    },
    [['components/checkin_list-create-component']]
]);
