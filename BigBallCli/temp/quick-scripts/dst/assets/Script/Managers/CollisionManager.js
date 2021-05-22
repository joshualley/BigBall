
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
    CollisionManager.prototype.gameOver = function (s) {
        // 更新用户的记录
        var uid = cc.sys.localStorage.getItem("uid");
        if (uid == undefined || uid == null || uid == "")
            uid = 0;
        var maxSeconds = this.gameManager.getComponent(GameManager_1.default).maxSeconds;
        RecordApi_1.default.GetByUId(uid, {
            success: function (record) {
                var w = record.weight < s.maxMass ? s.maxMass : record.weight;
                var t = record.maxTime < maxSeconds ? maxSeconds : record.maxTime;
                RecordApi_1.default.Update(record.id, uid, w, t, {
                    success: function (record) { },
                    fail: function (err) {
                        Utils_1.default.ShowError("刷新记录失败");
                    }
                });
            },
            fail: function (err) {
                RecordApi_1.default.Add(uid, s.maxMass, maxSeconds, {
                    success: function (record) { },
                    fail: function (err) {
                        Utils_1.default.ShowError("保存记录失败");
                    }
                });
            }
        });
        cc.director.loadScene("RankSence", null);
    };
    CollisionManager.prototype.onCollisionEnter = function (other, self) {
        // if (self.tag == BoxColliderType.Ball && other.tag == BoxColliderType.Ball) {
        //     let s = self.node.getComponent(Ball);
        //     let o = other.node.getComponent(Ball);
        //     s.velocity = cc.v2(o.velocity.y, o.velocity.x)
        // } else if(self.tag == BoxColliderType.Ball && other.tag == BoxColliderType.Player) {
        // } else 
        if (self.tag == BoxColliderType.Player && other.tag == BoxColliderType.Ball) {
            var s = self.node.getComponent(Player_1.default);
            var o = other.node.getComponent(Ball_1.default);
            var similar = s.colorType == o.colorType;
            if (!similar && s.raduis - o.raduis <= 3) {
                this.gameOver(s);
                return;
            }
            var newRadius = !similar ? s.raduis - o.raduis : s.raduis + o.raduis;
            // 重新生成半径及颜色
            s.calculateProperty(newRadius, o.colorType);
            // 移除小球
            var canvas = cc.find("Canvas");
            canvas.removeChild(o.node, true);
            this.gameManager.getComponent(GameManager_1.default).ballNum--;
        }
        else if (self.tag == BoxColliderType.Ball && other.tag == BoxColliderType.Wall) {
            var s = self.node.getComponent(Ball_1.default);
            s.velocity = cc.v2(-s.velocity.x, -s.velocity.y);
        }
        // else if(self.tag == BoxColliderType.Player && other.tag == BoxColliderType.Wall) {
        // let s = self.node.getComponent(Player);
        // let f = s.speedLimitFator;
        // s.speedLimitFator = -2;
        // setTimeout(() => {
        //     s.speedLimitFator = f;
        // }, 1000);
        // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2Vyc1xcQ29sbGlzaW9uTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBZ0M7QUFDaEMsMENBQW9DO0FBQ3BDLDZDQUF1QztBQUN2Qyw4Q0FBeUM7QUFDekMsd0NBQW1DO0FBRTdCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLElBQUssZUFJSjtBQUpELFdBQUssZUFBZTtJQUNoQixxREFBUSxDQUFBO0lBQ1IseURBQVUsQ0FBQTtJQUNWLHFEQUFRLENBQUE7QUFDWixDQUFDLEVBSkksZUFBZSxLQUFmLGVBQWUsUUFJbkI7QUFHRDtJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQThFQztRQTNFRyxpQkFBVyxHQUFZLElBQUksQ0FBQzs7SUEyRWhDLENBQUM7SUF6RUcsbUNBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JELENBQUM7SUFFRCxvQ0FBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdEQsQ0FBQztJQUVELG1DQUFRLEdBQVIsVUFBUyxDQUFTO1FBQ2QsVUFBVTtRQUNWLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFJLEdBQUcsSUFBSSxTQUFTLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksRUFBRTtZQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDMUQsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMscUJBQVcsQ0FBQyxD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LENBQUMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxFQUFFO1lBQzdFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRDtRQUNELHFGQUFxRjtRQUNqRiwwQ0FBMEM7UUFDMUMsNkJBQTZCO1FBQzdCLDBCQUEwQjtRQUMxQixxQkFBcUI7UUFDckIsNkJBQTZCO1FBQzdCLFlBQVk7UUFDaEIsSUFBSTtJQUNSLENBQUM7SUExRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFDVTtJQUhYLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBOEVwQztJQUFELHVCQUFDO0NBOUVELEFBOEVDLENBOUU2QyxFQUFFLENBQUMsU0FBUyxHQThFekQ7a0JBOUVvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFsbCBmcm9tICcuLi9Sb2xlcy9CYWxsJ1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL1JvbGVzL1BsYXllcidcclxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gJy4vR2FtZU1hbmFnZXInXHJcbmltcG9ydCBSZWNvcmRBcGkgZnJvbSAnLi4vQXBpL1JlY29yZEFwaSc7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuLi9VdGlscy9VdGlscyc7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmVudW0gQm94Q29sbGlkZXJUeXBlIHtcclxuICAgIEJhbGwgPSAwLFxyXG4gICAgUGxheWVyID0gMSxcclxuICAgIFdhbGwgPSAyXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpc2lvbk1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2FtZU1hbmFnZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZU92ZXIoczogUGxheWVyKSB7XHJcbiAgICAgICAgLy8g5pu05paw55So5oi355qE6K6w5b2VXHJcbiAgICAgICAgbGV0IHVpZCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVpZFwiKTtcclxuICAgICAgICBpZiAodWlkID09IHVuZGVmaW5lZCB8fCB1aWQgPT0gbnVsbCB8fCB1aWQgPT0gXCJcIikgdWlkID0gMDtcclxuICAgICAgICBsZXQgbWF4U2Vjb25kcyA9IHRoaXMuZ2FtZU1hbmFnZXIuZ2V0Q29tcG9uZW50KEdhbWVNYW5hZ2VyKS5tYXhTZWNvbmRzO1xyXG4gICAgICAgIFJlY29yZEFwaS5HZXRCeVVJZCh1aWQsIHtcclxuICAgICAgICAgICAgc3VjY2VzczogKHJlY29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHc6IG51bWJlciA9IHJlY29yZC53ZWlnaHQgPCBzLm1heE1hc3MgPyBzLm1heE1hc3MgOiByZWNvcmQud2VpZ2h0O1xyXG4gICAgICAgICAgICAgICAgbGV0IHQ6IG51bWJlciA9IHJlY29yZC5tYXhUaW1lIDwgbWF4U2Vjb25kcyA/IG1heFNlY29uZHMgOiByZWNvcmQubWF4VGltZTtcclxuICAgICAgICAgICAgICAgIFJlY29yZEFwaS5VcGRhdGUocmVjb3JkLmlkLCB1aWQsIHcsIHQsIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVjb3JkKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxzLlNob3dFcnJvcihcIuWIt+aWsOiusOW9leWksei0pVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBSZWNvcmRBcGkuQWRkKHVpZCwgcy5tYXhNYXNzLCBtYXhTZWNvbmRzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlY29yZCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlscy5TaG93RXJyb3IoXCLkv53lrZjorrDlvZXlpLHotKVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiUmFua1NlbmNlXCIsIG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXI6IGNjLkJveENvbGxpZGVyLCBzZWxmOiBjYy5Cb3hDb2xsaWRlcikge1xyXG4gICAgICAgIC8vIGlmIChzZWxmLnRhZyA9PSBCb3hDb2xsaWRlclR5cGUuQmFsbCAmJiBvdGhlci50YWcgPT0gQm94Q29sbGlkZXJUeXBlLkJhbGwpIHtcclxuICAgICAgICAvLyAgICAgbGV0IHMgPSBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KEJhbGwpO1xyXG4gICAgICAgIC8vICAgICBsZXQgbyA9IG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KEJhbGwpO1xyXG4gICAgICAgIC8vICAgICBzLnZlbG9jaXR5ID0gY2MudjIoby52ZWxvY2l0eS55LCBvLnZlbG9jaXR5LngpXHJcbiAgICAgICAgLy8gfSBlbHNlIGlmKHNlbGYudGFnID09IEJveENvbGxpZGVyVHlwZS5CYWxsICYmIG90aGVyLnRhZyA9PSBCb3hDb2xsaWRlclR5cGUuUGxheWVyKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vIH0gZWxzZSBcclxuICAgICAgICBpZihzZWxmLnRhZyA9PSBCb3hDb2xsaWRlclR5cGUuUGxheWVyICYmIG90aGVyLnRhZyA9PSBCb3hDb2xsaWRlclR5cGUuQmFsbCkge1xyXG4gICAgICAgICAgICBsZXQgcyA9IHNlbGYubm9kZS5nZXRDb21wb25lbnQoUGxheWVyKTtcclxuICAgICAgICAgICAgbGV0IG8gPSBvdGhlci5ub2RlLmdldENvbXBvbmVudChCYWxsKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBzaW1pbGFyID0gcy5jb2xvclR5cGUgPT0gby5jb2xvclR5cGU7XHJcbiAgICAgICAgICAgIGlmICghc2ltaWxhciAmJiBzLnJhZHVpcyAtIG8ucmFkdWlzIDw9IDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIocyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IG5ld1JhZGl1cyA9ICFzaW1pbGFyID8gcy5yYWR1aXMgLSBvLnJhZHVpcyA6IHMucmFkdWlzICsgby5yYWR1aXM7XHJcbiAgICAgICAgICAgIC8vIOmHjeaWsOeUn+aIkOWNiuW+hOWPiuminOiJslxyXG4gICAgICAgICAgICBzLmNhbGN1bGF0ZVByb3BlcnR5KG5ld1JhZGl1cywgby5jb2xvclR5cGUpO1xyXG4gICAgICAgICAgICAvLyDnp7vpmaTlsI/nkINcclxuICAgICAgICAgICAgbGV0IGNhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIik7XHJcbiAgICAgICAgICAgIGNhbnZhcy5yZW1vdmVDaGlsZChvLm5vZGUsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLmdldENvbXBvbmVudChHYW1lTWFuYWdlcikuYmFsbE51bS0tO1xyXG4gICAgICAgIH0gZWxzZSBpZihzZWxmLnRhZyA9PSBCb3hDb2xsaWRlclR5cGUuQmFsbCAmJiBvdGhlci50YWcgPT0gQm94Q29sbGlkZXJUeXBlLldhbGwpIHtcclxuICAgICAgICAgICAgbGV0IHMgPSBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KEJhbGwpO1xyXG4gICAgICAgICAgICBzLnZlbG9jaXR5ID0gY2MudjIoLXMudmVsb2NpdHkueCwgLXMudmVsb2NpdHkueSk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICAvLyBlbHNlIGlmKHNlbGYudGFnID09IEJveENvbGxpZGVyVHlwZS5QbGF5ZXIgJiYgb3RoZXIudGFnID09IEJveENvbGxpZGVyVHlwZS5XYWxsKSB7XHJcbiAgICAgICAgICAgIC8vIGxldCBzID0gc2VsZi5ub2RlLmdldENvbXBvbmVudChQbGF5ZXIpO1xyXG4gICAgICAgICAgICAvLyBsZXQgZiA9IHMuc3BlZWRMaW1pdEZhdG9yO1xyXG4gICAgICAgICAgICAvLyBzLnNwZWVkTGltaXRGYXRvciA9IC0yO1xyXG4gICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHMuc3BlZWRMaW1pdEZhdG9yID0gZjtcclxuICAgICAgICAgICAgLy8gfSwgMTAwMCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==