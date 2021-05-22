"use strict";
cc._RF.push(module, '8ccab0D0MZAopkyuTEvCESE', 'CollisionManager');
// Script/Managers/CollisionManager.ts

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
var Ball_1 = require("../Roles/Ball");
var Player_1 = require("../Roles/Player");
var GameManager_1 = require("./GameManager");
var RecordApi_1 = require("../Api/RecordApi");
var Utils_1 = require("../Utils/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BoxColliderType;
(function (BoxColliderType) {
    BoxColliderType[BoxColliderType["Ball"] = 0] = "Ball";
    BoxColliderType[BoxColliderType["Player"] = 1] = "Player";
    BoxColliderType[BoxColliderType["Wall"] = 2] = "Wall";
})(BoxColliderType || (BoxColliderType = {}));
var CollisionManager = /** @class */ (function (_super) {
    __extends(CollisionManager, _super);
    function CollisionManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameManager = null;
        return _this;
    }
    CollisionManager.prototype.onEnable = function () {
        cc.director.getCollisionManager().enabled = true;
    };
    CollisionManager.prototype.onDisable = function () {
        cc.director.getCollisionManager().enabled = false;
    };
    CollisionManager.prototype.onCollisionEnter = function (other, self) {
        if (self.tag == BoxColliderType.Ball && other.tag == BoxColliderType.Ball) {
            var s = self.node.getComponent(Ball_1.default);
            var o = other.node.getComponent(Ball_1.default);
            s.velocity = cc.v2(o.velocity.y, o.velocity.x);
        }
        else if (self.tag == BoxColliderType.Ball && other.tag == BoxColliderType.Player) {
        }
        else if (self.tag == BoxColliderType.Player && other.tag == BoxColliderType.Ball) {
            var s_1 = self.node.getComponent(Player_1.default);
            var o = other.node.getComponent(Ball_1.default);
            var similar = s_1.colorType == o.colorType;
            if (!similar && s_1.mass - o.mass <= 0) {
                // 更新用户的记录
                var uid_1 = cc.sys.localStorage.getItem("uid");
                if (uid_1 == undefined || uid_1 == null || uid_1 == "")
                    uid_1 = 0;
                var maxSeconds_1 = this.gameManager.getComponent(GameManager_1.default).maxSeconds;
                RecordApi_1.default.GetByUId(uid_1, {
                    success: function (record) {
                        var w = record.weight < s_1.maxMass ? s_1.maxMass : record.weight;
                        var t = record.maxTime < maxSeconds_1 ? maxSeconds_1 : record.maxTime;
                        RecordApi_1.default.Update(record.id, uid_1, w, t, {
                            success: function (record) { },
                            fail: function (err) {
                                Utils_1.default.ShowError("刷新记录失败");
                            }
                        });
                    },
                    fail: function (err) {
                        RecordApi_1.default.Add(uid_1, s_1.maxMass, maxSeconds_1, {
                            success: function (record) { },
                            fail: function (err) {
                                Utils_1.default.ShowError("保存记录失败");
                            }
                        });
                    }
                });
                cc.director.loadScene("RankSence", null);
                return;
            }
            var newRadius = !similar ? s_1.raduis - o.raduis : s_1.raduis + o.raduis;
            // 重新生成半径及颜色
            s_1.calculateProperty(newRadius, o.colorType);
            // 移除小球
            var canvas = cc.find("Canvas");
            canvas.removeChild(o.node, true);
            this.gameManager.getComponent(GameManager_1.default).ballNum--;
        }
        else if (self.tag == BoxColliderType.Ball && other.tag == BoxColliderType.Wall) {
            var s = self.node.getComponent(Ball_1.default);
            s.velocity = cc.v2(-s.velocity.x, -s.velocity.y);
        }
        else if (self.tag == BoxColliderType.Player && other.tag == BoxColliderType.Wall) {
            // let s = self.node.getComponent(Player);
            // let f = s.speedLimitFator;
            // s.speedLimitFator = -2;
            // setTimeout(() => {
            //     s.speedLimitFator = f;
            // }, 1000);
        }
    };
    __decorate([
        property(cc.Node)
    ], CollisionManager.prototype, "gameManager", void 0);
    CollisionManager = __decorate([
        ccclass
    ], CollisionManager);
    return CollisionManager;
}(cc.Component));
exports.default = CollisionManager;

cc._RF.pop();