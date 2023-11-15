"use strict";
const common_vendor = require("../../common/vendor.js");
const config_requestUrlConfig = require("../../config/requestUrlConfig.js");
const store_cartInfoStore = require("../../store/cartInfoStore.js");
if (!Array) {
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  (_easycom_u_swiper2 + _easycom_u_icon2)();
}
const _easycom_u_swiper = () => "../../uni_modules/uview-plus/components/u-swiper/u-swiper.js";
const _easycom_u_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  (NavigationBar + _easycom_u_swiper + _easycom_u_icon)();
}
const NavigationBar = () => "../../components/NavigationBar.js";
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    let itemDetail = common_vendor.ref({});
    let getItemDetail = async (cateName, id, itemDetail2) => {
      let ret = await common_vendor.index.$get(config_requestUrlConfig.indexItemLsTopUrl + cateName + "/" + id);
      console.log(ret);
      itemDetail2.value = ret;
    };
    common_vendor.onLoad(({
      cateName,
      id
    }) => {
      getItemDetail(cateName, id, itemDetail);
    });
    let apiImgLs = common_vendor.ref([]);
    let getApiImg = async () => {
      let data = await common_vendor.index.$get(config_requestUrlConfig.indexSwiperApiUrl);
      apiImgLs.value = data.map((r) => r.resolutions.original.url);
    };
    common_vendor.onMounted(() => {
      getApiImg();
    });
    let goLastPage = () => {
      common_vendor.index.navigateBack();
    };
    let cartInfo = store_cartInfoStore.cartInfoStore();
    let addCart = (item) => {
      cartInfo.addCart({ title: item.title, imgUrl: item.image_url, id: item.id });
      console.log(cartInfo.cartInfo);
      common_vendor.index.showToast({
        title: "添加成功"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          height: "200",
          list: common_vendor.unref(apiImgLs)
        }),
        b: common_vendor.t(common_vendor.unref(itemDetail).title),
        c: common_vendor.t(common_vendor.unref(itemDetail).summary),
        d: common_vendor.t(common_vendor.unref(itemDetail).id),
        e: common_vendor.t(common_vendor.unref(itemDetail).id),
        f: common_vendor.o(($event) => common_vendor.unref(addCart)(common_vendor.unref(itemDetail))),
        g: common_vendor.o(common_vendor.unref(goLastPage)),
        h: common_vendor.p({
          color: "#ff6700",
          size: "28",
          name: "arrow-left"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-eca06f3c"], ["__file", "/Users/done/github/uniapp/miMall/pages/detail/detail.vue"]]);
wx.createPage(MiniProgramPage);
