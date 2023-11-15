"use strict";
const common_vendor = require("../common/vendor.js");
let $request = function(url, data, method = "GET", header = {}) {
  return new Promise((resolve) => {
    common_vendor.index.request({
      url,
      method,
      header,
      success: ({ data: data2 }) => {
        resolve(data2);
      }
    });
  });
};
common_vendor.index.$request = $request;
common_vendor.index.$get = function(url, data, header = {}) {
  return $request(url, data, "GET");
};
common_vendor.index.$post = function(url, data, header = {}) {
  return $request(url, data, "POST");
};
