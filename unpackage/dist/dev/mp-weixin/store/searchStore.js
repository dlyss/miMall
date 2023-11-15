"use strict";
const common_vendor = require("../common/vendor.js");
const useSearchStore = common_vendor.defineStore("searchWords", {
  state: () => {
    return { searchText: "" };
  }
  // state: () => ({ count: 0 })
  // actions: {
  // 	increment() {
  // 		this.count++;
  // 	},
  // },
});
exports.useSearchStore = useSearchStore;
