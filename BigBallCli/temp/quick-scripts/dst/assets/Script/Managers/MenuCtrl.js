
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Managers/MenuCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
    MenuCtrl.prototype.onLoad = function () {
        var uid = cc.sys.localStorage.getItem('uid');
        if (uid == undefined || uid == null || uid == "" || uid == 0) {
            this.saveUserInfo();
        }
        else {
            // Utils.ShowInfo("用户ID:" + uid.toString());
        }
    };
    MenuCtrl.prototype.saveUserInfo = function (action) {
        wx.getUserProfile({
            desc: "获取您的昵称及头像",
            success: function (res) {
                UserApi_1.default.GetByName(res.userInfo.nickName, {
                    success: function (user) {
                        console.log("success");
                        console.log(user);
                        cc.sys.localStorage.setItem("uid", user.id);
                        cc.sys.localStorage.setItem("nickName", user.name);
                        cc.sys.localStorage.setItem("avatarUrl", res.userInfo.avatarUrl);
                        if (action)
                            action.Do();
                    },
                    fail: function (err) {
                        console.log("error");
                        console.log(err);
                        // 失败时表示未找到用户，此时创建一个新用户
                        UserApi_1.default.Add(res.userInfo.nickName, {
                            success: function (user) {
                                console.log(user.id);
                                cc.sys.localStorage.setItem("uid", user.id);
                                cc.sys.localStorage.setItem("nickName", user.name);
                                cc.sys.localStorage.setItem("avatarUrl", res.userInfo.avatarUrl);
                                if (action)
                                    action.Do();
                            },
                            fail: function (err) {
                                Utils_1.default.ShowError("用户创建失败");
                            }
                        });
                    }
                });
            },
            fail: function (e) {
                Utils_1.default.ShowError(e.errMsg);
            }
        });
    };
    MenuCtrl.prototype.startGame = function () {
        var uid = cc.sys.localStorage.getItem('uid');
        if (uid == undefined || uid == null || uid == "" || uid == 0) {
            this.saveUserInfo({
                Do: function () {
                    cc.director.loadScene("MainSence", null);
                }
            });
        }
        else {
            cc.director.loadScene("MainSence", null);
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2Vyc1xcTWVudUN0cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQXFDO0FBQ3JDLHdDQUFtQztBQUU3QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQU8xQztJQUFzQyw0QkFBWTtJQUFsRDs7SUE4RUEsQ0FBQztJQTVFRyx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksR0FBRyxJQUFJLFNBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRTtZQUMxRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkI7YUFBTTtZQUNILDRDQUE0QztTQUMvQztJQUNMLENBQUM7SUFFRCwrQkFBWSxHQUFaLFVBQWEsTUFBZTtRQUN4QixFQUFFLENBQUMsY0FBYyxDQUFDO1lBQ2QsSUFBSSxFQUFFLFdBQVc7WUFDakIsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDVCxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTtvQkFDckMsT0FBTyxFQUFFLFVBQUMsSUFBSTt3QkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNsQixFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDNUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFD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RWpEO2tCQTlFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyQXBpIGZyb20gJy4uL0FwaS9Vc2VyQXBpJztcclxuaW1wb3J0IFV0aWxzIGZyb20gJy4uL1V0aWxzL1V0aWxzJztcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuaW50ZXJmYWNlIEFjdGlvbiB7XHJcbiAgICBEbygpOiB2b2lkO1xyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51Q3RybCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGxldCB1aWQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VpZCcpO1xyXG4gICAgICAgIGlmICh1aWQgPT0gdW5kZWZpbmVkIHx8IHVpZCA9PSBudWxsIHx8IHVpZCA9PSBcIlwiIHx8IHVpZCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZVVzZXJJbmZvKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVXRpbHMuU2hvd0luZm8oXCLnlKjmiLdJRDpcIiArIHVpZC50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVVzZXJJbmZvKGFjdGlvbj86IEFjdGlvbikge1xyXG4gICAgICAgIHd4LmdldFVzZXJQcm9maWxlKHtcclxuICAgICAgICAgICAgZGVzYzogXCLojrflj5bmgqjnmoTmmLXnp7Dlj4rlpLTlg49cIixcclxuICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgVXNlckFwaS5HZXRCeU5hbWUocmVzLnVzZXJJbmZvLm5pY2tOYW1lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHVzZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidWlkXCIsIHVzZXIuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJuaWNrTmFtZVwiLCB1c2VyLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhdmF0YXJVcmxcIiwgcmVzLnVzZXJJbmZvLmF2YXRhclVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb24pIGFjdGlvbi5EbygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlpLHotKXml7booajnpLrmnKrmib7liLDnlKjmiLfvvIzmraTml7bliJvlu7rkuIDkuKrmlrDnlKjmiLdcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlckFwaS5BZGQocmVzLnVzZXJJbmZvLm5pY2tOYW1lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAodXNlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVpZFwiLCB1c2VyLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJuaWNrTmFtZVwiLCB1c2VyLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF2YXRhclVybFwiLCByZXMudXNlckluZm8uYXZhdGFyVXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uKSBhY3Rpb24uRG8oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXRpbHMuU2hvd0Vycm9yKFwi55So5oi35Yib5bu65aSx6LSlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIFV0aWxzLlNob3dFcnJvcihlLmVyck1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgbGV0IHVpZCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndWlkJyk7XHJcbiAgICAgICAgaWYgKHVpZCA9PSB1bmRlZmluZWQgfHwgdWlkID09IG51bGwgfHwgdWlkID09IFwiXCIgfHwgdWlkID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zYXZlVXNlckluZm8oe1xyXG4gICAgICAgICAgICAgICAgRG86ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJNYWluU2VuY2VcIiwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1haW5TZW5jZVwiLCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcXVpdEdhbWUoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hhcmVHYW1lKCkge1xyXG4gICAgICAgIFV0aWxzLlNob3dJbmZvKFwi5q2j5Zyo5Yqq5Yqb5byA5Y+R5LitLi4uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG1lbnVTY2VuZSgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJNZW51U2VuY2VcIiwgbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1JhbmsoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiUmFua1NlbmNlXCIsIG51bGwpO1xyXG4gICAgfVxyXG4gICBcclxufVxyXG4iXX0=