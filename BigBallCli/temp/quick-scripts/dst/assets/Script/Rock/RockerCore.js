
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Rock/RockerCore.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxSb2NrXFxSb2NrZXJDb3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUFxQztBQUUvQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTRDQztRQXpDRyxZQUFNLEdBQVcsSUFBSSxDQUFDO1FBRXRCLE9BQU87UUFDUCxpQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUMxQixlQUFTLEdBQVcsSUFBSSxDQUFDO1FBQ3pCLGNBQVEsR0FBVyxJQUFJLENBQUM7UUFDeEIsVUFBSSxHQUFXLENBQUMsQ0FBQzs7SUFtQ3JCLENBQUM7SUFqQ0csMkJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDOUM7YUFBTTtZQUNILFlBQVk7WUFDWixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ25DO1lBQ0QsYUFBYTtpQkFDUixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQzthQUNuQztpQkFBTTtnQkFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUM7YUFDdEU7WUFFRCxXQUFXO1lBQ1gsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbkM7WUFDRCxjQUFjO2lCQUNULElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbkM7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDO2FBQ3RFO1NBQ0o7SUFDTCxDQUFDO0lBdkNEO1FBREMsUUFBUSxDQUFDLGdCQUFNLENBQUM7OENBQ0s7SUFITCxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBNEM5QjtJQUFELGlCQUFDO0NBNUNELEFBNENDLENBNUN1QyxFQUFFLENBQUMsU0FBUyxHQTRDbkQ7a0JBNUNvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tICcuLi9Sb2xlcy9QbGF5ZXInO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb2NrZXJDb3JlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoUGxheWVyKVxyXG4gICAgcGxheWVyOiBQbGF5ZXIgPSBudWxsO1xyXG5cclxuICAgIC8vIOihsOWHj+ezu+aVsFxyXG4gICAgZGVjYXlGYWN0b3I6IG51bWJlciA9IDAuMztcclxuICAgIG1heEhlaWdodDogbnVtYmVyID0gMTYwMDtcclxuICAgIG1heFdpZHRoOiBudW1iZXIgPSAyODgwO1xyXG4gICAgc3RlcDogbnVtYmVyID0gMjtcclxuICAgIFxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUueCA9PSAwICYmIHRoaXMubm9kZS55ID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIudmVsb2NpdHkueCAqPSB0aGlzLmRlY2F5RmFjdG9yO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci52ZWxvY2l0eS55ICo9IHRoaXMuZGVjYXlGYWN0b3I7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gbGVmdCBzaWRlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5ub2RlLnggLSB0aGlzLnBsYXllci5yYWR1aXMgPD0gLXRoaXMubWF4V2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnZlbG9jaXR5LnggPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS54ICs9IHRoaXMuc3RlcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyByaWdodCBzaWRlXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucGxheWVyLm5vZGUueCArIHRoaXMucGxheWVyLnJhZHVpcyA+PSB0aGlzLm1heFdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci52ZWxvY2l0eS54ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm5vZGUueCAtPSB0aGlzLnN0ZXA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci52ZWxvY2l0eS54ID0gdGhpcy5ub2RlLnggKiB0aGlzLnBsYXllci5zcGVlZExpbWl0RmF0b3I7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHRvcCBzaWRlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5ub2RlLnkgKyB0aGlzLnBsYXllci5yYWR1aXMgPj0gdGhpcy5tYXhIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnZlbG9jaXR5LnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS55IC09IHRoaXMuc3RlcDtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgLy8gYm90dG9tIHNpZGVcclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wbGF5ZXIubm9kZS55IC0gdGhpcy5wbGF5ZXIucmFkdWlzIDw9IC10aGlzLm1heEhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIudmVsb2NpdHkueSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5ub2RlLnkgKz0gdGhpcy5zdGVwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIudmVsb2NpdHkueSA9IHRoaXMubm9kZS55ICogdGhpcy5wbGF5ZXIuc3BlZWRMaW1pdEZhdG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=