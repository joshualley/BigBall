
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Managers/CollisionManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2Vyc1xcQ29sbGlzaW9uTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBZ0M7QUFDaEMsMENBQW9DO0FBQ3BDLDZDQUF1QztBQUN2Qyw4Q0FBeUM7QUFDekMsd0NBQW1DO0FBRTdCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLElBQUssZUFJSjtBQUpELFdBQUssZUFBZTtJQUNoQixxREFBUSxDQUFBO0lBQ1IseURBQVUsQ0FBQTtJQUNWLHFEQUFRLENBQUE7QUFDWixDQUFDLEVBSkksZUFBZSxLQUFmLGVBQWUsUUFJbkI7QUFHRDtJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQXlFQztRQXRFRyxpQkFBVyxHQUFZLElBQUksQ0FBQzs7SUFzRWhDLENBQUM7SUFwRUcsbUNBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JELENBQUM7SUFFRCxvQ0FBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdEQsQ0FBQztJQUVELDJDQUFnQixHQUFoQixVQUFpQixLQUFxQixFQUFFLElBQW9CO1FBQ3hELElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksRUFBRTtZQUN2RSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQztZ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LCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFsbCBmcm9tICcuLi9Sb2xlcy9CYWxsJ1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL1JvbGVzL1BsYXllcidcclxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gJy4vR2FtZU1hbmFnZXInXHJcbmltcG9ydCBSZWNvcmRBcGkgZnJvbSAnLi4vQXBpL1JlY29yZEFwaSc7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuLi9VdGlscy9VdGlscyc7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmVudW0gQm94Q29sbGlkZXJUeXBlIHtcclxuICAgIEJhbGwgPSAwLFxyXG4gICAgUGxheWVyID0gMSxcclxuICAgIFdhbGwgPSAyXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpc2lvbk1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2FtZU1hbmFnZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlcjogY2MuQm94Q29sbGlkZXIsIHNlbGY6IGNjLkJveENvbGxpZGVyKSB7XHJcbiAgICAgICAgaWYgKHNlbGYudGFnID09IEJveENvbGxpZGVyVHlwZS5CYWxsICYmIG90aGVyLnRhZyA9PSBCb3hDb2xsaWRlclR5cGUuQmFsbCkge1xyXG4gICAgICAgICAgICBsZXQgcyA9IHNlbGYubm9kZS5nZXRDb21wb25lbnQoQmFsbCk7XHJcbiAgICAgICAgICAgIGxldCBvID0gb3RoZXIubm9kZS5nZXRDb21wb25lbnQoQmFsbCk7XHJcbiAgICAgICAgICAgIHMudmVsb2NpdHkgPSBjYy52MihvLnZlbG9jaXR5LnksIG8udmVsb2NpdHkueClcclxuICAgICAgICB9IGVsc2UgaWYoc2VsZi50YWcgPT0gQm94Q29sbGlkZXJUeXBlLkJhbGwgJiYgb3RoZXIudGFnID09IEJveENvbGxpZGVyVHlwZS5QbGF5ZXIpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIGlmKHNlbGYudGFnID09IEJveENvbGxpZGVyVHlwZS5QbGF5ZXIgJiYgb3RoZXIudGFnID09IEJveENvbGxpZGVyVHlwZS5CYWxsKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgcyA9IHNlbGYubm9kZS5nZXRDb21wb25lbnQoUGxheWVyKTtcclxuICAgICAgICAgICAgbGV0IG8gPSBvdGhlci5ub2RlLmdldENvbXBvbmVudChCYWxsKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBzaW1pbGFyID0gcy5jb2xvclR5cGUgPT0gby5jb2xvclR5cGU7XHJcbiAgICAgICAgICAgIGlmICghc2ltaWxhciAmJiBzLm1hc3MgLSBvLm1hc3MgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8g5pu05paw55So5oi355qE6K6w5b2VXHJcbiAgICAgICAgICAgICAgICBsZXQgdWlkID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidWlkXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVpZCA9PSB1bmRlZmluZWQgfHwgdWlkID09IG51bGwgfHwgdWlkID09IFwiXCIpIHVpZCA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWF4U2Vjb25kcyA9IHRoaXMuZ2FtZU1hbmFnZXIuZ2V0Q29tcG9uZW50KEdhbWVNYW5hZ2VyKS5tYXhTZWNvbmRzO1xyXG4gICAgICAgICAgICAgICAgUmVjb3JkQXBpLkdldEJ5VUlkKHVpZCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZWNvcmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHc6IG51bWJlciA9IHJlY29yZC53ZWlnaHQgPCBzLm1heE1hc3MgPyBzLm1heE1hc3MgOiByZWNvcmQud2VpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdDogbnVtYmVyID0gcmVjb3JkLm1heFRpbWUgPCBtYXhTZWNvbmRzID8gbWF4U2Vjb25kcyA6IHJlY29yZC5tYXhUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWNvcmRBcGkuVXBkYXRlKHJlY29yZC5pZCwgdWlkLCB3LCB0LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVjb3JkKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVdGlscy5TaG93RXJyb3IoXCLliLfmlrDorrDlvZXlpLHotKVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlY29yZEFwaS5BZGQodWlkLCBzLm1heE1hc3MsIG1heFNlY29uZHMsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZWNvcmQpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbDogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxzLlNob3dFcnJvcihcIuS/neWtmOiusOW9leWksei0pVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiUmFua1NlbmNlXCIsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBuZXdSYWRpdXMgPSAhc2ltaWxhciA/IHMucmFkdWlzIC0gby5yYWR1aXMgOiBzLnJhZHVpcyArIG8ucmFkdWlzO1xyXG4gICAgICAgICAgICAvLyDph43mlrDnlJ/miJDljYrlvoTlj4rpopzoibJcclxuICAgICAgICAgICAgcy5jYWxjdWxhdGVQcm9wZXJ0eShuZXdSYWRpdXMsIG8uY29sb3JUeXBlKTtcclxuICAgICAgICAgICAgLy8g56e76Zmk5bCP55CDXHJcbiAgICAgICAgICAgIGxldCBjYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xyXG4gICAgICAgICAgICBjYW52YXMucmVtb3ZlQ2hpbGQoby5ub2RlLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lTWFuYWdlci5nZXRDb21wb25lbnQoR2FtZU1hbmFnZXIpLmJhbGxOdW0tLTtcclxuICAgICAgICB9IGVsc2UgaWYoc2VsZi50YWcgPT0gQm94Q29sbGlkZXJUeXBlLkJhbGwgJiYgb3RoZXIudGFnID09IEJveENvbGxpZGVyVHlwZS5XYWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBzID0gc2VsZi5ub2RlLmdldENvbXBvbmVudChCYWxsKTtcclxuICAgICAgICAgICAgcy52ZWxvY2l0eSA9IGNjLnYyKC1zLnZlbG9jaXR5LngsIC1zLnZlbG9jaXR5LnkpO1xyXG4gICAgICAgIH0gZWxzZSBpZihzZWxmLnRhZyA9PSBCb3hDb2xsaWRlclR5cGUuUGxheWVyICYmIG90aGVyLnRhZyA9PSBCb3hDb2xsaWRlclR5cGUuV2FsbCkge1xyXG4gICAgICAgICAgICAvLyBsZXQgcyA9IHNlbGYubm9kZS5nZXRDb21wb25lbnQoUGxheWVyKTtcclxuICAgICAgICAgICAgLy8gbGV0IGYgPSBzLnNwZWVkTGltaXRGYXRvcjtcclxuICAgICAgICAgICAgLy8gcy5zcGVlZExpbWl0RmF0b3IgPSAtMjtcclxuICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBzLnNwZWVkTGltaXRGYXRvciA9IGY7XHJcbiAgICAgICAgICAgIC8vIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=