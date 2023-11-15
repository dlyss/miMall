"use strict";
const common_vendor = require("../../common/vendor.js");
const config_requestUrlConfig = require("../../config/requestUrlConfig.js");
if (!Math) {
  (NavigationBar + itemList + pagination)();
}
const NavigationBar = () => "../../components/NavigationBar.js";
const itemList = () => "../../components/itemList.js";
const pagination = () => "../../components/pagination.js";
const _sfc_main = {
  __name: "search",
  setup(__props) {
    let activeIndex = common_vendor.ref(0);
    let cateList = common_vendor.ref([]);
    let cateName = common_vendor.ref();
    let loadCateList = () => {
      let cateInfo = [
        {
          "name": "太空文章",
          "eName": "articles",
          "id": 1
        },
        {
          "name": "太空博客",
          "eName": "blogs",
          "id": 2
        },
        {
          "name": "太空信息",
          "eName": "reports",
          "id": 3
        }
      ];
      cateInfo.unshift({
        "name": "全部",
        "eName": "all",
        "id": 0
      });
      cateList.value = cateInfo;
    };
    let rightList = common_vendor.ref([]);
    let loadRightList = async (categoryItem, limit, list, index) => {
      activeIndex.value = index;
      cateName = categoryItem.eName;
      console.log(cateName);
      let {
        results
      } = await common_vendor.index.$get(config_requestUrlConfig.indexItemLsTopUrl + categoryItem.eName, {
        limit
      });
      list.value = results;
    };
    common_vendor.onMounted(() => {
      {
        loadCateList();
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(cateList), (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: index === common_vendor.unref(activeIndex) ? 1 : "",
            c: common_vendor.o(($event) => common_vendor.unref(loadRightList)(item, 20, common_vendor.unref(rightList), index), index),
            d: index
          };
        }),
        b: common_vendor.p({
          cateName: common_vendor.unref(cateName),
          itemList: common_vendor.unref(rightList).value
        }),
        c: common_vendor.p({
          totalItems: 20,
          itemsPerPage: 10,
          initialPage: 1
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c10c040c"], ["__file", "/Users/done/github/uniapp/miMall/pages/search/search.vue"]]);
wx.createPage(MiniProgramPage);
