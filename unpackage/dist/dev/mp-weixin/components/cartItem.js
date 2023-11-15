"use strict";
const common_vendor = require("../common/vendor.js");
const store_cartInfoStore = require("../store/cartInfoStore.js");
if (!Array) {
  const _easycom_u_checkbox2 = common_vendor.resolveComponent("u-checkbox");
  const _easycom_u_checkbox_group2 = common_vendor.resolveComponent("u-checkbox-group");
  (_easycom_u_checkbox2 + _easycom_u_checkbox_group2)();
}
const _easycom_u_checkbox = () => "../uni_modules/uview-plus/components/u-checkbox/u-checkbox.js";
const _easycom_u_checkbox_group = () => "../uni_modules/uview-plus/components/u-checkbox-group/u-checkbox-group.js";
if (!Math) {
  (_easycom_u_checkbox + _easycom_u_checkbox_group)();
}
const _sfc_main = {
  __name: "cartItem",
  setup(__props) {
    let cartList = store_cartInfoStore.cartInfoStore();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(cartList).cartInfo, (item, index, i0) => {
          return {
            a: "e1c899d8-1-" + i0 + ",e1c899d8-0",
            b: item.imgUrl,
            c: common_vendor.t(item.title),
            d: index
          };
        }),
        b: common_vendor.p({
          name: "item.name",
          ["label-size"]: "14"
        }),
        c: common_vendor.p({
          placement: "column"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e1c899d8"], ["__file", "/Users/done/github/uniapp/miMall/components/cartItem.vue"]]);
wx.createComponent(Component);
