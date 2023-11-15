"use strict";
const common_vendor = require("../common/vendor.js");
const cartInfoStore = common_vendor.defineStore("cartInfoStore", {
  state: () => {
    return { cartInfo: [] };
  },
  actions: {
    addCart(item) {
      this.cartInfo.push(item);
    },
    removeCart(id) {
      this.cartInfo.filter((item) => item.id != id);
    }
  }
  // state: () => ({ count: 0 })
  // actions: {
  // 	increment() {
  // 		this.count++;
  // 	},
  // },
});
exports.cartInfoStore = cartInfoStore;
