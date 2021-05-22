"use strict";
cc._RF.push(module, 'ec832ErHy5MaJYUO+d69Kru', 'MenuCtrl');
// Script/Managers/MenuCtrl.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserApi_1 = require("../Api/UserApi");
var Utils_1 = require("../Utils/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MenuCtrl = /** @class */ (function (_super) {
    __extends(MenuCtrl, _super);
    function MenuCtrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuCtrl.prototype.saveUserInfo = function (username, avatarUrl, action) {
        UserApi_1.default.GetByName(username, {
            success: function (user) {
                // console.log("success");
                // console.log(user);
                cc.sys.localStorage.setItem("uid", user.id);
                cc.sys.localStorage.setItem("nickName", user.name);
                cc.sys.localStorage.setItem("avatarUrl", user.avatarUrl);
                if (action)
                    action.Do();
            },
            fail: function (err) {
                // console.log("error");
                // console.log(err);
                // 失败时表示未找到用户，此时创建一个新用户
                UserApi_1.default.Add(username, avatarUrl, {
                    success: function (user) {
                        // console.log(user.id);
                        cc.sys.localStorage.setItem("uid", user.id);
                        cc.sys.localStorage.setItem("nickName", user.name);
                        cc.sys.localStorage.setItem("avatarUrl", user.avatarUrl);
                        if (action)
                            action.Do();
                    },
                    fail: function (err) {
                        Utils_1.default.ShowError("用户创建失败");
                    }
                });
            }
        });
    };
    MenuCtrl.prototype.startGame = function () {
        var _this = this;
        var nickName = cc.sys.localStorage.getItem('nickName');
        if (nickName == undefined || nickName == null || nickName == "") {
            wx.getUserProfile({
                desc: "获取您的昵称及头像",
                success: function (res) {
                    _this.saveUserInfo(res.userInfo.nickName, res.userInfo.avatarUrl, {
                        Do: function () {
                            cc.director.loadScene("MainSence", null);
                        }
                    });
                },
                fail: function (e) {
                    Utils_1.default.ShowError(e.errMsg);
                }
            });
        }
        else {
            var avatarUrl = cc.sys.localStorage.getItem('avatarUrl');
            this.saveUserInfo(nickName, avatarUrl, {
                Do: function () {
                    cc.director.loadScene("MainSence", null);
                }
            });
        }
    };
    MenuCtrl.prototype.quitGame = function () {
        cc.director.end();
    };
    MenuCtrl.prototype.shareGame = function () {
        Utils_1.default.ShowInfo("正在努力开发中...");
    };
    MenuCtrl.prototype.menuScene = function () {
        cc.director.loadScene("MenuSence", null);
    };
    MenuCtrl.prototype.showRank = function () {
        cc.director.loadScene("RankSence", null);
    };
    MenuCtrl = __decorate([
        ccclass
    ], MenuCtrl);
    return MenuCtrl;
}(cc.Component));
exports.default = MenuCtrl;

cc._RF.pop();