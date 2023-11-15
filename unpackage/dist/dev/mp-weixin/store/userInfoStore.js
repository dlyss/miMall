"use strict";
const common_vendor = require("../common/vendor.js");
const userInfoStore = common_vendor.defineStore("userInfoStore", {
  state: () => {
    return { userInfo: {
      userName: "",
      userPw: ""
    } };
  }
  // state: () => ({ count: 0 })
  // actions: {
  // 	increment() {
  // 		this.count++;
  // 	},
  // },
});
exports.userInfoStore = userInfoStore;
