"use strict";
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