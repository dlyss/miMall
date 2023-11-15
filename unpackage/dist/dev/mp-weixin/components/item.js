"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "item",
  props: ["item", "cateName"],
  setup(__props) {
    let goDetail = (cateName, id) => {
      common_vendor.index.navigateTo({
        url: "/pages/detail/detail?cateName=" + cateName + "&id=" + id
      });
    };
    return (_ctx, _cache) => {
      return {
        a: __props.item.image_url,
        b: common_vendor.t(__props.item.title),
        c: common_vendor.t(__props.item.id),
        d: common_vendor.o(($event) => common_vendor.unref(goDetail)(__props.cateName, __props.item.id))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/done/github/uniapp/miMall/components/item.vue"]]);
wx.createComponent(Component);
