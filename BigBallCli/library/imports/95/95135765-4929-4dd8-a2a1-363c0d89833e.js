"use strict";
cc._RF.push(module, '95135dlSSlN2KKhNjwNiYM+', 'Utils');
// Script/Utils/Utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.ShowError = function (title) {
        wx.showToast({
            title: title,
            icon: 'error',
            duration: 2000
        });
    };
    Utils.ShowInfo = function (title) {
        wx.showToast({
            title: title,
            icon: 'none',
            duration: 2000
        });
    };
    Utils.ShowSuccess = function (title) {
        wx.showToast({
            title: title,
            icon: 'success',
            duration: 2000
        });
    };
    return Utils;
}());
exports.default = Utils;

cc._RF.pop();