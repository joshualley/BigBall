
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Roles/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxSb2xlc1xcUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBc0RDO1FBcERHLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixZQUFNLEdBQVcsRUFBRSxDQUFDO1FBRXBCLGNBQVEsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBR3hDLE9BQU87UUFDUCxxQkFBZSxHQUFXLEdBQUcsQ0FBQztRQUM5QixTQUFTO1FBQ1QsYUFBTyxHQUFXLENBQUMsQ0FBQzs7SUF3Q3hCLENBQUM7SUF0Q0csdUJBQU0sR0FBTjtRQUNJLElBQUksUUFBUSxHQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLEdBQUcsQ0FBQyxHQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxHQUFHLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0RSwyRkFBMkY7SUFDL0YsQ0FBQztJQUVELGtDQUFpQixHQUFqQixVQUFrQixNQUFjLEVBQUUsU0FBaUI7UUFDL0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFBO1FBQzdGLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQTtRQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDOUIsYUFBYTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQzlELENBQUM7SUFFRCwrQkFBYyxHQUFkO1FBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksRUFBRSxHQUFHLGdCQUFnQixHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDcEQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFHLFVBQUMsR0FBRyxFQUFFLEdBQUc7WUFDNUIsSUFBRyxHQUFHO2dCQUFFLE9BQU87WUFDZixJQUFHLENBQUMsQ0FBQyxHQUFHLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFBRSxPQUFPO1lBQzFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHVCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBbkREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ1E7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDUTtJQUUzQjtRQURDLFFBQVE7MENBQ1c7SUFFcEI7UUFEQyxRQUFROzRDQUMrQjtJQVJ2QixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBc0QxQjtJQUFELGFBQUM7Q0F0REQsQUFzREMsQ0F0RG1DLEVBQUUsQ0FBQyxTQUFTLEdBc0QvQztrQkF0RG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbmFtZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBtYXNzTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcmFkdWlzOiBudW1iZXIgPSAxMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdmVsb2NpdHk6IGNjLlZlYzIgPSBuZXcgY2MuVmVjMigyMCwgMjApO1xyXG4gICAgbWFzczogbnVtYmVyO1xyXG4gICAgY29sb3JUeXBlOiBudW1iZXI7XHJcbiAgICAvLyDpmZDpgJ/lm6DlrZBcclxuICAgIHNwZWVkTGltaXRGYXRvcjogbnVtYmVyID0gMi41O1xyXG4gICAgLy8g6K6w5b2V5pyA5aSn6YeN6YePXHJcbiAgICBtYXhNYXNzOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBsZXQgbmlja05hbWU6IHN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5pY2tOYW1lXCIpO1xyXG4gICAgICAgIHRoaXMubmFtZUxhYmVsLnN0cmluZyA9IG5pY2tOYW1lO1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUHJvcGVydHkodGhpcy5yYWR1aXMsIDEpO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSBjYy52MigoTWF0aC5yYW5kb20oKS0wLjUpKjIwLCAoTWF0aC5yYW5kb20oKS0wLjUpKjIwKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1Kk1hdGgucmFuZG9tKCksIDI1NSpNYXRoLnJhbmRvbSgpLCAyNTUqTWF0aC5yYW5kb20oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlUHJvcGVydHkocmFkdWlzOiBudW1iZXIsIGNvbG9yVHlwZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zcGVlZExpbWl0RmF0b3IgPSB0aGlzLnNwZWVkTGltaXRGYXRvciA8PSAxID8gMSA6IHRoaXMuc3BlZWRMaW1pdEZhdG9yIC0gMSAvIHRoaXMucmFkdWlzXHJcbiAgICAgICAgdGhpcy5yYWR1aXMgPSByYWR1aXM7XHJcbiAgICAgICAgdGhpcy5uYW1lTGFiZWwubm9kZS55ID0gcmFkdWlzICsgMTU7XHJcbiAgICAgICAgdGhpcy5jb2xvclR5cGUgPSBjb2xvclR5cGU7XHJcbiAgICAgICAgdGhpcy5zZXRTcHJpdGVGcmFtZSgpO1xyXG4gICAgICAgIHRoaXMubWFzcyA9IHJhZHVpcyAqIHJhZHVpcztcclxuICAgICAgICBpZiAodGhpcy5tYXNzID4gdGhpcy5tYXhNYXNzKSB0aGlzLm1heE1hc3MgPSB0aGlzLm1hc3M7XHJcbiAgICAgICAgdGhpcy5tYXNzTGFiZWwuc3RyaW5nID0gTWF0aC5yb3VuZCh0aGlzLm1hc3MpLnRvU3RyaW5nKCkgKyBcIiBrZ1wiXHJcbiAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gcmFkdWlzICogMjtcclxuICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gcmFkdWlzICogMjtcclxuICAgICAgICAvLyDorr7nva7norDmkp7mo4DmtYvlmajnmoTljYrlvoRcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNpcmNsZUNvbGxpZGVyKS5yYWRpdXMgPSByYWR1aXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3ByaXRlRnJhbWUoKSB7XHJcbiAgICAgICAgbGV0IHNwcml0ZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBsZXQgZm4gPSAncGxheWVycy9wbGF5ZXInKyB0aGlzLmNvbG9yVHlwZS50b1N0cmluZygpXHJcbiAgICAgICAgY2MubG9nKHRoaXMuY29sb3JUeXBlKTtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChmbiwgIChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZihlcnIpIHJldHVybjtcclxuICAgICAgICAgICAgaWYoIShyZXMgaW5zdGFuY2VvZiBjYy5UZXh0dXJlMkQpKSByZXR1cm47XHJcbiAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZShyZXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMudmVsb2NpdHkueCAqIGR0O1xyXG4gICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMudmVsb2NpdHkueSAqIGR0O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==