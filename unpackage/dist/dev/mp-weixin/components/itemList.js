"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _easycom_u_grid_item2 = common_vendor.resolveComponent("u-grid-item");
  const _easycom_u_grid2 = common_vendor.resolveComponent("u-grid");
  (_easycom_u_grid_item2 + _easycom_u_grid2)();
}
const _easycom_u_grid_item = () => "../uni_modules/uview-plus/components/u-grid-item/u-grid-item.js";
const _easycom_u_grid = () => "../uni_modules/uview-plus/components/u-grid/u-grid.js";
if (!Math) {
  (item + _easycom_u_grid_item + _easycom_u_grid)();
}
const item = () => "./item.js";
const _sfc_main = {
  __name: "itemList",
  props: ["itemList", "cateName"],
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.itemList, (item2, index, i0) => {
          return {
            a: "e6dd6a3c-2-" + i0 + "," + ("e6dd6a3c-1-" + i0),
            b: common_vendor.p({
              cateName: __props.cateName,
              item: item2
            }),
            c: index,
            d: "e6dd6a3c-1-" + i0 + ",e6dd6a3c-0"
          };
        }),
        b: common_vendor.p({
          border: false,
          col: "3"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/done/github/uniapp/miMall/components/itemList.vue"]]);
wx.createComponent(Component);
