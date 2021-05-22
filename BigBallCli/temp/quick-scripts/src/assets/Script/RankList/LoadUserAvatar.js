"use strict";
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