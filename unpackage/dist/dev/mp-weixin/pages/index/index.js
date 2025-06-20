"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const popup = common_vendor.ref(null);
    const toDoItem = common_vendor.ref("");
    const handleEnter = () => {
      common_vendor.index.__f__("log", "at pages/index/index.vue:40", toDoItem.value);
      toDoItem.value = "";
    };
    const addItem = () => {
      popup.value.open("top");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(common_vendor.dayjs)(/* @__PURE__ */ new Date()).format("YYYY年MM月DD日")),
        b: common_vendor.o(handleEnter),
        c: toDoItem.value,
        d: common_vendor.o(($event) => toDoItem.value = $event.detail.value),
        e: common_vendor.f(5, (item, index, i0) => {
          return {
            a: common_vendor.t(index)
          };
        }),
        f: common_vendor.o(addItem),
        g: common_vendor.p({
          type: "plusempty",
          size: "30",
          color: "#fff"
        }),
        h: common_vendor.sr(popup, "1cf27b2a-1", {
          "k": "popup"
        }),
        i: common_vendor.p({
          type: "bottom",
          ["border-radius"]: "10px 10px 0 0"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
