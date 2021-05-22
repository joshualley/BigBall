
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
        _this.velocity = new cc.Vec2(500, 500);
        _this.mass = 0;
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
        var maxRaduis = canvas.getChildByName("Player").getComponent(Player_1.default).raduis + 5;
        this.raduis = Math.random() * maxRaduis;
        this.raduis = this.raduis < 20 ? 20 : this.raduis;
        this.node.width = this.raduis * 2;
        this.node.height = this.raduis * 2;
        this.mass = this.raduis * this.raduis;
        // 设置碰撞检测器的半径
        var collider = this.node.getComponent(cc.CircleCollider);
        collider.radius = this.raduis;
        // 初始位置、速度、方向
        this.node.x = this.randomDir() * Math.random() * cc.winSize.width / 2 + this.raduis;
        this.node.y = this.randomDir() * Math.random() * cc.winSize.height / 2 - this.raduis;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxSb2xlc1xcQmFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFFeEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFpREM7UUE5Q0csWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUVwQixjQUFRLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxQyxVQUFJLEdBQVcsQ0FBQyxDQUFDOztJQTJDckIsQ0FBQztJQXhDRyx3QkFBUyxHQUFUO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCw2QkFBYyxHQUFkO1FBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxFQUFFLEdBQUcsYUFBYSxHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDakQsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFHLFVBQUMsR0FBRyxFQUFFLEdBQUc7WUFDNUIsSUFBRyxHQUFHO2dCQUFFLE9BQU87WUFDZixJQUFHLENBQUMsQ0FBQyxHQUFHLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFBRSxPQUFPO1lBQzFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHFCQUFNLEdBQU47UUFDSSxPQUFPO1FBQ1AsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQixJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxnQkFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxTQUFTLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3RDLGFBQWE7UUFDYixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekQsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLGFBQWE7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDL0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDeEQsQ0FBQztJQUVELHFCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBN0NEO1FBREMsUUFBUTt3Q0FDVztJQUVwQjtRQURDLFFBQVE7MENBQ2lDO0lBTHpCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FpRHhCO0lBQUQsV0FBQztDQWpERCxBQWlEQyxDQWpEaUMsRUFBRSxDQUFDLFNBQVMsR0FpRDdDO2tCQWpEb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcmFkdWlzOiBudW1iZXIgPSAxMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdmVsb2NpdHk6IGNjLlZlYzIgPSBuZXcgY2MuVmVjMig1MDAsIDUwMCk7XHJcbiAgICBtYXNzOiBudW1iZXIgPSAwO1xyXG4gICAgY29sb3JUeXBlOiBudW1iZXI7XHJcbiAgICBcclxuICAgIHJhbmRvbURpcigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNwcml0ZUZyYW1lKCkge1xyXG4gICAgICAgIGxldCBzcHJpdGUgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgdGhpcy5jb2xvclR5cGUgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDgpO1xyXG4gICAgICAgIGxldCBmbiA9ICdiYWxscy9iYWxsXycrIHRoaXMuY29sb3JUeXBlLnRvU3RyaW5nKClcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChmbiwgIChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZihlcnIpIHJldHVybjtcclxuICAgICAgICAgICAgaWYoIShyZXMgaW5zdGFuY2VvZiBjYy5UZXh0dXJlMkQpKSByZXR1cm47XHJcbiAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZShyZXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvLyDorr7nva7ljYrlvoRcclxuICAgICAgICBsZXQgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuICAgICAgICBsZXQgbWF4UmFkdWlzID0gY2FudmFzLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpLmdldENvbXBvbmVudChQbGF5ZXIpLnJhZHVpcyArIDU7XHJcbiAgICAgICAgdGhpcy5yYWR1aXMgPSBNYXRoLnJhbmRvbSgpICogbWF4UmFkdWlzO1xyXG4gICAgICAgIHRoaXMucmFkdWlzID0gdGhpcy5yYWR1aXMgPCAyMCA/IDIwIDogdGhpcy5yYWR1aXM7XHJcbiAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gdGhpcy5yYWR1aXMgKiAyO1xyXG4gICAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSB0aGlzLnJhZHVpcyAqIDI7XHJcbiAgICAgICAgdGhpcy5tYXNzID0gdGhpcy5yYWR1aXMgKiB0aGlzLnJhZHVpcztcclxuICAgICAgICAvLyDorr7nva7norDmkp7mo4DmtYvlmajnmoTljYrlvoRcclxuICAgICAgICBsZXQgY29sbGlkZXIgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNpcmNsZUNvbGxpZGVyKTtcclxuICAgICAgICBjb2xsaWRlci5yYWRpdXMgPSB0aGlzLnJhZHVpcztcclxuICAgICAgICAvLyDliJ3lp4vkvY3nva7jgIHpgJ/luqbjgIHmlrnlkJFcclxuICAgICAgICB0aGlzLm5vZGUueCA9IHRoaXMucmFuZG9tRGlyKCkqTWF0aC5yYW5kb20oKSpjYy53aW5TaXplLndpZHRoLzIgKyB0aGlzLnJhZHVpcztcclxuICAgICAgICB0aGlzLm5vZGUueSA9IHRoaXMucmFuZG9tRGlyKCkqTWF0aC5yYW5kb20oKSpjYy53aW5TaXplLmhlaWdodC8yIC0gdGhpcy5yYWR1aXM7XHJcbiAgICAgICAgdGhpcy5zZXRTcHJpdGVGcmFtZSgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMTYwO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkueCAqPSBNYXRoLnJhbmRvbSgpICogdGhpcy5yYW5kb21EaXIoKTtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5LnkgKj0gTWF0aC5yYW5kb20oKSAqIHRoaXMucmFuZG9tRGlyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMudmVsb2NpdHkueCAqIGR0O1xyXG4gICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMudmVsb2NpdHkueSAqIGR0O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==