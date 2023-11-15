"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_checkbox2 = common_vendor.resolveComponent("u-checkbox");
  const _easycom_u_checkbox_group2 = common_vendor.resolveComponent("u-checkbox-group");
  (_easycom_u_checkbox2 + _easycom_u_checkbox_group2)();
}
const _easycom_u_checkbox = () => "../../uni_modules/uview-plus/components/u-checkbox/u-checkbox.js";
const _easycom_u_checkbox_group = () => "../../uni_modules/uview-plus/components/u-checkbox-group/u-checkbox-group.js";
if (!Math) {
  (NavigationBar + cartList + _easycom_u_checkbox + _easycom_u_checkbox_group)();
}
const NavigationBar = () => "../../components/NavigationBar.js";
const cartList = () => "../../components/cartItem.js";
const _sfc_main = {
  __name: "shopping",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          size: "12",
          label: "全选",
          name: "item.name",
          ["label-size"]: "14"
        }),
        b: common_vendor.p({
          placement: "column"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9ca6e162"], ["__file", "/Users/done/github/uniapp/miMall/pages/shopping/shopping.vue"]]);
wx.createPage(MiniProgramPage);
