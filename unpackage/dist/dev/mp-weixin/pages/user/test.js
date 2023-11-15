"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_up_input = common_vendor.resolveComponent("up-input");
  _component_up_input();
}
const _sfc_main = {
  __name: "test",
  setup(__props) {
    const value = common_vendor.ref("");
    const change = (e) => {
      console.log("change", e);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(change),
        b: common_vendor.o(($event) => value.value = $event),
        c: common_vendor.p({
          placeholder: "请输入内容",
          border: "surround",
          modelValue: value.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/done/github/uniapp/miMall/pages/user/test.vue"]]);
wx.createPage(MiniProgramPage);
