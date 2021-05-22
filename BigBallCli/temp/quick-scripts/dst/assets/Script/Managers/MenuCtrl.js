
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2Vyc1xcTWVudUN0cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQXFDO0FBQ3JDLHdDQUFtQztBQUU3QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQU8xQztJQUFzQyw0QkFBWTtJQUFsRDs7SUEwRUEsQ0FBQztJQXhFRywrQkFBWSxHQUFaLFVBQWEsUUFBZ0IsRUFBRSxTQUFpQixFQUFFLE1BQWU7UUFDN0QsaUJBQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3hCLE9BQU8sRUFBRSxVQUFDLElBQUk7Z0JBQ1YsMEJBQTBCO2dCQUMxQixxQkFBcUI7Z0JBQ3JCLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM1QyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3pELElBQUksTUFBTTtvQkFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDNUIsQ0FBQztZQUNELElBQUksRUFBRSxVQUFDLEdBQUc7Z0JBQ04sd0JBQXdCO2dCQUN4QixvQkFBb0I7Z0JBQ3BCLHVCQUF1QjtnQkFDdkIsaUJBQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRTtvQkFDN0IsT0FBTyxFQUFFLFVBQUMsSUFBSTt3QkFDVix3QkFBd0I7d0JBQ3hCLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUM1QyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDbkQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ3pELElBQUksTUFBTTs0QkFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQzVCLENBQUM7b0JBQ0QsSUFBSSxFQUFFLFVBQUMsR0FBRzt3QkFDTixlQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM5QixDQUFDO2lCQUNKLENBQUMsQ0FBQztZQUNQLENBQUM7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUFBLGlCQXdCQztRQXZCRyxJQUFJLFFBQVEsR0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0QsSUFBSSxRQUFRLElBQUksU0FBUyxJQUFJLFFBQVEsSUFBSSxJQUFJLElBQUksUUFBUSxJQUFJLEVBQUUsRUFBRTtZQUM3RCxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUNkLElBQUksRUFBRSxXQUFXO2dCQUNqQixPQUFPLEVBQUUsVUFBQyxHQUFHO29CQUNULEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7d0JBQzdELEVBQUUsRUFBRTs0QkFDQSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQzdDLENBQUM7cUJBQ0osQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBQ0QsSUFBSSxFQUFFLFVBQUMsQ0FBQztvQkFDSixlQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUIsQ0FBQzthQUNKLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxJQUFJLFNBQVMsR0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFO2dCQUNuQyxFQUFFLEVBQUU7b0JBQ0EsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM3QyxDQUFDO2FBQ0osQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDSSxlQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUF4RWdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwRTVCO0lBQUQsZUFBQztDQTFFRCxBQTBFQyxDQTFFcUMsRUFBRSxDQUFDLFNBQVMsR0EwRWpEO2tCQTFFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyQXBpIGZyb20gJy4uL0FwaS9Vc2VyQXBpJztcclxuaW1wb3J0IFV0aWxzIGZyb20gJy4uL1V0aWxzL1V0aWxzJztcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuaW50ZXJmYWNlIEFjdGlvbiB7XHJcbiAgICBEbygpOiB2b2lkO1xyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51Q3RybCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgc2F2ZVVzZXJJbmZvKHVzZXJuYW1lOiBzdHJpbmcsIGF2YXRhclVybDogc3RyaW5nLCBhY3Rpb24/OiBBY3Rpb24pIHtcclxuICAgICAgICBVc2VyQXBpLkdldEJ5TmFtZSh1c2VybmFtZSwge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiAodXNlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1aWRcIiwgdXNlci5pZCk7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJuaWNrTmFtZVwiLCB1c2VyLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYXZhdGFyVXJsXCIsIHVzZXIuYXZhdGFyVXJsKTtcclxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24pIGFjdGlvbi5EbygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIC8vIOWksei0peaXtuihqOekuuacquaJvuWIsOeUqOaIt++8jOatpOaXtuWIm+W7uuS4gOS4quaWsOeUqOaIt1xyXG4gICAgICAgICAgICAgICAgVXNlckFwaS5BZGQodXNlcm5hbWUsIGF2YXRhclVybCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICh1c2VyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXIuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1aWRcIiwgdXNlci5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5pY2tOYW1lXCIsIHVzZXIubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF2YXRhclVybFwiLCB1c2VyLmF2YXRhclVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb24pIGFjdGlvbi5EbygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlscy5TaG93RXJyb3IoXCLnlKjmiLfliJvlu7rlpLHotKVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgbGV0IG5pY2tOYW1lOiBzdHJpbmcgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25pY2tOYW1lJyk7XHJcbiAgICAgICAgaWYgKG5pY2tOYW1lID09IHVuZGVmaW5lZCB8fCBuaWNrTmFtZSA9PSBudWxsIHx8IG5pY2tOYW1lID09IFwiXCIpIHtcclxuICAgICAgICAgICAgd3guZ2V0VXNlclByb2ZpbGUoe1xyXG4gICAgICAgICAgICAgICAgZGVzYzogXCLojrflj5bmgqjnmoTmmLXnp7Dlj4rlpLTlg49cIixcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVVc2VySW5mbyhyZXMudXNlckluZm8ubmlja05hbWUsIHJlcy51c2VySW5mby5hdmF0YXJVcmwsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRG86ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1haW5TZW5jZVwiLCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVXRpbHMuU2hvd0Vycm9yKGUuZXJyTXNnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGF2YXRhclVybDogc3RyaW5nID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdmF0YXJVcmwnKTtcclxuICAgICAgICAgICAgdGhpcy5zYXZlVXNlckluZm8obmlja05hbWUsIGF2YXRhclVybCwge1xyXG4gICAgICAgICAgICAgICAgRG86ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJNYWluU2VuY2VcIiwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBxdWl0R2FtZSgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5lbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaGFyZUdhbWUoKSB7XHJcbiAgICAgICAgVXRpbHMuU2hvd0luZm8oXCLmraPlnKjliqrlipvlvIDlj5HkuK0uLi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgbWVudVNjZW5lKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1lbnVTZW5jZVwiLCBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93UmFuaygpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJSYW5rU2VuY2VcIiwgbnVsbCk7XHJcbiAgICB9XHJcbiAgIFxyXG59XHJcbiJdfQ==