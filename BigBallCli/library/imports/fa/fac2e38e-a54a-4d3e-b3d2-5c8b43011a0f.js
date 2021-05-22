"use strict";
cc._RF.push(module, 'fac2eOOpUpNPrPSXItDARoP', 'Player');
// Script/Roles/Player.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nameLabel = null;
        _this.massLabel = null;
        _this.raduis = 10;
        _this.velocity = new cc.Vec2(20, 20);
        // 限速因子
        _this.speedLimitFator = 2.5;
        // 记录最大重量
        _this.maxMass = 0;
        return _this;
    }
    Player.prototype.onLoad = function () {
        var nickName = cc.sys.localStorage.getItem("nickName");
        this.nameLabel.string = nickName;
        this.calculateProperty(this.raduis, 1);
        this.velocity = cc.v2((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20);
        // this.node.color = new cc.Color(255*Math.random(), 255*Math.random(), 255*Math.random());
    };
    Player.prototype.calculateProperty = function (raduis, colorType) {
        this.speedLimitFator = this.speedLimitFator <= 1 ? 1 : this.speedLimitFator - 1 / this.raduis;
        this.raduis = raduis;
        this.nameLabel.node.y = raduis + 15;
        this.colorType = colorType;
        this.setSpriteFrame();
        this.mass = raduis * raduis;
        if (this.mass > this.maxMass)
            this.maxMass = this.mass;
        this.massLabel.string = Math.round(this.mass).toString() + " kg";
        this.node.width = raduis * 2;
        this.node.height = raduis * 2;
        // 设置碰撞检测器的半径
        this.node.getComponent(cc.CircleCollider).radius = raduis;
    };
    Player.prototype.setSpriteFrame = function () {
        var sprite = this.node.getComponent(cc.Sprite);
        var fn = 'players/player' + this.colorType.toString();
        cc.log(this.colorType);
        cc.resources.load(fn, function (err, res) {
            if (err)
                return;
            if (!(res instanceof cc.Texture2D))
                return;
            sprite.spriteFrame = new cc.SpriteFrame(res);
        });
    };
    Player.prototype.update = function (dt) {
        this.node.x += this.velocity.x * dt;
        this.node.y += this.velocity.y * dt;
    };
    __decorate([
        property(cc.Label)
    ], Player.prototype, "nameLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Player.prototype, "massLabel", void 0);
    __decorate([
        property
    ], Player.prototype, "raduis", void 0);
    __decorate([
        property
    ], Player.prototype, "velocity", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

cc._RF.pop();