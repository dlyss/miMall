"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  props: {
    totalItems: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      default: 10
    }
  },
  setup(props) {
    const currentPage = common_vendor.ref(1);
    const totalPages = common_vendor.computed(() => Math.ceil(props.totalItems / props.itemsPerPage));
    const next = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };
    const prev = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };
    return {
      currentPage,
      totalPages,
      next,
      prev
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $setup.prev && $setup.prev(...args)),
    b: $setup.currentPage === 1,
    c: common_vendor.t($setup.currentPage),
    d: common_vendor.t($setup.totalPages),
    e: common_vendor.o((...args) => $setup.next && $setup.next(...args)),
    f: $setup.currentPage === $setup.totalPages
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-155c7b3d"], ["__file", "/Users/done/github/uniapp/miMall/components/pagination.vue"]]);
wx.createComponent(Component);
