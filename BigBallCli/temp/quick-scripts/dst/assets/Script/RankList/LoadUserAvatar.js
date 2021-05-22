
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/RankList/LoadUserAvatar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ac4b9YuUxJF058ARpjtx+LI', 'LoadUserAvatar');
// Script/RankList/LoadUserAvatar.ts

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
var RankApi_1 = require("../Api/RankApi");
var Utils_1 = require("../Utils/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadUserAvatar = /** @class */ (function (_super) {
    __extends(LoadUserAvatar, _super);
    function LoadUserAvatar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.avatar = null;
        _this.weight = null;
        _this.rank = null;
        return _this;
    }
    LoadUserAvatar.prototype.onLoad = function () {
        var _this = this;
        // 加载用户头像
        var avatarUrl = cc.sys.localStorage.getItem("avatarUrl");
        var uid = cc.sys.localStorage.getItem("uid");
        if (uid == undefined || uid == null || uid == "")
            uid = 0;
        var that = this;
        cc.loader.load({ url: avatarUrl, type: 'png' }, function (err, img) {
            if (err)
                return;
            var avatarImg = new cc.SpriteFrame(img);
            that.avatar.spriteFrame = avatarImg;
        });
        // 加载用户排名及重量
        setTimeout(function () {
            RankApi_1.default.GetUserOrder(uid, {
                success: function (ranks) {
                    _this.rank.string = ranks[0].seq.toString();
                    _this.weight.string = ranks[0].weight.toString();
                },
                fail: function (err) {
                    Utils_1.default.ShowError("未能查询到该用户的排名！");
                }
            });
        }, 300);
    };
    __decorate([
        property(cc.Sprite)
    ], LoadUserAvatar.prototype, "avatar", void 0);
    __decorate([
        property(cc.Label)
    ], LoadUserAvatar.prototype, "weight", void 0);
    __decorate([
        property(cc.Label)
    ], LoadUserAvatar.prototype, "rank", void 0);
    LoadUserAvatar = __decorate([
        ccclass
    ], LoadUserAvatar);
    return LoadUserAvatar;
}(cc.Component));
exports.default = LoadUserAvatar;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxSYW5rTGlzdFxcTG9hZFVzZXJBdmF0YXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQXFDO0FBQ3JDLHdDQUFtQztBQUU3QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQWtDQztRQS9CRyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsVUFBSSxHQUFhLElBQUksQ0FBQzs7SUEyQjFCLENBQUM7SUF6QkcsK0JBQU0sR0FBTjtRQUFBLGlCQXVCQztRQXRCRyxTQUFTO1FBQ1QsSUFBSSxTQUFTLEdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pFLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFJLEdBQUcsSUFBSSxTQUFTLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksRUFBRTtZQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDMUQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsVUFBUyxHQUFHLEVBQUUsR0FBRztZQUM3RCxJQUFHLEdBQUc7Z0JBQUUsT0FBTztZQUNmLElBQUksU0FBUyxHQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxZQUFZO1FBQ1osVUFBVSxDQUFDO1lBQ1AsaUJBQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUN0QixPQUFPLEVBQUUsVUFBQyxLQUFLO29CQUNYLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQzNDLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3BELENBQUM7Z0JBQ0QsSUFBSSxFQUFFLFVBQUMsR0FBRztvQkFDTixlQUFLLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQTdCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNLO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ0s7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDRztJQVBMLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FrQ2xDO0lBQUQscUJBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQzJDLEVBQUUsQ0FBQyxTQUFTLEdBa0N2RDtrQkFsQ29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmFua0FwaSBmcm9tICcuLi9BcGkvUmFua0FwaSc7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuLi9VdGlscy9VdGlscyc7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRVc2VyQXZhdGFyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgYXZhdGFyOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgd2VpZ2h0OiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICByYW5rOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvLyDliqDovb3nlKjmiLflpLTlg49cclxuICAgICAgICBsZXQgYXZhdGFyVXJsOiBzdHJpbmcgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdmF0YXJVcmxcIik7XHJcbiAgICAgICAgbGV0IHVpZCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVpZFwiKTtcclxuICAgICAgICBpZiAodWlkID09IHVuZGVmaW5lZCB8fCB1aWQgPT0gbnVsbCB8fCB1aWQgPT0gXCJcIikgdWlkID0gMDtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWQoeyB1cmw6IGF2YXRhclVybCwgdHlwZTogJ3BuZycgfSwgZnVuY3Rpb24oZXJyLCBpbWcpIHtcclxuICAgICAgICAgICAgaWYoZXJyKSByZXR1cm47XHJcbiAgICAgICAgICAgIHZhciBhdmF0YXJJbWcgID0gbmV3IGNjLlNwcml0ZUZyYW1lKGltZyk7XHJcbiAgICAgICAgICAgIHRoYXQuYXZhdGFyLnNwcml0ZUZyYW1lID0gYXZhdGFySW1nO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIOWKoOi9veeUqOaIt+aOkuWQjeWPiumHjemHj1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBSYW5rQXBpLkdldFVzZXJPcmRlcih1aWQsIHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyYW5rcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFuay5zdHJpbmcgPSByYW5rc1swXS5zZXEudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlaWdodC5zdHJpbmcgPSByYW5rc1swXS53ZWlnaHQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVXRpbHMuU2hvd0Vycm9yKFwi5pyq6IO95p+l6K+i5Yiw6K+l55So5oi355qE5o6S5ZCN77yBXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=