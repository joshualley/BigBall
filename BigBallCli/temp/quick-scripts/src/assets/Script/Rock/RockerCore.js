"use strict";
cc._RF.push(module, 'f800d+V67pMnanWbaU43ojd', 'RockerCore');
// Script/Rock/RockerCore.ts

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
var Player_1 = require("../Roles/Player");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RockerCore = /** @class */ (function (_super) {
    __extends(RockerCore, _super);
    function RockerCore() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        // 衰减系数
        _this.decayFactor = 0.3;
        _this.maxHeight = 1600;
        _this.maxWidth = 2880;
        _this.step = 2;
        return _this;
    }
    RockerCore.prototype.update = function (dt) {
        if (this.node.x == 0 && this.node.y == 0) {
            this.player.velocity.x *= this.decayFactor;
            this.player.velocity.y *= this.decayFactor;
        }
        else {
            // left side
            if (this.player.node.x - this.player.raduis <= -this.maxWidth) {
                this.player.velocity.x = 0;
                this.player.node.x += this.step;
            }
            // right side
            else if (this.player.node.x + this.player.raduis >= this.maxWidth) {
                this.player.velocity.x = 0;
                this.player.node.x -= this.step;
            }
            else {
                this.player.velocity.x = this.node.x * this.player.speedLimitFator;
            }
            // top side
            if (this.player.node.y + this.player.raduis >= this.maxHeight) {
                this.player.velocity.y = 0;
                this.player.node.y -= this.step;
            }
            // bottom side
            else if (this.player.node.y - this.player.raduis <= -this.maxHeight) {
                this.player.velocity.y = 0;
                this.player.node.y += this.step;
            }
            else {
                this.player.velocity.y = this.node.y * this.player.speedLimitFator;
            }
        }
    };
    __decorate([
        property(Player_1.default)
    ], RockerCore.prototype, "player", void 0);
    RockerCore = __decorate([
        ccclass
    ], RockerCore);
    return RockerCore;
}(cc.Component));
exports.default = RockerCore;

cc._RF.pop();