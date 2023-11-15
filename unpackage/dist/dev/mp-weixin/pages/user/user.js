"use strict";
const common_vendor = require("../../common/vendor.js");
const store_userInfoStore = require("../../store/userInfoStore.js");
if (!Array) {
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  _easycom_u_input2();
}
const _easycom_u_input = () => "../../uni_modules/uview-plus/components/u-input/u-input.js";
if (!Math) {
  (NavigationBar + _easycom_u_input)();
}
const NavigationBar = () => "../../components/NavigationBar.js";
const _sfc_main = {
  __name: "user",
  setup(__props) {
    let userInfo = store_userInfoStore.userInfoStore();
    let showType = common_vendor.ref(0);
    let cancelBack = () => {
      showType.value = 1;
      loginData.value = {
        loginName: "",
        loginPw: ""
      };
      regData.value = {
        regData: "",
        regPw: ""
      };
    };
    let regData = common_vendor.ref({
      regName: "",
      regPw: ""
    });
    let regUser = () => {
      if (!regData.value.regName) {
        common_vendor.index.showToast({
          title: "请输入账号"
        });
      }
      if (!regData.value.regPw) {
        common_vendor.index.showToast({
          title: "请输入密码"
        });
        return;
      }
      common_vendor.index.showToast({
        title: "注册中"
      });
      showType.value = 0;
      userInfo.userInfo.userName = regData.value.regName;
      return;
    };
    let loginData = common_vendor.ref({
      loginName: "",
      loginPw: ""
    });
    let loginUser = () => {
      if (!loginData.value.loginName) {
        common_vendor.index.showToast({
          title: "请输入账号"
        });
      }
      if (!loginData.value.loginPw) {
        common_vendor.index.showToast({
          title: "请输入密码"
        });
        return;
      }
      common_vendor.index.showToast({
        title: "登录中"
      });
      showType.value = 0;
      userInfo.userInfo.userName = loginData.value.loginName;
      return;
    };
    let logoutUser = () => {
      common_vendor.index.showModal({
        title: "提示",
        content: "是否要退出？",
        success: ({ confirm }) => {
          if (confirm) {
            userInfo.$reset();
            loginData.value = {
              userName: "",
              userPw: ""
            };
          }
        }
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(showType) === 0
      }, common_vendor.unref(showType) === 0 ? common_vendor.e({
        b: common_vendor.unref(userInfo).userInfo.userName
      }, common_vendor.unref(userInfo).userInfo.userName ? {
        c: common_vendor.t(common_vendor.unref(userInfo).userInfo.userName),
        d: common_vendor.o((...args) => common_vendor.unref(logoutUser) && common_vendor.unref(logoutUser)(...args))
      } : {
        e: common_vendor.o(($event) => common_vendor.isRef(showType) ? showType.value = 1 : showType = 1)
      }) : {}, {
        f: common_vendor.unref(showType) === 1
      }, common_vendor.unref(showType) === 1 ? {
        g: common_vendor.o(($event) => common_vendor.unref(loginData).loginName = $event),
        h: common_vendor.p({
          placeholder: "请输入账号",
          border: "none",
          clearable: true,
          modelValue: common_vendor.unref(loginData).loginName
        }),
        i: common_vendor.o(($event) => common_vendor.unref(loginData).loginPw = $event),
        j: common_vendor.p({
          placeholder: "请输入密码",
          border: "none",
          clearable: true,
          modelValue: common_vendor.unref(loginData).loginPw
        }),
        k: common_vendor.o((...args) => common_vendor.unref(loginUser) && common_vendor.unref(loginUser)(...args)),
        l: common_vendor.o(($event) => common_vendor.isRef(showType) ? showType.value = 2 : showType = 2)
      } : {}, {
        m: common_vendor.unref(showType) === 2
      }, common_vendor.unref(showType) === 2 ? {
        n: common_vendor.o(($event) => common_vendor.unref(regData).regName = $event),
        o: common_vendor.p({
          placeholder: "请输入账号",
          border: "none",
          clearable: true,
          modelValue: common_vendor.unref(regData).regName
        }),
        p: common_vendor.o(($event) => common_vendor.unref(regData).regPw = $event),
        q: common_vendor.p({
          type: "password",
          placeholder: "请输入密码",
          border: "none",
          clearable: true,
          modelValue: common_vendor.unref(regData).regPw
        }),
        r: common_vendor.o((...args) => common_vendor.unref(regUser) && common_vendor.unref(regUser)(...args)),
        s: common_vendor.o((...args) => common_vendor.unref(cancelBack) && common_vendor.unref(cancelBack)(...args))
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"], ["__file", "/Users/done/github/uniapp/miMall/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
