
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Roles/Ball.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4a0e9aA3zdE0K7JjvPxpOdM', 'Ball');
// Script/Roles/Ball.ts

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
var Player_1 = require("./Player");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.raduis = 10;
        _this.velocity = new cc.Vec2(1000, 1000);
        _this.mass = 0;
        _this.maxHeight = 1600;
        _this.maxWidth = 2880;
        return _this;
    }
    Ball.prototype.randomDir = function () {
        return Math.random() > 0.5 ? 1 : -1;
    };
    Ball.prototype.setSpriteFrame = function () {
        var sprite = this.node.getComponent(cc.Sprite);
        this.colorType = Math.ceil(Math.random() * 8);
        var fn = 'balls/ball_' + this.colorType.toString();
        cc.resources.load(fn, function (err, res) {
            if (err)
                return;
            if (!(res instanceof cc.Texture2D))
                return;
            sprite.spriteFrame = new cc.SpriteFrame(res);
        });
    };
    Ball.prototype.onLoad = function () {
        // 设置半径
        var canvas = cc.find("Canvas");
        var player = canvas.getChildByName("Player").getComponent(Player_1.default);
        var maxRaduis = player.raduis + 5;
        this.raduis = Math.random() * maxRaduis;
        this.raduis = this.raduis < 20 ? 20 : this.raduis;
        this.node.width = this.raduis * 2;
        this.node.height = this.raduis * 2;
        this.mass = this.raduis * this.raduis;
        // 设置碰撞检测器的半径
        var collider = this.node.getComponent(cc.CircleCollider);
        collider.radius = this.raduis;
        // 初始位置、速度、方向
        var x;
        var y;
        do {
            x = this.randomDir() * Math.random() * this.maxWidth + this.raduis - 200;
            y = this.randomDir() * Math.random() * this.maxHeight - this.raduis + 200;
        } while (Math.abs(player.node.x - x) < player.raduis + this.raduis + 200 &&
            Math.abs(player.node.y - y) < player.raduis + this.raduis + 200);
        this.node.x = x;
        this.node.y = y;
        this.setSpriteFrame();
        this.node.opacity = 160;
        this.velocity.x *= Math.random() * this.randomDir();
        this.velocity.y *= Math.random() * this.randomDir();
    };
    Ball.prototype.update = function (dt) {
        this.node.x += this.velocity.x * dt;
        this.node.y += this.velocity.y * dt;
    };
    __decorate([
        property
    ], Ball.prototype, "raduis", void 0);
    __decorate([
        property
    ], Ball.prototype, "velocity", void 0);
    Ball = __decorate([
        ccclass
    ], Ball);
    return Ball;
}(cc.Component));
exports.default = Ball;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxSb2xlc1xcQmFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFFeEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUE4REM7UUEzREcsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUVwQixjQUFRLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBR2pCLGVBQVMsR0FBVyxJQUFJLENBQUM7UUFDekIsY0FBUSxHQUFXLElBQUksQ0FBQzs7SUFvRDVCLENBQUM7SUFsREcsd0JBQVMsR0FBVDtRQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsNkJBQWMsR0FBZDtRQUNJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksRUFBRSxHQUFHLGFBQWEsR0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xELEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRyxVQUFDLEdBQUcsRUFBRSxHQUFHO1lBQzVCLElBQUcsR0FBRztnQkFBRSxPQUFPO1lBQ2YsSUFBRyxDQUFDLENBQUMsR0FBRyxZQUFZ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USxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUExREQ7UUFEQyxRQUFRO3dDQUNXO0lBRXBCO1FBREMsUUFBUTswQ0FDbUM7SUFMM0IsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQThEeEI7SUFBRCxXQUFDO0NBOURELEFBOERDLENBOURpQyxFQUFFLENBQUMsU0FBUyxHQThEN0M7a0JBOURvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICByYWR1aXM6IG51bWJlciA9IDEwO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICB2ZWxvY2l0eTogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKDEwMDAsIDEwMDApO1xyXG4gICAgbWFzczogbnVtYmVyID0gMDtcclxuICAgIGNvbG9yVHlwZTogbnVtYmVyO1xyXG5cclxuICAgIG1heEhlaWdodDogbnVtYmVyID0gMTYwMDtcclxuICAgIG1heFdpZHRoOiBudW1iZXIgPSAyODgwO1xyXG4gICAgXHJcbiAgICByYW5kb21EaXIoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTcHJpdGVGcmFtZSgpIHtcclxuICAgICAgICBsZXQgc3ByaXRlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHRoaXMuY29sb3JUeXBlID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiA4KTtcclxuICAgICAgICBsZXQgZm4gPSAnYmFsbHMvYmFsbF8nKyB0aGlzLmNvbG9yVHlwZS50b1N0cmluZygpO1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGZuLCAgKGVyciwgcmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVycikgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZighKHJlcyBpbnN0YW5jZW9mIGNjLlRleHR1cmUyRCkpIHJldHVybjtcclxuICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvLyDorr7nva7ljYrlvoRcclxuICAgICAgICBsZXQgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuICAgICAgICBsZXQgcGxheWVyID0gY2FudmFzLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpLmdldENvbXBvbmVudChQbGF5ZXIpO1xyXG4gICAgICAgIGxldCBtYXhSYWR1aXMgPSBwbGF5ZXIucmFkdWlzICsgNTtcclxuICAgICAgICB0aGlzLnJhZHVpcyA9IE1hdGgucmFuZG9tKCkgKiBtYXhSYWR1aXM7XHJcbiAgICAgICAgdGhpcy5yYWR1aXMgPSB0aGlzLnJhZHVpcyA8IDIwID8gMjAgOiB0aGlzLnJhZHVpcztcclxuICAgICAgICB0aGlzLm5vZGUud2lkdGggPSB0aGlzLnJhZHVpcyAqIDI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IHRoaXMucmFkdWlzICogMjtcclxuICAgICAgICB0aGlzLm1hc3MgPSB0aGlzLnJhZHVpcyAqIHRoaXMucmFkdWlzO1xyXG4gICAgICAgIC8vIOiuvue9rueisOaSnuajgOa1i+WZqOeahOWNiuW+hFxyXG4gICAgICAgIGxldCBjb2xsaWRlciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2lyY2xlQ29sbGlkZXIpO1xyXG4gICAgICAgIGNvbGxpZGVyLnJhZGl1cyA9IHRoaXMucmFkdWlzO1xyXG4gICAgICAgIC8vIOWIneWni+S9jee9ruOAgemAn+W6puOAgeaWueWQkVxyXG4gICAgICAgIGxldCB4OiBudW1iZXJcclxuICAgICAgICBsZXQgeTogbnVtYmVyO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgeCA9IHRoaXMucmFuZG9tRGlyKCkqTWF0aC5yYW5kb20oKSp0aGlzLm1heFdpZHRoICsgdGhpcy5yYWR1aXMgLSAyMDA7XHJcbiAgICAgICAgICAgIHkgPSB0aGlzLnJhbmRvbURpcigpKk1hdGgucmFuZG9tKCkqdGhpcy5tYXhIZWlnaHQgLSB0aGlzLnJhZHVpcyArIDIwMDtcclxuICAgICAgICB9d2hpbGUoXHJcbiAgICAgICAgICAgIE1hdGguYWJzKHBsYXllci5ub2RlLnggLSB4KSA8IHBsYXllci5yYWR1aXMgKyB0aGlzLnJhZHVpcyArIDIwMCAmJiBcclxuICAgICAgICAgICAgTWF0aC5hYnMocGxheWVyLm5vZGUueSAtIHkpIDwgcGxheWVyLnJhZHVpcyArIHRoaXMucmFkdWlzICsgMjAwXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLm5vZGUueCA9IHg7XHJcbiAgICAgICAgdGhpcy5ub2RlLnkgPSB5O1xyXG4gICAgICAgIHRoaXMuc2V0U3ByaXRlRnJhbWUoKTtcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDE2MDtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5LnggKj0gTWF0aC5yYW5kb20oKSAqIHRoaXMucmFuZG9tRGlyKCk7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ICo9IE1hdGgucmFuZG9tKCkgKiB0aGlzLnJhbmRvbURpcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnZlbG9jaXR5LnggKiBkdDtcclxuICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLnZlbG9jaXR5LnkgKiBkdDtcclxuICAgIH1cclxufVxyXG4iXX0=