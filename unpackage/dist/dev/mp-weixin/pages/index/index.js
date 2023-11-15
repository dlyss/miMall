"use strict";
const common_vendor = require("../../common/vendor.js");
const config_requestUrlConfig = require("../../config/requestUrlConfig.js");
if (!Array) {
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  _easycom_u_swiper2();
}
const _easycom_u_swiper = () => "../../uni_modules/uview-plus/components/u-swiper/u-swiper.js";
if (!Math) {
  (NavigationBar + _easycom_u_swiper + itemList)();
}
const NavigationBar = () => "../../components/NavigationBar.js";
const itemList = () => "../../components/itemList.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let apiImgLs = common_vendor.ref([]);
    let getApiImg = async () => {
      let data = await common_vendor.index.$get(config_requestUrlConfig.indexSwiperApiUrl);
      apiImgLs.value = data.map((r) => r.resolutions.original.url);
    };
    let itemLsTop = common_vendor.ref([]);
    let getItemLsTop = async (category, limit, list) => {
      let {
        results
      } = await common_vendor.index.$get(config_requestUrlConfig.indexItemLsTopUrl + category, {
        limit
      });
      list.value = results;
    };
    let itemLsMiddle = common_vendor.ref([]);
    let itemLsBottom = common_vendor.ref([]);
    common_vendor.onMounted(() => {
      getApiImg();
      getItemLsTop("articles", 20, itemLsTop);
      getItemLsTop("blogs", 20, itemLsMiddle);
      getItemLsTop("reports", 20, itemLsBottom);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          height: "200",
          list: common_vendor.unref(apiImgLs)
        }),
        b: common_vendor.p({
          cateName: "articles",
          itemList: common_vendor.unref(itemLsTop)
        }),
        c: common_vendor.p({
          cateName: "blogs",
          itemList: common_vendor.unref(itemLsMiddle)
        }),
        d: common_vendor.p({
          cateName: "reports",
          itemList: common_vendor.unref(itemLsBottom)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/done/github/uniapp/miMall/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
