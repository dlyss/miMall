"use strict";
const common_vendor = require("../common/vendor.js");
const store_searchStore = require("../store/searchStore.js");
if (!Array) {
  const _easycom_u_search2 = common_vendor.resolveComponent("u-search");
  _easycom_u_search2();
}
const _easycom_u_search = () => "../uni_modules/uview-plus/components/u-search/u-search.js";
if (!Math) {
  _easycom_u_search();
}
const _sfc_main = {
  __name: "NavigationBar",
  setup(__props) {
    let searchStore = store_searchStore.useSearchStore();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => common_vendor.unref(searchStore).searchText = $event),
        b: common_vendor.p({
          placeholder: "请输入搜索内容",
          showAction: false,
          bgColor: "#fff",
          modelValue: common_vendor.unref(searchStore).searchText
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e29e7744"], ["__file", "/Users/done/github/uniapp/miMall/components/NavigationBar.vue"]]);
wx.createComponent(Component);
